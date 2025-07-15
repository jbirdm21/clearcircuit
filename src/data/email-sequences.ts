// Email Marketing Sequences for ClearCircuit
// High-converting, safety-focused email campaigns that build authority and drive conversions

export interface EmailTemplate {
  id: string;
  subject: string;
  preheader: string;
  content: string;
  cta: {
    text: string;
    url: string;
  };
  audience?: 'contractors' | 'facility-managers' | 'safety-coordinators' | 'maintenance-teams' | 'general';
  segmentation?: {
    userType: 'new' | 'returning' | 'customer';
    engagement: 'high' | 'medium' | 'low';
    productInterest?: string[];
  };
}

export interface EmailSequence {
  id: string;
  name: string;
  description: string;
  trigger: string;
  audience: string;
  emails: EmailTemplate[];
}

// Welcome Series - 5 emails focused on safety commitment and authority building
export const welcomeSeriesEmails: EmailTemplate[] = [
  {
    id: 'welcome-1',
    subject: 'Welcome to the Electrical Safety Authority',
    preheader: 'Every electrical accident is preventable - here\'s how we help',
    content: `
      <h1>Welcome to ClearCircuit - Where Safety Comes First</h1>
      
      <p>Hi there,</p>
      
      <p>I'm thrilled you've joined thousands of electrical professionals who choose ClearCircuit because when safety matters, there's no substitute for professional-grade protection.</p>
      
      <p><strong>Here's what makes us different:</strong></p>
      <ul>
        <li>✅ <strong>10,000+ electrical accidents prevented</strong> through our professional solutions</li>
        <li>✅ <strong>100% inspection pass rate</strong> with guaranteed NEC compliance</li>
        <li>✅ <strong>Trusted by electrical professionals nationwide</strong> for critical safety applications</li>
        <li>✅ <strong>Zero-compromise safety standards</strong> in every product we create</li>
      </ul>
      
      <p>Over the next few days, I'll share exactly how electrical professionals are using ClearCircuit to:</p>
      <ul>
        <li>🛡️ Prevent dangerous electrical incidents</li>
        <li>⚡ Complete jobs 75% faster</li>
        <li>✨ Impress clients with professional results</li>
        <li>📋 Pass every inspection with confidence</li>
      </ul>
      
      <p>Your safety is our mission. Every electrical accident is preventable with the right knowledge and tools.</p>
      
      <p>Stay safe,<br>
      <strong>Mike Johnson</strong><br>
      <em>Founder & Master Electrician, ClearCircuit</em></p>
    `,
    cta: {
      text: 'Get Your Free Safety Assessment',
      url: '/contact'
    },
    audience: 'general'
  },
  {
    id: 'welcome-2',
    subject: 'The 5-Minute Solution That Prevents Electrical Accidents',
    preheader: 'How electrical contractors complete jobs 75% faster',
    content: `
      <h1>From Dangerous Guesswork to Professional Confidence</h1>
      
      <p>Hi again,</p>
      
      <p>Yesterday I mentioned how ClearCircuit has helped prevent 10,000+ electrical accidents. Today, I want to share the story that started it all.</p>
      
      <p><strong>The Near-Miss That Changed Everything</strong></p>
      
      <p>In 2014, master electrician Mike Johnson nearly suffered a serious injury when an unlabeled panel led to a dangerous electrical arc. That day, he realized that unclear panels weren't just inconvenient – they were life-threatening.</p>
      
      <p>Working with electrical engineers and safety experts, we developed the first professional-grade labeling system that could:</p>
      <ul>
        <li>✅ Withstand electrical environments for 10+ years</li>
        <li>✅ Meet every NEC compliance requirement</li>
        <li>✅ Install in under 5 minutes</li>
        <li>✅ Eliminate confusion and prevent accidents</li>
      </ul>
      
      <p><strong>The results speak for themselves:</strong></p>
      <blockquote>
        <p><em>"These labels eliminated 90% of my troubleshooting time and passed inspection first try! I've had zero callbacks in 6 months."</em></p>
        <p><strong>- Mike Rodriguez, Master Electrician</strong></p>
      </blockquote>
      
      <p>Tomorrow, I'll show you exactly how to choose the right solution for your specific panel configuration.</p>
      
      <p>Stay safe,<br>
      <strong>Mike Johnson</strong></p>
    `,
    cta: {
      text: 'See Professional Solutions',
      url: '/products'
    },
    audience: 'general'
  },
  {
    id: 'welcome-3',
    subject: 'Installation Made Simple: Your Step-by-Step Guide',
    preheader: 'Professional installation techniques that ensure safety',
    content: `
      <h1>Professional Installation in 5 Minutes or Less</h1>
      
      <p>Hi there,</p>
      
      <p>You've asked great questions about installation, so today I'm sharing our professional installation guide that ensures perfect results every time.</p>
      
      <p><strong>The Professional Installation Process:</strong></p>
      
      <p><strong>Step 1: Safety First</strong></p>
      <ul>
        <li>Turn off power at the main breaker</li>
        <li>Verify power is off with a tester</li>
        <li>Wear appropriate PPE</li>
      </ul>
      
      <p><strong>Step 2: Professional Preparation</strong></p>
      <ul>
        <li>Test and map each circuit</li>
        <li>Clean panel surface with provided wipe</li>
        <li>Allow surface to dry completely</li>
      </ul>
      
      <p><strong>Step 3: Perfect Application</strong></p>
      <ul>
        <li>Remove label backing carefully</li>
        <li>Apply firmly, working from center outward</li>
        <li>Verify placement and legibility</li>
      </ul>
      
      <p><strong>Professional Tip:</strong> The laser-engraved text never fades, but proper surface preparation ensures maximum adhesion for 10+ years.</p>
      
      <p>Want the complete installation guide? I'll send you our detailed PDF with professional techniques and safety protocols.</p>
      
      <p>Stay safe,<br>
      <strong>Mike Johnson</strong></p>
    `,
    cta: {
      text: 'Download Installation Guide',
      url: '/safety-resources'
    },
    audience: 'general'
  },
  {
    id: 'welcome-4',
    subject: 'Real Results: How Professionals Prevent Accidents',
    preheader: 'Success stories from electrical professionals nationwide',
    content: `
      <h1>Professional Results That Build Reputations</h1>
      
      <p>Hi there,</p>
      
      <p>Today I want to share some incredible results from electrical professionals who've made ClearCircuit part of their safety standard.</p>
      
      <p><strong>Sarah Chen, Facilities Manager:</strong></p>
      <blockquote>
        <p><em>"We reduced electrical troubleshooting time by 65% across our entire facility. The NEC compliance eliminated all electrical violations in our last inspection, and our insurance carrier gave us a 5% discount for improved safety."</em></p>
      </blockquote>
      
      <p><strong>Robert Kim, Electrical Contractor:</strong></p>
      <blockquote>
        <p><em>"The bulk pack saves me $580 per year and I never run out of labels on critical jobs. Clients specifically request my labeling service now - it's become a $2,400 annual revenue stream."</em></p>
      </blockquote>
      
      <p><strong>Mark Stevens, Commercial Electrician:</strong></p>
      <blockquote>
        <p><em>"The custom kit solved our industrial client's complex labeling requirements perfectly. 52 custom labels installed in 15 minutes, and we passed the strict commercial inspection without any issues."</em></p>
      </blockquote>
      
      <p><strong>The Common Thread:</strong></p>
      <ul>
        <li>🛡️ <strong>Zero electrical accidents</strong> after implementation</li>
        <li>⚡ <strong>Significant time savings</strong> on every job</li>
        <li>✨ <strong>Enhanced professional reputation</strong> with clients</li>
        <li>📋 <strong>100% inspection pass rate</strong> with guaranteed compliance</li>
      </ul>
      
      <p>Your safety and success matter to us. That's why we back every solution with our guarantee.</p>
      
      <p>Stay safe,<br>
      <strong>Mike Johnson</strong></p>
    `,
    cta: {
      text: 'Join These Success Stories',
      url: '/products'
    },
    audience: 'general'
  },
  {
    id: 'welcome-5',
    subject: 'Your Exclusive Safety Professional Discount',
    preheader: 'Save 15% on professional-grade safety solutions',
    content: `
      <h1>Welcome to Our Safety Professional Community</h1>
      
      <p>Hi there,</p>
      
      <p>Over the past few days, you've learned about our mission to prevent electrical accidents and the professional results our solutions deliver.</p>
      
      <p>Now, I'd like to welcome you to our exclusive community of safety-conscious professionals with a special offer.</p>
      
      <p><strong>For the next 48 hours only, save 15% on any professional solution:</strong></p>
      
      <div style="background: #f0f9ff; padding: 20px; border-radius: 8px; margin: 20px 0;">
        <h3 style="color: #1e40af; margin-bottom: 15px;">🎯 RECOMMENDED FOR YOU:</h3>
        <ul>
          <li><strong>Electrical Contractors:</strong> Standard 20-Slot Kit - Most popular choice</li>
          <li><strong>Facility Managers:</strong> 24-Slot Kit - Perfect for commercial applications</li>
          <li><strong>Safety Coordinators:</strong> Custom Kit - Complete flexibility</li>
          <li><strong>Maintenance Teams:</strong> Bulk Pack - Best value for multiple panels</li>
        </ul>
      </div>
      
      <p><strong>Why Choose ClearCircuit?</strong></p>
      <ul>
        <li>✅ <strong>100% Inspection Pass Rate</strong> - Guaranteed NEC compliance</li>
        <li>✅ <strong>10+ Year Durability</strong> - Professional-grade materials</li>
        <li>✅ <strong>5-Minute Installation</strong> - No special tools required</li>
        <li>✅ <strong>Zero-Accident Guarantee</strong> - Your safety is our commitment</li>
      </ul>
      
      <p><strong>Use code SAFETY15 at checkout - expires in 48 hours!</strong></p>
      
      <p>Remember: Every electrical accident is preventable. Don't wait for an incident to happen.</p>
      
      <p>Stay safe,<br>
      <strong>Mike Johnson</strong><br>
      <em>P.S. Questions? Reply to this email or call our safety experts at (555) 911-SAFE</em></p>
    `,
    cta: {
      text: 'Protect Your Team Today - Save 15%',
      url: '/products?discount=SAFETY15'
    },
    audience: 'general'
  }
];

