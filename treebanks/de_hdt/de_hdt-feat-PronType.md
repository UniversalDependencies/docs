---
layout: base
title:  'Statistics of PronType in UD_German-HDT'
udver: '2'
---

## Treebank Statistics: UD_German-HDT: Features: `PronType`

This feature is universal.
It occurs with 8 different values: `Art`, `Dem`, `Ind`, `Int`, `Neg`, `Prs`, `Rel`, `Tot`.
Some words have combined values of the feature; 1 combinations have been observed: `Ind|Neg|Tot`.

582482 tokens (17%) have a non-empty value of `PronType`.
487 types (0%) occur at least once with a non-empty value of `PronType`.
352 lemmas (1%) occur at least once with a non-empty value of `PronType`.
The feature is used with 4 part-of-speech tags: <tt><a href="de_hdt-pos-DET.html">DET</a></tt> (395913; 12% instances), <tt><a href="de_hdt-pos-PRON.html">PRON</a></tt> (125441; 4% instances), <tt><a href="de_hdt-pos-ADP.html">ADP</a></tt> (56189; 2% instances), <tt><a href="de_hdt-pos-ADV.html">ADV</a></tt> (4939; 0% instances).

### `DET`

395913 <tt><a href="de_hdt-pos-DET.html">DET</a></tt> tokens (98% of all `DET` tokens) have a non-empty value of `PronType`.

The most frequent other feature values with which `DET` and `PronType` co-occurred: <tt><a href="de_hdt-feat-Number.html">Number</a></tt><tt>=Sing</tt> (313026; 79%).

`DET` tokens may have the following values of `PronType`:

* `Art` (371043; 94% of non-empty `PronType`): <em>die, der, den, das, des, eine, dem, ein, einen, einem</em>
* `Dem` (12147; 3% of non-empty `PronType`): <em>diese, dieser, diesem, dieses, diesen, deren, dessen, derselben, denselben, dieselbe</em>
* `Ind,Neg,Tot` (11302; 3% of non-empty `PronType`): <em>keine, kein, einige, mehr, keinen, mehrere, einigen, jedem, weniger, einiger</em>
* `Int` (713; 0% of non-empty `PronType`): <em>welche, welchen, welcher, welchem, wieviel, welches, welch, wieviele, wessen, wievielen</em>
* `Rel` (708; 0% of non-empty `PronType`): <em>deren, dessen</em>
* `EMPTY` (7871): <em>alle, aller, allen, beide, jeder, solche, jede, jeden, jedes, beiden</em>

<table>
  <tr><th>Paradigm <i>deren</i></th><th><tt>Rel</tt></th><th><tt>Dem</tt></th></tr>
  <tr><td><tt></tt></td><td><em>deren</em></td><td><em>deren, dessen</em></td></tr>
</table>

`PronType` seems to be **lexical feature** of `DET`. 98% lemmas (113) occur only with one value of `PronType`.

### `PRON`

125441 <tt><a href="de_hdt-pos-PRON.html">PRON</a></tt> tokens (100% of all `PRON` tokens) have a non-empty value of `PronType`.

The most frequent other feature values with which `PRON` and `PronType` co-occurred: <tt><a href="de_hdt-feat-Person.html">Person</a></tt><tt>=3</tt> (118586; 95%), <tt><a href="de_hdt-feat-Poss.html">Poss</a></tt><tt>=EMPTY</tt> (107071; 85%), <tt><a href="de_hdt-feat-Reflex.html">Reflex</a></tt><tt>=EMPTY</tt> (104290; 83%), <tt><a href="de_hdt-feat-Number.html">Number</a></tt><tt>=Sing</tt> (77359; 62%), <tt><a href="de_hdt-feat-Case.html">Case</a></tt><tt>=Nom</tt> (64915; 52%).

`PRON` tokens may have the following values of `PronType`:

* `Dem` (8455; 7% of non-empty `PronType`): <em>das, dies, diese, die, dieser, dem, der, denen, diesen, dieses</em>
* `Ind,Neg,Tot` (18107; 14% of non-empty `PronType`): <em>man, allem, anderem, mehr, nichts, einer, alles, etwas, eines, eine</em>
* `Int` (2468; 2% of non-empty `PronType`): <em>wer, was, wem, wen, wieviel, welche, welcher, welchen, welches, wieviele</em>
* `Prs` (72578; 58% of non-empty `PronType`): <em>sich, es, sie, er, wir, ihre, seine, seiner, seinen, ihrer</em>
* `Rel` (23833; 19% of non-empty `PronType`): <em>die, der, das, dem, was, denen, den, welches, welche, derer</em>

