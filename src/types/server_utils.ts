export interface ServerProps {
    params: Promise<{ slug: string }>,
    searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}

export interface SearchParams {
    [key: string]: string | undefined
}