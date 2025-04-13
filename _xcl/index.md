---
layout: base
title:  'Classical Armenian UD'
udver: '2'
---

# UD for Classical Armenian <span class="flagspan"><img class="flag" src="../../flags/svg/AM-ARSACID.svg" /></span>

## Tokenization and Word Segmentation

* Words are generally delimited by whitespace or punctuation. No tokens in the UD Classical Armenian treebank contain whitespace.
* Most punctuation marks are attached to the preceding word and are tokenized as separate tokens.
* Words, containing “infixed” punctuation (e.g. question, exclamation, emphasis and abbreviation marks), as զիա՞րդ = զիարդ/_ziard_ + ՞ “why?”, are treated as multiword tokens and are segmented to individual syntactic words.
* According to typographical rules, the following words are spelled together with a neighbouring word:
	* proclitic adposition յ=/_y_=, ց=/_cʽ_= and զ=/_z_=
	* proclitic negation particle չ=/_čʽ_=
	* enclitic determiners =ս/=_s_, =դ/=_d_, =ն/=_n_ 

## Sentence splitting

* A full sentence is usually concluded by the punctuation sign _verjaket_ [ ։ ] corresponding to the English period. In case of longer sentences, the editor of a digital text may decide to split a sentence after the punctuation signs _mijaket_ [ . ], _boot_ [ ՝ ] or _storaket_ [ , ], corresponding to the English colon, semicolon, and comma, respectively.

## Morphology

### Tags

This is an overview only. For more detailed discussion and examples, follow the links below.

* UD_Classical_Armenian-CAVaL currently uses 16 UPOS tags (the tag [SYM]() does not occur in the treebank): [ADJ](), [ADP](), [ADV](), [AUX](), [CCONJ](), [DET](), [INTJ](), [NOUN](), [NUM](), [PART](), [PRON](), [PROPN](), [PUNCT](), [SCONJ](), [VERB](), [X]().
* The complete list of Classical Armenian words, which must be tagged [PART]() in UD, has to be worked out. At present, the tag is used restrictively and is applied to the following lexemes:
	* contrasting particle: իսկ/_isk_ “but”
	* dubitation particle: ապաքէն/_apakʻēn_ “indeed”, գուցէ/_gowcʽē_ “perhaps”
	* negation particles: ոչ/_očʽ_ (with its proclitic variant չ=/_čʽ_=) and մի/_mi_
* The tag [DET]() is used for articles and adjectival pronouns with a determiner function. Pronominal quantifiers (which the traditional grammar includes in pronouns) are [DET]() as well. The tag [PRON]() is reserved for pronouns occurring as the head of a noun phrase.
* The Classical Armenian auxiliaries (tagged [AUX]()) include: եմ/_em_ “to be”, its perfective counterpart լինիմ/_linim_ “to become”, չիք/_čʽikʽ_ “there is no”, and տամ/_tam_ “to give”.
  The auxiliaries եմ and լինիմ are used in the following constructions:
	* The copula with non-verbal predicates, including predicates of location.
	* Periphrastic past tenses: present form of եմ + past participle; imperfect form of եմ + past participle; aorist form of լինիմ + past participle of the main verb.
	* Periphrastic future/subjunctive tenses: present subjunctive form of եմ + past participle; present subjunctive form of լինիմ + past participle; aorist subjunctive form of լինիմ + past participle of the main verb.
* The auxiliary չիք is used as a negated copula.
* The auxiliary տամ is used to form periphrastic causative:
	* Periphrastic causative: any form of տամ, including periphrastic forms, + infinitive of the main verb.


### Nominal Features

* [Number]() has two values: `Sing` and `Plur`. The following parts of speech inflect for number: [ADJ](), [DET](), [NOUN](), [NUM](), [PROPN](), [PRON](), as well as the finite forms of [VERB]() and [AUX](). 
  * Classical Armenian has numerous _pluralia tantum_ nouns, the plural form of which expresses a single entity or abstract notion, cf. ապարանք/_aparankʽ_ “palace”, երեսք/_ereskʽ_ “face”, բարիք/_barikʽ_ “goodness”, etc.
* [Case]() has seven values: `Nom`, `Acc`, `Gen`, `Dat`, `Abl`, `Ins`, `Loc`. It occurs with [ADJ](), [DET](), [NOUN](), [NUM](), [PROPN](), [PRON](), as well as with participles and verbal nouns, tagged [VERB]() or [AUX]().
* [Deixis]() has three values: `Prox` (proximal), `Med` (medial), `Remt` (remote). It occurs with [PRON](), [DET](), [ADP](), [ADV](), [INTJ]().
* [NumType]() is used with [NUM]() (`Card`, `Sets`), [ADJ]() (`Ord`) and [ADV]() (`Mult`).
* [Animacy]() (`Anim`, `Inan`) and [Definite]() (`Def`, `Ind`, `Spec`) can be lexically expressed in [PRON]() and [DET](). A semi-grammaticalized adposition _զ_=/_z_= also takes `Def`, when it expresses the referentially prominent direct object.


### Pronouns, Determiners, Quantifiers

* Different values of [PronType]() (`Art`, `Dem`, `Ind`, `Int`, `Prs`, `Rcp`, `Rel`, `Tot`) are used with [PRON](), [DET](), [ADV]() and deictic interjections ([INTJ]()).
* [Poss]() marks possessive personal determiners (e.g. իմ/_im_ “my”, իւր/_iwr_ “his/her own”).
* [Reflex]() marks reflexive pronoun իւր/_iwr_ (gen.sg.) “of him/her-self” and determiner իւր/_iwr_ (nom.sg.), իւրոյ/_iwroy_ “his/her own”.
* [Person]() is lexically expressed in personal pronouns and determiners. Only the first and second person pronouns are marked with the values `1` and `2`, respectively. The third person pronoun նա/_na_ “(s)he, it” coincides with the demonstrative նա/_na_ “that” and is left unmarked. The same applies to the possessive determiners.

