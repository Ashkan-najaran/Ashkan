import './Header.css'

export default function Header() {
  return (
    <div>
      <div className='header'>
        <img src='apple1.png' alt='' className='logo'/>
       <div className='div-ul'>
        <ul className="ulist">
          <li className="list"><a href="#" className="link">mac</a></li>
          <li className="list"><a href="#" className="link">gard</a></li>
          <li className="list"><a href="#" className="link">product</a></li>
          <li className="list"><a href="#" className="link">description</a></li>
          <li className="list"><a href="#" className="link">support</a></li>
          <li className="list"><a href="#" className="link">about</a></li>
        </ul>
        </div>
        <img src="sabad.png" alt="" className='sabad'/>
        <img src="porof.jpg" alt="" className='porof'/>
      </div>
    </div>
  )
}
