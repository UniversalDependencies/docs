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
  * Old Egyptian and Middle Egyptian: There are a few primary adjectives, for example _nb_ “every”, “all”. Most of them are deverbal adjectives such as _nfr_ “good” and nisba adjectives such as _n.i҆_ “belonging to”, derived from the preposition _n_ “for”. In attributive use, adjectives usually agree in gender and number with the noun they follow.
  * Late Egyptian: Primary adjectives increase, while nisba adjectives are no more productive than in earlier stages. Late Egyptian adjectives are usually derived from verbs. In attributive use, they no longer agree with their antecedents.
 * Demotic: The number of adjectives is smaller than in earlier stages of Egyptian. They are often replaced by a genitive construction. Demotic adjectives usually have the same gender as the noun they follow. Agreement in number between nouns and adjectives is rare.
2. Adverb ([ADV](https://universaldependencies.org/u/pos/ADV.html)): 
 * Old Egyptian, Middle Egyptian and Late Egyptian: The use of adverbs such as _i҆m_ “there” is rare. Instead, adpositions ([ADP](https://universaldependencies.org/u/pos/ADP.html)s) are usually used, consisting of a preposition and a noun phrase. Adverbs generally occur at the end of a sentence.
 * Demotic: The use of adverbs is more common than in earlier stages of Egyptian. Demotic adverbs fall into three general categories: quality, place and time.
3. Interjection ([INTJ](https://universaldependencies.org/u/pos/INTJ.html)):
 * All stages of Egyptian: The number of interjections is small in Egyptian texts. The most used interjections in Earlier Egyptian are _i҆_ and _hꜣ_, which usually accompany the vocative. In Demotic, _i҆_ is also used to introduce the vocative. In Late Egyptian, the interjection _i҆ꜣ_ has the meaning “truly”.
4. Noun ([NOUN](https://universaldependencies.org/u/pos/NOUN.html)):
 * Old Egyptian and Middle Egyptian: Nouns have no cases. There are two genders, masculine and feminine. The ending _t_ is used not only to mark the feminine gender but also to form the neuter gender, especially in participles and relative forms, for example _nfr.t_ “that which is good” i.e. “(the) good”. In addition, there are three numbers, singular, plural, and dual.
 * Late Egyptian: As in Earlier Egyptian, the noun has two genders, masculine and feminine and the ending _t_ is used to mark the feminine gender. Contrary to Earlier Egyptian, the neuter gender is expressed in the masculine form. The Late Egyptian noun has only two numbers, singular and plural. The dual forms are rare and they are used in the plural.
 * Demotic: As in earlier stages of Egyptian, the noun has two genders, masculine and feminine. Although the ending _t_ is usually used in feminine nouns, it is only a graphic convention as it was not pronounced. The neuter gender is usually realised in the feminine form. The Demotic noun has only two numbers, singular and plural.
5. Proper Noun ([PROPN](https://universaldependencies.org/u/pos/PROPN.html)): 
 * All stages of Egyptian: Names of deities, kings and place names are annotated as [PROPN](https://universaldependencies.org/u/pos/PROPN.html). 
6. Verb ([VERB](https://universaldependencies.org/u/pos/VERB.html)): 
 * Old Egyptian and Middle Egyptian: There are two verb conjugations, the “suffix pronoun conjugation” (SPC) and the “Old Semitic suffix conjugation” (OSSC). The SPC needs a noun or a suffix pronoun as a subject in a similar way to non-pro-drop languages, such as English. Most of the exceptions to this rule are due to phonographic reasons. The OSSC consists of personal endings added to the verb stem similar to the verbs of pro-drop languages, such as Spanish. 
The SPC is based on a system of tenses: the past I _śč̣m ⸗f_ (Past-1), the past II _śč̣m.n ⸗f_ (Past-2), the present _śč̣m ⸗f_ (Pres), the future _śč̣m ⸗f_ (Fut), the bireferent future _śč̣m.t ⸗f_ (Bi-Fut) and the contingent tenses _śč̣m.i҆n ⸗f_, _śč̣m.ḫr ⸗f_ and _śč̣m.kꜣ ⸗f_ (Cont). The SPC also has the subjunctive mood _śč̣m ⸗f_ (Sub). The impersonal construction (Man-Imp) corresponding to “one” in English is realized by adding the noun _ti҆_ / _tw_ to the SPC verb form, for example _śč̣m.n -ti҆_. In addition, there are two passive verb forms in the SPC, the past passive _śč̣m.w ⸗f_ (PastPass) and the future passive _śč̣mm ⸗f_ (FutPass). The past II _śč̣m.n ⸗f_, the present _śč̣m ⸗f_, the future _śč̣m ⸗f_ and the passive forms can be used as abstract relative verb forms (Abstrel), i.e. nominal finite verb forms used syntactically as nouns, especially in the emphatic construction, the Egyptian cleft sentence with an adverbial phrase as focus. The SPC also consists of adjective finite verb forms labelled as "relative verb forms" (Relform).  
The OSSC complements the SPC tenses. There are syntactic rules for the use of the OSSC in relation to SPC tenses. Thus, the tense, aspect and mood of the OSSC varies according to its syntactic function.
The Early Egyptian verb system has an imperative (Imp) and infinite verb forms, which are the infinitive (Inf) and participles (Part). The infinitive is used as a noun and in two periphrastic constructions consisting of the preposition _m_ / _ḥr_ + infinitive (progressive present) and the preposition _r_ + infinitive (future).
 * Late Egyptian: The SPC and the OSSC changed. The core tenses of the Late Egyptian SPC are the past I _śč̣m ⸗f_ (Past-1), the prospective _śč̣m ⸗f_ (Pros) and the terminative _śč̣m.t ⸗f_ (Term). Although the past passive _śč̣m.w ⸗f_ (PastPass) is still used, the Egyptian impersonal construction consisting of _tw_ (Man-Imp) tends to replace the passive. Periphrastic constructions became more productive than in earlier stages.
The OSSC or Stative tends to lose its personal endings. It is used in the First Present. The infinitive became the most common verb form in Late Egyptian. It was not only used in the First Present, but also in the Third Future.
 * Demotic: The SPC consists of a past _śč̣m ⸗f_, a present _śč̣m ⸗f_ and a future _śč̣m ⸗f_. The Egyptian impersonal construction (Man-Imp) and the passive _śč̣m.w ⸗f_ are lost in Demotic. They are replaced by an active construction using the third person plural pronoun _⸗w_. The OSSC or Stative, which lost most of the endings, indicates the state resulted from an action. As in Late Egyptian, the Infinitive is used in the First Present and in the Third Future.
7. Adposition ([ADP](https://universaldependencies.org/u/pos/ADP.html)):
* All stages of Egyptian: Adpositions are usually prepositions because they are used before a noun phrase. Prepositions occasionally show different forms in status pronominalis (Pron.st) and status constructus (Cons.st.) Complex prepositions (CPs) such as _m-śꜣ_ “in the back” i.e. “behind” are considered multiword expressions (MWE) and they are common in Egyptian. On the contrary, the use of postpositions such as the Old Egyptian one _i҆ś_ “like” is rare in Egyptian.
8. Auxiliary ([AUX](https://universaldependencies.org/u/pos/AUX_.html)):
* Old Egyptian and Middle Egyptian: The verb _wnn_ “exist” is an auxiliary when it is used to express the tense of an adverbial sentence. The particle _i҆w_ is also considered an auxiliary as it is used to express the present perfect in combination with the past II _śč̣m.n ⸗f_.
 * Late Egyptian and Demotic: There are also auxiliary verbs in Late Egyptian and Demotic, for example the Late Egyptian verb _ḫpr_ followed by the infinitive is used to express iterativity and the Demotic verb _wꜣḥ ⸗f_ followed by the infinitive is used to express the perfective aspect.
9. Coordinating conjunction ([CCONJ](https://universaldependencies.org/u/pos/CCONJ.html)):
 * Old Egyptian and Middle Egyptian: Coordinating Conjunctions are exceptional in Earlier Egyptian, for example _rʾ-pw_ “or”. It should be noted that the Old Egyptian particle _i҆śč_ and the preposition _ḥr_ are occasionally used as a coordinating conjunction in Old Egyptian.
 * Late Egyptian and Demotic: Coordinating conjunctions are also rare in later stages of Egyptian. The conjunction _rʾ-pw_ “or” became _m rʾ-pw_ in Late Egyptian. Particles are also used as coordinating conjunctions in Late Egyptian, for example _ḫr_. The Demotic preposition _i҆rm_ is used as a coordinating conjunction meaning “and”.
10. Determiner ([DET](https://universaldependencies.org/u/pos/DET.html)):
 * Old Egyptian and Middle Egyptian: There are four types of demonstrative pro-adjectives (Dem) with three genders, masculine, feminine and neutral. No article is used in Old Egyptian. The definite article is derived from the demonstrative _pꜣ_, _tꜣ_, _nꜣ_ and is first attested in Middle Egyptian documentary texts. The first occurrences of the possessive article _pꜣy ⸗f_, _tꜣy ⸗f_, _nꜣy ⸗f_ are also found in those texts.
 * Late Egyptian: The definite article, the indefinite article and the possessive article are usual in Late Egyptian. Earlier Egyptian demonstrative pro-adjectives are only used in high registers and they are replaced by a new type of demonstratives.
 * Demotic: It knows the same determiners as in Late Egyptian, the definite article, the indefinite article, the Late Egyptian type of demonstratives and the possessive article.
11. Numeral ([NUM](https://universaldependencies.org/u/pos/NUM.html)):
 * Old Egyptian and Middle Egyptian: There are ordinal and cardinal numbers. While “1” and “2” are adjectives, the other cardinals are nouns. Ordinal numbers usually follow a noun in attributive use.
 * Late Egyptian: The number one precedes the item counted, while the number two follows it. Other cardinals are considered to be nouns as they precede the item counted in a genitive construction. Ordinal numbers are formed with the prefix _mḥ_ before the cardinal number.
 * Demotic: As in Late Egyptian, cardinals precede the item counted except the number two. The numbers from 1 to 10 and 20 also have a feminine form. Ordinals consist of _mḥ_ + the cardinal number and they follow the counted item.
12. Particle ([PART](https://universaldependencies.org/u/pos/PART.html)): 
 * Old Egyptian, Middle Egyptian, Late Egyptian and Demotic: Particles are common in all stages of Egyptian. A list of particles can be found in Egyptian grammars.
13. Pronouns ([PRON](https://universaldependencies.org/u/pos/PRON.html)):
 * Old Egyptian and Middle Egyptian: There are three types of personal pronouns, the independent pronouns (IndPron), dependent pronouns (DepPron) and Suffixpronouns (SFP).
 * Late Egyptian: The three types of Earlier Egyptian personal pronouns are also found in Late Egyptian, although the forms of the independent pronouns are different. In addition, Late Egyptian has a new type of personal pronoun called the proclitic pronoun (ProcPron) used only in the First Present. 
 * Demotic: The types of Late Egyptian pronouns are also used in Demotic, although usually in a different form.
14. Subordinating conjunction ([SCONJ](https://universaldependencies.org/u/pos/SCONJ.html)):
 * Old Egyptian and Middle Egyptian: _n.tt_ and _wn.t_ are considered to be subordinating conjunctions as they are used to subordinate sentences.
 * Late Egyptian and Demotic: The converter _i҆w_ is used as a subordinating conjunction because it circumstantially subordinates a sentence.
15. Punctuation ([PUNCT](https://universaldependencies.org/u/pos/PUNCT.html)):
 * Old Egyptian and Middle Egyptian: The use of a red structuring point (“Gliederungspunkt”) to separate sentences first appears in hieratic texts from the end of the Middle Kingdom (ca. 1700 BC). 
 * Late Egyptian: The red structuring point is usually used in New Kingdom hieratic texts. 
16. Symbol ([SYM](https://universaldependencies.org/u/pos/SYM.html)):
 * Old Egyptian and Middle Egyptian: Some signs were probably used as symbols, for example:
   ![path132](https://github.com/UniversalDependencies/docs/assets/159358649/d9493c5b-3e5d-4020-90a0-043fc4ba1bde) (_śrḫ_) could symbolize the king’s palace or his tomb.
17. Other ([X](https://universaldependencies.org/u/pos/X.html)):
 * All stages of Egyptian: Some words of unclear meaning and grammatical function are annotated with the tag [X](https://universaldependencies.org/u/pos/X.html).


## Syntax

The following universal syntactic relations are found in Egyptian:
* Nominal subject ([nsubj](https://universaldependencies.org/u/dep/nsubj.html)):
  - Old Egyptian and Middle Egyptian: The subject is a noun phrase or a pronoun. It is _ti҆_ / _tw_ “one” in impersonal SPC verb forms. If it is a pronoun, its form varies according to these cases:
     * It is a suffix pronoun in verbal sentences with SPC verb forms.
     * It is an independent pronoun in nominal sentences.
     * It is a dependent pronoun in adjectival sentences.
     * It is a dependent pronoun after particles such as m ⸗k in adverbial sentences.
     * It is a suffix pronoun after particles such as i҆w in adverbial sentences.
  - Late Egyptian: The subject is a noun phrase or a pronoun. It is _tw_ “one” in impersonal SPC verb forms. If it is a pronoun, its form varies according to these cases:
     * It is a suffix pronoun in verbal sentences with SPC verb forms.
     * It is an independent pronoun in nominal sentences.
     * It is a dependent pronoun in adjectival sentences.
     * It is a proclitic pronoun in adverbial sentences (First Present).
  - Demotic: The subject is a noun phrase or a pronoun. If it is a pronoun, its form varies according to these cases:
     * It is a suffix pronoun in verbal sentences with SPC verb forms.
     * It is an independent pronoun in nominal sentences.
     * It is a proclitic pronoun in adverbial sentences (First Present).
* Object (obj): 
	All stages of Egyptian: The object of a verb is expressed by a dependent pronoun.
Indirect object (iobj):
	All stages of Egyptian: The indirect object of a verb is expressed by the preposition n + a noun or suffix pronoun.
Oblique nominal (obl):
	All stages of Egyptian: The obl relation is given between the noun of an ADP and its root.
Vocative (vocative):
	All stages of Egyptian: The vocative is usually used in religious texts and hymns.
Expletive (expl):
	All stages of Egyptian: The expletive relation is given between dependent pronouns used as reflexive pronouns and the verb forms (expl:pv).
Dislocated elements (dislocated):
	All stages of Egyptian: Noun phrases introducing the topic of a sentence usually precede a verb form.
Nominal modifier (nmod):
	Old Egyptian and Middle Egyptian: A nmod relation usually occurs in three cases:
o	the direct genitive between the two nouns. 
o	the indirect genitive between the noun following n(.i҆) and the first noun.
o	the relationship of possession between the suffix pronoun and the noun it follows, for example pr ⸗f “his house”.
	Late Egyptian and Demotic: A nmod relation usually occurs in the following cases:
o	the direct genitive between the two nouns (less often than in earlier stages).
o	the indirect genitive between the noun following n(.i҆) and the first noun.
o	the relationship of possession between the suffix pronoun and the noun it follows (less often than in earlier stages).
o	the relationship of possession between the possessive article and the noun it precedes, for example tꜣy ⸗f sn.t “his sister”. 
Appositional modifier (appos):
	All stages of Egyptian: It is a common syntactic relation in Egyptian texts.
Numeric modifier (nummod):
	All stages of Egyptian: The nummod relation is characterized by the fact that most cardinals are considered to be nouns (see NUM, above).
Clausal subject (csubj):
	All stages of Egyptian: Nominal finite verb forms (Abstrel) can be used with a subject-noun function.
Clausal complement (ccomp):
	All stages of Egyptian: Object clauses are usually used in Egyptian texts.
Adverbial clause modifier (advcl):
Old Egyptian and Middle Egyptian: Predicative verb forms and the OSSC can usually have an adverbial function. The OSSC are occasionally used as converbs (Conv).
	Late Egyptian and Demotic: Circumstantial clauses can be made by adding i҆w to a main sentence (see SCONJ, above).
Clausal modifier of noun (acl):
	All stages of Egyptian: Relative forms are used to modify a nominal in an adnominal clause.
 Adverbial modifier (advmod):
	All stages of Egyptian: Adverbs are characterized by an advmod relation.
Discourse element (discourse):
	All stages of Egyptian: Interjections and particles usually have a discourse function.
Adjectival modifier (amod):
	All stages of Egyptian: Adjectives, nisba adjectives and participles have an amod relation to the noun they modify.
Auxiliary (aux):
	All stages of Egyptian: Auxiliaries are characterized by an aux relation (see AUX, above).
Copula (cop):
	Old Egyptian and Middle Egyptian: pw is used as a copula in the nominal sentence type A pw B.  
	Late Egyptian and Demotic: No known word with a copula function.
Marker (mark):
	All stages of Egyptian: Complement clauses and adverbial clauses can be formed using conjunctions or words with a conjunction function.
Determiner (det):
	All stages of Egyptian: The det relation is given between the determiners and the words they accompany (see DET, above).
Case marking (case):
	All stages of Egyptian: Case relation indicates the syntactic dependency between adpositions and the nouns they accompany (for the prepositional cases in Egyptian see the list of specific features for this language).
Conjunct (conj):
	All stages of Egyptian: As conjunctions are rare in Egyptian, the conj relation between two elements is usually asyndetic without a coordinating conjunction. 
Coordinating conjunction (cc):
	All stages of Egyptian: It is unusual due to the rare use of coordinating conjunctions in Egyptian (see CONJ, above).
Fixed multiword expression (fixed):
	All stages of Egyptian: A fixed relation is given especially in complex prepositions.
Flat expression (flat):
	All stages of Egyptian: Royal names are usually connected by a flat relation.
List (list):
	All stages of Egyptian: Chains of comparable items in a list relation are found in Egyptian inventories.
Parataxis (parataxis):
	All stages of Egyptian: Examples of the parataxis relation can be found in the direct speech.
Compound (compound):
	All stages of Egyptian: Egyptian titles are usually combination of lexemes in a compound relation.
Root (root):
	All stages of Egyptian: The root is usually a noun in the predicates of a nominal sentence and an adverbial sentence, an adjective in an adjectival sentence or phrase, an adverb in an adverbial sentence and a verb in a verbal sentence.
Unspecified dependency (dep):
	All stages of Egyptian: Words of unclear meaning and grammatical function are annotated in a dep relation.


## Treebanks

There is [1](../treebanks/egy-comparison.html) Egyptian UD treebank:

  * [Egyptian-UJaen](../treebanks/egy_a/index.html)

---
**Instruction**: Treebank-specific pages are generated automatically from the README file in the treebank repository and
from the data in the latest release. Link to the respective `*-index.html` page in the `treebanks` folder, using the language code
and the treebank code in the file name.

---
