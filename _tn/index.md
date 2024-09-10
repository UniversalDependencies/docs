---
layout: base
title:  'Tswana UD'
udver: '2'
---

# UD for Tswana <span class="flagspan"><img class="flag" src="../../flags/svg/TN.svg" /></span>

## Tokenization and Word Segmentation

* Words are generally delimited by whitespace or punctuation. Exceptions:
  * None at this stage
* Multiword tokens are used for idiomatic expressions like _le fa e le_ "neither...nor, none of them" in Tswana.


## Morphology

### Tags

* Tswana uses 16 universal POS tags of which 11 occur in the current data. 
* The tag [DET]() is not used currently as traditional grammars do not define determiners for Tswana.
* The tags [ADP](), [INTJ](), [NUM](), [SYM]() and [X]() are not attested in the current data as no instances of them occur, but might be used in newly annotated data if needed.
* [PRON]() is used for pronons and also for subject and object concords.
* [PART]() is used for words that are called particles in traditional grammars as well as for possessive concords (POSSC* in XPOS) and tense/aspect morphemes (MORPH in XPOS).
* [ADV]() is used for adverbs and additionally for negative markers (MNEG in XPOS).
* Currently, there are 3 auxiliaries ([AUX]()) in the Tswana data: _ne_, _be_ and _ka ke_.


### Features

* Nouns have [NounClass]() specifying Bantu classes (inherently indicative of singular or plural).
* Adjectives agree with Nouns with respect to [NounClass]().
* Tokens annotated with UPOS [PRON](), but tagged as concords in XPOS (SC*, OC*) have [NounClass]() information.
* Tokens annotated with UPOS [PART](), but tagged as concords in XPOS (POSSC*) have [NounClass]() information.
* [Polarity]() is only indicated for negative values as `Neg` and applies to morphemes tagged [ADV]() in UPOS and MNEG in XPOS.
* Other features might be added during future annotation efforts.


## Syntax

### Root
The main verb in a Tswana main clause is the [root](). If an identifying, describing or associative copulative verb is included in a sentence the complement of these verbs is the root.

### Subjects 
A nominal subject [nsubj]() is a nominal which is the syntactic subject and the proto-agent of a clause. That is, it is in the position that passes typical grammatical tests for subjecthood, and this argument is the more agentive, the doer, or the proto-agent of the clause. This nominal in Tswana may be headed by a noun or pronoun or it may also be a possessive particle phrase or a qualificative particle phrase.  

In Tswana, the subject concord (aka subject agreement morpheme) is an agreement marker which marks the relation between a subject and a verb. This concord acquires a pronominal function when the overt subject is omitted. The relation [nsubj]() is assigned in Tswana to show the relation between the verb and a preceding subject concord when there is no overt subject. For example, in Sentence 13 _O lebile eng?_ "You[SubjConc] see[Perf] what?" a [nsubj]() relation is assigned for the relation between _lebile_ "see" and the preceding subject concord _o_ "you".  

The [nsubj]() relation is also used for the nominal subject of a passive verb or verb group, even though the subject is then not typically the proto-agent argument due to valency changing operations. The subtype [nsubj:pass]() is used in this instance. For example, in Sentence 12 the subtype [nsubj:pass]() is assigned between _kwadilwe_ "write[Perf]" and _e_ "it[SubjConc]".  

### Objects
* Direct objects:  The direct object is the object that denotes the entity acted upon or which undergoes a change of state or motion (the proto-patient). The phrase acting as the direct object in Tswana may be headed by a noun or pronoun or it may also be a possessive particle phrase or a qualificative particle phrase.  
An object in Tswana can be replaced with an object concord (aka object agreement morpheme). This morpheme is included in the morphological structure of the verb. The [obj]() relation between the verb and the preceding object concord (direct) indicate the pronominal function of this concord. The subtype [obj:conc]() is also included.  
* Indirect objects:  The indirect object is the object that is indirectly affected by the process indicated in the verb. It is usually a benefactor because the process is carried out on its behalf. The phrase acting as the indirect object in Tswana may be headed by a noun or pronoun or it may also be a possessive particle phrase or a qualificative particle phrase.  
An indirect object in Tswana can be replaced with an object concord (aka object agreement morpheme). This morpheme is included in the morphological structure of the verb. The [obj]() relation between the verb and the preceding object concord (indirect) indicate the pronominal function of this concord and the subtype [iobj:conc]() is included.
	
