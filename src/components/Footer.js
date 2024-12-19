import { useState } from 'react'
import '../styles/footer.css'
import x from '../assets/x.svg'
import instagram from '../assets/instagram.svg'
import facebook from '../assets/facebook.svg'
import tiktok from '../assets/tiktok.svg'

function Footer() {
	const [inputValue, setInputValue] = useState('')
    const year = new Date().getFullYear()

	function handleInput(e) {
		setInputValue(e.target.value)
	}

	function handleBlur() {
		if (!inputValue.includes('@')) {
			alert("Attention, il n'y a pas d'@, ceci n'est pas une adresse valide 😥")
		}
	}

	return (
		<footer className='lmj-footer'>
			<div className='lmj-footer-elem'>
				Pour les passionné·e·s de plantes 🌿🌱🌵
			</div>
			<div className='lmj-footer-elem'>Abonnez-vous à notre newsletter pour rester à l'écoute des nos nouvelles offres et nos articles sur notre sélection de plantes</div>
			<form className='lmj-footer-form'>
				<input
					placeholder='Entrez votre mail'
					onChange={handleInput}
					value={inputValue}
					onBlur={handleBlur}
				/>
				<input
					type='submit'
					value="s'abonner"
					style={{backgroundColor : '#ffd900', fontWeight: '600'}}
				/>
			</form>
			<div className='lmj-footer-icon'>
				<div>
                	<p>Copyright &copy; {year}, Réalisé par <a href="https://www.linkedin.com/in/marc-tatchou-85891a243"> <strong>Net98</strong></a>. Tous droits réservés !</p>
				</div>
				<div className='list-icon'>
					<img src={x} width={25} alt='x'/>
					<img src={instagram} width={25} alt='instagram'/>
					<img src={tiktok} width={25} alt='tiktok'/>
					<img src={facebook} width={25} alt='facebook'/>
				</div>
			</div>
		</footer>
	)
}

export default Footer