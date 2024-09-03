import React, { memo, useRef, useState } from "react";
import { Carousel } from "antd";
import { ItemWrapper } from "./style";
import { Rate } from "antd";
import IconArrowLeft from "@/assets/svg/icon-arrow-left";
import IconArrowRight from "@/assets/svg/icon-arrow-right";
import Indicator from "@/base-ui/indicator";
import classNames from "classnames";
const RoomItem = memo((props) => {
  const { itemData, itemWidth = "25%", itemClick } = props;
  const swiperRef = useRef();
  const [selectIndex, setselectIndex] = useState(0);

  function controlClockHandle(isRight = true, event) {
    isRight ? swiperRef.current.next() : swiperRef.current.prev();
    let newIndex = isRight ? selectIndex + 1 : selectIndex - 1;
    if (newIndex < 0) newIndex = itemData.picture_urls.length - 1;
    if (newIndex > itemData.picture_urls.length - 1) newIndex = 0;
    setselectIndex(newIndex);
    event.stopPropagation();
  }

  function itemClickHandle() {
    if (itemClick) itemClick(itemData);
  }
  const pictureElement = (
    <div className="cover">
      <img src={itemData.picture_url} alt="" />
    </div>
  );
  const swiperElement = (
    <div className="swiper">
      <div className="control">
        <div className="btn left" onClick={(e) => controlClockHandle(false, e)}>
          <IconArrowLeft width="25" height="25" />
        </div>
        <div className="btn right" onClick={(e) => controlClockHandle(true, e)}>
          <IconArrowRight width="25" height="25" />
        </div>
      </div>
      <div className="indicator">
        <Indicator selectIndex={selectIndex}>
          {itemData?.picture_urls?.map((item, index) => {
            return (
              <span className="dot-item" key={item}>
                <span
                  className={classNames("dot", {
                    active: selectIndex === index,
                  })}
                ></span>
              </span>
            );
          })}
        </Indicator>
      </div>
      <Carousel dots={false} ref={swiperRef}>
        {itemData?.picture_urls?.map((item) => {
          return (
            <div className="cover" key={item}>
              <img src={item} alt="" />
            </div>
          );
        })}
      </Carousel>
    </div>
  );
  return (
    <ItemWrapper
      $verifycolor={itemData?.verify_info?.text_color}
      $itemwidth={itemWidth}
      onClick={itemClickHandle}
    >
      <div className="inner">
        {!itemData.picture_urls ? pictureElement : swiperElement}
        <div className="desc">{itemData.verify_info.messages.join("·")}</div>
        <div className="name">{itemData.name}</div>
        <div className="price">￥{itemData.price}/晚</div>
        <div className="bottom">
          <Rate
            allowHalf
            defaultValue={itemData.star_rating ?? 5}
            style={{ fontSize: "10px", color: "#00848A" }}
          />
          <span className="count">{itemData.reviews_count}</span>
          {itemData?.bottom_info && (
            <span className="extra">·{itemData?.bottom_info?.content}</span>
          )}
        </div>
      </div>
    </ItemWrapper>
  );
});
export default RoomItem;
