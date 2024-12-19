import '../styles/categories.css'
import addToCartImg from '../assets/cart.svg'

function Categories({categories, setActiveCategory, activeCategory, setIsOpen}) {

    return (
        <>
        <div className='cart-categories'>
            <div>
                <button
				    onClick={() => setIsOpen(true)}
                    className='cart'
			    >
				    <img src={addToCartImg} width={20} alt='add-to-cart'  />
			    </button>
            </div>
            <div className='lmj-categories'>
                <div>
                    <span>Trier par categorie : </span>
                    <select value={activeCategory} onChange={(e) => setActiveCategory(e.target.value) } className='lmj-categories-select'>
                        <option value="">Tous</option>
                        {categories.map((cat) => (
                            <option key={cat} value={cat} >{cat}</option>
                        ))}
                    </select>
                </div>
                {/* <div>
                    <button onClick={() => setActiveCategory('') }>Boutique</button>
                </div> */}
            </div>
        </div>
        </>
    )
}

export default Categories