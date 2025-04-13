---
layout: base
title:  'Georgian UD'
udver: '2'
---

# UD for Georgian <span class="flagspan"><img class="flag" src="../../flags/svg/GE.svg" /></span>

This is a **work-in-progress** overview of the UD annotation for Georgian.

## Tokenization and Word Segmentation

* In Modern Georgian, words are delimited regularly by white spaces and punctuation marks. However, in Old Georgian, tokenization was an irregular process, as words were sometimes separated by white spaces and sometimes not. Additionally, depending on the century, words in Old Georgian could also be separated by paragraph separators (჻).
* Punctuation symbols are not separated from the words; that holds even for hyphenated compounds such as siblings “და-ძმა” 'sister and brother' (one token) etc. However, the dash is separated from the surrounding characters. They can consist of a sequence of symbols, such as a question mark followed by an exclamation mark (?!), an exclamation mark followed by two full stops (!..) and ellipsis (…) and appear: a) in abbreviations (ა.შ. ‘etc.’, ე.ი. ‘i.e.’, etc.) and b) in numeric expressions (1.2, 0,5, etc.).
* Due to rich agglutinating type of morphology, clitics can be treated as multi-word tokens and segmented to individual syntactic words in the following cases:
  a) auxiliary verbs (AUX) attached to the nominal paradigm, which add functional and grammatical meaning to the sentence, expressing tense, aspect, mood, etc.: სახლია = სახლი+ა 'is a house';
  b) postpositions  represented by a suffix attached to an inflected nominal (noun, adjective, numeral and pronoun): სახლში = სახლ+ში 'in the house';
  c) the indirect speech particle represented by a suffix attached to an inflected nominal or verb: სახლიო = სახლი+ო 'a house as smb. said', წერსო = წერს+ო 'he writes as smb. said'.

---

## Lemmatization

### Lemmatization Strategies
Georgian dictionaries employ various strategies for representing lemmas in nominal and verbal paradigms, each with distinct implications for computational systems and linguistic analysis:

Nominals: The lemma is consistently represented as the nominative singular form, providing a straightforward and standard approach.

Verbs: Unlike nominals, Georgian verbs lack an infinitive form, resulting in diverse lemmatization strategies:
* Verbal Noun (Masdar): Some dictionaries (Chubinashvili 1940; Tsotsanidze et al. 2014 and others) use the verbal noun as the lemma, treating it as an abstract root for verb generation. 
* Abstract Root: Some dictionaries (Tschenkeli 1965), use abstract verbal roots accompanied by valency information. 
* Third-Person Singular (Present/Future): Widely adopted by lexicographers (Chikobava 1950–1964; Oniani 1966; Rayfield 2006 and others), this approach represents lemmas as finite verb forms, supplemented with grammatical information. 

### Lemmatization in UD Treebanks
For Universal Dependency (UD) treebanks, lemmatization practices typically reflect a hybrid approach, influenced by the diverse strategies used for Georgian verbs. Depending on the treebank, two main approaches are observed:

* Third-Person Singular Lemmatization: This method is widely used due to its prevalence in Georgian lexicography and its compatibility with treebank annotation principles.
* Verbal Noun-Based Lemmatization: This approach aligns with dictionaries that prioritize the masdar form but may present challenges for verbs lacking nominal counterparts.

By combining these approaches, UD treebanks aim to balance linguistic tradition with computational utility and user accessibility.

---

## Morphology

### Tags

* UD_Georgian-GLC treebank uses all UPOS tags except of [DET](https://universaldependencies.org/u/pos/DET.html).

* There are two types of particles (PART) in Georgian. Those acting as separate words subdivided into different lexical classes: არ 'not', ვერ 'not' etc.) and those belonging to clitics and occupying concrete slots in the nominal or verbal paradigm: −ღა, -ცა etc. Thus, the PART tag is assigned to those particles, which act as separate tokens and the verbal particle denoting the indirect speech markers: -მეთქი 'As I said', -ო 'as he/them said' etc.
* Auxiliaries (AUX) add functional and grammatical meaning to the sentence, expressing tense, aspect, mood, etc., and can be of two types: (a) those which accompany the nominal paradigm and (b) those which accompany the verbal paradigm. If the auxiliaries are represented as clitics: მთავარია = მთავარი + ა 'it is important', სახლია = სახლი + ა 'it is a house', they are considered as copula verbs and assigned cop in DEPREL; while if they act as separate words: უნდა 'it should', შეუძლია 'it can' etc., they are considered as auxiliaries and assigned aux in DEPREL.
* Verbal forms indicating verbal nouns or verbal adjectives are assigned a tag VERB with additional information on the features of verbal forms, especially, participles are assigned: VerbForm=Part, while masdars - VerbForm=Vnoun.

---

### Features

#### Lexical Features

