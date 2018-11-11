---
layout: base
title:  'Statistics of Voice in UD_Hebrew-HTB'
udver: '2'
---

## Treebank Statistics: UD_Hebrew-HTB: Features: `Voice`

This feature is universal but the values `Mid` are language-specific.
It occurs with 3 different values: `Act`, `Mid`, `Pass`.

11415 tokens (7%) have a non-empty value of `Voice`.
4416 types (25%) occur at least once with a non-empty value of `Voice`.
1513 lemmas (15%) occur at least once with a non-empty value of `Voice`.
The feature is used with 1 part-of-speech tags: <tt><a href="he_htb-pos-VERB.html">VERB</a></tt> (11415; 7% instances).

### `VERB`

11415 <tt><a href="he_htb-pos-VERB.html">VERB</a></tt> tokens (80% of all `VERB` tokens) have a non-empty value of `Voice`.

The most frequent other feature values with which `VERB` and `Voice` co-occurred: <tt><a href="he_htb-feat-Number.html">Number</a></tt><tt>=Sing</tt> (6266; 55%), <tt><a href="he_htb-feat-Tense.html">Tense</a></tt><tt>=EMPTY</tt> (5949; 52%).

`VERB` tokens may have the following values of `Voice`:

* `Act` (8867; 78% of non-empty `Voice`): אמר, אומר, חולים, לעשות, כולל, יודע, רבים, הגיעו, לתת, עלה
* `Mid` (1480; 13% of non-empty `Voice`): נראה, נמצא, נעשה, נאמר, נקבע, נמסר, נפצעו, נבחר, ניתן, נודע
* `Pass` (1068; 9% of non-empty `Voice`): מדובר, הוחלט, הוגשה, הוטל, מדורגת, מוצע, סוכם, הוגש, הוגשו, הועברו
* `EMPTY` (2861): יש, אין, עבר, היו, היה, יהיה, יהיו, היתה, יצא, קבע

`Voice` seems to be **lexical feature** of `VERB`. 100% lemmas (1510) occur only with one value of `Voice`.

## Relations with Agreement in `Voice`

The 10 most frequent relations where parent and child node agree in `Voice`:
<tt>VERB --[<tt><a href="he_htb-dep-conj.html">conj</a></tt>]--> VERB</tt> (806; 51%),
<tt>VERB --[<tt><a href="he_htb-dep-xcomp.html">xcomp</a></tt>]--> VERB</tt> (566; 60%),
<tt>VERB --[<tt><a href="he_htb-dep-dep.html">dep</a></tt>]--> VERB</tt> (95; 63%),
<tt>VERB --[<tt><a href="he_htb-dep-nsubj.html">nsubj</a></tt>]--> VERB</tt> (28; 52%),
<tt>VERB --[<tt><a href="he_htb-dep-obj.html">obj</a></tt>]--> VERB</tt> (21; 70%),
<tt>VERB --[<tt><a href="he_htb-dep-nsubj-cop.html">nsubj:cop</a></tt>]--> VERB</tt> (1; 100%).

