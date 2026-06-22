(() => {
  const swiper1 = new Swiper('#es-rc .es-swiper', {
    loop: true,
    autoHeight: true,
    navigation: {
      nextEl: '#es-rc .es-swiper-button-next',
      prevEl: '#es-rc .es-swiper-button-prev',
    },
    pagination: {
      el: '#es-rc .es-swiper-pagination',
    },
  })

  const swiper2 = new Swiper('#es-rc .es-swiper-cross', {
    loop: true,
    autoHeight: true,
    navigation: {
      nextEl: '#es-rc .es-swiper-cross-button-next',
      prevEl: '#es-rc .es-swiper-cross-button-prev',
    },
    pagination: {
      el: '#es-rc .es-swiper-cross-pagination',
    },
  })
})()
