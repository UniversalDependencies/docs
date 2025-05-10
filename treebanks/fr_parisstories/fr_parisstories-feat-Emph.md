---
layout: base
title:  'Statistics of Emph in UD_French-ParisStories'
udver: '2'
---

## Treebank Statistics: UD_French-ParisStories: Features: `Emph`

This feature is language-specific.
It occurs with 2 different values: `No`, `Yes`.

3225 tokens (8%) have a non-empty value of `Emph`.
24 types (1%) occur at least once with a non-empty value of `Emph`.
5 lemmas (0%) occur at least once with a non-empty value of `Emph`.
The feature is used with 1 part-of-speech tags: <tt><a href="fr_parisstories-pos-PRON.html">PRON</a></tt> (3225; 8% instances).

### `PRON`

3225 <tt><a href="fr_parisstories-pos-PRON.html">PRON</a></tt> tokens (50% of all `PRON` tokens) have a non-empty value of `Emph`.

The most frequent other feature values with which `PRON` and `Emph` co-occurred: <tt><a href="fr_parisstories-feat-PronType.html">PronType</a></tt><tt>=Prs</tt> (3225; 100%), <tt><a href="fr_parisstories-feat-Number.html">Number</a></tt><tt>=Sing</tt> (3048; 95%), <tt><a href="fr_parisstories-feat-Gender.html">Gender</a></tt><tt>=EMPTY</tt> (2005; 62%).

`PRON` tokens may have the following values of `Emph`:

* `No` (2995; 93% of non-empty `Emph`): <em>je, il, j', elle, tu, me, m', ils, l', lui</em>
* `Yes` (230; 7% of non-empty `Emph`): <em>moi, lui, elle, toi, eux, soi, -moi, elles</em>

<table>
  <tr><th>Paradigm <i>moi</i></th><th><tt>No</tt></th><th><tt>Yes</tt></th></tr>
  <tr><td><tt><tt><a href="fr_parisstories-feat-ExtPos.html">ExtPos</a></tt><tt>=VERB</tt>|<tt><a href="fr_parisstories-feat-Person.html">Person</a></tt><tt>=1</tt></tt></td><td><em>me</em></td><td></td></tr>
  <tr><td><tt><tt><a href="fr_parisstories-feat-Gender.html">Gender</a></tt><tt>=Masc</tt>|<tt><a href="fr_parisstories-feat-Person.html">Person</a></tt><tt>=1</tt></tt></td><td><em>m'</em></td><td></td></tr>
  <tr><td><tt><tt><a href="fr_parisstories-feat-Gender.html">Gender</a></tt><tt>=Masc</tt>|<tt><a href="fr_parisstories-feat-Person.html">Person</a></tt><tt>=3</tt></tt></td><td><em>j'</em></td><td><em>moi</em></td></tr>
  <tr><td><tt><tt><a href="fr_parisstories-feat-Person.html">Person</a></tt><tt>=1</tt></tt></td><td><em>je, j', me, m'</em></td><td><em>moi, -moi</em></td></tr>
  <tr><td><tt><tt><a href="fr_parisstories-feat-Person.html">Person</a></tt><tt>=1</tt>|<tt><a href="fr_parisstories-feat-Reflex.html">Reflex</a></tt><tt>=Yes</tt></tt></td><td><em>me, m'</em></td><td></td></tr>
</table>

## Relations with Agreement in `Emph`

The 10 most frequent relations where parent and child node agree in `Emph`:
<tt>PRON --[<tt><a href="fr_parisstories-dep-reparandum.html">reparandum</a></tt>]--> PRON</tt> (52; 83%),
<tt>PRON --[<tt><a href="fr_parisstories-dep-conj.html">conj</a></tt>]--> PRON</tt> (4; 80%),
<tt>PRON --[<tt><a href="fr_parisstories-dep-dep.html">dep</a></tt>]--> PRON</tt> (3; 60%),
<tt>PRON --[<tt><a href="fr_parisstories-dep-obj.html">obj</a></tt>]--> PRON</tt> (2; 67%).

