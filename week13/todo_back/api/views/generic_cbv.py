from api.models import Task, TaskList
from django.contrib.auth.models import User
from api.serializers import TaskListSerializer2, TaskSerializer, UserSerializer
from rest_framework import generics
from rest_framework.permissions import IsAuthenticated

class Task_List(generics.ListCreateAPIView):
    # queryset = TaskList.objects.all()
    # serializer_class = TaskListSerializer2
    permission_classes = (IsAuthenticated, )

    def get_queryset(self):
        # return TaskList.objects.for_user_order_by_name(self.request.user)
       return TaskList.objects.filter(created_by=self.request.user)
    def get_serializer_class(self):
        return TaskListSerializer2
    def perform_create(self, serializer):
        serializer.save(created_by=self.request.user)

class TaskDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = TaskList.objects.all()
    serializer_class = TaskListSerializer2

# class UserList(generics.ListAPIView):
#     queryset = User.objects.all()
#     serializer_class = UserSerializer

