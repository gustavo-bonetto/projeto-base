import './Card.css';

/*crie mais um parametro para a função card que quando o preco for 00,00 apareça uma mensagem de "Grátis!" e o preço seja riscado.*/

function Card({titulo, preco, onSale, imagem, coracao}) {

  const mostrarAlerta = () => {
    alert('Você favoritou esse jogo!');
  };

  return (
    <section className="autor-card">
      <img src={imagem} className="autor-imagem" />
      <h2>
        {titulo} <span className={`status-dot ${onSale ? 'onSale' : 'notOnSale'}`}/>
      </h2>
      <p className={preco === "R$ 00,00" ? "gratis" : ""}>
        {preco === "R$ 00,00" ? "Grátis" : preco}
      </p>
      <small className="promo-text">{onSale ? 'Promoção!' : ""}</small>

      <img src={coracao} className="coracao" onClick={mostrarAlerta} />
      
    </section>    
  )
}

export default Card;