# Generated by Django 4.1 on 2024-01-29 21:14

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='offers',
            name='image',
            field=models.ImageField(null=True, upload_to=''),
        ),
    ]
