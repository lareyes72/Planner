export class Project {
    /**
     * 
     * @param {string} name the name of the project
     * @param {person[]} resources a array of person
     */
    constructor(name, resources){
        let enable = false;

        this.name = name;
        this.resources = resources;
    }

    save(){}
    edit(){}
    enable(){
        enable = true;
    }
    disable(){
        enable = false;
    }

}