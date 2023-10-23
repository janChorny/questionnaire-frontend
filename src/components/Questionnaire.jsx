import React from 'react';
import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form';
import { useAddNewNoteMutation } from "../features/notes/notesApiSlice"

const Questionnaire = () => {
    const [addNewNote] = useAddNewNoteMutation()
    const userId = "6534300d61a72ae78c315321";

    const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({ reValidateMode: 'onSubmit' });

  const [statusValid, setStatusValid] = React.useState(false);

  const onSubmit = (data) => {
    setStatusValid(true);
    addNewNote({ user: userId, title: data.title, text: data.text, completed: true  })
    reset();
    setTimeout(() => {
      setStatusValid(false);
    }, 3000);
  };

    const content = (
        <section className="public">
            <main className="public__main">
                <h2>Questionnaire</h2>
                <form className="form" onSubmit={handleSubmit(onSubmit)}>


                  <div className="form__title form-block">
                    <label className="form__title--label form-label" htmlFor="form__title-input">
                      Title:
                    </label>
                    <input
                      className="form__title--input form-input"
                      type="text"
                      id="form__title-input"
                      {...register("title", { required: true })}
                      placeholder="title"
                      autoComplete="off"
                    />
                    {errors.title && <span className="form__title--span error-span">Error! Min 4 letters</span>}
                  </div>

                  <div className="form__title form-block">
                    <label className="form__title--label form-label" htmlFor="form__text-input">
                      Text:
                    </label>
                    <input
                      className="form__title--input form-input"
                      type="text"
                      id="form__text-input"
                      {...register("text", { required: true })}
                      placeholder="text"
                      autoComplete="off"
                    />
                    {errors.text && <span className="form__title--span error-span">Error! Min 4 letters</span>}
                  </div>

                  <div className="form__question">
                    1. Bewerten Sie bitte die Stomata mit Note A, B oder C:
                  </div>
                  <div className="form__question">
                    2. Bewerten Sie bitte die Durchführbarkeit der Bewertung:
                  </div>
                  <div className="form__question">
                    3. Zeitpunkt der Bewertung?
                  </div>
                  <button className="form__button" type="submit">
                    Add new card
                  </button>
                  {statusValid && <span className="form__submit--span message-span">Data has been saved</span>}
                </form>

                <button className="btn">
                  <Link to="/instructions">Zurück</Link>
                </button>
                <button className="btn">
                  <Link to="/questionnaire">Bewertung beginnen</Link>
                </button>
            </main>
        </section>

    )
    return content
}
export default Questionnaire
