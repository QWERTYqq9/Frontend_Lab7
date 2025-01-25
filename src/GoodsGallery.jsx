import React from "react";
import GoodsCard from "./GoodsCard";

function GoodsGallery() {
  const goods = [
    {
      id: 1,
      image: "https://scdn.comfy.ua/89fc351a-22e7-41ee-8321-f8a9356ca351/https://cdn.comfy.ua/media/catalog/product/j/b/jblt710btblk.jpg/w_600",
      title: "Навушники",
      price: 2200,
    },
    {
      id: 2,
      image: "https://img.telemart.ua/684311-843060-product_popup/hator-gravity-x-tkl-aurum-orange-linear-rev20-htk550ua-black.jpg",
      title: "Клавіатура",
      price: 2850,
    },
    {
      id: 3,
      image:
        "https://content1.rozetka.com.ua/goods/images/big/430419484.jpg",
      title: "Мышка",
      price: 3500,
    },
    {
      id: 4,
      image:
        "https://images.prom.ua/4306251315_w640_h640_kovrik-nastolnyj-dlya.jpg",
      title: "Настільний коврик",
      price: 1000,
    },
    {
      id: 5,
      image: "https://content1.rozetka.com.ua/goods/images/big/449827079.jpg",
      title: "Монітор",
      price: 13500,
    },
    {
      id: 6,
      image:
        "https://i.moyo.ua/img/gallery/5421/43/1644761_middle.jpg",
      title: "Системний блок",
      price: 65000,
    },
  ];

  return (
    <div>
      <h1>Галерея товарів</h1>
      <div className="goods-gallery">
        {goods.map((item) => (
          <GoodsCard
            key={item.id}
            image={item.image}
            title={item.title}
            price={item.price}
          />
        ))}
      </div>
    </div>
  );
}

export default GoodsGallery;
