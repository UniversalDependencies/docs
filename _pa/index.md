---
layout: base
title:  'Punjabi UD'
udver: '2'
---

# UD for Punjabi <span class="flagspan"><img class="flag" src="../../flags/svg/PK.svg" /></span> <span class="flagspan" style="padding-left:1em"><img class="flag" src="../../flags/svg/IN.svg" /></span>

## Tokenization and Word Segmentation

* Compounds with hyphens are split.
* Form and lemma of each token is mentioned. In many cases, form and the lemma are same (including punctuations).
* Some clitics have apostrophes at the beginning and could be written merged with the previous word (e.g. 'ਚ "in"). These should be tokenized separately. However, no instance noted in this specific treebank.
* Parentheses and brackets are tokenized as punctuation and attached with punct to the nearest relevant head, often the predicate of the main clause.

## Morphology

### Universal Parts of Speech (UPOS)

* The following 15 UPOS tags are used:
  * `ADJ, ADP, ADV, AUX, CCONJ, DET, INTJ, NOUN, NUM, PART, PRON, PROPN, PUNCT, SCONJ, VERB`

### Tags

* Aspectual light verbs are tagged [VERB]() since they take full inflectional paradigms.
  * Pay special attention to ਜਾਣਾ "to go",  which is usually [VERB]() (including as a light verb) but [AUX]() if it is passivising a verb.
* Copular 'ਹੈ' is tagged AUX and used as COP with nominal or adjectival predicates, where the predicate is the root. For example 'ਇਹ ਸੀ ਅਜਗਰ ਦਾ ਬਾਹਰਲਾ ਚਿੱਤਰ।' (lemma: ਸੀ -> ਹੈ), where 'ਚਿੱਤਰ' is the root and 'ਸੀ' is COP.
* The same lemma 'ਹੈ' is tagged AUX when the main predicate is verbal.
* Negation like 'ਨਾ / ਨਹੀਂ' is tagged PART and often attaches as advmod to the predicate.


### Features

Nominal and Verbal inflections are listed in the table below:

| Universal Feature | Feature   | Observed |
|---|---|---|
| Nominal | Case     | Abl, Acc, Nom |
| Nominal | Degree | Pos |
| Nominal | Gender   | Fem, Masc |
| Nominal | Number   | Plur, Sing |
| Nominal | Person   | 1, 2, 3 |
| Nominal | Poss     | Yes |
| Nominal | PronType | Dem, Ind, Prs, Rel |
| Nominal | Reflex   | Yes |
| Verbal  | Aspect   | Imp, Perf |
| Verbal  | Mood     | Imp, Ind |
| Verbal  | Polite   | Form |
| Verbal  | Tense    | Fut, Past, Pres |
| Verbal  | VerbForm | Fin, Inf, Part |


## Syntax

### Dependency Relations

The treebank uses the following dependency relations:

| Relation type | Observed relations |
|---|---|
| Core clausal | root, nsub, obj, iobj, cop, aux, ccomp, xcomp |
| Adverbial | advcl, advmod, mark |
| Oblique | obl |
| Nominal modifiers | appos, amod, acl, nmod, nmod:poss, nummod, case, det |
| Coordination and punctuation | cc, conj, discourse, punct |
| compound | compound:lvc, compound:svc, fixed |

Core arguments and obliques:

- nsubj, obj, and iobj are used for core arguments.

Nominal modification:

- amod, nmod, nmod:poss, det, nummod,
- acl relation is used for clausal modifiers.

Adverbials and subordination:

- Word-level adverbials are related using advmod.

Complementation:

- For finite clausal complements ccomp is used and for open complements xcomp is used.

Light and serial verbs:

- Light-verb constructions are used to relate NOUN or ADJ or VERB + light verb → compound:lvc using the lexical term as head.
- Serial-verb constructions are represented using the relationship compound:svc.

* Special relations:
  * [acl:relcl]() for relative adnominal clauses. These have to have a relative pronoun in them (otherwise just [acl]()).
  * [aux:pass]() for passive auxiliary ਜਾਣਾ (marked advcl here).
  * [compound:lvc]() for noun/adjective + verb constructions.
  * [compound:svc]() for aspectual light verbs.
  * [nsubj:pass]() for passivized subjects.

## Treebanks

There are [3](../treebanks/pa-comparison.html) Punjabi UD treebanks:

  * [Punjabi-PunTB](../treebanks/pa_puntb/index.html)
  * [Punjabi-CS](../treebanks/pa_cs/index.html)
  * [Punjabi-Rang](../treebanks/pa_rang/index.html)
