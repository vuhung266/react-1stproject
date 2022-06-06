import { useEffect, useState } from "react";
//const [list, setList] = useState([]);

function Profile() {
  const [value2, setVal2] = useState();
  
  useEffect(() => {
	console.log(value2);
  }, []);

  
  

  const list = [
    { name: "Tyler", friend: true },
    { name: "Ryan", friend: true },
    { name: "Michael", friend: false },
    { name: "Mikenzie", friend: false },
    { name: "Jessica", friend: true },
    { name: "Dan", friend: false },
  ];
  return (
    <div>
      <input
        className="form-control"
        onChange={(e) => {
          setVal2(e.target.value);
        }}
      />
      {list.map((e) => (
        <li key={e.name}>{e.name}</li>
      ))}
    </div>
  );
}

export default Profile;
