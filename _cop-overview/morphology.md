---
layout: base
title:  'Morphology'
permalink: cop/overview/morphology.html
---

# Morphology

**Universal Part of Speech Tags**

In keeping with other Universal Dependency treebanks, the Coptic dependency treebank also offers a mapping to the Universal Part of Speech tag set proposed in Petrov et al. (2012) and developed further into the version currently adopted by the UD project. However, unlike the syntactic annotation scheme, which we offer as the primary annotation guidelines for Coptic syntax, universal POS tags are very limited in their coarseness, and in many cases do not map well onto Coptic grammar. We therefore recommend the use of the Coptic specific Scriptorium tag set whenever possible. Below we list the mapping from Coptic Scriptorium to Universal POS tags, with some additional notes at the end.

|Coptic Scriptorium | Universal Tags|
|--------------------- |:---------------------|
|AAOR  | AUX | 
|ACAUS | AUX |
|ACOND | SCONJ |
|ACONJ | AUX |
|ADV | ADV |
|AFUTCONJ | AUX |
|AJUS | AUX |
|ALIM | SCONJ |
|ANEGAOR | AUX |
|ANEGJUS | AUX |
|ANEGOPT | AUX |
|ANEGPST | AUX |
|ANY | AUX |
|AOPT | AUX |
|APREC | SCONJ |
|APST | AUX |
|ART | DET |
|CCIRC | SCONJ |
|CCOND | SCONJ |
|CFOC | PART |
|CONJ | CONJ |
|COP | PART |
|CPRET | AUX |
|CREL | SCONJ |
|EXIST | VERB |
|FM | X |
|FUT | AUX |
|IMOD | ADV |
|N | NOUN |
|NEG | ADV |
|NOUN | NOUN |
|NPROP | PROPN |
|NUM | NUM |
|PDEM | DET |
|PINT | PRON |
|PPERI | PRON |
|PPERO | PRON |
|PPERS | PRON |
|PPOS | DET |
|PREP | ADP |
|PTC | PART |
|PUNCT | PUNCT |
|UNKNOWN | X |
|V | VERB |
|VBD | VERB |
|VIMP | VERB |
|VSTAT | VERB |

**Notes**

The Universal POS tags do not map well onto Coptic tags in several cases; in all instances, the attempt has been made to choose the nearest category, especially with syntactic function in mind. The objective is to create dependency trees that connect similar categories to those of other languages. 

Most tripartite conjugation bases have been mapped to either auxiliaries (`AUX`), if they are main clause conjugations (past auxiliary APST, aorist AAOR, etc.) or not the main conjugation morpheme (e.g. future marker FUT, which may join a durative conjugation or irrealis preterit). For the subordinate conjugations (APREC, ALIM), the universal tag `SCONJ` (subordinating conjunction) is used.

The category IMOD is cast as a form of `ADV`. While the alternatives of `ADP` (adposition) or `PART` (particle) are semantically appealing, the mapping to `ADV` best represents their sentential function and parallels the dependency label advmod. Note that this results in some adverbs carrying determiners, which is rather odd in terms of underlying categories for the syntax trees. It is perhaps similar to some extent to situations with the Stanford Typed label npadvmod, with the distinction that Coptic IMODs only attach to pronouns, never nouns.

The existential predicates (EXIST) have been mapped as `VERB`, whereas the copula (COP) is mapped to `PTC`, since unlike in the case of existence, it does not contain the actual predicate, and is also absent in the interlocutive patterns. 

Finally the converters have been treated similarly to conjugation bases, although they co-occur with the bases. Subordinate converters (CCIRC, CREL) are treated as `SCONJ`, while (potentially) main clause converters (CFOC, CPRET) are tagged as `AUX`. In all cases, we stress that these are not ideal tag assignments, but ones that aim to stay closest to the limited universal tag set’s behavior. For all new projects we recommend using Scriptorium tags and converting automatically to universal tags if necessary.
