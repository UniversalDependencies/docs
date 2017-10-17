

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Ukrainian)

This feature is universal.
It occurs with 7 different values: `Dem`, `Ind`, `Int`, `Neg`, `Prs`, `Rel`, `Tot`.

1461 tokens (11%) have a non-empty value of `PronType`.
336 types (6%) occur at least once with a non-empty value of `PronType`.
95 lemmas (2%) occur at least once with a non-empty value of `PronType`.
The feature is used with 5 part-of-speech tags: [uk-pos/PRON]() (727; 6% instances), [uk-pos/DET]() (522; 4% instances), [uk-pos/ADV]() (210; 2% instances), [uk-pos/AUX]() (1; 0% instances), [uk-pos/PART]() (1; 0% instances).

### `PRON`

727 [uk-pos/PRON]() tokens (100% of all `PRON` tokens) have a non-empty value of `PronType`.

The most frequent other feature values with which `PRON` and `PronType` co-occurred: <tt><a href="Gender.html">Gender</a>=EMPTY</tt> (400; 55%), <tt><a href="Case.html">Case</a>=Nom</tt> (394; 54%), <tt><a href="Number.html">Number</a>=EMPTY</tt> (364; 50%).

`PRON` tokens may have the following values of `PronType`:

* `Dem` (77; 11% of non-empty `PronType`): <em>це, те, того, тим, то, таке, цього, Одне, Такого, та</em>
* `Ind` (29; 4% of non-empty `PronType`): <em>щось, хтось, кому, чого, дещо, когось, чимось, чогось, іншого</em>
* `Int` (8; 1% of non-empty `PronType`): <em>хто, чого, кого, що</em>
* `Neg` (6; 1% of non-empty `PronType`): <em>нічого, нікому, ніхто, нічому</em>
* `Prs` (551; 76% of non-empty `PronType`): <em>ми, я, він, його, вона, нас, мені, вони, їх, собі</em>
* `Rel` (31; 4% of non-empty `PronType`): <em>що, хто, чого, кого, чим</em>
* `Tot` (25; 3% of non-empty `PronType`): <em>все, всі, всіх, усіх, Всім, всьому, кожному, усе, усього, усякого</em>

<table>
  <tr><th>Paradigm <i>що</i></th><th><tt>Int</tt></th><th><tt>Rel</tt></th><th><tt>Ind</tt></th></tr>
  <tr><td><tt><a href="Case.html">Case</a>=Acc</tt></td><td><em>що</em></td><td><em>що</em></td><td></td></tr>
  <tr><td><tt><a href="Case.html">Case</a>=Gen</tt></td><td><em>чого</em></td><td><em>чого</em></td><td><em>чого</em></td></tr>
  <tr><td><tt><a href="Case.html">Case</a>=Ins</tt></td><td></td><td><em>чим</em></td><td></td></tr>
  <tr><td><tt><a href="Case.html">Case</a>=Nom</tt></td><td></td><td><em>що</em></td><td></td></tr>
</table>

`PronType` seems to be **lexical feature** of `PRON`. 94% lemmas (31) occur only with one value of `PronType`.

### `DET`

522 [uk-pos/DET]() tokens (100% of all `DET` tokens) have a non-empty value of `PronType`.

The most frequent other feature values with which `DET` and `PronType` co-occurred: <tt><a href="Animacy.html">Animacy</a>=EMPTY</tt> (441; 84%), <tt><a href="Person.html">Person</a>=EMPTY</tt> (414; 79%), <tt><a href="Poss.html">Poss</a>=EMPTY</tt> (377; 72%), <tt><a href="Number.html">Number</a>=EMPTY</tt> (317; 61%).

`DET` tokens may have the following values of `PronType`:

