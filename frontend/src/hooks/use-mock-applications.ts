import { useState } from 'react'

const mockApplications = [
  {
    id: '1',
    company: 'TechCorp',
    position: 'Senior Frontend Developer',
    status: 'interview',
    appliedDate: '2023-06-15',
    updatedAt: '2023-06-18',
    contactEmail: 'hr@techcorp.com',
    website: 'https://techcorp.com',
    location: 'San Francisco, CA',
    notes: 'Technical interview scheduled for June 20th'
  },
  // Add more mock applications as needed
]

export function useMockApplications() {
  const [applications, setApplications] = useState(mockApplications)

  const getApplicationById = (id) => {
    return applications.find(app => app.id === id)
  }

  const addApplication = (newApp) => {
    const application = {
      ...newApp,
      id: Date.now().toString(),
      appliedDate: format(newApp.appliedDate, 'yyyy-MM-dd'),
      updatedAt: new Date().toISOString()
    }
    setApplications([...applications, application])
  }

  const updateApplication = (id, updatedApp) => {
    setApplications(applications.map(app => 
      app.id === id 
        ? { 
            ...updatedApp, 
            id,
            appliedDate: format(updatedApp.appliedDate, 'yyyy-MM-dd'),
            updatedAt: new Date().toISOString()
          }
        : app
    ))
  }

  const deleteApplication = (id) => {
    setApplications(applications.filter(app => app.id !== id))
  }

  return {
    applications,
    getApplicationById,
    addApplication,
    updateApplication,
    deleteApplication
  }
}

function format(date, formatStr) {
  // Simple date formatter for mock data
  if (typeof date === 'string') return date
  const pad = (num) => num.toString().padStart(2, '0')
  return `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())}`
}