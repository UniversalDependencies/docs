---
layout: base
title:  'Statistics of Degree in UD_Swedish-PUD'
udver: '2'
---

## Treebank Statistics: UD_Swedish-PUD: Features: `Degree`

This feature is universal.
It occurs with 3 different values: `Cmp`, `Pos`, `Sup`.

1791 tokens (9%) have a non-empty value of `Degree`.
1044 types (17%) occur at least once with a non-empty value of `Degree`.
840 lemmas (17%) occur at least once with a non-empty value of `Degree`.
The feature is used with 2 part-of-speech tags: <tt><a href="sv_pud-pos-ADJ.html">ADJ</a></tt> (1525; 8% instances), <tt><a href="sv_pud-pos-ADV.html">ADV</a></tt> (266; 1% instances).

### `ADJ`

1525 <tt><a href="sv_pud-pos-ADJ.html">ADJ</a></tt> tokens (97% of all `ADJ` tokens) have a non-empty value of `Degree`.

The most frequent other feature values with which `ADJ` and `Degree` co-occurred: <tt><a href="sv_pud-feat-Case.html">Case</a></tt><tt>=Nom</tt> (1508; 99%), <tt><a href="sv_pud-feat-Tense.html">Tense</a></tt><tt>=EMPTY</tt> (1298; 85%), <tt><a href="sv_pud-feat-VerbForm.html">VerbForm</a></tt><tt>=EMPTY</tt> (1298; 85%), <tt><a href="sv_pud-feat-Gender.html">Gender</a></tt><tt>=EMPTY</tt> (1039; 68%), <tt><a href="sv_pud-feat-Definite.html">Definite</a></tt><tt>=Ind</tt> (806; 53%).

`ADJ` tokens may have the following values of `Degree`:

* `Cmp` (43; 3% of non-empty `Degree`): <em>större, tidigare, högre, mer, senare, bättre, färre, ytterligare, äldre, Nedre</em>
* `Pos` (1404; 92% of non-empty `Degree`): <em>nya, andra, många, flera, stora, stor, hela, samma, brittiska, olika</em>
* `Sup` (78; 5% of non-empty `Degree`): <em>senaste, sista, högsta, största, bästa, främsta, sist, bäst, flesta, värsta</em>
* `EMPTY` (48): <em>första, andra, tredje, St., 3, 4, 45:e, fjärde, sextonde</em>

<table>
  <tr><th>Paradigm <i>stor</i></th><th><tt>Pos</tt></th><th><tt>Cmp</tt></th><th><tt>Sup</tt></th></tr>
  <tr><td><tt></tt></td><td><em>stort</em></td><td><em>större</em></td><td></td></tr>
  <tr><td><tt><tt><a href="sv_pud-feat-Definite.html">Definite</a></tt><tt>=Def</tt></tt></td><td><em>stora</em></td><td></td><td><em>största</em></td></tr>
  <tr><td><tt><tt><a href="sv_pud-feat-Definite.html">Definite</a></tt><tt>=Ind</tt>|<tt><a href="sv_pud-feat-Gender.html">Gender</a></tt><tt>=Com</tt>|<tt><a href="sv_pud-feat-Number.html">Number</a></tt><tt>=Sing</tt></tt></td><td><em>stor</em></td><td></td><td></td></tr>
  <tr><td><tt><tt><a href="sv_pud-feat-Definite.html">Definite</a></tt><tt>=Ind</tt>|<tt><a href="sv_pud-feat-Gender.html">Gender</a></tt><tt>=Neut</tt>|<tt><a href="sv_pud-feat-Number.html">Number</a></tt><tt>=Sing</tt></tt></td><td><em>stort</em></td><td></td><td></td></tr>
  <tr><td><tt><tt><a href="sv_pud-feat-Definite.html">Definite</a></tt><tt>=Ind</tt>|<tt><a href="sv_pud-feat-Number.html">Number</a></tt><tt>=Plur</tt></tt></td><td><em>stora</em></td><td></td><td></td></tr>
</table>

`Degree` seems to be **lexical feature** of `ADJ`. 97% lemmas (730) occur only with one value of `Degree`.

### `ADV`

266 <tt><a href="sv_pud-pos-ADV.html">ADV</a></tt> tokens (26% of all `ADV` tokens) have a non-empty value of `Degree`.

`ADV` tokens may have the following values of `Degree`:

* `Cmp` (72; 27% of non-empty `Degree`): <em>mer, senare, tidigare, längre, mindre, bättre, hellre, snarare, närmare, vidare</em>
* `Pos` (169; 64% of non-empty `Degree`): <em>helt, mycket, ofta, väldigt, djupt, långt, lite, väl, faktiskt, snart</em>
* `Sup` (25; 9% of non-empty `Degree`): <em>mest, främst, sist, värst, Minst, helst, ytterst, knappast</em>
* `EMPTY` (746): <em>så, in, ut, där, också, upp, bara, fram, här, även</em>

<table>
  <tr><th>Paradigm <i>mycket</i></th><th><tt>Pos</tt></th><th><tt>Cmp</tt></th><th><tt>Sup</tt></th></tr>
  <tr><td><tt></tt></td><td><em>mycket</em></td><td><em>mer</em></td><td><em>mest</em></td></tr>
</table>

`Degree` seems to be **lexical feature** of `ADV`. 92% lemmas (90) occur only with one value of `Degree`.

## Relations with Agreement in `Degree`

The 10 most frequent relations where parent and child node agree in `Degree`:
<tt>ADJ --[<tt><a href="sv_pud-dep-conj.html">conj</a></tt>]--> ADJ</tt> (32; 97%),
<tt>ADJ --[<tt><a href="sv_pud-dep-advmod.html">advmod</a></tt>]--> ADJ</tt> (4; 57%),
<tt>ADJ --[<tt><a href="sv_pud-dep-amod.html">amod</a></tt>]--> ADJ</tt> (4; 67%),
<tt>ADV --[<tt><a href="sv_pud-dep-conj.html">conj</a></tt>]--> ADV</tt> (4; 57%),
<tt>ADJ --[<tt><a href="sv_pud-dep-parataxis.html">parataxis</a></tt>]--> ADJ</tt> (3; 100%),
<tt>ADJ --[<tt><a href="sv_pud-dep-obl.html">obl</a></tt>]--> ADJ</tt> (2; 100%),
<tt>ADJ --[<tt><a href="sv_pud-dep-nsubj.html">nsubj</a></tt>]--> ADJ</tt> (1; 100%),
<tt>ADV --[<tt><a href="sv_pud-dep-parataxis.html">parataxis</a></tt>]--> ADV</tt> (1; 100%).

