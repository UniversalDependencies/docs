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

Pronouns under this definition function like nouns. Note that
Czech grammar traditionally extends the term _pronoun_ to words that
substitute for [adjectives](ADJ). Such words are not tagged `PRON`
under our universal scheme. They are tagged as [determiners](DET) in
order to annotate the same thing same way across languages.

For instance, _tohle&nbsp;_ “this” is traditionally called pronoun in
Czech grammar, regardless of context (the notion of determiners does
not exist in the traditional Czech grammar).
In UD v2, _tohle_ is tagged `DET`.

Unlike in UD v1, we no longer use the dependency tree to distinguish between determiners and pronouns.
Instead, we use a pre-defined list of lemmas that are `DET` if their PDT tag indicates pronoun.
See also [here](../../sla/pos/PRON.html) for a Slavic-wide discussion of the distinction between determiners and pronouns.

### Examples

- personal pronouns: _já, ty, on, ona, ono, my, vy, oni, ony&nbsp;_ “I, you, he, she, it, we, you, they, they”
- reflexive pronouns: _sebe, se, sobě, si, sebou&nbsp;_ “oneself”
- interrogative pronouns: _kdo, co&nbsp;_ “who, what” as in _<b>Co</b> si myslíš?&nbsp;_ “<b>What</b> do you think?”
- relative pronouns: _kdo, co&nbsp;_ “who, what” as in _Zajímalo by mě, <b>co</b> si myslíš.&nbsp;_  “I wonder <b>what</b> you think.”
- indefinite pronouns: _někdo, něco&nbsp;_ “somebody, something”
- negative pronouns: _nikdo, nic&nbsp;_ “nobody, nothing”

### References

- [Loos, Eugene E., et al. 2003. Glossary of linguistic terms: What is a pronoun?](http://www-01.sil.org/linguistics/GlossaryOfLinguisticTerms/WhatIsAPronoun.htm)
- [Wikipedia](http://en.wikipedia.org/wiki/Pronoun)
<!-- Interlanguage links updated Út zář 29 18:40:47 CEST 2020 -->
