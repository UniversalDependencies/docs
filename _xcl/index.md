---
layout: base
title:  'Classical Armenian UD'
udver: '2'
---

# UD for Classical Armenian <span class="flagspan"><img class="flag" src="../../flags/svg/AM-ARSACID.svg" /></span>

## Tokenization and Word Segmentation

* Words are generally delimited by whitespace or punctuation. No tokens in the UD Classical Armenian treebank contains whitespace.
* Most punctuation marks are attached to the preceding word and are tokenized as separate tokens.
* Words, containing “infixed” punctuation (e.g. question, exclamation, emphasis and abbreviation marks), as զիա՞րդ = զիարդ/_ziard_ + ՞ “why?”, are treated as multiword tokens and segmented to individual syntactic words.
* According to typographical rules, the following words are attached to a neighbouring word:
	* proclitic prepositions յ=/_y_=, ց=/_cʽ_= and _զ_=/_z_=
	* a proclic determinative particle զ=/_z_=
	* a proclic negation particle չ=/_čʽ_=
	* enclitic determinative particles =ս/=_s_, =դ/=_d_, =ն/=_n_ 

## Sentence splitting

* A full sentence is usually concluded by the punctuation sign _verjaket_ [ ։ ] corresponding to the English period. In case of longer sentences, the editor of a digital text may decide to split a sentence after the punctuation signs _mijaket_ [ . ], _boot_ [ ՝ ] or _storaket_ [ , ], corresponding to the English colon, semicolon, and comma, respectively.

## Morphology

### Tags

This is an overview only. For more detailed discussion and examples, see the list of [Classical Armenian POS tags](pos/index.html) and [Classical Armenian features](feat/index.html)

* Classical Armenian currently uses 16 UPOS tags; the tag [SYM]() does not occur in the UD_Classical_Armenian-CAVaL treebank.
* The complete list of Classical Armenian words, which must be tagged [PART](xcl-pos/PART) in UD, has to be worked out. At present, the tag is used restrictively and is applied to the following lexemes:
	* contrasting particle: իսկ/_isk_ “but”
	* dubitation particle: ապաքէն/_apakʻēn_ “indeed”, գուցէ/_gowcʽē_ “perhaps”
	* negation particles: ոչ/_očʽ_ (with its proclitic variant չ=/_čʽ_=) and մի/_mi_
* The tag [DET](xcl-pos/DET) is used for articles and adjectival pronouns with a determiner function. Pronominal quantifiers (which the traditional grammar includes in pronouns) are [DET](xcl-pos/DET) as well. The tag [PRON](xcl-pos/PRON) is reserved for pronouns occurring as the head of a noun phrase.
* The Classical Armenian auxiliaries (tagged [AUX](xcl-pos/AUX)) include: եմ/_em_ “to be”, its perfective counterpart լինիմ/_linim_ “to become”, չիք/_čʽikʽ_ “there is no”, and տամ/_tam_ “to give”.
  The auxiliaries եմ and լինիմ are used in the following constructions:
	* The copula with non-verbal predicates, including predicates of location.
	* Periphrastic past tenses (present form of եմ + past participle, imperfect form of եմ + past participle, aorist form of լինիմ + past participle of the main verb).
	* Periphrastic future/subjunctive tenses (present subjunctive form of եմ + past participle, present subjunctive form of լինիմ + past participle, aorist subjunctive form of լինիմ + past participle of the main verb).
* The auxiliary չիք is used as a negated copula.
* The auxiliary տամ is used to form periphrastc causative:
	* Periphrastic causative (any form of տամ, including periphrastic forms, + infinitve of the main verb).
 * Besides եմ, լինիմ, the verbs կամ (“to stand, exist”) and ունիմ (“to have”) occasionally function as auxiliaries of participial constructions.


### Nominal Features

