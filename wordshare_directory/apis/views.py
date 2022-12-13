from rest_framework import viewsets
from django.contrib.auth import get_user_model


from app_wordshare.models import UsersDefinedWord
from .serializers import UserDefinedWordSerializer, UserSerializer


class UserDefinedWordViewSet(viewsets.ModelViewSet):
    queryset = UsersDefinedWord.objects.all()
    serializer_class = UserDefinedWordSerializer

class UserViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = get_user_model().objects.all()
    serializer_class = UserSerializer



