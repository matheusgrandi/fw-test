import { useForm, Controller, SubmitHandler } from 'react-hook-form'
import {
  Button,
  Checkbox,
  FormControlLabel,
  Box,
  Typography,
  CircularProgress,
} from '@mui/material'
import TextInput from '../../atoms/text-input/TextInput'
import { VisibilityOffOutlined, VisibilityOutlined } from '@mui/icons-material'
import { useState } from 'react'
import useOrganization from '../../../hooks/useOrganization'

type FormInputs = {
  organizationName: string
  firstName: string
  lastName: string
  email: string
  phone: string
  password: string
}

//TODO: Improve mobile responsiveness

const SignUpForm = () => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false)
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormInputs & { agree: boolean }>({
    mode: 'onChange',
  })

  const { createOrganization, isLoading } = useOrganization()

  const onSubmit: SubmitHandler<FormInputs> = async (data) => {
    await createOrganization(data)
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
        name='organizationName'
        control={control}
        rules={{ required: 'Company Name is required' }}
        render={({ field }) => (
          <TextInput
            label='Company Name'
            id='organizationName'
            {...field}
            error={errors.organizationName?.message}
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
            fullWidth
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
            fullWidth
            {...field}
            error={errors.phone?.message}
          />
        )}
      />
      <Controller
        name='password'
        control={control}
        rules={{
          required: 'Password is required',
          minLength: {
            value: 8,
            message: 'Password must be at least 8 characters long',
          },
          validate: {
            hasUpperCase: (value) =>
              /[A-Z]/.test(value) ||
              'Password must contain at least one uppercase letter',
            hasLowerCase: (value) =>
              /[a-z]/.test(value) ||
              'Password must contain at least one lowercase letter',
            hasNumber: (value) =>
              /[0-9]/.test(value) ||
              'Password must contain at least one number',
            hasSpecialChar: (value) =>
              /[!@#$%^&*(),.?":{}|<>]/.test(value) ||
              'Password must contain at least one special character',
          },
        }}
        render={({ field }) => (
          <TextInput
            id='password'
            label='Password'
            type={isPasswordVisible ? 'text' : 'password'}
            fullWidth
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
            control={<Checkbox {...field} color='info' />}
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
          maxHeight: '3rem',
          borderRadius: '0.5rem',
          padding: '0.75rem 0',
          lineHeight: '1rem',
          boxShadow: 'none',
          mt: '1rem',
        }}
      >
        {isLoading ? (
          <CircularProgress size={16} color='inherit' className='' />
        ) : (
          'Create account'
        )}
      </Button>
      <Box className='mt-2 text-center '>
        <Typography>
          Already have an account?
          <a href='#signin' className='text-blue-500'>
            Sign In
          </a>
        </Typography>
      </Box>
    </Box>
  )
}

export default SignUpForm
