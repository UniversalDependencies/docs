---
layout: base
title:  'Morphology'
permalink: u/overview/morphology.html
udver: '2'
---

# Morphology: General Principles

UD specifies a complete morpho-syntactic representation that can be applied cross-linguistically. This effectively means that grammatical notions may be indicated via word forms (morphologically) or via dependency relations (syntactically). The morphological specification of a (syntactic) word in the UD scheme consists of three levels of representation:

* A _lemma_ representing the semantic content of the word.
* A _part-of-speech tag_ representing the abstract lexical category associated with the word.
* A set of _features_ representing lexical and grammatical properties that are associated with the particular word form.

Lemmas are typically determined by language-specific dictionaries and lexica. In contrast, the part-of-speech tags and grammatical properties are taken from two universal inventories defined below.

Unlike in various language-specific tagsets, the universal tags and features do not
include means to mark _fused words_ (a word that is result of
merging two other words, which are syntactically independent and belong to
different parts of speech):
Czech _dělals (dělal + jsi_ ... main verb + auxiliary); _proň (pro + něj_ ... preposition + pronoun);
German _zum (zu + dem_ ... preposition + article);
Spanish _dámelo (da + me + lo_ ... verb + clitics) etc.
The only truly general approach to fused words in UD is to exploit the distinction between tokens and (syntactic) words, 
and to apply a language-specific processing step that splits tokens into syntactic words
where necessary. Every syntactic word then gets its own part-of-speech tag
and features. See also <a href="tokenization.html">Tokenization</a> and
<a href="../../format.html">Format</a>.

## Lemmas

The `LEMMA` field should contain the canonical or base form of the word, which is the form typically found in dictionaries.
If a language is agglutinative, this is typically the form with no inflectional affixes; in fusional languages, 
the lemma is usually the result of a language-particular convention.
If the lemma is not available, an underscore ("`_`") can be used to indicate its absence.

At present, treebanks have considerable leeway in interpreting what "canonical or base form" means.
Except perhaps in rare cases of suppletion, one form should be the chosen as the lemma of a verb, noun, determiner, or pronoun paradigm.
The lemma of adjectives and adverbs should be the positive form (in languages with comparative and superlative forms).
The lemma does not remove derivational morphology, so the lemma of [en] _organizations_ is _organization_ not _organize_ (nor _organ_).
In general, a canonical form should collapse inflectional and minor orthographic/spelling variation 
(such as casing, accents/diacritics, and typos). In the lemma field, some treebanks may choose 
to aggressively normalize spelling variation that may reflect dialect or authorial style. 

In addition to normalizing spelling in lemmas, treebanks are encouraged to adopt the optional morphological feature 
`Typo=Yes` for clear accidental misspellings of a word (e.g. *ltake* for *take* or *too* for *to*). 
Typos of words in closed-class categories can be found in a corpus by inspecting word frequencies in each category.
Treebank maintainers should take care not to use `Typo=Yes` for words that may reflect actual linguistic variation, 
e.g., dialect, style, or nonnative grammar.

Abbreviated/shortened forms can be mapped to their full spelling as the lemma
in conjunction with the feature [`Abbr=Yes`](../feat/Abbr.html), provided that the full spelling 
is a single word. Abbreviations that would expand to multiple words should be retained in the lemma.

On occasion, a typo or abbreviation will apply to an inflected word (e.g. *hadd* for *had*), and thus the lemma 
should both normalize the spelling and remove the inflection. Treebanks may wish to use the `MISC` field 
to store the normalized but not lemmatized form.

(There is currently no UD-wide policy for lemmas of apparently erroneous extra words, missing words, 
or incorrectly segmented words.)

The `LEMMA` field should not be used to encode features or other similar properties of the word (use `FEATS` and `MISC` instead; see [format](../../format.html)).

Some corpora use numerical specifiers to distinguish homonymous lemmas, different word senses etc. (e.g. [en] _can-1_ vs. _can-2_).
In UD, such specifiers must not appear in the `LEMMA` field because they are not part of the canonical surface form.
If unique lemma identifiers are available, they can be preserved in the `MISC` column in the optional `LId` attribute
(`LId=can-1`).

