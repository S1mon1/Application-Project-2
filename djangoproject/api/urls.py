from django.urls import path
from . import views

urlpatterns = [
    path('', views.getRoutes, name="routes"),
    path('offers/', views.getOffers, name="offers"),
    path('offer/new/', views.createOffer, name="create-offer"),
    path('offers/<str:pk>/', views.getOffer, name="offer"),
    path('offer/<str:pk>/delete/', views.deleteOffer, name="delete-offer")
]