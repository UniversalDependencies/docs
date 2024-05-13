---
layout: base
title:  'Statistics of NumType in UD_Greek-GUD'
udver: '2'
---

## Treebank Statistics: UD_Greek-GUD: Features: `NumType`

This feature is universal.
It occurs with 4 different values: `Card`, `Frac`, `Ord`, `Sets`.

178 tokens (1%) have a non-empty value of `NumType`.
50 types (1%) occur at least once with a non-empty value of `NumType`.
29 lemmas (1%) occur at least once with a non-empty value of `NumType`.
The feature is used with 3 part-of-speech tags: <tt><a href="el_gud-pos-NUM.html">NUM</a></tt> (117; 0% instances), <tt><a href="el_gud-pos-ADJ.html">ADJ</a></tt> (60; 0% instances), <tt><a href="el_gud-pos-NOUN.html">NOUN</a></tt> (1; 0% instances).

### `NUM`

117 <tt><a href="el_gud-pos-NUM.html">NUM</a></tt> tokens (97% of all `NUM` tokens) have a non-empty value of `NumType`.

The most frequent other feature values with which `NUM` and `NumType` co-occurred: <tt><a href="el_gud-feat-Number.html">Number</a></tt><tt>=Plur</tt> (99; 85%), <tt><a href="el_gud-feat-Case.html">Case</a></tt><tt>=Acc</tt> (63; 54%).

`NUM` tokens may have the following values of `NumType`:

* `Card` (116; 99% of non-empty `NumType`): <em>δύο, δυο, τρεις, 16, ένα, δέκα, μία, πενήντα, 14/5, 24</em>
* `Frac` (1; 1% of non-empty `NumType`): <em>δωδεκάμιση</em>
* `EMPTY` (4): <em>τρακόσια, έξι, τεσσάρων</em>

`NumType` seems to be **lexical feature** of `NUM`. 100% lemmas (21) occur only with one value of `NumType`.

### `ADJ`

60 <tt><a href="el_gud-pos-ADJ.html">ADJ</a></tt> tokens (7% of all `ADJ` tokens) have a non-empty value of `NumType`.

The most frequent other feature values with which `ADJ` and `NumType` co-occurred: <tt><a href="el_gud-feat-Number.html">Number</a></tt><tt>=Sing</tt> (58; 97%), <tt><a href="el_gud-feat-Case.html">Case</a></tt><tt>=Acc</tt> (32; 53%), <tt><a href="el_gud-feat-Gender.html">Gender</a></tt><tt>=Fem</tt> (31; 52%).

`ADJ` tokens may have the following values of `NumType`:

* `Frac` (2; 3% of non-empty `NumType`): <em>τέταρτο</em>
* `Ord` (58; 97% of non-empty `NumType`): <em>πρώτη, δεύτερη, πρώτο, δεύτερο, πρώτος, πρώτης, τρίτη, δέκατο, πρώτοι, τρίτο</em>
* `EMPTY` (783): <em>κύριε, δική, Ασιάτη, Γεωργιανοί, ναυτιλιακές, άδεια, αστυνομικό, κυρία, μεγάλη, Αγίου</em>

<table>
  <tr><th>Paradigm <i>τέταρτος</i></th><th><tt>Ord</tt></th><th><tt>Frac</tt></th></tr>
  <tr><td><tt><tt><a href="el_gud-feat-Case.html">Case</a></tt><tt>=Acc</tt>|<tt><a href="el_gud-feat-Gender.html">Gender</a></tt><tt>=Masc</tt></tt></td><td><em>τέταρτο</em></td><td></td></tr>
  <tr><td><tt><tt><a href="el_gud-feat-Case.html">Case</a></tt><tt>=Nom</tt>|<tt><a href="el_gud-feat-Gender.html">Gender</a></tt><tt>=Neut</tt></tt></td><td></td><td><em>τέταρτο</em></td></tr>
</table>

### `NOUN`

1 <tt><a href="el_gud-pos-NOUN.html">NOUN</a></tt> tokens (0% of all `NOUN` tokens) have a non-empty value of `NumType`.

The most frequent other feature values with which `NOUN` and `NumType` co-occurred: <tt><a href="el_gud-feat-Case.html">Case</a></tt><tt>=Acc</tt> (1; 100%), <tt><a href="el_gud-feat-Gender.html">Gender</a></tt><tt>=Fem</tt> (1; 100%), <tt><a href="el_gud-feat-Number.html">Number</a></tt><tt>=Plur</tt> (1; 100%).

`NOUN` tokens may have the following values of `NumType`:

* `Sets` (1; 100% of non-empty `NumType`): <em>χιλιάδες</em>
* `EMPTY` (3212): <em>σπίτι, γραφείο, πόρτα, τηλέφωνο, αστυνόμε, δολοφονία, φορά, δουλειά, αστυνομία, εταιρείες</em>

## Relations with Agreement in `NumType`

The 10 most frequent relations where parent and child node agree in `NumType`:
<tt>ADJ --[<tt><a href="el_gud-dep-compound.html">compound</a></tt>]--> ADJ</tt> (1; 100%),
<tt>ADJ --[<tt><a href="el_gud-dep-flat.html">flat</a></tt>]--> ADJ</tt> (1; 100%).

