import Child from "./components/Child"

const App = () => {
  let children = [ "Georgie", "Janey", "Jessie" ]
  let newArray = children.map(kid => {
    return <Child fname={kid}/>
  })  
  return (
    <>
      <h1>My kids are:</h1>
      {newArray}
    </>
  )
};  

export default App