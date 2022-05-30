import { useState } from "react";

const cart = [100, 200, 300];

function Form1() {
  const [counter, setcounter] = useState(() => {
    const total = cart.reduce((total, cur) => total + cur);
    console.log("done");
    return total;
  });
  const plusFunc = () => {
    setcounter(counter + 1);
  };

  const arr1 = [
    { id: 1, name: "giá trị 1" },
    { id: 2, name: "giá trị 2" },
    { id: 3, name: "giá trị 3" },
    { id: 4, name: "giá trị 4" },
  ];

  const [value1, setVal1] = useState(0);
  const [value2, setVal2] = useState(0);

  const [ketqua, setKetqua] = useState('0');
  const tinhChuVi = () => {
    setKetqua(value1 * 2 + value2 * 2);
  };

  const [checked, setChecked] = useState();
  const [choice, setChoice] = useState([]);
  const handleChoice = (e) => {
	setChoice(prev => {
		const isChoice = choice.includes(e)
		if(isChoice){
			return choice.filter(item => item !== e)
		}else{
			return [...prev, e]
		}
	})
  }
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col">
          <div className="form-group row">
            <label className="col-sm-4 col-form-label">Chiều dài</label>
            <div className="col-sm-8">
              <input
                className="form-control"
                onChange={(e) => {
                  setVal1(e.target.value);
                }}
              />
            </div>
          </div>
        </div>
        <div className="col">
          <div className="form-group row">
            <label className="col-sm-4 col-form-label">Chiều rộng</label>
            <div className="col-sm-8">
              <input
                className="form-control"
                onChange={(e) => {
                  setVal2(e.target.value);
                }}
              />
            </div>
          </div>
        </div>
        <div className="col-auto">
          <button className="btn btn-outline-primary" onClick={tinhChuVi}>
            Tính
          </button>
        </div>
      </div>
      <div className="alert alert-info" role="alert">
        Chu vi của tam giác là:{" "}
        <div className="alert-link">
          {ketqua || 'Nhập dữ liệu mới tính được chứ!'}
        </div>
      </div>
      <hr />
      <h1>{counter}</h1>
      <button className="btn btn-outline-primary" onClick={plusFunc}>
        Click me
      </button>
      <hr />
      <div className="row mt-5 mb-2">
        {arr1.map((e) => (
          <div className="form-check col" key={e.id}>
            <input
              type="radio"
              checked={checked === e.id}
              onChange={() => setChecked(e.id)}
			  id={'check'+e.id}
			  className="form-check-input"
            />
            <label className="form-check-label" htmlFor={'check'+e.id}>
              {e.name}
            </label>
          </div>
        ))}
      </div>
	  <div className="alert alert-info" role="alert">
        Bạn vừa chọn giá trị là:{" "}
        <div className="alert-link">
          {checked}
        </div>
      </div>
      <hr />
      <div className="row mt-5 mb-2">
        {arr1.map((e) => (
          <div className="form-check col" key={e.id}>
            <input
              type="checkbox"
			  checked = {choice.includes(e.id)}
              onChange={() => handleChoice(e.id)}
			  className="form-check-input"
			  id={'choice'+e.id}
            />
            <label className="form-check-label" htmlFor={'choice'+e.id}>
              {e.name}
            </label>
          </div>
        ))}
      </div>
	  <div className="alert alert-info" role="alert">
        Bạn đã chọn giá trị là:{" "}
        <div className="alert-link">
          {choice.map((name) => (
			 <span key={name} className="badge badge-info ml-1">{name}</span> 
		  ))}
        </div>
      </div>
    </div>
  );
}

export default Form1;

/* JSX
import { useState } from "react";
function components() {
	const [state, setState] = useState(initState)
	....
}
- Components dc re-render sau khi setState
- initState chỉ được dùng cho lần đầu (Giá trị khởi tạo đưa vào state), setState thay đổi giá trị của state
- Set state với Callback?
- initical state với Callback?
- Set state là thay thế state bằng giá trị mới
 */
