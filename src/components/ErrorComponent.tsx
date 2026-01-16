export function ErrorComponent({error, reset}: {error: Error; reset: () => void}) {
    return (
        <>
            <p>Failed to load events</p>
            <p>{error.message}</p>
            <button onClick={reset}>Retry</button>
        </>

    )

}