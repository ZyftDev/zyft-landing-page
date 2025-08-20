import { FC } from 'react';

import {
  ArrowRight,
  BarChart,
  Brain,
  Briefcase,
  Building,
  Calendar,
  CalendarClock,
  CheckCircle2,
  Clock,
  DollarSign,
  FileSpreadsheet,
  GraduationCap,
  Home,
  Laptop,
  LineChart,
  Mail,
  MessageSquare,
  PenTool,
  Rocket,
  Settings,
  Share2,
  ShoppingCart,
  Sparkles,
  Stethoscope,
  TrendingUp,
  UserCog,
  Users,
} from 'lucide-react';

interface Metric {
  timeSaved?: string;
  roi?: string;
  value?: string;
}

interface Example {
  icon: React.ReactNode;
  title: string;
  description: string;
  metrics?: Metric;
  bullets?: string[];
}

interface SubCategory {
  icon: React.ReactNode;
  title: string;
  description: string;
  examples: Example[];
}

interface AutomationCategory {
  icon: React.ReactNode;
  title: string;
  description: string;
  subcategories: SubCategory[];
}

interface IndustryExample {
  icon: React.ReactNode;
  industry: string;
  examples: string[];
}

const categories: AutomationCategory[] = [
  {
    icon: <Brain className="w-6 h-6" />,
    title: 'AI Agent Services',
    description:
      'Transform your business operations with custom AI agents that go beyond simple automation',
    subcategories: [
      {
        icon: <MessageSquare className="w-5 h-5" />,
        title: 'Customer Experience Agents',
        description:
          'Autonomous agents that understand customer intent and emotion to resolve issues proactively',
        examples: [
          {
            icon: <MessageSquare className="w-5 h-5" />,
            title: '🤖 Autonomous Support Agents',
            description: 'Context-aware support that independently resolves complex issues',
            metrics: {
              value: 'Understand context, emotion, and connect with multiple systems',
            },
          },
          {
            icon: <TrendingUp className="w-5 h-5" />,
            title: '📈 Proactive Customer Success',
            description: 'Monitor and predict customer needs before issues arise',
            metrics: {
              value: 'Personalized solutions through behavior pattern analysis',
            },
          },
          {
            icon: <Brain className="w-5 h-5" />,
            title: '🔄 Dynamic Problem-Solving',
            description: 'Create custom resolution paths that learn from each interaction',
            metrics: {
              value: 'Continuous learning and adaptation from interactions',
            },
          },
        ],
      },
      {
        icon: <LineChart className="w-5 h-5" />,
        title: 'Sales Intelligence Agents',
        description: 'Agentic AI that optimizes sales results through real-time market analysis',
        examples: [
          {
            icon: <Users className="w-5 h-5" />,
            title: '🎯 Lead Qualification Agents',
            description: 'Intelligent conversation-based lead qualification',
            metrics: {
              value: 'Uncover real needs and buying intent through conversations',
            },
          },
          {
            icon: <BarChart className="w-5 h-5" />,
            title: '📊 Strategic Account Planning',
            description: 'Data-driven engagement strategy optimization',
            metrics: {
              value: 'Continuous analysis of account data and market conditions',
            },
          },
          {
            icon: <Share2 className="w-5 h-5" />,
            title: '🔄 Deal Orchestration',
            description: 'Autonomous sales process coordination',
            metrics: {
              value: 'Adaptive strategies based on prospect behavior',
            },
          },
        ],
      },
      {
        icon: <DollarSign className="w-5 h-5" />,
        title: 'Financial Decision Agents',
        description: 'AI agents that assess, predict, and take autonomous financial actions',
        examples: [
          {
            icon: <TrendingUp className="w-5 h-5" />,
            title: '💰 Intelligent Cash Flow',
            description: 'Predictive cash flow management and optimization',
            metrics: {
              value: 'Autonomous financial strategy adjustments',
            },
          },
          {
            icon: <LineChart className="w-5 h-5" />,
            title: '⚠️ Risk Assessment',
            description: 'Proactive risk identification and mitigation',
            metrics: {
              value: 'Continuous monitoring of financial patterns',
            },
          },
          {
            icon: <DollarSign className="w-5 h-5" />,
            title: '📈 Investment Decisions',
            description: 'Data-driven investment recommendations',
            metrics: {
              value: 'Autonomous portfolio adjustments based on goals',
            },
          },
        ],
      },
      {
        icon: <Settings className="w-5 h-5" />,
        title: 'Operations Intelligence',
        description: 'AI agents that autonomously plan, execute, and adapt workflows',
        examples: [
          {
            icon: <TrendingUp className="w-5 h-5" />,
            title: '🏭 Supply Chain Optimization',
            description: 'Demand-driven supply chain management',
            metrics: {
              value: 'Autonomous inventory and logistics adjustments',
            },
          },
          {
            icon: <Users className="w-5 h-5" />,
            title: '👥 Workforce Planning',
            description: 'Data-driven team optimization',
            metrics: {
              value: 'Autonomous resource allocation and skill gap analysis',
            },
          },
          {
            icon: <Settings className="w-5 h-5" />,
            title: '⚡ Process Improvement',
            description: 'Continuous operational optimization',
            metrics: {
              value: 'Independent implementation of improvements',
            },
          },
        ],
      },
      {
        icon: <UserCog className="w-5 h-5" />,
        title: 'Autonomous Hiring',
        description: 'AI agents that revolutionize the entire recruitment process',
        examples: [
          {
            icon: <Users className="w-5 h-5" />,
            title: '🎯 End-to-End Recruitment',
            description: 'Complete hiring process automation',
            metrics: {
              value: 'From job posting to final candidate selection',
            },
          },
          {
            icon: <MessageSquare className="w-5 h-5" />,
            title: '🤝 Intelligent Assessment',
            description: 'Dynamic interview and evaluation system',
            metrics: {
              value: 'Real-time response analysis and adaptation',
            },
          },
          {
            icon: <Brain className="w-5 h-5" />,
            title: '🎯 Predictive Hiring',
            description: 'Data-driven candidate success prediction',
            metrics: {
              value: 'Cultural fit and retention likelihood analysis',
            },
          },
          {
            icon: <CheckCircle2 className="w-5 h-5" />,
            title: '⚖️ Bias-Free Selection',
            description: 'Objective skill-based hiring decisions',
            metrics: {
              value: 'Continuous learning to eliminate bias',
            },
          },
        ],
      },
      {
        icon: <LineChart className="w-5 h-5" />,
        title: 'Strategic Planning',
        description: 'AI agents that excel at autonomous business process management',
        examples: [
          {
            icon: <TrendingUp className="w-5 h-5" />,
            title: '📊 Market Intelligence',
            description: 'Real-time market analysis and recommendations',
            metrics: {
              value: 'Autonomous strategic updates based on trends',
            },
          },
          {
            icon: <BarChart className="w-5 h-5" />,
            title: '📈 Resource Allocation',
            description: 'Optimal resource distribution',
            metrics: {
              value: 'ROI-driven autonomous reallocation',
            },
          },
          {
            icon: <Rocket className="w-5 h-5" />,
            title: '🚀 Growth Strategy',
            description: 'Data-driven expansion planning',
            metrics: {
              value: 'Independent opportunity identification',
            },
          },
        ],
      },
      {
        icon: <Users className="w-5 h-5" />,
        title: 'Customer Journey Automation',
        description: 'Automate your entire customer relationship lifecycle',
        examples: [
          {
            icon: <MessageSquare className="w-5 h-5" />,
            title: '🎯 Lead Nurturing Sequences',
            description: 'Automated personalized email series and engagement tracking',
            metrics: {
              timeSaved: '10-15 hours/week',
              roi: '50% more qualified leads, faster sales cycles',
            },
            bullets: [
              'Automatically send personalized email series to new leads',
              'Track engagement and score leads based on behavior',
            ],
          },
          {
            icon: <FileSpreadsheet className="w-5 h-5" />,
            title: '📋 Customer Onboarding',
            description: 'Seamless onboarding experience for new clients',
            metrics: {
              timeSaved: '5-8 hours per new customer',
              roi: 'Improved customer satisfaction, reduced churn',
            },
            bullets: [
              'Welcome email series for new clients',
              'Automatic account setup and access provisioning',
              'Document collection and processing',
            ],
          },
          {
            icon: <CalendarClock className="w-5 h-5" />,
            title: '🔄 Follow-up Automation',
            description: 'Never miss a follow-up opportunity',
            bullets: [
              'Automatic appointment reminders (reduces no-shows by 40%)',
              'Post-service feedback collection',
              'Win-back campaigns for inactive customers',
            ],
          },
        ],
      },
      {
        icon: <DollarSign className="w-5 h-5" />,
        title: 'Administrative Tasks',
        description: 'Automate repetitive administrative work',
        examples: [
          {
            icon: <Calendar className="w-5 h-5" />,
            title: '💳 Invoicing & Payments',
            description: 'Fully automated billing system',
            metrics: {
              timeSaved: '12-20 hours/month',
              roi: 'Faster payments, improved cash flow',
            },
            bullets: [
              'Generate and send invoices automatically',
              'Payment reminders for overdue accounts',
              'Recurring billing for subscription services',
            ],
          },
          {
            icon: <BarChart className="w-5 h-5" />,
            title: '📊 Data Entry & Reporting',
            description: 'Automated data management and insights',
            metrics: {
              timeSaved: '8-15 hours/week',
              roi: 'Eliminate human errors, real-time insights',
            },
            bullets: [
              'Sync data between CRM, accounting, and project management tools',
              'Automatic report generation and distribution',
              'Inventory tracking and reorder alerts',
            ],
          },
          {
            icon: <Calendar className="w-5 h-5" />,
            title: '📅 Scheduling & Coordination',
            description: 'Effortless scheduling and team coordination',
            bullets: [
              'Automatic appointment booking with calendar integration',
              'Team task assignment based on workload and expertise',
              'Meeting coordination across time zones',
            ],
          },
        ],
      },
      {
        icon: <Share2 className="w-5 h-5" />,
        title: 'Marketing & Content',
        description: 'Automate your marketing efforts',
        examples: [
          {
            icon: <Share2 className="w-5 h-5" />,
            title: '📱 Social Media Management',
            description: 'Automated social media presence',
            metrics: {
              timeSaved: '10-12 hours/week',
              roi: 'Consistent online presence, increased engagement',
            },
            bullets: [
              'Content scheduling across multiple platforms',
              'Automatic posting of blog content to social channels',
              'Engagement tracking and reporting',
            ],
          },
          {
            icon: <Mail className="w-5 h-5" />,
            title: '📧 Email Marketing Campaigns',
            description: 'Automated email marketing suite',
            metrics: {
              roi: '25-40% increase in email revenue',
            },
            bullets: [
              'Behavioral trigger emails (abandoned cart, welcome series)',
              'Customer segmentation and targeted messaging',
              'A/B testing and optimization',
            ],
          },
        ],
      },
    ],
  },
  {
    icon: <Home className="w-6 h-6" />,
    title: 'Personal Task Automation',
    description: 'Smart solutions to streamline your daily life and routines',
    subcategories: [
      {
        icon: <Home className="w-5 h-5" />,
        title: 'Household Management',
        description: 'Automate your home life',
        examples: [
          {
            icon: <Brain className="w-5 h-5" />,
            title: '🏡 Smart Home Integration',
            description: 'Automate your home environment',
            metrics: {
              timeSaved: '3-5 hours/week',
              value: 'Reduced stress, never miss payments',
            },
            bullets: [
              'Automatic bill payments and budget tracking',
              'Home security and climate control',
              'Grocery list generation based on calendar and preferences',
            ],
          },
          {
            icon: <FileSpreadsheet className="w-5 h-5" />,
            title: '📝 Personal Organization',
            description: 'Stay organized effortlessly',
            metrics: {
              timeSaved: '2-4 hours/week',
            },
            bullets: [
              'Email sorting and priority flagging',
              'Calendar management and travel planning',
              'Document organization and backup',
            ],
          },
        ],
      },
      {
        icon: <LineChart className="w-5 h-5" />,
        title: 'Personal Finance',
        description: 'Automate your financial management',
        examples: [
          {
            icon: <DollarSign className="w-5 h-5" />,
            title: '💰 Expense Tracking & Budgeting',
            description: 'Automated financial management',
            metrics: {
              value: 'Better financial awareness, increased savings',
            },
            bullets: [
              'Categorize transactions automatically',
              'Budget alerts and spending insights',
              'Investment portfolio rebalancing',
            ],
          },
          {
            icon: <FileSpreadsheet className="w-5 h-5" />,
            title: '📄 Tax Preparation',
            description: 'Simplified tax management',
            metrics: {
              timeSaved: '10-15 hours during tax season',
            },
            bullets: [
              'Receipt scanning and categorization',
              'Mileage tracking for business use',
              'Automatic document collection for accountant',
            ],
          },
        ],
      },
    ],
  },
  {
    icon: <Rocket className="w-6 h-6" />,
    title: 'Enterprise Workflow Automation',
    description: 'Advanced solutions for complex business processes and operations',
    subcategories: [
      {
        icon: <ShoppingCart className="w-5 h-5" />,
        title: 'E-commerce & Online Sales',
        description: 'Scale your online business operations',
        examples: [
          {
            icon: <ShoppingCart className="w-5 h-5" />,
            title: '🛒 Order Processing',
            description: 'Automated order management',
            metrics: {
              roi: 'Handle 3x more orders with same staff',
            },
            bullets: [
              'Inventory management and restock alerts',
              'Order fulfillment and shipping automation',
              'Customer service chatbots for common inquiries',
            ],
          },
          {
            icon: <LineChart className="w-5 h-5" />,
            title: '📈 Dynamic Pricing',
            description: 'Automated pricing optimization',
            bullets: [
              'Competitor price monitoring',
              'Automatic price adjustments based on demand',
              'Promotional campaign management',
            ],
          },
        ],
      },
      {
        icon: <Briefcase className="w-5 h-5" />,
        title: 'Professional Services',
        description: 'Streamline service delivery and management',
        examples: [
          {
            icon: <Clock className="w-5 h-5" />,
            title: '⏰ Time Tracking & Billing',
            description: 'Automated time and billing management',
            metrics: {
              timeSaved: '6-10 hours/week',
            },
            bullets: [
              'Automatic time capture from calendar and apps',
              'Project budget monitoring and alerts',
              'Client reporting and invoice generation',
            ],
          },
          {
            icon: <UserCog className="w-5 h-5" />,
            title: '👥 Team Management',
            description: 'Automated team coordination',
            bullets: [
              'Employee onboarding workflows',
              'Performance review scheduling and reminders',
              'Resource allocation optimization',
            ],
          },
        ],
      },
    ],
  },
];

