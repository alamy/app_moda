import axios from 'axios';


const Logar = () => {
    const instance = axios.create({
        baseURL: 'http://localhost:3000/'
      });
      return(instance)
}

export default Logar