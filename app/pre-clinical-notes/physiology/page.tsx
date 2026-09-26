import type { Metadata } from "next";
import Link from "next/link";
import { PreclinicalNotesLayout, type NotesNavGroup } from "@/components/PreclinicalNotesLayout";

export const metadata: Metadata = {
  title: "Physiology Notes",
  description:
    "Online BIDA Student Wing pre-clinical physiology notes, beginning with homeostasis and muscle physiology.",
};

const nav: NotesNavGroup[] = [
  {
    title: "Foundations",
    items: [
      { id: "what-is-physiology", label: "What is physiology?" },
      { id: "homeostasis", label: "Homeostasis" },
      { id: "control-systems", label: "Control systems" },
    ],
  },
  {
    title: "Muscle physiology",
    items: [
      { id: "muscle-overview", label: "Muscle overview" },
      { id: "skeletal-muscle", label: "Skeletal muscle" },
      { id: "force-production", label: "Production of force" },
      { id: "fibre-types", label: "Muscle fibre types" },
      { id: "sarcomere", label: "Sarcomere & filaments" },
      { id: "excitation-contraction", label: "Excitation-contraction coupling" },
      { id: "cardiac-muscle", label: "Cardiac muscle" },
      { id: "smooth-muscle", label: "Smooth muscle" },
    ],
  },
  {
    title: "Next in the document",
    items: [{ id: "coming-next", label: "Bone physiology" }],
  },
];

