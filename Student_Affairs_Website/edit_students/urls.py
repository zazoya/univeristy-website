import imp
from turtle import up
from django.urls import path
from .views import index,ajax,delete,update

urlpatterns = [
    path('',index,name='edit students'),
    path('data/',ajax),
    path('delete-student',delete),
    path('update',update),
]
# /edit/