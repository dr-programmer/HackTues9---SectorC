# Generated by Django 4.1.7 on 2023-03-11 04:28

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('authentication', '0015_alter_friend_nickname'),
    ]

    operations = [
        migrations.AlterField(
            model_name='friend',
            name='nickname',
            field=models.CharField(default='3b3be122', max_length=8),
        ),
        migrations.AlterField(
            model_name='profile',
            name='token',
            field=models.CharField(max_length=10, unique=True),
        ),
        migrations.AlterField(
            model_name='profile',
            name='token1',
            field=models.CharField(max_length=4, unique=True),
        ),
    ]