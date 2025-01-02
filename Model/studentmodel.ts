export class StudentModel{
    private name!: string;
    private rollno!: number;
    private city!: string;
    private state!: string;
    private class!: number;

    // Getter and Setter for name
    public getName(): string {
        return this.name;
    }

    public setName(name: string): void {
        this.name = name;
    }

    // Getter and Setter for rollno
    public getRollno(): number {
        return this.rollno;
    }

    public setRollno(rollno: number): void {
        this.rollno = rollno;
    }

    // Getter and Setter for city
    public getCity(): string {
        return this.city;
    }

    public setCity(city: string): void {
        this.city = city;
    }

    // Getter and Setter for state
    public getState(): string {
        return this.state;
    }

    public setState(state: string): void {
        this.state = state;
    }

    // Getter and Setter for class
    public getClass(): number {
        return this.class;
    }

    public setClass(classNumber: number): void {
        this.class = classNumber;
    }
}
