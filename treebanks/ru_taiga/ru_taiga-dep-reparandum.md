---
layout: base
title:  'Statistics of reparandum in UD_Russian-Taiga'
udver: '2'
---

## Treebank Statistics: UD_Russian-Taiga: Relations: `reparandum`

This relation is universal.

41 nodes (0%) are attached to their parents as `reparandum`.

35 instances of `reparandum` (85%) are right-to-left (child precedes parent).
Average distance between parent and child is 4.34146341463415.

The following 11 pairs of parts of speech are connected with `reparandum`: <tt><a href="ru_taiga-pos-PRON.html">PRON</a></tt>-<tt><a href="ru_taiga-pos-PRON.html">PRON</a></tt> (27; 66% instances), <tt><a href="ru_taiga-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ru_taiga-pos-NOUN.html">NOUN</a></tt> (3; 7% instances), <tt><a href="ru_taiga-pos-PROPN.html">PROPN</a></tt>-<tt><a href="ru_taiga-pos-X.html">X</a></tt> (2; 5% instances), <tt><a href="ru_taiga-pos-VERB.html">VERB</a></tt>-<tt><a href="ru_taiga-pos-VERB.html">VERB</a></tt> (2; 5% instances), <tt><a href="ru_taiga-pos-ADP.html">ADP</a></tt>-<tt><a href="ru_taiga-pos-ADP.html">ADP</a></tt> (1; 2% instances), <tt><a href="ru_taiga-pos-AUX.html">AUX</a></tt>-<tt><a href="ru_taiga-pos-AUX.html">AUX</a></tt> (1; 2% instances), <tt><a href="ru_taiga-pos-CCONJ.html">CCONJ</a></tt>-<tt><a href="ru_taiga-pos-ADP.html">ADP</a></tt> (1; 2% instances), <tt><a href="ru_taiga-pos-DET.html">DET</a></tt>-<tt><a href="ru_taiga-pos-PRON.html">PRON</a></tt> (1; 2% instances), <tt><a href="ru_taiga-pos-SCONJ.html">SCONJ</a></tt>-<tt><a href="ru_taiga-pos-SCONJ.html">SCONJ</a></tt> (1; 2% instances), <tt><a href="ru_taiga-pos-VERB.html">VERB</a></tt>-<tt><a href="ru_taiga-pos-INTJ.html">INTJ</a></tt> (1; 2% instances), <tt><a href="ru_taiga-pos-VERB.html">VERB</a></tt>-<tt><a href="ru_taiga-pos-X.html">X</a></tt> (1; 2% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 2 reparandum	color:blue
1	А	а	CCONJ	_	_	2	cc	_	_
2	вы	вы	PRON	_	Case=Nom|Number=Plur|Person=2|PronType=Prs	5	reparandum	_	_
3	а	а	CCONJ	_	_	5	cc	_	_
4	у	у	ADP	_	_	5	case	_	_
5	вас	вы	PRON	_	Case=Gen|Number=Plur|Person=2|PronType=Prs	0	root	_	_
6	что	что	PRON	_	Animacy=Inan|Case=Nom|Gender=Neut|Number=Sing|PronType=Int	5	nsubj	_	SpaceAfter=No
7	?	?	PUNCT	_	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 25	bgColor:blue
# visual-style 25	fgColor:white
# visual-style 25 14 reparandum	color:blue
1	--	--	PUNCT	_	_	11	punct	_	_
2	В	в	ADP	_	_	4	case	_	_
3	последние	последний	ADJ	_	Animacy=Inan|Case=Acc|Degree=Pos|Number=Plur	4	amod	_	_
4	годы	год	NOUN	_	Animacy=Inan|Case=Acc|Gender=Masc|Number=Plur	11	obl:tmod	_	_
5	популяция	популяция	NOUN	_	Animacy=Inan|Case=Nom|Gender=Fem|Number=Sing	11	nsubj	_	_
6	этой	этот	DET	_	Case=Gen|Gender=Fem|Number=Sing|PronType=Dem	7	det	_	_
7	амфибии	амфибия	NOUN	_	Animacy=Anim|Case=Gen|Gender=Fem|Number=Sing	5	nmod	_	_
8	на	на	ADP	_	_	9	case	_	_
9	острове	остров	NOUN	_	Animacy=Inan|Case=Loc|Gender=Masc|Number=Sing	5	nmod	_	_
10	резко	резко	ADV	_	Degree=Pos	11	advmod	_	_
11	сократилась	сократиться	VERB	_	Aspect=Perf|Gender=Fem|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin|Voice=Mid	0	root	_	feat="Transit=Intr"|_
12	и	и	CCONJ	_	_	28	cc	_	_
13	ее	ее	DET	_	Poss=Yes|PronType=Prs	14	det	_	_
14	потеря	потеря	NOUN	_	Animacy=Inan|Case=Nom|Gender=Fem|Number=Sing	25	reparandum	_	SpaceAfter=No
15	…	…	PUNCT	_	_	20	punct	_	_
16	--	--	PUNCT	_	_	20	punct	_	_
17	седой	седой	ADJ	_	Case=Nom|Degree=Pos|Gender=Masc|Number=Sing	18	amod	_	_
18	человек	человек	NOUN	_	Animacy=Anim|Case=Nom|Gender=Masc|Number=Sing	20	nsubj	_	_
19	снова	снова	ADV	_	Degree=Pos	20	advmod	_	_
20	воспользовался	воспользоваться	VERB	_	Aspect=Perf|Gender=Masc|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin|Voice=Mid	14	parataxis	_	feat="Transit=Intr"|_
21	платком	платок	NOUN	_	Animacy=Inan|Case=Ins|Gender=Masc|Number=Sing	20	iobj	_	SpaceAfter=No
22	,	,	PUNCT	_	_	20	punct	_	_
23	--	--	PUNCT	_	_	25	punct	_	_
24	ее	ее	DET	_	Poss=Yes|PronType=Prs	25	det	_	_
25	потеря	потеря	NOUN	_	Animacy=Inan|Case=Nom|Gender=Fem|Number=Sing	28	nsubj	_	_
26	была	быть	AUX	_	Gender=Fem|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin|Voice=Act	28	cop	_	feat="Transit=Intr"|_
27	бы	бы	AUX	_	Mood=Cnd	28	aux	_	_
28	невосполнима	невосполнимый	ADJ	_	Degree=Pos|Gender=Fem|Number=Sing|Variant=Short	11	conj	_	SpaceAfter=No
29	!	!	PUNCT	_	_	11	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 3 reparandum	color:blue
1	Позвал	позвать	VERB	_	Aspect=Perf|Gender=Masc|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	feat="Transit=Tran"|_
2	тогда	тогда	ADV	_	Degree=Pos|PronType=Dem	1	advmod	_	pos="ADVPRO"|_
3	Тем	Тем	X	_	_	7	reparandum	_	SpaceAfter=No
4	…	…	PUNCT	_	_	3	punct	_	_
5	Трям	Трям	X	_	_	7	reparandum	_	SpaceAfter=No
6	…	…	PUNCT	_	_	5	punct	_	_
7	Трюминатор	Терминатор	PROPN	_	Animacy=Anim|Case=Nom|Gender=Masc|NameType=Prs|Number=Sing|Typo=Yes	1	nsubj	_	_
8	Жучку	Жучка	PROPN	_	Animacy=Anim|Case=Acc|Gender=Fem|NameType=Zoo|Number=Sing	1	obj	_	SpaceAfter=No
9	.	.	PUNCT	_	_	1	punct	_	sent_after='</p>\n<p>'

~~~