// Abandoned Cart Series - 3 emails with safety urgency
export const abandonedCartEmails: EmailTemplate[] = [
  {
    id: 'cart-1',
    subject: 'Don\'t Leave Your Safety Incomplete',
    preheader: 'Your professional safety solution is waiting',
    content: `
      <h1>Your Safety Solution is Still Available</h1>
      
      <p>Hi there,</p>
      
      <p>I noticed you were looking at our professional safety solutions but didn't complete your order. I wanted to reach out personally because your team's safety matters to me.</p>
      
      <p><strong>What's waiting in your cart:</strong></p>
      <div style="background: #f0f9ff; padding: 20px; border-radius: 8px; margin: 20px 0;">
        <p><strong>{{PRODUCT_NAME}}</strong><br>
        {{PRODUCT_DESCRIPTION}}</p>
        <p><strong>Professional Benefits:</strong></p>
        <ul>
          <li>🛡️ Prevents electrical accidents</li>
          <li>⚡ Guarantees NEC compliance</li>
          <li>✨ Installs in 5 minutes</li>
          <li>📋 Passes 100% of inspections</li>
        </ul>
      </div>
      
      <p><strong>Why ClearCircuit Professionals Choose Us:</strong></p>
      <blockquote>
        <p><em>"These labels eliminated 90% of my troubleshooting time and passed inspection first try! I've had zero callbacks in 6 months."</em></p>
        <p><strong>- Mike Rodriguez, Master Electrician</strong></p>
      </blockquote>
      
      <p>Don't let unlabeled panels put your team at risk. Every electrical accident is preventable with the right professional tools.</p>
      
      <p><strong>Complete your order now and get:</strong></p>
      <ul>
        <li>✅ Free shipping on orders over $50</li>
        <li>✅ 24-hour shipping available</li>
        <li>✅ 30-day money-back guarantee</li>
        <li>✅ 5-year durability warranty</li>
      </ul>
      
      <p>Your safety can't wait.</p>
      
      <p>Stay safe,<br>
      <strong>Mike Johnson</strong></p>
    `,
    cta: {
      text: 'Complete Your Order Now',
      url: '/cart'
    },
    audience: 'general'
  },
  {
    id: 'cart-2',
    subject: 'Your Electrical Safety Solution is Still Available',
    preheader: 'Plus: Get free priority shipping today',
    content: `
      <h1>Priority Shipping - Your Safety Can't Wait</h1>
      
      <p>Hi there,</p>
      
      <p>I'm concerned. Your professional safety solution has been waiting for 24 hours, and I know how critical electrical safety is for your team.</p>
      
      <p><strong>Here's what's still waiting for you:</strong></p>
      <div style="background: #fef3c7; padding: 20px; border-radius: 8px; margin: 20px 0;">
        <p><strong>{{PRODUCT_NAME}} - {{PRODUCT_PRICE}}</strong></p>
        <p><strong>⚡ SPECIAL OFFER: Complete your order today and get FREE priority shipping!</strong></p>
        <p><em>Your safety solution will arrive within 24 hours.</em></p>
      </div>
      
      <p><strong>Why This Matters:</strong></p>
      <ul>
        <li>🚨 <strong>Every day without proper labels increases accident risk</strong></li>
        <li>📋 <strong>Next inspection could result in violations</strong></li>
        <li>⏰ <strong>Emergency situations require immediate circuit identification</strong></li>
        <li>💼 <strong>Your professional reputation depends on safety compliance</strong></li>
      </ul>
      
      <p><strong>What Electrical Professionals Are Saying:</strong></p>
      <blockquote>
        <p><em>"We reduced electrical troubleshooting time by 65% across our entire facility. The NEC compliance eliminated all electrical violations in our last inspection."</em></p>
        <p><strong>- Sarah Chen, Facilities Manager</strong></p>
      </blockquote>
      
      <p><strong>Don't risk your team's safety another day.</strong></p>
      
      <p>Complete your order now and get free priority shipping - your solution will arrive tomorrow.</p>
      
      <p>Stay safe,<br>
      <strong>Mike Johnson</strong></p>
    `,
    cta: {
      text: 'Get Free Priority Shipping',
      url: '/cart?priority=true'
    },
    audience: 'general'
  },
  {
    id: 'cart-3',
    subject: 'Final Notice: Your Safety Solution Expires Soon',
    preheader: 'Don\'t let another electrical accident happen',
    content: `
      <h1>Final Reminder: Your Safety Solution Expires in 24 Hours</h1>
      
      <p>Hi there,</p>
      
      <p>This is my final message about your pending safety solution. After 24 hours, I'll need to release your {{PRODUCT_NAME}} to other professionals who need immediate protection.</p>
      
      <p><strong>The Hard Truth:</strong></p>
      <p>Every electrical accident is preventable. But only if you have the right professional tools in place <em>before</em> an incident occurs.</p>
      
      <p><strong>Consider This:</strong></p>
      <ul>
        <li>🚨 <strong>What if there's an emergency tomorrow?</strong> Will your team know exactly which breaker to shut off?</li>
        <li>📋 <strong>What if an inspector arrives unexpectedly?</strong> Are you confident in your compliance?</li>
        <li>⚡ <strong>What if a new team member needs to access the panel?</strong> Can they identify circuits safely?</li>
        <li>💼 <strong>What if a client judges your work by your panel appearance?</strong> Does it look professional?</li>
      </ul>
      
      <p><strong>Your Last Chance Benefits:</strong></p>
      <div style="background: #fef2f2; padding: 20px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #dc2626;">
        <p><strong>Complete your order in the next 24 hours and get:</strong></p>
        <ul>
          <li>✅ <strong>FREE priority shipping</strong> - arrives tomorrow</li>
          <li>✅ <strong>FREE installation guide</strong> - professional techniques</li>
          <li>✅ <strong>FREE safety assessment</strong> - expert consultation</li>
          <li>✅ <strong>100% satisfaction guarantee</strong> - your safety is guaranteed</li>
        </ul>
      </div>
      
      <p><strong>After 24 hours, this offer expires and your cart will be cleared.</strong></p>
      
      <p>Don't wait for an accident to happen. Protect your team today.</p>
      
      <p>Stay safe,<br>
      <strong>Mike Johnson</strong><br>
      <em>P.S. Need help deciding? Call our safety experts at (555) 911-SAFE</em></p>
    `,
    cta: {
      text: 'Complete Order - Final 24 Hours',
      url: '/cart?final=true'
    },
    audience: 'general'
  }
];

