# Generated by Django 3.2.5 on 2022-05-20 05:44

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('all_students', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='students',
            name='status',
            field=models.CharField(default='Active', max_length=10),
        ),
        migrations.AlterField(
            model_name='students',
            name='name',
            field=models.CharField(max_length=48),
        ),
    ]
