from django.urls import path
from . import views
from drf_yasg.views import get_schema_view
from drf_yasg import openapi
from rest_framework import permissions


schema_view = get_schema_view(
    openapi.Info(
        title="API Documentation",
        default_version='v1',
        description="API documentation for your project",
    ),
    public=True,
    permission_classes=(permissions.AllowAny,),
)

urlpatterns = [
    path('swagger/', schema_view.with_ui('swagger', cache_timeout=0), name='schema-swagger-ui'),
    path('', views.getRoutes, name="routes"),
    path('offers/', views.getOffers, name="offers"),
    path('offer/new/', views.createOffer, name="create-offer"),
    path('offers/<str:pk>/', views.getOffer, name="offer"),
    path('offer/<str:pk>/delete/', views.deleteOffer, name="delete-offer")
]