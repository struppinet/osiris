from django.contrib import admin
from .models import PostMortem, PostMortemLog


@admin.register(PostMortem)
class PostMortemAdmin(admin.ModelAdmin):
    search_fields = ['name']
    pass


admin.site.register(PostMortemLog)
