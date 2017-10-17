

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Czech)

This feature is universal.
It occurs with 3 different values: `Fem`, `Masc`, `Neut`.
Some words have combined values of the feature; 3 combinations have been observed: `Fem|Masc`, `Fem|Neut`, `Masc|Neut`.

This is a <a href="../../u/overview/feat-layers.html">layered feature</a> with the following layers: [Gender](), [Gender[psor]]().

666716 tokens (50%) have a non-empty value of `Gender`.
114193 types (95%) occur at least once with a non-empty value of `Gender`.
47180 lemmas (86%) occur at least once with a non-empty value of `Gender`.
The feature is used with 8 part-of-speech tags: [cs-pos/NOUN]() (328829; 25% instances), [cs-pos/ADJ]() (164619; 12% instances), [cs-pos/PROPN]() (73077; 5% instances), [cs-pos/VERB]() (44574; 3% instances), [cs-pos/DET]() (38424; 3% instances), [cs-pos/PRON]() (7004; 1% instances), [cs-pos/AUX]() (6012; 0% instances), [cs-pos/NUM]() (4177; 0% instances).

### `NOUN`

328829 [cs-pos/NOUN]() tokens (100% of all `NOUN` tokens) have a non-empty value of `Gender`.

The most frequent other feature values with which `NOUN` and `Gender` co-occurred: <tt><a href="Polarity.html">Polarity</a>=Pos</tt> (328312; 100%), <tt><a href="Number.html">Number</a>=Sing</tt> (229913; 70%), <tt><a href="Animacy.html">Animacy</a>=EMPTY</tt> (183601; 56%).

`NOUN` tokens may have the following values of `Gender`:

* `Fem` (128252; 39% of non-empty `Gender`): <em>korun, společnosti, době, strany, firmy, Kč, práce, země, vláda, vlády</em>
* `Masc` (145228; 44% of non-empty `Gender`): <em>roku, roce, případě, lidí, zákona, ministr, rok, předseda, světa, trhu</em>
* `Neut` (55349; 17% of non-empty `Gender`): <em>let, procent, jednání, letech, zahraničí, září, prostředí, ministerstva, zboží, vedení</em>
* `EMPTY` (289): <em>image, s, Greening, rho, F, pc, LEP, PX, Dancing, HUF</em>

<table>
  <tr><th>Paradigm <i>image</i></th><th><tt>Masc</tt></th><th><tt>Fem</tt></th><th><tt>Neut</tt></th></tr>
  <tr><td><tt><a href="Animacy.html">Animacy</a>=Inan</tt></td><td><em>image</em></td><td></td><td></td></tr>
  <tr><td><tt></tt></td><td></td><td><em>image</em></td><td><em>image</em></td></tr>
</table>

`Gender` seems to be **lexical feature** of `NOUN`. 99% lemmas (16698) occur only with one value of `Gender`.

### `ADJ`

164619 [cs-pos/ADJ]() tokens (98% of all `ADJ` tokens) have a non-empty value of `Gender`.

The most frequent other feature values with which `ADJ` and `Gender` co-occurred: <tt><a href="Polarity.html">Polarity</a>=Pos</tt> (153872; 93%), <tt><a href="Degree.html">Degree</a>=Pos</tt> (137549; 84%), <tt><a href="Number.html">Number</a>=Sing</tt> (112340; 68%), <tt><a href="Animacy.html">Animacy</a>=EMPTY</tt> (96848; 59%).

`ADJ` tokens may have the following values of `Gender`:

* `Fem` (64137; 39% of non-empty `Gender`): <em>české, první, druhé, další, česká, státní, nové, poslední, vlastní, národní</em>
* `Fem,Masc` (1546; 1% of non-empty `Gender`): <em>uvedeny, známy, připraveny, určeny, uzavřeny, schopny, považovány, stanoveny, uloženy, vytvořeny</em>
* `Fem,Neut` (2242; 1% of non-empty `Gender`): <em>schopna, připravena, otevřena, založena, stanovena, určena, uzavřena, podepsána, zahájena, ráda</em>
* `Masc` (69338; 42% of non-empty `Gender`): <em>další, první, každý, nový, český, českého, dalších, celý, nového, druhý</em>
* `Neut` (27356; 17% of non-empty `Gender`): <em>možné, třeba, jiné, další, prvním, životního, posledních, možno, nutné, první</em>
* `EMPTY` (4179): <em>tzv, a, New, the, čs, česko, open, sv, RM, US</em>

