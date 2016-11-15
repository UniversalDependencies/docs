

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Ukrainian)

This feature is universal.
It occurs with 2 different values: `Imp`, `Ind`.

255 tokens (15%) have a non-empty value of `Mood`.
149 types (21%) occur at least once with a non-empty value of `Mood`.
114 lemmas (19%) occur at least once with a non-empty value of `Mood`.
The feature is used with 1 part-of-speech tags: [uk-pos/VERB]() (255; 15% instances).

### `VERB`

255 [uk-pos/VERB]() tokens (80% of all `VERB` tokens) have a non-empty value of `Mood`.

The most frequent other feature values with which `VERB` and `Mood` co-occurred: <tt><a href="VerbForm.html">VerbForm</a>=Fin</tt> (255; 100%), <tt><a href="Aspect.html">Aspect</a>=Imp</tt> (175; 69%), <tt><a href="Gender.html">Gender</a>=EMPTY</tt> (143; 56%).

`VERB` tokens may have the following values of `Mood`:

* `Imp` (13; 5% of non-empty `Mood`): <em>Почекайте, Іди, думай, Вчи, Знайди, Сиди, втікай, забуваймо, забудь</em>
* `Ind` (242; 95% of non-empty `Mood`): <em>є, був, каже, пішов, сказав, плаває, було, навчають, Кажуть, буде</em>
* `EMPTY` (64): <em>зберігати, зароблено, копати, плавати, розмовляти, чекати, бути, зізнатися, почати, працювати</em>

<table>
  <tr><th>Paradigm <i>думати</i></th><th><tt>Ind</tt></th><th><tt>Imp</tt></th></tr>
  <tr><td><tt><a href="Gender.html">Gender</a>=Fem|<a href="Tense.html">Tense</a>=Past</tt></td><td><em>думала</em></td><td></td></tr>
  <tr><td><tt><a href="Number.html">Number</a>=Sing|<a href="Person.html">Person</a>=1|<a href="Tense.html">Tense</a>=Pres</tt></td><td><em>думаю</em></td><td></td></tr>
  <tr><td><tt><a href="Number.html">Number</a>=Sing|<a href="Person.html">Person</a>=2</tt></td><td></td><td><em>думай</em></td></tr>
</table>

`Mood` seems to be **lexical feature** of `VERB`. 97% lemmas (111) occur only with one value of `Mood`.

## Relations with Agreement in `Mood`

The 10 most frequent relations where parent and child node agree in `Mood`:
<tt>VERB --[<a href="../dep/ccomp.html">ccomp</a>]--> VERB</tt> (22; 85%),
<tt>VERB --[<a href="../dep/parataxis.html">parataxis</a>]--> VERB</tt> (11; 100%),
<tt>VERB --[<a href="../dep/advcl.html">advcl</a>]--> VERB</tt> (6; 86%),
<tt>VERB --[<a href="../dep/conj.html">conj</a>]--> VERB</tt> (5; 100%),
<tt>VERB --[<a href="../dep/aux.html">aux</a>]--> VERB</tt> (5; 56%),
<tt>VERB --[<a href="../dep/csubj.html">csubj</a>]--> VERB</tt> (1; 100%).

