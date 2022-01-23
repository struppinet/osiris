from django.shortcuts import render


def index(request):
    return render(request, 'rooms.html')


def chat(request, room_name):
    return render(request, 'chat.html', {
        'room_name': room_name
    })
