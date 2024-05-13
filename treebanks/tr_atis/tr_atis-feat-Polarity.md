---
layout: base
title:  'Statistics of Polarity in UD_Turkish-Atis'
udver: '2'
---

## Treebank Statistics: UD_Turkish-Atis: Features: `Polarity`

This feature is universal.
It occurs with 2 different values: `Neg`, `Pos`.

3462 tokens (8%) have a non-empty value of `Polarity`.
184 types (9%) occur at least once with a non-empty value of `Polarity`.
68 lemmas (7%) occur at least once with a non-empty value of `Polarity`.
The feature is used with 1 part-of-speech tags: <tt><a href="tr_atis-pos-VERB.html">VERB</a></tt> (3462; 8% instances).

### `VERB`

3462 <tt><a href="tr_atis-pos-VERB.html">VERB</a></tt> tokens (84% of all `VERB` tokens) have a non-empty value of `Polarity`.

The most frequent other feature values with which `VERB` and `Polarity` co-occurred: <tt><a href="tr_atis-feat-Tense.html">Tense</a></tt><tt>=Pres</tt> (3447; 100%), <tt><a href="tr_atis-feat-VerbForm.html">VerbForm</a></tt><tt>=Fin</tt> (3419; 99%), <tt><a href="tr_atis-feat-Number.html">Number</a></tt><tt>=Sing</tt> (2808; 81%), <tt><a href="tr_atis-feat-Aspect.html">Aspect</a></tt><tt>=EMPTY</tt> (1978; 57%), <tt><a href="tr_atis-feat-Mood.html">Mood</a></tt><tt>=Imp</tt> (1918; 55%), <tt><a href="tr_atis-feat-Person.html">Person</a></tt><tt>=2</tt> (1915; 55%).

`VERB` tokens may have the following values of `Polarity`:

* `Neg` (16; 0% of non-empty `Polarity`): <em>gitmem, bulmam, almam, geçirmem, görmem, istemiyorum, yaptırmam</em>
* `Pos` (3446; 100% of non-empty `Polarity`): <em>göster, istiyorum, listeleyin, gösterin, listele, uçuyor, bul, ver, kalkıyor, verin</em>
* `EMPTY` (641): <em>nedir, nelerdir, mevcuttur, havayoludur, hangileridir, hangisidir, kadardır, neler, vardır, kısaltmasıdır</em>

<table>
  <tr><th>Paradigm <i>iste</i></th><th><tt>Pos</tt></th><th><tt>Neg</tt></th></tr>
  <tr><td><tt><tt><a href="tr_atis-feat-Aspect.html">Aspect</a></tt><tt>=Hab</tt>|<tt><a href="tr_atis-feat-Mood.html">Mood</a></tt><tt>=Gen</tt>|<tt><a href="tr_atis-feat-Tense.html">Tense</a></tt><tt>=Pres</tt></tt></td><td><em>isterim</em></td><td></td></tr>
  <tr><td><tt><tt><a href="tr_atis-feat-Aspect.html">Aspect</a></tt><tt>=Perf</tt>|<tt><a href="tr_atis-feat-Mood.html">Mood</a></tt><tt>=Ind</tt>|<tt><a href="tr_atis-feat-Tense.html">Tense</a></tt><tt>=Past</tt></tt></td><td><em>isterdim</em></td><td></td></tr>
  <tr><td><tt><tt><a href="tr_atis-feat-Aspect.html">Aspect</a></tt><tt>=Prog</tt>|<tt><a href="tr_atis-feat-Mood.html">Mood</a></tt><tt>=Ind</tt>|<tt><a href="tr_atis-feat-Tense.html">Tense</a></tt><tt>=Pres</tt></tt></td><td><em>istiyorum, isityorum, istıyorum</em></td><td><em>istemiyorum</em></td></tr>
</table>

## Relations with Agreement in `Polarity`

The 10 most frequent relations where parent and child node agree in `Polarity`:
<tt>VERB --[<tt><a href="tr_atis-dep-parataxis.html">parataxis</a></tt>]--> VERB</tt> (79; 98%),
<tt>VERB --[<tt><a href="tr_atis-dep-conj.html">conj</a></tt>]--> VERB</tt> (56; 97%),
<tt>VERB --[<tt><a href="tr_atis-dep-discourse.html">discourse</a></tt>]--> VERB</tt> (2; 100%),
<tt>VERB --[<tt><a href="tr_atis-dep-obj.html">obj</a></tt>]--> VERB</tt> (1; 100%).

