---
layout: base
title:  'Statistics of Tense in UD_Ukrainian'
udver: '2'
---

## Treebank Statistics: UD_Ukrainian: Features: `Tense`

This feature is universal.
It occurs with 3 different values: `Fut`, `Past`, `Pres`.

8994 tokens (9%) have a non-empty value of `Tense`.
4973 types (18%) occur at least once with a non-empty value of `Tense`.
2746 lemmas (17%) occur at least once with a non-empty value of `Tense`.
The feature is used with 4 part-of-speech tags: <tt><a href="uk-pos-VERB.html">VERB</a></tt> (8231; 8% instances), <tt><a href="uk-pos-AUX.html">AUX</a></tt> (722; 1% instances), <tt><a href="uk-pos-ADJ.html">ADJ</a></tt> (33; 0% instances), <tt><a href="uk-pos-NOUN.html">NOUN</a></tt> (8; 0% instances).

### `VERB`

8231 <tt><a href="uk-pos-VERB.html">VERB</a></tt> tokens (78% of all `VERB` tokens) have a non-empty value of `Tense`.

The most frequent other feature values with which `VERB` and `Tense` co-occurred: <tt><a href="uk-feat-Mood.html">Mood</a></tt><tt>=Ind</tt> (7859; 95%), <tt><a href="uk-feat-VerbForm.html">VerbForm</a></tt><tt>=Fin</tt> (7859; 95%), <tt><a href="uk-feat-Aspect.html">Aspect</a></tt><tt>=Imp</tt> (5519; 67%), <tt><a href="uk-feat-Gender.html">Gender</a></tt><tt>=EMPTY</tt> (5288; 64%), <tt><a href="uk-feat-Number.html">Number</a></tt><tt>=Sing</tt> (5236; 64%), <tt><a href="uk-feat-Person.html">Person</a></tt><tt>=EMPTY</tt> (4767; 58%).

`VERB` tokens may have the following values of `Tense`:

* `Fut` (521; 6% of non-empty `Tense`): <em>буде, вийде, матиме, дасть, Нагадаємо, зроблю, прийде, скаже, залишиться, знадобиться</em>
* `Past` (4516; 55% of non-empty `Tense`): <em>було, мав, міг, були, була, мали, був, знав, почав, почали</em>
* `Pres` (3194; 39% of non-empty `Tense`): <em>є, може, має, можуть, мають, здається, каже, маю, нема, стоїть</em>
* `EMPTY` (2261): <em>зробити, робити, знайти, працювати, сказати, говорити, стати, дати, писати, мати</em>

<table>
  <tr><th>Paradigm <i>бути</i></th><th><tt>Pres</tt></th><th><tt>Fut</tt></th><th><tt>Past</tt></th></tr>
  <tr><td><tt><tt><a href="uk-feat-Gender.html">Gender</a></tt><tt>=Masc</tt>|<tt><a href="uk-feat-Number.html">Number</a></tt><tt>=Sing</tt></tt></td><td></td><td></td><td><em>був</em></td></tr>
  <tr><td><tt><tt><a href="uk-feat-Gender.html">Gender</a></tt><tt>=Fem</tt>|<tt><a href="uk-feat-Number.html">Number</a></tt><tt>=Sing</tt></tt></td><td></td><td></td><td><em>була</em></td></tr>
  <tr><td><tt><tt><a href="uk-feat-Gender.html">Gender</a></tt><tt>=Neut</tt>|<tt><a href="uk-feat-Number.html">Number</a></tt><tt>=Sing</tt></tt></td><td></td><td></td><td><em>було</em></td></tr>
  <tr><td><tt><tt><a href="uk-feat-Number.html">Number</a></tt><tt>=Sing</tt>|<tt><a href="uk-feat-Person.html">Person</a></tt><tt>=2</tt></tt></td><td></td><td><em>будеш</em></td><td></td></tr>
  <tr><td><tt><tt><a href="uk-feat-Number.html">Number</a></tt><tt>=Sing</tt>|<tt><a href="uk-feat-Person.html">Person</a></tt><tt>=3</tt></tt></td><td><em>є, єсть</em></td><td><em>буде</em></td><td></td></tr>
  <tr><td><tt><tt><a href="uk-feat-Number.html">Number</a></tt><tt>=Plur</tt>|<tt><a href="uk-feat-Person.html">Person</a></tt><tt>=3</tt></tt></td><td><em>є, єсть</em></td><td><em>будуть</em></td><td></td></tr>
  <tr><td><tt><tt><a href="uk-feat-Number.html">Number</a></tt><tt>=Plur</tt></tt></td><td></td><td></td><td><em>були</em></td></tr>
</table>

### `AUX`

722 <tt><a href="uk-pos-AUX.html">AUX</a></tt> tokens (82% of all `AUX` tokens) have a non-empty value of `Tense`.

