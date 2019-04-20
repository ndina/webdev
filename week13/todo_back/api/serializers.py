from rest_framework import serializers
from api.models import TaskList
from django.contrib.auth.models import User
from django.db import models


class TaskListSerializer(serializers.Serializer):
    id = serializers.IntegerField(read_only=True)
    name = serializers.CharField(required=True)

    def create(self, validated_data):
        taskList = TaskList(**validated_data)
        taskList.save()
        return taskList

    def update(self, instance, validated_data):
        instance.name = validated_data.get('name', instance.name)
        instance.save()
        return instance

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'username', 'email', )

class TaskListSerializer2(serializers.ModelSerializer):
    id = serializers.IntegerField(read_only=True)
    name = serializers.CharField(required=True)
    created_by=UserSerializer(read_only=True)

    class Meta:
        model = TaskList
        fields = ('id', 'name','created_by',)
        # fields = '__all__'

class TaskSerializer(serializers.Serializer):
    id = serializers.IntegerField()
    name = serializers.CharField()
    created_at = serializers.DateTimeField()
    due_on = serializers.DateTimeField()
    status = serializers.CharField()
    task_list = TaskListSerializer()


