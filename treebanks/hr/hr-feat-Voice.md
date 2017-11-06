---
layout: base
title:  'Statistics of Voice in UD_Croatian'
udver: '2'
---

## Treebank Statistics: UD_Croatian: Features: `Voice`

This feature is universal.
It occurs with 2 different values: `Act`, `Pass`.

7594 tokens (4%) have a non-empty value of `Voice`.
2886 types (8%) occur at least once with a non-empty value of `Voice`.
1264 lemmas (7%) occur at least once with a non-empty value of `Voice`.
The feature is used with 3 part-of-speech tags: <tt><a href="hr-pos-VERB.html">VERB</a></tt> (6021; 3% instances), <tt><a href="hr-pos-ADJ.html">ADJ</a></tt> (928; 0% instances), <tt><a href="hr-pos-AUX.html">AUX</a></tt> (645; 0% instances).

### `VERB`

6021 <tt><a href="hr-pos-VERB.html">VERB</a></tt> tokens (35% of all `VERB` tokens) have a non-empty value of `Voice`.

The most frequent other feature values with which `VERB` and `Voice` co-occurred: <tt><a href="hr-feat-Mood.html">Mood</a></tt><tt>=EMPTY</tt> (6021; 100%), <tt><a href="hr-feat-Person.html">Person</a></tt><tt>=EMPTY</tt> (6021; 100%), <tt><a href="hr-feat-Tense.html">Tense</a></tt><tt>=Past</tt> (6021; 100%), <tt><a href="hr-feat-VerbForm.html">VerbForm</a></tt><tt>=Part</tt> (6021; 100%), <tt><a href="hr-feat-Number.html">Number</a></tt><tt>=Sing</tt> (4356; 72%), <tt><a href="hr-feat-Gender.html">Gender</a></tt><tt>=Masc</tt> (3788; 63%).

`VERB` tokens may have the following values of `Voice`:

* `Act` (6021; 100% of non-empty `Voice`): <em>izjavio, rekao, kazao, mogli, dodao, mogla, moglo, mogao, trebala, dobili</em>
* `EMPTY` (11225): <em>može, ima, kaže, treba, mogu, nema, mora, postoji, možete, imaju</em>

`Voice` seems to be **lexical feature** of `VERB`. 100% lemmas (1155) occur only with one value of `Voice`.

### `ADJ`

928 <tt><a href="hr-pos-ADJ.html">ADJ</a></tt> tokens (4% of all `ADJ` tokens) have a non-empty value of `Voice`.

The most frequent other feature values with which `ADJ` and `Voice` co-occurred: <tt><a href="hr-feat-Degree.html">Degree</a></tt><tt>=Pos</tt> (928; 100%), <tt><a href="hr-feat-Case.html">Case</a></tt><tt>=Nom</tt> (921; 99%), <tt><a href="hr-feat-Number.html">Number</a></tt><tt>=Sing</tt> (707; 76%), <tt><a href="hr-feat-Definite.html">Definite</a></tt><tt>=EMPTY</tt> (579; 62%).

`ADJ` tokens may have the following values of `Voice`:

* `Pass` (928; 100% of non-empty `Voice`): <em>održana, otvorena, održano, otvoren, postignut, povećana, ubijen, pronađeno, provedena, uhićen</em>
* `EMPTY` (22554): <em>novi, prvi, drugi, vanjskih, glavni, novih, nove, prošle, hrvatski, novog</em>

`Voice` seems to be **lexical feature** of `ADJ`. 100% lemmas (363) occur only with one value of `Voice`.

### `AUX`

645 <tt><a href="hr-pos-AUX.html">AUX</a></tt> tokens (5% of all `AUX` tokens) have a non-empty value of `Voice`.

The most frequent other feature values with which `AUX` and `Voice` co-occurred: <tt><a href="hr-feat-Mood.html">Mood</a></tt><tt>=EMPTY</tt> (645; 100%), <tt><a href="hr-feat-Person.html">Person</a></tt><tt>=EMPTY</tt> (645; 100%), <tt><a href="hr-feat-Tense.html">Tense</a></tt><tt>=Past</tt> (645; 100%), <tt><a href="hr-feat-VerbForm.html">VerbForm</a></tt><tt>=Part</tt> (645; 100%), <tt><a href="hr-feat-Number.html">Number</a></tt><tt>=Sing</tt> (522; 81%).

`AUX` tokens may have the following values of `Voice`:

* `Act` (645; 100% of non-empty `Voice`): <em>bio, bilo, bila, bili, bile</em>
* `EMPTY` (11813): <em>je, su, će, bi, biti, nije, smo, sam, neće, nisu</em>

## Relations with Agreement in `Voice`

The 10 most frequent relations where parent and child node agree in `Voice`:
<tt>VERB --[<tt><a href="hr-dep-conj.html">conj</a></tt>]--> VERB</tt> (510; 67%),
<tt>VERB --[<tt><a href="hr-dep-advmod.html">advmod</a></tt>]--> VERB</tt> (6; 67%),
<tt>AUX --[<tt><a href="hr-dep-conj.html">conj</a></tt>]--> AUX</tt> (5; 63%),
<tt>AUX --[<tt><a href="hr-dep-advcl.html">advcl</a></tt>]--> VERB</tt> (4; 67%),
<tt>ADJ --[<tt><a href="hr-dep-csubj-pass.html">csubj:pass</a></tt>]--> ADJ</tt> (2; 67%),
<tt>AUX --[<tt><a href="hr-dep-iobj.html">iobj</a></tt>]--> VERB</tt> (1; 100%).

