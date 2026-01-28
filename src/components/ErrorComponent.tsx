export function ErrorComponent({error, refetch}: {error: Error; refetch: () => void}) {
    return (
        <>
            <p>Failed to load events</p>
            <p>{error.message}</p>
            <button onClick={()=>refetch}>Retry</button>
        </>

    )

}