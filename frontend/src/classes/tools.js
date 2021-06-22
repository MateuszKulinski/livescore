module.exports = {
  validationRegister: user => {
    let array = [];
    for (const [key, value] of Object.entries(user)) {
      if (key === "email") {
        array.push(module.exports.validationEmail(user.email, 'register'));
      } else if (key === "userName") {
        array.push(module.exports.validationUserName(user.userName, 'register'));
      } else if (key === "password") {
        array.push(module.exports.validationPassword(user.password, 'register'));
      }
    }
    return array.filter(Boolean);
  },
  validationLogin: user => {
    let array = [];
    for (const [key, value] of Object.entries(user)) {
      if (key === "email") {
        array.push(module.exports.validationEmail(user.email, 'login'));
      } else if (key === "password") {
        array.push(module.exports.validationPassword(user.password, 'login'));
      }
    }
    return array.filter(Boolean);
  },
  validationEmail: (email, type) => {
    const pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
    if (!pattern.test(email)) {
      return "Niepoprawny format e-maila.";
    }
    if (type === 'register') {
      //SPRAWDZIĆ EMAIL W BAZIE
    }
    return false
  },
  validationUserName: (userName, type) => {
    if (type === 'register') {
      //SPRAWDZIĆ NAZWĘ W BAZIE
    }
  },
  validationPassword: (password, type) => {
    if (type == 'login') {
      //SPRAWDZIĆ LOGIN W BAZIE
    }
  },
};