from django.urls import path, re_path
from . import views, consumers


urlpatterns = [
    path('', views.index, name='index'),
    path('<str:room_name>/', views.chat, name='chat'),
]

websocket_urlpatterns = [
    re_path(r'ws/chat/(?P<room_name>\w+)/$', consumers.ChatConsumer.as_asgi()),
]
