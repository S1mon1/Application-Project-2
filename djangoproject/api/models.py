from django.db import models

# Create your models here.

class Offers(models.Model):
    brand = models.TextField()
    model = models.TextField()
    description = models.TextField()
    image = models.ImageField(null=True, blank=True)

    def __str__(self):
        return self.brand

    class Meta:
        db_table = 'offers'