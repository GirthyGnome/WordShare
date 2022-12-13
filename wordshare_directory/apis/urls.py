from rest_framework.routers import DefaultRouter

from . import views

router = DefaultRouter()
router.register('words', views.UserDefinedWordViewSet, basename='words'),
router.register('users', views.UserViewSet, basename='users')


urlpatterns = router.urls + [
    
]
