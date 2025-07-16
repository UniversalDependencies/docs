---
layout: base
title:  'Megrelian UD'
udver: '2'
---

# UD for Megrelian <span class="flagspan"><img class="flag" src="../../flags/svg/XMF.svg" /></span>

This is a **work-in-progress** overview of the UD annotation for Megrelian.

## Tokenization and Word Segmentation

* In Megrelian, words are delimited regularly by white spaces and punctuation marks. 
* Punctuation symbols are not separated from the words; that holds even for hyphenated compounds such as suddenly ხათე-ხათე (*xɑtɛ-xɑtɛ*) 'suddenly-suddenly' (one token) etc. However, the dash is separated from the surrounding characters. They can consist of a sequence of symbols, such as a question mark followed by an exclamation mark (?!), an exclamation mark followed by two full stops (!..) and ellipsis (…) and appear in numeric expressions (1.2, 0,5, etc.).
* Due to rich agglutinating type of morphology, clitics can be treated as multi-word tokens and segmented to individual syntactic words in the following cases:
  a) postpositions  represented by a suffix attached to an inflected nominal (noun, adjective, numeral and pronoun): კოჩი<b>წკალა</b> (*kʼɔt͡ʃi<b>t͡sʼkʼɑlɑ</b>*) 'with a human', ჸუდეშა<b>ხ</b> (*ʔudɛʃɑ<b>x</b>*) 'until the house';
  b) the indirect speech particle represented by a suffix attached to an inflected nominal or verb: კოჩქი<b>ა</b> (*kʼɔt͡ʃki<b>ɑ</b>*) 'a man as smb. said', ვჭარუნქი<b>ა</b> (*vt͡ʃʼɑrunki<b>ɑ</b>*) 'I write as smb. said'.

---

## Lemmatization

### Lemmatization Strategies
Lemmatization strategies for Megrelian tokens generally follow the approaches found in Megrelian dictionaries, particulary those used for nominal and verbal paradigms, especially:

Nominals: The lemma is consistently represented as the nominative singular form, providing a straightforward and standard approach.

Verbs: The lemma is represented as the verbal noun, treating it as an abstract root for verbal generation. 

---

## Morphology

### Tags

* The UD_Megrelian-MLC treebank uses all UPOS tags.

* There are two types of particles (PART) in Megrelian. Those acting as separate words subdivided into different lexical classes: ხოლო xɔlɔ 'too') and those belonging to clitics, occupying specific slots before or after the root in the nominal or verbal paradigm: ვა(რ)- (*va(r)-*) 'no', −ო (*-ɔ*) 'interrogation particle', etc. 
* In Megrelian, the copula verb იჸინ (*iʔin*) 'to be' is used to express existence, identity, and predication, appearing in various forms to agree with person, number, and tense. In contemporary usage, it occurs both as a free form and as part of compound verb constructions, providing essential grammatical functions in equational and locational sentences.
* Verbal forms indicating verbal nouns or verbal adjectives are assigned a tag VERB with additional information on the features of verbal forms, especially, participles are assigned: VerbForm=Part, while masdars - VerbForm=Vnoun.

---

### Features

#### Lexical Features

* UD_Megrelian-MLC treebank uses all main lexical FEATS tags.

#### Inflectional Features
##### Nominal Features

* The UD_Megrelian-MLC treebank uses all main inflectional FEATS tags except of [Gender](https://universaldependencies.org/u/feat/Gender.html), [NounClass](https://universaldependencies.org/u/feat/NounClass.html) and [Definite](https://universaldependencies.org/u/feat/Definite.html).
  * Nouns inflect for Number (singular or plural) and Case (nominative, ergative, dative, genetive, allative, ablative, benefactive, instrumental and essive (adverbial).
  * Adjectives in the majority of cases agree with nouns (in both attributive and predicative position) with respect to Case. Many adjectives inflect for Degree (diminutive, equative, superlative), Case and Number.
  * Numerals agree with nouns (in both attributive and predicative position) with respect to Case and inflect for Case and very rarely for Number.
  * Many pronouns agree with nouns with respect to Case and inflect for Case and Number. Some types of pronouns (personal, demonstrative and possessive pronouns) reflect Person (1, 2, 3).

##### Verbal Features

* The UD_Megrelian-MLC treebank uses all main inflectional FEATS tags except of [Polarity](https://universaldependencies.org/u/feat/Polarity.html), [Polite](https://universaldependencies.org/u/feat/Polite.html) and [Clusivity](https://universaldependencies.org/u/feat/Clusivity.html).
  * Verbs inflect for Tense (present, imperfect, future, aorist, perfect, pluperfect), Aspect (imperfective, perfective) and Mood (indicative, subjunctive, conditional) so-called TAM series, which specifies case-marking and so-called agreement relationships between participants such as agent and patient by means of preverbs, version markers and thematic suffixes. The category of voice can be subdivided into the active and passive voices.
  * The category of personality covers unipersonal, bipersonal and tripersonal verbs. As a result verbal morphology includes agreement between the verb and its arguments in terms of Person, Case and Number. The verb agrees not only with the subject, but with its objects as well, both direct and/or indirect. The verb in Megrelian has core and peripheral arguments. A core argument agrees morphologically with the verb by means of Person (1, 2, or 3 for Person[subj], Person[obj], Person[io]) and Number (singular or plural for Number[subj], Number[obj], Number[io]), while a peripheral argument does not. 
  * There are two types of nonfinite forms: participles (verbal adjectives) and masdars (verbal nouns).

---
**Instruction**: Describe inherent and inflectional features for major word classes (at least NOUN and VERB). Describe other noteworthy features. Include links to language-specific feature definitions if any.

---

## Syntax


---

## Treebanks

There is only one treebank for Megrelian:

* [UD_Megrelian-MLC](https://universaldependencies.org/treebanks/xmf_mlc/index.html)

---
