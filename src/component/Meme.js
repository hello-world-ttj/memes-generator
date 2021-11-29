import React , {useState,useEffect} from "react"
import "./Meme.css"

export default function Meme() {

    const [meme, setMeme] = useState({
        topText : "",
        bottomText : "",
        randomImage : "http://i.imgflip.com/1bij.jpg"
    })

    const [allMemes, setAllMemes] = useState([])


    useEffect(() => {
        async function getMemes() {
            const res = await fetch("https://api.imgflip.com/get_memes")
            const data = await res.json()
            setAllMemes(data.data.memes)
        }
        getMemes()
    }, [])


    function getMemeImage() {
        const randomNumber = Math.floor(Math.random()*allMemes.length)
        const url = allMemes[randomNumber].url
        setMeme({...meme, randomImage:url})
        // console.log(meme.randomImage);
    }

    function handleChange(event) {
        const {name, value} = event.target
        // console.log(value,name);
        setMeme({...meme, [name]: value})
    }
    
    return (
        <main>
            <div className="Form">
                <input 
                    type="text"
                    placeholder="Top text"
                    className="Form--input"
                    name="topText"
                    value={meme.topText}
                    onChange={handleChange}
                />
                <input 
                    type="text"
                    placeholder="Bottom text"
                    className="Form--input"
                    name="bottomText"
                    value={meme.bottomText}
                    onChange={handleChange}
                />
                <button 
                    className="Form--btn"
                    onClick={getMemeImage}
                >
                    Get a new meme image 🖼
                </button>
            </div>
            <div className="Meme">
                <img src={meme.randomImage} className="Meme--image" alt="Meme"/>
                <h2 className="Meme--text top">{meme.topText}</h2>
                <h2 className="Meme--text bottom">{meme.bottomText}</h2>
            </div>
            <footer class="Footer">
                <span>© hello_world.ttj</span>
            </footer>
        </main>
    )
}