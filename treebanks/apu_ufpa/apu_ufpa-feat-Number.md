---
layout: base
title:  'Statistics of Number in UD_Apurina-UFPA'
udver: '2'
---

## Treebank Statistics: UD_Apurina-UFPA: Features: `Number`

This feature is universal.
It occurs with 2 different values: `Plur`, `Sing`.

This is a <a href="../../u/overview/feat-layers.html">layered feature</a> with the following layers: <tt><a href="apu_ufpa-feat-Number.html">Number</a></tt>, <tt><a href="apu_ufpa-feat-Number-obj.html">Number[obj]</a></tt>, <tt><a href="apu_ufpa-feat-Number-psor.html">Number[psor]</a></tt>, <tt><a href="apu_ufpa-feat-Number-subj.html">Number[subj]</a></tt>.

182 tokens (19%) have a non-empty value of `Number`.
82 types (23%) occur at least once with a non-empty value of `Number`.
63 lemmas (22%) occur at least once with a non-empty value of `Number`.
The feature is used with 3 part-of-speech tags: <tt><a href="apu_ufpa-pos-NOUN.html">NOUN</a></tt> (95; 10% instances), <tt><a href="apu_ufpa-pos-PRON.html">PRON</a></tt> (81; 8% instances), <tt><a href="apu_ufpa-pos-PROPN.html">PROPN</a></tt> (6; 1% instances).

### `NOUN`

95 <tt><a href="apu_ufpa-pos-NOUN.html">NOUN</a></tt> tokens (32% of all `NOUN` tokens) have a non-empty value of `Number`.

The most frequent other feature values with which `NOUN` and `Number` co-occurred: <tt><a href="apu_ufpa-feat-Gender.html">Gender</a></tt><tt>=Masc</tt> (84; 88%), <tt><a href="apu_ufpa-feat-Case.html">Case</a></tt><tt>=Nom</tt> (78; 82%), <tt><a href="apu_ufpa-feat-Person-psor.html">Person[psor]</a></tt><tt>=EMPTY</tt> (64; 67%), <tt><a href="apu_ufpa-feat-Number-psor.html">Number[psor]</a></tt><tt>=EMPTY</tt> (61; 64%).

`NOUN` tokens may have the following values of `Number`:

* `Plur` (7; 7% of non-empty `Number`): <em>Pupĩkaryny, Sytuwakuru, amarynyky, amarytane, imiakurykata, ypyrawakury, ũimiakury</em>
* `Sing` (88; 93% of non-empty `Number`): <em>ximaky, awiri, yky, kyky, ãkiti, ũty, nynyru, pynyru, pyry, ãputa</em>
* `EMPTY` (201): <em>iãtã, awinhi, maky, ywãtãa, aapuku, aapukutxi, kananeã, nhipukury, sytu, tiwitxi</em>

<table>
  <tr><th>Paradigm <i>sytu</i></th><th><tt>Sing</tt></th><th><tt>Plur</tt></th></tr>
  <tr><td><tt></tt></td><td></td><td><em>Sytuwakuru</em></td></tr>
  <tr><td><tt><tt><a href="apu_ufpa-feat-Possessed.html">Possessed</a></tt><tt>=No</tt></tt></td><td><em>sytu</em></td><td></td></tr>
</table>

`Number` seems to be **lexical feature** of `NOUN`. 98% lemmas (48) occur only with one value of `Number`.

### `PRON`

81 <tt><a href="apu_ufpa-pos-PRON.html">PRON</a></tt> tokens (79% of all `PRON` tokens) have a non-empty value of `Number`.

The most frequent other feature values with which `PRON` and `Number` co-occurred: <tt><a href="apu_ufpa-feat-PronType.html">PronType</a></tt><tt>=Prs</tt> (80; 99%), <tt><a href="apu_ufpa-feat-Case.html">Case</a></tt><tt>=Nom</tt> (75; 93%), <tt><a href="apu_ufpa-feat-Person.html">Person</a></tt><tt>=3</tt> (66; 81%), <tt><a href="apu_ufpa-feat-Gender.html">Gender</a></tt><tt>=Masc</tt> (41; 51%).

`PRON` tokens may have the following values of `Number`:

* `Plur` (18; 22% of non-empty `Number`): <em>nynuwa, athamunhi, Atha, Hĩthamunhi</em>
* `Sing` (63; 78% of non-empty `Number`): <em>ywa, uwa, nuta, pitha, Ywã, ywamunhi</em>
* `EMPTY` (22): <em>ykynypuku, kiripa, atha, Kerupa, Athe, Ykynyk, Ywã, pithe, ywa</em>

<table>
  <tr><th>Paradigm <i>nuta</i></th><th><tt>Sing</tt></th><th><tt>Plur</tt></th></tr>
  <tr><td><tt><tt><a href="apu_ufpa-feat-Case.html">Case</a></tt><tt>=Dat</tt></tt></td><td></td><td><em>athamunhi</em></td></tr>
  <tr><td><tt><tt><a href="apu_ufpa-feat-Case.html">Case</a></tt><tt>=Nom</tt></tt></td><td><em>nuta</em></td><td></td></tr>
</table>

### `PROPN`

6 <tt><a href="apu_ufpa-pos-PROPN.html">PROPN</a></tt> tokens (86% of all `PROPN` tokens) have a non-empty value of `Number`.

The most frequent other feature values with which `PROPN` and `Number` co-occurred: <tt><a href="apu_ufpa-feat-Case.html">Case</a></tt><tt>=Nom</tt> (6; 100%), <tt><a href="apu_ufpa-feat-Possessed.html">Possessed</a></tt><tt>=No</tt> (6; 100%), <tt><a href="apu_ufpa-feat-Gender.html">Gender</a></tt><tt>=Masc</tt> (4; 67%).

`PROPN` tokens may have the following values of `Number`:

* `Sing` (6; 100% of non-empty `Number`): <em>Kamĩkiu, Kanaiapa, Kirama, Syrywyny, Tutupary, Txiiakatxi</em>
* `EMPTY` (1): <em>Tapaua</em>

## Relations with Agreement in `Number`

The 10 most frequent relations where parent and child node agree in `Number`:
<tt>NOUN --[<tt><a href="apu_ufpa-dep-compound.html">compound</a></tt>]--> NOUN</tt> (3; 100%),
<tt>NOUN --[<tt><a href="apu_ufpa-dep-conj.html">conj</a></tt>]--> NOUN</tt> (2; 67%),
<tt>NOUN --[<tt><a href="apu_ufpa-dep-nmod-poss.html">nmod:poss</a></tt>]--> NOUN</tt> (2; 67%),
<tt>NOUN --[<tt><a href="apu_ufpa-dep-nmod.html">nmod</a></tt>]--> NOUN</tt> (2; 67%),
<tt>NOUN --[<tt><a href="apu_ufpa-dep-nsubj-cop.html">nsubj:cop</a></tt>]--> NOUN</tt> (2; 100%),
<tt>PROPN --[<tt><a href="apu_ufpa-dep-nsubj-cop.html">nsubj:cop</a></tt>]--> NOUN</tt> (2; 100%),
<tt>NOUN --[<tt><a href="apu_ufpa-dep-nmod.html">nmod</a></tt>]--> PROPN</tt> (1; 100%),
<tt>NOUN --[<tt><a href="apu_ufpa-dep-nsubj-cop.html">nsubj:cop</a></tt>]--> PROPN</tt> (1; 100%),
<tt>NOUN --[<tt><a href="apu_ufpa-dep-nsubj.html">nsubj</a></tt>]--> NOUN</tt> (1; 100%).

