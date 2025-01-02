// deno-lint-ignore-file

import { Student } from "../Service/addStudent.ts";

class StudentPortal{
    public async start():Promise<void>{
        

console.log("==============================================================");
console.log("        Welcome to Student Management System                 ");
console.log("==============================================================");
try{

while(true){
    this.showMenu();
    const choice = (prompt("Enter your choice: "));
if(choice == null || choice == ""||choice.length==0){
    console.log("Invalid choice");
}
const student: Student = new Student();
    
switch (choice) {
    case "1":
        await student.addStudent();
        break;
    case "2":
        
        await student.removeStudent();
        break;
    case "3":
        
        await student.printStudentList();
        break;
    case "4":
       await student.updateStudent();
        break;
    case "5":
        Deno.exit();
        break;
    default:
        console.log("Invalid choice");
        break;
    }
}

}catch (error) {
    console.error("An unexpected error occurred");
}finally{
    console.log("Thank you for using Student Management System");
    
}

}
private async showMenu(): Promise<void> {
console.log("1. Add Student");
console.log("2. Remove Student");
console.log("3. Print Student List");
console.log("4. update student info ");
console.log("5. Exit");
}

}
const studentPortal = new StudentPortal();
studentPortal.start();