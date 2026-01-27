---
layout: base
title:  'Marathi UD'
udver: '2'
---

# UD for Marathi <span class="flagspan"><img class="flag" src="../../flags/svg/IN.svg" /></span>

## Tokenization and Word Segmentation

* In general, words are delimited by whitespace characters. Description of exceptions follows.
* According to typographical rules, some punctuation marks (e.g., comma) are attached to a neighboring word,
  while others (e.g., the sentence-terminating danda) are not.
  We tokenize punctuation as separate tokens (words).
* Certain suffixes are treated as encliticized postpositions and segmented as separate syntactic words in the tree structure.
  The most prominent type is the possessive morpheme चा / ची / चे / च्या _cā / cī / ce / cyā_.
  Treating it as a separate word makes it easier to annotate [Gender]() and [Number](), which agrees with the possessed entity and is independent of the host word (the possessor).
  It also increases parallelism with other related languages such as Hindi, where the corresponding morpheme is written as an independent orthographic word.
  Also note that a third syntactic word is sometimes attached to the right.

## Morphology

### Tags

* Marathi uses all 17 universal POS categories, including particles ([PART]()).
  (But [SYM]() does not occur in the current data.)
* Marathi has the following auxiliary verbs ([AUX]()):
  * असणे _asaṇe_ (“to be”) is used as copula and in periphrastic tenses. The forms of नाही are treated as negative forms of असणे (they share the lemma).
  * नको _nako_ (“don't”) is used to create negative imperative (prohibitive).
  * येणे _yeṇe_ (“to come”) for the passive (with a non-finite form of the main verb).
  * जाणे _jāṇe_ (“to go”) for the passive (with a non-finite form of the main verb).
  * Modal auxiliaries:
    * शकणे _śakaṇe_ (“be able, can”)
    * पाहिजे _pāhije_ (“needed, should, ought to”)
  * There are other verbs that are semantically weak and combine with non-finite forms of other verbs but they should not be analyzed as auxiliaries in UD.
    Instead the lexically more salient verb is attached as an [xcomp]() of the less salient verb. Phase verbs, such as to begin/end, are an example:
    * लागणे _lāgaṇe_ (“to start”) combines with a non-finite form of the lexical verb; this should be analyzed as a control verb construction ([xcomp]()) rather than an auxiliary
    * देणे _deṇe_ (“to give”) combines with a non-finite form of the lexical verb; has the meaning of “let it (be)”; should be analyzed as a control verb construction ([xcomp]()) rather than an auxiliary
* There are five main (de)verbal forms, distinguished by the UPOS tag and the value of the [VerbForm]() feature:
  * Infinitive `Inf`, tagged [VERB]() or [AUX](). Two distinct forms are both annotated as infinitive and further distinguished by the language-specific feature `InfForm`:
    * `Dict` -णॆ, -आत _-ṇe, -āta_ (the citation/dictionary form is _-ṇe_)
    * `Incp` -ऊ _-ū_
  * Finite verb `Fin`, tagged [VERB]() or [AUX]().
  * Supine `Sup`, tagged [VERB]() or [AUX]().
  * Participle `Part`, tagged [VERB]() or [AUX]().
  * Converb `Conv`, tagged [VERB]() or [AUX]().

### Nominal Features

* Nominal words ([NOUN](), [PROPN]() and [PRON]()) have an inherent [Gender]() feature with one of three values: `Masc`, `Fem` or `Neut`.
  * The following parts of speech inflect for `Gender` and `Animacy` because they must agree with nouns: [ADJ](), [DET](),
    [VERB](), [AUX]().
* The two main values of the [Number]() feature are `Sing` and `Plur`. The following parts of speech inflect for number:
  [NOUN](), [PROPN](), [PRON](), [ADJ](), [DET](), [VERB](), [AUX](), marginally [ADP]().
* [Case]() has 10 possible values: `Nom`, `Acc`, `Ins`, `Dat`, `Abl`, `Loc`, `Voc`, `Com`, `Erg`, `Abs`.
  The first seven values (nominative to vocative) correspond to cases traditionally distinguished and ordered this way in the grammar of Sanskrit and its descendant languages.
  Only the “sixth case” (possessive/genitive) is missing because its morpheme is treated as a separate syntactic word (postposition).
  On the other hand some additional morphological cases are distinguished: the comitative (suffix -शी _-śī_) and the ergative (suffix -ने _-ne_).
  Finally, the label `Abs` is used for the bare stem that occurs in multiword tokens after cutting off the possessive postposition.
  The `Case` feature occurs with the nominal words, i.e., [NOUN](), [PROPN](), [PRON](), [ADJ](), [DET](), [NUM](), also with nominally used [VERB]().

### Verbal Features

* Finite verbs always have one of four values of [Mood](): `Ind`, `Imp`, `Sub`, or `Des`.
* Verbs in the indicative mood always have one of three values of [Tense](): `Past`, `Pres` or `Fut`.
* [Aspect]() has four possible values: `Hab`, `Imp`, `Perf`, `Prosp`.
* [Voice]() only occurs with morphological causatives: `Cau`.
* [Polarity]() has two values, `Pos` and `Neg`, and applies only to the auxiliaries ([AUX]()) असणे _asaṇe_ (“to be”) (both positive and negative forms)
  and नको _nako_ (“don't”) (only negative forms).

### Pronouns, Determiners, Quantifiers

* [PronType]() is used with pronouns ([PRON]()), determiners ([DET]()) and adverbs ([ADV]()).
* [NumType]() is used with numerals ([NUM]()) and adjectives ([ADJ]()).
* [Person]() is a lexical feature of personal pronouns ([PRON]()) and has three values, `1`, `2` and `3`.
  Note however, that the third person pronouns overlap with demonstratives.
  * As a cross-reference to subject, person is also marked on finite verbs ([VERB](), [AUX]()).
* [Clusivity]() distinguishes inclusive and exclusive 1st person plural pronouns.
* [Deixis]() distinguishes proximate and remote demonstratives.

## Syntax

This is an overview only. For more detailed discussion and examples, see the list of [Marathi relations](dep/index.html).

### Core Arguments, Oblique Arguments and Adjuncts

* Like in other Indo-Aryan languages, Marathi shows split ergativity. In present tense, the nominal subject ([nsubj]())
  is a bare noun phrase in the nominative case, without preposition, and the verb cross-references its person and number.
  However, for transitive verbs in the past tense, the subject (actor) is in the ergative case, and the verb cross-references
  the person and number of the object, which is in the nominative form.
  * For some experiencing predicates, dative noun phrases may be marked as non-canonical subjects.
  * A subordinate clause may serve as the subject and is labeled `csubj`.
* Direct objects are bare noun phrases in accusative or nominative.
* Indirect objects are bare noun phrases in dative.
* In passive clauses, the subject is labeled with [nsubj:pass]() or [csubj:pass](), respectively.
  * The auxiliary verb in periphrastic passive is labeled [aux:pass]().

### Relations Overview

* The following relation subtypes are used in Marathi:
  * [nsubj:pass]() for nominal subjects of passive verbs
  * [csubj:pass]() for clausal subjects of passive verbs
  * [aux:pass]() for passive auxiliaries
  * [cop:own]() for copulas in possessive-existential clauses
  * [acl:relcl]() for relative clauses
  * [compound:lvc]() for light verb constructions
  * [compound:svc]() for serial verb constructions
  * [compound:redup]() for reduplications
  * [nmod:poss]() for possessive/genitive modifiers
* The following relation types are not used in Marathi at all:
  [expl](), [clf]()

## Treebanks

There is [1](../treebanks/mr-comparison.html) Marathi UD treebank:

  * [Marathi-UFAL](../treebanks/mr_ufal/index.html)
