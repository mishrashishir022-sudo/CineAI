export const checkValidation = (email, password)=> {
   const  checkEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email) 
   const checkPass= /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(password)

   if(!checkEmail) return <p>Please Enter Valid Email</p> 
   if(!checkPass) return <p>Please Enter Valid Password</p> 

   return null;
}