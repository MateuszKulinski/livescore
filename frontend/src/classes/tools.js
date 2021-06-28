import axios from '../axios';
export class Tools {
  constructor(user) {
    this.user = user;
  }

  static async validationRegister(user) {
    let array = [];
    for (const [key, value] of Object.entries(user)) {
      if (key === "email") {
        array.push(await this.validationEmail(user.email, 'register'));
      } else if (key === "userName") {
        array.push(await this.validationUserName(user.userName, 'register'));
      } else if (key === "password") {
        array.push(await this.validationPassword(user.password, user.rePassword, 'register'));
      }
    }
    return array.filter(Boolean);
  }
  static async validationLogin(user) {
    console.log(user);
    let array = [];
    for (const [key, value] of Object.entries(user)) {
      if (key === "email") {
        array.push(await this.validationEmail(user.email, 'login'));
      } else if (key === "password") {
        array.push(await this.validationPassword(user.password, 'login'));
      }
      if (array.length == 0) {

      }
    }
    return array.filter(Boolean);
  }
  static async validationEmail(email, type) {
    if (email === undefined) {
      return "Wprowadź e-mail";
    }
    const pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
    if (!pattern.test(email)) {
      return "Niepoprawny format e-maila.";
    }
    if (type === 'register') {
      const res = await axios.get(`email/${email}`);
      if (res.status == 200) {
        return false;
      }
      return "E-mail jest już zajęty";
    }
    return false
  }
  static async validationUserName(userName, type) {
    if (userName === undefined) {
      return "Wprowadź nazwę użytkownika";
    }
    if (type === 'register') {
      const res = await axios.get(`userName/${userName}`);
      if (res.status == 200) {
        return false;
      }
      return "Nazwa użytkownika jest już zajęta";
    }
  }
  static validationPassword(password, rePassword, type) {
    if (password === undefined) {
      return "Wprowadź hasło";
    }
    if (type == "register") {
      if (rePassword === undefined) {
        return "Powtórz hasło";
      }
      if (!(rePassword === password)) {
        return "Hasła są różne";
      }
    }
  }
};