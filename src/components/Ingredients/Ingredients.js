import './Ingredients.css'

function Ingredients() {
    return (
        <div>

            <h3 className='ing-title'>Create new ingredient</h3>
            <form>
                <label className='ing-label' for='ingredient'>Ingredient: </label>
                <input className='ingredient' type='text' id='ingredient'></input>
                <br />
                <label className='weight-label' for='weight'>Total Weight: </label>
                <input className='weight' type='text' id='weight'></input>
                <br />
                <label className='cost-label' for='cost'>Cost: </label>
                <input className='cost' type='text' id='cost'></input>
            </form>
        </div>
    )
}

export default Ingredients