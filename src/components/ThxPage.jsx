import { Link } from 'react-router-dom'

const ThxPage = () => {
    const content = (
        <section className="public">
            <main className="public__main">
                <p>
                  Fragenbogen erfolgreich abgeschickt.
                  Vielen Dank für Ihre Teilnahme!
                </p>
                <p>
                  Sie können jetzt diese Webseite schließen.
                </p>
                <button className="btn">
                  <Link to="/notes">Results</Link>
                </button>
            </main>
        </section>

    )
    return content
}
export default ThxPage
