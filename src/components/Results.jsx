import { useGetNotesQuery } from "../features/notes/notesApiSlice"
import Result from "./Result"

const ResultsList = () => {
    const {
        data: notes,
        isLoading,
        isSuccess,
        isError,
        error
    } = useGetNotesQuery(undefined, {
        pollingInterval: 15000,
        refetchOnFocus: true,
        refetchOnMountOrArgChange: true
    })

    let content

    if (isLoading) content = <p>Loading...</p>

    if (isError) {
        content = <p className="errmsg">{error?.data?.message}</p>
    }

    if (isSuccess) {
        const { ids } = notes

        const tableContent = ids?.length
            ? ids.map((noteId, index) => <Result key={noteId} noteId={noteId} index={index} />)
            : null

        content = (
            <>
              <div className="results__container container">
                <div className="results__block block">
                  {tableContent}
                </div>
              </div>
            </>
        )
    }

    return content
}
export default ResultsList
