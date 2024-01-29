from django.urls import path
from . import views

urlpatterns = [
    path('', views.getRoutes, name="routes"),
    path('offers/', views.getOffers, name="offers"),
    path('offers/<str:pk>/', views.getOffer, name="offer")
]