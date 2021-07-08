import React from 'react'
import { withRouter } from 'react-router-dom'
import MultiLevelBreadcrumb from '../../components/MultiLevelBreadcrumb'

function ProductBaby(props) {
  console.log(props)

  const searchParams = new URLSearchParams(props.location.search)

  const id = searchParams.get('id')
  const type = searchParams.get('type')

  return (
    <>
      <h1>ProductBaby</h1>
      <MultiLevelBreadcrumb />
      <h3>id: {id}</h3>
      <h3>type: {type}</h3>
    </>
  )
}

export default withRouter(ProductBaby)
