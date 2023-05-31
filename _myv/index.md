---
layout: base
title:  'Erzya UD'
udver: '2'
---

# UD for Erzya <span class="flagspan"><img class="flag" src="../../flags/svg/RU-ERZYA.svg" /></span>

## Tokenization and Word Segmentation

* In general, words are delimited by whitespace characters. Compounds in Erzya are usually written separated, and in these cases the relation ([compound]()) is used to connect the tokens.
* According to typographical rules, many punctuation marks are attached to a neighboring word. At the moment hyphenated compounds such as командно-политической “command political” or косо-бути “somewhere” are analysed as individual tokens.
* A whitespace separating digits in a large number is not treated as a word separator. For example, 1 000 000 (“1,000,000” by English rules) is one token.

## Morphology

### Tags



* Erzya uses 16 of the universal POS categories (ADJ, ADP, ADV, AUX, CCONJ, DET, INTJ, NOUN, NUM, PART, PRON, PROPN, PUNCT, SCONJ, VERB, X). Some of the ideophones have been tagged as NOUN, ADV and INTJ due to there syntactic use, but their analysis is being worked on.
* There are four copulas ульнемс, улемс, оль and арась. The first three mean “to be” with a distribution (i) preterit, (ii) non-past free and (iii) both bound, whereas the fourth means “not to be” in locative, existential copula constructions. Besides these there are words still under consideration that have a secondary meaning “to be” эрямс and эрсемс (habitual).
* Verbs of negation and negative particles have been labled AUX with an aux:neg relation, there are still issues with aux:q used for the question particle.


### Features

#### Nominal features

* Case has 13 possible values: Nom, Gen, Abl, Dat, Ine, Ill, Ela, Tra, Prl, Loc, Lat, Comp, Temp. They occur with following word POS: NOUN, PROPN, PRON, NUM, ADJ and ADP, ADV.
* Besides nouns the cases are widely used with adpositions and adverbs, which are also tagged separately for case and may be cause for reanalysis as relator nouns.
* Erzya has possessive suffixes that distinguish three categories of person and two for number. These suffixes may occur not only on nominals: NOUN, PROPN, PRON, NUM, ADJ but ADP and non-finite VERB, as well.

#### Degree and Polarity

* The comparative and superlative are formed analytically with the adverbs седе 'more' and сех, сехте, веседе, весемеде 'most'. 
* Polarity in Erzya is found in the negative verbs and particles. 

#### Verbal features
* Mood has 8 possible values: Ind, Imp, Cnd, Cnj, CndCnj, Des, Opt, Proh.
* Finite verbs are marked for the categories of tense: Prt1 (first preterit), PrtII (second preterit) and Pres (non-past); person: first, second and third in combination with number singular and plural.
* Verbs have many forms of regular derivation, one specifically is the the imperfective Okshnoms, which conveys the meaning of something which can happen without an effect on the present state of affairs.

## Syntax

* Word order may be used for function best described in discourse. There is a normative tendency to say that the subject comes before the verb and the object, but, in fact, discourse or other strategies may show it elsewhere. This holds for the claim that the object occurs after the verb.

* Passivization is not a feature that would affect Erzya syntax.

* Nominal subject ([nsubj]()) is a noun phrase in the nominative case, without an adposition.

* Clausal subject ([csubj]()) is a clause that functions as the subject and has.

* Nominal objects are noun phrases which are generally either in the nominative or genitive case, but they may also occur in the ablative or inessive case.

* The following subtypes are used in Erzya:
  * [acl:relcl]() for relative clause
  * [advmod:tmod]() for advmod with temporal value
  * [aux:neg]() for the negative auxiliary verbs and particles
  * [aux:q]() for question adv in indirect questions of the Russian type
  * [cc:preconj]() for conjunctor preceding first conjunct where the construction involves a pair
  * [compound:coll]() for compound constructions indicating collectives according to mentioned elements or possibly more abstract
  * [compound:redup]() for compound involving reduplication
  * [compound:svc]() for second verb in consecutive events
  * [flat:name]() for flat used in person names
  * [nmod:comp]() for nmod before adverb requiring a standard of comparison
  * [nmod:gsubj]() for nmod with a genitive subject noun, with deverbal noun
  * [nmod:gobj]() for nmod with a genitive object noun, with deverbal	noun
  * [obl:agent]() for obl with agent relation, such as genitive form personal pronouns with non-finite
  * [obl:tmod]() for obl relation with temporal value
  * [xcomp:ds]() for xcomp with a different subject from the one in the matrix verb

## Treebanks

There is one Erzya UD treebank

  * [UD_Erzya-JR](../treebanks/myv_jr/index.html)