---
layout: base
title:  'Statistics of NumType in UD_Ukrainian-ParlaMint'
udver: '2'
---

## Treebank Statistics: UD_Ukrainian-ParlaMint: Features: `NumType`

This feature is universal.
It occurs with 2 different values: `Card`, `Ord`.

2191 tokens (2%) have a non-empty value of `NumType`.
566 types (4%) occur at least once with a non-empty value of `NumType`.
452 lemmas (6%) occur at least once with a non-empty value of `NumType`.
The feature is used with 4 part-of-speech tags: <tt><a href="uk_parlamint-pos-NUM.html">NUM</a></tt> (1127; 1% instances), <tt><a href="uk_parlamint-pos-ADJ.html">ADJ</a></tt> (835; 1% instances), <tt><a href="uk_parlamint-pos-NOUN.html">NOUN</a></tt> (160; 0% instances), <tt><a href="uk_parlamint-pos-DET.html">DET</a></tt> (69; 0% instances).

### `NUM`

1127 <tt><a href="uk_parlamint-pos-NUM.html">NUM</a></tt> tokens (97% of all `NUM` tokens) have a non-empty value of `NumType`.

The most frequent other feature values with which `NUM` and `NumType` co-occurred: <tt><a href="uk_parlamint-feat-Number.html">Number</a></tt><tt>=EMPTY</tt> (957; 85%), <tt><a href="uk_parlamint-feat-Gender.html">Gender</a></tt><tt>=EMPTY</tt> (843; 75%), <tt><a href="uk_parlamint-feat-Case.html">Case</a></tt><tt>=Nom</tt> (656; 58%).

`NUM` tokens may have the following values of `NumType`:

* `Card` (1127; 100% of non-empty `NumType`): <em>два, один, 3, три, одну, 5, 20, 1, двох, 15</em>
* `EMPTY` (30): <em>багато, 106, 20, 5, 85, двох, 189, 24, 282, 299</em>

`NumType` seems to be **lexical feature** of `NUM`. 100% lemmas (301) occur only with one value of `NumType`.

### `ADJ`

835 <tt><a href="uk_parlamint-pos-ADJ.html">ADJ</a></tt> tokens (8% of all `ADJ` tokens) have a non-empty value of `NumType`.

The most frequent other feature values with which `ADJ` and `NumType` co-occurred: <tt><a href="uk_parlamint-feat-Degree.html">Degree</a></tt><tt>=EMPTY</tt> (830; 99%), <tt><a href="uk_parlamint-feat-Number.html">Number</a></tt><tt>=Sing</tt> (818; 98%).

`ADJ` tokens may have the following values of `NumType`:

* `Ord` (835; 100% of non-empty `NumType`): <em>першому, 1, 2004, друге, першу, другий, перший, другого, другому, першого</em>
* `EMPTY` (10081): <em>шановні, Верховної, народні, шановний, повинні, народних, Верховна, готові, російської, народний</em>

`NumType` seems to be **lexical feature** of `ADJ`. 100% lemmas (183) occur only with one value of `NumType`.

### `NOUN`

160 <tt><a href="uk_parlamint-pos-NOUN.html">NOUN</a></tt> tokens (1% of all `NOUN` tokens) have a non-empty value of `NumType`.

The most frequent other feature values with which `NOUN` and `NumType` co-occurred: <tt><a href="uk_parlamint-feat-Animacy.html">Animacy</a></tt><tt>=Inan</tt> (109; 68%), <tt><a href="uk_parlamint-feat-Number.html">Number</a></tt><tt>=Plur</tt> (94; 59%), <tt><a href="uk_parlamint-feat-Case.html">Case</a></tt><tt>=Gen</tt> (88; 55%).

`NOUN` tokens may have the following values of `NumType`:

* `Card` (116; 73% of non-empty `NumType`): <em>тисяч, мільйонів, мільярдів, тисячі, мільйона, мільйони, млн., мільярди, мільярда, тис.</em>
* `Ord` (44; 28% of non-empty `NumType`): <em>друге, третє, Четверте, перше, П'яте, шоста</em>
* `EMPTY` (26653): <em>колеги, ласка, питання, рішення, ради, закону, депутати, голосування, фракція, слово</em>

`NumType` seems to be **lexical feature** of `NOUN`. 100% lemmas (17) occur only with one value of `NumType`.

### `DET`

69 <tt><a href="uk_parlamint-pos-DET.html">DET</a></tt> tokens (2% of all `DET` tokens) have a non-empty value of `NumType`.

The most frequent other feature values with which `DET` and `NumType` co-occurred: <tt><a href="uk_parlamint-feat-Person.html">Person</a></tt><tt>=EMPTY</tt> (69; 100%), <tt><a href="uk_parlamint-feat-Poss.html">Poss</a></tt><tt>=EMPTY</tt> (69; 100%), <tt><a href="uk_parlamint-feat-Animacy.html">Animacy</a></tt><tt>=EMPTY</tt> (68; 99%), <tt><a href="uk_parlamint-feat-Gender.html">Gender</a></tt><tt>=EMPTY</tt> (67; 97%), <tt><a href="uk_parlamint-feat-Number.html">Number</a></tt><tt>=EMPTY</tt> (67; 97%), <tt><a href="uk_parlamint-feat-PronType.html">PronType</a></tt><tt>=Ind</tt> (65; 94%), <tt><a href="uk_parlamint-feat-Case.html">Case</a></tt><tt>=Acc</tt> (35; 51%).

`DET` tokens may have the following values of `NumType`:

* `Card` (69; 100% of non-empty `NumType`): <em>багато, декілька, кілька, багатьох, скільки, декількох, кількох, один, багатьом, скількох</em>
* `EMPTY` (4200): <em>які, цього, який, всі, цей, яка, всіх, цю, ці, це</em>

## Relations with Agreement in `NumType`

The 10 most frequent relations where parent and child node agree in `NumType`:
<tt>NUM --[<tt><a href="uk_parlamint-dep-conj.html">conj</a></tt>]--> NUM</tt> (20; 100%),
<tt>ADJ --[<tt><a href="uk_parlamint-dep-conj.html">conj</a></tt>]--> ADJ</tt> (12; 80%),
<tt>NUM --[<tt><a href="uk_parlamint-dep-list.html">list</a></tt>]--> NUM</tt> (4; 100%),
<tt>NUM --[<tt><a href="uk_parlamint-dep-nummod-gov.html">nummod:gov</a></tt>]--> NUM</tt> (3; 100%),
<tt>NOUN --[<tt><a href="uk_parlamint-dep-compound.html">compound</a></tt>]--> NUM</tt> (2; 100%),
<tt>NUM --[<tt><a href="uk_parlamint-dep-compound.html">compound</a></tt>]--> NUM</tt> (2; 100%),
<tt>NUM --[<tt><a href="uk_parlamint-dep-flat-range.html">flat:range</a></tt>]--> NOUN</tt> (2; 100%),
<tt>NUM --[<tt><a href="uk_parlamint-dep-nummod.html">nummod</a></tt>]--> NUM</tt> (2; 100%),
<tt>ADJ --[<tt><a href="uk_parlamint-dep-flat.html">flat</a></tt>]--> ADJ</tt> (1; 100%),
<tt>DET --[<tt><a href="uk_parlamint-dep-fixed.html">fixed</a></tt>]--> DET</tt> (1; 100%).