export default function PhysiologyNotesPage() {
  return (
    <PreclinicalNotesLayout
      subject="Physiology"
      subtitle="Online conversion · Part 1"
      nav={nav}
    >
      <article className="notes-article">
        <header className="notes-title-block">
          <span className="notes-kicker">Pre-Clinical · Years 1-2</span>
          <h1>Physiology</h1>
          <p>
            The study of the function of the human body, with function often
            closely related to structure.
          </p>
          <div className="notes-title-meta">
            <span>Part 1</span>
            <span>Homeostasis</span>
            <span>Muscle physiology</span>
          </div>
        </header>

        <section className="notes-section" id="what-is-physiology">
          <div className="notes-section-label">01 · Foundations</div>
          <h2>What is physiology?</h2>
          <p>
            Physiology is the study of the function of the human body. The body
            can be separated into systems that interact to maintain overall
            function, and the notes repeatedly link physiological function back
            to structure.
          </p>

          <div className="notes-callout notes-callout-purple">
            <strong>Core idea</strong>
            <p>
              Internal conditions must be maintained within a suitable range so
              cells can function normally and avoid damage.
            </p>
          </div>

          <div className="notes-three-grid">
            <article>
              <span>01</span>
              <h3>Protection, support & movement</h3>
              <p>Structural systems support the body and allow movement.</p>
            </article>
            <article>
              <span>02</span>
              <h3>Control & communication</h3>
              <p>Body systems coordinate responses and regulate function.</p>
            </article>
            <article>
              <span>03</span>
              <h3>Circulation & immunity</h3>
              <p>Transport and defence systems maintain the internal environment.</p>
            </article>
          </div>
        </section>

        <section className="notes-section" id="homeostasis">
          <div className="notes-section-label">02 · Foundations</div>
          <h2>Homeostasis</h2>
          <p>
            Homeostasis is the maintenance of a nearly constant internal
            environment. This includes the extracellular and intracellular
            environments and their relationship with changing external
            conditions such as temperature and exercise.
          </p>

          <h3>Set points and thresholds</h3>
          <p>
            Physiological parameters have an optimal set point, but maintaining
            an exact value constantly would be unrealistic and energetically
            demanding. Instead, upper and lower thresholds create an acceptable
            operating range.
          </p>

          <div className="notes-definition-grid">
            <div>
              <strong>Set point</strong>
              <p>The value around which a physiological parameter is regulated.</p>
            </div>
            <div>
              <strong>Thresholds</strong>
              <p>Upper and lower limits that determine when a response is required.</p>
            </div>
            <div>
              <strong>Negative feedback</strong>
              <p>A change triggers actions that oppose the original disturbance.</p>
            </div>
          </div>

          <p>
            Examples of regulated variables in the notes include temperature,
            blood pressure, electrolytes, calcium, glucose and hormones.
          </p>
        </section>

        <section className="notes-section" id="control-systems">
          <div className="notes-section-label">03 · Foundations</div>
          <h2>Control systems</h2>
          <p>
            Physiological systems can be controlled locally within a tissue or
            systemically by mechanisms acting outside that tissue. More than one
            mechanism may contribute to a single response.
          </p>

          <div className="notes-split">
            <div>
              <h3>Local / intrinsic control</h3>
              <p>
                Regulation occurs within the tissue through intracellular,
                autocrine and paracrine mechanisms. Autoregulation is another
                example, such as local vasodilation in response to local changes.
              </p>
            </div>
            <div>
              <h3>Reflex / extrinsic control</h3>
              <p>
                Regulation originates outside the tissue, commonly through
                feedback systems. Blood pressure regulation is given as an
                example involving the kidney, heart and smooth muscle.
              </p>
            </div>
          </div>

          <div className="notes-process">
            <div><b>Anticipation</b><span>A response begins before the full stimulus is received, such as increased heart rate and sweating around exercise.</span></div>
            <div><b>Sensitisation</b><span>Multiple stimuli combine to produce a greater overall response.</span></div>
            <div><b>Feedforward</b><span>A response can begin to reduce before the regulated variable has fully returned to its threshold.</span></div>
          </div>
        </section>

        <section className="notes-section" id="muscle-overview">
          <div className="notes-section-label">04 · Muscle physiology</div>
          <h2>Muscle overview</h2>
          <p>
            The primary function of muscle is to generate force and movement by
            contracting. These forces are used both for external movement and
            internal physiological regulation.
          </p>

          <div className="notes-three-grid notes-muscle-types">
            <article>
              <span>01</span>
              <h3>Skeletal muscle</h3>
              <p>Supports and moves the skeleton.</p>
            </article>
            <article>
              <span>02</span>
              <h3>Cardiac muscle</h3>
              <p>Propels blood through the cardiovascular system.</p>
            </article>
            <article>
              <span>03</span>
              <h3>Smooth muscle</h3>
              <p>Surrounds hollow organs and controls internal movement.</p>
            </article>
          </div>
        </section>

        <section className="notes-section" id="skeletal-muscle">
          <div className="notes-section-label">05 · Muscle physiology</div>
          <h2>Skeletal muscle organisation</h2>
          <p>
            Skeletal muscle is organised from microscopic contractile proteins
            into progressively larger bundles.
          </p>

          <div className="notes-hierarchy">
            <div><span>1</span><strong>Myofilaments</strong><p>Actin and myosin proteins.</p></div>
            <div><span>2</span><strong>Myofibrils</strong><p>Composed of actin and myosin filaments and organised into sarcomeres.</p></div>
            <div><span>3</span><strong>Muscle fibres</strong><p>Bundles of myofibrils surrounded by the sarcolemma.</p></div>
            <div><span>4</span><strong>Fascicles</strong><p>Bundles of muscle fibres.</p></div>
            <div><span>5</span><strong>Muscle</strong><p>Bundles of fascicles forming the whole muscle.</p></div>
          </div>

          <div className="notes-table-wrap">
            <table className="notes-table">
              <thead>
                <tr><th>Connective tissue</th><th>Location</th></tr>
              </thead>
              <tbody>
                <tr><td>Endomysium</td><td>Around individual muscle fibres.</td></tr>
                <tr><td>Perimysium</td><td>Around fascicle bundles.</td></tr>
                <tr><td>Epimysium</td><td>Strong dense collagenous sheath covering the muscle.</td></tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="notes-section" id="force-production">
          <div className="notes-section-label">06 · Muscle physiology</div>
          <h2>Production of force</h2>

          <h3>Fibre arrangement</h3>
          <div className="notes-split">
            <div>
              <h4>Long fibres</h4>
              <p>
                Produce larger movements at higher velocity but generally less
                force. The notes use the hamstrings as an example.
              </p>
            </div>
            <div>
              <h4>Short fibres</h4>
              <p>
                Produce shorter movements with higher force. The quadriceps are
                given as an example.
              </p>
            </div>
          </div>

          <h3>Motor units and recruitment</h3>
          <p>
            Motor neurones innervate muscle fibres at the motor end plate or
            neuromuscular junction. A motor neurone together with the muscle
            fibres it innervates forms a motor unit.
          </p>

          <div className="notes-callout">
            <strong>Henneman size principle</strong>
            <p>
              Motor units innervating fewer fibres are recruited first, followed
              by progressively larger motor units. This produces a gradual
              increase in force.
            </p>
          </div>

          <h3>ATP supply</h3>
          <div className="notes-process numbered">
            <div><b>1 · Phosphocreatine system</b><span>Creatine kinase uses phosphocreatine to recreate ATP from ADP, extending contraction for a short period.</span></div>
            <div><b>2 · Oxidative system</b><span>Glucose is converted to ATP aerobically through mitochondrial oxidative metabolism.</span></div>
            <div><b>3 · Glycolytic system</b><span>A less sustainable anaerobic route that produces ATP while glucose is converted toward lactate.</span></div>
          </div>
        </section>

        <section className="notes-section" id="fibre-types">
          <div className="notes-section-label">07 · Muscle physiology</div>
          <h2>Muscle fibre types</h2>

          <div className="notes-table-wrap">
            <table className="notes-table">
              <thead>
                <tr>
                  <th>Type</th>
                  <th>Main characteristic</th>
                  <th>Use described in the notes</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>Type I</strong><br />Slow oxidative</td>
                  <td>First recruited, many mitochondria, aerobic and fatigue resistant.</td>
                  <td>Sustained contraction and postural activity.</td>
                </tr>
                <tr>
                  <td><strong>Type IIa</strong><br />Fast oxidative</td>
                  <td>Second recruited and suited to more intense extended contraction.</td>
                  <td>Prolonged higher-intensity activity.</td>
                </tr>
                <tr>
                  <td><strong>Type IIb</strong><br />Fast glycolytic</td>
                  <td>Third recruited, greatest force, anaerobic and rapidly fatigued.</td>
                  <td>Short bursts of intense activity.</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p>
            All muscle fibres in a single motor unit are the same type. Whole
            muscles contain different proportions of fibre types depending on
            function, and these proportions can change with ageing, training and
            denervation.
          </p>
        </section>

        <section className="notes-section" id="sarcomere">
          <div className="notes-section-label">08 · Muscle physiology</div>
          <h2>Sarcomere and contractile filaments</h2>
          <p>
            Skeletal and cardiac muscle are described as striated because actin
            and myosin are arranged regularly into sarcomeres.
          </p>

          <div className="notes-card-stack">
            <article>
              <span className="notes-card-tag">Thick filament</span>
              <h3>Myosin</h3>
              <p>
                Myosin heads project from the filament and contain an ATP-binding
                site. ATP hydrolysis provides energy for cross-bridge formation
                and allows release of the myosin head from actin.
              </p>
            </article>
            <article>
              <span className="notes-card-tag">Thin filament</span>
              <h3>Actin</h3>
              <p>
                G-actin monomers polymerise to form F-actin. The myosin-head
                binding site is regulated by tropomyosin, while troponin binds
                calcium.
              </p>
            </article>
            <article>
              <span className="notes-card-tag">Stabilising proteins</span>
              <h3>Titin · Nebulin · Myomesin</h3>
              <p>
                Titin stabilises and positions myosin and helps prevent
                overstretching. Nebulin supports actin stability, while myomesin
                anchors myosin at the M-line.
              </p>
            </article>
          </div>

          <h3>Sarcotubular system</h3>
          <p>
            Transverse tubules are invaginations of the sarcolemma and form
            triads with the terminal cisternae of the sarcoplasmic reticulum. The
            sarcoplasmic reticulum is derived from smooth endoplasmic reticulum
            and stores calcium.
          </p>
        </section>

        <section className="notes-section" id="excitation-contraction">
          <div className="notes-section-label">09 · Muscle physiology</div>
          <h2>Excitation-contraction coupling</h2>
          <p>
            This sequence links the motor neurone action potential to contraction
            of the skeletal muscle fibre.
          </p>

          <ol className="notes-step-list">
            <li><span>01</span><p>An action potential reaches the neuromuscular junction and depolarises the motor end plate.</p></li>
            <li><span>02</span><p>Acetylcholine is released into the synaptic cleft and binds nicotinic acetylcholine receptors on the sarcolemma.</p></li>
            <li><span>03</span><p>Ligand-gated channels open. Once threshold is reached, an action potential is generated in the muscle fibre.</p></li>
            <li><span>04</span><p>The action potential travels along the sarcolemma and into the T-tubules.</p></li>
            <li><span>05</span><p>T-tubule depolarisation changes dihydropyridine receptors, which in turn alter ryanodine receptors and release calcium from the sarcoplasmic reticulum.</p></li>
            <li><span>06</span><p>Calcium binds troponin, moving tropomyosin and exposing the myosin-head binding sites on actin.</p></li>
            <li><span>07</span><p>Myosin ATPase hydrolyses ATP, cross-bridges form and the myosin heads perform the power stroke.</p></li>
            <li><span>08</span><p>Actin slides relative to myosin, bringing Z-lines closer and shortening the sarcomere.</p></li>
            <li><span>09</span><p>ATP is hydrolysed again for detachment, and calcium is pumped back into the sarcoplasmic reticulum during relaxation.</p></li>
          </ol>
        </section>

        <section className="notes-section" id="cardiac-muscle">
          <div className="notes-section-label">10 · Muscle physiology</div>
          <h2>Cardiac muscle</h2>
          <p>
            The myocardium is formed from cardiac muscle. Cardiac muscle is
            involuntary and its activity is influenced by autonomic input,
            although the heart is capable of generating its own electrical
            activity.
          </p>

          <div className="notes-split">
            <div>
              <h3>Sympathetic</h3>
              <p>
                Associated with activity and noradrenaline / norepinephrine,
                increasing the rate and force of contraction.
              </p>
            </div>
            <div>
              <h3>Parasympathetic</h3>
              <p>
                Vagal innervation and acetylcholine suppress cardiac activity at
                rest.
              </p>
            </div>
          </div>

          <h3>Fine structure</h3>
          <p>
            Cardiac muscle is formed from uninucleate cells connected by
            intercalated discs. Desmosomes provide mechanical attachment and
            transmit force, while gap junctions permit electrical coupling so
            depolarising current can spread between cells.
          </p>

          <div className="notes-callout notes-callout-teal">
            <strong>Calcium-induced calcium release</strong>
            <p>
              Calcium entering through the T-tubule system contributes to
              further calcium release from the sarcoplasmic reticulum, after
              which contraction proceeds using the same actin-myosin mechanism.
            </p>
          </div>

          <h3>Production of force</h3>
          <p>
            The sliding filament theory also applies to cardiac muscle. The
            notes introduce the Frank-Starling law: greater stretch of cardiac
            tissue produces a greater force of contraction and therefore can
            increase cardiac output.
          </p>
        </section>

        <section className="notes-section" id="smooth-muscle">
          <div className="notes-section-label">11 · Muscle physiology</div>
          <h2>Smooth muscle</h2>
          <p>
            Smooth muscle consists of uninucleate spindle-shaped cells. Actin
            and myosin are still present, but they are not arranged into
            sarcomeres, so the striated appearance of skeletal and cardiac
            muscle is absent.
          </p>

          <div className="notes-card-stack">
            <article>
              <span className="notes-card-tag">Innervation</span>
              <h3>Varicosities</h3>
              <p>
                Nerve branches have swellings containing vesicles that release
                neurotransmitter into diffuse junctions rather than a single
                neuromuscular junction.
              </p>
            </article>
            <article>
              <span className="notes-card-tag">Calcium regulation</span>
              <h3>Calmodulin</h3>
              <p>
                Troponin is absent. Calcium binds calmodulin, and the resulting
                calcium-calmodulin complex activates myosin kinase to permit
                actin-myosin interaction.
              </p>
            </article>
            <article>
              <span className="notes-card-tag">Architecture</span>
              <h3>Dense bodies</h3>
              <p>
                Actin attaches to dense bodies and attachment plaques. Their
                arrangement allows the cell to contract with a corkscrew-like
                shortening pattern.
              </p>
            </article>
          </div>

          <h3>Single-unit vs multi-unit smooth muscle</h3>
          <div className="notes-table-wrap">
            <table className="notes-table">
              <thead>
                <tr><th>Single-unit</th><th>Multi-unit</th></tr>
              </thead>
              <tbody>
                <tr>
                  <td>More common and linked by gap junctions.</td>
                  <td>Cells are more discrete from one another.</td>
                </tr>
                <tr>
                  <td>Found in walls of visceral organs.</td>
                  <td>Rich nerve innervation allows more independent contraction.</td>
                </tr>
                <tr>
                  <td>Shows a stress-relaxation response.</td>
                  <td>Examples in the notes include iris, piloerectors and vas deferens.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="notes-next-section" id="coming-next">
          <div>
            <span>Next conversion</span>
            <h2>Bone physiology</h2>
            <p>
              The next section in the original document moves from muscle into
              gross bone anatomy, compact and spongy bone, bone cells and bone
              function.
            </p>
          </div>
          <Link href="/pre-clinical-notes">Back to all subjects →</Link>
        </section>
      </article>
    </PreclinicalNotesLayout>
  );
}
