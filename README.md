## Loading Data from API Lab

## Back to the JSON Placeholder

Create an app that simulates Pokemon Battles. 



Create a page with five items:

- An `h1` tag containing the words "JSON Placeholder Data"
- An `h1` tag containing the words "Pokemon Battle Simulator"
- A button that displays the text "get pokemon!" and when clicked calls the function "getPokemon"
- A button that displays the text "battle!" and when clicked calls the function "battlePokemon"
- An empty `div` with the class `data`
- An empty `div` with the class `battleHistory`

Each time your user changes their selection in the `select` box, query the corresponding route using the JSON Placeholder API. Your page should update with **two** pieces of information from **each element** of data.

For example, `posts` each have a title and a body - when the user selects "Posts", display each post's title and body. For each item, the first piece of information should be in an `h3` tag, and the second should be in a `p` tag. Assemble each of these `h3`s and `p`s inside a new `div`, also with the class `data`. Replace your old `data` div with this new one. In other words, you're replacing your old `data` div with a `div` with the same class, but with data inside it instead of empty.

Each time your user clicks the 'get pokemon' button, the json data for two **random** pokemon should be fetched by calling the PokéAPI /pokemon/{$pokemonID} api endpoint. As of 9/12/2019, PokemonIDs range from 1-809. For each pokemon, the following information needs to be displayed
- The Pokemon's Name in a `h3` tag. 
- The Pokemon's Sprite in a 100 by 100 image.
- The Pokemon's HP in a `h5` tag.
- The names and PP of **four** of the Pokemon's moves, each in a `h5` tag.

Each time your user clicks the 'battle' button, one of your two pokemon should be randomly selected as the winner. The following message should be appended to the `battleHistory` div class: 
{winningPokemon} defeated {losingPokemon}. See picture.

## Styling

On top of default HTML styling, the app should have the following styles:

- **Entire App**

  - Fonts should be sans-serif.
  - The background color should be `lightblue`.
  - Everything should be in a column, justified center.

- **h1**

  - Include 30px of padding or margin on top.


- **data**
  - Should have a width of 600px.
  - The first pokemon should float left, the second pokemon
  should float right. See picture. 
  

It should end up looking something like this:

![screen](./screen.png) api_loading_lab
