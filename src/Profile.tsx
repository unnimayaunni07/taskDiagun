import { faArrowCircleRight, faCalculator, faHeadphones, faHome, faMailBulk, faPhone, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { observer } from 'mobx-react-lite';
import React, { useEffect, useState } from 'react';
import './App.css';
import downloads from './downloads.jpg';
import downloadss from './downloadss.jpg';
import { useStore } from './stores/useStore';

const Profile = observer((props: any) => {
  const { userSessionStore } = useStore()
  const [data, setData] = useState<any>([])
  const [description, setDescription] = useState<any>([])

  useEffect(() => {
    userSessionStore.getData()
      .then(([success, data]) => {
        // data?.data?.payment_report?.map((item: any) => item)
        const dataa = data?.data.map((item: any) => item.title)
        const descriptinData = data?.data.map((item: any) => item.description)

        const d = dataa[1]?.title
        // .map((item: any) => item?.title)
        console.log('demo', dataa)
        console.log('d', d)
        setData(dataa)
        setDescription(descriptinData)
      })
  }, [])

  return (
    <div>
      <div className="sidenav">
        <a href="#about">About</a>
        <a href="#services">Services</a>
        <a href="#clients">Clients</a>
        <a href="#contact">Contact</a>
      </div>

      <div className="main">
          ddfhudsh
      </div>
    </div>






  );
})

export default Profile;
