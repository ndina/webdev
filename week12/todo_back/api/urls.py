from django.urls import path, re_path
from . import views

urlpatterns = [
    path('api/task_lists/', views.task_lists),
    path('api/task_lists/<int:pk>/', views.get_task_list),
    path('api/task_lists/<int:pk>/tasks/', views.list_tasks),
]

