---
layout: postag
title: 'PRON'
shortdef: 'pronoun'
---

### Definition

Pronouns are words that substitute for [nouns](NOUN) or noun phrases,
whose meaning is recoverable from the linguistic or extralinguistic
context.

Pronouns under this definition function like nouns. Note that some
languages traditionally extend the term _pronoun_ to words that
substitute for [adjectives](ADJ). Such words are not tagged `PRON`
under our universal scheme. They are tagged as [determiners](DET) in
order to annotate the same thing same way across languages.

For instance, [en] _this_ is either pronoun _(I saw <b>this</b>
yesterday.)_ or determiner _(I saw <b>this</b> car yesterday.)_ Its
Czech translation, [cs] _tohle_, is traditionally called pronoun in
Czech grammar, regardless of context (the notion of determiners does
not exist in Czech grammar). To make the annotation parallel across
languages, it should be now tagged `PRON` in _<b>Tohle</b> jsem viděl
včera._ and `DET` in _<b>Tohle</b> auto jsem viděl včera._

### Examples

- personal pronouns: _I, you, he, she, it, we, they_
- reflexive pronouns: _myself, yourself, himself, herself, itself, ourselves, yourselves, theirselves_
- demonstrative pronouns: _this_ as in _I saw <b>this</b> yesterday._
- interrogative pronouns: _who, what_ as in _<b>What</b> do you think?_
- relative pronouns: _who, what_ as in _I wonder <b>what</b> you think._ (Note, nowever, that some relative clause introducing words, such as [en] _that_ are better analyzed as subordinating conjunctions (otherwise known as "complementizers" in the literature), and so are tagged as [SCONJ]().)
- indefinite pronouns: _somebody, something, anybody, anything_
- totality pronouns: _everybody, everything_
- negative pronouns: _nobody, nothing_

### References

- [Loos, Eugene E., et al. 2003. Glossary of linguistic terms: What is a pronoun?](http://www-01.sil.org/linguistics/GlossaryOfLinguisticTerms/WhatIsAPronoun.htm)
- [Wikipedia](http://en.wikipedia.org/wiki/Pronoun)
