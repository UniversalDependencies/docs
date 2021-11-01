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
* Some compound words from Portuguese are written as one word, e.g. _santaCruz_ 'holy cross', _espíritoSanto_ 'holy spirit'. 


## Morphology

### Tags

* Tupinambá uses 16 of the 17 universal POS categories. `ADJ` is not used since there is no separate class of adjectives.
Stative-verbs and possessed nouns behave alike, in a way that is not possible to distinguish them morphologically
(I am ugly / I have uglyness; ugly boy / boy with uglyness /(the) boy has uglyness). The fundamental distinction in Tupinambá is that between predicates and arguments (potentially referring expressions), reflected in the `NOUN`or `VERB` tags. Lexical roots in Tupinambá are predicates, which require function indicating morphology in order to function as arguments (Croft 2021)

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

* Tupinambá nouns are not marked for gender. Number is optionally marked by the lexical root _etá_ `(be) many'. 

_kunumĩ_ 'boy / boys'  
_kunumĩ-etá_ 'boys'

* Nous can take the following [Cases](https://universaldependencies.org/u/feat/Case.html): `Tra`, `Loc`, `Per`, `Dat`.

Case        |          Ending         |           Example            |
:---------: | :---------------------: | :-------------------------:  |
Translative | -(r)amo                 | t-uβ-amo 'as his father'     |
Locative    | -pe                     | t-atá-pe 'in the fire'       |
Perlative   | -βo                     | kaʔa-βo 'through the forest' |
Dative      |-βe / -βo (with pronouns)| iʃé-βo, iʃéβe 'to me'        |


* Personal Pronouns and argument indexes distinguish [Number](https://universaldependencies.org/u/feat/Number.html)(Singular or Plural). They also distinguish [Clusivity](https://universaldependencies.org/u/feat/Clusivity.html) in the 1<sup>st</sup> person plural.

* The relational markers `Rel`, which indicate contiguity or non-contiguity between a head and its dependent, take respectively the following features: `Rel=Cont` and `Rel=NCont`. A third type or relational, `Rel=HUM`, indicates that obligatorily possessed noun is given without reference to a possessor at the same time marking the possessor as human. The reflexive/correferential morpheme _o_. which is often referred to as 'relational<sub>3</sub>' is associated with the feature-value `Reflex=Yes`. Another relational `Rel=Hum`indicates that the possessor is human. These are shown below:

Rel    | Form(s)   |             Example                  |
:-----:|:---------:| :----------------------------------: |
Cont   | ∅ ~ r     | ʃe-∅-sɨ 'I have a mother'            |    
NCont  | i ~ s ~ t | i-sɨ-∅ 'his/her/its/their mother'    |
Abs    | t ~ m     | t-oʔo  'his/her/their (human) flesh' |
Corf   |   o       | o-sɨ-∅ 'his/her/its/their own mother'| 



* Nouns may also be reduplicated in both ways denoting: plurality, collectivity, superlativity, and other semantic nuances. Numerals may also be reduplicated in order to indicate distribution.
* Nouns are also marked for tense.
* As an omnipredicative language, lexical roots in Tupinambá are existential predicates. In order to function as arguments, the referential marker (a  ̴ ∅), is required (marked as `Case=Ref`) despite its function being nothing like that of nominal cases.

### Verbal Features

* The lexical root in the *gerund* [(VerbForm=Ger)](https://universaldependencies.org/u/feat/VerbForm.html) is marked as VERB even when combining with a relational.
* Verbs are marked for [aspect](https://github.com/UniversalDependencies/docs/blob/pages-source/_tpn/feat/Aspect.md): `Compl` (completive), `Iter` (Iterative), `Suc` Successive.
* Verbs are also marked for [mood](https://github.com/UniversalDependencies/docs/blob/pages-source/_tpn/feat/Mood.md): `Perm` (permissive) `Imp` (imperative).
* Lexical roots may be [reduplicated](https://github.com/UniversalDependencies/docs/blob/pages-source/_tpn/feat/Red.md) in two differentways: 
monosylabic reduplication (`Red=Mo`), disylabic reduplication (`Red=Di`). The modify the aspect of the verb in different ways: disylabic reduplication indicate the repetition or duration of an action; monosylabic reduplication indicates iteration of the action. 

### Nominalizers

Tupinambá has many nominalizers with different functions. All but 

Nominalizer    |       function             |    Example                           |
:------------: | :------------------------: |:----------------------:              |
 _(e)mi_-      | passive deverbalizer       | t-emi-juka 'what is killed'.         |
 -_βaʔe_       | relativizer                | o-juká-βaʔe 'the one who kills'.     | 
 -_pɨr_        | passive deverbalizer       | i-juká-pɨr 'the one who must be killed'  |
 -_sar_        | agentive nominalizer       | juká-sar-a 'the killer'.             |                                
 -_saβ_        | circunstantial nominalizer | juká-saβ-a 'occasion/place/mode/instrument of killing' |                      
 -_βor_        | habitual agent             | juká-βor 'one who often kills'       |                     
 -_(a)βo_      | gerund                     | juká-βo 'killing'                    |                   
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

John<sub>i</sub> Mary<sub>j</sub> o<sub>i</sub>-s<sub>j</sub>-epjak   
 
Mary<sub>j</sub> John<sub>i</sub> o<sub>i</sub>-s<sub>j</sub>-epjak  
 
o<sub>i</sub>-s<sub>j</sub>-epjak John<sub>i</sub> Mary<sub>j</sub>   
 
o<sub>i</sub>-s<sub>j</sub>-epjak Mary<sub>j</sub> John<sub>i</sub>   
 
Mary<sub>j</sub> o<sub>i</sub>-s<sub>j</sub>-epjak John<sub>i</sub>   
 
John<sub>i</sub> o<sub>i</sub>-s<sub>j</sub>-epjak Mary<sub>j</sub>

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


### Non-verbal predicates

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
            
