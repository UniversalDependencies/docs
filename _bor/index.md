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

Mapping UPOS to XPOS Bororo

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

### POS

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

#### Gender

The gender of nouns in Bororo follow the natural gender of the animate nouns, i.e., males are masculine and females are feminine, but this is not morphologically marked. Inanimate nouns are genderless but morphologically they follow the masculine pattern (in case there are modifiers). Modifiers mark gender (by agreement), but only the feminine singular is marked.

```
Imedy koadyrewy
imedy koady-re-wy
man single-IND-REL
Single man
```

```
Aredy koadyrewydo
aredy koady-re-wy-do
woman single-IND-REL-F
Single woman
```

```
Ime koadyrewyge
ime koady-re-wy-ge
men single-IND-REL-PL
Single men
```

```
Are koadyrewyge
are koady-re-wy-ge
women single-IND-REL-PL
Single women
```


#### Number

There are different ways of forming the `plural` of nouns in Bororo: deleting the last syllables of nouns ending in -*edu*, substituting the last vowel by -*e*, adding *e* to the singular form, adding -*doge* to the stem, adding -*ge* to nouns ending in -*rewy*, -*wy*, -*epa*, -*are*. There are also instances of irregular plural forms, ablaut with change of final vowel, and some forms that do not vary in the plural. What all plural forms have in common, is the ending -_e_ of all plural forms.


There are words which have irregular plural forms, bein shorter in the plural that in the singular.

_imedy_ 'man'     _ime_ 'men'
_aredy_ 'woman'   _are_ 'women'


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

* Nouns are either possessed or unpossessed. Possessed nouns are either alienably o inalienably possessed. Inalienably possessed nouns in Bororo are kinship terms, body parts and natural phaenomena.

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

PART is used for a conditional particle `ma`, for a focal particle `na` 





Bororo has no copula and no auxiliary verbs.


---

### Features

*

---
**Instruction**: Describe inherent and inflectional features for major word classes (at least NOUN and VERB). Describe other noteworthy features. Include links to language-specific feature definitions if any.


Roots fuctioning as predicates may combine with the following sufixes:

### Aspect

The `progressive aspect` is marked by -_nu_, which is always followed that the `indicative mood` marker -_re_

```
bybytynure
bybyte-nu-re
rain-PROG-IND
It is raining
```

### Mood

The `indicative mood` (declarative + realis) marker -_re_ is used with any lexical root in predicative functions

```
ityre
i=ty-re
1.SG=go-IND
I went
```

```
Are boe maky
a=re boe ∅-maky
2.SG-IND thing 3.SG-give
You gave something
```

The `subjunctive mood` is marked by -_wo_.

```
Padywo
pa=ty-wo
1.PL.IN=go-SUBJ
Let's go!
```

### Status (Tense)

Bororo does not have a tense marker, but the future is expressed by the irrealis status marker -_mody_ followed by the indicative marker, resulting in -_mode_. The negation intervenes between status and mood.

```
Imode arego
i=mody-re a=reko
1.SG=IRR-IND 2.SG-run
I will take you
```

```
Emodykare
e=mody-ka-re
3.PL=IRR-NEG-IND
The won't go
```

The reason why -_mody_ cannot be a tense marker is that it is also used with non-future conditional clauses.

```
Akore akaregodymodyie
∅-ako-re a=aregody-mody-ie
3.SG-speak-IND 2.SG=arrive-IRR-RS
He said you would arrive
```

### Voice

While the `active voice` is unmarked, the `passive voice` is marked by -_dy_

```
Makydyre
maky-dy-re
give-PASS-IND
Was given
```

```
Akaiwododyre
a=aiwo-do-dy-re
2.SG-look-CAUS-PASS-IND
I was made to look
```

The cuasative voice is marked by -_do_.

```
ure imaragodydo
u=re i=maragody-do
3.SG=IND 1.SG=work-CAUS
He made me work
```




---

## Syntax

Bororo is an ergative language. S, A, and O are marked by the same set of bound indexes. But the construction where S and O appear are the same, i.e, they attach to the predicate. 

S is always marked by a bound index which carries TMA and negation markers, detached from the predicate. 

```
Imaragodyre
i-maragody=re
1SG-work=IND
I worked
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

Note, from the 3 previous examples above, that S as well as O are cliticized to the predicate, only A isn't. This is the reason why Bororo is considered an ergative language.


In transitive clauses, nothing may intervene between the A argument and the O-predicate slot. Adjuncts follow the predicate and if they are fronted, they are morphologically marked, they have their own mood/illocutionary force.

There is a clear preference for subordinate clauses to precede main clauses, as one would expect from a head-final language, although this is not obbligatory.


---


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
