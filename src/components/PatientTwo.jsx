import { useState } from 'react';
import { Link } from 'react-router-dom';
import PulseLoader from 'react-spinners/PulseLoader';

const PatientTwo = () => {
  const [imgLoaded, setImgLoaded] = useState(false);
    const onImgLoadedSet = () =>{
      setImgLoaded(true);
    }

    const content = (
        <section className="patient">
          <div className="patient__container container">
            <div className="patient__block block">
              <h2 className="patient__title title">Patient 2/5 (endständiges Colostoma) - benutzen Sie Tabelle 3 für die Bewertung:</h2>
              <p className="patient__paragraph paragraph marked">
                präoperativ markiert
              </p>
              <p className="patient__paragraph paragraph">
                Ansicht von oben (gesamte Abdomen):
              </p>
              <div>
                {!imgLoaded && <PulseLoader color={"#495E85"} />}
                <img 
                  src="close-up-hands-holding-clipboard.webp" 
                  onLoad={onImgLoadedSet} 
                  alt="Patient two stoma first picture" 
                  className="patient__picture"
                  width="758"
                  height="1010.67" 
                />
              </div>
              <p className="patient__paragraph paragraph">
                Ansicht von oben (Stoma):
              </p>
              <div>
                {!imgLoaded && <PulseLoader color={"#495E85"} />}
                <img 
                  src="close-up-hands-holding-clipboard.webp" 
                  onLoad={onImgLoadedSet} 
                  alt="Patient two stoma second picture" 
                  className="patient__picture"
                  width="758"
                  height="1012.02" 
                />
              </div>
              <p className="patient__paragraph paragraph">
                Ansicht seitlich (von der Seite des Stomas):
              </p>
              <div>
                {!imgLoaded && <PulseLoader color={"#495E85"} />}
                <img 
                  src="close-up-hands-holding-clipboard.webp" 
                  onLoad={onImgLoadedSet} 
                  alt="Patient two stoma third picture" 
                  className="patient__picture"
                  width="758"
                  height="568.93"
                />
              </div>
              <p className="patient__paragraph paragraph">
                Ansicht zwischen den Beinen Richtung Stoma:
              </p>
              <div>
                {!imgLoaded && <PulseLoader color={"#495E85"} />}
                <img 
                  src="close-up-hands-holding-clipboard.webp" 
                  onLoad={onImgLoadedSet} 
                  alt="Patient two stoma fourth picture" 
                  className="patient__picture"
                  width="758"
                  height="568.94"
                />
              </div>
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
