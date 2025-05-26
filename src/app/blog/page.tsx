import Link from 'next/link'
import { getAllPosts, urlFor, BlogPost } from '@/lib/sanity'
import Image from 'next/image'

export default async function BlogPage() {
  const posts = await getAllPosts()
  
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-900 to-emerald-950 py-20">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Marketing Insights
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-300">
              & Strategy
            </span>
          </h1>
          <p className="text-xl text-gray-400">
            Thoughts on growth marketing, sustainability, and building great products
          </p>
        </div>
        
        <div className="grid gap-8">
          {posts.map((post: BlogPost) => (
            <Link key={post._id} href={`/blog/${post.slug.current}`}>
              <article className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:border-white/40 transition-all duration-300 hover:scale-[1.02] group">
                {post.mainImage && (
                  <div className="mb-6 overflow-hidden rounded-xl">
                    <Image
                      src={urlFor(post.mainImage).width(800).height(400).url()}
                      alt={post.title}
                      width={800}
                      height={400}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                )}
                
                <h2 className="text-2xl font-bold text-white mb-4 group-hover:text-green-300 transition-colors">
                  {post.title}
                </h2>
                
                {post.excerpt && (
                  <p className="text-gray-300 mb-4 leading-relaxed">
                    {post.excerpt}
                  </p>
                )}
                
                <div className="flex items-center justify-between text-sm text-gray-400">
                  <span>By {post.author || 'Benjamin Vink'}</span>
                  <span>{new Date(post.publishedAt).toLocaleDateString()}</span>
                </div>
              </article>
            </Link>
          ))}
          
          {posts.length === 0 && (
            <div className="text-center py-16">
              <div className="text-6xl mb-4">📝</div>
              <h3 className="text-2xl font-bold text-white mb-4">No posts yet</h3>
              <p className="text-gray-400 mb-8">Create your first blog post in the studio!</p>
              <Link 
                href="/studio" 
                className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-6 py-3 rounded-full font-semibold hover:scale-105 transition-transform duration-200"
              >
                Go to Studio
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}