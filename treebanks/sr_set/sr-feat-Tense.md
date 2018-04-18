---
layout: base
title:  'Statistics of Tense in UD_Serbian'
udver: '2'
---

## Treebank Statistics: UD_Serbian: Features: `Tense`

This feature is universal.
It occurs with 3 different values: `Fut`, `Past`, `Pres`.

8939 tokens (10%) have a non-empty value of `Tense`.
1377 types (8%) occur at least once with a non-empty value of `Tense`.
812 lemmas (9%) occur at least once with a non-empty value of `Tense`.
The feature is used with 2 part-of-speech tags: <tt><a href="sr-pos-AUX.html">AUX</a></tt> (5162; 6% instances), <tt><a href="sr-pos-VERB.html">VERB</a></tt> (3777; 4% instances).

### `AUX`

5162 <tt><a href="sr-pos-AUX.html">AUX</a></tt> tokens (93% of all `AUX` tokens) have a non-empty value of `Tense`.

The most frequent other feature values with which `AUX` and `Tense` co-occurred: <tt><a href="sr-feat-Person.html">Person</a></tt><tt>=3</tt> (5016; 97%), <tt><a href="sr-feat-Number.html">Number</a></tt><tt>=Sing</tt> (3954; 77%).

`AUX` tokens may have the following values of `Tense`:

* `Fut` (34; 1% of non-empty `Tense`): <em>biće, Bićemo</em>
* `Past` (357; 7% of non-empty `Tense`): <em>bi, bih, bismo</em>
* `Pres` (4771; 92% of non-empty `Tense`): <em>je, su, će, nije, bude, smo, neće, nisu, sam, budu</em>
* `EMPTY` (397): <em>biti, bio, bila, bilo, bili, bile, Hajde</em>

<table>
  <tr><th>Paradigm <i>biti</i></th><th><tt>Pres</tt></th><th><tt>Fut</tt></th><th><tt>Past</tt></th></tr>
  <tr><td><tt><tt><a href="sr-feat-Number.html">Number</a></tt><tt>=Sing</tt>|<tt><a href="sr-feat-Person.html">Person</a></tt><tt>=1</tt></tt></td><td><em>sam, nisam, jesam</em></td><td></td><td><em>bih</em></td></tr>
  <tr><td><tt><tt><a href="sr-feat-Number.html">Number</a></tt><tt>=Sing</tt>|<tt><a href="sr-feat-Person.html">Person</a></tt><tt>=3</tt></tt></td><td><em>je, nije, bude, jeste, biće, za, su</em></td><td><em>biće</em></td><td><em>bi</em></td></tr>
  <tr><td><tt><tt><a href="sr-feat-Number.html">Number</a></tt><tt>=Plur</tt>|<tt><a href="sr-feat-Person.html">Person</a></tt><tt>=1</tt></tt></td><td><em>smo, nismo, budemo</em></td><td><em>Bićemo</em></td><td><em>bismo</em></td></tr>
  <tr><td><tt><tt><a href="sr-feat-Number.html">Number</a></tt><tt>=Plur</tt>|<tt><a href="sr-feat-Person.html">Person</a></tt><tt>=2</tt></tt></td><td><em>ste, jeste</em></td><td></td><td></td></tr>
  <tr><td><tt><tt><a href="sr-feat-Number.html">Number</a></tt><tt>=Plur</tt>|<tt><a href="sr-feat-Person.html">Person</a></tt><tt>=3</tt></tt></td><td><em>su, nisu, budu, Nišu</em></td><td><em>biće</em></td><td><em>bi</em></td></tr>
</table>

### `VERB`

3777 <tt><a href="sr-pos-VERB.html">VERB</a></tt> tokens (51% of all `VERB` tokens) have a non-empty value of `Tense`.

The most frequent other feature values with which `VERB` and `Tense` co-occurred: <tt><a href="sr-feat-Gender.html">Gender</a></tt><tt>=EMPTY</tt> (3777; 100%), <tt><a href="sr-feat-VerbForm.html">VerbForm</a></tt><tt>=EMPTY</tt> (3777; 100%), <tt><a href="sr-feat-Person.html">Person</a></tt><tt>=3</tt> (3475; 92%), <tt><a href="sr-feat-Number.html">Number</a></tt><tt>=Sing</tt> (2395; 63%).

`VERB` tokens may have the following values of `Tense`:

* `Fut` (99; 3% of non-empty `Tense`): <em>biće, doneće, imaće, moraće, predstavljaće, dobiće, otvoriće, zavisiće, Ostvarićemo, Preduzećemo</em>
* `Past` (1; 0% of non-empty `Tense`): <em>dogodi</em>
* `Pres` (3677; 97% of non-empty `Tense`): <em>kaže, ima, mora, može, treba, navodi, mogu, kažu, očekuje, postoji</em>
* `EMPTY` (3653): <em>rekao, izjavio, trebalo, rekla, dodao, mogla, saopštila, sastao, pozvao, dobila</em>

<table>
  <tr><th>Paradigm <i>imati</i></th><th><tt>Pres</tt></th><th><tt>Fut</tt></th></tr>
  <tr><td><tt><tt><a href="sr-feat-Number.html">Number</a></tt><tt>=Sing</tt>|<tt><a href="sr-feat-Person.html">Person</a></tt><tt>=1</tt></tt></td><td><em>imam</em></td><td></td></tr>
  <tr><td><tt><tt><a href="sr-feat-Number.html">Number</a></tt><tt>=Sing</tt>|<tt><a href="sr-feat-Person.html">Person</a></tt><tt>=3</tt></tt></td><td><em>ima</em></td><td><em>imaće</em></td></tr>
  <tr><td><tt><tt><a href="sr-feat-Number.html">Number</a></tt><tt>=Plur</tt>|<tt><a href="sr-feat-Person.html">Person</a></tt><tt>=1</tt></tt></td><td><em>imamo</em></td><td></td></tr>
  <tr><td><tt><tt><a href="sr-feat-Number.html">Number</a></tt><tt>=Plur</tt>|<tt><a href="sr-feat-Person.html">Person</a></tt><tt>=2</tt></tt></td><td><em>imate</em></td><td></td></tr>
  <tr><td><tt><tt><a href="sr-feat-Number.html">Number</a></tt><tt>=Plur</tt>|<tt><a href="sr-feat-Person.html">Person</a></tt><tt>=3</tt></tt></td><td><em>imaju</em></td><td><em>imaće</em></td></tr>
</table>

`Tense` seems to be **lexical feature** of `VERB`. 93% lemmas (756) occur only with one value of `Tense`.

## Relations with Agreement in `Tense`

The 10 most frequent relations where parent and child node agree in `Tense`:
<tt>VERB --[<tt><a href="sr-dep-conj.html">conj</a></tt>]--> VERB</tt> (247; 70%),
<tt>AUX --[<tt><a href="sr-dep-ccomp.html">ccomp</a></tt>]--> VERB</tt> (22; 85%),
<tt>AUX --[<tt><a href="sr-dep-conj.html">conj</a></tt>]--> VERB</tt> (9; 69%),
<tt>VERB --[<tt><a href="sr-dep-conj.html">conj</a></tt>]--> AUX</tt> (4; 100%),
<tt>AUX --[<tt><a href="sr-dep-xcomp.html">xcomp</a></tt>]--> VERB</tt> (2; 100%),
<tt>VERB --[<tt><a href="sr-dep-obj.html">obj</a></tt>]--> AUX</tt> (2; 100%),
<tt>AUX --[<tt><a href="sr-dep-conj.html">conj</a></tt>]--> AUX</tt> (1; 100%).

