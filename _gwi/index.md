---
layout: base
title:  "Gwich'in UD"
udver: "2"
---

# UD for Gwich'in <span class="flagspan"><img class="flag" src="../../flags/svg/US-AK.svg" /></span> <span class="flagspan" style="padding-left:1em"><img class="flag" src="../../flags/svg/CA.svg" /></span>


## Tokenization and Word Segmentation

* In general, words are delimited by whitespace characters.

---

## Morphology

### Tags

* Gwich'in uses 15 universal POS categories, including:
  * ADJ _tsal_, _k'eejit_, _tthoo_, etc.
  * ADP _hàa_, _shàa_, _zhìt_, _shizhìt_, etc.  
  * ADV _gwintsàl_, _oondàk_, _yeendàk_, _dą̀į’_, etc.
  * CCONJ _hàa_, _ts'à'_, _gàa_
  * DET _yagha’_, _aii_, _zhìk_, _izhìk_, etc.
  * INTJ _Àąhą’_, etc.
  * NOUN _vadzaih_, _shidink’ee_, _shee’ii_, _kwaiitryah_, etc. 
  * NUM _ch’ìhłak_, _dǫǫ_, etc.
  * PART _nąįį_, _kwàa_
  * PRON _shįį_, _jidìi_, etc.
  * PROPN _Vashrąįį K'ǫǫ_, _Tsiigehtchic_, _Dr. Burke_, etc.
  * PUNCT _._, _?_, _,_, etc.
  * SCONJ _jì_, _geh’àn_, _aii_, etc.
  * VERB _ihtsàl_, _giyahąąh’yaa_, _vintł’ihihtin_, etc. 
  * X is used for three words that could not be determined at this time.
* ADJ is used for adjective enclitics following NOUN.
* Verbal adjectives are tagged as VERB.
* Free standing personal pronouns are rare in the data. There is only one instance of these (_shįį_).
* Interrogative pronouns are tagged PRON.
* All words that take verbal inflection are tagged as VERB at this time. This includes words that in English would take AUX.
* PART is used for words that denote negation (_kwàa_) or plurality (_nąįį_).
* AUX and SYM are not used at this time.

---

### Features

* Gwich’in is a polysynthetic, primarily prefixing, head-final language.
* Features are not provided at this time. Morpheme information can be found for most words in the MISC column (Gloss=, MSeg=, MGloss=). However, language-specific features may be needed for the following:
* Each VERB takes one of four voice/valency markers known as its _classifier_. The proposed language-specific feature _Classifier_ would have the values _Ø_, _L_, _Ł_, or _D_, consistent with the Athabascan literature. It is important to note that this use of the word _classifier_ is different than for Chinese.
* Gwich'in and other Athabascan languages also have a noun classification system. However, this information is encoded on the VERB. These so-called _classificatory_ VERB stems belong to one of nine _stem classes_. The proposed language-specific feature _StemClass_ would have the values _1_ through _9_ for the following stem classes defined by Bushey (2021): stick-like, food, cloth-like, plural or rope-like, animate or dead, open container, sack of granules or enclosed/sheathed, compact, and deteriorated.
* Pronominal subject marking is mandatory on the VERB. Third-person pronominal object marking is mandatory (but assumed for other persons) when no free noun phrase is expressed.
* Inalienable nouns (NOUN) like body-parts and kinship terms must be marked with a possessor. Alienable nouns (NOUN) may or may not be marked with a possessor.
* It has been suggested that Northern Athabascan languages allow noun incorporation, but the status of noun incorporation in Gwich'in is unclear at this time. The word meaning _palm_ in possessed form appears to be (at least partially) incorporated to denote pronominal recipients in ditransitive verbs. This is how the equivalent of pronominal indirect objects in English are expressed. Whether or not other noun objects can be incorporated warrants further exploration. 
* Postpositions (ADP) must be inflected for person and number with human objects. If there is an areal object, the postposition takes the prefix _gwï-_. The language-specific feature-value _Areal=Yes_ may be needed for this. 
* Spatial adverbs known as _directionals_ encode three pieces of information: the direction itself (up/down, upstream/downstream, inland/upland, etc.), the orientation (allative, punctual, areal, ablative), and distance from the speaker (short, long, very long, straight). Language-specific features may be needed for these. 

---

## Syntax

* As a polysynthetic language, ideas that are expressed in many languages with multiple words are expressed in Gwich'in with one.
* The verb occupies the final position in a clause, and the verb stem occupies the final position in a _verb word_. Verb prefixes provide other relevant information and together with the verb stem from a _verb word_ and often a _verb sentence_. 
* It is up for debate whether null arguments exist in Athabascan. Pronominal subject and object markers on the verb are often treated as core arguments with free noun phrases treated as adjuncts. However, this treebank remains consistent with current UD guidelines and treats words as the basic elements connected by dependency relations and as such, treats free standing nominals (subject, object, and indirect object) as core arguments when expressed. These take the dependency relations _nsubj_, _obj_, and _iobj_, respectively. When free noun phrases do not occur, nominal information is solely expressed on the verb and can only be annotated in the _FEATS_ or _MISC_ columns. 

---

## Treebanks

There is [one](../treebanks/gwi-comparison.html) Gwich'in UD treebank:

  * [Gwichin-TueCL](../treebanks/gwi_tuecl/index.html)

---
