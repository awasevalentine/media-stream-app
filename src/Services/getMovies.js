import axios  from "axios"

const ApiUrl = "https://www.omdbapi.com/?apikey=3b053d45&s=inception"
const ApiUrlSearch = "https://www.omdbapi.com/?apikey=3b053d45&s="

export const getMovies = async()=>{
    try{
        let getData = await axios.get(ApiUrl)

        if(getData.data) return getData.data.Search
    }catch(err){
        throw new Error(`the following error occured: => ${err}`)
    }
}

export const getAllMovies = async(search)=>{
    try{
        let getData = await axios.get(ApiUrlSearch + search)

        if(getData.data) return getData.data.Search
    }catch(err){
        throw new Error(`the following error occured: => ${err}`)
    }
}