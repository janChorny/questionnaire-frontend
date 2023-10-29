import { Link } from 'react-router-dom'

const ThxPage = () => {
    const content = (
        <section className="thx">
          <div className="thx__container container">
            <div className="thx__block block">
              <p className="thx__paragraph paragraph">
                Fragenbogen erfolgreich abgeschickt.
              </p>
              <p className="thx__paragraph paragraph paragraph--bold">
                Vielen Dank für Ihre Teilnahme!
              </p>
              <p className="thx__paragraph paragraph">
                Sie können jetzt diese Webseite schließen.
              </p>
              <button className="btn">
                <Link to="/login">Results</Link>
              </button>
            </div>
          </div>
        </section>
    )
    return content
}
export default ThxPage
