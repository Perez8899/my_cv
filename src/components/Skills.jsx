import { skills } from '../data/cv';

export default function Skills() {
  return (
    <section id="habilidades" className="section section--alt">
      <div className="container">
        <div className="section__header">
          <p className="eyebrow">Stack técnico</p>
          <h2>Habilidades</h2>
        </div>
        <div className="skills__grid">
          {skills.map((group) => (
            <article key={group.category} className="skill-card">
              <h3>{group.category}</h3>
              <ul>
                {group.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