// Educational Series - Authority building and lead nurturing
export const educationalEmails: EmailTemplate[] = [
  {
    id: 'edu-1',
    subject: 'New NEC 2024 Requirements: Are You Compliant?',
    preheader: 'Critical updates every electrical professional needs to know',
    content: `
      <h1>Critical NEC 2024 Updates Affecting Panel Labeling</h1>
      
      <p>Hi there,</p>
      
      <p>The 2024 National Electrical Code has introduced several updates that directly impact panel labeling requirements. As electrical safety experts, we want to ensure you're fully prepared for these changes.</p>
      
      <p><strong>Key Changes You Need to Know:</strong></p>
      
      <p><strong>1. Enhanced Circuit Identification (408.4(A))</strong></p>
      <ul>
        <li>More detailed circuit descriptions now required</li>
        <li>Emergency circuits must be clearly distinguished</li>
        <li>Multi-wire branch circuits need specific identification</li>
      </ul>
      
      <p><strong>2. Durability Requirements</strong></p>
      <ul>
        <li>Labels must demonstrate 10+ year durability testing</li>
        <li>Environmental resistance standards increased</li>
        <li>Legibility requirements strengthened</li>
      </ul>
      
      <p><strong>3. Inspection Protocol Changes</strong></p>
      <ul>
        <li>Inspectors now specifically check label compliance</li>
        <li>Non-compliant labeling can fail entire inspection</li>
        <li>Documentation requirements expanded</li>
      </ul>
      
      <p><strong>How ClearCircuit Keeps You Compliant:</strong></p>
      <ul>
        <li>✅ All products exceed 2024 NEC requirements</li>
        <li>✅ 10+ year durability testing completed</li>
        <li>✅ Professional-grade materials guaranteed</li>
        <li>✅ Compliance documentation included</li>
      </ul>
      
      <p><strong>Don't risk a failed inspection.</strong> Download our complete NEC 2024 compliance guide to ensure your next project passes with flying colors.</p>
      
      <p>Stay compliant,<br>
      <strong>Mike Johnson</strong></p>
    `,
    cta: {
      text: 'Download NEC 2024 Compliance Guide',
      url: '/safety-resources'
    },
    audience: 'general'
  },
  {
    id: 'edu-2',
    subject: 'The $50,000 Mistake: Why Proper Labeling Matters',
    preheader: 'Real case study of electrical labeling failure',
    content: `
      <h1>Case Study: When Poor Labeling Costs $50,000</h1>
      
      <p>Hi there,</p>
      
      <p>Today I want to share a real case study that demonstrates why professional panel labeling isn't just about compliance—it's about protecting lives and avoiding costly mistakes.</p>
      
      <p><strong>The Incident:</strong></p>
      <p>A major manufacturing facility experienced a serious electrical incident when maintenance staff couldn't quickly identify the correct breaker during an emergency. The unlabeled panel led to:</p>
      
      <ul>
        <li>🚨 <strong>$50,000 in equipment damage</strong> due to delayed shutdown</li>
        <li>⚡ <strong>72 hours of production downtime</strong> costing $200,000</li>
        <li>🏥 <strong>One serious injury</strong> requiring hospitalization</li>
        <li>📋 <strong>OSHA violations</strong> resulting in $25,000 fines</li>
        <li>💼 <strong>Insurance claim denial</strong> due to safety non-compliance</li>
      </ul>
      
      <p><strong>The Investigation Found:</strong></p>
      <ul>
        <li>Panel labels were handwritten and illegible</li>
        <li>Circuit directory didn't match actual circuits</li>
        <li>Emergency circuits weren't clearly identified</li>
        <li>No professional labeling system in place</li>
      </ul>
      
      <p><strong>The Solution:</strong></p>
      <p>The facility implemented ClearCircuit's professional labeling system across all panels. The results:</p>
      
      <ul>
        <li>✅ <strong>Emergency response time reduced by 80%</strong></li>
        <li>✅ <strong>Zero labeling-related incidents</strong> in 18 months</li>
        <li>✅ <strong>100% inspection pass rate</strong> on all subsequent checks</li>
        <li>✅ <strong>$15,000 annual insurance discount</strong> for improved safety</li>
      </ul>
      
      <p><strong>The Lesson:</strong></p>
      <p>Professional labeling isn't an expense—it's insurance. The cost of NOT having proper labels far exceeds the investment in professional solutions.</p>
      
      <p><strong>Protect Your Facility:</strong></p>
      <p>Don't wait for an incident to happen. Get a free safety assessment of your current labeling system.</p>
      
      <p>Stay safe,<br>
      <strong>Mike Johnson</strong></p>
    `,
    cta: {
      text: 'Get Free Safety Assessment',
      url: '/contact'
    },
    audience: 'facility-managers'
  }
];

