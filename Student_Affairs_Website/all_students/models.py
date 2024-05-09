from tabnanny import verbose
from django.db import models

class Students(models.Model):
    # serial = models.Index("a")
    id = models.IntegerField(primary_key=True)
    name = models.CharField(max_length=48)
    gpa = models.DecimalField(max_digits=3,decimal_places=2)
    level = models.DecimalField(max_digits=1,decimal_places=0)
    gender = models.CharField(max_length=6)
    status = models.BooleanField(max_length=10,default=True)
    Department = models.CharField(max_length=10,default='General')
    email = models.EmailField(max_length=80)
    date_of_birth = models.DateField()
    mobile_number = models.CharField(max_length=11)

    def __str__(self):
        return str(self.id)
    class Meta:
        verbose_name = 'Student'
