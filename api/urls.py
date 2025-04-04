from django.urls import path
<<<<<<< HEAD
from . import views

urlpatterns = [
    path('companies/', views.company_list),
    path('companies/<int:id>/', views.company_detail),
    path('companies/<int:id>/vacancies/', views.company_vacancies),
    path('vacancies/', views.vacancy_list),
    path('vacancies/<int:id>/', views.vacancy_detail),
    path('vacancies/top_ten/', views.top_ten_vacancies),
]
=======
from .views import ProductList, ProductDetail, CategoryList, CategoryDetail, ProductsByCategory

urlpatterns = [
    path('products/', ProductList.as_view(), name='product-list'),
    path('products/<int:pk>/', ProductDetail.as_view(), name='product-detail'),
    path('categories/', CategoryList.as_view(), name='category-list'),
    path('categories/<int:pk>/', CategoryDetail.as_view(), name='category-detail'),
    path('categories/<int:id>/products/', ProductsByCategory.as_view(), name='products-by-category'),
]
>>>>>>> 685617dd58c859c29746fd2bc1631de26178306f
