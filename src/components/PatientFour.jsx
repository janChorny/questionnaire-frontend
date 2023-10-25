import { Link } from 'react-router-dom'

const PatientFour = () => {
    const content = (
        <section className="patient">
          <div className="patient__container container">
            <div className="patient__block block">
              <h2 className="patient__title title">Patientin 4/5 (endständiges Ileostoma) - benutzen Sie Tabelle 1 für die Bewertung:</h2>
              <p className="patient__paragraph paragraph">
                präoperativ <b>nicht</b> markiert
              </p>
              <p className="patient__paragraph paragraph">
                Ansicht von oben (gesamte Abdomen):
              </p>
              <img src="patient-four--one.png" alt="Patient four stoma first picture" className="patient__picture" />
              <p className="patient__paragraph paragraph">
                Ansicht von oben (Stoma):
              </p>
              <img src="patient-four--two.png" alt="Patient four stoma second picture" className="patient__picture" />
              <p className="patient__paragraph paragraph">
                Ansicht seitlich (von der Seite des Stomas):
              </p>
              <img src="patient-four--three.png" alt="Patient four stoma third picture" className="patient__picture" />
              <p className="patient__paragraph paragraph">
                Ansicht zwischen den Beinen Richtung Stoma:
              </p>
              <img src="patient-four--four.png" alt="Patient four stoma fourth picture" className="patient__picture" />
              <p className="patient__paragraph paragraph">
                Geben Sie bitte dem Stoma 4 eine Note anhand der ausgedruckten Tabelle und vermerken Sie diese.
              </p>
              <div className="patient__buttons">
                <button className="patient__button btn">
                  <Link to="/patient-three">Zurück</Link>
                </button>
                <button className="patient__button btn">
                  <Link to="/patient-five">Nächster Patient</Link>
                </button>
              </div>
            </div>
          </div>
        </section>

    )
    return content
}
export default PatientFour;