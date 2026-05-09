import './WhyChooseUs.css'

const benefits = [
  {
    title: '100% White Labeled',
    desc: 'Your brand, your reports, your client relationships. We operate completely behind the scenes.',
  },
  {
    title: 'Fast Turnaround',
    desc: 'Most orders fulfilled within 10-15 business days. Rush delivery available for urgent campaigns.',
  },
  {
    title: 'Niche Relevance',
    desc: 'Every placement is hand-picked for topical relevance. No PBNs, no spam — only genuine editorial sites.',
  },
  {
    title: 'Transparent Reporting',
    desc: 'Detailed reports with live link URLs, domain metrics, traffic data, and anchor text details.',
  },
  {
    title: 'Dedicated Account Manager',
    desc: 'A real person assigned to your account who understands your clients and goals inside out.',
  },
  {
    title: 'Agency-Friendly Pricing',
    desc: 'Wholesale rates designed for healthy margins. Scale your revenue without scaling your costs.',
  },
]

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="why-us">
      <div className="why-us-inner">
        <div className="section-header">
          <span className="section-tag">Why Choose Us</span>
          <h2 className="section-title">The White Label Link Building Company Built for Agencies Like Yours</h2>
          <p className="section-desc">
            We built this white label link building company because we understand the pressure of delivering results. That's why white label link building for agencies is all we do.
          </p>
        </div>
        <div className="benefits-grid">
          {benefits.map(b => (
            <div className="benefit-card" key={b.title}>
              <h3 className="benefit-title">{b.title}</h3>
              <p className="benefit-desc">{b.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
