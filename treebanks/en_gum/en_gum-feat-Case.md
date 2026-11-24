---
layout: base
title:  'Statistics of Case in UD_English-GUM'
udver: '2'
---

## Treebank Statistics: UD_English-GUM: Features: `Case`

This feature is universal.
It occurs with 3 different values: `Acc`, `Gen`, `Nom`.

17909 tokens (7%) have a non-empty value of `Case`.
75 types (0%) occur at least once with a non-empty value of `Case`.
32 lemmas (0%) occur at least once with a non-empty value of `Case`.
The feature is used with 1 part-of-speech tags: <tt><a href="en_gum-pos-PRON.html">PRON</a></tt> (17909; 7% instances).

### `PRON`

17909 <tt><a href="en_gum-pos-PRON.html">PRON</a></tt> tokens (81% of all `PRON` tokens) have a non-empty value of `Case`.

The most frequent other feature values with which `PRON` and `Case` co-occurred: <tt><a href="en_gum-feat-PronType.html">PronType</a></tt><tt>=Prs</tt> (16798; 94%), <tt><a href="en_gum-feat-Poss.html">Poss</a></tt><tt>=EMPTY</tt> (14439; 81%), <tt><a href="en_gum-feat-Number.html">Number</a></tt><tt>=Sing</tt> (12570; 70%), <tt><a href="en_gum-feat-Gender.html">Gender</a></tt><tt>=EMPTY</tt> (12316; 69%).

`PRON` tokens may have the following values of `Case`:

* `Acc` (3381; 19% of non-empty `Case`): <em>it, what, you, me, them, us, him, her, 's, itself</em>
* `Gen` (3466; 19% of non-empty `Case`): <em>your, his, my, our, their, its, her, whose, it's, he</em>
* `Nom` (11062; 62% of non-empty `Case`): <em>i, you, it, we, they, he, she, who, what, him</em>
* `EMPTY` (4073): <em>that, this, which, there, something, those, everything, anything, these, one</em>

<table>
  <tr><th>Paradigm <i>I</i></th><th><tt>Nom</tt></th><th><tt>Acc</tt></th></tr>
  <tr><td><tt></tt></td><td><em>i, me</em></td><td><em>me</em></td></tr>
  <tr><td><tt><tt><a href="en_gum-feat-Typo.html">Typo</a></tt><tt>=Yes</tt></tt></td><td><em>i</em></td><td></td></tr>
</table>

## Relations with Agreement in `Case`

The 10 most frequent relations where parent and child node agree in `Case`:
<tt>PRON --[<tt><a href="en_gum-dep-reparandum.html">reparandum</a></tt>]--> PRON</tt> (40; 73%),
<tt>PRON --[<tt><a href="en_gum-dep-conj.html">conj</a></tt>]--> PRON</tt> (26; 87%),
<tt>PRON --[<tt><a href="en_gum-dep-appos.html">appos</a></tt>]--> PRON</tt> (3; 75%),
<tt>PRON --[<tt><a href="en_gum-dep-parataxis.html">parataxis</a></tt>]--> PRON</tt> (3; 75%),
<tt>PRON --[<tt><a href="en_gum-dep-obl.html">obl</a></tt>]--> PRON</tt> (2; 100%).

