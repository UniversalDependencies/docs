---
layout: base
title:  'Statistics of Polarity in UD_Polish-PUD'
udver: '2'
---

## Treebank Statistics: UD_Polish-PUD: Features: `Polarity`

This feature is universal.
It occurs with 2 different values: `Neg`, `Pos`.

754 tokens (4%) have a non-empty value of `Polarity`.
570 types (8%) occur at least once with a non-empty value of `Polarity`.
420 lemmas (8%) occur at least once with a non-empty value of `Polarity`.
The feature is used with 3 part-of-speech tags: <tt><a href="pl_pud-pos-ADJ.html">ADJ</a></tt> (411; 2% instances), <tt><a href="pl_pud-pos-NOUN.html">NOUN</a></tt> (220; 1% instances), <tt><a href="pl_pud-pos-PART.html">PART</a></tt> (123; 1% instances).

### `ADJ`

411 <tt><a href="pl_pud-pos-ADJ.html">ADJ</a></tt> tokens (17% of all `ADJ` tokens) have a non-empty value of `Polarity`.

The most frequent other feature values with which `ADJ` and `Polarity` co-occurred: <tt><a href="pl_pud-feat-Degree.html">Degree</a></tt><tt>=EMPTY</tt> (411; 100%), <tt><a href="pl_pud-feat-VerbForm.html">VerbForm</a></tt><tt>=Part</tt> (411; 100%), <tt><a href="pl_pud-feat-Voice.html">Voice</a></tt><tt>=Pass</tt> (297; 72%), <tt><a href="pl_pud-feat-Number.html">Number</a></tt><tt>=Sing</tt> (245; 60%), <tt><a href="pl_pud-feat-Case.html">Case</a></tt><tt>=Nom</tt> (229; 56%), <tt><a href="pl_pud-feat-Aspect.html">Aspect</a></tt><tt>=Perf</tt> (226; 55%), <tt><a href="pl_pud-feat-Animacy.html">Animacy</a></tt><tt>=EMPTY</tt> (209; 51%).

`ADJ` tokens may have the following values of `Polarity`:

* `Neg` (6; 1% of non-empty `Polarity`): <em>niekwestionowana, nienarodzone, nieprzeszkolonymi, niespotykanych, nietrafionych, niewystawionych</em>
* `Pos` (405; 99% of non-empty `Polarity`): <em>napisane, uznawane, posiadający, używane, związana, związane, Założony, finansowane, oddanych, ogłoszony</em>
* `EMPTY` (1950): <em>I, II, jednym, 1, ostatnich, nowych, pierwszy, wielkiej, inne, dużą</em>

<table>
  <tr><th>Paradigm <i>wystawić</i></th><th><tt>Pos</tt></th><th><tt>Neg</tt></th></tr>
  <tr><td><tt><tt><a href="pl_pud-feat-Animacy.html">Animacy</a></tt><tt>=Inan</tt>|<tt><a href="pl_pud-feat-Case.html">Case</a></tt><tt>=Nom</tt>|<tt><a href="pl_pud-feat-Gender.html">Gender</a></tt><tt>=Masc</tt>|<tt><a href="pl_pud-feat-Number.html">Number</a></tt><tt>=Plur</tt></tt></td><td><em>wystawione</em></td><td></td></tr>
  <tr><td><tt><tt><a href="pl_pud-feat-Case.html">Case</a></tt><tt>=Dat</tt>|<tt><a href="pl_pud-feat-Gender.html">Gender</a></tt><tt>=Fem</tt>|<tt><a href="pl_pud-feat-Number.html">Number</a></tt><tt>=Sing</tt></tt></td><td><em>wystawionej</em></td><td></td></tr>
  <tr><td><tt><tt><a href="pl_pud-feat-Case.html">Case</a></tt><tt>=Loc</tt>|<tt><a href="pl_pud-feat-Gender.html">Gender</a></tt><tt>=Fem</tt>|<tt><a href="pl_pud-feat-Number.html">Number</a></tt><tt>=Plur</tt></tt></td><td></td><td><em>niewystawionych</em></td></tr>
</table>

`Polarity` seems to be **lexical feature** of `ADJ`. 100% lemmas (297) occur only with one value of `Polarity`.

### `NOUN`

220 <tt><a href="pl_pud-pos-NOUN.html">NOUN</a></tt> tokens (5% of all `NOUN` tokens) have a non-empty value of `Polarity`.

The most frequent other feature values with which `NOUN` and `Polarity` co-occurred: <tt><a href="pl_pud-feat-Animacy.html">Animacy</a></tt><tt>=EMPTY</tt> (220; 100%), <tt><a href="pl_pud-feat-Gender.html">Gender</a></tt><tt>=Neut</tt> (220; 100%), <tt><a href="pl_pud-feat-Number.html">Number</a></tt><tt>=Sing</tt> (220; 100%).

`NOUN` tokens may have the following values of `Polarity`:

* `Pos` (220; 100% of non-empty `Polarity`): <em>zniszczenie, kręcenia, ograniczaniu, ograniczenia, opuszczenia, otwarcie, poszukiwaniu, powstrzymania, przejęcia, przekroczenie</em>
* `EMPTY` (4426): <em>r, lat, roku, %, części, miejsce, wojny, latach, p.n.e, ludzi</em>

`Polarity` seems to be **lexical feature** of `NOUN`. 100% lemmas (160) occur only with one value of `Polarity`.

### `PART`

123 <tt><a href="pl_pud-pos-PART.html">PART</a></tt> tokens (30% of all `PART` tokens) have a non-empty value of `Polarity`.

`PART` tokens may have the following values of `Polarity`:

* `Neg` (123; 100% of non-empty `Polarity`): <em>nie</em>
* `EMPTY` (290): <em>również, tylko, już, jednak, czy, około, jeszcze, może, ponad, nawet</em>

## Relations with Agreement in `Polarity`

The 10 most frequent relations where parent and child node agree in `Polarity`:
<tt>ADJ --[<tt><a href="pl_pud-dep-conj.html">conj</a></tt>]--> ADJ</tt> (9; 56%).

