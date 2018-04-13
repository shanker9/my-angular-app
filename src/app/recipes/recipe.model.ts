export class Recipe {
    public name : String;
    public description : String;
    public imageSrc : String;

    constructor(name : String, description : String, imageSrc : String){
        this.name = name;
        this.description = description;
        this.imageSrc = imageSrc;
    }
}