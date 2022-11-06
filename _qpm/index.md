---
layout: base
title:  'Pomak-Philotis UD'
udver: '2'
---

# Universal Dependencies for Pomak
<!--<span class="flagspan"><img class="flag" src="pm.png"/></span>-->

## Tokenization and Word Segmentation


* In general, words are delimited by whitespace characters and every single token is segmented separately. For example: _za da_ "in order to", _ní kutrí_ "no one", _zablǽvom so_ "slow myself".
* The numbers are analyzed as one token when used as expression without spaces (20000) or with an internal comma as indicator (10,434).


## Morphology

### Tags

This is an overview only. For a more detailed discussion and examples, see the list of [Pomak POS tags](pos/index.md) and [Pomak features](feat/index.md).

* Pomak treebank uses 16 universal POS categories. Currently it does not make use of [SYM](../../u/pos/SYM.md).
* Affirmative, negative, interrogative, modal particles are analyzed as [PART](pos/PART.md).
* [PRON](pos/PRON.md) are distinguished from [DET](pos/DET.md) as follows:
	* Both the strong and the weak types of personal pronouns (_ja/mí/mó, ty/tí/tó, toj/mú/go, tja/jí/jé, to/mú/go, nýje/nú/nú, výje/vú/vú, tíje/mí/gi, to/mí/gi_) are assigned the PoS tag [PRON](pos/PRON.md).
	* The weak types of possessive pronouns (_mi, ti, mu, ji, nu, vu, mi_) are assigned the PoS tag [PRON](pos/PRON.md).
	* The reflexive pronouns  `sá/sé/só` και `sí` are assigned the PoS tag [PRON](pos/PRON.md).
	* Then pronoun types _kaná_ "what", _kanása / kanáta / kanána_ "whatever here - proximal / whatever there -medial / whatever over there - distal", _ní kaná_ "nothing" and _síčko / síčkoso / síčkoto / síčkono_ "all / everything" are assigned the PoS tag [PRON](pos/PRON.md).
	* The strong types of possessive pronouns (_moj, tvoj, tógav, tójin, naš, vaš, tǽhan_) and all other pronouns are assigned the PoS tag [DET](pos/DET.md).
	* The adjective _adín/edín/idín_ is assigned the PoS tag [DET](pos/DET.md) when it is used as an indefinite article.

* Pomak has the following auxiliaries that are assigned the PoS tag [AUX](pos/AUX_.md): 
 	* _som_ "to be" -but lemmas such as _býdom_ are also possible-
	* _šom_ / _štom_ (it expresses possibility, very similartly to the Greek _θα_)  
	*  _še / ša_ "will, shall" and _da_ "to" 
	
* Modal verbs are assigned the PoS tag [VERB](pos/VERB.md).
* The  PoS tag [ADJ](pos/ADJ.md) is assigned to adjectives, ordinal numerals, adjectives derived from family names and ethnonyms.
* The  PoS tag  [VERB](pos/VERB.md) is assigned to personal and impersonal verbs, participles, infinitives and converbs.
* <b><u>Note</u></b>: Pomak has a triple post-positioned definite article which is part of the word that receives no distinct PoS tag.


### Features

* Features currently NOT used: [Typo](), [NounClass](), [Evident](), [Polite](), [Clusivity]().

#### Nominal Features

* Common nouns ([NOUN](pos/NOUN.md)) and proper nouns ([PROPN](pos/PROPN.md)) have inherent gender ([Gender](feat/Gender.md)) that receives one of the following values: `Masc`, `Fem` ή `Neut`.
* [Animacy](feat/Animacy.md) is a grammatical feature of pronouns, adjectives, participles and some of the numerals. The opposition  `Human vs. Non-human` is overt with  masculine plural and rarely  with masculine singular.
*  [ADJ](pos/ADJ.md), [DET](pos/DET.md), [NUM](pos/NUM.md), the participles that are assigned the PoS tag [VERB](pos/VERB.md) και [PRON](pos/PRON.md) inflect for [Case](feat/Case.md), gender [Gender](feat/Gender.md) and number [Number](feat/Number.md) and agree with the nouns that they modify.
	* <b><u>Note</u></b>: Certain adjectives (of turkish origins mainly) do not inflect.
* Pomak has four cases: Nominative, Genitive, Accusative and Vocative.
* Pomak nouns, adjectives, certain numerals, passive participles and the strong types of pronouns may be marked for the feature [Definite](feat/Definite.md).  When an article is attached to them they are assigned the value `Def` else the value `Ind`.
* Pomak has a triple enclitic definite artile (-s, -t, -n) that occurs with nouns, adjectives, pronouns and passive participles and denotes deixis and definiteness.  The features [Deixis](feat/Deixis.md) and [DeixisRef](feat/DeixisRef.md) are used to tag deixis as follows:
	* Proximity to the speaker is denoted with the values  `Prox` and `1` respectively (e.g., _čulǽk<u>os</u>, žaná<u>sa</u>, déte<u>so</u>_).
	* Proximity to the listener is denoted with the values  `Prox` and `2` respectively (e.g., _čulǽk<u>ot</u>, žaná<u>ta</u>, déte<u>to</u>_).
	* Distance from both the speaker and the listener is denoted with the value `Remt` (e.g., _čulǽk<u>on</u>, žaná<u>na</u>, déte<u>no</u>_).


