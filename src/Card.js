import "./Card.css"

export default function Card(props) {
    return (
        <div className="TopCast">

        <div className="Card">
            <div className="Card_img">
                <img src={props.castImg} alt="ActorImg" />
            </div>
            <div className ="Title_div">
                <h4>{props.title}</h4>
                <a href={props.instaLink}><img className="InstaIcon" alt="Insta_logo" src="https://img.icons8.com/fluency/48/000000/instagram-new.png"/></a>
            </div>
        </div>

        {/* <div class="Card">
        <a href="https://www.instagram.com/indrajith_s/"><img className="InstaIcon" alt="Insta_logo" src="https://img.icons8.com/ios-filled/50/000000/instagram-new--v2.png"/></a>
            <div class ="Title_div">
            <h4>Indrajith Sukumaran</h4>
            </div>
        </div>

        <div class="Card">
        <a href="https://www.instagram.com/sobhitad/"><img className="InstaIcon" alt="Insta_logo" src="https://img.icons8.com/ios-filled/50/000000/instagram-new--v2.png"/></a>
            <div class ="Title_div">
            <h4>Sobhita Dhulipala</h4>
            </div>
        </div>

        <div class="Card">
        <a href="https://www.instagram.com/shinetomchacko_official/"><img className="InstaIcon" alt="Insta_logo" src="https://img.icons8.com/ios-filled/50/000000/instagram-new--v2.png"/></a>
            <div class ="Title_div">
            <h4>Shine Tom Chacko</h4>
            </div>
        </div>

        <div class="Card">
        <a href="https://www.instagram.com/sunnywayn/"><img className="InstaIcon" alt="Insta_logo" src="https://img.icons8.com/ios-filled/50/000000/instagram-new--v2.png"/></a>
            <div class ="Title_div">
            <h4>Sunny Wayne</h4>
            </div>
        </div>

        <div class="Card">
        <a href="https://www.instagram.com/tovinothomas/"><img className="InstaIcon" alt="Insta_logo" src="https://img.icons8.com/ios-filled/50/000000/instagram-new--v2.png"/></a>
            <div class ="Title_div">
            <h4>Tovino Thomas</h4>
            </div>
        </div>

        <div class="Card">
        <a href="https://www.instagram.com/bharath_niwas/"><img className="InstaIcon" alt="Insta_logo" src="https://img.icons8.com/ios-filled/50/000000/instagram-new--v2.png"/></a>
            <div class ="Title_div">
            <h4>Bharath Srinivasan</h4>
            </div>
        </div>

        <div class="Card">
        <a href="https://www.instagram.com/aanandbal/"><img className="InstaIcon" alt="Insta_logo" src="https://img.icons8.com/ios-filled/50/000000/instagram-new--v2.png"/></a>
            <div class ="Title_div">
            <h4>Anand Bal</h4>
            </div>
        </div>

        <div class="Card">
        <a href="https://www.instagram.com/surabhi_lakshmi/"><img className="InstaIcon" alt="Insta_logo" src="https://img.icons8.com/ios-filled/50/000000/instagram-new--v2.png"/></a>
            <div class ="Title_div">
            <h4>Surabhi Lakshmi</h4>
            </div>
        </div>

        <div class="Card">
        <a href="https://www.instagram.com/anupamaparameswaran96/"><img className="InstaIcon" alt="Insta_logo" src="https://img.icons8.com/ios-filled/50/000000/instagram-new--v2.png"/></a>
            <div class ="Title_div">
            <h4>Anupama Parameswaran</h4>
            </div>
        </div> */}

        </div>
    )
}