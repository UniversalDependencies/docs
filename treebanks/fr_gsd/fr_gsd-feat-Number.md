---
layout: base
title:  'Statistics of Number in UD_French-GSD'
udver: '2'
---

## Treebank Statistics: UD_French-GSD: Features: `Number`

This feature is universal.
It occurs with 2 different values: `Plur`, `Sing`.

This is a <a href="../../u/overview/feat-layers.html">layered feature</a> with the following layers: <tt><a href="fr_gsd-feat-Number.html">Number</a></tt>, <tt><a href="fr_gsd-feat-Number-psor.html">Number[psor]</a></tt>.

209213 tokens (52%) have a non-empty value of `Number`.
26851 types (63%) occur at least once with a non-empty value of `Number`.
17013 lemmas (52%) occur at least once with a non-empty value of `Number`.
The feature is used with 10 part-of-speech tags: <tt><a href="fr_gsd-pos-NOUN.html">NOUN</a></tt> (71815; 18% instances), <tt><a href="fr_gsd-pos-DET.html">DET</a></tt> (61067; 15% instances), <tt><a href="fr_gsd-pos-VERB.html">VERB</a></tt> (24570; 6% instances), <tt><a href="fr_gsd-pos-ADJ.html">ADJ</a></tt> (22775; 6% instances), <tt><a href="fr_gsd-pos-AUX.html">AUX</a></tt> (12226; 3% instances), <tt><a href="fr_gsd-pos-PRON.html">PRON</a></tt> (11255; 3% instances), <tt><a href="fr_gsd-pos-PROPN.html">PROPN</a></tt> (4979; 1% instances), <tt><a href="fr_gsd-pos-SYM.html">SYM</a></tt> (419; 0% instances), <tt><a href="fr_gsd-pos-X.html">X</a></tt> (106; 0% instances), <tt><a href="fr_gsd-pos-NUM.html">NUM</a></tt> (1; 0% instances).

### `NOUN`

71815 <tt><a href="fr_gsd-pos-NOUN.html">NOUN</a></tt> tokens (95% of all `NOUN` tokens) have a non-empty value of `Number`.

`NOUN` tokens may have the following values of `Number`:

* `Plur` (18058; 25% of non-empty `Number`): <em>ans, années, enfants, habitants, personnes, jours, droits, points, hommes, membres</em>
* `Sing` (53757; 75% of non-empty `Number`): <em>ville, partie, nom, monde, région, commune, groupe, famille, année, siècle</em>
* `EMPTY` (3516): <em>pays, fois, temps, cours, prix, mars, mois, cas, fils, grâce</em>

<table>
  <tr><th>Paradigm <i>année</i></th><th><tt>Sing</tt></th><th><tt>Plur</tt></th></tr>
  <tr><td><tt></tt></td><td><em>année</em></td><td><em>années</em></td></tr>
</table>

### `DET`

61067 <tt><a href="fr_gsd-pos-DET.html">DET</a></tt> tokens (100% of all `DET` tokens) have a non-empty value of `Number`.

The most frequent other feature values with which `DET` and `Number` co-occurred: <tt><a href="fr_gsd-feat-PronType.html">PronType</a></tt><tt>=Art</tt> (53441; 88%), <tt><a href="fr_gsd-feat-Definite.html">Definite</a></tt><tt>=Def</tt> (43302; 71%).

`DET` tokens may have the following values of `Number`:

* `Plur` (14170; 23% of non-empty `Number`): <em>les, des, ses, ces, de, plusieurs, leurs, quelques, d', certains</em>
* `Sing` (46897; 77% of non-empty `Number`): <em>le, la, l', un, une, son, sa, cette, ce, leur</em>
* `EMPTY` (30): <em>d', de</em>

<table>
  <tr><th>Paradigm <i>le</i></th><th><tt>Sing</tt></th><th><tt>Plur</tt></th></tr>
  <tr><td><tt><tt><a href="fr_gsd-feat-ExtPos.html">ExtPos</a></tt><tt>=ADV</tt>|<tt><a href="fr_gsd-feat-Gender.html">Gender</a></tt><tt>=Masc</tt></tt></td><td><em>le</em></td><td></td></tr>
  <tr><td><tt><tt><a href="fr_gsd-feat-ExtPos.html">ExtPos</a></tt><tt>=ADV</tt>|<tt><a href="fr_gsd-feat-Gender.html">Gender</a></tt><tt>=Fem</tt></tt></td><td><em>la</em></td><td></td></tr>
  <tr><td><tt><tt><a href="fr_gsd-feat-ExtPos.html">ExtPos</a></tt><tt>=ADV</tt></tt></td><td></td><td><em>les</em></td></tr>
  <tr><td><tt><tt><a href="fr_gsd-feat-ExtPos.html">ExtPos</a></tt><tt>=NOUN</tt>|<tt><a href="fr_gsd-feat-Gender.html">Gender</a></tt><tt>=Masc</tt></tt></td><td><em>le</em></td><td></td></tr>
  <tr><td><tt><tt><a href="fr_gsd-feat-ExtPos.html">ExtPos</a></tt><tt>=PRON</tt>|<tt><a href="fr_gsd-feat-Gender.html">Gender</a></tt><tt>=Masc</tt></tt></td><td><em>le</em></td><td></td></tr>
  <tr><td><tt><tt><a href="fr_gsd-feat-Gender.html">Gender</a></tt><tt>=Masc</tt></tt></td><td><em>le, L'</em></td><td></td></tr>
  <tr><td><tt><tt><a href="fr_gsd-feat-Gender.html">Gender</a></tt><tt>=Masc</tt>|<tt><a href="fr_gsd-feat-Typo.html">Typo</a></tt><tt>=Yes</tt></tt></td><td><em>le</em></td><td></td></tr>
  <tr><td><tt><tt><a href="fr_gsd-feat-Gender.html">Gender</a></tt><tt>=Fem</tt></tt></td><td><em>la</em></td><td></td></tr>
  <tr><td><tt><tt><a href="fr_gsd-feat-Gender.html">Gender</a></tt><tt>=Fem</tt>|<tt><a href="fr_gsd-feat-Typo.html">Typo</a></tt><tt>=Yes</tt></tt></td><td><em>la, là</em></td><td></td></tr>
  <tr><td><tt></tt></td><td><em>l', l</em></td><td><em>les</em></td></tr>
  <tr><td><tt><tt><a href="fr_gsd-feat-Typo.html">Typo</a></tt><tt>=Yes</tt></tt></td><td><em>L</em></td><td></td></tr>