<table>
  <tr><th>Paradigm <i>známý</i></th><th><tt>Fem,Masc</tt></th><th><tt>Fem,Neut</tt></th><th><tt>Masc</tt></th><th><tt>Fem</tt></th><th><tt>Neut</tt></th></tr>
  <tr><td><tt><a href="Animacy.html">Animacy</a>=Anim|<a href="Case.html">Case</a>=Acc|<a href="Degree.html">Degree</a>=Pos|<a href="Number.html">Number</a>=Sing|<a href="Polarity.html">Polarity</a>=Neg</tt></td><td></td><td></td><td><em>neznámého</em></td><td></td><td></td></tr>
  <tr><td><tt><a href="Animacy.html">Animacy</a>=Anim|<a href="Case.html">Case</a>=Acc|<a href="Degree.html">Degree</a>=Pos|<a href="Number.html">Number</a>=Sing|<a href="Polarity.html">Polarity</a>=Pos</tt></td><td></td><td></td><td><em>známého</em></td><td></td><td></td></tr>
  <tr><td><tt><a href="Animacy.html">Animacy</a>=Anim|<a href="Case.html">Case</a>=Acc|<a href="Degree.html">Degree</a>=Pos|<a href="Number.html">Number</a>=Plur|<a href="Polarity.html">Polarity</a>=Neg</tt></td><td></td><td></td><td><em>neznámé</em></td><td></td><td></td></tr>
  <tr><td><tt><a href="Animacy.html">Animacy</a>=Anim|<a href="Case.html">Case</a>=Acc|<a href="Degree.html">Degree</a>=Pos|<a href="Number.html">Number</a>=Plur|<a href="Polarity.html">Polarity</a>=Pos</tt></td><td></td><td></td><td><em>známé</em></td><td></td><td></td></tr>
  <tr><td><tt><a href="Animacy.html">Animacy</a>=Anim|<a href="Case.html">Case</a>=Acc|<a href="Degree.html">Degree</a>=Sup|<a href="Number.html">Number</a>=Plur|<a href="Polarity.html">Polarity</a>=Pos</tt></td><td></td><td></td><td><em>nejznámější</em></td><td></td><td></td></tr>
  <tr><td><tt><a href="Animacy.html">Animacy</a>=Anim|<a href="Case.html">Case</a>=Dat|<a href="Degree.html">Degree</a>=Pos|<a href="Number.html">Number</a>=Sing|<a href="Polarity.html">Polarity</a>=Pos</tt></td><td></td><td></td><td><em>známému</em></td><td></td><td></td></tr>
  <tr><td><tt><a href="Animacy.html">Animacy</a>=Anim|<a href="Case.html">Case</a>=Dat|<a href="Degree.html">Degree</a>=Pos|<a href="Number.html">Number</a>=Plur|<a href="Polarity.html">Polarity</a>=Pos</tt></td><td></td><td></td><td><em>známým</em></td><td></td><td></td></tr>
  <tr><td><tt><a href="Animacy.html">Animacy</a>=Anim|<a href="Case.html">Case</a>=Dat|<a href="Degree.html">Degree</a>=Sup|<a href="Number.html">Number</a>=Plur|<a href="Polarity.html">Polarity</a>=Pos</tt></td><td></td><td></td><td><em>nejznámějším</em></td><td></td><td></td></tr>
  <tr><td><tt><a href="Animacy.html">Animacy</a>=Anim|<a href="Case.html">Case</a>=Gen|<a href="Degree.html">Degree</a>=Pos|<a href="Number.html">Number</a>=Sing|<a href="Polarity.html">Polarity</a>=Neg</tt></td><td></td><td></td><td><em>neznámého</em></td><td></td><td></td></tr>
  <tr><td><tt><a href="Animacy.html">Animacy</a>=Anim|<a href="Case.html">Case</a>=Gen|<a href="Degree.html">Degree</a>=Pos|<a href="Number.html">Number</a>=Sing|<a href="Polarity.html">Polarity</a>=Pos</tt></td><td></td><td></td><td><em>známého</em></td><td></td><td></td></tr>
  <tr><td><tt><a href="Animacy.html">Animacy</a>=Anim|<a href="Case.html">Case</a>=Gen|<a href="Degree.html">Degree</a>=Pos|<a href="Number.html">Number</a>=Plur|<a href="Polarity.html">Polarity</a>=Neg</tt></td><td></td><td></td><td><em>neznámých</em></td><td></td><td></td></tr>
  <tr><td><tt><a href="Animacy.html">Animacy</a>=Anim|<a href="Case.html">Case</a>=Gen|<a href="Degree.html">Degree</a>=Pos|<a href="Number.html">Number</a>=Plur|<a href="Polarity.html">Polarity</a>=Pos</tt></td><td></td><td></td><td><em>známých</em></td><td></td><td></td></tr>
  <tr><td><tt><a href="Animacy.html">Animacy</a>=Anim|<a href="Case.html">Case</a>=Gen|<a href="Degree.html">Degree</a>=Sup|<a href="Number.html">Number</a>=Plur|<a href="Polarity.html">Polarity</a>=Pos</tt></td><td></td><td></td><td><em>nejznámějších</em></td><td></td><td></td></tr>
  <tr><td><tt><a href="Animacy.html">Animacy</a>=Anim|<a href="Case.html">Case</a>=Ins|<a href="Degree.html">Degree</a>=Pos|<a href="Number.html">Number</a>=Sing|<a href="Polarity.html">Polarity</a>=Neg</tt></td><td></td><td></td><td><em>neznámým</em></td><td></td><td></td></tr>
  <tr><td><tt><a href="Animacy.html">Animacy</a>=Anim|<a href="Case.html">Case</a>=Ins|<a href="Degree.html">Degree</a>=Pos|<a href="Number.html">Number</a>=Sing|<a href="Polarity.html">Polarity</a>=Pos</tt></td><td></td><td></td><td><em>známým</em></td><td></td><td></td></tr>
  <tr><td><tt><a href="Animacy.html">Animacy</a>=Anim|<a href="Case.html">Case</a>=Ins|<a href="Degree.html">Degree</a>=Pos|<a href="Number.html">Number</a>=Plur|<a href="Polarity.html">Polarity</a>=Neg</tt></td><td></td><td></td><td><em>neznámými</em></td><td></td><td></td></tr>
  <tr><td><tt><a href="Animacy.html">Animacy</a>=Anim|<a href="Case.html">Case</a>=Ins|<a href="Degree.html">Degree</a>=Sup|<a href="Number.html">Number</a>=Sing|<a href="Polarity.html">Polarity</a>=Pos</tt></td><td></td><td></td><td><em>nejznámějším</em></td><td></td><td></td></tr>
  <tr><td><tt><a href="Animacy.html">Animacy</a>=Anim|<a href="Case.html">Case</a>=Loc|<a href="Degree.html">Degree</a>=Pos|<a href="Number.html">Number</a>=Sing|<a href="Polarity.html">Polarity</a>=Neg</tt></td><td></td><td></td><td><em>neznámém</em></td><td></td><td></td></tr>
  <tr><td><tt><a href="Animacy.html">Animacy</a>=Anim|<a href="Case.html">Case</a>=Nom|<a href="Degree.html">Degree</a>=Pos|<a href="Number.html">Number</a>=Sing|<a href="Polarity.html">Polarity</a>=Neg</tt></td><td></td><td></td><td><em>neznámý</em></td><td></td><td></td></tr>
  <tr><td><tt><a href="Animacy.html">Animacy</a>=Anim|<a href="Case.html">Case</a>=Nom|<a href="Degree.html">Degree</a>=Pos|<a href="Number.html">Number</a>=Sing|<a href="Polarity.html">Polarity</a>=Pos</tt></td><td></td><td></td><td><em>známý</em></td><td></td><td></td></tr>
  <tr><td><tt><a href="Animacy.html">Animacy</a>=Anim|<a href="Case.html">Case</a>=Nom|<a href="Degree.html">Degree</a>=Pos|<a href="Number.html">Number</a>=Plur|<a href="Polarity.html">Polarity</a>=Neg</tt></td><td></td><td></td><td><em>neznámí</em></td><td></td><td></td></tr>
  <tr><td><tt><a href="Animacy.html">Animacy</a>=Anim|<a href="Case.html">Case</a>=Nom|<a href="Degree.html">Degree</a>=Pos|<a href="Number.html">Number</a>=Plur|<a href="Polarity.html">Polarity</a>=Pos</tt></td><td></td><td></td><td><em>známí</em></td><td></td><td></td></tr>
  <tr><td><tt><a href="Animacy.html">Animacy</a>=Anim|<a href="Case.html">Case</a>=Nom|<a href="Degree.html">Degree</a>=Sup|<a href="Number.html">Number</a>=Sing|<a href="Polarity.html">Polarity</a>=Pos</tt></td><td></td><td></td><td><em>Nejznámější</em></td><td></td><td></td></tr>
  <tr><td><tt><a href="Animacy.html">Animacy</a>=Anim|<a href="Number.html">Number</a>=Plur|<a href="Polarity.html">Polarity</a>=Pos|<a href="Variant.html">Variant</a>=Short</tt></td><td></td><td></td><td><em>známi</em></td><td></td><td></td></tr>
  <tr><td><tt><a href="Animacy.html">Animacy</a>=Inan|<a href="Case.html">Case</a>=Acc|<a href="Degree.html">Degree</a>=Pos|<a href="Number.html">Number</a>=Sing|<a href="Polarity.html">Polarity</a>=Neg</tt></td><td></td><td></td><td><em>neznámý</em></td><td></td><td></td></tr>
  <tr><td><tt><a href="Animacy.html">Animacy</a>=Inan|<a href="Case.html">Case</a>=Acc|<a href="Degree.html">Degree</a>=Pos|<a href="Number.html">Number</a>=Sing|<a href="Polarity.html">Polarity</a>=Pos</tt></td><td></td><td></td><td><em>známý</em></td><td></td><td></td></tr>
  <tr><td><tt><a href="Animacy.html">Animacy</a>=Inan|<a href="Case.html">Case</a>=Dat|<a href="Degree.html">Degree</a>=Pos|<a href="Number.html">Number</a>=Plur|<a href="Polarity.html">Polarity</a>=Pos</tt></td><td></td><td></td><td><em>známým</em></td><td></td><td></td></tr>
  <tr><td><tt><a href="Animacy.html">Animacy</a>=Inan|<a href="Case.html">Case</a>=Gen|<a href="Degree.html">Degree</a>=Pos|<a href="Number.html">Number</a>=Sing|<a href="Polarity.html">Polarity</a>=Neg</tt></td><td></td><td></td><td><em>neznámého</em></td><td></td><td></td></tr>
  <tr><td><tt><a href="Animacy.html">Animacy</a>=Inan|<a href="Case.html">Case</a>=Gen|<a href="Degree.html">Degree</a>=Pos|<a href="Number.html">Number</a>=Sing|<a href="Polarity.html">Polarity</a>=Pos</tt></td><td></td><td></td><td><em>známého</em></td><td></td><td></td></tr>
  <tr><td><tt><a href="Animacy.html">Animacy</a>=Inan|<a href="Case.html">Case</a>=Gen|<a href="Degree.html">Degree</a>=Pos|<a href="Number.html">Number</a>=Plur|<a href="Polarity.html">Polarity</a>=Neg</tt></td><td></td><td></td><td><em>neznámých</em></td><td></td><td></td></tr>
  <tr><td><tt><a href="Animacy.html">Animacy</a>=Inan|<a href="Case.html">Case</a>=Gen|<a href="Degree.html">Degree</a>=Pos|<a href="Number.html">Number</a>=Plur|<a href="Polarity.html">Polarity</a>=Pos</tt></td><td></td><td></td><td><em>známých</em></td><td></td><td></td></tr>
  <tr><td><tt><a href="Animacy.html">Animacy</a>=Inan|<a href="Case.html">Case</a>=Gen|<a href="Degree.html">Degree</a>=Sup|<a href="Number.html">Number</a>=Plur|<a href="Polarity.html">Polarity</a>=Pos</tt></td><td></td><td></td><td><em>nejznámějších</em></td><td></td><td></td></tr>
  <tr><td><tt><a href="Animacy.html">Animacy</a>=Inan|<a href="Case.html">Case</a>=Ins|<a href="Degree.html">Degree</a>=Pos|<a href="Number.html">Number</a>=Sing|<a href="Polarity.html">Polarity</a>=Neg</tt></td><td></td><td></td><td><em>neznámým</em></td><td></td><td></td></tr>
  <tr><td><tt><a href="Animacy.html">Animacy</a>=Inan|<a href="Case.html">Case</a>=Ins|<a href="Degree.html">Degree</a>=Pos|<a href="Number.html">Number</a>=Sing|<a href="Polarity.html">Polarity</a>=Pos</tt></td><td></td><td></td><td><em>známým</em></td><td></td><td></td></tr>
  <tr><td><tt><a href="Animacy.html">Animacy</a>=Inan|<a href="Case.html">Case</a>=Ins|<a href="Degree.html">Degree</a>=Pos|<a href="Number.html">Number</a>=Plur|<a href="Polarity.html">Polarity</a>=Neg</tt></td><td></td><td></td><td><em>neznámými</em></td><td></td><td></td></tr>
  <tr><td><tt><a href="Animacy.html">Animacy</a>=Inan|<a href="Case.html">Case</a>=Ins|<a href="Degree.html">Degree</a>=Pos|<a href="Number.html">Number</a>=Plur|<a href="Polarity.html">Polarity</a>=Pos</tt></td><td></td><td></td><td><em>známými</em></td><td></td><td></td></tr>
  <tr><td><tt><a href="Animacy.html">Animacy</a>=Inan|<a href="Case.html">Case</a>=Ins|<a href="Degree.html">Degree</a>=Sup|<a href="Number.html">Number</a>=Sing|<a href="Polarity.html">Polarity</a>=Pos</tt></td><td></td><td></td><td><em>nejznámějším</em></td><td></td><td></td></tr>
  <tr><td><tt><a href="Animacy.html">Animacy</a>=Inan|<a href="Case.html">Case</a>=Loc|<a href="Degree.html">Degree</a>=Pos|<a href="Number.html">Number</a>=Sing|<a href="Polarity.html">Polarity</a>=Pos</tt></td><td></td><td></td><td><em>známém</em></td><td></td><td></td></tr>
  <tr><td><tt><a href="Animacy.html">Animacy</a>=Inan|<a href="Case.html">Case</a>=Loc|<a href="Degree.html">Degree</a>=Pos|<a href="Number.html">Number</a>=Plur|<a href="Polarity.html">Polarity</a>=Pos</tt></td><td></td><td></td><td><em>známých</em></td><td></td><td></td></tr>
  <tr><td><tt><a href="Animacy.html">Animacy</a>=Inan|<a href="Case.html">Case</a>=Nom|<a href="Degree.html">Degree</a>=Pos|<a href="Number.html">Number</a>=Sing|<a href="Polarity.html">Polarity</a>=Neg</tt></td><td></td><td></td><td><em>neznámý</em></td><td></td><td></td></tr>
  <tr><td><tt><a href="Animacy.html">Animacy</a>=Inan|<a href="Case.html">Case</a>=Nom|<a href="Degree.html">Degree</a>=Pos|<a href="Number.html">Number</a>=Sing|<a href="Polarity.html">Polarity</a>=Pos</tt></td><td></td><td></td><td><em>známý</em></td><td></td><td></td></tr>
  <tr><td><tt><a href="Animacy.html">Animacy</a>=Inan|<a href="Case.html">Case</a>=Nom|<a href="Degree.html">Degree</a>=Pos|<a href="Number.html">Number</a>=Plur|<a href="Polarity.html">Polarity</a>=Neg</tt></td><td></td><td></td><td><em>neznámé</em></td><td></td><td></td></tr>
  <tr><td><tt><a href="Animacy.html">Animacy</a>=Inan|<a href="Case.html">Case</a>=Nom|<a href="Degree.html">Degree</a>=Pos|<a href="Number.html">Number</a>=Plur|<a href="Polarity.html">Polarity</a>=Pos</tt></td><td></td><td></td><td><em>známé</em></td><td></td><td></td></tr>
  <tr><td><tt><a href="Animacy.html">Animacy</a>=Inan|<a href="Case.html">Case</a>=Nom|<a href="Degree.html">Degree</a>=Sup|<a href="Number.html">Number</a>=Sing|<a href="Polarity.html">Polarity</a>=Pos</tt></td><td></td><td></td><td><em>nejznámější</em></td><td></td><td></td></tr>
  <tr><td><tt><a href="Animacy.html">Animacy</a>=Inan|<a href="Case.html">Case</a>=Nom|<a href="Degree.html">Degree</a>=Sup|<a href="Number.html">Number</a>=Plur|<a href="Polarity.html">Polarity</a>=Pos</tt></td><td></td><td></td><td><em>Nejznámější</em></td><td></td><td></td></tr>
  <tr><td><tt><a href="Animacy.html">Animacy</a>=Inan|<a href="Number.html">Number</a>=Plur|<a href="Polarity.html">Polarity</a>=Pos|<a href="Variant.html">Variant</a>=Short</tt></td><td><em>známy</em></td><td></td><td></td><td></td><td></td></tr>
  <tr><td><tt><a href="Case.html">Case</a>=Acc|<a href="Degree.html">Degree</a>=Pos|<a href="Number.html">Number</a>=Sing|<a href="Polarity.html">Polarity</a>=Neg</tt></td><td></td><td></td><td></td><td><em>neznámou</em></td><td><em>neznámé</em></td></tr>
  <tr><td><tt><a href="Case.html">Case</a>=Acc|<a href="Degree.html">Degree</a>=Pos|<a href="Number.html">Number</a>=Sing|<a href="Polarity.html">Polarity</a>=Pos</tt></td><td></td><td></td><td></td><td><em>známou</em></td><td><em>známé</em></td></tr>
  <tr><td><tt><a href="Case.html">Case</a>=Acc|<a href="Degree.html">Degree</a>=Pos|<a href="Number.html">Number</a>=Plur|<a href="Polarity.html">Polarity</a>=Neg</tt></td><td></td><td></td><td></td><td></td><td><em>neznámá</em></td></tr>
  <tr><td><tt><a href="Case.html">Case</a>=Acc|<a href="Degree.html">Degree</a>=Pos|<a href="Number.html">Number</a>=Plur|<a href="Polarity.html">Polarity</a>=Pos</tt></td><td></td><td></td><td></td><td></td><td><em>známá</em></td></tr>
  <tr><td><tt><a href="Case.html">Case</a>=Dat|<a href="Degree.html">Degree</a>=Pos|<a href="Number.html">Number</a>=Sing|<a href="Polarity.html">Polarity</a>=Pos</tt></td><td></td><td></td><td></td><td><em>známé</em></td><td></td></tr>
  <tr><td><tt><a href="Case.html">Case</a>=Dat|<a href="Degree.html">Degree</a>=Pos|<a href="Number.html">Number</a>=Plur|<a href="Polarity.html">Polarity</a>=Pos</tt></td><td></td><td></td><td></td><td><em>známým</em></td><td></td></tr>
  <tr><td><tt><a href="Case.html">Case</a>=Dat|<a href="Degree.html">Degree</a>=Sup|<a href="Number.html">Number</a>=Plur|<a href="Polarity.html">Polarity</a>=Pos</tt></td><td></td><td></td><td></td><td><em>nejznámějším</em></td><td><em>nejznámějším</em></td></tr>
  <tr><td><tt><a href="Case.html">Case</a>=Gen|<a href="Degree.html">Degree</a>=Pos|<a href="Number.html">Number</a>=Sing|<a href="Polarity.html">Polarity</a>=Neg</tt></td><td></td><td></td><td></td><td><em>neznámé</em></td><td></td></tr>
  <tr><td><tt><a href="Case.html">Case</a>=Gen|<a href="Degree.html">Degree</a>=Pos|<a href="Number.html">Number</a>=Sing|<a href="Polarity.html">Polarity</a>=Pos</tt></td><td></td><td></td><td></td><td><em>známé</em></td><td><em>známého</em></td></tr>
  <tr><td><tt><a href="Case.html">Case</a>=Gen|<a href="Degree.html">Degree</a>=Pos|<a href="Number.html">Number</a>=Plur|<a href="Polarity.html">Polarity</a>=Neg</tt></td><td></td><td></td><td></td><td><em>neznámých</em></td><td><em>neznámých</em></td></tr>
  <tr><td><tt><a href="Case.html">Case</a>=Gen|<a href="Degree.html">Degree</a>=Pos|<a href="Number.html">Number</a>=Plur|<a href="Polarity.html">Polarity</a>=Pos</tt></td><td></td><td></td><td></td><td><em>známých</em></td><td><em>známých</em></td></tr>
  <tr><td><tt><a href="Case.html">Case</a>=Gen|<a href="Degree.html">Degree</a>=Cmp|<a href="Number.html">Number</a>=Sing|<a href="Polarity.html">Polarity</a>=Pos</tt></td><td></td><td></td><td></td><td><em>známější</em></td><td></td></tr>
  <tr><td><tt><a href="Case.html">Case</a>=Gen|<a href="Degree.html">Degree</a>=Sup|<a href="Number.html">Number</a>=Plur|<a href="Polarity.html">Polarity</a>=Pos</tt></td><td></td><td></td><td></td><td><em>nejznámějších</em></td><td></td></tr>
  <tr><td><tt><a href="Case.html">Case</a>=Ins|<a href="Degree.html">Degree</a>=Pos|<a href="Number.html">Number</a>=Sing|<a href="Polarity.html">Polarity</a>=Neg</tt></td><td></td><td></td><td></td><td><em>neznámou</em></td><td><em>neznámým</em></td></tr>
  <tr><td><tt><a href="Case.html">Case</a>=Ins|<a href="Degree.html">Degree</a>=Pos|<a href="Number.html">Number</a>=Sing|<a href="Polarity.html">Polarity</a>=Pos</tt></td><td></td><td></td><td></td><td><em>známou</em></td><td><em>známým</em></td></tr>
  <tr><td><tt><a href="Case.html">Case</a>=Ins|<a href="Degree.html">Degree</a>=Pos|<a href="Number.html">Number</a>=Plur|<a href="Polarity.html">Polarity</a>=Neg</tt></td><td></td><td></td><td></td><td><em>neznámými</em></td><td></td></tr>
  <tr><td><tt><a href="Case.html">Case</a>=Ins|<a href="Degree.html">Degree</a>=Pos|<a href="Number.html">Number</a>=Plur|<a href="Polarity.html">Polarity</a>=Pos</tt></td><td></td><td></td><td></td><td><em>známými</em></td><td></td></tr>
  <tr><td><tt><a href="Case.html">Case</a>=Loc|<a href="Degree.html">Degree</a>=Pos|<a href="Number.html">Number</a>=Sing|<a href="Polarity.html">Polarity</a>=Neg</tt></td><td></td><td></td><td></td><td><em>neznámé</em></td><td><em>neznámém</em></td></tr>
  <tr><td><tt><a href="Case.html">Case</a>=Loc|<a href="Degree.html">Degree</a>=Pos|<a href="Number.html">Number</a>=Sing|<a href="Polarity.html">Polarity</a>=Pos</tt></td><td></td><td></td><td></td><td><em>známé</em></td><td></td></tr>
  <tr><td><tt><a href="Case.html">Case</a>=Nom|<a href="Degree.html">Degree</a>=Pos|<a href="Number.html">Number</a>=Sing|<a href="Polarity.html">Polarity</a>=Neg</tt></td><td></td><td></td><td></td><td><em>neznámá</em></td><td><em>neznámé</em></td></tr>
  <tr><td><tt><a href="Case.html">Case</a>=Nom|<a href="Degree.html">Degree</a>=Pos|<a href="Number.html">Number</a>=Sing|<a href="Polarity.html">Polarity</a>=Pos</tt></td><td></td><td></td><td></td><td><em>známá</em></td><td><em>známé</em></td></tr>
  <tr><td><tt><a href="Case.html">Case</a>=Nom|<a href="Degree.html">Degree</a>=Pos|<a href="Number.html">Number</a>=Plur|<a href="Polarity.html">Polarity</a>=Neg</tt></td><td></td><td></td><td></td><td><em>neznámé</em></td><td></td></tr>
  <tr><td><tt><a href="Case.html">Case</a>=Nom|<a href="Degree.html">Degree</a>=Pos|<a href="Number.html">Number</a>=Plur|<a href="Polarity.html">Polarity</a>=Pos</tt></td><td></td><td></td><td></td><td><em>známé</em></td><td><em>známá</em></td></tr>
  <tr><td><tt><a href="Case.html">Case</a>=Nom|<a href="Degree.html">Degree</a>=Cmp|<a href="Number.html">Number</a>=Plur|<a href="Polarity.html">Polarity</a>=Pos</tt></td><td></td><td></td><td></td><td><em>známější</em></td><td></td></tr>
  <tr><td><tt><a href="Case.html">Case</a>=Nom|<a href="Degree.html">Degree</a>=Sup|<a href="Number.html">Number</a>=Sing|<a href="Polarity.html">Polarity</a>=Pos</tt></td><td></td><td></td><td></td><td><em>nejznámější</em></td><td><em>nejznámější</em></td></tr>
  <tr><td><tt><a href="Case.html">Case</a>=Nom|<a href="Degree.html">Degree</a>=Sup|<a href="Number.html">Number</a>=Plur|<a href="Polarity.html">Polarity</a>=Pos</tt></td><td></td><td></td><td></td><td><em>nejznámější</em></td><td></td></tr>
  <tr><td><tt><a href="Number.html">Number</a>=Sing|<a href="Polarity.html">Polarity</a>=Pos|<a href="Variant.html">Variant</a>=Short</tt></td><td></td><td></td><td><em>znám</em></td><td></td><td><em>známo</em></td></tr>
  <tr><td><tt><a href="Number.html">Number</a>=Plur,Sing|<a href="Polarity.html">Polarity</a>=Pos|<a href="Variant.html">Variant</a>=Short</tt></td><td></td><td><em>známa, neznáma</em></td><td></td><td></td><td></td></tr>
</table>

### `PROPN`

73077 [cs-pos/PROPN]() tokens (98% of all `PROPN` tokens) have a non-empty value of `Gender`.

The most frequent other feature values with which `PROPN` and `Gender` co-occurred: <tt><a href="Polarity.html">Polarity</a>=Pos</tt> (73077; 100%), <tt><a href="Abbr.html">Abbr</a>=EMPTY</tt> (62998; 86%), <tt><a href="Number.html">Number</a>=Sing</tt> (56256; 77%).

`PROPN` tokens may have the following values of `Gender`:

* `Fem` (22278; 30% of non-empty `Gender`): <em>Praha, ČR, Praze, LN, ODS, OSN, Evropy, Prahy, ODA, ČSFR</em>
* `Masc` (43715; 60% of non-empty `Gender`): <em>USA, Jiří, J, Jan, Václav, Petr, Josef, Pavel, M, V</em>
* `Neut` (7084; 10% of non-empty `Gender`): <em>Brno, Německu, Německa, Brně, Slovensku, Slovensko, Rusko, NATO, Německo, Ruska</em>
* `EMPTY` (1747): <em>haš, International, šv, ber, O, mrk, em, kva, js, ma</em>

<table>
  <tr><th>Paradigm <i>M</i></th><th><tt>Masc</tt></th><th><tt>Fem</tt></th><th><tt>Neut</tt></th></tr>
  <tr><td><tt><a href="Animacy.html">Animacy</a>=Anim|<a href="NameType.html">NameType</a>=Giv</tt></td><td><em>M</em></td><td></td><td></td></tr>
  <tr><td><tt><a href="Animacy.html">Animacy</a>=Anim|<a href="NameType.html">NameType</a>=Sur</tt></td><td><em>M</em></td><td></td><td></td></tr>
  <tr><td><tt><a href="NameType.html">NameType</a>=Com</tt></td><td></td><td></td><td><em>M</em></td></tr>
  <tr><td><tt><a href="NameType.html">NameType</a>=Giv</tt></td><td></td><td><em>M</em></td><td></td></tr>
  <tr><td><tt><a href="NameType.html">NameType</a>=Sur</tt></td><td></td><td><em>M</em></td><td></td></tr>
</table>

`Gender` seems to be **lexical feature** of `PROPN`. 98% lemmas (13563) occur only with one value of `Gender`.

### `VERB`

44574 [cs-pos/VERB]() tokens (37% of all `VERB` tokens) have a non-empty value of `Gender`.

The most frequent other feature values with which `VERB` and `Gender` co-occurred: <tt><a href="Mood.html">Mood</a>=EMPTY</tt> (44574; 100%), <tt><a href="Voice.html">Voice</a>=Act</tt> (44574; 100%), <tt><a href="Person.html">Person</a>=EMPTY</tt> (44572; 100%), <tt><a href="Tense.html">Tense</a>=Past</tt> (44450; 100%), <tt><a href="VerbForm.html">VerbForm</a>=Part</tt> (44448; 100%), <tt><a href="Polarity.html">Polarity</a>=Pos</tt> (40839; 92%), <tt><a href="Number.html">Number</a>=Sing</tt> (25005; 56%).

`VERB` tokens may have the following values of `Gender`:

