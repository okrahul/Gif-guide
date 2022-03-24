import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './GifStyle.css'

const Gifs = () => {

    const [data ,setData] = useState([]);
    const [search, setSearch] = useState("")
   useEffect(() => {
        const fetchdata = async () => {
        const result = await axios ("https://api.giphy.com/v1/gifs/trending", {
                params: {
                    api_key : "SSTRbEYE66VTxviz2VECcgCPsAByTaP6"
                }
            });
            console.log(result);
            console.log(result.data.data);
            setData(result.data.data);
        }
        fetchdata()

    },[])


    const RendorGif = () => {
        return data.map(el => {
            return (
                <div key = {el.id} className='gifs'>
                    <img src={el.images.fixed_height.url} />
                </div>
            )
        })
    }


    const HandleSearch = (event) => {
        setSearch(event.target.value)
        console.log(event.target.value)
   }

   const HandSubmit = async (event) => {
   event.preventDefault();
      const result = await axios ("https://api.giphy.com/v1/gifs/search", {
              params: {
                  api_key : "SSTRbEYE66VTxviz2VECcgCPsAByTaP6",
                  q: search
              }
          });
          console.log(result);
          console.log(result.data.data);
          setData(result.data.data);
         
      }
      
 
  return (
    <>

<form className='header'> 
        <input 
        type="text" 
        value={search} 
        className='textBox'
        onChange={HandleSearch} 
        placeholder='Search Gifs...' 
        />
        <button type='submit' onClick={HandSubmit} className='btn'>Go</button>
    </form>

   <h3 className='heading'>Trending Gifs...</h3> 
    
    <div className='gifBox'>
       <RendorGif />
       

    
    </div>
    </>
  )
}

export default Gifs