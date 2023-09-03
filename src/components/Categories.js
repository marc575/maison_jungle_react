import '../styles/categories.css'

function Categories({categories, setActiveCategory, activeCategory}) {

    return (
        <div className='lmj-categories'>
            <span>Selectionner une categorie :</span>
            <select value={activeCategory} onChange={(e) => setActiveCategory(e.target.value) } className='lmj-categories-select'>
                <option value="">...</option>
                {categories.map((cat) => (
					<option key={cat} value={cat} >{cat}</option>
				))}
            </select>
            <br />
            <div>
                <button onClick={() => setActiveCategory('') }>Tout voir</button>
            </div>
        </div>
    )
}

export default Categories