* `Fem` (2; 0% of non-empty `Gender`): <em>Were</em>
* `Fem,Masc` (3780; 8% of non-empty `Gender`): <em>měly, mohly, byly, začaly, objevily, dosáhly, neměly, získaly, staly, vedly</em>
* `Fem,Neut` (8339; 19% of non-empty `Gender`): <em>měla, mohla, stala, byla, začala, získala, musela, vznikla, rozhodla, oznámila</em>
* `Masc` (26711; 60% of non-empty `Gender`): <em>řekl, měl, uvedl, měli, mohl, prohlásil, stal, mohli, byl, dodal</em>
* `Neut` (5742; 13% of non-empty `Gender`): <em>mělo, bylo, podařilo, došlo, mohlo, šlo, stalo, začalo, ukázalo, znamenalo</em>
* `EMPTY` (75098): <em>má, je, může, mají, musí, jde, lze, jsou, mít, mohou</em>

<table>
  <tr><th>Paradigm <i>mít</i></th><th><tt>Fem,Masc</tt></th><th><tt>Fem,Neut</tt></th><th><tt>Masc</tt></th><th><tt>Neut</tt></th></tr>
  <tr><td><tt><a href="Animacy.html">Animacy</a>=Anim|<a href="Number.html">Number</a>=Plur|<a href="Polarity.html">Polarity</a>=Neg|<a href="Tense.html">Tense</a>=Past|<a href="VerbForm.html">VerbForm</a>=Part</tt></td><td></td><td></td><td><em>neměli</em></td><td></td></tr>
  <tr><td><tt><a href="Animacy.html">Animacy</a>=Anim|<a href="Number.html">Number</a>=Plur|<a href="Polarity.html">Polarity</a>=Pos|<a href="Tense.html">Tense</a>=Past|<a href="VerbForm.html">VerbForm</a>=Part</tt></td><td></td><td></td><td><em>měli</em></td><td></td></tr>
  <tr><td><tt><a href="Animacy.html">Animacy</a>=Inan|<a href="Number.html">Number</a>=Plur|<a href="Polarity.html">Polarity</a>=Neg|<a href="Tense.html">Tense</a>=Past|<a href="VerbForm.html">VerbForm</a>=Part</tt></td><td><em>neměly</em></td><td></td><td></td><td></td></tr>
  <tr><td><tt><a href="Animacy.html">Animacy</a>=Inan|<a href="Number.html">Number</a>=Plur|<a href="Polarity.html">Polarity</a>=Pos|<a href="Tense.html">Tense</a>=Past|<a href="VerbForm.html">VerbForm</a>=Part</tt></td><td><em>měly</em></td><td></td><td></td><td></td></tr>
  <tr><td><tt><a href="Aspect.html">Aspect</a>=Imp|<a href="Number.html">Number</a>=Sing|<a href="Polarity.html">Polarity</a>=Neg|<a href="Tense.html">Tense</a>=Pres|<a href="VerbForm.html">VerbForm</a>=Conv</tt></td><td></td><td></td><td><em>nemaje</em></td><td></td></tr>
  <tr><td><tt><a href="Aspect.html">Aspect</a>=Imp|<a href="Number.html">Number</a>=Sing|<a href="Polarity.html">Polarity</a>=Pos|<a href="Tense.html">Tense</a>=Pres|<a href="VerbForm.html">VerbForm</a>=Conv</tt></td><td></td><td></td><td><em>maje</em></td><td></td></tr>
  <tr><td><tt><a href="Number.html">Number</a>=Sing|<a href="Polarity.html">Polarity</a>=Neg|<a href="Tense.html">Tense</a>=Past|<a href="VerbForm.html">VerbForm</a>=Part</tt></td><td></td><td></td><td><em>neměl</em></td><td><em>nemělo</em></td></tr>
  <tr><td><tt><a href="Number.html">Number</a>=Sing|<a href="Polarity.html">Polarity</a>=Pos|<a href="Tense.html">Tense</a>=Past|<a href="VerbForm.html">VerbForm</a>=Part</tt></td><td></td><td></td><td><em>měl</em></td><td><em>mělo</em></td></tr>
  <tr><td><tt><a href="Number.html">Number</a>=Plur,Sing|<a href="Polarity.html">Polarity</a>=Neg|<a href="Tense.html">Tense</a>=Past|<a href="VerbForm.html">VerbForm</a>=Part</tt></td><td></td><td><em>neměla</em></td><td></td><td></td></tr>
  <tr><td><tt><a href="Number.html">Number</a>=Plur,Sing|<a href="Polarity.html">Polarity</a>=Pos|<a href="Tense.html">Tense</a>=Past|<a href="VerbForm.html">VerbForm</a>=Part</tt></td><td></td><td><em>měla</em></td><td></td><td></td></tr>
</table>

### `DET`

38424 [cs-pos/DET]() tokens (79% of all `DET` tokens) have a non-empty value of `Gender`.

The most frequent other feature values with which `DET` and `Gender` co-occurred: <tt><a href="Person.html">Person</a>=EMPTY</tt> (35405; 92%), <tt><a href="Number[psor].html">Number[psor]</a>=EMPTY</tt> (35405; 92%), <tt><a href="Animacy.html">Animacy</a>=EMPTY</tt> (32900; 86%), <tt><a href="Poss.html">Poss</a>=EMPTY</tt> (31795; 83%), <tt><a href="Number.html">Number</a>=Sing</tt> (30778; 80%).

`DET` tokens may have the following values of `Gender`:

* `Fem` (10496; 27% of non-empty `Gender`): <em>která, které, této, své, svou, kterou, tato, tuto, naší, její</em>
* `Fem,Neut` (335; 1% of non-empty `Gender`): <em>naše, moje, vaše, mio</em>
* `Masc` (10538; 27% of non-empty `Gender`): <em>který, kteří, které, tento, ten, svůj, své, všechny, sám, všichni</em>
* `Masc,Neut` (8200; 21% of non-empty `Gender`): <em>tím, tom, tomu, toho, tohoto, tomto, svého, svém, svým, její</em>
* `Neut` (8855; 23% of non-empty `Gender`): <em>to, které, toto, vše, všechno, své, která, takové, tato, žádné</em>
* `EMPTY` (10346): <em>jeho, jejich, všech, těchto, svých, několik, některých, několika, našich, mnoho</em>

<table>
  <tr><th>Paradigm <i>můj</i></th><th><tt>Fem,Neut</tt></th><th><tt>Masc</tt></th><th><tt>Masc,Neut</tt></th><th><tt>Fem</tt></th><th><tt>Neut</tt></th></tr>
  <tr><td><tt><a href="Abbr.html">Abbr</a>=Yes|<a href="Case.html">Case</a>=Ins|<a href="Number.html">Number</a>=Sing|<a href="Number[psor].html">Number[psor]</a>=Plur</tt></td><td></td><td></td><td><em>n</em></td><td></td><td></td></tr>
  <tr><td><tt><a href="Animacy.html">Animacy</a>=Anim|<a href="Case.html">Case</a>=Acc|<a href="Number.html">Number</a>=Sing|<a href="Number[psor].html">Number[psor]</a>=Plur</tt></td><td></td><td><em>našeho</em></td><td></td><td></td><td></td></tr>
  <tr><td><tt><a href="Animacy.html">Animacy</a>=Anim|<a href="Case.html">Case</a>=Nom|<a href="Number.html">Number</a>=Plur|<a href="Number[psor].html">Number[psor]</a>=Plur</tt></td><td></td><td><em>naši</em></td><td></td><td></td><td></td></tr>
  <tr><td><tt><a href="Animacy.html">Animacy</a>=Anim|<a href="Case.html">Case</a>=Nom|<a href="Number.html">Number</a>=Plur|<a href="Number[psor].html">Number[psor]</a>=Sing</tt></td><td></td><td><em>moji, Mí</em></td><td></td><td></td><td></td></tr>
  <tr><td><tt><a href="Animacy.html">Animacy</a>=Inan|<a href="Case.html">Case</a>=Acc|<a href="Number.html">Number</a>=Sing|<a href="Number[psor].html">Number[psor]</a>=Plur</tt></td><td></td><td><em>náš</em></td><td></td><td></td><td></td></tr>
  <tr><td><tt><a href="Animacy.html">Animacy</a>=Inan|<a href="Case.html">Case</a>=Acc|<a href="Number.html">Number</a>=Sing|<a href="Number[psor].html">Number[psor]</a>=Sing</tt></td><td></td><td><em>můj</em></td><td></td><td></td><td></td></tr>
  <tr><td><tt><a href="Animacy.html">Animacy</a>=Inan|<a href="Case.html">Case</a>=Nom|<a href="Number.html">Number</a>=Plur|<a href="Number[psor].html">Number[psor]</a>=Plur</tt></td><td></td><td><em>naše</em></td><td></td><td></td><td></td></tr>
  <tr><td><tt><a href="Animacy.html">Animacy</a>=Inan|<a href="Case.html">Case</a>=Nom|<a href="Number.html">Number</a>=Plur|<a href="Number[psor].html">Number[psor]</a>=Sing</tt></td><td></td><td><em>mé, moje</em></td><td></td><td></td><td></td></tr>
  <tr><td><tt><a href="Case.html">Case</a>=Acc|<a href="Number.html">Number</a>=Sing|<a href="Number[psor].html">Number[psor]</a>=Plur</tt></td><td></td><td></td><td></td><td><em>naši</em></td><td><em>naše</em></td></tr>
  <tr><td><tt><a href="Case.html">Case</a>=Acc|<a href="Number.html">Number</a>=Sing|<a href="Number[psor].html">Number[psor]</a>=Plur|<a href="Style.html">Style</a>=Coll</tt></td><td></td><td></td><td></td><td><em>naší</em></td><td></td></tr>
  <tr><td><tt><a href="Case.html">Case</a>=Acc|<a href="Number.html">Number</a>=Sing|<a href="Number[psor].html">Number[psor]</a>=Sing</tt></td><td></td><td></td><td></td><td><em>mou</em></td><td><em>mé, moje</em></td></tr>
  <tr><td><tt><a href="Case.html">Case</a>=Acc|<a href="Number.html">Number</a>=Plur|<a href="Number[psor].html">Number[psor]</a>=Sing</tt></td><td></td><td><em>mé</em></td><td></td><td><em>mé</em></td><td><em>má</em></td></tr>
  <tr><td><tt><a href="Case.html">Case</a>=Dat|<a href="Number.html">Number</a>=Sing|<a href="Number[psor].html">Number[psor]</a>=Plur</tt></td><td></td><td></td><td><em>našemu</em></td><td><em>naší</em></td><td></td></tr>
  <tr><td><tt><a href="Case.html">Case</a>=Dat|<a href="Number.html">Number</a>=Sing|<a href="Number[psor].html">Number[psor]</a>=Sing</tt></td><td></td><td></td><td><em>mému</em></td><td><em>mé, mojí</em></td><td></td></tr>
  <tr><td><tt><a href="Case.html">Case</a>=Gen|<a href="Number.html">Number</a>=Sing|<a href="Number[psor].html">Number[psor]</a>=Plur</tt></td><td></td><td></td><td><em>našeho</em></td><td><em>naší</em></td><td></td></tr>
  <tr><td><tt><a href="Case.html">Case</a>=Gen|<a href="Number.html">Number</a>=Sing|<a href="Number[psor].html">Number[psor]</a>=Sing</tt></td><td></td><td></td><td><em>mého</em></td><td><em>mé</em></td><td></td></tr>
  <tr><td><tt><a href="Case.html">Case</a>=Gen|<a href="Number.html">Number</a>=Sing|<a href="Number[psor].html">Number[psor]</a>=Sing|<a href="Style.html">Style</a>=Coll</tt></td><td></td><td></td><td><em>mýho</em></td><td></td><td></td></tr>
  <tr><td><tt><a href="Case.html">Case</a>=Ins|<a href="Number.html">Number</a>=Sing|<a href="Number[psor].html">Number[psor]</a>=Plur</tt></td><td></td><td></td><td><em>naším</em></td><td><em>naší</em></td><td></td></tr>
  <tr><td><tt><a href="Case.html">Case</a>=Ins|<a href="Number.html">Number</a>=Sing|<a href="Number[psor].html">Number[psor]</a>=Plur|<a href="Style.html">Style</a>=Coll</tt></td><td></td><td></td><td><em>našim</em></td><td></td><td></td></tr>
  <tr><td><tt><a href="Case.html">Case</a>=Ins|<a href="Number.html">Number</a>=Sing|<a href="Number[psor].html">Number[psor]</a>=Sing</tt></td><td></td><td></td><td><em>mým</em></td><td><em>mou, mojí</em></td><td></td></tr>
  <tr><td><tt><a href="Case.html">Case</a>=Loc|<a href="Number.html">Number</a>=Sing|<a href="Number[psor].html">Number[psor]</a>=Plur</tt></td><td></td><td></td><td><em>našem</em></td><td><em>naší</em></td><td></td></tr>
  <tr><td><tt><a href="Case.html">Case</a>=Loc|<a href="Number.html">Number</a>=Sing|<a href="Number[psor].html">Number[psor]</a>=Sing</tt></td><td></td><td></td><td><em>mém</em></td><td><em>mé</em></td><td></td></tr>
  <tr><td><tt><a href="Case.html">Case</a>=Nom|<a href="Number.html">Number</a>=Sing|<a href="Number[psor].html">Number[psor]</a>=Plur</tt></td><td><em>naše</em></td><td><em>náš</em></td><td></td><td></td><td></td></tr>
  <tr><td><tt><a href="Case.html">Case</a>=Nom|<a href="Number.html">Number</a>=Sing|<a href="Number[psor].html">Number[psor]</a>=Sing</tt></td><td><em>moje</em></td><td><em>můj</em></td><td></td><td><em>má</em></td><td><em>mé</em></td></tr>
  <tr><td><tt><a href="Case.html">Case</a>=Nom|<a href="Number.html">Number</a>=Plur|<a href="Number[psor].html">Number[psor]</a>=Plur</tt></td><td><em>naše</em></td><td></td><td></td><td></td><td></td></tr>
  <tr><td><tt><a href="Case.html">Case</a>=Nom|<a href="Number.html">Number</a>=Plur|<a href="Number[psor].html">Number[psor]</a>=Sing</tt></td><td><em>moje</em></td><td></td><td></td><td><em>mé</em></td><td></td></tr>
  <tr><td><tt><a href="Case.html">Case</a>=Voc|<a href="Number.html">Number</a>=Sing|<a href="Number[psor].html">Number[psor]</a>=Plur</tt></td><td></td><td><em>náš</em></td><td></td><td></td><td></td></tr>
  <tr><td><tt><a href="Case.html">Case</a>=Voc|<a href="Number.html">Number</a>=Sing|<a href="Number[psor].html">Number[psor]</a>=Sing</tt></td><td><em>moje</em></td><td><em>můj</em></td><td></td><td><em>má</em></td><td></td></tr>
</table>

### `PRON`

7004 [cs-pos/PRON]() tokens (18% of all `PRON` tokens) have a non-empty value of `Gender`.

The most frequent other feature values with which `PRON` and `Gender` co-occurred: <tt><a href="Reflex.html">Reflex</a>=EMPTY</tt> (7004; 100%), <tt><a href="Variant.html">Variant</a>=EMPTY</tt> (5896; 84%), <tt><a href="Number.html">Number</a>=Sing</tt> (5295; 76%), <tt><a href="PrepCase.html">PrepCase</a>=EMPTY</tt> (4233; 60%), <tt><a href="PronType.html">PronType</a>=Prs</tt> (3952; 56%), <tt><a href="Person.html">Person</a>=3</tt> (3952; 56%).

`PRON` tokens may have the following values of `Gender`:

* `Fem` (1828; 26% of non-empty `Gender`): <em>ji, ní, níž, jí, jež, ni, ona, veškeré, jíž, niž</em>
* `Masc` (1909; 27% of non-empty `Gender`): <em>kdo, nikdo, někdo, jenž, on, oni, koho, komu, nikoho, někoho</em>
* `Masc,Neut` (3069; 44% of non-empty `Gender`): <em>mu, ho, něj, jej, němž, něm, jehož, něho, ním, něhož</em>
* `Neut` (198; 3% of non-empty `Gender`): <em>jež, je, ono, ně, veškeré, it, něž, všecko, All, veškerá</em>
* `EMPTY` (32660): <em>se, si, co, nás, je, nám, nich, což, jim, nic</em>

