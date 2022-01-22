from django.db import models
from rest_framework import serializers


class PostMortem(models.Model):
    name = models.CharField(max_length=255)
    date = models.DateField(auto_now_add=True)

    def __str__(self):
        return self.name


class PostMortemSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = PostMortem
        fields = ['name', 'date']


class PostMortemLog(models.Model):
    message = models.TextField(default=None)
    author = models.CharField(max_length=255, null=True, default=None)
    datetime = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.datetime.strftime('%Y-%m-%d %H:%M:%S') + " - " + self.message


class PostMortemLogSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = PostMortemLog
        fields = ['message', 'author', 'datetime']
