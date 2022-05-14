---
layout: base
title:  'Statistics of advcl in UD_Tatar-NMCTT'
udver: '2'
---

## Treebank Statistics: UD_Tatar-NMCTT: Relations: `advcl`

This relation is universal.

31 nodes (2%) are attached to their parents as `advcl`.

30 instances of `advcl` (97%) are right-to-left (child precedes parent).
Average distance between parent and child is 4.54838709677419.

The following 5 pairs of parts of speech are connected with `advcl`: <tt><a href="tt_nmctt-pos-VERB.html">VERB</a></tt>-<tt><a href="tt_nmctt-pos-VERB.html">VERB</a></tt> (21; 68% instances), <tt><a href="tt_nmctt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="tt_nmctt-pos-VERB.html">VERB</a></tt> (5; 16% instances), <tt><a href="tt_nmctt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tt_nmctt-pos-VERB.html">VERB</a></tt> (3; 10% instances), <tt><a href="tt_nmctt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tt_nmctt-pos-ADJ.html">ADJ</a></tt> (1; 3% instances), <tt><a href="tt_nmctt-pos-VERB.html">VERB</a></tt>-<tt><a href="tt_nmctt-pos-ADJ.html">ADJ</a></tt> (1; 3% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 2 advcl	color:blue
1	Ихтыяҗ	ихтыяҗ	ADJ	_	_	2	xcomp	_	LangID=TT
2	булса	бул	VERB	_	Mood=Cnd|Person=3	6	advcl	_	LangID=TT|SpaceAfter=No
3	,	,	PUNCT	_	_	6	punct	_	LangID=OTHER
4	аларның	ул	PRON	_	Case=Gen|Number=Plur|PronType=Prs	5	nmod	_	LangID=TT
5	саны	сан	NOUN	_	Case=Nom|Number=Sing|Person[psor]=3	6	nsubj	_	LangID=TT
6	арттырылачак	арт	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Fut|VerbForm=Part|Voice=CauPass	0	root	_	LangID=TT|SpaceAfter=No
7	.	.	PUNCT	_	_	6	punct	_	LangID=OTHER

~~~


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 12 11 advcl	color:blue
1	Татарстанда	Татарстан	PROPN	_	Case=Loc|Number=Sing	3	obl	_	LangID=TT
2	томан	томан	NOUN	_	Case=Nom|Number=Sing	3	nsubj	_	LangID=TT
3	төшәчәк	төш	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Fut|VerbForm=Part	0	root	_	LangID=TT|SpaceAfter=No
4	,	,	PUNCT	_	_	12	punct	_	LangID=OTHER
5	күз	күз	NOUN	_	Case=Nom|Number=Sing	6	nmod	_	LangID=TT
6	күреме	күрем	NOUN	_	Case=Nom|Number=Sing|Person[psor]=3	11	nsubj	_	LangID=TT
7	500	500	NUM	_	NumType=Card	8	nummod	_	LangID=TT
8	метр	метр	NOUN	_	Case=Nom|Number=Sing	11	xcomp	_	LangID=RU
9	яки	яки	CCONJ	_	_	10	cc	_	LangID=TT
10	кимрәк	ким	ADJ	_	Degree=Cmp	8	conj	_	LangID=TT
11	булырга	бул	VERB	_	VerbForm=Inf	12	advcl	_	LangID=TT
12	мөмкин	мөмкин	ADJ	_	_	3	parataxis	_	LangID=TT|SpaceAfter=No
13	.	.	PUNCT	_	_	12	punct	_	LangID=OTHER

~~~


~~~ conllu
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 13 12 advcl	color:blue
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


