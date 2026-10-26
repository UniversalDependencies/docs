---
layout: base
title:  'Nenets UD'
udver: '2'
---

# UD for Nenets <span class="flagspan"><img class="flag" src="../../flags/svg/RU-NEN.svg" /></span>

## Tokenization and Word Segmentation
* The tokenization in the Tundra Nenets treebank follows the principles of the Universal Dependencies (UD) framework, with adaptations for spoken language data.
* Tokenization was performed manually, guided by both the phonological realisation and the syntactic structure of the utterances.
* Word segmentation is based on the standard orthography of Tundra Nenets and is applied consistently across the corpus. Words are delimited by whitespace characters.
* The transcription of the spoken material is based on written standards and conventional orthography, rather than a phonetic or IPA transcription.
* Bound morphemes, such as suffixes and clitics, are not split during tokenization. Instead, internal morphological information (e.g., agreement, case, tense, mood) is encoded in the MISC features as morphological glosses. Gloss labels follow the recommendations of the Leipzig Glossing Rules.
* Punctuation is tokenized and annotated based on the prosodic and discourse features of the spoken data. Prosodic boundaries corresponding to punctuation are explicitly marked with a special SIL (silence) label and assigned a PUNCT part-of-speech tag.
* Non-standard phenomena typical of spoken language (e.g., false starts, repetitions, disfluencies) are tokenized, ensuring that the treebank accurately reflects the characteristics of spoken Tundra Nenets while maintaining maximal syntactic transparency.

## Morphology
### Tags
* Tundra Nenets uses 15 of the universal POS categories. These are as follows (in alphabetical order): [ADJ](), [ADP](), [ADV](), [AUX](), [CCONJ](), [DET](), [INTJ](), [NOUN](), [NUM](), [PART](), [PRON](), [PROPN](), [PUNCT](), [VERB](), and [X]().
* Auxiliaries ([AUX]()) are all verbal in Tundra Nenets. The following auxiliaries are found in the language:
    - Negative auxiliaries, which combine with the negated form of the lexical verb (connegative):
	   - the standard negative auxiliary: ни-
	   - the emphatic negative auxiliary: вуни-
	   - the prohibitive auxiliary: нё-
	   - the interrogative negative auxiliary: ханя- ‘how not’
	   - modal negative auxiliaries: я'ма- 'cannot, not able to', хаця- ‘almost doing something’
  - Modal auxiliaries, which combine with the converb and/or nominalized form of the lexical verb:
     тара- 'need'; харва 'want'; пира- 'can'
   - The copula ӈa- (be).
* In Tundra Nenets, there are no articles. The [DET]() tag is assigned to a relatively small set of items traditionally classified as determiners in grammars. These elements characterise the head noun in terms of deixis and definiteness. The [PRON]() tag is used for possessives and for pronouns occurring as the head of a noun phrase
* Nonfinite verb forms in Tundra Nenets are formed by adding suffixes to verb stems. In the treebank, we differentiate between various forms of participles (tagged as [ADJ]()), converbs (tagged as [ADV]()), and action nouns (tagged as [NOUN]()).
* [X]() is used for spoken language peculiarities, like noise or pause.
### Features
* Nouns in Tundra Nenets inflect for [Number]() (singular, dual, or plural) and [Case](/yrk/feat/Case.html) (nominative, accusative, genitive, locative, dative, ablative, and prolative). They also take Subject Agreement markers (person and number) and a Past [Tense]() marker when functioning as predicates (the agreement marker is attached to nouns even when an overt copula is present). Possession is indicated by possessive suffixes ([Poss]()) that mark the person and number of the possessor, and nouns may also take predestinative suffixes.
- Finite Verbs obligatorily inflect for Subject Agreement, marking the person and number of the subject; additionally, transitive verbs can inflect for both the person-number of the subject and the number of the Object. Verbs are also inflected for [Tense]() (present/aorist, past, future) and [Mood](/yrk/feat/Mood.html) (indicative, imperative, hortative, jussive, subjunctive, apprehensive, necessitative, potential, inferential, reportative, interrogative, dubitative, probabilitative, approximative, and reputative). There are four types of nonfinite verb forms: participles (continuative, perfect, prospective), converbs (general, purposive/supine, evasive, conditional), action nouns (contemporaneous, prior), and a connegative form (used with negative auxiliaries).
* Within the noun phrase, there is no concord; thus, Adjectives do not agree with nouns. However, Adjectives can inflect for [Number]() (singular, dual, plural), [Case]() (nominative, accusative, genitive, locative, dative, ablative, prolative), Possession ([Poss](), and Predestinatives in elliptical constructions. When functioning as predicates, adjectives also take Subject Agreement markers (person and number) and a Past [Tense]() marker (agreement is marked even in the presence of an overt copula).
* Personal pronouns have a separate set for nominative and accusative Case.
* Adpositions can take [Case]() markers (genitive, locative, dative, ablative, and prolative) and may also bear possessive suffixes ([Poss]().
## Syntax

* Subject
	- In main clauses, subjects are predominantly marked by the nominative case, both in lexical and pronominal forms. Subjects obligatorily trigger agreement on the finite verb in terms of person and number. A limited set of stative adjectival predicates, such as 'be good', require their subjects to appear in the locative case.
	- In embedded non-finite clauses, the lexical subject typically appears in the genitive case, while pronominal subjects retain the nominative form. Agreement in such constructions is encoded on the non-finite predicate via possessive suffixes, which reflect the person and number of the embedded subject.

* Object
	- Lexical and pronominal objects are consistently marked by the accusative case across all clause types. An exception arises in imperative clauses, where the object appears in the nominative case. 
	- Topicalised (i.e., given or discourse-known) objects trigger number agreement on transitive verbs.
Oblique Grammatical Functions
	- The semantic role of the indirect object is encoded by the dative case. However, dative-marked expressions do not constitute a dedicated structural position for indirect objects; rather, they function similarly to other arguments or adjuncts. Both arguments and adjuncts may be marked either by locative or directional case suffixes, or by postpositions.

* Clause Structure and Word Order
	- Subordination is predominantly expressed by non-finite verb forms, which consistently precede the finite verb of the main clause. Coordination is typically asyndetic: coordinated elements are juxtaposed without overt markers, although there exist two coordinating conjunctions in the language.
	- The word order is uniformly head-final at both the phrase and clause levels, with the finite verb occupying the final position in the sentence. Two notable exceptions to verb-finality exist. First, in negated constructions, the negative auxiliary is not sentence-final; it precedes the non-finite negated lexical verb, although the auxiliary phrase as a whole remains in final position. Second, so-called post-verbal afterthoughts are used for clarification or correction — represent a universal repair strategy that also breaks the verb-final pattern.

* Nonverbal Predication and Copula Use
	- Nominal and adjectival predicates exhibit verbal agreement through person and number markers directly attached to the predicate, without the presence of an overt copula, in both present and past tenses. In contrast, the use of the copula becomes obligatory in all other tense forms. In such cases, agreement markers are affixed to both the nonverbal predicate and the copular verb.
	- Adverbial predicates, with the exception of a limited set of irregular adverbs that pattern like Nominals, always require an overt copula regardless of tense or agreement. Additionally, existential clauses make use of a distinct existential verb.

## Treebanks

There is 1 Nenets UD treebank:

  * [Nenets-Tundra](../treebanks/yrk_tundra/index.html)
