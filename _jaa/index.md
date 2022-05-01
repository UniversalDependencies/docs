---
layout: base
title:  'Madi UD'
udver: '2'
---

# UD for Madi <span class="flagspan"><img class="flag" src="../../flags/svg/BR.svg" /></span>

## Tokenization and Word Segmentation

* Words are delimited by whitespace characters
* According to typographical rules, many punctuation marks are attached to a neighboring word. They are given as separate tokens

## Tags

* Jarawara uses all 17 universal POS categories. `ADJ` is only used for fourteen lexical items. All other modifiers are intransitive verbs.

Mapping UPOS to XPOS Tupinambá

 UPOS | XPOS |
:----: | :------: |
 ADJ   | adj  
 ADV   | adv      |
 INTJ  | intj     |
 NOUN  | n        |
 PROPN | ppn      |
 VERB  | v, vi, vt, vd|
 ADP   | posp     |
 AUX   | aux      |
 CCONJ | cc       |
 DET   | det      |
 NUM   | num      |
 PART  | prcl      |
 PRON  | pro      |
 SCONJ | sc       |
 PUNCT | punct    |
 SYM   | sym      |
 X     | x        |


## Morphology

### Person indexes


Person/Number/Animacy | Slot 1   | Slot 2 and 8  | Cardinal indexes |Alienamble possessor   | Inalienamble possessor|
:-----------------:   | :------: | :----------:  |:----------------:|:--------------------: |:--------------------: |  
1 SG                  | owa      | o-            | owa              | oko                   | o-, oko               |
2 SG                  | tiwa     | ti-           | tiwa             | tika                  | fee ~ hee             |
3 SG inanimate        |          |               |                  |                       |                       |
1 PL.IN               | era      | ee-           | e                | ee kaa                | ee                    |
1 PL.EX               | otara    | otaa-         | ota              | otaa kaa              | otaa                  |
2 NSG                 | tera     | tee-          | te               | tee kaa               | tee                   |
3 NSG animate         | me, mera | mee-          | me               | mee kaa               | mee                   |

Slot 1: O function in transitive predicates
Slot 2: A, S or copula subject function
Slot 8: the function of the indexes depend on the type of constructions (O or A). Always S in intransitive predicates. Possessor
in an NP.

The absence of an index (S, A, or O) indicates the argument in 3SG.

* About ten verbs have suppletive forms for singular, dual, or plural reference for the S argument. 

Number   |   sit                                       | stand |
:------: | :-----------------------------------------: |:-----:|
Singular | -ita-                                       | -wa-  |
Dual     | joro -na- or teme -na- (in free alternation)| joro -na- or teme -na- (in free alternation)|
Plural   | naho- for an animate and sii -na- for an inanimate S argument | joro -na- or teme -na- (in free alternation)|



### Verbal Features

* The most important verbal feature is the distinction between two morphological verb classes, inflecting and non-inflecting. The infelcting class takes prefixes and suffixes, while non-inflecting verbs require auxiliaries which carry infixes.

```
o-tafa-ra
1SG-eat-IPST.EVID.F
'I have just eaten'

kobo o-na-hara
arrive-1SG-AUX-IPST.EVID.F
'I have just arrived'

```

* The only suffix that may attach to a non-inflecting verb is the distributive suffix *-ri*.

* Verbs may be transitive or intransitive, but most transitive verbs have an intransitive use. Intransitive verbs also can have a transitive use. These are cases of S=O and S=A.
* There are two copular verbs, which are neither transitive nor intransitive.
* Following Vogel (2003), there are only 3 derivational prefixes.
* Derivational suffixes are more than a hundred, of which only about twenty are derivational.

The following are tense markers. Those indicating past also mark evidentiality:

 Suffix          |     Meaning               |
:--------------: | :-----------------------: |
 -hara/-hare     |  immediate past, attested|  
 -hani/-hino     | immediate past, non-attested|
 -hamaro/-himari | far past, attested     |
 -hemete/-himata | far past, non-eyewitness  |
 -haba(na)/-hiba(na)| future |
 

