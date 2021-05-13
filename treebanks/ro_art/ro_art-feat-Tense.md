---
layout: base
title:  'Statistics of Tense in UD_Romanian-ArT'
udver: '2'
---

## Treebank Statistics: UD_Romanian-ArT: Features: `Tense`

This feature is universal.
It occurs with 3 different values: `Imp`, `Past`, `Pres`.

113 tokens (20%) have a non-empty value of `Tense`.
102 types (34%) occur at least once with a non-empty value of `Tense`.
68 lemmas (30%) occur at least once with a non-empty value of `Tense`.
The feature is used with 2 part-of-speech tags: <tt><a href="ro_art-pos-VERB.html">VERB</a></tt> (107; 19% instances), <tt><a href="ro_art-pos-AUX.html">AUX</a></tt> (6; 1% instances).

### `VERB`

107 <tt><a href="ro_art-pos-VERB.html">VERB</a></tt> tokens (93% of all `VERB` tokens) have a non-empty value of `Tense`.

The most frequent other feature values with which `VERB` and `Tense` co-occurred: <tt><a href="ro_art-feat-VerbForm.html">VerbForm</a></tt><tt>=Fin</tt> (107; 100%), <tt><a href="ro_art-feat-Person.html">Person</a></tt><tt>=3</tt> (89; 83%), <tt><a href="ro_art-feat-Number.html">Number</a></tt><tt>=Sing</tt> (86; 80%), <tt><a href="ro_art-feat-Mood.html">Mood</a></tt><tt>=Ind</tt> (78; 73%).

`VERB` tokens may have the following values of `Tense`:

* `Imp` (26; 24% of non-empty `Tense`): <em>imna, lucra, Aştipta, afla, arcai, arăţea, aspărea, avea, aĝuca, cădea</em>
* `Past` (29; 27% of non-empty `Tense`): <em>ascăpă, feaţi, fudzirâ, tricu, Aĝumse, acăţarâ, adunarâ, aduse, aflaşi, agudişi</em>
* `Pres` (52; 49% of non-empty `Tense`): <em>adară, ascapă, facă, mutreaşte, acaţă, acumpără, aduc, aduńi, afli, alină</em>
* `EMPTY` (8): <em>adu, ascăpată, bati, faptă, minduit, misură, niapirită, nidată</em>

<table>
  <tr><th>Paradigm <i>trec</i></th><th><tt>Pres</tt></th><th><tt>Past</tt></th><th><tt>Imp</tt></th></tr>
  <tr><td><tt><tt><a href="ro_art-feat-Mood.html">Mood</a></tt><tt>=Ind</tt></tt></td><td></td><td><em>tricu</em></td><td><em>triţea</em></td></tr>
  <tr><td><tt><tt><a href="ro_art-feat-Mood.html">Mood</a></tt><tt>=Sub</tt></tt></td><td><em>treacă</em></td><td></td><td></td></tr>
</table>

### `AUX`

6 <tt><a href="ro_art-pos-AUX.html">AUX</a></tt> tokens (67% of all `AUX` tokens) have a non-empty value of `Tense`.

The most frequent other feature values with which `AUX` and `Tense` co-occurred: <tt><a href="ro_art-feat-Number.html">Number</a></tt><tt>=Sing</tt> (6; 100%), <tt><a href="ro_art-feat-Person.html">Person</a></tt><tt>=3</tt> (6; 100%), <tt><a href="ro_art-feat-VerbForm.html">VerbForm</a></tt><tt>=Fin</tt> (6; 100%), <tt><a href="ro_art-feat-Mood.html">Mood</a></tt><tt>=Ind</tt> (5; 83%).

`AUX` tokens may have the following values of `Tense`:

* `Imp` (5; 83% of non-empty `Tense`): <em>era, avea</em>
* `Pres` (1; 17% of non-empty `Tense`): <em>hibă</em>
* `EMPTY` (3): <em>va</em>

<table>
  <tr><th>Paradigm <i>hiu</i></th><th><tt>Pres</tt></th><th><tt>Imp</tt></th></tr>
  <tr><td><tt><tt><a href="ro_art-feat-Mood.html">Mood</a></tt><tt>=Ind</tt></tt></td><td></td><td><em>era</em></td></tr>
  <tr><td><tt><tt><a href="ro_art-feat-Mood.html">Mood</a></tt><tt>=Sub</tt></tt></td><td><em>hibă</em></td><td></td></tr>
</table>

## Relations with Agreement in `Tense`

The 10 most frequent relations where parent and child node agree in `Tense`:
<tt>VERB --[<tt><a href="ro_art-dep-advcl.html">advcl</a></tt>]--> VERB</tt> (16; 55%),
<tt>VERB --[<tt><a href="ro_art-dep-conj.html">conj</a></tt>]--> VERB</tt> (15; 88%),
<tt>VERB --[<tt><a href="ro_art-dep-ccomp.html">ccomp</a></tt>]--> AUX</tt> (1; 100%).

