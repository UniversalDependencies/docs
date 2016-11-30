---
layout: base
title:  'Tokenization and Word Segmentation'
permalink: u/overview/tokenization.html
udver: '2'
---

# Tokenization and Word Segmentation

The UD annotation is based on a lexicalist view of syntax, which means that dependency relations 
hold between _words_. Hence, morphological features are encoded as properties of words and there is no attempt at
segmenting words into morphemes. However, it is important to note that the basic units of annotation are _syntactic_ 
words (not phonological or orthographic words), which means that we systematically want to split off clitics, as in 
Spanish _dámelo_ = _da me lo_, and undo contractions, as in French _au_ = _à le_. We refer to such cases as 
_multiword tokens_ because a single orthographic _token_ corresponds to multiple (syntactic) _words_.
In exceptional cases, it may be necessary to go in the other direction, and combine several orthographic
tokens into a single syntactic word. Starting from v2 of the UD guidelines, such _multitoken words_ are allowed
for a restricted class of phenomena, such as numerical expressions like _20 000_ and abbreviations like _e. g._, 
as long as these phenomena are approved and clearly specified in the language-specific documentation. 
Note, however, that this technique should _not_ be generalized to multiword expressions like _in spite of_ 
and _by and large_ (let alone to more flexible multiword expressions like compounds or particle verbs), which should
instead be annotated using special dependency relations.

Since word segmentation in general is a non-trivial task in many languages, and since the usefulness of tools trained on treebank data ultimately depends on how well the word segmentation can be reproduced for new data, it is important to document the principles of word segmentation for each language.
The nature of this documentation will vary from one language to the next, depending on properties of the language and
the writing system. For languages where word segmentation can be performed by a simple script given white-space and 
punctuation, only the words need to be represented in the treebank. 
For languages not using white-space at all, such as Chinese and Japanese, a complex word segmentation algorithm has 
to be employed, but there is no need to represent the basic character sequence in the treebank since it is completely 
recoverable from the word representation. By contrast, in languages where the mapping between white-space delimited 
_tokens_ and syntactic _words_ is highly ambiguous, such as Arabic and Hebrew, we provide the option of including 
both tokens and words in the treebank using a two-level indexing scheme described in the 
<a href="../../format.html">CoNLL-U format</a> section. 
The morphological and syntactic annotation is only defined at the word level, but a heuristic mapping to the token level
can usually be provided. 

Language-specific extensions to this documentation must describe how tokenization and word segmentation has been performed for each language (including references to standard tokenization schemes if any). In addition, it should answer the following questions:

* Do spaces regularly occur inside words? (This is only allowed for languages like Vietnamese, where whitespace is used to mark syllable boundaries rather than word boundaries.)
* Do spaces exceptionally occur inside (multitoken) words? If yes, specify exactly in which cases (for example, numbers and abbreviations).
* Does the treebank include (multiword) tokens as well as words? If yes, specify exactly in which cases (for example, clitics and contractions).
