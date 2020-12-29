from django.contrib.auth.models import User, Group
from rest_framework import serializers
from .models import TodoApp


class UserSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = User
        fields = ['url', 'username', 'email', 'groups']


class GroupSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Group
        fields = ['url', 'name']

class TodoAppSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = TodoApp
        fields = ['id','todo']