* `Dem` (99; 19% of non-empty `PronType`): <em>той, таке, того, таких, ця, тому, ті, тій, цей, така</em>
* `Ind` (117; 22% of non-empty `PronType`): <em>кілька, одного, якісь, багато, інших, один, інші, одну, кількох, одна</em>
* `Neg` (8; 2% of non-empty `PronType`): <em>жодних, жодного, жодної, ніяких</em>
* `Prs` (157; 30% of non-empty `PronType`): <em>його, її, мої, свою, наших, мій, наша, наші, своїх, свій</em>
* `Rel` (71; 14% of non-empty `PronType`): <em>які, який, яких, яка, якого, котрий, якої, котрі, якому, яке</em>
* `Tot` (70; 13% of non-empty `PronType`): <em>всі, усіх, всіх, усі, весь, все, усього, кожен, кожного, кожну</em>

<table>
  <tr><th>Paradigm <i>який</i></th><th><tt>Rel</tt></th><th><tt>Ind</tt></th></tr>
  <tr><td><tt><a href="Animacy.html">Animacy</a>=Anim|<a href="Case.html">Case</a>=Acc|<a href="Gender.html">Gender</a>=Masc</tt></td><td><em>якого</em></td><td></td></tr>
  <tr><td><tt><a href="Animacy.html">Animacy</a>=Anim|<a href="Case.html">Case</a>=Acc|<a href="Number.html">Number</a>=Plur</tt></td><td><em>яких</em></td><td><em>яких</em></td></tr>
  <tr><td><tt><a href="Animacy.html">Animacy</a>=Inan|<a href="Case.html">Case</a>=Acc|<a href="Gender.html">Gender</a>=Masc</tt></td><td><em>який</em></td><td></td></tr>
  <tr><td><tt><a href="Animacy.html">Animacy</a>=Inan|<a href="Case.html">Case</a>=Acc|<a href="Number.html">Number</a>=Plur</tt></td><td><em>які</em></td><td><em>які</em></td></tr>
  <tr><td><tt><a href="Case.html">Case</a>=Acc|<a href="Gender.html">Gender</a>=Fem</tt></td><td><em>яку</em></td><td></td></tr>
  <tr><td><tt><a href="Case.html">Case</a>=Acc|<a href="Gender.html">Gender</a>=Neut</tt></td><td><em>яке</em></td><td></td></tr>
  <tr><td><tt><a href="Case.html">Case</a>=Dat|<a href="Gender.html">Gender</a>=Masc</tt></td><td><em>якому</em></td><td></td></tr>
  <tr><td><tt><a href="Case.html">Case</a>=Gen|<a href="Gender.html">Gender</a>=Masc</tt></td><td><em>якого</em></td><td></td></tr>
  <tr><td><tt><a href="Case.html">Case</a>=Gen|<a href="Gender.html">Gender</a>=Fem</tt></td><td><em>якої</em></td><td></td></tr>
  <tr><td><tt><a href="Case.html">Case</a>=Gen|<a href="Number.html">Number</a>=Plur</tt></td><td><em>яких</em></td><td></td></tr>
  <tr><td><tt><a href="Case.html">Case</a>=Ins|<a href="Gender.html">Gender</a>=Masc</tt></td><td><em>яким</em></td><td></td></tr>
  <tr><td><tt><a href="Case.html">Case</a>=Ins|<a href="Gender.html">Gender</a>=Fem</tt></td><td><em>якою</em></td><td></td></tr>
  <tr><td><tt><a href="Case.html">Case</a>=Ins|<a href="Number.html">Number</a>=Plur</tt></td><td><em>якими</em></td><td></td></tr>
  <tr><td><tt><a href="Case.html">Case</a>=Loc|<a href="Gender.html">Gender</a>=Masc</tt></td><td><em>якому</em></td><td></td></tr>
  <tr><td><tt><a href="Case.html">Case</a>=Loc|<a href="Gender.html">Gender</a>=Fem</tt></td><td><em>якій</em></td><td></td></tr>
  <tr><td><tt><a href="Case.html">Case</a>=Loc|<a href="Number.html">Number</a>=Plur</tt></td><td><em>яких</em></td><td></td></tr>
  <tr><td><tt><a href="Case.html">Case</a>=Nom|<a href="Gender.html">Gender</a>=Masc</tt></td><td><em>який</em></td><td></td></tr>
  <tr><td><tt><a href="Case.html">Case</a>=Nom|<a href="Gender.html">Gender</a>=Fem</tt></td><td><em>яка</em></td><td></td></tr>
  <tr><td><tt><a href="Case.html">Case</a>=Nom|<a href="Number.html">Number</a>=Plur</tt></td><td><em>які</em></td><td></td></tr>
