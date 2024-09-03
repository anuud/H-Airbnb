import React, { memo } from "react";
import { LongforWrapper } from "./style";
import SectionHeader from "@/components/section-header";
import LongfotItem from "@/components/longfot-item";
import ScrollView from "@/base-ui/sctoll-view";

const HomeLongfor = memo((props) => {
  const { infoData } = props;
  return (
    <LongforWrapper>
      <SectionHeader title={infoData.title} subtitle={infoData.subtitle} />
      <div className="longfor-list">
        <ScrollView>
          {infoData.list.map((item) => {
            return <LongfotItem itemData={item} key={item.city} />;
          })}
        </ScrollView>
      </div>
    </LongforWrapper>
  );
});

export default HomeLongfor;
