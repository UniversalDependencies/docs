---
layout: base
title:  'Classical Armenian UD'
udver: '2'
---

# UD for Classical Armenian <span class="flagspan"><img class="flag" src="../../flags/svg/AM-ARSACID.svg" /></span>

## Tokenization and Word Segmentation

* Words are generally delimited by whitespace or punctuation. No tokens in the UD Classical Armenian treebank contains whitespace.
* Most punctuation marks are attached to the preceding word and are tokenized as separate tokens.
* Words, containing “infixed” punctuation (e.g. question, exclamation, emphasis and abbreviation marks), as _զիա՞րդ_ = _զիարդ_/_ziard_ + ՞ “why?”, are treated as multiword tokens and segmented to individual syntactic words.
* According to typographical rules, the following words are attached to a neighbouring word:
	* proclitic prepositions _յ_=/_y_=, _ց_=/_cʽ_= and _զ_=/_z_=
	* a proclic determinative particle _զ_=/_z_=
	* a proclic negation particle _չ_=/_čʽ_=
	* enclitic determinative particles =_ս_/=_s_, =_դ_/=_d_, =_ն_/=_n_ 

## Sentence splitting

* A full sentence is usually concluded by the punctuation sign _verjaket_ [ ։ ] corresponding to the English period. In case of longer sentences, the editor of a digital text may decide to split a sentence after the punctuation signs _mijaket_ [ . ], _boot_ [ ՝ ] or _storaket_ [ , ], corresponding to the English colon, semicolon, and comma, respectively.

## Morphology

### Tags

This is an overview only.

* Classical Armenian currently uses 16 UPOS tags; the tag [SYM]() does not occur in the UD_Classical_Armenian-CAVaL treebank.
* The complete list of Classical Armenian words, which must be tagged [PART]() in UD, has to be worked out. At present, the tag is used restrictively and is applied to four lexemes:
	* contrasting particle: _իսկ_/_isk_
	* dubitation particle: _գուցէ_/_gowcʽē_
	* negation particles: _ոչ_/_očʽ_ (with its proclitic variant _չ_=/_čʽ_=) and _մի_/_mi_
* The tag [DET]() is used for articles, the determinate direct object proclitic _զ_=/_z_= (tradictionally called _nota accusativi_), and adjectival pronouns with a determiner function. Pronominal quantifiers (which the traditional grammar includes in pronouns) are [DET]() as well. The tag [PRON]() is reserved for pronouns occurring as the head of a noun phrase. When the proclitic _զ_=/_z_= is used with other cases than the accusative, it does not have a clear determiner function and is tagged [ADP]() with the [case]() relation.
* The Classical Armenian auxiliaries (tagged [AUX]()) include: _եմ_/_em_ (“to be”), its perfective counterpart _լինիմ_/_linim_ (“to become”), _չիք_/_čʽikʽ_ (“there is no”), and _տամ_ (“to give”).
  The auxiliaries _եմ_ and _լինիմ_ are used in the following constructions:
	* The copula with non-verbal predicates, including predicates of location.
	* Periphrastic past tenses (present form of _եմ_ + past participle, imperfect form of _եմ_ + past participle, aorist form of _լինիմ_ + past participle of the main verb).
	* Periphrastic future/subjunctive tenses (present subjunctive form of _եմ_ + past participle, present subjunctive form of _լինիմ_ + past participle, aorist subjunctive form of _լինիմ_ + past participle of the main verb).
  The auxiliary _չիք_ is used as a negated copula.
  The auxiliary _տամ_ is used to form periphrastc causative:
	* Periphrastic causative (any form of _տամ_, including periphrastic forms, + infinitve of the main verb).
 * Besides _եմ, լինիմ_ and _տամ_, the verbs _կամ_ (“to stand, exist”) and _ունիմ_ (“to have”) occasionally function as auxiliaries.


### Nominal Features