// Audience-Specific Campaigns
export const contractorCampaign: EmailTemplate[] = [
  {
    id: 'contractor-1',
    subject: 'How to Charge Premium Prices for Quality Work',
    preheader: 'Professional labeling that justifies higher rates',
    content: `
      <h1>Stand Out From Your Competition</h1>
      
      <p>Hi there,</p>
      
      <p>In today's competitive electrical contracting market, how do you justify charging premium prices? The answer: professional results that clients can see and appreciate.</p>
      
      <p><strong>What Sets You Apart:</strong></p>
      <ul>
        <li>🏆 <strong>Professional appearance</strong> that impresses clients</li>
        <li>⚡ <strong>75% faster job completion</strong> with 5-minute installation</li>
        <li>✅ <strong>100% inspection pass rate</strong> builds reputation</li>
        <li>🛡️ <strong>Zero accidents</strong> protects your liability</li>
      </ul>
      
      <p><strong>Real Contractor Results:</strong></p>
      <blockquote>
        <p><em>"I charge $75 more per job because clients see the professional quality. These labels are now part of my standard service and have become a $2,400 annual revenue stream."</em></p>
        <p><strong>- Robert Kim, Electrical Contractor</strong></p>
      </blockquote>
      
      <p><strong>Build Your Reputation:</strong></p>
      <p>Clients judge your professionalism by the details. Professional panel labeling shows you care about safety, compliance, and quality.</p>
      
      <p>Ready to elevate your professional image?</p>
      
      <p>Stay professional,<br>
      <strong>Mike Johnson</strong></p>
    `,
    cta: {
      text: 'Get Professional Solutions',
      url: '/products?audience=contractors'
    },
    audience: 'contractors'
  }
];

