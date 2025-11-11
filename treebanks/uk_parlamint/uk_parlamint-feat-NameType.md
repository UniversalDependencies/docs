---
layout: base
title:  'Statistics of NameType in UD_Ukrainian-ParlaMint'
udver: '2'
---

## Treebank Statistics: UD_Ukrainian-ParlaMint: Features: `NameType`

This feature is language-specific.
It occurs with 4 different values: `Geo`, `Giv`, `Pat`, `Sur`.

3857 tokens (4%) have a non-empty value of `NameType`.
888 types (6%) occur at least once with a non-empty value of `NameType`.
570 lemmas (8%) occur at least once with a non-empty value of `NameType`.
The feature is used with 1 part-of-speech tags: <tt><a href="uk_parlamint-pos-PROPN.html">PROPN</a></tt> (3857; 4% instances).

### `PROPN`

3857 <tt><a href="uk_parlamint-pos-PROPN.html">PROPN</a></tt> tokens (94% of all `PROPN` tokens) have a non-empty value of `NameType`.

The most frequent other feature values with which `PROPN` and `NameType` co-occurred: <tt><a href="uk_parlamint-feat-Number.html">Number</a></tt><tt>=Sing</tt> (3845; 100%), <tt><a href="uk_parlamint-feat-Gender.html">Gender</a></tt><tt>=Masc</tt> (2175; 56%), <tt><a href="uk_parlamint-feat-Animacy.html">Animacy</a></tt><tt>=Anim</tt> (2134; 55%).

`PROPN` tokens may have the following values of `NameType`:

* `Geo` (1714; 44% of non-empty `NameType`): <em>України, Україні, Україна, Криму, Росії, Україну, Крим, Києві, Росія, Тузла</em>
* `Giv` (788; 20% of non-empty `NameType`): <em>Володимире, Олександр, Володимир, Михайло, Сергій, Микола, Іван, Петро, Олександре, Юрій</em>
* `Pat` (395; 10% of non-empty `NameType`): <em>Михайловичу, Іванович, Миколайович, Валентиновичу, Івановичу, Сергійович, Віталійович, Михайлович, Олексійович, Івановича</em>
* `Sur` (960; 25% of non-empty `NameType`): <em>Симоненко, Тимошенко, Цимбалюк, Михайлович, Януковича, Рудьковський, Кармазін, Ющенка, Мамка, Пинзеник</em>

<table>
  <tr><th>Paradigm <i>Михайлович</i></th><th><tt>Pat</tt></th><th><tt>Sur</tt></th></tr>
  <tr><td><tt><tt><a href="uk_parlamint-feat-Case.html">Case</a></tt><tt>=Dat</tt></tt></td><td><em>Михайловичу</em></td><td><em>Михайловичу</em></td></tr>
  <tr><td><tt><tt><a href="uk_parlamint-feat-Case.html">Case</a></tt><tt>=Gen</tt></tt></td><td><em>Михайловича</em></td><td></td></tr>
  <tr><td><tt><tt><a href="uk_parlamint-feat-Case.html">Case</a></tt><tt>=Nom</tt></tt></td><td><em>Михайлович</em></td><td><em>Михайлович</em></td></tr>
  <tr><td><tt><tt><a href="uk_parlamint-feat-Case.html">Case</a></tt><tt>=Voc</tt></tt></td><td><em>Михайловичу</em></td><td><em>Михайловичу</em></td></tr>
</table>

`NameType` seems to be **lexical feature** of `PROPN`. 99% lemmas (564) occur only with one value of `NameType`.

## Relations with Agreement in `NameType`

The 10 most frequent relations where parent and child node agree in `NameType`:
<tt>PROPN --[<tt><a href="uk_parlamint-dep-conj.html">conj</a></tt>]--> PROPN</tt> (115; 76%),
<tt>PROPN --[<tt><a href="uk_parlamint-dep-nsubj.html">nsubj</a></tt>]--> PROPN</tt> (2; 100%),
<tt>PROPN --[<tt><a href="uk_parlamint-dep-reparandum.html">reparandum</a></tt>]--> PROPN</tt> (1; 100%).

