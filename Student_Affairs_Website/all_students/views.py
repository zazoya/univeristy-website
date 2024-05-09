import json
from django.shortcuts import render
from django.http import HttpResponse,JsonResponse
from .models import Students

def ajax(request):
    js = list(Students.objects.order_by('id').values())
    return JsonResponse(js , safe=False)
def index(request):
    ajax(request)
    return render(request,'all_students/index.html')
    students = Students.objects.order_by('id')
    pass_db = {'students':students}
    print(students[0].status)
    # return HttpResponse("hello world")
