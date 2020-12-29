from django.db import models

class TodoApp(models.Model):
    todo = models.CharField(max_length=30)

