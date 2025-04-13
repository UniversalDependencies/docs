---
layout: base
title:  'Statistics of NumType in UD_Ukrainian-ParlaMint'
udver: '2'
---

## Treebank Statistics: UD_Ukrainian-ParlaMint: Features: `NumType`

This feature is universal.
It occurs with 2 different values: `Card`, `Ord`.

1016 tokens (2%) have a non-empty value of `NumType`.
377 types (4%) occur at least once with a non-empty value of `NumType`.
303 lemmas (6%) occur at least once with a non-empty value of `NumType`.
The feature is used with 4 part-of-speech tags: <tt><a href="uk_parlamint-pos-NUM.html">NUM</a></tt> (489; 1% instances), <tt><a href="uk_parlamint-pos-ADJ.html">ADJ</a></tt> (417; 1% instances), <tt><a href="uk_parlamint-pos-NOUN.html">NOUN</a></tt> (69; 0% instances), <tt><a href="uk_parlamint-pos-DET.html">DET</a></tt> (41; 0% instances).

### `NUM`

489 <tt><a href="uk_parlamint-pos-NUM.html">NUM</a></tt> tokens (92% of all `NUM` tokens) have a non-empty value of `NumType`.

The most frequent other feature values with which `NUM` and `NumType` co-occurred: <tt><a href="uk_parlamint-feat-Gender.html">Gender</a></tt><tt>=EMPTY</tt> (373; 76%), <tt><a href="uk_parlamint-feat-Case.html">Case</a></tt><tt>=Nom</tt> (294; 60%).

`NUM` tokens may have the following values of `NumType`:

* `Card` (489; 100% of non-empty `NumType`): <em>два, один, 3, двох, три, 100, 2, одну, 6528, одне</em>
* `EMPTY` (45): <em>31, 85, 106, 20, 5, 189, одні, двох, одна, одну</em>

`NumType` seems to be **lexical feature** of `NUM`. 100% lemmas (194) occur only with one value of `NumType`.

### `ADJ`

417 <tt><a href="uk_parlamint-pos-ADJ.html">ADJ</a></tt> tokens (8% of all `ADJ` tokens) have a non-empty value of `NumType`.

The most frequent other feature values with which `ADJ` and `NumType` co-occurred: <tt><a href="uk_parlamint-feat-Degree.html">Degree</a></tt><tt>=EMPTY</tt> (415; 100%), <tt><a href="uk_parlamint-feat-Number.html">Number</a></tt><tt>=Sing</tt> (410; 98%).

`ADJ` tokens may have the following values of `NumType`:

* `Ord` (417; 100% of non-empty `NumType`): <em>друге, першому, першу, 1, другого, другому, першої, 2021, 3, 2022</em>
* `EMPTY` (4637): <em>шановні, Верховної, народні, шановний, повинні, реєстраційний, народний, народних, народному, готові</em>

`NumType` seems to be **lexical feature** of `ADJ`. 100% lemmas (127) occur only with one value of `NumType`.

### `NOUN`

69 <tt><a href="uk_parlamint-pos-NOUN.html">NOUN</a></tt> tokens (1% of all `NOUN` tokens) have a non-empty value of `NumType`.

The most frequent other feature values with which `NOUN` and `NumType` co-occurred: <tt><a href="uk_parlamint-feat-Animacy.html">Animacy</a></tt><tt>=Inan</tt> (50; 72%), <tt><a href="uk_parlamint-feat-Number.html">Number</a></tt><tt>=Plur</tt> (43; 62%), <tt><a href="uk_parlamint-feat-Case.html">Case</a></tt><tt>=Gen</tt> (37; 54%).

`NOUN` tokens may have the following values of `NumType`:

* `Card` (50; 72% of non-empty `NumType`): <em>тисяч, мільярдів, мільйонів, тисячі, мільярди, мільярда, мільйона, мільйони, нуль, одне</em>
* `Ord` (19; 28% of non-empty `NumType`): <em>друге, перше, Четверте, третє</em>
* `EMPTY` (12612): <em>колеги, ласка, питання, рішення, ради, закону, законопроект, проект, слово, комітету</em>

`NumType` seems to be **lexical feature** of `NOUN`. 100% lemmas (11) occur only with one value of `NumType`.

### `DET`

41 <tt><a href="uk_parlamint-pos-DET.html">DET</a></tt> tokens (2% of all `DET` tokens) have a non-empty value of `NumType`.

The most frequent other feature values with which `DET` and `NumType` co-occurred: <tt><a href="uk_parlamint-feat-Animacy.html">Animacy</a></tt><tt>=EMPTY</tt> (41; 100%), <tt><a href="uk_parlamint-feat-Person.html">Person</a></tt><tt>=EMPTY</tt> (41; 100%), <tt><a href="uk_parlamint-feat-Poss.html">Poss</a></tt><tt>=EMPTY</tt> (41; 100%), <tt><a href="uk_parlamint-feat-Gender.html">Gender</a></tt><tt>=EMPTY</tt> (40; 98%), <tt><a href="uk_parlamint-feat-Number.html">Number</a></tt><tt>=EMPTY</tt> (39; 95%), <tt><a href="uk_parlamint-feat-PronType.html">PronType</a></tt><tt>=Ind</tt> (38; 93%).

`DET` tokens may have the following values of `NumType`:

* `Card` (41; 100% of non-empty `NumType`): <em>багато, кілька, багатьох, декілька, декількох, багатьом, кількох, одними, однієї, стільки</em>
* `EMPTY` (2245): <em>які, цього, цей, який, яка, всі, це, цю, всіх, ця</em>

## Relations with Agreement in `NumType`

The 10 most frequent relations where parent and child node agree in `NumType`:
<tt>NUM --[<tt><a href="uk_parlamint-dep-conj.html">conj</a></tt>]--> NUM</tt> (15; 100%),
<tt>ADJ --[<tt><a href="uk_parlamint-dep-conj.html">conj</a></tt>]--> ADJ</tt> (6; 100%),
<tt>NOUN --[<tt><a href="uk_parlamint-dep-compound.html">compound</a></tt>]--> NUM</tt> (2; 100%),
<tt>NUM --[<tt><a href="uk_parlamint-dep-flat-range.html">flat:range</a></tt>]--> NOUN</tt> (2; 100%),
<tt>NUM --[<tt><a href="uk_parlamint-dep-nummod-gov.html">nummod:gov</a></tt>]--> NUM</tt> (2; 100%),
<tt>NUM --[<tt><a href="uk_parlamint-dep-appos.html">appos</a></tt>]--> NUM</tt> (1; 100%),
<tt>NUM --[<tt><a href="uk_parlamint-dep-compound.html">compound</a></tt>]--> NUM</tt> (1; 100%),
<tt>NUM --[<tt><a href="uk_parlamint-dep-nummod.html">nummod</a></tt>]--> NUM</tt> (1; 100%).