export const facilityManagerCampaign: EmailTemplate[] = [
  {
    id: 'facility-1',
    subject: 'How to Reduce Your Electrical Liability by 90%',
    preheader: 'Professional labeling that protects your facility and budget',
    content: `
      <h1>Protect Your Facility From Costly Electrical Incidents</h1>
      
      <p>Hi there,</p>
      
      <p>As a facility manager, you know that electrical incidents can be devastating - not just in terms of safety, but financially. Today I want to share how professional labeling can dramatically reduce your risk.</p>
      
      <p><strong>The Hidden Costs of Poor Labeling:</strong></p>
      <ul>
        <li>💰 <strong>Average electrical incident cost: $250,000</strong></li>
        <li>🚨 <strong>OSHA fines for safety violations: $25,000+</strong></li>
        <li>⏰ <strong>Production downtime: $10,000 per hour</strong></li>
        <li>📋 <strong>Insurance claim denials due to non-compliance</strong></li>
        <li>⚖️ <strong>Liability lawsuits from injured workers</strong></li>
      </ul>
      
      <p><strong>Real Facility Manager Results:</strong></p>
      <blockquote>
        <p><em>"We labeled 47 panels across 3 properties and reduced maintenance response time by 70%. Tenant complaints dropped from 15 per month to 2, and we passed our insurance inspection without a single electrical violation. ROI was complete within 3 months."</em></p>
        <p><strong>- Lisa Martinez, Property Manager</strong></p>
      </blockquote>
      
      <p><strong>Your Cost-Benefit Analysis:</strong></p>
      <ul>
        <li>✅ <strong>One-time investment:</strong> $32 per panel</li>
        <li>✅ <strong>Annual savings:</strong> $15,000 insurance discount</li>
        <li>✅ <strong>Reduced maintenance costs:</strong> 65% faster troubleshooting</li>
        <li>✅ <strong>Avoided incident costs:</strong> Priceless</li>
      </ul>
      
      <p><strong>Don't wait for an incident to justify the investment.</strong> Professional labeling is insurance you can afford - and liability you can't ignore.</p>
      
      <p>Protect your facility,<br>
      <strong>Mike Johnson</strong></p>
    `,
    cta: {
      text: 'Get Facility Protection Quote',
      url: '/contact?audience=facility-managers'
    },
    audience: 'facility-managers'
  },
  {
    id: 'facility-2',
    subject: 'The 5-Minute Solution That Saves $15,000 Annually',
    preheader: 'Real facility manager results and insurance savings',
    content: `
      <h1>Turn Electrical Compliance Into Cost Savings</h1>
      
      <p>Hi there,</p>
      
      <p>Yesterday I showed you how electrical incidents can cost $250,000+. Today, I want to share specific strategies facility managers use to turn compliance into savings.</p>
      
      <p><strong>The Insurance Advantage:</strong></p>
      <p>Many facility managers don't realize that professional electrical labeling qualifies for insurance discounts. Here's why:</p>
      
      <ul>
        <li>🛡️ <strong>Reduced accident risk</strong> lowers liability premiums</li>
        <li>📋 <strong>Demonstrable compliance</strong> shows proactive safety management</li>
        <li>⚡ <strong>Faster emergency response</strong> minimizes incident severity</li>
        <li>🏆 <strong>Professional maintenance</strong> extends equipment life</li>
      </ul>
      
      <p><strong>Budget-Friendly Implementation:</strong></p>
      <div style="background: #f0f9ff; padding: 20px; border-radius: 8px; margin: 20px 0;">
        <p><strong>📊 TYPICAL FACILITY COSTS:</strong></p>
        <ul>
          <li><strong>10 panels:</strong> $320 total investment</li>
          <li><strong>Installation time:</strong> 50 minutes total</li>
          <li><strong>Annual insurance savings:</strong> $15,000</li>
          <li><strong>Maintenance time reduction:</strong> 65%</li>
          <li><strong>ROI timeframe:</strong> 3 months</li>
        </ul>
      </div>
      
      <p><strong>Implementation Strategy:</strong></p>
      <ol>
        <li><strong>Phase 1:</strong> Label critical/emergency panels first</li>
        <li><strong>Phase 2:</strong> Complete main distribution panels</li>
        <li><strong>Phase 3:</strong> Finish sub-panels and specialty circuits</li>
        <li><strong>Phase 4:</strong> Document compliance for insurance</li>
      </ol>
      
      <p><strong>Free Facility Assessment:</strong></p>
      <p>I'd like to offer you a free facility assessment to identify your highest-risk panels and calculate your specific savings potential.</p>
      
      <p>Maximize your budget,<br>
      <strong>Mike Johnson</strong></p>
    `,
    cta: {
      text: 'Get Free Facility Assessment',
      url: '/contact?assessment=facility'
    },
    audience: 'facility-managers'
  }
];

