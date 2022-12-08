from django.urls import path
from . import views

app_name = 'app_wordshare'

urlpatterns = [
    path('', views.index, name='home')
]
