import { useState, useEffect } from 'react'
import Banner from './Banner'
import Cart from './Cart'
import Footer from './Footer'
import ShoppingList from './ShoppingList'
import '../styles/layout.css'

function App() {
	const [isOpen, setIsOpen] = useState(true)
	const savedCart = localStorage.getItem('cart')
  	const [cart, updateCart] = useState(savedCart ? JSON.parse(savedCart) : [])
	
	useEffect (() => {localStorage.setItem('cart', JSON.stringify(cart)) }, [cart] )

	return (
		<main>
			<Banner />
			<div className='lmj-layout-inner'>
				<Cart cart = {cart} updateCart = {updateCart} isOpen = {isOpen} setIsOpen={setIsOpen} />
				<ShoppingList cart = {cart} updateCart = {updateCart} setIsOpen={setIsOpen}/>
			</div>
			<Footer />
		</main>
	)
}

export default App