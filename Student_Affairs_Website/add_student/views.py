from django.shortcuts import render
from django.http import HttpResponse
from all_students.models import Students
# Create your views here.
def add(request):
    return render(request , 'add_student/index.html')
def new_student(request):
    id = request.POST.get('id')
    name = request.POST.get('name')
    gpa = request.POST.get('gpa')
    gender = request.POST.get('gender')
    level = request.POST.get('level')
    status = request.POST.get('status')
    Department = request.POST.get('dep')
    email = request.POST.get('email')
    date_of_birth = request.POST.get('birth')
    mobile_number = request.POST.get('number')
    student  = Students(id=id,name=name,gpa=gpa,level=level,gender=gender,status=status,Department=Department,email=email,date_of_birth=date_of_birth,mobile_number=mobile_number)
    student.save()

    return HttpResponse('Done')
    # student.name = name
    # student.gpa = gpa
    # student.status = status
    # student.gender = gender
    # student.level = level
    # student.email = email
    # student.mobile_number = mobile_number