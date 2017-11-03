---
layout: base
title:  'Statistics of Aspect in UD_Dutch'
udver: '2'
---

## Treebank Statistics: UD_Dutch: Features: `Aspect`

This feature is universal.
It occurs with 1 different values: `Imp`.

19008 tokens (9%) have a non-empty value of `Aspect`.
2128 types (8%) occur at least once with a non-empty value of `Aspect`.
1318 lemmas (6%) occur at least once with a non-empty value of `Aspect`.
The feature is used with 3 part-of-speech tags: <tt><a href="nl-pos-VERB.html">VERB</a></tt> (9941; 5% instances), <tt><a href="nl-pos-AUX.html">AUX</a></tt> (8993; 4% instances), <tt><a href="nl-pos-X.html">X</a></tt> (74; 0% instances).

### `VERB`

9941 <tt><a href="nl-pos-VERB.html">VERB</a></tt> tokens (48% of all `VERB` tokens) have a non-empty value of `Aspect`.

The most frequent other feature values with which `VERB` and `Aspect` co-occurred: <tt><a href="nl-feat-VerbForm.html">VerbForm</a></tt><tt>=Fin</tt> (9941; 100%), <tt><a href="nl-feat-Mood.html">Mood</a></tt><tt>=Ind</tt> (9941; 100%), <tt><a href="nl-feat-Number.html">Number</a></tt><tt>=Sing</tt> (7960; 80%), <tt><a href="nl-feat-VerbType.html">VerbType</a></tt><tt>=EMPTY</tt> (7891; 79%), <tt><a href="nl-feat-Tense.html">Tense</a></tt><tt>=Pres</tt> (6082; 61%), <tt><a href="nl-feat-Person.html">Person</a></tt><tt>=EMPTY</tt> (5120; 52%).

`VERB` tokens may have the following values of `Aspect`:

* `Imp` (9941; 100% of non-empty `Aspect`): <em>heeft, kan, moet, komt, gaat, zei, hebben, heet, had, kwam</em>
* `EMPTY` (10889): <em>kunnen, gaan, komen, moeten, maken, zien, doen, gehouden, laten, gemaakt</em>

`Aspect` seems to be **lexical feature** of `VERB`. 100% lemmas (1236) occur only with one value of `Aspect`.

### `AUX`

8993 <tt><a href="nl-pos-AUX.html">AUX</a></tt> tokens (84% of all `AUX` tokens) have a non-empty value of `Aspect`.

The most frequent other feature values with which `AUX` and `Aspect` co-occurred: <tt><a href="nl-feat-VerbForm.html">VerbForm</a></tt><tt>=Fin</tt> (8993; 100%), <tt><a href="nl-feat-Mood.html">Mood</a></tt><tt>=Ind</tt> (8993; 100%), <tt><a href="nl-feat-Subcat.html">Subcat</a></tt><tt>=EMPTY</tt> (8358; 93%), <tt><a href="nl-feat-VerbType.html">VerbType</a></tt><tt>=EMPTY</tt> (7852; 87%), <tt><a href="nl-feat-Number.html">Number</a></tt><tt>=Sing</tt> (7126; 79%), <tt><a href="nl-feat-Tense.html">Tense</a></tt><tt>=Pres</tt> (6345; 71%).

`AUX` tokens may have the following values of `Aspect`:

* `Imp` (8993; 100% of non-empty `Aspect`): <em>is, was, heeft, werd, zijn, wordt, zal, zou, hebben, had</em>
* `EMPTY` (1719): <em>worden, zijn, hebben, geweest, geworden, willen, blijven, genoemd, gaan, maken</em>

`Aspect` seems to be **lexical feature** of `AUX`. 100% lemmas (143) occur only with one value of `Aspect`.

### `X`

74 <tt><a href="nl-pos-X.html">X</a></tt> tokens (2% of all `X` tokens) have a non-empty value of `Aspect`.

The most frequent other feature values with which `X` and `Aspect` co-occurred: <tt><a href="nl-feat-Gender.html">Gender</a></tt><tt>=EMPTY</tt> (74; 100%), <tt><a href="nl-feat-Definite.html">Definite</a></tt><tt>=EMPTY</tt> (66; 89%), <tt><a href="nl-feat-Degree.html">Degree</a></tt><tt>=EMPTY</tt> (58; 78%), <tt><a href="nl-feat-Number.html">Number</a></tt><tt>=Sing</tt> (56; 76%).

`X` tokens may have the following values of `Aspect`:

* `Imp` (74; 100% of non-empty `Aspect`): <em>dat, wil, zeggen, je, is, wat, ik, op, van, volgt</em>
* `EMPTY` (4561): <em>van, het, op, flo, voor, met, ten, aan, een, onder</em>

`Aspect` seems to be **lexical feature** of `X`. 100% lemmas (51) occur only with one value of `Aspect`.

## Relations with Agreement in `Aspect`

The 10 most frequent relations where parent and child node agree in `Aspect`:
<tt>VERB --[<tt><a href="nl-dep-conj.html">conj</a></tt>]--> VERB</tt> (419; 66%),
<tt>VERB --[<tt><a href="nl-dep-parataxis.html">parataxis</a></tt>]--> VERB</tt> (209; 64%),
<tt>X --[<tt><a href="nl-dep-compound.html">compound</a></tt>]--> X</tt> (41; 100%),
<tt>VERB --[<tt><a href="nl-dep-ccomp.html">ccomp</a></tt>]--> AUX</tt> (25; 54%),
<tt>VERB --[<tt><a href="nl-dep-conj.html">conj</a></tt>]--> AUX</tt> (24; 63%),
<tt>AUX --[<tt><a href="nl-dep-conj.html">conj</a></tt>]--> VERB</tt> (22; 73%),
<tt>VERB --[<tt><a href="nl-dep-parataxis.html">parataxis</a></tt>]--> AUX</tt> (13; 72%),
<tt>AUX --[<tt><a href="nl-dep-parataxis.html">parataxis</a></tt>]--> VERB</tt> (9; 64%),
<tt>VERB --[<tt><a href="nl-dep-csubj.html">csubj</a></tt>]--> AUX</tt> (8; 100%),
<tt>VERB --[<tt><a href="nl-dep-cc.html">cc</a></tt>]--> VERB</tt> (5; 83%).

