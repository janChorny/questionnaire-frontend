import { Suspense } from 'react';
import { Link } from 'react-router-dom'

const PatientOne = () => {
    const content = (
        <section className="patient">
          <div className="patient__container container">
            <div className="patient__block block">
              <h2 className="patient__title title">Patientin 1/5 (endständiges Colostoma) - benutzen Sie Tabelle 3 für die Bewertung:</h2>
              <p className="patient__paragraph paragraph marked">
                präoperativ markiert
              </p>
              <p className="patient__paragraph paragraph">
                Ansicht von oben (gesamte Abdomen):
              </p>
              <Suspense fallback={<div>Loading...</div>}>
                <img src="patient-one--one.webp" alt="Patient one stoma first picture" className="patient__picture" />
              </Suspense>
              <p className="patient__paragraph paragraph">
                Ansicht von oben (Stoma):
              </p>
              <Suspense fallback={<div>Loading...</div>}>
                <img src="patient-one--two.webp" alt="Patient one stoma second picture" className="patient__picture" />
              </Suspense>
              <p className="patient__paragraph paragraph">
                Ansicht seitlich (von der Seite des Stomas):
              </p>
              <Suspense fallback={<div>Loading...</div>}>
                <img src="patient-one--three.webp" alt="Patient one stoma third picture" className="patient__picture" />
              </Suspense>
              <p className="patient__paragraph paragraph">
                Ansicht zwischen den Beinen Richtung Stoma:
              </p>
              <Suspense fallback={<div>Loading...</div>}>
                <img src="patient-one--four.webp" alt="Patient one stoma fourth picture" className="patient__picture" />
              </Suspense>
              <p className="patient__paragraph paragraph">
                Geben Sie bitte dem Stoma 1 eine Note anhand der ausgedruckten Tabelle und vermerken Sie diese.
              </p>
              <div className="patient__buttons">
                <button className="patient__button btn">
                  <Link to="/instructions">Zurück</Link>
                </button>
                <button className="patient__button btn">
                  <Link to="/patient-two">Nächster Patient</Link>
                </button>
              </div>
            </div>
          </div>
        </section>

    )
    return content
}
export default PatientOne;
