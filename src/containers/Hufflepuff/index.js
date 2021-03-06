// j'importe connect qui me permettra de connecter mon composant à Redux
import { connect } from 'react-redux';
import { fetchHufflepuffCharacters} from 'src/actions/hufflepuff';
// on importe notre Dumb Component celui qui ne connaît pas redux
import Hufflepuff from 'src/components/Characters/Hufflepuff';

// mapStateToProps est une fonction qui prend en paramètre le state
// et renvoie des props que l'on veut récupérer depuis le state
const mapStateToProps = (state) => ({
  hufflepuffCharacters: state.hufflepuff.hufflepuffCharacters,
  loading: state.hufflepuff.loading,
});
// === mapDispatchToProps
// si j'ai besoin de dispatcher une action vers le store
const mapDispatchToProps = (dispatch) => ({
  // nom de la prop à remplir: fonction qui dispatch l'action
  // nom de la prop à remplir: fonction qui dispatch l'action
  launchFetchHufflepuffCharacters: () => {
    dispatch(fetchHufflepuffCharacters());
  },

});
// ici c'est du currying
// on exporte le composant connecté
// c'est a dire enrichi des props récupérées depuis redux
// ici, on donne dans les premières parenthèses la fonction mapStateToProps
// dans les secondes, on donne notre composant non-connecté, qui est une fonction
// ConnectedGRadient passe en props les propriétés du state à Gradient
const ConnectedHufflepuff = connect(mapStateToProps, mapDispatchToProps)(Hufflepuff);

// on exporte enfin notre composant Connecté
export default ConnectedHufflepuff;

