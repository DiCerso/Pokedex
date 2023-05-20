import React, { useContext } from 'react'
import ProjectContext from '../context/projectProvider'

const useProjects = () => {
  return useContext(ProjectContext)
}

export default useProjects;