The most frequent other feature values with which `AUX` and `Tense` co-occurred: <tt><a href="uk-feat-Aspect.html">Aspect</a></tt><tt>=Imp</tt> (722; 100%), <tt><a href="uk-feat-Mood.html">Mood</a></tt><tt>=Ind</tt> (720; 100%), <tt><a href="uk-feat-VerbForm.html">VerbForm</a></tt><tt>=Fin</tt> (720; 100%), <tt><a href="uk-feat-Number.html">Number</a></tt><tt>=Sing</tt> (571; 79%), <tt><a href="uk-feat-Person.html">Person</a></tt><tt>=EMPTY</tt> (492; 68%).

`AUX` tokens may have the following values of `Tense`:

* `Fut` (109; 15% of non-empty `Tense`): <em>буде, будуть, будемо, буду, будете, будеш</em>
* `Past` (492; 68% of non-empty `Tense`): <em>було, був, була, були, бувши, бувало</em>
* `Pres` (121; 17% of non-empty `Tense`): <em>є, буває</em>
* `EMPTY` (156): <em>бути, б, би, будьте</em>

<table>
  <tr><th>Paradigm <i>бути</i></th><th><tt>Pres</tt></th><th><tt>Fut</tt></th><th><tt>Past</tt></th></tr>
  <tr><td><tt><tt><a href="uk-feat-Gender.html">Gender</a></tt><tt>=Masc</tt>|<tt><a href="uk-feat-Mood.html">Mood</a></tt><tt>=Ind</tt>|<tt><a href="uk-feat-Number.html">Number</a></tt><tt>=Sing</tt>|<tt><a href="uk-feat-VerbForm.html">VerbForm</a></tt><tt>=Fin</tt></tt></td><td></td><td></td><td><em>був</em></td></tr>
  <tr><td><tt><tt><a href="uk-feat-Gender.html">Gender</a></tt><tt>=Fem</tt>|<tt><a href="uk-feat-Mood.html">Mood</a></tt><tt>=Ind</tt>|<tt><a href="uk-feat-Number.html">Number</a></tt><tt>=Sing</tt>|<tt><a href="uk-feat-VerbForm.html">VerbForm</a></tt><tt>=Fin</tt></tt></td><td></td><td></td><td><em>була</em></td></tr>
  <tr><td><tt><tt><a href="uk-feat-Gender.html">Gender</a></tt><tt>=Neut</tt>|<tt><a href="uk-feat-Mood.html">Mood</a></tt><tt>=Ind</tt>|<tt><a href="uk-feat-Number.html">Number</a></tt><tt>=Sing</tt>|<tt><a href="uk-feat-VerbForm.html">VerbForm</a></tt><tt>=Fin</tt></tt></td><td></td><td></td><td><em>було</em></td></tr>
  <tr><td><tt><tt><a href="uk-feat-Mood.html">Mood</a></tt><tt>=Ind</tt>|<tt><a href="uk-feat-Number.html">Number</a></tt><tt>=Sing</tt>|<tt><a href="uk-feat-Person.html">Person</a></tt><tt>=1</tt>|<tt><a href="uk-feat-VerbForm.html">VerbForm</a></tt><tt>=Fin</tt></tt></td><td><em>є</em></td><td><em>буду</em></td><td></td></tr>
  <tr><td><tt><tt><a href="uk-feat-Mood.html">Mood</a></tt><tt>=Ind</tt>|<tt><a href="uk-feat-Number.html">Number</a></tt><tt>=Sing</tt>|<tt><a href="uk-feat-Person.html">Person</a></tt><tt>=2</tt>|<tt><a href="uk-feat-VerbForm.html">VerbForm</a></tt><tt>=Fin</tt></tt></td><td></td><td><em>будеш</em></td><td></td></tr>
  <tr><td><tt><tt><a href="uk-feat-Mood.html">Mood</a></tt><tt>=Ind</tt>|<tt><a href="uk-feat-Number.html">Number</a></tt><tt>=Sing</tt>|<tt><a href="uk-feat-Person.html">Person</a></tt><tt>=3</tt>|<tt><a href="uk-feat-VerbForm.html">VerbForm</a></tt><tt>=Fin</tt></tt></td><td><em>є</em></td><td><em>буде</em></td><td></td></tr>
  <tr><td><tt><tt><a href="uk-feat-Mood.html">Mood</a></tt><tt>=Ind</tt>|<tt><a href="uk-feat-Number.html">Number</a></tt><tt>=Plur</tt>|<tt><a href="uk-feat-Person.html">Person</a></tt><tt>=1</tt>|<tt><a href="uk-feat-VerbForm.html">VerbForm</a></tt><tt>=Fin</tt></tt></td><td></td><td><em>будемо</em></td><td></td></tr>
  <tr><td><tt><tt><a href="uk-feat-Mood.html">Mood</a></tt><tt>=Ind</tt>|<tt><a href="uk-feat-Number.html">Number</a></tt><tt>=Plur</tt>|<tt><a href="uk-feat-Person.html">Person</a></tt><tt>=2</tt>|<tt><a href="uk-feat-VerbForm.html">VerbForm</a></tt><tt>=Fin</tt></tt></td><td></td><td><em>будете</em></td><td></td></tr>
  <tr><td><tt><tt><a href="uk-feat-Mood.html">Mood</a></tt><tt>=Ind</tt>|<tt><a href="uk-feat-Number.html">Number</a></tt><tt>=Plur</tt>|<tt><a href="uk-feat-Person.html">Person</a></tt><tt>=3</tt>|<tt><a href="uk-feat-VerbForm.html">VerbForm</a></tt><tt>=Fin</tt></tt></td><td><em>є</em></td><td><em>будуть</em></td><td></td></tr>
  <tr><td><tt><tt><a href="uk-feat-Mood.html">Mood</a></tt><tt>=Ind</tt>|<tt><a href="uk-feat-Number.html">Number</a></tt><tt>=Plur</tt>|<tt><a href="uk-feat-VerbForm.html">VerbForm</a></tt><tt>=Fin</tt></tt></td><td></td><td></td><td><em>були</em></td></tr>
  <tr><td><tt><tt><a href="uk-feat-VerbForm.html">VerbForm</a></tt><tt>=Conv</tt></tt></td><td></td><td></td><td><em>бувши</em></td></tr>
