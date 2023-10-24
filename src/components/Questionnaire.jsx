import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useAddNewNoteMutation } from '../features/notes/notesApiSlice';

const Questionnaire = () => {
    const [addNewNote] = useAddNewNoteMutation();
    const userId = '6534300d61a72ae78c315321';
    const navigate = useNavigate();

    const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({ reValidateMode: 'onSubmit' });

  const [statusValid, setStatusValid] = React.useState(false);

  const onSubmit = (data) => {
    setStatusValid(true);
    console.log(data)
    // addNewNote(
    //     { user: userId, 
    //       patientOneStomata: data.patientOneStomata, 
    //       patientTwoStomata: data.patientTwoStomata, 
    //       patientThreeStomata: data.patientThreeStomata, 
    //       patientFourStomata: data.patientFourStomata, 
    //       patientFiveStomata: data.patientFiveStomata, 
    //       stomataQuality: data.stomataQuality,
    //       stomataEasyHard: data.stomataEasyHard,
    //       stomataEssentialTime: data.stomataEssentialTime,
    //       stomataEssentialBegin: data.stomataEssentialBegin,
    //       stomataEssentialQuantity: data.stomataEssentialQuantity,
    //       stomataEssentialRepeat: data.stomataEssentialRepeat,
    //       needMarkInclude: data.needMarkInclude,
    //       stomataOccupation: data.stomataOccupation,
    //       stomataPlaceOccupation: data.stomataPlaceOccupation,
    //       stomataHalfTimeOccupation: data.stomataHalfTimeOccupation,
    //       yourName: data.yourName, 
    //       completed: true  
    //     }
    //   )
    reset();
    setTimeout(() => {
      setStatusValid(false);
    }, 3000);
    navigate(`/thxPage`)
  };

    const content = (
        <section className="public">
            <main className="public__main">
                <h2>Questionnaire</h2>
                <form className="form" onSubmit={handleSubmit(onSubmit)}>

                  <div className="form__question">
                    <h4>1. Bewerten Sie bitte die Stomata mit Note A, B oder C:</h4>
                    <div className="form__block">
                      <label className="form__label" htmlFor="patientOneStomata">
                        Patient 1: 
                      </label>
                      <select
                        className="form__select"
                        id="patientOneStomata"
                        {...register("patientOneStomata", { required: true })}
                        defaultValue=""
                      >
                        <option className="select-option" disabled></option>
                        <option className="select-option" value="A">A</option>
                        <option className="select-option" value="B">B</option>
                        <option className="select-option" value="C">C</option>
                      </select>
                      {errors.patientOneStomata && <span className="form__error-span">Bitte, wählen Sie eine Antwortoption aus</span>}
                    </div>
                    <div className="form__block">
                      <label className="form__label" htmlFor="patientTwoStomata">
                        Patient 2: 
                      </label>
                      <select
                        className="form__select"
                        id="patientTwoStomata"
                        {...register("patientTwoStomata", { required: true })}
                        defaultValue=""
                      >
                        <option className="select-option" disabled></option>
                        <option className="select-option" value="A">A</option>
                        <option className="select-option" value="B">B</option>
                        <option className="select-option" value="C">C</option>
                      </select>
                      {errors.patientTwoStomata && <span className="form__error-span">Bitte, wählen Sie eine Antwortoption aus</span>}
                    </div>
                    <div className="form__block">
                      <label className="form__label" htmlFor="patientThreeStomata">
                        Patient 3: 
                      </label>
                      <select
                        className="form__select"
                        id="patientThreeStomata"
                        {...register("patientThreeStomata", { required: true })}
                        defaultValue=""
                      >
                        <option className="select-option" disabled></option>
                        <option className="select-option" value="A">A</option>
                        <option className="select-option" value="B">B</option>
                        <option className="select-option" value="C">C</option>
                      </select>
                      {errors.patientThreeStomata && <span className="form__error-span">Bitte, wählen Sie eine Antwortoption aus</span>}
                    </div>
                    <div className="form__block">
                      <label className="form__label" htmlFor="patientFourStomata">
                        Patient 4: 
                      </label>
                      <select
                        className="form__select"
                        id="patientFourStomata"
                        {...register("patientFourStomata", { required: true })}
                        defaultValue=""
                      >
                        <option className="select-option" disabled></option>
                        <option className="select-option" value="A">A</option>
                        <option className="select-option" value="B">B</option>
                        <option className="select-option" value="C">C</option>
                      </select>
                      {errors.patientFourStomata && <span className="form__error-span">Bitte, wählen Sie eine Antwortoption aus</span>}
                    </div>
                    <div className="form__block">
                      <label className="form__label" htmlFor="patientFiveStomata">
                        Patient 5: 
                      </label>
                      <select
                        className="form__select"
                        id="patientFiveStomata"
                        {...register("patientFiveStomata", { required: true })}
                        defaultValue=""
                      >
                        <option className="select-option" disabled></option>
                        <option className="select-option" value="A">A</option>
                        <option className="select-option" value="B">B</option>
                        <option className="select-option" value="C">C</option>
                      </select>
                      {errors.patientFiveStomata && <span className="form__error-span">Bitte, wählen Sie eine Antwortoption aus</span>}
                    </div>
                  </div>

                  <div className="form__question">

                    <h4>2. Bewerten Sie bitte die Durchführbarkeit der Bewertung:</h4>

                    <div className="form__block">
                      <h5 className="form__block-title">
                        a. Ist die Bewertung der Stomaqualität Ihrer Meinung nach sinnvoll?
                      </h5>
                      <label className="form__label" htmlFor="sehrSinnvol">
                        <input
                          className="form__input"
                          type="radio"
                          id="sehrSinnvol"
                          value="sehr sinnvol"
                          {...register("stomataQuality", { required: true })}
                        />
                        sehr sinnvol
                      </label>
                      <label className="form__label" htmlFor="sinnvol">
                        <input
                          className="form__input"
                          type="radio"
                          id="sinnvol"
                          value="sehr sinnvol"
                          {...register("stomataQuality", { required: true })}
                        />
                        sinnvol
                      </label>
                      <label className="form__label" htmlFor="weißNicht">
                        <input
                          className="form__input"
                          type="radio"
                          id="weißNicht"
                          value="weiß nicht"
                          {...register("stomataQuality", { required: true })}
                        />
                        weiß nicht
                      </label>
                      <label className="form__label" htmlFor="sinnLos">
                        <input
                          className="form__input"
                          type="radio"
                          id="sinnLos"
                          value="sinnlos"
                          {...register("stomataQuality", { required: true })}
                        />
                        sinnlos
                      </label>                     
                      {errors.stomataQuality && <span className="form__error-span">Bitte, wählen Sie eine Antwortoption aus</span>}
                    </div>

                    <div className="form__block">
                      <h5 className="form__block-title">
                        b. Ist die Bewertung für Sie eher einfach oder komplex durchzuführen?
                      </h5>
                      <label className="form__label" htmlFor="einfach">
                        <input
                          className="form__input"
                          type="radio"
                          id="einfach"
                          value="einfach"
                          {...register("stomataEasyHard", { required: true })}
                        />
                        einfach
                      </label>
                      <label className="form__label" htmlFor="mittelschwer">
                        <input
                          className="form__input"
                          type="radio"
                          id="mittelschwer"
                          value="mittelschwer"
                          {...register("stomataEasyHard", { required: true })}
                        />
                        mittelschwer
                      </label>
                      <label className="form__label" htmlFor="komplex">
                        <input
                          className="form__input"
                          type="radio"
                          id="komplex"
                          value="komplex"
                          {...register("stomataEasyHard", { required: true })}
                        />
                        komplex
                      </label>                     
                      {errors.stomataEasyHard && <span className="form__error-span">Bitte, wählen Sie eine Antwortoption aus</span>}
                    </div>

                    <div className="form__block">
                      <h5 className="form__block-title">
                        c. Wie viel Zeit haben Sie für die Bewertung eines Stomas verbraucht?
                      </h5>
                      <label className="form__label" htmlFor="unterEineMinute">
                        <input
                          className="form__input"
                          type="radio"
                          id="unterEineMinute"
                          value="unter 1 min."
                          {...register("stomataEssentialTime", { required: true })}
                        />
                        unter 1 min.
                      </label>                 
                      <label className="form__label" htmlFor="eineMinute">
                        <input
                          className="form__input"
                          type="radio"
                          id="eineMinute"
                          value="1 min"
                          {...register("stomataEssentialTime", { required: true })}
                        />
                        1 min
                      </label>                 
                      <label className="form__label" htmlFor="zweiMinute">
                        <input
                          className="form__input"
                          type="radio"
                          id="zweiMinute"
                          value="2 min"
                          {...register("stomataEssentialTime", { required: true })}
                        />
                        2 min
                      </label>                 
                      <label className="form__label" htmlFor="dreiMinute">
                        <input
                          className="form__input"
                          type="radio"
                          id="dreiMinute"
                          value="3 min"
                          {...register("stomataEssentialTime", { required: true })}
                        />
                        3 min
                      </label>                 
                      <label className="form__label" htmlFor="vierMinute">
                        <input
                          className="form__input"
                          type="radio"
                          id="vierMinute"
                          value="4 min"
                          {...register("stomataEssentialTime", { required: true })}
                        />
                        4 min
                      </label>                 
                      <label className="form__label" htmlFor="funfMinute">
                        <input
                          className="form__input"
                          type="radio"
                          id="funfMinute"
                          value="5 min"
                          {...register("stomataEssentialTime", { required: true })}
                        />
                        5 min
                      </label>                 
                      <label className="form__label" htmlFor="langeAlsfunfMinute">
                        <input
                          className="form__input"
                          type="radio"
                          id="langeAlsfunfMinute"
                          value="länger als 5 min"
                          {...register("stomataEssentialTime", { required: true })}
                        />
                        länger als 5 min
                      </label>                 
                      {errors.stomataEssentialTime && <span className="form__error-span">Bitte, wählen Sie eine Antwortoption aus</span>}
                    </div>

                  </div>

                  <div className="form__question">

                    <h4>3. Zeitpunkt der Bewertung?</h4>

                    <div className="form__block">
                      <h5 className="form__block-title">
                        a. Wann ist die Bewertung des Stomas Ihrer Meinung nach sinnvoll?
                      </h5>
                      <label className="form__label" htmlFor="unmittelbarNachDerAnlage">
                        <input
                          className="form__input"
                          type="radio"
                          id="unmittelbarNachDerAnlage"
                          value="unmittelbar nach der Anlage"
                          {...register("stomataEssentialBegin", { required: true })}
                        />
                        unmittelbar nach der Anlage
                      </label>
                      <label className="form__label" htmlFor="einDreiPostoperativeTage">
                        <input
                          className="form__input"
                          type="radio"
                          id="einDreiPostoperativeTage"
                          value="1.-3. postoperative Tage"
                          {...register("stomataEssentialBegin", { required: true })}
                        />
                        1.-3. postoperative Tage
                      </label>
                      <label className="form__label" htmlFor="abDemVierPostoperativenTag">
                        <input
                          className="form__input"
                          type="radio"
                          id="abDemVierPostoperativenTag"
                          value="ab dem 4. Postoperativen Tag"
                          {...register("stomataEssentialBegin", { required: true })}
                        />
                        ab dem 4. Postoperativen Tag
                      </label>
                      <label className="form__label" htmlFor="soSpätWieMöglich">
                        <input
                          className="form__input"
                          type="radio"
                          id="soSpätWieMöglich"
                          value="so spät wie möglich, aber vor der Entlassung"
                          {...register("stomataEssentialBegin", { required: true })}
                        />
                        so spät wie möglich, aber vor der Entlassung
                      </label>                     
                      {errors.stomataEssentialBegin && <span className="form__error-span">Error. Select any option</span>}
                    </div>

                    <div className="form__block">
                      <h5 className="form__block-title">
                        b. Soll das Stoma nur einmal bewertet werden oder halten Sie eine Wiederholung der Bewertung für sinnvoll?
                      </h5>
                      <label className="form__label" htmlFor="einmalAusreichend">
                        <input
                          className="form__input"
                          type="radio"
                          id="einmalAusreichend"
                          value="einmal (Erstbewertung) ausreichend"
                          {...register("stomataEssentialQuantity", { required: true })}
                        />
                        einmal (Erstbewertung) ausreichend
                      </label>
                      <label className="form__label" htmlFor="wiederholungErforderlich">
                        <input
                          className="form__input"
                          type="radio"
                          id="wiederholungErforderlich"
                          value="Wiederholung erforderlich"
                          {...register("stomataEssentialQuantity", { required: true })}
                        />
                        Wiederholung erforderlich
                      </label>                 
                      {errors.stomataEssentialQuantity && <span className="form__error-span">Error. Select any option</span>}
                    </div>

                    <div className="form__block">
                      <h5 className="form__block-title">
                        Falls Wiederholung sinnvoll, in welchem Zeitraum?
                      </h5>
                      <label className="form__label" htmlFor="ZweiWochenPostoperativ">
                        <input
                          className="form__input"
                          type="radio"
                          id="ZweiWochenPostoperativ"
                          value="2 Wochen postoperativ"
                          {...register("stomataEssentialRepeat", { required: true })}
                        />
                        2 Wochen postoperativ
                      </label>                 
                      <label className="form__label" htmlFor="DreiWochenPostoperativ">
                        <input
                          className="form__input"
                          type="radio"
                          id="DreiWochenPostoperativ"
                          value="3 Wochen postoperativ"
                          {...register("stomataEssentialRepeat", { required: true })}
                        />
                        3 Wochen postoperativ
                      </label>                 
                      <label className="form__label" htmlFor="VierWochenPostoperativ">
                        <input
                          className="form__input"
                          type="radio"
                          id="VierWochenPostoperativ"
                          value="4 Wochen postoperativ"
                          {...register("stomataEssentialRepeat", { required: true })}
                        />
                        4 Wochen postoperativ
                      </label>
                      <label className="form__label" htmlFor="stomataEssentialRepeatCustom">
                        Sonstiges:
                      </label>
                      <input
                        className="form__input"
                        type="text"
                        id="stomataEssentialRepeatCustom"
                        {...register("stomataEssentialRepeat", { required: true })}
                        autoComplete="off"
                      />                 
                      {errors.stomataEssentialRepeat && <span className="form__error-span">Error. Select any option</span>}
                    </div>

                  </div>

                  <div className="form__question">

                    <h4>4. Halten sie die Miteinbeziehung der „präoperativen Markierung“ als morphologischer Parameter in den Score für sinnvoll?</h4>

                    <div className="form__block">
                      <label className="form__label" htmlFor="JaMarkierung">
                        <input
                          className="form__input"
                          type="radio"
                          id="JaMarkierung"
                          value="Ja"
                          {...register("needMarkInclude", { required: true })}
                        />
                        Ja
                      </label>                              
                      <label className="form__label" htmlFor="NeinMarkierung">
                        <input
                          className="form__input"
                          type="radio"
                          id="NeinMarkierung"
                          value="Nein"
                          {...register("needMarkInclude", { required: true })}
                        />
                        Nein
                      </label>
                      {}
                      <label className="form__label" htmlFor="customMarkierung">
                        Falls nein, Warum?
                      </label>
                      <input
                        className="form__input"
                        type="text"
                        id="customMarkierung"
                        {...register("needMarkInclude", { required: true })}
                        autoComplete="off"
                      />                 
                      {errors.needMarkInclude && <span className="form__error-span">Bitte, wählen Sie eine Antwortoption aus</span>}
                    </div>

                  </div>
                  
                  <div className="form__question">

                    <h4>5. Geben Sie bitte nähere Information bzgl. Ihrer Tätigkeit als Stomatherapeutin, -therapeut:</h4>

                    <div className="form__block">
                      <h5 className="form__block-title">
                        a. Ist die Versorgung der Stomata Ihre Haupt- oder Nebentätigkeit?
                      </h5>
                      <label className="form__label" htmlFor="Haupttätigkeit">
                        <input
                          className="form__input"
                          type="radio"
                          id="Haupttätigkeit"
                          value="Haupttätigkeit"
                          {...register("stomataOccupation", { required: true })}
                        />
                        Haupttätigkeit
                      </label>
                      <label className="form__label" htmlFor="Nebentätigkeit">
                        <input
                          className="form__input"
                          type="radio"
                          id="Nebentätigkeit"
                          value="Nebentätigkeit"
                          {...register("stomataOccupation", { required: true })}
                        />
                        Nebentätigkeit
                      </label>                    
                      {errors.stomataOccupation && <span className="form__error-span">Bitte, wählen Sie eine Antwortoption aus</span>}
                    </div>

                    <div className="form__block">
                      <h5 className="form__block-title">
                        b. In welcher Einrichtung sind sie tätig?
                      </h5>
                      <label className="form__label" htmlFor="Klinik">
                        <input
                          className="form__input"
                          type="radio"
                          id="Klinik"
                          value="Klinik"
                          {...register("stomataPlaceOccupation", { required: true })}
                        />
                        Klinik
                      </label>
                      <label className="form__label" htmlFor="Rehabilitation">
                        <input
                          className="form__input"
                          type="radio"
                          id="Rehabilitation"
                          value="Rehabilitation"
                          {...register("stomataPlaceOccupation", { required: true })}
                        />
                        stomataPlaceOccupation
                      </label>                 
                      <label className="form__label" htmlFor="Niederlassung">
                        <input
                          className="form__input"
                          type="radio"
                          id="Niederlassung"
                          value="Niederlassung (ambulante Tätigkeit)"
                          {...register("stomataPlaceOccupation", { required: true })}
                        />
                        Niederlassung (ambulante Tätigkeit)
                      </label>                 
                      {errors.stomataPlaceOccupation && <span className="form__error-span">Bitte, wählen Sie eine Antwortoption aus</span>}
                    </div>

                    <div className="form__block">
                      <h5 className="form__block-title">
                        c. Arbeiten Sie Voll- oder Teilzeit?
                      </h5>
                      <label className="form__label" htmlFor="Vollzeit">
                        <input
                          className="form__input"
                          type="radio"
                          id="Vollzeit"
                          value="Vollzeit"
                          {...register("stomataHalfTimeOccupation", { required: true })}
                        />
                        Vollzeit
                      </label>                 
                      <label className="form__label" htmlFor="Teilzeit">
                        <input
                          className="form__input"
                          type="radio"
                          id="Teilzeit"
                          value="Teilzeit"
                          {...register("stomataHalfTimeOccupation", { required: true })}
                        />
                        Teilzeit
                      </label>                               
                      {errors.stomataHalfTimeOccupation && <span className="form__error-span">Bitte, wählen Sie eine Antwortoption aus</span>}
                    </div>

                  </div>

                  <div className="form__name">
                    <label className="form__label" htmlFor="formAnketaName">
                      Geben Sie bitte Ihren Namen ein:
                    </label>
                    <input
                      className="form__input"
                      type="text"
                      id="formAnketaName"
                      {...register("yourName", { required: true })}
                      autoComplete="off"
                    />
                    {errors.yourName && <span className="form__error-span">Mindestens drei Buchstaben</span>}
                  </div>

                  <button className="form__button" type="submit">
                    Fragebogen abschicken
                  </button>
                  {statusValid && <span className="form__message-span">Verschickt</span>}
                </form>

                <button className="btn">
                  <Link to="/instructions">Zurück</Link>
                </button>
            </main>
        </section>

    );
    return content
}
export default Questionnaire;
