---
layout: base
title:  'Statistics of parataxis in UD_Pashto-Prince'
udver: '2'
---

## Treebank Statistics: UD_Pashto-Prince: Relations: `parataxis`

This relation is universal.

7 nodes (1%) are attached to their parents as `parataxis`.

6 instances of `parataxis` (86%) are left-to-right (parent precedes child).
Average distance between parent and child is 8.28571428571429.

The following 3 pairs of parts of speech are connected with `parataxis`: <tt><a href="ps_prince-pos-VERB.html">VERB</a></tt>-<tt><a href="ps_prince-pos-VERB.html">VERB</a></tt> (3; 43% instances), <tt><a href="ps_prince-pos-VERB.html">VERB</a></tt>-<tt><a href="ps_prince-pos-AUX.html">AUX</a></tt> (2; 29% instances), <tt><a href="ps_prince-pos-VERB.html">VERB</a></tt>-<tt><a href="ps_prince-pos-NOUN.html">NOUN</a></tt> (2; 29% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 7 parataxis	color:blue
1	آواز	آواز	NOUN	_	_	2	nsubj	_	_
2	وويل	ويل	VERB	_	Tense=Past	0	root	_	_
3	:	:	PUNCT	_	_	2	punct	_	_
4	"	"	PUNCT	_	_	2	punct	_	_
5	که	که	SCONJ	_	_	7	mark	_	_
6	مهرباني	مهرباني	NOUN	_	_	7	obj	_	_
7	وکړې	کول	VERB	_	Mood=Sub	2	parataxis	_	_
8	،	،	PUNCT	_	_	7	punct	_	_
9	ماته	زه	PRON	_	Person=1	12	iobj	_	_
10	يوه	يو	DET	_	_	11	det	_	_
11	رسم	رسم	NOUN	_	_	12	obj	_	_
12	کړه	کول	VERB	_	Mood=Imp	7	conj	_	_
13	!	!	PUNCT	_	_	7	punct	_	SpaceAfter=No
14	"	"	PUNCT	_	_	7	punct	_	_
15	.	.	PUNCT	_	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 6 parataxis	color:blue
1	او	او	PART	_	_	6	discourse	_	_
2	زما	زه	PRON	_	Number=Sing|Person=1|Poss=Yes|PronType=Prs	3	det:poss	_	_
3	سره	سره	ADP	_	_	6	obl	_	_
4	نه	نه	PART	_	Polarity=Neg	6	advmod	_	_
5	ميخانيک	ميخانيک	NOUN	_	_	6	nsubj	_	_
6	وو	ول	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	11	parataxis	_	_
7	،	،	PUNCT	_	_	11	punct	_	_
8	نو	نو	PART	_	_	11	discourse	_	_
9	ما	زه	PRON	_	Case=Acc|Number=Sing|Person=1|PronType=Prs	11	nsubj	_	_
10	کوشش	کوشش	NOUN	_	_	11	obj	_	_
11	وکړو	کول	VERB	_	Mood=Ind|Tense=Past|VerbForm=Fin	0	root	_	_
12	چې	چې	SCONJ	_	_	17	mark	_	_
13	خپله	خپل	PRON	_	Poss=Yes|PronType=Prs|Reflex=Yes	14	det:poss	_	_
14	الوتکه	الوتکه	NOUN	_	_	17	obj	_	_
15	پخپله	پخپله	ADV	_	_	17	advmod	_	_
16	برابر	برابر	ADJ	_	_	17	xcomp	_	_
17	کړم	کول	VERB	_	Mood=Sub|VerbForm=Fin	11	advcl	_	_
18	.	.	PUNCT	_	_	11	punct	_	_

~~~


~~~ conllu
# visual-style 17	bgColor:blue
# visual-style 17	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 17 parataxis	color:blue
1	خو	خو	CCONJ	_	_	5	mark	_	_
2	هغوې	هغه	PRON	_	Case=Nom|Number=Plur|Person=3|PronType=Prs	5	nsubj	_	_
3	حيرانتيا	_	NOUN	_	Number=Sing	5	obl	_	_
4	سره	_	ADP	_	_	3	case	_	_
5	اوویل	ویل	VERB	_	Mood=Ind|Number=Plur|Person=3|Tense=Past|VerbForm=Fin	0	root	_	_
6	:	:	PUNCT	_	_	5	punct	_	_
7	"ویره	_	NOUN	_	Number=Sing	5	parataxis	_	_
8	د	_	ADP	_	_	7	case	_	_
9	څه	_	PRON	_	Number=Sing|PronType=Int	7	nmod	_	_
10	نه	_	PART	_	_	9	case	_	_
11	؟	؟	PUNCT	_	_	7	punct	_	_
12	دا	_	PRON	_	Deixis=Prox|Number=Sing|PronType=Dem	17	nsubj	_	_
13	خو	_	CCONJ	_	_	17	discourse	_	_
14	د	د	ADP	_	_	16	case	_	_
15	يو	_	DET	_	PronType=Ind	16	det	_	_
16	ټوپئ	_	NOUN	_	Number=Sing	17	nmod	_	_
17	تصوير	_	NOUN	_	Number=Sing	5	parataxis	_	_
18	دې.	ول	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	17	cop	_	_

~~~


