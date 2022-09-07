import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useState } from "react";
import "./common.css";

export default function Registration() {
  const [datas, setDatas] = useState([]);

  const schema = yup.object().shape({
    fullName: yup.string().required("Your Full Name is Required!"),
    email: yup.string().email().required(),
    age: yup.number().positive().integer().min(5).required(),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmit = (data) => {
    setDatas([...datas, data]);
  };

  return (
    <div className="main-container">
      <h2>Registration form</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type="text"
          placeholder="Full Name..."
          {...register("fullName")}
        />
        <p>{errors.fullName?.message}</p>
        <input type="text" placeholder="Email..." {...register("email")} />
        <p>{errors.email?.message}</p>
        <input type="number" placeholder="Age..." {...register("age")} />
        <p>{errors.age?.message}</p>
        <input type="submit" />
      </form>
      <ul>
        {datas.map((data) => {
              return <li>{data.fullName}</li>;
            })
          }
      </ul>
    </div>
  );
}
