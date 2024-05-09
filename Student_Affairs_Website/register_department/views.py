from django.shortcuts import render
from django.http import JsonResponse , HttpResponse
from all_students.models import Students
# Create your views here.
def ajax(request):
    js = list(Students.objects.order_by('id').filter(Department = 'General').values())
    return JsonResponse(js , safe=False)
def index(request):
    ajax(request)
    return render(request , 'register_department/index.html')
def register(request):
    id = request.POST.get('id')
    dep = request.POST.get('department')
    Students.objects.filter(id = id).update(Department = dep)
    return HttpResponse('Success')
