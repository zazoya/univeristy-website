# Generated by Django 3.2.5 on 2022-05-20 05:39

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Students',
            fields=[
                ('id', models.IntegerField(primary_key=True, serialize=False)),
                ('gender', models.CharField(max_length=6)),
                ('level', models.IntegerField()),
                ('gpa', models.IntegerField()),
                ('name', models.CharField(max_length=10)),
                ('Department', models.CharField(default='General', max_length=10)),
                ('email', models.EmailField(max_length=80)),
                ('date_of_birth', models.DateField()),
                ('mobile_number', models.CharField(max_length=11)),
            ],
        ),
    ]
