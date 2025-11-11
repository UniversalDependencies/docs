---
layout: base
title:  'Statistics of NumForm in UD_Russian-SynTagRus'
udver: '2'
---

## Treebank Statistics: UD_Russian-SynTagRus: Features: `NumForm`

This feature is language-specific.
It occurs with 4 different values: `Combi`, `Digit`, `Roman`, `Word`.

23522 tokens (2%) have a non-empty value of `NumForm`.
1925 types (1%) occur at least once with a non-empty value of `NumForm`.
1637 lemmas (3%) occur at least once with a non-empty value of `NumForm`.
The feature is used with 2 part-of-speech tags: <tt><a href="ru_syntagrus-pos-NUM.html">NUM</a></tt> (17915; 1% instances), <tt><a href="ru_syntagrus-pos-ADJ.html">ADJ</a></tt> (5607; 0% instances).

### `NUM`

17915 <tt><a href="ru_syntagrus-pos-NUM.html">NUM</a></tt> tokens (100% of all `NUM` tokens) have a non-empty value of `NumForm`.

The most frequent other feature values with which `NUM` and `NumForm` co-occurred: <tt><a href="ru_syntagrus-feat-NumType.html">NumType</a></tt><tt>=Card</tt> (17739; 99%), <tt><a href="ru_syntagrus-feat-Animacy.html">Animacy</a></tt><tt>=EMPTY</tt> (15892; 89%), <tt><a href="ru_syntagrus-feat-Number.html">Number</a></tt><tt>=EMPTY</tt> (15209; 85%), <tt><a href="ru_syntagrus-feat-Gender.html">Gender</a></tt><tt>=EMPTY</tt> (13324; 74%).

`NUM` tokens may have the following values of `NumForm`:

* `Combi` (1; 0% of non-empty `NumForm`): <em>6-ти</em>
* `Digit` (8430; 47% of non-empty `NumForm`): <em>1, 10, 20, 2, 15, 5, 3, 30, 4, 100</em>
* `Roman` (76; 0% of non-empty `NumForm`): <em>пол, II, I, X</em>
* `Word` (9408; 53% of non-empty `NumForm`): <em>один, несколько, два, три, одной, двух, две, одного, одна, четыре</em>

<table>
  <tr><th>Paradigm <i>6</i></th><th><tt>Combi</tt></th><th><tt>Digit</tt></th></tr>
  <tr><td><tt></tt></td><td><em>6-ти</em></td><td><em>6</em></td></tr>
</table>

`NumForm` seems to be **lexical feature** of `NUM`. 100% lemmas (1019) occur only with one value of `NumForm`.

### `ADJ`

5607 <tt><a href="ru_syntagrus-pos-ADJ.html">ADJ</a></tt> tokens (4% of all `ADJ` tokens) have a non-empty value of `NumForm`.

The most frequent other feature values with which `ADJ` and `NumForm` co-occurred: <tt><a href="ru_syntagrus-feat-Degree.html">Degree</a></tt><tt>=EMPTY</tt> (5607; 100%), <tt><a href="ru_syntagrus-feat-Gender.html">Gender</a></tt><tt>=EMPTY</tt> (5085; 91%), <tt><a href="ru_syntagrus-feat-Case.html">Case</a></tt><tt>=EMPTY</tt> (4603; 82%), <tt><a href="ru_syntagrus-feat-Number.html">Number</a></tt><tt>=EMPTY</tt> (4603; 82%).

`ADJ` tokens may have the following values of `NumForm`:

* `Combi` (992; 18% of non-empty `NumForm`): <em>90-х, 1990-х, 90-е, 80-х, 70-х, 60-х, 1980-х, 2000-х, 1970-х, 50-х</em>
* `Digit` (3963; 71% of non-empty `NumForm`): <em>2003, 2004, 2008, 2001, 2002, 2010, 2000, 2007, 2009, 2006</em>
* `Roman` (640; 11% of non-empty `NumForm`): <em>XX, XIX, II, XXI, XVIII, I, III, XVII, XIII, XVI</em>
* `Word` (12; 0% of non-empty `NumForm`): <em>первую</em>

<table>
  <tr><th>Paradigm <i>первый</i></th><th><tt>Combi</tt></th><th><tt>Word</tt></th></tr>
  <tr><td><tt><tt><a href="ru_syntagrus-feat-Case.html">Case</a></tt><tt>=Acc</tt>|<tt><a href="ru_syntagrus-feat-Gender.html">Gender</a></tt><tt>=Fem</tt></tt></td><td></td><td><em>первую</em></td></tr>
  <tr><td><tt><tt><a href="ru_syntagrus-feat-Case.html">Case</a></tt><tt>=Gen</tt>|<tt><a href="ru_syntagrus-feat-Gender.html">Gender</a></tt><tt>=Masc</tt></tt></td><td><em>1-го</em></td><td></td></tr>
</table>

`NumForm` seems to be **lexical feature** of `ADJ`. 100% lemmas (704) occur only with one value of `NumForm`.

## Relations with Agreement in `NumForm`

The 10 most frequent relations where parent and child node agree in `NumForm`:
<tt>NUM --[<tt><a href="ru_syntagrus-dep-nmod.html">nmod</a></tt>]--> NUM</tt> (869; 100%),
<tt>ADJ --[<tt><a href="ru_syntagrus-dep-nmod.html">nmod</a></tt>]--> ADJ</tt> (298; 94%),
<tt>NUM --[<tt><a href="ru_syntagrus-dep-conj.html">conj</a></tt>]--> NUM</tt> (196; 100%),
<tt>NUM --[<tt><a href="ru_syntagrus-dep-compound.html">compound</a></tt>]--> NUM</tt> (116; 100%),
<tt>ADJ --[<tt><a href="ru_syntagrus-dep-conj.html">conj</a></tt>]--> ADJ</tt> (68; 89%),
<tt>NUM --[<tt><a href="ru_syntagrus-dep-parataxis.html">parataxis</a></tt>]--> NUM</tt> (12; 86%),
<tt>NUM --[<tt><a href="ru_syntagrus-dep-list.html">list</a></tt>]--> NUM</tt> (11; 100%),
<tt>NUM --[<tt><a href="ru_syntagrus-dep-appos.html">appos</a></tt>]--> NUM</tt> (10; 91%),
<tt>ADJ --[<tt><a href="ru_syntagrus-dep-nmod.html">nmod</a></tt>]--> NUM</tt> (5; 100%),
<tt>NUM --[<tt><a href="ru_syntagrus-dep-advcl.html">advcl</a></tt>]--> NUM</tt> (4; 100%).

