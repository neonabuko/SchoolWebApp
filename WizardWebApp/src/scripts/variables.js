export const URL =  "http://100.102.72.128:5170"

export const routes = [
    '/teachers',
    '/interactive-groups',
    '/students',
    '/interactive-classes'
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
    ['daysOfTheWeek', ['Days of the week', 'input']],
    ['time', ['Time', 'input']]
])

export const studentParams = new Map([
    ['name', ['Name', 'input']],
    ['birthday', ['Birthday', 'input']],
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
