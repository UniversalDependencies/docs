---
layout: base
title:  'Old Georgian UD'
udver: '2'
---

# UD for Georgian <span class="flagspan"><img class="flag" src="../../flags/svg/OGE.svg" /></span>

This is a **work-in-progress** overview of the UD annotation for Georgian.

## Tokenization and Word Segmentation

* In Old Georgian, tokenization was an irregular process, as words were sometimes separated by white spaces and sometimes not. Additionally, depending on the century, paragraphs, sentences or words in Old Georgian could also be separated by paragraph separators (჻).
* In Old Georgian manuscripts, punctuation symbols were rarely used. However, printed versions of these manuscripts typically follow the punctuation rules of Modern Georgian. In particular, punctuation marks are not separated from the words they accompany—even in hyphenated compounds such as არა-საჴმარი (ara-sax̣mari, ‘unusable’), დიდ-დიდი (did-didi, 'big-big') which are treated as a single token. An exception to this rule is the dash, which is separated from the surrounding characters. Additionally, punctuation marks can appear in sequences, such as a question mark followed by an exclamation mark (?!), an exclamation mark followed by two full stops (!..), or an ellipsis (…).
* Due to rich agglutinating type of morphology, clitics can be treated as multi-word tokens and segmented to individual syntactic words in the following cases:
  a) auxiliary verbs (AUX) attached to a nominal, which add functional and grammatical meaning to the sentence, expressing tense, aspect, mood, etc.: წმიდა-ყო *cmida-qo* = წმიდა+ყო 'he/she made holy', თავს-იდვა *tʻavs-idva* = თავს+იდვა 'he/she made holy' etc.;
  b) postpositions  represented by a suffix attached to an inflected nominal (noun, adjective, numeral and pronoun): კაცებრივ *kacʻebriv* = კაც+ებრივ 'like humans', კაცისაგან *kacʻisagan* = კაცისა+გან 'from a man';
  c) the indirect speech particle represented by a suffix attached to an inflected nominal or verb: სახლიო *saxlio* = სახლი+ო 'a house as smb. said', წერსო *cerso* = წერს+ო 'he writes as smb. said'.

---

## Lemmatization

### Lemmatization Strategies
Nominals: The lemma is consistently represented as the nominative singular form, providing a straightforward and standard approach.

Verbs: Georgian verbs lack an infinitive form, resulting in two lemmatization strategies:
* Verbal Noun (Masdar), which use the verbal noun as the lemma, treating it as an abstract root for verb generation. 
* Third-Person Singular (Present/Future), which represents lemmas as finite verb forms, supplemented with grammatical information. 

### Lemmatization in UD Treebanks
For Universal Dependency (UD) treebanks, lemmatization practices typically reflect a hybrid approach, influenced by the diverse strategies used for Georgian verbs. 

---

## Morphology

### Tags

* The UD_Old_Georgian-GLC treebank uses all UPOS tags.

* There are two types of particles (PART) in Georgian. Those acting as separate words subdivided into different lexical classes: არ *ar* 'not', ვერ *ver* 'not (able)' etc.) and those belonging to clitics and occupying concrete slots in the nominal or verbal paradigm: −ღა *-ġa*, -ცა *-cʻa* etc. Thus, the PART tag is assigned to those particles, which act as separate tokens and the verbal particle denoting the indirect speech markers: -მეთქი *-metʻkʻi* 'As I said', -ო 'as he/them said' etc.
* Auxiliaries (AUX) add functional and grammatical meaning to the sentence, expressing tense, aspect, mood, etc., and can be of two types: (a) those which accompany the nominal paradigm and (b) those which accompany the verbal paradigm. Copulas represented as separate words, such as მთავარ არს *mtʻavar ars* ('it is important') or სახლი არს *saxli ars* ('it is a house') are considered copula verbs and assigned cop in DEPREL. Other auxiliaries that act as separate words, such as ჴმა-ყო *x̣ma-qo* ('he/she made a sound') etc., are considered auxiliaries and assigned aux in DEPREL.
* Verbal forms indicating verbal nouns or verbal adjectives are assigned a tag VERB with additional information on the features of verbal forms, especially, participles are assigned: VerbForm=Part, while masdars - VerbForm=Vnoun.

---

### Features

#### Lexical Features

