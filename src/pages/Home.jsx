import React, { useEffect, useState } from 'react';
import axios from 'axios';
import "./Home.css";

const Home = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        axios
            .get('https://randomuser.me/api/?page=1&results=1&seed=abc')
            .then((res) => {
                setData(res.data.results);
                setLoading(false);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    return (
        <>
            {loading ?
                <p>Data is not fetched</p>
                :
                (data.length > 0 &&
                    <div className='Card-container flex flex-row'>
                        <img src={data[0].picture.medium} alt="User Avatar" />
                        <div className='details'>
                            <p><b>{data[0].name.title}.&nbsp;&nbsp;{data[0].name.first}&nbsp;&nbsp;{data[0].name.last}</b></p>
                            <p>Gender:&nbsp;{data[0].gender}</p>
                            <p>Phone Number: {data[0].phone}</p>
                        </div>
                    </div>
                )
            }
        </>
    );
}

export default Home;
