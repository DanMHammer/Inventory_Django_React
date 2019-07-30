from django.urls import path
from django.conf.urls import include

from rest_framework import routers

from data.views import UserViewSet, LocationViewSet, ObjectViewSet

router = routers.DefaultRouter()
router.register('users', UserViewSet)
router.register('movies', LocationViewSet)
router.register('ratings', ObjectViewSet)

urlpatterns = [
    path('', include(router.urls)),
]