from django.db import models

# Create your models here.
class Chat(models.Model):
    user_input = models.TextField()
    gpt_response = models.TextField(blank=True)
    created_at = models.DateTimeField(auto_now_add=True)