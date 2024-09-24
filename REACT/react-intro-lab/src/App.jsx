import Greeting from './components/Greeting.jsx'
import UserCard from './components/UserCard.jsx';
import CardContainer from './components/CardContainer.jsx';

function App() {
  const myName = "Malcolm";
  let users = [
    {name: "Bob", age: 30},
    {name: "Charlie", age: 35},
    {name: "Alice", age: 25}
  ]
  users = users.sort((a, b) => a.age - b.age);
  let userCardArray = users.map(u => {
    return <UserCard name={u.name} age={u.age} />
  })
  return (
    <div>
      <Greeting name={ myName } />
      <CardContainer children={userCardArray} />
    </div>
  )
}

export default App
