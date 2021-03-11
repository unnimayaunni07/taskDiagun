import { faArrowCircleRight, faCalculator, faHeadphones, faHome, faMailBulk, faPhone, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { observer } from 'mobx-react-lite';
import React, { useEffect, useState } from 'react';
import './App.css';
import downloads from './downloads.jpg';
import downloadss from './downloadss.jpg';
// import { useStore } from './stores/useStore';

const UserProfile = observer((props: any) => {
//   const { userSessionStore } = useStore()
  const [data, setData] = useState<any>([])
  const [description, setDescription] = useState<any>([])

//   useEffect(() => {
//     userSessionStore.getData()
//       .then(([success, data]) => {
//         // data?.data?.payment_report?.map((item: any) => item)
//         const dataa = data?.data.map((item: any) => item.title)
//         const descriptinData = data?.data.map((item: any) => item.description)

//         const d = dataa[1]?.title
//         // .map((item: any) => item?.title)
//         console.log('demo', dataa)
//         console.log('d', d)
//         setData(dataa)
//         setDescription(descriptinData)
//       })
//   }, [])

  return (
    <div>
      <div className="sidenav">
        <a href="/Profile">About</a>
        <a href="#services">Services</a>
        <a href="#clients">Clients</a>
        <a href="#contact">Contact</a>
      </div>

      <div className="main">
        <h2>Sidebar</h2>
        <p>This sidebar is of full height (100%) and always shown.</p>
        <p>Scroll down the page to see the result.</p>
        <p>Some text to enable scrolling.. Lorem ipsum dolor sit amet, illum definitiones no quo, maluisset concludaturque et eum, altera fabulas ut quo. Atqui causae gloriatur ius te, id agam omnis evertitur eum. Affert laboramus repudiandae nec et. Inciderint efficiantur his ad. Eum no molestiae voluptatibus.</p>
        <p>Some text to enable scrolling.. Lorem ipsum dolor sit amet, illum definitiones no quo, maluisset concludaturque et eum, altera fabulas ut quo. Atqui causae gloriatur ius te, id agam omnis evertitur eum. Affert laboramus repudiandae nec et. Inciderint efficiantur his ad. Eum no molestiae voluptatibus.</p>
        <p>Some text to enable scrolling.. Lorem ipsum dolor sit amet, illum definitiones no quo, maluisset concludaturque et eum, altera fabulas ut quo. Atqui causae gloriatur ius te, id agam omnis evertitur eum. Affert laboramus repudiandae nec et. Inciderint efficiantur his ad. Eum no molestiae voluptatibus.</p>
        <p>Some text to enable scrolling.. Lorem ipsum dolor sit amet, illum definitiones no quo, maluisset concludaturque et eum, altera fabulas ut quo. Atqui causae gloriatur ius te, id agam omnis evertitur eum. Affert laboramus repudiandae nec et. Inciderint efficiantur his ad. Eum no molestiae voluptatibus.</p>
      </div>
    </div>






  );
})

export default UserProfile;
