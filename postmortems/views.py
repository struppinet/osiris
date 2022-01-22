from django.http import HttpResponse


def index(request):
    return HttpResponse("Hello, world. You're at the postmortems index. Wer bist den du?")
