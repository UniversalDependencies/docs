---
layout: base
title:  'Statistics of Number in UD_French-PUD'
udver: '2'
---

## Treebank Statistics: UD_French-PUD: Features: `Number`

This feature is universal.
It occurs with 2 different values: `Plur`, `Sing`.

This is a <a href="../../u/overview/feat-layers.html">layered feature</a> with the following layers: <tt><a href="fr_pud-feat-Number.html">Number</a></tt>, <tt><a href="fr_pud-feat-Number-psor.html">Number[psor]</a></tt>.

15019 tokens (61%) have a non-empty value of `Number`.
5152 types (86%) occur at least once with a non-empty value of `Number`.
3912 lemmas (85%) occur at least once with a non-empty value of `Number`.
The feature is used with 11 part-of-speech tags: <tt><a href="fr_pud-pos-NOUN.html">NOUN</a></tt> (4696; 19% instances), <tt><a href="fr_pud-pos-DET.html">DET</a></tt> (3877; 16% instances), <tt><a href="fr_pud-pos-VERB.html">VERB</a></tt> (1738; 7% instances), <tt><a href="fr_pud-pos-ADJ.html">ADJ</a></tt> (1603; 6% instances), <tt><a href="fr_pud-pos-PROPN.html">PROPN</a></tt> (1220; 5% instances), <tt><a href="fr_pud-pos-AUX.html">AUX</a></tt> (974; 4% instances), <tt><a href="fr_pud-pos-PRON.html">PRON</a></tt> (870; 4% instances), <tt><a href="fr_pud-pos-ADP.html">ADP</a></tt> (26; 0% instances), <tt><a href="fr_pud-pos-X.html">X</a></tt> (10; 0% instances), <tt><a href="fr_pud-pos-NUM.html">NUM</a></tt> (4; 0% instances), <tt><a href="fr_pud-pos-SCONJ.html">SCONJ</a></tt> (1; 0% instances).

### `NOUN`

4696 <tt><a href="fr_pud-pos-NOUN.html">NOUN</a></tt> tokens (100% of all `NOUN` tokens) have a non-empty value of `Number`.

The most frequent other feature values with which `NOUN` and `Number` co-occurred: <tt><a href="fr_pud-feat-Gender.html">Gender</a></tt><tt>=Masc</tt> (2512; 53%).

`NOUN` tokens may have the following values of `Number`:

* `Plur` (1311; 28% of non-empty `Number`): <em>années, ans, personnes, millions, entreprises, dollars, jours, euros, femmes, gens</em>
* `Sing` (3385; 72% of non-empty `Number`): <em>guerre, partie, ville, nord, année, état, sud, gouvernement, mer, siècle</em>

<table>
  <tr><th>Paradigm <i>année</i></th><th><tt>Sing</tt></th><th><tt>Plur</tt></th></tr>
  <tr><td><tt></tt></td><td><em>année</em></td><td><em>années</em></td></tr>
</table>

### `DET`

3877 <tt><a href="fr_pud-pos-DET.html">DET</a></tt> tokens (100% of all `DET` tokens) have a non-empty value of `Number`.

The most frequent other feature values with which `DET` and `Number` co-occurred: <tt><a href="fr_pud-feat-Gender.html">Gender</a></tt><tt>=Masc</tt> (2021; 52%).

`DET` tokens may have the following values of `Number`:

* `Plur` (1011; 26% of non-empty `Number`): <em>les, des, ses, ces, de, leurs, d', nos, d’, mes</em>
* `Sing` (2866; 74% of non-empty `Number`): <em>le, la, l', un, une, l’, son, sa, cette, leur</em>
* `EMPTY` (3): <em>d', le, les</em>

<table>
  <tr><th>Paradigm <i>le</i></th><th><tt>Sing</tt></th><th><tt>Plur</tt></th></tr>
  <tr><td><tt>_</tt></td><td><em>l'</em></td><td><em>les</em></td></tr>
  <tr><td><tt><tt><a href="fr_pud-feat-Gender.html">Gender</a></tt><tt>=Masc</tt></tt></td><td><em>le, l', l’, les, l‘</em></td><td><em>les, le</em></td></tr>
  <tr><td><tt><tt><a href="fr_pud-feat-Gender.html">Gender</a></tt><tt>=Fem</tt></tt></td><td><em>la, l', l’, l‘</em></td><td><em>les</em></td></tr>
</table>

### `VERB`

