export class Name{
    constructor(name, lastName){
        this.name = name;
        this.lastName = lastName;
    }

    fullName() {
        return '${this.name} ${this.lastName}';
    }
}

export class Ability {
    constructor (ability, level) {
        this.ability = ability;
        this.level = level;
    }
}

export class Assignment {
    constructor (assignment) {
        this.assignment = assignment;
    }

    assign (project) {
        this.assignment.appent
    }

    unassign () {

    }
}

export class Member {

    constructor(avatar, name, nickName, profile, assignment, workload, availability){
        let enable = false;

        this.avatar = '';
        this.name = name;
        this.nickName = nickName;
        this.profile = profile;
        this.assignment = assignment;
        this.workload = workload;
        this.availability = availability;
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