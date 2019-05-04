from api.models import Task, TaskList
from django.contrib.auth.models import User
from api.serializers import TaskListSerializer2, TaskSerializer, UserSerializer
from rest_framework import generics
from rest_framework.permissions import IsAuthenticated
from django.http import Http404
from django_filters.rest_framework import DjangoFilterBackend
from rest_framework import filters
from api.filters import TaskFilter
from rest_framework.pagination import PageNumberPagination, LimitOffsetPagination

class Task_List(generics.ListCreateAPIView):
    serializer_class = TaskListSerializer2
    permission_classes = (IsAuthenticated, )

    def get_queryset(self):
        # return TaskList.objects.for_user_order_by_name(self.request.user)
       return TaskList.objects.filter(created_by=self.request.user)

    def perform_create(self, serializer):
        serializer.save(created_by=self.request.user)


class TaskDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = TaskList.objects.all()
    serializer_class = TaskListSerializer2


class SubTasks(generics.ListCreateAPIView):
    serializer_class = TaskSerializer
    pagination_class = LimitOffsetPagination
    filter_backends = (DjangoFilterBackend, filters.SearchFilter, filters.OrderingFilter)


    filter_class = TaskFilter
    # filterset_fields = ('name', 'status')


    search_fields = ('name', 'status')

    ordering_fields = ('name', 'status')
    ordering = ('name',) #by default



    def get_queryset(self):
        try:
            tasks = TaskList.objects.get(id=self.kwargs['pk'])
        except TaskList.DoesNotExist:
            raise Http404
        queryset = tasks.tasks.all()
        # name = self.request.query_params.get('name', None)
        # status = self.request.query_params.get('status', None)
        # if name is not None and status is not None:
        #     queryset = queryset.filter(name=name).filter(status=status)
        return queryset


# class UserList(generics.ListAPIView):
#     queryset = User.objects.all()
#     serializer_class = UserSerializer

