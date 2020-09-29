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
or [auxiliary verbs](AUX)). Czech particles are
not inflected.

Note that response words such as _ano, jo&nbsp;_ “yes”, _ne&nbsp;_ “no”, etc.
are considered particles in the PDT tagset but they should be retagged
as interjections under the UD standard. Also note that _ne&nbsp;_ can be
used in two ways, one would be translated as English “no” and the other as “not”.
Only the former should become interjection, while the latter will stay a particle.

### Examples

- Sentence modality: _<b>ať</b>, <b>kéž</b>, <b>nechť</b>&nbsp;_ (“<b>Let's</b> do it!” “<b>If only</b> I could do it over.” “<b>May you</b> have an enjoyable stay!”)
- _jen&nbsp;_ “just, only” <!-- 2125 occurrences, the most frequent particle. Strange: its partial synonym _pouze_ is tagged as adverb! -->
- _až&nbsp;_ “only, as late as, even, up to” <!-- Ambiguous: it could be also a conjunction. 1156 occ. TT, 570 J^, 96 J,. -->
  Use case: _až po stovky tisíc let&nbsp;_ “up to hundreds of thousands of years”
- _asi&nbsp;_ “about, roughly, maybe” <!-- All 846 occurrences are tagged as particles. -->

## Diffs

### Prague Dependency Treebank

- _li&nbsp;_ “if”: This is an encliticized morpheme that functions as subordinating conjunction but it always immediately follows
  the predicate of the subordinate clause.
  For example: _Nebude-<b>li</b> pršet, nezmoknem.&nbsp;_
  lit. _Will-not-<b>if</b> rain, we-will-not-get-wet.&nbsp;_
  “We will not get wet if it does not rain.”
  PDT tags the _li&nbsp;_ morpheme as particle and it is currently kept so in the UD conversion
  but it might be changed to `SCONJ` in the future releases.

- At present the UD-conversion of PDT keeps the PDT convention on tagging
  the response words (“yes, no”) as particles.
  Automatic conversion would not be straightforward because the negative particle
  _ne_ is sometimes used as the response particle/interjection (English “no”)
  and sometimes as a free negative morpheme (English “not”).
  These two usages would have to be distinguished and only the first one
  converted to interjection.

### References

- [Loos, Eugene E., et al. 2003. Glossary of linguistic terms: What is a particle?](http://www-01.sil.org/linguistics/GlossaryOfLinguisticTerms/WhatIsAParticle.htm)
- [Wikipedia](http://en.wikipedia.org/wiki/Grammatical_particle)
<!-- Interlanguage links updated Út zář 29 20:42:56 CEST 2020 -->
