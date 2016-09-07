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

* Introduction:
  * We have just one documentation section per language, but sometimes we have several treebanks per language.
    If this is the case, each such treebank should be mentioned in the introductory page, and a hyperlink to
    the README file in the corresponding data repository should be provided.
  * Is this treebank automatically converted from a non-UD treebank (and if so, have all sentences been manually checked or not),
    or was it annotated natively in UD?
  * POS tags and dependency relations should be annotated manually at least in the original (pre-conversion) treebank.
    Features and lemmas are not obligatory, and they may be also predicted automatically, if manual annotation is not available.
    The introduction and the README file must clearly state what parts of the annotation are
    manual and native UD / manual non-UD, then automatically converted / automatically predicted, no or incomplete manual checking.
    The same information should also be repeated in morphology overview (for lemmas, POS tags and features) and in syntax overview (for dependency relations). We may even consider making this mandatory metadata in the README.
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
  * There are probably restrictions on what features can be used with what POS categories.
    All tag documenting pages should list features relevant for the tag, and inversely,
    all feature documenting pages should list POS categories to which the feature may apply.
  * Does the language have words that share properties of verbs and other parts of speech (participles, gerunds, converbs)?
    Is their tag `VERB`, or are they treated as derived `ADJ`, `NOUN` or `ADV`?
    If their tag is not `VERB`, are they still recognizable by `VerbForm` and other verbal features?
  * How are the pronominal words delimited and partitioned?
    All pronouns, determiners (pronominal adjectives), pronominal quantifiers and pronominal adverbs should be listed and assigned a category. If it is necessary to leave a subset of these words to be disambiguated by context (function), it should be mentioned explicitly and explained.
  * If the language uses the [PART](/u/pos/PART.html) category (particles), all particles must be listed
    and for each it must be explained why it is a particle and why it cannot be anything else.
* Syntax:
  * All subtypes of dependency relations should be documented, especially if this is the only language
    where they are used. This has higher priority then documenting the universal relations with native examples.
