---
layout: base
title:  'Egyptian UD'
udver: '2'
---

# UD for Egyptian <span class="flagspan"><img class="flag" src="../../flags/svg/EG.svg" /></span>

This is an overview based on the works cited in the README bibliography. Please note that this is a work in progress. A detailed description of each stage of Egyptian is planned to be published.


## Introduction

Egyptian comprises two main stages, Earlier Egyptian, which includes Old Egyptian and Middle Egyptian, and Later Egyptian, which includes Late Egyptian, Demotic and Coptic (for the latter see the Language Page for [Coptic](https://universaldependencies.org/cop/index.html) in UD). Earlier Egyptian is characterized by a synthetic syntax and Later Egyptian by an analytic syntax. In general, hieroglyphic and hieratic script were used for Old Egyptian, Middle Egyptian and Late Egyptian, while Demotic was written in demotic. In these scripts no blanks were used between words.


## Tokenization and Word Segmentation 

Egyptian texts are annotated with transcription characters. The Egyptian-UJaen treebank uses the Tübingen transcription system (see README). Classifiers are not annotated in the transcription of Egyptian texts because they have no phonetic value or because they repeat sounds expressed in the word, as phonetic classifiers do.

Words are separated by a blank in the transcription of Egyptian texts. A dot is used to separate the ending of a word from its stem, cf: _nb.t_ "mistress" and _nb_ "lord".
Suffix pronouns are attached to the word they follow by means of a double oblique hyphen, for example: _nb.t ⸗f_ "his mistress".

Compounds and fixed multiword expressions are connected by a hyphen, for example titles such as _ẖri҆-ḥꜣb.t_ "lector priest" and complex prepositions, for example _m-ḫt_ “behind”. A hyphen is also used to separate the man-impersonal noun _ti҆ / tw_ from a verb form, for example: _pr-tw_ “one shall go”.

Brackets () enclose the omission of an element in the text, while square brackets [] enclose a restored text. Curly brackets {} enclose typographical errors in the text, while the angle brackets <> enclose an emendation.


## Morphology

### Tags and Features

The 17 [Universal POS](https://universaldependencies.org/u/pos/index.html) categories are found in Egyptian.
1. Adjective ([ADJ](https://universaldependencies.org/u/pos/ADJ.html)):
  * Old Egyptian and Middle Egyptian: There were a few primary adjectives, for example _nb_ “every”, “all”. Most of them were deverbal adjectives such as _nfr_ “good” and nisba adjectives such as _n.i҆_ “belonging to”, derived from the preposition _n_ “for”. In attributive use, adjectives usually agreed in gender and number with the noun they follow.
  * Late Egyptian: Primary adjectives increased, while nisba adjectives were less productive than in earlier stages. Late Egyptian adjectives were usually derived from verbs. In attributive use they no longer agreed with their antecedents.
 * Demotic: The number of adjectives was smaller than in earlier stages of Egyptian. They were often replaced by a genitive construction. Demotic adjectives usually had the same gender as the noun they followed. Agreement in number of nouns and adjectives was rare.
2. Adverb ([ADV](https://universaldependencies.org/u/pos/ADV.html)): 
 * Old Egyptian, Middle Egyptian and Late Egyptian: The use of adverbs such as _i҆m_ “there” was rare. Instead, adpositions ([ADP](https://universaldependencies.org/u/pos/ADP.html)s) were usually used, consisting of a preposition and a noun phrase. Adverbs generally occurred at the end of a sentence.
 * Demotic: The use of adverbs was more common than in earlier stages of Egyptian. Demotic adverbs fell into three general categories: quality, place and time.
3. Interjection ([INTJ](https://universaldependencies.org/u/pos/INTJ.html)):
 * All stages of Egyptian: The number of interjections was small in Egyptian texts. The most used interjections in Earlier Egyptian were _i҆_ and _hꜣ_, which usually accompanied the vocative. In Demotic, _i҆_ was also used to introduce the vocative. In Late Egyptian, the interjection _i҆ꜣ_ had the meaning “truly”.
4. Noun ([NOUN](https://universaldependencies.org/u/pos/NOUN.html)):
 * Old Egyptian and Middle Egyptian: Nouns had no cases. There were two genders, masculine and feminine. The ending _t_ was used not only to mark the feminine gender but also to form the neuter gender, especially in participles and relative forms, for example _nfr.t_ “that which is good” i.e. “(the) good”. In addition, there were three numbers, singular, plural, and dual.
 * Late Egyptian: As in Earlier Egyptian, the noun had two genders, masculine and feminine and the ending _t_ was used to mark the feminine gender. Contrary to Earlier Egyptian, the neuter gender was expressed with the masculine form. The noun had only two numbers, singular and plural. The dual forms were rare and just like the plural.
 * Demotic: As in earlier stages of Egyptian, the noun had two genders, masculine and feminine. Although the ending _t_ was usually used in feminine nouns, it was only a graphic convention for it was not pronounced. The neuter gender was usually expressed with the feminine form. The noun had only two numbers, singular and plural.
5. Proper Noun ([PROPN](https://universaldependencies.org/u/pos/PROPN.html)): 
 * All stages of Egyptian: Names of deities, kings and place names are annotated as [PROPN](https://universaldependencies.org/u/pos/PROPN.html). 
6. Verb ([VERB](https://universaldependencies.org/u/pos/VERB.html)): 
 * Old Egyptian and Middle Egyptian: There were two verb conjugations, the “suffix pronoun conjugation” (SPC) and the “Old Semitic suffix conjugation” (OSSC). The SPC needed a noun or a suffix pronoun as a subject in a similar way as non-pro-drop languages, such as English. Most of the exceptions to this rule were due to phonographic reasons. The OSSC consisted of personal endings added to the verb stem similar to the verbs of pro-drop languages, such as Spanish.
   The SPC was based on a system of tenses: the past I _śč̣m ⸗f_ (Past-1), the past II _śč̣m.n ⸗f_ (Past-2), the present _śč̣m ⸗f_ (Pres), the future _śč̣m ⸗f_ (Fut), the bireferent future _śč̣m.t ⸗f_ (Bi-Fut) and the contingent tenses _śč̣m.i҆n ⸗f_, _śč̣m.ḫr ⸗f_ and _śč̣m.kꜣ ⸗f_ (Cont). The SPC also had the subjunctive mood _śč̣m ⸗f_ (Sub). The impersonal construction (Man-Imp) corresponding to “one” in English was effected by adding the noun _ti҆_ / _tw_ to the SPC verb form, for example _śč̣m.n -ti҆_. In addition, there were two passive verb forms in the SPC, the past passive _śč̣m.w ⸗f_ (PastPass) and the future passive _śč̣mm ⸗f_ (FutPass). The past II _śč̣m.n ⸗f_, the present _śč̣m ⸗f_, the future _śč̣m ⸗f_ and the passive forms could be used as abstract relative verb forms (Abstrel), i.e. nominal finite verb forms used syntactically as nouns, especially in the emphatic construction, the Egyptian cleft sentence with an adverbial phrase as focus. The SPC also consisted of adjective finite verb forms labelled "relative verb forms" (Relform).
   The OSSC complemented the SPC tenses. There were syntactic rules for the use of the OSSC in relation to SPC tenses. Thus, the tense, aspect and mood of the OSSC varied according to its syntactic function.
   The Early Egyptian verb system had an imperative (Imp) and infinite verb forms, which were the infinitive (Inf) and participles (Part). The infinitive was used as a noun and in two periphrastic constructions consisting of the preposition _m_ / _ḥr_ + infinitive (progressive present) and the preposition _r_ + infinitive (future).
 * Late Egyptian: The SPC and the OSSC evolved. The core tenses of the Late Egyptian SPC werw the past I _śč̣m ⸗f_ (Past-1), the prospective _śč̣m ⸗f_ (Pros) and the terminative _śč̣m.t ⸗f_ (Term). Although the past passive _śč̣m.w ⸗f_ (PastPass) was still used, the Egyptian impersonal construction consisting of _tw_ (Man-Imp) tended to replace the passive. Periphrastic constructions became more productive than in earlier stages.
The OSSC or Stative tended to lose its personal endings, and it was used in the First Present. The infinitive became the most common verb form in Late Egyptian, and it was used not only in the First Present, but also in the Third Future.
 * Demotic: The SPC consisted of a past _śč̣m ⸗f_, a present _śč̣m ⸗f_ and a future _śč̣m ⸗f_. The Egyptian impersonal construction (Man-Imp) and the passive _śč̣m.w ⸗f_ were lost in Demotic. They were replaced by an active construction using the third person plural pronoun _⸗w_. The OSSC or Stative, which lost most of its endings, indicated the state resulting from an action. As in Late Egyptian, the Infinitive was used in the First Present and in the Third Future.
7. Adposition ([ADP](https://universaldependencies.org/u/pos/ADP.html)):
* All stages of Egyptian: Adpositions were usually prepositions for they were used before a noun phrase. Prepositions occasionally showed different forms in status pronominalis (Pron.st) and status constructus (Cons.st.). Complex prepositions (CPs) such as _m-śꜣ_ “in the back” i.e. “behind” are considered multiword expressions (MWE) and they were common in Egyptian. On the contrary, the use of postpositions such as the Old Egyptian one _i҆ś_ “like” was rare in Egyptian.
8. Auxiliary ([AUX](https://universaldependencies.org/u/pos/AUX_.html)):
* Old Egyptian and Middle Egyptian: The verb _wnn_ “exist” was an auxiliary when used to express the tense of an adverbial sentence. The particle _i҆w_ was also considered an auxiliary as it was used to express the present perfect in combination with the past II _śč̣m.n ⸗f_.
 * Late Egyptian and Demotic: There were also auxiliary verbs in Late Egyptian and Demotic, for example the Late Egyptian verb _ḫpr_ followed by the infinitive was used to express iterativity and the Demotic verb _wꜣḥ ⸗f_ followed by the infinitive was used to express the perfective aspect.
9. Coordinating conjunction ([CCONJ](https://universaldependencies.org/u/pos/CCONJ.html)):
 * Old Egyptian and Middle Egyptian: Coordinating conjunctions were exceptional in Earlier Egyptian, for example _rʾ-pw_ “or”. It should be noted that the Old Egyptian particle _i҆śč_ and the preposition _ḥr_ were occasionally used as a coordinating conjunction in Old Egyptian.
 * Late Egyptian and Demotic: Coordinating conjunctions were also rare in later stages of Egyptian. The conjunction _rʾ-pw_ “or” became _m rʾ-pw_ in Late Egyptian. Particles were also used as coordinating conjunctions in Late Egyptian, for example _ḫr_. The Demotic preposition _i҆rm_ was used as a coordinating conjunction meaning “and”.
10. Determiner ([DET](https://universaldependencies.org/u/pos/DET.html)):
 * Old Egyptian and Middle Egyptian: There were four types of demonstrative pro-adjectives (Dem) with three genders, masculine, feminine and neutral. No article was used in Old Egyptian. The definite article, derived from the demonstrative _pꜣ_, _tꜣ_, _nꜣ_, is first attested in Middle Egyptian documentary texts. The first occurrences of the possessive article _pꜣy ⸗f_, _tꜣy ⸗f_, _nꜣy ⸗f_ are also found in those texts.
 * Late Egyptian: The definite article, the indefinite article and the possessive article were usual in Late Egyptian. Earlier Egyptian demonstrative pro-adjectives were used only in high registers and they were replaced by a new type of demonstratives.
 * Demotic: It knew the same determiners as Late Egyptian, the definite article, the indefinite article, the Late Egyptian type of demonstratives and the possessive article.
11. Numeral ([NUM](https://universaldependencies.org/u/pos/NUM.html)):
 * Old Egyptian and Middle Egyptian: There were ordinal and cardinal numbers. While “1” and “2” were adjectives, the other cardinals were nouns. Ordinal numbers usually followed a noun as attributives.
 * Late Egyptian: The number one preceded the item counted, while the number two followed it. Other cardinals were considered to be nouns as they preceded the item counted in a genitive construction. Ordinal numbers were formed with the prefix _mḥ_ before the cardinal number.
 * Demotic: As in Late Egyptian, cardinals preceded the item counted except the number two. Numbers from 1 to 10 and 20 also had a feminine form. Ordinals consisted of _mḥ_ + the cardinal number and they followed the counted item.
12. Particle ([PART](https://universaldependencies.org/u/pos/PART.html)): 
 * All stages of Egyptian: Particles were common in Egyptian. A list of particles can be found in Egyptian grammars.
13. Pronouns ([PRON](https://universaldependencies.org/u/pos/PRON.html)):
 * Old Egyptian and Middle Egyptian: There were three types of personal pronouns, the independent pronouns (IndPron), dependent pronouns (DepPron) and suffix pronouns (SFP).
 * Late Egyptian: The three types of Earlier Egyptian personal pronouns were also found in Late Egyptian, although the forms of the independent pronouns were different. In addition, Late Egyptian had a new type of personal pronoun called the proclitic pronoun (ProcPron) used only in the First Present. 
 * Demotic: The types of Late Egyptian pronouns were also used in Demotic, although usually in a different form.
14. Subordinating conjunction ([SCONJ](https://universaldependencies.org/u/pos/SCONJ.html)):
 * Old Egyptian and Middle Egyptian: _n.tt_ and _wn.t_ are considered to be subordinating conjunctions as they were used to subordinate sentences.
 * Late Egyptian and Demotic: The converter _i҆w_ was used as a subordinating conjunction because it circumstantially subordinated a sentence.
15. Punctuation ([PUNCT](https://universaldependencies.org/u/pos/PUNCT.html)):
 * Old Egyptian and Middle Egyptian: The use of a red structuring point (“Gliederungspunkt”) to separate sentences first appeared in hieratic texts from the end of the Middle Kingdom (ca. 1700 BC). 
 * Late Egyptian: The red structuring point was commonly used in New Kingdom hieratic texts. 
16. Symbol ([SYM](https://universaldependencies.org/u/pos/SYM.html)):
 * Old Egyptian and Middle Egyptian: Some signs were probably used as symbols, for example:
   ![path132](https://github.com/UniversalDependencies/docs/assets/159358649/d9493c5b-3e5d-4020-90a0-043fc4ba1bde) (_śrḫ_) could symbolize the king’s palace or his tomb.
17. Other ([X](https://universaldependencies.org/u/pos/X.html)):
 * All stages of Egyptian: Some words of unclear meaning and grammatical function are annotated with the tag [X](https://universaldependencies.org/u/pos/X.html).


## Syntax

The following universal syntactic relations were found in Egyptian:
* Nominal subject ([nsubj](https://universaldependencies.org/u/dep/nsubj.html)):
  - Old Egyptian and Middle Egyptian: The subject was a noun phrase or a pronoun. It was _ti҆_ / _tw_ “one” in impersonal SPC verb forms. If it was a pronoun, its form varied according to these cases:
     * It was a suffix pronoun in verbal sentences with SPC verb forms.
     * It was an independent pronoun in nominal sentences.
     * It is a dependent pronoun in adjectival sentences.
     * It was a dependent pronoun after particles such as _m ⸗k_ in adverbial sentences.
     * It was a suffix pronoun after particles such as _i҆w_ in adverbial sentences.
  - Late Egyptian: The subject was a noun phrase or a pronoun. It was _tw_ “one” in impersonal SPC verb forms. If it was a pronoun, its form varied according to these cases:
     * It was a suffix pronoun in verbal sentences with SPC verb forms.
     * It was an independent pronoun in nominal sentences.
     * It was a dependent pronoun in adjectival sentences.
     * It was a proclitic pronoun in adverbial sentences (First Present).
  - Demotic: The subject was a noun phrase or a pronoun. If it was a pronoun, its form varied according to these cases:
     * It was a suffix pronoun in verbal sentences with SPC verb forms.
     * It was an independent pronoun in nominal sentences.
     * It was a proclitic pronoun in adverbial sentences (First Present).
* Object ([obj](https://universaldependencies.org/u/dep/obj.html)): 
  - All stages of Egyptian: The object of a verb was expressed by a dependent pronoun.
* Indirect object ([iobj](https://universaldependencies.org/u/dep/iobj.html)):
  - All stages of Egyptian: The indirect object of a verb was expressed by the preposition _n_ “for” + a noun or suffix pronoun.
* Oblique nominal ([obl](https://universaldependencies.org/u/dep/obl.html)):
  - All stages of Egyptian: The obl relation happened between the noun of an ADP and its root.
* Vocative ([vocative](https://universaldependencies.org/u/dep/vocative.html)):
  - All stages of Egyptian: The vocative was usually used in religious texts and hymns.
* Expletive ([expl](https://universaldependencies.org/u/dep/expl.html)):
  - All stages of Egyptian: The expletive relation happened between dependent pronouns used as reflexive pronouns and the verb forms ([expl:pv](https://universaldependencies.org/u/dep/expl-pv.html)).
* Dislocated elements ([dislocated](https://universaldependencies.org/u/dep/dislocated.html)):
  - All stages of Egyptian: Noun phrases introducing the topic of a sentence usually preceded a verb form.
* Nominal modifier ([nmod](https://universaldependencies.org/u/dep/nmod.html)):
  - Old Egyptian and Middle Egyptian: A nmod relation usually occurred in three cases:
     * the direct genitive between the two nouns. 
     * the indirect genitive between the noun following _n(.i҆)_ and the first noun.
     * the relationship of possession between the suffix pronoun and the noun it followed, for example _pr ⸗f_ “his house”.
  - Late Egyptian and Demotic: A nmod relation usually occurred in the following cases:
     * the direct genitive between the two nouns (less often than in earlier stages).
     * the indirect genitive between the noun following _n(.i҆)_ and the first noun.
     * the relationship of possession between the suffix pronoun and the noun it followed (less often than in earlier stages).
     * the relationship of possession between the possessive article and the noun it preceded, for example _tꜣy ⸗f sn.t_ “his sister”. 
* Appositional modifier ([appos](https://universaldependencies.org/u/dep/appos.html)):
  - All stages of Egyptian: It was a common syntactic relation in Egyptian texts.
* Numeric modifier ([nummod](https://universaldependencies.org/u/dep/nummod.html)):
  - All stages of Egyptian: The nummod relation is characterized by the fact that most cardinals were considered to be nouns (see NUM, above).
* Clausal subject ([csubj](https://universaldependencies.org/u/dep/csubj.html)):
  - All stages of Egyptian: Nominal finite verb forms (Abstrel) could be used with a subject-noun function.
* Clausal complement ([ccomp](https://universaldependencies.org/u/dep/ccomp.html)):
  - All stages of Egyptian: Object clauses were usually used in Egyptian texts.
* Adverbial clause modifier ([advcl](https://universaldependencies.org/u/dep/advcl.html)):
  - Old Egyptian and Middle Egyptian: Predicative verb forms and the OSSC could usually have an adverbial function. The OSSC were occasionally used as converbs ([Conv](https://universaldependencies.org/u/feat/VerbForm.html)).
  - Late Egyptian and Demotic: Circumstantial clauses could be formed by adding _i҆w_ to a main sentence (see SCONJ, above).
* Clausal modifier of noun ([acl](https://universaldependencies.org/u/dep/acl.html)):
  - All stages of Egyptian: Relative forms were used to modify a nominal in an adnominal clause.
* Adverbial modifier ([advmod](https://universaldependencies.org/u/dep/advmod.html)):
  - All stages of Egyptian: Adverbs were characterized by an advmod relation.
* Discourse element ([discourse](https://universaldependencies.org/u/dep/discourse.html)):
  - All stages of Egyptian: Interjections and particles usually had a discourse function.
* Adjectival modifier ([amod](https://universaldependencies.org/u/dep/amod.html)):
  - All stages of Egyptian: Adjectives, nisba adjectives and participles had an amod relation with the noun they modified.
* Auxiliary ([aux](https://universaldependencies.org/u/dep/aux_.html)):
  - All stages of Egyptian: Auxiliaries were characterized by an aux relation (see AUX, above).
* Copula ([cop](https://universaldependencies.org/u/dep/cop.html)):
  - Old Egyptian and Middle Egyptian: _pw_ was used as a copula in the nominal sentence type A _pw_ B.  
  - Late Egyptian and Demotic: No known word with a copula function.
Marker ([mark](https://universaldependencies.org/u/dep/mark.html)):
  - All stages of Egyptian: Complement clauses and adverbial clauses could be formed using conjunctions or words with a conjunction function.
* Determiner ([det](https://universaldependencies.org/u/dep/det.html)):
  - All stages of Egyptian: The det relation happened between the determiners and the words they accompanied (see DET, above).
* Case marking ([case](https://universaldependencies.org/u/dep/case.html)):
  - All stages of Egyptian: Case relation indicated the syntactic dependency from adpositions of the nouns they accompanied (for the prepositional cases in Egyptian see the list of [specific features](https://quest.ms.mff.cuni.cz/udvalidator/cgi-bin/unidep/langspec/specify_feature.pl?lcode=egy&feature=Case) for this language).
* Conjunct ([conj](https://universaldependencies.org/u/dep/conj.html)):
  - All stages of Egyptian: As conjunctions were rare in Egyptian, the conj relation between two elements was usually asyndetic without a coordinating conjunction. 
* Coordinating conjunction ([cc](https://universaldependencies.org/u/dep/cc.html)):
  - All stages of Egyptian: It was unusual due to the rare use of coordinating conjunctions in Egyptian (see CONJ, above).
* Fixed multiword expression ([fixed](https://universaldependencies.org/u/dep/fixed.html)):
  - All stages of Egyptian: A fixed relation happened especially in complex prepositions.
* Flat expression ([flat](https://universaldependencies.org/u/dep/flat.html)):
  - All stages of Egyptian: Royal names were usually connected by a flat relation.
* List ([list](https://universaldependencies.org/u/dep/list.html)):
  - All stages of Egyptian: Chains of comparable items are found in Egyptian inventories.
* Parataxis ([parataxis](https://universaldependencies.org/u/dep/parataxis.html)):
  - All stages of Egyptian: Examples of parataxis can be found in direct speech.
* Compound ([compound](https://universaldependencies.org/u/dep/compound.html)):
  - All stages of Egyptian: Egyptian titles are usually a combination of lexemes in a compound relation.
* Root ([root](https://universaldependencies.org/u/dep/root.html)):
   - All stages of Egyptian: The root was usually a noun in the predicate of a nominal sentence and an adverbial sentence, an adjective in an adjectival sentence or phrase, an adverb in an adverbial sentence and a verb in a verbal sentence.
* Unspecified dependency ([dep](https://universaldependencies.org/u/dep/dep.html)):
  - All stages of Egyptian: Words of unclear meaning and grammatical function are annotated in a dep relation.


## Treebanks

There is [1](../treebanks/egy-comparison.html) Egyptian UD treebank:

  * [Egyptian-UJaen](../treebanks/egy_a/index.html)

