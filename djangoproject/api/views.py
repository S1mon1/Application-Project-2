from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.decorators import api_view
from .models import Offers
from .serializers import OfferSerializer
from rest_framework import status

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
def getOffers(request):
    offers = Offers.objects.all()
    serializer = OfferSerializer(offers, many=True)
    return Response(serializer.data)

@api_view(['GET'])
def getOffer(request, pk):
    offers = Offers.objects.get(id=pk)
    serializer = OfferSerializer(offers, many=False)
    return Response(serializer.data)



@api_view(['POST'])
def createOffer(request):
    data = request.data
    offer = Offers.objects.create(
        model=data['model']
    )
    serializer = OfferSerializer(offer, many=False)
    return Response(serializer.data)