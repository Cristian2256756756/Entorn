import './aboutme.css';
import MyButton from './MyButton'; 

function AboutmeCristian(){
    return(
        <>
        <h1>Welcome  to my Profile</h1>
    <MyButton/>

    <h1>Est</h1>
    <img
      className="Foto de perfil"
      src={user.imageUrl} 
      alt={'Photo of ' + user.name} 
      style={{
        width: user.imageSize,
        height: user.imageSize
      }}
    />
    <h2>Sobre mi</h2>
    <p>Hello, I'm Cristian Valentin Anghel, a student of multiplatform application development.<br></br>
    My dedication and effort in learning across various environments have allowed me to acquire <br></br>a
    broad set of skills and knowledge.Currently, I'm focused on the professional profile of video games and entertainment<br></br> 
    but in the future, I'm interested in mobile application development and web page design.
    </p>
    </>
    )
}

const user = {
    name: 'Cristian Valentin Anghel',
    imageUrl: 'https://media.licdn.com/dms/image/D4D03AQEECUokAv7hDw/profile-displayphoto-shrink_800_800/0/1684148915878?e=2147483647&v=beta&t=K50o9kE6EBhGYM3I5ey3_To5ybH7Pu7jTObQWS7wO8Y',
    imageSize: 600,
   
   };
  
export default AboutmeCristian