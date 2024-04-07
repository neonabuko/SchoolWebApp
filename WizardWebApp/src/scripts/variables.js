export const URL =  "http://100.102.72.128:5170"

export const apiRoutes = [
    '/teachers',
    '/interactive-groups',
    '/students',
    '/interactive-classes'
]

export const appRoutes = [
    ['/', 'Home'],
    ['/admin', 'Admin Center']
]

export const adminCenterEntityNames = [
    'Teachers',
    'Groups',
    'Students',
    'Classes'
]

export const teacherParams = new Map([
    ['name', ['Name', 'input']],
    ['birthday', ['Birthday', 'input']]
])

export const groupParams = new Map([
    ['name', ['Name', 'input']],
    ['dateTime', ['Date/Time', 'input']]
])

export const studentParams = new Map([
    ['name', ['Name', 'input']],
    ['birthday', ['Birthday', 'input']],
    ['registrationId', ['Registration Id']],
    ['interactiveGroupId', ['Group', 'search']]
])

export const classParams = new Map([
    ['lesson', ['L', 'input']],
    ['dateTime', ['Date', 'date']],
    ['oral', ['Oral', 'select']],
    ['hwDelivered', ['HW?', 'checkbox']],
    ['hwGrade', ['HW Grade', 'select']],
    ['studentId', ['Student', 'search']]
])