<table>
  <tr><th>Paradigm <i>on</i></th><th><tt>Masc</tt></th><th><tt>Masc,Neut</tt></th><th><tt>Fem</tt></th><th><tt>Neut</tt></th></tr>
  <tr><td><tt><a href="Animacy.html">Animacy</a>=Anim|<a href="Case.html">Case</a>=Nom|<a href="Number.html">Number</a>=Plur</tt></td><td><em>oni</em></td><td></td><td></td><td></td></tr>
  <tr><td><tt><a href="Animacy.html">Animacy</a>=Inan|<a href="Case.html">Case</a>=Nom|<a href="Number.html">Number</a>=Plur</tt></td><td><em>ony</em></td><td></td><td></td><td></td></tr>
  <tr><td><tt><a href="Case.html">Case</a>=Acc|<a href="Number.html">Number</a>=Sing|<a href="PrepCase.html">PrepCase</a>=Pre</tt></td><td></td><td><em>něj, něho</em></td><td><em>ni</em></td><td><em>ně</em></td></tr>
  <tr><td><tt><a href="Case.html">Case</a>=Acc|<a href="Number.html">Number</a>=Sing|<a href="PrepCase.html">PrepCase</a>=Pre|<a href="Style.html">Style</a>=Coll</tt></td><td></td><td></td><td><em>ní</em></td><td></td></tr>
  <tr><td><tt><a href="Case.html">Case</a>=Acc|<a href="Number.html">Number</a>=Sing</tt></td><td><em>jeho</em></td><td></td><td><em>ji, jí</em></td><td><em>je</em></td></tr>
  <tr><td><tt><a href="Case.html">Case</a>=Acc|<a href="Number.html">Number</a>=Sing|<a href="Style.html">Style</a>=Arch</tt></td><td></td><td><em>jej</em></td><td></td><td></td></tr>
  <tr><td><tt><a href="Case.html">Case</a>=Acc|<a href="Number.html">Number</a>=Sing|<a href="Variant.html">Variant</a>=Short</tt></td><td></td><td><em>ho</em></td><td></td><td></td></tr>
  <tr><td><tt><a href="Case.html">Case</a>=Dat|<a href="Number.html">Number</a>=Sing|<a href="PrepCase.html">PrepCase</a>=Pre</tt></td><td></td><td><em>němu</em></td><td><em>ní</em></td><td></td></tr>
  <tr><td><tt><a href="Case.html">Case</a>=Dat|<a href="Number.html">Number</a>=Sing</tt></td><td></td><td><em>jemu</em></td><td><em>jí, ji</em></td><td></td></tr>
  <tr><td><tt><a href="Case.html">Case</a>=Dat|<a href="Number.html">Number</a>=Sing|<a href="Variant.html">Variant</a>=Short</tt></td><td></td><td><em>mu</em></td><td></td><td></td></tr>
  <tr><td><tt><a href="Case.html">Case</a>=Gen|<a href="Number.html">Number</a>=Sing|<a href="PrepCase.html">PrepCase</a>=Pre</tt></td><td></td><td><em>něj, něho</em></td><td><em>ní</em></td><td></td></tr>
  <tr><td><tt><a href="Case.html">Case</a>=Gen|<a href="Number.html">Number</a>=Sing</tt></td><td><em>jeho</em></td><td><em>jej</em></td><td><em>jí</em></td><td></td></tr>
  <tr><td><tt><a href="Case.html">Case</a>=Gen|<a href="Number.html">Number</a>=Sing|<a href="Variant.html">Variant</a>=Short</tt></td><td></td><td><em>ho</em></td><td></td><td></td></tr>
  <tr><td><tt><a href="Case.html">Case</a>=Ins|<a href="Number.html">Number</a>=Sing|<a href="PrepCase.html">PrepCase</a>=Pre</tt></td><td></td><td><em>ním</em></td><td><em>ní</em></td><td></td></tr>
  <tr><td><tt><a href="Case.html">Case</a>=Ins|<a href="Number.html">Number</a>=Sing</tt></td><td></td><td><em>jím</em></td><td><em>jí</em></td><td></td></tr>
  <tr><td><tt><a href="Case.html">Case</a>=Loc|<a href="Number.html">Number</a>=Sing|<a href="PrepCase.html">PrepCase</a>=Pre</tt></td><td></td><td><em>něm</em></td><td><em>ní</em></td><td></td></tr>
  <tr><td><tt><a href="Case.html">Case</a>=Nom|<a href="Number.html">Number</a>=Sing</tt></td><td><em>on</em></td><td></td><td><em>ona</em></td><td><em>ono</em></td></tr>
  <tr><td><tt><a href="Case.html">Case</a>=Nom|<a href="Number.html">Number</a>=Plur</tt></td><td></td><td></td><td><em>ony</em></td><td></td></tr>
</table>

### `AUX`

6012 [cs-pos/AUX]() tokens (17% of all `AUX` tokens) have a non-empty value of `Gender`.

The most frequent other feature values with which `AUX` and `Gender` co-occurred: <tt><a href="Person.html">Person</a>=EMPTY</tt> (6012; 100%), <tt><a href="Mood.html">Mood</a>=EMPTY</tt> (6012; 100%), <tt><a href="Voice.html">Voice</a>=Act</tt> (6012; 100%), <tt><a href="Tense.html">Tense</a>=Past</tt> (6008; 100%), <tt><a href="VerbForm.html">VerbForm</a>=Part</tt> (6008; 100%), <tt><a href="Polarity.html">Polarity</a>=Pos</tt> (5413; 90%), <tt><a href="Number.html">Number</a>=Sing</tt> (3519; 59%).

`AUX` tokens may have the following values of `Gender`:

* `Fem,Masc` (760; 13% of non-empty `Gender`): <em>byly, nebyly, bývaly, bývávaly</em>
* `Fem,Neut` (1376; 23% of non-empty `Gender`): <em>byla, nebyla, bývala, jsouc</em>
* `Masc` (2405; 40% of non-empty `Gender`): <em>byl, byli, nebyl, nebyli, býval, jsa, bývali, nemohl, stal</em>
* `Neut` (1471; 24% of non-empty `Gender`): <em>bylo, nebylo, bývalo, nebývalo, stalo</em>
* `EMPTY` (30326): <em>je, by, jsou, bude, být, jsem, jsme, není, budou, bychom</em>

<table>
  <tr><th>Paradigm <i>být</i></th><th><tt>Fem,Masc</tt></th><th><tt>Fem,Neut</tt></th><th><tt>Masc</tt></th><th><tt>Neut</tt></th></tr>
  <tr><td><tt><a href="Animacy.html">Animacy</a>=Anim|<a href="Number.html">Number</a>=Plur|<a href="Polarity.html">Polarity</a>=Neg|<a href="Tense.html">Tense</a>=Past|<a href="VerbForm.html">VerbForm</a>=Part</tt></td><td></td><td></td><td><em>nebyli</em></td><td></td></tr>
  <tr><td><tt><a href="Animacy.html">Animacy</a>=Anim|<a href="Number.html">Number</a>=Plur|<a href="Polarity.html">Polarity</a>=Pos|<a href="Tense.html">Tense</a>=Past|<a href="VerbForm.html">VerbForm</a>=Part</tt></td><td></td><td></td><td><em>byli</em></td><td></td></tr>
  <tr><td><tt><a href="Animacy.html">Animacy</a>=Inan|<a href="Number.html">Number</a>=Plur|<a href="Polarity.html">Polarity</a>=Neg|<a href="Tense.html">Tense</a>=Past|<a href="VerbForm.html">VerbForm</a>=Part</tt></td><td><em>nebyly</em></td><td></td><td></td><td></td></tr>
  <tr><td><tt><a href="Animacy.html">Animacy</a>=Inan|<a href="Number.html">Number</a>=Plur|<a href="Polarity.html">Polarity</a>=Pos|<a href="Tense.html">Tense</a>=Past|<a href="VerbForm.html">VerbForm</a>=Part</tt></td><td><em>byly</em></td><td></td><td></td><td></td></tr>
  <tr><td><tt><a href="Aspect.html">Aspect</a>=Imp|<a href="Number.html">Number</a>=Sing|<a href="Polarity.html">Polarity</a>=Pos|<a href="Tense.html">Tense</a>=Pres|<a href="VerbForm.html">VerbForm</a>=Conv</tt></td><td></td><td><em>jsouc</em></td><td><em>jsa</em></td><td></td></tr>
  <tr><td><tt><a href="Number.html">Number</a>=Sing|<a href="Polarity.html">Polarity</a>=Neg|<a href="Tense.html">Tense</a>=Past|<a href="VerbForm.html">VerbForm</a>=Part</tt></td><td></td><td></td><td><em>nebyl</em></td><td><em>nebylo</em></td></tr>
  <tr><td><tt><a href="Number.html">Number</a>=Sing|<a href="Polarity.html">Polarity</a>=Pos|<a href="Tense.html">Tense</a>=Past|<a href="VerbForm.html">VerbForm</a>=Part</tt></td><td></td><td></td><td><em>byl</em></td><td><em>bylo</em></td></tr>
  <tr><td><tt><a href="Number.html">Number</a>=Plur,Sing|<a href="Polarity.html">Polarity</a>=Neg|<a href="Tense.html">Tense</a>=Past|<a href="VerbForm.html">VerbForm</a>=Part</tt></td><td></td><td><em>nebyla</em></td><td></td><td></td></tr>
  <tr><td><tt><a href="Number.html">Number</a>=Plur,Sing|<a href="Polarity.html">Polarity</a>=Pos|<a href="Tense.html">Tense</a>=Past|<a href="VerbForm.html">VerbForm</a>=Part</tt></td><td></td><td><em>byla</em></td><td></td><td></td></tr>
</table>

### `NUM`

4177 [cs-pos/NUM]() tokens (11% of all `NUM` tokens) have a non-empty value of `Gender`.

The most frequent other feature values with which `NUM` and `Gender` co-occurred: <tt><a href="NumType.html">NumType</a>=Card</tt> (3882; 93%), <tt><a href="NumForm.html">NumForm</a>=Word</tt> (3882; 93%), <tt><a href="NumValue.html">NumValue</a>=1,2,3</tt> (3882; 93%), <tt><a href="Number.html">Number</a>=Sing</tt> (2457; 59%).

`NUM` tokens may have the following values of `Gender`:

* `Fem` (1186; 28% of non-empty `Gender`): <em>jedné, jednu, jedna, jednou, třetiny, třetinu, třetina, čtvrtinu, třetině, čtvrtina</em>
* `Fem,Neut` (665; 16% of non-empty `Gender`): <em>dvě, obě</em>
* `Masc` (1625; 39% of non-empty `Gender`): <em>dva, jeden, oba, jednoho</em>
* `Masc,Neut` (546; 13% of non-empty `Gender`): <em>jednoho, jedním, jednom, jednomu</em>
* `Neut` (155; 4% of non-empty `Gender`): <em>jedno</em>
* `EMPTY` (32665): <em>1, 2, 3, tři, 4, 6, 5, tisíc, dvou, 10</em>

<table>
  <tr><th>Paradigm <i>jeden</i></th><th><tt>Masc</tt></th><th><tt>Masc,Neut</tt></th><th><tt>Fem</tt></th><th><tt>Neut</tt></th></tr>
  <tr><td><tt><a href="Animacy.html">Animacy</a>=Anim|<a href="Case.html">Case</a>=Acc</tt></td><td><em>jednoho</em></td><td></td><td></td><td></td></tr>
  <tr><td><tt><a href="Animacy.html">Animacy</a>=Inan|<a href="Case.html">Case</a>=Acc</tt></td><td><em>jeden</em></td><td></td><td></td><td></td></tr>
  <tr><td><tt><a href="Case.html">Case</a>=Acc</tt></td><td></td><td></td><td><em>jednu</em></td><td><em>jedno</em></td></tr>
  <tr><td><tt><a href="Case.html">Case</a>=Dat</tt></td><td></td><td><em>jednomu</em></td><td><em>jedné</em></td><td></td></tr>
  <tr><td><tt><a href="Case.html">Case</a>=Gen</tt></td><td></td><td><em>jednoho</em></td><td><em>jedné</em></td><td></td></tr>
  <tr><td><tt><a href="Case.html">Case</a>=Ins</tt></td><td></td><td><em>jedním</em></td><td><em>jednou</em></td><td></td></tr>
  <tr><td><tt><a href="Case.html">Case</a>=Loc</tt></td><td></td><td><em>jednom</em></td><td><em>jedné</em></td><td></td></tr>
  <tr><td><tt><a href="Case.html">Case</a>=Nom</tt></td><td><em>jeden</em></td><td></td><td><em>jedna</em></td><td><em>jedno</em></td></tr>
</table>

## Relations with Agreement in `Gender`

The 10 most frequent relations where parent and child node agree in `Gender`:
<tt>NOUN --[<a href="../dep/amod.html">amod</a>]--> ADJ</tt> (131837; 98%),
<tt>PROPN --[<a href="../dep/flat.html">flat</a>]--> PROPN</tt> (11958; 99%),
<tt>PROPN --[<a href="../dep/nmod.html">nmod</a>]--> NOUN</tt> (7465; 88%),
<tt>VERB --[<a href="../dep/nsubj.html">nsubj</a>]--> PROPN</tt> (6414; 53%),
<tt>ADJ --[<a href="../dep/conj.html">conj</a>]--> ADJ</tt> (5032; 90%),
<tt>ADJ --[<a href="../dep/nsubj.html">nsubj</a>]--> NOUN</tt> (4065; 82%),
<tt>PROPN --[<a href="../dep/conj.html">conj</a>]--> PROPN</tt> (3919; 68%),
<tt>PROPN --[<a href="../dep/amod.html">amod</a>]--> ADJ</tt> (3806; 82%),
<tt>VERB --[<a href="../dep/conj.html">conj</a>]--> VERB</tt> (3529; 55%),
<tt>ADJ --[<a href="../dep/aux:pass.html">aux:pass</a>]--> AUX</tt> (2768; 51%).



--------------------------------------------------------------------------------

## Treebank Statistics (UD_Czech-CAC)

This feature is universal.
It occurs with 3 different values: `Fem`, `Masc`, `Neut`.
Some words have combined values of the feature; 3 combinations have been observed: `Fem|Masc`, `Fem|Neut`, `Masc|Neut`.

This is a <a href="../../u/overview/feat-layers.html">layered feature</a> with the following layers: [Gender](), [Gender[psor]]().

247091 tokens (51%) have a non-empty value of `Gender`.
57417 types (93%) occur at least once with a non-empty value of `Gender`.
24827 lemmas (88%) occur at least once with a non-empty value of `Gender`.
The feature is used with 8 part-of-speech tags: [cs-pos/NOUN]() (133120; 28% instances), [cs-pos/ADJ]() (72876; 15% instances), [cs-pos/DET]() (14680; 3% instances), [cs-pos/VERB]() (10369; 2% instances), [cs-pos/PROPN]() (9665; 2% instances), [cs-pos/PRON]() (2793; 1% instances), [cs-pos/AUX]() (2415; 0% instances), [cs-pos/NUM]() (1173; 0% instances).

### `NOUN`

133120 [cs-pos/NOUN]() tokens (100% of all `NOUN` tokens) have a non-empty value of `Gender`.

The most frequent other feature values with which `NOUN` and `Gender` co-occurred: <tt><a href="Polarity.html">Polarity</a>=Pos</tt> (132927; 100%), <tt><a href="Number.html">Number</a>=Sing</tt> (93135; 70%), <tt><a href="Animacy.html">Animacy</a>=EMPTY</tt> (77962; 59%).

`NOUN` tokens may have the following values of `Gender`:

* `Fem` (53753; 40% of non-empty `Gender`): <em>práce, práci, oblasti, době, společnosti, činnosti, výroby, teorie, organizace, strany</em>
* `Masc` (55158; 41% of non-empty `Gender`): <em>roce, roku, pracovníků, úkolů, výsledky, jazyka, procesu, lidí, člověka, podniku</em>
* `Neut` (24209; 18% of non-empty `Gender`): <em>let, hlediska, období, prostředí, zařízení, řešení, plnění, množství, století, poznání</em>
* `EMPTY` (39): <em>luxe, nepusto, pusto, PN, r, I, Las, MDAS, UBV, causa</em>

