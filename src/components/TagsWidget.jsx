import React, { useEffect, useState } from "react";
import { Icon } from "semantic-ui-react";
import AnimationLayout from "./AnimationLayout";
import Spacing from "./Spacing";
import { ServerHost } from "./Vars";
export default function TagsWidget() {
  const [data, setData] = useState([]);
  const [show, setShow] = useState(false);
  useEffect(() => {
    const axois = require("axios").default;
    axois
      .get(ServerHost + "/v1/api/tag/statistics/count")
      .then((res) => {
        setData(res.data);
      })
      .catch((error) => {
        console.error(error);
      });
    setShow(true);
  }, []);
  return (
    <>
      <AnimationLayout isShow={show}>
        <div className="common-label-container">
          <span style={{ fontWeight: "900" }}>
            <Icon name="tag" style={{ color: "#52C75F" }} />
            Tags
          </span>
          <Spacing />
          <div>
            {data &&
              data.length > 0 &&
              data.map((e, index) => (
                <a
                  key={index}
                  href={"/tag/" + e.value}
                  className="common-label"
                >
                  {e.value}
                  &nbsp;
                  {e.count}
                </a>
              ))}
          </div>
        </div>
      </AnimationLayout>
    </>
  );
}