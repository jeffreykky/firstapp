import React, {useEffect, useState} from "react";
import moment from "moment";
import page1 from './page-1.jpeg'
import page2 from './page-2.jpeg'
import page3 from './page-3.jpeg'
import page4 from './page-4.jpeg'
import page5 from './page-5.jpeg'
import page6 from './page-6.jpeg'
import page7 from './page-7.jpeg'
import page8 from './page-8.jpeg'

const Home = () => {


    const dateformat = 'YYYY-MM-DD hh:mm'
    const image = [
        {time: moment("2022-04-30 09:30", dateformat), file: page1},
        {time: moment("2022-04-30 11:00", dateformat), file: page2},
        {time: moment("2022-04-30 12:30", dateformat), file: page3},
        {time: moment("2022-04-30 13:30", dateformat), file: page4},
        {time: moment("2022-04-30 16:00", dateformat), file: page5},
        {time: moment("2022-04-30 17:00", dateformat), file: page6},
        {time: moment("2022-04-30 18:00", dateformat), file: page7},
        {time: moment("2022-04-30 19:30", dateformat), file: page8},
    ]
    let i = 0;
    while (i < image.length){
        const now = moment()
        if (now.isBefore(image[i].time) ) {
            return (
                <div
                    style={{
                        height: '100vh', width: '100vw',
                        backgroundColor: 'rgb(255,255,255)',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}>
                    <img src={image[i].file} alt={'timetable'} style={{width: "100%", height: "auto"}}/>
                </div>
            )
        }
        i++;
    }
    return <div/>
}


export default Home;