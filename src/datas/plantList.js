import monstera from '../assets/monstera.jpg';
import succulente from '../assets/succulent.jpg';
import pothos from '../assets/pothos.jpg';
import olivier from '../assets/olivier.jpg';
import mint from '../assets/mint.jpg';
import lyrata from '../assets/lyrata.jpg';
import calathea from '../assets/calathea.jpg';
import cactus from '../assets/cactus.jpg';
import basil from '../assets/basil.jpg';

export const plantList = [
	{
		name: 'monstera',
		category: 'classique',
		id: '1ed',
		cover: monstera,
		isBestSale: true,
		water: 2,
		light: 2,
		price: 8
	},
	{
		name: 'ficus lyrata',
		category: 'classique',
		id: '2ab',
		cover: lyrata,
		isBestSale: false,
		isSpecialOffer: true,
		water: 2,
		light: 2,
		price: 10
	},
	{
		name: 'pothos argenté',
		category: 'classique',
		id: '3sd',
		cover: pothos,
		isBestSale: false,
		water: 3,
		light: 1,
		price: 16
	},
	{
		name: 'yucca',
		category: 'classique',
		id: '4kk',
		cover: calathea,
		isBestSale: true,
		isSpecialOffer: true,
		water: 3,
		light: 1,
		price: 12
	},
	{
		name: 'olivier',
		category: 'extérieur',
		id: '5pl',
		cover: olivier,
		isBestSale: true,
		water: 2,
		light: 2,
		price: 8
	},
	{
		name: 'géranium',
		category: 'extérieur',
		id: '6uo',
		cover: mint,
		isBestSale: false,
		water: 1,
		light: 3,
		price: 25
	},
	{
		name: 'basilique',
		category: 'extérieur',
		id: '7ie',
		cover: basil,
		isBestSale: false,
		isSpecialOffer: true,
		water: 1,
		light: 3,
		price: 14
	},
	{
		name: 'aloe',
		category: 'plante grasse',
		id: '8fp',
		cover: cactus,
		isBestSale: false,
		water: 2,
		light: 2,
		price: 18
	},
	{
		name: 'succulente',
		category: 'plante grasse',
		id: '9vn',
		cover: succulente,
		isBestSale: true,
		water: 3,
		light: 1,
		price: 10
	}
]