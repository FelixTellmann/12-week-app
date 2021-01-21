import useSWR from 'swr'

type UseEntriesReturn = {
  entries: unknown,
  isLoading: boolean,
  isError: Error,
}

function fetcher(url: string) {
  return fetch(url).then((res) => res.json())
}

export function useEntries(): UseEntriesReturn {
  const { data, error } = useSWR(`/api/get-entries`, fetcher)
  
  return {
    entries: data,
    isLoading: !error && !data,
    isError: error,
  }
}

export function useEntry(id: string) {
  return useSWR(`/api/get-entry?id=${id}`, fetcher)
}