<table>
  <tr><th>Paradigm <i>rok</i></th><th><tt>Masc</tt></th><th><tt>Neut</tt></th></tr>
  <tr><td><tt><a href="Animacy.html">Animacy</a>=Inan|<a href="Case.html">Case</a>=Acc|<a href="Number.html">Number</a>=Sing</tt></td><td><em>rok</em></td><td></td></tr>
  <tr><td><tt><a href="Animacy.html">Animacy</a>=Inan|<a href="Case.html">Case</a>=Acc|<a href="Number.html">Number</a>=Plur</tt></td><td><em>roky</em></td><td></td></tr>
  <tr><td><tt><a href="Animacy.html">Animacy</a>=Inan|<a href="Case.html">Case</a>=Dat|<a href="Number.html">Number</a>=Sing</tt></td><td><em>roku</em></td><td></td></tr>
  <tr><td><tt><a href="Animacy.html">Animacy</a>=Inan|<a href="Case.html">Case</a>=Gen|<a href="Number.html">Number</a>=Sing</tt></td><td><em>roku, roka</em></td><td></td></tr>
  <tr><td><tt><a href="Animacy.html">Animacy</a>=Inan|<a href="Case.html">Case</a>=Gen|<a href="Number.html">Number</a>=Plur</tt></td><td><em>roků</em></td><td></td></tr>
  <tr><td><tt><a href="Animacy.html">Animacy</a>=Inan|<a href="Case.html">Case</a>=Ins|<a href="Number.html">Number</a>=Sing</tt></td><td><em>rokem</em></td><td></td></tr>
  <tr><td><tt><a href="Animacy.html">Animacy</a>=Inan|<a href="Case.html">Case</a>=Ins|<a href="Number.html">Number</a>=Plur</tt></td><td><em>roky</em></td><td></td></tr>
  <tr><td><tt><a href="Animacy.html">Animacy</a>=Inan|<a href="Case.html">Case</a>=Loc|<a href="Number.html">Number</a>=Sing</tt></td><td><em>roce</em></td><td></td></tr>
  <tr><td><tt><a href="Animacy.html">Animacy</a>=Inan|<a href="Case.html">Case</a>=Nom|<a href="Number.html">Number</a>=Sing</tt></td><td><em>rok</em></td><td></td></tr>
  <tr><td><tt><a href="Animacy.html">Animacy</a>=Inan|<a href="Case.html">Case</a>=Nom|<a href="Number.html">Number</a>=Plur</tt></td><td><em>roky</em></td><td></td></tr>
  <tr><td><tt><a href="Case.html">Case</a>=Gen|<a href="Number.html">Number</a>=Plur</tt></td><td></td><td><em>let</em></td></tr>
  <tr><td><tt><a href="Case.html">Case</a>=Ins|<a href="Number.html">Number</a>=Plur</tt></td><td></td><td><em>lety</em></td></tr>
  <tr><td><tt><a href="Case.html">Case</a>=Loc|<a href="Number.html">Number</a>=Plur</tt></td><td></td><td><em>letech</em></td></tr>
</table>

`Gender` seems to be **lexical feature** of `NOUN`. 100% lemmas (10919) occur only with one value of `Gender`.

### `ADJ`

72876 [cs-pos/ADJ]() tokens (100% of all `ADJ` tokens) have a non-empty value of `Gender`.

The most frequent other feature values with which `ADJ` and `Gender` co-occurred: <tt><a href="Polarity.html">Polarity</a>=Pos</tt> (70083; 96%), <tt><a href="Degree.html">Degree</a>=Pos</tt> (61736; 85%), <tt><a href="Number.html">Number</a>=Sing</tt> (46648; 64%), <tt><a href="Animacy.html">Animacy</a>=EMPTY</tt> (44219; 61%).

`ADJ` tokens may have the following values of `Gender`:

* `Fem` (28983; 40% of non-empty `Gender`): <em>pracovní, socialistické, další, první, nové, základní, současné, druhé, celé, společenské</em>
* `Fem,Masc` (1116; 2% of non-empty `Gender`): <em>uvedeny, určeny, splněny, provedeny, stanoveny, připraveny, spojeny, umístěny, vytvořeny, charakterizovány</em>
* `Fem,Neut` (1123; 2% of non-empty `Gender`): <em>věnována, dána, provedena, určena, zahájena, povinna, založena, dokončena, stanovena, vybudována</em>
* `Masc` (28714; 39% of non-empty `Gender`): <em>každý, další, jednotlivých, první, základní, pracovní, dalších, velký, celý, nový</em>
* `Neut` (12940; 18% of non-empty `Gender`): <em>možno, možné, nutno, nutné, národního, další, posledních, jiné, řečeno, první</em>
* `EMPTY` (302): <em>Králové, marxisticko, elektro, fit, Karpatsko, dvojí, jedněch, online, rakousko, super</em>

<table>
  <tr><th>Paradigm <i>uvedený</i></th><th><tt>Fem,Masc</tt></th><th><tt>Fem,Neut</tt></th><th><tt>Masc</tt></th><th><tt>Fem</tt></th><th><tt>Neut</tt></th></tr>
  <tr><td><tt><a href="Animacy.html">Animacy</a>=Anim|<a href="Case.html">Case</a>=Gen|<a href="Degree.html">Degree</a>=Pos|<a href="Number.html">Number</a>=Plur|<a href="Polarity.html">Polarity</a>=Pos</tt></td><td></td><td></td><td><em>uvedených</em></td><td></td><td></td></tr>
  <tr><td><tt><a href="Animacy.html">Animacy</a>=Anim|<a href="Case.html">Case</a>=Nom|<a href="Degree.html">Degree</a>=Pos|<a href="Number.html">Number</a>=Sing|<a href="Polarity.html">Polarity</a>=Pos</tt></td><td></td><td></td><td><em>uvedený</em></td><td></td><td></td></tr>
  <tr><td><tt><a href="Animacy.html">Animacy</a>=Anim|<a href="Case.html">Case</a>=Nom|<a href="Degree.html">Degree</a>=Pos|<a href="Number.html">Number</a>=Plur|<a href="Polarity.html">Polarity</a>=Pos</tt></td><td></td><td></td><td><em>uvedení</em></td><td></td><td></td></tr>
  <tr><td><tt><a href="Animacy.html">Animacy</a>=Anim|<a href="Number.html">Number</a>=Plur|<a href="Polarity.html">Polarity</a>=Pos|<a href="Variant.html">Variant</a>=Short|<a href="VerbForm.html">VerbForm</a>=Part|<a href="Voice.html">Voice</a>=Pass</tt></td><td></td><td></td><td><em>uvedeni</em></td><td></td><td></td></tr>
  <tr><td><tt><a href="Animacy.html">Animacy</a>=Inan|<a href="Case.html">Case</a>=Acc|<a href="Degree.html">Degree</a>=Pos|<a href="Number.html">Number</a>=Sing|<a href="Polarity.html">Polarity</a>=Pos</tt></td><td></td><td></td><td><em>uvedený</em></td><td></td><td></td></tr>
  <tr><td><tt><a href="Animacy.html">Animacy</a>=Inan|<a href="Case.html">Case</a>=Acc|<a href="Degree.html">Degree</a>=Pos|<a href="Number.html">Number</a>=Plur|<a href="Polarity.html">Polarity</a>=Neg</tt></td><td></td><td></td><td><em>neuvedené</em></td><td></td><td></td></tr>
  <tr><td><tt><a href="Animacy.html">Animacy</a>=Inan|<a href="Case.html">Case</a>=Acc|<a href="Degree.html">Degree</a>=Pos|<a href="Number.html">Number</a>=Plur|<a href="Polarity.html">Polarity</a>=Pos</tt></td><td></td><td></td><td><em>uvedené</em></td><td></td><td></td></tr>
  <tr><td><tt><a href="Animacy.html">Animacy</a>=Inan|<a href="Case.html">Case</a>=Dat|<a href="Degree.html">Degree</a>=Pos|<a href="Number.html">Number</a>=Plur|<a href="Polarity.html">Polarity</a>=Pos</tt></td><td></td><td></td><td><em>uvedeným</em></td><td></td><td></td></tr>
  <tr><td><tt><a href="Animacy.html">Animacy</a>=Inan|<a href="Case.html">Case</a>=Gen|<a href="Degree.html">Degree</a>=Pos|<a href="Number.html">Number</a>=Sing|<a href="Polarity.html">Polarity</a>=Pos</tt></td><td></td><td></td><td><em>uvedeného</em></td><td></td><td></td></tr>
  <tr><td><tt><a href="Animacy.html">Animacy</a>=Inan|<a href="Case.html">Case</a>=Gen|<a href="Degree.html">Degree</a>=Pos|<a href="Number.html">Number</a>=Plur|<a href="Polarity.html">Polarity</a>=Pos</tt></td><td></td><td></td><td><em>uvedených</em></td><td></td><td></td></tr>
  <tr><td><tt><a href="Animacy.html">Animacy</a>=Inan|<a href="Case.html">Case</a>=Ins|<a href="Degree.html">Degree</a>=Pos|<a href="Number.html">Number</a>=Sing|<a href="Polarity.html">Polarity</a>=Pos</tt></td><td></td><td></td><td><em>uvedeným</em></td><td></td><td></td></tr>
  <tr><td><tt><a href="Animacy.html">Animacy</a>=Inan|<a href="Case.html">Case</a>=Ins|<a href="Degree.html">Degree</a>=Pos|<a href="Number.html">Number</a>=Plur|<a href="Polarity.html">Polarity</a>=Pos</tt></td><td></td><td></td><td><em>uvedenými</em></td><td></td><td></td></tr>
  <tr><td><tt><a href="Animacy.html">Animacy</a>=Inan|<a href="Case.html">Case</a>=Loc|<a href="Degree.html">Degree</a>=Pos|<a href="Number.html">Number</a>=Sing|<a href="Polarity.html">Polarity</a>=Pos</tt></td><td></td><td></td><td><em>uvedeném</em></td><td></td><td></td></tr>
  <tr><td><tt><a href="Animacy.html">Animacy</a>=Inan|<a href="Case.html">Case</a>=Loc|<a href="Degree.html">Degree</a>=Pos|<a href="Number.html">Number</a>=Plur|<a href="Polarity.html">Polarity</a>=Pos</tt></td><td></td><td></td><td><em>uvedených</em></td><td></td><td></td></tr>
  <tr><td><tt><a href="Animacy.html">Animacy</a>=Inan|<a href="Case.html">Case</a>=Nom|<a href="Degree.html">Degree</a>=Pos|<a href="Number.html">Number</a>=Sing|<a href="Polarity.html">Polarity</a>=Pos</tt></td><td></td><td></td><td><em>uvedený</em></td><td></td><td></td></tr>
  <tr><td><tt><a href="Animacy.html">Animacy</a>=Inan|<a href="Case.html">Case</a>=Nom|<a href="Degree.html">Degree</a>=Pos|<a href="Number.html">Number</a>=Plur|<a href="Polarity.html">Polarity</a>=Pos</tt></td><td></td><td></td><td><em>uvedené</em></td><td></td><td></td></tr>
  <tr><td><tt><a href="Animacy.html">Animacy</a>=Inan|<a href="Number.html">Number</a>=Plur|<a href="Polarity.html">Polarity</a>=Pos|<a href="Variant.html">Variant</a>=Short|<a href="VerbForm.html">VerbForm</a>=Part|<a href="Voice.html">Voice</a>=Pass</tt></td><td><em>uvedeny</em></td><td></td><td></td><td></td><td></td></tr>
  <tr><td><tt><a href="Case.html">Case</a>=Acc|<a href="Degree.html">Degree</a>=Pos|<a href="Number.html">Number</a>=Sing|<a href="Polarity.html">Polarity</a>=Pos</tt></td><td></td><td></td><td></td><td><em>uvedenou</em></td><td><em>uvedené</em></td></tr>
  <tr><td><tt><a href="Case.html">Case</a>=Acc|<a href="Degree.html">Degree</a>=Pos|<a href="Number.html">Number</a>=Plur|<a href="Polarity.html">Polarity</a>=Pos</tt></td><td></td><td></td><td></td><td><em>uvedené</em></td><td><em>Uvedená</em></td></tr>
  <tr><td><tt><a href="Case.html">Case</a>=Dat|<a href="Degree.html">Degree</a>=Pos|<a href="Number.html">Number</a>=Sing|<a href="Polarity.html">Polarity</a>=Pos</tt></td><td></td><td></td><td></td><td><em>uvedené</em></td><td><em>uvedenému</em></td></tr>
  <tr><td><tt><a href="Case.html">Case</a>=Dat|<a href="Degree.html">Degree</a>=Pos|<a href="Number.html">Number</a>=Plur|<a href="Polarity.html">Polarity</a>=Pos</tt></td><td></td><td></td><td></td><td><em>uvedeným</em></td><td></td></tr>
  <tr><td><tt><a href="Case.html">Case</a>=Gen|<a href="Degree.html">Degree</a>=Pos|<a href="Number.html">Number</a>=Sing|<a href="Polarity.html">Polarity</a>=Pos</tt></td><td></td><td></td><td></td><td><em>uvedené</em></td><td><em>uvedeného</em></td></tr>
  <tr><td><tt><a href="Case.html">Case</a>=Gen|<a href="Degree.html">Degree</a>=Pos|<a href="Number.html">Number</a>=Plur|<a href="Polarity.html">Polarity</a>=Pos</tt></td><td></td><td></td><td></td><td><em>uvedených</em></td><td><em>uvedených</em></td></tr>
  <tr><td><tt><a href="Case.html">Case</a>=Ins|<a href="Degree.html">Degree</a>=Pos|<a href="Number.html">Number</a>=Sing|<a href="Polarity.html">Polarity</a>=Pos</tt></td><td></td><td></td><td></td><td><em>uvedenou</em></td><td><em>uvedeným</em></td></tr>
  <tr><td><tt><a href="Case.html">Case</a>=Ins|<a href="Degree.html">Degree</a>=Pos|<a href="Number.html">Number</a>=Plur|<a href="Polarity.html">Polarity</a>=Pos</tt></td><td></td><td></td><td></td><td><em>uvedenými</em></td><td><em>uvedenými</em></td></tr>
  <tr><td><tt><a href="Case.html">Case</a>=Loc|<a href="Degree.html">Degree</a>=Pos|<a href="Number.html">Number</a>=Sing|<a href="Polarity.html">Polarity</a>=Pos</tt></td><td></td><td></td><td></td><td><em>uvedené</em></td><td><em>uvedeném</em></td></tr>
  <tr><td><tt><a href="Case.html">Case</a>=Loc|<a href="Degree.html">Degree</a>=Pos|<a href="Number.html">Number</a>=Plur|<a href="Polarity.html">Polarity</a>=Pos</tt></td><td></td><td></td><td></td><td><em>uvedených</em></td><td><em>uvedených</em></td></tr>
  <tr><td><tt><a href="Case.html">Case</a>=Nom|<a href="Degree.html">Degree</a>=Pos|<a href="Number.html">Number</a>=Sing|<a href="Polarity.html">Polarity</a>=Pos</tt></td><td></td><td></td><td></td><td><em>uvedená</em></td><td><em>uvedené</em></td></tr>
  <tr><td><tt><a href="Case.html">Case</a>=Nom|<a href="Degree.html">Degree</a>=Pos|<a href="Number.html">Number</a>=Plur|<a href="Polarity.html">Polarity</a>=Pos</tt></td><td></td><td></td><td></td><td><em>uvedené</em></td><td><em>uvedená</em></td></tr>
  <tr><td><tt><a href="Number.html">Number</a>=Sing|<a href="Polarity.html">Polarity</a>=Pos|<a href="Variant.html">Variant</a>=Short|<a href="VerbForm.html">VerbForm</a>=Part|<a href="Voice.html">Voice</a>=Pass</tt></td><td></td><td></td><td><em>uveden</em></td><td></td><td><em>uvedeno</em></td></tr>
  <tr><td><tt><a href="Number.html">Number</a>=Plur,Sing|<a href="Polarity.html">Polarity</a>=Pos|<a href="Variant.html">Variant</a>=Short|<a href="VerbForm.html">VerbForm</a>=Part|<a href="Voice.html">Voice</a>=Pass</tt></td><td></td><td><em>uvedena</em></td><td></td><td></td><td></td></tr>
</table>

### `DET`

14680 [cs-pos/DET]() tokens (77% of all `DET` tokens) have a non-empty value of `Gender`.

The most frequent other feature values with which `DET` and `Gender` co-occurred: <tt><a href="Person.html">Person</a>=EMPTY</tt> (13182; 90%), <tt><a href="Number[psor].html">Number[psor]</a>=EMPTY</tt> (13182; 90%), <tt><a href="Animacy.html">Animacy</a>=EMPTY</tt> (12665; 86%), <tt><a href="Poss.html">Poss</a>=EMPTY</tt> (12023; 82%), <tt><a href="Number.html">Number</a>=Sing</tt> (11627; 79%).

`DET` tokens may have the following values of `Gender`:

* `Fem` (4480; 31% of non-empty `Gender`): <em>které, která, této, své, naší, tato, svou, tyto, kterou, tuto</em>
* `Fem,Neut` (131; 1% of non-empty `Gender`): <em>naše, moje, vaše, tvoje</em>
* `Masc` (3491; 24% of non-empty `Gender`): <em>který, které, kteří, tento, tyto, sám, některé, svůj, ten, ty</em>
* `Masc,Neut` (3538; 24% of non-empty `Gender`): <em>tím, tom, toho, tohoto, tomu, tomto, našeho, svého, našem, svým</em>
* `Neut` (3040; 21% of non-empty `Gender`): <em>to, které, toto, která, své, tato, takové, některá, její, totéž</em>
* `EMPTY` (4361): <em>jejich, jeho, těchto, některých, několik, svých, mnoho, našich, jejichž, jehož</em>

