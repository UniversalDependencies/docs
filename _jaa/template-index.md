---
layout: base
title:  'Madi UD'
udver: '2'
---

# UD for Madi <span class="flagspan"><img class="flag" src="../../flags/svg/BR.svg" /></span>

## Tokenization and Word Segmentation

* Words are delimited by whitespace characters
* According to typographical rules, many punctuation marks are attached to a neighboring word. They are given as separate tokens


## Morphology



### Tags

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





* Nouns may also be reduplicated in both ways denoting: plurality, collectivity, superlativity, and other semantic nuances. Numerals may also be reduplicated in order to indicate distribution.
* Nouns are also marked for tense.
* As an omnipredicative language, lexical roots in Tupinambá are existential predicates. In order to function as arguments, the referential marker (a  ̴ ∅), is required (marked as `Case=Ref`) despite its function being nothing like that of nominal cases.

### Verbal Features

* The most important verbal feature is the distinction between two morphological verb classes, inflecting and non-inflecting. The infelcting class takes prefixes and suffixes, while non-inflecting verbs require auxiliaries which carry infixes.


### Nominalizers

Tupinambá has many nominalizers with different functions. All but 

Nominalizer    |       function             |    Example                           |
:------------: | :------------------------: |:----------------------:              |
 _(e)mi_-      | passive deverbalizer       | _t-emi-juka_ 'what is killed'.         |
 -_βaʔe_       | relativizer                | _o-juká-βaʔe_ 'the one who kills'.     | 
 -_pɨr_        | passive deverbalizer       | _i-juká-pɨr_ 'the one who must be killed'  |
 -_sar_        | agentive nominalizer       | _juká-sar-a_ 'the killer'.             |                                
 -_saβ_        | circunstantial nominalizer | _juká-saβ-a_ 'occasion/place/mode/instrument of killing' |                      
 -_βor_        | habitual agent             | _juká-βor_ 'one who often kills'       |                     
 -_(a)βo_      | gerund                     | _juká-βo_ 'killing'                    |                   
 -_i_ ~ -_w_   | nominalized with fronted focalized adverbials  | juká-w           |                        
 



---

### Syntax

* As a head-marking language, core arguments, are indexed on the predicate, in the order SOV as in the example below:

```
aɲan
a-ɲan
1.SG-run
'I ran/run'
```

```
osepjak 
o-s-epjak
3.SG(S)-3(O)-see
He/she/it/they see her/him/it/them
```

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


* What has been traditionally called circunstantial mood or indicative II in some Tupí-Guaraní languages referes to a nominalization accompanied by the fronting of an adverbial expression: adverbs, adverbial expressions, postpositional phrases (oblique topicalization). The nominalized form in this case is marked by the feature-value [OblTop=Yes](https://github.com/UniversalDependencies/docs/blob/pages-source/_tpn/feat/OblTop.md).


### Arguments (or potentially refering expressions)

Since all lexical roots in Tupinambá are predicates, their use as potentially refering expressions or arguments require aditional morphology. Compare both examples below:

```
nerub
ne=r-ub
2.SG=Cont-father
'I have a father'
```
```
neruβa
ne=r-ub-a
2.SG=Cont-father-Ref
'My father'
```



---

## Treebanks

There is 1 Tupinamba UD treebank:

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
