from django.http import HttpResponse, JsonResponse
from .models import TaskList

def task_lists(request):
    lists = TaskList.objects.all()

    json_lists = [c.to_json() for c in lists]

    data = {
        'lists': json_lists
    }

    return JsonResponse(data, safe=False)

def get_task_list(request, pk):
   try:
       taski = TaskList.objects.get(id=pk)
   except  TaskList.DoesNotExist as e:
       error = {
           'error': str(e)
       }
       return JsonResponse(error, safe=False)

   return JsonResponse(taski.to_json())



def list_tasks(request,pk):
    try:
        list = TaskList.objects.get(id=pk)
    except TaskList.DoesNotExist as e:
        return JsonResponse({'error': str(e)}, safe=False)
    tasks = list.task_set.all()
    json_tasks = [t.to_json() for t in tasks]
    return JsonResponse(json_tasks,safe=False)

