import React from 'react'
import { Box, Typography } from '@mui/material'
import CollectionIcon from '../../atoms/icons/CollectionIcon'
import MapIcon from '../../atoms/icons/MapIcon'
import BarChartIcon from '../../atoms/icons/BarChartIcon'
import ClockIcon from '../../atoms/icons/ClockIcon'
import SmileIcon from '../../atoms/icons/SmileIcon'
import DollarSignIcon from '../../atoms/icons/DollarSignIcon'

const SignUpCard: React.FC = () => {
  return (
    <Box className='h-full'>
      <h3 className='font-normal text-2xl leading-9 pl-6'>FieldWork</h3>
      <Box className='flex items-center justify-center h-5/6 flex-col px-[calc(6.25rem-1.5rem)]  gap-8'>
        <Typography variant='h2' gutterBottom>
          Fieldwork is the leading sales tool for your HVAC business.
        </Typography>
        <Box className='flex gap-8 pr-[6.25rem]'>
          <Box className='flex gap-6 flex-col'>
            <Typography variant='h6' gutterBottom>
              For Business Owners
            </Typography>
            <Typography className='flex gap-2'>
              <div className='flex items-center justify-center h-6 w-6'>
                <CollectionIcon />
              </div>
              Standardizes how your technicians sell in the field.
            </Typography>
            <Typography className='flex gap-2'>
              <div className='flex items-center justify-center h-6 w-6'>
                <MapIcon />
              </div>
              Turns best practices from your top performers into a guide for
              your low performers.
            </Typography>
            <Typography className='flex gap-2'>
              <div className='flex items-center justify-center h-6 w-6'>
                <BarChartIcon />
              </div>
              Increases business performance, sales efficiency, and
              transparency.
            </Typography>
          </Box>
          <Box className='flex gap-6 flex-col'>
            <Typography variant='h6' gutterBottom>
              For Business Owners
            </Typography>
            <Typography className='flex gap-2'>
              <div className='flex items-center justify-center h-6 w-6'>
                <ClockIcon />
              </div>
              Reduces the time and effort to create proposals on the spot.
            </Typography>
            <Typography className='flex gap-2'>
              <div className='flex items-center justify-center h-6 w-6'>
                <SmileIcon />
              </div>
              Builds a greater trust with customers through beautiful proposal
              presentations.
            </Typography>
            <Typography className='flex gap-2'>
              <div className='flex items-center justify-center h-6 w-6'>
                <DollarSignIcon />
              </div>
              Increases replacement ticket sizes by 20% or more*.
            </Typography>
            <span className='text-sm ml-6'>*per comparable products</span>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default SignUpCard
