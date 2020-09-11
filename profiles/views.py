from django.shortcuts import render, redirect
from django.contrib.auth import login, logout, authenticate
from django.contrib.auth.forms import AuthenticationForm, UserCreationForm



def login_view(request, *args, **kwargs):
    form = AuthenticationForm(request, data=request.POST or None)
    if form.is_valid():
        user_ = form.get_user()
        login(request, user_)
        return redirect("/")
    context = {
        "form": form,
        "description": "If you do not have an account yet, use the register button at the top. Do not worry, you will not need to provide your email.",
        "btn_label": "Login",
        "title": "Login"
    }
    return render(request, "profiles/auth.html", context)

def logout_view(request, *args, **kwargs):
    if request.method == "POST":
        logout(request)
        return redirect("/")
    context = {
        "form": None,
        "description": "Are you sure you want to logout and go back to the main page? If you wish to login again, click the login button at the top.",
        "btn_label": "Click to Confirm",
        "title": "Logout"
    }
    return render(request, "profiles/auth.html", context)


def register_view(request, *args, **kwargs):
    form = UserCreationForm(request.POST or None)
    if form.is_valid():
        user = form.save(commit=True)
        login(request, user)
        return redirect("/login")
    context = {
        "form": form,
        "btn_label": "Register",
        "title": "Register"
    }
    return render(request, "profiles/auth.html", context)