</table>

### `ADJ`

33 <tt><a href="uk-pos-ADJ.html">ADJ</a></tt> tokens (0% of all `ADJ` tokens) have a non-empty value of `Tense`.

The most frequent other feature values with which `ADJ` and `Tense` co-occurred: <tt><a href="uk-feat-Aspect.html">Aspect</a></tt><tt>=Imp</tt> (33; 100%), <tt><a href="uk-feat-Degree.html">Degree</a></tt><tt>=EMPTY</tt> (33; 100%), <tt><a href="uk-feat-VerbForm.html">VerbForm</a></tt><tt>=Part</tt> (33; 100%), <tt><a href="uk-feat-Voice.html">Voice</a></tt><tt>=Act</tt> (33; 100%), <tt><a href="uk-feat-Animacy.html">Animacy</a></tt><tt>=EMPTY</tt> (28; 85%), <tt><a href="uk-feat-Number.html">Number</a></tt><tt>=Sing</tt> (23; 70%), <tt><a href="uk-feat-Gender.html">Gender</a></tt><tt>=Masc</tt> (17; 52%).

`ADJ` tokens may have the following values of `Tense`:

* `Pres` (33; 100% of non-empty `Tense`): <em>діючих, Караюча, блеючий, блеючого, взаємодіючих, генеруючими, діючого, діючої, енергогенеруючої, западаючу</em>
* `EMPTY` (10145): <em>2017, української, державної, різних, українського, 2016, перших, українських, національної, державного</em>

`Tense` seems to be **lexical feature** of `ADJ`. 100% lemmas (26) occur only with one value of `Tense`.

### `NOUN`

8 <tt><a href="uk-pos-NOUN.html">NOUN</a></tt> tokens (0% of all `NOUN` tokens) have a non-empty value of `Tense`.

The most frequent other feature values with which `NOUN` and `Tense` co-occurred: <tt><a href="uk-feat-Animacy.html">Animacy</a></tt><tt>=Anim</tt> (5; 63%), <tt><a href="uk-feat-Gender.html">Gender</a></tt><tt>=EMPTY</tt> (5; 63%), <tt><a href="uk-feat-Number.html">Number</a></tt><tt>=Ptan</tt> (5; 63%).

`NOUN` tokens may have the following values of `Tense`:

* `Pres` (8; 100% of non-empty `Tense`): <em>оточуючих, виконуюча, завідуючий, командуючого, комплектуючих, комплектуючі</em>
* `EMPTY` (24618): <em>час, року, років, життя, %, часу, №, людей, люди, дня</em>

## Relations with Agreement in `Tense`

The 10 most frequent relations where parent and child node agree in `Tense`:
<tt>VERB --[<tt><a href="uk-dep-conj.html">conj</a></tt>]--> VERB</tt> (1176; 90%),
<tt>VERB --[<tt><a href="uk-dep-parataxis.html">parataxis</a></tt>]--> VERB</tt> (319; 59%),
<tt>VERB --[<tt><a href="uk-dep-flat-repeat.html">flat:repeat</a></tt>]--> VERB</tt> (9; 100%).

