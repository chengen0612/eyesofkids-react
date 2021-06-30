import React from 'react'

function MyCheckbox(props) {
  const { value, checkedValueList, setCheckedValueList } = props

  const handleChange = (e) => {
    const value = e.target.value

    // 如果沒包含這個值，就要加入陣列
    if (!checkedValueList.includes(value))
      return setCheckedValueList([...checkedValueList, value])

    // 如果有包含這個值，就要移出陣列
    //1+2. 先拷貝 + 在拷貝陣列上修改
    const newLikeList = checkedValueList.filter((v, i) => {
      return v !== value
    })

    //3. 設定回陣列
    setCheckedValueList(newLikeList)
  }

  return (
    <>
      <input
        type="checkbox"
        value={value}
        checked={checkedValueList.includes(value)}
        onChange={handleChange}
      />
      <label>{value}</label>
    </>
  )
}

export default MyCheckbox
