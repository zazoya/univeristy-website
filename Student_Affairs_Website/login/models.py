from abc import abstractclassmethod
from dataclasses import fields
from django import forms
from django.db import models
from django.contrib.auth.models import AbstractBaseUser
# from django.contrib.auth.models import User
# Create your models here.
class User(models.Model):
    # user = models.OneToOneField(User, on_delete=models.CASCADE)
    # user = models.OneToOneField(User, on_delete=models.CASCADE)
    # USERNAME_FIELD = 'username'
    username= models.CharField(max_length=50, primary_key=True)
    password = models.CharField(max_length=32)
    # username = user.username

    def __str__(self):
        return self.username
