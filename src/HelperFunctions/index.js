 
const imageTypeRegex = /image\/(png|jpg|jpeg)/gm;

export const logoutOnJwtExpire = () => {
  localStorage.clear();
  window.location.href = "/";
};

  

export const getToken = () => localStorage.getItem("token");
export const setToken = (token) => localStorage.setItem("token", token);
export const removeToken = () => localStorage.removeItem("token");
export const isAuth = () => Boolean(getToken());

 
 

 