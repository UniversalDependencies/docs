---
layout: base
title:  'Statistics of VerbForm in UD_Hebrew-HTB'
udver: '2'
---

## Treebank Statistics: UD_Hebrew-HTB: Features: `VerbForm`

This feature is universal.
It occurs with 2 different values: `Inf`, `Part`.

7252 tokens (5%) have a non-empty value of `VerbForm`.
2738 types (15%) occur at least once with a non-empty value of `VerbForm`.
1423 lemmas (14%) occur at least once with a non-empty value of `VerbForm`.
The feature is used with 2 part-of-speech tags: <tt><a href="he_htb-pos-VERB.html">VERB</a></tt> (6847; 4% instances), <tt><a href="he_htb-pos-AUX.html">AUX</a></tt> (405; 0% instances).

### `VERB`

6847 <tt><a href="he_htb-pos-VERB.html">VERB</a></tt> tokens (48% of all `VERB` tokens) have a non-empty value of `VerbForm`.

The most frequent other feature values with which `VERB` and `VerbForm` co-occurred: <tt><a href="he_htb-feat-Tense.html">Tense</a></tt><tt>=EMPTY</tt> (6847; 100%), <tt><a href="he_htb-feat-Voice.html">Voice</a></tt><tt>=Act</tt> (4884; 71%), <tt><a href="he_htb-feat-Person.html">Person</a></tt><tt>=1,2,3</tt> (4246; 62%).

`VERB` tokens may have the following values of `VerbForm`:

* `Inf` (2496; 36% of non-empty `VerbForm`): לעשות, לתת, לשלם, לפנות, למנוע, לבצע, לקבל, לחיות, למצוא, לצפות
* `Part` (4351; 64% of non-empty `VerbForm`): מדובר, אומר, יכול, חולים, כולל, נראה, רוצה, יודע, עולה, יכולה
* `EMPTY` (7441): יש, אין, אמר, עבר, היו, היה, עלה, הגיע, הגיעו, טען

<table>
  <tr><th>Paradigm <i>אמר</i></th><th><tt>Inf</tt></th><th><tt>Part</tt></th></tr>
  <tr><td><tt><tt><a href="he_htb-feat-Gender.html">Gender</a></tt><tt>=Masc</tt>|<tt><a href="he_htb-feat-Number.html">Number</a></tt><tt>=Sing</tt>|<tt><a href="he_htb-feat-Person.html">Person</a></tt><tt>=1,2,3</tt></tt></td><td></td><td>אומר</td></tr>
  <tr><td><tt><tt><a href="he_htb-feat-Gender.html">Gender</a></tt><tt>=Masc</tt>|<tt><a href="he_htb-feat-Number.html">Number</a></tt><tt>=Plur</tt>|<tt><a href="he_htb-feat-Person.html">Person</a></tt><tt>=1,2,3</tt></tt></td><td></td><td>אומרים</td></tr>
  <tr><td><tt><tt><a href="he_htb-feat-Gender.html">Gender</a></tt><tt>=Fem</tt>|<tt><a href="he_htb-feat-Number.html">Number</a></tt><tt>=Sing</tt>|<tt><a href="he_htb-feat-Person.html">Person</a></tt><tt>=1,2,3</tt></tt></td><td></td><td>אומרת</td></tr>
  <tr><td><tt><tt><a href="he_htb-feat-Gender.html">Gender</a></tt><tt>=Fem</tt>|<tt><a href="he_htb-feat-Number.html">Number</a></tt><tt>=Plur</tt>|<tt><a href="he_htb-feat-Person.html">Person</a></tt><tt>=1,2,3</tt></tt></td><td></td><td>אומרות</td></tr>
  <tr><td><tt></tt></td><td>לומר</td><td></td></tr>
</table>

### `AUX`

405 <tt><a href="he_htb-pos-AUX.html">AUX</a></tt> tokens (33% of all `AUX` tokens) have a non-empty value of `VerbForm`.

The most frequent other feature values with which `AUX` and `VerbForm` co-occurred: <tt><a href="he_htb-feat-Tense.html">Tense</a></tt><tt>=EMPTY</tt> (405; 100%), <tt><a href="he_htb-feat-VerbType.html">VerbType</a></tt><tt>=Cop</tt> (405; 100%), <tt><a href="he_htb-feat-Polarity.html">Polarity</a></tt><tt>=Neg</tt> (310; 77%), <tt><a href="he_htb-feat-Person.html">Person</a></tt><tt>=3</tt> (298; 74%), <tt><a href="he_htb-feat-Number.html">Number</a></tt><tt>=Sing</tt> (223; 55%).

`AUX` tokens may have the following values of `VerbForm`:

* `Inf` (89; 22% of non-empty `VerbForm`): להיות
* `Part` (316; 78% of non-empty `VerbForm`): אינו, אינה, אינם, אינן, איננו, איננה, אינני, איני, אינך, הינו
* `EMPTY` (834): היה, היו, היתה, יהיה, תהיה, יהיו, הייתי, היינו, הייה, היית

## Relations with Agreement in `VerbForm`

The 10 most frequent relations where parent and child node agree in `VerbForm`:
<tt>VERB --[<tt><a href="he_htb-dep-conj.html">conj</a></tt>]--> VERB</tt> (496; 72%),
<tt>VERB --[<tt><a href="he_htb-dep-cop.html">cop</a></tt>]--> AUX</tt> (192; 56%),
<tt>VERB --[<tt><a href="he_htb-dep-dep.html">dep</a></tt>]--> VERB</tt> (75; 69%),
<tt>AUX --[<tt><a href="he_htb-dep-conj.html">conj</a></tt>]--> VERB</tt> (3; 75%),
<tt>AUX --[<tt><a href="he_htb-dep-dep.html">dep</a></tt>]--> VERB</tt> (2; 67%),
<tt>VERB --[<tt><a href="he_htb-dep-dep.html">dep</a></tt>]--> AUX</tt> (1; 100%),
<tt>VERB --[<tt><a href="he_htb-dep-nmod.html">nmod</a></tt>]--> VERB</tt> (1; 100%).