</table>

`PronType` seems to be **lexical feature** of `DET`. 95% lemmas (36) occur only with one value of `PronType`.

### `ADV`

210 [uk-pos/ADV]() tokens (28% of all `ADV` tokens) have a non-empty value of `PronType`.

The most frequent other feature values with which `ADV` and `PronType` co-occurred: <tt><a href="Degree.html">Degree</a>=EMPTY</tt> (210; 100%).

`ADV` tokens may have the following values of `PronType`:

* `Dem` (116; 55% of non-empty `PronType`): <em>так, тоді, там, тут, потім, тому, туди, досі, звідти, сюди</em>
* `Ind` (29; 14% of non-empty `PronType`): <em>десь, колись, Якось, інакше, іноді, де-не-де, чомусь, дещо, інколи</em>
* `Int` (6; 3% of non-empty `PronType`): <em>де, Навіщо, звідки, куди, як</em>
* `Neg` (11; 5% of non-empty `PronType`): <em>ніколи, ніяк</em>
* `Rel` (39; 19% of non-empty `PronType`): <em>коли, де, як, Поки, доки, навіщо, скільки, чому</em>
* `Tot` (9; 4% of non-empty `PronType`): <em>завжди</em>
* `EMPTY` (536): <em>можна, дуже, ще, вже, треба, добре, майже, більше, зовсім, часто</em>

<table>
  <tr><th>Paradigm <i>де</i></th><th><tt>Int</tt></th><th><tt>Rel</tt></th></tr>
  <tr><td><tt></tt></td><td><em>де</em></td><td><em>де</em></td></tr>
</table>

`PronType` seems to be **lexical feature** of `ADV`. 92% lemmas (34) occur only with one value of `PronType`.

### `PART`

1 [uk-pos/PART]() tokens (0% of all `PART` tokens) have a non-empty value of `PronType`.

The most frequent other feature values with which `PART` and `PronType` co-occurred: <tt><a href="Polarity.html">Polarity</a>=EMPTY</tt> (1; 100%).

`PART` tokens may have the following values of `PronType`:

* `Prs` (1; 100% of non-empty `PronType`): <em>де</em>
* `EMPTY` (318): <em>не, навіть, ще, ж, лише, і, й, аж, саме, таки</em>

### `AUX`

1 [uk-pos/AUX]() tokens (1% of all `AUX` tokens) have a non-empty value of `PronType`.

The most frequent other feature values with which `AUX` and `PronType` co-occurred: <tt><a href="Aspect.html">Aspect</a>=EMPTY</tt> (1; 100%), <tt><a href="VerbForm.html">VerbForm</a>=EMPTY</tt> (1; 100%), <tt><a href="Person.html">Person</a>=EMPTY</tt> (1; 100%), <tt><a href="Number.html">Number</a>=Plur</tt> (1; 100%), <tt><a href="Mood.html">Mood</a>=EMPTY</tt> (1; 100%), <tt><a href="Tense.html">Tense</a>=EMPTY</tt> (1; 100%), <tt><a href="Gender.html">Gender</a>=EMPTY</tt> (1; 100%).

`AUX` tokens may have the following values of `PronType`:

* `Dem` (1; 100% of non-empty `PronType`): <em>ці</em>
* `EMPTY` (172): <em>було, був, була, були, є, б, буде, бути, би, будемо</em>

## Relations with Agreement in `PronType`

The 10 most frequent relations where parent and child node agree in `PronType`:
<tt>ADV --[<a href="../dep/conj.html">conj</a>]--> ADV</tt> (2; 100%),
<tt>PRON --[<a href="../dep/parataxis.html">parataxis</a>]--> PRON</tt> (2; 100%),
<tt>PRON --[<a href="../dep/nmod.html">nmod</a>]--> PRON</tt> (2; 100%),
<tt>PRON --[<a href="../dep/conj.html">conj</a>]--> ADV</tt> (1; 100%).

