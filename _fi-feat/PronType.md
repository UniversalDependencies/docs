---
layout: feature
title: 'PronType'
shortdef: 'pronominal type'
---

### `Prs`: personal

#### Examples

* [fi] _minä, sinä, hän, me, te, he_ "I, you, he/she, we, you, they"
* [fi] _minun, sinun, hänen, meidän, teidän, heidän_ "my, your, his/her, our, your, their"

### `Rcp`: reciprocal

#### Examples

* [fi] _toisiaan_ "each other"

### `Int`: interrogative

#### Examples

* [fi] _kuka, mikä, kumpi, millainen_ "who, what, which, like what"

### `Rel`: relative

#### Examples

* [fi] _joka, mikä, kuka_ "which, what, who"

### `Dem`: demonstrative

#### Examples

* [fi] _tämä, tuo, se, nämä, nuo, ne_ "this, that, it/that, these, those, they/those"

### `Ind`: indefinite

TODO

### Notes: indefinite vs. quantifier pronouns

Some descriptions of Finnish avoid the category label "indefinite
pronouns" (indefiniittipronomi) in favor of "quantifier/quantifying
pronouns" (kvanttoripronomini)
(e.g. <http://scripta.kotus.fi/visk/sisallys.php?p=742>; in Finnish),
while others recognize both categories
(http://www.ling.helsinki.fi/kieliteknologia/tutkimus/treebank/sources/FinnTreeBankManual.pdf#page=37).
UD Finnish only uses the `PronType` value `Ind` (indefinite) (See also
the note on negative pronouns below).

### Notes: negative pronouns

Finnish has no "inherently negative" pronouns (see
e.g. <http://wals.info/chapter/115>) such as [en] *nothing* or [de]
*niemand* "nobody" but instead uses a negator to construct such
expressions:

* _ei mitään_ "nothing"
* _ei kukaan_ "nobody"

Some descriptions separate pronouns that can occur in such expressions
into their own subcategory of negative polarity (kieltohakuiset)
pronouns (see e.g. [VISK §
757](http://scripta.kotus.fi/visk/sisallys.php?p=757); in Finnish).
However, as the
[UD `PronType=Neg`](http://universaldependencies.github.io/docs/u/feat/PronType.html)
feature only covers inherently negative pronouns, UD Finnish assigns
the `PronType` value `Ind` to these pronouns.
