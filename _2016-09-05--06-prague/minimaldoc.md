---
layout: base
title:  'Minimal documentation'
---

# Minimal requirements for language-specific documentation

We also discussed in Prague that there are many places in the universal guidelines where we require
that language-specific documentation specifies how a particular thing works in the language but
then the language-specific documentation either does not exist or is not clear enough about the
given point.

There is no doubt that we want to encourage people to document their data, but we do not want to
ban data in languages that are not documented—it is usually better to have undocumented data than
no data at all.

However, we should create a page in the universal guidelines that would summarize (perhaps even
as a web form) all the questions to which language-specific sections are supposed to provide
answers.

The list below could become the first version of such summary but it is currently incomplete.
It should also contain references to documentation pages where the answers should appear,
and ideally also links to such pages in languages where they already exist and can serve as example.

* Word segmentation:
  * Does the writing system use spaces to separate words?
    (If not, then it should not contain multi-word tokens and it probably does not contain the
    `SpaceAfter=No` attribute but the data should be understood as if the attribute occurred at
    every word. Examples are Chinese, Japanese and Thai.)
  * Does the writing system use spaces inside words?
    (It means that spaces are not used to separate words and implies "yes" to the previous question.
    Vietnamese is probably the only example.)
  * Are there exceptional (and approved by UD) cases where the orthography allows spaces inside words
    even if the language is not Vietnamese? If so, list them.
    (Currently the only candidate—not approved yet!—is the space inside long numbers in some languages,
    e.g. "1 000 000". Example languages would be French and Czech.)
  * Is it possible to fuse two or more syntactic words into one multiword token on the surface?
    If so, describe all types of such fusions.
    Note that punctuation written adjacent to a word does not constitute a fusion.
* Morphology and part of speech:
  * All language-specific features and values should be documented, especially if this is the only language
    where they are used. This has higher priority then documenting the universal features with native examples.
* Syntax:
  * All subtypes of dependency relations should be documented, especially if this is the only language
    where they are used. This has higher priority then documenting the universal relations with native examples.
