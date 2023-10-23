import { Link } from 'react-router-dom'

const Public = () => {
    const content = (
        <section className="public">
            <main className="public__main">
                <p>
                  Sehr geehrte Stomatherapeutinnen und -therapeuten,
                </p>
                <p>
                  zur Validierung des Ostomy quality score (OQS) möchten wir ihnen 5 verschiedene 
                  Stomata zur Betrachtung und Bewertung vorlegen, mit dem Ziel die Reproduzierbarkeit 
                  der Score Ergebnisse zu bestimmen.
                </p>
                <p>
                  Die Stomata wurden alle standardisiert, 
                  aus folgenden Positionen mit gleichen Objektabständen fotografiert:
                </p>
                <ol>
                  <li>Von oben (das gesamte Abdomen)</li>
                  <li>Von oben (Stoma)</li>
                  <li>Seitlich (von der Seite des Stomas)</li>
                  <li>Zwischen den Beinen Richtung Stoma</li>
                </ol>
                <p>
                  Bitte geben Sie eine Bewertung in Form einer Score-Note anhand der folgenden Score-Tabellen 
                  (die Punktzahl für bestimmte Parameter unterscheidet sich abhängig von der Art des Stomas).
                </p>
                <p>
                  Zum weiteren möchten wir Ihnen ein Paar Fragen bzgl. der Bewertung der Stomaqualität stellen. 
                  Diese erfolgen am Ende des Dokuments.
                </p>
                <p>
                  Alle fotografierte Patientinnen und Patienten gaben das mündliche Einverständnis 
                  zur Verschickung der anonymisierten Bilder mit Stomata.
                </p>
                <p>
                  Wir bedanken uns ganz herzlich bei Ihnen für Ihre Teilnahme.
                </p>
                <p>
                  Mit freundlichen, kollegialen Grüßen aus Neustadt <br />
                  Dr. Martin Rexer und Mikalai Mikhalachkin <br />
                  Klinik für Allgemein-, Viszeral- und Gefäßchirurgie <br />
                  Klinikum Neustadt <br />
                  Paracelsusstr.33 <br />
                  91413 Neustadt an der Aisch <br />
                </p>
                <button className="btn">
                  <Link to="/instructions">Weiter</Link>
                </button>
            </main>
        </section>

    )
    return content
}
export default Public
