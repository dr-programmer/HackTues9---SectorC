# Generated by Django 4.1.7 on 2023-03-11 04:25

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('authentication', '0014_room_alter_friend_nickname_message'),
    ]

    operations = [
        migrations.AlterField(
            model_name='friend',
            name='nickname',
            field=models.CharField(default='e887803b9735a8ca', max_length=8),
        ),
    ]
