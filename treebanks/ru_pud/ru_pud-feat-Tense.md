---
layout: base
title:  'Statistics of Tense in UD_Russian-PUD'
udver: '2'
---

## Treebank Statistics: UD_Russian-PUD: Features: `Tense`

This feature is universal.
It occurs with 3 different values: `Fut`, `Past`, `Pres`.

1963 tokens (10%) have a non-empty value of `Tense`.
1238 types (16%) occur at least once with a non-empty value of `Tense`.
1 lemmas (0) occur at least once with a non-empty value of `Tense`.
The feature is used with 2 part-of-speech tags: <tt><a href="ru_pud-pos-VERB.html">VERB</a></tt> (1880; 10% instances), <tt><a href="ru_pud-pos-AUX.html">AUX</a></tt> (83; 0% instances).

### `VERB`

1880 <tt><a href="ru_pud-pos-VERB.html">VERB</a></tt> tokens (80% of all `VERB` tokens) have a non-empty value of `Tense`.

The most frequent other feature values with which `VERB` and `Tense` co-occurred: <tt><a href="ru_pud-feat-VerbForm.html">VerbForm</a></tt><tt>=EMPTY</tt> (1691; 90%), <tt><a href="ru_pud-feat-Case.html">Case</a></tt><tt>=EMPTY</tt> (1529; 81%), <tt><a href="ru_pud-feat-Animacy.html">Animacy</a></tt><tt>=EMPTY</tt> (1520; 81%), <tt><a href="ru_pud-feat-Mood.html">Mood</a></tt><tt>=Ind</tt> (1520; 81%), <tt><a href="ru_pud-feat-Variant.html">Variant</a></tt><tt>=EMPTY</tt> (1520; 81%), <tt><a href="ru_pud-feat-Voice.html">Voice</a></tt><tt>=EMPTY</tt> (1520; 81%), <tt><a href="ru_pud-feat-Number.html">Number</a></tt><tt>=Sing</tt> (1299; 69%), <tt><a href="ru_pud-feat-Person.html">Person</a></tt><tt>=EMPTY</tt> (1288; 69%), <tt><a href="ru_pud-feat-Aspect.html">Aspect</a></tt><tt>=Imp</tt> (1046; 56%), <tt><a href="ru_pud-feat-Gender.html">Gender</a></tt><tt>=EMPTY</tt> (967; 51%).

`VERB` tokens may have the following values of `Tense`:

* `Fut` (88; 5% of non-empty `Tense`): <em>будет, будут, придется, станет, буду, повлияет, получит, Knuck, Введут, Разрешу</em>
* `Past` (1199; 64% of non-empty `Tense`): <em>был, было, были, была, сказал, заявил, стал, сказала, стало, получили</em>
* `Pres` (593; 32% of non-empty `Tense`): <em>может, является, говорит, есть, могут, находится, имеет, работает, составляет, делает</em>
* `EMPTY` (457): <em>можно, сделать, быть, получить, привести, вернуться, нет, включая, найти, стать</em>

### `AUX`

83 <tt><a href="ru_pud-pos-AUX.html">AUX</a></tt> tokens (87% of all `AUX` tokens) have a non-empty value of `Tense`.

The most frequent other feature values with which `AUX` and `Tense` co-occurred: <tt><a href="ru_pud-feat-Mood.html">Mood</a></tt><tt>=Ind</tt> (82; 99%), <tt><a href="ru_pud-feat-Aspect.html">Aspect</a></tt><tt>=Imp</tt> (73; 88%), <tt><a href="ru_pud-feat-Number.html">Number</a></tt><tt>=Sing</tt> (67; 81%), <tt><a href="ru_pud-feat-Person.html">Person</a></tt><tt>=EMPTY</tt> (67; 81%).

`AUX` tokens may have the following values of `Tense`:

* `Fut` (1; 1% of non-empty `Tense`): <em>будет</em>
* `Past` (67; 81% of non-empty `Tense`): <em>был, была, были, было, стало, стали, начала, ставшего, стал</em>
* `Pres` (15; 18% of non-empty `Tense`): <em>является, бывают, есть, появляется, являются</em>
* `EMPTY` (12): <em>быть, будучи</em>

## Relations with Agreement in `Tense`

The 10 most frequent relations where parent and child node agree in `Tense`:
<tt>VERB --[<tt><a href="ru_pud-dep-conj.html">conj</a></tt>]--> VERB</tt> (157; 82%),
<tt>VERB --[<tt><a href="ru_pud-dep-aux-pass.html">aux:pass</a></tt>]--> VERB</tt> (113; 90%),
<tt>VERB --[<tt><a href="ru_pud-dep-parataxis.html">parataxis</a></tt>]--> VERB</tt> (51; 58%),
<tt>VERB --[<tt><a href="ru_pud-dep-advcl.html">advcl</a></tt>]--> AUX</tt> (1; 100%),
<tt>VERB --[<tt><a href="ru_pud-dep-appos.html">appos</a></tt>]--> VERB</tt> (1; 100%),
<tt>VERB --[<tt><a href="ru_pud-dep-aux-pass.html">aux:pass</a></tt>]--> AUX</tt> (1; 100%),
<tt>VERB --[<tt><a href="ru_pud-dep-flat.html">flat</a></tt>]--> VERB</tt> (1; 100%).

