// j'importe connect qui me permettra de connecter mon composant à Redux
import { connect } from 'react-redux';
import { fetchMainCharacters } from 'src/actions/mainCharacters';
// on importe notre Dumb Component celui qui ne connaît pas redux
import MainCharacters from 'src/components/MainCharacters';

// mapStateToProps est une fonction qui prend en paramètre le state
// et renvoie des props que l'on veut récupérer depuis le state
const mapStateToProps = (state) => ({
  mainCharacters: state.mainCharacters.mainCharacters,
  loading: state.mainCharacters.loading,
});
// === mapDispatchToProps
// si j'ai besoin de dispatcher une action vers le store
const mapDispatchToProps = (dispatch) => ({
  // nom de la prop à remplir: fonction qui dispatch l'action
  // nom de la prop à remplir: fonction qui dispatch l'action
  launchFetchMainCharacters: () => {
    dispatch(fetchMainCharacters());
  },

});
// ici c'est du currying
// on exporte le composant connecté
// c'est a dire enrichi des props récupérées depuis redux
// ici, on donne dans les premières parenthèses la fonction mapStateToProps
// dans les secondes, on donne notre composant non-connecté, qui est une fonction
// ConnectedGRadient passe en props les propriétés du state à Gradient
const ConnectedMainCharacters = connect(mapStateToProps, mapDispatchToProps)(MainCharacters);

// on exporte enfin notre composant Connecté
export default ConnectedMainCharacters;
