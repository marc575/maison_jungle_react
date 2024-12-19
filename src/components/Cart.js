import { useEffect } from 'react'
import '../styles/cart.css'

function Cart({cart, updateCart, isOpen, setIsOpen} ) {
	const total = cart.reduce(
		(acc, plantType) => acc + plantType.amount * plantType.price, 0
	)
    useEffect(() => 
		{document.title = `${total} € d'achats | TM - La Maison Jungle`}
		, [total]
	)

	return isOpen ? (
		<div className='lmj-cart'>
			<button
				className='lmj-cart-toggle-button'
				onClick={() => setIsOpen(false)}
			>
				Fermer X
			</button>
            {cart.length > 0 ? (
                <div className='cart-content'>
                    <h2>Panier</h2>
                    <ul>
                        {cart.map(({ name, price, amount }, index) => (
                            <div key={`${name}-${index}`}>
                                    {name} {price} € x {amount}
                            </div>
                        ))}
                    </ul>
                    <h3>Total : {total} €</h3>
					<div className='action-cart'>
                    	<button onClick={() => validateCart(total)} className='confirm-cart'>Valider votre achat</button>
                    	<button onClick={() => updateCart([])} className='clear-cart'>Vider le panier</button>
					</div>
                </div>
            ) : (
                <div>Votre panier est vide</div>
            )}
        </div>

		) : (
		<div className='lmj-cart-closed'>
			<button
				className='lmj-cart-toggle-button'
				onClick={() => setIsOpen(true)}
			>
				Ouvrir le Panier
			</button>
		</div>
	)
}

function validateCart(total) {
    alert(`Merci pour votre confiance ? Votre commande de ${total} € a été pris en charge 🌱✨`)
}

export default Cart