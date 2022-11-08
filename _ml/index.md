---
layout: base
title:  'Malayalam UD'
udver: '2'
---

# UD for Malayalam <span class="flagspan"><img class="flag" src="../../flags/svg/IN.svg" /></span>

## Tokenization and Word Segmentation

* In general, words are delimited by whitespace characters or punctuations.
* Multiword tokens are relatively common in Malayalam. As the orthographic tokens correspond to multiple syntactic words, we systematically split them.
  For example, the coordinating clitic  -ഉം / _-um_ is analyzed as a separate syntactic word.
* In orthography sometimes the object and the verb of a sentence occur as a multiword token. For example, in the sentence പെൺകുട്ടി തന്റെ സുഹൃത്തിന് കത്തെഴുതി. /   _peṇkuṭṭi tanṟe suhr̥ttin katteḻuti_. ”The girl wrote a letter to her friend”. കത്ത് / _katt_ ”letter” and എഴുതി / _eḻuti_ ”wrote” occur as a multiword     token and hence split.
* The quotative particle or the complimentizer എന്ന് / _ĕnn_ usually occurs in a multiword token and is split to be analyzed as a separate syntactic word.
     
## Morphology

### Tags

* Malayalam uses all the 17 POS tags, including particles ([PART]()).
* The noun tag [NOUN]() is intended for common nouns only.
  Abstract nouns are also tagged `NOUN`.
  Proper nouns include the name of a specific individual, place, or object and are tagged `PROPN`.
  The nouns in Malayalam are maked for case and number. Nouns marked for gender are not frequent.
* Pronouns are tagged [PRON](). The nominal reflexive താൻ / _tān_ is also tagged `PRON`.
* The numeral ‘one’ which functions as the indefinite artcle is tagged [DET]().
  For example, ഒരു വീട് / _ŏru vīṭ_ “a house”.
  Quantifiers like ഒരുപാട് / _ŏrupāṭu_ “a lot” that act as modifiers are also tagged `DET`.
  Numerals that do not act as an attribute and can stand on their own are tagged [NUM]().
* The emphatic markers -ഏ / _-ē_ and തന്നേ / _tannē_, the coordination clitics -ഉം / _-um_ and ഓ / _-ō_, and the quotative particle എന്ന് / _ĕnn_ are tagged [PART]().
* The tag [ADJ]() covers both free adjectives, such as പഴയ / _paḻaya_ “old”,
  and derived adjectives, such as സന്തോഷകരമായ / _santoṣakaramāya_ “pleasant”.
* The tag [ADV]() covers adverbs like സങ്കടത്തോടെ / _saṅkaṭattoṭĕ_ “sadly”, തീർച്ചയായും / _tīrccayāyuṃ_ “certainly”.
* Finite and nonfinite verb forms are tagged [VERB]() or [AUX]().
* Malayalam has the following auxiliary verbs [AUX]():
  *  ആക് / _āk_ “to be” is used as a copula to denote existential and stative meanings.
  It can also function as lexical verb conveys the meanings of ‘to have’, ‘to take place’, ‘be able to’.
  *  ഉണ്ട് / _uṇṭ_ “to be” is used as a copula to denote existential and stative meanings but additionally it has a possessive meaning ‘to have’.
  * Modal auxiliaries:
    * കഴിയുക / _kaḻiyuka_ “to be able, can”
    * വേണം / _veṇaṃ_ “want”
