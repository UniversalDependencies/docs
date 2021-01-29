---
layout: base
title:  'Norwegian UD'
udver: '2'
---

# UD for Norwegian <span class="flagspan"><img class="flag" src="../../flags/svg/NO.svg" /></span>

## Tokenization and Word Segmentation

White space always indicates a token boundary and punctuation constitute separate tokens, except:

* numbers with periods, commas or colons, e.g. *1.3*, *0,6*, *10:13*
* abbreviations, e.g. *f.eks.*, *Carl J. Hambro*
* URLs, e.g. *http://www.ifi.uio.no*

The treebank does not contain multiword tokens.


## Morphology

### Tags

* [PART]() is used only for the infinitival marker *å* "to".
* the [VERB]() tag covers main verbs (content verbs) and copulas but it does not cover temporal, passive and modal auxiliary verbs, for which there is the [AUX]() tag
* [DET]() is used for possessives, demonstratives and quantifiers, which usually modify nominal heads. [PRON]() is used for pro-words that substitute for nouns or noun phrases.
* Participles are tagged either as [VERB]() or [ADJ]() based on syntactic criteria.

### Features

* Common nouns are associated with the features `Definite=Def/Ind`, `Gender=Masc/Fem/Neut`,  `Number=Sing/Plur` and, where applicable, `Case=Gen`
* Non-finite verbs are distinguished by their `VerbForm` feature: `VerbForm=Part` and `VerbForm=Inf`. Finite verbs have `VerbForm=Fin`.
* Finite verbs have the following features: `Mood=Ind/Imp`. Indicative verbs are marked for tense: `Tense=Pres/Past`
* Passive verbforms are marked with `Voice=Pass`

## Syntax
* In sentences with matrix clause word order, subjects are either in the position right before or right after the finite verb. In sentences with subordinate clause word order, the subject is before the finite verb, but not necessarily immediately before: The finite verb and the subject can be separated by a sentence adverbial. Moreover, in relative clauses, the relativizer, *som*, 'that', cannot be omitted if the subject is relativized. Case-marked pronouns in subject position will have nominative case.
* The unmarked position of the object in clauses with subordinate clause word order is immediately after the verb of which it is a complement. Case-marked pronouns in object position will have accusative case.
* These subtype relations are used in the written language treebanks:
  * [acl:relcl]() is used for relative clauses
  * [compound:prt]() for verbal particles
* The LIA treebank, containing spoken language data, has these subtype relations in addition to those described above:
  * ...


## Treebanks

There are three Norwegian UD treebanks:

  * [Norwegian Bokmaal](https://universaldependencies.org/treebanks/no_bokmaal/index.html)
  * [Norwegian Nynorsk](https://universaldependencies.org/treebanks/no_nynorsk/index.html)
  * [Norwegian Nynorsk LIA](https://universaldependencies.org/treebanks/no_nynorsklia/index.html)

