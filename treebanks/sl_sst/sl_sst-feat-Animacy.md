---
layout: base
title:  'Statistics of Animacy in UD_Slovenian-SST'
udver: '2'
---

## Treebank Statistics: UD_Slovenian-SST: Features: `Animacy`

This feature is universal.
It occurs with 2 different values: `Anim`, `Inan`.

1063 tokens (1%) have a non-empty value of `Animacy`.
482 types (4%) occur at least once with a non-empty value of `Animacy`.
480 lemmas (6%) occur at least once with a non-empty value of `Animacy`.
The feature is used with 2 part-of-speech tags: <tt><a href="sl_sst-pos-NOUN.html">NOUN</a></tt> (987; 1% instances), <tt><a href="sl_sst-pos-PROPN.html">PROPN</a></tt> (76; 0% instances).

### `NOUN`

987 <tt><a href="sl_sst-pos-NOUN.html">NOUN</a></tt> tokens (9% of all `NOUN` tokens) have a non-empty value of `Animacy`.

The most frequent other feature values with which `NOUN` and `Animacy` co-occurred: <tt><a href="sl_sst-feat-Gender.html">Gender</a></tt><tt>=Masc</tt> (987; 100%), <tt><a href="sl_sst-feat-Number.html">Number</a></tt><tt>=Sing</tt> (987; 100%), <tt><a href="sl_sst-feat-Case.html">Case</a></tt><tt>=Acc</tt> (985; 100%).

`NOUN` tokens may have the following values of `Animacy`:

* `Anim` (87; 9% of non-empty `Animacy`): <em>otroka, zdravnika, cimra, gospoda, črnca, avtorja, bolnika, kolega, lastnika, novinarja</em>
* `Inan` (900; 91% of non-empty `Animacy`): <em>dan, način, primer, čas, teden, program, denar, mesec, glas, konec</em>
* `EMPTY` (10408): <em>bistvu, strani, leta, leto, stvari, let, otrok, hvala, ljudi, redu</em>

<table>
  <tr><th>Paradigm <i>duh</i></th><th><tt>Anim</tt></th><th><tt>Inan</tt></th></tr>
  <tr><td><tt></tt></td><td><em>duha</em></td><td><em>duh</em></td></tr>
</table>

`Animacy` seems to be **lexical feature** of `NOUN`. 100% lemmas (424) occur only with one value of `Animacy`.

### `PROPN`

76 <tt><a href="sl_sst-pos-PROPN.html">PROPN</a></tt> tokens (4% of all `PROPN` tokens) have a non-empty value of `Animacy`.

The most frequent other feature values with which `PROPN` and `Animacy` co-occurred: <tt><a href="sl_sst-feat-Case.html">Case</a></tt><tt>=Acc</tt> (76; 100%), <tt><a href="sl_sst-feat-Gender.html">Gender</a></tt><tt>=Masc</tt> (76; 100%), <tt><a href="sl_sst-feat-Number.html">Number</a></tt><tt>=Sing</tt> (76; 100%).

`PROPN` tokens may have the following values of `Animacy`:

* `Anim` (22; 29% of non-empty `Animacy`): <em>Poljanška, Arturja, Boruca, Dušana, Francoza, Goloba, Igorja, Kikija, Kitajca, Kristusa</em>
* `Inan` (54; 71% of non-empty `Animacy`): <em>Triglav, Bruselj, Harvard, Maribor, Paranoid, Counter-Strike, Okrešelj, Pekel, Rodik, Tržič</em>
* `EMPTY` (1662): <em>[name:personal], [name:surname], Sloveniji, Slovenija, Slovenije, Ljubljani, [name:organisation], Ljubljane, Mariboru, Agropop</em>

`Animacy` seems to be **lexical feature** of `PROPN`. 100% lemmas (56) occur only with one value of `Animacy`.

## Relations with Agreement in `Animacy`

The 10 most frequent relations where parent and child node agree in `Animacy`:
<tt>NOUN --[<tt><a href="sl_sst-dep-reparandum.html">reparandum</a></tt>]--> NOUN</tt> (9; 82%),
<tt>PROPN --[<tt><a href="sl_sst-dep-flat-name.html">flat:name</a></tt>]--> PROPN</tt> (4; 100%),
<tt>NOUN --[<tt><a href="sl_sst-dep-appos.html">appos</a></tt>]--> PROPN</tt> (2; 100%),
<tt>NOUN --[<tt><a href="sl_sst-dep-conj.html">conj</a></tt>]--> PROPN</tt> (1; 100%).

