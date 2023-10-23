import { Link } from 'react-router-dom'

const Instructions = () => {
    const content = (
        <section className="public">
            <main className="public__main">
                <h2>Bewertungsanweisung</h2>
                <p>
                  Drucken Sie bitte die Bewertungstabelle mit Parameter 
                  und die Beschreibung der Parameter aus. 
                  Tabelle und Parameterbeschreibung öffnen und ausdrucken
                </p>
                <p>
                  Lesen Sie bitte die Tabelle und die Parameterbeschreibung.
                </p>
                <p>
                  Wenn Sie auf “Weiter” klicken, öffnen sich die Patientenfälle mit Stomatabildern.
                </p>
                <p>
                  Für die Messung des Außendurchmesser benutzen Sie das Bild “Abdomenübersicht”. 
                  Anhand der Zentimeterskala berechnen Sie den Stomadurchmesser (z.B. können Sie ein Blatt Papier nehmen und Stomadurchmesser am Bildschirm (am Blatt) markieren und dann diese Strecke an der Skala in eine Zentimeterzahl umwandeln).
                </p>
                <p>
                  Haben Sie die Anweisung verstanden und die Tabelle mit den Parameterbeschreibung ausgedruckt?
                  Falls ja, klicken Sie bitte “Weiter” an. Schauen Sie auf die Uhr und vermerken Sie, wie viel Zeit die Stomabewertung 
                </p>
                <p>
                  Falls nicht, schreiben Sie bitte uns die entstandene Probleme per E-Mail (mikalai.mikhalachkin@kliniken-nea.de)
                </p>
                <button className="btn">
                  <Link to="/public">Zurück</Link>
                </button>
                <button className="btn">
                  <Link to="/questionnaire">Bewertung beginnen</Link>
                </button>
            </main>
        </section>

    )
    return content
}
export default Instructions
