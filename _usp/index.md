---
layout: base
title:  'Uspanteko UD'
udver: '2'
---

# UD for Uspanteko <span class="flagspan"><img class="flag" src="../../flags/svg/MX.svg" /></span>

## Tokenization and Word Segmentation

* Generally, words are delimited by whitespace characters. Exceptions to this rule are documented below.
* Uspanteko adpositions are frequently formed with a multi-word token consisting of a preposition and relational noun, either with or without the relational noun bearing ergative agreement.  
Examples: _chij = ch + ij_ "to back", _chwij = ch + w +_ ij_ "to 1ERG back"  
* Demonstratives frequently fuse with the plural clitic _taq_.
Example: _tra = taq + ra_ "PL this"  
* In addition, given the high frequency of Spanish in Uspanteko data, especially in speech, we recognize the two main classes of multi-word tokens from Spanish:
  * Contractions of prepositions and definite articles.
    Example: _al = a + el_ “to the”, _del = de + el_ “of the”.
  * Certain verb forms (infinitives, imperatives, present participles) are writen together with object clitic pronouns, while with other verb forms the clitics are written as separate words.
    Examples: _convertirse = convertir + se_ “to become” (lit. “to convert itself”), _hacerlo_ “to do it”.


## Morphology


### Tags

* _NOUN_: Nouns in Uspanteko are poor in inflection, only productively inflecting for possessors via ergative agreement prefixes. A small number of nouns, mostly for humans and high animacy animals take plural suffixes `-iib'`, `-aab'`, `-b'`. We also include Relational Nouns in this category. This subclass of NOUN expresses the relation (typically) between a nominal and a predicate. They are typically similar in meaning to prepositions `on', `inside of', `next to', `with', etc. in English. They take the nominal morphology agreeing with Person and Number of the possessor, the former via ergative prefixes and the latter via the plural suffix `-aq`.

* _VERB_ : Verbs are easily distinguishable from other word classes due to their inflectional and derivational morphology. They obligatorily inflect for person and number of subject in intransitives, and for subject and object in transitives. Tense, aspect, and mood are also marked on the verb. Derivational verbal morphology includes directionals, compounding, intensification, in addition to argument structure changing operations like passive and antipassive.

* _DET_: Determiners usually precede a noun, and often come with singular / plural pairs, for example _yaj / yaq_, _man / maq_. Demonstratives include _ri_, _ra_, _li_. There is a pure plural demonstrative _taq_ which often co-occurs with other demonstratives lik _taq ra_, or even contracted as in _tra_. Other common determiners are quantifiers such as _juntir_ `all' and _jun_ `some'.

* _AUX_: Uspanteko does not have a rich system of auxiliaries or copular verbs, and so the category is restricted to a progressive auxiliary _tijin_.

* _ADV_: In addition to obvious adverbial words, we also tag as ADV the reportative evidential _cha'_ ``it's said".


### Features

* _Nominal Features_: We mark NOUNs for Number and Number of possessor (Number\[psor\]). The feature NounType is used to distinguish Relational Nouns (NounType=Rel).

* _Verbal Features_: Since Uspanteko Verbs can and typically do represent all of their arguments with morphology, we used layered features for Number and Person of the subj/obj/iobj. Tense and Aspect features are also used.


## Syntax

* _Core and non-core arguments_: Subjects of intransitive verbs, and both subjects and objects of transitive verbs, are obligatorily marked on the verb via prefixation, and the phrase that is indexed by the agreement marker is often omitted. Plural subjects are additionally indexed by a verbal enclitic _taq_ which otherwise appears as a plural determiner. This is true clitic doubling, and so we take _taq_ to bear the _expl_ relation while the nominal argument, when present, bears the usual grammatical role. There are no lexically ditransitive verbs and so no non-core arguments, including indirect objects, are marked in the verb. They are generally marked as possessors of relational nouns or via adpositions.

* _Focalization_: Both core and non-core arguments, as well as adverbials, can be focalized. In Uspanteko this is marked by a focus particle _ri'_ which can appear before or after the focused element. In order to more closely match the K'iche' (quc) UD corpus we similarly give _ri'_ the `discourse` relation when it occurs with focused nominals. In cases where there is no focused nominal or adverbial, _ri'_ receives the relation `mark` because such clauses are always subordinate and receive a temporal or purpose-clause interpretation.

* _Conjunction and parataxis_: Throughout the corpus, we frequently observe sentences containing two or more adjacent clauses without an explicit coordinating conjunction. These cases are somewhat ambiguous with respect to their syntactic relationship, as they could be analyzed as conjunction (`conj`), which typically requires an explicit conjunction but can appear without one, e.g. in a list of items, or `parataxis`. Since the difference between these two relations can be ambiguous, we established a straightforward rule to facilitate ease-of-annotation: When the two clauses share an argument, use `conj`; otherwise, use `parataxis`.

## Treebanks

There is 1 Uspanteko UD treebank:

  * [Uspanteko](../treebanks//usp_mesotree/index.html)

