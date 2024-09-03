import React, { memo, useEffect, useRef, useState } from 'react'
import { ViewWrapper } from './style'
import IconArrowLeft from '@/assets/svg/icon-arrow-left'
import IconArrowRight from '@/assets/svg/icon-arrow-right'

const ScrollView = memo((props) => {
  // 定义内部的状态
  const [showLeft, setshowLeft] = useState(false)
  const [showRight, setshowRight] = useState(false)
  const [posIndex, setposIndex] = useState(0)
  const totalDistanceRef = useRef()
  // 组件渲染完毕，判断是否显示右侧按钮
  const scrollContentRef = useRef()
  useEffect(() => {
    const scrollWidth = scrollContentRef.current.scrollWidth//一共可以滚动的宽度
    const clinetWidth = scrollContentRef.current.clientWidth//本身占据的宽度
    const totalDistance = scrollWidth - clinetWidth
    totalDistanceRef.current = totalDistance
    setshowRight(totalDistance > 0)
  }, [props.children])
  // 事件处理
  function controlClickHandle(isRight) {
    const newIndex = isRight ? posIndex + 1 : posIndex - 1
    const newEl = scrollContentRef.current.children[newIndex]
    // console.log(newEl.offsetLeft);
    const newElOffsetLeft = newEl.offsetLeft
    // console.log(newElOffsetLeft);
    scrollContentRef.current.style.transform = `translate(-${newElOffsetLeft}px)`
    setposIndex(newIndex)
    // 是否继续显示右侧按钮
    setshowRight(totalDistanceRef.current > newElOffsetLeft)
    setshowLeft(newElOffsetLeft > 0)
  }
  return (
    <ViewWrapper>
      {showLeft && (
        <div className='control left' onClick={e => controlClickHandle(false)}>
          <IconArrowLeft />
        </div>
      )}
      {showRight && (
        <div className='control right' onClick={e => controlClickHandle(true)}>
          <IconArrowRight />
        </div>
      )}
      <div className='scroll'>
        <div className='scroll-content' ref={scrollContentRef}>
          {props.children}
        </div>
      </div>
    </ViewWrapper>
  )
})

export default ScrollView