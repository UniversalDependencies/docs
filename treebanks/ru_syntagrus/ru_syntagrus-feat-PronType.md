---
layout: base
title:  'Statistics of PronType in UD_Russian-SynTagRus'
udver: '2'
---

## Treebank Statistics: UD_Russian-SynTagRus: Features: `PronType`

This feature is universal.
It occurs with 7 different values: `Dem`, `Ind`, `Int`, `Neg`, `Prs`, `Rel`, `Tot`.
Some words have combined values of the feature; 1 combinations have been observed: `Int|Rel`.

76863 tokens (5%) have a non-empty value of `PronType`.
608 types (0%) occur at least once with a non-empty value of `PronType`.
57 lemmas (0%) occur at least once with a non-empty value of `PronType`.
The feature is used with 2 part-of-speech tags: <tt><a href="ru_syntagrus-pos-PRON.html">PRON</a></tt> (49057; 3% instances), <tt><a href="ru_syntagrus-pos-DET.html">DET</a></tt> (27806; 2% instances).

### `PRON`

49057 <tt><a href="ru_syntagrus-pos-PRON.html">PRON</a></tt> tokens (67% of all `PRON` tokens) have a non-empty value of `PronType`.

The most frequent other feature values with which `PRON` and `PronType` co-occurred: <tt><a href="ru_syntagrus-feat-Animacy.html">Animacy</a></tt><tt>=EMPTY</tt> (37420; 76%), <tt><a href="ru_syntagrus-feat-Gender.html">Gender</a></tt><tt>=EMPTY</tt> (27310; 56%), <tt><a href="ru_syntagrus-feat-Number.html">Number</a></tt><tt>=Sing</tt> (26075; 53%), <tt><a href="ru_syntagrus-feat-Person.html">Person</a></tt><tt>=EMPTY</tt> (24544; 50%).

`PRON` tokens may have the following values of `PronType`:

* `Dem` (10163; 21% of non-empty `PronType`): <em>это, то, того, том, этом, тем, этого, тому, этим, т.</em>
* `Ind` (788; 2% of non-empty `PronType`): <em>что-то, кто-то, нечто, чем-то, что-нибудь, кого-то, кому-то, чего-то, прочим, кто-нибудь</em>
* `Int,Rel` (8983; 18% of non-empty `PronType`): <em>что, которые, который, кто, которых, которая, которой, чем, которого, чего</em>
* `Neg` (939; 2% of non-empty `PronType`): <em>ничего, никто, никого, никому, ничем, ничто, нечего, нечем, никем, ничему</em>
* `Prs` (26100; 53% of non-empty `PronType`): <em>он, я, мы, они, его, она, их, них, нас, ее</em>
* `Tot` (2084; 4% of non-empty `PronType`): <em>все, всего, всех, всем, всё, всему, всеми</em>
* `EMPTY` (23886): <em>я, он, это, мы, что, она, они, мне, меня, все</em>

`PronType` seems to be **lexical feature** of `PRON`. 100% lemmas (29) occur only with one value of `PronType`.

### `DET`

27806 <tt><a href="ru_syntagrus-pos-DET.html">DET</a></tt> tokens (68% of all `DET` tokens) have a non-empty value of `PronType`.

The most frequent other feature values with which `DET` and `PronType` co-occurred: <tt><a href="ru_syntagrus-feat-Poss.html">Poss</a></tt><tt>=EMPTY</tt> (19048; 69%), <tt><a href="ru_syntagrus-feat-Number.html">Number</a></tt><tt>=Sing</tt> (16424; 59%).

`DET` tokens may have the following values of `PronType`:

* `Dem` (11177; 40% of non-empty `PronType`): <em>эти, этот, этой, такой, этом, этого, тех, этих, это, эта</em>
* `Ind` (2563; 9% of non-empty `PronType`): <em>некоторые, некоторых, любой, один, какой-то, одни, какие-то, одной, любом, одна</em>
* `Int,Rel` (854; 3% of non-empty `PronType`): <em>какой, какие, каким, какая, какое, каких, каком, какую, чья, какими</em>
* `Neg` (369; 1% of non-empty `PronType`): <em>никаких, никакого, никакой, никакие, никакая, никакими, никакое, никоим, никаким, никакую</em>
* `Prs` (8758; 31% of non-empty `PronType`): <em>его, их, ее, свои, своей, свою, своих, нашей, своего, свое</em>
* `Tot` (4085; 15% of non-empty `PronType`): <em>все, всех, каждый, всем, всей, весь, всю, вся, всего, каждого</em>
* `EMPTY` (13332): <em>его, все, их, этот, ее, эти, такой, свою, это, этой</em>

`PronType` seems to be **lexical feature** of `DET`. 100% lemmas (28) occur only with one value of `PronType`.

## Relations with Agreement in `PronType`

The 10 most frequent relations where parent and child node agree in `PronType`:
<tt>PRON --[<tt><a href="ru_syntagrus-dep-conj.html">conj</a></tt>]--> PRON</tt> (109; 87%),
<tt>PRON --[<tt><a href="ru_syntagrus-dep-orphan.html">orphan</a></tt>]--> PRON</tt> (16; 62%),
<tt>DET --[<tt><a href="ru_syntagrus-dep-mark.html">mark</a></tt>]--> PRON</tt> (12; 86%),
<tt>PRON --[<tt><a href="ru_syntagrus-dep-parataxis.html">parataxis</a></tt>]--> PRON</tt> (8; 53%),
<tt>DET --[<tt><a href="ru_syntagrus-dep-cop.html">cop</a></tt>]--> PRON</tt> (6; 75%),
<tt>DET --[<tt><a href="ru_syntagrus-dep-conj.html">conj</a></tt>]--> DET</tt> (1; 100%),
<tt>DET --[<tt><a href="ru_syntagrus-dep-nsubj.html">nsubj</a></tt>]--> DET</tt> (1; 100%),
<tt>PRON --[<tt><a href="ru_syntagrus-dep-advcl.html">advcl</a></tt>]--> PRON</tt> (1; 100%),
<tt>PRON --[<tt><a href="ru_syntagrus-dep-flat.html">flat</a></tt>]--> PRON</tt> (1; 100%).

