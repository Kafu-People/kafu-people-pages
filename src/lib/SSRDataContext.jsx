import { createContext, useContext } from "react"

const SSRDataContext = createContext({})

export function SSRDataProvider({ data, children }) {
  return (
    <SSRDataContext.Provider value={data}>
      {children}
    </SSRDataContext.Provider>
  )
}

export function useSSRData(key) {
  const data = useContext(SSRDataContext)
  return key ? data[key] : data
}
