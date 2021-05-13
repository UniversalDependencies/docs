---
layout: base
title:  'Statistics of Degree in UD_Swedish-Talbanken'
udver: '2'
---

## Treebank Statistics: UD_Swedish-Talbanken: Features: `Degree`

This feature is universal.
It occurs with 3 different values: `Cmp`, `Pos`, `Sup`.

8498 tokens (9%) have a non-empty value of `Degree`.
2113 types (14%) occur at least once with a non-empty value of `Degree`.
1231 lemmas (12%) occur at least once with a non-empty value of `Degree`.
The feature is used with 2 part-of-speech tags: <tt><a href="sv_talbanken-pos-ADJ.html">ADJ</a></tt> (6769; 7% instances), <tt><a href="sv_talbanken-pos-ADV.html">ADV</a></tt> (1729; 2% instances).

### `ADJ`

6769 <tt><a href="sv_talbanken-pos-ADJ.html">ADJ</a></tt> tokens (80% of all `ADJ` tokens) have a non-empty value of `Degree`.

The most frequent other feature values with which `ADJ` and `Degree` co-occurred: <tt><a href="sv_talbanken-feat-Tense.html">Tense</a></tt><tt>=EMPTY</tt> (6769; 100%), <tt><a href="sv_talbanken-feat-VerbForm.html">VerbForm</a></tt><tt>=EMPTY</tt> (6769; 100%), <tt><a href="sv_talbanken-feat-Case.html">Case</a></tt><tt>=Nom</tt> (6752; 100%), <tt><a href="sv_talbanken-feat-Gender.html">Gender</a></tt><tt>=EMPTY</tt> (4192; 62%), <tt><a href="sv_talbanken-feat-Number.html">Number</a></tt><tt>=Sing</tt> (3546; 52%).

`ADJ` tokens may have the following values of `Degree`:

* `Cmp` (542; 8% of non-empty `Degree`): <em>större, högre, bättre, mindre, äldre, längre, lättare, lägre, yttre, svårare</em>
* `Pos` (5940; 88% of non-empty `Degree`): <em>olika, andra, nya, många, stora, stor, vissa, hela, flera, annan</em>
* `Sup` (287; 4% of non-empty `Degree`): <em>flesta, bästa, största, närmaste, högsta, viktigaste, senaste, vanligaste, störst, främsta</em>
* `EMPTY` (1730): <em>första, följande, beroende, särskild, särskilda, andra, ökad, motsvarande, liknande, ökade</em>

<table>
  <tr><th>Paradigm <i>stor</i></th><th><tt>Pos</tt></th><th><tt>Cmp</tt></th><th><tt>Sup</tt></th></tr>
  <tr><td><tt></tt></td><td></td><td><em>större</em></td><td></td></tr>
  <tr><td><tt><tt><a href="sv_talbanken-feat-Definite.html">Definite</a></tt><tt>=Def</tt></tt></td><td></td><td></td><td><em>största</em></td></tr>
  <tr><td><tt><tt><a href="sv_talbanken-feat-Definite.html">Definite</a></tt><tt>=Def</tt>|<tt><a href="sv_talbanken-feat-Gender.html">Gender</a></tt><tt>=Masc</tt>|<tt><a href="sv_talbanken-feat-Number.html">Number</a></tt><tt>=Sing</tt></tt></td><td></td><td></td><td><em>störste</em></td></tr>
  <tr><td><tt><tt><a href="sv_talbanken-feat-Definite.html">Definite</a></tt><tt>=Def</tt>|<tt><a href="sv_talbanken-feat-Number.html">Number</a></tt><tt>=Sing</tt></tt></td><td><em>stora</em></td><td></td><td></td></tr>
  <tr><td><tt><tt><a href="sv_talbanken-feat-Definite.html">Definite</a></tt><tt>=Ind</tt></tt></td><td></td><td></td><td><em>störst</em></td></tr>
  <tr><td><tt><tt><a href="sv_talbanken-feat-Definite.html">Definite</a></tt><tt>=Ind</tt>|<tt><a href="sv_talbanken-feat-Gender.html">Gender</a></tt><tt>=Com</tt>|<tt><a href="sv_talbanken-feat-Number.html">Number</a></tt><tt>=Sing</tt></tt></td><td><em>stor</em></td><td></td><td></td></tr>
  <tr><td><tt><tt><a href="sv_talbanken-feat-Definite.html">Definite</a></tt><tt>=Ind</tt>|<tt><a href="sv_talbanken-feat-Gender.html">Gender</a></tt><tt>=Neut</tt>|<tt><a href="sv_talbanken-feat-Number.html">Number</a></tt><tt>=Sing</tt></tt></td><td><em>stort</em></td><td></td><td></td></tr>
  <tr><td><tt><tt><a href="sv_talbanken-feat-Number.html">Number</a></tt><tt>=Plur</tt></tt></td><td><em>stora</em></td><td></td><td></td></tr>
</table>

`Degree` seems to be **lexical feature** of `ADJ`. 93% lemmas (1056) occur only with one value of `Degree`.

### `ADV`

1729 <tt><a href="sv_talbanken-pos-ADV.html">ADV</a></tt> tokens (25% of all `ADV` tokens) have a non-empty value of `Degree`.

`ADV` tokens may have the following values of `Degree`:

* `Cmp` (392; 23% of non-empty `Degree`): <em>mer, tidigare, mindre, vidare, mera, längre, senare, ytterligare, bättre, närmare</em>
* `Pos` (1082; 63% of non-empty `Degree`): <em>mycket, helt, ofta, länge, långt, snabbt, relativt, direkt, starkt, säkert</em>
* `Sup` (255; 15% of non-empty `Degree`): <em>mest, minst, främst, högst, helst, bäst, oftast, längst, knappast, ytterst</em>
* `EMPTY` (5307): <em>så, också, hur, där, här, nu, bara, ut, även, då</em>

<table>
  <tr><th>Paradigm <i>mycket</i></th><th><tt>Pos</tt></th><th><tt>Cmp</tt></th><th><tt>Sup</tt></th></tr>
  <tr><td><tt></tt></td><td><em>mycket</em></td><td><em>mer, mera</em></td><td><em>mest</em></td></tr>
</table>

`Degree` seems to be **lexical feature** of `ADV`. 92% lemmas (246) occur only with one value of `Degree`.

## Relations with Agreement in `Degree`

The 10 most frequent relations where parent and child node agree in `Degree`:
<tt>ADJ --[<tt><a href="sv_talbanken-dep-conj.html">conj</a></tt>]--> ADJ</tt> (244; 72%),
<tt>ADV --[<tt><a href="sv_talbanken-dep-conj.html">conj</a></tt>]--> ADV</tt> (16; 84%),
<tt>ADJ --[<tt><a href="sv_talbanken-dep-amod.html">amod</a></tt>]--> ADJ</tt> (14; 58%),
<tt>ADJ --[<tt><a href="sv_talbanken-dep-obj.html">obj</a></tt>]--> ADJ</tt> (1; 100%),
<tt>ADJ --[<tt><a href="sv_talbanken-dep-obj.html">obj</a></tt>]--> ADV</tt> (1; 100%).

