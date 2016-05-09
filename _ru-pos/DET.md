---
layout: postag
title: 'DET'
shortdef: 'determiner'
---

### Definition

Determiners are words that modify [nouns](NOUN) or noun phrases and
express the reference of the noun phrase in context. That is, a
determiner may indicate whether the noun is referring to a definite or
indefinite element of a class, to a closer or more distant element, to
an element belonging to a specified person or thing, to a particular
number or quantity, etc.

An important point to note is that the traditional grammar of Russian does not
define determiners as a separate word class. Russian does not have articles.
Most determiners are traditionally called pronouns; that is, an UD-conformant
annotation of Russian must distinguish between substantive pronouns (UD tag [PRON]())
and attributive pronouns (UD tag `DET`).

### Conversion from the Prague Dependency Treebank

Since the PDT tagset (like all other Czech tagsets) does not distinguish
substantive and attributive pronouns, morphological tags alone are not enough
to find the correct universal POS tag.
Morphological rules could help, as the inflection patterns of some pronouns
bear similarities to adjectival inflection; nevertheless, there will be other
cases that cannot be solved this way.
We have to examine the dependency tree.
If a pronoun modifies a noun, it should be tagged `DET`.
Otherwise it is `PRON`.
As a result, all words that can be tagged `DET` can also be tagged `PRON`,
but some words can only be tagged `PRON`.
(We cannot recognize cases where the pronoun is in fact attributive, but the
modified noun has been elided and is not represented in the tree.)

For instance, _tohle&nbsp;_ “this” is either pronoun
_(<b>Tohle</b> jsem viděl včera.&nbsp;_ “I saw <b>this</b> yesterday.”)
or determiner
_(<b>Tohle</b> auto jsem viděl včera.&nbsp;_ “I saw <b>this</b> car yesterday.”)

### Examples

- possessive determiners: _мой, твой, его, её, наш, ваш, их&nbsp;_ “my, your, his, her, our, your, their”
- reflexive possessive determiner: _свой&nbsp;_ “one's own”
- demonstrative determiners: _этот&nbsp;_ as in _Я видела <b>эту</b> машину вчера.&nbsp;_ “I saw <b>this</b> car yesterday.”
- interrogative determiners: _какой&nbsp;_ as in _<b>Какая</b> машина тебе нравится?&nbsp;_ “<b>Which</b> car do you like?”
- relative determiners: _который&nbsp;_ as in _Мне интересно, <b>которая</b> машина тебе нравится.&nbsp;_ “I wonder <b>which</b> car you like.”
- relative possessive determiner: _чей&nbsp;_ “whose”
- indefinite determiners: _некоторый_
- total determiners: _каждый_
- negative determiners: _никакой&nbsp;_ as in _У нас не осталось <b>никаких</b> машин.&nbsp;_ “We have <b>no</b> cars available.”