</table>

### `VERB`

24570 <tt><a href="fr_gsd-pos-VERB.html">VERB</a></tt> tokens (77% of all `VERB` tokens) have a non-empty value of `Number`.

The most frequent other feature values with which `VERB` and `Number` co-occurred: <tt><a href="fr_gsd-feat-Voice.html">Voice</a></tt><tt>=EMPTY</tt> (13556; 55%), <tt><a href="fr_gsd-feat-Gender.html">Gender</a></tt><tt>=EMPTY</tt> (13555; 55%), <tt><a href="fr_gsd-feat-VerbForm.html">VerbForm</a></tt><tt>=Fin</tt> (13555; 55%), <tt><a href="fr_gsd-feat-Mood.html">Mood</a></tt><tt>=Ind</tt> (12968; 53%), <tt><a href="fr_gsd-feat-Person.html">Person</a></tt><tt>=3</tt> (12824; 52%).

`VERB` tokens may have the following values of `Number`:

* `Plur` (5061; 21% of non-empty `Number`): <em>ont, peuvent, font, doivent, prennent, trouvent, vont, permettent, sont, utilisés</em>
* `Sing` (19509; 79% of non-empty `Number`): <em>a, fait, peut, né, située, situé, trouve, devient, doit, eu</em>
* `EMPTY` (7199): <em>faire, partir, voir, prendre, avoir, mettre, passer, trouver, aller, mis</em>

