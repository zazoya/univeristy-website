from django.shortcuts import render
from .models import Announcements
# from login.views import loggedIN,test
# Create your views here.
def index(request):
    # print(test)
    ann = Announcements.objects.all()
    home = {"ann" : ann}
    return render(request, 'home/index.html',context=home)