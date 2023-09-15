import { useState } from 'react'
import './Ingredients.css'

function Ingredients() {
    const [name, setName] = useState('')
    const [weight, setWeight] = useState(0)
    const [cost, setCost] = useState(0)

    const handleIngChange = (event) => {
        setName(event.target.value)
        console.log(name)
    }

    const handleWeightChange = (event) => {
        let weightNumber = parseInt(event.target.value)
        weightNumber === NaN ? console.log('NaN') : setWeight(weightNumber)
        console.log(weight)
    }

    const handleCostChange = (event) => {
        let costNumber = parseInt(event.target.value)
        costNumber === NaN ? console.log('NaN') : setCost(costNumber)
        console.log(cost)
    }


    return (
        <div>
            <h3 className='ing-title'>Create New Ingredient</h3>
            <form>
                <label className='ing-label' for='ingredient'>Ingredient Name: </label>
                <input onChange={handleIngChange} className='ingredient' type='text' id='ingredient'></input>
                <br />
                <label className='weight-label' for='weight'>Total Weight: </label>
                <input onChange={handleWeightChange} className='weight' type='text' id='weight'></input>
                <br />
                <label className='cost-label' for='cost'>Total Cost: $</label>
                <input onChange={handleCostChange} className='cost' type='text' id='cost'></input>
            </form>
            <button className='create-new'>Add Ingredient</button>
        </div>
    )
}

export default Ingredients