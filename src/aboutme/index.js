import "./aboutme.css";
import MyButton from "./cv";

function AboutmeCristian() {
  const user = {
    name: "Cristian Valentin Anghel",
    imageUrl:
      "https://media.licdn.com/dms/image/D4D03AQEECUokAv7hDw/profile-displayphoto-shrink_800_800/0/1684148915878?e=2147483647&v=beta&t=K50o9kE6EBhGYM3I5ey3_To5ybH7Pu7jTObQWS7wO8Y",
    imageSize: 600,
  };

  return (
    <>
      <h1>Welcome to my Profile</h1>
      <img
        className="Foto de perfil"
        src={user.imageUrl}
        alt={"Photo of " + user.name}
        style={{
          width: user.imageSize,
          height: user.imageSize,
        }}
      />
      <MyButton />

      <section
        class="Sobremi"
        itemscope
        itemtype="http://schema.org/VideoGameSeries"
      >
        <div class="Sobremi-content container">
          <h2>Crstian Valentin Anghel</h2>
          <p class="txt-p">Breve descripcion</p>

          <div class="Sobremi-group">
            <div class="Sobremi-1">
              <p>
                Hello, I'm Cristian Valentin Anghel, a student of multiplatform
                application development.<br></br>
                My dedication and effort in learning across various environments
                have allowed me to acquire <br></br>a broad set of skills and
                knowledge. Currently, I'm focused on the professional profile of
                video games and entertainment<br></br>
                but in the future, I'm interested in mobile application
                development and web page design.
              </p>
            </div>
          </div>
          <a
            href="https://es.linkedin.com/in/cristian-valentin-anghel-044560262"
            class="btn-1"
          >
            Perfil de Linkedin
          </a>
        </div>
      </section>
    </>
  );
}

export default AboutmeCristian;
