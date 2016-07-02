---
layout: feature
title: 'VerbForm'
shortdef: 'form of verb or deverbative'
---

### Description

Even though the name of the feature seems to suggest that it is used
exclusively with verbs, it is not the case. Some verb forms in some languages
actually form a gray zone between verbs and other parts of speech (nouns,
adjectives and adverbs). For instance, participles may be either classified as
verbs or as adjectives, depending on language and context. In both cases
VerbForm=Part may be used to separate them from other verb forms or other types
of adjectives.

Uralic verbs have rich inflection / derivation pattern for for infinite forms,
these are marked using `VerbForm` feature. However, Finnish uses additional
features `InfType` and `PartType` to enumerate all the different verb forms,
this needs some unifying.

### `Fin`: Finite

Finite is used for regularly inflected verb form.  Verbs that inflect for mood
(Mood), tense (Tense) or person (Person) are finite and are assigned the
VerbForm value Fin.

#### Finite examples

* [fi] _juoksen_ "I run"

### `Inf`: Infinitive

Infinitive is a form of verb most typically used in syntactic expressions, 
verb chains and so forth. Uralic infinitives share features of nouns, and may
have case inflection for example. It is notable that Uralic languages will have
more than one infinitive form often, and often one of these is the citation
form for dictionaries, i.e. lemma, but it is not shared between languages:
Finnish lemma is "A infintive", Estonian "MA infinitive" and Hungarian is a
finite form.

#### Infinitive examples

* [fi] _juosta_ "to run", _nähdäkseni_ "in order for me to see", _kuollessa_
  "while dying", _syömättä_ "without having eaten"

### `Part`: Participle

Participle is a form of verb also used in syntactic expressions and verb
chains, that shares features with adjectives. Like infinitives, Uralic
adjectives have number of variants. For example in Finnish participles have
full paradigms, i.e.  act as derivatoinal suffix in effect, but there's also
clearly distinguishable syntactic use for subset of the forms. e.g. as a part
of analytic temporal construction like "perfect tense": compare _olen juossut_
"I have ran" to _eilen juosseilla miehillä_ "the men that ran yesterday, 
literally yesterday ran+pl+ade man+pl+ade"

#### Participle examples

* [fi] _juossut_ "ran", _näkevä_ "seeing", _syömäni_ "that I ate", 
  _kuolematon_ "immortal, lit. undieable"
