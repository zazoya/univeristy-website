from django.urls import path
from . import views
from home import urls
urlpatterns = [
    path('',views.index,name="all students"),
    path('data/',views.ajax,name="ajax"),
]