---
layout: base
title:  'Statistics of Aspect in UD_Turkish-Atis'
udver: '2'
---

## Treebank Statistics: UD_Turkish-Atis: Features: `Aspect`

This feature is universal but the values `Hab` are language-specific.
It occurs with 3 different values: `Hab`, `Perf`, `Prog`.

1484 tokens (3%) have a non-empty value of `Aspect`.
131 types (6%) occur at least once with a non-empty value of `Aspect`.
51 lemmas (5%) occur at least once with a non-empty value of `Aspect`.
The feature is used with 1 part-of-speech tags: <tt><a href="tr_atis-pos-VERB.html">VERB</a></tt> (1484; 3% instances).

### `VERB`

1484 <tt><a href="tr_atis-pos-VERB.html">VERB</a></tt> tokens (36% of all `VERB` tokens) have a non-empty value of `Aspect`.

The most frequent other feature values with which `VERB` and `Aspect` co-occurred: <tt><a href="tr_atis-feat-VerbForm.html">VerbForm</a></tt><tt>=Fin</tt> (1484; 100%), <tt><a href="tr_atis-feat-Number.html">Number</a></tt><tt>=Sing</tt> (1479; 100%), <tt><a href="tr_atis-feat-Tense.html">Tense</a></tt><tt>=Pres</tt> (1469; 99%), <tt><a href="tr_atis-feat-Polarity.html">Polarity</a></tt><tt>=Pos</tt> (1468; 99%), <tt><a href="tr_atis-feat-Mood.html">Mood</a></tt><tt>=Ind</tt> (1202; 81%), <tt><a href="tr_atis-feat-Person.html">Person</a></tt><tt>=1</tt> (822; 55%).

`VERB` tokens may have the following values of `Aspect`:

* `Hab` (278; 19% of non-empty `Aspect`): <em>söyleyebilir, alabilir, listeleyebilir, gösterebilir, söyler, bulabilir, varır, ederim, gitmem, gider</em>
* `Perf` (15; 1% of non-empty `Aspect`): <em>ayrılacağım, bulabileceğim, deneyeceğim, döneceğim, edeceğim, gidebileceğim, gideceğiz, isterdim, kalacağım, olacak</em>
* `Prog` (1191; 80% of non-empty `Aspect`): <em>istiyorum, uçuyor, kalkıyor, geliyor, gerekiyor, gidiyor, varıyor, arıyorum, veriyor, kullanılıyor</em>
* `EMPTY` (2617): <em>göster, nedir, listeleyin, gösterin, listele, nelerdir, bul, ver, verin, uçuşunuz</em>

<table>
  <tr><th>Paradigm <i>iste</i></th><th><tt>Perf</tt></th><th><tt>Prog</tt></th><th><tt>Hab</tt></th></tr>
  <tr><td><tt><tt><a href="tr_atis-feat-Mood.html">Mood</a></tt><tt>=Gen</tt>|<tt><a href="tr_atis-feat-Polarity.html">Polarity</a></tt><tt>=Pos</tt>|<tt><a href="tr_atis-feat-Tense.html">Tense</a></tt><tt>=Pres</tt></tt></td><td></td><td></td><td><em>isterim</em></td></tr>
  <tr><td><tt><tt><a href="tr_atis-feat-Mood.html">Mood</a></tt><tt>=Ind</tt>|<tt><a href="tr_atis-feat-Polarity.html">Polarity</a></tt><tt>=Neg</tt>|<tt><a href="tr_atis-feat-Tense.html">Tense</a></tt><tt>=Pres</tt></tt></td><td></td><td><em>istemiyorum</em></td><td></td></tr>
  <tr><td><tt><tt><a href="tr_atis-feat-Mood.html">Mood</a></tt><tt>=Ind</tt>|<tt><a href="tr_atis-feat-Polarity.html">Polarity</a></tt><tt>=Pos</tt>|<tt><a href="tr_atis-feat-Tense.html">Tense</a></tt><tt>=Past</tt></tt></td><td><em>isterdim</em></td><td></td><td></td></tr>
  <tr><td><tt><tt><a href="tr_atis-feat-Mood.html">Mood</a></tt><tt>=Ind</tt>|<tt><a href="tr_atis-feat-Polarity.html">Polarity</a></tt><tt>=Pos</tt>|<tt><a href="tr_atis-feat-Tense.html">Tense</a></tt><tt>=Pres</tt></tt></td><td></td><td><em>istiyorum, isityorum, istıyorum</em></td><td></td></tr>
</table>

## Relations with Agreement in `Aspect`

The 10 most frequent relations where parent and child node agree in `Aspect`:
<tt>VERB --[<tt><a href="tr_atis-dep-conj.html">conj</a></tt>]--> VERB</tt> (47; 94%),
<tt>VERB --[<tt><a href="tr_atis-dep-discourse.html">discourse</a></tt>]--> VERB</tt> (2; 100%).

