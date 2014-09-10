---
layout: base
title:  'Features'
---

# Features

## Universal features

<table class="typeindex">
  <tr>
    <td>
      <table class="category">
        <tr><td><b>Features&nbsp;1</b></td></tr>
        <tr>
          <td><i>Lemma categories</i></td>
        </tr>
        <tr>
          <td><a href="ud-feat/PronType.html">PronType</a></td>
        </tr>
        <tr>
          <td><a href="ud-feat/NumType.html">NumType</a></td>
        </tr>
        <tr>
          <td><a href="ud-feat/Poss.html">Poss</a></td>
        </tr>
        <tr>
          <td><a href="ud-feat/Reflex.html">Reflex</a></td>
        </tr>
      </table>
    </td>
    <td>
      <table class="category">
        <tr><td colspan="3"><b>Features&nbsp;2</b></td></tr>
        <tr>
          <td><i>Nominal</i></td>
          <td><i>Possessive</i></td>
          <td><i>Verbal</i></td>
        </tr>
        <tr>
          <td><a href="ud-feat/Gender.html">Gender</a></td>
          <td><a href="ud-feat/PossGender.html">PossGender</a></td>
          <td><a href="ud-feat/VerbForm.html">VerbForm</a></td>
        </tr>
        <tr>
          <td><a href="ud-feat/Animacy.html">Animacy</a></td>
          <td></td>
          <td><a href="ud-feat/Mood.html">Mood</a></td>
        </tr>
        <tr>
          <td><a href="ud-feat/Number.html">Number</a></td>
          <td><a href="ud-feat/PossNumber.html">PossNumber</a></td>
          <td><a href="ud-feat/Tense.html">Tense</a></td>
        </tr>
        <tr>
          <td><a href="ud-feat/Case.html">Case</a></td>
          <td><a href="ud-feat/PossedNumber.html">PossedNumber</a></td>
          <td><a href="ud-feat/Aspect.html">Aspect</a></td>
        </tr>
        <tr>
          <td><a href="ud-feat/Definiteness.html">Definiteness</a></td>
          <td></td>
          <td><a href="ud-feat/Voice.html">Voice</a></td>
        </tr>
        <tr>
          <td></td>
          <td><a href="ud-feat/PossPerson.html">PossPerson</a></td>
          <td><a href="ud-feat/Person.html">Person</a></td>
        </tr>
        <tr>
          <td><a href="ud-feat/Degree.html">Degree</a></td>
          <td></td>
          <td><a href="ud-feat/Negativeness.html">Negativeness</a></td>
        </tr>
      </table>
    </td>
  </tr>
</table>

### General rules

* There are two types of identifiers:
  - feature names = _features_
  - feature values = _values_
* All identifiers (both features and values) consist of English letters or,
  occasionally, digits 0-9. The first letter is always uppercase.
  The other letters are generally lowercase, except for positions where new
  internal words are marked for better readability (e.g. NumType).
  This makes features distinct from the <a href="tags.html">core part-of-speech tags</a> (all uppercase)
  and from the <a href="relations.html">dependency relation labels</a> (all lowercase).
* A feature of a word should always be fully specified in the data, i.e. both
  the feature name and the value should be identified: PronType=Prs.
  Note that the values are not guaranteed to be unique across features,
  e.g. Sup could denote the superessive case, superlative degree of comparison
  or supine (a verb form).
* It is possible to declare that a feature has two or more values for a given word:
  "Case=Acc,Dat". The interpretation is that the word may have one of these values
  but we cannot decide between them. Such _multivalues_ should be used sparingly.
  They should not be used if the value list would cover the whole value space,
  or the subspace valid for the given language.
  That would mean that we cannot tell anything about this feature for the given word,
  and then it is preferable to just leave the feature out.
  Not mentioning a feature in the data implies the empty value,
  which means that the feature is either irrelevant for this part of speech,
  or its value cannot be determined for this word form due to language-specific reasons.
* Even though the features vary in nature and can be grouped (as in the table
  above), all features with non-empty values appear together in the same FEATS
  column.
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

### Features 1

All of these can be considered attributes of lemmas (rather than
individual word forms) and they represent a fine-grained
sub-classification of words.

Some features are boolean.

### Features 2

These are mostly inflectional features, i.e. they are features of word forms
rather than lemmas. There are exceptions: for instance, gender of nouns is
usually a lexical feature (all word forms of one lemma have the same gender).
However, other parts of speech (adjectives, pronouns, verbs) may inflect for
gender because of agreement with nouns.

### Remarks

The list of features is certainly not exhausting (even if you feel
exhausted after reading it :-)) and later versions of the standard
may include new features found in new languages, corpora or tagsets.

Users can extend this set of universal features and add language-specific
features when necessary. Such features should be described in the language-specific
documentation and follow the general principles outlined above.
Universal and language-specific features of a word are listed together in the FEATS column.

Unlike in various language-specific tagsets, the Universal Features do not
include features aimed at marking _fusion words_ (a word that is result of
merging two other words, which are syntactically independent and belong to
different parts of speech): Czech _dělals (dělal + jsi_ ... main verb +
auxiliary); _proň (pro + něj_ ... preposition + pronoun); German _zum (zu + dem_ ... preposition + article);
Spanish _dámelo (da + me + lo_ ... verb +
clitics) etc. The only truly general approach to fusion words is to apply
language-specific processing step that will split tokens into syntactic words
where necessary. Every syntactic word will then get its own part-of-speech tag
and features. See also <a href="format.html">Format</a>.

-------------

## Extension: Interset features that are not part of this standard

Universal Features are mostly derived from the
<a href="http://ufal.mff.cuni.cz/interset">Interset Project</a>
(<a href="http://ufal.mff.cuni.cz/~zeman/publikace/2008-02/tagdrivers-marrakech-styl-lrec.pdf">Zeman, 2008</a>).
Interset contains additional features that have not yet been adopted as
Universal Features. However, they may be used, if necessary, as part of the
“language-specific extensions” to the Universal Features.

The following Interset features are currently not part of the standard:

* <a href="ud-feat/postponed/Abbr.html">Abbr</a>
* <a href="ud-feat/postponed/AdjType.html">AdjType</a>
* <a href="ud-feat/postponed/AdpType.html">AdpType</a>
* <a href="ud-feat/postponed/AdvType.html">AdvType</a>
* <a href="ud-feat/postponed/ConjType.html">ConjType</a>
* <a href="ud-feat/postponed/Echo.html">Echo</a>
* <a href="ud-feat/postponed/Foreign.html">Foreign</a>
* <a href="ud-feat/postponed/Hyph.html">Hyph</a>
* <a href="ud-feat/postponed/Meta.html">Meta</a>
* <a href="ud-feat/postponed/NameType.html">NameType</a>
* <a href="ud-feat/postponed/NounType.html">NounType</a>
* <a href="ud-feat/postponed/NumForm.html">NumForm</a>
* <a href="ud-feat/postponed/NumValue.html">NumValue</a>
* <a href="ud-feat/postponed/PartType.html">PartType</a>
* <a href="ud-feat/postponed/Politeness.html">Politeness</a>
* <a href="ud-feat/postponed/PrepCase.html">PrepCase</a>
* <a href="ud-feat/postponed/PunctSide.html">PunctSide</a>
* <a href="ud-feat/postponed/PunctType.html">PunctType</a>
* <a href="ud-feat/postponed/Style.html">Style</a>
* <a href="ud-feat/postponed/Typo.html">Typo</a>
* <a href="ud-feat/postponed/VerbType.html">VerbType</a>

-------------

## Language-specific documentation

(TODO)
