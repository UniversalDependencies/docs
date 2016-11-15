

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Ukrainian)

This feature is universal.
It occurs with 7 different values: `Dem`, `Ind`, `Int`, `Neg`, `Prs`, `Rel`, `Tot`.

212 tokens (13%) have a non-empty value of `PronType`.
97 types (14%) occur at least once with a non-empty value of `PronType`.
47 lemmas (8%) occur at least once with a non-empty value of `PronType`.
The feature is used with 5 part-of-speech tags: [uk-pos/PRON]() (153; 9% instances), [uk-pos/DET]() (34; 2% instances), [uk-pos/ADV]() (21; 1% instances), [uk-pos/NUM]() (3; 0% instances), [uk-pos/VERB]() (1; 0% instances).

### `PRON`

153 [uk-pos/PRON]() tokens (100% of all `PRON` tokens) have a non-empty value of `PronType`.

The most frequent other feature values with which `PRON` and `PronType` co-occurred: <tt><a href="Number.html">Number</a>=EMPTY</tt> (104; 68%), <tt><a href="Case.html">Case</a>=Nom</tt> (89; 58%).

`PRON` tokens may have the following values of `PronType`:

* `Dem` (21; 14% of non-empty `PronType`): <em>це, те, Той, то, тому, цього</em>
* `Ind` (8; 5% of non-empty `PronType`): <em>дехто, дещо, чогось</em>
* `Int` (4; 3% of non-empty `PronType`): <em>що, Ким</em>
* `Neg` (5; 3% of non-empty `PronType`): <em>ніхто, нічого</em>
* `Prs` (104; 68% of non-empty `PronType`): <em>він, його, ти, я, вона, її, вони, мені, мене, ми</em>
* `Rel` (6; 4% of non-empty `PronType`): <em>що, хто, чого</em>
* `Tot` (5; 3% of non-empty `PronType`): <em>все, всім</em>

<table>
  <tr><th>Paradigm <i>що</i></th><th><tt>Int</tt></th><th><tt>Rel</tt></th></tr>
  <tr><td><tt><a href="Case.html">Case</a>=Acc</tt></td><td></td><td><em>що</em></td></tr>
  <tr><td><tt><a href="Case.html">Case</a>=Gen</tt></td><td></td><td><em>чого</em></td></tr>
  <tr><td><tt><a href="Case.html">Case</a>=Nom</tt></td><td><em>що</em></td><td><em>що</em></td></tr>
</table>

### `DET`

34 [uk-pos/DET]() tokens (100% of all `DET` tokens) have a non-empty value of `PronType`.

The most frequent other feature values with which `DET` and `PronType` co-occurred: <tt><a href="Reflex.html">Reflex</a>=EMPTY</tt> (28; 82%), <tt><a href="Person.html">Person</a>=EMPTY</tt> (28; 82%), <tt><a href="Number.html">Number</a>=EMPTY</tt> (23; 68%), <tt><a href="Poss.html">Poss</a>=EMPTY</tt> (22; 65%).

`DET` tokens may have the following values of `PronType`:

* `Dem` (14; 41% of non-empty `PronType`): <em>Ті, той, цей, Та, Ця, такий, такими, цих, цієї</em>
* `Ind` (2; 6% of non-empty `PronType`): <em>якусь, іншими</em>
* `Int` (2; 6% of non-empty `PronType`): <em>Котра, Котру</em>
* `Prs` (12; 35% of non-empty `PronType`): <em>свою, його, Ваші, моя, мій, свого, своїми, своїх, її</em>
* `Rel` (2; 6% of non-empty `PronType`): <em>котрого, який</em>
* `Tot` (2; 6% of non-empty `PronType`): <em>кожному, усіх</em>