* [Number](xcl-feat/Number) has two values: `Sing` and `Plur`. The following parts of speech inflect for number: [ADJ](xcl-pos/ADJ), [DET](xcl-pos/DET), [NOUN](xcl-pos/NOUN), [NUM](xcl-pos/NUM), [PROPN](xcl-pos/PROPN), [PRON](xcl-pos/PRON), as well as the finite forms of [VERB](xcl-pos/VERB) and [AUX](xcl-pos/AUX). 
  * Classical Armenian has numerous _pluralia tantum_ nouns, the plural form of which expresses a single entity or abstract notion, cf. ապարանք/_aparankʽ_ “palace”, երեսք/_ereskʽ_ “face”, բարիք/_barikʽ_ “goodness”, etc.
* [Case](xcl-feat/Case) has seven values: `Nom`, `Acc`, `Gen`, `Dat`, `Abl`, `Ins`, `Loc`. It occurs with [ADJ](xcl-pos/ADJ), [DET](xcl-pos/DET), [NOUN](xcl-pos/NOUN), [NUM](xcl-pos/NUM), [PROPN](xcl-pos/PROPN), [PRON](xcl-pos/PRON), as well as with participles and verbal nouns, tagged [VERB](xcl-pos/VERB) or [AUX](xcl-pos/AUX).
* [NumType](xcl-feat/NumType) is used with [NUM](xcl-pos/NUM) (`Card`, `Sets`), [ADJ](xcl-pos/ADJ) (`Ord`) and [ADV](xcl-pos/ADV) (`Mult`).
* [Animacy](xcl-feat/Animacy) (`Anim`, `Inan`) and [Definite](xcl-feat/Definite) (`Def`, `Ind`, `Spec`) can be lexically expressed in [PRON](xcl-pos/PRON) and [DET](xcl-pos/DET). A semi-grammaticalized adposition _զ_=/_z_= also takes `Def`, when it expresses the referentially prominent direct object.


### Pronouns, Determiners, Quantifiers

* Different values of [PronType](xcl-feat/PronType) (`Art`, `Dem`, `Ind`, `Int`, `Prs`, `Rcp`, `Rel`, `Tot`) are used with pronouns ([PRON](xcl-pos/PRON)), determiners ([DET](xcl-pos/DET)), adverbs ([ADV](xcl-pos/ADV)) and deictic interjections ([INTJ](xcl-pos/INTJ)).
* [Poss](xcl-feat/Poss) marks possessive personal determiners (e.g. իմ/_im_ “my”, իւր/_iwr_ “his/her own”).
* [Reflex](xcl-feat/Reflex) marks reflexive pronoun իւր/_iwr_ (gen.sg.) “of him/her-self” and determiner իւր/_iwr_ (nom.sg.), իւրոյ/_iwroy_ “his/her own”.
* [Person](xcl-feat/Person) is lexically expressed in personal pronouns and determiners. Only the first and second person pronouns are marked with the values `1` and `2`, respectively. The third person pronoun նա/_na_ “(s)he, it” coincides with the demonstrative նա/_na_ “that” and is left unmarked. The same applies to the possessive determiners.

### Verbal Features

* [VerbForm](xcl-feat/VerbForm) distinguishes five main (de)verbal forms. Although the verbal noun functions as a nominal and the past participle can be used adjectivally, they are consistently tagged [VERB](xcl-pos/VERB) or [AUX](xcl-pos/AUX).
	* Finite verb `Fin`, tagged [VERB](xcl-pos/VERB) or [AUX](xcl-pos/AUX).  
	* Infinitive `Inf`, tagged [VERB](xcl-pos/VERB) or [AUX](xcl-pos/AUX).
	* Converb `Conv`, tagged [VERB](xcl-pos/VERB) or [AUX](xcl-pos/AUX).  
	* Participle `Part`, tagged [VERB](xcl-pos/VERB) or [AUX](xcl-pos/AUX).
	* Verbal noun `Vnoun`, tagged [VERB](xcl-pos/VERB) or [AUX](xcl-pos/AUX).
