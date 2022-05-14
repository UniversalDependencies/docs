---
layout: base
title:  'Statistics of NumForm in UD_Estonian-EDT'
udver: '2'
---

## Treebank Statistics: UD_Estonian-EDT: Features: `NumForm`

This feature is language-specific.
It occurs with 3 different values: `Digit`, `Roman`, `Word`.

11492 tokens (3%) have a non-empty value of `NumForm`.
2110 types (3%) occur at least once with a non-empty value of `NumForm`.
1751 lemmas (4%) occur at least once with a non-empty value of `NumForm`.
The feature is used with 4 part-of-speech tags: <tt><a href="et_edt-pos-NUM.html">NUM</a></tt> (8986; 2% instances), <tt><a href="et_edt-pos-ADJ.html">ADJ</a></tt> (2443; 1% instances), <tt><a href="et_edt-pos-SYM.html">SYM</a></tt> (37; 0% instances), <tt><a href="et_edt-pos-PROPN.html">PROPN</a></tt> (26; 0% instances).

### `NUM`

8986 <tt><a href="et_edt-pos-NUM.html">NUM</a></tt> tokens (98% of all `NUM` tokens) have a non-empty value of `NumForm`.

The most frequent other feature values with which `NUM` and `NumForm` co-occurred: <tt><a href="et_edt-feat-NumType.html">NumType</a></tt><tt>=Card</tt> (8863; 99%), <tt><a href="et_edt-feat-Number.html">Number</a></tt><tt>=Sing</tt> (6038; 67%).

`NUM` tokens may have the following values of `NumForm`:

* `Digit` (5672; 63% of non-empty `NumForm`): <em>1, 2, 10, 3, 4, 5, 15, 20, 6, 12</em>
* `Roman` (3; 0% of non-empty `NumForm`): <em>I, III, VII</em>
* `Word` (3311; 37% of non-empty `NumForm`): <em>kaks, üks, kolm, kahe, miljonit, ühe, viis, miljoni, neli, kolme</em>

`NumForm` seems to be **lexical feature** of `NUM`. 100% lemmas (1405) occur only with one value of `NumForm`.

### `ADJ`

2443 <tt><a href="et_edt-pos-ADJ.html">ADJ</a></tt> tokens (7% of all `ADJ` tokens) have a non-empty value of `NumForm`.

The most frequent other feature values with which `ADJ` and `NumForm` co-occurred: <tt><a href="et_edt-feat-Tense.html">Tense</a></tt><tt>=EMPTY</tt> (2443; 100%), <tt><a href="et_edt-feat-VerbForm.html">VerbForm</a></tt><tt>=EMPTY</tt> (2443; 100%), <tt><a href="et_edt-feat-Voice.html">Voice</a></tt><tt>=EMPTY</tt> (2443; 100%), <tt><a href="et_edt-feat-Degree.html">Degree</a></tt><tt>=EMPTY</tt> (2434; 100%), <tt><a href="et_edt-feat-Number.html">Number</a></tt><tt>=Sing</tt> (1836; 75%).

`ADJ` tokens may have the following values of `NumForm`:

* `Digit` (1459; 60% of non-empty `NumForm`): <em>1., 2000., 2., 1997., 1999., 3., 1996., 1998., 1992., 1995.</em>
* `Roman` (100; 4% of non-empty `NumForm`): <em>II, I, III, XI, XX, VI, XII, IV, MDCXXXII, V</em>
* `Word` (884; 36% of non-empty `NumForm`): <em>esimene, esimest, esimese, teine, teise, esimesel, esimesed, teisel, esimeses, kolmas</em>

`NumForm` seems to be **lexical feature** of `ADJ`. 100% lemmas (357) occur only with one value of `NumForm`.

### `SYM`

37 <tt><a href="et_edt-pos-SYM.html">SYM</a></tt> tokens (5% of all `SYM` tokens) have a non-empty value of `NumForm`.

The most frequent other feature values with which `SYM` and `NumForm` co-occurred: <tt><a href="et_edt-feat-Abbr.html">Abbr</a></tt><tt>=EMPTY</tt> (37; 100%).

`SYM` tokens may have the following values of `NumForm`:

* `Digit` (37; 100% of non-empty `NumForm`): <em>%, %-lt, %-ni</em>

### `PROPN`

26 <tt><a href="et_edt-pos-PROPN.html">PROPN</a></tt> tokens (0% of all `PROPN` tokens) have a non-empty value of `NumForm`.

The most frequent other feature values with which `PROPN` and `NumForm` co-occurred: <tt><a href="et_edt-feat-Number.html">Number</a></tt><tt>=Sing</tt> (23; 88%).

`PROPN` tokens may have the following values of `NumForm`:

* `Digit` (1; 4% of non-empty `NumForm`): <em>8</em>
* `Roman` (6; 23% of non-empty `NumForm`): <em>ADV, M, CX, XM</em>
* `Word` (19; 73% of non-empty `NumForm`): <em>Teist, Teise, Kolmanda, Esimene, Esimese, Kolme, Neljanda, Neljandal, Teisel</em>

`NumForm` seems to be **lexical feature** of `PROPN`. 100% lemmas (11) occur only with one value of `NumForm`.

## Relations with Agreement in `NumForm`

The 10 most frequent relations where parent and child node agree in `NumForm`:
<tt>NUM --[<tt><a href="et_edt-dep-conj.html">conj</a></tt>]--> NUM</tt> (368; 97%),
<tt>NUM --[<tt><a href="et_edt-dep-compound.html">compound</a></tt>]--> NUM</tt> (256; 56%),
<tt>NUM --[<tt><a href="et_edt-dep-flat.html">flat</a></tt>]--> NUM</tt> (94; 80%),
<tt>ADJ --[<tt><a href="et_edt-dep-conj.html">conj</a></tt>]--> ADJ</tt> (58; 83%),
<tt>NUM --[<tt><a href="et_edt-dep-nummod.html">nummod</a></tt>]--> NUM</tt> (39; 87%),
<tt>NUM --[<tt><a href="et_edt-dep-orphan.html">orphan</a></tt>]--> NUM</tt> (6; 100%),
<tt>NUM --[<tt><a href="et_edt-dep-parataxis.html">parataxis</a></tt>]--> NUM</tt> (5; 100%),
<tt>NUM --[<tt><a href="et_edt-dep-obl.html">obl</a></tt>]--> NUM</tt> (4; 100%),
<tt>ADJ --[<tt><a href="et_edt-dep-compound.html">compound</a></tt>]--> NUM</tt> (2; 100%),
<tt>ADJ --[<tt><a href="et_edt-dep-flat.html">flat</a></tt>]--> ADJ</tt> (1; 100%).

