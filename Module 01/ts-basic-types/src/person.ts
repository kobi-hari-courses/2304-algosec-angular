export class Person {
    constructor(
        private firstName: string, 
        private lastName: string){}

    
    get fullName(): string {
        return `${this.firstName} ${this.lastName}`;
    } 
    set fullName(value: string) {
        const parts = value.split(' ');
        [this.firstName, this.lastName] = parts;
    }   

    log() {
        console.log(`Preson ${this.firstName} ${this.lastName}`);
    }

}

