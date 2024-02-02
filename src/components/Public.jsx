import { useState } from 'react';
import { Link } from 'react-router-dom';
import GridLoader from 'react-spinners/PulseLoader';

const Public = () => {
    const [imgLoaded, setImgLoaded] = useState(false);
    const onImgLoadedSet = () =>{
      setImgLoaded(true);
    }

    const content = (
        <section className="public">
          <div className="public__container container">
            <div className="public__block block">
              <p className="public__paragraph paragraph">
                  Sehr geehrte Stomatherapeutinnen und -therapeuten,
              </p>
              <p className="public__paragraph paragraph">
                zur Validierung des Ostomy quality score (OQS) möchten wir ihnen 5 verschiedene 
                Stomata zur Betrachtung und Bewertung vorlegen, mit dem Ziel die Reproduzierbarkeit 
                der Score Ergebnisse zu bestimmen.
              </p>
              <p className="public__paragraph paragraph">
                Die Stomata wurden alle standardisiert, 
                aus folgenden Positionen mit gleichen Objektabständen fotografiert:
              </p>
              <ol className="public__list list" style={{ listStyleType: "upper-roman" }}>
                <li className="public__list-item list-item">1. Von oben (das gesamte Abdomen)</li>
                <li className="public__list-item list-item">2. Von oben (Stoma)</li>
                <li className="public__list-item list-item">3. Seitlich (von der Seite des Stomas)</li>
                <li className="public__list-item list-item">4. Zwischen den Beinen Richtung Stoma</li>
              </ol>
              <p className="public__paragraph paragraph">
                Bitte geben Sie eine Bewertung in Form einer Score-Note anhand der folgenden Score-Tabellen 
                (die Punktzahl für bestimmte Parameter unterscheidet sich abhängig von der Art des Stomas).
              </p>
              <p className="public__paragraph paragraph">
                Zum weiteren möchten wir Ihnen ein Paar Fragen bzgl. der Bewertung der Stomaqualität stellen. 
                Diese erfolgen am Ende des Dokuments.
              </p>
              <p className="public__paragraph paragraph">
                Alle fotografierte Patientinnen und Patienten gaben das mündliche Einverständnis 
                zur Verschickung der anonymisierten Bilder mit Stomata.
              </p>
              <p className="public__paragraph paragraph">
                Wir bedanken uns ganz herzlich bei Ihnen für Ihre Teilnahme.
              </p>
              <p className="public__paragraph paragraph">
                Mit freundlichen, kollegialen Grüßen aus XXX <br />
                XXXX und XXX
              </p>
              <div className="public__img-container">
              {!imgLoaded && <GridLoader color={"#495E85"} />}
              <img
                  onLoad={onImgLoadedSet}  
                  src="front-view-doctor-wearing-mask.webp" 
                  alt="Dr. One" 
                  className="public__img" 
                  width="337" 
                  height="455"
                />  
              <img
                  onLoad={onImgLoadedSet}  
                  src="medium-shot-doctor-with-gloves.jpg" 
                  alt="Dr. Two" 
                  className="public__img" 
                  width="337" 
                  height="455" 
                />  
              </div>
              <p className="public__paragraph paragraph">
                Klinik XXX <br />
                XXX XXX <br />
                XXXXX.XX <br />
                XXX XXXX XXXXX <br />
              </p>
              <button className="btn">
                <Link to="/instructions">Weiter</Link>
              </button>
            </div>
          </div>
        </section>
    )
    return content
}
export default Public
