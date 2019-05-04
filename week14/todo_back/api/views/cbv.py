from api.models import TaskList, Task
from api.serializers import TaskListSerializer2,TaskListSerializer
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from django.http import Http404

class Task_List(APIView):
    def get(self, request):
        lists = TaskList.objects.all()
        serializer = TaskListSerializer2(lists, many = True)
        return Response(serializer.data, status=status.HTTP_200_OK)
    def post(self,request):
        serializer = TaskListSerializer2(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors)

class TaskDetail(APIView):
    def get_object(self, pk):
        try:
            return TaskList.objects.get(id=pk)
        except TaskList.DoesNotExist:
            raise Http404
    def get(self, request, pk):
        taski = self.get_object(pk)
        serializer = TaskListSerializer(taski)
        return Response(serializer.data)
    def put(self, request, pk):
        taski = self.get_object(pk)
        serializer = TaskListSerializer(instance=taski, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.data)
    def delete(self, request, pk):
        taski = self.get_object(pk)
        taski.delete()
        return Response(status = status.HTTP_204_NO_CONTENT)


class ListTasks(APIView):
    def get(self, request, pk):
        try:
            lists = TaskDetail.get_object(self,pk=pk)
        except TaskList.DoesNotExist:
            raise Http404
        tasks = Task.objects.filter(task_list=lists)
        serializer = TaskListSerializer2(tasks,many=True)
        return Response(serializer.data)
