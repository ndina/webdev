from django.urls import path, re_path
from api import views

# FOR DRF
# urlpatterns = [
#     path('api/task_lists/', views.task_lists),
#     path('api/task_lists/<int:pk>/', views.get_task_list),
#     path('api/task_lists/<int:pk>/tasks/', views.list_tasks),
# ]


# FOR CBV
# urlpatterns = [
#     path('api/task_lists/', views.Task_List.as_view()),
#     path('api/task_lists/<int:pk>/', views.TaskDetail.as_view()),
#     path('api/users', views.UserList.as_view()),
#
#     # path('api/task_lists/<int:pk>/tasks/', views.ListTasks.as_view()),
# ]

urlpatterns = [
    path('api/users/', views.UserList.as_view()),
    path('api/login/', views.login),
    path('api/logout/', views.logout),
    path('api/task_lists/', views.Task_List.as_view()),
    path('api/task_lists/<int:pk>/', views.TaskDetail.as_view()),
    path('api/task_lists/<int:pk>/tasks/', views.SubTasks.as_view()),

]



