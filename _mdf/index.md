---
layout: base
title:  'Moksha UD'
udver: '2'
---

# UD for Moksha <span class="flagspan"><img class="flag" src="../../flags/svg/RU-MOKSHA.svg" /></span>

## Tokenization and Word Segmentation

* In general, words are delimited by whitespace characters. Compounds in Moksha are usually written separated, and in these cases the relation ([compound]()) is used to connect the tokens.
* According to typographical rules, many punctuation marks are attached to a neighboring word. At the moment hyphenated compounds such as командно-политическяй “command political” or коса-бди “somewhere” are analysed as individual tokens.
* A whitespace separating digits in a large number is not treated as a word separator. For example, 1 000 000 (“1,000,000” by English rules) is one token.

## Morphology

### Tags



* Moksha uses 16 of the universal POS categories (ADJ, ADP, ADV, AUX, CCONJ, DET, INTJ, NOUN, NUM, PART, PRON, PROPN, PUNCT, SCONJ, VERB). Some of the ideophones have been tagged as NOUN, ADV and INTJ due to there syntactic use, but their analysis is being worked on.
* There are five copulas улемс, оль, аволь, аш and аяш. The first two mean “to be” with a distribution (i) preterit and non-past free and (ii) bound, whereas the third is used for equative and quality copula negation, and the fourth and fifth mean “not to be” in locative, existential copula constructions. Besides these there are words still under consideration that have a meaning “to be” улендемс (habitual).
* Verbs of negation and negative particles have been labled AUX with an aux:neg relation, there are still issues with aux:q used for the question particle and aux:cnd used for the condition particle.


### Features

#### Nominal features

* Case has 13 possible values: Nom, Gen, Abl, Dat, Cau, Ine, Ill, Ela, Tra, Prl, Loc, Lat, Comp. They occur with following word POS: NOUN, PROPN, PRON, NUM, ADJ and ADP, ADV.
* Besides nouns the cases are widely used with adpositions and adverbs, which are also tagged separately for case and may be cause for reanalysis as relator nouns.
* Mokshaa has possessor indices that distinguish three categories of person and two for number. These suffixes may occur not only on nominals: NOUN, PROPN, PRON, NUM, ADJ but ADP and non-finite VERB, as well.

#### Degree and Polarity

* The comparative and superlative are formed analytically with the adverbs сяда 'more' and сембода 'most'. 
* Polarity in Moksha is found in the verbs of negation and particles. 


## Syntax

* Word order may be used for function best described in discourse. There is a normative tendency to say that the subject comes before the verb and the object, but, in fact, discourse or other strategies may show it elsewhere. This holds for the claim that the object occurs after the verb, as well.

* Passivization is not a feature that would affect Moksha syntax.

* Nominal subject ([nsubj]()) is a noun phrase in the nominative case, without an adposition, but in quantifying clauses it may also appear in the ablative.

* Clausal subject ([csubj]()) is a clause that functions as the subject.

* Nominal objects are noun phrases which are generally either in the nominative or genitive case, but they may also occur in the ablative (quantification with a few verbs).

* The following subtypes are used in Moksha:
  * [aux:neg]() for the negative auxiliary verbs and particles
  * [aux:q]() for question adv in indirect questions of the Russian type
  * [acl:relcl]() for relative clause
  * [nmod:bahuv]() for nominative-case nmod with an amod of its own, i.e. ашо пря 'lit. white head' 'white-headed'
  * [obl:tmod]() for obl relation with temporal value
  * [xcomp:ds]() for xcomp with a different subject from the one in the matrix verb
  * [obl:agent]() for obl with agent relation, such as genitive form personal pronouns with non-finite
  * [flat:name]() for flat used in person names
  * [nmod:gsubj]() for nmod with a genitive subject noun, with deverbal noun
  * [nmod:gobj]() for nmod with a genitive object noun, with deverbal	noun
  * [compound:svc]() for second verb in consecutive events
  * [nmod:comp]() for nmod before adverb requiring a standard of comparison
  * [advmod:tmod]() for advmod with temporal value
  * [cc:preconj]() for conjunctor preceding first conjunct where the construction involves a pair
  * [compound:redup]() for compound involving reduplication
  * [compound:coll]() for compound constructions indicating collectives according to mentioned elements or possibly more abstract

## Treebanks

There is one Moksha UD treebank

  * [UD_Moksha-JR](../treebanks/mdf_jr/index.html)