<table>
  <tr><th>Paradigm <i>котрий</i></th><th><tt>Int</tt></th><th><tt>Rel</tt></th></tr>
  <tr><td><tt><a href="Case.html">Case</a>=Acc|<a href="Gender.html">Gender</a>=Masc</tt></td><td></td><td><em>котрого</em></td></tr>
  <tr><td><tt><a href="Case.html">Case</a>=Acc|<a href="Gender.html">Gender</a>=Fem</tt></td><td><em>Котру</em></td><td></td></tr>
  <tr><td><tt><a href="Case.html">Case</a>=Nom|<a href="Gender.html">Gender</a>=Fem</tt></td><td><em>Котра</em></td><td></td></tr>
</table>

`PronType` seems to be **lexical feature** of `DET`. 93% lemmas (13) occur only with one value of `PronType`.

### `ADV`

21 [uk-pos/ADV]() tokens (20% of all `ADV` tokens) have a non-empty value of `PronType`.

The most frequent other feature values with which `ADV` and `PronType` co-occurred: <tt><a href="Degree.html">Degree</a>=EMPTY</tt> (21; 100%).

`ADV` tokens may have the following values of `PronType`:

* `Dem` (6; 29% of non-empty `PronType`): <em>тоді, зараз, тому, стільки</em>
* `Ind` (2; 10% of non-empty `PronType`): <em>інакше, багато</em>
* `Int` (7; 33% of non-empty `PronType`): <em>як, Куди, скільки, чому</em>
* `Rel` (5; 24% of non-empty `PronType`): <em>коли, де</em>
* `Tot` (1; 5% of non-empty `PronType`): <em>завжди</em>
* `EMPTY` (84): <em>непогано, важливо, вже, раніше, завтра, так, треба, ще, Важко, Надворі</em>

`PronType` seems to be **lexical feature** of `ADV`. 100% lemmas (13) occur only with one value of `PronType`.

### `NUM`

3 [uk-pos/NUM]() tokens (8% of all `NUM` tokens) have a non-empty value of `PronType`.

The most frequent other feature values with which `NUM` and `PronType` co-occurred: <tt><a href="Gender.html">Gender</a>=EMPTY</tt> (3; 100%), <tt><a href="NumType.html">NumType</a>=Card</tt> (3; 100%), <tt><a href="Number.html">Number</a>=Plur</tt> (3; 100%), <tt><a href="Case.html">Case</a>=Ins</tt> (2; 67%).

`NUM` tokens may have the following values of `PronType`:

* `Ind` (3; 100% of non-empty `PronType`): <em>багатьма, багатьох</em>
* `EMPTY` (34): <em>50, мільйонів, 5, 200, 3, 8, П’ять, дві, 1, 14</em>

### `VERB`

1 [uk-pos/VERB]() tokens (0% of all `VERB` tokens) have a non-empty value of `PronType`.

The most frequent other feature values with which `VERB` and `PronType` co-occurred: <tt><a href="Number.html">Number</a>=Sing</tt> (1; 100%), <tt><a href="Person.html">Person</a>=3</tt> (1; 100%), <tt><a href="Mood.html">Mood</a>=Ind</tt> (1; 100%), <tt><a href="Gender.html">Gender</a>=EMPTY</tt> (1; 100%), <tt><a href="Tense.html">Tense</a>=Pres</tt> (1; 100%), <tt><a href="VerbForm.html">VerbForm</a>=Fin</tt> (1; 100%), <tt><a href="Aspect.html">Aspect</a>=Imp</tt> (1; 100%).

`VERB` tokens may have the following values of `PronType`:

* `Neg` (1; 100% of non-empty `PronType`): <em>Немає</em>
* `EMPTY` (318): <em>є, був, каже, пішов, сказав, плаває, було, зберігати, навчають, Кажуть</em>

## Relations with Agreement in `PronType`

The 10 most frequent relations where parent and child node agree in `PronType`:
<tt>ADV --[<a href="../dep/discourse.html">discourse</a>]--> PRON</tt> (1; 100%).

