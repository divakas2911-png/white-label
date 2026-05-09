import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { client } from '../lib/sanityClient'

const query = `*[_type == "post"] | order(publishedAt desc) {
  _id,
  title,
  slug,
  publishedAt,
  excerpt,
  "author": author->name,
  "categories": categories[]->title,
  "mainImage": mainImage.asset->url
}`

export default function BlogList() {
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    client.fetch(query).then((data) => {
      setPosts(data)
      setLoading(false)
    })
  }, [])

  return (
    <main style={{ minHeight: '80vh', background: '#111', padding: '80px 24px' }}>
      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        <h1 style={{ color: '#fff', fontSize: '2.5rem', fontWeight: 700, marginBottom: '8px' }}>Blog</h1>
        <p style={{ color: '#888', marginBottom: '48px' }}>Insights on white label link building and SEO.</p>

        {loading && <p style={{ color: '#666' }}>Loading...</p>}

        {!loading && posts.length === 0 && (
          <p style={{ color: '#666' }}>No posts yet. Add your first post in the Sanity Studio.</p>
        )}

        <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
          {posts.map((post) => (
            <article key={post._id} style={{ borderBottom: '1px solid #222', paddingBottom: '32px' }}>
              {post.mainImage && (
                <img
                  src={post.mainImage}
                  alt={post.title}
                  style={{ width: '100%', height: '220px', objectFit: 'cover', borderRadius: '8px', marginBottom: '16px' }}
                />
              )}
              <div style={{ display: 'flex', gap: '8px', marginBottom: '8px', flexWrap: 'wrap' }}>
                {post.categories?.map((cat) => (
                  <span key={cat} style={{ background: '#1a1a1a', color: '#888', fontSize: '12px', padding: '2px 10px', borderRadius: '999px', border: '1px solid #333' }}>
                    {cat}
                  </span>
                ))}
              </div>
              <Link to={`/blog/${post.slug.current}`} style={{ textDecoration: 'none' }}>
                <h2 style={{ color: '#fff', fontSize: '1.4rem', fontWeight: 600, marginBottom: '8px', lineHeight: 1.4 }}>
                  {post.title}
                </h2>
              </Link>
              {post.excerpt && (
                <p style={{ color: '#888', lineHeight: 1.7, marginBottom: '12px' }}>{post.excerpt}</p>
              )}
              <div style={{ display: 'flex', gap: '12px', color: '#555', fontSize: '13px' }}>
                {post.author && <span>{post.author}</span>}
                {post.publishedAt && (
                  <span>{new Date(post.publishedAt).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </main>
  )
}
