---
layout: base
title:  'Tupinambá UD'
udver: '2'
---

# UD for Tupinamba <span class="flagspan"><img class="flag" src="../../flags/svg/BR.svg" /></span>

## Tokenization and Word Segmentation

* Words are delimited by whitespace characters
* According to typographical rules, many punctuation marks are attached to a neighboring word. They are given as separate tokens (words);
* There are no adjectives in Tupinambá. Modification is made by composition, juxtaposing lexical roots, so when a lexical root is modified by another a new word appears as in *kuɲãporaŋ(a)* 'beautiful woman' (*kuɲã* 'woman' + *poraŋ-(a)* 'beauty'). Such words are treated sometimes as [multiword tokens](https://universaldependencies.org/format.html#morphological-annotation), sometimes as a single word.
* Some compound words from Portuguese are written as one word, e.g. _santaCruz_ 'holy cross'. 


## Morphology

### Tags

* Tupinambá uses 16 of the 17 universal POS categories. `ADJ` is not used since there is no separate class of adjectives.
Stative-verbs and possessed nouns behave alike, in a way that is not possible to distinguish them morphologically
(I am ugly / I have uglyness; ugly boy / boy with uglyness).

Mapping UPOS to XPOS Tupinambá

 UPOS | XPOS |
:----: | :------: |
 ADV   | adv      |
 INTJ  | intj     |
 NOUN  | n        |
 PROPN | ppn      |
 VERB  | v, vi, vt, vd|
 ADP   | pp       |
 AUX   | aux      |
 CCONJ | cc       |
 DET   | det      |
 NUM   | num      |
 PART  | pcl      |
 PRON  | pro      |
 SCONJ | sc       |
 PUNCT | punct    |
 SYM   | sym      |
 X     | x        |

### Nominal Features

* Tupinambá nouns are not marked for gender. Number is optionally marked by the lexical root _etá_ .
* Nous can take the following [Cases](https://universaldependencies.org/u/feat/Case.html): `Tra`, `Loc`, `All`, `Per`, `Dat`.
* [NOUN](https://universaldependencies.org/u/pos/NOUN.html), [PROPN](https://universaldependencies.org/u/pos/PROPN.html) and [PRON](https://universaldependencies.org/u/pos/PRON.html), are not marked for [Gender](https://universaldependencies.org/u/feat/Gender.html).
* Personal Pronouns and Person Markers distinguish [Number](https://universaldependencies.org/u/feat/Number.html)(Singular or Plural). They also distinguish [Clusivity](https://universaldependencies.org/u/feat/Clusivity.html) in the 1<sup>st</sup> person plural.
* The relational markers `Rel`, which indicate contiguity or non-contiguity between a head and its dependent, take respectively the following features: `Rel=Cont` and `Rel=NCont`. A third type or relational indicates that a possessor is not present, neither contiguously or non-contiguously. This relational is tagged `Rel=Abs`, for absolute. The reflexive/correferential morpheme _o_. which is often referred to as 'relational<sub>3</sub>' is associated with the feature-value `Reflex=Yes`. 
* Tupinambá is reach in nominalizations. Lexical roots can be nominalized by suffixes that receive the following features: nominalizatin of circusntance `Nomzr=Circ` (*-saβ* 'thing, way of VERB'), passive nominalization `Nomzr=Pas`, deverbal passive nominalization `Nomzr=DevPass` (*-pɨr* 'one that is VERB past participle'), `Nomzr=Ag`(*-sar* 'the VERB-_er_').
* Nouns may also be reduplicated in both ways denoting: plurality, collectivity, superlativity, and other semantic nuances. Numerals may also be reduplicated in order to indicate distribution.
* Nouns are also marked for tense.
* As an omnipredicative language, lexical roots in Tupinambá are existential predicates. In order to function as arguments, the referential marker (a  ̴ ∅), is required (marked as `Case=Ref`) despite its function being nothing like that of nominal cases.

### Verbal Features

* Verbs have a lexical [Aspect](https://universaldependencies.org/u/feat/Aspect.html): imperfective (Imp), perfective (Perf), iterative (Iter).
* As a head marking language, Tupinambá cross-references both arguments of a two-place predicate, S and O, only when O is third person: *a-s-epjak* 1.SG-3(RELNCONT)-see 'I see him/her/it/them'. The [PERSON](https://universaldependencies.org/u/feat/Person.html) feature in this case ha sthe value `Person=13` indicating that A is 1<sup>st</sup> and O 3<sup>rd</sup> person.
* The protmanteau markers indicating 1 -> 2 (A is 1<sup>st</sup> and U is 2<sup>nd</sup> person) are asigned the [PERSON](https://universaldependencies.org/u/feat/Person.html) feature `Person12Sg` and `Person12Pl`.
* The lexical root in the *gerund* [(VerbForm=Ger)](https://universaldependencies.org/u/feat/VerbForm.html) is marked as VERB even when combining with a relational.
* Verbs are marked for [aspect](https://github.com/UniversalDependencies/docs/blob/pages-source/_tpn/feat/Aspect.md): `Compl` (completive), `Iter` (Iterative), `Suc` Successive.
* Verbs are also marked for [mood](https://github.com/UniversalDependencies/docs/blob/pages-source/_tpn/feat/Mood.md): `Perm` (permissive).
* Lexical roots may be [reduplicated](https://github.com/UniversalDependencies/docs/blob/pages-source/_tpn/feat/Red.md) in two differentways: 
monosylabic reduplication (`Red=Mo`), disylabic reduplication (`Red=Di`). The modify the aspect of the verb in different ways: disylabic reduplication indicate the repetition or duration of an action; monosylabic reduplication indicates iteration of the action. 

### Nominalizers

Tupinambá has many nominalizers with different functions. All but 

Nominalizer    |       function             |    Example                           |
:------------: | :------------------------: |:----------------------:              |
 _(e)mi_-         | passive deverbalizer    | t-emi-juka 'what is killed'.      |
 -_βaʔe_       | relativizer                | o-juká-βaʔe 'the one who kills'.     | 
 -_pɨr_        | passive deverbalizer       | eroβjar-(ɨ)-pɨr 'the one who must be killed'  |
 -_sar_        | agentive nominalizer       | juká-sar-a 'the killer'.             |                                
 -_saβ_        | circunstantial nominalizer | juká-saβ-a 'place/mode of killing'   |                      
 -_βor_        | habitual agent             | juká-βor 'one who often kills'       |                     
 -_(a)βo_      | gerund                     | juká-βo 'killing'                    |                   
 -_i_ ~ -_w_   | nominalized with fronted focalized adverbials  | juká-w           |                        
 

---

## Syntax

* As a head-marking language, core arguments, except oblique core arguments are cross-referenced on the predicate, as in the example below:

```
asepjak 

a-s-epjak

1.SG-3-see

I see her/him/it/them
```

This is the case only when the object is third-person. For this reason the feature [Person](https://universaldependencies.org/u/feat/Person.html) takes values combining both arguments (A dn P): `Person=13`, `Person=23`, and `Person=33`. No othe combinations occur.

* The order of arguments cross-referenced on the predicate is SOV. Full NPs associated with core arguments may appear in any order. These NPs are marked as `obl` ' obliques', since they are not the core arguments. 
* What has been traditionally called circunstantial mood or indicative II in some Tupí-Guaraní languages referes to a nominalization accompanied by the fronting of an adverbial expression: adverbs, adverbial expressions, postpositional phrases (oblique topicalization). The nominalized form in this case is marked by the feature-value [OblTop=Yes](https://github.com/UniversalDependencies/docs/blob/pages-source/_tpn/feat/OblTop.md).
Transitivity is found only with third person objects.

### 


---

## Treebanks

There is 1 Tupinamba UD treebank:

  * [Tupinamba-A](https://github.com/UniversalDependencies/UD_Tupinamba-TuDeT)

---
**Instruction**: Treebank-specific pages are generated automatically from the README file in the treebank repository and
from the data in the latest release. Link to the respective `*-index.html` page in the `treebanks` folder, using the language code
and the treebank code in the file name.

---
            
