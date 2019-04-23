---
layout: postag
title: 'PART'
shortdef: 'particle'
udver: '2'
---

### Definition

Particles are function words that must be associated with another word
or phrase to impart meaning and that do not satisfy definitions of
other universal parts of speech (e.g. [adpositions](ADP),
[coordinating conjunctions](CCONJ), [subordinating conjunctions](SCONJ)
or [auxiliary verbs](AUX)).  Particles may encode grammatical
categories such as negation, mood, tense etc.  Particles are normally
not inflected, although exceptions may occur.

Note that the `PART` tag does not cover so-called _verbal particles_
in Germanic languages, as in _give <b>in</b>_ or _end <b>up</b>_.
These are adpositions or adverbs by origin and are tagged accordingly
[ADP]() or [ADV]().  Separable verb prefixes in German are treated
analogically.

Note that not all function words that are traditionally called
particles in Japanese automatically qualify for the `PART` tag.  Some
of them do, e.g. the question particle か / _ka._ Others (e.g. に /
_ni,_ の / _no_) are parallel to adpositions in other languages and
should thus be tagged [ADP]().

In general, the `PART` tag should be used restrictively and only when
no other tag is possible. The the language-specific documentation
should list the words classified as `PART` in the given language.

### Examples

- Possessive marker: [en] _'s_
- Negation particle: [en] _not;_ [de] _nicht_
- Question particle: [ja] か / _ka_ (adding this particle to the end of a clause turns the clause into a question); [tr] _mu_
- Sentence modality: [cs] _ať, kéž, nechť_ (_Let's_ do it! _If only_ I could do it over. _May you_ have an enjoyable stay!)

### References

- [Loos, Eugene E., et al. 2003. Glossary of linguistic terms: What is a particle?](http://www-01.sil.org/linguistics/GlossaryOfLinguisticTerms/WhatIsAParticle.htm)
- [Wikipedia](http://en.wikipedia.org/wiki/Grammatical_particle)
