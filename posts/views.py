from django.shortcuts import render
from django.http import HttpResponse, Http404, JsonResponse

from .models import Post

def home_view(request, *args, **kwargs):
    #return HttpResponse("<h1> hi </h1>")
    return render(request, "pages/home.html", context={}, status=200)

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
   