1738 <tt><a href="fr_pud-pos-VERB.html">VERB</a></tt> tokens (77% of all `VERB` tokens) have a non-empty value of `Number`.

The most frequent other feature values with which `VERB` and `Number` co-occurred: <tt><a href="fr_pud-feat-Tense.html">Tense</a></tt><tt>=Past</tt> (927; 53%), <tt><a href="fr_pud-feat-Gender.html">Gender</a></tt><tt>=EMPTY</tt> (901; 52%), <tt><a href="fr_pud-feat-VerbForm.html">VerbForm</a></tt><tt>=Fin</tt> (900; 52%).

`VERB` tokens may have the following values of `Number`:

* `Plur` (402; 23% of non-empty `Number`): <em>peuvent, sont, ont, pourraient, étaient, devons, font, avaient, commencent, devraient</em>
* `Sing` (1336; 77% of non-empty `Number`): <em>a, est, peut, dit, eu, déclaré, fait, avait, pourrait, était</em>
* `EMPTY` (517): <em>faire, avoir, voir, devenir, partir, concernant, faisant, produire, aider, ayant</em>

<table>
  <tr><th>Paradigm <i>avoir</i></th><th><tt>Sing</tt></th><th><tt>Plur</tt></th></tr>
  <tr><td><tt><tt><a href="fr_pud-feat-Gender.html">Gender</a></tt><tt>=Masc</tt>|<tt><a href="fr_pud-feat-Tense.html">Tense</a></tt><tt>=Past</tt>|<tt><a href="fr_pud-feat-VerbForm.html">VerbForm</a></tt><tt>=Part</tt></tt></td><td><em>eu</em></td><td></td></tr>
  <tr><td><tt><tt><a href="fr_pud-feat-Mood.html">Mood</a></tt><tt>=Cnd</tt>|<tt><a href="fr_pud-feat-Person.html">Person</a></tt><tt>=3</tt>|<tt><a href="fr_pud-feat-Tense.html">Tense</a></tt><tt>=Pres</tt>|<tt><a href="fr_pud-feat-VerbForm.html">VerbForm</a></tt><tt>=Fin</tt></tt></td><td><em>aurait</em></td><td></td></tr>
  <tr><td><tt><tt><a href="fr_pud-feat-Mood.html">Mood</a></tt><tt>=Ind</tt>|<tt><a href="fr_pud-feat-Person.html">Person</a></tt><tt>=1</tt>|<tt><a href="fr_pud-feat-Tense.html">Tense</a></tt><tt>=Pres</tt>|<tt><a href="fr_pud-feat-VerbForm.html">VerbForm</a></tt><tt>=Fin</tt></tt></td><td><em>ai</em></td><td><em>avons</em></td></tr>
  <tr><td><tt><tt><a href="fr_pud-feat-Mood.html">Mood</a></tt><tt>=Ind</tt>|<tt><a href="fr_pud-feat-Person.html">Person</a></tt><tt>=2</tt>|<tt><a href="fr_pud-feat-Tense.html">Tense</a></tt><tt>=Pres</tt>|<tt><a href="fr_pud-feat-VerbForm.html">VerbForm</a></tt><tt>=Fin</tt></tt></td><td></td><td><em>avez</em></td></tr>
  <tr><td><tt><tt><a href="fr_pud-feat-Mood.html">Mood</a></tt><tt>=Ind</tt>|<tt><a href="fr_pud-feat-Person.html">Person</a></tt><tt>=3</tt>|<tt><a href="fr_pud-feat-Tense.html">Tense</a></tt><tt>=Fut</tt>|<tt><a href="fr_pud-feat-VerbForm.html">VerbForm</a></tt><tt>=Fin</tt></tt></td><td><em>aura</em></td><td></td></tr>
  <tr><td><tt><tt><a href="fr_pud-feat-Mood.html">Mood</a></tt><tt>=Ind</tt>|<tt><a href="fr_pud-feat-Person.html">Person</a></tt><tt>=3</tt>|<tt><a href="fr_pud-feat-Tense.html">Tense</a></tt><tt>=Imp</tt>|<tt><a href="fr_pud-feat-VerbForm.html">VerbForm</a></tt><tt>=Fin</tt></tt></td><td><em>avait</em></td><td><em>avaient</em></td></tr>
  <tr><td><tt><tt><a href="fr_pud-feat-Mood.html">Mood</a></tt><tt>=Ind</tt>|<tt><a href="fr_pud-feat-Person.html">Person</a></tt><tt>=3</tt>|<tt><a href="fr_pud-feat-Tense.html">Tense</a></tt><tt>=Past</tt>|<tt><a href="fr_pud-feat-VerbForm.html">VerbForm</a></tt><tt>=Fin</tt></tt></td><td><em>eut</em></td><td><em>eurent</em></td></tr>
  <tr><td><tt><tt><a href="fr_pud-feat-Mood.html">Mood</a></tt><tt>=Ind</tt>|<tt><a href="fr_pud-feat-Person.html">Person</a></tt><tt>=3</tt>|<tt><a href="fr_pud-feat-Tense.html">Tense</a></tt><tt>=Pres</tt>|<tt><a href="fr_pud-feat-VerbForm.html">VerbForm</a></tt><tt>=Fin</tt></tt></td><td><em>a</em></td><td><em>ont</em></td></tr>
  <tr><td><tt><tt><a href="fr_pud-feat-Mood.html">Mood</a></tt><tt>=Sub</tt>|<tt><a href="fr_pud-feat-Person.html">Person</a></tt><tt>=3</tt>|<tt><a href="fr_pud-feat-Tense.html">Tense</a></tt><tt>=Pres</tt>|<tt><a href="fr_pud-feat-VerbForm.html">VerbForm</a></tt><tt>=Fin</tt></tt></td><td><em>ait</em></td><td></td></tr>
