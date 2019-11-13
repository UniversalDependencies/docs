---
layout: base
title:  'Statistics of aux in UD_Livvi-KKPP'
udver: '2'
---

## Treebank Statistics: UD_Livvi-KKPP: Relations: `aux`

This relation is universal.
There are 1 language-specific subtypes of `aux`: <tt><a href="olo_kkpp-dep-aux-neg.html">aux:neg</a></tt>.

33 nodes (2%) are attached to their parents as `aux`.

33 instances of `aux` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.18181818181818.

The following 3 pairs of parts of speech are connected with `aux`: <tt><a href="olo_kkpp-pos-VERB.html">VERB</a></tt>-<tt><a href="olo_kkpp-pos-AUX.html">AUX</a></tt> (31; 94% instances), <tt><a href="olo_kkpp-pos-AUX.html">AUX</a></tt>-<tt><a href="olo_kkpp-pos-AUX.html">AUX</a></tt> (1; 3% instances), <tt><a href="olo_kkpp-pos-X.html">X</a></tt>-<tt><a href="olo_kkpp-pos-AUX.html">AUX</a></tt> (1; 3% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 3 aux	color:blue
1	Enzimäine	enzimäine	ADJ	ADJ	Case=Acc|Number=Sing|NumType=Ord	2	amod	_	_
2	matku	matku	NOUN	NOUN	Case=Nom|Number=Sing	5	nsubj	_	_
3	oli	olla	AUX	AUX	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	5	aux	_	_
4	jo	jo	ADV	ADV	_	5	advmod	_	_
5	mennyt	mennä	VERB	VERB	VerbForm=Part	0	root	_	_
6	pyhänpiän	pyhänpiän	ADV	ADV	_	5	advmod	_	SpaceAfter=No|PronType=Temp
7	,	,	PUNCT	PUNCT	_	5	punct	_	_
8	23.	23.	ADJ	ADJ	NumType=Ord	9	amod	_	_
9	sulakuudu	sulakuu	NOUN	NOUN	Case=Par|Number=Sing	5	obl	_	SpaceAfter=No
10	.	.	PUNCT	PUNCT	_	5	punct	_	SpaceAfter=No

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 aux	color:blue
1	Illal	illal	ADV	ADV	_	4	advmod	_	PronType=Temp
2	ei	ei	AUX	AUX	Number=Sing|Person=3|Polarity=Neg	3	aux	_	_
3	suannuh	suaha	AUX	AUX	Number=Sing|Tense=Past|VerbForm=Part	0	root	_	_
4	arbailla	arbailla	VERB	VERB	Connegative=Yes|Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	3	xcomp	_	_
5	–	–	PUNCT	PUNCT	_	6	punct	_	_
6	varattih	varata	VERB	VERB	Mood=Ind|Number=Plur|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	3	parataxis	_	_
7	Arbaituksen	Arbaitus	NOUN	NOUN	Case=Gen|Number=Sing	8	nmod:poss	_	_
8	akkua	akku	NOUN	NOUN	Case=Par|Number=Sing	6	obj	_	SpaceAfter=No
9	,	,	PUNCT	PUNCT	_	12	punct	_	_
10	ku	ku	SCONJ	SCONJ	_	12	mark	_	_
11	häi	häi	PRON	PRON	Case=Nom|Number=Sing|Person=3|PronType=Prs	12	nsubj	_	_
12	tulou	tulla	VERB	VERB	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	6	advcl	_	_
13	yön	yö	NOUN	NOUN	Case=Gen|Number=Sing	14	nmod:poss	_	_
14	aigua	aigu	NOUN	NOUN	Case=Par|Number=Sing	12	obl	_	_
15	da	da	CCONJ	CCONJ	_	16	cc	_	_
16	ähkiäy	ähkie	VERB	X	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	12	conj	_	_
17	bokkah	bokku	NOUN	NOUN	Case=Ill|Number=Sing	16	obl	_	SpaceAfter=No
18	.	.	PUNCT	PUNCT	_	3	punct	_	SpaceAfter=No

~~~


~~~ conllu
# visual-style 19	bgColor:blue
# visual-style 19	fgColor:white
# visual-style 20	bgColor:blue
# visual-style 20	fgColor:white
# visual-style 20 19 aux	color:blue
1	Tämän	tämä	PRON	PRON	Case=Gen|Number=Sing|PronType=Dem	3	obj	_	_
2	häi	häi	PRON	PRON	Case=Nom|Number=Sing|Person=3|PronType=Prs	3	nsubj	_	_
3	kyzyi	kyzyö	VERB	VERB	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	_
4	enzi	enzi	ADV	ADJ	_	3	advmod	_	_
5	dai	dai	CCONJ	CCONJ	_	6	cc	_	_
6	tossu	tossu	ADV	X	_	3	advmod	_	_
7	pään	pätä	VERB	VERB	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin|Voice=Act	3	conj	_	SpaceAfter=No
8	,	,	PUNCT	PUNCT	_	11	punct	_	_
9	a	a	CCONJ	CCONJ	_	10	cc	_	_
10	vojennoit	vojennoi	NOUN	NOUN	Case=Nom|Number=Plur	11	nsubj	_	_
11	sanottih	sanuo	VERB	VERB	Mood=Ind|Number=Plur|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	3	conj	_	SpaceAfter=No
12	:	:	PUNCT	PUNCT	_	17	punct	_	_
13	"	"	PUNCT	PUNCT	_	17	punct	_	SpaceAfter=No
14	Tädä	Tämä	PRON	PRON	Case=Par|Number=Sing|PronType=Dem	15	det	_	_
15	saaraa	saari	NOUN	X	Case=Par|Number=Sing	17	obj	_	_
16	emmogo	ei	AUX	AUX	Clitic=Ko|Number=Plur|Person=1|Polarity=Neg	17	aux	_	_
17	kuulluh	kuulla	VERB	VERB	Connegative=Yes|Mood=Ind|Tense=Past|VerbForm=Fin|Voice=Act	11	parataxis	_	SpaceAfter=No
18	,	,	PUNCT	PUNCT	_	20	punct	_	_
19	emmogo	ei	AUX	AUX	Clitic=Ko|Number=Plur|Person=1|Polarity=Neg	20	aux	_	_
20	teidänyh	tiedeä	X	X	Connegative=Yes|Mood=Ind|Tense=Past|VerbForm=Fin|Voice=Act	17	conj	_	SpaceAfter=No
21	"	"	PUNCT	PUNCT	_	17	punct	_	SpaceAfter=No
22	.	.	PUNCT	PUNCT	_	17	punct	_	SpaceAfter=No

~~~


