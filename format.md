---
layout: base
title:  'Format'
---

# Format

We use a revised version of the CoNLL-X format called CoNLL-U. 
Annotations are encoded in plain text files (UTF-8) with three types of lines:

 1. Token lines containing the annotation of a word in 10 tab-separated fields; see below.
 2. Blank lines marking sentence boundaries.
 3. Comment lines starting with hash (#).

Token lines contain the following fields:

 1. ID: Token counter, starting at 1 for each new sentence.
 2. FORM: Word form or punctuation symbol.
 3. LEMMA: Lemma or stem of word form.
 4. CPOSTAG: Google universal part-of-speech tag.
 5. POSTAG: Language-specific part-of-speech tag; underscore if not available.
 6. FEATS: List of morphological features (attribute-value pairs); underscore if not available.
 7. HEAD: Head of the current token, which is either a value of ID or zero (0).
 8. DEPREL: Universal Stanford dependency relation to the HEAD (root iff HEAD = 0).
 9. DEPS: List of secondary dependencies (head-deprel pairs).
10. MISC: Any other annotation.

The fields DEPS and MISC replace the obsolete fields PHEAD and PDEPREL of the CoNLL-X format. 
In addition, we have modified the usage of the ID, FORM, LEMMA, POSTAG, FEATS and HEAD fields as explained below.

# Tokens and Words

The universal dependency annotation is based on a lexicalist view of syntax, which means that dependency relations 
hold between _words_. Hence, morphological features are encoded as properties of words and there is no attempt at
segmenting words into morphemes. However, because we are interested in _syntactic_ words (not phonological or 
orthographic words), it is sometimes necessary to segment white-space delimited tokens into several words. 
This applies in particular to clitics, such as Spanish _dámelo_ = _da me lo_, and 
contractions, such as French _au_ = _à le_. 
(In principle, the lexicalist view could also be taken to imply that certain multiword annotations should be treated as single words in the annotation. 
So far, however, multiword expressions are annotated as such using special dependency relations, rather than by collapsing multiple tokens into one.)
For this purpose, we adopt a two-level tokenization scheme, where the first level is
a simple deterministic tokenization that is easily reproducible on new text. For many languages with alphabetic scripts, 
this will be a simple tokenization based on whitespace and punctuation, but the exact scheme will have to be defined on a per language basis. By contrast,
the second level is a linguistically motivated segmentation where tokens better correspond to syntactic words. We will refer to units on
the first level as _tokens_ and units on the second level as _words_. The morphological and syntactic annotation applies primarily
to the word level, although a heuristic mapping to the token level can be provided.

To accommodate this two-level segmentation scheme, we adopt an extension of the original CoNLL-X token indexing scheme, inspired by
(but not identical to) the one used in the Modern Hebrew Dependency Treebank (Goldberg, 2011). Following the CoNLL-X scheme, tokens are indexed with integers 1, 2, 3, .... If the _n_:th token corresponds to multiple words,
the latter are then indexed with decimals _n_.1, _n_.2, _n_.3, .... Furthermore, tokens always have a FORM value –
the string that occurs in the sentence – but have an underscore in all the remaining fields (because the token 
then represents multiple words, each with its own lemma, part-of-speech tag, syntactic head, and so on). 

This is illustrated in the following annotation snippet,
showing only the first three fields for the Spanish sentence _vámonos al mar_ (let's go to the sea):

    1     vámonos   _
    1.1   vamos     ir
    1.2   nos       nosotros
    2     al        _
    2.1   a         a
    2.2   el        el
    3     mar       mar		

We extract the token sequence by skipping lines where the ID is not an integer:

    1     vámonos   _
    2     al        _
    3     mar       mar		

We extract the word sequence by skipping all integer IDs that are followed by decimal IDs or, equivalently, tokens that have an 
underscore in the LEMMA field:

    1.1   vamos     ir
    1.2   nos       nosotros
    2.1   a         a
    2.2   el        el
    3     mar       mar		

To facilitate the use of the treebanks, we provide a script that extracts the first or second level tokenization, provides a heuristic mapping of morphological and syntactic annotation for the former, and converts the latter to a plain CoNLL-X indexing scheme where all IDs are integers. 

# Morphological Annotation

# Syntactic Annotation



