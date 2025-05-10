---
layout: base
title:  'Statistics of NumType in UD_Ukrainian-ParlaMint'
udver: '2'
---

## Treebank Statistics: UD_Ukrainian-ParlaMint: Features: `NumType`

This feature is universal.
It occurs with 2 different values: `Card`, `Ord`.

1657 tokens (2%) have a non-empty value of `NumType`.
504 types (4%) occur at least once with a non-empty value of `NumType`.
407 lemmas (6%) occur at least once with a non-empty value of `NumType`.
The feature is used with 4 part-of-speech tags: <tt><a href="uk_parlamint-pos-NUM.html">NUM</a></tt> (843; 1% instances), <tt><a href="uk_parlamint-pos-ADJ.html">ADJ</a></tt> (600; 1% instances), <tt><a href="uk_parlamint-pos-NOUN.html">NOUN</a></tt> (150; 0% instances), <tt><a href="uk_parlamint-pos-DET.html">DET</a></tt> (64; 0% instances).

### `NUM`

843 <tt><a href="uk_parlamint-pos-NUM.html">NUM</a></tt> tokens (97% of all `NUM` tokens) have a non-empty value of `NumType`.

The most frequent other feature values with which `NUM` and `NumType` co-occurred: <tt><a href="uk_parlamint-feat-Number.html">Number</a></tt><tt>=EMPTY</tt> (710; 84%), <tt><a href="uk_parlamint-feat-Gender.html">Gender</a></tt><tt>=EMPTY</tt> (618; 73%), <tt><a href="uk_parlamint-feat-Case.html">Case</a></tt><tt>=Nom</tt> (434; 51%).

`NUM` tokens may have the following values of `NumType`:

* `Card` (843; 100% of non-empty `NumType`): <em>два, один, 3, двох, 15, 5, одну, одна, три, одне</em>
* `EMPTY` (26): <em>106, 20, 5, 85, багато, двох, 189, 24, 282, 299</em>

`NumType` seems to be **lexical feature** of `NUM`. 100% lemmas (267) occur only with one value of `NumType`.

### `ADJ`

600 <tt><a href="uk_parlamint-pos-ADJ.html">ADJ</a></tt> tokens (7% of all `ADJ` tokens) have a non-empty value of `NumType`.

The most frequent other feature values with which `ADJ` and `NumType` co-occurred: <tt><a href="uk_parlamint-feat-Degree.html">Degree</a></tt><tt>=EMPTY</tt> (597; 100%), <tt><a href="uk_parlamint-feat-Number.html">Number</a></tt><tt>=Sing</tt> (584; 97%).

`ADJ` tokens may have the following values of `NumType`:

* `Ord` (600; 100% of non-empty `NumType`): <em>друге, 1, першу, першому, другого, другому, першої, 2003, 2021, 3</em>
* `EMPTY` (8154): <em>шановні, Верховної, шановний, повинні, народні, готові, російської, народних, народний, реєстраційний</em>

`NumType` seems to be **lexical feature** of `ADJ`. 100% lemmas (168) occur only with one value of `NumType`.

### `NOUN`

150 <tt><a href="uk_parlamint-pos-NOUN.html">NOUN</a></tt> tokens (1% of all `NOUN` tokens) have a non-empty value of `NumType`.

The most frequent other feature values with which `NOUN` and `NumType` co-occurred: <tt><a href="uk_parlamint-feat-Animacy.html">Animacy</a></tt><tt>=Inan</tt> (104; 69%), <tt><a href="uk_parlamint-feat-Number.html">Number</a></tt><tt>=Plur</tt> (91; 61%), <tt><a href="uk_parlamint-feat-Case.html">Case</a></tt><tt>=Gen</tt> (84; 56%).

`NOUN` tokens may have the following values of `NumType`:

* `Card` (111; 74% of non-empty `NumType`): <em>тисяч, мільйонів, мільярдів, тисячі, мільйона, млн., мільйони, мільярди, мільярда, тис.</em>
* `Ord` (39; 26% of non-empty `NumType`): <em>друге, третє, Четверте, перше, П'яте</em>
* `EMPTY` (21268): <em>колеги, питання, ласка, рішення, ради, закону, проект, слово, час, фракція</em>

`NumType` seems to be **lexical feature** of `NOUN`. 100% lemmas (16) occur only with one value of `NumType`.

### `DET`

64 <tt><a href="uk_parlamint-pos-DET.html">DET</a></tt> tokens (2% of all `DET` tokens) have a non-empty value of `NumType`.

The most frequent other feature values with which `DET` and `NumType` co-occurred: <tt><a href="uk_parlamint-feat-Person.html">Person</a></tt><tt>=EMPTY</tt> (64; 100%), <tt><a href="uk_parlamint-feat-Poss.html">Poss</a></tt><tt>=EMPTY</tt> (64; 100%), <tt><a href="uk_parlamint-feat-Animacy.html">Animacy</a></tt><tt>=EMPTY</tt> (63; 98%), <tt><a href="uk_parlamint-feat-Gender.html">Gender</a></tt><tt>=EMPTY</tt> (62; 97%), <tt><a href="uk_parlamint-feat-Number.html">Number</a></tt><tt>=EMPTY</tt> (62; 97%), <tt><a href="uk_parlamint-feat-PronType.html">PronType</a></tt><tt>=Ind</tt> (58; 91%).

`DET` tokens may have the following values of `NumType`:

* `Card` (64; 100% of non-empty `NumType`): <em>багато, декілька, кілька, багатьох, скільки, декількох, кількох, один, багатьом, скількох</em>
* `EMPTY` (3448): <em>які, який, цього, яка, цей, всі, цю, це, всіх, ці</em>

## Relations with Agreement in `NumType`

The 10 most frequent relations where parent and child node agree in `NumType`:
<tt>NUM --[<tt><a href="uk_parlamint-dep-conj.html">conj</a></tt>]--> NUM</tt> (19; 100%),
<tt>ADJ --[<tt><a href="uk_parlamint-dep-conj.html">conj</a></tt>]--> ADJ</tt> (7; 70%),
<tt>NUM --[<tt><a href="uk_parlamint-dep-list.html">list</a></tt>]--> NUM</tt> (4; 100%),
<tt>NUM --[<tt><a href="uk_parlamint-dep-nummod-gov.html">nummod:gov</a></tt>]--> NUM</tt> (4; 100%),
<tt>NOUN --[<tt><a href="uk_parlamint-dep-compound.html">compound</a></tt>]--> NUM</tt> (2; 100%),
<tt>NUM --[<tt><a href="uk_parlamint-dep-flat-range.html">flat:range</a></tt>]--> NOUN</tt> (2; 100%),
<tt>NUM --[<tt><a href="uk_parlamint-dep-nummod.html">nummod</a></tt>]--> NUM</tt> (2; 100%),
<tt>DET --[<tt><a href="uk_parlamint-dep-fixed.html">fixed</a></tt>]--> DET</tt> (1; 100%),
<tt>NOUN --[<tt><a href="uk_parlamint-dep-flat.html">flat</a></tt>]--> NOUN</tt> (1; 100%),
<tt>NUM --[<tt><a href="uk_parlamint-dep-appos.html">appos</a></tt>]--> NUM</tt> (1; 100%).

