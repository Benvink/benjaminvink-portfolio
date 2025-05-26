import { getPost, urlFor, BlogPost } from '@/lib/sanity'
import { PortableText } from '@portabletext/react'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'

interface ComponentProps {
  children?: React.ReactNode
  value?: {
    href?: string
    alt?: string
  }
}

// Custom components for rich text
const components = {
  types: {
    image: ({ value }: ComponentProps) => (
      <div className="my-8">
        <Image
          src={urlFor(value).width(800).height(400).url()}
          alt={value?.alt || 'Blog image'}
          width={800}
          height={400}
          className="rounded-xl w-full"
        />
      </div>
    ),
  },
  block: {
    h2: ({ children }: ComponentProps) => (
      <h2 className="text-3xl font-bold text-white mt-8 mb-4">{children}</h2>
    ),
    h3: ({ children }: ComponentProps) => (
      <h3 className="text-2xl font-bold text-white mt-6 mb-3">{children}</h3>
    ),
    normal: ({ children }: ComponentProps) => (
      <p className="text-gray-300 leading-relaxed mb-4">{children}</p>
    ),
  },
  marks: {
    link: ({ children, value }: ComponentProps) => (
      <a
        href={value?.href}
        target="_blank"
        rel="noopener noreferrer"
        className="text-green-400 hover:text-green-300 underline"
      >
        {children}
      </a>
    ),
  },
}

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = await getPost(slug)
  
  if (!post) {
    notFound()
  }
  
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-900 to-emerald-950">
      <div className="max-w-4xl mx-auto px-4 py-20">
        <div className="mb-8">
          <Link 
            href="/blog"
            className="inline-flex items-center gap-2 text-green-400 hover:text-green-300 transition-colors"
          >
            ← Back to all posts
          </Link>
        </div>
        
        <header className="mb-12">
          {post.mainImage && (
            <div className="mb-8 overflow-hidden rounded-2xl">
              <Image
                src={urlFor(post.mainImage).width(1200).height(600).url()}
                alt={post.title}
                width={1200}
                height={600}
                className="w-full h-64 md:h-96 object-cover"
              />
            </div>
          )}
          
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            {post.title}
          </h1>
          
          {post.excerpt && (
            <p className="text-xl text-gray-300 mb-6 leading-relaxed">
              {post.excerpt}
            </p>
          )}
          
          <div className="flex items-center gap-4 text-gray-400">
            <span>By {post.author || 'Benjamin Vink'}</span>
            <span>•</span>
            <span>{new Date(post.publishedAt).toLocaleDateString()}</span>
          </div>
        </header>
        
        <article className="prose prose-lg prose-invert max-w-none">
          <PortableText value={post.body} components={components} />
        </article>
        
        <footer className="mt-16 pt-8 border-t border-white/20">
          <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to drive growth for your business?
            </h3>
            <p className="text-gray-300 mb-6">
              Let&apos;s discuss how my marketing expertise can accelerate your success.
            </p>
            <Link 
              href="/#contact"
              className="inline-block bg-gradient-to-r from-green-500 to-emerald-600 text-white px-8 py-4 rounded-full font-semibold hover:scale-105 transition-transform duration-200"
            >
              Get In Touch 🌱
            </Link>
          </div>
        </footer>
      </div>
    </div>
  )
}