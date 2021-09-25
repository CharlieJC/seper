import { useForm } from 'react-hook-form';
import React, { useState } from "react";
import axios from 'axios';

const SubmissionForm = () => {
    const { register, handleSubmit } = useForm();
    const [result, setResult] = useState("");

    const onSubmit = (data) => {
        console.log(data);
        axios
          .post('http://localhost:8082/api/articles', data)
          .catch(err => {
            console.log("Error in SubmissionForm!");
            console.log(data);
          })
      }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <p><input {...register('Title')} placeholder="Title" type="text"/></p>
      <p><input {...register("Authors")} placeholder="Authors" type="text"/></p>
      <p><input {...register("Source")} placeholder="Source" type="text"/></p> 
      <p><input {...register("PublicationYear")} placeholder="Publication Year" type="text"/></p>
      <p><input {...register("DOI")} placeholder="DOI" type="text"/></p>

      <p><select {...register("SEPractice")}>
        <option value="">Select SE practice...</option>
        <option value="TDD">TDD</option>
        <option value="Mob Programming">Mob Programming</option>
      </select></p>

      <p><input type="submit" /></p>
    </form>
  );
};
export default SubmissionForm;