<table>
  <tr><th>Paradigm <i>avoir</i></th><th><tt>Sing</tt></th><th><tt>Plur</tt></th></tr>
  <tr><td><tt><tt><a href="fr_gsd-feat-ExtPos.html">ExtPos</a></tt><tt>=NOUN</tt>|<tt><a href="fr_gsd-feat-Gender.html">Gender</a></tt><tt>=Masc</tt>|<tt><a href="fr_gsd-feat-VerbForm.html">VerbForm</a></tt><tt>=Part</tt></tt></td><td></td><td><em>ayants</em></td></tr>
  <tr><td><tt><tt><a href="fr_gsd-feat-ExtPos.html">ExtPos</a></tt><tt>=PROPN</tt>|<tt><a href="fr_gsd-feat-Mood.html">Mood</a></tt><tt>=Ind</tt>|<tt><a href="fr_gsd-feat-Person.html">Person</a></tt><tt>=3</tt>|<tt><a href="fr_gsd-feat-Tense.html">Tense</a></tt><tt>=Pres</tt>|<tt><a href="fr_gsd-feat-VerbForm.html">VerbForm</a></tt><tt>=Fin</tt></tt></td><td><em>a</em></td><td><em>ont</em></td></tr>
  <tr><td><tt><tt><a href="fr_gsd-feat-Gender.html">Gender</a></tt><tt>=Masc</tt>|<tt><a href="fr_gsd-feat-Typo.html">Typo</a></tt><tt>=Yes</tt>|<tt><a href="fr_gsd-feat-VerbForm.html">VerbForm</a></tt><tt>=Part</tt>|<tt><a href="fr_gsd-feat-Voice.html">Voice</a></tt><tt>=Act</tt></tt></td><td><em>eu</em></td><td></td></tr>
  <tr><td><tt><tt><a href="fr_gsd-feat-Gender.html">Gender</a></tt><tt>=Masc</tt>|<tt><a href="fr_gsd-feat-Typo.html">Typo</a></tt><tt>=Yes</tt>|<tt><a href="fr_gsd-feat-VerbForm.html">VerbForm</a></tt><tt>=Part</tt>|<tt><a href="fr_gsd-feat-Voice.html">Voice</a></tt><tt>=Pass</tt></tt></td><td><em>eu</em></td><td></td></tr>
  <tr><td><tt><tt><a href="fr_gsd-feat-Gender.html">Gender</a></tt><tt>=Masc</tt>|<tt><a href="fr_gsd-feat-VerbForm.html">VerbForm</a></tt><tt>=Part</tt>|<tt><a href="fr_gsd-feat-Voice.html">Voice</a></tt><tt>=Act</tt></tt></td><td><em>eu</em></td><td><em>eus</em></td></tr>
  <tr><td><tt><tt><a href="fr_gsd-feat-Mood.html">Mood</a></tt><tt>=Cnd</tt>|<tt><a href="fr_gsd-feat-Person.html">Person</a></tt><tt>=1</tt>|<tt><a href="fr_gsd-feat-Tense.html">Tense</a></tt><tt>=Pres</tt>|<tt><a href="fr_gsd-feat-VerbForm.html">VerbForm</a></tt><tt>=Fin</tt></tt></td><td><em>aurais</em></td><td></td></tr>
  <tr><td><tt><tt><a href="fr_gsd-feat-Mood.html">Mood</a></tt><tt>=Cnd</tt>|<tt><a href="fr_gsd-feat-Person.html">Person</a></tt><tt>=2</tt>|<tt><a href="fr_gsd-feat-Tense.html">Tense</a></tt><tt>=Pres</tt>|<tt><a href="fr_gsd-feat-VerbForm.html">VerbForm</a></tt><tt>=Fin</tt></tt></td><td><em>aurais</em></td><td><em>auriez</em></td></tr>
  <tr><td><tt><tt><a href="fr_gsd-feat-Mood.html">Mood</a></tt><tt>=Cnd</tt>|<tt><a href="fr_gsd-feat-Person.html">Person</a></tt><tt>=3</tt>|<tt><a href="fr_gsd-feat-Tense.html">Tense</a></tt><tt>=Pres</tt>|<tt><a href="fr_gsd-feat-VerbForm.html">VerbForm</a></tt><tt>=Fin</tt></tt></td><td><em>aurait</em></td><td><em>auraient</em></td></tr>
  <tr><td><tt><tt><a href="fr_gsd-feat-Mood.html">Mood</a></tt><tt>=Ind</tt>|<tt><a href="fr_gsd-feat-Person.html">Person</a></tt><tt>=1</tt>|<tt><a href="fr_gsd-feat-Tense.html">Tense</a></tt><tt>=Fut</tt>|<tt><a href="fr_gsd-feat-VerbForm.html">VerbForm</a></tt><tt>=Fin</tt></tt></td><td><em>aurai</em></td><td></td></tr>
  <tr><td><tt><tt><a href="fr_gsd-feat-Mood.html">Mood</a></tt><tt>=Ind</tt>|<tt><a href="fr_gsd-feat-Person.html">Person</a></tt><tt>=1</tt>|<tt><a href="fr_gsd-feat-Tense.html">Tense</a></tt><tt>=Imp</tt>|<tt><a href="fr_gsd-feat-VerbForm.html">VerbForm</a></tt><tt>=Fin</tt></tt></td><td><em>avais</em></td><td><em>avions</em></td></tr>
  <tr><td><tt><tt><a href="fr_gsd-feat-Mood.html">Mood</a></tt><tt>=Ind</tt>|<tt><a href="fr_gsd-feat-Person.html">Person</a></tt><tt>=1</tt>|<tt><a href="fr_gsd-feat-Tense.html">Tense</a></tt><tt>=Past</tt>|<tt><a href="fr_gsd-feat-VerbForm.html">VerbForm</a></tt><tt>=Fin</tt></tt></td><td><em>eus</em></td><td></td></tr>
  <tr><td><tt><tt><a href="fr_gsd-feat-Mood.html">Mood</a></tt><tt>=Ind</tt>|<tt><a href="fr_gsd-feat-Person.html">Person</a></tt><tt>=1</tt>|<tt><a href="fr_gsd-feat-Tense.html">Tense</a></tt><tt>=Pres</tt>|<tt><a href="fr_gsd-feat-VerbForm.html">VerbForm</a></tt><tt>=Fin</tt></tt></td><td><em>ai</em></td><td><em>avons</em></td></tr>
  <tr><td><tt><tt><a href="fr_gsd-feat-Mood.html">Mood</a></tt><tt>=Ind</tt>|<tt><a href="fr_gsd-feat-Person.html">Person</a></tt><tt>=2</tt>|<tt><a href="fr_gsd-feat-Tense.html">Tense</a></tt><tt>=Fut</tt>|<tt><a href="fr_gsd-feat-VerbForm.html">VerbForm</a></tt><tt>=Fin</tt></tt></td><td></td><td><em>aurez</em></td></tr>
  <tr><td><tt><tt><a href="fr_gsd-feat-Mood.html">Mood</a></tt><tt>=Ind</tt>|<tt><a href="fr_gsd-feat-Person.html">Person</a></tt><tt>=2</tt>|<tt><a href="fr_gsd-feat-Tense.html">Tense</a></tt><tt>=Pres</tt>|<tt><a href="fr_gsd-feat-VerbForm.html">VerbForm</a></tt><tt>=Fin</tt></tt></td><td><em>as</em></td><td><em>avez</em></td></tr>
  <tr><td><tt><tt><a href="fr_gsd-feat-Mood.html">Mood</a></tt><tt>=Ind</tt>|<tt><a href="fr_gsd-feat-Person.html">Person</a></tt><tt>=3</tt>|<tt><a href="fr_gsd-feat-Tense.html">Tense</a></tt><tt>=Fut</tt>|<tt><a href="fr_gsd-feat-VerbForm.html">VerbForm</a></tt><tt>=Fin</tt></tt></td><td><em>aura</em></td><td><em>auront</em></td></tr>
  <tr><td><tt><tt><a href="fr_gsd-feat-Mood.html">Mood</a></tt><tt>=Ind</tt>|<tt><a href="fr_gsd-feat-Person.html">Person</a></tt><tt>=3</tt>|<tt><a href="fr_gsd-feat-Tense.html">Tense</a></tt><tt>=Imp</tt>|<tt><a href="fr_gsd-feat-Typo.html">Typo</a></tt><tt>=Yes</tt>|<tt><a href="fr_gsd-feat-VerbForm.html">VerbForm</a></tt><tt>=Fin</tt></tt></td><td><em>avait</em></td><td></td></tr>
  <tr><td><tt><tt><a href="fr_gsd-feat-Mood.html">Mood</a></tt><tt>=Ind</tt>|<tt><a href="fr_gsd-feat-Person.html">Person</a></tt><tt>=3</tt>|<tt><a href="fr_gsd-feat-Tense.html">Tense</a></tt><tt>=Imp</tt>|<tt><a href="fr_gsd-feat-VerbForm.html">VerbForm</a></tt><tt>=Fin</tt></tt></td><td><em>avait</em></td><td><em>avaient</em></td></tr>
  <tr><td><tt><tt><a href="fr_gsd-feat-Mood.html">Mood</a></tt><tt>=Ind</tt>|<tt><a href="fr_gsd-feat-Person.html">Person</a></tt><tt>=3</tt>|<tt><a href="fr_gsd-feat-Tense.html">Tense</a></tt><tt>=Past</tt>|<tt><a href="fr_gsd-feat-VerbForm.html">VerbForm</a></tt><tt>=Fin</tt></tt></td><td><em>eut</em></td><td><em>eurent</em></td></tr>
  <tr><td><tt><tt><a href="fr_gsd-feat-Mood.html">Mood</a></tt><tt>=Ind</tt>|<tt><a href="fr_gsd-feat-Person.html">Person</a></tt><tt>=3</tt>|<tt><a href="fr_gsd-feat-Tense.html">Tense</a></tt><tt>=Pres</tt>|<tt><a href="fr_gsd-feat-Typo.html">Typo</a></tt><tt>=Yes</tt>|<tt><a href="fr_gsd-feat-VerbForm.html">VerbForm</a></tt><tt>=Fin</tt></tt></td><td></td><td><em>non</em></td></tr>
  <tr><td><tt><tt><a href="fr_gsd-feat-Mood.html">Mood</a></tt><tt>=Ind</tt>|<tt><a href="fr_gsd-feat-Person.html">Person</a></tt><tt>=3</tt>|<tt><a href="fr_gsd-feat-Tense.html">Tense</a></tt><tt>=Pres</tt>|<tt><a href="fr_gsd-feat-VerbForm.html">VerbForm</a></tt><tt>=Fin</tt></tt></td><td><em>a, à</em></td><td><em>ont</em></td></tr>
  <tr><td><tt><tt><a href="fr_gsd-feat-Mood.html">Mood</a></tt><tt>=Sub</tt>|<tt><a href="fr_gsd-feat-Person.html">Person</a></tt><tt>=1</tt>|<tt><a href="fr_gsd-feat-Tense.html">Tense</a></tt><tt>=Pres</tt>|<tt><a href="fr_gsd-feat-VerbForm.html">VerbForm</a></tt><tt>=Fin</tt></tt></td><td></td><td><em>ayons</em></td></tr>
  <tr><td><tt><tt><a href="fr_gsd-feat-Mood.html">Mood</a></tt><tt>=Sub</tt>|<tt><a href="fr_gsd-feat-Person.html">Person</a></tt><tt>=3</tt>|<tt><a href="fr_gsd-feat-Tense.html">Tense</a></tt><tt>=Imp</tt>|<tt><a href="fr_gsd-feat-VerbForm.html">VerbForm</a></tt><tt>=Fin</tt></tt></td><td><em>eût</em></td><td></td></tr>
  <tr><td><tt><tt><a href="fr_gsd-feat-Mood.html">Mood</a></tt><tt>=Sub</tt>|<tt><a href="fr_gsd-feat-Person.html">Person</a></tt><tt>=3</tt>|<tt><a href="fr_gsd-feat-Tense.html">Tense</a></tt><tt>=Pres</tt>|<tt><a href="fr_gsd-feat-VerbForm.html">VerbForm</a></tt><tt>=Fin</tt></tt></td><td><em>ait</em></td><td><em>aient</em></td></tr>
