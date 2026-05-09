import './TrustedBy.css'

const logos = [
  'uSERP', 'Growth Marketing Pro', 'Quoleady', 'GrowthMate',
  'Flying V Group', 'Skale', 'Digital Gratified', 'Axle Eight'
]

export default function TrustedBy() {
  return (
    <section className="trusted">
      <div className="trusted-inner">
        <p className="trusted-label">Trusted by some of the World's Best Agencies</p>
        <div className="trusted-track">
          <div className="trusted-logos">
            {[...logos, ...logos].map((name, i) => (
              <div className="trusted-logo" key={i}>
                <span className="logo-placeholder">{name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
