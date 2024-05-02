---
layout: base
title:  'Ottoman Turkish UD'
udver: '2'
---

# UD for Ottoman Turkish <span class="flagspan"><img class="flag" src="../../flags/svg/TR.svg" /></span>
---
This is a short introduction of the UD annotation for Ottoman Turkish.

## Tokenization and Word Segmentation
---
In general, tokens are delimited by whitespace characters and punctuation. This includes clitics and grammatical particles such as the ezafeh, “ki,” and the question clitic “mI.” Copulas can either be adjoined to words or be separate words, which determines whether they’re seen as distinct tokens or not.

## Morphology
---
### Tags

   * The PART tag is used for the clitic “ki,” the particles “dA” and its archaic counterpart “dahi,” the comitative / instrumental particle “-(y)lA” and the conditional particle “-(y)sA” when they are separated from the word, and the ezafeh.    * The question particle “mI,” the nominal negation marker “değil,” the copular clitic “i-,” and occasionally, the verb “olmak,” which means “to be,” are tagged as AUX while other verbs are tagged as VERB.
   * Quantifiers such as “bu,” “bir,” “o,” “hiçbir,” “bütün” are tagged as DET in prenominal positions while they are tagged as PRO when they act as standalone units.
   * Personal pronouns, interrogative pronouns, and the reflexive pronoun “kendi” are tagged as PRO as well.
   * Deverbal adjectives, which are commonplace due to the effect of Arabic triconsonantal root system on Ottoman Turkish, are sometimes tagged as NOUN.

### Features

   * Nouns have the main inflectional features of Case, Number, and Person.
   * The notable inflectional features of verbs are Aspect, Case (if nominalized), Evident, Mood, Number, Person, Polarity (negative or positive depending on the semantic content), Tense, VerbForm, and Voice.
   * Subject-verb agreement through Number and Person are accurately reflected in the morphological features of nouns and verbs.
   * One thing to note is that the feature Voice has two values (Cau and Pass) although a verb can carry both of those, which is not reflected in the features.

## Syntax
---
* The following relation subtypes are used in Ottoman Turkish:

   * [advmod:emph]()
   * [cc:preconj]()
   * [compound:lvc]()
   * [compound:redup]()
   * [csubj:pass]()
   * [dep:der]()
   * [discourse:q]()
   * [nmod:part]()
   * [nmod:poss]()
   * [nsubj:pass]()
   * [obl:agent]()
   * [obl:cau]()


## Treebanks
---
As of UD 2.14, there are two Ottoman Turkish UD treebanks:

  * [Ottoman Turkish-BOUN](../treebanks/ota_boun/index.html)
  * [Ottoman Turkish-DUDU](../treebanks/ota_boun/index.html)
  
---