* There are four main (de)verbal forms, distinguished by the UPOS tag and the value of the VerbForm feature:
  * Finite verb [Fin](https://universaldependencies.org/u/feat/VerbForm.html#Fin), tagged `VERB` or `AUX`.
  * Infinitive [Inf](https://universaldependencies.org/u/feat/VerbForm.html#Inf), tagged `VERB` or `AUX`.
  * Verbal noun [Vnoun](https://universaldependencies.org/u/feat/VerbForm.html#Vnoun), tagged `VERB` or `AUX`.
  * Participle [Part](https://universaldependencies.org/u/feat/VerbForm.html#Part), tagged `VERB` or `AUX`.

### Nominal Features

* The third person singular pronouns [PRON]() have an inherent Gender feature with one of three values:
  [Masc](https://universaldependencies.org/u/feat/Gender.html#Masc),
  [Fem](https://universaldependencies.org/u/feat/Gender.html#Fem) or
  [Neut](https://universaldependencies.org/u/feat/Gender.html#Neut).
* The two main values of the [Number]() feature are
  [Sing](https://universaldependencies.org/u/feat/Number.html#Sing) and
  [Plur](https://universaldependencies.org/u/feat/Number.html#Plur).
  The following parts of speech inflect for number: NOUN, PROPN, PRON.
* The [Animacy]() features
  [Anim](https://universaldependencies.org/u/feat/Animacy.html#Anim) and
  [Inan](https://universaldependencies.org/u/feat/Animacy.html#Inan) are used for Nominal words (NOUN, PROPN, and PRON).
* [Case]() has 13 possible values:
  [Nom](https://universaldependencies.org/u/feat/Case.html#Nom),
  [Acc](https://universaldependencies.org/u/feat/Case.html#Acc),
  [Ins](https://universaldependencies.org/u/feat/Case.html#Ins),
  [Dat](https://universaldependencies.org/u/feat/Case.html#Dat),
  [Abl](https://universaldependencies.org/u/feat/Case.html#Abl),
  [Loc](https://universaldependencies.org/u/feat/Case.html#Loc),
  [Voc](https://universaldependencies.org/u/feat/Case.html#Voc),
  [Gen](https://universaldependencies.org/u/feat/Case.html#Gen),
  [Cmp](https://universaldependencies.org/u/feat/Case.html#Cmp),
  [Com](https://universaldependencies.org/u/feat/Case.html#Com),
  [Ben](https://universaldependencies.org/u/feat/Case.html#Ben),
  [All](https://universaldependencies.org/u/feat/Case.html#All),
  [Abl](https://universaldependencies.org/u/feat/Case.html#Abl).
  Malayalam is an agglutinative language and the spatiotemporal and/or case-like morphemes are analyzed as postpositions.
  The Case feature occurs with the nominal words, i.e., [NOUN](), [PROPN](), [PRON](), [NUM]() and also with nominalized verb forms.

### Verbal Features

* Finite verbs always have one of eight values of [Mood]():
  [Ind](https://universaldependencies.org/u/feat/Mood.html#Ind),
  [Irr](https://universaldependencies.org/u/feat/Mood.html#Irr),
  [Cnd](https://universaldependencies.org/u/feat/Mood.html#Cnd),
  [Des](https://universaldependencies.org/u/feat/Mood.html#Des),
  [Nec](https://universaldependencies.org/u/feat/Mood.html#Nec),
  [Imp](https://universaldependencies.org/u/feat/Mood.html#Imp),
  [Prp](https://universaldependencies.org/u/feat/Mood.html#Prp) or
  [Opt](https://universaldependencies.org/u/feat/Mood.html#Opt).
* Verbs in the indicative mood always have one of three values of [Tense]():
  [Past](https://universaldependencies.org/u/feat/Tense.html#Past),
  [Pres](https://universaldependencies.org/u/feat/Tense.html#Pres) or
  [Fut](https://universaldependencies.org/u/feat/Tense.html#Fut).
* [Aspect]() has five possible values:
  [Hab](https://universaldependencies.org/u/feat/Aspect.html#Hab),
  [Imp](https://universaldependencies.org/u/feat/Aspect.html#Imp),
  [Perf](https://universaldependencies.org/u/feat/Aspect.html#Perf),
  [Prog](https://universaldependencies.org/u/feat/Aspect.html#Prog),
  [Iter](https://universaldependencies.org/u/feat/Aspect.html#Iter).
* [Voice]() has three possible values:
  [Act](https://universaldependencies.org/u/feat/Voice.html#Act),
  [Pass](https://universaldependencies.org/u/feat/Voice.html#Pass),
  [Cau](https://universaldependencies.org/u/feat/Voice.html#Cau).
* [Polarity]() has two values:
  [Pos](https://universaldependencies.org/u/feat/Polarity.html#Pos) and
  [Neg](https://universaldependencies.org/u/feat/Polarity.html#Neg).

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
* Non-nominative subjects are attached as [nsubj]().
* Adjuncts and non-core arguments are attached as [obl]().

## Relations Overview

* [nsubj:pass]() for nominal subjects in passive clauses.
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
   cop(എഴുതിയത്, ആണ്)
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
 * [cc]() for coordinating conjunctions.
   ~~~sdparse
   അവൻ പുകവലി ഉം മദ്യപാനം _ഉം നിർത്താൻ ശ്രമിച്ചു .
   nsubj(ശ്രമിച്ചു, അവൻ)
   obj(നിർത്താൻ, പുകവലി)
   cc(പുകവലി, ഉം)
   conj(പുകവലി, മദ്യപാനം)
   cc(മദ്യപാനം, _ഉം)
   xcomp(ശ്രമിച്ചു, നിർത്താൻ)
   punct(ശ്രമിച്ചു, .)
   ~~~
   'He tried to quit smoking and drinking'

## Treebanks

There is [1](../treebanks/ml-comparison.html) Malayalam UD treebank:

  * [Malayalam-UFAL](../treebanks/ml_ufal/index.html)
