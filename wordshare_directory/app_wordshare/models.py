from django.db import models

from config_wordshare.settings import AUTH_USER_MODEL

class UsersDefinedWord(models.Model):
    word = models.CharField(max_length=45)
    word_definition = models.CharField(max_length=500)
    word_pronounciation = models.CharField(max_length=150)
    word_etymology = models.CharField(max_length=500)
    word_origin_date = models.CharField(max_length=150)
    user = models.ForeignKey(AUTH_USER_MODEL, related_name="words", on_delete=models.CASCADE)
    

    def __str__(self):
        return self.word
