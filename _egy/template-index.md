---
layout: base
title:  'Egyptian UD'
udver: '2'
---

# UD for Egyptian <span class="flagspan"><img class="flag" src="../../flags/svg/EG.svg" /></span>

This is an overview based on the works cited in the README bibliography. Please note that this is a work in progress. It is planned to publish a detailed description for each stage of Egyptian.

## Tokenization and Word Segmentation

Egyptian is divided into two main stages, Earlier Egyptian, which includes Old Egyptian and Middle Egyptian, and Later Egyptian, which includes Late Egyptian, Demotic and Coptic (for the latter see the language page for Coptic in UD). Earlier Egyptian is characterized by a synthetic syntax and Later Egyptian by an analytic syntax. In general, hieroglyphic and hieratic script is used for Old Egyptian, Middle Egyptian and Late Egyptian, while Demotic is written in demotic script. No whitespace is used to separate word in these scripts. 

Egyptian texts are annotated with Transcription characters. The Tübingen transcription system is used in the UD_Egyptian-UJaen treebank (see README). Classifiers are not annotated in the transcription of Egyptian texts because they have no phonetic value or because they repeat sounds expressed in the word, as phonetic classifiers do.

Words are separated by a whitespace in the transcription of Egyptian texts. A dot is used to separate the ending of a word from its stem, cf: _nb.t_ "mistress" and _nb_ "lord".
Suffix pronouns are attached to the word they follow by means of two diagonal parallel lines (⸗), for example: _nb.t ⸗f_ "his mistress".
Compounds and fixed multiword expressions are connected by a hyphen, for example titles such as _ẖri҆-ḥꜣb.t_ "lector priest" and complex prepositions, for example _m-ḫt_ “behind”. A hyphen is also used to separate the man-impersonal noun _ti҆/tw_ from a verb form, for example: _pr-tw_ “one shall go”.
Brackets () indicate the omission of an element in the text and square brackets [] the restoration of the text. Curly brackets {} enclose typographical errors in the text and <> indicate an emended element in the text.


## Morphology

### Tags and Features

