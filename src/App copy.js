import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [Album, SetAlbum] = useState([]);
  const [active, Setactive] = useState('albums');
  const tabs = ["albums", "photos", "posts"];
  const [totop, settotop] = useState(false);
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${active}`)
      .then((res) => res.json())
      .then((e) => {
        SetAlbum(e);
      });
  }, [active]);
  useEffect(() => {
	  const handleScroll = () => {
		  if(window.scrollY >= 200) {
			settotop(true)
		  }else{
			  settotop(false)
		  }
	  }
	  window.addEventListener('scroll', handleScroll)

	  //cleanup function
	  return(() => {
		  window.removeEventListener('scroll', handleScroll)
	  })
  }, []);
  const changeTab = (e) => {
	//console.log(e);
	Setactive(e);
  };
  return (
    <div>
		{totop && (
		<div className="btn-totop btn btn-light">Go to top</div>
		)}
		
      <div className="d-flex flex-row">
        {tabs.map((e) => (
          <div key={e} className="p-2">
            <button 
			className="btn btn-light"
			style={ active === e ? {backgroundColor:'#333', color:'#fff'} : {} }
			onClick={() => changeTab(e)}>{e}</button>
          </div>
        ))}
      </div>
      <div>
        <ul>
          {Album.map((e) => (
            <li key={e.id}>{e.title}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
export default App;
