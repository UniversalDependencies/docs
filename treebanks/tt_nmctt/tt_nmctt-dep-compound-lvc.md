---
layout: base
title:  'Statistics of compound:lvc in UD_Tatar-NMCTT'
udver: '2'
---

## Treebank Statistics: UD_Tatar-NMCTT: Relations: `compound:lvc`

This relation is a language-specific subtype of <tt><a href="tt_nmctt-dep-compound.html">compound</a></tt>.

13 nodes (1%) are attached to their parents as `compound:lvc`.

13 instances of `compound:lvc` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.

The following 2 pairs of parts of speech are connected with `compound:lvc`: <tt><a href="tt_nmctt-pos-VERB.html">VERB</a></tt>-<tt><a href="tt_nmctt-pos-NOUN.html">NOUN</a></tt> (12; 92% instances), <tt><a href="tt_nmctt-pos-VERB.html">VERB</a></tt>-<tt><a href="tt_nmctt-pos-ADV.html">ADV</a></tt> (1; 8% instances).


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 9 compound:lvc	color:blue
1	Бу	бу	PRON	_	PronType=Dem	9	obl	_	LangID=TT
2	турыда	турыда	ADP	_	_	1	case	_	LangID=TT
3	Түбән	түбән	ADJ	_	_	4	amod	_	LangID=TT
4	Кама	Кама	PROPN	_	Case=Nom|Number=Sing	6	nmod	_	LangID=RU
5	муниципаль	муниципаль	ADJ	_	_	6	amod	_	LangID=RU
6	районы	район	NOUN	_	Case=Nom|Number=Sing|Person[psor]=3	8	nmod	_	LangID=TT
7	рәсми	рәсми	ADJ	_	_	8	amod	_	LangID=TT
8	сайтында	сайт	NOUN	_	Case=Loc|Number=Sing|Person[psor]=3	9	obl	_	CSPoint=сайт§ында|LangID=MIXED[RU§TT]
9	хәбәр	хәбәр	NOUN	_	Case=Nom|Number=Sing	10	compound:lvc	_	LangID=TT
10	ителә	ит	VERB	_	Number=Sing|Person=3|VerbForm=Fin|Voice=Pass	0	root	_	LangID=TT|SpaceAfter=No
11	.	.	PUNCT	_	_	10	punct	_	LangID=OTHER

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 5 compound:lvc	color:blue
1	«	«	PUNCT	_	_	14	punct	_	LangID=TT|SpaceAfter=No
2	Комиссия	комиссия	NOUN	_	Case=Nom|Number=Sing	3	nmod	_	LangID=RU
3	эшчәнлегендә	эшчәнлек	NOUN	_	Case=Loc|Number=Sing|Person[psor]=3	7	obl	_	LangID=TT
4	елны	ел	NOUN	_	Case=Acc|Number=Sing	7	obj	_	LangID=TT
5	шулай	шулай	ADV	_	_	6	compound:lvc	_	LangID=TT
6	итеп	ит	VERB	_	VerbForm=Conv	8	advcl	_	LangID=TT
7	игълан	игълан	NOUN	_	_	8	compound:lvc	_	LangID=TT
8	итү	ит	VERB	_	Case=Nom|Number=Sing|VerbForm=Vnoun	14	nsubj	_	LangID=TT
9	безгә	без	PRON	_	Case=Dat|Number=Plur|Person=1|PronType=Prs	13	obl	_	LangID=TT
10	бик	бик	ADV	_	_	11	advmod	_	LangID=TT
11	тупланып	тупла	VERB	_	VerbForm=Conv|Voice=Pass	12	advcl	_	LangID=TT
12	эшләргә	эшлә	VERB	_	VerbForm=Inf	13	advcl	_	LangID=TT
13	ярдәм	ярдәм	NOUN	_	Case=Nom|Number=Sing	14	compound:lvc	_	LangID=TT
14	итте	ит	VERB	_	Number=Sing|Person=3|Tense=Past|VerbForm=Fin	0	root	_	LangID=TT|SpaceAfter=No
15	.	.	PUNCT	_	_	14	punct	_	LangID=OTHER

~~~


