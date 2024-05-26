import "./aboutme.scss";
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
        className="profile-photo"
        src={user.imageUrl}
        alt={"Photo of " + user.name}
        style={{
          width: user.imageSize,
          height: user.imageSize,
        }}
      />

      <section
        className="about-me"
        itemscope
        itemtype="http://schema.org/VideoGameSeries"
      >
        <div className="about-me-content container">
          <h2>Cristian Valentin Anghel</h2>
          <p className="description">Brew description</p>

          <div className="about-me-group">
            <div className="about-me-info">
              <p className="information">
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
          <div className="button-container">
            <a
              href="https://es.linkedin.com/in/cristian-valentin-anghel-044560262"
              className="btn-linkedin"
            >
              LinkedIn
            </a>
            <MyButton />
          </div>
        </div>
      </section>
    </>
  );
}

export default AboutmeCristian;
