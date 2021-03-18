import { useState, useEffect } from 'react'
import { useIsBrowser } from './use-is-browser'

export const useIsSmallDevice = () => {
  const isBrowser = useIsBrowser()
  const [width, setWidth] = useState(isBrowser ? window.innerWidth : 1000)
  const [height, setHeight] = useState(isBrowser ? window.innerHeight : 1000)

  useEffect(() => {
    if (isBrowser) {
      const updateSize = () => {
        setWidth(window.innerWidth)
        setHeight(window.innerHeight)
      }
      window.addEventListener("resize", updateSize)
      return () => window.removeEventListener("resize", updateSize)
    }
  }, [])
  return width < 736 || height < 481
}