</table>

### `ADJ`

22775 <tt><a href="fr_gsd-pos-ADJ.html">ADJ</a></tt> tokens (96% of all `ADJ` tokens) have a non-empty value of `Number`.

`ADJ` tokens may have the following values of `Number`:

* `Plur` (6282; 28% of non-empty `Number`): <em>autres, tous, toutes, nombreuses, politiques, jeunes, premiers, propres, économiques, grands</em>
* `Sing` (16493; 72% of non-empty `Number`): <em>même, premier, première, autre, politique, deuxième, française, dernier, grande, grand</em>
* `EMPTY` (1046): <em>français, nombreux, anglais, chaleureux, religieux, beau, super, vieux, gros, néerlandais</em>

<table>
  <tr><th>Paradigm <i>premier</i></th><th><tt>Sing</tt></th><th><tt>Plur</tt></th></tr>
  <tr><td><tt><tt><a href="fr_gsd-feat-Gender.html">Gender</a></tt><tt>=Masc</tt></tt></td><td><em>premier</em></td><td><em>premiers</em></td></tr>
  <tr><td><tt><tt><a href="fr_gsd-feat-Gender.html">Gender</a></tt><tt>=Masc</tt>|<tt><a href="fr_gsd-feat-Typo.html">Typo</a></tt><tt>=Yes</tt></tt></td><td><em>premier</em></td><td></td></tr>
  <tr><td><tt><tt><a href="fr_gsd-feat-Gender.html">Gender</a></tt><tt>=Fem</tt></tt></td><td><em>première</em></td><td><em>premières</em></td></tr>
</table>

### `AUX`

12226 <tt><a href="fr_gsd-pos-AUX.html">AUX</a></tt> tokens (93% of all `AUX` tokens) have a non-empty value of `Number`.

The most frequent other feature values with which `AUX` and `Number` co-occurred: <tt><a href="fr_gsd-feat-VerbForm.html">VerbForm</a></tt><tt>=Fin</tt> (11322; 93%), <tt><a href="fr_gsd-feat-Mood.html">Mood</a></tt><tt>=Ind</tt> (10962; 90%), <tt><a href="fr_gsd-feat-Person.html">Person</a></tt><tt>=3</tt> (10871; 89%), <tt><a href="fr_gsd-feat-Tense.html">Tense</a></tt><tt>=Pres</tt> (9587; 78%).

`AUX` tokens may have the following values of `Number`:

* `Plur` (2334; 19% of non-empty `Number`): <em>sont, ont, étaient, avons, furent, avaient, seront, sommes, soient, auraient</em>
* `Sing` (9892; 81% of non-empty `Number`): <em>est, a, été, était, fut, avait, ai, sera, fait, soit</em>
* `EMPTY` (855): <em>être, avoir, étant, faire, ayant, faisant, Etant, -être, etre, voir</em>

