from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.decorators import api_view
from .models import Offers

# Create your views here.

@api_view(['GET'])
def getRoutes(request):

    routes = [
        {
            'Endpoint': '/offers/',
            'method': 'GET',
            'body': None,
            'description': 'Returns an offers'
        },
        {
            'Endpoint': '/offers/id',
            'method': 'GET',
            'body': None,
            'description': 'Returns a single offer'
        },
        {
            'Endpoint': '/offers/create/',
            'method': 'POST',
            'body': {'body': ""},
            'description': 'Creates new offer with data sent in post request'
        },
        {
            'Endpoint': '/offers/id/delete/',
            'method': 'DELETE',
            'body': None,
            'description': 'Deletes and exiting offer'
        },
    ]

    return Response(routes)


@api_view(['GET'])
def getOffers(reques):
    offer = Offers.objects.all()
    return Response('OFFERS')