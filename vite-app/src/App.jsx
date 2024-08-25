import './App.css'
import Button from './components/Button'
import Hello from './components/Hello'
import Products from './components/Products'
import Input from './components/Input'
// import Main from './components/Main';

// let num=10;
// function myClick(){
//   window.alert(num)
// }

const product=[
  {id:1,name:"Zara",price:49},
  {id:2,name:"Adidas",price:49},
  {id:3,name:"Nike",price:49}
]

const person1={name:"Tahir",surname:"Aslanli"};
const person2={name:"Babek",surname:"Memmedov"}

function App() {
  return (
    <>
      {/* <p style={{color:"red"}}>
        hello vite
      </p>
      <button onClick={myClick}>CLick</button> */}
    {/* <Main/> */}

    {/* <Hello name="Babek" surname="Aslanli" age="18"/> */}
    {/* <Button variant="success" text="create" color="black"/>
    <Button variant="danger" text="delete" color="brown"/>
    <Button variant="warning" text="update" color="red"/>

    <hr/>
    <Products products={product}/>
    <hr/>
    <Hello person={person1}/>
    <Hello person={person2}/> */}


    <Input/>
    </>
  )
}

export default App