<table>
  <tr><th>Paradigm <i>être</i></th><th><tt>Sing</tt></th><th><tt>Plur</tt></th></tr>
  <tr><td><tt><tt><a href="fr_gsd-feat-Gender.html">Gender</a></tt><tt>=Masc</tt>|<tt><a href="fr_gsd-feat-Typo.html">Typo</a></tt><tt>=Yes</tt>|<tt><a href="fr_gsd-feat-VerbForm.html">VerbForm</a></tt><tt>=Part</tt></tt></td><td><em>été</em></td><td></td></tr>
  <tr><td><tt><tt><a href="fr_gsd-feat-Gender.html">Gender</a></tt><tt>=Masc</tt>|<tt><a href="fr_gsd-feat-VerbForm.html">VerbForm</a></tt><tt>=Part</tt></tt></td><td><em>été</em></td><td></td></tr>
  <tr><td><tt><tt><a href="fr_gsd-feat-Mood.html">Mood</a></tt><tt>=Cnd</tt>|<tt><a href="fr_gsd-feat-Person.html">Person</a></tt><tt>=1</tt>|<tt><a href="fr_gsd-feat-Tense.html">Tense</a></tt><tt>=Pres</tt>|<tt><a href="fr_gsd-feat-Typo.html">Typo</a></tt><tt>=Yes</tt>|<tt><a href="fr_gsd-feat-VerbForm.html">VerbForm</a></tt><tt>=Fin</tt></tt></td><td><em>serais</em></td><td></td></tr>
  <tr><td><tt><tt><a href="fr_gsd-feat-Mood.html">Mood</a></tt><tt>=Cnd</tt>|<tt><a href="fr_gsd-feat-Person.html">Person</a></tt><tt>=1</tt>|<tt><a href="fr_gsd-feat-Tense.html">Tense</a></tt><tt>=Pres</tt>|<tt><a href="fr_gsd-feat-VerbForm.html">VerbForm</a></tt><tt>=Fin</tt></tt></td><td><em>serais</em></td><td><em>serions</em></td></tr>
  <tr><td><tt><tt><a href="fr_gsd-feat-Mood.html">Mood</a></tt><tt>=Cnd</tt>|<tt><a href="fr_gsd-feat-Person.html">Person</a></tt><tt>=2</tt>|<tt><a href="fr_gsd-feat-Tense.html">Tense</a></tt><tt>=Pres</tt>|<tt><a href="fr_gsd-feat-VerbForm.html">VerbForm</a></tt><tt>=Fin</tt></tt></td><td></td><td><em>seriez</em></td></tr>
  <tr><td><tt><tt><a href="fr_gsd-feat-Mood.html">Mood</a></tt><tt>=Cnd</tt>|<tt><a href="fr_gsd-feat-Person.html">Person</a></tt><tt>=3</tt>|<tt><a href="fr_gsd-feat-Tense.html">Tense</a></tt><tt>=Pres</tt>|<tt><a href="fr_gsd-feat-VerbForm.html">VerbForm</a></tt><tt>=Fin</tt></tt></td><td><em>serait</em></td><td><em>seraient</em></td></tr>
  <tr><td><tt><tt><a href="fr_gsd-feat-Mood.html">Mood</a></tt><tt>=Imp</tt>|<tt><a href="fr_gsd-feat-Person.html">Person</a></tt><tt>=2</tt>|<tt><a href="fr_gsd-feat-Tense.html">Tense</a></tt><tt>=Pres</tt>|<tt><a href="fr_gsd-feat-VerbForm.html">VerbForm</a></tt><tt>=Fin</tt></tt></td><td><em>sois</em></td><td><em>soyez</em></td></tr>
  <tr><td><tt><tt><a href="fr_gsd-feat-Mood.html">Mood</a></tt><tt>=Ind</tt>|<tt><a href="fr_gsd-feat-Person.html">Person</a></tt><tt>=1</tt>|<tt><a href="fr_gsd-feat-Tense.html">Tense</a></tt><tt>=Imp</tt>|<tt><a href="fr_gsd-feat-VerbForm.html">VerbForm</a></tt><tt>=Fin</tt></tt></td><td><em>étais</em></td><td><em>étions</em></td></tr>
  <tr><td><tt><tt><a href="fr_gsd-feat-Mood.html">Mood</a></tt><tt>=Ind</tt>|<tt><a href="fr_gsd-feat-Person.html">Person</a></tt><tt>=1</tt>|<tt><a href="fr_gsd-feat-Tense.html">Tense</a></tt><tt>=Pres</tt>|<tt><a href="fr_gsd-feat-VerbForm.html">VerbForm</a></tt><tt>=Fin</tt></tt></td><td><em>suis</em></td><td><em>sommes</em></td></tr>
  <tr><td><tt><tt><a href="fr_gsd-feat-Mood.html">Mood</a></tt><tt>=Ind</tt>|<tt><a href="fr_gsd-feat-Person.html">Person</a></tt><tt>=2</tt>|<tt><a href="fr_gsd-feat-Tense.html">Tense</a></tt><tt>=Fut</tt>|<tt><a href="fr_gsd-feat-VerbForm.html">VerbForm</a></tt><tt>=Fin</tt></tt></td><td></td><td><em>serez</em></td></tr>
  <tr><td><tt><tt><a href="fr_gsd-feat-Mood.html">Mood</a></tt><tt>=Ind</tt>|<tt><a href="fr_gsd-feat-Person.html">Person</a></tt><tt>=2</tt>|<tt><a href="fr_gsd-feat-Tense.html">Tense</a></tt><tt>=Pres</tt>|<tt><a href="fr_gsd-feat-VerbForm.html">VerbForm</a></tt><tt>=Fin</tt></tt></td><td><em>es</em></td><td><em>êtes</em></td></tr>
  <tr><td><tt><tt><a href="fr_gsd-feat-Mood.html">Mood</a></tt><tt>=Ind</tt>|<tt><a href="fr_gsd-feat-Person.html">Person</a></tt><tt>=3</tt>|<tt><a href="fr_gsd-feat-Tense.html">Tense</a></tt><tt>=Fut</tt>|<tt><a href="fr_gsd-feat-VerbForm.html">VerbForm</a></tt><tt>=Fin</tt></tt></td><td><em>sera</em></td><td><em>seront</em></td></tr>
  <tr><td><tt><tt><a href="fr_gsd-feat-Mood.html">Mood</a></tt><tt>=Ind</tt>|<tt><a href="fr_gsd-feat-Person.html">Person</a></tt><tt>=3</tt>|<tt><a href="fr_gsd-feat-Tense.html">Tense</a></tt><tt>=Imp</tt>|<tt><a href="fr_gsd-feat-Typo.html">Typo</a></tt><tt>=Yes</tt>|<tt><a href="fr_gsd-feat-VerbForm.html">VerbForm</a></tt><tt>=Fin</tt></tt></td><td><em>était</em></td><td></td></tr>
  <tr><td><tt><tt><a href="fr_gsd-feat-Mood.html">Mood</a></tt><tt>=Ind</tt>|<tt><a href="fr_gsd-feat-Person.html">Person</a></tt><tt>=3</tt>|<tt><a href="fr_gsd-feat-Tense.html">Tense</a></tt><tt>=Imp</tt>|<tt><a href="fr_gsd-feat-VerbForm.html">VerbForm</a></tt><tt>=Fin</tt></tt></td><td><em>était</em></td><td><em>étaient</em></td></tr>
  <tr><td><tt><tt><a href="fr_gsd-feat-Mood.html">Mood</a></tt><tt>=Ind</tt>|<tt><a href="fr_gsd-feat-Person.html">Person</a></tt><tt>=3</tt>|<tt><a href="fr_gsd-feat-Tense.html">Tense</a></tt><tt>=Past</tt>|<tt><a href="fr_gsd-feat-Typo.html">Typo</a></tt><tt>=Yes</tt>|<tt><a href="fr_gsd-feat-VerbForm.html">VerbForm</a></tt><tt>=Fin</tt></tt></td><td><em>était</em></td><td><em>furent</em></td></tr>
  <tr><td><tt><tt><a href="fr_gsd-feat-Mood.html">Mood</a></tt><tt>=Ind</tt>|<tt><a href="fr_gsd-feat-Person.html">Person</a></tt><tt>=3</tt>|<tt><a href="fr_gsd-feat-Tense.html">Tense</a></tt><tt>=Past</tt>|<tt><a href="fr_gsd-feat-VerbForm.html">VerbForm</a></tt><tt>=Fin</tt></tt></td><td><em>fut</em></td><td><em>furent</em></td></tr>
  <tr><td><tt><tt><a href="fr_gsd-feat-Mood.html">Mood</a></tt><tt>=Ind</tt>|<tt><a href="fr_gsd-feat-Person.html">Person</a></tt><tt>=3</tt>|<tt><a href="fr_gsd-feat-Tense.html">Tense</a></tt><tt>=Pres</tt>|<tt><a href="fr_gsd-feat-Typo.html">Typo</a></tt><tt>=Yes</tt>|<tt><a href="fr_gsd-feat-VerbForm.html">VerbForm</a></tt><tt>=Fin</tt></tt></td><td><em>est, esr</em></td><td><em>son, sont</em></td></tr>
  <tr><td><tt><tt><a href="fr_gsd-feat-Mood.html">Mood</a></tt><tt>=Ind</tt>|<tt><a href="fr_gsd-feat-Person.html">Person</a></tt><tt>=3</tt>|<tt><a href="fr_gsd-feat-Tense.html">Tense</a></tt><tt>=Pres</tt>|<tt><a href="fr_gsd-feat-VerbForm.html">VerbForm</a></tt><tt>=Fin</tt></tt></td><td><em>est</em></td><td><em>sont, son</em></td></tr>
  <tr><td><tt><tt><a href="fr_gsd-feat-Mood.html">Mood</a></tt><tt>=Sub</tt>|<tt><a href="fr_gsd-feat-Person.html">Person</a></tt><tt>=2</tt>|<tt><a href="fr_gsd-feat-Tense.html">Tense</a></tt><tt>=Pres</tt>|<tt><a href="fr_gsd-feat-VerbForm.html">VerbForm</a></tt><tt>=Fin</tt></tt></td><td></td><td><em>soyez</em></td></tr>
  <tr><td><tt><tt><a href="fr_gsd-feat-Mood.html">Mood</a></tt><tt>=Sub</tt>|<tt><a href="fr_gsd-feat-Person.html">Person</a></tt><tt>=3</tt>|<tt><a href="fr_gsd-feat-Tense.html">Tense</a></tt><tt>=Imp</tt>|<tt><a href="fr_gsd-feat-VerbForm.html">VerbForm</a></tt><tt>=Fin</tt></tt></td><td><em>fût</em></td><td></td></tr>
  <tr><td><tt><tt><a href="fr_gsd-feat-Mood.html">Mood</a></tt><tt>=Sub</tt>|<tt><a href="fr_gsd-feat-Person.html">Person</a></tt><tt>=3</tt>|<tt><a href="fr_gsd-feat-Tense.html">Tense</a></tt><tt>=Pres</tt>|<tt><a href="fr_gsd-feat-VerbForm.html">VerbForm</a></tt><tt>=Fin</tt></tt></td><td><em>soit</em></td><td><em>soient</em></td></tr>
