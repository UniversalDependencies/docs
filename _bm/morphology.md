---
layout: base
title:  'Morphology'
udver: '2'
---

# Morphology : General Principles

The UD scheme allows the specification of a complete morpho-syntactic representation that can be applied cross-linguistically. This effectively means that grammatical notions may be indicated via word forms (morphologically) or via dependency relations (syntactically). The morphological specification of a (syntactic) word in the UD scheme consists of three levels of representation :

+ A _lemma_ representing the semantic content of the word.
+ A _part-of-speech tag_ representing the abstract lexical category associated with the word.
+ A _set of features_ representing lexical and grammatical properties that are associated with the particular word form.


Lemmas are typically determined by language-specific dictionaries and lexica. In contrast, the part-of-speech tags and grammatical properties are taken from two universal inventories defined below.


## Lemmas

The `LEMMA` field should contain the canonical or base form of the word, such as the form typically found in dictionaries. If the lemma is not available, an underscore ("`_`") can be used to indicate its absence.


## Part-of-Speech Tags

Bambara uses the POS tags described in the [universal POS tags list](../../u/pos/index.html). This list cannot be extended to cover language-specific extensions. Instead, more fine-grained classification of words can be achieved via the use of [features](../../bm/feat/index.html) (see below). Just one tag per word is expected, and it should not be empty (use the `X` tag instead of underscore if no other tag is appropriate).

A description of each POS tag can be accessed through [this page](../../bm/pos/index.html).

## Features

[Features](../../bm/feat/index.html) are additional pieces of information about the word, its part of speech and morphosyntactic properties. Every feature has the form `Name=Value` and every word can have any number of features, separated by the vertical bar, as in `Gender=Masc|Number=Sing`.


+ There are two types of identifiers:
  - feature names = _features_
  - feature values = _values_
+ All identifiers (both features and values) consist of English letters or, occasionally, digits 0-9. The first letter is always uppercase. The other letters are generally lowercase, except for positions where new internal words are marked for better readability (e.g. `NumType` ). This makes features distinct from the [universal POS tags](../../u/pos/index.html) (all uppercase) and from the [universal dependency relations](../../u/dep/index.html) (all lowercase).
+ A feature of a word should always be fully specified in the data, i.e. both the feature name and the value should be identified: `PronType=Prs` . Note that the values are not guaranteed to be unique across features, e.g. `Sup` could denote the superessive case, superlative degree of comparison or supine (a verb form).
+ Not mentioning a feature in the data implies the empty value, which means that the feature is either irrelevant for this part of speech, or its value cannot be determined for this word form due to language-specific reasons.
+ Canonical ordering: features of one word (appearing on the same line) are always ordered alphabetically; if a feature has multiple values, these are ordered alphabetically, too. This rule facilitates cases when it is necessary to compare feature sets of two words. Alphabetical sorting means that uppercase letters are considered identical to their lowercase counterparts. So for example, `Number` precedes `NumType` .
+ Description of individual features usually hints what parts of speech the feature is likely to appear with. This information is intended to help understand the typical usage of the feature; however, it is _not a strict rule!_ Applicability of features to parts of speech is very language-dependent and it should never be assumed that the feature cannot appear together with a particular POS tag.

### Lexical Features

All of these can be considered attributes of lexemes or lemmas (rather than individual word forms) and they represent a fine-grained sub-classification of words.


### Inflectional Features

These are mostly features of word forms rather than lemmas. There are exceptions: for instance, gender of nouns is usually a lexical feature (all word forms of one lemma have the same gender). However, other parts of speech (adjectives, pronouns, verbs) may inflect for gender because of agreement with nouns.

