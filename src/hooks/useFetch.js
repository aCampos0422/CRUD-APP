import { useState, useEffect } from "react"
import axios from "axios"



// creamos la funcion (hook) pra hacer la peticion de la api
const useFetch = (baseUrl, setCloseForm) => {
  
  const [infoApi, setInfoApi] = useState()

  // GET
  const getApi = (path) => {
    const url = `${baseUrl}${path}/`
    axios.get(url)
    .then(resp => setInfoApi(resp.data))
    .catch(error => console.error(error))
  }

  // POST
  const postApi = (path, data) => {
    const url = `${baseUrl}${path}/`
    axios.post(url, data)
    .then(resp => {
      console.log(resp.data)
      setInfoApi([...infoApi, resp.data])
      setCloseForm(true)
    })
    .catch(error => console.error(error))
  }

  // DELETE
  const deleteApi = (path, id) =>{
    const url = `${baseUrl}${path}/${id}/`
    axios.delete(url)
    .then(resp => {
      console.log(resp.data)
      const infoApiFilter = infoApi.filter(e => e.id !== id)
      setInfoApi(infoApiFilter)
    })
    .catch(error => console.error(error))
  }


  // UPDATE
  const updateApi = (path, id, data) => {
    const url = `${baseUrl}${path}/${id}/`
    axios.patch(url, data)
    .then(resp => {
      console.log(resp.data)
      const mapInfoApi = infoApi.map(e => e.id === id ? resp.data : e)
      setInfoApi(mapInfoApi)
      setCloseForm(true)
    })
    .catch(error => console.error(error))
  }

  return [infoApi, getApi, postApi, deleteApi, updateApi]
}

export default useFetch
