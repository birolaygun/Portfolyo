import React from "react";
import { Link } from "react-router-dom";
import brl from "../Brl.jpg";
import cv from "../Birol_Aygun_CV.pdf";
import { saveAs } from "file-saver";

const CvEn = () => {
  const saveFile = () => {
    saveAs({ cv });
  };

  return (
    <section className="cv">
      <header>
        {" "}
        <h1>CV</h1>{" "}
      </header>

      <a
        onClick={() => {
          if (window.confirm("CV's language is Turkish. Do you want to download it ?")) {
            saveAs(
              "https://birolaygun.netlify.app/static/media/Birol_Aygün_CV.89549446.pdf"
            );
          }
        }}
      >
        <button className="cvdwn btn"> Download CV</button>
      </a>

      <div className="img">
        <img src={brl} alt="photo1" />
      </div>
      <div className="aboutMeCv">
        <div className="personel">
          <div className="head  ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              className="bi bi-person-fill"
              viewBox="0 0 16 16"
            >
              <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
            </svg>
            <h2>Personal</h2>
          </div>
          <div>
            <div>
              <label>Birth Day:</label>
              <p>22 Nov 1987</p>
            </div>
            <div>
              <label>Educational Status:</label>
              <p>Undergraduate Education</p>
            </div>
            <div>
              <label>Military service:</label>
              <p>Exempt</p>
            </div>
            <div>
              <label>Working Status:</label>
              <p>Not Working</p>
            </div>
          </div>
        </div>

        <hr />

        <div className="educate">
          <div className="head  ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              className="bi bi-book"
              viewBox="0 0 16 16"
            >
              <path d="M1 2.828c.885-.37 2.154-.769 3.388-.893 1.33-.134 2.458.063 3.112.752v9.746c-.935-.53-2.12-.603-3.213-.493-1.18.12-2.37.461-3.287.811V2.828zm7.5-.141c.654-.689 1.782-.886 3.112-.752 1.234.124 2.503.523 3.388.893v9.923c-.918-.35-2.107-.692-3.287-.81-1.094-.111-2.278-.039-3.213.492V2.687zM8 1.783C7.015.936 5.587.81 4.287.94c-1.514.153-3.042.672-3.994 1.105A.5.5 0 0 0 0 2.5v11a.5.5 0 0 0 .707.455c.882-.4 2.303-.881 3.68-1.02 1.409-.142 2.59.087 3.223.877a.5.5 0 0 0 .78 0c.633-.79 1.814-1.019 3.222-.877 1.378.139 2.8.62 3.681 1.02A.5.5 0 0 0 16 13.5v-11a.5.5 0 0 0-.293-.455c-.952-.433-2.48-.952-3.994-1.105C10.413.809 8.985.936 8 1.783z" />
            </svg>
            <h2>Education</h2>
          </div>
          <div>
            <ul className="educateUl">
              <li>
                Anadolu Üniversity <small>(2021-)</small>
              </li>
              <p>
                Web Design and Coding <small>(Student)</small>{" "}
              </p>
              <li>
                Police Academy <small>(2008-2012)</small>
              </li>
              <p>
                Security Units <small>(Graduate)</small>{" "}
              </p>
              <li>
                METU <small>(2007-2008)</small>
              </li>
              <p>
                Elementary Sciense Education <small>(Leave)</small>{" "}
              </p>
            </ul>
          </div>
        </div>

        <hr />

        <div className="jobs">
          <div className="head  ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              className="bi bi-briefcase-fill"
              viewBox="0 0 16 16"
            >
              <path d="M6.5 1A1.5 1.5 0 0 0 5 2.5V3H1.5A1.5 1.5 0 0 0 0 4.5v1.384l7.614 2.03a1.5 1.5 0 0 0 .772 0L16 5.884V4.5A1.5 1.5 0 0 0 14.5 3H11v-.5A1.5 1.5 0 0 0 9.5 1h-3zm0 1h3a.5.5 0 0 1 .5.5V3H6v-.5a.5.5 0 0 1 .5-.5z" />
              <path d="M0 12.5A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5V6.85L8.129 8.947a.5.5 0 0 1-.258 0L0 6.85v5.65z" />
            </svg>
            <h2>Work experiences</h2>
          </div>
          <div className="job">
            <div>
              <h3>
                Mercedes-Benz Heska Dealer <span>(2021-2021)</span>
              </h3>
              <h4>- Front End Developer</h4>
              <p>
                I worked as a Freelancer for a project planned to be developed
                for use between dealers.
              </p>
            </div>
            <hr className="jobHr" />

            <div>
              <h3>
                Mete Panel <span>(2020-2021)</span>
              </h3>
              <h4>- Warehouse – Stock Manager</h4>
              <p>
                The order of the products in the warehouse, counting the
                incoming and outgoing products, receiving and sending the
                products, arranging the waybills, ensuring that the stock
                information is correct.
              </p>
            </div>
            <hr className="jobHr" />
            <div>
              <h3>
                TOGO Shoes <span>(2019-2020)</span>
              </h3>
              <h4>- Warehouse – Stock Manager</h4>
              <p>
                The order of the products in the warehouse, counting the
                incoming and outgoing products, receiving and sending the
                products, arranging the waybills, ensuring that the stock
                information is correct.
              </p>
            </div>
            <hr className="jobHr" />

            <div>
              <h3>
                Turkish National Police Organization <span>(2012-2016)</span>
              </h3>
              <h4>- Assistant Commissioner</h4>
              <p>
                Judicial, Administrative and Preventive Policing, Bureau Chief,
                Group Chief.
              </p>
            </div>
          </div>
        </div>

        <hr />

        <div className="lisance">
          <div className="head">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              className="bi bi-file-earmark-check-fill"
              viewBox="0 0 16 16"
            >
              <path d="M9.293 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4.707A1 1 0 0 0 13.707 4L10 .293A1 1 0 0 0 9.293 0zM9.5 3.5v-2l3 3h-2a1 1 0 0 1-1-1zm1.354 4.354-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 9.793l2.646-2.647a.5.5 0 0 1 .708.708z" />
            </svg>
            <h2>Certificates</h2>
          </div>
          <div>
            <h3 className="headerTwo"> HTML5 and CSS3 From Zero </h3>
            <h4>Emre Altunbilek</h4>
          </div>
          <div>
            <h3 className="headerTwo">Modern Web Development Course </h3>
            <h4>Mustafa Murat Coşkun</h4>
          </div>
        </div>

        <hr />

        <div className="comp">
          <div className="head  ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              className="bi bi-laptop"
              viewBox="0 0 16 16"
            >
              <path d="M13.5 3a.5.5 0 0 1 .5.5V11H2V3.5a.5.5 0 0 1 .5-.5h11zm-11-1A1.5 1.5 0 0 0 1 3.5V12h14V3.5A1.5 1.5 0 0 0 13.5 2h-11zM0 12.5h16a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 12.5z" />
            </svg>
            <h2>Computer </h2>
          </div>
          <div className="computer">
            <div>
              <label>HTML 5</label>{" "}
              <div>
                <input type="range" value="100" disabled></input>
              </div>{" "}
            </div>

            <div>
              <label>CSS 3</label>{" "}
              <div>
                <input type="range" value="90" disabled></input>
              </div>{" "}
            </div>

            <div>
              <label>SCSS</label>{" "}
              <div>
                <input type="range" value="90" disabled></input>
              </div>{" "}
            </div>

            <div>
              <label>BootStrap</label>{" "}
              <div>
                <input type="range" value="80" disabled></input>
              </div>{" "}
            </div>

            <div>
              <label>JavaScript</label>{" "}
              <div>
                <input type="range" value="90" disabled></input>
              </div>{" "}
            </div>
            <div>
              <label>TypeScript</label>{" "}
              <div>
                <input type="range" value="80" disabled></input>
              </div>{" "}
            </div>

            <div>
              <label>React</label>{" "}
              <div>
                <input type="range" value="90" disabled></input>
              </div>{" "}
            </div>

            <div>
              <label>Redux</label>{" "}
              <div>
                <input type="range" value="100" disabled></input>
              </div>{" "}
            </div>
            <div>
              <label>Adobe Photoshop</label>{" "}
              <div>
                <input type="range" value="70" disabled></input>
              </div>{" "}
            </div>
            <div>
              <label>Microsoft Office</label>{" "}
              <div>
                <input type="range" value="70" disabled></input>
              </div>{" "}
            </div>
          </div>
        </div>

        <hr />

        <div className="lang">
          <div className="head  ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              class="bi bi-globe2"
              viewBox="0 0 16 16"
            >
              <path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm7.5-6.923c-.67.204-1.335.82-1.887 1.855-.143.268-.276.56-.395.872.705.157 1.472.257 2.282.287V1.077zM4.249 3.539c.142-.384.304-.744.481-1.078a6.7 6.7 0 0 1 .597-.933A7.01 7.01 0 0 0 3.051 3.05c.362.184.763.349 1.198.49zM3.509 7.5c.036-1.07.188-2.087.436-3.008a9.124 9.124 0 0 1-1.565-.667A6.964 6.964 0 0 0 1.018 7.5h2.49zm1.4-2.741a12.344 12.344 0 0 0-.4 2.741H7.5V5.091c-.91-.03-1.783-.145-2.591-.332zM8.5 5.09V7.5h2.99a12.342 12.342 0 0 0-.399-2.741c-.808.187-1.681.301-2.591.332zM4.51 8.5c.035.987.176 1.914.399 2.741A13.612 13.612 0 0 1 7.5 10.91V8.5H4.51zm3.99 0v2.409c.91.03 1.783.145 2.591.332.223-.827.364-1.754.4-2.741H8.5zm-3.282 3.696c.12.312.252.604.395.872.552 1.035 1.218 1.65 1.887 1.855V11.91c-.81.03-1.577.13-2.282.287zm.11 2.276a6.696 6.696 0 0 1-.598-.933 8.853 8.853 0 0 1-.481-1.079 8.38 8.38 0 0 0-1.198.49 7.01 7.01 0 0 0 2.276 1.522zm-1.383-2.964A13.36 13.36 0 0 1 3.508 8.5h-2.49a6.963 6.963 0 0 0 1.362 3.675c.47-.258.995-.482 1.565-.667zm6.728 2.964a7.009 7.009 0 0 0 2.275-1.521 8.376 8.376 0 0 0-1.197-.49 8.853 8.853 0 0 1-.481 1.078 6.688 6.688 0 0 1-.597.933zM8.5 11.909v3.014c.67-.204 1.335-.82 1.887-1.855.143-.268.276-.56.395-.872A12.63 12.63 0 0 0 8.5 11.91zm3.555-.401c.57.185 1.095.409 1.565.667A6.963 6.963 0 0 0 14.982 8.5h-2.49a13.36 13.36 0 0 1-.437 3.008zM14.982 7.5a6.963 6.963 0 0 0-1.362-3.675c-.47.258-.995.482-1.565.667.248.92.4 1.938.437 3.008h2.49zM11.27 2.461c.177.334.339.694.482 1.078a8.368 8.368 0 0 0 1.196-.49 7.01 7.01 0 0 0-2.275-1.52c.218.283.418.597.597.932zm-.488 1.343a7.765 7.765 0 0 0-.395-.872C9.835 1.897 9.17 1.282 8.5 1.077V4.09c.81-.03 1.577-.13 2.282-.287z" />
            </svg>{" "}
            <h2>Languages </h2>
          </div>
          <h3>English</h3>
          <p>
            <b>İntermediate</b> level. It is at a good level to benefit from
            English resources.
          </p>
        </div>

        <hr />

        <div className="paragraph">
          <div className="head  ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              className="bi bi-clipboard-plus"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M8 7a.5.5 0 0 1 .5.5V9H10a.5.5 0 0 1 0 1H8.5v1.5a.5.5 0 0 1-1 0V10H6a.5.5 0 0 1 0-1h1.5V7.5A.5.5 0 0 1 8 7z"
              />
              <path d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1v-1z" />
              <path d="M9.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h3zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3z" />
            </svg>
            <h2>Additional information </h2>
          </div>
          <p>
            I have been dealing with Web Design for about 1 year. I developed
            myself quickly with Udemy and open sources on the internet. Thanks
            to my openness to learning and innovation, I learned HTML5, CSS3,
            JavaScript, React and Redux languages in a short time. Along with
            these, I also learned BootStrap.
          </p>
          <p>
            Being open to innovations in the software world and keeping up with
            the times is a must. I am ready for a working process that is aware
            of this and is open to continuous learning.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CvEn;
