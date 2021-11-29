import "./Meme.css"
import MemesData from "./MemesData"

export default function Meme() {
    function getMemeImage() {
        const memesArr = MemesData.data.memes
        const randomNumber = Math.floor(Math.random()*memesArr.length + 1)
        const memesUrl = memesArr[randomNumber].url
        console.log(memesUrl);
    }
    
    return (
        <main>
            <div className="Form">
                <input 
                    type="text"
                    placeholder="Top text"
                    className="Form--input"
                />
                <input 
                    type="text"
                    placeholder="Bottom text"
                    className="Form--input"
                />
                <button 
                    className="Form--btn"
                    onClick={getMemeImage}
                >
                    Get a new meme image 🖼
                </button>
            </div>
        </main>
    )
}