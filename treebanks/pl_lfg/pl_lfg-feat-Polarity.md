---
layout: base
title:  'Statistics of Polarity in UD_Polish-LFG'
udver: '2'
---

## Treebank Statistics: UD_Polish-LFG: Features: `Polarity`

This feature is universal.
It occurs with 2 different values: `Neg`, `Pos`.

4397 tokens (3%) have a non-empty value of `Polarity`.
1558 types (5%) occur at least once with a non-empty value of `Polarity`.
1100 lemmas (7%) occur at least once with a non-empty value of `Polarity`.
The feature is used with 3 part-of-speech tags: <tt><a href="pl_lfg-pos-PART.html">PART</a></tt> (2642; 2% instances), <tt><a href="pl_lfg-pos-ADJ.html">ADJ</a></tt> (1193; 1% instances), <tt><a href="pl_lfg-pos-NOUN.html">NOUN</a></tt> (562; 0% instances).

### `PART`

2642 <tt><a href="pl_lfg-pos-PART.html">PART</a></tt> tokens (45% of all `PART` tokens) have a non-empty value of `Polarity`.

`PART` tokens may have the following values of `Polarity`:

* `Neg` (2642; 100% of non-empty `Polarity`): <em>nie</em>
* `EMPTY` (3246): <em>już, czy, też, jeszcze, tylko, może, nawet, także, no, przecież</em>

### `ADJ`

1193 <tt><a href="pl_lfg-pos-ADJ.html">ADJ</a></tt> tokens (14% of all `ADJ` tokens) have a non-empty value of `Polarity`.

The most frequent other feature values with which `ADJ` and `Polarity` co-occurred: <tt><a href="pl_lfg-feat-Degree.html">Degree</a></tt><tt>=EMPTY</tt> (1193; 100%), <tt><a href="pl_lfg-feat-VerbForm.html">VerbForm</a></tt><tt>=Part</tt> (1193; 100%), <tt><a href="pl_lfg-feat-Voice.html">Voice</a></tt><tt>=Pass</tt> (929; 78%), <tt><a href="pl_lfg-feat-Aspect.html">Aspect</a></tt><tt>=Perf</tt> (776; 65%), <tt><a href="pl_lfg-feat-Number.html">Number</a></tt><tt>=Sing</tt> (734; 62%), <tt><a href="pl_lfg-feat-Case.html">Case</a></tt><tt>=Nom</tt> (655; 55%), <tt><a href="pl_lfg-feat-Gender.html">Gender</a></tt><tt>=Masc</tt> (598; 50%).

`ADJ` tokens may have the following values of `Polarity`:

* `Neg` (15; 1% of non-empty `Polarity`): <em>Nieleczona, niedokończona, niedopitej, nieheblowanych, niepokazywanych, nieposiadającą, nieprzestrzegających, nieprzewidzianych, niespełnionym, niespotykane</em>
* `Pos` (1178; 99% of non-empty `Polarity`): <em>przygotowane, przyjęta, wykonane, opanowana, protestujących, przekazane, działające, leżącego, leżącą, oszołomiony</em>
* `EMPTY` (7393): <em>sam, pierwszy, cały, jeden, inne, sama, całe, sami, innych, całą</em>

<table>
  <tr><th>Paradigm <i>spotykać</i></th><th><tt>Pos</tt></th><th><tt>Neg</tt></th></tr>
  <tr><td><tt><tt><a href="pl_lfg-feat-Gender.html">Gender</a></tt><tt>=Masc</tt>|<tt><a href="pl_lfg-feat-Number.html">Number</a></tt><tt>=Sing</tt>|<tt><a href="pl_lfg-feat-SubGender.html">SubGender</a></tt><tt>=Masc2</tt></tt></td><td><em>spotykany</em></td><td></td></tr>
  <tr><td><tt><tt><a href="pl_lfg-feat-Gender.html">Gender</a></tt><tt>=Masc</tt>|<tt><a href="pl_lfg-feat-Number.html">Number</a></tt><tt>=Sing</tt>|<tt><a href="pl_lfg-feat-SubGender.html">SubGender</a></tt><tt>=Masc3</tt></tt></td><td><em>spotykany</em></td><td></td></tr>
  <tr><td><tt><tt><a href="pl_lfg-feat-Gender.html">Gender</a></tt><tt>=Fem</tt>|<tt><a href="pl_lfg-feat-Number.html">Number</a></tt><tt>=Plur</tt></tt></td><td></td><td><em>niespotykane</em></td></tr>
</table>

`Polarity` seems to be **lexical feature** of `ADJ`. 99% lemmas (819) occur only with one value of `Polarity`.

### `NOUN`

562 <tt><a href="pl_lfg-pos-NOUN.html">NOUN</a></tt> tokens (2% of all `NOUN` tokens) have a non-empty value of `Polarity`.

The most frequent other feature values with which `NOUN` and `Polarity` co-occurred: <tt><a href="pl_lfg-feat-Gender.html">Gender</a></tt><tt>=Neut</tt> (562; 100%), <tt><a href="pl_lfg-feat-SubGender.html">SubGender</a></tt><tt>=EMPTY</tt> (562; 100%), <tt><a href="pl_lfg-feat-Number.html">Number</a></tt><tt>=Sing</tt> (560; 100%).

`NOUN` tokens may have the following values of `Polarity`:

* `Neg` (2; 0% of non-empty `Polarity`): <em>niestosowanie, nieuprawianie</em>
* `Pos` (560; 100% of non-empty `Polarity`): <em>głosowania, otwarcia, przyjęcie, czytanie, odrzucenie, odwołania, okradania, zakończeniu, jedzeniu, liczenie</em>
* `EMPTY` (24761): <em>pan, pani, lat, domu, roku, pana, drzwi, raz, oczy, panie</em>

<table>
  <tr><th>Paradigm <i>stosować</i></th><th><tt>Pos</tt></th><th><tt>Neg</tt></th></tr>
  <tr><td><tt><tt><a href="pl_lfg-feat-Case.html">Case</a></tt><tt>=Acc</tt></tt></td><td><em>stosowanie</em></td><td><em>niestosowanie</em></td></tr>
  <tr><td><tt><tt><a href="pl_lfg-feat-Case.html">Case</a></tt><tt>=Gen</tt></tt></td><td><em>stosowania</em></td><td></td></tr>
  <tr><td><tt><tt><a href="pl_lfg-feat-Case.html">Case</a></tt><tt>=Nom</tt></tt></td><td><em>stosowanie</em></td><td></td></tr>
</table>

`Polarity` seems to be **lexical feature** of `NOUN`. 99% lemmas (381) occur only with one value of `Polarity`.

## Relations with Agreement in `Polarity`

The 10 most frequent relations where parent and child node agree in `Polarity`:
<tt>ADJ --[<tt><a href="pl_lfg-dep-conj.html">conj</a></tt>]--> ADJ</tt> (20; 54%).

