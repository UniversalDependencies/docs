---
layout: base
title:  'Malayalam UD'
udver: '2'
---

# UD for Malayalam <span class="flagspan"><img class="flag" src="../../flags/svg/IN.svg" /></span>

## Tokenization and Word Segmentation

* In general, words are delimited by whitespace characters or punctuations. Description of exceptions follows.
* Multiword tokens are relatively common in Malayalam. As the orthographic tokens correspond to multiple syntactic words, we systematically split them. For example, the coordinating clitic  -ഉം /-um is analyzed as a separate syntactic word. 

## Morphology

### Tags

* Malayalam uses all the 17 POS tags, including particles ([PART]()). 
* The noun tag [NOUN]() is intended for common nouns only. The abstract nouns are also marked NOUN. The proper nouns include the name of a specific individual, place, or object and are tagged PROPN. The nouns in Malayalam are maked for case and number. Nouns marked for gender are not frequent. 
* The pronouns are tagged [PRON](). The nominal reflexive താൻ / tān is also tagged PRON.  
* The numerals like ‘one’ which functions as the indefinite artcle is covered by [DET](). For example, ഒരു വീട് / ŏru vīṭ  “a house” . The quantifiers like ഒരുപാട് / ŏrupāṭu “a lot” that act as modifiers are also tagged DET. Numerals that do not act as an attribute and can stand on its own are tagged [NUM](). 
* The emphatic markers -ഏ / -ē and തന്നേ / tannē, the interrogative markers – ഓ / -ō and -ഏ / -ē in yes-no questions, the coordination clitics -ഉം / -um and – ഓ / -ō, and the quotative particle എന്ന് / ĕnn are tagged [PART]().
* The free പഴയ / paḻaya “old” and derived adjectives സന്തോഷകരമായ / santoṣakaramāya “pleasant” are covered by the tag [ADJ](). 
* Adverbs like സങ്കടത്തോടെ / saṅkaṭattoṭĕ “sadly” , തീർച്ചയായും / tīrccayāyuṃ “certainly” are tagged [ADV](). 
* Finite and nonfinite verb forms are tagged VERB.
* Malayalam has the following auxiliary verbs [AUX](): 
    *  ആക് / āk “to be” is used as a copula to denote existential and stative meanings. It can also function as lexical verb conveys the meanings of ‘to have’, ‘to take place’, ‘be able to’. 
    *  ഉണ്ട് / uṇṭ “to be” is used as a copula to denote existential and stative meanings but additionally it has a possessive meaning ‘to have’. 
    *  Modal auxiliaries:
            * കഴിയുക / kaḻiyuka “to be able, can”
            * വേണം / veṇaṃ “want”
