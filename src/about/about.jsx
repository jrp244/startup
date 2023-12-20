import React from 'react';
import './about.css';

export function About(props) {
  const [quote, setQuote] = React.useState('Loading...');
  const [quoteAuthor, setQuoteAuthor] = React.useState('unknown');

  // Remove API fetch

  React.useEffect(() => {
    fetch('https://api.quotable.io/random')
      .then((response) => response.json())
      .then((data) => {
        setQuote(data.content);
        setQuoteAuthor(data.author);
      })
      .catch();
  }, []);

  let imgEl = <img src='https://mmos.com/wp-content/uploads/2021/07/pokemon-unite-key-art-banner.jpg' alt='stock background' />;

  


  return (
    <main className='container-fluid bg-secondary text-center'>
      <div>
        <div id='picture' className='picture-box'>
          {imgEl}
        </div>

        <p>
        Pokemon.com From here, you can set up your Trainer ID, Register yourself to the Trainer Club, find events near, check how many Champion Points you have, you and a variety of other things that are beneficial to your VGC endeavors. The site can be hard to navigate at first but once you get the hang of it, it will be very helpful to you as a player.
Pokemon Global Link The Global Link is great, you can register your game here and it is linked to your Trainer Club account, here you can sign up for online competitions, spend Pokemiles, check your rating for Online Rated Battles, and play minigames that can get items for your game.
Event Locator Here is a quick link to the Event Locator, plug in your information and it will find events near you.
Showdown! Pokemon Showdown! is a great way to practice with Pokemon you haven't bred yet or a good way to test something and be involved with a great community. If you want to take a break from VGC they have many other formats you can dabble in, as well as a great community that can help you test teams, host tournaments, ladder and just have fun. This site will be crucial when SuMo comes out because they will have all the base stats for the new Pokemon once all the data is mined. Then we can see which Pokemon are really going to be good this year.
Nugget Bridge Damage Calculator The Damage Calculator is a great way to see if your Pokemon can survive hits or deal enough damage to be useful to your team. it auto levels your Pokemon to level 50 since your Pokemon will be level 50 when playing the VGC. Nugget Bridge Chances are if you're using Reddit Nugget Bridge might not be for you. I personally don't like the site, but it is a very useful tool, they have a breeding section where people breed Pokemon and then trade them for stuff they need, they have Rate My Team (RMT) forums, and the only reason I go there, Team Reports, do you whant ot know why Se Jun Park used Pachirisu, or what did very well at an event? Most of the top players that use Nugget Bridge will write a report outlining their team, the good the bad and sometimes the ugly.
Team Magma Teambuilder This is the teambuilder I use to make my teams, it tells you what moves you are weak to, what you hit for Super Effective, STAB and Non STAB hits. It also tells you what you are weak to and what you resist. It is a great tool to use when building a team.
Smogon. Smogon is a great resource for learning about Pokemon, they have a great community and a lot of information on Pokemon. They have a lot of information on Pokemon that are not VGC viable, but they also have a lot of information on Pokemon that are VGC viable. They have a lot of information on moves, abilities, items, and Pokemon. They also have a great community that can help you with your team, or just help you learn about Pokemon.
        </p>
      </div>
    </main>
  );
}
