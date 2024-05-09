from django.shortcuts import render
from django.http import HttpResponse
from home.models import Announcements

# Create your views here.
def push_announcement(request):
    head  = request.POST.get('head')
    data = request.POST.get('data')
    i = request.POST.get('i')
    ann = Announcements(heading = head ,content = data , important = i)
    ann.save()
    return HttpResponse('Done')
