from django.http import JsonResponse
from .models import TaskList
from django.views.decorators.csrf import csrf_exempt
import json
from api.serializers import TaskListSerializer, TaskSerializer, TaskListSerializer2
from django.shortcuts import render


@csrf_exempt
def task_lists(request):
    if request.method == 'GET':
        lists = TaskList.objects.all()
        serializer = TaskListSerializer(lists, many=True)
        return JsonResponse(serializer.data, safe=False, status=200)
    elif request.method == 'POST':
        data = json.loads(request.body.decode('utf-8'))
        serializer = TaskListSerializer2(data=data)
        if serializer.is_valid():
            serializer.save()  # create function in serializer class
            return JsonResponse(serializer.data, status=201)
        return JsonResponse(serializer.errors)

@csrf_exempt
def get_task_list(request, pk):
   try:
       taski = TaskList.objects.get(id=pk)
   except  TaskList.DoesNotExist as e:
       return JsonResponse({'error': str(e)})

   if request.method == 'GET':
       serializer = TaskListSerializer(taski)
       return JsonResponse(serializer.data, status=200)
   elif request.method == 'PUT':
       data = json.loads(request.body.decode('utf-8'))
       serializer = TaskListSerializer(instance=taski, data=data)
       if serializer.is_valid():
           serializer.save()  # update function in serializer class
           return JsonResponse(serializer.data, status=200)
       return JsonResponse(serializer.errors)
   elif request.method == 'DELETE':
       taski.delete()
       return JsonResponse({}, status=204)




def list_tasks(request,pk):
    try:
        list = TaskList.objects.get(id=pk)
    except TaskList.DoesNotExist as e:
        return JsonResponse({'error': str(e)})
    tasks = list.task_set.all()
    serializer = TaskSerializer(tasks, many=True)
    return JsonResponse(serializer.data,safe=False)

