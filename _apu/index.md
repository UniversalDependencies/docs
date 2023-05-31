---
layout: base
title:  'Apurina UD'
udver: '2'
---

# UD for Apurina <span class="flagspan"><img class="flag" src="../../flags/svg/BR.svg" /></span>

## Tokenization and Word Segmentation


* In general, words are delimited by whitespace characters. Compounds in Apurinã are usually written separated, and in these cases the relation ([compound]()) is used to connect the tokens.


## Morphology

### Tags

* Apurinã uses 15 of the universal POS categories (ADJ, ADP, ADV, AUX, CCONJ, DET, NOUN, NUM, PART, PRON, PROPN, PUNCT, SCONJ, VERB, X). Ideophones (a potential source of INTJ) have not been introduced into the materials yet. 
* There is presently one copula txa, but in future development the use of awa “to exist, habitate, have” will also be examined.
* The negative particle kuna is labled PART with a advmod:neg dependency relation value.
* The personal and universal pronouns are labeled as PRON even when they serve as determiners.


### Features

* Case presently has 4 possible values: All, Com, Loc, Nom. They occur with NOUN, PROPN and PRON.
* Gender is used to mark Masc and Fem in NOUN, PROPN, PRON, DET and VERB. Subcategories of Gender consist of Gender[obj], Gender[psor], Gender[subj]
* Number is used with NOUN, PRON and VERB. The distinctions plural and singular are seen in subcategories Number[obj], Number[psor], Number[subj].
* Apurinã has possessive prefixes and circumfixes that distinguish three categories of person, two of number and two of gender in the third person.
* Possessed is used with NOUN. NOUNs with the Possessed feature either have simultaneous possessor marking or are proceeded by a possessing NOUN.

## Syntax

* The constituent order is semi-free; the VO order is the most frequent in texts, but the patterns of word order correlations point to OV. (Facundes 2000:xxviii.)
* Subject and objects do not have morphological marking, but there is specific marking for gender, number and person on the finite verb. Hence, word order may play disambiguating role in the sentence.

* The following subtypes are used in Apurinã:
  * [acl:relcl]() for relative clause
  * [advcl:tmod]() for advcl with temporal value
  * [advmod:lmod]() for advmod with spatial value
  * [advmod:neg]() for the negative particles
  * [advmod:tmod]() for advmod with temporal value
  * [nmod:poss]() for use between a nominal phrase and its possessive determiner.
  * [nsubj:cop]() for the nominal subject of a copular clause. The predicative is the head of the copular clause, and also the governor of the nsubj:cop dependency.
  * [obj:agent]() for obl with agent relation, such as genitive form personal pronouns with non-finite
  * [obl:lmod]() for obl relation with spatial value
  * [obl:tmod]() for obl relation with temporal value
  
## Treebanks

There is one Apurina UD treebank:

  * [UD_Apurina-UFPA](../treebanks/apu_ufpa/index.html)