## Part-of-Speech Tags

The list of <a href="../../u/pos/index.html">universal POS tags</a> is a fixed list containing 17 tags.
It is possible that some tags will not be used in some languages. However, the list cannot be extended to cover
language-specific extensions. Instead, more fine-grained classification of words can be achieved via the use of 
<a href="../../u/feat/index.html">features</a> (see below).

Also, note that the <a href="../../format.html">CoNLL-U format</a>
allows an additional XPOS, taken from a language-specific
(or corpus-specific) tagset. Such language-specific XPOSes have their own
data column and are not mixed with the universal POS tags.

The universal POS tags consist of uppercase English letters `[A-Z]` only.
Just one tag per word is expected, and it should not be empty. (Use the `X` tag
instead of underscore if no other tag is appropriate.)

### Using a word vs. mentioning it

The universal POS tags should capture regular, prevailing syntactic behavior, as well as morphological characteristics
when available, and should not reflect sentence-specific exceptional behavior. In particular, the POS tags do not distinguish actual usage of a word from just mentioning it. Thus in both the following examples, _yes_ will be tagged as interjection:

* _Yes, I think so._
* _I am waiting for his ‘yes’ on the matter._

Similarly, in both the following examples, _precede_ will be tagged as verb:

* _Such discussion must precede every decision._
* _He pronounced ‘precede’ in a funny way._

### Pronominal words

Pronominal words are [pronouns](/u/pos/PRON.html), [determiners](/u/pos/DET.html) (articles and pronominal adjectives),
pronominal [adverbs](/u/pos/ADV.html) _(where, when, how)_, and in traditional grammars of some languages also pronominal [numerals](/u/pos/NUM.html) _(how much)_.

* In most cases it is straightforward to determine whether a word is pronominal (see also the [PronType](/u/feat/PronType.html) feature)
  but the borderline between indefinite determiners and adjectives is slightly fuzzy. Related languages should synchronize the lists of words
  they treat as pronominal. The rest of these guidelines demarcate borders within the pronominal group.
* Pronominal adverbs are tagged `ADV`. Their pronominality is encoded using the `PronType` feature. Their typical syntactic function is to modify verbs.
* Articles _(the, a, an)_ are always tagged `DET`; their `PronType` is `Art`.
* Pronominal numerals (quantifiers) are tagged `DET`; besides `PronType`, they also use the [NumType](/u/feat/NumType.html) feature.
* Words that behave similar to adjectives are `DET`.
  (We understand the `DET` class as pro-adjectives, which is a slightly broader sense than what is usually regarded as determiners in English.
  In particular, it is possible that one nominal is modified by more than one determiner.) Similar behavior means:
  * They are more likely to be used attributively (modifying a noun phrase) than substantively (replacing a noun phrase). They may occur alone, though.
    If they do, it is either because of ellipsis, or because the hypothetical modified noun is something unspecified and general, as in _All [visitors] must pay._
  * Their inflection is similar to that of adjectives, and distinct from nouns. They agree with the nouns they modify.
    Especially the ability to inflect for gender is typical for adjectives and determiners.
    (Gender of nouns is determined lexically and determiners may be required by the grammar to agree with their nouns in gender; therefore they need to inflect for gender.)
* Non-possessive personal, reflexive or reciprocal pronouns are always tagged `PRON`.
* Possessives vary across languages. In some languages the above tests put them in the `DET` category.
  In others, they are more like a normal personal pronoun in a specific case (often the genitive), or a personal pronoun with an adposition; they are tagged `PRON`.
* When the above rules do not help, the category should be based on what the traditional grammar of the language says.
* Ideally, language-specific documentation should list pronominal words and their category. These are all closed classes so it should not be difficult.

### See also

The guidelines for the following special cases are documented on the referenced pages
for specific POS tags:

* Abbreviations and acronyms: described under [SYM]()

## Features

Features are additional pieces of information about the word, its part of speech
and morphosyntactic properties. Every feature has the form `Name=Value` and
every word can have any number of features, separated by the vertical bar, as in
`Gender=Masc|Number=Sing`.

