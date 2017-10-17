

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Ukrainian)

This feature is universal but the values `0` are language-specific.
It occurs with 4 different values: `0`, `1`, `2`, `3`.

949 tokens (7%) have a non-empty value of `Person`.
346 types (6%) occur at least once with a non-empty value of `Person`.
231 lemmas (6%) occur at least once with a non-empty value of `Person`.
The feature is used with 4 part-of-speech tags: [uk-pos/PRON]() (524; 4% instances), [uk-pos/VERB]() (295; 2% instances), [uk-pos/DET]() (108; 1% instances), [uk-pos/AUX]() (22; 0% instances).

### `PRON`

524 [uk-pos/PRON]() tokens (72% of all `PRON` tokens) have a non-empty value of `Person`.

The most frequent other feature values with which `PRON` and `Person` co-occurred: <tt><a href="PronType.html">PronType</a>=Prs</tt> (524; 100%), <tt><a href="Gender.html">Gender</a>=EMPTY</tt> (351; 67%), <tt><a href="Case.html">Case</a>=Nom</tt> (321; 61%), <tt><a href="Animacy.html">Animacy</a>=Anim</tt> (293; 56%).

`PRON` tokens may have the following values of `Person`:

* `1` (254; 48% of non-empty `Person`): <em>ми, я, нас, мені, мене, нам, нами, мною</em>
* `2` (39; 7% of non-empty `Person`): <em>ви, вам, вас, вами, тебе, ти, тобі, ю</em>
* `3` (231; 44% of non-empty `Person`): <em>він, його, вона, вони, їх, йому, її, ними, них, їм</em>
* `EMPTY` (203): <em>це, собі, щось, що, те, все, хто, чого, того, тим</em>

### `VERB`

295 [uk-pos/VERB]() tokens (19% of all `VERB` tokens) have a non-empty value of `Person`.

The most frequent other feature values with which `VERB` and `Person` co-occurred: <tt><a href="VerbForm.html">VerbForm</a>=Fin</tt> (295; 100%), <tt><a href="Gender.html">Gender</a>=EMPTY</tt> (295; 100%), <tt><a href="Mood.html">Mood</a>=Ind</tt> (275; 93%), <tt><a href="Aspect.html">Aspect</a>=Imp</tt> (237; 80%), <tt><a href="Tense.html">Tense</a>=Pres</tt> (219; 74%), <tt><a href="Number.html">Number</a>=Sing</tt> (197; 67%).

`VERB` tokens may have the following values of `Person`:

* `0` (9; 3% of non-empty `Person`): <em>видрукувано, виявлено, відсторонено, дано, зумовлено, написано, оточено, прислано, рішено</em>
* `1` (40; 14% of non-empty `Person`): <em>маю, бачу, сподіваємось, хочу, Побачимося, Цитую, вживу, гадаю, думаю, дякую</em>
* `2` (38; 13% of non-empty `Person`): <em>будь, підкажіть, проси, Вислухайте, Дозвольте, Заждіть, Називайте, Поясніть, вберете, вб’єте</em>
* `3` (208; 71% of non-empty `Person`): <em>має, може, можуть, мусить, є, здається, сидить, анулюють, бракує, вийде</em>
* `EMPTY` (1257): <em>було, мав, мали, ходили, виявилося, сказав, жив, зробити, міг, почали</em>

<table>
  <tr><th>Paradigm <i>мати</i></th><th><tt>1</tt></th><th><tt>2</tt></th><th><tt>3</tt></th></tr>
  <tr><td><tt><a href="Number.html">Number</a>=Sing|<a href="Tense.html">Tense</a>=Fut</tt></td><td></td><td><em>матимеш</em></td><td><em>матиме</em></td></tr>
  <tr><td><tt><a href="Number.html">Number</a>=Sing|<a href="Tense.html">Tense</a>=Pres</tt></td><td><em>маю</em></td><td></td><td><em>має</em></td></tr>
  <tr><td><tt><a href="Number.html">Number</a>=Plur|<a href="Tense.html">Tense</a>=Pres</tt></td><td><em>маємо</em></td><td></td><td><em>мають</em></td></tr>
</table>

`Person` seems to be **lexical feature** of `VERB`. 93% lemmas (199) occur only with one value of `Person`.

