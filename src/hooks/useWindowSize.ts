import React from "react"

interface windowSizeProps {
  width: number | undefined
}

export function useWindowSize() {
  const [windowSize, setWindowSize] = React.useState<windowSizeProps>({
    width: undefined,
  })
  React.useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
      })
    }

    window.addEventListener("resize", handleResize)

    handleResize()

    return () => window.removeEventListener("resize", handleResize)
  }, [])
  return windowSize
}
