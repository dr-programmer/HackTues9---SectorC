# Generated by Django 4.1.7 on 2023-03-11 00:03

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('authentication', '0005_alter_friend_nickname'),
    ]

    operations = [
        migrations.AlterField(
            model_name='friend',
            name='nickname',
            field=models.CharField(default='0de1ed3e7ea2d053', max_length=20),
        ),
    ]
