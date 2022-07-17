import React, { Component } from "react";

export default class app extends Component {
  state = {
    instrumentos: [
      {
        id: 1,
        nome: "Violão",
        serie: "takamine",
        preço: 855
      },
      {
        id: 2,
        nome: "Guitarra",
        serie: "sx",
        preço: 1000
      },
      {
        id: 3,
        nome: "Teclado",
        serie: "yamaha",
        preço: 1400
      },
      {
        id: 4,
        nome: "Trompete",
        serie: "yamaha",
        preço: 800
      },
      {
        id: 5,
        nome: "Baixo",
        serie: "tagima",
        preço: 1200
      },
      {
        id: 6,
        nome: "Bateria",
        serie: "pearl",
        preço: 700
      }
    ]
  };

  render() {
    return (
      <nav>
        {this.state.instrumentos.map((item) => (
          <section key={item.id}>
            <ul>
              <li>{item.nome}</li>
              <li>{item.serie}</li>
              <li>Preço :R$ {item.preço}</li>
            </ul>
          </section>
        ))}
      </nav>
    );
  }
}
