---
layout: base
title:  'Statistics of Tense in UD_Swedish-SweLL'
udver: '2'
---

## Treebank Statistics: UD_Swedish-SweLL: Features: `Tense`

This feature is universal.
It occurs with 2 different values: `Past`, `Pres`.

1529 tokens (14%) have a non-empty value of `Tense`.
342 types (15%) occur at least once with a non-empty value of `Tense`.
250 lemmas (16%) occur at least once with a non-empty value of `Tense`.
The feature is used with 3 part-of-speech tags: <tt><a href="sv_swell-pos-VERB.html">VERB</a></tt> (875; 8% instances), <tt><a href="sv_swell-pos-AUX.html">AUX</a></tt> (610; 6% instances), <tt><a href="sv_swell-pos-ADJ.html">ADJ</a></tt> (44; 0% instances).

### `VERB`

875 <tt><a href="sv_swell-pos-VERB.html">VERB</a></tt> tokens (60% of all `VERB` tokens) have a non-empty value of `Tense`.

The most frequent other feature values with which `VERB` and `Tense` co-occurred: <tt><a href="sv_swell-feat-VerbForm.html">VerbForm</a></tt><tt>=Fin</tt> (870; 99%), <tt><a href="sv_swell-feat-Mood.html">Mood</a></tt><tt>=Ind</tt> (868; 99%), <tt><a href="sv_swell-feat-Voice.html">Voice</a></tt><tt>=Act</tt> (788; 90%).

`VERB` tokens may have the following values of `Tense`:

* `Past` (135; 15% of non-empty `Tense`): <em>kom, hade, pratade, brukade, började, såg, var, blev, gick, bodde</em>
* `Pres` (740; 85% of non-empty `Tense`): <em>har, tycker, finns, kommer, behöver, blir, bor, ser, vill, gör</em>
* `EMPTY` (585): <em>ha, lära, ta, göra, köpa, få, gå, bli, klä, förstå</em>

<table>
  <tr><th>Paradigm <i>ha</i></th><th><tt>Pres</tt></th><th><tt>Past</tt></th></tr>
  <tr><td><tt></tt></td><td><em>har</em></td><td><em>hade</em></td></tr>
</table>

### `AUX`

610 <tt><a href="sv_swell-pos-AUX.html">AUX</a></tt> tokens (92% of all `AUX` tokens) have a non-empty value of `Tense`.

The most frequent other feature values with which `AUX` and `Tense` co-occurred: <tt><a href="sv_swell-feat-Mood.html">Mood</a></tt><tt>=Ind</tt> (610; 100%), <tt><a href="sv_swell-feat-VerbForm.html">VerbForm</a></tt><tt>=Fin</tt> (610; 100%), <tt><a href="sv_swell-feat-Voice.html">Voice</a></tt><tt>=Act</tt> (610; 100%).

`AUX` tokens may have the following values of `Tense`:

* `Past` (78; 13% of non-empty `Tense`): <em>var, skulle, hade, kunde, ville, borde, fick</em>
* `Pres` (532; 87% of non-empty `Tense`): <em>är, kan, ska, har, måste, vill, får, kommer, blir, bör</em>
* `EMPTY` (53): <em>vara, kunna, få, blivit, varit, bli, ha, här, vilja, villja</em>

<table>
  <tr><th>Paradigm <i>vara</i></th><th><tt>Pres</tt></th><th><tt>Past</tt></th></tr>
  <tr><td><tt></tt></td><td><em>är</em></td><td><em>var</em></td></tr>
</table>

### `ADJ`

44 <tt><a href="sv_swell-pos-ADJ.html">ADJ</a></tt> tokens (5% of all `ADJ` tokens) have a non-empty value of `Tense`.

The most frequent other feature values with which `ADJ` and `Tense` co-occurred: <tt><a href="sv_swell-feat-Case.html">Case</a></tt><tt>=Nom</tt> (44; 100%), <tt><a href="sv_swell-feat-Degree.html">Degree</a></tt><tt>=Pos</tt> (44; 100%), <tt><a href="sv_swell-feat-Definite.html">Definite</a></tt><tt>=Ind</tt> (31; 70%), <tt><a href="sv_swell-feat-Gender.html">Gender</a></tt><tt>=EMPTY</tt> (24; 55%).

`ADJ` tokens may have the following values of `Tense`:

* `Past` (32; 73% of non-empty `Tense`): <em>jämfört, tvungen, övertygad, anpassat, baserade, begagnade, begränsad, berömda, chockad, född</em>
* `Pres` (12; 27% of non-empty `Tense`): <em>beroende, beröende, dominerande, fungerande, grundläggande, liknande, lärande, tagande, tillhörande, ökande</em>
* `EMPTY` (833): <em>olika, många, bra, andra, nya, viktigt, bättre, första, själv, stor</em>

`Tense` seems to be **lexical feature** of `ADJ`. 100% lemmas (37) occur only with one value of `Tense`.

## Relations with Agreement in `Tense`

The 10 most frequent relations where parent and child node agree in `Tense`:
<tt>VERB --[<tt><a href="sv_swell-dep-conj.html">conj</a></tt>]--> VERB</tt> (79; 54%),
<tt>VERB --[<tt><a href="sv_swell-dep-advcl-relcl.html">advcl:relcl</a></tt>]--> VERB</tt> (4; 67%),
<tt>VERB --[<tt><a href="sv_swell-dep-conj.html">conj</a></tt>]--> AUX</tt> (2; 100%),
<tt>VERB --[<tt><a href="sv_swell-dep-nsubj.html">nsubj</a></tt>]--> VERB</tt> (1; 100%).

