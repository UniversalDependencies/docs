---
layout: postag
title: 'AUX'
shortdef: 'auxiliary'
# The filename "aux" is not allowed on Windows, so we redirect instead
# (see https://github.com/UniversalDependencies/docs/issues/20)
redirect_from: "u/pos/AUX.html"
udver: '2'
---

### Definition

An auxiliary is a function word that accompanies the lexical verb of a
verb phrase and expresses grammatical distinctions not carried by the
lexical verb, such as person, number, tense, mood, aspect, voice or evidentiality.
It is often a verb (which may have non-auxiliary uses as well) but many languages 
have nonverbal TAME markers and these should also be tagged `AUX`. The class `AUX`
also include copulas (in the narrow sense of pure linking words for nonverbal predication).

_Modal verbs_ may count as auxiliaries in some languages (English). In
other languages their behavior is not too different from the [main
verbs](VERB) and they are thus tagged `VERB`.

Note that not all languages have grammaticalized auxiliaries, and
even where they exist the dividing line between full verbs and
auxiliaries can be expected to vary between languages. Exactly
which words are counted as `AUX` should be part of the
language-specific documentation.

### Examples

- Tense auxiliaries: _<b>has</b> (done), <b>is</b> (doing), <b>will</b> (do)_
- Passive auxiliaries: _<b>was</b> (done), <b>got</b> (done)_
- Modal auxiliaries: _<b>should</b> (do), <b>must</b> (do)_
- Verbal copulas: _He <b>is</b> a teacher._

### References

- [Loos, Eugene E., et al. 2003. Glossary of linguistic terms: What is an auxiliary verb?](http://www-01.sil.org/linguistics/GlossaryOfLinguisticTerms/WhatIsAnAuxiliaryVerb.htm)
- [Wikipedia](http://en.wikipedia.org/wiki/Auxiliary_verb)
