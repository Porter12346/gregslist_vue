export class House{
    constructor(houseData){
        this.year = houseData.year
        this.bedrooms = houseData.bedrooms
        this.bathrooms = houseData.bathrooms
        this.sqft = houseData.sqft
        this.price = houseData.price
        this.description = houseData.description
        this.imgURL = houseData.imgURL
        this.id = houseData.id || houseData._id
    }
}