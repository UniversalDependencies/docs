---
layout: base
title:  'Statistics of NameType in UD_Ukrainian'
udver: '2'
---

## Treebank Statistics: UD_Ukrainian: Features: `NameType`

This feature is language-specific.
It occurs with 3 different values: `Giv`, `Pat`, `Sur`.

1785 tokens (2%) have a non-empty value of `NameType`.
1131 types (4%) occur at least once with a non-empty value of `NameType`.
893 lemmas (5%) occur at least once with a non-empty value of `NameType`.
The feature is used with 1 part-of-speech tags: <tt><a href="uk-pos-PROPN.html">PROPN</a></tt> (1785; 2% instances).

### `PROPN`

1785 <tt><a href="uk-pos-PROPN.html">PROPN</a></tt> tokens (57% of all `PROPN` tokens) have a non-empty value of `NameType`.

The most frequent other feature values with which `PROPN` and `NameType` co-occurred: <tt><a href="uk-feat-Animacy.html">Animacy</a></tt><tt>=Anim</tt> (1785; 100%), <tt><a href="uk-feat-Number.html">Number</a></tt><tt>=Sing</tt> (1769; 99%), <tt><a href="uk-feat-Uninflect.html">Uninflect</a></tt><tt>=EMPTY</tt> (1529; 86%), <tt><a href="uk-feat-Gender.html">Gender</a></tt><tt>=Masc</tt> (1356; 76%), <tt><a href="uk-feat-Case.html">Case</a></tt><tt>=Nom</tt> (927; 52%).

`PROPN` tokens may have the following values of `NameType`:

* `Giv` (907; 51% of non-empty `NameType`): <em>Гнат, Міра, Вінстон, Марія, Михась, Мотря, Андрій, Джон, Микола, Михайло</em>
* `Pat` (57; 3% of non-empty `NameType`): <em>Василівна, І, О, Степанович, Іларіонович, Васильовича, Василівни, Г, Григоровичу, Миколайовичу</em>
* `Sur` (821; 46% of non-empty `NameType`): <em>Лі, Манафорта, Трампа, Щербачов, Дудаєва, Поттера, Гольдштейна, Сосницький, Українки, Курбас</em>

<table>
  <tr><th>Paradigm <i>О.</i></th><th><tt>Giv</tt></th><th><tt>Pat</tt></th></tr>
  <tr><td><tt><tt><a href="uk-feat-Case.html">Case</a></tt><tt>=Gen</tt></tt></td><td><em>О</em></td><td><em>О</em></td></tr>
  <tr><td><tt><tt><a href="uk-feat-Case.html">Case</a></tt><tt>=Ins</tt></tt></td><td><em>О</em></td><td></td></tr>
  <tr><td><tt><tt><a href="uk-feat-Case.html">Case</a></tt><tt>=Nom</tt></tt></td><td><em>О</em></td><td><em>О</em></td></tr>
</table>

`NameType` seems to be **lexical feature** of `PROPN`. 99% lemmas (885) occur only with one value of `NameType`.

## Relations with Agreement in `NameType`

The 10 most frequent relations where parent and child node agree in `NameType`:
<tt>PROPN --[<tt><a href="uk-dep-conj.html">conj</a></tt>]--> PROPN</tt> (78; 89%),
<tt>PROPN --[<tt><a href="uk-dep-appos.html">appos</a></tt>]--> PROPN</tt> (9; 56%),
<tt>PROPN --[<tt><a href="uk-dep-parataxis.html">parataxis</a></tt>]--> PROPN</tt> (4; 80%),
<tt>PROPN --[<tt><a href="uk-dep-flat-repeat.html">flat:repeat</a></tt>]--> PROPN</tt> (2; 100%),
<tt>PROPN --[<tt><a href="uk-dep-nmod.html">nmod</a></tt>]--> PROPN</tt> (1; 100%).