### Verbal Features

* [VerbForm]() distinguishes five main (de)verbal forms. Although the verbal noun functions as a nominal and the past participle can be used adjectivally, they are consistently tagged [VERB]() or [AUX]().
	* Finite verb `Fin`, tagged [VERB]() or [AUX]().  
	* Infinitive `Inf`, tagged [VERB]() or [AUX]().
	* Converb `Conv`, tagged [VERB]() or [AUX]().  
	* Participle `Part`, tagged [VERB]() or [AUX]().
	* Verbal noun `Vnoun`, tagged [VERB]() or [AUX]().
* [Person]() has three values (`1`, `2`, `3`), which mark the person of the verb's subject on verbs. Classical Armenian is a pro-drop language and a personal pronoun as subject is often omitted.
* [Aspect]() has two values, `Imp` and `Perf`. The aspect is defined in purely morphological terms based on the type of the verb stem, from which a verb form is derived. The aspectual semantics expressed by either of the two types of forms may not match the formal aspect. 
* Finite verbs always have one of three values of [Mood](): `Ind`, `Sub`, or `Imp`.
* In the indicative mood, verbs always have one of the two values of [Tense](): `Pres` or `Past`, which, in combination with the aforementioned aspectual values, define the three synthetic tenses, the Present, the Aorist, and the Imperfect.
* `Sub` defines the subjunctive mood, which is also used to express the Future and combines with the two aspectual values.
* `Imp` defines the imperative, derived from a perfective stem, and the prohibitive, derived from an imperfective stem and obligatorily combined with a prohibitive particle մի/_mi_; the prohibitive forms are tagged with the feature [Connegative]().
* [Voice]() has two values, `Act` and `Pass`. It characterises the oppositional inflectional voice, which is expressed only in part of the verbal paradigm. Some forms, such as the present indicative forms of the a-conjugation (գնամ/_gnam_ “I go”) and the first plural form of the aorist indicative (լուաք/_luakʽ_ “we heard”), are underspecified for voice. The `Pass` value defines to a wide range of valency-decreasing alternations including the passive, middle, reflexive, etc. The morphological causative is a derivational category; the active and labile forms of the causatives are tagged as `Cau`, whereas the mediopassive have `CauPass`. Note that the active and labile forms currently remain underspecified, which awaits an improvement in the UD guidelines with respect to systems, which combine the derivational and inflectional voice marking.
* [Polarity]() feature with its `Polarity=Neg` value applies to negation particles ոչ/_očʽ_ (with its proclitic variant չ=/_čʽ_=) and մի/_mi_ as well as a negated copula չիք/_čʻikʻ_ “there is no”, which has a [PRON]() tag.

### Other Features

* The feature [Foreign]() is applied to foreign words, which are not loanwords.
* The following universal features are not used in Classical Armenian: [Clusivity](), [Evident](), [Gender](), [NounClass](), [Polite]().


## Syntax

This is an overview only. For more detailed discussion and examples, follow the links below.

### Core Arguments, Oblique Arguments and Adjuncts

* Nominal subject [nsubj]() is a noun phrase (possibly headed by a deverbal nominal) typically in the nominative case, without preposition. 
	* In the periphrastic past tenses, the subject of transitive verbs is typically coded by the genitive case and is tagged by a specialized relation [obl:arg]().
	* Clausal subjects [csubj]() are typically expressed by finite clauses, and clauses headed by infinitives or nonverbal predicates.
* Objects ([obj]()) are noun phrases in the accusative, which can take the proclitic determinate object marker զ=/_z_=.
* Secondary objects ([iobj]()) are expressed by bare noun phrases in the dative. A functionally similar prepositional construction ց=/_cʽ_= + dative is tagged as [obl:arg]().
* Clausal complements are labelled [ccomp](), whereas open clausal complements are linked with the relation [xcomp]().
* In passive clauses:
	* the subject is labelled either [nsubj:pass]() or [csubj:pass]();
	* if the agent is present, it is typically expressed by an adpositional ablative noun phrase and is labeled [obl:agent]().
* In causative clauses (both bare and periphrastic causative), the subject is labelled with [nsubj:caus]() or [csubj:caus]().
* Other non-core arguments and adjuncts are linked to the head word by the following relations: oblique ([obl]()), [vocative](), [dislocated](), [advcl]() for clausal dependents. Arguments in the accusative that express spatial or temporal meanings are tagged as `obl` as well.

### Nominal dependents

* Nominal dependents are linked to their heads with the relations [nmod](), [appos](), [nummod]() and [acl]().

### Nominal dependents

* Midifier words are linked to their heads with the relations [advmod](), [amod](), and [discourse]().
* According to UD guidelines, [determiners](xcl-pos/DET) are attached to their head with the [det]() relation.

### Function words
* The analytic verb forms are built with the help of auxiliaries [aux](). In the case of causative clauses, the auxiliary is labelled [aux:caus]().
* The copula [cop]() is used in the following non-verbal clauses: equational, attributional, locative, possessive, benefactory, existential.
* Subordinate clauses are introduced by marker words [mark]().
* Adpositions can function as case markers and are then linked to nominals by the [case]() relation.

## Other relations

* Other relation tags used in the UD_Classical_Armenian-CAVaL treebanks include: [conj](), [cc](), [compound]() and its specialized subtype [compound:redup](), [fixed](), [flat](), [orphan](), [parataxis](), [punct](), [root]().

## Treebanks

There is one Classical Armenian UD treebank:

  * [UD_Classical_Armenian-CAVaL](../treebanks/xcl_caval/index.html)
