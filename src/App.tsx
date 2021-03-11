import { faArrowCircleRight, faCalculator, faHeadphones, faHome, faMailBulk, faPhone, faPlus, faSearch, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { observer } from 'mobx-react-lite';
import React, { useEffect, useState } from 'react';
import { isThrowStatement } from 'typescript';
import './App.css';
import downloads from './downloads.jpg';
import downloadss from './downloadss.jpg';
import { useStore } from './stores/useStore';

const App = observer((props: any) => {
  const { userSessionStore } = useStore()
  const [data, setData] = useState<any>([])
  const [isShown, setIsShown] = useState(false);
  const [sizeShown, setSizeShown] = useState(false);
  const [toastShown, setToastShown] = useState(false);
  

  console.log('data', data)

 


  useEffect(() => {
    userSessionStore.getData()
      .then(([success, data]) => {
        data?.data?.payment_report?.map((item: any) => item)
        const dataa = data?.data.map((item: any) => item)
        console.log('data', dataa)
        setData(dataa)
        console.log('daxdsdsdta',dataa[0].sizes_available[0])
      })
  }, [])

  return (
<div style={{ display:"flex",alignItems:"center",justifyContent:"center",height:"100vh" }}>
    <div className="card" style={{ width: "19rem", textAlign: "center", position: "relative" }}>

{toastShown && ( <div className="toast" role="alert" aria-live="assertive" aria-atomic="true">
        <div className="toast-body">
          SUCCESSFULLY ADDED TO CART
        </div>
      </div>)}

      {/* <img src={downloadss} alt="Logo" className="photos" onMouseEnter={() => setIsShown(true)}
        onMouseLeave={() => setIsShown(false)} /> */}
        <div className="img_Div"> <img src={data[0]?.product_image} alt="Logo"  onMouseEnter={() => setIsShown(true)}
        onMouseLeave={() => setIsShown(false)} /></div>
        
      {/* {isShown && (
        <div>
          <button type="button" className="btn btn-danger">ADD TO BAG</button>
          <button type="button" className="btn btn-outline-dark">WISHLIST</button>
        </div>
      )} */}
  
       <div className="button_wrapper">
          <button type="button" className="btn btn-danger" onClick={() => setSizeShown(true)}>ADD TO BAG</button>
      
          <button type="button" className="btn btn-outline-dark">WISHLIST</button>
        </div> 
        {sizeShown && (
          // {data[0]?.map((item:any) =>
        <div className="size_list">
          <p style={{color:"white"}}>Select Size</p>
         
          <span className="size-wrapper" onClick={()=>setToastShown(!toastShown)}>{data[0]?.sizes_available[0]}</span>
          <span className="size-wrapper" onClick={()=>setToastShown(!toastShown)}>{data[0]?.sizes_available[1]}</span>
          <span className="size-wrappers" onClick={()=>setToastShown(!toastShown)}>{data[0]?.sizes_available[2]}</span>
          <span className="size-wrapper" onClick={()=>setToastShown(!toastShown)}>{data[0]?.sizes_available[3]}</span>
          <span className="size-wrapper" onClick={()=>setToastShown(!toastShown)}>{data[0]?.sizes_available[4]}</span>
        </div>
        // )}
      )}

      {/* <button type="button" className="btn btn-danger abc" onClick={() => setSizeShown(true)}>ADD TO BAG</button>
      {sizeShown && (
        <div>
          <p>Select Size</p>
         
          <span className="size-wrapper" onClick={()=>setToastShown(true)}>M</span>
        </div>
      )} */}

      <div className="container">
        <div className="card-body">

          <p className="card-title"><b>{data[0]?.product_name}</b></p>
          <p className="card-text">{data[0]?.category_name}</p>

          <div className="row">
            <div className="col-md">
              <b>₹ {data[0]?.sale_rate}</b>
            </div>
            <div className="col-md">
            <del> ₹ {data[0]?.mrp}</del>
    </div>
            <div className="col-md text">
              (₹ 234)
          </div>
          </div>

        </div>
      </div>

    </div>
    </div>
  );
})

export default App;