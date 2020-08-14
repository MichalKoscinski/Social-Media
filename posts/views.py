import random
from django.shortcuts import render
from django.http import HttpResponse, Http404, JsonResponse

from .models import Post
from .forms import PostForm

def home_view(request, *args, **kwargs):
    #return HttpResponse("<h1> hi </h1>")
    return render(request, "pages/home.html", context={}, status=200)

def post_create_view(request, *args, **kwargs):
    form = PostForm(request.POST or None)
    if form.is_valid():
        obj = form.save(commit=False)
        obj.save()
        form = PostForm()
    return render(request, 'components/form.html', context={"form:": form})


def post_list_view(request, *args, **kwargs):
    qs = Post.objects.all()
    posts_list = [{"id": x.id, "content": x.content, "likes": random.randint(0, 122)} for x in qs]
    data = {
         "isUser": False,
        "response": posts_list
    }
    return JsonResponse(data )

def post_detail_view(request, post_id, *args, **kwargs):

    data = {
        "id": post_id,
    }
    status = 200

    try:
        obj = Post.objects.get(id=post_id)
        data['content'] = obj.content
    except: 
        data['message'] = "not found"
        status = 404

    return JsonResponse(data, status=status)
   
