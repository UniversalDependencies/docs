---
layout: base
title:  'Statistics of PronType in UD_Old_East_Slavic-TOROT'
udver: '2'
---

## Treebank Statistics: UD_Old_East_Slavic-TOROT: Features: `PronType`

This feature is universal.
It occurs with 4 different values: `Int`, `Prs`, `Rcp`, `Rel`.

12099 tokens (8%) have a non-empty value of `PronType`.
442 types (1%) occur at least once with a non-empty value of `PronType`.
66 lemmas (1%) occur at least once with a non-empty value of `PronType`.
The feature is used with 2 part-of-speech tags: <tt><a href="orv_torot-pos-PRON.html">PRON</a></tt> (11222; 7% instances), <tt><a href="orv_torot-pos-ADV.html">ADV</a></tt> (877; 1% instances).

### `PRON`

11222 <tt><a href="orv_torot-pos-PRON.html">PRON</a></tt> tokens (100% of all `PRON` tokens) have a non-empty value of `PronType`.

The most frequent other feature values with which `PRON` and `PronType` co-occurred: <tt><a href="orv_torot-feat-Number.html">Number</a></tt><tt>=Sing</tt> (8660; 77%), <tt><a href="orv_torot-feat-Person.html">Person</a></tt><tt>=3</tt> (7871; 70%), <tt><a href="orv_torot-feat-Reflex.html">Reflex</a></tt><tt>=EMPTY</tt> (7847; 70%), <tt><a href="orv_torot-feat-Gender.html">Gender</a></tt><tt>=Masc</tt> (7078; 63%).

`PRON` tokens may have the following values of `PronType`:

* `Int` (224; 2% of non-empty `PronType`): <em>что, кто, чьто, чему, кого, кому, къто, когѡ, чемѹ, што</em>
* `Prs` (10107; 90% of non-empty `PronType`): <em>сѧ, ѥго, и, ихъ, ѥму, имъ, сꙗ, его, ми, ѥмѹ</em>
* `Rcp` (36; 0% of non-empty `PronType`): <em>другъ, дроуг, дроуга, друга, другу, дроугъ, дрѹга, дрѹгъ, дрѹг҃, дрȣгъ</em>
* `Rel` (855; 8% of non-empty `PronType`): <em>иже, ѥже, еже, ѥгоже, юже, яже, что, елико, же, ꙗже</em>

<table>
  <tr><th>Paradigm <i>чьто</i></th><th><tt>Int</tt></th><th><tt>Rel</tt></th></tr>
  <tr><td><tt><tt><a href="orv_torot-feat-Case.html">Case</a></tt><tt>=Acc</tt></tt></td><td><em>что, чьто, што, цето, цьто, цьтъ</em></td><td><em>что, цто, чето</em></td></tr>
  <tr><td><tt><tt><a href="orv_torot-feat-Case.html">Case</a></tt><tt>=Dat</tt></tt></td><td><em>чему, чемѹ</em></td><td></td></tr>
  <tr><td><tt><tt><a href="orv_torot-feat-Case.html">Case</a></tt><tt>=Gen</tt></tt></td><td><em>чего, чьсо</em></td><td></td></tr>
  <tr><td><tt><tt><a href="orv_torot-feat-Case.html">Case</a></tt><tt>=Ins</tt></tt></td><td><em>чимъ, чимь, чѣм</em></td><td></td></tr>
  <tr><td><tt><tt><a href="orv_torot-feat-Case.html">Case</a></tt><tt>=Nom</tt></tt></td><td><em>что, чьто, што</em></td><td><em>что, цто</em></td></tr>
</table>

### `ADV`

877 <tt><a href="orv_torot-pos-ADV.html">ADV</a></tt> tokens (7% of all `ADV` tokens) have a non-empty value of `PronType`.

The most frequent other feature values with which `ADV` and `PronType` co-occurred: <tt><a href="orv_torot-feat-Polarity.html">Polarity</a></tt><tt>=EMPTY</tt> (877; 100%).

`ADV` tokens may have the following values of `PronType`:

* `Int` (266; 30% of non-empty `PronType`): <em>ли, како, колико, камо, почто, кде, какъ, кдѣ, гдѣ, колько</em>
* `Rel` (611; 70% of non-empty `PronType`): <em>ꙗкоже, ꙗко, идеже, яко, якоже, ѥгда, егда, якож, како, кдѣ</em>
* `EMPTY` (12510): <em>же, не, бо, и, тако, то, да, пакы, ли, ту</em>

<table>
  <tr><th>Paradigm <i>како</i></th><th><tt>Int</tt></th><th><tt>Rel</tt></th></tr>
  <tr><td><tt></tt></td><td><em>како, какъ</em></td><td><em>како, как, какъ, как҃о</em></td></tr>
</table>

## Relations with Agreement in `PronType`

The 10 most frequent relations where parent and child node agree in `PronType`:
<tt>PRON --[<tt><a href="orv_torot-dep-flat.html">flat</a></tt>]--> PRON</tt> (30; 100%),
<tt>PRON --[<tt><a href="orv_torot-dep-conj.html">conj</a></tt>]--> PRON</tt> (10; 100%),
<tt>ADV --[<tt><a href="orv_torot-dep-flat.html">flat</a></tt>]--> ADV</tt> (9; 100%),
<tt>PRON --[<tt><a href="orv_torot-dep-orphan.html">orphan</a></tt>]--> PRON</tt> (5; 83%),
<tt>ADV --[<tt><a href="orv_torot-dep-conj.html">conj</a></tt>]--> ADV</tt> (3; 100%),
<tt>PRON --[<tt><a href="orv_torot-dep-advcl.html">advcl</a></tt>]--> PRON</tt> (1; 100%),
<tt>PRON --[<tt><a href="orv_torot-dep-det.html">det</a></tt>]--> PRON</tt> (1; 100%).