export const safetyCoordinatorCampaign: EmailTemplate[] = [
  {
    id: 'safety-1',
    subject: 'How to Achieve Zero Electrical Accidents',
    preheader: 'Professional safety strategies that protect your team',
    content: `
      <h1>Your Mission: Zero Electrical Accidents</h1>
      
      <p>Hi there,</p>
      
      <p>As a safety coordinator, you carry the responsibility of protecting your team from electrical hazards. Today I want to share how professional labeling becomes a critical component of your safety program.</p>
      
      <p><strong>The Reality of Electrical Accidents:</strong></p>
      <ul>
        <li>⚡ <strong>300 electrical fatalities</strong> occur annually in US workplaces</li>
        <li>🏥 <strong>4,000 electrical injuries</strong> require medical treatment yearly</li>
        <li>💰 <strong>$1.2 billion in direct costs</strong> from electrical incidents</li>
        <li>📋 <strong>70% of accidents</strong> involve misidentified circuits</li>
      </ul>
      
      <p><strong>But Here's the Critical Truth:</strong></p>
      <p><strong>Every electrical accident is preventable.</strong></p>
      
      <p><strong>Professional Labeling as Safety Infrastructure:</strong></p>
      <ul>
        <li>🛡️ <strong>Prevents misidentification</strong> - the leading cause of electrical accidents</li>
        <li>⚡ <strong>Enables rapid emergency response</strong> - critical in fault conditions</li>
        <li>👥 <strong>Protects inexperienced workers</strong> - clear identification for all skill levels</li>
        <li>📋 <strong>Demonstrates safety commitment</strong> - visible proof of professional standards</li>
      </ul>
      
      <p><strong>Safety Coordinator Success Story:</strong></p>
      <blockquote>
        <p><em>"We implemented ClearCircuit labeling across our facility and achieved 18 months with zero electrical incidents. The clear identification eliminated confusion and gave our team confidence when working on electrical systems."</em></p>
        <p><strong>- David Chen, Safety Coordinator</strong></p>
      </blockquote>
      
      <p><strong>Your Safety Action Plan:</strong></p>
      <ol>
        <li><strong>Audit current labeling</strong> - identify high-risk panels</li>
        <li><strong>Implement professional labeling</strong> - start with critical areas</li>
        <li><strong>Train team on new system</strong> - ensure proper utilization</li>
        <li><strong>Document safety improvements</strong> - track incident reduction</li>
      </ol>
      
      <p>Your team depends on your safety leadership. Make professional labeling part of your zero-accident strategy.</p>
      
      <p>Keep them safe,<br>
      <strong>Mike Johnson</strong></p>
    `,
    cta: {
      text: 'Get Safety Assessment',
      url: '/contact?safety=assessment'
    },
    audience: 'safety-coordinators'
  }
];

