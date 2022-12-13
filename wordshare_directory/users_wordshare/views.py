from django.urls import reverse_lazy, reverse
from django.views.generic.edit import CreateView
from django.views.generic import DetailView
from . models import CustomUser
from django.shortcuts import get_object_or_404, render

from .forms import CustomUserCreationForm

class SignUpView(CreateView):
    form_class = CustomUserCreationForm
    success_url = reverse_lazy('login')
    template_name = 'registration/signup.html'

class UserProfileView(DetailView):
    model = CustomUser
    context_object_name = 'user_profile'
    template_name = 'user_profile.html'

    def get_object(self):
        return get_object_or_404(CustomUser, username=self.kwargs['username'])

def user_profile(request, username):
    user_profile = get_object_or_404(CustomUser, username=username)
    context = {'user_profile': user_profile}
    return render(request, 'user_profile.html', context)