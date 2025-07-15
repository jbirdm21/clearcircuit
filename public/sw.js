// Service Worker for ClearCircuit PWA
const CACHE_NAME = 'clearcircuit-v1';
const OFFLINE_URL = '/offline.html';

// Resources to cache immediately
const PRECACHE_URLS = [
  '/',
  '/products',
  '/about',
  '/how-it-works',
  '/safety-resources',
  '/offline.html',
  '/images/hero-bg.jpg',
  '/images/product-showcase.jpg',
  '/images/products/20-slot-kit.jpg',
  '/images/products/24-slot-kit.jpg',
  '/images/products/bulk-pack.jpg',
  '/images/products/custom-kit.jpg',
  '/next.svg',
  '/vercel.svg',
  '/manifest.json'
];

// Install event - cache resources
self.addEventListener('install', (event) => {
  console.log('Service Worker installing...');
  
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log('Caching app shell');
        return cache.addAll(PRECACHE_URLS);
      })
      .then(() => {
        // Skip waiting to activate immediately
        return self.skipWaiting();
      })
  );
});

// Activate event - clean up old caches
self.addEventListener('activate', (event) => {
  console.log('Service Worker activating...');
  
  event.waitUntil(
    caches.keys()
      .then((cacheNames) => {
        return Promise.all(
          cacheNames.map((cacheName) => {
            if (cacheName !== CACHE_NAME) {
              console.log('Deleting old cache:', cacheName);
              return caches.delete(cacheName);
            }
          })
        );
      })
      .then(() => {
        // Claim all clients immediately
        return self.clients.claim();
      })
  );
});

// Fetch event - serve from cache with network fallback
self.addEventListener('fetch', (event) => {
  // Skip non-GET requests
  if (event.request.method !== 'GET') {
    return;
  }

  // Skip external requests
  if (!event.request.url.startsWith(self.location.origin)) {
    return;
  }

  event.respondWith(
    caches.match(event.request)
      .then((cachedResponse) => {
        // Return cached version if available
        if (cachedResponse) {
          // Update cache in background for dynamic content
          if (isDynamicContent(event.request.url)) {
            updateCacheInBackground(event.request);
          }
          return cachedResponse;
        }

        // Not in cache, try network
        return fetch(event.request)
          .then((networkResponse) => {
            // Don't cache non-successful responses
            if (!networkResponse || networkResponse.status !== 200) {
              return networkResponse;
            }

            // Cache successful responses
            const responseClone = networkResponse.clone();
            caches.open(CACHE_NAME)
              .then((cache) => {
                cache.put(event.request, responseClone);
              });

            return networkResponse;
          })
          .catch(() => {
            // Network failed, try to serve offline page for navigation requests
            if (event.request.destination === 'document') {
              return caches.match(OFFLINE_URL);
            }
            
            // For other requests, try to find a suitable cached response
            return findSuitableCachedResponse(event.request);
          });
      })
  );
});

// Background sync for cart updates
self.addEventListener('sync', (event) => {
  console.log('Background sync triggered:', event.tag);
  
  if (event.tag === 'cart-sync') {
    event.waitUntil(syncCart());
  }
  
  if (event.tag === 'analytics-sync') {
    event.waitUntil(syncAnalytics());
  }
});

// Push notifications for order updates
self.addEventListener('push', (event) => {
  console.log('Push message received:', event);
  
  if (event.data) {
    const data = event.data.json();
    
    event.waitUntil(
      self.registration.showNotification(data.title, {
        body: data.body,
        icon: '/images/icons/icon-192x192.png',
        badge: '/images/icons/icon-72x72.png',
        image: data.image,
        data: data,
        actions: [
          {
            action: 'view',
            title: 'View Order',
            icon: '/images/icons/view-icon.png'
          },
          {
            action: 'dismiss',
            title: 'Dismiss',
            icon: '/images/icons/dismiss-icon.png'
          }
        ],
        tag: 'order-update',
        renotify: true,
        requireInteraction: true
      })
    );
  }
});

// Handle notification clicks
self.addEventListener('notificationclick', (event) => {
  console.log('Notification clicked:', event);
  
  event.notification.close();
  
  if (event.action === 'view') {
    event.waitUntil(
      clients.openWindow(event.notification.data.url || '/')
    );
  }
});

