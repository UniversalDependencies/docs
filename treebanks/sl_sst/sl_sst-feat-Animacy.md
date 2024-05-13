---
layout: base
title:  'Statistics of Animacy in UD_Slovenian-SST'
udver: '2'
---

## Treebank Statistics: UD_Slovenian-SST: Features: `Animacy`

This feature is universal.
It occurs with 2 different values: `Anim`, `Inan`.

1068 tokens (1%) have a non-empty value of `Animacy`.
487 types (4%) occur at least once with a non-empty value of `Animacy`.
484 lemmas (6%) occur at least once with a non-empty value of `Animacy`.
The feature is used with 2 part-of-speech tags: <tt><a href="sl_sst-pos-NOUN.html">NOUN</a></tt> (986; 1% instances), <tt><a href="sl_sst-pos-PROPN.html">PROPN</a></tt> (82; 0% instances).

### `NOUN`

986 <tt><a href="sl_sst-pos-NOUN.html">NOUN</a></tt> tokens (9% of all `NOUN` tokens) have a non-empty value of `Animacy`.

The most frequent other feature values with which `NOUN` and `Animacy` co-occurred: <tt><a href="sl_sst-feat-Gender.html">Gender</a></tt><tt>=Masc</tt> (986; 100%), <tt><a href="sl_sst-feat-Number.html">Number</a></tt><tt>=Sing</tt> (986; 100%), <tt><a href="sl_sst-feat-Case.html">Case</a></tt><tt>=Acc</tt> (984; 100%).

`NOUN` tokens may have the following values of `Animacy`:

* `Anim` (87; 9% of non-empty `Animacy`): <em>otroka, zdravnika, cimra, gospoda, črnca, avtorja, bolnika, kolega, lastnika, novinarja</em>
* `Inan` (899; 91% of non-empty `Animacy`): <em>dan, način, primer, čas, teden, program, denar, mesec, glas, konec</em>
* `EMPTY` (10425): <em>bistvu, strani, leta, stvari, leto, let, otrok, hvala, ljudi, redu</em>

<table>
  <tr><th>Paradigm <i>duh</i></th><th><tt>Anim</tt></th><th><tt>Inan</tt></th></tr>
  <tr><td><tt></tt></td><td><em>duha</em></td><td><em>duh</em></td></tr>
</table>

`Animacy` seems to be **lexical feature** of `NOUN`. 100% lemmas (423) occur only with one value of `Animacy`.

### `PROPN`

82 <tt><a href="sl_sst-pos-PROPN.html">PROPN</a></tt> tokens (5% of all `PROPN` tokens) have a non-empty value of `Animacy`.

The most frequent other feature values with which `PROPN` and `Animacy` co-occurred: <tt><a href="sl_sst-feat-Case.html">Case</a></tt><tt>=Acc</tt> (82; 100%), <tt><a href="sl_sst-feat-Gender.html">Gender</a></tt><tt>=Masc</tt> (82; 100%), <tt><a href="sl_sst-feat-Number.html">Number</a></tt><tt>=Sing</tt> (82; 100%).

`PROPN` tokens may have the following values of `Animacy`:

* `Anim` (22; 27% of non-empty `Animacy`): <em>Poljanška, Arturja, Boruca, Dušana, Francoza, Goloba, Igorja, Kikija, Kitajca, Kristusa</em>
* `Inan` (60; 73% of non-empty `Animacy`): <em>Triglav, Bruselj, Harvard, Maribor, Paranoid, Counter-Strike, Okrešelj, Pekel, Rodik, Tržič</em>
* `EMPTY` (1667): <em>[name:personal], [name:surname], Sloveniji, Slovenija, Slovenije, Ljubljani, [name:organisation], Ljubljane, Mariboru, Agropop</em>

`Animacy` seems to be **lexical feature** of `PROPN`. 100% lemmas (61) occur only with one value of `Animacy`.

## Relations with Agreement in `Animacy`

The 10 most frequent relations where parent and child node agree in `Animacy`:
<tt>NOUN --[<tt><a href="sl_sst-dep-reparandum.html">reparandum</a></tt>]--> NOUN</tt> (10; 83%),
<tt>PROPN --[<tt><a href="sl_sst-dep-flat-name.html">flat:name</a></tt>]--> PROPN</tt> (4; 100%),
<tt>NOUN --[<tt><a href="sl_sst-dep-appos.html">appos</a></tt>]--> PROPN</tt> (2; 100%),
<tt>NOUN --[<tt><a href="sl_sst-dep-conj.html">conj</a></tt>]--> PROPN</tt> (1; 100%).

