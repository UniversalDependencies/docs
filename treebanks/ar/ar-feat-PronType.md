---
layout: base
title:  'Statistics of PronType in UD_Arabic'
udver: '2'
---

## Treebank Statistics: UD_Arabic: Features: `PronType`

This feature is universal.
It occurs with 3 different values: `Dem`, `Prs`, `Rel`.

14553 tokens (5%) have a non-empty value of `PronType`.
88 types (0%) occur at least once with a non-empty value of `PronType`.
8 lemmas (0%) occur at least once with a non-empty value of `PronType`.
The feature is used with 2 part-of-speech tags: <tt><a href="ar-pos-PRON.html">PRON</a></tt> (12293; 4% instances), <tt><a href="ar-pos-DET.html">DET</a></tt> (2260; 1% instances).

### `PRON`

12293 <tt><a href="ar-pos-PRON.html">PRON</a></tt> tokens (95% of all `PRON` tokens) have a non-empty value of `PronType`.

The most frequent other feature values with which `PRON` and `PronType` co-occurred: <tt><a href="ar-feat-Number.html">Number</a></tt><tt>=Sing</tt> (10796; 88%), <tt><a href="ar-feat-Person.html">Person</a></tt><tt>=3</tt> (9693; 79%), <tt><a href="ar-feat-Case.html">Case</a></tt><tt>=Gen</tt> (8346; 68%), <tt><a href="ar-feat-Gender.html">Gender</a></tt><tt>=Masc</tt> (6970; 57%).

`PRON` tokens may have the following values of `PronType`:

* `Dem` (1018; 8% of non-empty `PronType`): هذه، هذا، ذلك، ذٰلك، هٰذا، هٰذه، تلك، هؤلاء، هذين، اولئك
* `Prs` (9991; 81% of non-empty `PronType`): ه، ها، هم، هو، هي، ك، هما، نا، هن، كم
* `Rel` (1284; 10% of non-empty `PronType`): التي، الذي، الذين، التى، الذى، اللذين، اللتين، اللواتي، اللذان
* `EMPTY` (583): ما، من، ماذا، كيف، أين، كم، متى، لماذا، هكذا، اين

### `DET`

2260 <tt><a href="ar-pos-DET.html">DET</a></tt> tokens (78% of all `DET` tokens) have a non-empty value of `PronType`.

The most frequent other feature values with which `DET` and `PronType` co-occurred: <tt><a href="ar-feat-Number.html">Number</a></tt><tt>=Sing</tt> (2127; 94%), <tt><a href="ar-feat-Case.html">Case</a></tt><tt>=Gen</tt> (1493; 66%), <tt><a href="ar-feat-Gender.html">Gender</a></tt><tt>=Fem</tt> (1199; 53%).

`DET` tokens may have the following values of `PronType`:

* `Dem` (1031; 46% of non-empty `PronType`): هذه، هذا، ذلك، تلك، ذٰلك، هٰذا، هٰذه، هؤلاء، ذي، ذاك
* `Rel` (1229; 54% of non-empty `PronType`): التي، الذي، الذين، التى، الذى، اللذين، اللتين، اللواتي، اللتان، اللاتى
* `EMPTY` (624): ما، من، كيف، كم، أين، ماذا، لماذا، متى، اين، هكذا

## Relations with Agreement in `PronType`

The 10 most frequent relations where parent and child node agree in `PronType`:
<tt>PRON --[<tt><a href="ar-dep-conj.html">conj</a></tt>]--> PRON</tt> (6; 100%),
<tt>DET --[<tt><a href="ar-dep-conj.html">conj</a></tt>]--> PRON</tt> (3; 75%),
<tt>PRON --[<tt><a href="ar-dep-mark.html">mark</a></tt>]--> PRON</tt> (1; 100%).

