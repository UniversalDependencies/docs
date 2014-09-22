---
layout: base
title:  'Morphology'
---

# Morphology: General Principles

## Part-of-speech tags

The list of <a href="ud-pos-index.html">universal POS tags</a> is fixed
and cannot be extended in language-specific extensions. However, it is
possible that some tags will not be used in some languages.

Features (see below) can be used for a more fine-grained classification
of words if desirable. Also note that the <a href="format.html">CoNLL-U format</a>
allows an additional POSTAG, taken from a language-specific
(or corpus-specific) tagset. Such language-specific POSTAGs have their own
data column and are not mixed with the universal POS tags.

The universal POS tags consist of uppercase English letters `[A-Z]` only.
Just one tag per word is expected, and it should not be empty. (Use the `X`
instead of underscore if no other tag is appropriate).

## Features

Features are additional pieces of information about the word, its part of speech
and morphosyntactic properties. Every feature has the form `Name=Value` and
every word can have any number of features, separated by the vertical bar, as in
`Gender=Masc|Number=Sing`.

We provide an <a href="ud-feat-index.html">inventory of features</a> that are
attested in multiple corpora and it is thus desirable that they are encoded in
a uniform way.
The list is certainly not exhaustive and later versions of the standard
may include new features or values found in new languages, corpora or tagsets.

Users can extend this set of universal features and add language-specific
features when necessary. Such features should be described in the language-specific
documentation and follow the general principles outlined here.
Universal and language-specific features of a word are listed together in the FEATS column.

Unlike in various language-specific tagsets, the Universal Features do not
include features aimed at marking _fusion words_ (a word that is result of
merging two other words, which are syntactically independent and belong to
different parts of speech):
Czech _dělals (dělal + jsi_ ... main verb + auxiliary); _proň (pro + něj_ ... preposition + pronoun);
German _zum (zu + dem_ ... preposition + article);
Spanish _dámelo (da + me + lo_ ... verb + clitics) etc.
The only truly general approach to fusion words is to apply
a language-specific processing step that will split tokens into syntactic words
where necessary. Every syntactic word will then get its own part-of-speech tag
and features. See also <a href="tokenization.html">Tokenization</a> and
<a href="format.html">Format</a>.

* There are two types of identifiers:
  - feature names = _features_
  - feature values = _values_
* All identifiers (both features and values) consist of English letters or,
  occasionally, digits 0-9. The first letter is always uppercase.
  The other letters are generally lowercase, except for positions where new
  internal words are marked for better readability (e.g. `NumType`).
  This makes features distinct from the <a href="ud-pos-index.html">core part-of-speech tags</a> (all uppercase)
  and from the <a href="relations.html">dependency relation labels</a> (all lowercase).
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

### Lexical features

All of these can be considered attributes of lexemes or lemmas (rather than
individual word forms) and they represent a fine-grained
sub-classification of words.

### Inflectional features

These are mostly features of word forms rather than lemmas.
There are exceptions: for instance, gender of nouns is
usually a lexical feature (all word forms of one lemma have the same gender).
However, other parts of speech (adjectives, pronouns, verbs) may inflect for
gender because of agreement with nouns.

### Layered features

In some languages, some features are marked more than once on the same word.
We say that there are several _layers_ of the feature.
The exact meaning of individual layers is language-dependent.

For example, possessive adjectives, determiners and pronouns may have two
different values of [ud-feat/Gender]() and two of [ud-feat/Number](). One of the values is determined
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

For more prototypes of layered features, see <a href="ud-feat-layers.html">Layered Features</a>.


-------------

## Extension: Interset features that are not part of this standard

Universal Features are mostly derived from the
<a href="http://ufal.mff.cuni.cz/interset">Interset Project</a>
(<a href="http://ufal.mff.cuni.cz/~zeman/publikace/2008-02/tagdrivers-marrakech-styl-lrec.pdf">Zeman, 2008</a>).
Interset contains additional features that have not yet been adopted as
Universal Features. However, they may be used, if necessary, as part of the
"language-specific extensions" to the Universal Features.

The following Interset features are currently not part of the standard:

* <a href="ext-feat/Abbr.html">Abbr</a>
* <a href="ext-feat/AdpType.html">AdpType</a>
* <a href="ext-feat/AdvType.html">AdvType</a>
* <a href="ext-feat/ConjType.html">ConjType</a>
* <a href="ext-feat/Echo.html">Echo</a>
* <a href="ext-feat/Foreign.html">Foreign</a>
* <a href="ext-feat/Hyph.html">Hyph</a>
* <a href="ext-feat/NameType.html">NameType</a>
* <a href="ext-feat/NounType.html">NounType</a>
* <a href="ext-feat/NumForm.html">NumForm</a>
* <a href="ext-feat/NumValue.html">NumValue</a>
* <a href="ext-feat/PartType.html">PartType</a>
* <a href="ext-feat/Politeness.html">Politeness</a>
* <a href="ext-feat/PrepCase.html">PrepCase</a>
* <a href="ext-feat/PunctSide.html">PunctSide</a>
* <a href="ext-feat/PunctType.html">PunctType</a>
* <a href="ext-feat/Style.html">Style</a>
* <a href="ext-feat/Typo.html">Typo</a>
* <a href="ext-feat/VerbType.html">VerbType</a>

The following Interset features are not used under their Interset names but they are included
through the <a href="ud-feat-layers.html">layered feature scheme</a>:

* <a href="ext-feat/PossedNumber.html">PossedNumber</a> = `Number[psee]`
* <a href="ext-feat/PossGender.html">PossGender</a> = `Gender[psor]`
* <a href="ext-feat/PossNumber.html">PossNumber</a> = `Number[psor]`
* <a href="ext-feat/PossPerson.html">PossPerson</a> = `Person[psor]`
