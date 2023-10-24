import { Link } from 'react-router-dom'

const Instructions = () => {
    const content = (
        <section className="instructions">
          <div className="instructions__container container">
            <div className="instructions__block block">
              <h2 className="instructions__title title">Bewertungsanweisung</h2>
              <p className="instructions__paragraph paragraph">
                Drucken Sie bitte die Bewertungstabelle mit Parameter 
                und die Beschreibung der Parameter aus. 
                Tabelle und Parameterbeschreibung öffnen und ausdrucken
              </p>
              <p className="instructions__paragraph paragraph">
                Lesen Sie bitte die Tabelle und die Parameterbeschreibung.
              </p>
              <p className="instructions__paragraph paragraph">
                Wenn Sie auf “Weiter” klicken, öffnen sich die Patientenfälle mit Stomatabildern.
              </p>
              <p className="instructions__paragraph paragraph">
                Für die Messung des Außendurchmesser benutzen Sie das Bild “Abdomenübersicht”. 
                Anhand der Zentimeterskala berechnen Sie den Stomadurchmesser (z.B. können Sie ein Blatt Papier nehmen und Stomadurchmesser am Bildschirm (am Blatt) markieren und dann diese Strecke an der Skala in eine Zentimeterzahl umwandeln).
              </p>
              <p className="instructions__paragraph paragraph">
                Haben Sie die Anweisung verstanden und die Tabelle mit den Parameterbeschreibung ausgedruckt?
                Falls ja, klicken Sie bitte “Weiter” an. Schauen Sie auf die Uhr und vermerken Sie, wie viel Zeit die Stomabewertung 
              </p>
              <p className="instructions__paragraph paragraph">
                Falls nicht, schreiben Sie bitte uns die entstandene Probleme per E-Mail (mikalai.mikhalachkin@kliniken-nea.de)
              </p>
              <div className="instructions__buttons">
                <button className="instructions__button btn">
                  <Link to="/public">Zurück</Link>
                </button>
                <button className="instructions__button btn">
                  <Link to="/questionnaire">Bewertung beginnen</Link>
                </button>
              </div>
            </div>
          </div>
        </section>

    )
    return content
}
export default Instructions
