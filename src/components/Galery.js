import React from "react";
import a from "../galery/a.jpeg";
import b from "../galery/b.jpeg";
import f from "../galery/f.jpeg";
import c from "../galery/c.jpeg";
import d from "../galery/d.jpeg";
import e from "../galery/e.jpeg";
import g from "../galery/g.jpeg";
import h from "../galery/h.jpeg";
import i from "../galery/i.jpeg";
import j from "../galery/j.jpeg";
import k from "../galery/k.jpeg";
import l from "../galery/l.jpeg";
import m from "../galery/m.jpeg";
import n from "../galery/n.jpeg";
import o from "../galery/o.jpeg";
import p from "../galery/p.jpeg";
import r from "../galery/r.jpeg";
import s from "../galery/s.jpeg";
import t from "../galery/t.jpeg";


const Galery = () => {
  return (
    <div className="prproject">
      <h1>Galeri</h1>
      <div className="photos">
        <div class="grid-wrap">
          <ul>
            <li class="big">
              {" "}
              <img src={a} alt="" />{" "}
            </li>
            <li class="vertical">
              {" "}
              <img src={b} alt="" />{" "}
            </li>
            <li class="vertical">
              {" "}
              <img src={c} alt="" />{" "}
            </li>
            <li class="vertical">
              {" "}
              <img src={d} alt="" />{" "}
            </li>
            <li class="big">
              {" "}
              <img src={e} alt="" />{" "}
            </li>
            <li class="vertical">
              {" "}
              <img src={f} alt="" />{" "}
            </li>
            <li class="big">
              {" "}
              <img src={g} alt="" />{" "}
            </li>
            <li class="vertical">
              {" "}
              <img src={h} alt="" />{" "}
            </li>
            <li class="big 9">
              {" "}
              <img src={i} alt="" />{" "}
            </li>
            <li class="horizontal">
              {" "}
              <img src={j} alt="" />{" "}
            </li>
            <li class="small">
              {" "}
              <img src={k} alt="" />{" "}
            </li>
            <li class="small">
              {" "}
              <img src={l} alt="" />{" "}
            </li>
            <li class="vertical">
              {" "}
              <img src={m} alt="" />{" "}
            </li>
            <li class="big">
              {" "}
              <img src={n} alt="" />{" "}
            </li>
            <li class="vertical">
              {" "}
              <img src={o} alt="" />{" "}
            </li>
            <li class="big">
              {" "}
              <img src={p} alt="" />{" "}
            </li>
            <li class="horizontal">
              {" "}
              <img src={r} alt="" />{" "}
            </li>
            <li class="horizontal">
              {" "}
              <img src={s} alt="" />{" "}
            </li>
            <li class="horizontal">
              {" "}
              <img src={t} alt="" />{" "}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Galery;