A group of suffixes with adverbial are clause-final modifiers:

Suffix       |     Meaning               |
:----------------: | :-----------------------: |
-mina      |  in the morning, tomorrow |
-baha      |  do first                 |  
-rama      | unusual, unexpected       |
-tasa      | do again                  |
-bisa      | also                      |
-mata       | short time                |
-waha       | now, the next thing, then |
-makoni      | unusual, take no responsability for |

* Some aspectual distinctions are signalled by inflectional verbal suffixes.

Suffix           |     Aspect         |
:--------------: | :----------------: |
 -te             |  habitual          |   
 -ne             | continuous         |
 -habone/-hibona | intentive          |
 -hamone/-himona | reportative        |
 -ke/-ka         | declarative        |

### Predicate Structure
                    
 



---

### Syntax

 As a head-marking language,

* Nominal phrases (NPs) semantically related to the core-arguments can appear in any order in relation to the predicate (where the core arguments are indexed). This is exemplified below through the sentence _John sees Mary_:

_John<sub>i</sub> Mary<sub>j</sub> o<sub>i</sub>-s<sub>j</sub>-epjak_   
 
_Mary<sub>j</sub> John<sub>i</sub> o<sub>i</sub>-s<sub>j</sub>-epjak_  
 
_o<sub>i</sub>-s<sub>j</sub>-epjak John<sub>i</sub> Mary<sub>j</sub>_   
 
_o<sub>i</sub>-s<sub>j</sub>-epjak Mary<sub>j</sub> John<sub>i</sub>_   
 
_Mary<sub>j</sub> o<sub>i</sub>-s<sub>j</sub>-epjak John<sub>i</sub>_   
 
_John<sub>i</sub> o<sub>i</sub>-s<sub>j</sub>-epjak Mary<sub>j</sub>_

* The dependency linking the core arguments with the NPs semantically related to the core-arguments are `obl` ([oblique](https://universaldependencies.org/u/dep/obl.html)).

* The object of transitive verbs is always indexed by `Rel=Ncont`. Tupinambá has transitive verbs only when objects are third person. In the other cases a predicative possession is used. When the object is third person, the feature [Person](https://universaldependencies.org/u/feat/Person.html) takes values combining both arguments (S and O): `Person=13`, `Person=23`, and `Person=33`. 
* Other combinations of person indexes occur in the case of 1 &#8594; 2. Two portmanteau pronouns are available: _oro_- 1 &#8594; 2.SG, and _opo_- 1 &#8594; 2.PL:

```
orojuká 
oro-juká
1.2SG(O)-kill
'I/We kill(ed) you'
```
```
opojuká 
opo-juká
1.2PL(O)-kill
'I/we kill(ed) you'
```





---

## Treebanks

There is 1 Jarawara UD treebank:

  * [Tupinamba-A](https://github.com/UniversalDependencies/UD_Tupinamba-TuDeT)

---
**Instruction**: Treebank-specific pages are generated automatically from the README file in the treebank repository and
from the data in the latest release. Link to the respective `*-index.html` page in the `treebanks` folder, using the language code
and the treebank code in the file name.

---
            

---
**Instruction**: Describe inherent and inflectional features for major word classes (at least NOUN and VERB). Describe other noteworthy features. Include links to language-specific feature definitions if any.

---

## Syntax

*

---
**Instruction**: Give criteria for identifying core arguments (subjects and objects), and describe the range of copula constructions in nonverbal clauses. List all subtype relations used. Include links to language-specific relations definitions if any.

---

## Treebanks

There are [N](../treebanks/jaa-comparison.html) Madi UD treebanks:

  * [Madi-A](../treebanks/jaa_a/index.html)
  * [Madi-B](../treebanks/jaa_b/index.html)

---
**Instruction**: Treebank-specific pages are generated automatically from the README file in the treebank repository and
from the data in the latest release. Link to the respective `*-index.html` page in the `treebanks` folder, using the language code
and the treebank code in the file name.

---
