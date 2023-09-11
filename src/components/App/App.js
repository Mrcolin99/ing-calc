import { useState } from 'react'
import './App.css'

function App() {
  const [ing1, setIng1] = useState(0)
  const [ing2, setIng2] = useState(0)
  const [ing3, setIng3] = useState(0)


  const ing1Change = (event) => {
    let number = parseInt(event.target.value)
    setIng1(number)
    console.log(ing1)
  }

  const ing2Change = (event) => {
    let number = parseInt(event.target.value)
    setIng2(number)
    console.log(ing2)
  }

  const ing3Change = (event) => {
    let number = parseInt(event.target.value)
    setIng3(number)
    console.log(ing3)
  }


  const submit = (event) => {
    event.preventDefault()
    console.log(ing1)
    console.log(ing2)
    console.log(ing3)
  }

  // const solution = () => {
  //   if (ing1 === NaN) {
  //     return (
  //       <p>please fill out fields</p>
  //     ) 
  //      } else{
  //        return (
  //         <p>${ing1 + ing2 + ing3}</p> 
  //        )
  //      }
  //   }


  return (
    <div className='calc-main'>
      <form>
        <input type='text' name='ingredient1-name' className='input-field'></input>
        <input onChange={ing1Change} type='text' name='ingredient1' className='input-field' />
        <br />
        <input type='text' name='ingredient2-name' className='input-field'></input>
        <input onChange={ing2Change} type='text' name='ingredient2' className='input-field' />
        <br />
        <input type='text' name='ingredient3-name' className='input-field'></input>
        <input onChange={ing3Change} type='text' name='ingredient3' className='input-field' />
        <br />
        <input type='text' name='ingredient4-name' className='input-field'></input>
        <input type='text' name='ingredient4' className='input-field' />
        <br />
        <input type='text' name='ingredient5-name' className='input-field'></input>
        <input type='text' name='ingredient5' className='input-field' />
        <br />
        <input type='text' name='ingredient6-name' className='input-field'></input>
        <input type='text' name='ingredient6' className='input-field' />
        <br />
      </form>
      <button className='calc-submit' onClick={submit}>
        <h3>Calculate</h3>
        </button>
      {/* {solution()} */}
    </div>
  )
}



export default App
