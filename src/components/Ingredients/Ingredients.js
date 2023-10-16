import { useState, useEffect} from 'react'
import './Ingredients.css'

function Ingredients() {
    const [name, setName] = useState('')
    const [weight, setWeight] = useState(0)
    const [cost, setCost] = useState(0)
    const [list, setList] = useState([])

    const handleIngChange = (event) => {
        setName(event.target.value)
        console.log(name)
    }

    const handleWeightChange = (event) => {
        let weightNumber = parseInt(event.target.value)
        if (isNaN(weightNumber)) {
            console.log('NaN')
        } else {
            setWeight(weightNumber)
        }
        console.log(weightNumber)
    }

    const handleCostChange = (event) => {
        let costNumber = parseInt(event.target.value)
        if (isNaN(costNumber)) {
            console.log('NaN')
        } else {
            setCost(costNumber)
        }
        console.log(costNumber)
    }
    
    const createNewIng = (event) => {
        event.preventDefault()
        const newIng = { name: name, weight: weight, cost: cost }
        console.log(newIng)
        setList(list => [...list, newIng])
        console.log(list)
        clearInputs()
    }

    const clearInputs = () => {
        setName('')
        setWeight(0)
        setCost(0)
    }

    const listIng = () => {
        return list.map((ing, index) => (
            <div className='list' key={index}>
                <h3 className='list-title'>{ing.name}</h3>
                <p>Total Weight: {ing.weight}#</p>
                <p>Total Cost: ${ing.cost}</p>
                <button className='list-button'>Add To current recipe</button>
                <br/>
                <button className='list-button'>Delete Ingredient</button>
            </div>
        ))
    }

    // useEffect(() => {
    //     const savedList = JSON.parse(localStorage.getItem('ingredientList'));
    //     if (savedList) {
    //         setList(savedList)
    //     }
    // }, [])

    // useEffect(() => {
    //     localStorage.setItem('ingredientList', JSON.stringify(list))
    // }, [list])

    return (
        <div>
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
                <button onClick={createNewIng} className='create-new'>Add Ingredient</button>
            </div>
            {list.length === 0 ? <p className='no-ing'>No Ingredients Yet!</p> : listIng()}
        </div>
    )
}

export default Ingredients