---
layout: base
title:  'Statistics of NumType in UD_Hindi-HDTB'
udver: '2'
---

## Treebank Statistics: UD_Hindi-HDTB: Features: `NumType`

This feature is universal.
It occurs with 2 different values: `Card`, `Ord`.

7296 tokens (2%) have a non-empty value of `NumType`.
958 types (5%) occur at least once with a non-empty value of `NumType`.
908 lemmas (6%) occur at least once with a non-empty value of `NumType`.
The feature is used with 2 part-of-speech tags: <tt><a href="hi_hdtb-pos-NUM.html">NUM</a></tt> (6740; 2% instances), <tt><a href="hi_hdtb-pos-ADJ.html">ADJ</a></tt> (556; 0% instances).

### `NUM`

6740 <tt><a href="hi_hdtb-pos-NUM.html">NUM</a></tt> tokens (100% of all `NUM` tokens) have a non-empty value of `NumType`.

`NUM` tokens may have the following values of `NumType`:

* `Card` (6740; 100% of non-empty `NumType`): एक, दो, तीन, करोड़, दोनों, चार, लाख, हजार, पांच, छह

`NumType` seems to be **lexical feature** of `NUM`. 100% lemmas (856) occur only with one value of `NumType`.

### `ADJ`

556 <tt><a href="hi_hdtb-pos-ADJ.html">ADJ</a></tt> tokens (3% of all `ADJ` tokens) have a non-empty value of `NumType`.

The most frequent other feature values with which `ADJ` and `NumType` co-occurred: <tt><a href="hi_hdtb-feat-Number.html">Number</a></tt><tt>=Sing</tt> (512; 92%), <tt><a href="hi_hdtb-feat-Gender.html">Gender</a></tt><tt>=Masc</tt> (315; 57%).

`ADJ` tokens may have the following values of `NumType`:

* `Ord` (556; 100% of non-empty `NumType`): पहली, दूसरे, दूसरी, पहले, तीसरे, पहला, प्रथम, दूसरा, चौथे, तीसरी
* `EMPTY` (21089): वाले, शामिल, अन्य, वाली, जारी, पिछले, पूर्व, भारतीय, तैयार, स्थित

`NumType` seems to be **lexical feature** of `ADJ`. 100% lemmas (54) occur only with one value of `NumType`.

## Relations with Agreement in `NumType`

The 10 most frequent relations where parent and child node agree in `NumType`:
<tt>NUM --[<tt><a href="hi_hdtb-dep-compound.html">compound</a></tt>]--> NUM</tt> (562; 100%),
<tt>NUM --[<tt><a href="hi_hdtb-dep-dep.html">dep</a></tt>]--> NUM</tt> (99; 100%),
<tt>NUM --[<tt><a href="hi_hdtb-dep-nummod.html">nummod</a></tt>]--> NUM</tt> (67; 100%),
<tt>NUM --[<tt><a href="hi_hdtb-dep-nmod.html">nmod</a></tt>]--> NUM</tt> (63; 100%),
<tt>NUM --[<tt><a href="hi_hdtb-dep-advcl.html">advcl</a></tt>]--> NUM</tt> (18; 100%),
<tt>NUM --[<tt><a href="hi_hdtb-dep-amod.html">amod</a></tt>]--> NUM</tt> (17; 100%),
<tt>NUM --[<tt><a href="hi_hdtb-dep-obj.html">obj</a></tt>]--> NUM</tt> (16; 100%),
<tt>NUM --[<tt><a href="hi_hdtb-dep-conj.html">conj</a></tt>]--> NUM</tt> (15; 100%),
<tt>ADJ --[<tt><a href="hi_hdtb-dep-conj.html">conj</a></tt>]--> ADJ</tt> (7; 54%),
<tt>NUM --[<tt><a href="hi_hdtb-dep-acl.html">acl</a></tt>]--> NUM</tt> (4; 100%).

