import { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { PortableText } from '@portabletext/react'
import { client } from '../lib/sanityClient'

const query = `*[_type == "post" && slug.current == $slug][0] {
  title,
  publishedAt,
  excerpt,
  body,
  "author": author->name,
  "categories": categories[]->title,
  "mainImage": mainImage.asset->url
}`

export default function BlogPost() {
  const { slug } = useParams()
  const [post, setPost] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    client.fetch(query, { slug }).then((data) => {
      setPost(data)
      setLoading(false)
    })
  }, [slug])

  if (loading) return <main style={{ minHeight: '80vh', background: '#111', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><p style={{ color: '#666' }}>Loading...</p></main>

  if (!post) return <main style={{ minHeight: '80vh', background: '#111', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><p style={{ color: '#666' }}>Post not found.</p></main>

  return (
    <main style={{ minHeight: '80vh', background: '#111', padding: '80px 24px' }}>
      <div style={{ maxWidth: '720px', margin: '0 auto' }}>
        <Link to="/blog" style={{ color: '#888', fontSize: '14px', textDecoration: 'none', display: 'inline-block', marginBottom: '32px' }}>← Back to Blog</Link>

        <div style={{ display: 'flex', gap: '8px', marginBottom: '12px', flexWrap: 'wrap' }}>
          {post.categories?.map((cat) => (
            <span key={cat} style={{ background: '#1a1a1a', color: '#888', fontSize: '12px', padding: '2px 10px', borderRadius: '999px', border: '1px solid #333' }}>
              {cat}
            </span>
          ))}
        </div>

        <h1 style={{ color: '#fff', fontSize: '2.2rem', fontWeight: 700, lineHeight: 1.3, marginBottom: '16px' }}>{post.title}</h1>

        <div style={{ display: 'flex', gap: '12px', color: '#555', fontSize: '13px', marginBottom: '32px' }}>
          {post.author && <span>{post.author}</span>}
          {post.publishedAt && (
            <span>{new Date(post.publishedAt).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
          )}
        </div>

        {post.mainImage && (
          <img
            src={post.mainImage}
            alt={post.title}
            style={{ width: '100%', height: '360px', objectFit: 'cover', borderRadius: '8px', marginBottom: '40px' }}
          />
        )}

        <div style={{ color: '#ccc', lineHeight: 1.8, fontSize: '1.05rem' }}>
          <PortableText value={post.body} />
        </div>
      </div>
    </main>
  )
}
