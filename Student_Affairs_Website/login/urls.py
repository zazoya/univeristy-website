from django.urls import path
from .views import index,ll,wrong_pass,check

urlpatterns = [
    path('', index , name='login'),
    path('wrong/', wrong_pass ),
    path('go', check ),
    path('logout/', ll , name='logout')
]