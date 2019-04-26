---
layout: base
title:  'Turkish UD'
udver: '2'
---

# UD for Turkish 

This is a **work-in-progress** overview of the UD annotation for Turkish.

## Tokenization and Word Segmentation

* In general, words are delimited by white spaces or punctuation,
    Whitespeces or punctuation may appear in some abbreviations
    or numeric expressions.
* The question clitic _-mI_ (or other clitics) is treated as a separate word.
* Due to the interaction of syntax and rich morphology,
    the following list  affixes introduce new "syntactic words".
        - Copular suffix attached to nouns or adverbs (if not null),
            including the confiditional _-(y)sA_ and converbial _-(y)ken_
        - _-ki_
        - _-lI_
        - _-sIz_
        - _-lIk_

For more details, see [tokenization](tokenization.html).

## Morphology

### Tags

This is an overview only. For more detailed discussion and examples,
see the list of [Turkish POS tags](pos/index.html)
and [Turkish features](feat/index.html).


## Syntax

This is an overview only. For more detailed discussion and examples,
see the list of [relations](dep/index.html),

### Arguments of verbs

* 

### Non-verbal Clauses

* 

### Relations Overview

* The following relation subtypes are used in Turkish:
   * [advmod:emph]()
   * [aux:q]()
   * [compound:lvc]()
   * [compound:redup]()
   * [nmod:poss]()
   * [nmod:tmod]()
   * [obl:tmod]()
   * [nsubj:cop]()
   * [csubj:cop]()
   * [nmod:part]()
   * [nmod:comp]()
   * [obl:agent]()

## Treebanks

As of v2.4, there are three treebanks, more treebanks are in progress.

  * [Turkish-GB](http://coltekin.github.io/gk-treebank/)
  * [Turkish-IMST](../treebanks/cs/index.html)
  * [Turkish-PUD](../treebanks/cs_pud/index.html)
