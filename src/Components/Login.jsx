import Header from "./Header";
import { useState, useRef } from "react";
import { checkValidation } from "../utils/validate";
const Login = () => {
  const [toggle, setToggle] = useState(true);
  const [isValid, setIsValid] = useState(null);
  const email = useRef(null);
  const pass = useRef(null);

  const handleValidation = () => {
    const checkForm = checkValidation(email.current.value, pass.current.value);
    setIsValid(checkForm);
  };

  const toggleSignInForm = () => {
    setToggle(!toggle);
  };
  return (
    <>
      <Header />
      <div className="w-full">
        <img
          className="w-full object-cover h-screen"
          src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/f562aaf4-5dbb-4603-a32b-6ef6c2230136/dh0w8qv-9d8ee6b2-b41a-4681-ab9b-8a227560dc75.jpg/v1/fill/w_1192,h_670,q_70,strp/the_netflix_login_background__canada__2024___by_logofeveryt_dh0w8qv-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NzIwIiwicGF0aCI6Ii9mL2Y1NjJhYWY0LTVkYmItNDYwMy1hMzJiLTZlZjZjMjIzMDEzNi9kaDB3OHF2LTlkOGVlNmIyLWI0MWEtNDY4MS1hYjliLThhMjI3NTYwZGM3NS5qcGciLCJ3aWR0aCI6Ijw9MTI4MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.FScrpAAFnKqBVKwe2syeiOww6mfH6avq-DRHZ_uFVNw"
          alt="CineAI BG"
        />
      </div>
      <div className="absolute top-0 min-h-screen w-full flex items-center justify-center">
        <form
          className=" bg-black/80 flex flex-col text-white gap-8 p-10 pr-15 pl-15"
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <div className="text-2xl font-bold">
            {toggle == true ? <p>Sign In</p> : <p>Sign Up</p>}
          </div>
          {toggle == false && (
            <input
              className="h-10 bg-gray-800 opacity-100 p-2 outline-none"
              type="text"
              placeholder="username"
            />
          )}
          <input
            ref={email}
            className="h-10 bg-gray-800 opacity-100 p-2 outline-none"
            type="E-mail"
            placeholder="E-mail"
          />
          <input
            ref={pass}
            className="h-10 bg-gray-800 opacity-100 p-2 outline-none"
            type="password"
            placeholder="Password"
          />
          <div className="text-red-600">{isValid}</div>
          <button
            className="bg-[#c31fe0] h-10 w-full rounded-[5px] cursor-pointer"
            onClick={handleValidation}
          >
            {toggle == true ? <p>Sign In</p> : <p>Sign Up</p>}
          </button>
          <div className="cursor-pointer" onClick={toggleSignInForm}>
            {toggle == true ? (
              <p>New Here? Sign Up Now</p>
            ) : (
              <p>Already User? Sign In</p>
            )}
          </div>
        </form>
      </div>
    </>
  );
};
export default Login;
