import { AppState } from "../AppState.js";
import { House } from "../models/House.js";
import { api } from "./AxiosService.js"

class HousesService{

    async destroyHouse(id) {
        let response = await api.delete(`/api/houses/${id}`)
        console.log(response);
        let houseIndex = AppState.houses.findIndex((house)=>house.id == id)
        AppState.houses.splice(houseIndex, 1)
    }

    async createHouse(value) {
        let response = await api.post('/api/houses', value)
        let house = new House(response)
        AppState.houses.push(house)
        console.log(response);
    }

    async getHouses() {
        let response = await api.get('/api/houses')
        console.log(response.data);
        let houses = response.data.map((houseData)=>new House(houseData))
        AppState.houses = houses
    }

}
export const housesService = new HousesService()