<table>
  <tr><th>Paradigm <i>was</i></th><th><tt>Ind,Neg,Tot</tt></th><th><tt>Int</tt></th><th><tt>Rel</tt></th></tr>
  <tr><td><tt><tt><a href="de_hdt-feat-Case.html">Case</a></tt><tt>=Acc</tt>|<tt><a href="de_hdt-feat-Gender.html">Gender</a></tt><tt>=Neut</tt></tt></td><td><em>was</em></td><td><em>was</em></td><td><em>was, watt</em></td></tr>
  <tr><td><tt><tt><a href="de_hdt-feat-Case.html">Case</a></tt><tt>=Dat</tt>|<tt><a href="de_hdt-feat-Gender.html">Gender</a></tt><tt>=Neut</tt></tt></td><td><em>was</em></td><td></td><td></td></tr>
  <tr><td><tt><tt><a href="de_hdt-feat-Case.html">Case</a></tt><tt>=Nom</tt>|<tt><a href="de_hdt-feat-Gender.html">Gender</a></tt><tt>=Neut</tt></tt></td><td><em>was</em></td><td><em>was</em></td><td><em>was</em></td></tr>
  <tr><td><tt><tt><a href="de_hdt-feat-Case.html">Case</a></tt><tt>=Nom</tt></tt></td><td><em>irgendwer</em></td><td></td><td></td></tr>
  <tr><td><tt><tt><a href="de_hdt-feat-Gender.html">Gender</a></tt><tt>=Neut</tt></tt></td><td><em>was</em></td><td></td><td></td></tr>
  <tr><td><tt></tt></td><td><em>irgendwas, E-irgendwas</em></td><td></td><td></td></tr>
</table>

`PronType` seems to be **lexical feature** of `PRON`. 94% lemmas (211) occur only with one value of `PronType`.

### `ADP`

56189 <tt><a href="de_hdt-pos-ADP.html">ADP</a></tt> tokens (15% of all `ADP` tokens) have a non-empty value of `PronType`.

The most frequent other feature values with which `ADP` and `PronType` co-occurred: <tt><a href="de_hdt-feat-AdpType.html">AdpType</a></tt><tt>=Prep</tt> (56189; 100%), <tt><a href="de_hdt-feat-Case.html">Case</a></tt><tt>=Dat</tt> (54005; 96%).

`ADP` tokens may have the following values of `PronType`:

* `Art` (56189; 100% of non-empty `PronType`): <em>im, am, zum, zur, vom, beim, ins, fürs, ans, übers</em>
* `EMPTY` (329535): <em>in, von, mit, für, auf, bei, an, nach, zu, über</em>

`PronType` seems to be **lexical feature** of `ADP`. 100% lemmas (34) occur only with one value of `PronType`.

### `ADV`

4939 <tt><a href="de_hdt-pos-ADV.html">ADV</a></tt> tokens (3% of all `ADV` tokens) have a non-empty value of `PronType`.

`ADV` tokens may have the following values of `PronType`:

* `Int` (4939; 100% of non-empty `PronType`): <em>wie, wo, wann, warum, wobei, wonach, wodurch, womit, inwieweit, weshalb</em>
* `EMPTY` (189409): <em>auch, noch, nur, so, aber, bereits, allerdings, mehr, damit, schon</em>

`PronType` seems to be **lexical feature** of `ADV`. 100% lemmas (51) occur only with one value of `PronType`.

## Relations with Agreement in `PronType`

The 10 most frequent relations where parent and child node agree in `PronType`:
<tt>PRON --[<tt><a href="de_hdt-dep-conj.html">conj</a></tt>]--> PRON</tt> (89; 92%),
<tt>DET --[<tt><a href="de_hdt-dep-conj.html">conj</a></tt>]--> DET</tt> (22; 56%),
<tt>ADV --[<tt><a href="de_hdt-dep-conj.html">conj</a></tt>]--> ADV</tt> (16; 84%),
<tt>DET --[<tt><a href="de_hdt-dep-reparandum.html">reparandum</a></tt>]--> DET</tt> (12; 100%),
<tt>PRON --[<tt><a href="de_hdt-dep-amod.html">amod</a></tt>]--> DET</tt> (8; 100%),
<tt>PRON --[<tt><a href="de_hdt-dep-reparandum.html">reparandum</a></tt>]--> PRON</tt> (5; 100%),
<tt>ADP --[<tt><a href="de_hdt-dep-reparandum.html">reparandum</a></tt>]--> ADP</tt> (3; 100%),
<tt>DET --[<tt><a href="de_hdt-dep-obl.html">obl</a></tt>]--> PRON</tt> (2; 100%),
<tt>ADV --[<tt><a href="de_hdt-dep-conj.html">conj</a></tt>]--> DET</tt> (1; 100%).

