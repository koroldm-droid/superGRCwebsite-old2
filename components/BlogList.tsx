import { Calendar, Clock, ArrowRight, Tag } from 'lucide-react';

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: {
    name: string;
    role: string;
    avatar?: string;
  };
  publishDate: string;
  readTime: string;
  category: string;
  tags: string[];
  featuredImage?: string;
  slug: string;
}

interface BlogListProps {
  posts: BlogPost[];
  onPostClick?: (post: BlogPost) => void;
}

export function BlogList({ posts, onPostClick }: BlogListProps) {
  return (
    <section id="blog" className="py-16 md:py-20 bg-[#E6E6E6]">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="mb-4 md:mb-6 text-3xl md:text-5xl lg:text-6xl text-[#151719]" style={{ fontFamily: 'Pragmatica Bold, sans-serif' }}>
            Latest Insights
          </h2>
          <p className="text-base md:text-xl text-[#151719]/70 leading-relaxed max-w-3xl mx-auto px-4" style={{ fontFamily: 'Pragmatica, sans-serif' }}>
            Expert perspectives on cybersecurity risk management, compliance frameworks, and GRC best practices
          </p>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {posts.map((post) => (
            <article
              key={post.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 cursor-pointer group"
              onClick={() => onPostClick?.(post)}
            >
              {/* Featured Image */}
              {post.featuredImage && (
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={post.featuredImage}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    loading="lazy"
                  />
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="bg-[#CFE928] text-[#151719] px-3 py-1 rounded-full text-sm" style={{ fontFamily: 'Pragmatica Bold, sans-serif' }}>
                      {post.category}
                    </span>
                  </div>
                </div>
              )}

              {/* Content */}
              <div className="p-6">
                {/* Meta Info */}
                <div className="flex items-center gap-4 mb-4 text-sm text-[#151719]/60" style={{ fontFamily: 'Pragmatica, sans-serif' }}>
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    <span>{post.publishDate}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    <span>{post.readTime}</span>
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl md:text-2xl text-[#151719] mb-3 group-hover:text-[#CFE928] transition-colors" style={{ fontFamily: 'Pragmatica Bold, sans-serif' }}>
                  {post.title}
                </h3>

                {/* Excerpt */}
                <p className="text-[#151719]/70 mb-4 leading-relaxed" style={{ fontFamily: 'Pragmatica, sans-serif' }}>
                  {post.excerpt}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {post.tags.slice(0, 3).map((tag, index) => (
                    <span
                      key={index}
                      className="flex items-center gap-1 text-xs text-[#151719]/50 bg-[#151719]/5 px-2 py-1 rounded"
                      style={{ fontFamily: 'Pragmatica, sans-serif' }}
                    >
                      <Tag className="w-3 h-3" />
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Author & Read More */}
                <div className="flex items-center justify-between pt-4 border-t border-[#151719]/10">
                  <div className="flex items-center gap-3">
                    {post.author.avatar && (
                      <img
                        src={post.author.avatar}
                        alt={post.author.name}
                        className="w-10 h-10 rounded-full"
                        loading="lazy"
                      />
                    )}
                    <div>
                      <p className="text-sm text-[#151719]" style={{ fontFamily: 'Pragmatica Bold, sans-serif' }}>
                        {post.author.name}
                      </p>
                      <p className="text-xs text-[#151719]/60" style={{ fontFamily: 'Pragmatica, sans-serif' }}>
                        {post.author.role}
                      </p>
                    </div>
                  </div>

                  <ArrowRight className="w-5 h-5 text-[#CFE928] group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Load More / View All (if needed) */}
        {posts.length >= 6 && (
          <div className="text-center mt-12">
            <button
              className="bg-[#CFE928] text-[#151719] px-8 py-4 rounded-lg hover:bg-[#CFE928]/90 transition-all shadow-lg inline-flex items-center gap-2"
              style={{ fontFamily: 'Pragmatica Bold, sans-serif' }}
            >
              View All Articles
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

// Sample blog posts for demonstration
export const sampleBlogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'Complete Guide to SOC 2 Compliance in 2025',
    excerpt: 'Everything you need to know about achieving and maintaining SOC 2 compliance, from initial assessment to continuous monitoring.',
    content: '...',
    author: {
      name: 'Sarah Chen',
      role: 'Compliance Expert',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100'
    },
    publishDate: 'Nov 15, 2025',
    readTime: '8 min read',
    category: 'Compliance',
    tags: ['SOC 2', 'Compliance', 'Security'],
    featuredImage: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800',
    slug: 'soc-2-compliance-guide-2025'
  },
  {
    id: '2',
    title: 'Automated Asset Discovery: Best Practices',
    excerpt: 'Learn how to implement automated asset discovery to maintain complete visibility across your IT infrastructure.',
    content: '...',
    author: {
      name: 'Michael Torres',
      role: 'Security Architect',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100'
    },
    publishDate: 'Nov 12, 2025',
    readTime: '6 min read',
    category: 'Asset Management',
    tags: ['Asset Discovery', 'Automation', 'Infrastructure'],
    featuredImage: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800',
    slug: 'automated-asset-discovery-best-practices'
  },
  {
    id: '3',
    title: 'Third-Party Risk Management in 2025',
    excerpt: 'Navigate vendor risk assessments and third-party security with modern approaches and automation.',
    content: '...',
    author: {
      name: 'Jennifer Park',
      role: 'Risk Management Lead',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100'
    },
    publishDate: 'Nov 10, 2025',
    readTime: '10 min read',
    category: 'Risk Management',
    tags: ['Third-Party Risk', 'Vendor Management', 'TPRM'],
    featuredImage: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800',
    slug: 'third-party-risk-management-2025'
  }
];
