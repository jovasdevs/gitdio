import React from 'react'
import { ItemContainer } from './styles'

 function ItemRepo({repo,handleRemoveRepo }) {

  const handleRevome = () => {
    handleRemoveRepo(repo.id)
  }
  return (
    <ItemContainer onClick={handleRevome}>
        <h3>{repo.name}</h3>
        <p>{repo.full_name}</p>
        <a href={repo.html_url} target="_blank" >Ver repositório</a><br />
        <a href='#' rel="noreferrer" className='remover'>Remove</a>
        <hr />
    </ItemContainer>
  )
}
export default ItemRepo