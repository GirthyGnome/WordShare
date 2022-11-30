from django.db import models

class UserSavedWords(models.Model):
    word = models.CharField(max_length=45)
    word_pronounciation = models.CharField(max_length=50)
    word_origin = models.CharField(max_length=30)
    word_origin_date = models.CharField(max_length=30)
    word_definition = models.CharField(max_length=200)