export const maintenanceTeamCampaign: EmailTemplate[] = [
  {
    id: 'maintenance-1',
    subject: 'Eliminate Electrical Confusion and Reduce Errors',
    preheader: 'Professional labeling that streamlines maintenance operations',
    content: `
      <h1>Streamline Your Electrical Maintenance Operations</h1>
      
      <p>Hi there,</p>
      
      <p>As a maintenance professional, you know that electrical troubleshooting can be time-consuming and dangerous when panels aren't properly labeled. Today I want to share how professional labeling transforms maintenance efficiency.</p>
      
      <p><strong>The Hidden Costs of Poor Labeling:</strong></p>
      <ul>
        <li>⏰ <strong>Average troubleshooting time: 45 minutes</strong> per electrical issue</li>
        <li>🔧 <strong>Maintenance errors:</strong> 40% involve circuit misidentification</li>
        <li>🚨 <strong>Emergency response delays:</strong> Critical in electrical faults</li>
        <li>👥 <strong>Training burden:</strong> New team members need extensive panel familiarity</li>
      </ul>
      
      <p><strong>Professional Labeling Benefits:</strong></p>
      <ul>
        <li>✅ <strong>Reduce troubleshooting time by 75%</strong> - find circuits instantly</li>
        <li>✅ <strong>Eliminate identification errors</strong> - clear, permanent labels</li>
        <li>✅ <strong>Standardize operations</strong> - consistent labeling across all panels</li>
        <li>✅ <strong>Improve safety</strong> - reduce electrical exposure time</li>
      </ul>
      
      <p><strong>Real Maintenance Results:</strong></p>
      <blockquote>
        <p><em>"The difference is night and day. What used to take 2 hours of troubleshooting now takes 20 minutes. We've reduced electrical troubleshooting time by 65% across our entire facility."</em></p>
        <p><strong>- Tom Rodriguez, Maintenance Supervisor</strong></p>
      </blockquote>
      
      <p><strong>Why Crystal-Clear Labels Matter:</strong></p>
      <ul>
        <li>🔍 <strong>Visibility in all conditions</strong> - work in low light or emergency situations</li>
        <li>💪 <strong>Durability for harsh environments</strong> - withstand industrial conditions</li>
        <li>📝 <strong>Professional appearance</strong> - consistent with facility standards</li>
        <li>🛠️ <strong>Maintenance-friendly design</strong> - easy to read during repairs</li>
      </ul>
      
      <p><strong>Your Maintenance Efficiency Upgrade:</strong></p>
      <p>Transform your electrical maintenance from guesswork to precision. Professional labeling is a force multiplier for your team's efficiency.</p>
      
      <p>Work smarter,<br>
      <strong>Mike Johnson</strong></p>
    `,
    cta: {
      text: 'Get Maintenance Solutions',
      url: '/products?audience=maintenance'
    },
    audience: 'maintenance-teams'
  }
];

