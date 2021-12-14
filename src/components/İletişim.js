import React from "react";

const İletişim = () => {
  
  return (
    <div>
      <div className="prproject">
        <h1>İletişim</h1>

        <h2>Birol AYGÜN</h2>

        <hr className="commHr" />

        <div className="address">
          <h2>Adres:</h2>
          <p>
            Alsancak mh. 2154sk. 2B/2 <br />
            Etimesgut/ANKARA
          </p>
          <br />
          <div className="ifra">
            <iframe
              title="map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1529.6940847897774!2d32.65337174417501!3d39.93270620787377!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14d339c10f57bc19%3A0x5655ee009ce94c8e!2sAlsancak%2C%202154.%20Sk.%2C%2006790%20Etimesgut%2FAnkara!5e0!3m2!1str!2str!4v1635602129230!5m2!1str!2str"
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>

        <div className="tel">
          <a href="tel:+905426954026">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-telephone-fill"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"
              />
            </svg>
            <p>0552 657 08 18</p>
          </a>
          <br />
          <a href="mailto:birolaygun.bilisim@gmail.com">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-envelope-fill"
              viewBox="0 0 16 16"
            >
              <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555zM0 4.697v7.104l5.803-3.558L0 4.697zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757zm3.436-.586L16 11.801V4.697l-5.803 3.546z" />
            </svg>
            <p>birolaygun.bilisim@gmail.com</p>
          </a>
        </div>
      </div>
    </div>
  );
};

export default İletişim;
