import { useState } from 'react'
import { plantList } from '../datas/plantList'
import '../styles/shoppingList.css'
import Plant from './Plant'
import Categories from './Categories'

function ShoppingList( {cart, updateCart}) {
	const [activeCategory, setActiveCategory] = useState('')
	const categories = plantList.reduce(
		(acc, plant) =>
			acc.includes(plant.category) ? acc : acc.concat(plant.category),
		[]
	)

	function addToCart(name, price) {
		const currentPlantAdded = cart.find((plant) => plant.name === name)
		if (currentPlantAdded) {
			const cartFilteredCurrentPlant = cart.filter(
				(plant) => plant.name !== name
			)
			updateCart([
				...cartFilteredCurrentPlant,
				{name, price, amount: currentPlantAdded.amount + 1}
			])
		} else {
			updateCart([...cart, {name, price, amount: 1}])
		}
	}

	return (
		<div className='lmj-shopping-list'> 
			<Categories categories={categories} setActiveCategory={setActiveCategory} activeCategory={activeCategory} />
			<ul className='lmj-plant-list'>
				{plantList.map(({name, cover, id, light, water, price, category} ) => 
					!activeCategory || activeCategory === category ?
					(
					<div key={id}>
						<Plant name={name} cover={cover} id={id} light={light} water={water} price={price} />
						<button onClick={() => addToCart(name, price)}>Ajouter</button>
					</div>
					) : null
				)}
			</ul>
		</div>
	)
}

export default ShoppingList