* UD_Old_Georgian-GLC treebank uses all main lexical FEATS tags except of [REflex](https://universaldependencies.org/u/feat/Reflex.html)

#### Inflectional Features
##### Nominal Features

* The UD_Georgian treebanks use all main inflectional FEATS tags except of [Gender](https://universaldependencies.org/u/feat/Gender.html), [NounClass](https://universaldependencies.org/u/feat/NounClass.html) and [Definite](https://universaldependencies.org/u/feat/Definite.html).
  * Nouns have inherent Animacy and inflect for Number (singular or plural) and Case (nominative, ergative, dative, genetive, instrumental, essive (adverbial) and vocative).
  * Adjectives in the majority of cases agree with nouns (in both attributive and predicative position) with respect to Case. Many adjectives inflect for Degree (diminutive, positive, comparative, superlative), Case and Number.
  * Numerals agree with nouns (in both attributive and predicative position) with respect to Case and inflect for Case and very rarely for Number: ორი *ori* 'two in Singular' -> ორნი *orni* 'two in Plural'.
  * Many pronouns agree with nouns with respect to Case and inflect for Case and Number. Some types of pronouns (personal, demonstrative and possessive pronouns) reflect Person (1, 2, 3).

##### Verbal Features

* The UD_Old_Georgian_GLC treebank uses all main inflectional FEATS tags except of [Polarity](https://universaldependencies.org/u/feat/Polarity.html), [Polite](https://universaldependencies.org/u/feat/Polite.html) and [Clusivity](https://universaldependencies.org/u/feat/Clusivity.html).
  * Verbs inflect for Tense (present, imperfect, future, aorist, perfect, pluperfect), Aspect (imperfective, perfective) and Mood (indicative, subjunctive, conditional, imperative) so-called TAM series, which specifies case-marking and so-called agreement relationships between participants such as agent and patient by means of preverbs, version markers and thematic suffixes. The category of voice can be subdivided into the active, autoactive, inactive, passive and mediopassive voices, but the traditional Georgian grammar (Shanidze 1961, 1973) distinguishes only active, middle and passive voices.
  * The category of personality covers unipersonal, bipersonal and tripersonal verbs. As a result verbal morphology includes agreement between the verb and its arguments in terms of Person, Case and Number. While in Indo-European languages, the verb generally agrees with the subject of the sentence, in Georgian the verb agrees not only with the subject, but with its objects as well, both direct and/or indirect. The verb in Georgian has core and peripheral arguments. A core argument agrees morphologically with the verb by means of Person (1, 2, or 3 for Person[subj], Person[obj], Person[io]) and Number (singular or plural for Number[subj], Number[obj], Number[io]), while a peripheral argument does not. The number of core arguments affects the conjugation system as a whole, subdividing it into subject and object paradigms.
  * There are two types of nonfinite forms: participles and masdars.

---
**Instruction**: Describe inherent and inflectional features for major word classes (at least NOUN and VERB). Describe other noteworthy features. Include links to language-specific feature definitions if any.

---

## Syntax
* The UD_Old_Georgian_GLC treebank use sall main DEPREL tags except of [expl](https://universaldependencies.org/u/dep/expl.html), [dislocated](https://universaldependencies.org/u/dep/dislocated.html), [clf](https://universaldependencies.org/u/dep/clf.html) and [reparandum](https://universaldependencies.org/u/dep/reparandum.html). The Old Georgian language has a flexible word order, which sometimes prefer to follow Subject-Indirect Object-Object-Verb patterns.
* Subjects have the following characteristics:
  * Case marking: Subjects occur in nominative, ergative or dative.
  * Passivization: Subjects are suppressed when verbs (both intransitive and transitive) are passivized.
  * A verb always agrees with first- and second-person subjects in number, while third-person inanimate subjects require singular number agreement regardless of their logical number.
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


* The following subtypes are used for Old Georgian:
  * [acl](https://universaldependencies.org/u/dep/acl.html): clausal modifier of noun (adnominal clause)
  * [advcl](https://universaldependencies.org/u/dep/advcl.html): adverbial clause modifier
  * [advmod](https://universaldependencies.org/u/dep/advmod.html): adverbial modifier
  * [advmod:emph](https://universaldependencies.org/u/dep/advmod-emph.html): emphasizing word, intensifier
  * [advmod:lmod](https://universaldependencies.org/u/dep/advmod-lmod.html): locative adverbial modifier
  * [amod](https://universaldependencies.org/u/dep/amod.html): adjectival modifier
  * [appos](https://universaldependencies.org/u/dep/appos.html): appositional modifier
  * [aux](https://universaldependencies.org/u/dep/aux_.html): auxiliary
  * [case](https://universaldependencies.org/u/dep/case.html): case marking
  * [cc](https://universaldependencies.org/u/dep/cc.html): coordinating conjunction
  * [ccomp](https://universaldependencies.org/u/dep/ccomp.html): clausal complement
  * [compound](https://universaldependencies.org/u/dep/compound.html): compound
  * [conj](https://universaldependencies.org/u/dep/conj.html): conjunct
  * [cop](https://universaldependencies.org/u/dep/cop.html): copula
  * [csubj](https://universaldependencies.org/u/dep/csubj.html): clausal subject
  * [csubj:outer](https://universaldependencies.org/u/dep/csubj-outer.html): outer clause clausal subject
  * [csubj:pass](https://universaldependencies.org/u/dep/csubj-pass.html): clausal passive subject
  * [dep](https://universaldependencies.org/u/dep/dep.html): unspecified dependency
  * [det](https://universaldependencies.org/u/dep/det.html): determiner
  * [det:nummod](https://universaldependencies.org/u/dep/det-nummod.html): pronominal quantifier agreeing in case with the noun
  * [det:poss](https://universaldependencies.org/u/dep/det-poss.html): possessive determiner
  * [discourse](https://universaldependencies.org/u/dep/discourse.html): discourse element
  * [fixed](https://universaldependencies.org/u/dep/fixed.html): fixed multiword expression
  * [flat](https://universaldependencies.org/u/dep/flat.html): flat multiword expression
  * [flat:foreign](https://universaldependencies.org/u/dep/flat-foreign.html): foreign words
  * [flat:name](https://universaldependencies.org/u/dep/flat-name.html): names
  * [goeswith](https://universaldependencies.org/u/dep/goeswith.html): goes with
  * [iobj](https://universaldependencies.org/u/dep/iobj.html): indirect object
  * [list](https://universaldependencies.org/u/dep/list.html): list
  * [mark](https://universaldependencies.org/u/dep/mark.html): marker
  * [nmod](https://universaldependencies.org/u/dep/nmod.html): nominal modifier
  * [nsubj](https://universaldependencies.org/u/dep/nsubj.html): nominal subject
  * [nummod](https://universaldependencies.org/u/dep/nummod.html): numeric modifier
  * [obj](https://universaldependencies.org/u/dep/obj.html): object
  * [obl](https://universaldependencies.org/u/dep/obl.html): oblique nominal
  * [orphan](https://universaldependencies.org/u/dep/orphan.html): orphan
  * [parataxis](https://universaldependencies.org/u/dep/parataxis.html): parataxis
  * [punct](https://universaldependencies.org/u/dep/punct.html): punctuation
  * [root](https://universaldependencies.org/u/dep/root.html): root
  * [vocative](https://universaldependencies.org/u/dep/vocative.html): vocative
  * [xcomp](https://universaldependencies.org/u/dep/xcomp.html): open clausal complement
  * [advcl:relcl](https://universaldependencies.org/u/dep/advcl-relcl.html) (GNC only)
  * [acl:relcl](https://universaldependencies.org/u/dep/acl-relcl.html) (GNC only)
  * [advmod:neg](https://universaldependencies.org/u/dep/advmod-neg.html) (GNC)
  * [obl:final](https://universaldependencies.org/u/dep/obl-final.html) (GNC)
  * [obl:iobj](https://universaldependencies.org/u/dep/obl-iobj.html) (GNC)
  * [ccomp:speech](https://universaldependencies.org/u/dep/ccomp-speech.html) (GNC)
  * [nmod:iobj](https://universaldependencies.org/u/dep/nmod-iobj.html) (GNC)
  * [nmod:pred](https://universaldependencies.org/u/dep/nmod-pred.html) (GNC)

---

## Treebanks

There are the following treebanks for Old Georgian:

* [UD_Old_Georgian-GLC](https://universaldependencies.org/treebanks/ka_glc/index.html)
* [UD_Georgian-GNC](https://universaldependencies.org/treebanks/ka_gnc/index.html)

---