* There are four main (de)verbal forms, distinguished by the UPOS tag and the value of the VerbForm feature:
   * Infinitive [Inf](https://universaldependencies.org/u/feat/VerbForm.html#Inf), tagged VERB or AUX. 
   * Finite Verb [Fin](https://universaldependencies.org/u/feat/VerbForm.html#Fin), tagged VERB or AUX.
   * Verbal Noun [Vnoun](https://universaldependencies.org/u/feat/VerbForm.html#Vnoun), tagged VERB or AUX.
   * Participle [PART](https://universaldependencies.org/u/feat/VerbForm.html#Part), tagged VERB or AUX. 

### Nominal Features

* Nominal words ([NOUN](),[PROPN]() and [PRON]()) have an inherent Gender feature with one of three values: Masc, Fem or Neut.
* The two main values of the [Number]() feature are [Sing](https://universaldependencies.org/u/feat/Number.html#Sing) and [Plur](https://universaldependencies.org/u/feat/Number.html#plur-plural-number). The following parts of speech inflect for number: NOUN, PROPN, PRON. 
* The [Animacy]() features [Anim](https://universaldependencies.org/u/feat/Animacy.html#Anim) and [Inan](https://universaldependencies.org/u/feat/Animacy.html#Inan) are used for Nominal words (NOUN, PROPN, and PRON).  
* [Case]() has 13 possible values: [Nom](https://universaldependencies.org/u/feat/Case.html#nom-nominative--direct), [Acc](https://universaldependencies.org/u/feat/Case.html#Acc), [Ins](https://universaldependencies.org/u/feat/Case.html#Ins), [Dat](https://universaldependencies.org/u/feat/Case.html#Dat), [Abl](https://universaldependencies.org/u/feat/Case.html#Abl), [Loc](https://universaldependencies.org/u/feat/Case.html#Loc), [Voc](https://universaldependencies.org/u/feat/Case.html#Voc), [Gen](https://universaldependencies.org/u/feat/Case.html#Gen), [Cmp](https://universaldependencies.org/u/feat/Case.html#Cmp), [Com](https://universaldependencies.org/u/feat/Case.html#Com), [Ben](https://universaldependencies.org/u/feat/Case.html#Ben), [All](https://universaldependencies.org/u/feat/Case.html#All), [Abl](https://universaldependencies.org/u/feat/Case.html#Abl). Malayalam is an agglutinative language and the spatiotemporal and/or case-like morphemes are analyzed as postpositions. The Case feature occurs with the nominal words, i.e., [NOUN](), [PROPN](), [PRON](), [NUM]() and also with nominalized verb forms.  

### Verbal Features
* Finite verbs always have one of eight values of [Mood](): [Ind](https://universaldependencies.org/u/feat/Mood.html#Ind), [Irr](https://universaldependencies.org/u/feat/Mood.html#Irr), [Cnd](https://universaldependencies.org/u/feat/Mood.html#Cnd), [Des](https://universaldependencies.org/u/feat/Mood.html#Des), [Nec](https://universaldependencies.org/u/feat/Mood.html#Nec),[Imp](https://universaldependencies.org/u/feat/Mood.html#Imp), [Prp](https://universaldependencies.org/u/feat/Mood.html#Prp) or [Opt](https://universaldependencies.org/u/feat/Mood.html#Opt).
   * Verbs in the indicative mood always have one of three values of [Tense](): [Past](https://universaldependencies.org/u/feat/Tense.html#Past), [Pres](https://universaldependencies.org/u/feat/Tense.html#Pres) or [Fut](https://universaldependencies.org/u/feat/Tense.html#fut-future-tense).
   * [Aspect]() has five possible values: [Hab](https://universaldependencies.org/u/feat/Aspect.html#Hab), [Imp](https://universaldependencies.org/u/feat/Aspect.html#Imp), [Perf](https://universaldependencies.org/u/feat/Aspect.html#Perf), [Prog](https://universaldependencies.org/u/feat/Aspect.html#prog-progressive-aspect), [Iter](https://universaldependencies.org/u/feat/Aspect.html#iter-iterative--frequentative-aspect).
   * [Voice]() has three possible values: [Act](https://universaldependencies.org/u/feat/Voice.html#Act), [Pass](https://universaldependencies.org/u/feat/Voice.html#pass-passive-or-patient-focus-voice), [Cau](https://universaldependencies.org/u/feat/Voice.html#cau-causative-voice).
   * [Polarity]() has two values: [Pos](https://universaldependencies.org/u/feat/Polarity.html#Pos) and [Neg](https://universaldependencies.org/u/feat/Polarity.html#neg-negative).

### Pronouns, Determiners, Quantifiers

* [PronType]() is used with pronouns [PRON]().
* [NumType]() is used with numerals [NUM]().
* [Person]() is a lexical feature of personal pronouns (PRON) and has three values,1,2 and 3. 
* [Clusivity]() distinguishes inclusive and exclusive 1st person plural pronouns.
* [Deixis]() distinguishes proximate and remote demonstratives and 3rd person singular and plural pronouns.

## Syntax

### Core Arguments, Oblique Arguments and Adjuncts

* Malayalam is a verb-final language; both SOV and OSV orders are possible.
* Core arguments are marked by the morphological cases nominative (subject) and accusative (object). Core arguments are bare noun phrases without postpositions.
* Subjects have the following characteristics:
    * Case marking: Subjects occur in nominative case without adpositions.
    * Passivization: Subjects are suppressed when verbs are passivized.
* Objects have the following characteristics:
    * Case marking: Objects occur in accusative case without adpositions.
    * Passivization: Objects become (non-expletive) subjects when verbs are passivized.
* Bare nominal arguments (i.e., verb-licensed dependents) in the dative case are considered as non-nominative subjects. They are attached as [nsubj]().
* Prepositional arguments (i.e., verb-licensed dependents) are not considered core arguments. They are attached as [obl:arg]().

## Relations Overview

* [nsubj:pass]() for nominal subjects in passive clauses.
* [obl:arg]() for oblique arguments (to distinguish them from other oblique dependents, i.e., adjuncts).
* [nmod:poss]() for possessive adjectives. 
   ~~~sdparse
   പെൺകുട്ടി തന്റെ സുഹൃത്തിന് കത്ത് എഴുതി .
   nsubj(എഴുതി, പെൺകുട്ടി)
   nmod:poss(സുഹൃത്തിന്, തന്റെ)
   obl(എഴുതി, സുഹൃത്തിന്)
   obj(എഴുതി, കത്ത്)
   punct(എഴുതി, .)
   ~~~
   'The girl wrote a letter to her friend'
* [mark]() for the quotative particle introducing a finite clause subordinate to another clause.
   ~~~sdparse
   ആര് ആണ് എഴുതിയത് എന്ന് അവർക്ക് അറിയില്ല .
   nsubj(എഴുതിയത്, ആര്)
   aux(എഴുതിയത്, ആണ്)
   ccomp(അറിയില്ല, എഴുതിയത്)
   mark(എഴുതിയത്, എന്ന്)
   obl(അറിയില്ല, അവർക്ക്)
   punct(അറിയില്ല, .)
   ~~~
   'They don't know who wrote it'
 * [cop]() for the copular or the non-verbal predicates.
   ~~~sdparse
   നിങ്ങൾ ഒരു വിദ്യാർത്ഥി ആണോ ?
   nsubj(വിദ്യാർത്ഥി, നിങ്ങൾ)
   det(വിദ്യാർത്ഥി, ഒരു)
   cop(വിദ്യാർത്ഥി, ആണോ)
   punct(വിദ്യാർത്ഥി, ?)
   ~~~
   'Are you a student?'
   
## Treebanks

There is [1](../treebanks/ml-comparison.html) Malayalam UD treebank:

  * [Malayalam-UFAL](../treebanks/ml_ufal/index.html)