* UD_Georgian-GLC treebank uses all main lexical FEATS tags except of [REflex](https://universaldependencies.org/u/feat/Reflex.html)

#### Inflectional Features
##### Nominal Features

* UD_Georgian-GLC treebank uses all main inflectional FEATS tags except of [Gender](https://universaldependencies.org/u/feat/Gender.html), [NounClass](https://universaldependencies.org/u/feat/NounClass.html) and [Definite](https://universaldependencies.org/u/feat/Definite.html).
  * Nouns have inherent Animacy and inflect for Number (singular or plural) and Case (nominative, ergative, dative, genetive, instrumental, essive (adverbial) and vocative).
  * Adjectives in the majority of cases agree with nouns (in both attributive and predicative position) with respect to Case. Many adjectives inflect for Degree (diminutive, positive, comparative, superlative), Case and Number.
  * Numerals agree with nouns (in both attributive and predicative position) with respect to Case and inflect for Case and very rarely for Number: ორი 'two in Singular' -> ორნი 'two in Plural'.
  * Many pronouns agree with nouns with respect to Case and inflect for Case and Number. Some types of pronouns (personal, demonstrative and possessive pronouns) reflect Person (1, 2, 3).

##### Verbal Features

* UD_Georgian-GLC treebank uses all main inflectional FEATS tags except of [Polarity](https://universaldependencies.org/u/feat/Polarity.html), [Polite](https://universaldependencies.org/u/feat/Polite.html) and [Clusivity](https://universaldependencies.org/u/feat/Clusivity.html).
  * Verbs inflect for Tense (present, imperfect, future, aorist, perfect, pluperfect), Aspect (imperfective, perfective) and Mood (indicative, subjunctive, conditional, imperative) so called TAM series, which specifies case-marking and relationships so called agreement between participants such as agent and patient by means of preverbs, version markers and thematic suffixes. The category of voice can be subdivided into the active, autoactive, inactive, passive and mediopassive voices, but the traditional Georgian grammar (Shanidze 1961, 1973) distinguishes only active, middle and passive voices.
  * The category of personality covers unipersonal, bipersonal and tripersonal verbs. As a result verbal morphology includes agreement between the verb and its arguments in terms of Person, Case and Number. While in Indo-European languages, the verb generally agrees with the subject of the sentence, in Georgian the verb agrees not only with the subject, but with its objects as well, both direct and/or indirect. The verb in Georgian has core and peripheral arguments. A core argument agrees morphologically with the verb by means of Person (1, 2, or 3 for Person[subj], Person[obj], Person[io]) and Number (singular or plural for Number[subj], Number[obj], Number[io]), while a peripheral argument does not. The number of core arguments affects the conjugation system as a whole, subdividing it into subject and object paradigms.
  * There are two types of nonfinite forms: participles and masdars.

---
**Instruction**: Describe inherent and inflectional features for major word classes (at least NOUN and VERB). Describe other noteworthy features. Include links to language-specific feature definitions if any.

---

## Syntax
* UD_Georgian-GLC treebank uses all main DEPREL tags except of [expl](https://universaldependencies.org/u/dep/expl.html), [dislocated](https://universaldependencies.org/u/dep/dislocated.html), [clf](https://universaldependencies.org/u/dep/clf.html) and [reparandum](https://universaldependencies.org/u/dep/reparandum.html). Georgian language has a flexible word order, which sometimes follows Subject-Indirect Object-Object-Verb patterns.
* Subjects have the following characteristics:
  * Case marking: Subjects occur in nominative, ergative or dative.
  * Passivization: Subjects are suppressed when verbs (both intransitive and transitive) are passivized.
  * A verb always agrees with first and second-person subjects in number, while third-person inanimate subjects require singular number agreement regardless of their logical number.
* Direct objects have the following characteristics:
  * Case marking: Direct objects occur in nominative or dative.
* Indirect objects have the following characteristics:
  * Case marking: Indirect objects occur in dative.
  * The following scheme reflects the correlation between the case of the core arguments and the conjugation system of a verb:

| *v*-type             | ------------------ | *m*-type             | ------------------ |
| ------------------ | ------------------ | ------------------ | ------------------ |
| NOM                | NOM (*v*-set)        |   |   |
| NOM                | NOM (*v*-set) + DAT  | DAT (*m*-set)        |   |
| NOM                | ERG (*v*-set) + DAT  | NOM (*m*-set)        |   |
| NOM                | ERG (*v*-set) + DAT  | NOM (*m*-set) + DAT  | DAT (*∅* -*a*)         |
| NOM                | ERG (*v*-set) + DAT  | NOM (*∅*-set) + DAT  | DAT (*m*- -*a*)           |


* The following subtypes are used in Georgian:
  * acl: clausal modifier of noun (adnominal clause)
  * advcl: adverbial clause modifier
  * advmod: adverbial modifier
  * advmod:emph: emphasizing word, intensifier
  * advmod:lmod: locative adverbial modifier
  * amod: adjectival modifier
  * appos: appositional modifier
  * aux: auxiliary
  * case: case marking
  * cc: coordinating conjunction
  * ccomp: clausal complement
  * compound: compound
  * conj: conjunct
  * cop: copula
  * csubj: clausal subject
  * csubj:outer: outer clause clausal subject
  * csubj:pass: clausal passive subject
  * dep: unspecified dependency
  * det: determiner
  * det:nummod: pronominal quantifier agreeing in case with the noun
  * det:poss: possessive determiner
  * discourse: discourse element
  * fixed: fixed multiword expression
  * flat: flat multiword expression
  * flat:foreign: foreign words
  * flat:name: names
  * goeswith: goes with
  * iobj: indirect object
  * list: list
  * mark: marker
  * nmod: nominal modifier
  * nsubj: nominal subject
  * nummod: numeric modifier
  * obj: object
  * obl: oblique nominal
  * orphan: orphan
  * parataxis: parataxis
  * punct: punctuation
  * root: root
  * vocative: vocative
  * xcomp: open clausal complement

---

## Treebanks

[UD_Georgian-GLC](https://universaldependencies.org/treebanks/ka_glc/index.html) is the first UD treebank for Georgian.

---