</table>

### `ADJ`

1603 <tt><a href="fr_pud-pos-ADJ.html">ADJ</a></tt> tokens (100% of all `ADJ` tokens) have a non-empty value of `Number`.

The most frequent other feature values with which `ADJ` and `Number` co-occurred: <tt><a href="fr_pud-feat-Gender.html">Gender</a></tt><tt>=Masc</tt> (812; 51%).

`ADJ` tokens may have the following values of `Number`:

* `Plur` (526; 33% of non-empty `Number`): <em>autres, plusieurs, nouveaux, certains, dernières, nombreuses, nouvelles, nombreux, quelques, telles</em>
* `Sing` (1077; 67% of non-empty `Number`): <em>première, chaque, grand, grande, nouvelle, britannique, autre, général, même, deuxième</em>

<table>
  <tr><th>Paradigm <i>nouveau</i></th><th><tt>Sing</tt></th><th><tt>Plur</tt></th></tr>
  <tr><td><tt><tt><a href="fr_pud-feat-Gender.html">Gender</a></tt><tt>=Masc</tt></tt></td><td><em>nouveau, nouvel</em></td><td><em>nouveaux</em></td></tr>
  <tr><td><tt><tt><a href="fr_pud-feat-Gender.html">Gender</a></tt><tt>=Fem</tt></tt></td><td><em>nouvelle</em></td><td><em>nouvelles</em></td></tr>
</table>

### `PROPN`

1220 <tt><a href="fr_pud-pos-PROPN.html">PROPN</a></tt> tokens (96% of all `PROPN` tokens) have a non-empty value of `Number`.

The most frequent other feature values with which `PROPN` and `Number` co-occurred: <tt><a href="fr_pud-feat-Gender.html">Gender</a></tt><tt>=Masc</tt> (612; 50%).

`PROPN` tokens may have the following values of `Number`:

* `Plur` (39; 3% of non-empty `Number`): <em>États-Unis, Caraïbes, Alpes, Andes, Pays-Bas, Antilles, Balkans, Boeing, Forums, News</em>
* `Sing` (1181; 97% of non-empty `Number`): <em>Chine, Hong, Kong, Paris, Trump, Pékin, J.-C., Amérique, Europe, Londres</em>
* `EMPTY` (51): <em>Endurance, Motors, American, Amnesty, Assistant, Avro, Bank, Bass, Beverly, Brands</em>

<table>
  <tr><th>Paradigm <i>Qing</i></th><th><tt>Sing</tt></th><th><tt>Plur</tt></th></tr>
  <tr><td><tt>_</tt></td><td><em>Qing</em></td><td></td></tr>
  <tr><td><tt><tt><a href="fr_pud-feat-Gender.html">Gender</a></tt><tt>=Masc</tt></tt></td><td></td><td><em>Qing</em></td></tr>
</table>

`Number` seems to be **lexical feature** of `PROPN`. 99% lemmas (833) occur only with one value of `Number`.

### `AUX`

