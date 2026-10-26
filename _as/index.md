---
layout: base
title:  'Assamese UD'
udver: '2'
---

# UD for Assamese <span class="flagspan"><img class="flag" src="../../flags/svg/IN.svg" /></span>

## Tokenization and Word Segmentation

- Tokens/words are delimited by whitespaces or punctuations.
- Form and lemma of each token is mentioned. In many cases, form and the lemma are same.
- Lemma for a punctuation is the form itself.
- Reduplication is tokenized as two words and linked by compound:redup.

## Morphology

### Universal Parts of Speech (UPOS)

- In this Assamese treebank, standard UD v2 UPOS tag set consisting of 17 categories is followed of which, 15 UPOS tags are used. Tags observed in Assamese-AiW treebank are:
  - *ADJ, ADP, ADV, AUX, CCONJ, DET, INTJ, NOUN, NUM, PART, PRON, PROPN, PUNCT, SCONJ, VERB*
  - *SYM and X did not occur*
- Postpositions such as লৈ, লগত, পৰা, etc., are separate **ADP** tokens and are attached to the nominal head via case.
- Particles such as negation ন- or না-, questions নে or নেকি, focus words like হে, etc., are *PART* and typically attach as *neg* or *discourse*.
- The tag **PRON** is used for all types of pronouns like তাই meaning *she*, মই meaning *I*, সিহঁত meaning *they*, or in cases like, কোনো meaning *anyone*.
- **PROPN** tag is used for names, e.g., এলিচ.
- The tag **DET** is used in Assamese mostly to quantify a *noun*, for expressing quantity such as এই meaning *this*, কিমান meaning *how much*, একো meaning *any*, কিছুমান meaning *some* are a few examples.
- **NUM** tag is mostly used for order or to express absolute quantity like এটা meaning *one*, চাৰি meaning *four* (cardinal), এশাৰী meaning *one row*.
- For **AUX**, in Assamese the following rules are followed:
  - **Must mark TAMVE** (tense/aspect/mood/voice/(evidentiality)) of which in this treebank only tense, mood and aspect are marked for most of the sentences.
  - **Must** attach to the lexical predicate with *aux*.
  - **Must not** introduce lexical meaning or take its own arguments.
  - **Exception:** In **copular** clauses, AUX attaches with **cop** to a non-verbal predicate like mostly NOUN or in some cases ADJ or ADV, and not to a verb.
  - **Not part of LVC/SVC** compound constructions.
  - It is **important** to note that, if the AUX token is deleted, only TAMVE properties are lost, but the core meaning remains.
  - Examples of **AUX** are আছে meaning *is*, আছিল meaning *was*, থাকিল meaning *was, but more like kept going*, হৈছে meaning *has been*.
  - Some examples of words that are **not AUX** but are confusing, are লাগিব, লাগে, পাৰিব. Another important example is গৈ meaning *to go* or আহি meaning *to come* + verb, where these act as compound:svc to the verb.

### Features

Nominal and Verbal inflections are listed in the table below:

| Universal Feature | Feature   | Observed |
|---|---|---|
| Nominal | Case     | Nom, Acc/Dat like -ক -*k*, in most cases, Gen like -ৰ -*or*, Loc like -ত -*t*, Abl like -পৰা -*pora*, Erg like -ে -*e*, All like -লৈ -*loi* |
| Nominal | Number   | Sing, Plur |
| Nominal | Gender   | Fem, Mas |
| Nominal | Person   | 1, 2, 3 |
| Nominal | Definite | Def |
| Nominal | PronType | Prs, Ind, Int, Dem, Tot |
| Verbal  | VerbForm | Fin, Part, Conv, Inf, Vnoun |
| Verbal  | Tense    | Past, Pres, Fut |
| Verbal  | Polarity | Neg |
| Verbal  | Mood     | Ind, Imp |
| Verbal  | Aspect   | Perf, Prog |
| Adposition |  | AdpType is Post for postpositions |

Table-1: shows the inflectional features nominal and verbal, and the values of these features observed in the treebank corpus.

## Syntax

### Dependency Relations

Out of all the Universal Dependencies v2 relations available, this treebank uses the following primary and subtype dependency relationships for annotating the treebank:

| Relation type | Observed relations |
|---|---|
| Core clausal | root, nsub, obj, iobj, cop, aux, ccomp, xcomp |
| Adverbial | advcl, advmod, mark |
| Oblique | obl |
| Nominal modifiers | appos, amod, acl, nmod, nmod:poss, nummod, case, det |
| Coordination and punctuation | cc, conj, parataxis, discourse, punct, vocative |
| compound | compound:lvc, compound:svc, compound:redup, compound:nummod, fixed |

Table-2: shows the different dependency relationships observed during parsing Assamese sentences.

Core arguments and obliques:

- nsubj, obj, and iobj are used for core arguments.
- Used obl for postposition-marked dependents and the ADP attaches with case.

Nominal modification:

- amod, nmod, nmod:poss, det, nummod,
- acl relation is used for clausal modifiers.

Adverbials and subordination:

- Word-level adverbials are related using advmod.
- Clausal adverbials are related using advcl with the subordinator marked using mark like যদি meaning *if*, যেতিয়া meaning *when*, যাতে meaning *so that*.
- Converbs use advcl.

Complementation:

- For finite clausal complements ccomp is used and for open complements xcomp is used.

Coordination:

- conj is used with cc for examples like আৰু meaning *and*, বা meaning *or*, কিন্তু meaning *but*.

Light and serial verbs:

- Light-verb constructions are used to relate NOUN or ADJ + light verb → compound:lvc using the lexical term as head.
- Serial-verb constructions are represented using the relationship compound:svc.

Reduplication:

- Reduplication is very commonly used in the Assamese language to magnify certain situations.
- compound:redup relationship is used to signify the reduplication.
- Last token is considered as head and the former token is related using compound:redup.

## Treebanks

Corpus Annotated by Kaushik Sengupta
