---
layout: base
title:  'Statistics of Tense in UD_Komi_Zyrian-IKDP'
udver: '2'
---

## Treebank Statistics: UD_Komi_Zyrian-IKDP: Features: `Tense`

This feature is universal.
It occurs with 3 different values: `Fut`, `Past`, `Pres`.

117 tokens (11%) have a non-empty value of `Tense`.
90 types (18%) occur at least once with a non-empty value of `Tense`.
65 lemmas (15%) occur at least once with a non-empty value of `Tense`.
The feature is used with 2 part-of-speech tags: <tt><a href="kpv_ikdp-pos-VERB.html">VERB</a></tt> (97; 9% instances), <tt><a href="kpv_ikdp-pos-AUX.html">AUX</a></tt> (20; 2% instances).

### `VERB`

97 <tt><a href="kpv_ikdp-pos-VERB.html">VERB</a></tt> tokens (73% of all `VERB` tokens) have a non-empty value of `Tense`.

The most frequent other feature values with which `VERB` and `Tense` co-occurred: <tt><a href="kpv_ikdp-feat-Mood.html">Mood</a></tt><tt>=Ind</tt> (95; 98%), <tt><a href="kpv_ikdp-feat-VerbForm.html">VerbForm</a></tt><tt>=Fin</tt> (95; 98%), <tt><a href="kpv_ikdp-feat-Evident.html">Evident</a></tt><tt>=EMPTY</tt> (79; 81%), <tt><a href="kpv_ikdp-feat-Number.html">Number</a></tt><tt>=Sing</tt> (73; 75%), <tt><a href="kpv_ikdp-feat-Person.html">Person</a></tt><tt>=3</tt> (58; 60%).

`VERB` tokens may have the following values of `Tense`:

* `Past` (76; 78% of non-empty `Tense`): <em>ветлі, мӧдэма, примитіс, рӧдитчи, рӧдитчылі, босьтіс, висьталэма, закончитэм, кочегариті, приведитчис</em>
* `Pres` (21; 22% of non-empty `Tense`): <em>колэныс, Он, велӧдча, велӧдчӧны, ветлала, ветлӧны, видзены, висены, вӧдитам, вӧрзям</em>
* `EMPTY` (35): <em>вермы, висьтооны, тӧд, Считай, бросайтчы, будет, ветлоо, ветлыны, висьт-, висьтоола</em>

<table>
  <tr><th>Paradigm <i>ветлыны</i></th><th><tt>Pres</tt></th><th><tt>Past</tt></th></tr>
  <tr><td><tt><tt><a href="kpv_ikdp-feat-Number.html">Number</a></tt><tt>=Sing</tt>|<tt><a href="kpv_ikdp-feat-Person.html">Person</a></tt><tt>=1</tt></tt></td><td><em>ветлала</em></td><td><em>ветлі</em></td></tr>
  <tr><td><tt><tt><a href="kpv_ikdp-feat-Number.html">Number</a></tt><tt>=Sing</tt>|<tt><a href="kpv_ikdp-feat-Person.html">Person</a></tt><tt>=3</tt></tt></td><td></td><td><em>ветліс</em></td></tr>
  <tr><td><tt><tt><a href="kpv_ikdp-feat-Number.html">Number</a></tt><tt>=Plur</tt>|<tt><a href="kpv_ikdp-feat-Person.html">Person</a></tt><tt>=3</tt></tt></td><td><em>ветлӧны</em></td><td></td></tr>
</table>

`Tense` seems to be **lexical feature** of `VERB`. 90% lemmas (57) occur only with one value of `Tense`.

### `AUX`

20 <tt><a href="kpv_ikdp-pos-AUX.html">AUX</a></tt> tokens (74% of all `AUX` tokens) have a non-empty value of `Tense`.

The most frequent other feature values with which `AUX` and `Tense` co-occurred: <tt><a href="kpv_ikdp-feat-Mood.html">Mood</a></tt><tt>=Ind</tt> (20; 100%), <tt><a href="kpv_ikdp-feat-VerbForm.html">VerbForm</a></tt><tt>=Fin</tt> (20; 100%), <tt><a href="kpv_ikdp-feat-Person.html">Person</a></tt><tt>=3</tt> (15; 75%), <tt><a href="kpv_ikdp-feat-Number.html">Number</a></tt><tt>=Sing</tt> (13; 65%), <tt><a href="kpv_ikdp-feat-Polarity.html">Polarity</a></tt><tt>=EMPTY</tt> (13; 65%).

`AUX` tokens may have the following values of `Tense`:

* `Fut` (2; 10% of non-empty `Tense`): <em>лоас</em>
* `Past` (10; 50% of non-empty `Tense`): <em>вӧлі, вӧліс</em>
* `Pres` (8; 40% of non-empty `Tense`): <em>ог, оз, лоо, он</em>
* `EMPTY` (7): <em>из, были, было, ло</em>

<table>
  <tr><th>Paradigm <i>лоны</i></th><th><tt>Pres</tt></th><th><tt>Fut</tt></th></tr>
  <tr><td><tt></tt></td><td><em>лоо</em></td><td><em>лоас</em></td></tr>
</table>

## Relations with Agreement in `Tense`

The 10 most frequent relations where parent and child node agree in `Tense`:
<tt>VERB --[<tt><a href="kpv_ikdp-dep-conj.html">conj</a></tt>]--> VERB</tt> (18; 67%),
<tt>VERB --[<tt><a href="kpv_ikdp-dep-parataxis.html">parataxis</a></tt>]--> VERB</tt> (5; 83%),
<tt>AUX --[<tt><a href="kpv_ikdp-dep-reparandum.html">reparandum</a></tt>]--> VERB</tt> (1; 100%),
<tt>VERB --[<tt><a href="kpv_ikdp-dep-acl.html">acl</a></tt>]--> VERB</tt> (1; 100%).

