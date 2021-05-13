---
layout: base
title:  'Statistics of VerbForm in UD_Hebrew-HTB'
udver: '2'
---

## Treebank Statistics: UD_Hebrew-HTB: Features: `VerbForm`

This feature is universal.
It occurs with 2 different values: `Inf`, `Part`.

7748 tokens (5%) have a non-empty value of `VerbForm`.
2744 types (15%) occur at least once with a non-empty value of `VerbForm`.
1427 lemmas (14%) occur at least once with a non-empty value of `VerbForm`.
The feature is used with 2 part-of-speech tags: <tt><a href="he_htb-pos-VERB.html">VERB</a></tt> (6829; 4% instances), <tt><a href="he_htb-pos-AUX.html">AUX</a></tt> (919; 1% instances).

### `VERB`

6829 <tt><a href="he_htb-pos-VERB.html">VERB</a></tt> tokens (48% of all `VERB` tokens) have a non-empty value of `VerbForm`.

The most frequent other feature values with which `VERB` and `VerbForm` co-occurred: <tt><a href="he_htb-feat-Tense.html">Tense</a></tt><tt>=EMPTY</tt> (6829; 100%), <tt><a href="he_htb-feat-Voice.html">Voice</a></tt><tt>=Act</tt> (4964; 73%), <tt><a href="he_htb-feat-Person.html">Person</a></tt><tt>=1,2,3</tt> (4232; 62%).

`VERB` tokens may have the following values of `VerbForm`:

* `Inf` (2510; 37% of non-empty `VerbForm`): לעשות, לתת, לשלם, לחיות, לפנות, למנוע, לבצע, לקבל, למצוא, לצפות
* `Part` (4319; 63% of non-empty `VerbForm`): מדובר, אומר, חולים, כולל, נראה, יודע, רבים, רוצה, עולה, רוצים
* `EMPTY` (7447): יש, אין, אמר, עבר, היו, היה, הגיעו, עלה, הגיע, טען

<table>
  <tr><th>Paradigm <i>אמר</i></th><th><tt>Inf</tt></th><th><tt>Part</tt></th></tr>
  <tr><td><tt><tt><a href="he_htb-feat-Gender.html">Gender</a></tt><tt>=Masc</tt>|<tt><a href="he_htb-feat-Number.html">Number</a></tt><tt>=Sing</tt>|<tt><a href="he_htb-feat-Person.html">Person</a></tt><tt>=1,2,3</tt></tt></td><td></td><td>אומר</td></tr>
  <tr><td><tt><tt><a href="he_htb-feat-Gender.html">Gender</a></tt><tt>=Masc</tt>|<tt><a href="he_htb-feat-Number.html">Number</a></tt><tt>=Plur</tt>|<tt><a href="he_htb-feat-Person.html">Person</a></tt><tt>=1,2,3</tt></tt></td><td></td><td>אומרים</td></tr>
  <tr><td><tt><tt><a href="he_htb-feat-Gender.html">Gender</a></tt><tt>=Fem</tt>|<tt><a href="he_htb-feat-Number.html">Number</a></tt><tt>=Sing</tt>|<tt><a href="he_htb-feat-Person.html">Person</a></tt><tt>=1,2,3</tt></tt></td><td></td><td>אומרת</td></tr>
  <tr><td><tt><tt><a href="he_htb-feat-Gender.html">Gender</a></tt><tt>=Fem</tt>|<tt><a href="he_htb-feat-Number.html">Number</a></tt><tt>=Plur</tt>|<tt><a href="he_htb-feat-Person.html">Person</a></tt><tt>=1,2,3</tt></tt></td><td></td><td>אומרות</td></tr>
  <tr><td><tt></tt></td><td>לומר</td><td></td></tr>
</table>

### `AUX`

919 <tt><a href="he_htb-pos-AUX.html">AUX</a></tt> tokens (37% of all `AUX` tokens) have a non-empty value of `VerbForm`.

The most frequent other feature values with which `AUX` and `VerbForm` co-occurred: <tt><a href="he_htb-feat-Tense.html">Tense</a></tt><tt>=EMPTY</tt> (919; 100%), <tt><a href="he_htb-feat-VerbType.html">VerbType</a></tt><tt>=Cop</tt> (805; 88%), <tt><a href="he_htb-feat-Person.html">Person</a></tt><tt>=3</tt> (698; 76%), <tt><a href="he_htb-feat-Number.html">Number</a></tt><tt>=Sing</tt> (650; 71%), <tt><a href="he_htb-feat-Polarity.html">Polarity</a></tt><tt>=Pos</tt> (489; 53%), <tt><a href="he_htb-feat-Gender.html">Gender</a></tt><tt>=Masc</tt> (476; 52%).

`AUX` tokens may have the following values of `VerbForm`:

* `Inf` (89; 10% of non-empty `VerbForm`): להיות
* `Part` (830; 90% of non-empty `VerbForm`): הוא, היא, אינו, אינה, אינם, יכול, הם, יכולה, אינן, איננו
* `EMPTY` (1568): היה, היו, היתה, אפשר, יהיה, יש, צריך, תהיה, קשה, ייתכן

## Relations with Agreement in `VerbForm`

The 10 most frequent relations where parent and child node agree in `VerbForm`:
<tt>VERB --[<tt><a href="he_htb-dep-conj.html">conj</a></tt>]--> VERB</tt> (486; 67%),
<tt>VERB --[<tt><a href="he_htb-dep-advmod.html">advmod</a></tt>]--> AUX</tt> (168; 98%),
<tt>VERB --[<tt><a href="he_htb-dep-dep.html">dep</a></tt>]--> VERB</tt> (101; 76%),
<tt>AUX --[<tt><a href="he_htb-dep-dep.html">dep</a></tt>]--> AUX</tt> (1; 100%),
<tt>VERB --[<tt><a href="he_htb-dep-aux.html">aux</a></tt>]--> VERB</tt> (1; 100%).

