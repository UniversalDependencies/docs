---
layout: base
title:  'Greek UD'
udver: '2'
---


# UD for Greek <span class="flagspan"><img class="flag" src="../../flags/svg/GR.svg" /></span>

There are two  UD treebanks of Modern Greek (EL): UD_Greek-GDT, UD_Greek-GUD. GDT and GUD have adopted the same tokenization and word segmentation guidelines. The two treebanks present notable differences as regards morphological annotation. The current UD documentation of EL morphology describes the choices adopted in GUD. The editing of the syntactic annotation in GUD is an ongoing project, so the current UD documentation of EL syntax describes the choices adopted in GDT only. 

## Tokenization and Word Segmentation-GDT,GUD

* Words are generally delimited by whitespace or punctuation. Exceptions:
* Numerical expressions are treated as single words and may contain punctuation or symbols:
  *15*, *2.200*, *0,05%*
* Dates are treated as nouns and in some cases may contain underscores:
  *1871/72*, *1943-44*, *2012-03-25*, *20ετίας*, *'44*, *11/24_Νοεμβρίου_1916*, *5ης_Νοεμβρίου_2001*
* Abbreviations are treated as single words and may contain punctuation: *ΕΕ*, *χλμ.*, *π.Χ.*
* There is one group of contractions that are treated as multi-word tokens and are segmented to individual syntactic words, namely combinations of the preposition *σε* and types of the definite article: *στον = σ + τον* “in/to/on the”.



## Morphology-GDT

### Tags-GDT

* GDT uses 16 universal POS categories, including particles ([PART]()). No interjections ([INTJ]()) exist in the current dataset.
* Words tagged [PART]() are the negative particles *δεν* and *μην*.
* The current set of auxiliary words ([AUX]()) include:
  * the copula *είμαι* (be)
  * the auxiliary verb *έχω* (have), which combines with the infinitive to form perfect tenses
  * the impersonal verb *πρέπει* (must)
  * the indeclinable future marker *θα*
  * the indeclinable subjunctive particle *να*
  * the indeclinable subjunctive particle *ας*
*  The tag [DET]() is used for the definite and the indefinite article. The tag [PRON]() is used for pronouns occurring as the head of a noun phrase, for pronouns preceding or following their nominal head with which they agree in gender, number and case,  or for possessives in the genitive following their head
*  Past participles used adjectivally are  mostly tagged  [ADJ]()

### Features-GDT

* Nouns have inherent [Gender]() and inflect for [Number]() (singular or plural), and [Case]() (nominative, genitive, accusative and vocative). Remnants of the dative case also exist in set phrases.
* Finite verbs of the [Ind]() mood have one of two values of [Voice](): `Act` and `Pass`; one of two values of [Tense](): `Past` and `Pres`; one of two values of [Number](): `Sing` and `Plur`; and one of three values of [Person](): `1`, `2` and `3`.   Finite verbs of the [Imp]() mood have only `2`nd [Person]().  The [Aspect]() feature has `Imp` and `Perf` values. There are three types of nonfinite forms: infinitives used to form perfect tenses, passive voice `-μένος` participles, and active voice `-[ώο]ντας` converbs.
* Adjectives agree with nouns (in both attributive and predicate position) with respect to the [Gender](), [Number]() and [Case]() features.
* Pronouns inflect for [Gender](), [Number](), [Case]() like nouns and adjectives.
* [Degree]() applies to adjectives ([ADJ]()) and adverbs ([ADV]()) and has one of three possible values: `Pos`, `Cmp`, `Sup`


## Morphology-GUD
Major differences at  PoS level between GDT and GUD are the treatement of  *να* and the system of determiners [DET]() as GUD adheres to UD.v2 morphological guidelines quite closely.

### Tags-GUD


