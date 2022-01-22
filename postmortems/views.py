from django.http import HttpResponse
from django.template import loader
from rest_framework import viewsets
from rest_framework import permissions

from postmortems.models import PostMortem, PostMortemSerializer, PostMortemLog, PostMortemLogSerializer


def index(request):
    template = loader.get_template('index.html')
    return HttpResponse(template.render(request=request))


class PostMortemViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows Post Mortems to be viewed or edited.
    """
    queryset = PostMortem.objects.all().order_by('-date')
    serializer_class = PostMortemSerializer
    permission_classes = [permissions.IsAuthenticated]


class PostMortemLogViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows Post Mortem Logs to be viewed or edited.
    """
    queryset = PostMortemLog.objects.all()
    serializer_class = PostMortemLogSerializer
    permission_classes = [permissions.IsAuthenticated]
