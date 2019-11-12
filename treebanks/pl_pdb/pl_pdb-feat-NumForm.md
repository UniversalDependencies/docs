---
layout: base
title:  'Statistics of NumForm in UD_Polish-PDB'
udver: '2'
---

## Treebank Statistics: UD_Polish-PDB: Features: `NumForm`

This feature is language-specific.
It occurs with 3 different values: `Digit`, `Roman`, `Word`.

4762 tokens (1%) have a non-empty value of `NumForm`.
839 types (1%) occur at least once with a non-empty value of `NumForm`.
743 lemmas (3%) occur at least once with a non-empty value of `NumForm`.
The feature is used with 3 part-of-speech tags: <tt><a href="pl_pdb-pos-NUM.html">NUM</a></tt> (2739; 1% instances), <tt><a href="pl_pdb-pos-ADJ.html">ADJ</a></tt> (1162; 0% instances), <tt><a href="pl_pdb-pos-X.html">X</a></tt> (861; 0% instances).

### `NUM`

2739 <tt><a href="pl_pdb-pos-NUM.html">NUM</a></tt> tokens (100% of all `NUM` tokens) have a non-empty value of `NumForm`.

The most frequent other feature values with which `NUM` and `NumForm` co-occurred: <tt><a href="pl_pdb-feat-Number.html">Number</a></tt><tt>=Plur</tt> (2683; 98%), <tt><a href="pl_pdb-feat-Gender.html">Gender</a></tt><tt>=Masc</tt> (1922; 70%), <tt><a href="pl_pdb-feat-NumType.html">NumType</a></tt><tt>=EMPTY</tt> (1376; 50%), <tt><a href="pl_pdb-feat-Animacy.html">Animacy</a></tt><tt>=Inan</tt> (1373; 50%).

`NUM` tokens may have the following values of `NumForm`:

* `Digit` (1304; 48% of non-empty `NumForm`): <em>10, 3, 2, 30, 5, 15, 20, 4, 50, 12</em>
* `Roman` (1; 0% of non-empty `NumForm`): <em>IX</em>
* `Word` (1434; 52% of non-empty `NumForm`): <em>dwie, dwa, dwóch, trzy, trzech, cztery, pięć, dwaj, czterech, pół</em>

`NumForm` seems to be **lexical feature** of `NUM`. 100% lemmas (416) occur only with one value of `NumForm`.

### `ADJ`

1162 <tt><a href="pl_pdb-pos-ADJ.html">ADJ</a></tt> tokens (3% of all `ADJ` tokens) have a non-empty value of `NumForm`.

The most frequent other feature values with which `ADJ` and `NumForm` co-occurred: <tt><a href="pl_pdb-feat-Aspect.html">Aspect</a></tt><tt>=EMPTY</tt> (1162; 100%), <tt><a href="pl_pdb-feat-Polarity.html">Polarity</a></tt><tt>=EMPTY</tt> (1162; 100%), <tt><a href="pl_pdb-feat-VerbForm.html">VerbForm</a></tt><tt>=EMPTY</tt> (1162; 100%), <tt><a href="pl_pdb-feat-Voice.html">Voice</a></tt><tt>=EMPTY</tt> (1162; 100%), <tt><a href="pl_pdb-feat-Degree.html">Degree</a></tt><tt>=Pos</tt> (1161; 100%), <tt><a href="pl_pdb-feat-Number.html">Number</a></tt><tt>=Sing</tt> (1132; 97%), <tt><a href="pl_pdb-feat-Gender.html">Gender</a></tt><tt>=Masc</tt> (977; 84%), <tt><a href="pl_pdb-feat-Animacy.html">Animacy</a></tt><tt>=Inan</tt> (944; 81%), <tt><a href="pl_pdb-feat-Case.html">Case</a></tt><tt>=Gen</tt> (679; 58%).

`ADJ` tokens may have the following values of `NumForm`:

* `Digit` (1022; 88% of non-empty `NumForm`): <em>1, 2008, 2000, 2009, 2, 20, 15, 1995, 1996, 1997</em>
* `Roman` (140; 12% of non-empty `NumForm`): <em>II, XIX, I, IV, III, XVI, XVIII, XX, VIII, XII</em>

`NumForm` seems to be **lexical feature** of `ADJ`. 100% lemmas (264) occur only with one value of `NumForm`.

### `X`

861 <tt><a href="pl_pdb-pos-X.html">X</a></tt> tokens (28% of all `X` tokens) have a non-empty value of `NumForm`.

The most frequent other feature values with which `X` and `NumForm` co-occurred: <tt><a href="pl_pdb-feat-Abbr.html">Abbr</a></tt><tt>=EMPTY</tt> (861; 100%), <tt><a href="pl_pdb-feat-Pun.html">Pun</a></tt><tt>=EMPTY</tt> (861; 100%).

`X` tokens may have the following values of `NumForm`:

* `Digit` (848; 98% of non-empty `NumForm`): <em>2, 1, 3, 4, 5, 6, 7, 8, 9, 10</em>
* `Roman` (13; 2% of non-empty `NumForm`): <em>I, IV, II, III, VI, XI</em>

`NumForm` seems to be **lexical feature** of `X`. 100% lemmas (273) occur only with one value of `NumForm`.

## Relations with Agreement in `NumForm`

The 10 most frequent relations where parent and child node agree in `NumForm`:
<tt>X --[<tt><a href="pl_pdb-dep-conj.html">conj</a></tt>]--> X</tt> (92; 98%),
<tt>NUM --[<tt><a href="pl_pdb-dep-conj.html">conj</a></tt>]--> NUM</tt> (82; 100%),
<tt>ADJ --[<tt><a href="pl_pdb-dep-conj.html">conj</a></tt>]--> ADJ</tt> (43; 100%),
<tt>NUM --[<tt><a href="pl_pdb-dep-flat.html">flat</a></tt>]--> NUM</tt> (18; 100%),
<tt>ADJ --[<tt><a href="pl_pdb-dep-fixed.html">fixed</a></tt>]--> X</tt> (9; 100%),
<tt>ADJ --[<tt><a href="pl_pdb-dep-amod-flat.html">amod:flat</a></tt>]--> ADJ</tt> (6; 55%),
<tt>ADJ --[<tt><a href="pl_pdb-dep-fixed.html">fixed</a></tt>]--> NUM</tt> (2; 100%),
<tt>X --[<tt><a href="pl_pdb-dep-flat.html">flat</a></tt>]--> X</tt> (2; 100%),
<tt>X --[<tt><a href="pl_pdb-dep-parataxis-insert.html">parataxis:insert</a></tt>]--> X</tt> (1; 100%).

