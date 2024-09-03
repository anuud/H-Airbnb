import React, { memo, useEffect, useRef } from "react";
import { IndicatorWrapper } from "./style";

const Indicator = memo((props) => {
  const { selectIndex = 0 } = props;
  const contentRef = useRef();
  useEffect(() => {
    // 获取selectIndex的对应item
    const selectItemEl = contentRef.current.children[selectIndex];
    const itemEloffsetleft = selectItemEl.offsetLeft;
    const itemEloffsetwidth = selectItemEl.clientWidth;
    //content的宽度
    const contentWidth = contentRef.current.clientWidth;
    const contentScroll = contentRef.current.scrollwidth;
    //获取selectIndex要滚动的距离
    let disTance =
      itemEloffsetleft + itemEloffsetwidth * 0.5 - contentWidth * 0.5;
    if (disTance < 0) disTance = 0; //左边情况特殊处理
    const totalDistance = contentScroll - contentWidth;
    if (disTance > totalDistance) disTance = totalDistance; //右边情况特殊处理
    contentRef.current.style.transform = `translate(${-disTance}px)`;
  }, [selectIndex]);
  return (
    <IndicatorWrapper>
      <div className="i-content" ref={contentRef}>
        {props.children}
      </div>
    </IndicatorWrapper>
  );
});

export default Indicator;
