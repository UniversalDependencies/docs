---
layout: relation
title: 'fixed'
shortdef: 'multi-word expression'
udver: '2'
---

The `fixed` relation is used for a small set of multiword expressions, largely taken over intact from ARCOSG.

These mainly fall into the following categories:
* adverbs, like _an ear_ or _a chaoidh_
* compound conjunctions like _o chionn 's_
* compound prepositions like _am broinn_ and especially ones that are often spelt with a hyphen but have been written with a space instead like  _a rèir_
* copulae, like _'s e_ or _gur e_

#### Examples

~~~ conllu
1	taobh	taobh	NOUN	Ncsmd	Case=Dat|Gender=Masc|Number=Sing	0	root	_	_
2	a	a	ADJ	Aq	_	1	amod	_	_
3	deas	deas	ADJ	Aq	_	2	fixed	_	_
4	na	an	DET	Tdsfg	Case=Gen|Definite=Def|Gender=Fem|Number=Sing|PronType=Art	5	det	_	_
5	dùthcha	dùthaich	NOUN	Ncsfg	Case=Gen|Gender=Fem|Number=Sing	1	nmod	_	_
~~~
"the southern side of the country"

~~~ conllu
1	bho	bho	ADP	Sp	_	3	case	_	_
2	chionn	cionn	ADP	Nf	_	1	fixed	_	_
3	ghoirid	goirid	ADJ	Aq-smd	Case=Dat|Gender=Masc|Number=Sing	0	root	_	_
~~~
"a short time ago"

~~~ conllu
1	's	is	AUX	Wp-i	Tense=Pres	3	cop	_	_
2	e	e	PRON	Pp3sm	Gender=Masc|Number=Sing|Person=3	1	fixed	_	_
3	dusan	dusan	NOUN	Ncsmn	Case=Nom|Gender=Masc|Number=Sing	0	root	_	_
4	acair	acair	NOUN	Ncsmg	Case=Gen|Gender=Masc|Number=Sing	3	nmod	_	_
5	a	a	PART	Q-r	PartType=Vb|PronType=Rel	6	nsubj	_	_
6	bh'	bi	VERB	V-s	Tense=Past	3	csubj:cleft	_	_
7-8	annta	_	_	_	_	_	_	_	_
7	an	an	ADP	Sp	_	8	case	_	_
8	iad	iad	PRON	Pp3p	Number=Plur|Person=3	6	xcomp:pred	_	_
~~~
copula and expletive pronoun, here "it was a dozen acres".
This is a really common construction in Scottish Gaelic.

### Full list

The following expressions are approved by the validator at https://github.com/colinbatchelor/gdbank/blob/master/validate_gd_extras.py

As such they include dialect variants, spelling variants, words without diacritics and spelling mistakes.
They can also be found in https://github.com/colinbatchelor/gdbank/blob/master/fixed.gd

This list contains bigrams that are not valid on their own but only as part of larger expressions.
These bigrams are not listed below.

Within their categories they are listed in alphabetical order of content word followed by non-content words, disregarding lenition, so _bho thoiseach_ is listed after _an toiseach_.

#### Compound adjectives

Some of these also serve as adverbs.

| Phrase | gloss | UPOS for tokens | ExtPos | Notes |
|--------|-------|-----------------|--------|-|
| _air bith_ | any | ADP NOUN | ADJ ||
| _sam bith_, _sam bidh_ | any | ADP NOUN | ADJ | This is originally _anns am bith_ but we're not treating the first element as a MWE yet |
| _air choireigin_, _air choreigin_ | or other | ADP NOUN | ADJ ||
| _a deas_ | south | PART NOUN | ADJ ||
| _mu dheas_ | southern | PART NOUN | ADJ ||
| _bho dheireadh_, _fo dheireadh_, _mu dheireadh_, _ma dheireadh_ | last | ADP NOUN | ADJ | _ma_ is dialectal |
| _'n ear_, _an ear_ | east | PART NOUN | ADJ ||
| _an earas_, _an earras_ | southeast | PART NOUN | ADJ ||
| _'n iar_, _an iar_ | west | PART NOUN | ADJ ||
| _an iaras_, _an iarras_ | southwest | PART NOUN | ADJ ||
| _air leth_ | exceptional | ADP NOUN | ADJ ||
| _fa leth_ | individual | ADP NOUN | ADJ ||
| _a mach_ | out | PART NOUN | ADJ ||
| _a muigh_ | outside | PART NOUN | ADJ ||
| _a staigh_, _a stigh_ | inside | PART NOUN | ADJ ||
| _a steach_ | in | PART NOUN | ADJ ||
| _a tuath_ | north | PART NOUN | ADJ ||
| _mu thuath_ | northern | PART NOUN | ADJ ||

