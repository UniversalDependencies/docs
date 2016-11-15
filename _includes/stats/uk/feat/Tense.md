

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Ukrainian)

This feature is universal.
It occurs with 3 different values: `Fut`, `Past`, `Pres`.

243 tokens (14%) have a non-empty value of `Tense`.
141 types (20%) occur at least once with a non-empty value of `Tense`.
109 lemmas (18%) occur at least once with a non-empty value of `Tense`.
The feature is used with 1 part-of-speech tags: [uk-pos/VERB]() (243; 14% instances).

### `VERB`

243 [uk-pos/VERB]() tokens (76% of all `VERB` tokens) have a non-empty value of `Tense`.

The most frequent other feature values with which `VERB` and `Tense` co-occurred: <tt><a href="VerbForm.html">VerbForm</a>=Fin</tt> (242; 100%), <tt><a href="Mood.html">Mood</a>=Ind</tt> (242; 100%), <tt><a href="Aspect.html">Aspect</a>=Imp</tt> (168; 69%), <tt><a href="Gender.html">Gender</a>=EMPTY</tt> (131; 54%), <tt><a href="Person.html">Person</a>=EMPTY</tt> (126; 52%).

`VERB` tokens may have the following values of `Tense`:

* `Fut` (13; 5% of non-empty `Tense`): <em>буде, Запитаю, змінять, Зустріну, Піду, наїмся, прийдете, урятує</em>
* `Past` (125; 51% of non-empty `Tense`): <em>був, пішов, сказав, було, була, виграв, запізнилися, зберігався, зустрів, мила</em>
* `Pres` (105; 43% of non-empty `Tense`): <em>є, каже, плаває, навчають, Кажуть, мусять, любиш, сплю, Вважаю, Сподіваємося</em>
* `EMPTY` (76): <em>зберігати, зароблено, копати, Почекайте, плавати, розмовляти, чекати, Іди, бути, думай</em>

<table>
  <tr><th>Paradigm <i>бути</i></th><th><tt>Pres</tt></th><th><tt>Fut</tt></th><th><tt>Past</tt></th></tr>
  <tr><td><tt><a href="Gender.html">Gender</a>=Masc</tt></td><td></td><td></td><td><em>був</em></td></tr>
  <tr><td><tt><a href="Gender.html">Gender</a>=Fem</tt></td><td></td><td></td><td><em>була</em></td></tr>
  <tr><td><tt><a href="Gender.html">Gender</a>=Neut</tt></td><td></td><td></td><td><em>було</em></td></tr>
  <tr><td><tt><a href="Number.html">Number</a>=Sing|<a href="Person.html">Person</a>=3</tt></td><td><em>є</em></td><td><em>буде</em></td><td></td></tr>
  <tr><td><tt><a href="Number.html">Number</a>=Plur</tt></td><td></td><td></td><td><em>були</em></td></tr>
</table>

`Tense` seems to be **lexical feature** of `VERB`. 92% lemmas (100) occur only with one value of `Tense`.

## Relations with Agreement in `Tense`

The 10 most frequent relations where parent and child node agree in `Tense`:
<tt>VERB --[<a href="../dep/ccomp.html">ccomp</a>]--> VERB</tt> (18; 69%),
<tt>VERB --[<a href="../dep/parataxis.html">parataxis</a>]--> VERB</tt> (10; 91%),
<tt>VERB --[<a href="../dep/advcl.html">advcl</a>]--> VERB</tt> (5; 71%),
<tt>VERB --[<a href="../dep/aux.html">aux</a>]--> VERB</tt> (5; 56%),
<tt>VERB --[<a href="../dep/conj.html">conj</a>]--> VERB</tt> (5; 100%).