</table>

### `PRON`

11255 <tt><a href="fr_gsd-pos-PRON.html">PRON</a></tt> tokens (62% of all `PRON` tokens) have a non-empty value of `Number`.

The most frequent other feature values with which `PRON` and `Number` co-occurred: <tt><a href="fr_gsd-feat-Reflex.html">Reflex</a></tt><tt>=EMPTY</tt> (11102; 99%), <tt><a href="fr_gsd-feat-Person.html">Person</a></tt><tt>=3</tt> (9470; 84%), <tt><a href="fr_gsd-feat-Emph.html">Emph</a></tt><tt>=No</tt> (8352; 74%), <tt><a href="fr_gsd-feat-PronType.html">PronType</a></tt><tt>=Prs</tt> (8195; 73%), <tt><a href="fr_gsd-feat-Gender.html">Gender</a></tt><tt>=Masc</tt> (7256; 64%), <tt><a href="fr_gsd-feat-Case.html">Case</a></tt><tt>=Nom</tt> (6757; 60%).

`PRON` tokens may have the following values of `Number`:

* `Plur` (2029; 18% of non-empty `Number`): <em>ils, nous, vous, les, elles, autres, ceux, eux, leur, tous</em>
* `Sing` (9226; 82% of non-empty `Number`): <em>il, elle, c', on, lui, je, le, j', l', un</em>
* `EMPTY` (6834): <em>qui, se, s', y, où, ce, dont, en, qu', que</em>