#### Compound adverbs

Many of these are spelt, at least according to GOC, with a hyphen.

Some of these also serve as adjectives.

| Phrase | gloss | UPOS for tokens | ExtPos |
|--------|-------|-----------------|--------|
| _an àird_, _an àirde_ | up | PART NOUN | ADV |
| _a dh'aithghearr_ | shortly | ADP NOUN | ADV |
| _a dh'aona-ghnothaich_ | deliberately | ADP NOUN | ADV |
| _an ath-oidhch'_, _an ath-oidhche_ | tomorrow night | PART NOUN | ADV |
| _anns a' bhad_, _sa bhad_ | at once | ADP DET NOUN | ADV |
| _am bliadhna_ | this year | PART NOUN | ADV |
| _a bhòn-uiridh_ | the year before last | PART PRON | ADV |
| _a chaoidh_ | ever | PART PRON | ADV |
| _a cheana_  | already | PART NOUN | ADV |
| _an ceart-uair_, _an ceartuair_ | right now | PART NOUN | ADV |
| _a cheile_, _a chèile_, _a chéile_ | each other | PART NOUN | ADV |
| _ri cheile_, _ri chèile_, _ri chéile_ | together, against each other | ADP NOUN | ADV |
| _mar an ceudna_ | similarly | SCONJ DET NOUN | ADV |
| _dè cho_, _dé cho_ | how (as in how big) | PRON ADV | ADV |
| _an còmhnaidh_ | always | ADP NOUN | ADV |
| _an dè_ | yesterday | PART NOUN | ADV |
| _air dheireadh_ | behind, late, trailing | ADP NOUN | ADV |
| _mu dheireadh thall_, _ma dheireadh thall_ | eventually | ADP NOUN ADV | ADV |
| _'n diugh_, _an diugh_, _a' diugh_ | today | PART NOUN | ADV |
| _an dràsda_, _an dràsta_ | now | PART NOUN | ADV |
| _an earar_ | the day after tomorrow | PART NOUN | ADV |
| _fad as_ | far off | NOUN ADP | ADV |
| _air falbh_ | away | ADP NOUN | ADV |
| _an ìre mhath_ | fairly | ADP NOUN ADJ | ADV |
| _air leth_ | particularly | ADP NOUN | ADV |
| _fa leth_ | one by one | ADP NOUN | ADV |
| _an iarar_ | the day before yesterday | PART NOUN | ADV |
| _an làrna-mhàireach_ | the following morning | PART NOUN | ADV |
| _a mach_ | out | PART NOUN | ADV |
| _a muigh_ | outside | PART NOUN | ADV |
| _a màireach_ | tomorrow | PART NOUN | ADV |
| _a neisd_, _a nis_, _a nise_ | now | PART NOUN | ADV |
| _a nuas_ | down (towards speaker) | PART NOUN | ADV |
| _a nochd_ | tonight | PART NOUN | ADV |
| _a raoir_, _an raoir_ | last night | PART NOUN | ADV |
| _a riamh_ | every | PART NOUN | ADV |
| _a rithist_ | again | PART NOUN | ADV |
| _'n seo_, _an seo_, _a seo_ | here | PART PRON | ADV |
| _ann a sheo_, _ann a-seo_, _ann an seo_ | here | ADP (PART) PRON | ADV |
| _ann a sheothach_, _ann a-seothach_, _an seothach_ | here | ADP (PART) ADJ | ADV |
| _mu sgaoil_, _ma sgaoil_ | loose | PART NOUN | ADV |
| _an sin_, _'n sin_, _a sin_, _an sean_ | there | PART PRON | ADV |
| _ann a shin_, _ann a-sin_ | there | ADP PART PRON | ADV |
| _ann a-sineach_, _an sineach_ | there | ADP ADJ | ADV |
| _an siod_, _an siud_, _ann a-siud_, _ann a shiud_ | yonder | PART PRON | ADV |
| _an siudach_, _ann a shiodach_, _ann a shiudach_ | yonder | ADP (PART) ADJ | ADV |
| _a staigh_, _a stigh_ | inside | PART NOUN | ADV |
| _a steach_ | in | PART NOUN | ADV |
| _ma tha_, _ma thà_ | indeed | SCONJ VERB | ADV |
| _an toiseach_ | at first | ADP NOUN | ADV |
| _bho thoiseach_ | from the start | ADP NOUN | ADV |
| _mu thràth_ | already | ADP NOUN | ADV |
| _air thùs_ | at first | ADP NOUN | ADV |
| _mar is trice_, _mar bu trice_ | usually | SCONJ AUX ADJ | ADV |
| _'n uairsin_, _an uairsin_, _an uair sin_ | then | ADP NOUN (DET) | ADV |
| _o'n uairsin_ | since then | ADP DET NOUN | ADV | 
| _an uiridh_, _an uirigh_ | last year | PART NOUN | ADV |

