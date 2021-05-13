---
layout: base
title:  'Statistics of PronType in UD_Turkish-Kenet'
udver: '2'
---

## Treebank Statistics: UD_Turkish-Kenet: Features: `PronType`

This feature is universal.
It occurs with 4 different values: `Dem`, `Int`, `Prs`, `Rcp`.

4643 tokens (3%) have a non-empty value of `PronType`.
239 types (1%) occur at least once with a non-empty value of `PronType`.
16 lemmas (0%) occur at least once with a non-empty value of `PronType`.
The feature is used with 4 part-of-speech tags: <tt><a href="tr_kenet-pos-PRON.html">PRON</a></tt> (3823; 2% instances), <tt><a href="tr_kenet-pos-AUX.html">AUX</a></tt> (485; 0% instances), <tt><a href="tr_kenet-pos-ADV.html">ADV</a></tt> (304; 0% instances), <tt><a href="tr_kenet-pos-NOUN.html">NOUN</a></tt> (31; 0% instances).

### `PRON`

3823 <tt><a href="tr_kenet-pos-PRON.html">PRON</a></tt> tokens (78% of all `PRON` tokens) have a non-empty value of `PronType`.

The most frequent other feature values with which `PRON` and `PronType` co-occurred: <tt><a href="tr_kenet-feat-Reflex.html">Reflex</a></tt><tt>=EMPTY</tt> (3823; 100%).

`PRON` tokens may have the following values of `PronType`:

* `Dem` (1089; 28% of non-empty `PronType`): <em>bu, o, onun, bunlar, bunu, onu, bunun, onlar, ona, onları</em>
* `Int` (280; 7% of non-empty `PronType`): <em>ne, kim, kimi, nereden, hangi, nerede, nesi, neye, kimden, neresi</em>
* `Prs` (2304; 60% of non-empty `PronType`): <em>ben, o, onun, bana, sen, beni, onu, benim, bizim, ona</em>
* `Rcp` (150; 4% of non-empty `PronType`): <em>birbirine, birbirini, birbirlerine, birbirinden, birbirlerini, birbiriyle, birbiri, birbirlerinin, birbirimize, birbirimizi</em>
* `EMPTY` (1085): <em>kendi, kendini, biri, hepsi, kendisine, herkes, kendimi, kendine, kendisini, birisi</em>

<table>
  <tr><th>Paradigm <i>o</i></th><th><tt>Prs</tt></th><th><tt>Dem</tt></th></tr>
  <tr><td><tt></tt></td><td><em>o, onun, onu, ona, ondan, onunla, onda, onlar, onları, onlarla, onların, onlarda, Onlardan, onlara, oymuş</em></td><td><em>o, onun, onu, onlar, ona, onları, onların, onlara, onlardan, ondan, onunla, onlarla, Onlarda, onda</em></td></tr>
</table>

`PronType` seems to be **lexical feature** of `PRON`. 92% lemmas (12) occur only with one value of `PronType`.

### `AUX`

485 <tt><a href="tr_kenet-pos-AUX.html">AUX</a></tt> tokens (55% of all `AUX` tokens) have a non-empty value of `PronType`.

The most frequent other feature values with which `AUX` and `PronType` co-occurred: <tt><a href="tr_kenet-feat-Case.html">Case</a></tt><tt>=EMPTY</tt> (485; 100%), <tt><a href="tr_kenet-feat-Number.html">Number</a></tt><tt>=EMPTY</tt> (485; 100%), <tt><a href="tr_kenet-feat-Person.html">Person</a></tt><tt>=EMPTY</tt> (485; 100%), <tt><a href="tr_kenet-feat-Tense.html">Tense</a></tt><tt>=EMPTY</tt> (485; 100%).

`AUX` tokens may have the following values of `PronType`:

* `Int` (485; 100% of non-empty `PronType`): <em>mı, mi, mu, mü, misin, musun, midir, mıdır, mıydı, miydi</em>
* `EMPTY` (403): <em>değil, değildir, değildi, değilim, değilse, değiliz, değilmiş, değildim, değilsin, değilsiniz</em>

### `ADV`

304 <tt><a href="tr_kenet-pos-ADV.html">ADV</a></tt> tokens (3% of all `ADV` tokens) have a non-empty value of `PronType`.

`ADV` tokens may have the following values of `PronType`:

* `Int` (304; 100% of non-empty `PronType`): <em>ne, nasıl, kaçırıp, kaçalı, kaçmaktayken, kaçınca, kaçıp, midir, neysek</em>
* `EMPTY` (10742): <em>daha, en, sonra, bir, bile, çok, içinde, şimdi, hiç, artık</em>

### `NOUN`

31 <tt><a href="tr_kenet-pos-NOUN.html">NOUN</a></tt> tokens (0% of all `NOUN` tokens) have a non-empty value of `PronType`.

The most frequent other feature values with which `NOUN` and `PronType` co-occurred: <tt><a href="tr_kenet-feat-Person.html">Person</a></tt><tt>=3</tt> (31; 100%), <tt><a href="tr_kenet-feat-Number.html">Number</a></tt><tt>=Sing</tt> (27; 87%), <tt><a href="tr_kenet-feat-Number-psor.html">Number[psor]</a></tt><tt>=EMPTY</tt> (24; 77%), <tt><a href="tr_kenet-feat-Person-psor.html">Person[psor]</a></tt><tt>=EMPTY</tt> (24; 77%), <tt><a href="tr_kenet-feat-Case.html">Case</a></tt><tt>=Nom</tt> (19; 61%).

`NOUN` tokens may have the following values of `PronType`:

* `Int` (31; 100% of non-empty `PronType`): <em>kaçmak, kaçırmak, kaçma, kaçırmamak, mi, Nasıldan, Nasılsın, kaça, kaçanlar, kaçlara</em>
* `EMPTY` (66734): <em>gün, zaman, adam, şey, arasında, kadın, çocuk, iş, su, olduğunu</em>

## Relations with Agreement in `PronType`

The 10 most frequent relations where parent and child node agree in `PronType`:
<tt>PRON --[<tt><a href="tr_kenet-dep-conj.html">conj</a></tt>]--> PRON</tt> (11; 92%),
<tt>PRON --[<tt><a href="tr_kenet-dep-compound.html">compound</a></tt>]--> PRON</tt> (6; 75%),
<tt>PRON --[<tt><a href="tr_kenet-dep-fixed.html">fixed</a></tt>]--> PRON</tt> (2; 100%),
<tt>PRON --[<tt><a href="tr_kenet-dep-parataxis.html">parataxis</a></tt>]--> PRON</tt> (2; 100%),
<tt>PRON --[<tt><a href="tr_kenet-dep-amod.html">amod</a></tt>]--> PRON</tt> (1; 100%).

