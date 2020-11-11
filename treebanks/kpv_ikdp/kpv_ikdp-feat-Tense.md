---
layout: base
title:  'Statistics of Tense in UD_Komi_Zyrian-IKDP'
udver: '2'
---

## Treebank Statistics: UD_Komi_Zyrian-IKDP: Features: `Tense`

This feature is universal.
It occurs with 3 different values: `Fut`, `Past`, `Pres`.

185 tokens (13%) have a non-empty value of `Tense`.
140 types (21%) occur at least once with a non-empty value of `Tense`.
96 lemmas (18%) occur at least once with a non-empty value of `Tense`.
The feature is used with 2 part-of-speech tags: <tt><a href="kpv_ikdp-pos-VERB.html">VERB</a></tt> (154; 11% instances), <tt><a href="kpv_ikdp-pos-AUX.html">AUX</a></tt> (31; 2% instances).

### `VERB`

154 <tt><a href="kpv_ikdp-pos-VERB.html">VERB</a></tt> tokens (78% of all `VERB` tokens) have a non-empty value of `Tense`.

The most frequent other feature values with which `VERB` and `Tense` co-occurred: <tt><a href="kpv_ikdp-feat-Mood.html">Mood</a></tt><tt>=Ind</tt> (151; 98%), <tt><a href="kpv_ikdp-feat-VerbForm.html">VerbForm</a></tt><tt>=EMPTY</tt> (151; 98%), <tt><a href="kpv_ikdp-feat-Evident.html">Evident</a></tt><tt>=EMPTY</tt> (132; 86%), <tt><a href="kpv_ikdp-feat-Number.html">Number</a></tt><tt>=Sing</tt> (119; 77%), <tt><a href="kpv_ikdp-feat-Person.html">Person</a></tt><tt>=3</tt> (106; 69%).

`VERB` tokens may have the following values of `Tense`:

* `Fut` (4; 3% of non-empty `Tense`): <em>лоас, мӧдасы, сетасныс</em>
* `Past` (118; 77% of non-empty `Tense`): <em>босьтіс, вежсис, ветлі, мӧдэма, примитіс, пукаліс, рӧдитчи, рӧдитчылі, ветліс, висьталэма</em>
* `Pres` (32; 21% of non-empty `Tense`): <em>колэныс, Верма, будет, велӧдча, велӧдчӧны, ветлала, ветлэныс, ветлӧны, видзены, висены</em>
* `EMPTY` (44): <em>вермы, висьтооны, тӧд, Считай, бергедчема, бериччыны, бросайтчы, велӧдчигӧныс, велӧдчыны, ветлоо</em>

<table>
  <tr><th>Paradigm <i>ветлыны</i></th><th><tt>Pres</tt></th><th><tt>Past</tt></th></tr>
  <tr><td><tt><tt><a href="kpv_ikdp-feat-Number.html">Number</a></tt><tt>=Sing</tt>|<tt><a href="kpv_ikdp-feat-Person.html">Person</a></tt><tt>=1</tt></tt></td><td><em>ветлала</em></td><td><em>ветлі</em></td></tr>
  <tr><td><tt><tt><a href="kpv_ikdp-feat-Number.html">Number</a></tt><tt>=Sing</tt>|<tt><a href="kpv_ikdp-feat-Person.html">Person</a></tt><tt>=3</tt></tt></td><td></td><td><em>ветліс</em></td></tr>
  <tr><td><tt><tt><a href="kpv_ikdp-feat-Number.html">Number</a></tt><tt>=Plur</tt>|<tt><a href="kpv_ikdp-feat-Person.html">Person</a></tt><tt>=3</tt></tt></td><td><em>ветлэныс, ветлӧны</em></td><td></td></tr>
</table>

### `AUX`

31 <tt><a href="kpv_ikdp-pos-AUX.html">AUX</a></tt> tokens (67% of all `AUX` tokens) have a non-empty value of `Tense`.

The most frequent other feature values with which `AUX` and `Tense` co-occurred: <tt><a href="kpv_ikdp-feat-Mood.html">Mood</a></tt><tt>=Ind</tt> (31; 100%), <tt><a href="kpv_ikdp-feat-Person.html">Person</a></tt><tt>=3</tt> (22; 71%), <tt><a href="kpv_ikdp-feat-Number.html">Number</a></tt><tt>=Sing</tt> (20; 65%), <tt><a href="kpv_ikdp-feat-Polarity.html">Polarity</a></tt><tt>=EMPTY</tt> (16; 52%).

`AUX` tokens may have the following values of `Tense`:

* `Past` (22; 71% of non-empty `Tense`): <em>вӧлі, из, вӧліс, были, было</em>
* `Pres` (9; 29% of non-empty `Tense`): <em>ог, оз, он</em>
* `EMPTY` (15): <em>абу, выйым, из, вӧв</em>

<table>
  <tr><th>Paradigm <i>оз</i></th><th><tt>Pres</tt></th><th><tt>Past</tt></th></tr>
  <tr><td><tt><tt><a href="kpv_ikdp-feat-Number.html">Number</a></tt><tt>=Sing</tt>|<tt><a href="kpv_ikdp-feat-Person.html">Person</a></tt><tt>=3</tt></tt></td><td></td><td><em>из</em></td></tr>
  <tr><td><tt><tt><a href="kpv_ikdp-feat-Person.html">Person</a></tt><tt>=1</tt></tt></td><td><em>ог</em></td><td></td></tr>
  <tr><td><tt><tt><a href="kpv_ikdp-feat-Person.html">Person</a></tt><tt>=2</tt></tt></td><td><em>он</em></td><td></td></tr>
  <tr><td><tt><tt><a href="kpv_ikdp-feat-Person.html">Person</a></tt><tt>=3</tt></tt></td><td><em>оз</em></td><td></td></tr>
</table>

## Relations with Agreement in `Tense`

The 10 most frequent relations where parent and child node agree in `Tense`:
<tt>VERB --[<tt><a href="kpv_ikdp-dep-conj.html">conj</a></tt>]--> VERB</tt> (30; 79%),
<tt>VERB --[<tt><a href="kpv_ikdp-dep-parataxis.html">parataxis</a></tt>]--> VERB</tt> (3; 75%),
<tt>VERB --[<tt><a href="kpv_ikdp-dep-ccomp.html">ccomp</a></tt>]--> VERB</tt> (2; 67%),
<tt>VERB --[<tt><a href="kpv_ikdp-dep-acl.html">acl</a></tt>]--> VERB</tt> (1; 100%).

