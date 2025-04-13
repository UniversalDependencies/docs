---
layout: base
title:  'Statistics of compound in UD_Albanian-STAF'
udver: '2'
---

## Treebank Statistics: UD_Albanian-STAF: Relations: `compound`

This relation is universal.

5 nodes (0%) are attached to their parents as `compound`.

3 instances of `compound` (60%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.2.

The following 3 pairs of parts of speech are connected with `compound`: <tt><a href="sq_staf-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sq_staf-pos-PART.html">PART</a></tt> (2; 40% instances), <tt><a href="sq_staf-pos-VERB.html">VERB</a></tt>-<tt><a href="sq_staf-pos-NOUN.html">NOUN</a></tt> (2; 40% instances), <tt><a href="sq_staf-pos-NUM.html">NUM</a></tt>-<tt><a href="sq_staf-pos-NUM.html">NUM</a></tt> (1; 20% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 compound	color:blue
1	Ish	ish	PART	_	_	2	compound	_	_
2	gruaja	grua	NOUN	_	Case=Nom|Definite=Def|Gender=Fem|Number=Sing	7	nsubj	_	_
3	e	e	DET	_	Gender=Fem|Number=Sing	4	det	_	_
4	tij	tij	PRON	_	Case=Nom|Gender=Masc|Number=Sing|Person=3|Poss=Yes|PronType=Prs	2	det:poss	_	_
5	dhe	dhe	CCONJ	_	_	6	cc	_	_
6	ai	ai	PRON	_	Case=Nom|Gender=Masc|Number=Sing|Person=3|PronType=Prs	2	conj	_	_
7	pasqyroheshin	pasqyroj	VERB	_	Mood=Ind|Number=Plur|Person=3|Tense=Past|Voice=Mid	0	root	_	_
8	në	në	ADP	_	_	9	case	_	_
9	aktivitete	aktivitet	NOUN	_	Case=Acc|Definite=Ind|Gender=Fem|Number=Plur	7	obl	_	_
10	të	të	DET	_	Case=Acc|Gender=Fem|Number=Plur|PronType=Art	11	det:adj	_	_
11	ndryshme	ndryshëm	ADJ	_	Case=Acc|Degree=Pos|Gender=Fem|Number=Plur	9	amod	_	_
12	shtëpiake	shtëpiak	ADJ	_	Case=Acc|Degree=Pos|Gender=Fem|Number=Plur	9	amod	_	SpaceAfter=No
13	.	_	PUNCT	_	_	7	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 5 compound	color:blue
1	Atë	ajo	PRON	_	Case=Acc|Gender=Fem|Number=Sing|PronType=Dem	2	det	_	end_char=1203|start_char=1200
2	ditë	ditë	NOUN	_	Case=Acc|Definite=Ind|Gender=Fem|Number=Sing	4	obl	_	end_char=1208|start_char=1204
3	e	e	PRON	_	Case=Acc|Gender=Fem|Number=Sing|Person=3|PronType=Prs	4	obj	_	end_char=1210|start_char=1209
4	mora	marr	VERB	_	Mood=Ind|Number=Sing|Person=1|Tense=Past|Voice=Act	0	root	_	end_char=1215|start_char=1211
5	vesh	vesh	NOUN	_	Case=Acc|Definite=Ind|Gender=Masc|Number=Sing	4	compound	_	end_char=1220|start_char=1216
6	që	që	SCONJ	_	_	11	mark	_	end_char=1223|start_char=1221
7	meritën	meritë	NOUN	_	Case=Acc|Definite=Def|Gender=Fem|Number=Sing	11	obj	_	end_char=1231|start_char=1224
8	na	na	PRON	_	Case=Dat|Number=Plur|Person=1|PronType=Prs	11	iobj	_	end_char=1234|start_char=1232
9	e	e	PRON	_	Case=Acc|Gender=Fem|Number=Sing|Person=3|PronType=Prs	11	obj	_	end_char=1236|start_char=1235
10	paskëshin	kam	AUX	_	Mood=Ind|Number=Plur|Person=3|Tense=Past|Voice=Act	11	aux	_	end_char=1246|start_char=1237
11	pas	kam	VERB	_	VerbForm=Part	4	ccomp	_	end_char=1250|start_char=1247
12	ato	ajo	PRON	_	Case=Nom|Gender=Fem|Number=Plur|PronType=Dem	13	det	_	end_char=1254|start_char=1251
13	fletët	fletë	NOUN	_	Case=Nom|Definite=Def|Gender=Fem|Number=Plur	11	nsubj	_	end_char=1261|start_char=1255
14	e	e	DET	_	Case=Nom|Gender=Fem|Number=Plur|PronType=Art	15	det:adj	_	end_char=1263|start_char=1262
15	bardha	bardhë	ADJ	_	Case=Nom|Degree=Pos|Gender=Fem|Number=Plur	13	amod	_	end_char=1270|start_char=1264
16	të	të	DET	_	Case=Nom|Gender=Fem|Number=Plur|PronType=Art	17	det:adj	_	end_char=1273|start_char=1271
17	lidhura	lidhur	ADJ	_	Case=Nom|Degree=Pos|Gender=Fem|Number=Plur	13	amod	_	end_char=1281|start_char=1274
18	në	në	ADP	_	_	19	case	_	end_char=1284|start_char=1282
19	mënyrë	mënyrë	NOUN	_	Case=Acc|Definite=Ind|Gender=Fem|Number=Sing	17	obl	_	end_char=1291|start_char=1285
20	profesionale	profesional	ADJ	_	Case=Acc|Degree=Pos|Gender=Fem|Number=Sing	19	amod	_	SpaceAfter=No
21	.	.	PUNCT	_	_	4	punct	_	end_char=1305|start_char=1304

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 4 compound	color:blue
1	Nja	nja	DET	_	Definite=Ind	2	det	_	_
2	shtatë	shtatë	NUM	_	NumType=Card	5	nummod	_	_
3	-	-	PUNCT	_	_	2	punct	_	_
4	tetë	tetë	NUM	_	NumType=Card	2	compound	_	_
5	muaj	muaj	NOUN	_	Case=Nom|Definite=Ind|Gender=Masc|Number=Plur	10	obl:tmod	_	_
6	më	më	PART	_	_	5	advmod	_	_
7	parë	parë	ADV	_	_	6	fixed	_	_
8	ne	ne	PRON	_	Case=Nom|Number=Plur|Person=1|PronType=Prs	10	nsubj	_	_
9	u	u	AUX	_	_	10	aux	_	_
10	grindëm	grind	VERB	_	Mood=Ind|Number=Plur|Person=1|Tense=Past	0	root	_	_
11	keq	keq	ADV	_	_	10	advmod	_	_
12	,	,	PUNCT	_	_	10	punct	_	_
13	dua	duan	VERB	_	Mood=Ind|Number=Sing|Person=1|Tense=Pres|Voice=Act	10	parataxis	_	_
14	të	të	PART	_	_	15	mark	_	_
15	them	thënë	VERB	_	Mood=Ind|Number=Sing|Person=1|Tense=Pres|Voice=Act	13	xcomp	_	_
16	unë	unë	PRON	_	Case=Nom|Number=Sing|Person=1|PronType=Prs	8	appos	_	_
17	dhe	dhe	CCONJ	_	_	19	cc	_	_
18	im	unë	PRON	_	Case=Gen|Number=Sing|Person=1|PronType=Prs	19	det:poss	_	_
19	atë	atë	NOUN	_	Case=Nom|Gender=Masc|Number=Sing	16	conj	_	_
20	.	_	PUNCT	_	_	10	punct	_	_

~~~