* [Number]() has two values: `Sing` and `Plur`. The following parts of speech inflect for number: [NOUN](), [PROPN](), [PRON](), as well as the finite forms of [VERB]() and [AUX](). 
  * Classical Armenian has numerous _pluralia tantum_ nouns, the plural form of which expresses a single entity or abstract notion, cf. _ապարանք_/_aparankʽ_ “palace”, _երեսք_/_ereskʽ_ “face”, _բարիք_/_barikʽ_ “goodness”, etc.
* [Case]() has seven values: `Nom`, `Acc`, `Gen`, `Dat`, `Abl`, `Ins`, `Loc`. It occurs with [NOUN](), [PROPN](), [NUM](), [PRON](), [DET](), [ADJ](), as well as with participles and verbal nouns, tagged [VERB]() or [AUX]().
* [NumType]() is used with numerals ([NUM]()) and adjectives ([ADJ]())
* [Animacy]() can be lexically expressed in [PRON](), while [Definite]() can be lexically expressed in [PRON]() and [DET]().


### Pronouns, Determiners, Quantifiers

* [PronType]() is used with pronouns ([PRON]()), determiners ([DET]()), adverbs ([ADV]()) and deictic interjections ([INTJ]()).
* [Poss]() marks possessive personal determiners (e.g. _իմ_/_im_ “my”, _իւր_/_iwr_ “his/her own”).
* [Reflex]() marks reflexive pronoun _իւր_/_iwr_ (gen.sg.) “of him/her-self” and determiner _իւր_/_iwr_ (nom.sg.), _իւրոյ_/_iwroy_ “his/her own”.
* [Person]() is lexically expressed in personal pronouns ([PRON]()). Only the first and second person pronouns are marked with the values `1` and `2`, respectively. The third person pronoun _նա_/_na_ “(s)he, it” coincides with the demonstrative _նա_/_na_ “that” and is left unmarked. The same applies to the possessive determiners.

### Verbal Features

* [VerbForm]() distinguishes five main (de)verbal forms. Although the verbal noun functions as a nominal and the past participle can be used adjectivally, they are consistently tagged [VERB]() or [AUX]().
	* Finite verb `Fin`, tagged [VERB]() or [AUX]().  
	* Infinitive `Inf`, tagged [VERB]() or [AUX]().
	* Converb `Conv`, tagged [VERB]() or [AUX]().  
	* Participle `Part`, tagged [VERB]() or [AUX]().
	* Verbal noun `Vnoun`, tagged [VERB]() or [AUX]().
* [Person]() has three values, which mark the person of the verb's subject on verbs. Classical Armenian is a pro-drop language and a personal pronoun as subject is often omitted.
* [Aspect]() has two values, `Imp` and `Perf`. The aspect is defined in purely morphological terms based on the type of the verb stem, from which a verb form is derived. The aspectual semantics expressed by either of the two types of forms may not match the formal aspect. 
* Finite verbs always have one of three values of [Mood](): `Ind`, `Sub`, or `Imp`.
* In the indicative mood, verbs always have one of the two values of [Tense](): `Pres` or `Past`, which, in combination with the aforementioned aspectual values, define the three synthetic tenses, the Present, the Aorist, and the Imperfect.
* `Sub` defines the Subjunctve mood, which is also used to express the Future and combines with the two aspectual values.
* `Imp` defines the imperative, derived from a perfective stem, and the prohibitive, derived from an imperfective stem and obligatorily combined with a prohibitive particle _մի_/_mi_.
* [Voice]() has three values, `Act`, `Pass`, and `Cau`. The values `Act` and `Pass` characterise the oppositional inflectional voice, which is expressed only in part of the verbal paradigm. Some forms, such as the present indicative forms of the a-conjugation (_գնամ_/_gnam_ “I go”) and the first plural form of the aorist indicative (_լուաք_/_luakʽ_ “we heard”), are underspecified for oppositional voice. The `Pass` value defines to a wide range of valency-decreasing alternations including the passive, middle, reflexive, etc. The value `Cau` is reserved for the morphological causative, derived with the dedicated causative suffix. Derived causatives can be marked by the inflectional voice and are then tagged as `Voice=Act,Cau` or `Voice=Cau,Pass`.
* [Polarity]() feature with its `Polarity=Neg` value applies primarily to verbs ([VERB](), [AUX]()) that can be negated using _ոչ_/_očʽ_ (with its proclitic variant _չ_=/_čʽ_=) or a prohibitive particle _մի_/_mi_. The particle _ոչ_ can also modify pronouns.

