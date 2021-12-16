---
layout: base
title:  'Guajajara UD'
udver: '2'
---

# UD for Guajajara <span class="flagspan"><img class="flag" src="../../flags/svg/BR.svg" /></span>

## Tokenization and Word Segmentation

* Words are delimited by whitespace characters
* According to typographical rules, many punctuation marks are attached to a neighboring word. They are given as separate tokens (words);
---

## Morphology

### Tags

* Guajajara uses 16 of the 17 universal POS categories. `ADJ` is not used since there is no separate class of adjectives. Modification by property consists of simple adjacency (juxtaposition) of the lexical roots:  

jawar pinim
jaguar spotted
'spotted jaguar'

* Stative predicates and possessed nouns are expressed through the same construction (possessive predication):  

he=∅-keneʔo
1.SG=Cont-tired
'I am tired / I have tiredness'

he=∅-ʔaw
1.SG=Cont-hair
'I have hair'

* Guajajara has many particles mainly with discourse functions:  

Particle | Function                          | Example                                                                           |
:------: | :-------------------------------: |:--------------------------------------------------------------------------------: |
raʔa     | Dubitative                        | Umaiʔu kwaharer aʔe raʔa 'Has he already eaten?' (Camargo et. al 2019: 835)       |
nehe     | Intention                         | Aha putar aipo pe nehe 'I intend to go there' (cf. Harrison and Harrison 2013: 11)|
riʔi     | Certainty                         |                                                                                   |
rihi     | Permission/Possibility/Exhortation|                                                                                   |

* UPOS are mapped to XPOS in Guajajara as below:

 UPOS | XPOS |
:----: | :------: |
 ADV   | adv      |
 INTJ  | intj     |
 NOUN  | n        |
 PROPN | ppn      |
 VERB  | v, vi, vt|
 ADP   | posp     |
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

* Guajajara nouns are not marked for gender or for number.
* Number is optionally marked by the particle _wa_:  

U-puez u-kamir wà
3-wash 3.Corf-clothe PL
'They wash their clothes' (Harrison and Harrison 2013: 205)

* Person indexes and pronouns are given below:

Person     |Possessor indexes   |  Argument indexes  | Inependent pronouns   |
:---------:|:-----------------: | :-----------------:|:--------------------: |
1.SG      |he=                  |  a-                |      ihe              |
2.SG      |ne=                  |  ere-              |      ne               | 
3         |                     |     u-             |   aʔe (demonstrative) | 
1.PL.IN   |      zane=          |    xi- / za-       |        zane           |
1.PL.EX   |       ure=          |      uru-          |        uré            |
2.PL      |        pe=          |      pe-           |        pe             |   

