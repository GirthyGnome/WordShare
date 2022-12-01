from django.shortcuts import render
from django.http import HttpResponse

def index(request):
    return render(request, 'app_wordshare/index.html')