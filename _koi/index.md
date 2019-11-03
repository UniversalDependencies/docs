---
layout: base
title:  'Komi-Permyak UD'
udver: '2'
---

# UD for Komi-Permyak <span class="flagspan"><img class="flag" src="../../flags/svg/RU-PER-KPO.svg" /></span>

## Tokenization and Word Segmentation

* In general, words are delimited by whitespace characters. Compounds in Komi-Permyak are usually written separated, and in these cases the relation ([compound]()) is used to connect the tokens.
* According to typographical rules, many punctuation marks are attached to a neighboring word. At the moment hyphenated compounds such as командно-политическӧй “command political” or кыдз-нибудь “somehow” are analysed as individual tokens.
* A whitespace separating digits in a large number is not treated as a word separator. For example, 1 000 000 (“1,000,000” by English rules) is one token.


## Morphology

### Tags

* Komi-Permyak uses 16 of the universal POS categories (ADJ, ADP, ADV, AUX, CCONJ, DET, INTJ, NOUN, NUM, PART, PRON, PROPN, PUNCT, SCONJ, VERB). Some of the ideophones have been tagged as NOUN, ADV and INTJ due to there syntactic use, but their analysis is being worked on.
* There are two copulas эм and абу. The first one means “to be” in locative, existential copula constructions, whereas the second one means “not to be” in quality, locative and existential copula constructions.
* Verbs of negation and negative particles have been labled AUX with an aux:neg relation, there are still issues with aux:q used for the question particle and aux:cnd used for the conditional particle.


### Features

#### Nominal features

* Case has 26 possible values: Acc, Apr, Abl, AprEgr, AprEla, AprIll, AprIne, AprPrl, AprTerI, AprTerII, Car, Cns, Com, Comp, Dat, Egr, Ela, Gen, Ill, Ine, Ins, Nom, Prl, TerI, TerII, Voc. They occur with following word POS: NOUN, PROPN, PRON, NUM, ADJ and ADP, ADV.
* Besides nouns the cases are widely used with adpositions, adverbs and converbs, which are also tagged separately for case and may be cause for reanalysis as relator nouns.
* Komi-Permyak has possessor indices that distinguish three categories of person and two for number. These suffixes may occur not only on nominals: NOUN, PROPN, PRON, NUM, ADJ but ADP and non-finite VERB, as well.

#### Degree and Polarity

* The comparative is formed with the suffix -жык 'more', and the superlative is formed by adding the prefix мед- or using a preposed adverb медся 'most'. Comparative suffixing can be applied to verbs and declined nouns, as well.
* Polarity in Komi-Permyak is found in the negative verbs and particles. 



## Syntax

* Word order may be used for function best described in discourse. There is a normative tendency to say that the subject comes before the verb and the object, but, in fact, discourse or other strategies may show it elsewhere. The object may occur before or after the finite verb.

* Passivization is not a feature that would affect Komi-Permyak syntax.

* Nominal subject ([nsubj]()) is a noun phrase in the nominative case, without an adposition.

* Clausal subject ([csubj]()) is a clause that functions as the subject.

* Nominal objects are noun phrases which are in the accusative or nominative case. Personal pronouns and proper names (+Animate) take obligatory accusative marking, whereas other nouns may or may not take accusative case marking with the tendency higher in the upper reaches of the animacy hierarchy.

* The following subtypes are used in Komi-Permyak:
  * [advmod:tmod]() for advmod with temporal value
  * [aux:cnd]() for the conditonal particle бы
  * [aux:neg]() for the negative auxiliary verbs and particles
  * [aux:q]() for the question adv in indirect questions of the Russian type
  * [cc:preconj]() for conjunctor preceding first conjunct where the construction involves a pair
  * [flat:name]() for flat used in person names
  * [obl:agent]() for obl with agent relation, such as genitive form personal pronouns with non-finite
  * [obl:tmod]() for obl relation with temporal value
  * [xcomp:ds]() for xcomp with a different subject from the one in the matrix verb



## Treebanks

There are [1](../treebanks/koi-comparison.html) Komi-Permyak UD treebanks:

  * [UD_Komi_Permyak-UH](../treebanks/koi_uh/index.html)

