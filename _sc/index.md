---
layout: base
title:  'Sardinian UD'
udver: '2'
---

# UD for Sardinian <span class="flagspan"><img class="flag" src="../../flags/svg/IT-SRD.svg" /></span>

## Tokenization and Word Segmentation

* Words are generally delimited by whitespaces or apostrophes.
* Punctuation marks are treated as single tokens, with the only exception of apostrophes, that are always attached to its neighboring word:
	* in case of elision, the apostrophe is attached at the end of the word with the elided vocal: *unu ecantu-> un'ecantu* ("a piece")
	* in case of apheresis, the apostrophe is attached at the beginning of the word that undergoes the apheresis: *de -> 'e* ("of"), *bidda -> 'idda* ("village")

* Multi-word tokens are only used for the cases of contractions between verbs and clitics: *daemilu -> dae + mi + lu* (lit "give + to me + it")	

---


## Morphology

### Tags

*Sardinian uses all 17 universal tags
* The only word tagged as PART is *nanca* (lit. "(they) say that")
* The AUX tag is used for the following cases:
	* copular verb *èssere* ("to be")
	* auxiliary verbs *èssere*, *àere* ("to have") used to form tense or passive forms (in the case of *èssere*)
	* auxiliary verb *dare* ("to give") used to form the conditional mood
	* auxiliary verb *èssere* used for the progressive form 
	* modal verbs *pòdere* ("can"), *dèpere* ("must"), *chèrrere* ("want"), when they do not function as full lexical (main) verbs

* The DET tag is used for determiners that modify nouns or noun phrases and is used to mark the following cases:
	* article (***su** monte*, "**the** mountain", ***una** manu*, "**a** hand") 
	* predeterminers (***totu** sos animales*, "**all** the animals")
	* demonstratives (***custa** 'idda*, "**this** village")
	* indefinites (***donnia** apentu*, "**every** devotion")
	* exclamatives (***ite** bellu!*, "**so** beautiful")
	
* Possessive adjectives in Sardinian are always postnominal and are tagged as ADJ.
* The tag PRON is used for words that replace nouns or noun phrases, whose meaning is recoverable from the linguistic or extralinguistic context. The following cases are thus considered as PRON:
	* demonstratives (***custa** est *, "**this** is", ***su** chi apo promintu*, lit. "**that** that I have promised")
	* indefinites (*sos **ateros***, "the **others**")
	* possessives (*sos **nostros***, "**ours**")
	* relatives (*chi*, "that")
	* clitics (reflexive pronouns *si*, unstressed personal pronouns *li/lis* "to him-her/them", *los/las* "them", locative particles *bi*,*nche*, partitive particle *nde*)
	* interrogatives (***chie** ses?*, "**who** are (you)?")
* There are some cases of deverbal forms, mostly deverbal nouns, tagged as NOUN (*su mal'istare nostru*) and verbal participles (*intrannadu*).

---

### Features

* Nouns are inflected for Gender (Masc or Fem) and Number (Sing or Plur).
* Main verbs and auxiliaries are inflected for Mood (indicative, imperative and subjunctive), Tense (present, imperfect and past), Person, and Number. 
  * Past participle verbs are also inflected for gender.
* Adjectives (including possessives, except for the 3rd person plural, *issoro*), as well as the numerals *unu* and *duos/duus* agree with nouns for Gender and Number.
* The quantifiers *totu* (“all, every”), *donzi-dogni/cada* (“every”), and *carchi* (“some”) precede the noun and are invariable; likewise *meda* (“much, many”) is generally invariable, but it is preferably postposed. 
* Adverbs and adjectives do not generally inflect for degree. The only exception of *mèzus/mèngius/mèllus* (all meaning both "better" and "best") and *peus/pejus* (all meaning both "worse" and "worst"). The suffix *-ìssimu* also exists, but is restricted to poetic language.
* Determiners agree with nouns in the same way as adjectives.
* Pronouns, determiners, quantifiers and pronominal adverbs may be further specified by the PronType feature. The Clitic feature is used for marking clitic pronouns, while the Poss feature is used for possessives (both adjectives and pronouns).

---

## Syntax

### Word Order and Core Arguments
* The default word order in Sardinian is SVO, but topicalizations of the object are common.
* Nominal subject ([nsubj]()) is a bare noun phrase without preposition.
* Sardinian is a pro-drop language and the features of the subject can be inferred from the inflectional morphological features associated with the verb.
* Direct nominal object ([obj]()) is either a bare noun phrase (for inanimate objects) or a prepositional phrase with the preposition _a_ . The latter case is usually encountered either with personal pronouns or with proper nouns. Occasionally, this may appear with nouns preceded by a definite article.

### Copula Constructions
* Sardinian employs the copular verb *èssere/èssiri* "be" in predicational, specificational, equative and identificational constructions; the copula can be linked to an adjectival, nominal or prepositional predicate.


### Relation Subtypes
* Sardinian UD includes the following relation subtyes:
  * [acl:relcl]() for relative clauses
  * [aux:pass]() for passive auxiliaries
  * [compund:redup]() for reduplications 
  * [nsubj:pass]() for nominal subjects of passive verbs
  * [obl:agent]() for agents of passive verbs

---
<!--**Instruction**: Give criteria for identifying core arguments (subjects and objects), and describe the range of copula constructions in nonverbal clauses. List all subtype relations used. Include links to language-specific relations definitions if any.-->

---

## Treebanks

There are [two](../treebanks/sc-comparison.html) Sardinian UD treebanks:

  * [ContSar](../treebanks/sc_contsar/index.html)
  * [EModSar](../treebanks/sc_emodsar/index.html)

---
<!--**Instruction**: Treebank-specific pages are generated automatically from the README file in the treebank repository and
from the data in the latest release. Link to the respective `*-index.html` page in the `treebanks` folder, using the language code
and the treebank code in the file name.
---
-->
