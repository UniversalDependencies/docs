---
layout: base
title:  'Statistics of Tense in UD_Old_Irish-DipSGG'
udver: '2'
---

## Treebank Statistics: UD_Old_Irish-DipSGG: Features: `Tense`

This feature is universal.
It occurs with 3 different values: `Fut`, `Past`, `Pres`.

44 tokens (11%) have a non-empty value of `Tense`.
32 types (12%) occur at least once with a non-empty value of `Tense`.
19 lemmas (9%) occur at least once with a non-empty value of `Tense`.
The feature is used with 2 part-of-speech tags: <tt><a href="sga_dipsgg-pos-VERB.html">VERB</a></tt> (27; 7% instances), <tt><a href="sga_dipsgg-pos-AUX.html">AUX</a></tt> (17; 4% instances).

### `VERB`

27 <tt><a href="sga_dipsgg-pos-VERB.html">VERB</a></tt> tokens (96% of all `VERB` tokens) have a non-empty value of `Tense`.

The most frequent other feature values with which `VERB` and `Tense` co-occurred: <tt><a href="sga_dipsgg-feat-Number.html">Number</a></tt><tt>=Sing</tt> (25; 93%), <tt><a href="sga_dipsgg-feat-Voice.html">Voice</a></tt><tt>=Act</tt> (25; 93%), <tt><a href="sga_dipsgg-feat-Mood.html">Mood</a></tt><tt>=Ind</tt> (23; 85%), <tt><a href="sga_dipsgg-feat-PartType.html">PartType</a></tt><tt>=EMPTY</tt> (23; 85%), <tt><a href="sga_dipsgg-feat-Person.html">Person</a></tt><tt>=3</tt> (19; 70%).

`VERB` tokens may have the following values of `Tense`:

* `Fut` (3; 11% of non-empty `Tense`): <em>cél, róis, tiach</em>
* `Past` (4; 15% of non-empty `Tense`): <em>giuil, roscribad, roscríbad, rosechestar</em>
* `Pres` (20; 74% of non-empty `Tense`): <em>chain, Gaib, cóima, ecmoṅgat, epur, farcai, fuasna, llega, maraith, mardda</em>
* `EMPTY` (1): <em>adest</em>

<table>
  <tr><th>Paradigm <i>scríbaid</i></th><th><tt>Pres</tt></th><th><tt>Past</tt></th></tr>
  <tr><td><tt><tt><a href="sga_dipsgg-feat-PartType.html">PartType</a></tt><tt>=Aug</tt>|<tt><a href="sga_dipsgg-feat-Person.html">Person</a></tt><tt>=3</tt>|<tt><a href="sga_dipsgg-feat-Voice.html">Voice</a></tt><tt>=Pass</tt></tt></td><td></td><td><em>roscribad, roscríbad</em></td></tr>
  <tr><td><tt><tt><a href="sga_dipsgg-feat-Person.html">Person</a></tt><tt>=1</tt>|<tt><a href="sga_dipsgg-feat-Voice.html">Voice</a></tt><tt>=Act</tt></tt></td><td><em>scríbaimm</em></td><td></td></tr>
</table>

### `AUX`

17 <tt><a href="sga_dipsgg-pos-AUX.html">AUX</a></tt> tokens (100% of all `AUX` tokens) have a non-empty value of `Tense`.

The most frequent other feature values with which `AUX` and `Tense` co-occurred: <tt><a href="sga_dipsgg-feat-Number.html">Number</a></tt><tt>=Sing</tt> (17; 100%), <tt><a href="sga_dipsgg-feat-Person.html">Person</a></tt><tt>=3</tt> (17; 100%), <tt><a href="sga_dipsgg-feat-VerbType.html">VerbType</a></tt><tt>=Cop</tt> (17; 100%), <tt><a href="sga_dipsgg-feat-Polarity.html">Polarity</a></tt><tt>=Pos</tt> (15; 88%), <tt><a href="sga_dipsgg-feat-Mood.html">Mood</a></tt><tt>=Ind</tt> (11; 65%).

`AUX` tokens may have the following values of `Tense`:

* `Fut` (1; 6% of non-empty `Tense`): <em>bith</em>
* `Past` (1; 6% of non-empty `Tense`): <em>bid</em>
* `Pres` (15; 88% of non-empty `Tense`): <em>is, d, ní, mba</em>

<table>
  <tr><th>Paradigm <i>is</i></th><th><tt>Pres</tt></th><th><tt>Fut</tt></th><th><tt>Past</tt></th></tr>
  <tr><td><tt><tt><a href="sga_dipsgg-feat-Mood.html">Mood</a></tt><tt>=Ind</tt>|<tt><a href="sga_dipsgg-feat-Polarity.html">Polarity</a></tt><tt>=Neg</tt></tt></td><td><em>ní</em></td><td></td><td></td></tr>
  <tr><td><tt><tt><a href="sga_dipsgg-feat-Mood.html">Mood</a></tt><tt>=Ind</tt>|<tt><a href="sga_dipsgg-feat-Polarity.html">Polarity</a></tt><tt>=Pos</tt></tt></td><td><em>is</em></td><td><em>bith</em></td><td></td></tr>
  <tr><td><tt><tt><a href="sga_dipsgg-feat-Mood.html">Mood</a></tt><tt>=Sub</tt>|<tt><a href="sga_dipsgg-feat-Polarity.html">Polarity</a></tt><tt>=Pos</tt>|<tt><a href="sga_dipsgg-feat-PronType.html">PronType</a></tt><tt>=Rel</tt></tt></td><td><em>mba</em></td><td></td><td></td></tr>
  <tr><td><tt><tt><a href="sga_dipsgg-feat-Mood.html">Mood</a></tt><tt>=Sub</tt>|<tt><a href="sga_dipsgg-feat-Polarity.html">Polarity</a></tt><tt>=Pos</tt></tt></td><td><em>d</em></td><td></td><td><em>bid</em></td></tr>
</table>

## Relations with Agreement in `Tense`

The 10 most frequent relations where parent and child node agree in `Tense`:
<tt>VERB --[<tt><a href="sga_dipsgg-dep-parataxis.html">parataxis</a></tt>]--> VERB</tt> (4; 67%),
<tt>VERB --[<tt><a href="sga_dipsgg-dep-advcl.html">advcl</a></tt>]--> VERB</tt> (1; 100%),
<tt>VERB --[<tt><a href="sga_dipsgg-dep-ccomp.html">ccomp</a></tt>]--> VERB</tt> (1; 100%),
<tt>VERB --[<tt><a href="sga_dipsgg-dep-conj.html">conj</a></tt>]--> VERB</tt> (1; 100%).