974 <tt><a href="fr_pud-pos-AUX.html">AUX</a></tt> tokens (95% of all `AUX` tokens) have a non-empty value of `Number`.

The most frequent other feature values with which `AUX` and `Number` co-occurred: <tt><a href="fr_pud-feat-VerbForm.html">VerbForm</a></tt><tt>=Fin</tt> (875; 90%), <tt><a href="fr_pud-feat-Person.html">Person</a></tt><tt>=3</tt> (850; 87%), <tt><a href="fr_pud-feat-Mood.html">Mood</a></tt><tt>=Ind</tt> (841; 86%), <tt><a href="fr_pud-feat-Tense.html">Tense</a></tt><tt>=Pres</tt> (699; 72%).

`AUX` tokens may have the following values of `Number`:

* `Plur` (229; 24% of non-empty `Number`): <em>ont, sont, avaient, étaient, furent, aient, auraient, avons, sommes, soient</em>
* `Sing` (745; 76% of non-empty `Number`): <em>a, est, été, était, avait, fut, ai, soit, aurait, serait</em>
* `EMPTY` (54): <em>être, avoir, ayant, faire, étant</em>

<table>
  <tr><th>Paradigm <i>être</i></th><th><tt>Sing</tt></th><th><tt>Plur</tt></th></tr>
  <tr><td><tt><tt><a href="fr_pud-feat-Gender.html">Gender</a></tt><tt>=Masc</tt>|<tt><a href="fr_pud-feat-Tense.html">Tense</a></tt><tt>=Past</tt>|<tt><a href="fr_pud-feat-VerbForm.html">VerbForm</a></tt><tt>=Part</tt></tt></td><td><em>été</em></td><td></td></tr>
  <tr><td><tt><tt><a href="fr_pud-feat-Mood.html">Mood</a></tt><tt>=Cnd</tt>|<tt><a href="fr_pud-feat-Person.html">Person</a></tt><tt>=1</tt>|<tt><a href="fr_pud-feat-Tense.html">Tense</a></tt><tt>=Pres</tt>|<tt><a href="fr_pud-feat-VerbForm.html">VerbForm</a></tt><tt>=Fin</tt></tt></td><td><em>serais</em></td><td></td></tr>
  <tr><td><tt><tt><a href="fr_pud-feat-Mood.html">Mood</a></tt><tt>=Cnd</tt>|<tt><a href="fr_pud-feat-Person.html">Person</a></tt><tt>=3</tt>|<tt><a href="fr_pud-feat-Tense.html">Tense</a></tt><tt>=Pres</tt>|<tt><a href="fr_pud-feat-VerbForm.html">VerbForm</a></tt><tt>=Fin</tt></tt></td><td><em>serait</em></td><td></td></tr>
  <tr><td><tt><tt><a href="fr_pud-feat-Mood.html">Mood</a></tt><tt>=Ind</tt>|<tt><a href="fr_pud-feat-Person.html">Person</a></tt><tt>=1</tt>|<tt><a href="fr_pud-feat-Tense.html">Tense</a></tt><tt>=Imp</tt>|<tt><a href="fr_pud-feat-VerbForm.html">VerbForm</a></tt><tt>=Fin</tt></tt></td><td><em>étais</em></td><td><em>étions</em></td></tr>
  <tr><td><tt><tt><a href="fr_pud-feat-Mood.html">Mood</a></tt><tt>=Ind</tt>|<tt><a href="fr_pud-feat-Person.html">Person</a></tt><tt>=1</tt>|<tt><a href="fr_pud-feat-Tense.html">Tense</a></tt><tt>=Pres</tt>|<tt><a href="fr_pud-feat-VerbForm.html">VerbForm</a></tt><tt>=Fin</tt></tt></td><td><em>suis</em></td><td><em>sommes</em></td></tr>
  <tr><td><tt><tt><a href="fr_pud-feat-Mood.html">Mood</a></tt><tt>=Ind</tt>|<tt><a href="fr_pud-feat-Person.html">Person</a></tt><tt>=3</tt>|<tt><a href="fr_pud-feat-Tense.html">Tense</a></tt><tt>=Fut</tt>|<tt><a href="fr_pud-feat-VerbForm.html">VerbForm</a></tt><tt>=Fin</tt></tt></td><td><em>sera</em></td><td><em>seront</em></td></tr>
  <tr><td><tt><tt><a href="fr_pud-feat-Mood.html">Mood</a></tt><tt>=Ind</tt>|<tt><a href="fr_pud-feat-Person.html">Person</a></tt><tt>=3</tt>|<tt><a href="fr_pud-feat-Tense.html">Tense</a></tt><tt>=Imp</tt>|<tt><a href="fr_pud-feat-VerbForm.html">VerbForm</a></tt><tt>=Fin</tt></tt></td><td><em>était</em></td><td><em>étaient</em></td></tr>
  <tr><td><tt><tt><a href="fr_pud-feat-Mood.html">Mood</a></tt><tt>=Ind</tt>|<tt><a href="fr_pud-feat-Person.html">Person</a></tt><tt>=3</tt>|<tt><a href="fr_pud-feat-Tense.html">Tense</a></tt><tt>=Past</tt>|<tt><a href="fr_pud-feat-VerbForm.html">VerbForm</a></tt><tt>=Fin</tt></tt></td><td><em>fut</em></td><td><em>furent</em></td></tr>
  <tr><td><tt><tt><a href="fr_pud-feat-Mood.html">Mood</a></tt><tt>=Ind</tt>|<tt><a href="fr_pud-feat-Person.html">Person</a></tt><tt>=3</tt>|<tt><a href="fr_pud-feat-Tense.html">Tense</a></tt><tt>=Pres</tt>|<tt><a href="fr_pud-feat-VerbForm.html">VerbForm</a></tt><tt>=Fin</tt></tt></td><td><em>est</em></td><td><em>sont</em></td></tr>
  <tr><td><tt><tt><a href="fr_pud-feat-Mood.html">Mood</a></tt><tt>=Sub</tt>|<tt><a href="fr_pud-feat-Person.html">Person</a></tt><tt>=3</tt>|<tt><a href="fr_pud-feat-Tense.html">Tense</a></tt><tt>=Pres</tt>|<tt><a href="fr_pud-feat-VerbForm.html">VerbForm</a></tt><tt>=Fin</tt></tt></td><td><em>soit</em></td><td><em>soient, fussent</em></td></tr>
