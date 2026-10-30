---
layout: base
title:  'Seri UD'
udver: '2'
---

# UD for Seri  <span class="flagspan"><img class="flag" src="../../flags/svg/MX.svg" /></span>

## Tokenization and Word Segmentation

* Words are delimited by whitespace characters. Differences between the dataset annotated here and other materials is noted below.
* In previous work, clitics had not been orthographically separated from their phonological host. Here, however, we follow the convention of the underlying dataset and clitics are separated from their host by whitespace:
Examples: _hin yooho_ = 1S.DO:RLYO:see "She/he/it saw me", _cpanzx iha_ = SBJ.NMLZ:run DCL "She/he/it is running"



## Morphology


### Tags

* _NOUN_: Nouns are unmarked for case. They are generally distinguished by occurring with determiners, which bear plural marking. Number is generally unmarked on nouns, with the exception of kinship terms (_azcz_ "his younger brother" _azcal_ "his younger brothers") and a limited number of high-frequency non-kinship nouns that bear suppletive plural forms (_ziix_ "thing" _xiica_ "things"). We also include Relational Nouns in this category. This subclass of nouns expresses a spatial or temporal relation to the predicate. They are typically similar in meaning to prepositions `on', `inside of', `next to', `with', etc. in English. They take the nominal morphology agreeing with the Person and Number of the possessor. Most verbs in Seri can be nominalized and we annotate them as nouns if they co-occur with determiners and bear nominal morphology.

* _VERB_ : Verbs are easily distinguishable from other word classes due to their inflectional and derivational morphology. They obligatorily inflect in person and number with the subject of intransitive clauses. Different subject agreement forms are used in transitive clauses. Argument agreement is always expressed by prefixes. These prefixes do not generally mark object agreement, with the exception of _i-_ marking third-person subject third-person object agreement. Mood and aspect are marked directly on the verb as prefixes following subject/object agreement. Tense, however, is marked by independent Tense auxiliaries. Ditransitives are marked on the verb by the word-initial morpheme _cö_. In some cases, the indirect object can be promoted to direct object.

* _DET_: Determiners follow the noun they modify. They can distinguish number and properties of the referent, including spatial orientation (e.g., _hipcom_ with horizontally oriented referents). The plural definite article is _coi_.The indefinite article _pac_ occurs with plural or mass nouns, and the indefinite article _zo_ occurs with singular nouns.

* _AUX_: We use this tag to include declarative markers and auxiliaries expressing TAM information. They generally occur clause-finally following the lexical predicate. For example, the declarative marker _aha_ is found after finite irrealis forms, while _caha_ occurs with future nominalized predicates. Interrogative auxiliaries (e.g., _haaya_) are also included in this category.

* _ADV_: Adverbs precede the expression they modify and are attached due it via the `advmod` relation. In addition to obvious adverbial words, we also tag as ADV a number of words that are sometimes referred to as Delimiters in Seri, such as _oo_. This word follows the modified expression, does not have any obvious meaning on its own, and its primary function is to restrict the scope of another adverb it co-occurs with. 


### Features

* _Nominal Features_:

* _Verbal Features_: 


## Syntax

* _Core and non-core arguments_: Subjects of intransitive verbs, and both subjects and objects of transitive verbs, are obligatorily marked on the verb via prefixation, and the phrase that is indexed by the agreement marker is often omitted. In ditransitive verbs, only the subject and indirect object prefixes can appear, unless the direct object has the 3rd person and is plural. Non-core arguments are never marked in the verb. They include relational nouns, or can be introduced by a Spanish preposition.

* _Nominalization_: Noun modification is often achieved by internally-headed nominalized relative clause formation. All arguments can be relativized, including the subject, direct and indirect objects, and the event denoted by the predicate. The noun bearing the relativized argument is analyzed as the head of the relative construction (`acl`). These nouns are analyzed as bearing the appropriate relation to the nominalized verb's argument structure (e.g., `obj`).

* _Clause chaining and switch-reference marking_: Adverbial clauses, marked by the `advcl` relation, may form same-subject or different-subject chains. Same-subject switch reference is unmarked. Different-subject switch reference is marked clause finally by _ma_ in dependent realis clauses and by _ta_ after dependent irrealis clauses. These two DS markers are tagged as SCONJ and bear the `mark` relation to the verb of their respective clauses.

* _Conjunction and parataxis_: Throughout the corpus, we frequently observe sentences containing two or more adjacent clauses without an explicit coordinating conjunction. These cases are somewhat ambiguous with respect to their syntactic relationship, as they could be analyzed as conjunction (`conj`), which typically requires an explicit conjunction but can appear without one, e.g. in a list of items, or `parataxis`. Since the difference between these two relations can be ambiguous, we established a straightforward rule to facilitate ease-of-annotation: When the two clauses share an argument, use `conj`; otherwise, use `parataxis`.

## Treebanks

There is 1 Seri UD treebank:

  * [Seri-ITML](../treebanks/sei_itml/index.html)
