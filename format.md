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

