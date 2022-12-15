from rest_framework import serializers
from django.contrib.auth import get_user_model

from app_wordshare.models import UsersDefinedWord


class UserDefinedWordSerializer(serializers.ModelSerializer):

    class Meta:
        model = UsersDefinedWord
        fields = (
            "word",
            "word_definition",
            "word_pronounciation",
            "word_etymology",
            "word_origin_date",
            "user",
        )

class UserSerializer(serializers.ModelSerializer):
    words_detail = UserDefinedWordSerializer(many=True, read_only=True, source='words')

    class Meta:
        model = get_user_model()
        fields = ('id', 'username', 'words_detail')




