import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Avatar, IconButton } from '@material-ui/core';
import { AttachFile, SearchOutlined, MoreVert } from '@material-ui/icons';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import MicIcon from '@material-ui/icons/Mic';
import { useParams } from 'react-router-dom';
import db from '../firebase';

function Chat() {

   const [ seed, setSeed ] = useState('');
   const [ input, setInput ] = useState('');
   const { roomId } = useParams();
   const [ roomName, setRoomName ] = useState('');
    
   useEffect(()=> {
    if (roomId){ 
        db.collection('rooms')
          .doc(roomId)
          .onSnapshot(snapshot => (
            setRoomName(snapshot.data().name)
        ))
    }  

   },[roomId])

   useEffect(() => {
    setSeed(Math.floor(Math.random() * 5000 ));
   },[roomId])

   const sendMessage = (e) => {
       e.preventDefault();
       console.log("You typed", input);
       setInput('');
   }

    return (
        <Div>
            <div className="chat_header">
                 <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`}/>

                 <div className="chatHeader_info">
                     <h3>{roomName}</h3>
                     <p>Last seen at ...</p>
                 </div>

                 <div className="chatHeader_right">
                 <IconButton>
                        <SearchOutlined />
                    </IconButton>
                    <IconButton>
                        <AttachFile />
                    </IconButton>
                    <IconButton>
                        <MoreVert />
                    </IconButton>
                 </div>
            </div>

            <div className="chat_body">
                 <p className={`chat_message ${true && "chat_reciever"}`}>
                    <span className="chat_name"> Evyatar Haim </span>
                      Hey guys
                    <span className="chat_timestamp">
                        3:52 pm
                    </span>
                 </p>
                 
            </div>

            <div className="chat_footer">
                 <InsertEmoticonIcon/>
                 <form>
                     <input 
                             placeholder="Type a message" 
                             type="text"
                             value={input}
                             onChange={(e) => setInput(e.target.value)}
                     />
                     <button type="submit"
                             onClick={sendMessage}>
                                 Send a message 
                     </button>
                 </form>
                 <MicIcon />
            </div>
        </Div>
    )
}

export default Chat;

const Div = styled.div`
flex: 0.65;
display: flex;
flex-direction: column;

.chat_header{
    padding: 30px;
    display: flex;
    align-items: center;
    border-bottom: 1px solid lightgray;
}

.chatHeader_info{
    flex: 1;
    padding-left: 20px;
}

.chatHeader_info > h3{
    margin-bottom: 3px;
    font-weight: 500;
}

.chatHeader_info > p {
    color: gray;
}

.chatHeader_right{
    display: flex;
    justify-content:space-between;
    min-width: 100px;
}

.chat_body{
    flex: 1;
    background-image: url("data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMTEhUTExMVFhUXGB0ZGRgYFRoYGhcYGBcYGhgXGBoYHSggGBolGxgXITEhJSkrLi4uGB8zODMtNygtLisBCgoKDQ0NDw8PFSsZFRktKy0tKysrKzcrKy03LTcrNzctKysvKzctLSs3Ky03Nys3LS0rLS0rKy0rLSstKysrK//AABEIASwAqAMBIgACEQEDEQH/xAAaAAADAQEBAQAAAAAAAAAAAAABAgMABAUG/8QANhAAAQMCAwYGAwACAQMFAAAAAQACEQMhMUFRBBJhcYHwkaGxwdHxEyLhMkLCUtLiBRRygqL/xAAWAQEBAQAAAAAAAAAAAAAAAAAAAQL/xAAVEQEBAAAAAAAAAAAAAAAAAAAAEf/aAAwDAQACEQMRAD8A+4Jhx5D1j5QbWk8O/dJvRlcd+vqjUJ01y1WVVruIaSMVDZdoc4wQIjFW/JAlxQo1Wkw3LhZUPUfHfykFXp3xVCpOpKKekTmpuqE68gMtZVWtSlgGBie7TggDXmCcY4RfNAvdfwHlf1VCIFu5KiAcS0dSiH3jOIx9k73gCTgohpgxE6zdPWpbzYwRXn1S2f1nw/qzC2ZdOtlWvQ3G6kmOS2z0A9uhBxVR3U6gIkIb1xp331UqNDdBvMx4Suh3FAHGyQtIuOvFBjc+OB9k29NhyPBRTF2ahVeHAQbTfLDK8Jag3zAs0Yn4VajQAALDrbwugAraAePwCsk3RrP/ANXH3WVRWq0WPG6n+xwz8v4mdW7g4R5X1VKb57t01QKactgpdn2cNnOfRPWcQLfSWm0f9RJ1B9lFVJXKNpIuRYkxrAVw+JnK/Mdhc7ae86+kkC0ThzVRWntIJAvKXcN8LY8c+iDdnIdY2x8oVywHEBAtA46fOXeq1d5AnsaHxVFy16cXnHITeeZQUFcW4ieU4dUzze+Hf8XNQBBFgZFjnhku0lQTDARBwS0TAgNIE8+uqqXCJmyABCKIMpdw62SCkAZOfrKLW/tY2zGUoJHat2QQZmwi0ZJGbde4twXXUaCLgHmud1JpkQBxjBVHRSeCJGC1V0Cy5KAcwkFpIOl7q73TY2sD6fSiq74WUXDOePWf6UEGa4ibAydTjGGF7BPs7bdBF8uWSo4pS+MQqhKwk2m3eqk4a+Y+QfVdTmA4hD8ehI6z6oEoDHv3Kew0CV36jvNSYBiVFdIKnXeQLKbiBBCvNpQCk6RKLmg4rB3cQo1a8GCLefwUFSbWyU3OvlwP3gYXPRqwIFyfQADLFdLnhrZjpgqgNbOnHn0zjNO9+62TeFA7ScIGfKyb/wByP9hkPMSbaINQ2neJEWhXOCjTLGyRaSfL2VHXEjTj7IF37996LNd33mplt794fKuBkooU3ykrtz4R4/aoGgLGDaUEnADH1PVZU/EPdZBi7DTVO4rFSY3PyQHcIAjGPFKSZB97RH0n35kDrwRe3vggRxkd9UpiMZRuD9mT3Cc0wcRdBJ5nBWLbd5INAGCxcqA0HMRH0hXkj9f7/OaLc+8yi3vvvFQRFAtI3TlfSePNV2invNIVFy19sAs2/oqjPbhLYJG7E21JS7oMk5mBGcCPBSG1uOh4Quxv7C4II6eBQcobeDgLCcLmTcZwu57gBJwUnCLCY0Get8kovYzHEYHLyzQXDRGAhElc7Hbpg4LoIsormFzf2RMRbxRaIm99EC4RA91Ram6QshSEBFQKbECYGiSttIbaMka4s7xHT6Wq02uEnSZ4Ihm1JbvDREOIFwOMLAj/AB4eSzha5tyRWFVpzHiEXtlKwgTznD4WpMiThOWiDN776ojvvwQazp9J4QTbhr9BOGpW1CSYwGfwjJGOGvygTa3ENtieyvPZRccAV6sXlJ+Xub+CqBs9ANHHVNVqQCYwusx88jh34KdW8DU35DH0Cgq5s8ElgbyTj7dNFWVFzL3wOYmToDCKYw62fmFt4NABPBak3nGU8cfNJtAAIOeQx8kFS0FBtIBcP4nQDywxv9rr2V36gdxKqC+tp6HEG9uSySS09MzlNjPssgtUwnuFzhthrAH/AOYjyC6QQUUVFlMi+cDoNEznzKd4UWsvKgZrgIRrOdA3RzT7uqKCTK4ONlVI+kChSYRYmdOCqItmLTHX/tWJP2flyr+Lg08SJW/FlYTo3+oM9k5YiOXd0dw/2ekxqqKe0vIaSFFMGAYAKRaRJIn4xAHVS2fazfe0nwySbPtDi8XxyVRVgcMOQvxue9F0sFheeKJE4peARTKVSlOBiRHTgmkg3w1TgqBSWgQSIwumAXE/YjvTNib6rqqVAOZyVQ5WSFxGI8DPssoqYcRMZT6j2TUic509fZTa425fIRLL48/ZVG20OgETbRPsodH7Ypa20bsSLlNs1UubJQao514tx+0rnTbvlM4qxak/Eool0DvxUQ3E4gcSTbGCuiwUpb3hPLVAxkAefZUxlcnWJ0hVqNJwMcfD+pCw6+VkGp63iyXato3bRJKcUzYzhqOEIVqbT/ll3dVHnOM3gDkqUa+5/qPdPtzYIAFot439l0DZwWjeF4QVZVkAjNaYxzWDQ2Iww8YRqmyisTOCBbBnX+rbsYeCBJiYvkEArVw3idEj3Q6c4zGHDEI0aN952PomqNvgY4Rjxnoqif5jr4R/VlTcOh6vPssoC8GZGkeaUUTmeXuEoc7G8GL/AMymVdjpHZQBzARButTIiBFtCo1iCYNwMgR53TlzSL20MRHIqg7RO6Y75LlNctsDMWuOpK6HOJaL5wSNAbkLUKYg2xMwdMkAo1N+QbYHvwQAw/y3sx68Anp7OBgqoFZYXy8hkoVK1wQQRIzwy8IPkukhcdakJAE5SSZxy9SgtQrbxNrd4prjLuUtBjgSCZHfgql3YQK6zeIHmhJAkwdYt9ol4NsZRLdTZRQFZpzQ/HYwbnA6cuCYWnmhSZEnUyg5Ktd4tuxxx80rNrcP8hPOxXc86KDqW8INtCqjoY6QCM0lQ3HIlSo0ntgSInHhoiXYzkTnlH8UFTVHfOFlF7hJIxv7d/ayoIYbC8CLW9c4V2iB2FickskG+GqipOxuQL4EkIfjIv5iPYgroBBS7jTkFUFlhcpTWHcJa5yQDoAtdRVmuBUawdNvTp1Wn9uqs5yoIQc4DHX1Wa5clYuAg4ZXFjjbVQdDnSARMJCw5z648sCp0N4xGA4+sX6J9pqkEAZz/B4qooKfMXmEm1Vi2IHNSFR04/7ARlhJRG1WuJ7J8MPFBXZHktk6+So93FT/ADQd0DQeUnwTVG8SgRj8beXX3TOJAwulYyD2clYDVRQplJUaAR1J8ETVARDgUEnPyN/jCUF0wsqhJjFEmcFqhgIBkC32orPbmLZJLj0tnic1Rsm58FnMQTN74x5hAvvYJmNM543OvYVCBwQSptkyqObotvd98kCSgLRGJU3UZcD3yHVM3+87lFvffggWnQgk98ijVpSQQYIRq1A0SV59XanHOBwVR1vaR6iBi4+inUaAN0xZuJx5BT2ZtQ3BtxNl3tGEgT3gg59nYQf2zvjiT5yq1K0EC981PcJnDS83mD0RpgOBGWPLggukrGylTfumDgrVGyFFRZESQtUdgVnEYALGXHv5VHQCgiFlBKnG9EY3H8XO/anb0ARdXf8A6nR0dD2ETUbM5zHKVUNWEwJIvlyKD3FvH1/qLHb02wMJtxRSiraYIHL4RsRIQvEeaSlUAO7EAWCBm9+Z90R333gsKaeEEwCnDVFzgTfAZfKdjhNsD34IIbXTc42GHqewko7Ef9vBd0LKok+pFhy8rRqjTqz3nF+SR8gzzxJ0vyWZJM8sDwtzQVe0ZqZrchzOnDirEKe4QTgZ19LBRRIDsRhrl4KbtpEm0gCSR6KtNsCFzV7m1hvAE6nlwVRb8zDmOqo6w7C4qmzEYX6cV2Yi/wAjmgjvuuRNp09M4WW3HXAm86euUrIHqjDmJ6XlL+KTwt6n2Wa+B4+vyU9N5OPcYqAhsdMu8Suas9zyA2Y1wVdrqlsEdU2zVS4SRCog3Y3AyHeSsaFoz1TPqxYCesIPqHL29JQajUyOKqpk5xfuyTfOp5xYayiiaXXjN/NGkyCiahAFrnvx4Jd51pt9fKgsp16u6JWY4zjOHul2qo0CHZ5KoFDaQ4GbR6KdHa5dEWyXHIynS6tsr2NMmZ5WCD0UC5beESg03Kis194zQ/EJnu+KL8kAIPAoHQc4DFCpUAxMKL3Dek9Ljhe55qosKg5cwR6rKZqzkPH4BWRSh05Yjnr7geKxJnCJ+D/PNM8AHoPXJAB3eJ80Q1Wq0CHZ5Qmo1A4SEtagHC9inpU90ABBnNU/xnvim2ipAMY5KR2kixEkaaxdQdBbkkDMRNtM76pRUDgYy8+4hJu2B/WD5Tfqiq1SctPj5U44DxurUzZTqVSHAEWPfrCozQbWsNDwKXaNl3jMwqUqwJgffHkgSM8URw7UwNIA08SrnZN4AgxIurVaYIlwkgdhOH6iPCPJCBTZuwNAfZGqbeichSeDBOJGA7zUUR+uN9SsX23shdQftwiwk+C1PbGn/IR5hVBZS3jvOwyHunqi+MdT7cldK90EdVBHdHbXH1KC6N8arIqIrcu8b4FXBlc28SALWi/pymF0MFv7PmiJVXmYndGvwnDNCfGQVIgm4nvkZSeHp6wfMqi1SpYQLm18tZ81KjQBBPEwfpXpt/WCO+qO+BaQglQpFuengPRW3BMxdFQq1SDHfXRBZ4kQuKpSghs4+A813JS0TPcwoI7LIkQBHfXmrkjOEr3YREfxT3uIGvsb4iEVV2mazgTbxSMZ6zhePpavtAbEg3QanTaJHcZJqIN7yJtyS0Km+JjNUe6EE6zG4kA9Fz1Nn3h+sAjLCV0B+PefpELb8CVUT2ao6A0tNs4tHNMXTidR0iVZrpUX0785PfioA4QTfX59lkH7vLLHvVZUdBOgv3igH3grNNz33/Vn5BRWNMfVvRB1PKTHRAgjDPVKHRPnJz6cEBrOyShoGK1QSdMjwWJbOtuCqCx0OjJVJUGCXT8KzwcYlAQ5clWvIg4gyDfLgcF0s424KdSmXOF/17x4oJ0qkw2LCJtMx6K1evu5SYJ8EtCmWkibdwQtWpEuDgJjEIFG0mcLTHHBZ1Vrh+w48uusJXWnhLr6nADVI6kIi8gSYwHEzyQdLHNbDRwHitUB7J+lHZbmTjc6G+EcIXS9wsDF8kEabO+k+6tuzimhJVdAUUZAQc0HPvMKTGjEokwRCop+Md85RTBZQLVNkoG7jfU5/SDDJg8xxGqmdtEwATdVFwZg5eqD2dyReIyWqE2iMc9FjUj/ACtxyUUlOcLY3Ggw9k5pjsotcMiEHtQEGMErie+8UQtPqPVBo76pmpGgpwEGc4ASVx1du/6R1K3/AKg42AwGPNRo7MXcBqqilLaXE/473S66zTDr39PEJf8AH9WhPTfNkEi48baZH/lZEs3ueR1GXuqlmhIlIHAYA/XNRWo1cjimrNsldTDrg+CY1hJE3F0RIwALzfgg65t7Kxpg/aIAHcopgsomvyz/APG+AWVRnYsPEt8v4EpYzeDs584lNVNwOIJ+UopSRaBbyn+IKtdvcCCR4LOpzj6eaLGRy7uUyipugiI6QiGQAMYTrIEaxL+ZoMStUpl3+0Dh8oMosb8lVD1nQEgdGuKqRKTci5PFRRed24Eybpmum6MqYYQbYacUBqMm4xWpshcDK7muuTxBQ2iqS604wIVSvScJEKO5qDwiY7lXbhdBxyUUKbbXxOPNctZtyBeSJ+JXSWkXCmxlxe0k4Yk6lVHKWFpvjbDMz/V3OMi3rB5cE5CWo+BKCG8YIteb+vOJWVQHY2nSPeUUCON7cPW6AccTP1YpSSJHGB4IvaTmO8ccEFqzJBC5tjoOBk24Kr3FrSRdT2Ss5xM4IL1Jy78lLega9fldBCXcB7HYUC0mwptF8YOJMdIviF0AKTqgOU5/SKDG2MQJsIwtaUu5jjP1ryVsR8qf4YzPigAIxiACTPTVHaK262URS1nxTPjA38FR5r6jnXOXALMeW3GecDwXXtVP9P1GBwCOx0v1O8MTgUQdm2jeBnEecqxBx8kPxgCw4ol4jFRQL5sMfRF7RHIIMbbj5rAHPvmgFatuiSpFxIBIg5DsG6dtGTvO6DT+p6rZ+4VRHePHz+AFlQUuDfCVkDVRhwMpPwk454j35qVWoQW8b8jEWXRTNyNI9EBaIzStqNy9DHjghtGQyJVQIwUUDw+VwulpgTvXJi86W05rpJjejISPA/CWi2HD/wCM9Sb+iqJ0K5kAm0544aqzqeP6zpw+LpzSEz3p6JwECU2R/PVR2moMLgjUWOoXSufaWACQACTExe6BaVRxIjAC/POfhdDgcQuWkz9mcWz4BdiBWBJTacd44nlj4qqBYoqbK02gz5eKYOE8eNrIxccvSPlCP25D1+kHPUpPE7psb5TdQh7L3HWfFei7BRpmSQVUbZK28L4hUr4eHquKu3cd+pxXS4RxhuaBjV9fcj2WSvNpgYf8gsg//9k=");
    background-repeat: repeat;
    background-position: center;
    padding: 30px;
    overflow:scroll;
}

.chat_message{
    position: relative;
    font-size: 16px;
    padding: 10px;
    background-color: #ffffff;
    border-radius: 10px;
    width: fit-content;
    margin-bottom: 30px;
}

.chat_name{
    position: absolute;
    top: -15px;
    font-weight: 800;
    font-size: xx-small;
}

.chat_timestamp{
    margin-left: 10px;
    font-size: xx-small;
}

.chat_reciever {
    margin-left: auto;
    background-color: #dcf8c6;
}

.chat_footer{
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 62px;
    border-top: 1px solid lightgray;
}

.chat_footer > form {
        flex:1;
        display: flex;
    }

.chat_footer > form > input {
    flex: 1;
    border-radius: 30px;
    padding: 10px;
    border:none;
}

.chat_footer > form > button {
    display: none;
}

.chat_footer > .MuiSvgIcon-root {
    padding: 10px;
    color: gray;
}
`
