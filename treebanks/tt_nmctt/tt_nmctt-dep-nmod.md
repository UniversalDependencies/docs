---
layout: base
title:  'Statistics of nmod in UD_Tatar-NMCTT'
udver: '2'
---

## Treebank Statistics: UD_Tatar-NMCTT: Relations: `nmod`

This relation is universal.

214 nodes (19%) are attached to their parents as `nmod`.

214 instances of `nmod` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.84579439252336.

The following 8 pairs of parts of speech are connected with `nmod`: <tt><a href="tt_nmctt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tt_nmctt-pos-NOUN.html">NOUN</a></tt> (137; 64% instances), <tt><a href="tt_nmctt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tt_nmctt-pos-PROPN.html">PROPN</a></tt> (39; 18% instances), <tt><a href="tt_nmctt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tt_nmctt-pos-VERB.html">VERB</a></tt> (21; 10% instances), <tt><a href="tt_nmctt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tt_nmctt-pos-PRON.html">PRON</a></tt> (8; 4% instances), <tt><a href="tt_nmctt-pos-VERB.html">VERB</a></tt>-<tt><a href="tt_nmctt-pos-NOUN.html">NOUN</a></tt> (5; 2% instances), <tt><a href="tt_nmctt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tt_nmctt-pos-ADJ.html">ADJ</a></tt> (2; 1% instances), <tt><a href="tt_nmctt-pos-NUM.html">NUM</a></tt>-<tt><a href="tt_nmctt-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="tt_nmctt-pos-VERB.html">VERB</a></tt>-<tt><a href="tt_nmctt-pos-VERB.html">VERB</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 nmod	color:blue
1	Ул	ул	PRON	_	Case=Nom|Number=Sing|Person=3|PronType=Prs	11	nsubj	_	LangID=TT
2	халык	халык	NOUN	_	Case=Nom|Number=Sing	3	nmod	_	LangID=TT
3	санын	сан	NOUN	_	Case=Acc|Number=Sing|Person[psor]=3	4	obj	_	LangID=TT
4	алу	ал	VERB	_	Case=Nom|Number=Sing|VerbForm=Vnoun	10	nsubj	_	LangID=TT
5	бик	бик	ADV	_	_	6	advmod	_	LangID=TT
6	мөһим	мөһим	ADJ	_	_	9	amod	_	LangID=TT|SpaceAfter=No
7	,	,	PUNCT	_	_	8	punct	_	LangID=OTHER
8	җаваплы	җаваплы	ADJ	_	_	6	parataxis	_	LangID=TT
9	чор	чор	NOUN	_	Case=Nom|Number=Sing	10	xcomp	_	LangID=TT
10	булганын	бул	VERB	_	Case=Acc|Person[psor]=3|Tense=Past|VerbForm=Part	11	obj	_	LangID=TT
11	искәртте	искәр	VERB	_	Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Cau	0	root	_	LangID=TT|SpaceAfter=No
12	.	.	PUNCT	_	_	11	punct	_	LangID=OTHER

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 4 nmod	color:blue
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
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 3 nmod	color:blue
1	«	«	PUNCT	_	_	3	punct	_	LangID=OTHER|SpaceAfter=No
2	Үтерергә	үтер	VERB	_	VerbForm=Inf	3	advcl	_	LangID=TT
3	омтылу	омтыл	VERB	_	Case=Nom|Number=Sing|VerbForm=Vnoun	5	nmod	_	LangID=TT|SpaceAfter=No
4	»	»	PUNCT	_	_	3	punct	_	LangID=OTHER
5	маддәсе	маддә	NOUN	_	Case=Nom|Number=Sing|Person[psor]=3	9	obl	_	LangID=TT
6	буенча	буенча	ADP	_	_	5	case	_	LangID=TT
7	җинаять	җинаять	NOUN	_	Case=Nom|Number=Sing	8	nmod	_	LangID=TT
8	эше	эш	NOUN	_	Case=Nom|Number=Sing|Person[psor]=3	9	nsubj	_	LangID=TT
9	кузгатылган	кузгат	VERB	_	Number=Sing|Person=3|Tense=Past|VerbForm=Part|Voice=Pass	0	root	_	LangID=TT|SpaceAfter=No
10	.	.	PUNCT	_	_	9	punct	_	LangID=OTHER

~~~


