import React, { memo } from 'react'
import { Pagination } from 'antd'
import { PaginationWrapper } from './style'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { fetchRoomListAction } from '@/store/modules/entire/actionCreators'

const EntirePagination = memo(() => {
  const { totalCount, currentPage, roomList } = useSelector((state) => ({
    totalCount: state.entire.totalCount,
    currentPage: state.entire.currentPage,
    roomList: state.entire.roomList
  }), shallowEqual)
  // const totalPage = Math.ceil(totalCount / 20)
  const startCount = currentPage * 20 + 1
  const endCount = (currentPage + 1) * 20
  // 时间逻辑
  const dispatch = useDispatch()
  function pageChangeHandle(page, pageSize) {
    window.scrollTo(0, 0)
    // 更新最新的页码
    // dispatch(changeCurrentPageAction(page - 1))
    dispatch(fetchRoomListAction(page - 1))
  }
  return (
    <PaginationWrapper>
      {
        !!roomList.length && (
          <div className='info'>
            <Pagination defaultCurrent={1} total={totalCount} pageSize={20} onChange={pageChangeHandle} />
            <div className="desc">
              第{startCount}-{endCount}个房源，共超过{totalCount}个
            </div>
          </div>
        )
      }
    </PaginationWrapper>
  )
})

export default EntirePagination