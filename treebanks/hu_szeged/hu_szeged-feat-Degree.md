---
layout: base
title:  'Statistics of Degree in UD_Hungarian-Szeged'
udver: '2'
---

## Treebank Statistics: UD_Hungarian-Szeged: Features: `Degree`

This feature is universal.
It occurs with 3 different values: `Cmp`, `Pos`, `Sup`.

5010 tokens (12%) have a non-empty value of `Degree`.
2180 types (16%) occur at least once with a non-empty value of `Degree`.
1886 lemmas (21%) occur at least once with a non-empty value of `Degree`.
The feature is used with 2 part-of-speech tags: <tt><a href="hu_szeged-pos-ADJ.html">ADJ</a></tt> (4708; 11% instances), <tt><a href="hu_szeged-pos-ADV.html">ADV</a></tt> (302; 1% instances).

### `ADJ`

4708 <tt><a href="hu_szeged-pos-ADJ.html">ADJ</a></tt> tokens (85% of all `ADJ` tokens) have a non-empty value of `Degree`.

The most frequent other feature values with which `ADJ` and `Degree` co-occurred: <tt><a href="hu_szeged-feat-Number.html">Number</a></tt><tt>=Sing</tt> (4648; 99%), <tt><a href="hu_szeged-feat-Case.html">Case</a></tt><tt>=Nom</tt> (4301; 91%), <tt><a href="hu_szeged-feat-VerbForm.html">VerbForm</a></tt><tt>=EMPTY</tt> (4210; 89%).

`ADJ` tokens may have the following values of `Degree`:

* `Cmp` (160; 3% of non-empty `Degree`): <em>utóbbi, újabb, korábbi, nagyobb, hosszabb, magasabb, erősebb, jobb, kisebb, főbb</em>
* `Pos` (4453; 95% of non-empty `Degree`): <em>magyar, új, orosz, nagy, gazdasági, százalékos, parlamenti, nemzetközi, politikai, évi</em>
* `Sup` (95; 2% of non-empty `Degree`): <em>legnagyobb, legfontosabb, legfőbb, legjobb, legfelsőbb, legmagasabb, legszebb, legkritikusabb, legsúlyosabb, legbékésebbnek</em>
* `EMPTY` (835): <em>első, második, elmúlt, jövő, 2000., 1999., következő, követően, való, készült</em>

<table>
  <tr><th>Paradigm <i>nagy</i></th><th><tt>Pos</tt></th><th><tt>Cmp</tt></th><th><tt>Sup</tt></th></tr>
  <tr><td><tt><tt><a href="hu_szeged-feat-Number.html">Number</a></tt><tt>=Sing</tt></tt></td><td><em>nagy</em></td><td><em>nagyobb, nagyobbik</em></td><td><em>legnagyobb</em></td></tr>
  <tr><td><tt><tt><a href="hu_szeged-feat-Number.html">Number</a></tt><tt>=Plur</tt></tt></td><td><em>nagyok</em></td><td></td><td></td></tr>
</table>

`Degree` seems to be **lexical feature** of `ADJ`. 97% lemmas (1806) occur only with one value of `Degree`.

### `ADV`

302 <tt><a href="hu_szeged-pos-ADV.html">ADV</a></tt> tokens (10% of all `ADV` tokens) have a non-empty value of `Degree`.

The most frequent other feature values with which `ADV` and `Degree` co-occurred: <tt><a href="hu_szeged-feat-PronType.html">PronType</a></tt><tt>=EMPTY</tt> (295; 98%).

`ADV` tokens may have the following values of `Degree`:

* `Cmp` (31; 10% of non-empty `Degree`): <em>korábban, inkább, továbbra, előbb, jobban, kevésbé, közelebb, utóbb</em>
* `Pos` (269; 89% of non-empty `Degree`): <em>ki, fel, be, le, elő, vissza, végül, össze, jól, először</em>
* `Sup` (2; 1% of non-empty `Degree`): <em>leginkább, legjobban</em>
* `EMPTY` (2813): <em>nem, már, még, csak, el, sem, is, úgy, például, akkor</em>

<table>
  <tr><th>Paradigm <i>jól</i></th><th><tt>Pos</tt></th><th><tt>Cmp</tt></th><th><tt>Sup</tt></th></tr>
  <tr><td><tt></tt></td><td><em>jól</em></td><td><em>jobban</em></td><td><em>legjobban</em></td></tr>
</table>

`Degree` seems to be **lexical feature** of `ADV`. 91% lemmas (29) occur only with one value of `Degree`.

## Relations with Agreement in `Degree`

The 10 most frequent relations where parent and child node agree in `Degree`:
<tt>ADJ --[<tt><a href="hu_szeged-dep-amod-att.html">amod:att</a></tt>]--> ADJ</tt> (109; 68%),
<tt>ADJ --[<tt><a href="hu_szeged-dep-conj.html">conj</a></tt>]--> ADJ</tt> (107; 79%),
<tt>ADJ --[<tt><a href="hu_szeged-dep-obl.html">obl</a></tt>]--> ADJ</tt> (38; 70%),
<tt>ADJ --[<tt><a href="hu_szeged-dep-orphan.html">orphan</a></tt>]--> ADJ</tt> (6; 100%),
<tt>ADJ --[<tt><a href="hu_szeged-dep-csubj.html">csubj</a></tt>]--> ADJ</tt> (2; 100%),
<tt>ADJ --[<tt><a href="hu_szeged-dep-nsubj.html">nsubj</a></tt>]--> ADJ</tt> (2; 100%),
<tt>ADJ --[<tt><a href="hu_szeged-dep-parataxis.html">parataxis</a></tt>]--> ADJ</tt> (2; 100%),
<tt>ADJ --[<tt><a href="hu_szeged-dep-acl.html">acl</a></tt>]--> ADJ</tt> (1; 100%),
<tt>ADJ --[<tt><a href="hu_szeged-dep-appos.html">appos</a></tt>]--> ADJ</tt> (1; 100%),
<tt>ADV --[<tt><a href="hu_szeged-dep-conj.html">conj</a></tt>]--> ADV</tt> (1; 100%).

