---
layout: base
title:  'Yupik UD'
udver: '2'
---

# UD for Yupik <span class="flagspan"><img class="flag" src="../../flags/svg/US-AK.svg" /></span>

## Tokenization and Word Segmentation

* Words are generally delimited by whitespace or punctuation.
* Words consisting of multiple morphemes are further analyzed into morphemes based on the Chen et al. (2020) Yupik morphological analyzer. See Park et al. (2021) for more details.
* In order to enable the use of morphemes as tokens, we adapted the existing "multiword expressions" annotation mechanism.
* Word-level annotation is available in the github repo as a separate file (not-to-release/ess_sli-ud-test.merged.conllu). We used [udapy](https://github.com/udapi/udapi-python) to remove "multiword expressions" to convert the morpheme-level annotations to word-level annotations.

## Morphology

### Tags

* Most Yupik words are nominals ([NOUN]()), verbals ([VERB]()) or particles ([PART]()).
* If a word is further analyzed into morphemes, noun-yielding derivational morphemes are tagged as `NOUN` and verb-yielding derivational morphemes are tagged as `VERB`. See [NOUN]() and [VERB]() for examples.
* Particles ([PART]()) do not inflect, so they are not further analyzed into morphemes.
* [ADV]() is used for interrogative adverbs, quantifier-qualifier constructions and demonstrative adverbs.
* [PRON]() is used for demonstrative pronouns and interrogative pronouns.
* [DET]() is used for two interrogative words.
* [CCONJ]() is used for an Yupik enclitic (_=llu_ "and").
* [NUM]() is used for numerals.
* [X]() is used for inflectional suffixes.
* [ADJ](), [ADP](), [AUX](), [INTJ](), [PROPN](), [SCONJ](), and [SYM]() do not occur in the corpus.

### Features

* Unpossessed nouns inflect for [Case]() and [Number]().
* Possessed nouns also inflect for [Number[psor]]() and [Person[psor]]() to encode the possessor's number and person information.
* Verbs inflect for [Mood](), [Number[obj]](), [Number[subj]](), [Person[obj]](https://universaldependencies.org/ess/feat/Person-obj.html) and [Person[subj]](https://universaldependencies.org/ess/feat/Person-subj.html). Depending on the verb's valency ([Subcat](https://universaldependencies.org/ess/feat/Subcat.html)), the verb will encode the number and person information about the subject only or both the subject and object.
* Yupik inflections distinguish third person reflexive (also known as fourth person) from third person. In possessed nouns, [Reflex](https://universaldependencies.org/ess/feat/Reflex.html) is used when the possessor refers to the subject. [Reflex](https://universaldependencies.org/ess/feat/Reflex.html) is also used for quantifier-qualifier constructions (see [ADV]()). In verbs, [Reflex[obj]]() or [Reflex[subj]]() is used when the verb's object or subject refers back to the subject.

## Syntax

* Yupik does not have a fixed word order.
* Yupik use the absolutive-ergative alignment to distinguish subjects ([nsubj]()) and objects ([obj]()). The subject of an intransitive verb is in absolutive case. The subject of a transitive verb is in ergative case. The direct object of a transitive verb is in absolutive case.
* Nouns in ablative-modalis case may be used as an object of an intransitive verb. In such cases, those nouns are understood as "an indefinite object" (Jacobson 2001, p.20). Because such nouns are not encoded in the verb, we tagged them as oblique nominals in ablative-modalis case ([obl:mod]()) to distinguish them from other oblique nominals ([obl]()).
* There are no known auxiliaries or copulas as stand-alone words. However, some derivational suffixes seem to play the role of auxiliaries or copulas and tagged as such.
* We used [dep:aux]() to tag those derivational suffixes that act like auxiliaries (c.f. [aux](https://universaldependencies.org/u/dep/aux_)).
* We used [dep:cop]() for a copula-like derviational suffix (c.f. [cop]()).
* [dep:mark]() is used for derivational suffixes that act like a marker (c.f. [mark]())
* [nmod:arg]() is used when a nominal base is used as the argument of a noun-elaborating (N→N) derivational suffix.
* [dep:infl]() is used for inflectional suffixes.
* [dep:ana]() is used for the anaphoric prefix.
* [dep:emo]() is used for emotional roots.
* [dep:pos]() is used for postural roots.



## Treebanks

There is [1](../treebanks/ess-comparison.html) Yupik UD treebank:

  * [Yupik-SLI](../treebanks/ess_sli/index.html)
  

## References
 * Emily Chen, Hyunji Hayley Park, and Lane Schwartz. 2020. [Improved finite-state morphological analysis for St. Lawrence Island Yupik using paradigm function morphology.](https://www.aclweb.org/anthology/2020.lrec-1.326) In Proceedings of the 12th Language Resources and Evaluation Conference, pages 2676–2684, Marseille, France. European Language Resources Association.
 * Steven A. Jacobson. 2001. A Practical Grammar of the St. Lawrence Island / Siberian Yupik Eskimo Language, Preliminary Edition, 2nd edition. Alaska Native Language Center, Fairbanks, Alaska.
* Hyunji Hayley Park, Lane Schwartz, and Francis M. Tyers. 2021. Expanding Universal Dependencies for Polysynthetic Languages: A Case of St. Lawrence Island Yupik. In Proceedings of the 1st Workshop on NLP for Indigenous Languages of the Americas (AmericasNLP). Online. Association for Computational Linguistics.