const industryExamples: IndustryExample[] = [
  {
    icon: <Building className="w-6 h-6" />,
    industry: 'Real Estate',
    examples: [
      'Lead qualification from listings',
      'Property showing scheduling',
      'Market analysis reports',
      'Client milestone notifications',
      'Document e-signature workflows',
      'MLS listing syndication',
      'Mortgage pre-approval tracking',
      'Property tax updates',
      'Maintenance request routing',
      'Lease renewal processes',
      'Tenant screening automation',
      'Commission calculations',
    ],
  },
  {
    icon: <Stethoscope className="w-6 h-6" />,
    industry: 'Healthcare & Medical',
    examples: [
      'Appointment reminder sequences',
      'Insurance verification',
      'Lab result notifications',
      'Prescription renewal alerts',
      'Patient intake processing',
      'Medical record updates',
      'Billing and claims submission',
      'Follow-up care scheduling',
      'Treatment plan tracking',
      'Equipment calibration reminders',
      'Staff scheduling optimization',
      'Compliance reporting',
    ],
  },
  {
    icon: <GraduationCap className="w-6 h-6" />,
    industry: 'Education & Training',
    examples: [
      'Course enrollment processing',
      'Assignment grading assistance',
      'Student progress tracking',
      'Parent communication',
      'Library book returns',
      'Event registration management',
      'Certificate generation',
      'Curriculum update notifications',
      'Attendance tracking',
      'Tuition payment reminders',
      'Graduation requirement monitoring',
      'Resource allocation',
    ],
  },
  {
    icon: <Laptop className="w-6 h-6" />,
    industry: 'Personal Productivity',
    examples: [
      'Calendar optimization',
      'Travel itinerary creation',
      'Gift reminder system',
      'Personal goal tracking',
      'Habit formation support',
      'Reading list management',
      'Recipe meal planning',
      'Exercise routine scheduling',
      'Medical appointment coordination',
      'Car maintenance alerts',
      'Home maintenance scheduling',
      'Personal finance dashboards',
    ],
  },
  {
    icon: <PenTool className="w-6 h-6" />,
    industry: 'Content Creation',
    examples: [
      'Video upload scheduling',
      'Podcast episode distribution',
      'Image optimization and tagging',
      'Copyright monitoring',
      'Content idea generation',
      'Performance analytics compilation',
      'Collaboration workflow management',
      'Version control automation',
      'Asset organization',
      'Publication calendar management',
      'Audience engagement tracking',
      'Monetization optimization',
    ],
  },
];