<table>
  <tr><th>Paradigm <i>můj</i></th><th><tt>Fem,Neut</tt></th><th><tt>Masc</tt></th><th><tt>Masc,Neut</tt></th><th><tt>Fem</tt></th><th><tt>Neut</tt></th></tr>
  <tr><td><tt><a href="Animacy.html">Animacy</a>=Anim|<a href="Case.html">Case</a>=Acc|<a href="Number.html">Number</a>=Sing|<a href="Number[psor].html">Number[psor]</a>=Plur</tt></td><td></td><td><em>našeho</em></td><td></td><td></td><td></td></tr>
  <tr><td><tt><a href="Animacy.html">Animacy</a>=Anim|<a href="Case.html">Case</a>=Nom|<a href="Number.html">Number</a>=Plur|<a href="Number[psor].html">Number[psor]</a>=Plur</tt></td><td></td><td><em>naši</em></td><td></td><td></td><td></td></tr>
  <tr><td><tt><a href="Animacy.html">Animacy</a>=Anim|<a href="Case.html">Case</a>=Nom|<a href="Number.html">Number</a>=Plur|<a href="Number[psor].html">Number[psor]</a>=Sing</tt></td><td></td><td><em>moji</em></td><td></td><td></td><td></td></tr>
  <tr><td><tt><a href="Animacy.html">Animacy</a>=Inan|<a href="Case.html">Case</a>=Acc|<a href="Number.html">Number</a>=Sing|<a href="Number[psor].html">Number[psor]</a>=Plur</tt></td><td></td><td><em>náš</em></td><td></td><td></td><td></td></tr>
  <tr><td><tt><a href="Animacy.html">Animacy</a>=Inan|<a href="Case.html">Case</a>=Acc|<a href="Number.html">Number</a>=Sing|<a href="Number[psor].html">Number[psor]</a>=Sing</tt></td><td></td><td><em>můj</em></td><td></td><td></td><td></td></tr>
  <tr><td><tt><a href="Animacy.html">Animacy</a>=Inan|<a href="Case.html">Case</a>=Nom|<a href="Number.html">Number</a>=Plur|<a href="Number[psor].html">Number[psor]</a>=Plur</tt></td><td></td><td><em>naše</em></td><td></td><td></td><td></td></tr>
  <tr><td><tt><a href="Case.html">Case</a>=Acc|<a href="Number.html">Number</a>=Sing|<a href="Number[psor].html">Number[psor]</a>=Plur</tt></td><td></td><td></td><td></td><td><em>naši</em></td><td><em>naše</em></td></tr>
  <tr><td><tt><a href="Case.html">Case</a>=Acc|<a href="Number.html">Number</a>=Sing|<a href="Number[psor].html">Number[psor]</a>=Sing</tt></td><td></td><td></td><td></td><td><em>mou</em></td><td><em>moje</em></td></tr>
  <tr><td><tt><a href="Case.html">Case</a>=Acc|<a href="Number.html">Number</a>=Plur|<a href="Number[psor].html">Number[psor]</a>=Sing</tt></td><td></td><td><em>mé</em></td><td></td><td><em>mé</em></td><td></td></tr>
  <tr><td><tt><a href="Case.html">Case</a>=Dat|<a href="Number.html">Number</a>=Sing|<a href="Number[psor].html">Number[psor]</a>=Plur</tt></td><td></td><td></td><td><em>našemu</em></td><td><em>naší</em></td><td></td></tr>
  <tr><td><tt><a href="Case.html">Case</a>=Dat|<a href="Number.html">Number</a>=Sing|<a href="Number[psor].html">Number[psor]</a>=Sing</tt></td><td></td><td></td><td><em>mému</em></td><td><em>mé</em></td><td></td></tr>
  <tr><td><tt><a href="Case.html">Case</a>=Gen|<a href="Number.html">Number</a>=Sing|<a href="Number[psor].html">Number[psor]</a>=Plur</tt></td><td></td><td></td><td><em>našeho</em></td><td><em>naší</em></td><td></td></tr>
  <tr><td><tt><a href="Case.html">Case</a>=Gen|<a href="Number.html">Number</a>=Sing|<a href="Number[psor].html">Number[psor]</a>=Sing</tt></td><td></td><td></td><td><em>mého</em></td><td><em>mé, mojí</em></td><td></td></tr>
  <tr><td><tt><a href="Case.html">Case</a>=Ins|<a href="Number.html">Number</a>=Sing|<a href="Number[psor].html">Number[psor]</a>=Plur</tt></td><td></td><td></td><td><em>naším</em></td><td><em>naší</em></td><td></td></tr>
  <tr><td><tt><a href="Case.html">Case</a>=Ins|<a href="Number.html">Number</a>=Sing|<a href="Number[psor].html">Number[psor]</a>=Sing</tt></td><td></td><td></td><td><em>mým</em></td><td><em>mojí, mou</em></td><td></td></tr>
  <tr><td><tt><a href="Case.html">Case</a>=Ins|<a href="Number.html">Number</a>=Dual|<a href="Number[psor].html">Number[psor]</a>=Plur</tt></td><td></td><td></td><td></td><td><em>našima</em></td><td></td></tr>
  <tr><td><tt><a href="Case.html">Case</a>=Ins|<a href="Number.html">Number</a>=Dual|<a href="Number[psor].html">Number[psor]</a>=Sing</tt></td><td></td><td></td><td></td><td><em>mýma</em></td><td></td></tr>
  <tr><td><tt><a href="Case.html">Case</a>=Loc|<a href="Number.html">Number</a>=Sing|<a href="Number[psor].html">Number[psor]</a>=Plur</tt></td><td></td><td></td><td><em>našem</em></td><td><em>naší</em></td><td></td></tr>
  <tr><td><tt><a href="Case.html">Case</a>=Loc|<a href="Number.html">Number</a>=Sing|<a href="Number[psor].html">Number[psor]</a>=Sing</tt></td><td></td><td></td><td><em>mém</em></td><td><em>mé</em></td><td></td></tr>
  <tr><td><tt><a href="Case.html">Case</a>=Nom|<a href="Number.html">Number</a>=Sing|<a href="Number[psor].html">Number[psor]</a>=Plur</tt></td><td><em>naše</em></td><td><em>náš</em></td><td></td><td></td><td></td></tr>
  <tr><td><tt><a href="Case.html">Case</a>=Nom|<a href="Number.html">Number</a>=Sing|<a href="Number[psor].html">Number[psor]</a>=Sing</tt></td><td><em>moje</em></td><td><em>můj</em></td><td></td><td><em>má</em></td><td><em>mé</em></td></tr>
  <tr><td><tt><a href="Case.html">Case</a>=Nom|<a href="Number.html">Number</a>=Plur|<a href="Number[psor].html">Number[psor]</a>=Plur</tt></td><td><em>naše</em></td><td></td><td></td><td></td><td></td></tr>
  <tr><td><tt><a href="Case.html">Case</a>=Nom|<a href="Number.html">Number</a>=Plur|<a href="Number[psor].html">Number[psor]</a>=Sing</tt></td><td><em>moje</em></td><td></td><td></td><td><em>Mé</em></td><td></td></tr>
</table>

### `VERB`

10369 [cs-pos/VERB]() tokens (26% of all `VERB` tokens) have a non-empty value of `Gender`.

The most frequent other feature values with which `VERB` and `Gender` co-occurred: <tt><a href="Voice.html">Voice</a>=Act</tt> (10369; 100%), <tt><a href="Person.html">Person</a>=EMPTY</tt> (10369; 100%), <tt><a href="Mood.html">Mood</a>=EMPTY</tt> (10369; 100%), <tt><a href="Tense.html">Tense</a>=Past</tt> (10339; 100%), <tt><a href="VerbForm.html">VerbForm</a>=Part</tt> (10338; 100%), <tt><a href="Polarity.html">Polarity</a>=Pos</tt> (9565; 92%).

`VERB` tokens may have the following values of `Gender`:

* `Fem,Masc` (1157; 11% of non-empty `Gender`): <em>měly, mohly, byly, staly, vznikly, začaly, vytvořily, vedly, neměly, ukázaly</em>
* `Fem,Neut` (2027; 20% of non-empty `Gender`): <em>měla, byla, mohla, stala, začala, dosáhla, vznikla, zůstala, dala, přišla</em>
* `Masc` (5591; 54% of non-empty `Gender`): <em>měl, mohl, mohli, měli, byl, řekl, chtěl, stal, ukázal, dostal</em>
* `Neut` (1594; 15% of non-empty `Gender`): <em>bylo, došlo, mělo, podařilo, mohlo, stalo, nebylo, ukázalo, šlo, začalo</em>
* `EMPTY` (29181): <em>je, má, mají, musí, může, jde, lze, jsou, mohou, můžeme</em>

<table>
  <tr><th>Paradigm <i>mít</i></th><th><tt>Fem,Masc</tt></th><th><tt>Fem,Neut</tt></th><th><tt>Masc</tt></th><th><tt>Neut</tt></th></tr>
  <tr><td><tt><a href="Animacy.html">Animacy</a>=Anim|<a href="Number.html">Number</a>=Plur|<a href="Polarity.html">Polarity</a>=Neg</tt></td><td></td><td></td><td><em>neměli</em></td><td></td></tr>
  <tr><td><tt><a href="Animacy.html">Animacy</a>=Anim|<a href="Number.html">Number</a>=Plur|<a href="Polarity.html">Polarity</a>=Pos</tt></td><td></td><td></td><td><em>měli</em></td><td></td></tr>
  <tr><td><tt><a href="Animacy.html">Animacy</a>=Inan|<a href="Number.html">Number</a>=Plur|<a href="Polarity.html">Polarity</a>=Neg</tt></td><td><em>neměly</em></td><td></td><td></td><td></td></tr>
  <tr><td><tt><a href="Animacy.html">Animacy</a>=Inan|<a href="Number.html">Number</a>=Plur|<a href="Polarity.html">Polarity</a>=Pos</tt></td><td><em>měly</em></td><td></td><td></td><td></td></tr>
  <tr><td><tt><a href="Number.html">Number</a>=Sing|<a href="Polarity.html">Polarity</a>=Neg</tt></td><td></td><td></td><td><em>neměl</em></td><td><em>nemělo</em></td></tr>
  <tr><td><tt><a href="Number.html">Number</a>=Sing|<a href="Polarity.html">Polarity</a>=Pos</tt></td><td></td><td></td><td><em>měl</em></td><td><em>mělo</em></td></tr>
  <tr><td><tt><a href="Number.html">Number</a>=Plur,Sing|<a href="Polarity.html">Polarity</a>=Neg</tt></td><td></td><td><em>neměla</em></td><td></td><td></td></tr>
  <tr><td><tt><a href="Number.html">Number</a>=Plur,Sing|<a href="Polarity.html">Polarity</a>=Pos</tt></td><td></td><td><em>měla</em></td><td></td><td></td></tr>
</table>

### `PROPN`

9665 [cs-pos/PROPN]() tokens (100% of all `PROPN` tokens) have a non-empty value of `Gender`.

The most frequent other feature values with which `PROPN` and `Gender` co-occurred: <tt><a href="Polarity.html">Polarity</a>=Pos</tt> (9665; 100%), <tt><a href="Abbr.html">Abbr</a>=EMPTY</tt> (7813; 81%), <tt><a href="Number.html">Number</a>=Sing</tt> (7072; 73%).

`PROPN` tokens may have the following values of `Gender`:

* `Fem` (3386; 35% of non-empty `Gender`): <em>KSČ, Praze, ČSAV, ČSSR, Praha, SSM, Škoda, Prahy, ČSR, NDR</em>
* `Masc` (5351; 55% of non-empty `Gender`): <em>SSSR, ÚJČ, Fučík, Erben, TIBA, Karel, Horálek, OV, USA, VÚM</em>
* `Neut` (928; 10% of non-empty `Gender`): <em>ROH, Československa, GŘ, Brně, Slovensku, MZVŽ, Československu, Brno, RVHP, Ústí</em>
* `EMPTY` (11): <em>KRB, Opeplatis, Ganges, Gaudeamus, TOK, igitur</em>

<table>
  <tr><th>Paradigm <i>KSČ</i></th><th><tt>Masc</tt></th><th><tt>Fem</tt></th></tr>
  <tr><td><tt><a href="Animacy.html">Animacy</a>=Inan</tt></td><td><em>KSČ</em></td><td></td></tr>
  <tr><td><tt></tt></td><td></td><td><em>KSČ</em></td></tr>
</table>

`Gender` seems to be **lexical feature** of `PROPN`. 99% lemmas (3386) occur only with one value of `Gender`.

### `PRON`

2793 [cs-pos/PRON]() tokens (18% of all `PRON` tokens) have a non-empty value of `Gender`.

The most frequent other feature values with which `PRON` and `Gender` co-occurred: <tt><a href="Reflex.html">Reflex</a>=EMPTY</tt> (2793; 100%), <tt><a href="Variant.html">Variant</a>=EMPTY</tt> (2492; 89%), <tt><a href="Number.html">Number</a>=Sing</tt> (2064; 74%), <tt><a href="PrepCase.html">PrepCase</a>=EMPTY</tt> (1870; 67%), <tt><a href="Person.html">Person</a>=EMPTY</tt> (1544; 55%).

`PRON` tokens may have the following values of `Gender`:

* `Fem` (858; 31% of non-empty `Gender`): <em>ji, všechny, níž, ní, jí, jež, ni, veškeré, jíž, veškerou</em>
* `Masc` (610; 22% of non-empty `Gender`): <em>všechny, všichni, kdo, někdo, nikdo, jeho, jenž, on, oni, veškeré</em>
* `Masc,Neut` (997; 36% of non-empty `Gender`): <em>mu, ho, němž, jej, něm, něho, ním, něj, něhož, všeho</em>
* `Neut` (328; 12% of non-empty `Gender`): <em>všechno, vše, je, všechna, jež, ně, co, ono, veškeré, všecko</em>
* `EMPTY` (12887): <em>se, si, co, všech, nás, je, nám, nich, nichž, jim</em>

<table>
  <tr><th>Paradigm <i>on</i></th><th><tt>Masc</tt></th><th><tt>Masc,Neut</tt></th><th><tt>Fem</tt></th><th><tt>Neut</tt></th></tr>
  <tr><td><tt><a href="Animacy.html">Animacy</a>=Anim|<a href="Case.html">Case</a>=Nom|<a href="Number.html">Number</a>=Plur</tt></td><td><em>oni</em></td><td></td><td></td><td></td></tr>
  <tr><td><tt><a href="Case.html">Case</a>=Acc|<a href="Number.html">Number</a>=Sing|<a href="PrepCase.html">PrepCase</a>=Pre</tt></td><td></td><td><em>něj, něho</em></td><td><em>ni</em></td><td><em>ně</em></td></tr>
  <tr><td><tt><a href="Case.html">Case</a>=Acc|<a href="Number.html">Number</a>=Sing</tt></td><td><em>jeho</em></td><td></td><td><em>ji</em></td><td><em>je</em></td></tr>
  <tr><td><tt><a href="Case.html">Case</a>=Acc|<a href="Number.html">Number</a>=Sing|<a href="Style.html">Style</a>=Arch</tt></td><td></td><td><em>jej</em></td><td></td><td></td></tr>
  <tr><td><tt><a href="Case.html">Case</a>=Acc|<a href="Number.html">Number</a>=Sing|<a href="Variant.html">Variant</a>=Short</tt></td><td></td><td><em>ho</em></td><td></td><td></td></tr>
  <tr><td><tt><a href="Case.html">Case</a>=Dat|<a href="Number.html">Number</a>=Sing|<a href="PrepCase.html">PrepCase</a>=Pre</tt></td><td></td><td><em>němu</em></td><td><em>ní</em></td><td></td></tr>
  <tr><td><tt><a href="Case.html">Case</a>=Dat|<a href="Number.html">Number</a>=Sing</tt></td><td></td><td><em>jemu</em></td><td><em>jí</em></td><td></td></tr>
  <tr><td><tt><a href="Case.html">Case</a>=Dat|<a href="Number.html">Number</a>=Sing|<a href="Variant.html">Variant</a>=Short</tt></td><td></td><td><em>mu</em></td><td></td><td></td></tr>
  <tr><td><tt><a href="Case.html">Case</a>=Gen|<a href="Number.html">Number</a>=Sing|<a href="PrepCase.html">PrepCase</a>=Pre</tt></td><td></td><td><em>něho, něj</em></td><td><em>ní</em></td><td></td></tr>
  <tr><td><tt><a href="Case.html">Case</a>=Gen|<a href="Number.html">Number</a>=Sing</tt></td><td><em>jeho</em></td><td><em>jej</em></td><td><em>jí</em></td><td></td></tr>
  <tr><td><tt><a href="Case.html">Case</a>=Ins|<a href="Number.html">Number</a>=Sing|<a href="PrepCase.html">PrepCase</a>=Pre</tt></td><td></td><td><em>ním</em></td><td><em>ní</em></td><td></td></tr>
  <tr><td><tt><a href="Case.html">Case</a>=Ins|<a href="Number.html">Number</a>=Sing</tt></td><td></td><td><em>jím</em></td><td><em>jí</em></td><td></td></tr>
  <tr><td><tt><a href="Case.html">Case</a>=Loc|<a href="Number.html">Number</a>=Sing|<a href="PrepCase.html">PrepCase</a>=Pre</tt></td><td></td><td><em>něm</em></td><td><em>ní</em></td><td></td></tr>
  <tr><td><tt><a href="Case.html">Case</a>=Nom|<a href="Number.html">Number</a>=Sing</tt></td><td><em>on</em></td><td></td><td><em>ona</em></td><td><em>ono</em></td></tr>
  <tr><td><tt><a href="Case.html">Case</a>=Nom|<a href="Number.html">Number</a>=Plur</tt></td><td></td><td></td><td><em>ony</em></td><td></td></tr>
