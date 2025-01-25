import React, { Component } from "react";

class Content extends Component {
  constructor(props) {
    super(props);
    this.state = {
      targetIndex: (21 % 10) + 1,
      isImageHidden: false,
    };
  }

  getRandomColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  toggleColor = (element) => {
    const randomBgColor = this.getRandomColor();
    const randomTextColor = this.getRandomColor();
    element.style.backgroundColor = randomBgColor;
    element.style.color = randomTextColor;
  };

  handleElementClick = (e) => {
    this.toggleColor(e.target);
  };

  render() {
    return (
      <div>
        <p id="target-element" onClick={this.handleElementClick}>
        Дата народження: 4 листопада 2004 року, м. Київ
        </p>
        <h3>Освіта:</h3>
        <ul>
            <li>Середня школа №180, м. Київ;</li>
            <li>Ліцей №208, м. Київ;</li>
            <li>НТУУ "КПІ", м. Київ.</li>
        </ul>
        <h3>Моє хобі</h3>
        <ul>
            <li>Футбол</li>
            <li>Музика</li>
            <li>Кіберспорт</li>
            <li>Подорожі</li>
        </ul>
        <h3>Улюблені фільми</h3>
        <ol>
            <li>"The Lord of the Rings", 2001-2003</li>
            <li>"Inception", 2010</li>
            <li>"Fight Club", 1999</li>
            <li>"Forrest Gump", 1994</li>
        </ol>
        <h3>Моє улюблене місто</h3>
        <p>
        Копенгаген (дан. København) — столиця та найбільше місто Данії, розташоване на островах Зеландія та Амагер. 
        Місто відоме своєю багатою історією, сучасною архітектурою та культурними пам’ятками, такими як Русалонька, парк Тіволі та палац Амалієнборг. 
        Копенгаген є важливим економічним і культурним центром, а також визнаний одним із найкомфортніших для життя міст світу. 
        Його вузькі вулички, канали та велодоріжки створюють унікальну атмосферу для жителів і туристів.
        </p>
      </div>
    );
  }
}

export default Content;