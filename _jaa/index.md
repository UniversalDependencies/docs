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

### Number

Jarawara distinguishes three numbers: `singular`, `dual`, and `plural`.

### Gender

* Nouns are either `masculine` or `feminine`, and gender is not morphologically marked. Gender is maniphested through agreement, mostly with the verb.

```
Inamatewe amo-ka
baby(M) sleep-DECL.M
'The baby (boy) is sleeping'
```

```
Inamatewe amo-ke
baby(F) sleep-DECL.F
'The baby (girl) is sleeping'
```

* Masculine animated nouns show feminine agreement in the plural.

* Possessed nouns agree with the gender of the possessor and often they have two forms, which are not predictable. The feminine forms are the default forms. Sometimes both forms are similar as e.g. *ibisiri* (F) / *ibisiri* (M) 'piece', but often they are not *fanaki* (f) / *fanako* (M) 'thigh'.

```
Okomobi moni ama-ka
Okomobi sound be-DECL.M
'It's Okomobi's sound'
```

```
Hinabori moni ama-ke
Okomobi sound be-DECL.F
'It's Hinabori's sound'
```


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
in an NP, A in AC. In OC, it can be A or O.

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
 

A group of suffixes with adverbial are clause-final modifiers:

Suffix       |     Meaning               |
:----------------: | :-----------------------: |
-mina      |  in the morning, tomorrow |
-baha      |  do first                 |  
-rama      | unusual, unexpected       |
-tasa      | do again                  |
-bisa      | also                      |
-mata      | short time                |
-waha      | now, the next thing, then |
-makoni     | unusual, take no responsability for |


## Verbal Aspect
* Some aspectual distinctions are signalled by inflectional verbal suffixes.

Suffix           |     Aspect         |
:--------------: | :----------------: |
 -te             |  habitual          |   
 -ne             | continuous         |


### Predicate Structure

The predicate has elements that are obligatory and others that are optional. In total there are eleven slots, which are filled by
prefixes, suffixes, and separate words.

**Slot 1**

cross-references O. Obligatory in transitive clauses. Must be singular.

**Slot 2**

cross-references S or A. Non-singular = separate word, and singular = prefix. 

**Slot 3**

3.1 singular subject index prefixes (1SG *o*-, 2SG *ti*-); *hi*-, used in an OC when both
A and O are 3rd person; or *to*- 'away';

3.2 applicative *ka*-

3.3 causative *na* ~ *niha*-


**Slot 4**

predicate (verb root) (few exceptions)

**Slot 5*

auxiliary

**Slot 6*

56 different suffixes (highly complex):
negation

**Slot 7 (Tense + Evidentiality)*

Suffix         |   Tense + Evidentiality |
:------------: | :----------------------:|
  -*(hV)ra/e*      | Immediate past + attested |
   -*(hV)ni/o*     | Immediate past + non-attested |
  -*(hV)ro/i*      | Recent past + attested|
   -*(hV)te/a*     | Recent past + non-attested|
  -*(hV)maro/i*    | Far past + attested |
  -*(hV)mete -mata*| Far past + non-attested |
  -*(hV)bone/a*    |  Intentional |
 -*(hV)ba(na)*     | Future       |
 -*(hV)ne/a*       | Irrealis     |
 -*(hV)mene/mana*  | Hypothetical |
 -*(hV)mone/mona*  | Reportative
 
 
 
**Slot 8*

index: S in an intransitive clause, to A in an AC, and to either O or A in an OC. 

**Slot 9*

secondary verbs: *ama* 'extended in time' or *awine/awa* 'seems', optional.

**Slot 10*

