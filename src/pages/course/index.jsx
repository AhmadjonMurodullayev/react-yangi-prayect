import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { CourseModal,CourseTable } from '@components';

const index = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        axios.get("http://localhost:3000/course")
          .then(res => {
            setData(res?.data);
          })
      }, []);
  return (
    <div>
        <CourseModal/>
        <CourseTable/>
    </div>
  )
}

export default index