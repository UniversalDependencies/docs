---
layout: base
title:  'Morphology'
permalink: u/overview/morphology.html
---

# Morphology: General Principles

The UD scheme allows the specification of a complete morpho-syntactic representation that can be applied cross-linguistically. This effectively means that grammatical notions may be indicated via word forms (morphologically) or via dependency relations (syntactically). The morphological specification of a (syntactic) word in the UD scheme consists of three levels of representation:

* A _lemma_ representing the semantic content of the word.
* A _part-of-speech tag_ representing the abstract lexical category associated with the word.
* A set of _features_ representing lexical and grammatical properties that are associated with the particular word form.

Lemmas are typically determined by language-specific dictionaries and lexica. In contrast, the part-of-speech tags and grammatical properties are taken from two universal inventories defined below.

Unlike in various language-specific tagsets, the universal tags and features do not
include means to mark _fusion words_ (a word that is result of
merging two other words, which are syntactically independent and belong to
different parts of speech):
Czech _dělals (dělal + jsi_ ... main verb + auxiliary); _proň (pro + něj_ ... preposition + pronoun);
German _zum (zu + dem_ ... preposition + article);
Spanish _dámelo (da + me + lo_ ... verb + clitics) etc.
The only truly general approach to fusion words is to apply
a language-specific processing step that will split tokens into syntactic words
where necessary. Every syntactic word will then get its own part-of-speech tag
and features. See also <a href="tokenization.html">Tokenization</a> and
<a href="../../format.html">Format</a>.


## Part-of-Speech Tags

The list of <a href="../../u/pos/index.html">universal POS tags</a> is
a fixed list containing 17 tags.  
It is possible that some tags will not be used in some
languages. However, the list cannot be extended to cover
language-specific extensions. Instead, more fine-grained
classification of words can be achieved via the use of 
<a href="../../u/feat/index.html">features</a> (see below).

Also, note that the <a href="../../format.html">CoNLL-U format</a>
allows an additional POSTAG, taken from a language-specific
(or corpus-specific) tagset. Such language-specific POSTAGs have their own
data column and are not mixed with the universal POS tags.

The universal POS tags consist of uppercase English letters `[A-Z]` only.
Just one tag per word is expected, and it should not be empty. (Use the `X` tag
instead of underscore if no other tag is appropriate.)

### Using a word vs. mentioning it

The universal POS tags focus more on _what the word is_ than on _which construction it is used in_
(the latter is specified by the
[dependency relation labels](../../u/dep/index.html)).
In particular, the POS tags do not distinguish actual usage of a word from just mentioning it.
Thus in both the following examples, _yes_ will be tagged as interjection:

* _Yes, I think so._
* _I am waiting for his ‘yes’ on the matter._

Similarly, in both the following examples, _precede_ will be tagged as verb:

* _Such discussion must precede every decision._
* _He pronounced ‘precede’ in a funny way._

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
The following table shows that
English distinguishes only the possessor's gender and number;
Hindi distinguishes gender in agreement and number both in agreement and of the possessor
(there is no neuter gender in Hindi);
German distinguishes both features in both dimensions
(more differences would be seen if we also showed German dative and accusative forms, not just nominatives).

<table>
  <tr>
    <td>Possessor / Agreement</td>
    <td>&nbsp;</td>
    <td>Sing Masc</td>
    <td>Sing Fem</td>
    <td>Sing Neut</td>
    <td>Plur Masc</td>
    <td>Plur Fem</td>
  </tr>
  <tr>
    <td>Sing Masc</td>
    <td>[en]<br/>[de]<br/>[hi]</td>
    <td><span style='color:red'>his</span> son<br/><span style='color:red'>sein</span> Sohn<br/><span style='color:red'>usakā</span> bēṭā</td>
    <td><span style='color:red'>his</span> daughter<br/><span style='color:red'>seine</span> Tochter<br/><span style='color:red'>usakī</span> bēṭī</td>
    <td><span style='color:red'>his</span> house<br/><span style='color:red'>sein</span> Haus<br/>&nbsp;</td>
    <td><span style='color:red'>his</span> sons<br/><span style='color:red'>seine</span> Söhne<br/><span style='color:red'>usakē</span> bēṭē</td>
    <td><span style='color:red'>his</span> daughters<br/><span style='color:red'>seine</span> Töchter<br/><span style='color:red'>usakī</span> bēṭiyām̐</td>
  </tr>
  <tr>
    <td>Sing Fem</td>
    <td>[en]<br/>[de]<br/>[hi]</td>
    <td><span style='color:red'>her</span> son<br/><span style='color:red'>ihr</span> Sohn<br/><span style='color:red'>usakā</span> bēṭā</td>
    <td><span style='color:red'>her</span> daughter<br/><span style='color:red'>ihre</span> Tochter<br/><span style='color:red'>usakī</span> bēṭī</td>
    <td><span style='color:red'>her</span> house<br/><span style='color:red'>ihr</span> Haus<br/>&nbsp;</td>
    <td><span style='color:red'>her</span> sons<br/><span style='color:red'>ihre</span> Söhne<br/><span style='color:red'>usakē</span> bēṭē</td>
    <td><span style='color:red'>her</span> daughters<br/><span style='color:red'>ihre</span> Töchter<br/><span style='color:red'>usakī</span> bēṭiyām̐</td>
  </tr>
  <tr>
    <td>Sing Neut</td>
    <td>[en]<br/>[de]<br/>&nbsp;</td>
    <td><span style='color:red'>its</span> son<br/><span style='color:red'>sein</span> Sohn<br/>&nbsp;</td>
    <td><span style='color:red'>its</span> daughter<br/><span style='color:red'>seine</span> Tochter<br/>&nbsp;</td>
    <td><span style='color:red'>its</span> house<br/><span style='color:red'>sein</span> Haus<br/>&nbsp;</td>
    <td><span style='color:red'>its</span> sons<br/><span style='color:red'>seine</span> Söhne<br/>&nbsp;</td>
    <td><span style='color:red'>its</span> daughters<br/><span style='color:red'>seine</span> Töchter<br/>&nbsp;</td>
  </tr>
  <tr>
    <td>Plur</td>
    <td>[en]<br/>[de]<br/>[hi]</td>
    <td><span style='color:red'>their</span> son<br/><span style='color:red'>ihr</span> Sohn<br/><span style='color:red'>unakā</span> bēṭā</td>
    <td><span style='color:red'>their</span> daughter<br/><span style='color:red'>ihre</span> Tochter<br/><span style='color:red'>unakī</span> bēṭī</td>
    <td><span style='color:red'>their</span> house<br/><span style='color:red'>ihr</span> Haus<br/>&nbsp;</td>
    <td><span style='color:red'>their</span> sons<br/><span style='color:red'>ihre</span> Söhne<br/><span style='color:red'>unakē</span> bēṭē</td>
    <td><span style='color:red'>their</span> daughters<br/><span style='color:red'>ihre</span> Töchter<br/><span style='color:red'>unakī</span> bēṭiyām̐</td>
  </tr>
</table>

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

For more prototypes of layered features, see
<a href="u-feat-layers.html">Layered Features</a>.
