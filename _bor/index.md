---
layout: base
title:  'Bororo UD'
udver: '2'
---

# UD for Bororo <span class="flagspan"><img class="flag" src="../../flags/svg/BR.svg" /></span>

## Tokenization and Word Segmentation


* Bororo uses all 18 [UPOS](https://universaldependencies.org/u/pos/index.html).
* Tokenization and semgmentatoin in Bororo is straightforward. There are no multiwords that require spaces or dashes.
* Words are delimited by whitespace characters. .
* According to typographical rules, many punctuation marks are attached to a neighboring word. These are tokenized as separate tokens (words).

Mapping UPOS to XPOS Akuntsú

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
 PRON  | pron, bi |
 SCONJ | sc       |
 PUNCT | punct    |
 SYM   | sym      |
 X     | x        |


---

## Morphology

### Nouns

#### Gender

The `gender of nouns in Bororo follow the natural gender of the animate nouns, i.e., males take masculine gender and females take feminine gender or the word 'female,woman'. Inanimate nouns are genderless but morphologically they follow the masculine pattern. Based on natural gender, some nouns may be marked as feminine. Modifiers may take gender mark (agreement) only in the feminine singular.

#### Number

There are different ways of forming the `plural` of nouns in Bororo: deleting the last syllables of nouns ending in -*edu*, substituting the last vowel by -*e*, adding *e* to the singular form, adding -*doge* to the stem, adding -*ge* to nouns ending in -*rewy*, -*wy*, -*epa*, -*are*. There are also instances of irregular plural forms, ablaut with change of final vowel, and some forms that do not vary in the plural.

### Tags

## Person indexes

Person  |       Before consonant       | Before vowel          |
--------------------|------------------|-----------------------|
1S      | _i-_      | _it-_, _in-_, _ik-_  |
2S      | _a-_     | _ak-_              |
3S      |_∅_, _u-_     |
3Anaf   |_tu-_, _pu-_ |_t-_, _tud-_, _pud-_,    |
1PL.EX  | _ce-_ | _ced-_, _cen-_, _ceg-_  |
1PL.IN  | _pa-_   | _pag-_   |
2PL     | _ta-_   | _tag-_   |
3PL     | _e-_    | _et-_, _en-_, _ek-_       |
3Anaf   |_tu-_, _pu-_ |_t-_, _tud-_, _pud-_,    |

The first plural of person indexes distinguish between the values `Ex` (exclusive) and `In` (inclusive) for the feature `Clusivity`

* Nouns are either possessed or unpossessed. Possessed nouns are either alienably o inalienably possessed. Inalienably possessed nouns in Bororo are kinship terms and body parts.

```
Iia
i=ia
1SG=mouth
my mouth
```

```
Aparo
a=paro
2SG=axe
Your axe
```



---
**Instruction**: Specify any unused tags. Explain what words are tagged as PART. Describe how the AUX-VERB and DET-PRON distinctions are drawn, and specify whether there are (de)verbal forms tagged as ADJ, ADV or NOUN. Include links to language-specific tag definitions if any.

Bororo POS is a straight forward question if one bear in mind a tyological approach, for example, as in Croft (2022: chap. 2). The basic princple is that either roots function work as predicates or as arguments. Depending on the function, they will appear in a specifi slot and combine with specific morphology. This issue is made simpler if one considers that different types of predication are collapsed in Bororo into a single construction. In the example below, the predication could be takes as possessive or existential.

```
Imugare
i=muga-re
1.SG=mother=IND
I have a mother/there is my mother/My mother exists
```
The same with an activity predicate, which could be taken as a possessive or existential predications.
```
Irekodyre
i=rekody-re
1.SG=run=IND
I ran/there is my running/My running exists
```



Bororo has no copula an no auxiliary verbs.


---

### Features

*

---
**Instruction**: Describe inherent and inflectional features for major word classes (at least NOUN and VERB). Describe other noteworthy features. Include links to language-specific feature definitions if any.

---

## Syntax

Bororo is an ergative language. S, A, and O are marked by the same set of bound indexes. But the construction where S and O appear are the same, i.e, they attach to the predicate.
A is always marked by a bound index which carries TMA and negation markers, detached from the predicate. 

```
Imaragodyre
i-maragody=re
1SG-work=ASS
```

The A argument of transitive verbs is indexed on the mood or aspect marker, and the O argumend is bound to verb. 

```
adygore emage ewido
adygo=re emage e=bito
jaguar=IND they 3.PL=kill
The jaguar killed them
```

```
adygore ewido
adygo=re e=bito
jaguar=IND 3.PL=kill
The jaguar killed them
```

```
Ure ewido
u=re e=bito
3.SG=IND 3.PL=kill
The jaguar killed them
```

In transitive clauses, nothing may intervene between the A argument and the O-predicate slot. Adjuncts follow the predicate and if they are fronted, the are morphologically marked.

There is a clear preference for subordinate clauses to precede main clauses, although this is not obbligatory.


---
**Instruction**: Give criteria for identifying core arguments (subjects and objects), and describe the range of copula constructions in nonverbal clauses. List all subtype relations used. Include links to language-specific relations definitions if any.

* Nonverbal predication distinguish the following semantic types:

---

## Treebanks

There are [N](../treebanks/bor-comparison.html) Bororo UD treebanks:

  * [Bororo-A](../treebanks/bor_a/index.html)
  * [Bororo-B](../treebanks/bor_b/index.html)

---
**Instruction**: Treebank-specific pages are generated automatically from the README file in the treebank repository and
from the data in the latest release. Link to the respective `*-index.html` page in the `treebanks` folder, using the language code
and the treebank code in the file name.

---
