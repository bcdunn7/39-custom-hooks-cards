import axios from "axios";
import { useState } from "react";
import uuid from 'uuid';

function useAxios(URL) {
    const [data, setData] = useState([]);
    const axiosCall = async (param) => {
        try {
            if (param) {
                URL = URL + param
            }
            const response = await axios.get(URL);
        setData(data => [...data, {...response.data, id: uuid()}])
        } catch (e) {
            console.error(e);
        }
    }

    return [data, axiosCall];
}

export default useAxios;