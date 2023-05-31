---
layout: base
title:  'Statistics of Polarity in UD_Polish-PUD'
udver: '2'
---

## Treebank Statistics: UD_Polish-PUD: Features: `Polarity`

This feature is universal.
It occurs with 2 different values: `Neg`, `Pos`.

753 tokens (4%) have a non-empty value of `Polarity`.
570 types (8%) occur at least once with a non-empty value of `Polarity`.
421 lemmas (8%) occur at least once with a non-empty value of `Polarity`.
The feature is used with 3 part-of-speech tags: <tt><a href="pl_pud-pos-ADJ.html">ADJ</a></tt> (412; 2% instances), <tt><a href="pl_pud-pos-NOUN.html">NOUN</a></tt> (220; 1% instances), <tt><a href="pl_pud-pos-PART.html">PART</a></tt> (121; 1% instances).

### `ADJ`

412 <tt><a href="pl_pud-pos-ADJ.html">ADJ</a></tt> tokens (17% of all `ADJ` tokens) have a non-empty value of `Polarity`.

The most frequent other feature values with which `ADJ` and `Polarity` co-occurred: <tt><a href="pl_pud-feat-Degree.html">Degree</a></tt><tt>=EMPTY</tt> (412; 100%), <tt><a href="pl_pud-feat-VerbForm.html">VerbForm</a></tt><tt>=Part</tt> (412; 100%), <tt><a href="pl_pud-feat-Voice.html">Voice</a></tt><tt>=Pass</tt> (298; 72%), <tt><a href="pl_pud-feat-Number.html">Number</a></tt><tt>=Sing</tt> (245; 59%), <tt><a href="pl_pud-feat-Aspect.html">Aspect</a></tt><tt>=Perf</tt> (228; 55%), <tt><a href="pl_pud-feat-Case.html">Case</a></tt><tt>=Nom</tt> (228; 55%), <tt><a href="pl_pud-feat-Animacy.html">Animacy</a></tt><tt>=EMPTY</tt> (211; 51%).

`ADJ` tokens may have the following values of `Polarity`:

* `Neg` (6; 1% of non-empty `Polarity`): <em>niekwestionowana, nienarodzone, nieprzeszkolonymi, niespotykanych, nietrafionych, niewystawionych</em>
* `Pos` (406; 99% of non-empty `Polarity`): <em>napisane, uznawane, posiadający, używane, związana, związane, Założony, Zjednoczonych, finansowane, oddanych</em>
* `EMPTY` (1946): <em>I, II, jednym, ostatnich, 1, nowych, pierwszy, wielkiej, inne, dużą</em>

<table>
  <tr><th>Paradigm <i>wystawić</i></th><th><tt>Pos</tt></th><th><tt>Neg</tt></th></tr>
  <tr><td><tt><tt><a href="pl_pud-feat-Animacy.html">Animacy</a></tt><tt>=Inan</tt>|<tt><a href="pl_pud-feat-Case.html">Case</a></tt><tt>=Nom</tt>|<tt><a href="pl_pud-feat-Gender.html">Gender</a></tt><tt>=Masc</tt>|<tt><a href="pl_pud-feat-Number.html">Number</a></tt><tt>=Plur</tt></tt></td><td><em>wystawione</em></td><td></td></tr>
  <tr><td><tt><tt><a href="pl_pud-feat-Case.html">Case</a></tt><tt>=Dat</tt>|<tt><a href="pl_pud-feat-Gender.html">Gender</a></tt><tt>=Fem</tt>|<tt><a href="pl_pud-feat-Number.html">Number</a></tt><tt>=Sing</tt></tt></td><td><em>wystawionej</em></td><td></td></tr>
  <tr><td><tt><tt><a href="pl_pud-feat-Case.html">Case</a></tt><tt>=Loc</tt>|<tt><a href="pl_pud-feat-Gender.html">Gender</a></tt><tt>=Fem</tt>|<tt><a href="pl_pud-feat-Number.html">Number</a></tt><tt>=Plur</tt></tt></td><td></td><td><em>niewystawionych</em></td></tr>
</table>

`Polarity` seems to be **lexical feature** of `ADJ`. 100% lemmas (298) occur only with one value of `Polarity`.

### `NOUN`

220 <tt><a href="pl_pud-pos-NOUN.html">NOUN</a></tt> tokens (5% of all `NOUN` tokens) have a non-empty value of `Polarity`.

The most frequent other feature values with which `NOUN` and `Polarity` co-occurred: <tt><a href="pl_pud-feat-Animacy.html">Animacy</a></tt><tt>=EMPTY</tt> (220; 100%), <tt><a href="pl_pud-feat-Gender.html">Gender</a></tt><tt>=Neut</tt> (220; 100%), <tt><a href="pl_pud-feat-Number.html">Number</a></tt><tt>=Sing</tt> (220; 100%).

`NOUN` tokens may have the following values of `Polarity`:

* `Pos` (220; 100% of non-empty `Polarity`): <em>zniszczenie, kręcenia, ograniczaniu, ograniczenia, opuszczenia, otwarcie, poszukiwaniu, powstrzymania, przejęcia, przekroczenie</em>
* `EMPTY` (4284): <em>lat, roku, części, miejsce, wojny, latach, ludzi, raz, wieku, większość</em>

`Polarity` seems to be **lexical feature** of `NOUN`. 100% lemmas (160) occur only with one value of `Polarity`.

### `PART`

121 <tt><a href="pl_pud-pos-PART.html">PART</a></tt> tokens (32% of all `PART` tokens) have a non-empty value of `Polarity`.

`PART` tokens may have the following values of `Polarity`:

* `Neg` (121; 100% of non-empty `Polarity`): <em>nie</em>
* `EMPTY` (258): <em>również, tylko, już, jednak, czy, około, jeszcze, może, ponad, nawet</em>

## Relations with Agreement in `Polarity`

The 10 most frequent relations where parent and child node agree in `Polarity`:
<tt>ADJ --[<tt><a href="pl_pud-dep-conj.html">conj</a></tt>]--> ADJ</tt> (9; 56%).

