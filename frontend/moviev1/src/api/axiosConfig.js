import axios from 'axios';

export default axios.create({
    baseURL:'https://4203-182-66-218-124.ngrok-free.app',
    headers: {"ngrok-skip-browser-warning":"true"}
});