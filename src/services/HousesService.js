import { AppState } from "../AppState.js";
import { api } from "./AxiosService.js"

class HousesService{
    async getHouses() {
        let response = await api.get('/api/houses')
        console.log(response.data);
        let houses = response.data
        AppState.houses = houses
    }

}
export const housesService = new HousesService()