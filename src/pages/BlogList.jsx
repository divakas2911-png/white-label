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
  "authorImage": author->image.asset->url,
  "categories": categories[]->title,
  "mainImage": mainImage.asset->url
}`

function PostCard({ post }) {
  const [hovered, setHovered] = useState(false)

  return (
    <article
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: '#fff',
        border: '2px solid #1c1917',
        borderRadius: '6px',
        boxShadow: hovered ? '6px 6px 0 0 #1c1917' : '4px 4px 0 0 #1c1917',
        transform: hovered ? 'translate(-2px, -2px)' : 'translate(0, 0)',
        transition: 'all 0.15s ease',
        display: 'flex',
        flexDirection: 'column',
        overflow: 'hidden',
      }}
    >
      {post.mainImage ? (
        <div style={{ overflow: 'hidden', height: '210px', borderBottom: '2px solid #1c1917' }}>
          <img
            src={post.mainImage}
            alt={post.title}
            style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.3s ease', transform: hovered ? 'scale(1.04)' : 'scale(1)' }}
          />
        </div>
      ) : (
        <div style={{ height: '210px', background: '#f5f5f4', borderBottom: '2px solid #1c1917', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <div style={{ width: '48px', height: '48px', background: '#f59e0b', border: '2px solid #1c1917', transform: 'rotate(45deg)' }} />
        </div>
      )}

      <div style={{ padding: '24px', display: 'flex', flexDirection: 'column', flex: 1 }}>
        <div style={{ display: 'flex', gap: '6px', marginBottom: '12px', flexWrap: 'wrap' }}>
          {post.categories?.map((cat) => (
            <span key={cat} style={{ background: '#fef3c7', color: '#92400e', fontSize: '11px', fontWeight: 700, padding: '3px 10px', letterSpacing: '0.06em', textTransform: 'uppercase', border: '1px solid #f59e0b', borderRadius: '4px' }}>
              {cat}
            </span>
          ))}
        </div>

        <Link to={`/blog/${post.slug.current}`} style={{ textDecoration: 'none', flex: 1 }}>
          <h2 style={{ color: '#1c1917', fontSize: '1.15rem', fontWeight: 700, marginBottom: '10px', lineHeight: 1.4, transition: 'color 0.15s ease', ...(hovered && { color: '#d97706' }) }}>
            {post.title}
          </h2>
        </Link>

        {post.excerpt && (
          <p style={{ color: '#57534e', lineHeight: 1.7, fontSize: '0.9rem', marginBottom: '16px' }}>{post.excerpt}</p>
        )}

        <div style={{ display: 'flex', gap: '8px', alignItems: 'center', fontSize: '12px', borderTop: '1px solid #e7e5e4', paddingTop: '14px', marginTop: 'auto' }}>
          {post.authorImage ? (
            <img src={post.authorImage} alt={post.author} style={{ width: '28px', height: '28px', borderRadius: '50%', objectFit: 'cover', border: '2px solid #1c1917', flexShrink: 0 }} />
          ) : post.author ? (
            <div style={{ width: '28px', height: '28px', borderRadius: '50%', background: '#f59e0b', border: '2px solid #1c1917', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, fontSize: '11px', color: '#1c1917', flexShrink: 0 }}>
              {post.author.charAt(0)}
            </div>
          ) : null}
          <div style={{ display: 'flex', gap: '6px', alignItems: 'center', color: '#a8a29e' }}>
            {post.author && <span style={{ color: '#57534e', fontWeight: 600 }}>{post.author}</span>}
            {post.author && post.publishedAt && <span>·</span>}
            {post.publishedAt && (
              <span>{new Date(post.publishedAt).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })}</span>
            )}
          </div>
        </div>
      </div>
    </article>
  )
}

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
    <main style={{ minHeight: '80vh', background: '#fafaf9' }}>
      {/* Header */}
      <div style={{ background: '#fff', padding: 'calc(80px + 64px) 24px 56px' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: '#f59e0b', border: '2px solid #1c1917', borderRadius: '100px', padding: '5px 16px', marginBottom: '24px', boxShadow: '3px 3px 0 0 #1c1917' }}>
            <span style={{ width: '7px', height: '7px', background: '#1c1917', borderRadius: '50%' }} />
            <span style={{ fontSize: '12px', fontWeight: 700, color: '#1c1917', letterSpacing: '0.08em', textTransform: 'uppercase' }}>Our Blog</span>
          </div>
          <h1 style={{ fontSize: 'clamp(2rem, 4.5vw, 3.2rem)', fontWeight: 800, color: '#1c1917', lineHeight: 1.15, letterSpacing: '-0.02em', marginBottom: '16px' }}>
            Insights on{' '}
            <span style={{ color: '#f59e0b', backgroundImage: 'linear-gradient(transparent 65%, rgba(245,158,11,0.22) 65%)', WebkitBoxDecorationBreak: 'clone' }}>Link Building Outsourcing</span>
          </h1>
          <p style={{ color: '#57534e', fontSize: '1.1rem', maxWidth: '500px', lineHeight: 1.7 }}>
            The go-to resource for agencies who outsource link building.
          </p>
        </div>
      </div>

      {/* Posts */}
      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '56px 24px 80px' }}>
        {loading && (
          <p style={{ color: '#a8a29e', fontSize: '15px' }}>Loading posts...</p>
        )}

        {!loading && posts.length === 0 && (
          <div style={{ border: '2px dashed #d6d3d1', borderRadius: '6px', padding: '56px', textAlign: 'center' }}>
            <p style={{ color: '#a8a29e' }}>No posts yet. Add your first post in the Sanity Studio.</p>
          </div>
        )}

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '28px' }}>
          {posts.map((post) => (
            <PostCard key={post._id} post={post} />
          ))}
        </div>
      </div>
    </main>
  )
}