</table>

### `PRON`

870 <tt><a href="fr_pud-pos-PRON.html">PRON</a></tt> tokens (82% of all `PRON` tokens) have a non-empty value of `Number`.

The most frequent other feature values with which `PRON` and `Number` co-occurred: <tt><a href="fr_pud-feat-Person.html">Person</a></tt><tt>=3</tt> (570; 66%), <tt><a href="fr_pud-feat-Gender.html">Gender</a></tt><tt>=Masc</tt> (521; 60%).

`PRON` tokens may have the following values of `Number`:

* `Plur` (240; 28% of non-empty `Number`): <em>qui, ils, nous, se, vous, eux, elles, s', ceux, lesquelles</em>
* `Sing` (630; 72% of non-empty `Number`): <em>il, qui, elle, se, on, je, s', lui, s’, le</em>
* `EMPTY` (193): <em>y, ce, qui, c', cela, c’, ça, en, ceci, qu'</em>

<table>
  <tr><th>Paradigm <i>il</i></th><th><tt>Sing</tt></th><th><tt>Plur</tt></th></tr>
  <tr><td><tt><tt><a href="fr_pud-feat-Gender.html">Gender</a></tt><tt>=Masc</tt>|<tt><a href="fr_pud-feat-Person.html">Person</a></tt><tt>=1</tt></tt></td><td><em>je, j'</em></td><td><em>nous</em></td></tr>
  <tr><td><tt><tt><a href="fr_pud-feat-Gender.html">Gender</a></tt><tt>=Masc</tt>|<tt><a href="fr_pud-feat-Person.html">Person</a></tt><tt>=3</tt></tt></td><td><em>il, -il</em></td><td><em>ils, -ils</em></td></tr>
  <tr><td><tt><tt><a href="fr_pud-feat-Gender.html">Gender</a></tt><tt>=Fem</tt>|<tt><a href="fr_pud-feat-Person.html">Person</a></tt><tt>=3</tt></tt></td><td><em>elle, -elle</em></td><td><em>elles</em></td></tr>
  <tr><td><tt><tt><a href="fr_pud-feat-Person.html">Person</a></tt><tt>=1</tt></tt></td><td><em>je, j', j’</em></td><td><em>nous</em></td></tr>
  <tr><td><tt><tt><a href="fr_pud-feat-Person.html">Person</a></tt><tt>=2</tt></tt></td><td></td><td><em>vous</em></td></tr>
