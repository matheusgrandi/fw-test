import { Box } from '@mui/material'
import { Outlet } from 'react-router-dom'

type BaseTemplateProps = {
  hasHeader?: boolean
}

const BaseTemplate = ({ hasHeader }: BaseTemplateProps) => {
  return (
    <Box className='flex flex-col h-full bg-gray-50 p-6 sm:px-8 h-screen w-screen'>
      {hasHeader && (
        <h3 className='font-normal text-2xl pl-6 mb-6'>FieldWork</h3>
      )}
      <Outlet />
    </Box>
  )
}

export default BaseTemplate