// Message handling for cache updates
self.addEventListener('message', (event) => {
  console.log('Message received:', event.data);
  
  if (event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
  
  if (event.data.type === 'CACHE_URLS') {
    event.waitUntil(
      caches.open(CACHE_NAME)
        .then((cache) => {
          return cache.addAll(event.data.urls);
        })
    );
  }
});

// Helper functions
function isDynamicContent(url) {
  const dynamicPatterns = [
    '/api/',
    '/products/',
    '/cart',
    '/checkout'
  ];
  
  return dynamicPatterns.some(pattern => url.includes(pattern));
}

function updateCacheInBackground(request) {
  fetch(request)
    .then((response) => {
      if (response && response.status === 200) {
        caches.open(CACHE_NAME)
          .then((cache) => {
            cache.put(request, response.clone());
          });
      }
    })
    .catch((error) => {
      console.log('Background update failed:', error);
    });
}

function findSuitableCachedResponse(request) {
  return caches.open(CACHE_NAME)
    .then((cache) => {
      return cache.keys()
        .then((requests) => {
          // Find similar cached requests
          const similarRequest = requests.find(cachedRequest => {
            return cachedRequest.url.includes(request.url.split('?')[0]);
          });
          
          if (similarRequest) {
            return cache.match(similarRequest);
          }
          
          // Return a generic offline response
          return new Response('Content not available offline', {
            status: 503,
            statusText: 'Service Unavailable',
            headers: new Headers({
              'Content-Type': 'text/plain'
            })
          });
        });
    });
}

async function syncCart() {
  try {
    // Get cart data from IndexedDB
    const cartData = await getCartFromIndexedDB();
    
    if (cartData && cartData.length > 0) {
      // Sync with server
      const response = await fetch('/api/cart/sync', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ items: cartData })
      });
      
      if (response.ok) {
        console.log('Cart synced successfully');
        // Clear local cart data
        await clearCartFromIndexedDB();
      }
    }
  } catch (error) {
    console.error('Cart sync failed:', error);
  }
}

async function syncAnalytics() {
  try {
    // Get analytics data from IndexedDB
    const analyticsData = await getAnalyticsFromIndexedDB();
    
    if (analyticsData && analyticsData.length > 0) {
      // Sync with analytics service
      const response = await fetch('/api/analytics/sync', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ events: analyticsData })
      });
      
      if (response.ok) {
        console.log('Analytics synced successfully');
        // Clear local analytics data
        await clearAnalyticsFromIndexedDB();
      }
    }
  } catch (error) {
    console.error('Analytics sync failed:', error);
  }
}

// IndexedDB helpers (simplified)
async function getCartFromIndexedDB() {
  // Implementation would use IndexedDB to store/retrieve cart data
  return JSON.parse(localStorage.getItem('offline_cart') || '[]');
}

async function clearCartFromIndexedDB() {
  localStorage.removeItem('offline_cart');
}

async function getAnalyticsFromIndexedDB() {
  // Implementation would use IndexedDB to store/retrieve analytics data
  return JSON.parse(localStorage.getItem('offline_analytics') || '[]');
}

async function clearAnalyticsFromIndexedDB() {
  localStorage.removeItem('offline_analytics');
}

// Performance monitoring
self.addEventListener('fetch', (event) => {
  const startTime = performance.now();
  
  event.respondWith(
    handleFetch(event.request)
      .then((response) => {
        const endTime = performance.now();
        const duration = endTime - startTime;
        
        // Log performance metrics
        if (duration > 1000) { // Log slow requests
          console.warn('Slow request:', event.request.url, duration + 'ms');
        }
        
        return response;
      })
  );
});

async function handleFetch(request) {
  try {
    const cachedResponse = await caches.match(request);
    
    if (cachedResponse) {
      return cachedResponse;
    }
    
    const networkResponse = await fetch(request);
    
    if (networkResponse.ok) {
      const cache = await caches.open(CACHE_NAME);
      cache.put(request, networkResponse.clone());
    }
    
    return networkResponse;
  } catch (error) {
    console.error('Fetch failed:', error);
    
    if (request.destination === 'document') {
      return caches.match(OFFLINE_URL);
    }
    
    throw error;
  }
}

console.log('Service Worker loaded successfully'); 