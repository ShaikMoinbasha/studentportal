import supabase from "../Config/DBConfig.ts";
import { StudentModel } from "../Model/studentmodel.ts";

export async function insertRecord(studentmodel:StudentModel) {
    // Code to insert a new record
    const {data, error} = await supabase
      .from('Student')
      .insert([
        { name: studentmodel.getName(),
         rollno: studentmodel.getRollno(),
         city: studentmodel.getCity(), 
         state: studentmodel.getState(), 
         class: studentmodel.getClass() },
      ])
      return {data, error};
  }

  export async function getRecord() {
    // Code to get all records
    const {data, error} = await supabase
      .from('Student')
      .select('*')
    return {data, error};
  }

  export async function getRecordByRollno(rollno:number) {
    // Code to get a record by rollno
    const {data, error} = await supabase
      .from('Student')
      .select('*')
      .eq('rollno', rollno)
    return {data, error};
  }

  export async function deleteRecordByRollno(rollno:number) {
    // Code to delete a record by rollno
    const {data, error} = await supabase
      .from('Student')
      .delete()
      .eq('rollno', rollno)
    return {data, error};
  }

  export async function updateRecordByRollno(rollno:number, studentmodel:StudentModel) {
    // Code to update a record by rollno
    const {data, error} = await supabase
      .from('Student')
      .update({
        name: studentmodel.getName(),
        rollno: studentmodel.getRollno(),
        city: studentmodel.getCity(), 
        state: studentmodel.getState(), 
        class: studentmodel.getClass() 
      })
      .eq('rollno', rollno)
    return {data, error};
  }