We provide an <a href="../../u/feat/index.html">inventory of
features</a> that are attested in multiple corpora and it is thus
desirable that they are encoded in a uniform way.
The list is certainly not exhaustive and later versions of the standard
may include new features or values found in new languages, corpora or tagsets.

Users can extend this set of universal features and add language-specific
features when necessary. Such features should be described in the language-specific
documentation and follow the general principles outlined here.
Universal and language-specific features of a word are listed together in the FEATS column.

* There are two types of identifiers:
  - feature names = _features_
  - feature values = _values_
* All identifiers (both features and values) consist of English letters or,
  occasionally, digits 0-9. The first letter is always uppercase.
  The other letters are generally lowercase, except for positions where new
  internal words are marked for better readability (e.g. `NumType`).
  This makes features distinct from the 
  <a href="../../u/pos/index.html">universal POS tags</a> 
  (all uppercase) and from the 
  <a href="../../u/dep/index.html">universal dependency relations</a> 
  (all lowercase).
* A feature of a word should always be fully specified in the data, i.e. both
  the feature name and the value should be identified: `PronType=Prs`.
  Note that the values are not guaranteed to be unique across features,
  e.g. `Sup` could denote the superessive case, superlative degree of comparison
  or supine (a verb form).
* Not mentioning a feature in the data implies the empty value,
  which means that the feature is either irrelevant for this part of speech,
  or its value cannot be determined for this word form due to language-specific reasons.
* It is possible to declare that a feature has two or more values for a given word:
  `Case=Acc,Dat`. The interpretation is that the word may have one of these values
  but we cannot decide between them. Such _multivalues_ should be used sparingly.
  They should not be used if the value list would cover the whole value space,
  or the subspace valid for the given language.
  That would mean that we cannot tell anything about this feature for the given word,
  and then it is preferable to just leave the feature out.
* Canonical ordering: features of one word (appearing on the same line) are
  always ordered alphabetically; if a feature has multiple values, these are
  ordered alphabetically, too. This rule facilitates cases when it is necessary
  to compare feature sets of two words.
  Alphabetical sorting means that uppercase letters are considered identical to their lowercase counterparts.
  So for example, `Number` precedes `NumType`.
* Description of individual features usually hints what parts of speech the
  feature is likely to appear with. This information is intended to help
  understand the typical usage of the feature; however, it is _not a strict rule!_
  Applicability of features to parts of speech is very language-dependent
  and it should never be assumed that the feature cannot appear together with
  a particular POS tag.

### Lexical Features

All of these can be considered attributes of lexemes or lemmas (rather than
individual word forms) and they represent a fine-grained
sub-classification of words.

### Inflectional Features

These are mostly features of word forms rather than lemmas.
There are exceptions: for instance, gender of nouns is
usually a lexical feature (all word forms of one lemma have the same gender).
However, other parts of speech (adjectives, pronouns, verbs) may inflect for
gender because of agreement with nouns.

### Layered Features

In some languages, some features are marked more than once on the same word.
We say that there are several _layers_ of the feature.
The exact meaning of individual layers is language-dependent.

For example, possessive adjectives, determiners and pronouns may have two
different values of [u-feat/Gender]() and two of [u-feat/Number](). One of the values is determined
by agreement with the modified (possessed) noun. This is parallel to other
(non-possessive)
adjectives and determiners that agree in gender and number with the nouns they
modify. The other value is determined lexically because it is a property of
the possessor.

For detailed examples of layered features, see
<a href="feat-layers.html">Layered Features</a>.

If a feature is (can be) layered in a language, the name of the feature must
indicate the layer. An additional identifier in square brackets is used to
distinguish layers, e.g. `Gender[psor]` for the possessor's gender.
We recommend that the layer identifiers consist of lowercase English letters
`[a-z]` and/or digits `[0-9]`.
The layers, their meaning and their
identifiers must be defined in a language-specific extension to this
documentation. For each layered feature, one layer may be defined as default
and the corresponding features then appear without identifier,
e.g. `Gender=Masc|Gender[psor]=Fem`.
