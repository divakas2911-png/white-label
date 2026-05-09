import './HowItWorks.css'

const steps = [
  {
    num: '01',
    title: 'Submit Your Order',
    desc: 'Share your target URLs, anchor text preferences, and niche — including any domain metric requirements. We handle everything else through our streamlined dashboard.',
  },
  {
    num: '02',
    title: 'We Source & Outreach',
    desc: 'Our team identifies high-authority, niche-relevant sites and handles all outreach and negotiation to secure the placement.',
  },
  {
    num: '03',
    title: 'Quality Control',
    desc: 'Every placement is reviewed by our QA team before going live — checking domain metrics, traffic, niche relevance, and anchor text accuracy.',
  },
  {
    num: '04',
    title: 'Reporting',
    desc: 'Receive white-labeled reports with live links. Present results to your clients as your own — we stay invisible.',
  },
]

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="how-it-works">
      <div className="hiw-inner">
        <div className="section-header">
          <span className="section-tag">How It Works</span>
          <h2 className="section-title">How Our White Label Link Building Company Delivers Results</h2>
          <p className="section-desc">
            Our white label link building agency follows a seamless 4-step process so you can scale without adding headcount.
          </p>
        </div>
        <div className="hiw-steps">
          {steps.map((s, i) => (
            <div className="hiw-step" key={s.num}>
              <div className="hiw-step-num-wrapper">
                <span className="hiw-step-num">{s.num}</span>
                {i < steps.length - 1 && <div className="hiw-connector" />}
              </div>
              <div className="hiw-step-content">
                <h3 className="hiw-step-title">{s.title}</h3>
                <p className="hiw-step-desc">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
