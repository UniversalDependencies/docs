---
layout: base
title:  'Statistics of Degree in UD_Swedish-Talbanken'
udver: '2'
---

## Treebank Statistics: UD_Swedish-Talbanken: Features: `Degree`

This feature is universal.
It occurs with 3 different values: `Cmp`, `Pos`, `Sup`.

10072 tokens (10%) have a non-empty value of `Degree`.
2961 types (20%) occur at least once with a non-empty value of `Degree`.
1922 lemmas (18%) occur at least once with a non-empty value of `Degree`.
The feature is used with 2 part-of-speech tags: <tt><a href="sv_talbanken-pos-ADJ.html">ADJ</a></tt> (8330; 9% instances), <tt><a href="sv_talbanken-pos-ADV.html">ADV</a></tt> (1742; 2% instances).

### `ADJ`

8330 <tt><a href="sv_talbanken-pos-ADJ.html">ADJ</a></tt> tokens (97% of all `ADJ` tokens) have a non-empty value of `Degree`.

The most frequent other feature values with which `ADJ` and `Degree` co-occurred: <tt><a href="sv_talbanken-feat-Case.html">Case</a></tt><tt>=Nom</tt> (8307; 100%), <tt><a href="sv_talbanken-feat-Tense.html">Tense</a></tt><tt>=EMPTY</tt> (7063; 85%), <tt><a href="sv_talbanken-feat-VerbForm.html">VerbForm</a></tt><tt>=EMPTY</tt> (7063; 85%), <tt><a href="sv_talbanken-feat-Gender.html">Gender</a></tt><tt>=EMPTY</tt> (5396; 65%), <tt><a href="sv_talbanken-feat-Definite.html">Definite</a></tt><tt>=Ind</tt> (5114; 61%).

`ADJ` tokens may have the following values of `Degree`:

* `Cmp` (604; 7% of non-empty `Degree`): <em>större, flera, högre, bättre, mindre, fler, äldre, längre, lättare, lägre</em>
* `Pos` (7467; 90% of non-empty `Degree`): <em>olika, andra, nya, många, stora, stor, samma, vissa, hela, annan</em>
* `Sup` (259; 3% of non-empty `Degree`): <em>flesta, bästa, största, närmaste, högsta, viktigaste, senaste, vanligaste, störst, främsta</em>
* `EMPTY` (218): <em>första, s k, andra, s.k., tredje, fjärde, femte, European, III, S:t</em>

<table>
  <tr><th>Paradigm <i>stor</i></th><th><tt>Pos</tt></th><th><tt>Cmp</tt></th><th><tt>Sup</tt></th></tr>
  <tr><td><tt></tt></td><td><em>stort</em></td><td><em>större</em></td><td></td></tr>
  <tr><td><tt><tt><a href="sv_talbanken-feat-Definite.html">Definite</a></tt><tt>=Def</tt></tt></td><td><em>stora</em></td><td></td><td><em>största</em></td></tr>
  <tr><td><tt><tt><a href="sv_talbanken-feat-Definite.html">Definite</a></tt><tt>=Def</tt>|<tt><a href="sv_talbanken-feat-Gender.html">Gender</a></tt><tt>=Com</tt></tt></td><td></td><td></td><td><em>störste</em></td></tr>
  <tr><td><tt><tt><a href="sv_talbanken-feat-Definite.html">Definite</a></tt><tt>=Ind</tt></tt></td><td></td><td></td><td><em>störst</em></td></tr>
  <tr><td><tt><tt><a href="sv_talbanken-feat-Definite.html">Definite</a></tt><tt>=Ind</tt>|<tt><a href="sv_talbanken-feat-Gender.html">Gender</a></tt><tt>=Com</tt>|<tt><a href="sv_talbanken-feat-Number.html">Number</a></tt><tt>=Sing</tt></tt></td><td><em>stor</em></td><td></td><td></td></tr>
  <tr><td><tt><tt><a href="sv_talbanken-feat-Definite.html">Definite</a></tt><tt>=Ind</tt>|<tt><a href="sv_talbanken-feat-Gender.html">Gender</a></tt><tt>=Neut</tt>|<tt><a href="sv_talbanken-feat-Number.html">Number</a></tt><tt>=Sing</tt></tt></td><td><em>stort</em></td><td></td><td></td></tr>
  <tr><td><tt><tt><a href="sv_talbanken-feat-Definite.html">Definite</a></tt><tt>=Ind</tt>|<tt><a href="sv_talbanken-feat-Number.html">Number</a></tt><tt>=Plur</tt></tt></td><td><em>stora</em></td><td></td><td></td></tr>
</table>

`Degree` seems to be **lexical feature** of `ADJ`. 96% lemmas (1712) occur only with one value of `Degree`.

### `ADV`

1742 <tt><a href="sv_talbanken-pos-ADV.html">ADV</a></tt> tokens (25% of all `ADV` tokens) have a non-empty value of `Degree`.

`ADV` tokens may have the following values of `Degree`:

* `Cmp` (369; 21% of non-empty `Degree`): <em>mer, tidigare, mindre, mera, längre, senare, vidare, ytterligare, närmare, bättre</em>
* `Pos` (1111; 64% of non-empty `Degree`): <em>mycket, helt, ofta, länge, långt, snabbt, relativt, direkt, bra, starkt</em>
* `Sup` (262; 15% of non-empty `Degree`): <em>mest, minst, främst, högst, helst, bäst, oftast, längst, knappast, ytterst</em>
* `EMPTY` (5232): <em>också, så, hur, där, här, nu, bara, ut, även, då</em>

<table>
  <tr><th>Paradigm <i>mycket</i></th><th><tt>Pos</tt></th><th><tt>Cmp</tt></th><th><tt>Sup</tt></th></tr>
  <tr><td><tt></tt></td><td><em>mycket</em></td><td><em>mer, mera</em></td><td><em>mest</em></td></tr>
</table>

`Degree` seems to be **lexical feature** of `ADV`. 92% lemmas (290) occur only with one value of `Degree`.

## Relations with Agreement in `Degree`

The 10 most frequent relations where parent and child node agree in `Degree`:
<tt>ADJ --[<tt><a href="sv_talbanken-dep-conj.html">conj</a></tt>]--> ADJ</tt> (350; 94%),
<tt>ADV --[<tt><a href="sv_talbanken-dep-conj.html">conj</a></tt>]--> ADV</tt> (36; 78%),
<tt>ADJ --[<tt><a href="sv_talbanken-dep-amod.html">amod</a></tt>]--> ADJ</tt> (23; 77%),
<tt>ADJ --[<tt><a href="sv_talbanken-dep-advcl.html">advcl</a></tt>]--> ADJ</tt> (20; 83%),
<tt>ADJ --[<tt><a href="sv_talbanken-dep-nsubj.html">nsubj</a></tt>]--> ADJ</tt> (12; 80%),
<tt>ADJ --[<tt><a href="sv_talbanken-dep-obl.html">obl</a></tt>]--> ADJ</tt> (11; 69%),
<tt>ADV --[<tt><a href="sv_talbanken-dep-advcl.html">advcl</a></tt>]--> ADJ</tt> (7; 54%),
<tt>ADJ --[<tt><a href="sv_talbanken-dep-xcomp.html">xcomp</a></tt>]--> ADJ</tt> (3; 100%),
<tt>ADJ --[<tt><a href="sv_talbanken-dep-acl-relcl.html">acl:relcl</a></tt>]--> ADJ</tt> (1; 100%),
<tt>ADJ --[<tt><a href="sv_talbanken-dep-acl.html">acl</a></tt>]--> ADJ</tt> (1; 100%).

