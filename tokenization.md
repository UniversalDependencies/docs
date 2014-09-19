---
layout: base
title:  'Tokenization'
---

# Two Levels of Tokenization?

_Tokenization_ usually denotes a process where each sentence is split to word-like units called _tokens._
The extent and rules for tokenization vary but there is usually a language-independent part that just
tears apart words and punctuation symbols that are, according to typographic rules, not separated by
whitespace.

Besides this low level, there may also be a second level of segmentation that is language-specific
and splits tokens from the lower level into _syntactic words._

# Words and Tokens

The universal dependency annotation is based on a lexicalist view of syntax, which means that dependency relations 
hold between _words_. Hence, morphological features are encoded as properties of words and there is no attempt at
segmenting words into morphemes. However, because we are interested in _syntactic_ words (not phonological or 
orthographic words), it is sometimes necessary to extract multiple words out of a single white-space delimited token. 
This applies in particular to clitics, such as Spanish _dámelo_ = _da me lo_, and contractions, such as French _au_ = _à le_. 
(In principle, the lexicalist view could also be taken to imply that certain multiword annotations should be treated 
as single words in the annotation. So far, however, multiword expressions are annotated as such
using special dependency relations, rather than by collapsing multiple tokens into one.)

For languages where the extraction of words from white-space delimited tokens is nondeterministic (and hence is an integral
part of morphosyntactic analysis), we include both words and tokens in the treebank using a two-level indexing scheme
described in the <a href="format.html">Format</a> section.
The morphological and syntactic annotation is only defined at the word level, but a heuristic mapping to the token level
can usually be provided. For languages not using white-space, such as Chinese and Japanese, a complex word segmentation
algorithm needs to be employed and there is no need to differentiate tokens and words.
Similarly, for languages where word segmentation is simple and straightforward
(or where a standard segmentation algorithm can be assumed), only words need to be represented in the treebank.

Language-specific extensions to this documentation must describe how the token-word distinction applies
to each language, what are the groups of fused orthographic words that will be split into multiple syntactic
words etc.

See <a href="format.html">Format</a> for the technical details of representing both tokens and words in CoNLL-U files.
