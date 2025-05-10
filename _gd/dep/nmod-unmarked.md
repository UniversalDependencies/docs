---
layout: relation
title: 'nmod:unmarked'
shortdef: 'unmarked nominal modifier'
udver: '2'
---

The `nmod:unmarked` relation is used for nominal modifiers of nouns where there is no preposition and `Case=Nom`.
If there is a preposition or `Case=Gen` we use `nmod` instead.

### Examples

#### Dialects

_urrainn_ 'can' usually expects the person who can to be indicated with the preposition _do_ but there are some dialects where the bare pronoun in used.
In the following example it would be usual to say _Cha b' urrainn dha_.

_Cha b' urrainn <b>e</b> innse ciamar a gheibheadh e air ais._ '<b>He</b> could not say how he got back' (n05\_006, train)

~~~ conllu
1	Cha	cha	PART	Qn	PartType=Vb|Polarity=Neg	3	mark:prt	_	_
2	b'	is	AUX	Ws	Tense=Past	3	cop	_	_
3	urrainn	urrainn	NOUN	Uf	_	0	root	_	_
4	e	e	PRON	Pp3sm	Gender=Masc|Number=Sing|Person=3|PronType=Prs	3	nmod:unmarked	_	_
5	innse	inns	NOUN	Nv	VerbForm=Vnoun	3	csubj:cop	_	_
6	ciamar	ciamar	PRON	Uq	PronType=Int	5	obj	_	_
7	a	a	PART	Q-r	PartType=Vb|PronType=Rel	8	advmod	_	_
8	gheibheadh	geibh	VERB	V-h	Mood=Ind|VerbForm=Fin	6	acl:relcl	_	_
9	e	e	PRON	Pp3sm	Gender=Masc|Number=Sing|Person=3|PronType=Prs	8	nsubj	_	_
10	air	air	ADP	Sp	_	11	case	_	_
11	ais	ais	NOUN	Nf	_	8	obl	_	SpaceAfter=No
~~~

#### Indeclinables

Used where a nominal modifier is a noun and would normally be in the genitive form but has not been declined as it is a borrowing or a foreign name.

* _fo chomain aig obair <b>Flinn</b>_ 'under an obligation to the work of <b>Flinn</b>' (fp09\_014)
* _Thèid rannsachadh <b>post-mortem</b> a dhèanamh an-diugh_ 'A <b>post-mortem</b> examination will be done today' (ns08\_000)

Indeclinable toponyms and borrowings are still annotated with `Case=Gen` where:

* they are preceded by the correct genitive form of the article
* or some effort has been made to match Gaelic grammar through lenition: _Bhosnia_, _mhillennium_
* or the genitive form in contemporary usage is identical with the nominative: _Alba_ 'Scotland', _Astràilia_ 'Australia', _Idhe_ 'Iona', _Ròcabarraigh_ 'Rockall'

#### Interrogatives

Where they precede a noun rather than a relative clause, they are currently annotated as `nmod:unmarked`.

_gu dé na tréithean litreachail a dh’éirich mar thoradh_ 'what literary traits arose as a result' (fp09\_002)

~~~sdparse
gu dé na tréithean litreachail a dh’éirich mar thoradh
nmod:unmarked(gu, tréithean)
fixed(dé, gu)
det(na, tréithean)
~~~

#### Noun chains in the genitive

Where there is a complex noun phrase of the form X of the Y of the Z (of the...) only the last noun in the chain has the article or is in the genitive.
This last noun is connected to its predecessor by `nmod` and the intermediate ones in the chain are connected by `nmod:unmarked`.

_leithid cruth nan sùilean_ 'such as the shape of the eyes' (fp04\_036, train)

~~~sdparse
leithid cruth nan sùilean
nmod:unmarked(cruth, leithid)
det(nan, sùilean)
nmod(sùilean, cruth)
~~~

Note that toponyms behave as a single unit.
In the following example _loch_ is in the genitive form _locha_:

_Nighean Rìgh Locha Trèig_ 'the daughter of the King of Loch Treig' (n07\_000, train)

~~~sdparse
Nighean Rìgh Locha Trèig
nmod:unmarked(Rìgh, Nighean)
nmod(Locha, Rìgh)
flat:name(Trèig, Locha)
~~~

#### Reflexive pronouns
_Bett <b>fhèin</b> a' ruith suas_ 'Bett <b>himself</b> running up' (s09\_017)

~~~sdparse
Bett fhèin a' ruith suas
nmod:unmarked(Bett, fhèin)
~~~

#### Years

This relation is also used in phrases like _sa bhliadhna 1774_ 'in the year 1774' to link the year to the word for year.

~~~conllu
1-2	sa	_	_	_	_	_	_	_	_
1	anns	an	ADP	Sp	_	3	case	_	_
2	an	an	ADP	Sp	_	1	fixed	_	_
3	bhliadhna	bliadhna	NOUN	Ncsfd	Case=Dat|Gender=Fem|Number=Sing	0	obl	_	_
4	1774	1774	NUM	Mn	_	3	nmod:unmarked	_	SpaceAfter=No
~~~

<!-- Interlanguage links updated So 10. května 2025, 18:15:46 CEST -->
