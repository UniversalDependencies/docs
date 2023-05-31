---
layout: base
title:  'Statistics of VerbForm in UD_Amharic-ATT'
udver: '2'
---

## Treebank Statistics: UD_Amharic-ATT: Features: `VerbForm`

This feature is universal but the values `Conv`, `Vnoun` are language-specific.
It occurs with 3 different values: `Conv`, `Fin`, `Vnoun`.

1701 tokens (17%) have a non-empty value of `VerbForm`.
726 types (49%) occur at least once with a non-empty value of `VerbForm`.
727 lemmas (50%) occur at least once with a non-empty value of `VerbForm`.
The feature is used with 2 part-of-speech tags: <tt><a href="am_att-pos-VERB.html">VERB</a></tt> (1552; 16% instances), <tt><a href="am_att-pos-NOUN.html">NOUN</a></tt> (149; 1% instances).

### `VERB`

1552 <tt><a href="am_att-pos-VERB.html">VERB</a></tt> tokens (100% of all `VERB` tokens) have a non-empty value of `VerbForm`.

The most frequent other feature values with which `VERB` and `VerbForm` co-occurred: <tt><a href="am_att-feat-Mood.html">Mood</a></tt><tt>=Ind</tt> (1466; 94%), <tt><a href="am_att-feat-Voice.html">Voice</a></tt><tt>=EMPTY</tt> (1300; 84%).

`VERB` tokens may have the following values of `VerbForm`:

* `Conv` (52; 3% of non-empty `VerbForm`): ገዝት, ብል, መጥት, በልት, ከፍት, ዘንብ, ይዝ, ሄድ, ሠራርት, ረጥብ
* `Fin` (1483; 96% of non-empty `VerbForm`): ሄድ, መጣ, ኣል, ሆን, በላ, ብል, ሰጥ, ቀር, ገዛ, ል
* `Vnoun` (17; 1% of non-empty `VerbForm`): መምጣት, ማለፍ, መሄጃ, መሆን, መሆኛ, መስል, መስረቅ, መኖር, መወሰን, መውደቅ
* `EMPTY` (1): ጀመር

<table>
  <tr><th>Paradigm <i>ሄድ</i></th><th><tt>Fin</tt></th><th><tt>Conv</tt></th></tr>
  <tr><td><tt>_</tt></td><td></td><td>ሄድ</td></tr>
  <tr><td><tt><tt><a href="am_att-feat-Mood.html">Mood</a></tt><tt>=Ind</tt></tt></td><td>ሄድ</td><td></td></tr>
</table>

`VerbForm` seems to be **lexical feature** of `VERB`. 97% lemmas (637) occur only with one value of `VerbForm`.

### `NOUN`

149 <tt><a href="am_att-pos-NOUN.html">NOUN</a></tt> tokens (10% of all `NOUN` tokens) have a non-empty value of `VerbForm`.

`NOUN` tokens may have the following values of `VerbForm`:

* `Vnoun` (149; 100% of non-empty `VerbForm`): መሄድ, መምጣት, መሆን, መሥራት, መግደል, መክፈል, መስራት, መቆየት, መታመም, መጻፍ
* `EMPTY` (1337): ቤት, ልጅ, ገንዘብ, ልብስ, ጊዜ, ልጆች, ሰው, አስተማሪ, መጽሐፍ, መኪና

`VerbForm` seems to be **lexical feature** of `NOUN`. 100% lemmas (82) occur only with one value of `VerbForm`.

## Relations with Agreement in `VerbForm`

The 10 most frequent relations where parent and child node agree in `VerbForm`:
<tt>VERB --[<tt><a href="am_att-dep-advcl.html">advcl</a></tt>]--> VERB</tt> (220; 89%),
<tt>VERB --[<tt><a href="am_att-dep-ccomp.html">ccomp</a></tt>]--> VERB</tt> (73; 97%),
<tt>VERB --[<tt><a href="am_att-dep-xcomp.html">xcomp</a></tt>]--> VERB</tt> (54; 92%),
<tt>VERB --[<tt><a href="am_att-dep-conj.html">conj</a></tt>]--> VERB</tt> (24; 92%),
<tt>VERB --[<tt><a href="am_att-dep-compound-svc.html">compound:svc</a></tt>]--> VERB</tt> (19; 56%),
<tt>VERB --[<tt><a href="am_att-dep-compound.html">compound</a></tt>]--> VERB</tt> (17; 100%),
<tt>VERB --[<tt><a href="am_att-dep-csubj.html">csubj</a></tt>]--> VERB</tt> (4; 67%),
<tt>VERB --[<tt><a href="am_att-dep-acl.html">acl</a></tt>]--> VERB</tt> (3; 75%),
<tt>VERB --[<tt><a href="am_att-dep-parataxis.html">parataxis</a></tt>]--> VERB</tt> (3; 75%),
<tt>VERB --[<tt><a href="am_att-dep-discourse.html">discourse</a></tt>]--> VERB</tt> (2; 100%).