The 17 [Universal POS](https://universaldependencies.org/u/pos/index.html) categories are found in Egyptian.
1. Adjective ([ADJ](https://universaldependencies.org/u/pos/ADJ.html)):
   - Old Egyptian and Middle Egyptian: There are a few primary adjectives, for example nb “every”, “all”. Most of them are deverbal adjectives such as _nfr_ “good” and nisba adjectives such as n.i҆ “belonging to”, derived from the preposition n “for”. In attributive use, adjectives usually agree in gender and number with the noun they follow.

b) Late Egyptian: Primary adjectives increase, while nisba adjectives are no more productive than in earlier stages. Late Egyptian adjectives are usually derived from verbs. In attributive use, they no longer agree with their antecedents.

c) Demotic: The number of adjectives is smaller than in earlier stages of Egyptian. They are often replaced by a genitive construction. Demotic adjectives usually have the same gender as the noun they follow. Agreement in number between nouns and adjectives is rare.
Adverb (ADV): 
	Old Egyptian, Middle Egyptian and Late Egyptian: The use of adverbs such as i҆m “there” is rare. Instead, adpositions (ADPs) are usually used, consisting of a preposition and a noun phrase. Adverbs generally occur at the end of a sentence.
	Demotic: The use of adverbs is more common than in earlier stages of Egyptian. Demotic adverbs fall into three general categories: quality, place and time.
Interjection (INTJ):
	All stages of Egyptian: The number of interjections is small in Egyptian texts. The most used interjections in Earlier Egyptian are i҆ and hꜣ, which usually accompany the vocative. In Demotic, i҆ is also used to introduce the vocative. In Late Egyptian, the interjection i҆ꜣ has the meaning “truly”.
Noun (NOUN):
	Old Egyptian and Middle Egyptian: Nouns have no cases. There are two genders, masculine and feminine. The ending t is used not only to mark the feminine gender but also to form the neuter gender, especially in participles and relative forms, for example nfr.t “that which is good” i.e. “(the) good”. In addition, there are three numbers, singular, plural, and dual.
	Late Egyptian: As in Earlier Egyptian, the noun has two genders, masculine and feminine and the ending t is used to mark the feminine gender. Contrary to Earlier Egyptian, the neuter gender is expressed in the masculine form. The Late Egyptian noun has only two numbers, singular and plural. The dual forms are rare and they are used in the plural.
	Demotic: As in earlier stages of Egyptian, the noun has two genders, masculine and feminine. Although the ending t is usually used in feminine nouns, it is only a graphic convention as it was not pronounced. The neuter gender is usually realised in the feminine form. The Demotic noun has only two numbers, singular and plural.
Proper Noun (PROPN): 
	All stages of Egyptian: Names of deities, kings and place names are annotated as PROPN. 
Verb (VERB): 
	Old Egyptian and Middle Egyptian: There are two verb conjugations, the “suffix pronoun conjugation” (SPC) and the “Old Semitic suffix conjugation” (OSSC). The SPC needs a noun or a suffix pronoun as a subject in a similar way to non-pro-drop languages, such as English. Most of the exceptions to this rule are due to phonographic reasons. The OSSC consists of personal endings added to the verb stem similar to the verbs of pro-drop languages, such as Spanish. 
The SPC is based on a system of tenses: the past I śč̣m ⸗f (Past-1), the past II śč̣m.n ⸗f (Past-2), the present śč̣m ⸗f (Pres), the future śč̣m ⸗f (Fut), the bireferent future śč̣m.t ⸗f (Bi-Fut) and the contingent tenses śč̣m.i҆n ⸗f, śč̣m.ḫr ⸗f and śč̣m.kꜣ ⸗f (CONT). The SPC also has the subjunctive mood śč̣m ⸗f (Sub). The impersonal construction (Man-Imp) corresponding to “one” in English is realized by adding the noun ti҆/tw to the SPC verb form, for example śč̣m.n -ti҆. In addition, there are two passive verb forms in the SPC, the past passive śč̣m.w ⸗f (PastPass) and the future passive śč̣mm ⸗f (FutPass). The past II śč̣m.n ⸗f, the present śč̣m ⸗f, the future śč̣m ⸗f and the passive forms can be used as abstract relative verb forms (Abstrel), i.e. nominal finite verb forms used syntactically as nouns, especially in the emphatic construction, the Egyptian cleft sentence with an adverbial phrase as focus. The SPC also consists of adjective finite verb forms labelled as "relative verb forms" (Relform).  
The OSSC complements the SPC tenses. There are syntactic rules for the use of the OSSC in relation to SPC tenses. Thus, the tense, aspect and mood of the OSSC varies according to its syntactic function.
The Early Egyptian verb system has an imperative (Imp) and infinite verb forms, which are the infinitive (Inf) and participles (Part). The infinitive is used as a noun and in two periphrastic constructions consisting of the preposition m/ ḥr + infinitive (progressive present) and the preposition r + infinitive (future).
	Late Egyptian: The SPC and the OSSC changed. The core tenses of the Late Egyptian SPC are the past I śč̣m ⸗f (Past-1), the prospective śč̣m ⸗f (Pros) and the terminative śč̣m.t ⸗f (Term). Although the past passive śč̣m.w ⸗f (PastPass) is still used, the Egyptian impersonal construction consisting of tw (Man-Imp) tends to replace the passive. Periphrastic constructions became more productive than in earlier stages.
The OSSC or Stative tends to lose its personal endings. It is used in the First Present. The infinitive became the most common verb form in Late Egyptian. It was not only used in the First Present, but also in the Third Future.
	Demotic: The SPC consists of a past śč̣m ⸗f, a present śč̣m ⸗f and a future śč̣m ⸗f. The Egyptian impersonal construction (Man-Imp) and the passive śč̣m.w ⸗f are lost in Demotic. They are replaced by an active construction using the third person plural pronoun ⸗w. The OSSC or Stative, which lost most of the endings, indicates the state resulted from an action. As in Late Egyptian, the Infinitive is used in the First Present and in the Third Future.
Adposition (ADP):
	All stages of Egyptian: Adpositions are usually prepositions because they are used before a noun phrase. Prepositions occasionally show different forms in status pronominalis (Pron.st) and status constructus (Cons.st.) Complex prepositions (CPs) such as m-śꜣ “in the back” i.e. “behind” are considered multiword expressions (MWE) and they are common in Egyptian. On the contrary, the use of postpositions such as the Old Egyptian one i҆ś “like” is rare in Egyptian.
Auxiliary (AUX):
	Old Egyptian and Middle Egyptian: The verb wnn “exist” is an auxiliary when it is used to express the tense of an adverbial sentence. The particle i҆w is also considered an auxiliary as it is used to express the present perfect in combination with the past II śč̣m.n ⸗f.
	Late Egyptian and Demotic: There are also auxiliary verbs in Late Egyptian and Demotic, for example the Late Egyptian verb ḫpr followed by the infinitive is used to express iterativity and the Demotic verb wꜣḥ ⸗f followed by the infinitive is used to express the perfective aspect.
Coordinating conjunction (CCONJ):
	Old Egyptian and Middle Egyptian: CCONJs are exceptional in Earlier Egyptian, for example rʾ-pw “or”. It should be noted that the Old Egyptian particle i҆śč and the preposition ḥr are occasionally used as a coordinating conjunction in Old Egyptian a preposition.
	Late Egyptian and Demotic: CCONJs are also rare in later stages of Egyptian. The CCONJ rʾ-pw “or” became m rʾ-pw in Late Egyptian. Particles are also used as CCONJs in Late Egyptian, for example ḫr. The Demotic preposition i҆rm is used as a CCONJ meaning “and”.
Determiner (DET):
	Old Egyptian and Middle Egyptian: There are four types of demonstrative pro-adjectives (Dem) with three genders, masculine, feminine and neutral. No article is used in Old Egyptian. The definite article is derived from the demonstrative pꜣ, tꜣ, nꜣ and is first attested in Middle Egyptian documentary texts. The first occurrences of the possessive article pꜣy, ⸗f, tꜣy, ⸗f, nꜣy, ⸗f are also found in those texts.
	Late Egyptian: The definite article, the indefinite article and the possessive article are usual in Late Egyptian. Earlier Egyptian demonstrative pro-adjectives are only used in high registers and they are replaced by a new type of demonstratives.
	Demotic: It knows the same determiners as in Late Egyptian, the definite article, the indefinite article, the Late Egyptian type of demonstratives and the possessive article.
Numeral (NUM):
	Old Egyptian and Middle Egyptian: There are ordinal and cardinal numbers. While “1” and “2” are adjectives, the other cardinals are nouns. Ordinal numbers usually follow a noun in attributive use.
	Late Egyptian: The number one precedes the item counted, while the number two follows it. Other cardinals are considered to be nouns as they precede the item counted in a genitive construction. Ordinal numbers are formed with the prefix mḥ before the cardinal number.
	Demotic: As in Late Egyptian, cardinals precede the item counted except the number two. The numbers from 1 to 10 and 20 also have a feminine form. Ordinals consist of mḥ + the cardinal number and they follow the counted item.
Particle (PART): 
	Old Egyptian, Middle Egyptian, Late Egyptian and Demotic: Particles are common in all stages of Egyptian. A list of particles can be found in Egyptian grammars.
Pronouns (PRON):
	Old Egyptian and Middle Egyptian: There are three types of personal pronouns, the independent pronouns (IndPron), dependent pronouns (DepPron) and Suffixpronouns (SFP).
	Late Egyptian: The three types of Earlier Egyptian personal pronouns are also found in Late Egyptian, although the forms of the independent pronouns are different. In addition, Late Egyptian has a new type of personal pronoun called the proclitic pronoun (ProcPron) used only in the First Present. 
	Demotic: The types of Late Egyptian pronouns are also used in Demotic, although usually in a different form.
Subordinating conjunction (SCONJ):
	Old Egyptian and Middle Egyptian: n.tt and wn.t are considered to be subordinating conjunctions as they are used to subordinate sentences.
	Late Egyptian and Demotic: The converter i҆w is used as a subordinating conjunction because it circumstantially subordinates a sentence.
Punctuation (PUNCT):
	Old Egyptian and Middle Egyptian: The use of a red structuring point (“Gliederungspunkt”) to separate sentences first appears in hieratic texts from the end of the Middle Kingdom (ca. 1700 BC). 
	Late Egyptian: The red structuring point is usually used in New Kingdom hieratic texts. 
Symbol (SYM):
	Old Egyptian and Middle Egyptian: Some signs were probably used as symbols, for example   (śrḫ) could symbolize the king’s palace or his tomb.
Other (X):
	All stages of Egyptian: Some words of unclear meaning and grammatical function are annotated with the tag X.


## Syntax

*

---
**Instruction**: Give criteria for identifying core arguments (subjects and objects), and describe the range of copula constructions in nonverbal clauses. List all subtype relations used. Include links to language-specific relations definitions if any.

---

## Treebanks

There is [1](../treebanks/egy-comparison.html) Egyptian UD treebank:

  * [Egyptian-UJaen](../treebanks/egy_a/index.html)

---
**Instruction**: Treebank-specific pages are generated automatically from the README file in the treebank repository and
from the data in the latest release. Link to the respective `*-index.html` page in the `treebanks` folder, using the language code
and the treebank code in the file name.

---
