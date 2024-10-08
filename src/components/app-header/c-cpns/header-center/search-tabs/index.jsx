import React, { memo, useState } from "react";
import classNames from "classnames";
import { TabsWrapper } from "./style";

const SearchTabs = memo((props) => {
  const { titles, tabClick } = props;
  const [currentIndex, setcurrentIndex] = useState(0);
  function itemClickHandle(index) {
    setcurrentIndex(index);
    if (tabClick) tabClick(index);
  }
  return (
    <TabsWrapper>
      {titles.map((item, index) => {
        return (
          <div
            className={classNames("item", { active: currentIndex === index })}
            key={item}
            onClick={(e) => itemClickHandle(index)}
          >
            <span className="text">{item}</span>
            <span className="boottom"></span>
          </div>
        );
      })}
    </TabsWrapper>
  );
});

export default SearchTabs;
