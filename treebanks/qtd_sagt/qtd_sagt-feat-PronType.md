---
layout: base
title:  'Statistics of PronType in UD_Turkish_German-SAGT'
udver: '2'
---

## Treebank Statistics: UD_Turkish_German-SAGT: Features: `PronType`

This feature is universal.
It occurs with 7 different values: `Art`, `Dem`, `Ind`, `Int`, `Neg`, `Prs`, `Rel`.

4852 tokens (13%) have a non-empty value of `PronType`.
228 types (3%) occur at least once with a non-empty value of `PronType`.
57 lemmas (2%) occur at least once with a non-empty value of `PronType`.
The feature is used with 2 part-of-speech tags: <tt><a href="qtd_sagt-pos-PRON.html">PRON</a></tt> (3767; 10% instances), <tt><a href="qtd_sagt-pos-DET.html">DET</a></tt> (1085; 3% instances).

### `PRON`

3767 <tt><a href="qtd_sagt-pos-PRON.html">PRON</a></tt> tokens (90% of all `PRON` tokens) have a non-empty value of `PronType`.

The most frequent other feature values with which `PRON` and `PronType` co-occurred: <tt><a href="qtd_sagt-feat-Number.html">Number</a></tt><tt>=Sing</tt> (3291; 87%), <tt><a href="qtd_sagt-feat-Case.html">Case</a></tt><tt>=Nom</tt> (2602; 69%), <tt><a href="qtd_sagt-feat-Gender.html">Gender</a></tt><tt>=EMPTY</tt> (2391; 63%).

`PRON` tokens may have the following values of `PronType`:

* `Art` (34; 1% of non-empty `PronType`): <em>das, die, des, Einem</em>
* `Dem` (511; 14% of non-empty `PronType`): <em>das, die, bu, der, diese, bunu, şu, diesen, bunlar, dem</em>
* `Ind` (298; 8% of non-empty `PronType`): <em>man, alles, sowas, etwas, allem, paar, alle, jeder, nichts, was</em>
* `Int` (51; 1% of non-empty `PronType`): <em>was, welche, wen, wer, welches</em>
* `Neg` (14; 0% of non-empty `PronType`): <em>kein, keine, keiner, keinen, keines, keins, nichts</em>
* `Prs` (2705; 72% of non-empty `PronType`): <em>ich, es, du, o, wir, ondan, ben, mir, sie, mich</em>
* `Rel` (154; 4% of non-empty `PronType`): <em>das, die, was, der, den</em>
* `EMPTY` (421): <em>orada, ne, was, burada, ben, herkes, birisi, oraya, kim, deinem</em>

<table>
  <tr><th>Paradigm <i>was</i></th><th><tt>Int</tt></th><th><tt>Rel</tt></th><th><tt>Dem</tt></th><th><tt>Ind</tt></th></tr>
  <tr><td><tt><tt><a href="qtd_sagt-feat-Case.html">Case</a></tt><tt>=Acc</tt>|<tt><a href="qtd_sagt-feat-Definite.html">Definite</a></tt><tt>=Ind</tt></tt></td><td></td><td></td><td></td><td><em>was</em></td></tr>
  <tr><td><tt><tt><a href="qtd_sagt-feat-Case.html">Case</a></tt><tt>=Acc</tt>|<tt><a href="qtd_sagt-feat-Gender.html">Gender</a></tt><tt>=Neut</tt></tt></td><td><em>was</em></td><td></td><td></td><td></td></tr>
  <tr><td><tt><tt><a href="qtd_sagt-feat-Case.html">Case</a></tt><tt>=Acc</tt></tt></td><td><em>was</em></td><td><em>was</em></td><td><em>was</em></td><td></td></tr>
  <tr><td><tt><tt><a href="qtd_sagt-feat-Case.html">Case</a></tt><tt>=Nom</tt>|<tt><a href="qtd_sagt-feat-Definite.html">Definite</a></tt><tt>=Ind</tt></tt></td><td></td><td></td><td></td><td><em>was</em></td></tr>
  <tr><td><tt><tt><a href="qtd_sagt-feat-Case.html">Case</a></tt><tt>=Nom</tt>|<tt><a href="qtd_sagt-feat-Gender.html">Gender</a></tt><tt>=Neut</tt></tt></td><td><em>was</em></td><td><em>was</em></td><td></td><td></td></tr>
  <tr><td><tt><tt><a href="qtd_sagt-feat-Case.html">Case</a></tt><tt>=Nom</tt></tt></td><td><em>was</em></td><td><em>was</em></td><td></td><td></td></tr>
</table>

`PronType` seems to be **lexical feature** of `PRON`. 92% lemmas (49) occur only with one value of `PronType`.

### `DET`

1085 <tt><a href="qtd_sagt-pos-DET.html">DET</a></tt> tokens (63% of all `DET` tokens) have a non-empty value of `PronType`.

The most frequent other feature values with which `DET` and `PronType` co-occurred: <tt><a href="qtd_sagt-feat-Number.html">Number</a></tt><tt>=Sing</tt> (915; 84%), <tt><a href="qtd_sagt-feat-Definite.html">Definite</a></tt><tt>=Def</tt> (690; 64%).

`DET` tokens may have the following values of `PronType`:

* `Art` (935; 86% of non-empty `PronType`): <em>dem, die, der, ein, eine, das, den, einen, einem, einer</em>
* `Dem` (24; 2% of non-empty `PronType`): <em>dieses, diese, dieser, diesem, bu, diesen</em>
* `Ind` (87; 8% of non-empty `PronType`): <em>viele, jeden, viel, alles, mehrere, mehr, alle, jeder, jedes, manche</em>
* `Neg` (39; 4% of non-empty `PronType`): <em>keine, kein, keinen</em>
* `EMPTY` (624): <em>bir, o, her, bu, böyle, çok, öyle, hangi, şu, birkaç</em>

`PronType` seems to be **lexical feature** of `DET`. 100% lemmas (15) occur only with one value of `PronType`.

## Relations with Agreement in `PronType`

The 10 most frequent relations where parent and child node agree in `PronType`:
<tt>PRON --[<tt><a href="qtd_sagt-dep-reparandum.html">reparandum</a></tt>]--> PRON</tt> (31; 91%),
<tt>DET --[<tt><a href="qtd_sagt-dep-reparandum.html">reparandum</a></tt>]--> DET</tt> (8; 100%),
<tt>PRON --[<tt><a href="qtd_sagt-dep-appos-trans.html">appos:trans</a></tt>]--> PRON</tt> (6; 75%),
<tt>PRON --[<tt><a href="qtd_sagt-dep-obl.html">obl</a></tt>]--> PRON</tt> (4; 80%),
<tt>PRON --[<tt><a href="qtd_sagt-dep-compound-redup.html">compound:redup</a></tt>]--> PRON</tt> (3; 100%),
<tt>PRON --[<tt><a href="qtd_sagt-dep-compound.html">compound</a></tt>]--> PRON</tt> (3; 100%),
<tt>PRON --[<tt><a href="qtd_sagt-dep-compound.html">compound</a></tt>]--> DET</tt> (1; 100%),
<tt>PRON --[<tt><a href="qtd_sagt-dep-orphan.html">orphan</a></tt>]--> PRON</tt> (1; 100%),
<tt>PRON --[<tt><a href="qtd_sagt-dep-parataxis.html">parataxis</a></tt>]--> PRON</tt> (1; 100%).

