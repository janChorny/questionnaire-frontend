/* eslint-disable react/prop-types */
import { useSelector } from 'react-redux'
import { selectNoteById } from '../features/notes/notesApiSlice'

const Result= ({ noteId, index }) => {

    const note = useSelector(state => selectNoteById(state, noteId))

    if (note) {
        const created = new Date(note.createdAt).toLocaleString('en-US', { day: 'numeric', month: 'long' })

        const updated = new Date(note.updatedAt).toLocaleString('en-US', { day: 'numeric', month: 'long' })

        return (
            <div className="result">
              <h3>{index + 1}</h3>
              <div className="result__container">
                <h4>1. Bewerten Sie bitte die Stomata mit Note A, B oder C:</h4>
                <div className="result__block">
                    <p className="result__question">
                      Patient 1: 
                    </p>
                    <div className="result__answer">
                      {note.patientOneStomata}
                    </div>
                    <p className="result__question">
                      Patient 2: 
                    </p>
                    <div className="result__answer">
                      {note.patientTwoStomata}
                    </div>
                    <p className="result__question">
                      Patient 3: 
                    </p>
                    <div className="result__answer">
                      {note.patientThreeStomata}
                    </div>
                    <p className="result__question">
                      Patient 4: 
                    </p>
                    <div className="result__answer">
                      {note.patientFourStomata}
                    </div>
                    <p className="result__question">
                      Patient 5: 
                    </p>
                    <div className="result__answer">
                      {note.patientFiveStomata}
                    </div>
                </div>
                <h4>2. Bewerten Sie bitte die Durchführbarkeit der Bewertung:</h4>
                <div className="result__block">
                  <h5 className="form__block-title">
                      a. Ist die Bewertung der Stomaqualität Ihrer Meinung nach sinnvoll?
                  </h5>
                  <div className="result__answer">
                    {note.stomataQuality}
                  </div>
                  <h5 className="form__block-title">
                      b. Ist die Bewertung für Sie eher einfach oder komplex durchzuführen?
                    </h5>
                  <div className="result__answer">
                    {note.stomataEasyHard}
                  </div>
                  <h5 className="form__block-title">
                      c. Wie viel Zeit haben Sie für die Bewertung eines Stomas verbraucht?
                  </h5>
                  <div className="result__answer">
                    {note.stomataEssentialTime}
                  </div>
                </div>
                <h4>3. Zeitpunkt der Bewertung?</h4>
                <div className="result__block">
                  <h5 className="form__block-title">
                      a. Wann ist die Bewertung des Stomas Ihrer Meinung nach sinnvoll?
                  </h5>
                  <div className="result__answer">
                    {note.stomataEssentialBegin}
                  </div>
                  <h5 className="form__block-title">
                      b. Soll das Stoma nur einmal bewertet werden oder halten Sie eine Wiederholung der Bewertung für sinnvoll?
                  </h5>
                  <div className="result__answer">
                    {note.stomataEssentialQuantity}
                  </div>
                  <h5 className="form__block-title">
                      Falls Wiederholung sinnvoll, in welchem Zeitraum?
                  </h5>
                  <div className="result__answer">
                    {note.stomataEssentialRepeat}
                  </div>
                </div>
                <h4>4. Halten sie die Miteinbeziehung der „präoperativen Markierung“ als morphologischer Parameter in den Score für sinnvoll?</h4>
                <div className="result__block">
                  <div className="result__answer">
                    {note.needMarkInclude}
                  </div>
                </div>
                <h4>5. Geben Sie bitte nähere Information bzgl. Ihrer Tätigkeit als Stomatherapeutin, -therapeut:</h4>
                <div className="result__block">
                  <p className="result__question">
                    a. Ist die Versorgung der Stomata Ihre Haupt- oder Nebentätigkeit?
                  </p>
                  <div className="result__answer">
                    {note.stomataOccupation}
                  </div>
                  <p className="result__question">
                    b. In welcher Einrichtung sind sie tätig?
                  </p>
                  <div className="result__answer">
                    {note.stomataPlaceOccupation}
                  </div>
                  <p className="result__question">
                    c. Arbeiten Sie Voll- oder Teilzeit?
                  </p>
                  <div className="result__answer">
                    {note.stomataHalfTimeOccupation}
                  </div>
                </div>
                <h4>Geben Sie bitte Ihren Namen ein:</h4>
                <div className="result__answer">
                    {note.yourName}
                </div>
              </div>
            </div>
        )

    } else return null
}
export default Result
