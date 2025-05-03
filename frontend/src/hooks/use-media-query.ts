import { useState, useEffect } from 'react'

export function useMediaQuery(query: string) {
  const [isMatching, setIsMatching] = useState(false);

  useEffect(() => {
    const mediaQueryList = window.matchMedia(query);
    const updateMatch = () => setIsMatching(mediaQueryList.matches);

    updateMatch();
    mediaQueryList.addListener(updateMatch);

    return () => mediaQueryList.removeListener(updateMatch);
  }, [query]);

  return isMatching;
}
