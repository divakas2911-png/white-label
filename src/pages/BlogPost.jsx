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
  "authorImage": author->image.asset->url,
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

  if (loading) return (
    <main style={{ minHeight: '80vh', background: '#fafaf9', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <p style={{ color: '#a8a29e' }}>Loading...</p>
    </main>
  )

  if (!post) return (
    <main style={{ minHeight: '80vh', background: '#fafaf9', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <p style={{ color: '#a8a29e' }}>Post not found.</p>
    </main>
  )

  return (
    <main style={{ background: '#fafaf9', minHeight: '80vh' }}>
      {/* Hero */}
      <div style={{ background: '#fff', borderBottom: '1px solid #e7e5e4', padding: 'calc(80px + 48px) 24px 48px' }}>
        <div style={{ maxWidth: '760px', margin: '0 auto' }}>
          <Link to="/blog" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', color: '#57534e', fontSize: '13px', fontWeight: 600, textDecoration: 'none', marginBottom: '28px', border: '1.5px solid #d6d3d1', borderRadius: '4px', padding: '5px 14px', background: '#fff', transition: 'border-color 0.15s' }}>
            ← Back to Blog
          </Link>

          <div style={{ display: 'flex', gap: '6px', marginBottom: '16px', flexWrap: 'wrap' }}>
            {post.categories?.map((cat) => (
              <span key={cat} style={{ background: '#fef3c7', color: '#92400e', fontSize: '11px', fontWeight: 700, padding: '3px 10px', letterSpacing: '0.06em', textTransform: 'uppercase', border: '1px solid #f59e0b', borderRadius: '4px' }}>
                {cat}
              </span>
            ))}
          </div>

          <h1 style={{ color: '#1c1917', fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', fontWeight: 800, lineHeight: 1.2, letterSpacing: '-0.02em', marginBottom: '20px' }}>
            {post.title}
          </h1>

          {post.excerpt && (
            <p style={{ color: '#57534e', fontSize: '1.1rem', lineHeight: 1.7, marginBottom: '24px', borderLeft: '3px solid #f59e0b', paddingLeft: '16px' }}>
              {post.excerpt}
            </p>
          )}

          <div style={{ display: 'flex', gap: '10px', alignItems: 'center', fontSize: '13px' }}>
            {post.authorImage ? (
              <img src={post.authorImage} alt={post.author} style={{ width: '36px', height: '36px', borderRadius: '50%', objectFit: 'cover', border: '2px solid #1c1917' }} />
            ) : post.author ? (
              <div style={{ width: '36px', height: '36px', borderRadius: '50%', background: '#f59e0b', border: '2px solid #1c1917', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, fontSize: '14px', color: '#1c1917' }}>
                {post.author.charAt(0)}
              </div>
            ) : null}
            <div style={{ display: 'flex', gap: '6px', alignItems: 'center', color: '#a8a29e' }}>
              {post.author && <span style={{ color: '#57534e', fontWeight: 600 }}>{post.author}</span>}
              {post.author && post.publishedAt && <span>·</span>}
              {post.publishedAt && (
                <span>{new Date(post.publishedAt).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Featured Image */}
      {post.mainImage && (
        <div style={{ maxWidth: '760px', margin: '0 auto', padding: '0 24px' }}>
          <img
            src={post.mainImage}
            alt={post.title}
            style={{ width: '100%', height: '400px', objectFit: 'cover', border: '2px solid #1c1917', boxShadow: '6px 6px 0 0 #1c1917', marginTop: '48px' }}
          />
        </div>
      )}

      {/* Body */}
      <div style={{ maxWidth: '760px', margin: '0 auto', padding: `${post.mainImage ? '48px' : '56px'} 24px 80px` }}>
        <div style={{
          color: '#292524',
          lineHeight: 1.85,
          fontSize: '1.05rem',
        }}>
          <style>{`
            .post-body h2 { font-size: 1.6rem; font-weight: 700; color: #1c1917; margin: 2rem 0 1rem; letter-spacing: -0.01em; }
            .post-body h3 { font-size: 1.25rem; font-weight: 700; color: #1c1917; margin: 1.5rem 0 0.75rem; }
            .post-body p { margin-bottom: 1.25rem; }
            .post-body a { color: #d97706; text-decoration: underline; }
            .post-body ul, .post-body ol { padding-left: 1.5rem; margin-bottom: 1.25rem; }
            .post-body li { margin-bottom: 0.4rem; }
            .post-body blockquote { border-left: 3px solid #f59e0b; padding-left: 16px; margin: 1.5rem 0; color: #57534e; font-style: italic; }
            .post-body strong { color: #1c1917; font-weight: 700; }
          `}</style>
          <div className="post-body">
            <PortableText value={post.body} />
          </div>
        </div>
      </div>
    </main>
  )
}
