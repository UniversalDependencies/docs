---
layout: base
title:  'Statistics of NumType in UD_Georgian-GLC'
udver: '2'
---

## Treebank Statistics: UD_Georgian-GLC: Features: `NumType`

This feature is universal.
It occurs with 3 different values: `Card`, `Mult`, `Ord`.

1024 tokens (2%) have a non-empty value of `NumType`.
404 types (3%) occur at least once with a non-empty value of `NumType`.
312 lemmas (3%) occur at least once with a non-empty value of `NumType`.
The feature is used with 1 part-of-speech tags: <tt><a href="ka_glc-pos-NUM.html">NUM</a></tt> (1024; 2% instances).

### `NUM`

1024 <tt><a href="ka_glc-pos-NUM.html">NUM</a></tt> tokens (100% of all `NUM` tokens) have a non-empty value of `NumType`.

The most frequent other feature values with which `NUM` and `NumType` co-occurred: <tt><a href="ka_glc-feat-Number.html">Number</a></tt><tt>=EMPTY</tt> (659; 64%), <tt><a href="ka_glc-feat-Case.html">Case</a></tt><tt>=EMPTY</tt> (637; 62%).

`NUM` tokens may have the following values of `NumType`:

* `Card` (821; 80% of non-empty `NumType`): <em>XIX, XX, ორი, ერთი, სამი, ერთ, XVII, XVIII, II, ორ</em>
* `Mult` (1; 0% of non-empty `NumType`): <em>ორჯერ</em>
* `Ord` (202; 20% of non-empty `NumType`): <em>პირველი, მეორე, პირველ, ბევრი, მესამე, ბევრ, მეოცე, ორივე, პირველმა, მე-20</em>
* `EMPTY` (1): <em>მეხუთედი</em>

<table>
  <tr><th>Paradigm <i>ორი</i></th><th><tt>Card</tt></th><th><tt>Ord</tt></th><th><tt>Mult</tt></th></tr>
  <tr><td><tt>_</tt></td><td></td><td></td><td><em>ორჯერ</em></td></tr>
  <tr><td><tt><tt><a href="ka_glc-feat-Case.html">Case</a></tt><tt>=Dat</tt>|<tt><a href="ka_glc-feat-Number.html">Number</a></tt><tt>=Sing</tt></tt></td><td><em>ორ</em></td><td><em>მეორე, მეორეს</em></td><td></td></tr>
  <tr><td><tt><tt><a href="ka_glc-feat-Case.html">Case</a></tt><tt>=Dat</tt>|<tt><a href="ka_glc-feat-Number.html">Number</a></tt><tt>=Sing</tt>|<tt><a href="ka_glc-feat-PartType.html">PartType</a></tt><tt>=Emp</tt></tt></td><td></td><td><em>მეორე</em></td><td></td></tr>
  <tr><td><tt><tt><a href="ka_glc-feat-Case.html">Case</a></tt><tt>=Ess</tt>|<tt><a href="ka_glc-feat-Number.html">Number</a></tt><tt>=Sing</tt></tt></td><td><em>ორ, ორად</em></td><td><em>მეორე</em></td><td></td></tr>
  <tr><td><tt><tt><a href="ka_glc-feat-Case.html">Case</a></tt><tt>=Gen</tt>|<tt><a href="ka_glc-feat-Number.html">Number</a></tt><tt>=Sing</tt></tt></td><td><em>ორი</em></td><td><em>მეორე, მეორის, ორივე, ორივეს</em></td><td></td></tr>
  <tr><td><tt><tt><a href="ka_glc-feat-Case.html">Case</a></tt><tt>=Ins</tt>|<tt><a href="ka_glc-feat-Number.html">Number</a></tt><tt>=Sing</tt></tt></td><td><em>ორი</em></td><td><em>მეორე</em></td><td></td></tr>
  <tr><td><tt><tt><a href="ka_glc-feat-Case.html">Case</a></tt><tt>=Nom</tt>|<tt><a href="ka_glc-feat-Number.html">Number</a></tt><tt>=Sing</tt></tt></td><td><em>ორი</em></td><td><em>მეორე, ორივე</em></td><td></td></tr>
  <tr><td><tt><tt><a href="ka_glc-feat-Case.html">Case</a></tt><tt>=Nom</tt>|<tt><a href="ka_glc-feat-Number.html">Number</a></tt><tt>=Sing</tt>|<tt><a href="ka_glc-feat-NumForm.html">NumForm</a></tt><tt>=Digit</tt></tt></td><td></td><td><em>მე‐2</em></td><td></td></tr>
  <tr><td><tt><tt><a href="ka_glc-feat-Case.html">Case</a></tt><tt>=Nom</tt>|<tt><a href="ka_glc-feat-Number.html">Number</a></tt><tt>=Sing</tt>|<tt><a href="ka_glc-feat-PartType.html">PartType</a></tt><tt>=Emp</tt></tt></td><td></td><td><em>მეორეც</em></td><td></td></tr>
</table>

`NumType` seems to be **lexical feature** of `NUM`. 97% lemmas (303) occur only with one value of `NumType`.

## Relations with Agreement in `NumType`

The 10 most frequent relations where parent and child node agree in `NumType`:
<tt>NUM --[<tt><a href="ka_glc-dep-nummod.html">nummod</a></tt>]--> NUM</tt> (18; 90%),
<tt>NUM --[<tt><a href="ka_glc-dep-conj.html">conj</a></tt>]--> NUM</tt> (8; 89%),
<tt>NUM --[<tt><a href="ka_glc-dep-obl.html">obl</a></tt>]--> NUM</tt> (1; 100%).

