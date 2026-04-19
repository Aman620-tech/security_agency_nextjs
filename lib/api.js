import Cookies from 'js-cookie'

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api/v1' 

// Helper function for API calls
async function fetchAPI(endpoint, options = {}) {
  const token = Cookies.get('auth_token')
  
  const defaultOptions = {
    headers: {
      'Content-Type': 'application/json',
      ...(token && { 'Authorization': `Bearer ${token}` }),
      ...options.headers,
    },
  }

  try {
    const response = await fetch(`${API_BASE_URL}${endpoint}`, { ...defaultOptions, ...options })
    
    if (!response.ok) {
      if (response.status === 401) {
        // Token expired - clear cookies and redirect to login
        Cookies.remove('auth_token')
        Cookies.remove('user')
        if (typeof window !== 'undefined') {
          window.location.href = '/login'
        }
      }
      const error = await response.json().catch(() => ({ message: 'API Error' }))
      throw new Error(error.message || `HTTP ${response.status}`)
    }
    
    return await response.json()
  } catch (error) {
    console.error(`API Error (${endpoint}):`, error)
    throw error
  }
}

// ============ AUTHENTICATION API ============
export const authAPI = {
  // Login user
  login: (username, password) => fetchAPI('/auth/login', {
    method: 'POST',
    body: JSON.stringify({ username, password }),
  }),
  
  // Register new user (Admin only)
  register: (userData) => fetchAPI('/auth/register', {
    method: 'POST',
    body: JSON.stringify(userData),
  }),
  
  // Get user profile
  getProfile: () => fetchAPI('/auth/profile'),
  
  // Change password
  changePassword: (oldPassword, newPassword) => fetchAPI('/auth/change-password', {
    method: 'PATCH',
    body: JSON.stringify({ oldPassword, newPassword }),
  }),
  
  // Get all users (Admin only)
  getAllUsers: () => fetchAPI('/users'),
  
  // Get users by role
  getUsersByRole: (role, isActive = true) => fetchAPI(`/users?role=${role}&isActive=${isActive}`),
  
  // Get all supervisors
  getSupervisors: () => fetchAPI('/users/supervisors'),
  
  // Get user by ID
  getUserById: (id) => fetchAPI(`/users/${id}`),
  
  // Update user
  updateUser: (id, data) => fetchAPI(`/users/${id}`, {
    method: 'PATCH',
    body: JSON.stringify(data),
  }),
  
  // Deactivate user
  deactivateUser: (id) => fetchAPI(`/users/${id}/deactivate`, {
    method: 'DELETE',
  }),
  
  // Activate user
  activateUser: (id) => fetchAPI(`/users/${id}/activate`, {
    method: 'POST',
  }),
  
  // Delete user
  deleteUser: (id) => fetchAPI(`/users/${id}`, {
    method: 'DELETE',
  }),
}

// ============ GUARDS MANAGEMENT API ============
export const guardsAPI = {
  // Get all guards
  getAll: () => fetchAPI('/guards'),
  
  // Get active guards
  getActive: () => fetchAPI('/guards?status=active'),
  
  // Search guards by name
  searchByName: (name) => fetchAPI(`/guards?search=${name}`),
  
  // Get guards by supervisor
  getBySupervisor: (supervisorId) => fetchAPI(`/guards?supervisorId=${supervisorId}`),
  
  // Get guard statistics by supervisor
  getStatsBySupervisor: () => fetchAPI('/guards/stats/supervisor-count'),
  
  // Get guard by ID
  getById: (id) => fetchAPI(`/guards/${id}`),
  
  // Get guard by guard ID (SG-001)
  getByGuardId: (guardId) => fetchAPI(`/guards/guard-id/${guardId}`),
  
  // Create guard
  create: (data) => fetchAPI('/guards', {
    method: 'POST',
    body: JSON.stringify(data),
  }),
  
  // Update guard
  update: (id, data) => fetchAPI(`/guards/${id}`, {
    method: 'PATCH',
    body: JSON.stringify(data),
  }),
  
  // Deactivate guard
  deactivate: (id) => fetchAPI(`/guards/${id}/deactivate`, {
    method: 'DELETE',
  }),
}

// ============ TENDER/CLIENT SITE MANAGEMENT API ============
export const tendersAPI = {
  // Get all tenders
  getAll: () => fetchAPI('/tenders'),
  
  // Get active tenders only
  getActive: () => fetchAPI('/tenders/active'),
  
  // Get expiring tenders
  getExpiring: (days = 30) => fetchAPI(`/tenders/expiring?days=${days}`),
  
  // Get tender by ID
  getById: (id) => fetchAPI(`/tenders/${id}`),
  
  // Create tender
  create: (data) => fetchAPI('/tenders', {
    method: 'POST',
    body: JSON.stringify(data),
  }),
  
  // Update tender
  update: (id, data) => fetchAPI(`/tenders/${id}`, {
    method: 'PATCH',
    body: JSON.stringify(data),
  }),
  
  // Close tender
  close: (id) => fetchAPI(`/tenders/${id}/close`, {
    method: 'DELETE',
  }),
}

