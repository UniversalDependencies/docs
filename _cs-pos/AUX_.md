---
layout: postag
title: 'AUX'
shortdef: 'auxiliary verb'
# The filename "aux" is not allowed on Windows, so we redirect instead
# (see https://github.com/UniversalDependencies/docs/issues/20)
redirect_from: "cs/pos/AUX.html"
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
  Conditional form (historically aorist) of _být_ is combined with past participle
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

Note that the verb _být_ will not be tagged `AUX` if it is used as
[copula](cs-dep/cop) (_Moje auto <b>je</b> nové._ “My car <b>is</b> new.”)
or as a content verb (_V&nbsp;Praze <b>je</b> nové divadlo._ “There <b>is</b> a new theatre in Prague.”)
It will be tagged [VERB]() in these cases.
It is also possible that an auxiliary _<b>být</b>_ modifies a lexical _být_
(_V&nbsp;Praze <b>by</b> bylo nové divadlo._ “There <b>would</b> be a new theatre in Prague.”)

Note that the passive participle may be also used as nominal predicate with copula.
Hence it may be difficult to distinguish a passive construction from a copula construction.
The former focuses on the process while the latter emphasizes the result.

- Passive: _Smlouva <b>byla</b>.`AUX` podepsána v&nbsp;Bílém domě._ &nbsp; “The contract was signed in the White House.”
- Copula: _Smlouva <b>byla</b>.`VERB` podepsána červeným inkoustem._ &nbsp; “The contract was signed in red ink.”

### Modal verbs are not auxiliaries

Czech modal verbs are not considered auxiliary and they are tagged `VERB`,
in accord with the annotation in the Prague Dependency Treebank.
Their behavior is only slightly different from content verbs.

### References

- [Loos, Eugene E., et al. 2003. Glossary of linguistic terms: What is an auxiliary verb?](http://www-01.sil.org/linguistics/GlossaryOfLinguisticTerms/WhatIsAnAuxiliaryVerb.htm)
- [Wikipedia](http://en.wikipedia.org/wiki/Auxiliary_verb)
- Jarmila Panevová, Eva Benešová, Petr Sgall. 1971. Čas a modalita v&nbsp;češtině (Tense and modality in Czech). Acta Universitatis Carolinae, Philologica Monographia XXXIV, Universita Karlova Praha
