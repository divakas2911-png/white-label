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

function PostCard({ post }) {
  const [hovered, setHovered] = useState(false)

  return (
    <article
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: '#1e1b18',
        border: '1px solid #292524',
        boxShadow: hovered ? '4px 4px 0 0 #f59e0b' : '4px 4px 0 0 #292524',
        transform: hovered ? 'translate(-2px, -2px)' : 'translate(0, 0)',
        transition: 'all 0.15s ease',
        display: 'flex',
        flexDirection: 'column',
        overflow: 'hidden',
      }}
    >
      {post.mainImage ? (
        <div style={{ overflow: 'hidden', height: '200px' }}>
          <img
            src={post.mainImage}
            alt={post.title}
            style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.3s ease', transform: hovered ? 'scale(1.04)' : 'scale(1)' }}
          />
        </div>
      ) : (
        <div style={{ height: '200px', background: '#292524', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <div style={{ width: '40px', height: '40px', border: '2px solid #f59e0b', transform: 'rotate(45deg)' }} />
        </div>
      )}

      <div style={{ padding: '24px', display: 'flex', flexDirection: 'column', flex: 1 }}>
        <div style={{ display: 'flex', gap: '6px', marginBottom: '12px', flexWrap: 'wrap' }}>
          {post.categories?.map((cat) => (
            <span key={cat} style={{ background: 'rgba(245,158,11,0.1)', color: '#f59e0b', fontSize: '11px', fontWeight: 600, padding: '2px 10px', letterSpacing: '0.05em', textTransform: 'uppercase', border: '1px solid rgba(245,158,11,0.2)' }}>
              {cat}
            </span>
          ))}
        </div>

        <Link to={`/blog/${post.slug.current}`} style={{ textDecoration: 'none', flex: 1 }}>
          <h2 style={{ color: hovered ? '#f59e0b' : '#fff', fontSize: '1.2rem', fontWeight: 700, marginBottom: '10px', lineHeight: 1.4, transition: 'color 0.15s ease' }}>
            {post.title}
          </h2>
        </Link>

        {post.excerpt && (
          <p style={{ color: '#a8a29e', lineHeight: 1.7, fontSize: '0.9rem', marginBottom: '16px' }}>{post.excerpt}</p>
        )}

        <div style={{ display: 'flex', gap: '12px', color: '#57534e', fontSize: '12px', borderTop: '1px solid #292524', paddingTop: '14px', marginTop: 'auto' }}>
          {post.author && <span style={{ color: '#a8a29e', fontWeight: 500 }}>{post.author}</span>}
          {post.author && post.publishedAt && <span>·</span>}
          {post.publishedAt && (
            <span>{new Date(post.publishedAt).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })}</span>
          )}
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
    <main style={{ minHeight: '80vh', background: '#1c1917', paddingBottom: '80px' }}>
      {/* Hero Header */}
      <div style={{ background: '#141210', borderBottom: '1px solid #292524', padding: '72px 24px 56px' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div style={{ display: 'inline-block', background: '#f59e0b', color: '#1c1917', fontSize: '11px', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', padding: '4px 12px', marginBottom: '20px' }}>
            Our Blog
          </div>
          <h1 style={{ color: '#fff', fontSize: 'clamp(2.2rem, 5vw, 3.5rem)', fontWeight: 800, lineHeight: 1.1, marginBottom: '16px', letterSpacing: '-0.02em' }}>
            Insights on Link Building<br />
            <span style={{ color: '#f59e0b' }}>&amp; SEO Strategy</span>
          </h1>
          <p style={{ color: '#a8a29e', fontSize: '1.1rem', maxWidth: '520px' }}>
            Actionable guides and expert tips for SEO agencies scaling their link building.
          </p>
        </div>
      </div>

      {/* Posts Grid */}
      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '56px 24px 0' }}>
        {loading && (
          <div style={{ display: 'flex', gap: '8px', alignItems: 'center', color: '#57534e' }}>
            <div style={{ width: '6px', height: '6px', background: '#f59e0b', borderRadius: '50%' }} />
            Loading posts...
          </div>
        )}

        {!loading && posts.length === 0 && (
          <div style={{ border: '1px solid #292524', padding: '48px', textAlign: 'center' }}>
            <p style={{ color: '#57534e', fontSize: '1rem' }}>No posts yet. Add your first post in the Sanity Studio.</p>
          </div>
        )}

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))',
          gap: '28px',
        }}>
          {posts.map((post) => (
            <PostCard key={post._id} post={post} />
          ))}
        </div>
      </div>
    </main>
  )
}
