---
layout: base
title:  'Statistics of Tense in UD_Swedish-SweLL'
udver: '2'
---

## Treebank Statistics: UD_Swedish-SweLL: Features: `Tense`

This feature is universal.
It occurs with 2 different values: `Past`, `Pres`.

1209 tokens (14%) have a non-empty value of `Tense`.
296 types (15%) occur at least once with a non-empty value of `Tense`.
236 lemmas (15%) occur at least once with a non-empty value of `Tense`.
The feature is used with 3 part-of-speech tags: <tt><a href="sv_swell-pos-VERB.html">VERB</a></tt> (701; 8% instances), <tt><a href="sv_swell-pos-AUX.html">AUX</a></tt> (472; 5% instances), <tt><a href="sv_swell-pos-ADJ.html">ADJ</a></tt> (36; 0% instances).

### `VERB`

701 <tt><a href="sv_swell-pos-VERB.html">VERB</a></tt> tokens (60% of all `VERB` tokens) have a non-empty value of `Tense`.

The most frequent other feature values with which `VERB` and `Tense` co-occurred: <tt><a href="sv_swell-feat-VerbForm.html">VerbForm</a></tt><tt>=Fin</tt> (696; 99%), <tt><a href="sv_swell-feat-Mood.html">Mood</a></tt><tt>=Ind</tt> (694; 99%), <tt><a href="sv_swell-feat-Voice.html">Voice</a></tt><tt>=Act</tt> (631; 90%).

`VERB` tokens may have the following values of `Tense`:

* `Past` (112; 16% of non-empty `Tense`): <em>kom, pratade, började, var, blev, brukade, hade, såg, flyttade, gick</em>
* `Pres` (589; 84% of non-empty `Tense`): <em>har, tycker, finns, kommer, blir, bor, är, handlar, tror, känner</em>
* `EMPTY` (459): <em>ha, lära, göra, köpa, ta, gå, få, bli, se, förstå</em>

<table>
  <tr><th>Paradigm <i>ha</i></th><th><tt>Pres</tt></th><th><tt>Past</tt></th></tr>
  <tr><td><tt></tt></td><td><em>har</em></td><td><em>hade</em></td></tr>
</table>

### `AUX`

472 <tt><a href="sv_swell-pos-AUX.html">AUX</a></tt> tokens (93% of all `AUX` tokens) have a non-empty value of `Tense`.

The most frequent other feature values with which `AUX` and `Tense` co-occurred: <tt><a href="sv_swell-feat-Mood.html">Mood</a></tt><tt>=Ind</tt> (472; 100%), <tt><a href="sv_swell-feat-VerbForm.html">VerbForm</a></tt><tt>=Fin</tt> (472; 100%), <tt><a href="sv_swell-feat-Voice.html">Voice</a></tt><tt>=Act</tt> (472; 100%).

`AUX` tokens may have the following values of `Tense`:

* `Past` (62; 13% of non-empty `Tense`): <em>var, skulle, hade, kunde, borde, ville</em>
* `Pres` (410; 87% of non-empty `Tense`): <em>är, kan, ska, har, måste, vill, får, kommer, blir, bör</em>
* `EMPTY` (36): <em>vara, kunna, blivit, få, bli, ha, varit, vilja, villja</em>

<table>
  <tr><th>Paradigm <i>vara</i></th><th><tt>Pres</tt></th><th><tt>Past</tt></th></tr>
  <tr><td><tt></tt></td><td><em>är</em></td><td><em>var</em></td></tr>
</table>

### `ADJ`

36 <tt><a href="sv_swell-pos-ADJ.html">ADJ</a></tt> tokens (5% of all `ADJ` tokens) have a non-empty value of `Tense`.

The most frequent other feature values with which `ADJ` and `Tense` co-occurred: <tt><a href="sv_swell-feat-Case.html">Case</a></tt><tt>=Nom</tt> (36; 100%), <tt><a href="sv_swell-feat-Degree.html">Degree</a></tt><tt>=Pos</tt> (36; 100%), <tt><a href="sv_swell-feat-Definite.html">Definite</a></tt><tt>=Ind</tt> (25; 69%), <tt><a href="sv_swell-feat-Gender.html">Gender</a></tt><tt>=EMPTY</tt> (20; 56%).

`ADJ` tokens may have the following values of `Tense`:

* `Past` (26; 72% of non-empty `Tense`): <em>jämfört, tvungen, övertygad, baserade, begagnade, begränsad, chockad, född, förbnnad, förlamad</em>
* `Pres` (10; 28% of non-empty `Tense`): <em>beroende, dominerande, fungerande, grundläggande, liknande, lärande, tagande, ökande</em>
* `EMPTY` (658): <em>många, olika, bra, nya, andra, viktigt, bästa, bättre, svårt, stor</em>

`Tense` seems to be **lexical feature** of `ADJ`. 100% lemmas (31) occur only with one value of `Tense`.

## Relations with Agreement in `Tense`

The 10 most frequent relations where parent and child node agree in `Tense`:
<tt>VERB --[<tt><a href="sv_swell-dep-conj.html">conj</a></tt>]--> VERB</tt> (67; 57%),
<tt>VERB --[<tt><a href="sv_swell-dep-advcl-relcl.html">advcl:relcl</a></tt>]--> VERB</tt> (4; 67%),
<tt>VERB --[<tt><a href="sv_swell-dep-conj.html">conj</a></tt>]--> AUX</tt> (1; 100%),
<tt>VERB --[<tt><a href="sv_swell-dep-nsubj.html">nsubj</a></tt>]--> VERB</tt> (1; 100%).

