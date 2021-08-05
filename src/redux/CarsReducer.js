const SET_PROFILE = 'SET_PROFILE'

const initialState = {
	data: {
		cars: [
			{ id: 1, name: 'Tesla', age: 2018, countFuel: 40, price: 18, imageUrl: 'https://clck.ru/WbqgY', description: 'Электрокар нового поколения' },
			{ id: 2, name: 'Mazda', age: 2019, countFuel: 10, price: 12, imageUrl: 'https://clck.ru/WbsWi', description: 'Очень надежный автомобиль' },
			{ id: 3, name: 'Lexus', age: 2015, countFuel: 20, price: 15, imageUrl: 'https://clck.ru/WbtuW', description: 'Ощущаю эту громндную машину' },
			{ id: 4, name: 'Audi', age: 2021, countFuel: 38, price: 16, imageUrl: 'https://clck.ru/Wbtwc', description: 'Быстрая чертовка!' },
		],
		profileNow: null
	}
}

let CarsReducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_PROFILE:
			return {
				...state,
				profileNow: state.data.cars.filter(el => el.id === action.id)
			}
		default: return state
	}
}

export const setProfile = (id) => ({ type: SET_PROFILE, id })

export default CarsReducer