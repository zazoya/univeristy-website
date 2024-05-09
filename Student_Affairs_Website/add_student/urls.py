from django.urls import path
from .views import add,new_student
urlpatterns = [
    path('',add, name = 'add student'),
    path('add-new-student',new_student)
    ]