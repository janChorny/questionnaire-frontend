import { Link } from 'react-router-dom'

const PatientTwo = () => {
    const content = (
        <section className="patient">
          <div className="patient__container container">
            <div className="patient__block block">
              <h2 className="patient__title title">Patientin 2/5 (endständiges Colostoma) - benutzen Sie Tabelle 3 für die Bewertung:</h2>
              <p className="patient__paragraph paragraph">
                präoperativ markiert
              </p>
              <p className="patient__paragraph paragraph">
                Ansicht von oben (gesamte Abdomen):
              </p>
              <img src="patient-two--one.png" alt="Patient two stoma first picture" className="patient__picture" />
              <p className="patient__paragraph paragraph">
                Ansicht von oben (Stoma):
              </p>
              <img src="patient-two--two.png" alt="Patient two stoma second picture" className="patient__picture" />
              <p className="patient__paragraph paragraph">
                Ansicht seitlich (von der Seite des Stomas):
              </p>
              <img src="patient-two--three.png" alt="Patient two stoma third picture" className="patient__picture" />
              <p className="patient__paragraph paragraph">
                Ansicht zwischen den Beinen Richtung Stoma:
              </p>
              <img src="patient-two--four.png" alt="Patient two stoma fourth picture" className="patient__picture" />
              <p className="patient__paragraph paragraph">
                Geben Sie bitte dem Stoma 2 eine Note anhand der ausgedruckten Tabelle und vermerken Sie diese.
              </p>
              <div className="patient__buttons">
                <button className="patient__button btn">
                  <Link to="/patient-one">Zurück</Link>
                </button>
                <button className="patient__button btn">
                  <Link to="/patient-three">Nächster Patient</Link>
                </button>
              </div>
            </div>
          </div>
        </section>

    )
    return content
}
export default PatientTwo;
