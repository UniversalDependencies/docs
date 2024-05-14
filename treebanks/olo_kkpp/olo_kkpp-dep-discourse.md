---
layout: base
title:  'Statistics of discourse in UD_Livvi-KKPP'
udver: '2'
---

## Treebank Statistics: UD_Livvi-KKPP: Relations: `discourse`

This relation is universal.

4 nodes (0%) are attached to their parents as `discourse`.

4 instances of `discourse` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 3.

The following 3 pairs of parts of speech are connected with `discourse`: <tt><a href="olo_kkpp-pos-VERB.html">VERB</a></tt>-<tt><a href="olo_kkpp-pos-INTJ.html">INTJ</a></tt> (2; 50% instances), <tt><a href="olo_kkpp-pos-ADJ.html">ADJ</a></tt>-<tt><a href="olo_kkpp-pos-INTJ.html">INTJ</a></tt> (1; 25% instances), <tt><a href="olo_kkpp-pos-NOUN.html">NOUN</a></tt>-<tt><a href="olo_kkpp-pos-INTJ.html">INTJ</a></tt> (1; 25% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 1 discourse	color:blue
1	A	a	INTJ	INTJ	_	3	discourse	_	_
2	vojennoit	vojennoi	NOUN	NOUN	Case=Nom|Number=Plur	3	nsubj	_	_
3	vastatah	vastata	VERB	VERB	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	SpaceAfter=No
4	:	:	PUNCT	PUNCT	_	6	punct	_	_
5	"	"	PUNCT	PUNCT	_	6	punct	_	SpaceAfter=No
6	Tiezimö	Tieteä	VERB	X	Mood=Ind|Number=Plur|Person=1|VerbForm=Fin|Voice=Act	3	parataxis	_	_
7	d’o	d’o	ADV	X	_	6	advmod	_	_
8	dai	dai	CCONJ	CCONJ	_	9	cc	_	_
9	kuulimo	kuulimo	VERB	X	Mood=Ind|Number=Plur|Person=1|VerbForm=Fin|Voice=Act	6	conj	_	SpaceAfter=No
10	,	,	PUNCT	PUNCT	_	12	punct	_	_
11	dai	dai	CCONJ	CCONJ	_	12	cc	_	_
12	näimö	näimö	VERB	X	Mood=Ind|Number=Plur|Person=1|VerbForm=Fin|Voice=Act	6	conj	_	SpaceAfter=No
13	"	"	PUNCT	PUNCT	_	3	punct	_	SpaceAfter=No
14	.	.	PUNCT	PUNCT	_	3	punct	_	SpaceAfter=No

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 5 discourse	color:blue
1	Vojennoit	vojennoi	NOUN	NOUN	Case=Nom|Number=Plur	2	nsubj	_	_
2	sanottih	sanuo	VERB	VERB	Mood=Ind|Number=Plur|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	SpaceAfter=No
3	:	:	PUNCT	PUNCT	_	2	punct	_	_
4	"	"	PUNCT	PUNCT	_	2	punct	_	SpaceAfter=No
5	Ga	ga	INTJ	INTJ	_	7	discourse	_	_
6	sidä	sidä	PRON	PRON	Case=Par|Number=Plur	7	orphan	_	_
7	samastu	samaine	ADJ	ADJ	Case=Par|Number=Sing	2	parataxis	_	SpaceAfter=No
8	"	"	PUNCT	PUNCT	_	7	punct	_	SpaceAfter=No
9	.	.	PUNCT	PUNCT	_	7	punct	_	SpaceAfter=No

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 2 discourse	color:blue
1	"	"	PUNCT	PUNCT	_	7	punct	_	SpaceAfter=No
2	A	a	INTJ	CCONJ	_	7	discourse	_	_
3	konzu	konzu	SCONJ	SCONJ	_	7	mark	_	_
4	oli	olla	AUX	AUX	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	7	cop	_	_
5	minun	minä	PRON	PRON	Case=Gen|Number=Sing|Person=1|PronType=Prs	6	nmod:poss	_	_
6	taatto	taatto	NOUN	X	Case=Nom|Number=Sing	7	nsubj:cop	_	_
7	bohattu	bohattu	NOUN	NOUN	Case=Nom|Number=Sing	0	root	_	SpaceAfter=No
8	,	,	PUNCT	PUNCT	_	10	punct	_	_
9	sit	sit	ADV	ADV	_	10	advmod	_	_
10	andoi	andua	VERB	VERB	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	7	conj	_	_
11	saaril	saari	NOUN	X	Case=All|Number=Sing	10	obl	_	_
12	kolme	kolme	NUM	NUM	Case=Nom|Number=Sing|NumType=Card	13	nummod	_	_
13	puččii	pučči	NOUN	X	Case=Par|Number=Sing	14	nmod	_	_
14	dengaa	denga	NOUN	X	Case=Par|Number=Sing	10	obj	_	SpaceAfter=No
15	,	,	PUNCT	PUNCT	_	16	punct	_	_
16	kuulittogo	kuula	VERB	X	Clitic=Go|Mood=Ind|Number=Plur|Person=2|Tense=Past|VerbForm=Fin|Voice=Act	7	parataxis	_	SpaceAfter=No
17	,	,	PUNCT	PUNCT	_	18	punct	_	_
18	saldatat	saldattu	NOUN	NOUN	Case=Nom|Number=Plur	16	nsubj	_	SpaceAfter=No
19	,	,	PUNCT	PUNCT	_	21	punct	_	_
20	dai	dai	CCONJ	CCONJ	_	21	cc	_	_
21	tiezittö	tieteä	VERB	X	Mood=Ind|Number=Plur|Person=2|Tense=Past|VerbForm=Fin|Voice=Act	16	conj	_	SpaceAfter=No
22	?	?	PUNCT	PUNCT	_	16	punct	_	SpaceAfter=No
23	"	"	PUNCT	PUNCT	_	16	punct	_	SpaceAfter=No

~~~