const benefits = [
  'Autonomous Decision-Making - Analyze situations and take action independently',
  'Continuous Learning - Every interaction makes agents smarter and more effective',
  'Contextual Understanding - Know not just what to do, but why and when',
  'Proactive Problem-Solving - Identify and address issues before they become problems',
  'Goal-Oriented - Focus on achieving business objectives, not just following rules',
];

const investmentRanges = [
  {
    title: 'Enterprise AI Agents',
    range: 'Custom Solution Pricing',
    period: 'Transformative ROI within 3-6 months',
  },
  {
    title: 'Department-Specific Agents',
    range: 'Flexible Implementation',
    period: 'Measurable impact in 1-3 months',
  },
];

export const AutomationSolutions: FC = () => {
  return (
    <section className="py-32 relative overflow-hidden" id="automation-solutions">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#6B46C1]/5 to-transparent" />

      <div className="w-[95%] max-w-[1400px] mx-auto relative">
        {/* Header */}
        <div className="text-center mb-24">
          <div className="inline-flex items-center gap-2 text-[#E94B87] mb-4">
            <Sparkles className="h-5 w-5" />
            <span className="uppercase tracking-wider text-sm font-semibold">
              AI Agent Services
            </span>
          </div>
          <h2 className="text-7xl font-clash mb-8 bg-gradient-to-r from-[#6B46C1] via-[#E94B87] to-[#F9A23F] inline-block text-transparent bg-clip-text leading-tight">
            Beyond Basic Automation
          </h2>
          <p className="text-xl text-gray-300 font-satoshi max-w-3xl mx-auto leading-relaxed">
            Transform your business operations with custom AI agents that go beyond simple
            automation. Unlike traditional RPA or basic chatbots, our AI agents can think, adapt,
            and make autonomous decisions to achieve your business goals.
          </p>
        </div>

        {/* Categories */}
        <div className="space-y-24">
          {categories.map((category) => (
            <div key={category.title} className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-[#6B46C1]/10 via-transparent to-[#F9A23F]/10 blur-3xl -z-10" />

              {/* Category Header */}
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#6B46C1] to-[#E94B87] flex items-center justify-center text-white">
                  {category.icon}
                </div>
                <div>
                  <h3 className="text-3xl font-clash text-white">{category.title}</h3>
                  <p className="text-gray-300 font-satoshi">{category.description}</p>
                </div>
              </div>

              {/* Subcategories Grid */}
              <div className="grid grid-cols-1 gap-12">
                {category.subcategories.map((subcategory) => (
                  <div key={subcategory.title}>
                    {/* Subcategory Header */}
                    <div className="flex items-center gap-4 mb-8">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#6B46C1]/20 to-[#E94B87]/20 flex items-center justify-center">
                        {subcategory.icon}
                      </div>
                      <div>
                        <h4 className="text-2xl font-clash text-white">{subcategory.title}</h4>
                        <p className="text-gray-300 font-satoshi">{subcategory.description}</p>
                      </div>
                    </div>

                    {/* Examples Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 ml-4">
                      {subcategory.examples.map((example) => (
                        <div key={example.title} className="group">
                          <div className="bg-black/20 backdrop-blur-xl rounded-2xl p-8 border border-white/5 hover:border-[#6B46C1]/30 transition-all duration-300 h-full">
                            <div className="flex items-start gap-4 mb-6">
                              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#6B46C1]/20 to-[#E94B87]/20 flex items-center justify-center">
                                {example.icon}
                              </div>
                              <div>
                                <h4 className="text-2xl font-clash text-white mb-2">
                                  {example.title}
                                </h4>
                                <p className="text-gray-300 font-satoshi">{example.description}</p>
                              </div>
                            </div>

                            {example.metrics && (
                              <div className="flex flex-wrap gap-4 mb-6">
                                {example.metrics.timeSaved && (
                                  <div className="flex items-center gap-2 bg-[#6B46C1]/10 rounded-lg px-3 py-2">
                                    <Clock className="w-4 h-4 text-[#E94B87]" />
                                    <span className="text-sm text-gray-300">
                                      {example.metrics.timeSaved}
                                    </span>
                                  </div>
                                )}
                                {example.metrics.roi && (
                                  <div className="flex items-center gap-2 bg-[#E94B87]/10 rounded-lg px-3 py-2">
                                    <TrendingUp className="w-4 h-4 text-[#F9A23F]" />
                                    <span className="text-sm text-gray-300">
                                      {example.metrics.roi}
                                    </span>
                                  </div>
                                )}
                                {example.metrics.value && (
                                  <div className="flex items-center gap-2 bg-[#F9A23F]/10 rounded-lg px-3 py-2">
                                    <CheckCircle2 className="w-4 h-4 text-[#6B46C1]" />
                                    <span className="text-sm text-gray-300">
                                      {example.metrics.value}
                                    </span>
                                  </div>
                                )}
                              </div>
                            )}

                            {example.bullets && (
                              <ul className="space-y-2">
                                {example.bullets.map((bullet) => (
                                  <li key={bullet} className="flex items-start gap-2 text-gray-300">
                                    <ArrowRight className="w-4 h-4 text-[#E94B87] mt-1 shrink-0" />
                                    <span>{bullet}</span>
                                  </li>
                                ))}
                              </ul>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Industry Examples */}
        <div className="mt-32 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-[#6B46C1]/10 via-[#E94B87]/10 to-[#F9A23F]/10 blur-3xl -z-10" />

          <div className="text-center mb-16">
            <h3 className="text-4xl font-clash mb-6">
              <span className="bg-gradient-to-r from-[#6B46C1] to-[#E94B87] inline-block text-transparent bg-clip-text">
                Complete List of Automation Examples
              </span>
            </h3>
            <p className="text-xl text-gray-300 font-satoshi">
              Industry-Specific Solutions That Drive Results
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industryExamples.map((industry) => (
              <div key={industry.industry} className="group">
                <div className="bg-black/20 backdrop-blur-xl rounded-2xl p-8 border border-white/5 hover:border-[#6B46C1]/30 transition-all duration-300 h-full">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#6B46C1]/20 to-[#E94B87]/20 flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
                      {industry.icon}
                    </div>
                    <h4 className="text-2xl font-clash text-white">{industry.industry}</h4>
                  </div>
                  <ul className="space-y-2">
                    {industry.examples.map((example) => (
                      <li key={example} className="flex items-start gap-2 text-gray-300 group/item">
                        <ArrowRight className="w-4 h-4 text-[#E94B87] mt-1 shrink-0 group-hover/item:translate-x-1 transition-transform" />
                        <span>{example}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Why These Examples Work */}
        <div className="mt-32 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-[#6B46C1]/10 via-[#E94B87]/10 to-[#F9A23F]/10 blur-3xl -z-10" />

          <div className="text-center mb-16">
            <h3 className="text-4xl font-clash mb-6">
              <span className="bg-gradient-to-r from-[#6B46C1] to-[#E94B87] inline-block text-transparent bg-clip-text">
                Why These Examples Work
              </span>
            </h3>
            <p className="text-xl text-gray-300 font-satoshi">
              High-Impact Characteristics That Drive Results
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {benefits.map((benefit) => (
              <div
                key={benefit}
                className="group flex items-center gap-4 bg-black/20 backdrop-blur-sm rounded-xl p-6 border border-white/5 hover:border-[#6B46C1]/30 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#6B46C1]/20 to-[#E94B87]/20 flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
                  <CheckCircle2 className="text-[#E94B87] h-6 w-6 shrink-0" />
                </div>
                <span className="text-lg text-gray-300 font-satoshi leading-relaxed">
                  {benefit}
                </span>
              </div>
            ))}
          </div>

          {/* Investment Ranges */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {investmentRanges.map((range) => (
              <div
                key={range.title}
                className="bg-black/20 backdrop-blur-xl rounded-2xl p-8 border border-white/5 text-center group hover:border-[#6B46C1]/30 transition-all duration-300"
              >
                <h4 className="text-2xl font-clash text-white mb-4">{range.title}</h4>
                <div className="text-3xl font-clash bg-gradient-to-r from-[#6B46C1] to-[#E94B87] inline-block text-transparent bg-clip-text mb-2">
                  {range.range}
                </div>
                <p className="text-gray-300 font-satoshi">{range.period}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-32 text-center relative">
          <div className="absolute inset-0 bg-gradient-to-r from-[#6B46C1]/10 via-[#E94B87]/10 to-[#F9A23F]/10 blur-3xl -z-10" />
          <div className="bg-black/20 backdrop-blur-xl rounded-2xl p-12 border border-white/5">
            <h4 className="text-3xl font-clash text-white mb-6">
              Ready to Move Beyond Basic Automation?
            </h4>
            <p className="text-xl text-gray-300 font-satoshi mb-8 max-w-3xl mx-auto leading-relaxed">
              Stop settling for rigid rule-based systems. Get AI agents that think, adapt, and
              deliver results autonomously. Schedule a free strategy session to discover how AI
              agents can transform your specific business challenges into competitive advantages.
            </p>
            <button className="bg-gradient-to-r from-[#6B46C1] to-[#E94B87] text-white font-satoshi px-8 py-4 rounded-xl text-lg font-medium hover:opacity-90 transition-opacity">
              Schedule Free Strategy Session
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
