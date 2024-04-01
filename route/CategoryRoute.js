const CategoryRoute = require('express').Router()
const { createCategory, readAllCategory, readSingleCategory, updateCategory, deleteCategory } = require('../controller/categoryCtrl')
const auth = require('../middleware/auth')
const adminAuth = require('../middleware/adminAuth')

// without auth
CategoryRoute.get(`/all`,readAllCategory)
CategoryRoute.get(`/single/:id`, readSingleCategory)

// with auth (admin)
CategoryRoute.post(`/add`, auth, adminAuth, createCategory)
CategoryRoute.patch(`/update/:id`, auth, adminAuth, updateCategory)
CategoryRoute.delete(`/delete/:id`, auth, adminAuth, deleteCategory)

module.exports = CategoryRoute