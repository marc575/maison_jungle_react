import CareScale from './CareScale';
import '../styles/plantItem.css';
import ReadMore from './ReadMore';

function Plant ({name, cover, id, light, water, price, description}) {
    return (
    <>
        <div key={id} className='lmj-plant-item'>
            <span className='lmj-plant-item-price'>{price} €</span>
            <img className='lmj-plant-item-cover' src={cover} alt={`${name} cover`} />
            <h2 onClick={() => handleClick(name) }>{name}</h2> 
            <ReadMore text={description} maxLength={80} />
            <div className='lmj-plant-item-elt'>
                <CareScale careType='water' scaleValue={water} />
		        <CareScale careType='light' scaleValue={light} />
            </div>
        </div>
    </>
    )
}

function handleClick(name) {
    alert(`Vous voulez acheter 1 ${name} ? Très bon choix 🌱✨`)
}

export default Plant