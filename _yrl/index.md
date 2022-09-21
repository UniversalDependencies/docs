---
layout: base
title:  'Nheengatu UD'
udver: '2'
---

# UD for Nheengatu <span class="flagspan"><img class="flag" src="../../flags/svg/BR.svg" /></span>

## Tokenization and Word Segmentation

* Words are generally delimited by whitespace or punctuation.

* Multiword tokens are separated by a hyphen in Nheengatu. These are cases of incorporation of an auxiliary verb into a main verb.

## Morphology

### Tags

* The Nheengatu treebank presently makes use of 15 of the 17 universal POS tags, namely, ADJ, ADP, ADV, AUX, CCONJ, DET, INTJ, NOUN, NUM, PART, PRON, PROPN, PUNCT, SCONJ, and VERB. X and SYM were not used so far, since they didn't occur in the sentences hitherto annotated.

* There is just one copula, *ikú*, which also functions as an auxiliary expressing progressive aspect.

* Nheengatu has a rich system of particles, which convey a variety of grammatical notions, e.g., negation, tense, and aspect.

* Determiners and pronouns seem to only differ in syntactic behavior, i.e., whether they modify a noun or function as head of the NP.

* The base (non-inflected) form of some verbs can function as ADJ (and possibly also as ADV or NOUN), but this was not attested in the sentences annotated so far.


### Features

* There are two classes of personal pronouns in Nheengatu. So called first class pronouns are free morphemes, while second class pronouns are prefixes that attach to stative verbs, functioning as number-person agreement markers, or realize the internal argument of nouns (genitive complement) or postpositions.

* Verbs inflect for the six logically possible combinations of the values 1, 2, and 3 for person and singular and plural for number. In conservative variaties of Nheengatu, the number distinction is neutralized in Person 3 of the active series. In innovative variaties, the oppostion between singular and plural seems to be emerging due to the grammaticalization of the person 3 plural pronoun as an inflectional prefix.     

* Verbs fall into one of two inflectional paradigms. Person-number of transitives and non-stative intransitives is marked with prefixes of the active series. Stative intransitives receive prefixes of the inactive series.

* Mood, tense, and aspect is expressed by means of auxiliaries or particles.           

* Gender does not play any morpho-syntactic role in Nheengatu.

* Nouns and pronouns only inflect for number. There is no number agreement proper in the NP domain. Plural number is marked with the suffix *itá*, which attaches either to the determiner or the noun (it is uncertain to us whether a double marking is possible). Nouns under the scope of a semantically plural quantifier (e.g., *musapiri* 'three') need not receive the plural suffix.

* The layered features Number[psor]=Sing and Person[psor]=3 encode the number and person of the complement of a noun when it is realized by the non-adjacency relational prefix.

* Some noun classes signal syntactic adjacency or non-adjacency between the head noun and its dependent by means of relational prefixes. Relational prefixes also occur with subclasses of postpositions and inactive verbs.  


## Syntax

* The basic word order is SVO.

* Nheengatu has postpositions. Analogously, subordinating conjunctions and relative pronouns are left-adjacent to the verb.

* In the genitive construction, the possessor precedes the head (possessum) noun.  

* There are two auxiliaries for ingressive and progressive aspect, namely *sú* and *ikú*, respectively. The former precedes, while the latter follows the main verb. Both auxiliaries inflect
for person and number, as the main verb does.

* The base (non-finite) form of auxiliaries expressing modality, e.g., *putari*, left-adjoins the main verb.  

* Individual-level predicates head copulaless sentences, while stage-level predicates require the copula. In both situations, and adjective or a postpostional phrases convey the main predicate of the sentence.

* Subjects trigger agreement with the verb. Objects are either noun phrases (or pronouns) or postpositional phrases that realize a core argument. Ditransitive verbs govern a dative complement realized by a postpositional phrase.

* Subtype relations used so far: acl:relcl and nmod:poss.  


## Treebanks

  There is one Nheengatu UD treebank:

    * [UD_Nheengatu-CompLin](../treebanks/yrl_complin/index.html)
