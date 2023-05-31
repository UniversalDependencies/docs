---
layout: base
title:  'Statistics of Tense in UD_Turkish-Atis'
udver: '2'
---

## Treebank Statistics: UD_Turkish-Atis: Features: `Tense`

This feature is universal.
It occurs with 3 different values: `Fut`, `Past`, `Pres`.

4101 tokens (9%) have a non-empty value of `Tense`.
205 types (10%) occur at least once with a non-empty value of `Tense`.
88 lemmas (9%) occur at least once with a non-empty value of `Tense`.
The feature is used with 1 part-of-speech tags: <tt><a href="tr_atis-pos-VERB.html">VERB</a></tt> (4101; 9% instances).

### `VERB`

4101 <tt><a href="tr_atis-pos-VERB.html">VERB</a></tt> tokens (100% of all `VERB` tokens) have a non-empty value of `Tense`.

The most frequent other feature values with which `VERB` and `Tense` co-occurred: <tt><a href="tr_atis-feat-VerbForm.html">VerbForm</a></tt><tt>=Fin</tt> (4054; 99%), <tt><a href="tr_atis-feat-Number.html">Number</a></tt><tt>=Sing</tt> (3447; 84%), <tt><a href="tr_atis-feat-Polarity.html">Polarity</a></tt><tt>=Pos</tt> (3444; 84%), <tt><a href="tr_atis-feat-Aspect.html">Aspect</a></tt><tt>=EMPTY</tt> (2617; 64%).

`VERB` tokens may have the following values of `Tense`:

* `Fut` (12; 0% of non-empty `Tense`): <em>ayrılacağım, bulabileceğim, deneyeceğim, döneceğim, edeceğim, gidebileceğim, gideceğiz, kalacağım, olacak, uçabileceğim</em>
* `Past` (3; 0% of non-empty `Tense`): <em>isterdim, olurdu, yedi</em>
* `Pres` (4086; 100% of non-empty `Tense`): <em>göster, istiyorum, nedir, listeleyin, gösterin, listele, nelerdir, uçuyor, bul, ver</em>

<table>
  <tr><th>Paradigm <i>ol</i></th><th><tt>Pres</tt></th><th><tt>Fut</tt></th><th><tt>Past</tt></th></tr>
  <tr><td><tt><tt><a href="tr_atis-feat-Aspect.html">Aspect</a></tt><tt>=Hab</tt>|<tt><a href="tr_atis-feat-Mood.html">Mood</a></tt><tt>=Gen</tt></tt></td><td><em>olur</em></td><td></td><td></td></tr>
  <tr><td><tt><tt><a href="tr_atis-feat-Aspect.html">Aspect</a></tt><tt>=Perf</tt>|<tt><a href="tr_atis-feat-Mood.html">Mood</a></tt><tt>=Ind</tt></tt></td><td></td><td><em>olacak</em></td><td><em>olurdu</em></td></tr>
  <tr><td><tt><tt><a href="tr_atis-feat-Mood.html">Mood</a></tt><tt>=Imp</tt></tt></td><td><em>olsun</em></td><td></td><td></td></tr>
  <tr><td><tt><tt><a href="tr_atis-feat-Mood.html">Mood</a></tt><tt>=Nec</tt></tt></td><td><em>olmalı</em></td><td></td><td></td></tr>
</table>

## Relations with Agreement in `Tense`

The 10 most frequent relations where parent and child node agree in `Tense`:
<tt>VERB --[<tt><a href="tr_atis-dep-parataxis.html">parataxis</a></tt>]--> VERB</tt> (76; 94%),
<tt>VERB --[<tt><a href="tr_atis-dep-conj.html">conj</a></tt>]--> VERB</tt> (58; 98%),
<tt>VERB --[<tt><a href="tr_atis-dep-csubj.html">csubj</a></tt>]--> VERB</tt> (8; 100%),
<tt>VERB --[<tt><a href="tr_atis-dep-ccomp.html">ccomp</a></tt>]--> VERB</tt> (6; 86%),
<tt>VERB --[<tt><a href="tr_atis-dep-nsubj.html">nsubj</a></tt>]--> VERB</tt> (6; 100%),
<tt>VERB --[<tt><a href="tr_atis-dep-discourse.html">discourse</a></tt>]--> VERB</tt> (2; 100%).

