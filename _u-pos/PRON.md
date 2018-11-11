---
layout: postag
title: 'PRON'
shortdef: 'pronoun'
udver: '2'
---

### Definition

Pronouns are words that substitute for [nouns](NOUN) or noun phrases,
whose meaning is recoverable from the linguistic or extralinguistic
context.

Pronouns under this definition function like nouns. Note that some
languages traditionally extend the term _pronoun_ to words that
substitute for [adjectives](ADJ). Such words are not tagged `PRON`
under our universal scheme. They are tagged as [determiners](DET) in
order to annotate the same thing the same way across languages.

It is not always crystal clear where pronouns end and determiners start.
Unlike in UD v1 it is no longer required that they are told apart solely on
the base of the context. The words can be pre-classified in the dictionary
as either `PRON` or `DET`, based on their _typical_ syntactic distribution
(and morphology, when applicable).
Language-specific documentation should list all pronouns (it is a closed class)
and point out ambiguities, if any.

See also [general principles on pronominal words](../overview/morphology.html#pronominal-words)
for more tips on how to define pronouns.
In particular:

* Non-possessive personal, reflexive or reciprocal pronouns are always tagged `PRON`.
* Possessives vary across languages. In some languages the above tests put them in the `DET` category.
  In others, they are more like a normal personal pronoun in a specific case (often the genitive), or a personal pronoun with an adposition; they are tagged `PRON`.

### Examples

- personal pronouns: _I, you, he, she, it, we, they_
- reflexive pronouns: _myself, yourself, himself, herself, itself, ourselves, yourselves, theirselves_
- interrogative pronouns: _who, what_ as in _<b>What</b> do you think?_
- relative pronouns: _who, what_ as in _I wonder <b>what</b> you think._ (Note, however, that some relative clause introducing words, such as [en] _that_ are better analyzed as subordinating conjunctions (otherwise known as “complementizers” in the literature), and so are tagged as [SCONJ]().)
- indefinite pronouns: _somebody, something, anybody, anything_
- total pronouns: _everybody, everything_
- negative pronouns: _nobody, nothing_
- possessive pronouns (which usually stand alone as a nominal): _mine, yours, (his), hers, (its), ours, theirs_

### References

- [Loos, Eugene E., et al. 2003. Glossary of linguistic terms: What is a pronoun?](http://www-01.sil.org/linguistics/GlossaryOfLinguisticTerms/WhatIsAPronoun.htm)
- [Wikipedia](http://en.wikipedia.org/wiki/Pronoun)
