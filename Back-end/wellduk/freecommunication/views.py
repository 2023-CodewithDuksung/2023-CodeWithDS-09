from django.shortcuts import render
from .models import *
from .serializers import *
from rest_framework.generics import RetrieveUpdateDestroyAPIView, ListAPIView, RetrieveAPIView, CreateAPIView, UpdateAPIView, GenericAPIView, ListCreateAPIView
from rest_framework.response import Response
from rest_framework import status
from .permissions import CustomReadOnly
from rest_framework.viewsets import ModelViewSet
from datetime import datetime
from rest_framework.permissions import IsAuthenticated

# 소통해요 글 리스트 보기, 소통해요 글 생성하기, 글 상세보기, 수정하기, 삭제하기
class PostModelViewSet(ModelViewSet):
    queryset=Post.objects.all()
    permission_classes=[CustomReadOnly]

    # 시리얼라이저 선택
    def get_serializer_class(self):
        # get 요청일 경우 (리스트를 조회하는 우)
        if self.action=='list':
            return PostListSerializer
        elif self.action=='retrieve':
            return PostRetreiveSerializer
        else:
            return PostCreateSerializer
        
    def create(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)

        # author 필드를 유효성 검사 이후 따로 넣어줘야 함 
        serializer.validated_data['author'] = request.user

        self.perform_create(serializer)
        headers = self.get_success_headers(serializer.data)
        return Response(serializer.data, status=status.HTTP_201_CREATED, headers=headers)

    # 전체 경로 말고, 이미지 경로만 나오도록 
    def get_serializer_context(self):
        return {
            'request': None,
            'format': self.format_kwarg,
            'view': self
        }
    
# 소통해요 게시물에 답글 달기, 
class CommentModelViewSet(ModelViewSet):
    queryset = Comment.objects.all()
    # 애초에 로그인 한 사용자만 사용 가능 
    permission_classes = [IsAuthenticated] 
    
    def get_serializer_class(self):
        if self.request.method in ['GET', 'RETRIEVE']:
            return CommentListRetrieveSerializer
        else:
            return GuestCreateUpdateSerializer
    def list(self, request, *args, **kwargs):
        return Response(status=status.HTTP_404_NOT_FOUND)

    def create(self, request,post_pk, *args, **kwargs):
        post_pk = Post.objects.get(id=post_pk)  # URL에서 게시물의 ID를 가져옴
        
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)

        # author 필드를 유효성 검사 이후 따로 넣어줘야 함 
        serializer.validated_data['author'] = request.user
        serializer.validated_data['post'] = post_pk  # 게시물의 ID를 post 필드에 저장

        self.perform_create(serializer)
        headers = self.get_success_headers(serializer.data)
        return Response(serializer.data, status=status.HTTP_201_CREATED, headers=headers)