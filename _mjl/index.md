---
layout: base
title:  'Mandyali UD'
udver: '2'
---

# UD for Mandyali <span class="flagspan"><img class="flag" src="../../flags/svg/IN.svg" /></span>

## Tokenization and Word Segmentation

In Mandyali, words are generally separated by whitespace.

* All punctuation marks (such as commas, question marks, and the danda "।") are treated as independent tokens.
* Particles and discourse markers (e.g., bhala) are tokenized separately.
* Subordinators (e.g., je) are also treated as independent tokens.

## Morphology

### Tags

• Mandyali uses the full set of Universal POS tags, including:
  NOUN, VERB, PRON, ADJ, ADV, AUX, ADP, CCONJ, SCONJ, PART, INTJ, etc.

* Observations from the data:
*	भला → PART (discourse marker)
*	जे → SCONJ
*	देखुं, जाउंआ, पाईरी → VERB

Auxiliary Verbs (AUX)

*	Mandyali employs auxiliary verbs to express tense, aspect, and voice:
*	• है / था → copula and tense marking
* रह → progressive aspect
* कर → habitual constructions
* जा → passive constructions

Note:

The example sentence does not contain an auxiliary verb, indicating that bare verb constructions are also common in Mandyali
Modal Auxiliaries

*	• सक → ability
* पौणा → manage
* चाहिदा → necessity / obligation
* हो → obligation
* पड़ → strong necessity
Phase Verbs
*	• लग → beginning of an action
* चुक → completion of an action

In the current Mandyali data, certain verbs are treated as auxiliaries, including those that frequently occur in compound verb constructions as semantically less prominent elements. However, since compound verbs in Mandyali do not represent periphrastic tense, aspect, or voice formations in the strict UD sense, such verbs do not fully conform to the standard UD definition of auxiliaries. Therefore, these verbs are better analyzed as light verbs rather than true auxiliaries, and their treatment may be revised in future versions of the annotation scheme.
The following verbs are commonly used as semantic/light verbs in compound constructions in Mandyali:

*	जा (jā) “to go” (also functions as a true auxiliary in passive constructions)
*	ले (le) “to take”
*	दे (de) “to give”
*	सुट (suṭ) “to throw”
*	बैठ (baiṭh) “to sit”
*	उठ (uṭh) “to rise”
*	रख (rakh) “to keep”
*	आ (ā) “to come”

In such constructions, these verbs typically contribute aspectual, completive, or pragmatic nuances rather than carrying the primary lexical meaning. Accordingly, they are often annotated as VERB with relations such as compound or conj, rather than as AUX, in UD analysis.

## Syntax

* The canonical word order in Mandyali is Subject–Object–Verb (SOV); however, variation is observed in complex sentence constructions. For example, in the sentence “देखुं भला जाउंआ जे मेरी लाड़ीए क्या नाटी पाईरी।”, the structure consists of a main clause (देखुं भला जाउंआ) and a subordinate clause (जे मेरी लाड़ीए ... पाईरी), demonstrating the presence of clausal embedding. Mandyali sentences can broadly be categorized into two types: kernel sentences, which represent basic structural forms, and derived sentences, which are formed through transformations such as expansion or reduction. From a Universal Dependencies (UD) perspective, grammatical relations in Mandyali follow standard patterns. The nominal subject (nsubj) is typically realized as a noun or pronoun, as in मेरी लाड़ीए. The direct object (obj) is represented by elements such as नाटी. Clausal complements (ccomp) are used to encode subordinate clauses, as seen in constructions like “देखुं ... जे ... पाईरी”, where जे functions as a subordinator and is annotated with the relation mark. Additionally, discourse particles play a significant role in Mandyali, contributing pragmatic and emphatic meaning. Words such as भला, फेरि, and हां function as discourse elements and are annotated in UD with the part-of-speech tag PART and the relation discourse.

## Treebanks

There is 1 Mandyali UD treebank:

  * [Mandyali-MDTB](../treebanks/mjl_mdtb/index.html)
