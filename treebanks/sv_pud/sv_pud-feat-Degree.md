---
layout: base
title:  'Statistics of Degree in UD_Swedish-PUD'
udver: '2'
---

## Treebank Statistics: UD_Swedish-PUD: Features: `Degree`

This feature is universal.
It occurs with 3 different values: `Cmp`, `Pos`, `Sup`.

1769 tokens (9%) have a non-empty value of `Degree`.
1041 types (17%) occur at least once with a non-empty value of `Degree`.
834 lemmas (17%) occur at least once with a non-empty value of `Degree`.
The feature is used with 3 part-of-speech tags: <tt><a href="sv_pud-pos-ADJ.html">ADJ</a></tt> (1513; 8% instances), <tt><a href="sv_pud-pos-ADV.html">ADV</a></tt> (249; 1% instances), <tt><a href="sv_pud-pos-VERB.html">VERB</a></tt> (7; 0% instances).

### `ADJ`

1513 <tt><a href="sv_pud-pos-ADJ.html">ADJ</a></tt> tokens (97% of all `ADJ` tokens) have a non-empty value of `Degree`.

The most frequent other feature values with which `ADJ` and `Degree` co-occurred: <tt><a href="sv_pud-feat-Case.html">Case</a></tt><tt>=Nom</tt> (1499; 99%), <tt><a href="sv_pud-feat-Tense.html">Tense</a></tt><tt>=EMPTY</tt> (1293; 85%), <tt><a href="sv_pud-feat-VerbForm.html">VerbForm</a></tt><tt>=EMPTY</tt> (1293; 85%), <tt><a href="sv_pud-feat-Gender.html">Gender</a></tt><tt>=EMPTY</tt> (1039; 69%), <tt><a href="sv_pud-feat-Definite.html">Definite</a></tt><tt>=Ind</tt> (798; 53%).

`ADJ` tokens may have the following values of `Degree`:

* `Cmp` (70; 5% of non-empty `Degree`): <em>flera, fler, större, tidigare, högre, mer, senare, bättre, färre, ytterligare</em>
* `Pos` (1365; 90% of non-empty `Degree`): <em>nya, andra, många, stora, stor, hela, samma, brittiska, olika, amerikanska</em>
* `Sup` (78; 5% of non-empty `Degree`): <em>senaste, sista, högsta, största, bästa, främsta, sist, bäst, flesta, värsta</em>
* `EMPTY` (52): <em>första, andra, tredje, St., 3, 4, 45:e, New, Shaky, Talking</em>

<table>
  <tr><th>Paradigm <i>många</i></th><th><tt>Pos</tt></th><th><tt>Cmp</tt></th><th><tt>Sup</tt></th></tr>
  <tr><td><tt><tt><a href="sv_pud-feat-Definite.html">Definite</a></tt><tt>=Def</tt></tt></td><td></td><td></td><td><em>flesta</em></td></tr>
  <tr><td><tt><tt><a href="sv_pud-feat-Number.html">Number</a></tt><tt>=Plur</tt></tt></td><td><em>många</em></td><td><em>flera, fler</em></td><td></td></tr>
</table>

`Degree` seems to be **lexical feature** of `ADJ`. 97% lemmas (718) occur only with one value of `Degree`.

### `ADV`

249 <tt><a href="sv_pud-pos-ADV.html">ADV</a></tt> tokens (25% of all `ADV` tokens) have a non-empty value of `Degree`.

`ADV` tokens may have the following values of `Degree`:

* `Cmp` (57; 23% of non-empty `Degree`): <em>mer, senare, tidigare, längre, mindre, bättre, hellre, snarare, närmare, vidare</em>
* `Pos` (168; 67% of non-empty `Degree`): <em>helt, ofta, väldigt, djupt, långt, mycket, väl, faktiskt, snart, direkt</em>
* `Sup` (24; 10% of non-empty `Degree`): <em>mest, främst, värst, Minst, helst, sist, ytterst, knappast</em>
* `EMPTY` (745): <em>så, in, ut, där, också, bara, upp, fram, här, även</em>

<table>
  <tr><th>Paradigm <i>mycket</i></th><th><tt>Pos</tt></th><th><tt>Cmp</tt></th><th><tt>Sup</tt></th></tr>
  <tr><td><tt></tt></td><td><em>mycket</em></td><td><em>mer</em></td><td><em>mest</em></td></tr>
</table>

`Degree` seems to be **lexical feature** of `ADV`. 92% lemmas (93) occur only with one value of `Degree`.

### `VERB`

7 <tt><a href="sv_pud-pos-VERB.html">VERB</a></tt> tokens (0% of all `VERB` tokens) have a non-empty value of `Degree`.

The most frequent other feature values with which `VERB` and `Degree` co-occurred: <tt><a href="sv_pud-feat-Mood.html">Mood</a></tt><tt>=EMPTY</tt> (7; 100%), <tt><a href="sv_pud-feat-Tense.html">Tense</a></tt><tt>=Past</tt> (7; 100%), <tt><a href="sv_pud-feat-VerbForm.html">VerbForm</a></tt><tt>=Part</tt> (7; 100%), <tt><a href="sv_pud-feat-Voice.html">Voice</a></tt><tt>=EMPTY</tt> (7; 100%).

`VERB` tokens may have the following values of `Degree`:

* `Pos` (7; 100% of non-empty `Degree`): <em>avskedad, besegrad, dödade, filmad, förbluffad, intervjuad, tvingade</em>
* `EMPTY` (1964): <em>har, sade, finns, säger, började, ha, hade, blev, få, göra</em>

## Relations with Agreement in `Degree`

The 10 most frequent relations where parent and child node agree in `Degree`:
<tt>ADJ --[<tt><a href="sv_pud-dep-conj.html">conj</a></tt>]--> ADJ</tt> (32; 94%),
<tt>ADJ --[<tt><a href="sv_pud-dep-amod.html">amod</a></tt>]--> ADJ</tt> (6; 75%),
<tt>ADJ --[<tt><a href="sv_pud-dep-parataxis.html">parataxis</a></tt>]--> ADJ</tt> (3; 100%),
<tt>ADJ --[<tt><a href="sv_pud-dep-obl.html">obl</a></tt>]--> ADJ</tt> (2; 100%),
<tt>ADV --[<tt><a href="sv_pud-dep-parataxis.html">parataxis</a></tt>]--> ADV</tt> (1; 100%).

