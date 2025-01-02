// deno-lint-ignore-file
import { StudentModel } from "../Model/studentmodel.ts";
import { deleteRecordByRollno, getRecord, getRecordByRollno, insertRecord, updateRecordByRollno } from "../Repo/insertRecord.ts";
// Adjust path as needed

export class Student {
    private studentmodel: StudentModel;

    constructor() {
        this.studentmodel = new StudentModel();
    };
    public async addStudent():Promise<void> {
        try {
            console.log("==============================================================");
            console.log("                       Add Student");
            console.log("==============================================================");

            const name:string= prompt("Enter Student Name: ")||"";
            if (!name || name.trim() === ""||name.length==0) {
                console.log("Invalid name");
                 this.addStudent();
            }


            const rollno:string = prompt("Enter Student Rollno: ")||"";
            if (!rollno || isNaN(Number(rollno))|| Number(rollno) <= 0) {
                console.log("Invalid rollno");
                this.addStudent();
            }

            const city:string = prompt("Enter Student City: ")||"";
            if (!city || city.trim() === ""||city.length==0) {
                console.log("Invalid city");
                this.addStudent();
            }

            const state :string= prompt("Enter Student State: ")||"";
            if (!state || state.trim() === ""||state.length==0) {
                console.log("Invalid state");
                this.addStudent();
            }

            const classNumber:string = prompt("Enter Student Class: ")||"";
            if (!classNumber || isNaN(Number(classNumber))|| Number(classNumber) <= 0) {
                console.log("Invalid class");
                 this.addStudent();
            }

            // Set data in the student model
            this.studentmodel.setName(name.trim());
            this.studentmodel.setRollno(Number(rollno));
            this.studentmodel.setCity(city.trim());
            this.studentmodel.setState(state.trim());
            this.studentmodel.setClass(Number(classNumber));

            // Call the repository to insert the record
            const { data, error } = await insertRecord(this.studentmodel);

            if (error) {
                console.error("Error adding student:");
            } else {
                console.log("Student added successfully...");
            }
        } catch (err) {
            console.error("An unexpected error occurred:");
        }
    }
    public async removeStudent():Promise<void> {
        try {
            // Get the rollno of the student to delete
            const rollno:number = Number(prompt("Enter Student Rollno: "));
            if (isNaN(rollno) || rollno <= 0) {
                console.log("Invalid rollno");
                 this.removeStudent();
            }

            // Call the repository function to delete the record
            const { data, error } = await deleteRecordByRollno(rollno);
            if (error) {
                console.error("Error deleting student:");
            } else {
                console.log("Student removed successfully");
            }
        } catch (error) {
            console.error("An unexpected error occurred");
        }
    }
    public async printStudentList():Promise<void> {
        try {
            // Call the repository function to get all records
            const { data, error } = await getRecord();
            if (error) {
                console.error("Error getting student list:");
            } else {
                console.log("Student List:");
                console.log(data);
            }
        } catch (error) {
            console.error("An unexpected error occurred:");
        }
    }
    public async updateStudent():Promise<void> {
        try {
            // Get the rollno of the student to update
            console.log("Enter Student Rollno:");
            const rollno:number = Number(prompt("Enter Student Rollno: "));
            if (isNaN(rollno) || rollno <= 0) {
                console.log("Invalid rollno");
                 this.updateStudent();
            }

            // Call the repository function to get the record by rollno
            const { data:user, error } = await getRecordByRollno(rollno);
            if (error) {
                console.error("Error getting student");
            } 
            else if(!user||user.length==0){
                console.log("No student found with rollno:", rollno);
            }
            
            else {
                if (user && user.length > 0) {
                    const student = user[0];
                    console.log("Student to update:");
                    console.log(student);

                    // Update the student details
                    console.log("Enter updated details:");
                    const name:string = prompt("Enter Student Name: ")||"";
                    if (!name || name.trim() === "") {
                        console.log("Invalid name");
                         this.updateStudent();
                    }

                    const city:string = prompt("Enter Student City: ")||"";
                    if (!city || city.trim() === "") {
                        console.log("Invalid city");
                         this.updateStudent();
                    }

                    const state :string= prompt("Enter Student State: ")||"";
                    if (!state || state.trim() === "") {
                        console.log("Invalid state");
                         this.updateStudent();
                    }

                    const classNumber:string = prompt("Enter Student Class: ")||"";
                    if (!classNumber || isNaN(Number(classNumber))) {
                        console.log("Invalid class");
                         this.updateStudent();
                    }

                    // Set the updated data in the student model
                    this.studentmodel.setName(name.trim());
                    this.studentmodel.setCity(city.trim());
                    this.studentmodel.setState(state.trim());
                    this.studentmodel.setClass(Number(classNumber));

                    // Call the repository function to update the record
                    const { data, error } = await updateRecordByRollno(rollno, this.studentmodel);

                    if (error) {
                        console.error("Error updating student");
                    } else {
                        console.log("Student updated successfully");
                    }
                } else {
                    console.log("Student not found");  
                }
            }    
        }   catch (error) {
            console.error("An unexpected error occurred:");
        }
    }
}
    