`mood suffixes (optional) and markers of dependent clause: 

Suffix           |     Mood         |
:--------------: | :----------------: |
 -*ke/ka*          |  Declarative       |   
 -*ni/ne*          |  Backgrounding     |
 -*habone/-hibona* |  Interrogative     |
 -*hamone/-himona* |  Imperative        |
 -*kani/kani *     |  Counterfactual    |
 -*nihi/noho*      | Climax             |
 -*be(ja)/ba(ja)*  | Immediate          |
 -*makoni/mako*    | Take no responsability |
 -*rihi/rihi*.     | Contrastive negation|
 

**Slot 11**

many tense-modal forms (from slot 7), negation (from slot 6).

---

Example of predicate with eight slots:

```
[jomee]o [∅      otaa  kobo ra-ba     otaa awine-ke]
jaguar(M) 3SG.O  1EX.A meet NEG-FUT.F 1EX SEEM.F-DEC.F
          A       B    D     F G      H     I    H
it is not likely that we will see a jaguar
```

---

## Syntax

 A fundamental distinction in Jarawara concerns transitive clauses. The linking of clauses are based on
 the pivot, which is not syntactically restricted (S/A or S/O). One type of transitive construction has A as pivot (AC = A-construction), and another type has O pivot (OC = O-construction).
 
```
John Mary awa-ka 
John.A Mary.O see-DECL.M
'John saw Watati'
```
```
Mary John hi-wa hi-ke 
Mary.O John.A OC-see OC-DECL.F
'John saw Mary'
```

In order to say 'John came in and saw Mary', one has the option of choosing which construction is more suitable for the context of discource:

 
```
John ki-joma-ke-ka, ∅<sub>A</sub> Mary awa-ka 
John be.in.motion-THROUGH-COMING-DECL.M Mary see-DECL.M
'John came in and saw Mary'
```
```
 Mary ki-joma-ke-ke, ∅<sub>o</sub> John hi-wa hi ke 
John be.in.motion-THROUGH-COMING-DECL.F John OC-see OC-DECL.F
'John came in and saw Mary'
```


---
### Auxiliaries

We do not treat auxiliaries as constituents, since they do not contribute any semantic meaning to the sentence. They are just required with certain verbs and certain suffixes. For example, in the sentence below. 


```
Boni ihi awa boto tonahani amake
The tree fell over because of the wind
```


the verb _boto tonahani amake_ is seen as a single word _bototonahaniamake_, and in the morphology not have anything corresponding to the auxiliary na.

One of the advantages of this approach is that we don't have to worry about what to do with auxiliaries that are required by certain suffixes. For example _-kanikima_ 'scattered' requires a following auxiliary _na_, and it is required that _-waharI_ be attached to an auxiliary _na_. 

One problem that arises with this approach is how to treat _to-_ when it occurs with the auxiliary _ha_. The _to-_ is simply required whenever the auxiliary ha occurs, as it also is with the copular verb _ha_. We could simply not register _to-_ in the morphology in these two cases, since it is just required, and doesn't really contribute anything to the meaning. 

It is still necessary to register _to-_ when it is 'away', and when the 'CH' meaning occurs not associated with _ha_. 



---
## Noun Phrase

Noun phrases occur in slot 2 and 5.

Possessive NPs are of two types: alienable and inalienable.

Inalienable possession is a simple juxtaposition:

```
John teme
John foot.M
'John's foot'

Alienable possession require a postpositional possessive marker *ka*:

```
John ka tao.kana
John POSS gun.F
'Jon's gun'


```
amise tame
aunt.F foot.F
'Aunt's foot'
```

In the example below, there is embedding (alienable + inalienable possession). 

```
[amise ka] jome teme
aunt.F POSS dog.M foot.M
'Aunt's dog's foot'
```

All possessed NPs in Jarawara are third person.

An NP can function as a copula subject:


Manoware ka yobe hawa towareka
Manoware ka yobe hawa to-ha-hare-ka
Manoware POSS house be.ready INC-AUX-IPAST.EVID.M-DECL.M
Manoware's house is ready

The contrastive marker *ta* appears at the end of an NP. It can only be followed by the obsolete suffix -*ra*.

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
