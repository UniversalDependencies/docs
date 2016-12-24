---
layout: feature
title: 'Variant'
shortdef: 'Variant'
---

Sometimes there are multiple word forms for the same lemma and set of features.
The `Variant` feature helps distinguish alternate forms.

In Russian [adjectives](ru-pos/ADJ) may have a short form.
This feature only marks the non-standard short forms, hence there is only one value, `Short`.
For the long standard forms the `Variant` feature remains unspecified.

### `Short`: short form of adjectives

The short form is called _nominal form of adjective (краткая форма прилагательных),_
as opposed to the long form, which is _pronominal_ because it originated as
a combination of a nominal form and a personal pronoun. But this is ancient history of the
language. In modern Czech, only a subset of the nominal forms survive, and using them sometimes sounds
slightly archaic. They are used as nominal predicates with copula, but they do not appear as premodifiers of nouns.
The pronominal forms are considered standard, except for two frequent adjectives that
do not have them: _<b>třeba</b>, <b>rád</b>._

#### Examples

* _<b>красив</b>_ “beautiful”, _<b>возможен</b>_ “able”, _<b>нужен</b>_ “necessary”, _<b>известен</b>_ “known”,
  _<b>доволен</b>_ “satisfied”, _<b>уверен</b>_ “sure”, _<b>равен</b>_ “equal”, _<b>готов</b>_ “finished”, _<b>связан</b>_ “connected”, _<b>виновен</b>_ “guilty”
* Long equivalents: красивый, возможный, нужный, известный, довольный, уверенный, равный, готовый, связанный, виновный
