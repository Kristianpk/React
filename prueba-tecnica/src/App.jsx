import { useEffect, useState } from "react"

const CAT_ENDPOINT_RANDOM_FACT = 'https://catfact.ninja/fact'
const CAT_ENDPOINT_IMAGE_URL = 'https://cataas.com/cat/says/Hello'
// const CAT_PREFIX_IMAGE_URL = 'https://cataas.com'


export function App () {

    const [fact, setFact] = useState()
    const [imageUrl, setImageUrl] = useState()

    useEffect(()=>{
        fetch(CAT_ENDPOINT_RANDOM_FACT)
        .then(res=>res.json())
        .then(data => {
            const {fact} = data
            setFact(fact)})
            
            // const threeFirstWords = fact.split(' ')

            // console.log(threeFirstWords)
            
            fetch(CAT_ENDPOINT_IMAGE_URL)
            .then(res=>res.json())
             .then(response => {
                 const {url} = response
                 setImageUrl(url)
             } )
    }, [])

    return(
        <main>
            <h1>App de gatos</h1>
            <p>{fact}</p>
            <img src= {imageUrl} alt={`Imagen extracted using the first three words for ${fact}`}/>
        </main>
    )
}
