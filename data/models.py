from django.db import models
from django.utils import timezone
from django.core.validators import MaxValueValidator, MinValueValidator
from django.contrib.auth.models import User


class OwnedModel(models.Model):
    owner = models.ForeignKey(User, on_delete=models.CASCADE)

    class Meta:
        abstract = True


class Location(OwnedModel):
    location_name = models.CharField(max_length=30)
    location_description = models.TextField(max_length=360)
    address1 = models.CharField(max_length=50)
    address2 = models.CharField(max_length=50, blank=True)
    address3 = models.CharField(max_length=50, blank=True)
    city = models.CharField(max_length=30)
    state = models.CharField(max_length=30)
    country = models.CharField(max_length=30)
    zip = models.CharField(max_length=12, blank=True)
    created_at = models.DateField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)


class Object(OwnedModel):
    tag = models.CharField(max_length=12)
    object_name = models.CharField(max_length=30)
    description = models.TextField(max_length=360)
    model_number = models.CharField(max_length=30)
    purchased = models.DateField(default=timezone.now)
    created_at = models.DateField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    location = models.ForeignKey(Location, on_delete=models.CASCADE)

