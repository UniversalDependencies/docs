---
layout: base
title:  'Xavante UD'
udver: '2'
---

# UD for Xavante <span class="flagspan"><img class="flag" src="../../flags/svg/BR.svg" /></span>

## Tokenization and Word Segmentation



* Xavante uses all 17 [UPOS](https://universaldependencies.org/u/pos/index.html).
* Tokenization and semgmentatoin in Xavante is not straightforward, since descriptions do not agree among themselves.
* In general, words are delimited by whitespace characters. Description of exceptions follows.
* According to typographical rules, many punctuation marks are attached to a neighboring word. We always tokenize them as separate tokens (words).

Mapping UPOS to XPOS Xavante

 UPOS | XPOS |
:----: | :------: |
 ADJ   | adj      |
 ADV   | adv      |
 INTJ  | intj     |
 NOUN  | n        |
 PROPN | ppn      |
 VERB  | v, vi, vt|
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

## Morphology 

### Tags

* Xavante (typological profile)

### Features

NOMINAL FEATURE
* Nominal words, NOUN, PROPN and PRON, are not marked for Gender, plural or animacy.
* There are no classifiers.
* The two main values of the Number feature are Sing and Plural.
* The notion of plural is expressed through numerals, particles or through reduplication:

### Person indexes

Xavante has a complicated system of indexation, using many different sets of markers. These are given in the tables below.

#### Bound indexes (series I)

Members of this set are used as possessor markers, subject of intransitive verbs, object of transitive verbs, subject of non-verbal predicates, object of postpositions

Person  |  Form  |
:-----: | :-----:|
1.SG | _ĩĩ_-, ∅-  |
2.SG | _a(i)_-   |
3    |  _ĩ_-, ∅-    |
1.DU | _wa_-     |
2.DU | _wa_-     |
CORR | _ti_-     |


#### Bound indexes (series II)

Person  |  Form  |
:-----: | :-----:|
1     |  ∅-   |
2     | _ĩ_-  |
3     | _ĩ_-  |

#### Bound indexes (series III)

This is the bound index for the first person dual and plural object when the subject is second person.

Person  |  Form  |
:-----: | :-----:|
1.DU     | _ĩwa_- |
1.PL   | _ĩwa_- |

#### Personal pronouns

Person  |  Form  |
:-----: | :-----:|

#### Emphatic pronouns

Person  |  Form  |
:-----: | :-----:|

### Egophorique and heterphorique markers

Marker  |  Form  | Aspect
:-----: | :-----:| :-----:
Egophorique | _wa_ |
Heterophorique | _te_ | imperfective
Heterophorique | _ma_ | perfective

* Xavante has postpositions 


* Nominal Reduplication: it marks pluralilty in nouns, as in *pi-pi* ‘feetʼ. It can be monosyllabic (involving the first or the second syllable of the stem) or dissyllabic. Reduplication is associated with the feature-value `Redup`.

* Augmentative and diminutive: the diminutive morpheme is -*tin* `Dim` and the augmentative -*atʃo* `Augm`. These morphemes refer to the size of something or the expansion of an event (if it is big or not). 

VERBAL FEATURE


* Some verbs occur with the morpheme -*ka*, which is a transitivizer. This [feature](https://universaldependencies.org/u/feat/index.html) (`Trans`) takes the value YES if the when the morpheme is present.  Verbs that may or not combine with this morpheme take no overt object or require two obligatory arguments. 

* Verbal Reduplication: it assigns aspectual function in verbs, as in *ãbi-bi* ‘to pull successively.ʼ As in the nouns, it can be monosyllabic (involving the first or the second syllable of the stem) or dissyllabic. Reduplication is associated with the feature-value `Redup`.

* Nominalization: there are two productive nominalizer affixes in this language: -ap `Nmzr=Circ`and i- `Nmzr=Obj`. 


### Wh-words

Xavante wh-words are built from words such as  _wa_ 'who', _marĩ_ 'what' (man's speech), _tiha_ 'what' (woman's speech), _mamɛ_ 'where', _mahãta_ 'where is', and _momo_ 'where to'. These are, in questions, predeced by the particle _e_, which indicates that the speaker requires new information.

 UPOS        | XPOS      |
:----------: | :------:  |
 who          | _e wa_    |
 what (man)   |  _e marĩ_  |
 what (woman)  | _e tiha_  |
por quê? (man) | _e marĩ bə_ |
por quê? (woman)| _e tiha bə_ |
where           | _e mamɛ_  |
where to        | _e momo_  |
where (is)      | _e mahãta_ |

## Syntax



---

## Treebanks

There are [N](../treebanks/xav-comparison.html) Xavante UD treebanks:

  * [Xavante-A](../treebanks/xav_a/index.html)
  * [Xavante-B](../treebanks/xav_b/index.html)

---
**Instruction**: Treebank-specific pages are generated automatically from the README file in the treebank repository and
from the data in the latest release. Link to the respective `*-index.html` page in the `treebanks` folder, using the language code
and the treebank code in the file name.

---
