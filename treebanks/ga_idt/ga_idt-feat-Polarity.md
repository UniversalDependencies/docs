---
layout: base
title:  'Statistics of Polarity in UD_Irish-IDT'
udver: '2'
---

## Treebank Statistics: UD_Irish-IDT: Features: `Polarity`

This feature is universal.
It occurs with 1 different values: `Neg`.

1503 tokens (1%) have a non-empty value of `Polarity`.
270 types (2%) occur at least once with a non-empty value of `Polarity`.
111 lemmas (1%) occur at least once with a non-empty value of `Polarity`.
The feature is used with 3 part-of-speech tags: <tt><a href="ga_idt-pos-VERB.html">VERB</a></tt> (659; 1% instances), <tt><a href="ga_idt-pos-PART.html">PART</a></tt> (553; 0% instances), <tt><a href="ga_idt-pos-AUX.html">AUX</a></tt> (291; 0% instances).

### `VERB`

659 <tt><a href="ga_idt-pos-VERB.html">VERB</a></tt> tokens (8% of all `VERB` tokens) have a non-empty value of `Polarity`.

The most frequent other feature values with which `VERB` and `Polarity` co-occurred: <tt><a href="ga_idt-feat-Mood.html">Mood</a></tt><tt>=Ind</tt> (571; 87%), <tt><a href="ga_idt-feat-Person.html">Person</a></tt><tt>=EMPTY</tt> (531; 81%).

`VERB` tokens may have the following values of `Polarity`:

* `Neg` (659; 100% of non-empty `Polarity`): <em>níl, raibh, bhfuil, bheidh, mbeadh, mbeidh, bheadh, dhéanfaidh, fhaca, bhfaca</em>
* `EMPTY` (8108): <em>tá, bhí, atá, bhfuil, raibh, beidh, mbeadh, tháinig, thug, mbeidh</em>

`Polarity` seems to be **lexical feature** of `VERB`. 100% lemmas (103) occur only with one value of `Polarity`.

### `PART`

553 <tt><a href="ga_idt-pos-PART.html">PART</a></tt> tokens (8% of all `PART` tokens) have a non-empty value of `Polarity`.

The most frequent other feature values with which `PART` and `Polarity` co-occurred: <tt><a href="ga_idt-feat-Form.html">Form</a></tt><tt>=EMPTY</tt> (477; 86%), <tt><a href="ga_idt-feat-PronType.html">PronType</a></tt><tt>=EMPTY</tt> (477; 86%), <tt><a href="ga_idt-feat-PartType.html">PartType</a></tt><tt>=Vb</tt> (378; 68%).

`PART` tokens may have the following values of `Polarity`:

* `Neg` (553; 100% of non-empty `Polarity`): <em>nach, ní, níor, nár, ná, chan, n', cha</em>
* `EMPTY` (6422): <em>a, go, d', níos, is, ó, gur, ina, an, do</em>

### `AUX`

291 <tt><a href="ga_idt-pos-AUX.html">AUX</a></tt> tokens (19% of all `AUX` tokens) have a non-empty value of `Polarity`.

The most frequent other feature values with which `AUX` and `Polarity` co-occurred: <tt><a href="ga_idt-feat-VerbForm.html">VerbForm</a></tt><tt>=Cop</tt> (291; 100%), <tt><a href="ga_idt-feat-Form.html">Form</a></tt><tt>=EMPTY</tt> (273; 94%), <tt><a href="ga_idt-feat-Tense.html">Tense</a></tt><tt>=Pres</tt> (241; 83%).

`AUX` tokens may have the following values of `Polarity`:

* `Neg` (291; 100% of non-empty `Polarity`): <em>ní, nach, nár, níor, níorbh, nárbh, chan, nách</em>
* `EMPTY` (1264): <em>is, ba, gur, b', ar, gurb, an, gurbh, mba, ab</em>

## Relations with Agreement in `Polarity`

The 10 most frequent relations where parent and child node agree in `Polarity`:
<tt>VERB --[<tt><a href="ga_idt-dep-advmod.html">advmod</a></tt>]--> PART</tt> (283; 99%),
<tt>VERB --[<tt><a href="ga_idt-dep-mark-prt.html">mark:prt</a></tt>]--> PART</tt> (215; 100%),
<tt>VERB --[<tt><a href="ga_idt-dep-nsubj.html">nsubj</a></tt>]--> PART</tt> (34; 100%),
<tt>VERB --[<tt><a href="ga_idt-dep-obj.html">obj</a></tt>]--> PART</tt> (7; 78%),
<tt>VERB --[<tt><a href="ga_idt-dep-obl.html">obl</a></tt>]--> PART</tt> (5; 83%),
<tt>VERB --[<tt><a href="ga_idt-dep-cop.html">cop</a></tt>]--> AUX</tt> (2; 67%),
<tt>VERB --[<tt><a href="ga_idt-dep-mark.html">mark</a></tt>]--> PART</tt> (2; 100%),
<tt>VERB --[<tt><a href="ga_idt-dep-acl.html">acl</a></tt>]--> VERB</tt> (1; 100%),
<tt>VERB --[<tt><a href="ga_idt-dep-case.html">case</a></tt>]--> PART</tt> (1; 100%).