#### Degree and Polarity

* The comparative and superlative degree of adjectives and adverbs is formed with the adverbs  _po_ and _naj_ respectively: they both are distinct words.   Τhe feature [Degree](feat/Degree.md) is used to denote the positive, comparative and superlative degre of adjectives and adverbs and is assigned one of the values  `Pos`, `Cmp` και `Sup` respectively. Only the comparative and the superlative degree have been declared so far while the positive degree is treated as the default. 
* [Polarity](feat/Polarity.md) has two values, `Pos` and `Neg`, and applies primarily to negative and affirmative particles [PART](pos/PART.md).  So far, only the value  `Neg` has been used.

#### Verbal Features

* Similarly to other Slavic languages, Pomak verbs are marked for  [Aspect](feat/Aspect.md) as a lexically classifying feature, that takes one of the following four values: `Imp`, `Perf`, `Iter`, `Prog`.
* Finite verbs always are marked for one of two values of [Mood](feat/Mood.md): `Ind` or `Imp`, one of four values of [Number](feat/Number.md): `Sing`, `Plur`, `Count` or `Coll` and one of three values of [Person](feat/Person.md): `1`, `2` or `3`.
* Verbs in the `Ind` mood are always  marked forone of two values of [Tense](feat/Tense.md): `Past` or `Pres`. `Fut` is not used because this tense is always formed with a special particle.
* Finite verbs of the `Imp` mood have only 2nd [Person](feat/Person.md).
* There are two values of the [Voice](feat/Voice.md) feature: `Act` and `Pass`. Only the passive participle has `Voice=Pass`. All other verb forms have `Voice=Act`.
* There are three types of nonfinite verb forms ([VerbForm](feat/VerbForm.md)): `Conv`, `Inf` and `Part`.

#### Pronouns, Determiners, Quantifiers

* [PronType](feat/PronType.md) is used with pronouns ([PRON](pos/PRON.md)), determiners ([DET](pos/DET.md)) and adverbs ([ADV](pos/ADV.md)).
* [NumType](feat/NumType.md) is used with numerals ([NUM](pos/NUM.md)), adjectives ([ADJ](pos/ADJ.md)).
* The [Poss](feat/Poss.md) feature marks possessive personal determiners (e.g. _moj_ “my”), possessive interrogative (indefinite or negative) determiners (e.g., _číjje_ “whose”), possessive relative determiners (e.g., _číjjeso, číjjeto, číjjeno_ “whose”) and possessive adjectives (e.g., _májčin_ “mother's”).
	* <b><u>Note</u></b>: Indefinite, negative and universal pronouns  (e.g., _ní kutrí_ "no one") and indefinite, negative and universal adjectives (e.g., _ní kadé_ "no where") are formed with the particles `nǽ / nó, ní, sǽ` and the corresponding interogative pronoun. The particles precede the pronouns and retain both their word status and the feature `PronType=Int`.
* The [Reflex](feat/Reflex.md) feature is assigned to reflexive pronouns _`sá, sé, só`_ and possesive clitic pronoun _`sí`_.
* [Person](feat/Person.md) is a lexical feature of personal pronouns ([PRON](pos/PRON.md)) and personal determiners ([DET](pos/DET.md)) and has three values: `1`, `2` and `3`.
* There is one [layered feature](../../u/overview/feat-layers.md), namely [Number[psor]](feat/Number-psor.md).
  It appears with the possesive determiners and encodes the lexical number of the possessor.
  The extra layer is needed to distinguish this lexical feature from the inflectional number that marks agreement with the modified (possessed) noun.

### Other Features

* Language-specific features of Pomak:

  * Diminutive and augmentative forms of nouns, adjectives, adverbs and certain passive participles are assigned the feature [qpm-DegreeMod](feat/qpm-DegreeMod.md) and one of the values `Dim` ή `Mag` respectively.

  * Τhe feature [Variant](feat/Variant.md) with the value `Short` is assigned to the weak types of personal and possessive pronouns to set them apart from their corresponding strong types.  

  * Τhe particles `nǽ` / `nó`, `ní`, `sǽ`, which are used to form the indefinite, negative and universal pronouns and adverbs, are assigned the PoS tag  [PART](pos/PART.md) and the feature [qpm-PartType](feat/qpm-PartType.md) with one of the following values `Ind`, `Neg` ή `Tot` respectively.

## Syntax

Only the morphological annotation of the treebank has been studied in detail so far. 
The syntactic annotation was obtained with the Udify tools. An updated version of the treebank with a fully studied syntactic annotation 
is estimated to be uploaded at the end of 2022.

<!--- This is an overview only. For more detailed discussion and examples, see the list of [Pomak relations](dep/index.md).-->

### Core Arguments, Oblique Arguments and Adjuncts


### Other relations:


### No used relations:--->


## Treebanks

There is 1 Pomak UD treebank:

  * [Pomak-Philotis](index.md)
