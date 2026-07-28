---
layout: base
title:  'Statistics of VerbForm in UD_Hebrew-PostRab'
udver: '2'
---

## Treebank Statistics: UD_Hebrew-PostRab: Features: `VerbForm`

This feature is universal.
It occurs with 2 different values: `Inf`, `Part`.

518 tokens (6%) have a non-empty value of `VerbForm`.
316 types (16%) occur at least once with a non-empty value of `VerbForm`.
219 lemmas (17%) occur at least once with a non-empty value of `VerbForm`.
The feature is used with 3 part-of-speech tags: <tt><a href="he_postrab-pos-VERB.html">VERB</a></tt> (477; 6% instances), <tt><a href="he_postrab-pos-AUX.html">AUX</a></tt> (25; 0% instances), <tt><a href="he_postrab-pos-ADJ.html">ADJ</a></tt> (16; 0% instances).

### `VERB`

477 <tt><a href="he_postrab-pos-VERB.html">VERB</a></tt> tokens (41% of all `VERB` tokens) have a non-empty value of `VerbForm`.

The most frequent other feature values with which `VERB` and `VerbForm` co-occurred: <tt><a href="he_postrab-feat-Tense.html">Tense</a></tt><tt>=EMPTY</tt> (453; 95%), <tt><a href="he_postrab-feat-Person.html">Person</a></tt><tt>=1,2,3</tt> (294; 62%), <tt><a href="he_postrab-feat-Gender.html">Gender</a></tt><tt>=Masc</tt> (272; 57%).

`VERB` tokens may have the following values of `VerbForm`:

* `Inf` (169; 35% of non-empty `VerbForm`): ליתן, לעשות, לומר, להתפלל, לכתוב, להגיד, להניח, להפסיק, לילך, ללמוד
* `Part` (308; 65% of non-empty `VerbForm`): אומר, אומרים, אוכל, מגורשת, קורא, נותן, רוצה, הולך, יוצא, יודע
* `EMPTY` (680): יש, אין, אמר, יצא, נאמר, בא, נתנ, יכתוב, יקרא, כתב

<table>
  <tr><th>Paradigm <i>אמר</i></th><th><tt>Inf</tt></th><th><tt>Part</tt></th></tr>
  <tr><td><tt>_</tt></td><td>לומר</td><td></td></tr>
  <tr><td><tt><tt><a href="he_postrab-feat-Gender.html">Gender</a></tt><tt>=Masc</tt>|<tt><a href="he_postrab-feat-Number.html">Number</a></tt><tt>=Sing</tt>|<tt><a href="he_postrab-feat-Person.html">Person</a></tt><tt>=1,2,3</tt></tt></td><td></td><td>אומר</td></tr>
  <tr><td><tt><tt><a href="he_postrab-feat-Gender.html">Gender</a></tt><tt>=Masc</tt>|<tt><a href="he_postrab-feat-Number.html">Number</a></tt><tt>=Plur</tt>|<tt><a href="he_postrab-feat-Person.html">Person</a></tt><tt>=1,2,3</tt></tt></td><td></td><td>אומרים</td></tr>
  <tr><td><tt><tt><a href="he_postrab-feat-Gender.html">Gender</a></tt><tt>=Fem</tt>|<tt><a href="he_postrab-feat-Number.html">Number</a></tt><tt>=Sing</tt>|<tt><a href="he_postrab-feat-Person.html">Person</a></tt><tt>=1,2,3</tt></tt></td><td></td><td>אומרת</td></tr>
</table>

### `AUX`

25 <tt><a href="he_postrab-pos-AUX.html">AUX</a></tt> tokens (26% of all `AUX` tokens) have a non-empty value of `VerbForm`.

The most frequent other feature values with which `AUX` and `VerbForm` co-occurred: <tt><a href="he_postrab-feat-Tense.html">Tense</a></tt><tt>=EMPTY</tt> (25; 100%), <tt><a href="he_postrab-feat-Person.html">Person</a></tt><tt>=1,2,3</tt> (24; 96%), <tt><a href="he_postrab-feat-Gender.html">Gender</a></tt><tt>=Masc</tt> (22; 88%), <tt><a href="he_postrab-feat-Number.html">Number</a></tt><tt>=Sing</tt> (22; 88%).

`AUX` tokens may have the following values of `VerbForm`:

* `Inf` (1; 4% of non-empty `VerbForm`): בהיות
* `Part` (24; 96% of non-empty `VerbForm`): צריך, יכול, יכולה, צריכים, צריכין
* `EMPTY` (73): היה, היו, יהיו, צריך, היתה, הוי, יהיה, יהא, עתידין, אמרתי

### `ADJ`

16 <tt><a href="he_postrab-pos-ADJ.html">ADJ</a></tt> tokens (6% of all `ADJ` tokens) have a non-empty value of `VerbForm`.

The most frequent other feature values with which `ADJ` and `VerbForm` co-occurred: <tt><a href="he_postrab-feat-Gender.html">Gender</a></tt><tt>=Masc</tt> (15; 94%), <tt><a href="he_postrab-feat-Number.html">Number</a></tt><tt>=Sing</tt> (11; 69%).

`ADJ` tokens may have the following values of `VerbForm`:

* `Part` (16; 100% of non-empty `VerbForm`): מכוון, ראוי, באין, בטל, דבוק, חייב, חלוקה, להוטים, מוכן, מחולקין
* `EMPTY` (240): מותר, אחר, אסור, ברוך, גדול, אחרים, קדוש, אחרות, גבוה, זול

`VerbForm` seems to be **lexical feature** of `ADJ`. 100% lemmas (14) occur only with one value of `VerbForm`.

## Relations with Agreement in `VerbForm`

The 10 most frequent relations where parent and child node agree in `VerbForm`:
<tt>VERB --[<tt><a href="he_postrab-dep-conj.html">conj</a></tt>]--> VERB</tt> (68; 55%),
<tt>AUX --[<tt><a href="he_postrab-dep-conj.html">conj</a></tt>]--> AUX</tt> (2; 100%),
<tt>ADJ --[<tt><a href="he_postrab-dep-advcl.html">advcl</a></tt>]--> AUX</tt> (1; 100%),
<tt>ADJ --[<tt><a href="he_postrab-dep-conj.html">conj</a></tt>]--> ADJ</tt> (1; 100%),
<tt>AUX --[<tt><a href="he_postrab-dep-dislocated.html">dislocated</a></tt>]--> VERB</tt> (1; 100%),
<tt>VERB --[<tt><a href="he_postrab-dep-acl-relcl.html">acl:relcl</a></tt>]--> VERB</tt> (1; 100%),
<tt>VERB --[<tt><a href="he_postrab-dep-compound-svc.html">compound:svc</a></tt>]--> VERB</tt> (1; 100%).

