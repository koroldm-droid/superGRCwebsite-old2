import { Calendar, Clock, ArrowLeft, Share2, Linkedin, Twitter, Facebook } from 'lucide-react';
import type { BlogPost as BlogPostType } from './BlogList';

interface BlogPostProps {
  post: BlogPostType;
  onBack?: () => void;
}

export function BlogPost({ post, onBack }: BlogPostProps) {
  const shareUrl = `https://supergrc.com/blog/${post.slug}`;
  const shareTitle = post.title;

  const handleShare = (platform: 'linkedin' | 'twitter' | 'facebook') => {
    const urls = {
      linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`,
      twitter: `https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(shareTitle)}`,
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`
    };

    window.open(urls[platform], '_blank', 'width=600,height=400');
  };

  return (
    <article className="min-h-screen bg-[#E6E6E6] py-16 md:py-20">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Back Button */}
        {onBack && (
          <button
            onClick={onBack}
            className="flex items-center gap-2 text-[#151719]/70 hover:text-[#CFE928] transition-colors mb-8"
            style={{ fontFamily: 'Pragmatica Bold, sans-serif' }}
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Articles
          </button>
        )}

        {/* Article Header */}
        <header className="mb-8">
          {/* Category */}
          <div className="mb-4">
            <span className="bg-[#CFE928] text-[#151719] px-4 py-2 rounded-full text-sm" style={{ fontFamily: 'Pragmatica Bold, sans-serif' }}>
              {post.category}
            </span>
          </div>

          {/* Title */}
          <h1 className="text-3xl md:text-5xl lg:text-6xl text-[#151719] mb-6" style={{ fontFamily: 'Pragmatica Bold, sans-serif' }}>
            {post.title}
          </h1>

          {/* Meta Info */}
          <div className="flex flex-wrap items-center gap-6 mb-6 text-[#151719]/70" style={{ fontFamily: 'Pragmatica, sans-serif' }}>
            <div className="flex items-center gap-2">
              <Calendar className="w-5 h-5" />
              <span>{post.publishDate}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5" />
              <span>{post.readTime}</span>
            </div>
          </div>

          {/* Author */}
          <div className="flex items-center gap-4 pb-6 border-b border-[#151719]/10">
            {post.author.avatar && (
              <img
                src={post.author.avatar}
                alt={post.author.name}
                className="w-14 h-14 rounded-full"
                loading="eager"
              />
            )}
            <div>
              <p className="text-lg text-[#151719]" style={{ fontFamily: 'Pragmatica Bold, sans-serif' }}>
                {post.author.name}
              </p>
              <p className="text-[#151719]/60" style={{ fontFamily: 'Pragmatica, sans-serif' }}>
                {post.author.role}
              </p>
            </div>
          </div>
        </header>

        {/* Featured Image */}
        {post.featuredImage && (
          <div className="mb-8 rounded-xl overflow-hidden shadow-2xl">
            <img
              src={post.featuredImage}
              alt={post.title}
              className="w-full h-auto"
              loading="eager"
            />
          </div>
        )}

        {/* Article Content */}
        <div 
          className="bg-white rounded-xl shadow-lg p-8 md:p-12 mb-8"
          style={{ fontFamily: 'Pragmatica, sans-serif' }}
        >
          <div className="prose prose-lg max-w-none text-[#151719]">
            {/* This would render the actual blog content */}
            {/* For now, showing a placeholder structure */}
            
            <p className="text-xl leading-relaxed mb-6 text-[#151719]/80">
              {post.excerpt}
            </p>

            <h2 className="text-3xl mt-8 mb-4 text-[#151719]" style={{ fontFamily: 'Pragmatica Bold, sans-serif' }}>
              Introduction
            </h2>
            <p className="mb-6 leading-relaxed">
              This is where the main article content would go. The blog post content can include 
              multiple sections, images, code snippets, lists, and other rich content.
            </p>

            <h3 className="text-2xl mt-6 mb-3 text-[#151719]" style={{ fontFamily: 'Pragmatica Bold, sans-serif' }}>
              Key Takeaways
            </h3>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>Important point about the topic</li>
              <li>Another critical insight</li>
              <li>Actionable recommendation</li>
              <li>Best practice to implement</li>
            </ul>

            <h3 className="text-2xl mt-6 mb-3 text-[#151719]" style={{ fontFamily: 'Pragmatica Bold, sans-serif' }}>
              Step-by-Step Guide
            </h3>
            <ol className="list-decimal pl-6 mb-6 space-y-2">
              <li>First step in the process</li>
              <li>Second step with details</li>
              <li>Third step to complete</li>
            </ol>

            <div className="bg-[#CFE928]/20 border-l-4 border-[#CFE928] p-6 my-8">
              <p className="text-[#151719]" style={{ fontFamily: 'Pragmatica Bold, sans-serif' }}>
                💡 Pro Tip
              </p>
              <p className="mt-2">
                This is a highlighted callout box for important information or pro tips 
                that readers should pay special attention to.
              </p>
            </div>

            <h2 className="text-3xl mt-8 mb-4 text-[#151719]" style={{ fontFamily: 'Pragmatica Bold, sans-serif' }}>
              Conclusion
            </h2>
            <p className="mb-6 leading-relaxed">
              Wrap up the article with key conclusions and next steps for readers.
            </p>
          </div>
        </div>

        {/* Tags */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
          <h3 className="text-lg mb-4 text-[#151719]" style={{ fontFamily: 'Pragmatica Bold, sans-serif' }}>
            Tags
          </h3>
          <div className="flex flex-wrap gap-2">
            {post.tags.map((tag, index) => (
              <span
                key={index}
                className="bg-[#151719]/5 text-[#151719]/70 px-4 py-2 rounded-lg hover:bg-[#CFE928]/20 transition-colors cursor-pointer"
                style={{ fontFamily: 'Pragmatica, sans-serif' }}
              >
                #{tag}
              </span>
            ))}
          </div>
        </div>

        {/* Share Section */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
          <h3 className="text-lg mb-4 text-[#151719]" style={{ fontFamily: 'Pragmatica Bold, sans-serif' }}>
            Share this article
          </h3>
          <div className="flex gap-4">
            <button
              onClick={() => handleShare('linkedin')}
              className="flex items-center gap-2 bg-[#0077B5] text-white px-6 py-3 rounded-lg hover:bg-[#006399] transition-colors"
              style={{ fontFamily: 'Pragmatica Bold, sans-serif' }}
            >
              <Linkedin className="w-5 h-5" />
              LinkedIn
            </button>
            <button
              onClick={() => handleShare('twitter')}
              className="flex items-center gap-2 bg-[#1DA1F2] text-white px-6 py-3 rounded-lg hover:bg-[#1a8cd8] transition-colors"
              style={{ fontFamily: 'Pragmatica Bold, sans-serif' }}
            >
              <Twitter className="w-5 h-5" />
              Twitter
            </button>
            <button
              onClick={() => handleShare('facebook')}
              className="flex items-center gap-2 bg-[#4267B2] text-white px-6 py-3 rounded-lg hover:bg-[#365899] transition-colors"
              style={{ fontFamily: 'Pragmatica Bold, sans-serif' }}
            >
              <Facebook className="w-5 h-5" />
              Facebook
            </button>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-[#CFE928] to-[#9FCFD3] rounded-xl shadow-2xl p-8 md:p-12 text-center">
          <h3 className="text-2xl md:text-3xl text-[#151719] mb-4" style={{ fontFamily: 'Pragmatica Bold, sans-serif' }}>
            Ready to Transform Your GRC Operations?
          </h3>
          <p className="text-[#151719]/80 mb-6 text-lg" style={{ fontFamily: 'Pragmatica, sans-serif' }}>
            See how Super GRC can help you achieve compliance faster and manage risk more effectively.
          </p>
          <button
            onClick={() => {
              document.getElementById('demo')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="bg-[#151719] text-white px-8 py-4 rounded-lg hover:bg-[#151719]/90 transition-all shadow-lg"
            style={{ fontFamily: 'Pragmatica Bold, sans-serif' }}
          >
            Request a Demo
          </button>
        </div>
      </div>
    </article>
  );
}