### `DET`

108 [uk-pos/DET]() tokens (21% of all `DET` tokens) have a non-empty value of `Person`.

The most frequent other feature values with which `DET` and `Person` co-occurred: <tt><a href="PronType.html">PronType</a>=Prs</tt> (108; 100%), <tt><a href="Poss.html">Poss</a>=Yes</tt> (108; 100%), <tt><a href="Animacy.html">Animacy</a>=EMPTY</tt> (95; 88%), <tt><a href="Number.html">Number</a>=EMPTY</tt> (75; 69%).

`DET` tokens may have the following values of `Person`:

* `1` (60; 56% of non-empty `Person`): <em>мої, наших, мій, наша, наші, мого, наш, нашого, нашою, моє</em>
* `2` (11; 10% of non-empty `Person`): <em>Вашої, Ваших, Вашого, ваш, Вашим, твоїми</em>
* `3` (37; 34% of non-empty `Person`): <em>його, її, їхнього, Їхня, їх, їхньому, їхню</em>
* `EMPTY` (414): <em>кілька, які, всі, який, той, усіх, яких, одного, всіх, свою</em>

`Person` seems to be **lexical feature** of `DET`. 100% lemmas (10) occur only with one value of `Person`.

### `AUX`

22 [uk-pos/AUX]() tokens (13% of all `AUX` tokens) have a non-empty value of `Person`.

The most frequent other feature values with which `AUX` and `Person` co-occurred: <tt><a href="Aspect.html">Aspect</a>=Imp</tt> (22; 100%), <tt><a href="Gender.html">Gender</a>=EMPTY</tt> (22; 100%), <tt><a href="VerbForm.html">VerbForm</a>=Fin</tt> (22; 100%), <tt><a href="Mood.html">Mood</a>=Ind</tt> (21; 95%), <tt><a href="Number.html">Number</a>=Sing</tt> (18; 82%).

`AUX` tokens may have the following values of `Person`:

* `1` (3; 14% of non-empty `Person`): <em>будемо, Буду</em>
* `2` (1; 5% of non-empty `Person`): <em>Будьте</em>
* `3` (18; 82% of non-empty `Person`): <em>є, буде</em>
* `EMPTY` (151): <em>було, був, була, були, б, бути, би, бувши, ці</em>

<table>
  <tr><th>Paradigm <i>бути</i></th><th><tt>1</tt></th><th><tt>2</tt></th><th><tt>3</tt></th></tr>
  <tr><td><tt><a href="Mood.html">Mood</a>=Imp|<a href="Number.html">Number</a>=Plur</tt></td><td></td><td><em>Будьте</em></td><td></td></tr>
  <tr><td><tt><a href="Mood.html">Mood</a>=Ind|<a href="Number.html">Number</a>=Sing|<a href="Tense.html">Tense</a>=Fut</tt></td><td><em>Буду</em></td><td></td><td><em>буде</em></td></tr>
  <tr><td><tt><a href="Mood.html">Mood</a>=Ind|<a href="Number.html">Number</a>=Sing|<a href="Tense.html">Tense</a>=Pres</tt></td><td></td><td></td><td><em>є</em></td></tr>
  <tr><td><tt><a href="Mood.html">Mood</a>=Ind|<a href="Number.html">Number</a>=Plur|<a href="Tense.html">Tense</a>=Fut</tt></td><td><em>будемо</em></td><td></td><td></td></tr>
  <tr><td><tt><a href="Mood.html">Mood</a>=Ind|<a href="Number.html">Number</a>=Plur|<a href="Tense.html">Tense</a>=Pres</tt></td><td></td><td></td><td><em>є</em></td></tr>
</table>

## Relations with Agreement in `Person`

The 10 most frequent relations where parent and child node agree in `Person`:
<tt>VERB --[<a href="../dep/conj.html">conj</a>]--> VERB</tt> (22; 58%),
<tt>PRON --[<a href="../dep/parataxis.html">parataxis</a>]--> PRON</tt> (2; 100%),
<tt>PRON --[<a href="../dep/parataxis.html">parataxis</a>]--> VERB</tt> (1; 100%),
<tt>VERB --[<a href="../dep/compound:svc.html">compound:svc</a>]--> VERB</tt> (1; 100%).

