from operator import mod
from django.db import models

# Create your models here.
class Announcements(models.Model):
    heading = models.CharField(max_length=125,default="For General Programs")
    content = models.TextField()
    important = models.BooleanField(default=False)