import './HowWeWorkSection.css';

const STEPS = [
  {
    num: '01',
    title: 'Understand',
    desc: 'Understand your learning goals, career ambitions or business requirements.',
  },
  {
    num: '02',
    title: 'Plan',
    desc: 'Create a suitable training, consultancy or technology solution.',
  },
  {
    num: '03',
    title: 'Execute',
    desc: 'Work with dedication, expertise and a structured approach.',
  },
  {
    num: '04',
    title: 'Grow',
    desc: 'Deliver meaningful outcomes and build long-term relationships.',
  },
];

export default function HowWeWorkSection() {
  return (
    <section className="howwework section" id="how-we-work" aria-labelledby="hww-heading">
      <div className="container">
        <div className="howwework__header">
          <span className="section-label">Our Process</span>
          <h2 className="section-heading" id="hww-heading">
            Simple Steps. Meaningful Results.
          </h2>
        </div>

        <div className="howwework__steps">
          {STEPS.map((step, i) => (
            <div key={step.num} className={`howwework__step fade-in fade-in-delay-${i + 1}`}>
              {/* Connector line (shows between steps on desktop) */}
              {i < STEPS.length - 1 && (
                <div className="howwework__connector" aria-hidden="true" />
              )}
              <div className="howwework__step-num" aria-hidden="true">
                {step.num}
              </div>
              <div className="howwework__step-body">
                <h3 className="howwework__step-title">{step.title}</h3>
                <p className="howwework__step-desc">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
