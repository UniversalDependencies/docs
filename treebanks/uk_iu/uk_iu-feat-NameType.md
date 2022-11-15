---
layout: base
title:  'Statistics of NameType in UD_Ukrainian-IU'
udver: '2'
---

## Treebank Statistics: UD_Ukrainian-IU: Features: `NameType`

This feature is language-specific.
It occurs with 3 different values: `Giv`, `Pat`, `Sur`.

1999 tokens (2%) have a non-empty value of `NameType`.
1264 types (4%) occur at least once with a non-empty value of `NameType`.
982 lemmas (5%) occur at least once with a non-empty value of `NameType`.
The feature is used with 1 part-of-speech tags: <tt><a href="uk_iu-pos-PROPN.html">PROPN</a></tt> (1999; 2% instances).

### `PROPN`

1999 <tt><a href="uk_iu-pos-PROPN.html">PROPN</a></tt> tokens (57% of all `PROPN` tokens) have a non-empty value of `NameType`.

The most frequent other feature values with which `PROPN` and `NameType` co-occurred: <tt><a href="uk_iu-feat-Animacy.html">Animacy</a></tt><tt>=Anim</tt> (1999; 100%), <tt><a href="uk_iu-feat-Number.html">Number</a></tt><tt>=Sing</tt> (1982; 99%), <tt><a href="uk_iu-feat-Uninflect.html">Uninflect</a></tt><tt>=EMPTY</tt> (1702; 85%), <tt><a href="uk_iu-feat-Gender.html">Gender</a></tt><tt>=Masc</tt> (1528; 76%), <tt><a href="uk_iu-feat-Case.html">Case</a></tt><tt>=Nom</tt> (1045; 52%).

`PROPN` tokens may have the following values of `NameType`:

* `Giv` (1014; 51% of non-empty `NameType`): <em>Міра, Вінстон, Гнат, Марія, Михась, Мотря, Андрій, Михайло, джон, микола</em>
* `Pat` (61; 3% of non-empty `NameType`): <em>Василівна, І, О, Степанович, П, Іларіонович, Васильовича, Василівни, Г, Григоровичу</em>
* `Sur` (924; 46% of non-empty `NameType`): <em>Лі, Манафорта, Поттера, Трампа, Щербачов, Дудаєва, Гольдштейна, Морріс, Сосницький, Українки</em>

<table>
  <tr><th>Paradigm <i>В.</i></th><th><tt>Giv</tt></th><th><tt>Pat</tt></th><th><tt>Sur</tt></th></tr>
  <tr><td><tt><tt><a href="uk_iu-feat-Case.html">Case</a></tt><tt>=Acc</tt></tt></td><td></td><td><em>В</em></td><td></td></tr>
  <tr><td><tt><tt><a href="uk_iu-feat-Case.html">Case</a></tt><tt>=Gen</tt></tt></td><td><em>В</em></td><td></td><td></td></tr>
  <tr><td><tt><tt><a href="uk_iu-feat-Case.html">Case</a></tt><tt>=Nom</tt></tt></td><td><em>В</em></td><td></td><td><em>В</em></td></tr>
</table>

`NameType` seems to be **lexical feature** of `PROPN`. 99% lemmas (974) occur only with one value of `NameType`.

## Relations with Agreement in `NameType`

The 10 most frequent relations where parent and child node agree in `NameType`:
<tt>PROPN --[<tt><a href="uk_iu-dep-conj.html">conj</a></tt>]--> PROPN</tt> (93; 89%),
<tt>PROPN --[<tt><a href="uk_iu-dep-appos.html">appos</a></tt>]--> PROPN</tt> (9; 53%),
<tt>PROPN --[<tt><a href="uk_iu-dep-parataxis.html">parataxis</a></tt>]--> PROPN</tt> (4; 80%),
<tt>PROPN --[<tt><a href="uk_iu-dep-flat-repeat.html">flat:repeat</a></tt>]--> PROPN</tt> (2; 100%),
<tt>PROPN --[<tt><a href="uk_iu-dep-nmod.html">nmod</a></tt>]--> PROPN</tt> (2; 100%).

