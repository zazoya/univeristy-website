# from django.core. import reverse
from audioop import reverse
from hashlib import new
from importlib.resources import path
from nturl2path import url2pathname
from django.http import JsonResponse,HttpResponse
from django.shortcuts import render , redirect
from django.contrib import messages,auth
from django.contrib.auth import authenticate , login , logout
from django.contrib.auth.models import User
# from .models import User
# Create your views here.
# logged
def wrong_user(request):
    return HttpResponse('username')
def wrong_pass(request):
    return HttpResponse('password')

def check(request):
    if request.method == 'POST':
        username = request.POST.get("username")
        password = request.POST.get("password")
        print(username + " " + str(password))
        tt = User.objects.all()
        auth = authenticate(request , username= username,password = password)
        print(authenticate(request , username= username,password = password))
        if auth is not None:
            login(request ,auth)
            return HttpResponse('200')
            # return JsonResponse( new {redirect('home')} , safe=False)
            # return HttpResponse('username')
            # redirect('home')
            # return path('',index)
        try:
            user = User.objects.get(username= username)
        except:
            return HttpResponse('username')
            # return render(request , 'login/index.html',context={'type':'username','username':username ,'password':password})
            # return wrong_user(request)
        if  authenticate(request , username= username,password = password) == None:
            print(2)
            return HttpResponse('password')

            # return wrong_pass(request)
            # return render(request , 'login/index.html',context={'type':'password','username':username,'password':password})


def index(request):
    check(request)
    return render(request , 'login/index.html')

def ll(request):
    logout(request)
    return redirect('home')
        # try:
            # authenticate(request , username= username,password = password)
            # user = User.objects.get(username= username,password = password)
        # except:
            # return render(request , 'login/index.html',context={'type':'password','username':username,'password':password})
        # if request.is_ajax():
            # return JsonResponse(list(data),safe=False)
        # user = User.objects.get(username= username,password = password)
            # print(loggedIN)
        # else:
            # print("wrong username")
        # except:
        # print('error')
            # messages.error(request, 'wrong username')
        # pw = User.objects.get(password = password)