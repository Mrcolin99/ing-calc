import { useState, useEffect } from 'react'
import './Ingredients.css'
import Card from '../Card/Card'

function Ingredients() {
    const [name, setName] = useState('')
    const [weight, setWeight] = useState(0)
    const [cost, setCost] = useState(0)
    const [list, setList] = useState([])

    const handleIngChange = (event) => {
        setName(event.target.value)
    }

    const handleWeightChange = (event) => {
        let weightNumber = parseInt(event.target.value);
        if (!isNaN(weightNumber)) {
            setWeight(weightNumber)
        }
    }

    const handleCostChange = (event) => {
        let costNumber = parseInt(event.target.value)
        if (!isNaN(costNumber)) {
            setCost(costNumber)
        }
    }

    const createNewIng = (event) => {
        event.preventDefault()
        const newIng = { name: name, weight: weight, cost: cost }
        setList(list => [...list, newIng])
        clearInputs()
    }

    const clearInputs = () => {
        setName('')
        setWeight(0)
        setCost(0)
    }

    const listIng = () => {
        return list.map((ing, index) => (
            <Card
                key={index}
                name={ing.name}
                weight={ing.weight}
                cost={ing.cost}
                deleteCard={() => handleDeleteCard(index)}
            />
        ))
    }

    const handleDeleteCard = (index) => {
        const updatedList = list.filter((ing, ingIndex) => ingIndex !== index)
        setList(updatedList)
    }


    useEffect(() => {
        const savedList = JSON.parse(localStorage.getItem('ingredientList'));
        if (savedList) {
            setList(savedList);
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('ingredientList', JSON.stringify(list));
    }, [list]);

    return (
        <div>
            <div>
                <h3 className='ing-title'>Create New Ingredient</h3>
                <form>
                    <label className='ing-label' htmlFor='ingredient'>Ingredient Name: </label>
                    <input
                        onChange={handleIngChange}
                        className='ingredient'
                        type='text'
                        id='ingredient'
                        value={name}
                    ></input>
                    <br />
                    <label className='weight-label' htmlFor='weight'>Total Weight: </label>
                    <input
                        onChange={handleWeightChange}
                        className='weight'
                        type='text'
                        id='weight'
                        value={weight} 
                    ></input>
                    <br />
                    <label className='cost-label' htmlFor='cost'>Total Cost: $</label>
                    <input
                        onChange={handleCostChange}
                        className='cost'
                        type='text'
                        id='cost'
                        value={cost} 
                    ></input>
                </form>
                <button onClick={createNewIng} className='create-new'>
                    Add Ingredient
                </button>
            </div>
            {list.length === 0 ? <p className='no-ing'>No Ingredients Yet!</p> : listIng()}
        </div>
    );
}

export default Ingredients;
