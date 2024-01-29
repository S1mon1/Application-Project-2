from rest_framework.serializers import ModelSerializer
from .models import Offers

class OfferSerializer(ModelSerializer):
    class Meta:
        model = Offers
        fields = '__all__'