### Other Features

* The following universal features are not used in Classical Armenian: [Clusivity](), [Evident](), [Gender](), [NounClass](), [Polite]().


## Syntax

This is an overview only.

### Core Arguments, Oblique Arguments and Adjuncts

* Nominal subject (`nsubj`) is a noun phrase (possibly headed by a deverbal nominal) typically in the nominative case, without preposition. 
	* In the periphrastic past tenses, the subject of transitive verbs is typically coded by the genitive case.
	* Clausal subjects (`csubj`) are typically expressed by finate clauses, and clauses headed by infinitives or nonverbal predicates.
* Objects (`obj`) are noun phrases in the accusative, which can take the proclic determinate object marker _զ_=/_z_=.
* Secondary objects (`iobj`) are expressed by bare noun phrases in the dative.
* All other arguments and adjuncts are oblique `obl`. Arguments in the accusative that express spatial or temporal meanings are tagged as `obl` as well.
* The infinitive complement is typically labeled [`xcomp`]().
* In passive clauses:
	* the subject is labeled [`nsubj:pass`]().
	* if the agent is present, it is typically expressed by an adpositional ablative noun phrase and is labeled [`obl:agent`]().
* In causative clauses (both bare and periphrastic causative):
	* the subject is labeled with [`nsubj:caus`]() or [`csubj:caus`]().
	* The auxiliary verb in periphrastic causative is labeled [`aux:caus`]().

### Non-verbal Clauses
* The copula (_եմ_/_լինիմ_) and it's negated variant (_չիք_) are used in the following non-verbal clauses:
	* equational (_ես <b>եմ</b> Գաբրիէղ_ "I am Gabriel", Luke 1:19)
	* attributional (_նա քաղցր <b>է</b> ի վերայ չարաց_ "he is kind unto the evil", Luke 6:35; _<b>չիք</b> ինչ ծածուկ. որ ոչ յայտ լիցի_ "for nothing is secret that shall not be made manifest", Luke 8:17)
	* locative (_եւ <b>էր</b> յանապատս մինչեւ յաւր երեւելոյն նորա Իսրայեղի_ "and was in the deserts till the day of his shewing unto Israel", Luke 1:80)
	* possessive (_եւ նորա <b>էր</b> քոյր մի որում անուն էր Մարիամ_ "and she had a sister called Mary", Luke 10:39)
	* benefactory (_եւ սպանցէ զնոխազն զվասն մեղաց, որ վասն ժողովրդեանն <b>իցէ</b>_ “then he shall slaughter the goat of the sin offering, which is for the people", Lev. 16:15)
	* existential (_եւ անդ <b>էր</b> Աննա մարգարէ_ "and there was one Anna, a prophetess", Luke 2:36)

## Relations Overview
* The following relation subtypes are used in Classical Armenian:
	* [`nsubj:pass`]() for nominal subjects of passive verbs
	* [`nsubj:caus`]() for nominal subjects of causative verbs	
	* [`csubj:caus`]() for clausal subjects of causative verbs
	* [`obl:agent`]() for agents of passive verbs
	* [`aux:caus`]() for auxiliaries of periphrastic causatives
	* [`acl:relcl`]() for relative clauses

## Treebanks

There is one Classical Armenian UD treebank:

  * [UD_Classical_Armenian-CAVaL](../treebanks/xcl_caval/index.html)
