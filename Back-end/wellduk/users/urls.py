from django.urls import path, include, re_path
from .views import LoginView
from .views import *

from dj_rest_auth.registration.views import VerifyEmailView
from dj_rest_auth.registration.views import RegisterView
from dj_rest_auth.views import LogoutView, UserDetailsView

# api/user/
urlpatterns = [
    path("register/", RegisterView.as_view(), name="rest_register"),
    path("login/", LoginView.as_view(), name="rest_login"),
    path("logout/", LogoutView.as_view(), name="rest_logout"),
    path('logins', AuthUserLoginView.as_view(), name='login'),
    # path("user/", UserDetailsView.as_view(), name="rest_user_details"),
    # 일반 회원 회원가입/로그인
    path('dj/', include('dj_rest_auth.urls')),
    # path('dj-rest-auth/registration/', include('dj_rest_auth.registration.urls')),
    
    # 유효한 이메일이 유저에게 전달
    re_path(r'^account-confirm-email/$', VerifyEmailView.as_view(), name='account_email_verification_sent'),
    # 유저가 클릭한 이메일(=링크) 확인
    re_path(r'^account-confirm-email/(?P<key>[-:\w]+)/$', ConfirmEmailView.as_view(), name='account_confirm_email'),
]