---
layout: base
title:  'Statistics of NumType in UD_Belarusian-HSE'
udver: '2'
---

## Treebank Statistics: UD_Belarusian-HSE: Features: `NumType`

This feature is universal.
It occurs with 2 different values: `Card`, `Sets`.

4796 tokens (2%) have a non-empty value of `NumType`.
708 types (1%) occur at least once with a non-empty value of `NumType`.
614 lemmas (2%) occur at least once with a non-empty value of `NumType`.
The feature is used with 2 part-of-speech tags: <tt><a href="be_hse-pos-NUM.html">NUM</a></tt> (4790; 2% instances), <tt><a href="be_hse-pos-DET.html">DET</a></tt> (6; 0% instances).

### `NUM`

4790 <tt><a href="be_hse-pos-NUM.html">NUM</a></tt> tokens (82% of all `NUM` tokens) have a non-empty value of `NumType`.

The most frequent other feature values with which `NUM` and `NumType` co-occurred: <tt><a href="be_hse-feat-Case.html">Case</a></tt><tt>=EMPTY</tt> (3738; 78%).

`NUM` tokens may have the following values of `NumType`:

* `Card` (4710; 98% of non-empty `NumType`): <em>10, 2, 5, 1, 20, 3, 100, 15, 18, 7</em>
* `Sets` (80; 2% of non-empty `NumType`): <em>двое, трое, абодва, дваіх, абодвух, пяцёра, абедзьве, траіх, чацвёра, шасьцёра</em>
* `EMPTY` (1054): <em>некалькі, колькі, 19:00, 20:30, 16:00, 12:00, 20:00, некалькіх, 21:00, 17:00</em>

<table>
  <tr><th>Paradigm <i>абодва</i></th><th><tt>Card</tt></th><th><tt>Sets</tt></th></tr>
  <tr><td><tt><tt><a href="be_hse-feat-Animacy.html">Animacy</a></tt><tt>=Anim</tt>|<tt><a href="be_hse-feat-Case.html">Case</a></tt><tt>=Acc</tt>|<tt><a href="be_hse-feat-Gender.html">Gender</a></tt><tt>=Masc</tt></tt></td><td></td><td><em>абодвух</em></td></tr>
  <tr><td><tt><tt><a href="be_hse-feat-Animacy.html">Animacy</a></tt><tt>=Inan</tt>|<tt><a href="be_hse-feat-Case.html">Case</a></tt><tt>=Acc</tt>|<tt><a href="be_hse-feat-Gender.html">Gender</a></tt><tt>=Masc</tt></tt></td><td><em>абодва</em></td><td><em>абодва</em></td></tr>
  <tr><td><tt><tt><a href="be_hse-feat-Animacy.html">Animacy</a></tt><tt>=Inan</tt>|<tt><a href="be_hse-feat-Case.html">Case</a></tt><tt>=Acc</tt>|<tt><a href="be_hse-feat-Gender.html">Gender</a></tt><tt>=Fem</tt></tt></td><td></td><td><em>Абедзьве</em></td></tr>
  <tr><td><tt><tt><a href="be_hse-feat-Case.html">Case</a></tt><tt>=Gen</tt>|<tt><a href="be_hse-feat-Gender.html">Gender</a></tt><tt>=Masc</tt></tt></td><td><em>абодвух</em></td><td><em>абодвух</em></td></tr>
  <tr><td><tt><tt><a href="be_hse-feat-Case.html">Case</a></tt><tt>=Gen</tt>|<tt><a href="be_hse-feat-Gender.html">Gender</a></tt><tt>=Fem</tt></tt></td><td><em>абедзвюх</em></td><td></td></tr>
  <tr><td><tt><tt><a href="be_hse-feat-Case.html">Case</a></tt><tt>=Nom</tt></tt></td><td></td><td><em>абодва</em></td></tr>
  <tr><td><tt><tt><a href="be_hse-feat-Case.html">Case</a></tt><tt>=Nom</tt>|<tt><a href="be_hse-feat-Gender.html">Gender</a></tt><tt>=Masc</tt></tt></td><td></td><td><em>Абодва</em></td></tr>
  <tr><td><tt><tt><a href="be_hse-feat-Case.html">Case</a></tt><tt>=Nom</tt>|<tt><a href="be_hse-feat-Gender.html">Gender</a></tt><tt>=Fem</tt></tt></td><td></td><td><em>абедзьве</em></td></tr>
</table>

`NumType` seems to be **lexical feature** of `NUM`. 100% lemmas (613) occur only with one value of `NumType`.

### `DET`

6 <tt><a href="be_hse-pos-DET.html">DET</a></tt> tokens (0% of all `DET` tokens) have a non-empty value of `NumType`.

The most frequent other feature values with which `DET` and `NumType` co-occurred: <tt><a href="be_hse-feat-Number.html">Number</a></tt><tt>=Sing</tt> (6; 100%), <tt><a href="be_hse-feat-Poss.html">Poss</a></tt><tt>=EMPTY</tt> (6; 100%), <tt><a href="be_hse-feat-PronType.html">PronType</a></tt><tt>=EMPTY</tt> (6; 100%), <tt><a href="be_hse-feat-Reflex.html">Reflex</a></tt><tt>=EMPTY</tt> (6; 100%), <tt><a href="be_hse-feat-Animacy.html">Animacy</a></tt><tt>=EMPTY</tt> (5; 83%), <tt><a href="be_hse-feat-Case.html">Case</a></tt><tt>=Nom</tt> (4; 67%).

`DET` tokens may have the following values of `NumType`:

* `Card` (6; 100% of non-empty `NumType`): <em>адзін, адна, аднаго, адно, адной</em>
* `EMPTY` (6725): <em>яго, гэты, наш, яе, свой, сваю, іх, той, тым, свае</em>

## Relations with Agreement in `NumType`

The 10 most frequent relations where parent and child node agree in `NumType`:
<tt>NUM --[<tt><a href="be_hse-dep-list.html">list</a></tt>]--> NUM</tt> (269; 98%),
<tt>NUM --[<tt><a href="be_hse-dep-nmod.html">nmod</a></tt>]--> NUM</tt> (122; 90%),
<tt>NUM --[<tt><a href="be_hse-dep-conj.html">conj</a></tt>]--> NUM</tt> (43; 96%),
<tt>NUM --[<tt><a href="be_hse-dep-nummod.html">nummod</a></tt>]--> NUM</tt> (5; 71%),
<tt>NUM --[<tt><a href="be_hse-dep-nummod-gov.html">nummod:gov</a></tt>]--> NUM</tt> (4; 100%),
<tt>NUM --[<tt><a href="be_hse-dep-parataxis.html">parataxis</a></tt>]--> NUM</tt> (4; 100%),
<tt>NUM --[<tt><a href="be_hse-dep-appos.html">appos</a></tt>]--> NUM</tt> (3; 100%),
<tt>DET --[<tt><a href="be_hse-dep-fixed.html">fixed</a></tt>]--> DET</tt> (2; 100%),
<tt>NUM --[<tt><a href="be_hse-dep-flat.html">flat</a></tt>]--> NUM</tt> (2; 67%),
<tt>NUM --[<tt><a href="be_hse-dep-compound.html">compound</a></tt>]--> NUM</tt> (1; 100%).

