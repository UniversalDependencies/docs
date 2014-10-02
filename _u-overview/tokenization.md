---
layout: base
title:  'Tokenization'
permalink: u/overview/tokenization.html
---

# Tokenization

The universal dependency annotation is based on a lexicalist view of syntax, which means that dependency relations 
hold between _words_. Hence, morphological features are encoded as properties of words and there is no attempt at
segmenting words into morphemes. However, it is important to note that the basic units of annotation are _syntactic_ 
words (not phonological or orthographic words), which means that we systematically want to split off clitics, as in 
Spanish _dámelo_ = _da me lo_, and undo contractions, as in French _au_ = _à le_. 
(In principle, the lexicalist view could also be taken to imply that certain multiword annotations should be treated 
as single words in the annotation. So far, however, multiword expressions are annotated as such
using special dependency relations, rather than by collapsing multiple tokens into one.)

Since word segmentation in general
is a non-trivial task in many languages, and since the usefulness of tools trained on treebank data ultimately depends 
on how well the word segmentation can be reproduced for new data, it is important to document the principles of word
segmentation for each language.
The nature of this documentation will vary from one language to the next, depending on properties of the language and
the writing system. For languages where word segmentation can be performed by a simple script given white-space and 
punctuation, only the words need to be represented in the treebank. 
For languages not using white-space at all, such as Chinese and Japanese, a complex word segmentation algorithm has 
to be employed, but there is no need to represent the basic character sequence in the treebank since it is completely 
recoverable from the word representation. By contrast, in languages where the mapping between white-space delimited 
_tokens_ and syntactic _words_ is highly ambiguous, such as Arabic and Hebrew, we provide the option of including 
both tokens and words in the treebank using a two-level indexing scheme described in the 
<a href="../format.html">CoNLL-U format</a> section. 
The morphological and syntactic annotation is only defined at the word level, but a heuristic mapping to the token level
can usually be provided. 

Language-specific extensions to this documentation must describe how tokenization and word segmentation has been
performed for each language (including references to standard tokenization schemes if any), whether the treebank
includes (multiword) tokens as well as words, and what types of white-space separated tokens are split into
multiple words (if any).

