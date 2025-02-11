import { useEffect, useRef } from 'react'

export const useInterval = (callback: () => void, delay: number) => {
  const savedCallback = useRef(callback)

  // Remember the latest callback
  useEffect(() => {
    savedCallback.current = callback
  }, [callback])

  // Set up the interval
  useEffect(() => {
    const tick = () => savedCallback.current()

    if (delay !== null) {
      const interval = setInterval(tick, delay)
      return () => clearInterval(interval)
    }
  }, [delay])
}
