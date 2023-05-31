---
layout: base
title:  'Welsh UD'
udver: '2'
---

# UD for Welsh <span class="flagspan"><img class="flag" src="../../flags/svg/GB-WLS.svg" /></span>

## Tokenization and Word Segmentation

* In general Welsh is tokenized as English. Upper case is used for the first word of a sentence, proper names, months and weekdays.
* A notable difference is the apostrophe, which is part of the following word. Examples
  * _Mae o'n dod_ («He is coming»): Mae, o, 'n, dod
  * _i'm weld_ («to see me»): i, 'm, weld
  * _â'u ffrindiau_ («with their friends»): â, 'u, ffrindiau
  * other shortened forms: _'w_, _'i_, _'th_
* In same cases the apostrophe goes with the preceding word
  * _... yw f'enw i_ («... is my name»): yw, f', enw, i


## Morphology

### Tags

* [PROPN](): the XPOS distinguished between person, palce, organisation (and propn for all other types)
* [DET]() is used for the definite article (XPOS: art)
* [PRON](): five subclasses (XPOS):
  * dem: demonstrative pronouns (_hwn_, _hon_, etc.)
  * refl: reflexive pronouns (_hun_, _hunan_, etc.)
  * rel: relative pronoun (_a_)
  * indep: independent pronouns (used in subject position)
  * dep: dependent pronouns (used in object position and as possessives, e.g. _fy nhŷ_ «my house», _fy ngweld_ «[to] see me»)
  * pron: interrogatives and others (_beth_, _neb_, _pwy_, _rhai_, _sawl_)
* AUX is used in three cases:
  * for the auxiliary verb _bod_, if inflected and in copula position)
  * for TAM markers (_yn_ (XPOS: impf), _wedi_ (ante), _newydd_ (ante), _heb_ (ante),  _hen_ (ante), _ar_ (post),  _am_ (post)
    (maybe changed to PART in a future version)
  * for preverbals (_y_, _a_, _mi_, _fe_)
    (maybe changed to PART in a future version)
* [VERB]() is used for all finite verbs, including _bod_ if it is the main verb (followed by a verbnoun). Verbnouns however are marked as [NOUN]() (with XPOS verbnoun) since they function syntactically as nouns (the direct object is in a genetive construction, the subject is marked with a preposition). 
See [conjugation tables](conjugation.md) for forms and corresponding UD Tense/Mood values
* [ADP](): inflected prepostions are marked with the XPOS iprep, other preposition have the XPOS prep)
* [PART]() is only used for the predicative marker _yn_ (which triggers soft mutation on the following word, in difference to the TAM marker _yn_ with does not trigger any mutation and the preposition _yn_ which triggers nasal mutation). The predicative _yn_ is used before nouns and adjectives in head position _Mae Siôn yn athro_ «Siôn is a teacher», _Roedd Nia yn gyflym_ «Nia was fast»
* The ADV class also contains _dyma_, _dyna_ and _dacw_, even though they can function as a copula.

---
**Instruction**: Specify any unused tags. Explain what words are tagged as PART. Describe how the AUX-VERB and DET-PRON distinctions are drawn, and specify whether there are (de)verbal forms tagged as ADJ, ADV or NOUN. Include links to language-specific tag definitions if any.

---

### Features

* Additional features exist to indicate the initial mutation
  * [Mutation]() with values `AM`, `NM` or `SM` for aspirated, nasal or soft mutation
  * impersonal form of verbs use `Person=0`: _cyhoeddwyd y llyfr y llinedd_ «One has published the book last year» (cf. French «on a publié le livre l'an dernier» or German «man hat das Buch letztes Jahr veröffentlicht»). Usually the impersonal forms are translated by passive forms in English, French or German.
  * Tense=Fut,Imp,Pres,Past,Pqp 




## Syntax

* Verbnouns function as nouns in Welsh: The direct object is in a genetive case (like possessives for other nouns), subjects (unless linked indirectly via a xcomp relation, are attached using a prepositional phrase. However, currently, we still use nsubj, obj , obl, csubj, ccomp and xcomp for dependents of verbnouns, in opposition to nmod etc. for nouns.
* Welsh specific dependency relation
  * [case:pred]() only to attach the predicative _yn_ (PART) to its head noun or ajdective
* Other relations with `:`
  * [acl:relcl]()
  * [flat:name]()
  * [obl:agent]() (_gan_ attached agents for impersonal verb forms)
  * [nmod:agent]() (_gan_ attached agents for verbnouns in _cael_ passives)

* The following multi-word expressions use the fixed dependency relation
  * _o hyd_ «always«
  * _ar hyd_ «along»
  * _ar draws_ «across»
  * _hyd at_ «as far as»
  * _hyd yn oed_ «even»
  * _dim ond_ «only»
  * _i fyny_ «up»
  * _i mewn_ «into»
  * _o fewn_ «within»
  * _o dan_ «under»
  * _o hyd_ «always»
  * _ynglŷn â_ «in connection with»
  * _yn hytrach_ «rather»
  * _yn erbyn_ «against»
  * _modd bynnag_ «however»
  * _oddi ar_ «since»
  * _oddi yma_ «from here»
  * _oddi wrth_ «from»
  * _oddi mewn_ «within»
  * _ar draws_ «across»
  * _er gwaethaf_ «in spite of»
  * _er mai_ «although»
  * _er drwg_ «despite»
  * _wrth gwrs_ «of course»
  * _wrth i_ «to»
  * _yn hytrach_ «rather than»
  * _ynglŷn â_ «regarding»

## Inflected prepositions
Originally inflected prepositions (Gender, Person, Number) were annotated as single words. If followed by the corresponding pronoun, they were attached as `case` to the pronoun, else they were attached as `nmod` or `obl` to their nominal or verbal head, as if it were case marked pronouns. 

_gwrando arni_ (listening to her)

```
1  gwrando   gwrando   VERB   ...
2  arni      ar        ADP    ...  1  obl
```

_gwrando arni hi_ (listening to her)


```
1  gwrando   gwrando   VERB   ...
2  arni      ar        ADP    ...  3  case
3  hi        hi        PRON   ...  1  obl
```


From version 2.7 inflected pronouns are annotated as multiword tokens, the preposition is attached to the following pronoun with `case`. An additional pronoun is attached with `compound:redup`


_gwrando arni_

```
1    gwrando  gwrando   VERB   ...
2-3  arni
2    ar       ar        ADP    ...  3  case
3    hi       hi        PRON   ...  1  obl
```

```
1    gwrando  gwrando   VERB   ...
2-3  arni
2    ar       ar        ADP    ...  3  case
3    hi       hi        PRON   ...  1  obl
4    hi       hi        PRON   ...  3  compound:redup
```




## Treebanks

There is [one](../treebanks/cy-comparison.html) Welsh UD treebank:

  * [Welsh-CCG](../treebanks/cy-CCG/index.html)

---
**Instruction**: Treebank-specific pages are generated automatically from the README file in the treebank repository and
from the data in the latest release. Link to the respective `*-index.html` page in the `treebanks` folder, using the language code
and the treebank code in the file name.

---
