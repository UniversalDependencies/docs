---
layout: base
title:  'Statistics of Case in UD_French-ParisStories'
udver: '2'
---

## Treebank Statistics: UD_French-ParisStories: Features: `Case`

This feature is universal.
It occurs with 3 different values: `Acc`, `Dat`, `Nom`.

3818 tokens (9%) have a non-empty value of `Case`.
23 types (1%) occur at least once with a non-empty value of `Case`.
6 lemmas (0%) occur at least once with a non-empty value of `Case`.
The feature is used with 1 part-of-speech tags: <tt><a href="fr_parisstories-pos-PRON.html">PRON</a></tt> (3818; 9% instances).

### `PRON`

3818 <tt><a href="fr_parisstories-pos-PRON.html">PRON</a></tt> tokens (60% of all `PRON` tokens) have a non-empty value of `Case`.

The most frequent other feature values with which `PRON` and `Case` co-occurred: <tt><a href="fr_parisstories-feat-Emph.html">Emph</a></tt><tt>=No</tt> (3818; 100%), <tt><a href="fr_parisstories-feat-Number.html">Number</a></tt><tt>=Sing</tt> (3493; 91%), <tt><a href="fr_parisstories-feat-PronType.html">PronType</a></tt><tt>=Prs</tt> (3077; 81%), <tt><a href="fr_parisstories-feat-Person.html">Person</a></tt><tt>=3</tt> (2009; 53%), <tt><a href="fr_parisstories-feat-Gender.html">Gender</a></tt><tt>=EMPTY</tt> (2004; 52%).

`PRON` tokens may have the following values of `Case`:

* `Acc` (364; 10% of non-empty `Case`): <em>l', nous, le, m', me, les, te, la, t', vous</em>
* `Dat` (283; 7% of non-empty `Case`): <em>me, lui, m', nous, leur, te, t', vous</em>
* `Nom` (3171; 83% of non-empty `Case`): <em>on, je, il, j', elle, tu, ils, vous, nous, elles</em>
* `EMPTY` (2557): <em>c', ça, y, qui, moi, s', se, ce, que, me</em>

<table>
  <tr><th>Paradigm <i>moi</i></th><th><tt>Nom</tt></th><th><tt>Acc</tt></th><th><tt>Dat</tt></th></tr>
  <tr><td><tt><tt><a href="fr_parisstories-feat-Person.html">Person</a></tt><tt>=1</tt></tt></td><td><em>je, j'</em></td><td><em>m', me</em></td><td><em>me, m'</em></td></tr>
  <tr><td><tt><tt><a href="fr_parisstories-feat-Person.html">Person</a></tt><tt>=1</tt>|<tt><a href="fr_parisstories-feat-Reflex.html">Reflex</a></tt><tt>=Yes</tt></tt></td><td></td><td><em>me</em></td><td><em>me, m'</em></td></tr>
  <tr><td><tt><tt><a href="fr_parisstories-feat-Person.html">Person</a></tt><tt>=3</tt></tt></td><td><em>j'</em></td><td></td><td></td></tr>
</table>

## Relations with Agreement in `Case`

The 10 most frequent relations where parent and child node agree in `Case`:
<tt>PRON --[<tt><a href="fr_parisstories-dep-reparandum.html">reparandum</a></tt>]--> PRON</tt> (55; 68%),
<tt>PRON --[<tt><a href="fr_parisstories-dep-conj.html">conj</a></tt>]--> PRON</tt> (2; 67%).

