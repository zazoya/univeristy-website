from django.urls import path
from .views import register,ajax,index
urlpatterns = [
    path('' , index , name= "register department"),
    path('data/' , ajax , name= "department ajax"),
    path('assign-student' , register),
]