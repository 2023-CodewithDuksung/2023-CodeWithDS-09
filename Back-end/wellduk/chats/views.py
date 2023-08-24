from rest_framework import viewsets, status
from rest_framework.response import Response
from .models import Chat
import openai
from .serializers import *
openai.api_key = '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'

class ChatViewSet(viewsets.ModelViewSet):
    queryset = Chat.objects.all()
    serializer_class = ChatSerializer

    def create(self, request, *args, **kwargs):
        user_input = request.data.get('user_input', '')
        gpt_response = self.generate_gpt_response(user_input)
        
        serializer = self.get_serializer(data={'user_input': user_input, 'gpt_response': gpt_response})
        serializer.is_valid(raise_exception=True)
        serializer.save()
        
        return Response(serializer.data, status=status.HTTP_201_CREATED)

    def generate_gpt_response(self, user_input):
        prompt = f'{user_input}'
        
        response = openai.ChatCompletion.create(
            model="gpt-3.5-turbo",  
            messages=[{
                'role': 'user', 'content': prompt
            }]
        )
        
        print(response)  # 응답 객체 전체를 출력하여 구조를 확인
        
        return response.choices[0].message['content'].strip()

