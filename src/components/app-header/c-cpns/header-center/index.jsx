import React, { memo, useState } from "react";
import { CenterWrapper } from "./style";
import IconSearchBar from "@/assets/svg/icon-search-bar";
import SearchTabs from "./search-tabs";
import SearchSections from "./search-sections";
import SearchTitles from "@/assets/data/search_titles";
const HeaderCenter = memo((props) => {
  const { isSearch, searchBarClick } = props;
  const [tabIndex, setTabIndex] = useState(0);
  const titles = SearchTitles.map((item) => item.title);

  function ssearchBarClickHandle() {
    if (searchBarClick) searchBarClick();
  }
  return (
    <CenterWrapper>
      {!isSearch ? (
        <div className="search-bar" onClick={ssearchBarClickHandle}>
          <div className="text">搜索房源和体验</div>
          <div className="icon">
            <IconSearchBar />
          </div>
        </div>
      ) : (
        <div className="search-detail">
          <SearchTabs titles={titles} tabClick={setTabIndex} />
          <div className="infos">
            <SearchSections searchInfos={SearchTitles[tabIndex].searchInfos} />
          </div>
        </div>
      )}
    </CenterWrapper>
  );
});

export default HeaderCenter;
