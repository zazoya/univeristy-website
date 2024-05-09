from lib2to3.pgen2.pgen import generate_grammar
from django.shortcuts import render
from django.http import JsonResponse , HttpResponse
from all_students.models import Students
from django.forms.models import modelform_factory
# Create your views here.
def ajax(request):
    student = list(Students.objects.filter(status = True).order_by('id').values())
    # print(student)
    return JsonResponse(student , safe=False)
def delete(request):
    id = request.POST.get('id')
    student = Students.objects.get(id = id)
    # print(student)
    student.delete()
    return HttpResponse("Deleted")
def index(request):
    ajax(request)
    # student = Students.objects.filter(status = True).order_by('id')
    # print(student[0])
    # students = {'students':student}
    return render(request, 'edit_students/index.html')
def update(request):
    print(1)
    # StudentForm = modelform_factory(test, exclude=[])
    id = request.POST.get('id')
    name = request.POST.get('name')
    gpa = request.POST.get('gpa')
    gender = request.POST.get('gender')
    level = request.POST.get('level')
    status = request.POST.get('status')
    # Department = request.POST.get('Department')
    email = request.POST.get('email')
    # date_of_birth = request.POST.get('date_of_birth')
    mobile_number = request.POST.get('mobile_number')
    student  = Students.objects.get(id = id)
    student.name = name
    student.gpa = gpa
    student.status = status
    student.gender = gender
    student.level = level
    student.email = email
    student.mobile_number = mobile_number
    student.save()
    print('done')
    return HttpResponse('200')