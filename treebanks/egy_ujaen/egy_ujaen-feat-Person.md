---
layout: base
title:  'Statistics of Person in UD_Egyptian-UJaen'
udver: '2'
---

## Treebank Statistics: UD_Egyptian-UJaen: Features: `Person`

This feature is universal.
It occurs with 3 different values: `1`, `2`, `3`.

1386 tokens (25%) have a non-empty value of `Person`.
78 types (8%) occur at least once with a non-empty value of `Person`.
56 lemmas (9%) occur at least once with a non-empty value of `Person`.
The feature is used with 2 part-of-speech tags: <tt><a href="egy_ujaen-pos-PRON.html">PRON</a></tt> (1332; 24% instances), <tt><a href="egy_ujaen-pos-VERB.html">VERB</a></tt> (54; 1% instances).

### `PRON`

1332 <tt><a href="egy_ujaen-pos-PRON.html">PRON</a></tt> tokens (100% of all `PRON` tokens) have a non-empty value of `Person`.

The most frequent other feature values with which `PRON` and `Person` co-occurred: <tt><a href="egy_ujaen-feat-Number.html">Number</a></tt><tt>=Sing</tt> (1262; 95%), <tt><a href="egy_ujaen-feat-PronType.html">PronType</a></tt><tt>=Prs</tt> (1190; 89%), <tt><a href="egy_ujaen-feat-Gender.html">Gender</a></tt><tt>=Masc</tt> (1001; 75%).

`PRON` tokens may have the following values of `Person`:

* `1` (82; 6% of non-empty `Person`): <em>(⸗i҆), i҆nk, [(⸗i҆)], w(i҆), ⸗i҆</em>
* `2` (723; 54% of non-empty `Person`): <em>⸗k, ⸗č, čw, ⸗čn, kw, [⸗k], čwt, <⸗k>, ⸗čn(i҆), (⸗č)</em>
* `3` (527; 40% of non-empty `Person`): <em>⸗f, ⸗ś, ⸗śn, św, ś(i҆), (⸗ś), (⸗f), [⸗f], śwt, śn</em>
* `EMPTY` (1): <em>i҆w.ti҆</em>

<table>
  <tr><th>Paradigm <i>k</i></th><th><tt>2</tt></th><th><tt>3</tt></th></tr>
  <tr><td><tt><tt><a href="egy_ujaen-feat-Gender.html">Gender</a></tt><tt>=Masc</tt>|<tt><a href="egy_ujaen-feat-PronType.html">PronType</a></tt><tt>=Emp</tt></tt></td><td><em>⸗k</em></td><td></td></tr>
  <tr><td><tt><tt><a href="egy_ujaen-feat-Gender.html">Gender</a></tt><tt>=Masc</tt>|<tt><a href="egy_ujaen-feat-PronType.html">PronType</a></tt><tt>=Prs</tt></tt></td><td><em>⸗k, [⸗k], <⸗k></em></td><td><em>⸗k</em></td></tr>
  <tr><td><tt><tt><a href="egy_ujaen-feat-Gender.html">Gender</a></tt><tt>=Fem</tt>|<tt><a href="egy_ujaen-feat-PronType.html">PronType</a></tt><tt>=Prs</tt></tt></td><td><em>⸗k</em></td><td></td></tr>
</table>

`Person` seems to be **lexical feature** of `PRON`. 92% lemmas (23) occur only with one value of `Person`.

### `VERB`

54 <tt><a href="egy_ujaen-pos-VERB.html">VERB</a></tt> tokens (6% of all `VERB` tokens) have a non-empty value of `Person`.

The most frequent other feature values with which `VERB` and `Person` co-occurred: <tt><a href="egy_ujaen-feat-Mood.html">Mood</a></tt><tt>=EMPTY</tt> (49; 91%), <tt><a href="egy_ujaen-feat-Tense.html">Tense</a></tt><tt>=EMPTY</tt> (48; 89%), <tt><a href="egy_ujaen-feat-Number.html">Number</a></tt><tt>=Sing</tt> (45; 83%), <tt><a href="egy_ujaen-feat-Voice.html">Voice</a></tt><tt>=EMPTY</tt> (45; 83%).

`VERB` tokens may have the following values of `Person`:

* `2` (22; 41% of non-empty `Person`): <em>bꜣ.ti҆, śḫm.ti҆, i҆ꜥb.twn, č̣śr.t(i҆), ꜥnḫ.t(i҆), i҆i҆.t(i҆), m(w)t.ti҆, mꜣ(w).ti҆, rnpw.t(i҆), rnpw.ti҆</em>
* `3` (32; 59% of non-empty `Person`): <em>wč̣ꜣ.t(i҆), pr(.w), pr.w, č̣.y, šn(.w), [pr(.w)], i҆śšn.w, i҆ḫm.w(i҆), mḥ(.w), pr.t(i҆)</em>
* `EMPTY` (868): <em>m, i҆w.n, č̣, pr, ꜥnḫ, i҆i҆, si҆, ḥtp, ḥtm, wp</em>

<table>
  <tr><th>Paradigm <i>ḥtp</i></th><th><tt>2</tt></th><th><tt>3</tt></th></tr>
  <tr><td><tt><tt><a href="egy_ujaen-feat-Gender.html">Gender</a></tt><tt>=Masc</tt>|<tt><a href="egy_ujaen-feat-VerbForm.html">VerbForm</a></tt><tt>=Fin</tt></tt></td><td></td><td><em>ḥtp(.w)</em></td></tr>
  <tr><td><tt><tt><a href="egy_ujaen-feat-Gender.html">Gender</a></tt><tt>=Com</tt>|<tt><a href="egy_ujaen-feat-VerbForm.html">VerbForm</a></tt><tt>=Conv</tt></tt></td><td><em>ḥtp.t(i҆)</em></td><td></td></tr>
</table>

`Person` seems to be **lexical feature** of `VERB`. 94% lemmas (29) occur only with one value of `Person`.

## Relations with Agreement in `Person`

The 10 most frequent relations where parent and child node agree in `Person`:
<tt>VERB --[<tt><a href="egy_ujaen-dep-conj.html">conj</a></tt>]--> VERB</tt> (10; 100%).

