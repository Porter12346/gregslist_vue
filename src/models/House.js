export class House{
    constructor(houseData){
        this.year = houseData.year
        this.bedrooms = houseData.bedrooms
        this.bathrooms = houseData.bathrooms
        this.levels = houseData.levels
        this.price = houseData.price
        this.description = houseData.description
        this.imgURL = houseData.imgUrl
        this.id = houseData.id || houseData._id
        this.creator = houseData.creator
    }
}