* Possessor indexes, as the name suggests, only index possessors. They are marked not marked with PronType, but they are marked as [Poss=Yes](https://universaldependencies.org/u/feat/Poss.html). Argument indexes are used with verbal predicates, as also are the portmanteau indexes (see below). 
Person indexes distinguish [Number](https://universaldependencies.org/u/feat/Number.html)(Singular or Plural). They also distinguish [Clusivity](https://universaldependencies.org/u/feat/Clusivity.html) in the 1<sup>st</sup> person plural.

* Nouns can take the following [Cases](https://universaldependencies.org/u/feat/Case.html): `All`, `Dat`, `Loc`, `Temp` and `Tra`

Case        |          Ending         |           Example            |
:---------: | :---------------------: | :-------------------------:  |
[Translative](https://universaldependencies.org/u/feat/Case.html#Tra)| -(r)omo / -(r)umu       | _xixirogaturumu_ 'transformed in different species'     |
[Allative](https://universaldependencies.org/u/feat/Case.html#All)   | -pe                     | _ʔɨ pe_ 'to the lake'                                   |
[Locative](https://universaldependencies.org/u/feat/Case.html#Loc)   | -pe                     | _ko pe_ 'in the field'                                  |
[Temporal](https://universaldependencies.org/u/feat/Case.html#Tem)   | -re                     | _aʔere_ 'after it'                                      |
[Dative](https://universaldependencies.org/u/feat/Case.html#Dat)     |-pe                      | _izupe_ 'to him/her/it'                                 |

 The relational markers `Rel`, which indicate contiguity or non-contiguity between a head and its dependent, take respectively the following features: `Rel=Cont` and `Rel=NCont`. A third type or relational indicates that a possessor is not present, neither contiguously or non-contiguously. This relational is tagged `Rel=Abs`, for absolute. The reflexive/correferential morpheme _u_. which is often referred to as 'relational<sub>3</sub>' is associated with the feature-value `Reflex=Yes`. These are shown below:

Rel    | Form(s)   |             Example                       |
:-----:|:---------:| :---------------------------------------: |
Cont   | ∅ ~ r     | _he-∅-hɨ_ 'I have a mother'               |    
NCont  | i ~ h     | _i-hɨ_ 'his/her/its/their mother'         |
Abs    | t         | _t-ɨwɨr_  'his/her/their younger brother' |
Corf   |   u       | _u-hɨ_ 'his/her/its/their own mother'   | 


* Nouns may also be reduplicated in both ways denoting: plurality, collectivity, superlativity, and other semantic nuances. Numerals may also be reduplicated in order to indicate distribution.
* Nouns are also marked for tense.


### Nominalizers

### Nominalizers

Guajajara has many nominalizers with different functions. Lexical roots can be nominalized by suffixes that receive the following features: nominalization of circunstance `Nomzr=Circ` (*-haw* 'thing, way of VERB'), passive nominalization `Nomzr=Pas`, deverbal passive nominalization `Nomzr=DevPass` (*-pɨr* 'one that is VERB past participle'), `Nomzr=Ag`(*-har* 'the VERB-_er_').

Nominalizer    |       function             |     Example                                              |
:------------: | :------------------------: |:-------------------------------------------------------: |
 _(e)mi_-      |    passive deverbalizer    | h-emi-eka 'what is expected/waited for'.                 |
 -_maʔe_       | relativizer                | u-zegar-maʔe 'the one who sings'.                        | 
 -_pɨr_        | passive deverbalizer       | i-zuká-pɨr 'the one who must be killed'                  |
 -_har_        | agentive nominalizer       | i-zan-har 'the one who runs'.                            |                                
 -_haw_        | circunstantial nominalizer | i-ker-haw 'occasion/place/mode/instrument of sleeping'   |                      
               
     

### Verbal Features
* The lexical root in the *gerund* [(VerbForm=Ger)](https://universaldependencies.org/u/feat/VerbForm.html) is marked as VERB even when combining with a relational.
* Verbs are marked for [aspect](https://github.com/UniversalDependencies/docs/blob/pages-source/_tpn/feat/Aspect.md): `Compl` (completive), `Prog` (Progressive), `Perf` (Perfective).
* Verbs are also marked for [mood](https://github.com/UniversalDependencies/docs/blob/pages-source/_tpn/feat/Mood.md): `Imp` (imperative).
* Lexical roots may be [reduplicated](https://github.com/UniversalDependencies/docs/blob/pages-source/_tpn/feat/Red.md) in two different ways: 
monosylabic reduplication (`Red=Mo`), disylabic reduplication (`Red=Di`). The modify the aspect of the verb in different ways: disylabic reduplication indicate the repetition or duration of an action; monosylabic reduplication indicates iteration of the action.

## Syntax

### Core Arguments, Oblique Arguments and Adjuncts

As a head-marking language, core arguments, except oblique core arguments may be cross-referenced on the predicate, as in the example below:

```
uzapo

u-Z-apo

3-3-do

He/She/They do it/them
```


## Treebanks

There are [N](../treebanks/gub-comparison.html) Guajajara UD treebanks:

  * [Guajajara-A](../treebanks/gub_a/index.html)
  * [Guajajara-B](../treebanks/gub_b/index.html)

---
**Instruction**: Treebank-specific pages are generated automatically from the README file in the treebank repository and
from the data in the latest release. Link to the respective `*-index.html` page in the `treebanks` folder, using the language code
and the treebank code in the file name.

---
