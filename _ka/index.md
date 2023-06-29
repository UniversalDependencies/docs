---
layout: base
title:  'Georgian UD'
udver: '2'
---

# UD for LANGUAGE <span class="flagspan"><img class="flag" src="../../flags/svg/AQ.svg" /></span>

This is a **work-in-progress** overview of the UD annotation for Georgian.

## Tokenization and Word Segmentation

* In Modern Georgian, words are delimited regularly by white spaces and punctuation marks. However, in Old Georgian, tokenization was an irregular process, as words were sometimes separated by white spaces and sometimes not. Additionally, depending on the century, words in Old Georgian could also be separated by paragraph separators (჻).
* Punctuation symbols are not separated from the words; that holds even for hyphenated compounds such as siblings “და-ძმა” 'sister and brother' (one token) etc. However, the dash is separated from the surrounding characters. They can consist of a sequence of symbols, such as a question mark followed by an exclamation mark (?!), an exclamation mark followed by two full stops (!..) and ellipsis (…) and appear: a) in abbreviations (a.š. ‘etc.’, e.i. ‘i.e.’, etc.) and b) in numeric expressions (1.2, 0,5, etc.).  
* Due to rich agglutinating type of morphology, clitics can be treated as multi-word tokens and segmented to individual syntactic words in the following cases: a) auxiliary verbs (AUX) attached to the nominal paradigm, which add functional and grammatical meaning to the sentence, expressing tense, aspect, mood, etc.: სახლია = სახლი+ა 'is a house', b) postpositions  represented by a suffix attached to an inflected nominal (noun, adjective, numeral and pronoun): სახლში = სახლ+ში 'in the house', c) the indirect speech particle represented by a suffix attached to an inflected nominal or verb: სახლიო = სახლი+ო 'a house as it was said', წერსო = წერს+ო 'he writes as it was said'. 

---
**Instruction**: Describe the general rules for delimiting words (for example, based on whitespace and punctuation) and exceptions to these rules. Specify whether words with spaces and/or multiword tokens occur. Include links to further language-specific documentation if available.

---

## Morphology

### Tags

* UD_Georgian-GLC treebank uses all UPOS tags except of [DET](https://universaldependencies.org/u/pos/DET.html), [SYM] (https://universaldependencies.org/u/pos/SYM.html) and [X](https://universaldependencies.org/u/pos/X.html).

* There are two types of particles (PART) in Georgian. Those acting as separate words subdivided into different lexical classes: არ 'not', ვერ 'not' etc.) and those belonging to clitics and occupying concrete slots in the nominal or verbal paradigm: −ღა, -ცა etc. Thus, the PART tag is assigned to those particles, which act as separate tokens and the verbal particle denoting evidentiality: -მეთქი 'As I said', -ო 'as he/them said' etc.  
* Auxiliaries (AUX) add functional and grammatical meaning to the sentence, expressing tense, aspect, mood, etc., and can be of two types: (a) those which accompany the nominal paradigm and (b) those which accompany the verbal paradigm. If the auxiliaries are represented as clitics: მთავარია = მთავარი + ა 'it is important', სახლია = სახლი + ა 'it is a house', they are considered as copula verbs and assigned cop in DEPREL; while if they act as separate words: უნდა 'it should', შეუძლია 'it can' etc., they are considered as auxiliaries and assigned aux in DEPREL.
* Verbal forms indicating verbal nouns or verbal adjectives are assigned a tag VERB with additional information on the features of verbal forms, especially, participles are assigned: VerbForm=Part, while masdars - VerbForm=Vnoun.

---
**Instruction**: Specify any unused tags. Explain what words are tagged as PART. Describe how the AUX-VERB and DET-PRON distinctions are drawn, and specify whether there are (de)verbal forms tagged as ADJ, ADV or NOUN. Include links to language-specific tag definitions if any.

---

### Features

#### Lexical Features

