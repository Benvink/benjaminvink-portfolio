import { createClient } from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
  useCdn: true,
  apiVersion: '2023-05-03',
})

const builder = imageUrlBuilder(client)
export const urlFor = (source: unknown) => builder.image(source)

// Types for blog posts
export interface BlogPost {
  _id: string
  title: string
  slug: { current: string }
  excerpt?: string
  mainImage?: unknown
  publishedAt: string
  author?: string
  body: unknown[]
}

// Helper function to get all posts
export async function getAllPosts(): Promise<BlogPost[]> {
  return client.fetch(`
    *[_type == "post" && defined(slug.current)] | order(publishedAt desc) {
      _id,
      title,
      slug,
      excerpt,
      mainImage,
      publishedAt,
      "author": author->name,
      body
    }
  `)
}

// Helper function to get a single post
export async function getPost(slug: string): Promise<BlogPost | null> {
  return client.fetch(`
    *[_type == "post" && slug.current == $slug][0] {
      _id,
      title,
      slug,
      excerpt,
      mainImage,
      publishedAt,
      "author": author->name,
      body
    }
  `, { slug })
}// Helper function to get all posts
export async function getAllPosts(): Promise<BlogPost[]> {
    return client.fetch(`
      *[_type == "post" && defined(publishedAt)] | order(publishedAt desc) {
        _id,
        title,
        slug,
        excerpt,
        mainImage,
        publishedAt,
        body
      }
    `)
  }
  
  // Helper function to get a single post
  export async function getPost(slug: string): Promise<BlogPost | null> {
    return client.fetch(`
      *[_type == "post" && slug.current == $slug && defined(publishedAt)][0] {
        _id,
        title,
        slug,
        excerpt,
        mainImage,
        publishedAt,
        body
      }
    `, { slug })
  }