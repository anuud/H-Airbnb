import React, { memo, useCallback } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { RoomsWrapper } from './style'
import RoomItem from '@/components/room-item'
import { useNavigate } from 'react-router-dom'
import { changeDetailInfoAction } from '@/store/modules/detail'

const EntireRooms = memo(() => {
  //从redux中获取roomList数据
  const { roomList, totalCount, isLoading } = useSelector((state) => ({
    roomList: state.entire.roomList,
    totalCount: state.entire.totalCount,
    isLoading: state.entire.isLoading
  }), shallowEqual)
  const navigate = useNavigate()
  const dispath = useDispatch()
  const itemClickHandle = useCallback((item) => {
    dispath(changeDetailInfoAction(item))
    navigate('/detail')
  }, [navigate, dispath])
  return (
    <RoomsWrapper>
      <h2 className='title'>共{totalCount}多住所</h2>
      <div className='list'>
        {
          roomList.map(item => {
            return (
              <RoomItem
                itemData={item}
                itemWidth='20%'
                key={item._id}
                itemClick={itemClickHandle}
              />
            )
          })
        }
      </div>
      {isLoading && <div className='cover'></div>}
    </RoomsWrapper>
  )
})

export default EntireRooms