### Auxiliary verbs [aux]()
An auxiliary verb enriches the meaning of the complementary main verb, copulative verb or another auxiliary verb phrase and can add semantic information regarding the mood, tense, aspect and/or polarity of a verb. It adds information on the progression or completion of an action. It expresses a certain type of duration of the action or it expresses the logical time at which the action is executed. For example, the auxiliary verb _ne_ indicates an action that is incomplete and continuing at a certain moment in the past.  

The [aux]() relation is used in Tswana to indicate the relation between a verb and the preceding auxiliary verb but also for the relation between main verbs such as _batla_ "want", _leka_ "try", _kgona_ "manage" when they are followed by an infinitive verb as for example in sentences 3, 4, and 11.

### Copulatives [cop]()
A [cop]() (copula) is the relation of a function word used to link a subject to a nonverbal predicate.
Tswana distinguishes three types of copulatives: identifying copulative, describing copulative and associative copulative verbs. The morphological structure of these verbs may include tense, aspect, mood and polarity information.

* Identifying copulative:  identifies a subject with regards to type, status or profession or to predicate the existence or presence of a thing
* Describing copulative:  establishes some quality, characteristic or state of a subject, or its situation or locality
* Associative copulative:  expresses the idea of the English have or be with and indicates possession or association

When the verb in Tswana is an identifying or describing copulative verb, the root of the clause is the complement of the copulative verb. These two types of copulative verbs are POS tagged as [AUX], and the [cop]() relation is used between the root and the preceding copulative verb.

In the case of an associative copulative verb, the root of the clause is the copulative verb. The associative copulative verbs in Tswana are POS tagged as [VERB], and the [obj]() relation is used between the root and the complement that follows it. This analysis differs from traditional Tswana linguistic descriptions.

### Clausal complements [ccomp]()
The clausal complement in Tswana indicates that there exists a relation between a main clause and a subordinate clause in the infinitive, subjunctive, and participial moods.

* Infinitive:  expresses a meaning of purpose, for example: _Ba nê ba ile go thusa batsadi ba bôna._ "They went to help their parents."
* Subjunctive:  expresses an action that indicates a certain goal or a result of another preceding action and the conjunction _gore_ "that, so that" is used as an introductory member to that part of the sentence that includes an action in the subjunctive mood, for example: _Ke bula lebati gore baithuti ba tsene._ "I open the door so that the students can come in."
* Participial:  expresses an action that takes place simultaneously with another action, for example _Batho ba tsamaya ba opela._ "The people walk singing."  
It can also state a stipulation or precondition for the execution of another action. Conjunctions such as _fa_ "as, while, when, if", _le fa_ "even if, although, while" and _ka_ "since" are then included as an introductory member to that part of the sentence that includes a conditional action, for example:
	
 | Tswana Example | Translation |
 | ------------- |:-------------:|
 | _Ke tla mmitsa fa a tlilê._      | "I will call him when I have arrived."   |
 | _Re tla ya gae le fa pula e na._ | "We will go home while it is raining."   |
 | _Re tla ya gae ka ba jelê._      | "We will go home since they have eaten." |

### Modifiers
* [nmod]():  This relation is used between a nominal and a modifier. In Tswana nouns can be modified with pronouns.
* [amod]():  An adjectival modifier of a noun (or pronoun) is any adjectival phrase that serves to modify the noun (or pronoun). This relation is used in Tswana between a nominal and the complement of a qualificative particle. For example in _naga e kgolo_ "big country" the qualificative particle phrase is _e kgolo_. The [amod]() relation is used to indicate the relation between _naga_ "country" and _kgolo_ "big".
* [advmod]():  An adverbial modifier of a word is a (non-clausal) adverb or adverbial phrase that serves to modify a predicate or a modifier word. In Tswana an adverb is a word which is used to modify the meaning of a verb:
	* Basic adverbs that refer to manner for example _ruri_ "really, truly"
	* Some manner adverbs include an adverbial prefix _ga_ or _se_ in front of adjectival roots, for example _gagolo_ "greatly, especially, essentially" and _sentle_ "nicely"
	* Basic adverbs that refer to time (temporal) for example _jaanong_ "now"
	* Interrogatives, for example _eng?_ "what?", _mang?_ "who (singular)", _bomang?_ "who? (plural)", _leng?_ "when?", _jang?_ "how?", _kae?_ "where?" and _gakae?_ "how many times?"
	[advmod]() is also used for negation: the negative marker is in and [advmod]() relation with the verb it modifies (analogue to English).
* [appos]():  An appositional modifier of a noun is a nominal immediately following the first noun that serves to define, modify, name, or describe that noun. It therefore adds some additional information to the content of the head in case some misunderstanding, or vagueness might occur.
	
