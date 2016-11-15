

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Ukrainian)

This feature is universal.
It occurs with 2 different values: `Anim`, `Inan`.

397 tokens (24%) have a non-empty value of `Animacy`.
291 types (41%) occur at least once with a non-empty value of `Animacy`.
243 lemmas (40%) occur at least once with a non-empty value of `Animacy`.
The feature is used with 3 part-of-speech tags: [uk-pos/NOUN]() (258; 15% instances), [uk-pos/PRON]() (88; 5% instances), [uk-pos/PROPN]() (51; 3% instances).

### `NOUN`

258 [uk-pos/NOUN]() tokens (100% of all `NOUN` tokens) have a non-empty value of `Animacy`.

The most frequent other feature values with which `NOUN` and `Animacy` co-occurred: <tt><a href="Number.html">Number</a>=EMPTY</tt> (179; 69%).

`NOUN` tokens may have the following values of `Animacy`:

* `Anim` (72; 28% of non-empty `Animacy`): <em>хлопець, Начальник, футболіст, дітей, бджолами, бджоли, брат, водій, математики, модель</em>
* `Inan` (186; 72% of non-empty `Animacy`): <em>спокій, доларів, квіти, груші, яблуку, ЕНТЕР, Село, вокзалі, гривень, думку</em>

<table>
  <tr><th>Paradigm <i>модель</i></th><th><tt>Anim</tt></th><th><tt>Inan</tt></th></tr>
  <tr><td><tt><a href="Case.html">Case</a>=Acc</tt></td><td><em>модель</em></td><td></td></tr>
  <tr><td><tt><a href="Case.html">Case</a>=Nom</tt></td><td></td><td><em>Модель</em></td></tr>
</table>

`Animacy` seems to be **lexical feature** of `NOUN`. 99% lemmas (188) occur only with one value of `Animacy`.

### `PRON`

88 [uk-pos/PRON]() tokens (58% of all `PRON` tokens) have a non-empty value of `Animacy`.

The most frequent other feature values with which `PRON` and `Animacy` co-occurred: <tt><a href="Case.html">Case</a>=Nom</tt> (51; 58%), <tt><a href="Gender.html">Gender</a>=EMPTY</tt> (51; 58%), <tt><a href="Person.html">Person</a>=EMPTY</tt> (49; 56%), <tt><a href="Number.html">Number</a>=EMPTY</tt> (49; 56%).

`PRON` tokens may have the following values of `Animacy`:

* `Anim` (50; 57% of non-empty `Animacy`): <em>ти, я, дехто, мені, мене, ми, нас, ніхто, тебе, ви</em>
* `Inan` (38; 43% of non-empty `Animacy`): <em>це, що, те, все, всім, дещо, нічого, Той, то, тому</em>
* `EMPTY` (65): <em>він, його, вона, її, вони, них, собі, Їх, ним, йому</em>

`Animacy` seems to be **lexical feature** of `PRON`. 100% lemmas (16) occur only with one value of `Animacy`.

### `PROPN`

51 [uk-pos/PROPN]() tokens (100% of all `PROPN` tokens) have a non-empty value of `Animacy`.

The most frequent other feature values with which `PROPN` and `Animacy` co-occurred: <tt><a href="Gender.html">Gender</a>=Masc</tt> (37; 73%), <tt><a href="Case.html">Case</a>=Nom</tt> (33; 65%).

`PROPN` tokens may have the following values of `Animacy`:

* `Anim` (41; 80% of non-empty `Animacy`): <em>Микола, Павло, Богдан, Кеннеді, Петро, С’юзі, Іван, Ігоря, Валентина, Василю</em>
* `Inan` (10; 20% of non-empty `Animacy`): <em>Крушельниця, Самсунг, Стрий, Богдана, Карпатах, Києві, Полтави, Ярослав</em>

<table>
  <tr><th>Paradigm <i>Богдан</i></th><th><tt>Anim</tt></th><th><tt>Inan</tt></th></tr>
  <tr><td><tt><a href="Case.html">Case</a>=Gen</tt></td><td></td><td><em>Богдана</em></td></tr>
  <tr><td><tt><a href="Case.html">Case</a>=Nom</tt></td><td><em>Богдан</em></td><td></td></tr>
</table>

`Animacy` seems to be **lexical feature** of `PROPN`. 97% lemmas (37) occur only with one value of `Animacy`.

## Relations with Agreement in `Animacy`

The 10 most frequent relations where parent and child node agree in `Animacy`:
<tt>NOUN --[<a href="../dep/nmod.html">nmod</a>]--> NOUN</tt> (15; 68%),
<tt>NOUN --[<a href="../dep/appos.html">appos</a>]--> PROPN</tt> (6; 75%),
<tt>NOUN --[<a href="../dep/conj.html">conj</a>]--> NOUN</tt> (6; 100%),
<tt>NOUN --[<a href="../dep/appos.html">appos</a>]--> NOUN</tt> (5; 71%),
<tt>PROPN --[<a href="../dep/remnant.html">remnant</a>]--> PROPN</tt> (3; 100%),
<tt>PROPN --[<a href="../dep/name.html">name</a>]--> PROPN</tt> (3; 75%),
<tt>PROPN --[<a href="../dep/appos.html">appos</a>]--> NOUN</tt> (3; 75%),
<tt>PROPN --[<a href="../dep/list.html">list</a>]--> NOUN</tt> (2; 100%),
<tt>PRON --[<a href="../dep/vocative.html">vocative</a>]--> PROPN</tt> (1; 100%),
<tt>NOUN --[<a href="../dep/dobj.html">dobj</a>]--> NOUN</tt> (1; 100%).

