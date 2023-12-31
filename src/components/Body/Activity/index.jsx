import React from "react";
import "./index.scss";
import GitHubCalendar from "react-github-calendar";
// import ReactTooltip from "react-tooltip";

const Activity = ({ theme }) => {
  return (
    <div className="activity">
      <section className="activity_graph">
        <a
          href="https://github.com/mrunknown10"
          target="_blank"
          className="mx-auto"
        >
          <img
            className=""
            alt="Patel Meet"
            src="https://github-readme-activity-graph.vercel.app/graph?username=mrunknown10&bg_color=000000&color=ae9f37&line=578e62&point=137000&area=true&hide_border=true"
          />
        </a>
      </section>
      <section className="contribution_info py-2">
        <a href="https://github.com/mrunknown10">
          <img src="https://streak-stats.demolab.com/?user=mrunknown10&theme=dark" />
        </a>
        <a href="https://github.com/mrunknown10">
          <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=mrunknown10&layout=compact&langs_count=5&theme=dark" />
        </a>
      </section>
      <section className="github_push mx-auto">
        <GitHubCalendar
          username="mrunknown10"
          colorScheme={theme === "dark" ? "light" : "dark"}
        >
          {/* <ReactTooltip html /> */}
        </GitHubCalendar>
      </section>
    </div>
  );
};

export default Activity;
