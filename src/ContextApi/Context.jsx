import  { createContext, useEffect } from 'react'
// import Context from './Context';

const todoContext= createContext(null)

const TodoContextProvider = (props) => {
  const {children}=props
  let data=[];



  return (
    <div>
        <todoContext.Provider value={data}>{children}</todoContext.Provider>
    </div>
  )
} 

// export default Context
export {TodoContextProvider,todoContext}