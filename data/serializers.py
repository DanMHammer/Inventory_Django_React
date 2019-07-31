from rest_framework import serializers
from .models import *
from django.contrib.auth.models import User
from rest_framework.authtoken.models import Token


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'username', 'password']
        extra_kwargs = {'password': {'write_only': True, 'required': True}}

    def create(self, validated_data):
        user = User.objects.create_user(**validated_data)
        token = Token.objects.create(user=user)
        return user


class LocationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Location
        fields = [
            'owner', 'location_name', 'location_description', 'address1', 'address2',
            'address3', 'city', 'state', 'country', 'zip',
        ]


class ObjectSerializer(serializers.ModelSerializer):
    class Meta:
        model = Object
        fields = [
            'tag','owner', 'object_name', 'description', 'model_number', 'purchased', 'location'
        ]

