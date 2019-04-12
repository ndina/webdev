from rest_framework import serializers
from api.models import TaskList

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

class TaskListSerializer2(serializers.ModelSerializer):
    id = serializers.IntegerField(read_only=True)
    name = serializers.CharField(required=True)

    class Meta:
        model = TaskList
        fields = ('id', 'name',)
        # fields = '__all__'

class TaskSerializer(serializers.Serializer):
    name = serializers.CharField()
    created_at = serializers.IntegerField()
    due_on = serializers.IntegerField()
    status = serializers.CharField
    taskList = TaskListSerializer()


