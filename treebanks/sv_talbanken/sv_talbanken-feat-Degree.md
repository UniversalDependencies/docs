---
layout: base
title:  'Statistics of Degree in UD_Swedish-Talbanken'
udver: '2'
---

## Treebank Statistics: UD_Swedish-Talbanken: Features: `Degree`

This feature is universal.
It occurs with 3 different values: `Cmp`, `Pos`, `Sup`.

10187 tokens (11%) have a non-empty value of `Degree`.
2977 types (20%) occur at least once with a non-empty value of `Degree`.
1907 lemmas (18%) occur at least once with a non-empty value of `Degree`.
The feature is used with 2 part-of-speech tags: <tt><a href="sv_talbanken-pos-ADJ.html">ADJ</a></tt> (8477; 9% instances), <tt><a href="sv_talbanken-pos-ADV.html">ADV</a></tt> (1710; 2% instances).

### `ADJ`

8477 <tt><a href="sv_talbanken-pos-ADJ.html">ADJ</a></tt> tokens (98% of all `ADJ` tokens) have a non-empty value of `Degree`.

The most frequent other feature values with which `ADJ` and `Degree` co-occurred: <tt><a href="sv_talbanken-feat-Case.html">Case</a></tt><tt>=Nom</tt> (8441; 100%), <tt><a href="sv_talbanken-feat-Tense.html">Tense</a></tt><tt>=EMPTY</tt> (7197; 85%), <tt><a href="sv_talbanken-feat-VerbForm.html">VerbForm</a></tt><tt>=EMPTY</tt> (7197; 85%), <tt><a href="sv_talbanken-feat-Gender.html">Gender</a></tt><tt>=EMPTY</tt> (5482; 65%), <tt><a href="sv_talbanken-feat-Definite.html">Definite</a></tt><tt>=Ind</tt> (5026; 59%).

`ADJ` tokens may have the following values of `Degree`:

* `Cmp` (529; 6% of non-empty `Degree`): <em>större, högre, bättre, mindre, äldre, längre, lättare, lägre, svårare, tidigare</em>
* `Pos` (7660; 90% of non-empty `Degree`): <em>olika, andra, nya, många, stora, stor, samma, vissa, hela, flera</em>
* `Sup` (288; 3% of non-empty `Degree`): <em>flesta, bästa, största, närmaste, högsta, viktigaste, senaste, vanligaste, störst, främsta</em>
* `EMPTY` (194): <em>första, s k, s.k., andra, tredje, fjärde, femte, III, S:t, ev</em>

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

`Degree` seems to be **lexical feature** of `ADJ`. 96% lemmas (1737) occur only with one value of `Degree`.

### `ADV`

1710 <tt><a href="sv_talbanken-pos-ADV.html">ADV</a></tt> tokens (25% of all `ADV` tokens) have a non-empty value of `Degree`.

`ADV` tokens may have the following values of `Degree`:

* `Cmp` (386; 23% of non-empty `Degree`): <em>mer, tidigare, mindre, mera, längre, senare, vidare, ytterligare, bättre, närmare</em>
* `Pos` (1070; 63% of non-empty `Degree`): <em>mycket, helt, ofta, länge, långt, snabbt, relativt, direkt, starkt, säkert</em>
* `Sup` (254; 15% of non-empty `Degree`): <em>mest, minst, främst, högst, helst, bäst, oftast, längst, knappast, ytterst</em>
* `EMPTY` (5231): <em>också, så, hur, där, här, nu, bara, ut, även, då</em>

<table>
  <tr><th>Paradigm <i>mycket</i></th><th><tt>Pos</tt></th><th><tt>Cmp</tt></th><th><tt>Sup</tt></th></tr>
  <tr><td><tt></tt></td><td><em>mycket</em></td><td><em>mer, mera</em></td><td><em>mest</em></td></tr>
</table>

`Degree` seems to be **lexical feature** of `ADV`. 92% lemmas (245) occur only with one value of `Degree`.

## Relations with Agreement in `Degree`

The 10 most frequent relations where parent and child node agree in `Degree`:
<tt>ADJ --[<tt><a href="sv_talbanken-dep-conj.html">conj</a></tt>]--> ADJ</tt> (355; 94%),
<tt>ADV --[<tt><a href="sv_talbanken-dep-conj.html">conj</a></tt>]--> ADV</tt> (35; 78%),
<tt>ADJ --[<tt><a href="sv_talbanken-dep-amod.html">amod</a></tt>]--> ADJ</tt> (26; 84%),
<tt>ADJ --[<tt><a href="sv_talbanken-dep-advcl.html">advcl</a></tt>]--> ADJ</tt> (22; 88%),
<tt>ADJ --[<tt><a href="sv_talbanken-dep-advmod.html">advmod</a></tt>]--> ADJ</tt> (22; 73%),
<tt>ADJ --[<tt><a href="sv_talbanken-dep-nsubj.html">nsubj</a></tt>]--> ADJ</tt> (12; 67%),
<tt>ADJ --[<tt><a href="sv_talbanken-dep-obl.html">obl</a></tt>]--> ADJ</tt> (9; 64%),
<tt>ADV --[<tt><a href="sv_talbanken-dep-advcl.html">advcl</a></tt>]--> ADJ</tt> (7; 58%),
<tt>ADJ --[<tt><a href="sv_talbanken-dep-xcomp.html">xcomp</a></tt>]--> ADJ</tt> (3; 100%),
<tt>ADJ --[<tt><a href="sv_talbanken-dep-acl-relcl.html">acl:relcl</a></tt>]--> ADJ</tt> (1; 100%).