</table>

### `AUX`

2415 [cs-pos/AUX]() tokens (17% of all `AUX` tokens) have a non-empty value of `Gender`.

The most frequent other feature values with which `AUX` and `Gender` co-occurred: <tt><a href="Voice.html">Voice</a>=Act</tt> (2415; 100%), <tt><a href="Person.html">Person</a>=EMPTY</tt> (2415; 100%), <tt><a href="Mood.html">Mood</a>=EMPTY</tt> (2415; 100%), <tt><a href="VerbForm.html">VerbForm</a>=Part</tt> (2414; 100%), <tt><a href="Tense.html">Tense</a>=Past</tt> (2414; 100%), <tt><a href="Polarity.html">Polarity</a>=Pos</tt> (2233; 92%), <tt><a href="Number.html">Number</a>=Sing</tt> (1297; 54%).

`AUX` tokens may have the following values of `Gender`:

* `Fem,Masc` (456; 19% of non-empty `Gender`): <em>byly, nebyly, bývaly, mohly</em>
* `Fem,Neut` (571; 24% of non-empty `Gender`): <em>byla, nebyla, jsouc, měla</em>
* `Masc` (735; 30% of non-empty `Gender`): <em>byl, byli, nebyl, býval, nebyli, měl, Mohl</em>
* `Neut` (653; 27% of non-empty `Gender`): <em>bylo, nebylo, bývalo</em>
* `EMPTY` (11527): <em>je, by, jsou, bude, být, jsme, není, jsem, budou, bychom</em>

<table>
  <tr><th>Paradigm <i>být</i></th><th><tt>Fem,Masc</tt></th><th><tt>Fem,Neut</tt></th><th><tt>Masc</tt></th><th><tt>Neut</tt></th></tr>
  <tr><td><tt><a href="Animacy.html">Animacy</a>=Anim|<a href="Number.html">Number</a>=Plur|<a href="Polarity.html">Polarity</a>=Neg|<a href="Tense.html">Tense</a>=Past|<a href="VerbForm.html">VerbForm</a>=Part</tt></td><td></td><td></td><td><em>nebyli</em></td><td></td></tr>
  <tr><td><tt><a href="Animacy.html">Animacy</a>=Anim|<a href="Number.html">Number</a>=Plur|<a href="Polarity.html">Polarity</a>=Pos|<a href="Tense.html">Tense</a>=Past|<a href="VerbForm.html">VerbForm</a>=Part</tt></td><td></td><td></td><td><em>byli</em></td><td></td></tr>
  <tr><td><tt><a href="Animacy.html">Animacy</a>=Inan|<a href="Number.html">Number</a>=Plur|<a href="Polarity.html">Polarity</a>=Neg|<a href="Tense.html">Tense</a>=Past|<a href="VerbForm.html">VerbForm</a>=Part</tt></td><td><em>nebyly</em></td><td></td><td></td><td></td></tr>
  <tr><td><tt><a href="Animacy.html">Animacy</a>=Inan|<a href="Number.html">Number</a>=Plur|<a href="Polarity.html">Polarity</a>=Pos|<a href="Tense.html">Tense</a>=Past|<a href="VerbForm.html">VerbForm</a>=Part</tt></td><td><em>byly</em></td><td></td><td></td><td></td></tr>
  <tr><td><tt><a href="Aspect.html">Aspect</a>=Imp|<a href="Number.html">Number</a>=Sing|<a href="Polarity.html">Polarity</a>=Pos|<a href="Tense.html">Tense</a>=Pres|<a href="VerbForm.html">VerbForm</a>=Conv</tt></td><td></td><td><em>jsouc</em></td><td></td><td></td></tr>
  <tr><td><tt><a href="Number.html">Number</a>=Sing|<a href="Polarity.html">Polarity</a>=Neg|<a href="Tense.html">Tense</a>=Past|<a href="VerbForm.html">VerbForm</a>=Part</tt></td><td></td><td></td><td><em>nebyl</em></td><td><em>nebylo</em></td></tr>
  <tr><td><tt><a href="Number.html">Number</a>=Sing|<a href="Polarity.html">Polarity</a>=Pos|<a href="Tense.html">Tense</a>=Past|<a href="VerbForm.html">VerbForm</a>=Part</tt></td><td></td><td></td><td><em>byl</em></td><td><em>bylo</em></td></tr>
  <tr><td><tt><a href="Number.html">Number</a>=Plur,Sing|<a href="Polarity.html">Polarity</a>=Neg|<a href="Tense.html">Tense</a>=Past|<a href="VerbForm.html">VerbForm</a>=Part</tt></td><td></td><td><em>nebyla</em></td><td></td><td></td></tr>
  <tr><td><tt><a href="Number.html">Number</a>=Plur,Sing|<a href="Polarity.html">Polarity</a>=Pos|<a href="Tense.html">Tense</a>=Past|<a href="VerbForm.html">VerbForm</a>=Part</tt></td><td></td><td><em>byla</em></td><td></td><td></td></tr>
</table>

### `NUM`

1173 [cs-pos/NUM]() tokens (16% of all `NUM` tokens) have a non-empty value of `Gender`.

The most frequent other feature values with which `NUM` and `Gender` co-occurred: <tt><a href="NumValue.html">NumValue</a>=1,2,3</tt> (1118; 95%), <tt><a href="NumForm.html">NumForm</a>=Word</tt> (1118; 95%), <tt><a href="NumType.html">NumType</a>=Card</tt> (1118; 95%), <tt><a href="Number.html">Number</a>=Sing</tt> (779; 66%).

`NUM` tokens may have the following values of `Gender`:

* `Fem` (320; 27% of non-empty `Gender`): <em>jedné, jednu, jedna, jednou, třetina, třetinu, třetiny, čtvrtiny, dvanáctinu, třetinou</em>
* `Fem,Neut` (187; 16% of non-empty `Gender`): <em>dvě, obě</em>
* `Masc` (381; 32% of non-empty `Gender`): <em>jeden, dva, oba, jednoho</em>
* `Masc,Neut` (239; 20% of non-empty `Gender`): <em>jednoho, jedním, jednom, jednomu</em>
* `Neut` (46; 4% of non-empty `Gender`): <em>jedno</em>
* `EMPTY` (6031): <em>#, dvou, tři, obou, dvěma, tří, čtyři, pět, tisíc, půl</em>

<table>
  <tr><th>Paradigm <i>jeden</i></th><th><tt>Masc</tt></th><th><tt>Masc,Neut</tt></th><th><tt>Fem</tt></th><th><tt>Neut</tt></th></tr>
  <tr><td><tt><a href="Animacy.html">Animacy</a>=Anim|<a href="Case.html">Case</a>=Acc</tt></td><td><em>jednoho</em></td><td></td><td></td><td></td></tr>
  <tr><td><tt><a href="Animacy.html">Animacy</a>=Inan|<a href="Case.html">Case</a>=Acc</tt></td><td><em>jeden</em></td><td></td><td></td><td></td></tr>
  <tr><td><tt><a href="Case.html">Case</a>=Acc</tt></td><td></td><td></td><td><em>jednu</em></td><td><em>jedno</em></td></tr>
  <tr><td><tt><a href="Case.html">Case</a>=Dat</tt></td><td></td><td><em>jednomu</em></td><td><em>jedné</em></td><td></td></tr>
  <tr><td><tt><a href="Case.html">Case</a>=Gen</tt></td><td></td><td><em>jednoho</em></td><td><em>jedné</em></td><td></td></tr>
  <tr><td><tt><a href="Case.html">Case</a>=Ins</tt></td><td></td><td><em>jedním</em></td><td><em>jednou</em></td><td></td></tr>
  <tr><td><tt><a href="Case.html">Case</a>=Loc</tt></td><td></td><td><em>jednom</em></td><td><em>jedné</em></td><td></td></tr>
  <tr><td><tt><a href="Case.html">Case</a>=Nom</tt></td><td><em>jeden</em></td><td></td><td><em>jedna</em></td><td><em>jedno</em></td></tr>
</table>

## Relations with Agreement in `Gender`

The 10 most frequent relations where parent and child node agree in `Gender`:
<tt>NOUN --[<a href="../dep/amod.html">amod</a>]--> ADJ</tt> (58466; 99%),
<tt>NOUN --[<a href="../dep/conj.html">conj</a>]--> NOUN</tt> (6844; 50%),
<tt>ADJ --[<a href="../dep/conj.html">conj</a>]--> ADJ</tt> (3548; 92%),
<tt>ADJ --[<a href="../dep/nsubj.html">nsubj</a>]--> NOUN</tt> (1877; 77%),
<tt>VERB --[<a href="../dep/conj.html">conj</a>]--> VERB</tt> (1086; 58%),
<tt>PROPN --[<a href="../dep/flat.html">flat</a>]--> PROPN</tt> (831; 99%),
<tt>PROPN --[<a href="../dep/nmod.html">nmod</a>]--> NOUN</tt> (747; 86%),
<tt>PROPN --[<a href="../dep/conj.html">conj</a>]--> PROPN</tt> (736; 65%),
<tt>VERB --[<a href="../dep/nsubj.html">nsubj</a>]--> PROPN</tt> (724; 54%),
<tt>NOUN --[<a href="../dep/appos.html">appos</a>]--> NOUN</tt> (684; 50%).



--------------------------------------------------------------------------------

## Treebank Statistics (UD_Czech-CLTT)

This feature is universal.
It occurs with 3 different values: `Fem`, `Masc`, `Neut`.
Some words have combined values of the feature; 3 combinations have been observed: `Fem|Masc`, `Fem|Neut`, `Masc|Neut`.

This is a <a href="../../u/overview/feat-layers.html">layered feature</a> with the following layers: [Gender](), [Gender[psor]]().

13805 tokens (52%) have a non-empty value of `Gender`.
2970 types (79%) occur at least once with a non-empty value of `Gender`.
1402 lemmas (62%) occur at least once with a non-empty value of `Gender`.
The feature is used with 7 part-of-speech tags: [cs-pos/NOUN]() (8196; 31% instances), [cs-pos/ADJ]() (4642; 17% instances), [cs-pos/PRON]() (401; 1% instances), [cs-pos/VERB]() (258; 1% instances), [cs-pos/DET]() (233; 1% instances), [cs-pos/AUX]() (43; 0% instances), [cs-pos/NUM]() (32; 0% instances).

### `NOUN`

8196 [cs-pos/NOUN]() tokens (100% of all `NOUN` tokens) have a non-empty value of `Gender`.

The most frequent other feature values with which `NOUN` and `Gender` co-occurred: <tt><a href="Polarity.html">Polarity</a>=Pos</tt> (8188; 100%), <tt><a href="Number.html">Number</a>=Sing</tt> (5674; 69%), <tt><a href="Animacy.html">Animacy</a>=EMPTY</tt> (4978; 61%).

`NOUN` tokens may have the following values of `Gender`:

* `Fem` (3343; 41% of non-empty `Gender`): <em>jednotky, jednotka, položka, závěrky, společnosti, jednotek, položek, informace, jednotkou, výši</em>
* `Masc` (3218; 39% of non-empty `Gender`): <em>majetku, dni, dne, závazků, nákladů, náklady, závazky, zisku, majetek, případě</em>
* `Neut` (1635; 20% of non-empty `Gender`): <em>období, ocenění, účetnictví, ustanovení, vymezení, účtování, sestavení, použití, hospodaření, uspořádání</em>

<table>
  <tr><th>Paradigm <i>rok</i></th><th><tt>Masc</tt></th><th><tt>Neut</tt></th></tr>
  <tr><td><tt><a href="Animacy.html">Animacy</a>=Inan|<a href="Case.html">Case</a>=Acc|<a href="Number.html">Number</a>=Sing</tt></td><td><em>rok</em></td><td></td></tr>
  <tr><td><tt><a href="Animacy.html">Animacy</a>=Inan|<a href="Case.html">Case</a>=Gen|<a href="Number.html">Number</a>=Sing</tt></td><td><em>roku</em></td><td></td></tr>
  <tr><td><tt><a href="Animacy.html">Animacy</a>=Inan|<a href="Case.html">Case</a>=Ins|<a href="Number.html">Number</a>=Sing</tt></td><td><em>rokem</em></td><td></td></tr>
  <tr><td><tt><a href="Animacy.html">Animacy</a>=Inan|<a href="Case.html">Case</a>=Loc|<a href="Number.html">Number</a>=Sing</tt></td><td><em>roce</em></td><td></td></tr>
  <tr><td><tt><a href="Animacy.html">Animacy</a>=Inan|<a href="Case.html">Case</a>=Nom|<a href="Number.html">Number</a>=Sing</tt></td><td><em>rok</em></td><td></td></tr>
  <tr><td><tt><a href="Case.html">Case</a>=Gen|<a href="Number.html">Number</a>=Plur</tt></td><td></td><td><em>let</em></td></tr>
  <tr><td><tt><a href="Case.html">Case</a>=Loc|<a href="Number.html">Number</a>=Plur</tt></td><td></td><td><em>letech</em></td></tr>
</table>

`Gender` seems to be **lexical feature** of `NOUN`. 99% lemmas (722) occur only with one value of `Gender`.

### `ADJ`

4642 [cs-pos/ADJ]() tokens (100% of all `ADJ` tokens) have a non-empty value of `Gender`.

The most frequent other feature values with which `ADJ` and `Gender` co-occurred: <tt><a href="Polarity.html">Polarity</a>=Pos</tt> (4509; 97%), <tt><a href="Degree.html">Degree</a>=Pos</tt> (4286; 92%), <tt><a href="Number.html">Number</a>=Sing</tt> (2864; 62%), <tt><a href="Animacy.html">Animacy</a>=EMPTY</tt> (2829; 61%).

`ADJ` tokens may have the following values of `Gender`:

* `Fem` (2225; 48% of non-empty `Gender`): <em>účetní, účetních, konsolidované, konsolidující, finanční, reálnou, pořizovací, účtové, reálné, zanikající</em>
* `Fem,Masc` (41; 1% of non-empty `Gender`): <em>povinny, známy, rovny, schopny</em>
* `Fem,Neut` (13; 0% of non-empty `Gender`): <em>povinna, známa, schopna</em>
* `Masc` (1775; 38% of non-empty `Gender`): <em>účetních, účetní, obchodního, peněžních, dlouhodobého, dlouhodobý, hmotného, cenných, cenné, právní</em>
* `Neut` (588; 13% of non-empty `Gender`): <em>účetního, účetní, účetním, obsahové, technické, účetních, účinném, jiných, následujícího, technického</em>
* `EMPTY` (13): <em>do, od, něm</em>

<table>
  <tr><th>Paradigm <i>známý</i></th><th><tt>Fem,Masc</tt></th><th><tt>Fem,Neut</tt></th><th><tt>Masc</tt></th><th><tt>Fem</tt></th><th><tt>Neut</tt></th></tr>
  <tr><td><tt><a href="Animacy.html">Animacy</a>=Inan|<a href="Number.html">Number</a>=Plur|<a href="Variant.html">Variant</a>=Short</tt></td><td><em>známy</em></td><td></td><td></td><td></td><td></td></tr>
  <tr><td><tt><a href="Case.html">Case</a>=Acc|<a href="Degree.html">Degree</a>=Pos|<a href="Number.html">Number</a>=Sing</tt></td><td></td><td></td><td></td><td><em>známou</em></td><td></td></tr>
  <tr><td><tt><a href="Number.html">Number</a>=Sing|<a href="Variant.html">Variant</a>=Short</tt></td><td></td><td></td><td><em>znám</em></td><td></td><td><em>známo</em></td></tr>
  <tr><td><tt><a href="Number.html">Number</a>=Plur,Sing|<a href="Variant.html">Variant</a>=Short</tt></td><td></td><td><em>známa</em></td><td></td><td></td><td></td></tr>
</table>

### `PRON`

401 [cs-pos/PRON]() tokens (49% of all `PRON` tokens) have a non-empty value of `Gender`.

