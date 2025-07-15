'use client';

import { useState, useEffect } from 'react';
import { Search, Filter, SlidersHorizontal, X, ChevronDown, ChevronUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { PanelLabelKit } from '@/types';
import { trackSearch } from '@/components/analytics/Analytics';

interface ProductSearchProps {
  products: PanelLabelKit[];
  onFilteredProductsChange: (products: PanelLabelKit[]) => void;
  className?: string;
}

interface FilterOptions {
  search: string;
  category: string;
  priceRange: [number, number];
  panelType: string;
  slots: string;
  sortBy: string;
}

export default function ProductSearch({ 
  products, 
  onFilteredProductsChange, 
  className = '' 
}: ProductSearchProps) {
  const [filters, setFilters] = useState<FilterOptions>({
    search: '',
    category: '',
    priceRange: [0, 1000],
    panelType: '',
    slots: '',
    sortBy: 'popular'
  });
  
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [activeFilters, setActiveFilters] = useState<string[]>([]);

  // Get unique filter values from products
  const categories = [...new Set(products.map(p => p.category))];
  const panelTypes = [...new Set(products.map(p => p.panelType))];
  const slotOptions = [...new Set(products.map(p => p.slots.toString()))].sort((a, b) => parseInt(a) - parseInt(b));
  const maxPrice = Math.max(...products.map(p => p.price));

  // Filter and sort products
  const filterAndSortProducts = () => {
    let filtered = products.filter(product => {
      // Search filter
      const searchTerm = filters.search.toLowerCase();
      const searchMatch = !searchTerm || 
        product.name.toLowerCase().includes(searchTerm) ||
        product.shortDescription.toLowerCase().includes(searchTerm) ||
        product.description.toLowerCase().includes(searchTerm) ||
        product.panelType.toLowerCase().includes(searchTerm) ||
        product.tags.some(tag => tag.toLowerCase().includes(searchTerm));

      // Category filter
      const categoryMatch = !filters.category || product.category === filters.category;

      // Price range filter
      const priceMatch = product.price >= filters.priceRange[0] && product.price <= filters.priceRange[1];

      // Panel type filter
      const panelTypeMatch = !filters.panelType || product.panelType === filters.panelType;

      // Slots filter
      const slotsMatch = !filters.slots || product.slots.toString() === filters.slots;

      return searchMatch && categoryMatch && priceMatch && panelTypeMatch && slotsMatch;
    });

    // Sort products
    switch (filters.sortBy) {
      case 'price-low':
        filtered.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        filtered.sort((a, b) => b.price - a.price);
        break;
      case 'name':
        filtered.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case 'popular':
      default:
        filtered.sort((a, b) => {
          const aPopular = a.tags.includes('most popular') ? 1 : 0;
          const bPopular = b.tags.includes('most popular') ? 1 : 0;
          return bPopular - aPopular;
        });
    }

    return filtered;
  };

  // Update filtered products when filters change
  useEffect(() => {
    const filtered = filterAndSortProducts();
    onFilteredProductsChange(filtered);
    updateActiveFilters();
    
    // Track search if there's a search term
    if (filters.search) {
      trackSearch(filters.search, filtered.length);
    }
  }, [filters, products]);

  // Update active filters list
  const updateActiveFilters = () => {
    const active: string[] = [];
    
    if (filters.search) active.push(`Search: "${filters.search}"`);
    if (filters.category) active.push(`Category: ${filters.category}`);
    if (filters.priceRange[0] > 0 || filters.priceRange[1] < maxPrice) {
      active.push(`Price: $${filters.priceRange[0]} - $${filters.priceRange[1]}`);
    }
    if (filters.panelType) active.push(`Panel: ${filters.panelType}`);
    if (filters.slots) active.push(`Slots: ${filters.slots}`);
    
    setActiveFilters(active);
  };

  // Handle filter updates
  const updateFilter = (key: keyof FilterOptions, value: any) => {
    setFilters(prev => ({ ...prev, [key]: value }));
  };

  // Clear all filters
  const clearFilters = () => {
    setFilters({
      search: '',
      category: '',
      priceRange: [0, maxPrice],
      panelType: '',
      slots: '',
      sortBy: 'popular'
    });
  };

  // Clear specific filter
  const clearSpecificFilter = (filterText: string) => {
    if (filterText.startsWith('Search:')) {
      updateFilter('search', '');
    } else if (filterText.startsWith('Category:')) {
      updateFilter('category', '');
    } else if (filterText.startsWith('Price:')) {
      updateFilter('priceRange', [0, maxPrice]);
    } else if (filterText.startsWith('Panel:')) {
      updateFilter('panelType', '');
    } else if (filterText.startsWith('Slots:')) {
      updateFilter('slots', '');
    }
  };

  return (
    <div className={`space-y-4 ${className}`}>
      {/* Search Bar and Controls */}
      <div className="flex flex-col sm:flex-row gap-4">
        {/* Search Input */}
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
          <Input
            placeholder="Search products, panel types, or features..."
            value={filters.search}
            onChange={(e) => updateFilter('search', e.target.value)}
            className="pl-10"
          />
        </div>

        {/* Sort Select */}
        <div className="w-full sm:w-48">
          <Select value={filters.sortBy} onValueChange={(value) => updateFilter('sortBy', value)}>
            <SelectTrigger>
              <SelectValue placeholder="Sort by" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="popular">Most Popular</SelectItem>
              <SelectItem value="price-low">Price: Low to High</SelectItem>
              <SelectItem value="price-high">Price: High to Low</SelectItem>
              <SelectItem value="name">Name: A to Z</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Filter Toggle */}
        <Button
          variant="outline"
          onClick={() => setIsFilterOpen(!isFilterOpen)}
          className="w-full sm:w-auto"
        >
          <SlidersHorizontal className="w-4 h-4 mr-2" />
          Filters
          {isFilterOpen ? <ChevronUp className="w-4 h-4 ml-2" /> : <ChevronDown className="w-4 h-4 ml-2" />}
        </Button>
      </div>

      {/* Active Filters */}
      {activeFilters.length > 0 && (
        <div className="flex flex-wrap gap-2">
          {activeFilters.map((filter, index) => (
            <Badge
              key={index}
              variant="secondary"
              className="cursor-pointer hover:bg-gray-300"
              onClick={() => clearSpecificFilter(filter)}
            >
              {filter}
              <X className="w-3 h-3 ml-1" />
            </Badge>
          ))}
          <Button
            variant="ghost"
            size="sm"
            onClick={clearFilters}
            className="text-xs text-gray-500 hover:text-gray-700"
          >
            Clear All
          </Button>
        </div>
      )}

      {/* Filters Panel */}
      {isFilterOpen && (
        <Card className="border-2 border-electric-blue/20">
          <CardHeader>
            <CardTitle className="text-lg flex items-center">
              <Filter className="w-5 h-5 mr-2" />
              Filter Products
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Category Filter */}
              <div>
                <Label className="text-sm font-medium mb-2 block">Category</Label>
                <Select value={filters.category} onValueChange={(value) => updateFilter('category', value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="All Categories" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="">All Categories</SelectItem>
                    {categories.map(category => (
                      <SelectItem key={category} value={category}>
                        {category.charAt(0).toUpperCase() + category.slice(1)}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Panel Type Filter */}
              <div>
                <Label className="text-sm font-medium mb-2 block">Panel Type</Label>
                <Select value={filters.panelType} onValueChange={(value) => updateFilter('panelType', value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="All Panel Types" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="">All Panel Types</SelectItem>
                    {panelTypes.map(type => (
                      <SelectItem key={type} value={type}>
                        {type}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Slots Filter */}
              <div>
                <Label className="text-sm font-medium mb-2 block">Circuit Slots</Label>
                <Select value={filters.slots} onValueChange={(value) => updateFilter('slots', value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="All Slot Counts" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="">All Slot Counts</SelectItem>
                    {slotOptions.map(slots => (
                      <SelectItem key={slots} value={slots}>
                        {slots} Slots
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Price Range Filter */}
              <div>
                <Label className="text-sm font-medium mb-2 block">
                  Price Range: ${filters.priceRange[0]} - ${filters.priceRange[1]}
                </Label>
                <div className="space-y-2">
                  <input
                    type="range"
                    min="0"
                    max={maxPrice}
                    value={filters.priceRange[0]}
                    onChange={(e) => updateFilter('priceRange', [parseInt(e.target.value), filters.priceRange[1]])}
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                  />
                  <input
                    type="range"
                    min="0"
                    max={maxPrice}
                    value={filters.priceRange[1]}
                    onChange={(e) => updateFilter('priceRange', [filters.priceRange[0], parseInt(e.target.value)])}
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                  />
                </div>
              </div>
            </div>

            {/* Filter Actions */}
            <div className="flex justify-between items-center mt-6 pt-4 border-t">
              <Button
                variant="outline"
                onClick={clearFilters}
                className="text-gray-600"
              >
                Clear All Filters
              </Button>
              <Button
                onClick={() => setIsFilterOpen(false)}
                className="bg-electric-blue hover:bg-electric-blue/90"
              >
                Apply Filters
              </Button>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
} 