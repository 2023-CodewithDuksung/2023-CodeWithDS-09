# Generated by Django 4.2.4 on 2023-08-22 05:24

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('raons', '0002_raon_remove_check_time_check_end_time_and_more'),
    ]

    operations = [
        migrations.DeleteModel(
            name='Raon',
        ),
        migrations.AddField(
            model_name='check',
            name='user',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL),
        ),
    ]