### Obliques [obl](): 
The [obl]() relation is used for a non-core oblique argument or adjunct. The following subtypes are relevant:

* [obl:agent](): in passive constructions, e.g. _Basimane ba romilwe **ke banna**._ "The boys are being sent by the men."
* [obl:lmod](): specifies the location, e.g. _mo lebekeleng_ "in the shop"
* [obl:tmod](): temporal modifier, e.g. _maabane_ "yesterday"
	
### Case [case]()
Tswana has a rich verbal morphology, including prefixes indicating noun classes and agreement. Tswana does not show any case marking morphology that is comparable to case systems in other languages.
The case relation in Tswana is used for the relation between a nominal and a preceding particle (including a possessive particle, the instrumental particle, a locative particle, or the agentative particle).

### Coordination  [cc]()
This relation exists between a conjunct and the preceding coordinating conjunction. Examples of conjunctions that can be included between non-predicative words and word groups are _le_ "and" and _kgôtsa_ "or". Examples of conjunctions that can be included between predicative words and word groups are _mme_ "and", _e bile_ "and", _le gôna_ "also", _kgôtsa_ "or" and _mme_ "but".

### [discourse]()
This relation is used for interjections and other discourse particles and elements (which are not clearly linked to the structure of the sentence, except in an expressive way). In Tswana, this relation is also used for the interrogative particle _A_ included at the beginning of a sentence. This particle is used to change an indicative sentence to an interrogative sentence. See for example Sentence 4 _**A** o batla go tsamaya?_ "Do you want to go?" where _A_ is the interrogative particle.

### [fixed]()
The fixed relation is used in Tswana for multi-word expressions consisting of two or more words that are considered to behave like a function word. For example _le fa e le_ "neither … nor, none of them" is an idiomatic phrase functioning as a conjunction in Tswana.  

### [compound]()
The compound relation is used in Tswana for the disjunctively written TAME morphemes in the morphological structure of a verb. These morphemes include the present tense morpheme _a_, the progressive morpheme _sa_ "still", the potential morpheme _ka_ "can, may" and the future tense morpheme _tla_ "will, shall". These morphemes are written disjunctively, but linked to the following verb or auxiliary by the compound relation.
This relation is also used for go SC15 followed by a verb expressing a gerund.
	
### [mark]()
A marker is used in Tswana for conjunctions that mark a clause as subordinate to another clause. The marker is an introductory member of a clause that includes an action in the subjunctive or participial mood. For the subjunctive, the conjunction _gore_ "that, so that" is used.

For the participial, a conjunction such as _fa_ "as, while, when, if", _le fa_ "even if, although, while" and _ka_ "since" are used, for example:
	
| Tswana Example | Translation |
| ------------- |:-------------:|
| _Ke tla mmitsa **fa** a tlilê._      | "I will call him when I have arrived."   |
| _Re tla ya gae **le fa** pula e na._ | "We will go home while it is raining."   |
| _Re tla ya gae **ka** ba jelê._      | "We will go home since they have eaten." |
	
[mark]() is also used in Tswana in infinitive verbs, for example _go tlogela_ "to stop" where the marker is _go_ "to".  

[mark]() is also used in a relative clause where the qualificative particle is the marker. The qualificative particle always agrees with a specific noun class in Tswana, for example in _e kgolo_ "" the marker is the qualificative particle _e_ that indicates noun class 9 agreement.

### [expl]()
In instances where an overt subject is realised in a sentence, the subject concord is an agreement marker which marks the relation between the overt subject and the verb. In these cases we opted for the [expl]() relation for the subject concord. This relation is used in UD for phenomena such as clitic doubling (e.g. in Romance languages) or the doubling of a lexical nominal and a pronominal clitic (e.g. in Greek and Bulgarian). Even though subject concords are not the same as clitics, they behave in a similar fashion in that they are a type of "pronominal" copy without its own semantic role.
	
### Vocative [vocative]()
An addressee’s name is linked to the sentence. In Tswana the vocative consists of a personal name or a noun that refers to the second person singular (you) and the second person plural, (you and company or you and those with you). Examples:

 | Tswana Example | Translation |
 | ------------- |:-------------:       |
 | _**Pule**, tlaa kwano!_ | "Pule, come here!"   |
 | _**Bomma**, ba rome!_   | "Ladies, send them!" |


## Treebanks

There is [one](../treebanks/LCODE-comparison.html) Tswana UD treebanks:

  * [Tswana](../treebanks/tn/index.html)

