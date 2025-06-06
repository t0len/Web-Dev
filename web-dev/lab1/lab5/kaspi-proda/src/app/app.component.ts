import { Component } from '@angular/core';
import { ProductListComponent } from './components/product-list/product-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ProductListComponent], // Добавляем импорт компонента
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  selectedCategory: string = 'all';
  products = [
    {
      id: 1,
      name: 'Apple iPhone 13',
      description: 'Latest iPhone with A15 Bionic chip.',
      rating: 4.8,
      likes: 0,
      link: 'https://kaspi.kz/shop/p/apple-iphone-13-128gb-sinii-102298364/',
      image: 'https://resources.cdn-kaspi.kz/img/m/p/hba/h2e/64206204993566.jpg?format=gallery-medium',
      gallery: [
        'https://resources.cdn-kaspi.kz/img/m/p/hba/h2e/64206204993566.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/hb8/h32/64206209384478.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/he8/h1c/64206212857886.jpg?format=gallery-medium'
      ],
      category: 'smartphones'
    },
    {
      id: 2,
      name: 'Huawei P40 Pro',
      description: 'Premium smartphone with an excellent camera.',
      rating: 4.3,
      likes: 0,
      link: 'https://kaspi.kz/shop/p/huawei-pura-70-pro-12-gb-512-gb-chernyi-120278768/?c=750000000',
      image: 'https://resources.cdn-kaspi.kz/img/m/p/hc5/haf/86332065447966.jpg?format=gallery-medium',
      gallery: [
        'https://resources.cdn-kaspi.kz/img/m/p/hc5/haf/86332065447966.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/hc6/hde/86302132928542.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h29/h08/86302132994078.jpg?format=gallery-medium'
      ],
      category: 'smartphones'
    },
      {
        id: 3,
        name: 'Xiaomi Redmi Note 11',
        description: 'Affordable smartphone with great performance.',
        rating: 4.4,
        likes: 0,
        link: 'https://kaspi.kz/shop/p/xiaomi-redmi-note-11-6-gb-128-gb-seryi-103995646/?c=750000000',
        image: 'https://resources.cdn-kaspi.kz/img/m/p/hab/hc5/86009679904798.png?format=gallery-medium',
        gallery: [
          'https://resources.cdn-kaspi.kz/img/m/p/hab/hc5/86009679904798.png?format=gallery-medium',
          'https://resources.cdn-kaspi.kz/img/m/p/h27/h45/86009679937566.png?format=gallery-medium',
          'https://resources.cdn-kaspi.kz/img/m/p/hec/h5a/86009679970334.png?format=gallery-medium'
        ],
        category: 'smartphones'
      },
      {
        id: 4,
        name: 'OnePlus 9 Pro',
        description: 'Flagship killer with high-end performance.',
        rating: 4.7,
        likes: 0,
        link: 'https://kaspi.kz/shop/p/oneplus-9-pro-8-256gb-chernyi-101353185/?c=750000000',
        image: 'https://resources.cdn-kaspi.kz/img/m/p/hef/h06/64116512194590.jpg?format=gallery-medium',
        gallery: [
          'data:image/jpeg;base64,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',
          'data:image/jpeg;base64,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',
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxbcnheMZDcHrcboOInH-wxByzKbB-CAu_kg&s'
        ],
        category: 'smartphones'
      },
      {
        id: 5,
        name: 'Oppo Reno 6',
        description: 'Stylish design with powerful features.',
        rating: 4.2,
        likes: 0,
        link: 'https://kaspi.kz/shop/p/oppo-reno-6-8-gb-128-gb-chernyi-102372847/?c=750000000',
        image: 'https://resources.cdn-kaspi.kz/img/m/p/h36/h90/64144398614558.jpg?format=gallery-medium',
        gallery: [
          'https://resources.cdn-kaspi.kz/img/m/p/h36/h90/64144398614558.jpg?format=gallery-medium',
          'https://resources.cdn-kaspi.kz/img/m/p/h46/h95/64144401137694.jpg?format=gallery-medium',
          'https://resources.cdn-kaspi.kz/img/m/p/h5b/hf2/64144406675486.jpg?format=gallery-medium'
        ],
        category: 'smartphones'
      },
      {
        id: 6,
        name: 'Lenovo Legion Phone Duel 2',
        description: 'A gaming smartphone with powerful specs.',
        rating: 4.5,
        likes: 0,
        link: 'https://kaspi.kz/shop/p/lenovo-legion-slim-5-16-32-gb-ssd-1000-gb-bez-os-16ahp9-83dh005rrk-119935984/?c=750000000',
        image: 'https://resources.cdn-kaspi.kz/img/m/p/hd4/hc9/86158174224414.jpg?format=gallery-medium',
        gallery: [
          'https://resources.cdn-kaspi.kz/img/m/p/hd4/hc9/86158174224414.jpg?format=gallery-medium',
          'https://resources.cdn-kaspi.kz/img/m/p/h60/h56/86158174289950.jpg?format=gallery-medium',
          'https://resources.cdn-kaspi.kz/img/m/p/hc8/h7f/86158174355486.jpg?format=gallery-medium'
        ],
        category: 'laptops'
      },
    {
      id: 7,
      name: 'Ноутбук ThundeRobot 911 X',
      description: 'Cool laptop',
      rating: 4.5,
      likes: 0,
      link: 'https://kaspi.kz/shop/p/thunderobot-911-x-wild-hunter-g2-pro-15-6-16-gb-ssd-512-gb-win-11-pro--120386920/?c=750000000',
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h58/h61/86274830073886.jpg?format=gallery-medium',
      gallery: [
        'https://resources.cdn-kaspi.kz/img/m/p/h58/h61/86274830073886.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h39/hca/86274830139422.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h36/h1f/86274830270494.jpg?format=gallery-medium'
      ],
      category: 'laptops'
    },
    {
      id: 8,
      name: 'Ноутбук Apple MacBook Air 13 2022',
      description: 'Cool laptop',
      rating: 4.5,
      likes: 0,
      link: 'https://kaspi.kz/shop/p/apple-macbook-air-13-2022-13-6-8-gb-ssd-256-gb-macos-mlxw3-105933794/?c=750000000',
      image: 'https://resources.cdn-kaspi.kz/img/m/p/hf4/h52/64509322919966.jpg?format=gallery-medium',
      gallery: [
        'https://resources.cdn-kaspi.kz/img/m/p/hf4/h52/64509322919966.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h39/hca/86274830139422.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h36/h1f/86274830270494.jpg?format=gallery-medium'
      ],
      category: 'laptops'
    },
    {
      id: 9,
      name: 'Ноутбук Lenovo IdeaPad 3 15.6',
      description: 'Cool laptop',
      rating: 4.5,
      likes: 0,
      link: 'https://kaspi.kz/shop/p/lenovo-ideapad-3-15-6-4-gb-ssd-256-gb-bez-os-15igl05-81wq00emrk-102878742/?c=750000000',
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h89/haa/64373052571678.jpg?format=gallery-medium',
      gallery: [
        'https://resources.cdn-kaspi.kz/img/m/p/h89/haa/64373052571678.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h5d/h65/64373055684638.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h06/h47/64373056897054.jpg?format=gallery-medium'
      ],
      category: 'laptops'
    },
    {
      id: 10,
      name: 'Ноутбук Acer Aspire 3 15.6',
      description: 'Cool laptop',
      rating: 4.5,
      likes: 0,
      link: 'https://kaspi.kz/shop/p/acer-aspire-3-15-6-8-gb-ssd-256-gb-win-11-a315-35-nx-a9aex-00h-114792265/?c=750000000',
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h0d/hc8/84558388887582.jpg?format=gallery-medium',
      gallery: [
        'https://resources.cdn-kaspi.kz/img/m/p/h0d/hc8/84558388887582.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h8f/h39/84558388953118.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/hf4/h3e/84558389018654.jpg?format=gallery-medium'
      ],
      category: 'laptops'
    },
    {
      id: 11,
      name: 'Пылесос Deerma DX700"',
      description: 'cool thing',
      rating: 4.8,
      likes: 0,
      link: 'https://kaspi.kz/shop/p/deerma-dx700-belyi-3701383/?c=750000000',
      image: 'https://resources.cdn-kaspi.kz/img/m/p/hdb/h2f/63803859566622.jpg?format=gallery-medium',
      gallery: [
        'https://resources.cdn-kaspi.kz/img/m/p/hdb/h2f/63803859566622.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/hd3/h67/63803862581278.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h20/he1/63803865792542.jpg?format=gallery-medium'
      ],
      category: 'equipment'
    },
    {
      id: 12,
      name: 'Электрочайник BEREKE BR-810',
      description: 'cool thing',
      rating: 4.2,
      likes: 0,
      link: 'https://kaspi.kz/shop/p/elektrochainik-bereke-br-810-seryi-109981423/?c=750000000',
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h08/hde/80282292781086.jpg?format=gallery-medium',
      gallery: [
        'https://resources.cdn-kaspi.kz/img/m/p/h08/hde/80282292781086.jpg?format=gallery-medium'
      ],
      category: 'equipment'
    },
    {
      id: 13,
      name: 'Блендер Slaouwo HB-2075 черный',
      description: 'cool thing',
      rating: 4.1,
      likes: 0,
      link: 'https://kaspi.kz/shop/p/slaouwo-hb-2075-chernyi-108151055/?c=750000000',
      image: 'https://resources.cdn-kaspi.kz/img/m/p/hfe/ha1/67141660606494.jpg?format=gallery-medium',
      gallery: [
        'https://resources.cdn-kaspi.kz/img/m/p/hfe/ha1/67141660606494.jpg?format=gallery-medium'
      ],
      category: 'equipment'
    },
    {
      id: 14,
      name: 'Стиральная машина LG F2J3NS0W',
      description: 'cool thing',
      rating: 4.1,
      likes: 0,
      link: 'https://kaspi.kz/shop/p/lg-f2j3ns0w-belyi-3601511/?c=750000000',
      image: 'https://resources.cdn-kaspi.kz/img/m/p/hd4/h94/63804412854302.jpg?format=gallery-medium',
      gallery: [
        'https://resources.cdn-kaspi.kz/img/m/p/hd4/h94/63804412854302.jpg?format=gallery-medium'
      ],
      category: 'equipment'
    },
    {
      id: 15,
      name: 'Микроволновая печь AVA MMWO-2070B',
      description: 'cool thing',
      rating: 4.1,
      likes: 0,
      link: 'https://kaspi.kz/shop/p/ava-mmwo-2070b-chernyi-117793364/?c=750000000',
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h90/hd8/85539374170142.jpg?format=gallery-medium',
      gallery: [
        'https://resources.cdn-kaspi.kz/img/m/p/h90/hd8/85539374170142.jpg?format=gallery-medium'
      ],
      category: 'equipment'
    },
    {
      id: 16,
      name: 'Morbido диван прямой Комфорт',
      description: 'cool furniture',
      rating: 4.1,
      likes: 0,
      link: 'https://kaspi.kz/shop/p/morbido-divan-prjamoi-komfort-obivka-mikroveljur-80h210h80-sm-seryi-109382996/?c=750000000',
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h9b/h48/86777038274590.png?format=gallery-medium',
      gallery: [
        'https://resources.cdn-kaspi.kz/img/m/p/h9b/h48/86777038274590.png?format=gallery-medium'
      ],
      category: 'furniture'
    },
    {
      id: 17,
      name: 'Стул Чили',
      description: 'cool furniture',
      rating: 4.1,
      likes: 0,
      link: 'https://kaspi.kz/shop/p/stul-chili-86x45x37-sm-obivka-seryi-veljur-109319431/?c=750000000',
      image: 'https://resources.cdn-kaspi.kz/img/m/p/hcf/h3b/85982139088926.jpg?format=gallery-medium',
      gallery: [
        'https://resources.cdn-kaspi.kz/img/m/p/hcf/h3b/85982139088926.jpg?format=gallery-medium'
      ],
      category: 'furniture'
    },
    {
      id: 18,
      name: 'Матрас Ортопед без пружин',
      description: 'cool furniture',
      rating: 4.1,
      likes: 0,
      link: 'https://kaspi.kz/shop/p/matras-ortoped-bez-pruzhin-160x200x22-sm-chehol-viskoza-zhakkard-115839796/?c=750000000',
      image: 'https://resources.cdn-kaspi.kz/img/m/p/hb1/hea/84870309380126.png?format=gallery-medium',
      gallery: [
        'https://resources.cdn-kaspi.kz/img/m/p/hb1/hea/84870309380126.png?format=gallery-medium'
      ],
      category: 'furniture'
    },
    {
      id: 19,
      name: 'стол письменный',
      description: 'cool furniture',
      rating: 4.7,
      likes: 0,
      link: 'https://kaspi.kz/shop/p/stol-pis-mennyi-s-nadstroikoi-40x114x140-sm-stolpis002-106541589/?c=750000000',
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h82/h95/85993320710174.jpg?format=gallery-medium',
      gallery: [
        'https://resources.cdn-kaspi.kz/img/m/p/h82/h95/85993320710174.jpg?format=gallery-medium'
      ],
      category: 'furniture'
    },
    {
      id: 20,
      name: 'Стеллаж напольный Abuer',
      description: 'cool furniture',
      rating: 4.7,
      likes: 0,
      link: 'https://kaspi.kz/shop/p/stellazh-napol-nyi-abuer-66x31x132-sm-belyi-104771353/?c=750000000',
      image: 'https://resources.cdn-kaspi.kz/img/m/p/had/hfe/85358048673822.jpg?format=gallery-medium',
      gallery: [
        'https://resources.cdn-kaspi.kz/img/m/p/had/hfe/85358048673822.jpg?format=gallery-medium'
      ],
      category: 'furniture'
    },
  ];


  getFilteredProducts() {
    if (this.selectedCategory === 'all') {
      return this.products;
    }
    return this.products.filter(p => p.category === this.selectedCategory);
  }

  selectCategory(category: string): void {
    this.selectedCategory = category;
  }
}