<table>
  <tr><th>Paradigm <i>lui</i></th><th><tt>Sing</tt></th><th><tt>Plur</tt></th></tr>
  <tr><td><tt><tt><a href="fr_gsd-feat-Case.html">Case</a></tt><tt>=Acc</tt>|<tt><a href="fr_gsd-feat-Emph.html">Emph</a></tt><tt>=No</tt>|<tt><a href="fr_gsd-feat-Gender.html">Gender</a></tt><tt>=Masc</tt></tt></td><td><em>le</em></td><td></td></tr>
  <tr><td><tt><tt><a href="fr_gsd-feat-Case.html">Case</a></tt><tt>=Acc</tt>|<tt><a href="fr_gsd-feat-Emph.html">Emph</a></tt><tt>=No</tt>|<tt><a href="fr_gsd-feat-Gender.html">Gender</a></tt><tt>=Fem</tt></tt></td><td><em>la</em></td><td></td></tr>
  <tr><td><tt><tt><a href="fr_gsd-feat-Case.html">Case</a></tt><tt>=Acc</tt>|<tt><a href="fr_gsd-feat-Emph.html">Emph</a></tt><tt>=No</tt></tt></td><td><em>l'</em></td><td></td></tr>
  <tr><td><tt><tt><a href="fr_gsd-feat-Case.html">Case</a></tt><tt>=Dat</tt>|<tt><a href="fr_gsd-feat-Emph.html">Emph</a></tt><tt>=No</tt>|<tt><a href="fr_gsd-feat-Gender.html">Gender</a></tt><tt>=Masc</tt></tt></td><td><em>lui</em></td><td></td></tr>
  <tr><td><tt><tt><a href="fr_gsd-feat-Case.html">Case</a></tt><tt>=Dat</tt>|<tt><a href="fr_gsd-feat-Emph.html">Emph</a></tt><tt>=No</tt></tt></td><td><em>lui</em></td><td></td></tr>
  <tr><td><tt><tt><a href="fr_gsd-feat-Case.html">Case</a></tt><tt>=Nom</tt>|<tt><a href="fr_gsd-feat-Emph.html">Emph</a></tt><tt>=No</tt>|<tt><a href="fr_gsd-feat-ExtPos.html">ExtPos</a></tt><tt>=ADP</tt>|<tt><a href="fr_gsd-feat-Gender.html">Gender</a></tt><tt>=Masc</tt></tt></td><td><em>il</em></td><td></td></tr>
  <tr><td><tt><tt><a href="fr_gsd-feat-Case.html">Case</a></tt><tt>=Nom</tt>|<tt><a href="fr_gsd-feat-Emph.html">Emph</a></tt><tt>=No</tt>|<tt><a href="fr_gsd-feat-Gender.html">Gender</a></tt><tt>=Masc</tt></tt></td><td><em>il, -il</em></td><td><em>ils</em></td></tr>
  <tr><td><tt><tt><a href="fr_gsd-feat-Case.html">Case</a></tt><tt>=Nom</tt>|<tt><a href="fr_gsd-feat-Emph.html">Emph</a></tt><tt>=No</tt>|<tt><a href="fr_gsd-feat-Gender.html">Gender</a></tt><tt>=Masc</tt>|<tt><a href="fr_gsd-feat-Typo.html">Typo</a></tt><tt>=Yes</tt></tt></td><td><em>il</em></td><td></td></tr>
  <tr><td><tt><tt><a href="fr_gsd-feat-Case.html">Case</a></tt><tt>=Nom</tt>|<tt><a href="fr_gsd-feat-Emph.html">Emph</a></tt><tt>=No</tt>|<tt><a href="fr_gsd-feat-Gender.html">Gender</a></tt><tt>=Fem</tt></tt></td><td><em>elle, -elle</em></td><td><em>elles</em></td></tr>
  <tr><td><tt><tt><a href="fr_gsd-feat-Case.html">Case</a></tt><tt>=Nom</tt>|<tt><a href="fr_gsd-feat-Emph.html">Emph</a></tt><tt>=No</tt>|<tt><a href="fr_gsd-feat-Gender.html">Gender</a></tt><tt>=Fem</tt>|<tt><a href="fr_gsd-feat-Typo.html">Typo</a></tt><tt>=Yes</tt></tt></td><td><em>elle</em></td><td></td></tr>
  <tr><td><tt><tt><a href="fr_gsd-feat-Emph.html">Emph</a></tt><tt>=No</tt>|<tt><a href="fr_gsd-feat-Gender.html">Gender</a></tt><tt>=Masc</tt></tt></td><td><em>-t-il, -il, le, lui</em></td><td></td></tr>
  <tr><td><tt><tt><a href="fr_gsd-feat-Emph.html">Emph</a></tt><tt>=No</tt>|<tt><a href="fr_gsd-feat-Gender.html">Gender</a></tt><tt>=Masc</tt>|<tt><a href="fr_gsd-feat-Typo.html">Typo</a></tt><tt>=Yes</tt></tt></td><td><em>t-il, -il, -le, t'il</em></td><td></td></tr>
  <tr><td><tt><tt><a href="fr_gsd-feat-Emph.html">Emph</a></tt><tt>=No</tt>|<tt><a href="fr_gsd-feat-Gender.html">Gender</a></tt><tt>=Fem</tt></tt></td><td><em>-t-elle, -elle, la</em></td><td></td></tr>
  <tr><td><tt><tt><a href="fr_gsd-feat-Emph.html">Emph</a></tt><tt>=No</tt></tt></td><td><em>l'</em></td><td></td></tr>
  <tr><td><tt><tt><a href="fr_gsd-feat-Emph.html">Emph</a></tt><tt>=Yes</tt>|<tt><a href="fr_gsd-feat-Gender.html">Gender</a></tt><tt>=Masc</tt></tt></td><td><em>lui</em></td><td></td></tr>
  <tr><td><tt><tt><a href="fr_gsd-feat-Emph.html">Emph</a></tt><tt>=Yes</tt>|<tt><a href="fr_gsd-feat-Gender.html">Gender</a></tt><tt>=Fem</tt></tt></td><td><em>elle</em></td><td><em>elles</em></td></tr>
