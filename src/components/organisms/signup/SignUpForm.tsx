import { useForm, Controller, SubmitHandler } from 'react-hook-form'
import {
  Button,
  Checkbox,
  FormControlLabel,
  Box,
  Typography,
} from '@mui/material'
import TextInput from '../../atoms/text-input/TextInput'
import { VisibilityOffOutlined, VisibilityOutlined } from '@mui/icons-material'
import { useState } from 'react'

type FormInputs = {
  companyName: string
  firstName: string
  lastName: string
  email: string
  phone: string
  password: string
  agree: boolean
}

//TODO: Improve mobile responsiveness

const SignUpForm = () => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false)
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormInputs>({
    mode: 'onChange',
  })

  const onSubmit: SubmitHandler<FormInputs> = (data) => {
    console.log(data)
  }

  return (
    <Box
      component='form'
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      autoComplete='off'
      className='flex flex-col justify-center px-[4.5rem] py-[4.281rem] max-sm:py-0 max-sm:px-0 h-full max-w-full'
    >
      <Controller
        name='companyName'
        control={control}
        rules={{ required: 'Company Name is required' }}
        render={({ field }) => (
          <TextInput
            label='Company Name'
            id='companyName'
            {...field}
            error={errors.companyName?.message}
            fullWidth
          />
        )}
      />
      <div className='flex justify-between gap-4'>
        <Controller
          name='firstName'
          control={control}
          rules={{ required: 'First Name is required' }}
          render={({ field }) => (
            <TextInput
              id='firstName'
              label='First Name'
              {...field}
              error={errors.firstName?.message}
            />
          )}
        />
        <Controller
          name='lastName'
          control={control}
          rules={{ required: 'Last Name is required' }}
          render={({ field }) => (
            <TextInput
              id='lastName'
              label='Last Name'
              {...field}
              error={errors.lastName?.message}
            />
          )}
        />
      </div>
      <Controller
        name='email'
        control={control}
        rules={{
          required: 'Email is required',
          pattern: { value: /^\S+@\S+$/i, message: 'Invalid email address' },
        }}
        render={({ field }) => (
          <TextInput
            id='email'
            label='Email Address'
            {...field}
            error={errors.email?.message}
          />
        )}
      />
      <Controller
        name='phone'
        control={control}
        rules={{ required: 'Phone Number is required' }}
        render={({ field }) => (
          <TextInput
            id='phone'
            label='Phone Number'
            {...field}
            error={errors.phone?.message}
          />
        )}
      />
      <Controller
        name='password'
        control={control}
        rules={{ required: 'Password is required' }}
        render={({ field }) => (
          <TextInput
            id='password'
            label='Password'
            type={isPasswordVisible ? 'text' : 'password'}
            rightIcon={
              <span
                onClick={() => setIsPasswordVisible(!isPasswordVisible)}
                className='focus:outline-none cursor-pointer'
              >
                {isPasswordVisible ? (
                  <VisibilityOutlined className='text-gray500' />
                ) : (
                  <VisibilityOffOutlined className='text-gray500' />
                )}
              </span>
            }
            {...field}
            error={errors.password?.message}
          />
        )}
      />
      <Controller
        name='agree'
        control={control}
        rules={{ required: 'You must agree to the terms' }}
        render={({ field }) => (
          <FormControlLabel
            control={<Checkbox {...field} color='info' checked={field.value} />}
            label={
              <Typography>
                I agree to Fieldwork's{' '}
                <a href='#terms' className='text-blue-500'>
                  Terms of Service
                </a>
              </Typography>
            }
          />
        )}
      />
      {errors.agree && (
        <Typography color='error' variant='body2'>
          {errors.agree.message}
        </Typography>
      )}
      <Button
        type='submit'
        fullWidth
        variant='contained'
        color='primary'
        sx={{
          fontFamily: 'DM Sans',
          fontSize: '1rem',
          fontWeight: '500',
          textTransform: 'none',
          borderRadius: '0.5rem',
          padding: '0.75rem 0',
          lineHeight: '1rem',
          boxShadow: 'none',
          mt: '1rem',
        }}
      >
        Create account
      </Button>
      <Box className='mt-2 text-center '>
        <Typography>
          Already have an account?{' '}
          <a href='#signin' className='text-blue-500'>
            Sign In
          </a>
        </Typography>
      </Box>
    </Box>
  )
}

export default SignUpForm
