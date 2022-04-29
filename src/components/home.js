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

const ImageLoader = ({file}) => <img
    src={file}
    alt={'timetable'}
    style={{width: "100%", height: "auto"}}
/>


const Home = () => {

    const [godMode, setGodMode] = useState(false);
    const [now, setNow] = useState(moment());

    useEffect(() => {
        window.scroll(0, 0)
    },[])

    let i = 0;
    while (i < image.length){
        if (now.isAfter(image[i].time) ) {
            i++
        }
        else {
            return (
                <div style={{
                    height: '100vh', width: '100vw',
                    backgroundColor: 'rgb(255,255,255)',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}>
                    <ImageLoader file={image[i].file}/>
                    <div style={{display: 'flex', height: '50px',width: '100%', backgroundColor: 'grey'}}>
                        <div
                            style={{height: '100%', width: '40%', backgroundColor: 'rgb(226,142,52)',
                                color: 'white',fontWeight: 'bold', display: 'flex',
                                alignItems: 'center', justifyContent: 'center', fontSize: '40px'}}
                            onClick={()=> {
                                if (godMode) {
                                    setNow(moment(image[i+1].time, dateformat))
                                    return null
                                }
                                let password;
                                password = prompt("Enter Password")
                                if (password !== "19880502") {
                                    alert("Wrong Password")
                                    return null
                                }
                                else {
                                    setGodMode(true)
                                }

                            }}
                        >
                            Happy
                        </div>
                        <div
                            style={{height: '100%', width: '60%', backgroundColor: 'rgb(67,84,159)',
                                color: 'white', fontWeight: 'bold', display: 'flex',
                                alignItems: 'center', justifyContent: 'center', fontSize: '40px'}}
                            onClick={()=>{
                                if (godMode) {
                                    setNow(moment(image[i-1].time, dateformat))
                                    return null
                                }
                                return null
                            }}
                        >
                            Birthday
                        </div>
                    </div>
                </div>
            )
        }

    }
    return <div/>
}


export default Home;