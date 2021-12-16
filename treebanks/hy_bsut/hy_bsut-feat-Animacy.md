---
layout: base
title:  'Statistics of Animacy in UD_Armenian-BSUT'
udver: '2'
---

## Treebank Statistics: UD_Armenian-BSUT: Features: `Animacy`

This feature is universal but the values `Hum` are language-specific.
It occurs with 2 different values: `Hum`, `Nhum`.

921 tokens (29%) have a non-empty value of `Animacy`.
683 types (50%) occur at least once with a non-empty value of `Animacy`.
484 lemmas (47%) occur at least once with a non-empty value of `Animacy`.
The feature is used with 2 part-of-speech tags: <tt><a href="hy_bsut-pos-NOUN.html">NOUN</a></tt> (738; 23% instances), <tt><a href="hy_bsut-pos-PROPN.html">PROPN</a></tt> (183; 6% instances).

### `NOUN`

738 <tt><a href="hy_bsut-pos-NOUN.html">NOUN</a></tt> tokens (100% of all `NOUN` tokens) have a non-empty value of `Animacy`.

The most frequent other feature values with which `NOUN` and `Animacy` co-occurred: <tt><a href="hy_bsut-feat-Definite.html">Definite</a></tt><tt>=Ind</tt> (518; 70%), <tt><a href="hy_bsut-feat-Number.html">Number</a></tt><tt>=Sing</tt> (471; 64%).

`NOUN` tokens may have the following values of `Animacy`:

* `Hum` (153; 21% of non-empty `Animacy`): <em>Տեր, ահաբեկիչների, նախագահ, ռուս, ժողովրդի, մարդկանց, ուրվական, գերիների, խաղաղապահներին, հեղափոխական</em>
* `Nhum` (585; 79% of non-empty `Animacy`): <em>անգամ, երկիրը, երկրի, ԱԳ, ի, վրեժ, գործարքի, երկրում, իշխանափոխությունը, կոմբինատի</em>

<table>
  <tr><th>Paradigm <i>ը</i></th><th><tt>Nhum</tt></th><th><tt>Hum</tt></th></tr>
  <tr><td><tt><tt><a href="hy_bsut-feat-Case.html">Case</a></tt><tt>=Abl</tt>|<tt><a href="hy_bsut-feat-Definite.html">Definite</a></tt><tt>=Ind</tt>|<tt><a href="hy_bsut-feat-Number.html">Number</a></tt><tt>=Sing</tt></tt></td><td><em>ից</em></td><td></td></tr>
  <tr><td><tt><tt><a href="hy_bsut-feat-Case.html">Case</a></tt><tt>=Dat</tt>|<tt><a href="hy_bsut-feat-Definite.html">Definite</a></tt><tt>=Def</tt>|<tt><a href="hy_bsut-feat-Number.html">Number</a></tt><tt>=Sing</tt></tt></td><td><em>ին</em></td><td></td></tr>
  <tr><td><tt><tt><a href="hy_bsut-feat-Case.html">Case</a></tt><tt>=Dat</tt>|<tt><a href="hy_bsut-feat-Definite.html">Definite</a></tt><tt>=Ind</tt>|<tt><a href="hy_bsut-feat-Number.html">Number</a></tt><tt>=Sing</tt></tt></td><td><em>ի</em></td><td></td></tr>
  <tr><td><tt><tt><a href="hy_bsut-feat-Case.html">Case</a></tt><tt>=Dat</tt>|<tt><a href="hy_bsut-feat-Definite.html">Definite</a></tt><tt>=Ind</tt>|<tt><a href="hy_bsut-feat-Number.html">Number</a></tt><tt>=Plur</tt></tt></td><td><em>ների</em></td><td></td></tr>
  <tr><td><tt><tt><a href="hy_bsut-feat-Case.html">Case</a></tt><tt>=Nom</tt>|<tt><a href="hy_bsut-feat-Definite.html">Definite</a></tt><tt>=Def</tt>|<tt><a href="hy_bsut-feat-Number.html">Number</a></tt><tt>=Sing</tt></tt></td><td><em>ը, ն</em></td><td><em>ն</em></td></tr>
</table>

`Animacy` seems to be **lexical feature** of `NOUN`. 100% lemmas (432) occur only with one value of `Animacy`.

### `PROPN`

183 <tt><a href="hy_bsut-pos-PROPN.html">PROPN</a></tt> tokens (100% of all `PROPN` tokens) have a non-empty value of `Animacy`.

The most frequent other feature values with which `PROPN` and `Animacy` co-occurred: <tt><a href="hy_bsut-feat-Number.html">Number</a></tt><tt>=Sing</tt> (183; 100%), <tt><a href="hy_bsut-feat-Definite.html">Definite</a></tt><tt>=Ind</tt> (125; 68%), <tt><a href="hy_bsut-feat-Case.html">Case</a></tt><tt>=Nom</tt> (110; 60%).

`PROPN` tokens may have the following values of `Animacy`:

* `Hum` (93; 51% of non-empty `Animacy`): <em>Նիկոլ, Լևոն, Ռոբերտ, Մինասյանը, Փաշինյանը, Սերժ, Փաշինյանի, Քոչարյանը, Լավրովի, Պետրոսյանը</em>
* `Nhum` (90; 49% of non-empty `Animacy`): <em>Իրանի, Հայաստանի, ՀՀ, Բաքուն, Ռուսաստանի, Արցախը, Արցախի, Զանգեզուրի, Ղարաբաղ, Մոսկվան</em>

`Animacy` seems to be **lexical feature** of `PROPN`. 100% lemmas (51) occur only with one value of `Animacy`.

## Relations with Agreement in `Animacy`

The 10 most frequent relations where parent and child node agree in `Animacy`:
<tt>NOUN --[<tt><a href="hy_bsut-dep-nmod-poss.html">nmod:poss</a></tt>]--> NOUN</tt> (93; 72%),
<tt>NOUN --[<tt><a href="hy_bsut-dep-conj.html">conj</a></tt>]--> NOUN</tt> (44; 85%),
<tt>PROPN --[<tt><a href="hy_bsut-dep-flat-name.html">flat:name</a></tt>]--> PROPN</tt> (30; 100%),
<tt>NOUN --[<tt><a href="hy_bsut-dep-nmod-poss.html">nmod:poss</a></tt>]--> PROPN</tt> (24; 67%),
<tt>NOUN --[<tt><a href="hy_bsut-dep-nmod-npmod.html">nmod:npmod</a></tt>]--> NOUN</tt> (13; 81%),
<tt>NOUN --[<tt><a href="hy_bsut-dep-nmod.html">nmod</a></tt>]--> NOUN</tt> (11; 65%),
<tt>PROPN --[<tt><a href="hy_bsut-dep-conj.html">conj</a></tt>]--> PROPN</tt> (8; 100%),
<tt>NOUN --[<tt><a href="hy_bsut-dep-nsubj.html">nsubj</a></tt>]--> NOUN</tt> (7; 100%),
<tt>PROPN --[<tt><a href="hy_bsut-dep-flat-name.html">flat:name</a></tt>]--> NOUN</tt> (6; 100%),
<tt>PROPN --[<tt><a href="hy_bsut-dep-nmod.html">nmod</a></tt>]--> NOUN</tt> (6; 100%).

