---
layout: base
title:  'Statistics of Voice in UD_Spanish-PUD'
udver: '2'
---

## Treebank Statistics: UD_Spanish-PUD: Features: `Voice`

This feature is universal.
It occurs with 2 different values: `Act`, `Pass`.

2296 tokens (10%) have a non-empty value of `Voice`.
1174 types (20%) occur at least once with a non-empty value of `Voice`.
12 lemmas (67%) occur at least once with a non-empty value of `Voice`.
The feature is used with 2 part-of-speech tags: <tt><a href="es_pud-pos-VERB.html">VERB</a></tt> (1595; 7% instances), <tt><a href="es_pud-pos-AUX.html">AUX</a></tt> (701; 3% instances).

### `VERB`

1595 <tt><a href="es_pud-pos-VERB.html">VERB</a></tt> tokens (74% of all `VERB` tokens) have a non-empty value of `Voice`.

The most frequent other feature values with which `VERB` and `Voice` co-occurred: <tt><a href="es_pud-feat-Gender.html">Gender</a></tt><tt>=EMPTY</tt> (1595; 100%), <tt><a href="es_pud-feat-VerbForm.html">VerbForm</a></tt><tt>=Fin</tt> (1595; 100%), <tt><a href="es_pud-feat-Person.html">Person</a></tt><tt>=3</tt> (1187; 74%), <tt><a href="es_pud-feat-Mood.html">Mood</a></tt><tt>=Ind</tt> (1149; 72%), <tt><a href="es_pud-feat-Aspect.html">Aspect</a></tt><tt>=Imp</tt> (1090; 68%), <tt><a href="es_pud-feat-Number.html">Number</a></tt><tt>=Sing</tt> (907; 57%).

`VERB` tokens may have the following values of `Voice`:

* `Act` (1510; 95% of non-empty `Voice`): <em>dijo, es, tiene, hay, está, hace, tienen, afirmó, convirtió, dice</em>
* `Pass` (85; 5% of non-empty `Voice`): <em>conoce, aplicaría, conocen, construyó, cree, dijo, espera, incluyen, lanzó, llevó</em>
* `EMPTY` (548): <em>debido, hacer, hecho, tener, dado, escrito, tenido, dejado, dirigida, visto</em>

`Voice` seems to be **lexical feature** of `VERB`. 92% lemmas (11) occur only with one value of `Voice`.

### `AUX`

701 <tt><a href="es_pud-pos-AUX.html">AUX</a></tt> tokens (93% of all `AUX` tokens) have a non-empty value of `Voice`.

The most frequent other feature values with which `AUX` and `Voice` co-occurred: <tt><a href="es_pud-feat-VerbForm.html">VerbForm</a></tt><tt>=Fin</tt> (701; 100%), <tt><a href="es_pud-feat-Person.html">Person</a></tt><tt>=3</tt> (631; 90%), <tt><a href="es_pud-feat-Mood.html">Mood</a></tt><tt>=Ind</tt> (595; 85%), <tt><a href="es_pud-feat-Number.html">Number</a></tt><tt>=Sing</tt> (487; 69%), <tt><a href="es_pud-feat-Aspect.html">Aspect</a></tt><tt>=Imp</tt> (426; 61%), <tt><a href="es_pud-feat-Tense.html">Tense</a></tt><tt>=Past</tt> (354; 50%).

`AUX` tokens may have the following values of `Voice`:

* `Act` (568; 81% of non-empty `Voice`): <em>es, ha, había, está, era, fue, son, han, puede, estaba</em>
* `Pass` (133; 19% of non-empty `Voice`): <em>fue, fueron, ha, había, ser, puede, son, habían, pueden, era</em>
* `EMPTY` (55): <em>sido, ser, siendo, estado, llamados, hecho, llamada, comenzado, consideradas, declarada</em>

## Relations with Agreement in `Voice`

The 10 most frequent relations where parent and child node agree in `Voice`:
<tt>VERB --[<tt><a href="es_pud-dep-xcomp.html">xcomp</a></tt>]--> VERB</tt> (129; 70%),
<tt>VERB --[<tt><a href="es_pud-dep-conj.html">conj</a></tt>]--> VERB</tt> (106; 69%),
<tt>VERB --[<tt><a href="es_pud-dep-advcl.html">advcl</a></tt>]--> VERB</tt> (75; 59%),
<tt>VERB --[<tt><a href="es_pud-dep-ccomp.html">ccomp</a></tt>]--> VERB</tt> (65; 58%),
<tt>VERB --[<tt><a href="es_pud-dep-parataxis.html">parataxis</a></tt>]--> VERB</tt> (43; 61%),
<tt>VERB --[<tt><a href="es_pud-dep-csubj.html">csubj</a></tt>]--> VERB</tt> (7; 70%),
<tt>VERB --[<tt><a href="es_pud-dep-discourse.html">discourse</a></tt>]--> VERB</tt> (1; 100%),
<tt>VERB --[<tt><a href="es_pud-dep-fixed.html">fixed</a></tt>]--> VERB</tt> (1; 100%),
<tt>VERB --[<tt><a href="es_pud-dep-nsubj.html">nsubj</a></tt>]--> VERB</tt> (1; 100%).

