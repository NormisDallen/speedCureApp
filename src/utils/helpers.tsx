import { _Number, _String, _Mixed, __Mixed, _Any } from '../types/types';
export const delay = (ms:_Number):_Any => new Promise((res) => setTimeout(res, ms));

//check empty filds
export const EmptyError = (data:_String, name:_String):_Mixed=>{
  if(data=='' || data==null){
    return `${name} cannot be empty`
  }
  return null;
}
//empty to disable buttons
export const EmptyFieldError = (field:_String):__Mixed=>field===''||field===null?true:false;
//empty to disable buttons

export const lengthError = (data:_String, desiredLength:_Number, field:_String):_Mixed => {
  if (
    (data && data.length < desiredLength) ||
    /[^a-zA-Z]/.test(data) === true
  ) {
    return `${field} must be ${desiredLength} characters and above with no numbers and special characters`;
  }
  return null;
};
export const passwordRegx:_Any = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).*$/
export const passwordError = (data:_String):_Mixed => {
  if (data && data.length < 6 ) {
    return `atleast 6 character needed`;
  }
  // if(data && passwordRegx.test(data) != true){
  //   return `Password must contain both uppercase and lower case letters`
  // }
  return null;
};

export const confirmPasswordError = (password:_String, confirmPassword:_String):_Mixed => {
  if (confirmPassword && confirmPassword !== password) {
    return `The passwords do not match`;
  }
  return null;
};

export const numberError = (data:_String):_Mixed => {
  if (data && /^[\s()+-]*([0-9][\s()+-]*){9,10}$/.test(data) !== true) {
    return 'Please enter a valid phone number with 10 digits and please use only numbers';
  }
  return null;
};

export const emailRegex:_Any = /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i;
export const emailError = (data:_String):_Mixed => {
  if (data && emailRegex.test(data) !== true) {
    return 'Please enter valid email address.';
  }
  return null;
};