The most frequent other feature values with which `PRON` and `Gender` co-occurred: <tt><a href="Variant.html">Variant</a>=EMPTY</tt> (401; 100%), <tt><a href="Reflex.html">Reflex</a>=EMPTY</tt> (401; 100%), <tt><a href="PronType.html">PronType</a>=Int,Rel</tt> (292; 73%), <tt><a href="Number.html">Number</a>=Sing</tt> (252; 63%), <tt><a href="Case.html">Case</a>=Nom</tt> (233; 58%).

`PRON` tokens may have the following values of `Gender`:

* `Fem` (159; 40% of non-empty `Gender`): <em>které, která, kterou, ji, ní, jí, níž, veškeré, jež, niž</em>
* `Masc` (90; 22% of non-empty `Gender`): <em>které, který, všechny, veškeré, jenž, některý, ty</em>
* `Masc,Neut` (83; 21% of non-empty `Gender`): <em>kterém, němž, kterému, kterým, němuž, toho, kterého, tomu, jej, tom</em>
* `Neut` (69; 17% of non-empty `Gender`): <em>to, které, která, všechna</em>
* `EMPTY` (411): <em>se, kterých, nichž, všech, je, kterým, jim, jimiž, nich, ně</em>

<table>
  <tr><th>Paradigm <i>který</i></th><th><tt>Masc</tt></th><th><tt>Masc,Neut</tt></th><th><tt>Fem</tt></th><th><tt>Neut</tt></th></tr>
  <tr><td><tt><a href="Animacy.html">Animacy</a>=Inan|<a href="Case.html">Case</a>=Acc|<a href="Number.html">Number</a>=Sing</tt></td><td><em>který</em></td><td></td><td></td><td></td></tr>
  <tr><td><tt><a href="Animacy.html">Animacy</a>=Inan|<a href="Case.html">Case</a>=Nom|<a href="Number.html">Number</a>=Plur</tt></td><td><em>které</em></td><td></td><td></td><td></td></tr>
  <tr><td><tt><a href="Case.html">Case</a>=Acc|<a href="Number.html">Number</a>=Sing</tt></td><td></td><td></td><td><em>kterou</em></td><td><em>které</em></td></tr>
  <tr><td><tt><a href="Case.html">Case</a>=Acc|<a href="Number.html">Number</a>=Plur</tt></td><td><em>které</em></td><td></td><td><em>které</em></td><td></td></tr>
  <tr><td><tt><a href="Case.html">Case</a>=Dat|<a href="Number.html">Number</a>=Sing</tt></td><td></td><td><em>kterému</em></td><td><em>které</em></td><td></td></tr>
  <tr><td><tt><a href="Case.html">Case</a>=Gen|<a href="Number.html">Number</a>=Sing</tt></td><td></td><td><em>kterého</em></td><td><em>které</em></td><td></td></tr>
  <tr><td><tt><a href="Case.html">Case</a>=Ins|<a href="Number.html">Number</a>=Sing</tt></td><td></td><td><em>kterým</em></td><td><em>kterou</em></td><td></td></tr>
  <tr><td><tt><a href="Case.html">Case</a>=Loc|<a href="Number.html">Number</a>=Sing</tt></td><td></td><td><em>kterém</em></td><td><em>které</em></td><td></td></tr>
  <tr><td><tt><a href="Case.html">Case</a>=Nom|<a href="Number.html">Number</a>=Sing</tt></td><td><em>který</em></td><td></td><td><em>která</em></td><td><em>které</em></td></tr>
  <tr><td><tt><a href="Case.html">Case</a>=Nom|<a href="Number.html">Number</a>=Plur</tt></td><td></td><td></td><td><em>které</em></td><td><em>která</em></td></tr>
</table>

### `VERB`

258 [cs-pos/VERB]() tokens (18% of all `VERB` tokens) have a non-empty value of `Gender`.

The most frequent other feature values with which `VERB` and `Gender` co-occurred: <tt><a href="VerbForm.html">VerbForm</a>=Part</tt> (258; 100%), <tt><a href="Person.html">Person</a>=EMPTY</tt> (258; 100%), <tt><a href="Mood.html">Mood</a>=EMPTY</tt> (258; 100%), <tt><a href="Polarity.html">Polarity</a>=Pos</tt> (252; 98%), <tt><a href="Voice.html">Voice</a>=Pass</tt> (178; 69%), <tt><a href="Tense.html">Tense</a>=EMPTY</tt> (178; 69%).

`VERB` tokens may have the following values of `Gender`:

* `Fem` (2; 1% of non-empty `Gender`): <em>ověřenu</em>
* `Fem,Masc` (107; 41% of non-empty `Gender`): <em>zahrnuty, obchodovány, přestaly, uvedeny, vykázány, účtovány, staly, uzavřeny, vyjádřeny, zaúčtovány</em>
* `Fem,Neut` (71; 28% of non-empty `Gender`): <em>sestavena, zavedena, nabyla, určila, oprávněna, překročila, uvedena, provedla, sestavila, vykazována</em>
* `Masc` (41; 16% of non-empty `Gender`): <em>oceněn, oprávněn, organizován, připojen, stanoven, Dal, dán, nepožádali, označován, podán</em>
* `Neut` (37; 14% of non-empty `Gender`): <em>stanoveno, došlo, započalo, účtováno, mohlo, nezměněno, placeno, prokázáno, přiděleno, trvalo</em>
* `EMPTY` (1170): <em>obsahuje, uvede, rozumí, může, vést, účtuje, použijí, mohou, má, sestavují</em>

<table>
  <tr><th>Paradigm <i>uvést</i></th><th><tt>Fem,Masc</tt></th><th><tt>Fem,Neut</tt></th><th><tt>Masc</tt></th><th><tt>Neut</tt></th></tr>
  <tr><td><tt><a href="Animacy.html">Animacy</a>=Inan|<a href="Number.html">Number</a>=Plur</tt></td><td><em>uvedeny</em></td><td></td><td></td><td></td></tr>
  <tr><td><tt><a href="Number.html">Number</a>=Sing</tt></td><td></td><td></td><td><em>uveden</em></td><td><em>uvedeno</em></td></tr>
  <tr><td><tt><a href="Number.html">Number</a>=Plur,Sing</tt></td><td></td><td><em>uvedena</em></td><td></td><td></td></tr>
</table>

### `DET`

233 [cs-pos/DET]() tokens (58% of all `DET` tokens) have a non-empty value of `Gender`.

The most frequent other feature values with which `DET` and `Gender` co-occurred: <tt><a href="Number[psor].html">Number[psor]</a>=EMPTY</tt> (214; 92%), <tt><a href="Person.html">Person</a>=EMPTY</tt> (214; 92%), <tt><a href="Gender[psor].html">Gender[psor]</a>=EMPTY</tt> (214; 92%), <tt><a href="Poss.html">Poss</a>=EMPTY</tt> (198; 85%), <tt><a href="Number.html">Number</a>=Sing</tt> (196; 84%), <tt><a href="PronType.html">PronType</a>=Dem</tt> (192; 82%).

`DET` tokens may have the following values of `Gender`:

* `Fem` (132; 57% of non-empty `Gender`): <em>této, tyto, tato, své, její, tuto, touto, takové, Takovouto, taková</em>
* `Masc` (36; 15% of non-empty `Gender`): <em>tento, tyto, svůj, takové, její, své, takový, takovýto, žádný</em>
* `Masc,Neut` (55; 24% of non-empty `Gender`): <em>tohoto, tomto, jejího, svého, jejím, takovému, tímto, její, jejímž, takovým</em>
* `Neut` (10; 4% of non-empty `Gender`): <em>toto, některá, její, takovéto</em>
* `EMPTY` (172): <em>jejich, jeho, těchto, jejichž, jehož, NĚKTERÝCH, svých, takových, těmito, jakýchkoliv</em>

<table>
  <tr><th>Paradigm <i>tento</i></th><th><tt>Masc</tt></th><th><tt>Masc,Neut</tt></th><th><tt>Fem</tt></th><th><tt>Neut</tt></th></tr>
  <tr><td><tt><a href="Animacy.html">Animacy</a>=Inan|<a href="Case.html">Case</a>=Acc|<a href="Number.html">Number</a>=Sing</tt></td><td><em>tento</em></td><td></td><td></td><td></td></tr>
  <tr><td><tt><a href="Animacy.html">Animacy</a>=Inan|<a href="Case.html">Case</a>=Acc|<a href="Number.html">Number</a>=Plur</tt></td><td><em>tyto</em></td><td></td><td></td><td></td></tr>
  <tr><td><tt><a href="Animacy.html">Animacy</a>=Inan|<a href="Case.html">Case</a>=Nom|<a href="Number.html">Number</a>=Plur</tt></td><td><em>tyto</em></td><td></td><td></td><td></td></tr>
  <tr><td><tt><a href="Case.html">Case</a>=Acc|<a href="Number.html">Number</a>=Sing</tt></td><td></td><td></td><td><em>tuto</em></td><td></td></tr>
  <tr><td><tt><a href="Case.html">Case</a>=Acc|<a href="Number.html">Number</a>=Plur</tt></td><td></td><td></td><td><em>tyto</em></td><td></td></tr>
  <tr><td><tt><a href="Case.html">Case</a>=Dat|<a href="Number.html">Number</a>=Sing</tt></td><td></td><td><em>tomuto</em></td><td><em>této</em></td><td></td></tr>
  <tr><td><tt><a href="Case.html">Case</a>=Gen|<a href="Number.html">Number</a>=Sing</tt></td><td></td><td><em>tohoto</em></td><td><em>této</em></td><td></td></tr>
  <tr><td><tt><a href="Case.html">Case</a>=Ins|<a href="Number.html">Number</a>=Sing</tt></td><td></td><td><em>tímto</em></td><td><em>touto</em></td><td></td></tr>
  <tr><td><tt><a href="Case.html">Case</a>=Loc|<a href="Number.html">Number</a>=Sing</tt></td><td></td><td><em>tomto</em></td><td><em>této</em></td><td></td></tr>
  <tr><td><tt><a href="Case.html">Case</a>=Nom|<a href="Number.html">Number</a>=Sing</tt></td><td><em>tento</em></td><td></td><td><em>tato</em></td><td><em>toto</em></td></tr>
  <tr><td><tt><a href="Case.html">Case</a>=Nom|<a href="Number.html">Number</a>=Plur</tt></td><td></td><td></td><td><em>tyto</em></td><td></td></tr>
</table>

### `AUX`

43 [cs-pos/AUX]() tokens (10% of all `AUX` tokens) have a non-empty value of `Gender`.

The most frequent other feature values with which `AUX` and `Gender` co-occurred: <tt><a href="Person.html">Person</a>=EMPTY</tt> (43; 100%), <tt><a href="Mood.html">Mood</a>=EMPTY</tt> (43; 100%), <tt><a href="VerbForm.html">VerbForm</a>=Part</tt> (38; 88%), <tt><a href="Tense.html">Tense</a>=Past</tt> (38; 88%), <tt><a href="Voice.html">Voice</a>=Act</tt> (38; 88%), <tt><a href="Polarity.html">Polarity</a>=Pos</tt> (34; 79%).

`AUX` tokens may have the following values of `Gender`:

* `Fem,Masc` (18; 42% of non-empty `Gender`): <em>byly, nebyly</em>
* `Fem,Neut` (7; 16% of non-empty `Gender`): <em>byla, nebyla</em>
* `Masc` (11; 26% of non-empty `Gender`): <em>byl, nebyl, byty</em>
* `Neut` (7; 16% of non-empty `Gender`): <em>bylo, Je-li, Nejsou-li, Není-li</em>
* `EMPTY` (395): <em>je, jsou, nejsou, není, být, by, bude, je-li, budou, není-li</em>

<table>
  <tr><th>Paradigm <i>být</i></th><th><tt>Fem,Masc</tt></th><th><tt>Fem,Neut</tt></th><th><tt>Masc</tt></th><th><tt>Neut</tt></th></tr>
  <tr><td><tt><a href="Animacy.html">Animacy</a>=Inan|<a href="Number.html">Number</a>=Plur|<a href="Polarity.html">Polarity</a>=Neg</tt></td><td><em>nebyly</em></td><td></td><td></td><td></td></tr>
  <tr><td><tt><a href="Animacy.html">Animacy</a>=Inan|<a href="Number.html">Number</a>=Plur|<a href="Polarity.html">Polarity</a>=Pos</tt></td><td><em>byly</em></td><td></td><td></td><td></td></tr>
  <tr><td><tt><a href="Number.html">Number</a>=Sing|<a href="Polarity.html">Polarity</a>=Neg</tt></td><td></td><td></td><td><em>nebyl</em></td><td></td></tr>
  <tr><td><tt><a href="Number.html">Number</a>=Sing|<a href="Polarity.html">Polarity</a>=Pos</tt></td><td></td><td></td><td><em>byl</em></td><td><em>bylo</em></td></tr>
  <tr><td><tt><a href="Number.html">Number</a>=Plur,Sing|<a href="Polarity.html">Polarity</a>=Neg</tt></td><td></td><td><em>nebyla</em></td><td></td><td></td></tr>
  <tr><td><tt><a href="Number.html">Number</a>=Plur,Sing|<a href="Polarity.html">Polarity</a>=Pos</tt></td><td></td><td><em>byla</em></td><td></td><td></td></tr>
</table>

### `NUM`

32 [cs-pos/NUM]() tokens (10% of all `NUM` tokens) have a non-empty value of `Gender`.

The most frequent other feature values with which `NUM` and `Gender` co-occurred: <tt><a href="NumType.html">NumType</a>=Card</tt> (32; 100%), <tt><a href="NumValue.html">NumValue</a>=1,2,3</tt> (32; 100%), <tt><a href="NumForm.html">NumForm</a>=Word</tt> (32; 100%), <tt><a href="Number.html">Number</a>=Sing</tt> (28; 88%).

`NUM` tokens may have the following values of `Gender`:

* `Fem` (3; 9% of non-empty `Gender`): <em>jednou, jedné</em>
* `Fem,Neut` (4; 13% of non-empty `Gender`): <em>dvě, obě</em>
* `Masc` (18; 56% of non-empty `Gender`): <em>jeden</em>
* `Masc,Neut` (5; 16% of non-empty `Gender`): <em>jednoho, jednom, jedním</em>
* `Neut` (2; 6% of non-empty `Gender`): <em>jedno</em>
* `EMPTY` (278): <em>1, 3, 2, 4, 5, 41, 2004, 2008, 31, 2005</em>

<table>
  <tr><th>Paradigm <i>jeden</i></th><th><tt>Masc</tt></th><th><tt>Masc,Neut</tt></th><th><tt>Fem</tt></th><th><tt>Neut</tt></th></tr>
  <tr><td><tt><a href="Animacy.html">Animacy</a>=Inan|<a href="Case.html">Case</a>=Acc</tt></td><td><em>jeden</em></td><td></td><td></td><td></td></tr>
  <tr><td><tt><a href="Case.html">Case</a>=Acc</tt></td><td></td><td></td><td></td><td><em>jedno</em></td></tr>
  <tr><td><tt><a href="Case.html">Case</a>=Gen</tt></td><td></td><td><em>jednoho</em></td><td><em>jedné</em></td><td></td></tr>
  <tr><td><tt><a href="Case.html">Case</a>=Ins</tt></td><td></td><td><em>jedním</em></td><td><em>jednou</em></td><td></td></tr>
  <tr><td><tt><a href="Case.html">Case</a>=Loc</tt></td><td></td><td><em>jednom</em></td><td></td><td></td></tr>
  <tr><td><tt><a href="Case.html">Case</a>=Nom</tt></td><td><em>jeden</em></td><td></td><td></td><td></td></tr>
</table>

## Relations with Agreement in `Gender`

The 10 most frequent relations where parent and child node agree in `Gender`:
<tt>NOUN --[<a href="../dep/amod.html">amod</a>]--> ADJ</tt> (4229; 98%),
<tt>NOUN --[<a href="../dep/conj.html">conj</a>]--> NOUN</tt> (709; 52%),
<tt>ADJ --[<a href="../dep/conj.html">conj</a>]--> ADJ</tt> (132; 86%),
<tt>ADJ --[<a href="../dep/nsubj.html">nsubj</a>]--> NOUN</tt> (50; 51%),
<tt>NOUN --[<a href="../dep/appos.html">appos</a>]--> NOUN</tt> (28; 64%),
<tt>NOUN --[<a href="../dep/obl.html">obl</a>]--> NOUN</tt> (20; 53%),
<tt>ADJ --[<a href="../dep/dep.html">dep</a>]--> NOUN</tt> (6; 100%),
<tt>ADJ --[<a href="../dep/amod.html">amod</a>]--> ADJ</tt> (5; 83%),
<tt>NOUN --[<a href="../dep/xcomp.html">xcomp</a>]--> ADJ</tt> (5; 83%),
<tt>ADJ --[<a href="../dep/appos.html">appos</a>]--> ADJ</tt> (4; 100%).