#### Compound auxiliaries

| Phrase | words | gloss | UPOS for words | ExtPos |
|--------|-------|-------|----------------|--------|
| _b' ann_, _bann_ | bu an e | was (fronts an adjective, adverb or PP) | AUX ADP PRON | AUX |
| _b' e_ | bu e | was (fronts an NP) | AUX PRON | AUX |
| _b' i_ | bu i | was (fronts an NP) | AUX PRON | AUX |
| _chan ann_ | chan an e | isn't (fronts an adjective, adverb or PP) | AUX ADP PRON | AUX |
| _chan e_ | chan e | isn't (fronts an NP) | AUX PRON | AUX |
| _gur ann_ | gur an e | that it is (fronts an adjective, adverb or PP) |  AUX ADP PRON | AUX |
| _gun e_, _gur e_, _gur h-e_ | gur e | that it is (fronts an NP) | AUX PRON | AUX |
| _'s ann_, _'sann_, _sann_, _is ann_ | is an e | is (fronts an adjective, adverb or PP) | AUX ADP PRON | AUX |
| _'s e_, _'se_, _se_, _is e_ | is e | is (fronts an NP) | AUX PRON | AUX |
| _'s i_, _'si_, _si_, _is i_ | is i | is (fronts an NP) | AUX PRON | AUX |
| _nach ann_ | nach an e | isn't it (fronts an adjective, adverb or PP) | AUX ADP PRON | AUX |
| _nach e_ | nach e | isn't it (fronts an NP) | AUX ADP PRON | AUX |

#### Compound coordinators

| Phrase | gloss | UPOS for words | ExtPos |
|--------|-------|----------------|--------|
| _air neo_ | or | ADP CCONJ | CCONJ |

#### Compound determiners

| Phrase | gloss | UPOS for tokens | ExtPos |
|--------|-------|-----------------|--------|
| _a h-uile_, _a chuile_ | every | DET NOUN | DET |

#### Compound particles

| Phrase | gloss | UPOS for tokens |  ExtPos |
|--------|-------|-----------------|---------|
| _na b'_, _na bu_ | comparative marker (past) | PART AUX | PART |

#### Compound prepositions

