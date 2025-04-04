from django.db import models

<<<<<<< HEAD
class Company(models.Model):
    name = models.CharField(max_length=255)
    description = models.TextField()
    city = models.CharField(max_length=100)
    address = models.TextField()
=======
class Category(models.Model):
    name = models.CharField(max_length=100)
>>>>>>> 685617dd58c859c29746fd2bc1631de26178306f

    def __str__(self):
        return self.name

<<<<<<< HEAD
class Vacancy(models.Model):
    name = models.CharField(max_length=255)
    description = models.TextField()
    salary = models.FloatField()
    company = models.ForeignKey(Company, on_delete=models.CASCADE, related_name='vacancies')

    def __str__(self):
        return self.name
=======
class Product(models.Model):
    name = models.CharField(max_length=200)
    price = models.FloatField()
    description = models.TextField()
    count = models.IntegerField()
    is_active = models.BooleanField(default=True)
    category = models.ForeignKey(Category, on_delete=models.CASCADE, related_name="products")

    def __str__(self):
        return self.name
>>>>>>> 685617dd58c859c29746fd2bc1631de26178306f
