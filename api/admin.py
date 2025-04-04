from django.contrib import admin
<<<<<<< HEAD
from .models import Company, Vacancy

admin.site.register(Company)
admin.site.register(Vacancy)
=======
from .models import Product, Category

@admin.register(Category)
class CategoryAdmin(admin.ModelAdmin):
    list_display = ['id', 'name']
    search_fields = ['name']

@admin.register(Product)
class ProductAdmin(admin.ModelAdmin):
    list_display = ['id', 'name', 'price', 'count', 'is_active', 'category']
    list_filter = ['is_active', 'category']
    search_fields = ['name', 'description']
>>>>>>> 685617dd58c859c29746fd2bc1631de26178306f
