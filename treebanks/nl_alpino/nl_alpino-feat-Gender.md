---
layout: base
title:  'Statistics of Gender in UD_Dutch-Alpino'
udver: '2'
---

## Treebank Statistics: UD_Dutch-Alpino: Features: `Gender`

This feature is universal.
It occurs with 2 different values: `Com`, `Neut`.
Some words have combined values of the feature; 1 combinations have been observed: `Com|Neut`.

27358 tokens (16%) have a non-empty value of `Gender`.
9671 types (41%) occur at least once with a non-empty value of `Gender`.
9320 lemmas (48%) occur at least once with a non-empty value of `Gender`.
The feature is used with 2 part-of-speech tags: <tt><a href="nl_alpino-pos-NOUN.html">NOUN</a></tt> (22102; 13% instances), <tt><a href="nl_alpino-pos-PROPN.html">PROPN</a></tt> (5256; 3% instances).

### `NOUN`

22102 <tt><a href="nl_alpino-pos-NOUN.html">NOUN</a></tt> tokens (76% of all `NOUN` tokens) have a non-empty value of `Gender`.

The most frequent other feature values with which `NOUN` and `Gender` co-occurred: <tt><a href="nl_alpino-feat-Number.html">Number</a></tt><tt>=Sing</tt> (22102; 100%).

`NOUN` tokens may have the following values of `Gender`:

* `Com` (14886; 67% of non-empty `Gender`): <em>heer, flo, tijd, minister, plaats, politie, week, dag, man, regering</em>
* `Com,Neut` (103; 0% of non-empty `Gender`): <em>keer, soort, boord, opzet, subsidie, opium, punt, accordeon, affiche, congé</em>
* `Neut` (7113; 32% of non-empty `Gender`): <em>jaar, uur, aantal, procent, land, deel, miljoen, werk, leven, huis</em>
* `EMPTY` (7074): <em>mensen, kinderen, jaren, dagen, maanden, minuten, problemen, zaken, landen, ouders</em>

<table>
  <tr><th>Paradigm <i>dag</i></th><th><tt>Neut</tt></th><th><tt>Com</tt></th></tr>
  <tr><td><tt></tt></td><td><em>dagje</em></td><td><em>dag</em></td></tr>
</table>

`Gender` seems to be **lexical feature** of `NOUN`. 99% lemmas (6898) occur only with one value of `Gender`.

### `PROPN`

5256 <tt><a href="nl_alpino-pos-PROPN.html">PROPN</a></tt> tokens (45% of all `PROPN` tokens) have a non-empty value of `Gender`.

The most frequent other feature values with which `PROPN` and `Gender` co-occurred: <tt><a href="nl_alpino-feat-Number.html">Number</a></tt><tt>=Sing</tt> (5256; 100%).

`PROPN` tokens may have the following values of `Gender`:

* `Com` (2251; 43% of non-empty `Gender`): <em>zaterdag, JGZ, zondag, september, januari, juli, mei, vrijdag, woensdag, oktober</em>
* `Com,Neut` (650; 12% of non-empty `Gender`): <em>Financien, Beernink, Springer, DFC, Interpay, Laurus, Mendes-France, Noerejew, Poema, Zwaantje</em>
* `Neut` (2355; 45% of non-empty `Gender`): <em>Nederland, Amsterdam, Rotterdam, Groningen, Engeland, Europa, Utrecht, Frankrijk, Feijenoord, Haarlem</em>
* `EMPTY` (6417): <em>van, de, J., den, der, mr., dr., H., a., Jan</em>

<table>
  <tr><th>Paradigm <i>Frans</i></th><th><tt>Neut</tt></th><th><tt>Com</tt></th></tr>
  <tr><td><tt></tt></td><td><em>Frans</em></td><td><em>Frans</em></td></tr>
</table>

`Gender` seems to be **lexical feature** of `PROPN`. 99% lemmas (2319) occur only with one value of `Gender`.

## Relations with Agreement in `Gender`

The 10 most frequent relations where parent and child node agree in `Gender`:
<tt>PROPN --[<tt><a href="nl_alpino-dep-conj.html">conj</a></tt>]--> PROPN</tt> (277; 63%),
<tt>NOUN --[<tt><a href="nl_alpino-dep-appos.html">appos</a></tt>]--> NOUN</tt> (140; 60%),
<tt>NOUN --[<tt><a href="nl_alpino-dep-parataxis.html">parataxis</a></tt>]--> NOUN</tt> (33; 53%),
<tt>NOUN --[<tt><a href="nl_alpino-dep-acl-relcl.html">acl:relcl</a></tt>]--> NOUN</tt> (12; 55%),
<tt>NOUN --[<tt><a href="nl_alpino-dep-case.html">case</a></tt>]--> NOUN</tt> (6; 75%),
<tt>PROPN --[<tt><a href="nl_alpino-dep-obl.html">obl</a></tt>]--> PROPN</tt> (1; 100%).