// ============ ATTENDANCE MANAGEMENT API ============
export const attendanceAPI = {
  // Mark day shift attendance
  markDayShift: (guardId, date, tenderId, status = 'present') => fetchAPI('/attendance/mark', {
    method: 'POST',
    body: JSON.stringify({ guardId, date, tenderId, shiftType: 'day', status }),
  }),
  
  // Mark night shift attendance
  markNightShift: (guardId, date, tenderId, status = 'present') => fetchAPI('/attendance/mark', {
    method: 'POST',
    body: JSON.stringify({ guardId, date, tenderId, shiftType: 'night', status }),
  }),
  
  // Mark extra duty
  markExtraDuty: (guardId, date, tenderId, status = 'present') => fetchAPI('/attendance/mark', {
    method: 'POST',
    body: JSON.stringify({ guardId, date, tenderId, shiftType: 'extra', status }),
  }),
  
  // Bulk attendance marking
  markBulk: (date, tenderId, shiftType, attendances) => fetchAPI('/attendance/bulk', {
    method: 'POST',
    body: JSON.stringify({ date, tenderId, shiftType, attendances }),
  }),
  
  // Get guard attendance for month
  getByGuard: (guardId, month, year) => fetchAPI(`/attendance/guard/${guardId}?month=${month}&year=${year}`),
  
  // Get monthly attendance summary
  getSummary: (guardId, month, year) => fetchAPI(`/attendance/summary/${guardId}?month=${month}&year=${year}`),
  
  // Get attendance calendar view
  getCalendar: (guardId, month, year) => fetchAPI(`/attendance/calendar/${guardId}?month=${month}&year=${year}`),
}

// ============ SALARY MANAGEMENT API ============
export const salaryAPI = {
  // Calculate salary (preview only)
  calculatePreview: (guardId, month, year) => fetchAPI('/salary/calculate', {
    method: 'POST',
    body: JSON.stringify({ guardId, month, year, save: false }),
  }),
  
  // Calculate and save salary
  calculateAndSave: (guardId, month, year) => fetchAPI('/salary/calculate', {
    method: 'POST',
    body: JSON.stringify({ guardId, month, year, save: true }),
  }),
  
  // Lock salary month
  lockMonth: (month, year) => fetchAPI('/salary/lock-month', {
    method: 'POST',
    body: JSON.stringify({ month, year }),
  }),
  
  // Get monthly salary report
  getReport: (month, year) => fetchAPI(`/salary/report/${month}/${year}`),
  
  // Generate salary slip
  getSalarySlip: (guardId, month, year) => fetchAPI(`/salary/slip/${guardId}/${month}/${year}`),
}

// ============ REPORTS API ============
export const reportsAPI = {
  // Get attendance report
  getAttendance: (startDate, endDate) => fetchAPI(`/reports/attendance?startDate=${startDate}&endDate=${endDate}`),
  
  // Get tender deployment report
  getTenderDeployment: () => fetchAPI('/reports/tender-deployment'),
  
  // Get monthly salary summary
  getMonthlySalary: (month, year) => fetchAPI(`/reports/monthly-salary-summary?month=${month}&year=${year}`),
  
  // Get absenteeism report
  getAbsenteeism: (month, year, absentThreshold = 3) => fetchAPI(`/reports/absenteeism?month=${month}&year=${year}&absentThreshold=${absentThreshold}`),
  
  // Get contract expiry report
  getContractExpiry: (days = 30) => fetchAPI(`/reports/contract-expiry?days=${days}`),
  
  // Export report to Excel
  exportToExcel: (startDate, endDate) => fetchAPI(`/reports/export/excel?startDate=${startDate}&endDate=${endDate}`),
}

// ============ DASHBOARD STATS API ============
export const dashboardAPI = {
  // Get guard statistics
  getGuardStats: () => fetchAPI('/guards/stats/supervisor-count'),
  
  // Get expiring contracts alert
  getExpiringContracts: (days = 30) => fetchAPI(`/tenders/expiring?days=${days}`),
  
  // Health check
  healthCheck: () => fetchAPI('/health'),
}

export const reviewsAPI = {
  // GET all reviews
  getAll:  () =>  fetchAPI('/reviews',{       
      method: 'GET',

    }),

  // POST a new review
  create: async (data) => {
    try {
      const response = await fetchAPI('/reviews', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: data.name?.trim(),
          email: data.email?.trim(),
          description: data.description?.trim(),
          rating: Number(data.rating), // FIXED
          tenderName: data.tenderName?.trim(),
          areaName: data.areaName?.trim(),
        }),
      });

      return response;
    } catch (error) {
      console.error("Error creating review:", error);
      throw error;
    }
  }

}