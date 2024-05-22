import { useCallback, useState } from 'react'
import useSWR from 'swr'
import axios from 'axios'
import { Organization } from '../types/models'
import { useToast } from './useToast'

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL

interface UseOrganization {
  organization: Organization | undefined
  isLoading: boolean
  createOrganization: (data: Partial<Organization>) => Promise<void>
  updateOrganization: (
    id: number,
    data: Partial<Organization>
  ) => Promise<Organization | null>
}

const fetcher = (url: string) => axios.get(url).then((res) => res.data)

const useOrganization = (organizationId?: number | string): UseOrganization => {
  const { showToast } = useToast()
  const { data, mutate } = useSWR<Organization>(
    organizationId ? `${API_BASE_URL}/organizations/${organizationId}` : null,
    fetcher
  )

  const [isLoading, setIsLoading] = useState<boolean>(false)

  const createOrganization = useCallback(
    async (data: Partial<Organization>): Promise<void> => {
      setIsLoading(true)
      try {
        const response = await axios.post(`${API_BASE_URL}/organizations`, data)
        if (response.status === 201) {
          showToast('Organization created successfully', 'success')
        }
        mutate()
      } catch (error) {
        showToast('Error creating organization', 'error')
      }
      setIsLoading(false)
    },
    [mutate, showToast]
  )

  const updateOrganization = useCallback(
    async (
      id: number,
      data: Partial<Organization>
    ): Promise<Organization | null> => {
      try {
        const response = await axios.put(
          `${API_BASE_URL}/organizations/${id}`,
          data
        )
        mutate()
        return response.data
      } catch (error) {
        console.error('Error updating organization:', error)
        return null
      }
    },
    [mutate]
  )

  return {
    organization: data,
    isLoading,
    createOrganization,
    updateOrganization,
  }
}

export default useOrganization
