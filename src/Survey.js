import React from "react";
import { useForm } from "react-hook-form";
import "./survey.css";

const Survery = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <>
      <h2>Post Exercises Survery</h2>
      <p>
        Please fill out the following survery to the best of your ability it
        really helps us at Parados improve your experience
      </p>

      <form onSubmit={handleSubmit(onSubmit)}>
        <label>First Name</label>
        <input placeholder="First Name" {...register("firstName")} />
        <label>Last Name</label>
        <input placeholder="Last Name" {...register("lastName")} />
        <label>
          How did you feel about the length's of the curated exercises?
        </label>
        <select {...register("length")}>
          <option value="tooLong">They were too long.</option>
          <option value="tooShort">They were too short.</option>
          <option value="justRight">They were a good length.</option>
        </select>
        <label>In what format would you want the content to be delivered?</label>
        <select {...register("format")}>
          <option value="Video">Video</option>
          <option value="Audio">Audio</option>
          <option value="Text with pictures">Text w/ Pictures</option>
          <option value="Text w/o pictures">Text w/o Pictures</option>
        </select>

        <label>Could you see yourself incorporating this into your daily routine?</label>
        <select {...register("format")}>
          <option value="Video">Yes</option>
          <option value="Audio">No</option>
        </select>

        <label>Please explain your reasoning as to why or why not.</label>
        <textarea cols="40" rows="5" {...register("routineReasoning")} />

        <label>Could you see yourself paying for this service (given that the content is curated specifically for you)?</label>
        <select {...register("paying")}>
          <option value="Video">Yes</option>
          <option value="Audio">No</option>
        </select>
        
        <label>Please explain your reasoning as to why or why not.</label>
        <textarea cols="40" rows="5" {...register("paymentReasoning")} />

        <label>If you have any other suggestions please let us know below.</label>
        <textarea cols="40" rows="5" {...register("suggestions")} />
        <div className="butt">
        <button type="submit">Submit</button>
        </div>
 
      </form>
    </>
  );
};
export default Survery;
