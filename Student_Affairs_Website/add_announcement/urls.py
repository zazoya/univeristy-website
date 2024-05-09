from django.urls import path
from .views import push_announcement

urlpatterns=[
    path('add-announcement',push_announcement)
]