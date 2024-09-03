import React, { memo, useEffect } from 'react'
import { EntireWrapper } from './style'
import { useDispatch } from 'react-redux'
import EntireFilter from './c-cpns/entire-filter'
import EntireRooms from './c-cpns/entire-rooms'
import EntirePagination from './c-cpns/entire-pagination'
import { fetchRoomListAction } from '@/store/modules/entire/actionCreators'
import { changeHeaderConfigAction } from '@/store/modules/main'

const Entire = memo(() => {
  const dispach = useDispatch()
  useEffect(() => {
    dispach(fetchRoomListAction())
    dispach(changeHeaderConfigAction({ isFixed: true }))
  }, [dispach])
  return (
    <EntireWrapper>
      <EntireFilter />
      <EntireRooms />
      <EntirePagination />
    </EntireWrapper>
  )
})

export default Entire