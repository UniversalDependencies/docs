---
layout: base
title:  'Statistics of Aspect in UD_Ukrainian-Zhelekhivka'
udver: '2'
---

## Treebank Statistics: UD_Ukrainian-Zhelekhivka: Features: `Aspect`

This feature is universal.
It occurs with 2 different values: `Imp`, `Perf`.

1065 tokens (11%) have a non-empty value of `Aspect`.
703 types (23%) occur at least once with a non-empty value of `Aspect`.
492 lemmas (24%) occur at least once with a non-empty value of `Aspect`.
The feature is used with 3 part-of-speech tags: <tt><a href="uk_zhelekhivka-pos-VERB.html">VERB</a></tt> (872; 9% instances), <tt><a href="uk_zhelekhivka-pos-AUX.html">AUX</a></tt> (126; 1% instances), <tt><a href="uk_zhelekhivka-pos-ADJ.html">ADJ</a></tt> (67; 1% instances).

### `VERB`

872 <tt><a href="uk_zhelekhivka-pos-VERB.html">VERB</a></tt> tokens (100% of all `VERB` tokens) have a non-empty value of `Aspect`.

The most frequent other feature values with which `VERB` and `Aspect` co-occurred: <tt><a href="uk_zhelekhivka-feat-Gender.html">Gender</a></tt><tt>=EMPTY</tt> (713; 82%), <tt><a href="uk_zhelekhivka-feat-VerbForm.html">VerbForm</a></tt><tt>=Fin</tt> (565; 65%), <tt><a href="uk_zhelekhivka-feat-Mood.html">Mood</a></tt><tt>=Ind</tt> (557; 64%), <tt><a href="uk_zhelekhivka-feat-Person.html">Person</a></tt><tt>=EMPTY</tt> (520; 60%).

`VERB` tokens may have the following values of `Aspect`:

* `Imp` (549; 63% of non-empty `Aspect`): <em>може, має, живе, буде, віщує, каже, мати, здаєть, міг, являється</em>
* `Perf` (323; 37% of non-empty `Aspect`): <em>сказати, дати, стане, стати, признати, став, визволити, завести, засіяти, знївечити</em>

<table>
  <tr><th>Paradigm <i>викликати</i></th><th><tt>Imp</tt></th><th><tt>Perf</tt></th></tr>
  <tr><td><tt><tt><a href="uk_zhelekhivka-feat-Mood.html">Mood</a></tt><tt>=Ind</tt>|<tt><a href="uk_zhelekhivka-feat-Number.html">Number</a></tt><tt>=Plur</tt>|<tt><a href="uk_zhelekhivka-feat-Tense.html">Tense</a></tt><tt>=Past</tt>|<tt><a href="uk_zhelekhivka-feat-VerbForm.html">VerbForm</a></tt><tt>=Fin</tt></tt></td><td></td><td><em>викликали</em></td></tr>
  <tr><td><tt><tt><a href="uk_zhelekhivka-feat-VerbForm.html">VerbForm</a></tt><tt>=Inf</tt></tt></td><td><em>викликати</em></td><td><em>викликати</em></td></tr>
</table>

`Aspect` seems to be **lexical feature** of `VERB`. 99% lemmas (439) occur only with one value of `Aspect`.

### `AUX`

126 <tt><a href="uk_zhelekhivka-pos-AUX.html">AUX</a></tt> tokens (77% of all `AUX` tokens) have a non-empty value of `Aspect`.

The most frequent other feature values with which `AUX` and `Aspect` co-occurred: <tt><a href="uk_zhelekhivka-feat-VerbForm.html">VerbForm</a></tt><tt>=Fin</tt> (115; 91%), <tt><a href="uk_zhelekhivka-feat-Mood.html">Mood</a></tt><tt>=Ind</tt> (114; 90%), <tt><a href="uk_zhelekhivka-feat-Gender.html">Gender</a></tt><tt>=EMPTY</tt> (107; 85%), <tt><a href="uk_zhelekhivka-feat-Person.html">Person</a></tt><tt>=3</tt> (87; 69%), <tt><a href="uk_zhelekhivka-feat-Number.html">Number</a></tt><tt>=Sing</tt> (82; 65%), <tt><a href="uk_zhelekhivka-feat-Tense.html">Tense</a></tt><tt>=Fut</tt> (71; 56%).

`AUX` tokens may have the following values of `Aspect`:

* `Imp` (126; 100% of non-empty `Aspect`): <em>буде, ме, будуть, бути, муть, є, була, єсть, був, були</em>
* `EMPTY` (38): <em>б, би</em>

### `ADJ`

67 <tt><a href="uk_zhelekhivka-pos-ADJ.html">ADJ</a></tt> tokens (7% of all `ADJ` tokens) have a non-empty value of `Aspect`.

The most frequent other feature values with which `ADJ` and `Aspect` co-occurred: <tt><a href="uk_zhelekhivka-feat-Degree.html">Degree</a></tt><tt>=EMPTY</tt> (65; 97%), <tt><a href="uk_zhelekhivka-feat-Number.html">Number</a></tt><tt>=Sing</tt> (36; 54%).

`ADJ` tokens may have the following values of `Aspect`:

* `Imp` (8; 12% of non-empty `Aspect`): <em>займаючою, застрашаючого, звані, знаний, невгаваючої, немислима, поступаючої, сіяючою</em>
* `Perf` (59; 88% of non-empty `Aspect`): <em>з-єднаних, заінтересовані, зневолених, зрабованих, наведених, Здійснений, Наведені, виведене, визволені, висловлених</em>
* `EMPTY` (882): <em>великого, української, XX, певна, велику, народної, повинна, суспільного, укр., XX.</em>

`Aspect` seems to be **lexical feature** of `ADJ`. 100% lemmas (50) occur only with one value of `Aspect`.

## Relations with Agreement in `Aspect`

The 10 most frequent relations where parent and child node agree in `Aspect`:
<tt>VERB --[<tt><a href="uk_zhelekhivka-dep-conj.html">conj</a></tt>]--> VERB</tt> (111; 83%),
<tt>VERB --[<tt><a href="uk_zhelekhivka-dep-xcomp.html">xcomp</a></tt>]--> VERB</tt> (44; 52%),
<tt>VERB --[<tt><a href="uk_zhelekhivka-dep-advcl.html">advcl</a></tt>]--> VERB</tt> (41; 66%),
<tt>VERB --[<tt><a href="uk_zhelekhivka-dep-aux.html">aux</a></tt>]--> AUX</tt> (35; 51%),
<tt>VERB --[<tt><a href="uk_zhelekhivka-dep-parataxis.html">parataxis</a></tt>]--> VERB</tt> (24; 67%),
<tt>VERB --[<tt><a href="uk_zhelekhivka-dep-ccomp.html">ccomp</a></tt>]--> VERB</tt> (23; 57%),
<tt>AUX --[<tt><a href="uk_zhelekhivka-dep-conj.html">conj</a></tt>]--> AUX</tt> (1; 100%),
<tt>AUX --[<tt><a href="uk_zhelekhivka-dep-parataxis.html">parataxis</a></tt>]--> VERB</tt> (1; 100%),
<tt>VERB --[<tt><a href="uk_zhelekhivka-dep-cop.html">cop</a></tt>]--> AUX</tt> (1; 100%),
<tt>VERB --[<tt><a href="uk_zhelekhivka-dep-csubj.html">csubj</a></tt>]--> VERB</tt> (1; 100%).