</table>

### `ADP`

26 <tt><a href="fr_pud-pos-ADP.html">ADP</a></tt> tokens (1% of all `ADP` tokens) have a non-empty value of `Number`.

`ADP` tokens may have the following values of `Number`:

* `Plur` (11; 42% of non-empty `Number`): <em>dont</em>
* `Sing` (15; 58% of non-empty `Number`): <em>dont, au-delà</em>
* `EMPTY` (3877): <em>de, à, en, dans, d', pour, par, d’, sur, avec</em>

<table>
  <tr><th>Paradigm <i>dont</i></th><th><tt>Sing</tt></th><th><tt>Plur</tt></th></tr>
  <tr><td><tt><tt><a href="fr_pud-feat-Gender.html">Gender</a></tt><tt>=Masc</tt></tt></td><td><em>dont</em></td><td><em>dont</em></td></tr>
  <tr><td><tt><tt><a href="fr_pud-feat-Gender.html">Gender</a></tt><tt>=Fem</tt></tt></td><td><em>dont</em></td><td><em>dont</em></td></tr>
</table>

### `X`

10 <tt><a href="fr_pud-pos-X.html">X</a></tt> tokens (6% of all `X` tokens) have a non-empty value of `Number`.

The most frequent other feature values with which `X` and `Number` co-occurred: <tt><a href="fr_pud-feat-Foreign.html">Foreign</a></tt><tt>=EMPTY</tt> (10; 100%).

`X` tokens may have the following values of `Number`:

* `Plur` (1; 10% of non-empty `Number`): <em>Winds</em>
* `Sing` (9; 90% of non-empty `Number`): <em>A, Buena, Dream, Prayer, Spring, The, Winter, Yerba, Garden</em>
* `EMPTY` (170): <em>of, the, a, Association, City, El, Ground, My, Punta, Really</em>

`Number` seems to be **lexical feature** of `X`. 100% lemmas (10) occur only with one value of `Number`.

### `NUM`

4 <tt><a href="fr_pud-pos-NUM.html">NUM</a></tt> tokens (1% of all `NUM` tokens) have a non-empty value of `Number`.

`NUM` tokens may have the following values of `Number`:

* `Sing` (4; 100% of non-empty `Number`): <em>1er, premier</em>
* `EMPTY` (447): <em>deux, trois, quatre, 1, 3, 10, II, III, dix, milliards</em>

### `SCONJ`

1 <tt><a href="fr_pud-pos-SCONJ.html">SCONJ</a></tt> tokens (0% of all `SCONJ` tokens) have a non-empty value of `Number`.

`SCONJ` tokens may have the following values of `Number`:

* `Plur` (1; 100% of non-empty `Number`): <em>que</em>
* `EMPTY` (210): <em>que, qu', quand, lorsque, qu’, lorsqu’, lorsqu', puisqu'</em>

## Relations with Agreement in `Number`

The 10 most frequent relations where parent and child node agree in `Number`:
<tt>NOUN --[<tt><a href="fr_pud-dep-det.html">det</a></tt>]--> DET</tt> (3498; 100%),
<tt>NOUN --[<tt><a href="fr_pud-dep-amod.html">amod</a></tt>]--> ADJ</tt> (1354; 100%),
<tt>NOUN --[<tt><a href="fr_pud-dep-nmod.html">nmod</a></tt>]--> NOUN</tt> (770; 59%),
<tt>VERB --[<tt><a href="fr_pud-dep-obl.html">obl</a></tt>]--> NOUN</tt> (560; 57%),
<tt>VERB --[<tt><a href="fr_pud-dep-nsubj.html">nsubj</a></tt>]--> NOUN</tt> (482; 87%),
<tt>VERB --[<tt><a href="fr_pud-dep-aux-tense.html">aux:tense</a></tt>]--> AUX</tt> (440; 79%),
<tt>VERB --[<tt><a href="fr_pud-dep-nsubj.html">nsubj</a></tt>]--> PRON</tt> (396; 85%),
<tt>PROPN --[<tt><a href="fr_pud-dep-det.html">det</a></tt>]--> DET</tt> (250; 98%),
<tt>NOUN --[<tt><a href="fr_pud-dep-nmod.html">nmod</a></tt>]--> PROPN</tt> (233; 72%),
<tt>PROPN --[<tt><a href="fr_pud-dep-flat-name.html">flat:name</a></tt>]--> PROPN</tt> (211; 98%).

