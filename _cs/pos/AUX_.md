---
layout: postag
title: 'AUX'
shortdef: 'auxiliary verb'
# The filename "aux" is not allowed on Windows, so we redirect instead
# (see https://github.com/UniversalDependencies/docs/issues/20)
redirect_from: "cs/pos/AUX.html"
udver: '2'
---

### Definition

The only truly auxiliary verb in Czech is _být_ “to be”,
and its variant (with separate lemma) _bývat_ “to usually be”.
It accompanies the lexical verb of a verb phrase and expresses
grammatical distinctions not carried by the lexical verb.

### Examples

- Future tense. Finite future form of _být_ is combined with infinitive
  of the lexical verb. The auxiliary expresses person, number and tense:
  _<b>budu</b> dělat_ “I will do”,
  _<b>budeš</b> dělat_ “you will do”,
  _<b>budou</b> dělat_ “they will do”.
  Note that a limited set of verbs can form future morphologically, without
  the auxiliary.

- Past tense in the first and second person.
  Finite present form of _být_ is combined with past participle
  of the lexical verb. The auxiliary expresses person and number,
  the participle expresses gender and number:
  _dělal <b>jsem</b>_ “I did.`Masc`”,
  _dělala <b>jsem</b>_ “I did.`Fem`”,
  _dělal <b>jsi</b>_ “you did.`Masc`”,
  _dělali <b>jsme</b>_ “we did.`Masc`”.

- Conditional mood.
  Conditional form of _být_ is combined with past participle
  of the lexical verb. The auxiliary expresses person and number,
  the participle expresses gender and number:
  _dělal <b>bych</b>_ “I would do.`Masc`”,
  _dělala <b>bych</b>_ “I would do.`Fem`”,
  _dělal <b>bys</b>_ “you would do.`Masc`”,
  _dělali <b>bychom</b>_ “we would do.`Masc`”.

- Passive voice.
  A form of _být_ (in various tenses and moods or in the infinitive) is combined with
  passive participle
  of the lexical verb. The auxiliary expresses person, number, tense and mood,
  the participle expresses gender, number and voice:
  _<b>je</b> udělán_ “he is done”,
  _<b>bude</b> udělán_ “he will be done”,
  _<b>byl</b> udělán_ “he was done”,
  _<b>byl by</b> udělán_ “he would be done”,
  _<b>buď</b> udělán_ “be done”,
  _<b>být</b> udělán_ “to be done”.

In UD v1, where copulas were not tagged `AUX`, many instances of _být_ were tagged `VERB`.
In UD v2, copulas are tagged `AUX` and the definition of copula sentences has been extended
to location-existentials (_V&nbsp;Praze <b>je</b> nové divadlo._ “There <b>is</b> a new theatre in Prague.”)
Hence almost all occurrences of _být_ should be now tagged `AUX`.
Only pure existentials without location (_Vůle <b>je</b> a vždycky <b>byla</b>._ “There <b>is</b> and always <b>was</b> the will.”)
have a non-auxiliary _být,_ which should be tagged `VERB`.

Note that the passive participle may be also used as nominal predicate with copula.
Hence it may be difficult to distinguish a passive construction from a copula construction.
The former focuses on the process while the latter emphasizes the result.
However, since copulas are now tagged `AUX`, the distinction no longer affects the part-of-speech tag:

- Passive: _Smlouva <b>byla</b>.`AUX` podepsána v&nbsp;Bílém domě._ &nbsp; “The contract was signed in the White House.”
- Copula: _Smlouva <b>byla</b>.`AUX` podepsána červeným inkoustem._ &nbsp; “The contract was signed in red ink.”

### Modal verbs are not auxiliaries

Czech modal verbs are not considered auxiliary and they are tagged `VERB`,
in accord with the annotation in the Prague Dependency Treebank.
Their behavior is only slightly different from other content verbs.

### Constructions with _mít_ and passive participle

There is a construction parallel to the perfect tenses of Germanic and Romance languages:
_mít_ “to have” + neuter singular passive participle, e.g. _mít (něco) uděláno_ “to have (something) done”.
They can also apply to intransitive verbs: _mít vyhráno_ “to have won”.
Sometimes the verb _mít_ shares the subject (actor) with the participle,
but in other contexts such relation is not guaranteed: _mít (někde něco) napsáno_ “to have (something) written (somewhere)”.
None of these constructions is considered a separate tense in the Czech grammar and the verb _mít_
is not analyzed as auxiliary.

### References

- [Loos, Eugene E., et al. 2003. Glossary of linguistic terms: What is an auxiliary verb?](http://www-01.sil.org/linguistics/GlossaryOfLinguisticTerms/WhatIsAnAuxiliaryVerb.htm)
- [Wikipedia](http://en.wikipedia.org/wiki/Auxiliary_verb)
- Jarmila Panevová, Eva Benešová, Petr Sgall. 1971. Čas a modalita v&nbsp;češtině (Tense and modality in Czech). Acta Universitatis Carolinae, Philologica Monographia XXXIV, Universita Karlova Praha
<!-- Interlanguage links updated St lis 3 20:58:08 CET 2021 -->
