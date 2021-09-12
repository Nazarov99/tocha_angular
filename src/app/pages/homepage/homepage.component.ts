import {ChangeDetectorRef, Component, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {SwiperComponent} from "swiper/angular";
import SwiperCore, {Navigation, Pagination, Scrollbar, A11y, Virtual, Zoom, Autoplay, Thumbs, Controller} from 'swiper';
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Virtual, Zoom, Autoplay, Thumbs, Controller]);

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {
  @ViewChild("swiperRef", { static: false }) swiperRef?: SwiperComponent;
  @ViewChild("swiperRefStep", { static: false }) swiperRefStep?: SwiperComponent;
  @ViewChild("swiperRefClient", { static: false }) swiperRefClient?: SwiperComponent;
  formEmail: FormGroup;
  scrollbar: any = false;
  configTariff = {
    navigation: false,
    allowSlidePrev: false,
    allowSlideNext: false,
    loop: false,
    pagination: {
      clickable: true,
    },
    breakpoints: {
      360: {
        slidesPerView: 1,
        spaceBetween: 10,
        allowSlidePrev: true,
        allowSlideNext: true,
      },
      480: {
        slidesPerView: 1,
        spaceBetween: 10,
        allowSlidePrev: true,
        allowSlideNext: true,
        loop: false,
      },
      575: {
        slidesPerView: 1,
        spaceBetween: 15,
        allowSlidePrev: true,
        allowSlideNext: true,
        loop: false,
      },
      640: {
        slidesPerView: 1,
        spaceBetween: 20,
        allowSlidePrev: true,
        allowSlideNext: true,
        loop: false,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 25 ,
        allowSlidePrev: true,
        allowSlideNext: true,
        loop: false,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 30,
        allowSlidePrev: false,
        allowSlideNext: false,
        loop: false,
      },
    },
  };
  configSteps = {
    navigation: false,
    loop: false,
    allowSlidePrev: false,
    allowSlideNext: false,
    pagination: {
      clickable: true
    },
    breakpoints: {
      360: {
        slidesPerView: 1.5,
        spaceBetween: 0,
        allowSlidePrev: true,
        allowSlideNext: true,
      },
      480: {
        slidesPerView: 2,
        spaceBetween: 0,
        allowSlidePrev: true,
        allowSlideNext: true,
        loop: false,
      },
      414: {
        slidesPerView: 1.8,
        spaceBetween: 5,
        allowSlidePrev: true,
        allowSlideNext: true,
        loop: false,
      },
      575: {
        slidesPerView: 2,
        spaceBetween: 5,
        allowSlidePrev: true,
        allowSlideNext: true,
        loop: false,
      },
      640: {
        slidesPerView: 2.5,
        spaceBetween: 10,
        allowSlidePrev: true,
        allowSlideNext: true,
        loop: false,
      },
      744: {
        slidesPerView: 3,
        spaceBetween: 10,
        allowSlidePrev: true,
        allowSlideNext: true,
        loop: false,
      },
      767: {
        slidesPerView: 3,
        spaceBetween: 15 ,
        allowSlidePrev: false,
        allowSlideNext: false,
        loop: false,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 30,
        allowSlidePrev: false,
        allowSlideNext: false,
        loop: false,
      },
    },
  };
  configClient = {
    navigation: false,
    loop: false,
    pagination: {
      clickable: true
    },
    breakpoints: {
      360: {
        slidesPerView: 1,
        spaceBetween: 10,
        loop: false,
      },
      480: {
        slidesPerView: 1,
        spaceBetween: 10,
        loop: false,
      },
      575: {
        slidesPerView: 1,
        spaceBetween: 20,
        loop: false,
      },
      640: {
        slidesPerView: 1,
        spaceBetween: 25,
        loop: false,
      },
      768: {
        slidesPerView: 1.5,
        spaceBetween: 30,
        loop: false,
      },
      992: {
        slidesPerView: 1.5,
        spaceBetween: 35,
        loop: false,
      },
      1024: {
        slidesPerView: 2,
        spaceBetween: 40,
        loop: false,
      },
    },
  };
  slides = [
    {
      name: 'Бесплатно',
      text: 'Пробный период на 1 месяц',
      pricePer: '0₽/первый месяц',
      connect: 'Подключить за 0₽'
    },
    {
      name: 'Базовый',
      text: 'Менее 1000 посещений в сутки',
      pricePer: '200₽/месяц',
      connect: 'Подключить за 0₽'
    },
    {
      name: 'Премиум',
      text: 'Более 1000 посещений в сутки',
      pricePer: '500₽/месяц',
      connect: 'Подключить за 500₽'
    },
  ];
  steps = [
    {
      number: 1,
      name: 'Telegram bot',
      text: 'Вы создаёте Telegram бота для вашего сайта',
      img: 'assets/images/t1.png'
    },
    {
      number: 2,
      name: 'Подключение Tocha',
      text: 'Tocha подключает Telegram бота к вашиму сайту',
      img: 'assets/images/t2.png'
    },
    {
      number: 3,
      name: 'Telegram-чат',
      text: 'Консультант отвечает на вопросы посетителей сайта',
      img: 'assets/images/t3.png'
    }
  ];
  reviews = [
    {
      title: 'Как же удобно!',
      text: 'В рамках спецификации современных стандартов, базовые сценарии поведения пользователей, которые представляют собой яркий пример континентально-европейского типа политической культуры, будут преданы социально-демократической анафеме.',
      image: '/assets/images/ava1.png',
      name: 'Анна Купер',
      site: 'romashka.ru'
    },
    {
      title: 'Теперь мы идем в ногу со временем',
      text: 'А ещё интерактивные прототипы превращены в посмешище, хотя само их существование приносит несомненную пользу обществу. Банальные, но неопровержимые выводы, а также тщательные исследования конкурентов формируют сеть.',
      image: '/assets/images/ava2.png',
      name: 'Андрей Васильев',
      site: 'samogon-ont.ru'
    },
    {
      title: 'Как же удобно!',
      text: 'В рамках спецификации современных стандартов, базовые сценарии поведения пользователей, которые представляют собой яркий пример континентально-европейского типа политической культуры, будут преданы социально-демократической анафеме.',
      image: '/assets/images/ava1.png',
      name: 'Анна Купер',
      site: 'romashka.ru'
    },
  ];

  constructor(private fb: FormBuilder,
              private cd:   ChangeDetectorRef) { }

  ngOnInit(): void {
    this.initEmail();
    this.scrollbar = { draggable: false };
  }

  initEmail() {
    this.formEmail = this.fb.group({
      email: ["", [Validators.required]],
    });
  }
}
