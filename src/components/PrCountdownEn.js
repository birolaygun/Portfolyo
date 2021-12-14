import React from "react";
import todo from "../galery/todo.gif";

const PrCountdownEn = () => {
  
  return (
    <div>
      <div className="prproject">
        <h1>Countdown To Do</h1>
        <div className="img imgPr">
          <img src={todo} alt="" />
        </div>
        <div className="links">
          <h3>
            Site's Link:{" "}
            <a href="https://countdown-todo.netlify.app/">
              countdown-todo.netlify.app
            </a>
          </h3>
          <h3>
            Github Link:{" "}
            <a href="https://github.com/birolaygun/ToDoListWithCountdown">
              github.com/birolaygun/ToDoListWithCountdown
            </a>
          </h3>
        </div>

        <p>
          It is one of the first projects I developed with React. Most people
          learning JavaScript have done the <b>To Do</b> project. I wanted to do
          this project differently and put a time limit on the to-do list.
        </p>
        <p>
          In this project, which I use in <b>Context</b>, when adding a task to
          the to-do list, you also need to enter what needs to be done. The
          countdown begins when you successfully add the task. If you complete
          the task before the time runs out, the task is added to the{" "}
          <b>Completed Tasks</b> menu. If you cancel before the deadline, it is
          added to the <b>Cancelled</b> menu. If the time runs out, it is added
          to the <b>Escaped</b> menu. By browsing these menus, you can see the
          tasks you have done, missed and canceled.
        </p>
        <div className="ifra">
          <iframe
            src="https://www.youtube.com/embed/9bzpiLqYDaM"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>{" "}
        </div>
      </div>
    </div>
  );
};

export default PrCountdownEn;
