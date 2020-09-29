---
layout: postag
title: 'AUX'
shortdef: 'auxiliary verb'
# The filename "aux" is not allowed on Windows, so we redirect instead
# (see https://github.com/UniversalDependencies/docs/issues/20)
redirect_from: "bg/pos/AUX.html"
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

In Bulgarian the auxiliary verbs are varieties of the verb 'to be' in both functions -- auxiliary and copular:

- Vx# / _съм_ / _sam_ "to be" 
- Vy# /_бъда_ / _bada_ "to be" 
- Vi# / _бивам_ / _bivam_ "to be" 

_Modal verbs_ count as [main verbs](VERB) in BulTreeBank tagset and they are thus tagged `VERB`.

Also, the following verbal particles (Tx) are viewed as auxiliaries:

- _да_ / _da_ "to" 
- _ще_ / _shte_ "will"


### Examples

- Tense and passive auxiliaries: _<b>бях</b>_ / _byah_ "I was"

Note that the symbol `#', used in the Universal POS section indicates a holder for arbitrary number of features, suppressed in the respective tag as irrelevant in the BulTreeBank tagset, when mapped to the Universal one.
<!-- Interlanguage links updated Út zář 29 20:42:53 CEST 2020 -->
