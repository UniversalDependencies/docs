---
layout: base
title:  'Statistics of VerbForm in UD_Turkish-FrameNet'
udver: '2'
---

## Treebank Statistics: UD_Turkish-FrameNet: Features: `VerbForm`

This feature is universal but the values `Vnoun` are language-specific.
It occurs with 2 different values: `Fin`, `Vnoun`.

2822 tokens (15%) have a non-empty value of `VerbForm`.
1735 types (22%) occur at least once with a non-empty value of `VerbForm`.
857 lemmas (22%) occur at least once with a non-empty value of `VerbForm`.
The feature is used with 2 part-of-speech tags: <tt><a href="tr_framenet-pos-VERB.html">VERB</a></tt> (2821; 15% instances), <tt><a href="tr_framenet-pos-AUX.html">AUX</a></tt> (1; 0% instances).

### `VERB`

2821 <tt><a href="tr_framenet-pos-VERB.html">VERB</a></tt> tokens (85% of all `VERB` tokens) have a non-empty value of `VerbForm`.

The most frequent other feature values with which `VERB` and `VerbForm` co-occurred: <tt><a href="tr_framenet-feat-Mood.html">Mood</a></tt><tt>=Ind</tt> (2581; 91%), <tt><a href="tr_framenet-feat-Polarity.html">Polarity</a></tt><tt>=Pos</tt> (2565; 91%), <tt><a href="tr_framenet-feat-Number.html">Number</a></tt><tt>=Sing</tt> (2456; 87%), <tt><a href="tr_framenet-feat-Aspect.html">Aspect</a></tt><tt>=Perf</tt> (2287; 81%), <tt><a href="tr_framenet-feat-Tense.html">Tense</a></tt><tt>=Past</tt> (2168; 77%), <tt><a href="tr_framenet-feat-Person.html">Person</a></tt><tt>=3</tt> (2142; 76%).

`VERB` tokens may have the following values of `VerbForm`:

* `Fin` (2817; 100% of non-empty `VerbForm`): <em>etti, verdi, aldı, oldu, yaptı, bıraktı, açtı, düştü, ettim, gitti</em>
* `Vnoun` (4; 0% of non-empty `VerbForm`): <em>akmasın, sürümekti, yağlamaktı, yüzmekti</em>
* `EMPTY` (517): <em>et, sallaya, bırak, aç, değiştir, etmiş, gide, havlaya, olmuş, olsa</em>

<table>
  <tr><th>Paradigm <i>sürü</i></th><th><tt>Fin</tt></th><th><tt>Vnoun</tt></th></tr>
  <tr><td><tt><tt><a href="tr_framenet-feat-Aspect.html">Aspect</a></tt><tt>=Perf</tt>|<tt><a href="tr_framenet-feat-Person.html">Person</a></tt><tt>=1</tt>|<tt><a href="tr_framenet-feat-Tense.html">Tense</a></tt><tt>=Past</tt></tt></td><td><em>sürüdüm</em></td><td></td></tr>
  <tr><td><tt><tt><a href="tr_framenet-feat-Aspect.html">Aspect</a></tt><tt>=Perf</tt>|<tt><a href="tr_framenet-feat-Person.html">Person</a></tt><tt>=3</tt>|<tt><a href="tr_framenet-feat-Tense.html">Tense</a></tt><tt>=Past</tt></tt></td><td><em>sürüdü</em></td><td><em>sürümekti</em></td></tr>
  <tr><td><tt><tt><a href="tr_framenet-feat-Aspect.html">Aspect</a></tt><tt>=Prog</tt>|<tt><a href="tr_framenet-feat-Person.html">Person</a></tt><tt>=3</tt>|<tt><a href="tr_framenet-feat-Tense.html">Tense</a></tt><tt>=Pres</tt></tt></td><td><em>sürüyor</em></td><td></td></tr>
</table>

`VerbForm` seems to be **lexical feature** of `VERB`. 100% lemmas (853) occur only with one value of `VerbForm`.

### `AUX`

1 <tt><a href="tr_framenet-pos-AUX.html">AUX</a></tt> tokens (4% of all `AUX` tokens) have a non-empty value of `VerbForm`.

The most frequent other feature values with which `AUX` and `VerbForm` co-occurred: <tt><a href="tr_framenet-feat-PronType.html">PronType</a></tt><tt>=EMPTY</tt> (1; 100%).

`AUX` tokens may have the following values of `VerbForm`:

* `Fin` (1; 100% of non-empty `VerbForm`): <em>değildi</em>
* `EMPTY` (27): <em>değil, mı, mu, mi, musun, değilim, mi?, misin, miydim, muydu</em>

## Relations with Agreement in `VerbForm`

The 10 most frequent relations where parent and child node agree in `VerbForm`:
<tt>VERB --[<tt><a href="tr_framenet-dep-parataxis.html">parataxis</a></tt>]--> VERB</tt> (254; 76%),
<tt>VERB --[<tt><a href="tr_framenet-dep-conj.html">conj</a></tt>]--> VERB</tt> (66; 97%),
<tt>VERB --[<tt><a href="tr_framenet-dep-advcl.html">advcl</a></tt>]--> VERB</tt> (60; 52%),
<tt>VERB --[<tt><a href="tr_framenet-dep-compound.html">compound</a></tt>]--> VERB</tt> (11; 55%),
<tt>VERB --[<tt><a href="tr_framenet-dep-ccomp.html">ccomp</a></tt>]--> VERB</tt> (6; 60%),
<tt>VERB --[<tt><a href="tr_framenet-dep-discourse.html">discourse</a></tt>]--> VERB</tt> (3; 75%).