</table>

### `PROPN`

4979 <tt><a href="fr_gsd-pos-PROPN.html">PROPN</a></tt> tokens (18% of all `PROPN` tokens) have a non-empty value of `Number`.

`PROPN` tokens may have the following values of `Number`:

* `Plur` (992; 20% of non-empty `Number`): <em>États-Unis, Etats-Unis, Pays-Bas, Pyrénées, îles, Vosges, Hautes-Pyrénées, Rangers, Alpes, Caraïbes</em>
* `Sing` (3987; 80% of non-empty `Number`): <em>Europe, Maroc, France, ONU, Espagne, Algérie, Sahara, Canada, UE, Afrique</em>
* `EMPTY` (22714): <em>France, Paris, de, Jean, Europe, York, New, Pierre, Charles, Louis</em>

<table>
  <tr><th>Paradigm <i>Pierre</i></th><th><tt>Sing</tt></th><th><tt>Plur</tt></th></tr>
  <tr><td><tt>_</tt></td><td></td><td><em>Pierre</em></td></tr>
  <tr><td><tt><tt><a href="fr_gsd-feat-Gender.html">Gender</a></tt><tt>=Masc</tt></tt></td><td><em>Pierre</em></td><td></td></tr>
</table>

`Number` seems to be **lexical feature** of `PROPN`. 99% lemmas (2859) occur only with one value of `Number`.

### `SYM`

419 <tt><a href="fr_gsd-pos-SYM.html">SYM</a></tt> tokens (58% of all `SYM` tokens) have a non-empty value of `Number`.

The most frequent other feature values with which `SYM` and `Number` co-occurred: <tt><a href="fr_gsd-feat-ExtPos.html">ExtPos</a></tt><tt>=NOUN</tt> (417; 100%).

`SYM` tokens may have the following values of `Number`:

* `Plur` (401; 96% of non-empty `Number`): <em>%, €, °, $, ", ', º, ′, *, eV</em>
* `Sing` (18; 4% of non-empty `Number`): <em>n°, %, CsBi4Te6, M, X</em>
* `EMPTY` (299): <em>/, &, +, =, k, A, H, x, M, :)</em>

<table>
  <tr><th>Paradigm <i>%</i></th><th><tt>Sing</tt></th><th><tt>Plur</tt></th></tr>
  <tr><td><tt></tt></td><td></td><td><em>%</em></td></tr>
  <tr><td><tt><tt><a href="fr_gsd-feat-Gender.html">Gender</a></tt><tt>=Masc</tt></tt></td><td><em>%</em></td><td></td></tr>
</table>

`Number` seems to be **lexical feature** of `SYM`. 95% lemmas (18) occur only with one value of `Number`.

### `X`

106 <tt><a href="fr_gsd-pos-X.html">X</a></tt> tokens (4% of all `X` tokens) have a non-empty value of `Number`.

The most frequent other feature values with which `X` and `Number` co-occurred: <tt><a href="fr_gsd-feat-Foreign.html">Foreign</a></tt><tt>=EMPTY</tt> (106; 100%), <tt><a href="fr_gsd-feat-ExtPos.html">ExtPos</a></tt><tt>=PROPN</tt> (58; 55%).

`X` tokens may have the following values of `Number`:

* `Plur` (2; 2% of non-empty `Number`): <em>agnolotti, cevapcici</em>
* `Sing` (104; 98% of non-empty `Number`): <em>DKK, a, anchicho, incienso, statu, 3D, ARNm, B, BoJ, CEDH</em>
* `EMPTY` (2851): <em>the, of, de, and, etc., in, a, del, for, Company</em>

`Number` seems to be **lexical feature** of `X`. 100% lemmas (104) occur only with one value of `Number`.

### `NUM`

1 <tt><a href="fr_gsd-pos-NUM.html">NUM</a></tt> tokens (0% of all `NUM` tokens) have a non-empty value of `Number`.

`NUM` tokens may have the following values of `Number`:

* `Plur` (1; 100% of non-empty `Number`): <em>1961</em>
* `EMPTY` (10479): <em>deux, trois, 2, 3, 5, quatre, 2010, 4, 20, 2009</em>

## Relations with Agreement in `Number`

The 10 most frequent relations where parent and child node agree in `Number`:
<tt>NOUN --[<tt><a href="fr_gsd-dep-det.html">det</a></tt>]--> DET</tt> (51195; 96%),
<tt>NOUN --[<tt><a href="fr_gsd-dep-amod.html">amod</a></tt>]--> ADJ</tt> (17658; 91%),
<tt>NOUN --[<tt><a href="fr_gsd-dep-nmod.html">nmod</a></tt>]--> NOUN</tt> (12318; 59%),
<tt>VERB --[<tt><a href="fr_gsd-dep-obl-mod.html">obl:mod</a></tt>]--> NOUN</tt> (5313; 55%),
<tt>VERB --[<tt><a href="fr_gsd-dep-nsubj.html">nsubj</a></tt>]--> PRON</tt> (5038; 72%),
<tt>PROPN --[<tt><a href="fr_gsd-dep-det.html">det</a></tt>]--> DET</tt> (4773; 99%),
<tt>VERB --[<tt><a href="fr_gsd-dep-nsubj.html">nsubj</a></tt>]--> NOUN</tt> (4653; 88%),
<tt>NOUN --[<tt><a href="fr_gsd-dep-conj.html">conj</a></tt>]--> NOUN</tt> (4041; 77%),
<tt>NOUN --[<tt><a href="fr_gsd-dep-acl.html">acl</a></tt>]--> VERB</tt> (2953; 70%),
<tt>VERB --[<tt><a href="fr_gsd-dep-aux-pass.html">aux:pass</a></tt>]--> AUX</tt> (2834; 84%).

