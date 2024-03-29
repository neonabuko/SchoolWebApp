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
    ['name', 'Name'],
    ['birthday', 'Birthday']
])

export const groupParams = new Map([
    ['name', 'Name'],
    ['daysOfTheWeek', 'Days of the week'],
    ['time', 'Time']
])

export const studentParams = new Map([
    ['name', 'Name'],
    ['birthday', 'Birthday']
])

export const classParams = new Map([
    ['lesson', 'Lesson'],
    ['dateTime', 'Date/Time'],
    ['oral', 'Oral'],
    ['hwDelivered', 'HW Delivered'],
    ['hwGrade', 'HW Grade'],
    ['studentPresent', 'Student Present']
])
