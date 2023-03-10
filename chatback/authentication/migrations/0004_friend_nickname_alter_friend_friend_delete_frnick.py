# Generated by Django 4.1.7 on 2023-03-10 23:55

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('authentication', '0003_profile_is_active_profile_is_admin_profile_is_staff_and_more'),
    ]

    operations = [
        migrations.AddField(
            model_name='friend',
            name='nickname',
            field=models.CharField(default='user', max_length=20),
        ),
        migrations.AlterField(
            model_name='friend',
            name='friend',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='frnick_as_friend', to=settings.AUTH_USER_MODEL),
        ),
        migrations.DeleteModel(
            name='FrNick',
        ),
    ]
