import React, { memo, useState } from 'react'
import { FilterWrapper } from './style'
import filterData from '@/assets/data/filter_data.json'
import classNames from 'classnames'
const EntireFilter = memo(() => {
  const [selectItems, setselectItems] = useState([])
  function itemClickHandle(item) {
    const newItems = [...selectItems]
    if (newItems.includes(item)) {
      const itemIndex = newItems.findIndex(filterItem => filterItem === item)
      newItems.splice(itemIndex, 1)
    } else {
      newItems.push(item)
    }
    setselectItems(newItems)
  }
  return (
    <FilterWrapper>
      <div className="filter">
        {
          filterData.map((item, index) => {
            return (
              <div className={classNames('item', { active: selectItems.includes(item) })} key={item} onClick={e => itemClickHandle(item)}>{item}</div>
            )
          })
        }
      </div>
    </FilterWrapper>
  )
})

export default EntireFilter