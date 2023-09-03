import CareScale from './CareScale';
import '../styles/plantItem.css';

function Plant ({name, cover, id, light, water, price}) {
    return (
        <li key={id} className='lmj-plant-item' onClick={() => handleClick(name) } >
            <span className='lmj-plant-item-price'>{price}€</span>
            <img className='lmj-plant-item-cover' src={cover} alt={`${name} cover`} />
            {name}
            <div>
                <CareScale careType='water' scaleValue={water} />
		        <CareScale careType='light' scaleValue={light} />
            </div>
        </li>
    )
}

function handleClick(plantName) {
    alert(`Vous voulez acheter 1 ${plantName} ? Très bon choix 🌱✨`)
}

export default Plant