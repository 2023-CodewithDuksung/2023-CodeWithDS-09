# from django.db import models

# # Create your models here.
# class User(models.Model):
#     email = models.EmailField(verbose_name='이메일', unique=True)
#     name = models.CharField(verbose_name='이름', max_length=10, null=False)
#     phone = models.CharField(verbose_name='연락처', max_length=11, null=True, blank=True)

#     class Meta:
#         verbose_name = '유저'
#         verbose_name_plural = verbose_name

#     def __str__(self):
#         return self.email


from django.db import models
from django.contrib.auth.models import AbstractBaseUser, BaseUserManager, PermissionsMixin

# 헬퍼 클래스
class UserManager(BaseUserManager):
    def create_user(self, email, password, **kwargs):
        """
        주어진 이메일, 비밀번호 등 개인정보로 User 인스턴스 생성
        """
        if not email:
            raise ValueError('Users must have an email address')
        user = self.model(
            email=email,
        )
        user.set_password(password)
        user.save(using=self._db)
        return user

    def create_superuser(self, email=None, password=None, **extra_fields):
        """
        주어진 이메일, 비밀번호 등 개인정보로 User 인스턴스 생성
        단, 최상위 사용자이므로 권한을 부여
        """
        superuser = self.create_user(
            email=email,
            password=password,
        )
        
        superuser.is_staff = True
        superuser.is_superuser = True
        superuser.is_active = True
        
        superuser.save(using=self._db)
        return superuser

# AbstractBaseUser를 상속해서 유저 커스텀
class User(AbstractBaseUser, PermissionsMixin):
    
    email = models.EmailField(max_length=30, unique=True, null=False, blank=False)
    is_superuser = models.BooleanField(default=False)
    is_active = models.BooleanField(default=True)
    is_staff = models.BooleanField(default=False)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

	# 헬퍼 클래스 사용
    objects = UserManager()

	# 사용자의 username field는 email으로 설정 (이메일로 로그인)
    USERNAME_FIELD = 'email'
    
    groups = models.ManyToManyField(
        'auth.Group',  # auth 앱의 Group 모델과 관계 설정
        related_name='custom_user_groups',  # 관련 이름 변경
        related_query_name='user',
    )
    user_permissions = models.ManyToManyField(
        'auth.Permission',  # auth 앱의 Permission 모델과 관계 설정
        related_name='custom_user_permissions',  # 관련 이름 변경
        related_query_name='user',
    )
    
