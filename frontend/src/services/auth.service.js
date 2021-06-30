import axios from "../axios";

class authService {
  async login(user) {
    await axios.post(`signin`, user)
      .then(res => {
        if (res.data.token) {

          localStorage.setItem('user', JSON.stringify(res.data.user));
          localStorage.setItem('token', res.data.token);
        }
      });
  }
  async register(user) {
    await axios.post(`signup`, user)
      .then((res) => {
        return res.status;
      })
  }
  logout() {
    localStorage.removeItem('user');
    localStorage.removeItem('token');
  }
}

export default new authService();