* UD_Georgian-GLC treebank uses all main lexical FEATS tags except of [REflex] (https://universaldependencies.org/u/feat/Reflex.html)

#### Inflectional Features
##### Nominal Features

* UD_Georgian-GLC treebank uses all main inflectional FEATS tags except of [Gender] (https://universaldependencies.org/u/feat/Gender.html), [NounClass] (https://universaldependencies.org/u/feat/NounClass.html) and [Definite] (https://universaldependencies.org/u/feat/Definite.html).
** Nouns have inherent Animacy and inflect for Number (singular or plural) and Case (nominative, ergative, dative, genetive, instrumental, essive (adverbial) and vocative).
** Adjectives in the majority of cases agree with nouns (in both attributive and predicative position) with respect to Case. Many adjectives inflect for Degree (diminutive, positive, comparative, superlative), Case and Number.
** Numerals agree with nouns (in both attributive and predicative position) with respect to Case and inflect for Case and very rarely for Number: ორი 'two in Singular' -> ორნი 'two in Plural'.
** Many pronouns agree with nouns with respect to Case and inflect for Case and Number. Some types of pronouns (personal, demonstrative and possessive pronouns) reflect Person (1, 2, 3). 

##### Verbal Features

* UD_Georgian-GLC treebank uses all main inflectional FEATS tags except of [Polarity] (https://universaldependencies.org/u/feat/Polarity.html), [Polite] (https://universaldependencies.org/u/feat/Polite.html) and [Clusivity] (https://universaldependencies.org/u/feat/Clusivity.html).
** Verbs inflect for Tense (present, imperfect, future, aorist, perfect, pluperfect), Aspect (imperfective, perfective) and Mood (indicative, subjunctive, conditional, imperative) so called TAM series, which specifies case-marking and relationships so called agreement between participants such as agent and patient by means of preverbs, version markers and thematic suffixes. The category of voice can be subdivided into the active, autoactive, inactive, passive and mediopassive voices, but the traditional Georgian grammar (Shanidze 1961, 1973) distinguishes only active, middle and passive voices. 
** The category of personality covers unipersonal, bipersonal and tripersonal verbs. As a result verbal morphology includes agreement between the verb and its arguments in terms of Person, Case and Number. While in Indo-European languages, the verb generally agrees with the subject of the sentence, in Georgian the verb agrees not only with the subject, but with its objects as well, both direct and/or indirect. The verb in Georgian has core and peripheral arguments. A core argument agrees morphologically with the verb by means of Person (1, 2 or 3 for Person[subj], Person[obj], Person[iobj]) and Number (singular or plural for Number[subj], Number[obj], Number[io]), while a peripheral argument does not. The number of core arguments affects the conjugation system as a whole, subdividing it into subject and object paradigms.
** There are two types of nonfinite forms: participles and masdars. 

---
**Instruction**: Describe inherent and inflectional features for major word classes (at least NOUN and VERB). Describe other noteworthy features. Include links to language-specific feature definitions if any.

---

## Syntax
* UD_Georgian-GLC treebank uses all main DEPREL tags except of [expl] (https://universaldependencies.org/u/dep/expl.html), [dislocated] (https://universaldependencies.org/u/dep/dislocated.html), [clf] (https://universaldependencies.org/u/dep/clf.html) and [reparandum] (https://universaldependencies.org/u/dep/reparandum.html). Word order in Georgian language has a flexible word order, which sometimes follows Subject-Indirect Object-Object-Verb patterns.
* Subjects have the following characteristics:
** Case marking: Subjects occur in nominative, ergative or dative. 
** Passivization: Subjects are suppressed when verbs (both intransitive and transitive) are passivized. 
** A verb always agrees with first and second-person subjects in number, while third-person inanimate subjects require singular number agreement regardless of their logical number.
* Direct objects have the following characteristics:
** Case marking: Direct objects occur in nominative or dative.
* Indirect objects have the following characteristics:
** Case marking: Indirect objects occur in dative.
** The following scheme reflects correlation between the case of the core arguments and the conjugation system of a verb:
---
v-type: NOM: NOM: NOM: NOM: NOM
: NOM (v-set): NOM (v-set) + DAT: ERG (v-set) + DAT: ERG (v-set) + DAT: ERG (v-set) + DAT
m-type: : DAT (m-set): NOM (m-set): NOM (m-set) + DAT: NOM + DAT 
: : : : DAT (-a): DAT (m- -a) 
---
** The following subtypes are used in Georgian:
*** acl: clausal modifier of noun (adnominal clause)
*** advcl: adverbial clause modifier
*** advmod: adverbial modifier
*** advmod:emph: emphasizing word, intensifier
*** advmod:lmod: locative adverbial modifier
*** amod: adjectival modifier
*** appos: appositional modifier
*** aux: auxiliary
*** case: case marking
*** cc: coordinating conjunction
*** ccomp: clausal complement
*** compound: compound
*** conj: conjunct
*** cop: copula
*** csubj: clausal subject
*** csubj:outer: outer clause clausal subject
*** csubj:pass: clausal passive subject
*** dep: unspecified dependency
*** det: determiner
*** det:nummod: pronominal quantifier agreeing in case with the noun
*** det:poss: possessive determiner
*** discourse: discourse element
*** fixed: fixed multiword expression
*** flat: flat multiword expression
*** flat:foreign: foreign words
*** flat:name: names
*** goeswith: goes with
*** iobj: indirect object
*** list: list
*** mark: marker
*** nmod: nominal modifier
*** nsubj: nominal subject
*** nummod: numeric modifier
*** obj: object
*** obl: oblique nominal
*** orphan: orphan
*** parataxis: parataxis
*** punct: punctuation
*** root: root
*** vocative: vocative
*** xcomp: open clausal complement

---
**Instruction**: Give criteria for identifying core arguments (subjects and objects), and describe the range of copula constructions in nonverbal clauses. List all subtype relations used. Include links to language-specific relations definitions if any.

---

## Treebanks

There are not UD treebanks of Georgian.

---
**Instruction**: Treebank-specific pages are generated automatically from the README file in the treebank repository and
from the data in the latest release. Link to the respective `*-index.html` page in the `treebanks` folder, using the language code
and the treebank code in the file name.

---