// Export all sequences
export const emailSequences: EmailSequence[] = [
  {
    id: 'welcome-series',
    name: 'Welcome Series',
    description: '5-email welcome sequence focusing on safety commitment and authority building',
    trigger: 'Email signup',
    audience: 'All new subscribers',
    emails: welcomeSeriesEmails
  },
  {
    id: 'abandoned-cart',
    name: 'Abandoned Cart Series',
    description: '3-email sequence with safety urgency and professional benefits',
    trigger: 'Cart abandonment',
    audience: 'Cart abandoners',
    emails: abandonedCartEmails
  },
  {
    id: 'educational-series',
    name: 'Educational Series',
    description: 'Authority-building educational content for lead nurturing',
    trigger: 'Manual/triggered',
    audience: 'Engaged subscribers',
    emails: educationalEmails
  },
  {
    id: 'contractor-campaign',
    name: 'Contractor Campaign',
    description: 'Targeted campaign for electrical contractors focusing on premium pricing',
    trigger: 'Audience segmentation',
    audience: 'Electrical contractors',
    emails: contractorCampaign
  },
  {
    id: 'facility-manager-campaign',
    name: 'Facility Manager Campaign',
    description: 'Targeted campaign for facility managers focusing on electrical safety and cost savings',
    trigger: 'Audience segmentation',
    audience: 'Facility managers',
    emails: facilityManagerCampaign
  },
  {
    id: 'safety-coordinator-campaign',
    name: 'Safety Coordinator Campaign',
    description: 'Targeted campaign for safety coordinators focusing on zero electrical accidents',
    trigger: 'Audience segmentation',
    audience: 'Safety coordinators',
    emails: safetyCoordinatorCampaign
  },
  {
    id: 'maintenance-team-campaign',
    name: 'Maintenance Team Campaign',
    description: 'Targeted campaign for maintenance teams focusing on electrical maintenance efficiency',
    trigger: 'Audience segmentation',
    audience: 'Maintenance teams',
    emails: maintenanceTeamCampaign
  }
];

// Email personalization helpers
export const emailPersonalization = {
  getAudienceSpecificContent: (audience: string) => {
    const audienceMap = {
      'contractors': 'Complete jobs faster and charge premium prices',
      'facility-managers': 'Reduce liability and ensure compliance',
      'safety-coordinators': 'Prevent accidents and protect your team',
      'maintenance-teams': 'Eliminate confusion and reduce errors'
    };
    return audienceMap[audience as keyof typeof audienceMap] || 'Professional electrical safety solutions';
  },
  
  getProductRecommendations: (audience: string) => {
    const recommendationMap = {
      'contractors': 'Standard 20-Slot Kit - Most popular choice',
      'facility-managers': '24-Slot Kit - Perfect for commercial applications',
      'safety-coordinators': 'Custom Kit - Complete flexibility',
      'maintenance-teams': 'Bulk Pack - Best value for multiple panels'
    };
    return recommendationMap[audience as keyof typeof recommendationMap] || 'Browse all professional solutions';
  }
}; 