| Phrase | gloss | UPOS for tokens | ExtPos | Notes |
|--------|-------|-----------------|--------|-------|
| _a dh'aindeoin_, _a dh'ainneoin_ | in spite of | ADP NOUN | ADP | |
| _ann am_, _ann an_, _ann a'_ | in (indefinite) | ADP ADP | ADP | Also _ann a:_ for a dysfluency. _ann a'_ is non-standard but shows up in the news subcorpus |
| _anns a'_, _anns an_, _anns na_ | in (definite) | ADP ADP | ADP ||
| _as aonais_, _ás aonais_, _às aonais_ | apart from | ADP NOUN | ADP | |
| _air beulaibh_, _air bheulaibh_ | in front of | ADP NOUN | ADP | Contains the old _-(a)ibh_ dative ending |
| _am broinn_ | within | ADP NOUN | ADP | |
| _bho chionn_, _o chionn_ | since | ADP NOUN | ADP | |
| _os cionn_, _fos cionn_ | above |  ADP NOUN | ADP | |
| _mu choinneamh_, _mu choinneimh_ | opposite | ADP NOUN | ADP | |
| _mu chuairt_, _mun chuairt_ | around, about | ADP NOUN | ADP | |
| _an cois_ | at the foot of, accompanying | ADP NOUN | ADP | |
| _air cùlaibh_ | behind | ADP NOUN | ADP | Contains the old _-(a)ibh_ dative ending |
| _'n déidh_, _an deidh_, _an dèidh_, _an déidh_ | after | ADP NOUN | ADP | |
| _as deidh_, _as dèidh_, _as déidh_ | after | ADP NOUN | ADP | |
| _mu dheidhinn_, _ma dheidhinn_, _mu 'n_ | about | ADP NOUN | ADP | _ma_ is a variant of _mu_ |
| _air feadh_ | throughout | ADP NOUN | ADP | |
| _ri linn_ | on account of, at the time of | ADP NOUN | ADP | |
| _a lùib_, _an lùib_ | along with | ADP NOUN | ADP | |
| _am measg_ | among | ADP NOUN | ADP | |
| _a réir_, _a rèir_ | according to | ADP NOUN | ADP | originally _do réir_ |
| _gu ruige_ | up to | ADP NOUN | ADP | Dwelly says that the correct for is _gu nuig_ |
| _air sgath_, _air sgàth_ | because of | ADP NOUN | ADP | |
| _air son_ | for | ADP NOUN | ADP | usually _airson_ |
| _an taca ri_, _an taca ris_ | compared to | ADP NOUN ADP | ADP | Validator also supports _an tac_ because of a dysfluency |
| _a thaobh_ | in regard to | ADP NOUN | ADP | |

#### Compound pronouns

| Phrase | gloss | UPOS for tokens | ExtPos | Notes |
|--------|-------|-----------------|--------|-------|
| _air mo bheulaibh_ | in front of me | ADP DET NOUN | PRON | and _do_, _a_... |
| _có dhiubh_ | which of them | PRON ADP NOUN | PRON | |
| _gu dé_, _gu dè_ | what | PRON PRON | PRON | reanalysis of _ciod é_. _Dè_ is standard | 
| _dé mar_, _dè mar_ | how | PRON ADV | PRON | |
| _cia mheud_ | how many | PRON NOUN | PRON | |
| _car son_ | why | ADP NOUN | PRON | usually _carson_ |

#### Compound subordinators

The usual pattern is `(ADP|PART)? NOUN CCONJ` but there are others.

| Phrase | gloss | UPOS for tokens | ExtPos | Notes |
|--------|-------|-----------------|--------|-------|
| _gu bè gu dè_, _gu b'e dè_ | whichever, whatever | SCONJ AUX (PRON) PRON | SCONJ | _bè_ is _b' e_ and should be analysed like that. |
| _bho 'n_ | since | ADP PART | SCONJ ||
| _as bith dè_, _às bith dè_ | whichever, whatever | SCONJ NOUN PRON | SCONJ ||
| _gar bith dè_ | whichever, whatever | SCONJ NOUN PRON | SCONJ | Officially _ge air bith dè_ |
| _ge brith dè_ | whichever, whatever | CCONJ NOUN PRON | SCONJ | Precedes _dè_ or _cò |
| _a chionn is_ | because | PART NOUN CCONJ | SCONJ ||
| _fad 's_, _fhad 's_, _fhad agus_ | as far as | NOUN CCONJ | SCONJ ||
| _fiù 's_ | even if | NOUN CCONJ |SCONJ ||
| _am feadh is_ | while | PART NOUN CCONJ | SCONJ ||
| _ri linn 's_ | because | ADP NOUN CCONJ || SCONJ ||
| _air sgàth 's_ | because | ADP NOUN CCONJ | SCONJ ||
| _a thoradh_, _a thoireadh_ | because | PART NOUN | SCONJ ||
| _an uair_, _'n uair_ | when | PART NOUN | SCONJ ||
| _aon uair 's_ | when | NUM NOUN CCONJ | SCONJ ||

<!-- Interlanguage links updated Po 11. listopadu 2024, 20:10:54 CET -->
