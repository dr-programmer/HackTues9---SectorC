# Generated by Django 4.1.7 on 2023-03-11 01:10

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('authentication', '0009_alter_friend_nickname'),
    ]

    operations = [
        migrations.AlterField(
            model_name='friend',
            name='nickname',
            field=models.CharField(default='7569d02132b77542', max_length=20),
        ),
    ]