* GUD uses 17 universal POS categories. [INT]() is used for words such as *αμήν* "amen", *ναι* / *ne* "yes",  [INTJ]() with [Polarity=Pos](), *όχι* /*ochi* "no/not", [INTJ]() with [Polarity=Neg](), *καλημέρα* / *kalimera* "goodmorning", *καληνύχτα* / *kalinichta* "goodnight", etc.
* The negative particles *δεν*, *μην* and  *όχι* (the last one, is considered a particle only in limited contexts) are tagged as [PART](). Οther words assigned the tag [PART]() are *ας*, *καν*, *μπας (και)*,	*μην*, *να* (limited contexts),	 *πάρα*, *μακάρι*.
* As auxiliary words ([AUX]()) are considered:
  * *είμαι* "be" when it is used to assign a property to an entity; typically, properties are denoted with adjectives, e.g., *είμαι ψηλός* "I am tall".
  *  *έχω* "have", in verb complexes, both active and passive ones; when *έχω* is used as a content verb it is assigned the tag [VERB]().
  * the indeclinable *θα*, in verb complexes, both active and passive ones.
  * the indeclinable *να* when:	
	- it introduces the verb of a main clause, e.g., <b>Να</b>.[AUX]()  *έρθεις*.[root]() *γρήγορα* "Come early."
	- it  occurs in relative clauses after the relativisers *που*, *o οποίος*, e.g.,  *Στη συνέχεια γράψτε μια συνάρτηση* <b>η οποία</b>. [PRON]() <b>να</b>.[AUX]()  *τυπώνει αυτά τα δεδομένα* "Next, write a function that.[PRON]() will print the data." 
*  *να* is mainly used as a subordinating conjunction and is assigned the tag [SCONJ](); the clauses it introduces function as	verb arguments, clausal nominal modifiers, goal denoting clauses where *να* or  *για να* introduce the clause, and adverbial modifiers where *να* co-occurs with other uniflected words, e.g.,  *αντί να, δίχως να, που να, πριν να, σαν να, χωρίς να, ώσπου να,  ώστε να*. 
*  The tag  [DET]() is assigned to the two articles, certain traditional adjectives (and their comparatives) and to a set of pronouns, namely: definite and indefinite article, adjectives denoting quantities and their comparatives, demonstrative and indefinite pronouns. [DET]() is also assigned to interrogative and relative pronouns when they are followed by a noun.
*  The tag [PRON]() is used for pronouns occurring as the head of a noun phrase, for pronouns preceding or following their nominal head with which they agree in gender, number and case,  or for possessives in the genitive following their head
*  Past participles used adjectivally are  mostly tagged  [ADJ]()

### Features-GUD

* Nouns have inherent [Gender]() and inflect for [Number]() (singular or plural), and [Case]() (nominative, genitive, accusative and vocative). Remnants of the dative case also exist in set phrases.
* Finite verbs of the [Ind]() mood have one of two values of [Voice](): `Act` and `Pass`; one of two values of [Tense](): `Past` and `Pres`; one of two values of [Number](): `Sing` and `Plur`; and one of three values of [Person](): `1`, `2` and `3`.   Finite verbs of the [Imp]() mood have only `2`nd [Person]().  The [Aspect]() feature has `Imp` and `Perf` values. There are three types of nonfinite forms: infinitives used to form perfect tenses, passive voice `-μένος` participles, and active voice `-[ώο]ντας` converbs.
* Adjectives agree with nouns (in both attributive and predicate position) with respect to the [Gender](), [Number]() and [Case]() features.
* Pronouns inflect for [Gender](), [Number](), [Case]() like nouns and adjectives.
* [Degree]() applies to adjectives ([ADJ]()) and adverbs ([ADV]()) and has one of three possible values: `Pos`, `Cmp`, `Sup`


## Syntax

* Nominal subjects ([nsubj]()) are in the nominative case, without adpositions.
* Objects occur in the accusative case (direct objects) or in the genitive (indirect objects). 
* All prepositional objects are currently labeled with the oblique relation.
* Case marking of subjects and objects allows all possible word order variations. However, when introducing new information the most frequent word orders are SVO and VSO. OVS sentences occur when the object is topicalized and they often involve a combination of an object and an object clitic.
* The copula verb *είμαι* (be) is used in equational, attributional, locative, possessive and benefactory nonverbal clauses. Different verbs like *υπάρχω* are typically used in existential clauses.
* The following subtypes are used in Greek:
  * [acl:relcl]() for relative clauses
  * [csubj:pass]() for clausal subjects of passive verbs
  * [nsubj:pass]() for nominal subjects of passive verbs
  * [obl:agent]() for agents of passive verbs

## Treebanks

There are two Modern Greed UD treebanks: UD_Greek-GDT and UD_Greek-GUD.

  * [Greek-GDT](../treebanks/el_gdt/index.html)
  * Greek-GUD will be uploaded soon. 
