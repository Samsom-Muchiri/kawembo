import React from "react";
import "../style sheets/landingPage.css";
import introIllu from "../assets/page-intro-illu.jpg";
import workIllu from "../assets/work-illu.png";
import coreValue from "../assets/corevalue-illu.jpg";
import mission from "../assets/mission-illu.jpg";
import values from "../assets/values-illu.jpg";
import whatwedo from "../assets/whatwedo-illu.jpg";
import mpesaLogo from "../assets/lipa-na-mpesa-logo.png";

function LandingPage() {
  const opvContent = [
    {
      heading: "Our values",
      image: values,
      icon: "travel",
      content:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat,error! Optio minus aspernatur laudantium, tempore harum atque sunt   dolores praesentium aut eum obcaecati illum ullam ad ut officiis mollitia. Possimus!",
    },
    {
      heading: "Our mission",
      image: mission,
      icon: "local_activity",
      content:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat,error! Optio minus aspernatur laudantium, tempore harum atque sunt   dolores praesentium aut eum obcaecati illum ullam ad ut officiis mollitia. Possimus!",
    },
    {
      heading: "Our core values",
      image: coreValue,
      icon: "lightbulb",
      content:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat,error! Optio minus aspernatur laudantium, tempore harum atque sunt   dolores praesentium aut eum obcaecati illum ullam ad ut officiis mollitia. Possimus!",
    },
  ];
  const wwdContent = [
    { content: "NETWORKING OPPORTUNITIES", icon: "crowdsource" },
    {
      content: "MENTORSHIP PROGRAMS FOR STUDENTS AT THE SCHOOL",
      icon: "handshake",
    },
    { content: "CAREER SERVICES", icon: "donut_large" },
    { content: "VOLUNTEERING", icon: "diversity_1" },
    {
      content: "SOCIAL EVENTS AND COMMUNITY PARTICIPATION",
      icon: "partner_exchange",
    },
    { content: "GIVE BACK", icon: "volunteer_activism" },
  ];
  return (
    <div className="landing-page">
      <section className="page-intro">
        <div className="intro-txt">
          <h1>KAWEBO</h1>
          <h2>Kazithosha Welfare Community Based Organization</h2>
          <br />
          <h4>Welcome</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat,
            error! Optio minus aspernatur laudantium, tempore harum atque sunt
            dolores praesentium aut eum obcaecati illum ullam ad ut officiis
            mollitia. Possimus!
          </p>
          <br />
          <button className="action-btn">Join us</button>
        </div>
        <div className="intro-ilustration">
          <img src={introIllu} alt="" />
        </div>
      </section>
      <section className="work" id="work">
        <br />
        <h1>Our work</h1>
        <div className="flex-card-sa">
          <div className="work-illu">
            <img src={workIllu} alt="" />
          </div>
          <div className="work-desc">
            <h3>What do we do?</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Et
              veritatis iste dignissimos quia excepturi tenetur praesentium quis
              fugit quod doloribus explicabo repellendus, ea eum adipisci, ipsa
              fugiat nihil? Quam, in.
            </p>
          </div>
        </div>
      </section>
      <section className="who-are-we">
        <div>
          <h1>Who are we</h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias
            ratione repudiandae quos, temporibus quasi accusantium nemo minima
            dolores iste expedita repellat aspernatur error cumque odio, neque
            numquam magnam a voluptate?
          </p>
        </div>
        <div className="flex-card">
          {opvContent.map((opv, i) => {
            return (
              <div
                className="o-p-v-card"
                key={i + "o-p-v-card"}
                style={{ backgroundImage: `url(${opv.image})`, color: "white" }}
              >
                <div className="o-p-c-cnt">
                  <div className="o-p-v-icon">
                    <span className="material-symbols-outlined">
                      {opv.icon}
                    </span>
                  </div>
                  <h2>{opv.heading}</h2>
                  <p>{opv.content}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>
      <section className="what-we-do">
        <h1>What we do</h1>
        <div className="flex-card-sa">
          <ul>
            {wwdContent.map((wwd, i) => {
              return (
                <li key={i + "wwd-card"}>
                  <div className="wwd-icon">
                    <span className="material-symbols-outlined">
                      {wwd.icon}
                    </span>
                  </div>
                  <span>{wwd.content}</span>
                </li>
              );
            })}
          </ul>
          <div className="wwd-image">
            <img src={whatwedo} alt="" />
          </div>
        </div>
      </section>
      <section className="make-difference">
        <div className="md-content">
          <h1>Together we can make a difference</h1>
          <button className="action-btn">Join us</button>
          <br />
          <span>or</span>
          <form
            className="donate-form"
            onSubmit={(e) => {
              e.preventDefault();
            }}
          >
            <br />
            <h2>Suport us by making a donation</h2>
            <br />
            <img src={mpesaLogo} alt="mpesa" />
            <br />
            <div className="donate-input-cnt">
              <div>
                <span>Enter safaricom number</span>
              </div>
              <input type="number" placeholder="Enter number" />
            </div>
            <div className="donate-input-cnt">
              <span>Amount Ksh</span>
              <input type="number" placeholder="Enter amount" />
            </div>

            <button>Donate</button>
          </form>
        </div>
      </section>
    </div>
  );
}

export default LandingPage;