* [Person](xcl-feat/Person) has three values (`1`, `2`, `3`), which mark the person of the verb's subject on verbs. Classical Armenian is a pro-drop language and a personal pronoun as subject is often omitted.
* [Aspect](xcl-feat/Aspect) has two values, `Imp` and `Perf`. The aspect is defined in purely morphological terms based on the type of the verb stem, from which a verb form is derived. The aspectual semantics expressed by either of the two types of forms may not match the formal aspect. 
* Finite verbs always have one of three values of [Mood](xcl-feat/Mood): `Ind`, `Sub`, or `Imp`.
* In the indicative mood, verbs always have one of the two values of [Tense](xcl-feat/Tense): `Pres` or `Past`, which, in combination with the aforementioned aspectual values, define the three synthetic tenses, the Present, the Aorist, and the Imperfect.
* `Sub` defines the Subjunctve mood, which is also used to express the Future and combines with the two aspectual values.
* `Imp` defines the imperative, derived from a perfective stem, and the prohibitive, derived from an imperfective stem and obligatorily combined with a prohibitive particle մի/_mi_; the prohibitive forms are tagged with the feature [Connegative](xcl-feat/Connegative).
* [Voice](xcl-feat/Voice) has two values, `Act` and `Pass`. It characterises the oppositional inflectional voice, which is expressed only in part of the verbal paradigm. Some forms, such as the present indicative forms of the a-conjugation (գնամ/_gnam_ “I go”) and the first plural form of the aorist indicative (լուաք/_luakʽ_ “we heard”), are underspecified for voice. The `Pass` value defines to a wide range of valency-decreasing alternations including the passive, middle, reflexive, etc. The morphological causative is a derivational category; the active and labile forms of the causatives are tagged as `Cau`, whereas the mediopassive have `CauPass`. Note that the active and labile forms currently remain underspecified, which awaits an improvement in the UD guidelines with respect to systems, which combine the derivational and inflectional voice marking.
* [Polarity](xcl-feat/Polarity) feature with its `Polarity=Neg` value applies to negation particles ոչ/_očʽ_ (with its proclitic variant չ=/_čʽ_=) and մի/_mi_ as well as a negated copula չիք/_čʻikʻ_ “there is no”, which has a [PRON](xcl-pos/PRON) tag.

### Other Features

* The following universal features are not used in Classical Armenian: [Clusivity](), [Evident](), [Gender](), [NounClass](), [Polite]().


## Syntax

This is an overview only.

### Core Arguments, Oblique Arguments and Adjuncts

* Nominal subject (`nsubj`) is a noun phrase (possibly headed by a deverbal nominal) typically in the nominative case, without preposition. 
	* In the periphrastic past tenses, the subject of transitive verbs is typically coded by the genitive case.
	* Clausal subjects (`csubj`) are typically expressed by finate clauses, and clauses headed by infinitives or nonverbal predicates.
* Objects (`obj`) are noun phrases in the accusative, which can take the proclic determinate object marker զ=/_z_=.
* Secondary objects (`iobj`) are expressed by bare noun phrases in the dative.
* All other arguments and adjuncts are oblique `obl`. Arguments in the accusative that express spatial or temporal meanings are tagged as `obl` as well.
* The infinitive complement is typically labeled [`xcomp`]().
* In passive clauses:
	* the subject is labeled either [`nsubj:pass`]().
	* if the agent is present, it is typically expressed by an adpositional ablative noun phrase and is labeled [`obl:agent`]().
* In causative clauses (both bare and periphrastic causative):
	* the subject is labeled with [`nsubj:caus`]() or [`csubj:caus`]().
	* The auxiliary verb in periphrastic causative is labeled [`aux:caus`]().

### Non-verbal Clauses
* The copula is used in the following non-verbal clauses:
	* equational
	* attributional
	* locative
	* possessive
	* benefactory
	* existential

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
