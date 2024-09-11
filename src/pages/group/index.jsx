import React, { useEffect, useState } from 'react'
import { GroupTable,GroupModal } from '@components';
import axios from 'axios';

const index = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        axios.get("http://localhost:3000/group")
          .then(res => {
            setData(res?.data);
          })
      }, []);
  return (
    <div>
      <GroupModal/>
      <GroupTable/>
    </div>
  )
}

export default index