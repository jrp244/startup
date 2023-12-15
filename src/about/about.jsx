import React from 'react';
import './about.css';

export function About(props) {
  const [imageUrl, setImageUrl] = React.useState('');
  const [quote, setQuote] = React.useState('Loading...');
  const [quoteAuthor, setQuoteAuthor] = React.useState('unknown');

  // We only want this to render the first time the component is created and so we provide an empty dependency list.
  React.useEffect(() => {
    const random = Math.floor(Math.random() * 1000);
    fetch(`https://picsum.photos/v2/list?page=${random}&limit=1`)
      .then((response) => response.json())
      .then((data) => {
        const containerEl = document.querySelector('#picture');

        const width = containerEl.offsetWidth;
        const height = containerEl.offsetHeight;
        const apiUrl = `https://picsum.photos/id/${data[0].id}/${width}/${height}?grayscale`;
        setImageUrl(apiUrl);
      })
      .catch();

    fetch('https://api.quotable.io/random')
      .then((response) => response.json())
      .then((data) => {
        setQuote(data.content);
        setQuoteAuthor(data.author);
      })
      .catch();
  }, []);

  let imgEl = '';

  if (imageUrl) {
    imgEl = <img src={imageUrl} alt='stock background' />;
  }

  return (  
    <main className='container-fluid bg-secondary text-center'>
      <div>
        <div id='picture' className='picture-box'>
          {imgEl}
        </div>
        <h2>Pokemon Teambuilder</h2>
  <p>Here is a link to the teambuilder I use to make my teams, it tells you what moves you are weak to, what you hit for Super Effective, STAB and Non STAB hits.</p>
  <a href="https://www.teammagma.net/teambuilder/">Team Magma Teambuilder</a>
  <h2>What is VGC?</h2>
  <p>VGC stands for the Video Game Championships, it is the format The Pokemon Company International (TPCI) uses to host their battles and ultimately see who is the very best, like no one ever was. The format is always played as double battles, meaning both players use two Pokemon at one time and instead of using 6 Pokemon the trainer brings 6 Pokemon but uses 4 to battle. However, not all Pokemon can participate in VGC. However, since the rules change every year, some Pokemon may be restricted from play one year but be allowed to be used the next year. 2014 to 2015 is a perfect example, in 2014 the Pokemon that were allowed could only be caught in the Kalos Dex and had to have a Blue Pentagon to be legal for play. However, in VGC 2015 all Pokemon minus Cover Art Legend Pokemon and Mythical Pokemon (Mew) were banned. There can be a huge difference from one Season to the next.</p>
  <h2>Helpful Links</h2>
  <p>Here are some helpful links to get you started on your VGC journey.</p>
  <a href="https://www.pokemon.com/us/">Pokemon.com</a>
  <p>From here, you can set up your Trainer ID, Register yourself to the Trainer Club, find events near, check how many Champion Points you have, you and a variety of other things that are beneficial to your VGC endeavors. The site can be hard to navigate at first but once you get the hang of it, it will be very helpful to you as a player.</p>
  <a href="https://3ds.pokemon-gl.com/">Pokemon Global Link</a>
  <p>The Global Link is great, you can register your game here and it is linked to your Trainer Club account, here you can sign up for online competitions, spend Pokemiles, check your rating for Online Rated Battles, and play minigames that can get items for your game.</p>
  <a href="https://www.pokemon.com/us/play-pokemon/pokemon-events/find-an-event/">Event Locator</a>
  <p>Here is a quick link to the Event Locator, plug in your information and it will find events near you.</p>
  <a href="https://play.pokemonshowdown.com/">Showdown!</a>
  <p>Pokemon Showdown! is a great way to practice with Pokemon you haven't bred yet or a good way to test something and be involved with a great community. If you want to take a break from VGC they have many other formats you can dabble in, as well as a great community that can help you test teams, host tournaments, ladder and just have fun. This site will be crucial when SuMo comes out because they will have all the base stats for the new Pokemon once all the data is mined. Then we can see which Pokemon are really going to be good this year.</p>
  <a href="https://pokemonshowdown.com/damagecalc/">Nugget Bridge Damage Calculator</a>
  <p>The Damage Calculator is a great way to see if your Pokemon can survive hits or deal enough damage to be useful to your team.</p>
  <a href="https://nuggetbridge.com/">Nugget Bridge</a>
  <p>Chances are if you're using Reddit Nugget Bridge might not be for you. I personally don't like the site, but it is a very useful tool, they have a breeding section where people breed Pokemon and then trade them for stuff they need, they have Rate My Team (RMT) forums, and the only reason I go there, Team Reports, do you whant ot know why Se Jun Park used Pachirisu, or what did very well at an event? Most of the top players that use Nugget Bridge will write a report outlining their team, the good the bad and sometimes the ugly.</p>


        <p>
        VGC stands for the Video Game Championships, it is the format The Pokemon Company International (TPCI) uses to host their battles and ultimately see who is the very best, like no one ever was. The format is always played as double battles, meaning both players use two Pokemon at one time and instead of using 6 Pokemon the trainer brings 6 Pokemon but uses 4 to battle. However, not all Pokemon can participate in VGC. However, since the rules change every year, some Pokemon may be restricted from play one year but be allowed to be used the next year. 2014 to 2015 is a perfect example, in 2014 the Pokemon that were allowed could only be caught in the Kalos Dex and had to have a Blue Pentagon to be legal for play. However, in VGC 2015 all Pokemon minus Cover Art Legend Pokemon and Mythical Pokemon (Mew) were banned. There can be a huge difference from one Season to the next. 
        </p>

        <p>
        Pokemon.com From here, you can set up your Trainer ID, Register yourself to the Trainer Club, find events near, check how many Champion Points you have, you and a variety of other things that are beneficial to your VGC endeavors. The site can be hard to navigate at first but once you get the hang of it, it will be very helpful to you as a player.
Pokemon Global Link The Global Link is great, you can register your game here and it is linked to your Trainer Club account, here you can sign up for online competitions, spend Pokemiles, check your rating for Online Rated Battles, and play minigames that can get items for your game.
Event Locator Here is a quick link to the Event Locator, plug in your information and it will find events near you.
Showdown! Pokemon Showdown! is a great way to practice with Pokemon you haven't bred yet or a good way to test something and be involved with a great community. If you want to take a break from VGC they have many other formats you can dabble in, as well as a great community that can help you test teams, host tournaments, ladder and just have fun. This site will be crucial when SuMo comes out because they will have all the base stats for the new Pokemon once all the data is mined. Then we can see which Pokemon are really going to be good this year.
Nugget Bridge Damage Calculator The Damage Calculator is a great way to see if your Pokemon can survive hits or deal enough damage to be useful to your team. it auto levels your Pokemon to level 50 since your Pokemon will be level 50 when playing the VGC. Nugget Bridge Chances are if you're using Reddit Nugget Bridge might not be for you. I personally don't like the site, but it is a very useful tool, they have a breeding section where people breed Pokemon and then trade them for stuff they need, they have Rate My Team (RMT) forums, and the only reason I go there, Team Reports, do you whant ot know why Se Jun Park used Pachirisu, or what did very well at an event? Most of the top players that use Nugget Bridge will write a report outlining their team, the good the bad and sometimes the ugly.
Team Magma Teambuilder This is the teambuilder I use to make my teams, it tells you what moves you are weak to, what you hit for Super Effective, STAB and Non STAB hits. 
        </p>

        <div className='quote-box bg-light text-dark'>
          <p className='quote'>{quote}</p>
          <p className='author'>{quoteAuthor}</p>
        </div>
      </div>
    </main>
  );
}
