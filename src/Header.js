import './Header.css';
import img from './img/dq.jpg'
export default function Header() {
    return (
        <div>
            <header className="Header">
                <h1 className="Title">Kurup</h1>
                <p className="Short">2021 &#183; 12A &#183; 2h 20m</p>
                <div className="Shadow">
                    <img src={img} alt="Kurup_Logo" className="Img" />
                </div>
            </header>
        </div>
    )
}