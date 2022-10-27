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
* There are five main (de)verbal forms, distinguished by the UPOS tag and the value of the VerbForm feature:
    *  Infinitive [Inf](), tagged VERB or AUX. 
    *  Finite verb [Fin](), tagged VERB or AUX. 
    *  Verbal Noun [Vnoun](), tagged VERB or AUX. 
    *  Participle [Part](), tagged VERB or AUX. 
    *  Converb [Conv](), tagged VERB or AUX. 

### Nominal Features

* Nominal words ([NOUN](),[PROPN]() and [PRON]()) have an inherent Gender feature with one of three values: Masc, Fem or Neut.
* The two main values of the Number feature are Sing and Plur. The following parts of speech inflect for number: NOUN, PROPN, PRON. 
* The Animacy features Anim and Inan are used for the Nominal words (NOUN,PROPN and PRON).  
* Case has 13 possible values: [Nom](), [Acc](), [Ins](), [Dat](),[Abl](),[Loc](),[Voc](),[Gen](),[Cmp](),[Com](),[Ben](),[All](),[Abl](). Malayalam is an agglutinating language and the spatiotemporal and/or case-like morphemes are analyzed as postpositions. The first 9 cases (Nominative to Comparative) are analysed as bound affixes and the rest (Comitative to Ablative) are analysed as postpositions. The Case feature occurs with the nominal words, i.e., [NOUN](), [PROPN](), [PRON](), [NUM]() also with nominalized verb forms.  

### Verbal Features

* Finite verbs always have one of six values of Mood: [Ind](),[Irr](),[Cnd](),[Des](),[Nec]() or [Opt]().
    * Verbs in the indicative mood always have one of three values of Tense: [Past](), [Pres]() or [Fut]().
    * Aspect has five possible values: [Hab](),[Imp](),[Perf](),[Prog](),[Iter](). 
    * Voice has two possible values: [Pass](),[Cau]().
    * Polarity has two values: [Pos]() and [Neg](). 

### Pronouns, Determiners, Quantifiers

* [PronType]() is used with pronouns [PRON]().
* [NumType]() is used with numerals [NUM]().
* [Person]() is a lexical feature of personal pronouns (PRON) and has three values,1,2 and 3. 
* [Clusivity]() distinguishes inclusive and exclusive 1st person plural pronouns.
* [Deixis]() distinguishes proximate and remote demonstratives.

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
* Bare nominal arguments (i.e., verb-licensed dependents) in the dative case are not considered core arguments. They are attached as [obl:arg]().
* Prepositional arguments (i.e., verb-licensed dependents) are not considered core arguments. They are attached as [obl:arg]().

## Relations Overview

* [advmod:emph]() for adverbials emphasizing noun phrases.
* [nsubj:pass]() for nominal subjects in passive clauses.
* [obl:arg]() for oblique arguments (to distinguish them from other oblique dependents, i.e., adjuncts).

## Treebanks

There is [1](../treebanks/ml-comparison.html) Malayalam UD treebank:

  * [Malayalam-UFAL](../treebanks/ml_ufal/index.html)
