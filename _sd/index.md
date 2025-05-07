---
layout: base
title:  'Sindhi UD'
udver: '2'
---

# UD for Sindhi <span class="flagspan"><img class="flag" src="../../flags/svg/SD.svg" /></span>

## Tokenization and Word Segmentation

Words in Sindhi are separated with whitespace and punctuation.

Currently there is no MWT analysis.  However, there are verbs (both main and auxiliary) which use pronominal clitics.  Currently those are featurized with `Number[obj]`, `Number[subj]`, etc features.  Future editions may instead treat them as MWT.


## Morphology

### Tags

Sindhi uses 15 of the 17 POS tags.  Currently all punctuation is tagged PUNCT, with no SYM, and there are no words tagged X.

PART is used for two general classes of words. Words considered "intensifiers" are tagged PART.  Furthermore, `نه` usually represents negation, but can also be an intensifier.  Intensifiers use the `advmod:emph` relation.

Demonstrative pronouns can be used as either a determiner, when associated with a nominal, or as a pronoun, when used by themselves.  Following the standard established in other Indic languages, we tag all of them as DET.

Two main classes of AUX are identified, `آهي` (to be) and `سگهي` (can).  Both verbs come with a wide variety of inflections.

### Features

As noted above, VERB (and AUX) can have pronominal clitics.  Those are annotated with `[subj]` and `[obj]` features.  Furthermore, whereas main verbs are typically tagged `VM` and auxiliary `VAUX` in the xpos column, verbs with clitics are marked in the xpos with `VMX` or `VAUXX`.

VERBs occur in a variety of VerbForms.  Participles are distinguished not only by VerbForm, but also by Aspect.  There is also the conjunctive participle, denoted by `VerbForm=Conv`, in which a verb indicates actions that occur in sequence.

The AUX copula `آهي` occasionally occurs in a past subjunctive form, `ھا`.  Other main verbs will very rarely inflect as subjunctive.

Standard features for NOUNs are Case (Acc or Nom), Number, and Gender.

In some cases, VERBs function as NOUNs.  These can be marked with `VerbForm=Vnoun`.

ADPs occur in three general classes:

 - Locative ADPs, denoted with blank features and the xpos PSPL.  These do not inflect
 - Genitive ADPs, which inflect for Case (Acc or Nom), tagged with xpos PSPG
 - Everything else, tagged PSP and not marked with features, as they do not otherwise inflect

## Syntax

The auxiliary verb `آهي` has both copula and aux relations.

* The following subtypes are used in Swedish:
  * [advmod:emph]() for intensifiers, PART words which put emphasis on the (usually preceding) word they attach to
  * [nsubj:pass]() for nominal subjects of passive verbs

## Treebanks

There is [1](../treebanks/LCODE-comparison.html) Sindhi UD treebanks:

  * [Sindhi-Isra](../treebanks/sd_isra/index.html)


---
