---
layout: postag
title: 'VERB'
shortdef: 'verb'
udver: '2'
---

### Definition

Spanish verbs play a central role in sentence structure and are characterized by their conjugation patterns, which
reflect person, number, tense, mood, and aspect.

It is important to note that the VERB tag is used for main verbs (content verbs) but not for auxiliary verbs and
copulas. Instead, the [AUX]() tag is assigned to these verbs. Auxiliary verbs help form compound tenses, passive voice,
and other grammatical constructions, while copulas serve as linking verbs, often expressing states or conditions.
In the case of Spanish, the copula verbs _ser_ and _estar_ "to be" are generally tagged as AUX when they function
as linking verbs.

Note that in Spanish, participles are word forms that may share properties and usage of adjectives and verbs.
Depending on context, they may be classified as either VERB or [ADJ](). Similarly, infinitives  can be either VERB or
[NOUN](); _comer_ "to eat" could be a verb (`VerbForm=Inf`) or a noun in a context like _el comer_ "the eating".

### Spanish enclitics

In Spanish, clitics are pronouns that attach to verbs as enclitics, functioning as reflexive, direct object, or
indirect 'object' ([obl]()) pronouns. They agree in person, number, and sometimes gender with their referents.
The UD framework handles clitics as separate tokens with their own part-of-speech tags and dependency relations.
Enclitics create orthographic words by combining multiple syntactic words, and the UD framework uses a two-level
scheme to manage tokenization and word segmentation, represented in the CoNLL-U format:

Consider the sentence _Vámonos al mar_ "Let's go to the sea":

Syntactic words: [Vamos, nos, a, el, mar]
Orthographic words: [Vámonos, al, mar]

Here is the CoNLL-U representation of the sentence, including the multi-word tokens:

~~~conllu
# text = Vámonos al mar
# text_en = Let's go to the sea
1-2 Vámonos      _           _       _   _                                                   _   _       _   _
1   Vamos        ir          VERB    _   Mood=Imp|Number=Plur|Person=1|VerbForm=Fin          0   root    _   _
2   nos          nos         PRON    _   Number=Plur|Person=1|PronType=Prs                   1   obj     _   _
3-4 al           _           _       _   _                                                   _   _       _   _
3   a            a           ADP     _   _                                                   5   case    _   _
4   el           el          DET     _   Definite=Def|Gender=Masc|Number=Sing|PronType=Art   5   det     _   _
5   mar          mar         NOUN    _   Gender=Masc|Number=Sing                             1   obl     _   _
~~~
<!-- Interlanguage links updated Ne 5. května 2024, 18:19:43 CEST -->
