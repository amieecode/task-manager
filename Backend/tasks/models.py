from django.db import models

# Create your models here.
class Task(models.Model):
    STATUS_CHOICES =[
        ('pending', 'pending'),
        ('in-progress', 'in-progress'),
        ('completed', 'completed'),
    ]
    title = models.CharField(max_length=250)
    description = models.TextField(blank=True, null=True)
    status = models.CharField(max_length=20, choices=STATUS_CHOICES, default='pending')
    created_at = models.DateField(auto_now_add=True)
    updated_at = models.DateField(auto_now=True)

    def __str__(self):
        return self.title
    