---
layout: base
title:  'Statistics of obj in UD_Pashto-Prince'
udver: '2'
---

## Treebank Statistics: UD_Pashto-Prince: Relations: `obj`

This relation is universal.

55 nodes (5%) are attached to their parents as `obj`.

54 instances of `obj` (98%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.14545454545455.

The following 9 pairs of parts of speech are connected with `obj`: <tt><a href="ps_prince-pos-VERB.html">VERB</a></tt>-<tt><a href="ps_prince-pos-NOUN.html">NOUN</a></tt> (45; 82% instances), <tt><a href="ps_prince-pos-VERB.html">VERB</a></tt>-<tt><a href="ps_prince-pos-PRON.html">PRON</a></tt> (3; 5% instances), <tt><a href="ps_prince-pos-ADV.html">ADV</a></tt>-<tt><a href="ps_prince-pos-NOUN.html">NOUN</a></tt> (1; 2% instances), <tt><a href="ps_prince-pos-AUX.html">AUX</a></tt>-<tt><a href="ps_prince-pos-NOUN.html">NOUN</a></tt> (1; 2% instances), <tt><a href="ps_prince-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ps_prince-pos-DET.html">DET</a></tt> (1; 2% instances), <tt><a href="ps_prince-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ps_prince-pos-NOUN.html">NOUN</a></tt> (1; 2% instances), <tt><a href="ps_prince-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ps_prince-pos-PRON.html">PRON</a></tt> (1; 2% instances), <tt><a href="ps_prince-pos-VERB.html">VERB</a></tt>-<tt><a href="ps_prince-pos-ADV.html">ADV</a></tt> (1; 2% instances), <tt><a href="ps_prince-pos-VERB.html">VERB</a></tt>-<tt><a href="ps_prince-pos-VERB.html">VERB</a></tt> (1; 2% instances).


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 13 10 obj	color:blue
1	.	.	PUNCT	_	_	13	punct	_	_
2	دا	دا	PRON	_	Deixis=Prox|Number=Sing|PronType=Dem	10	det	_	_
3	دلته	دلته	ADV	_	_	13	advmod	_	_
4	مې	مې	PRON	_	Number=Sing|Person=1|PronType=Prs	3	nmod	_	_
5	هم	هم	ADV	_	_	13	advmod	_	_
6	د	د	ADP	_	_	7	case	_	_
7	هغې	هغې	PRON	_	Deixis=Remt|Number=Sing|Poss=Yes|PronType=Dem	8	det:poss	_	_
8	رسم	رسم	NOUN	_	Number=Sing	10	nmod	_	_
9	شوې	شوې	VERB	_	VerbForm=Part	8	acl	_	_
10	تصوير	تصوير	NOUN	_	Number=Sing	13	obj	_	_
11	ستاسو	تاسو	PRON	_	Number=Plur|Person=2|Poss=Yes|PronType=Prs	12	det:poss	_	_
12	لپاره	لپاره	ADP	_	_	13	obl	_	_
13	لگولې	لګول	VERB	_	Aspect=Perf|VerbForm=Part	0	root	_	_
14	دې	ول	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	13	cop	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 2 obj	color:blue
1	ما	زه	PRON	_	Case=Acc|Number=Sing|Person=1|PronType=Prs	8	nsubj	_	_
2	دوی	هغه	PRON	_	Number=Plur|Person=3|PronType=Prs	8	obj	_	_
3	ډېر	ډېر	ADV	_	_	8	advmod	_	_
4	د	د	ADP	_	_	5	case	_	_
5	نېژدې	نېژدې	ADV	_	_	8	obl	_	_
6	نه	نه	ADP	_	_	5	case	_	_
7	و	و	PART	_	_	8	compound:prt	_	SpaceAfter=No
8	کتل	کتل	VERB	_	Mood=Ind|Tense=Past|VerbForm=Fin	0	root	_	SpaceAfter=No
9	.	.	PUNCT	_	_	8	punct	_	_

~~~


~~~ conllu
# visual-style 23	bgColor:blue
# visual-style 23	fgColor:white
# visual-style 22	bgColor:blue
# visual-style 22	fgColor:white
# visual-style 22 23 obj	color:blue
1	خو	خو	CCONJ	_	_	6	cc	_	_
2	د	د	ADP	_	_	3	case	_	_
3	مشرانو	مشر	NOUN	_	Number=Plur	6	nmod	_	_
4	د	د	ADP	_	_	6	case	_	_
5	نه	نه	PART	_	Polarity=Neg	6	advmod	_	_
6	پوهېدو	پوهېدل	VERB	_	VerbForm=Inf	0	root	_	_
7	په	په	ADP	_	_	8	case	_	_
8	وجه	وجه	NOUN	_	_	6	obl	_	SpaceAfter=No
9	،	،	PUNCT	_	_	6	punct	_	_
10	ما	زه	PRON	_	Case=Acc|Number=Sing|Person=1|PronType=Prs	13	nsubj	_	_
11	یو	یو	DET	_	PronType=Ind	13	obj	_	_
12	بل	بل	ADJ	_	_	11	amod	_	_
13	تصویر	تصویر	NOUN	_	_	6	conj	_	_
14	جوړ	جوړ	ADJ	_	_	15	xcomp	_	_
15	کړو	کول	VERB	_	Tense=Past	13	compound:lvc	_	SpaceAfter=No
16	،	،	PUNCT	_	_	13	punct	_	_
17	دا	دا	DET	_	PronType=Dem	18	det	_	_
18	ځل	ځل	NOUN	_	_	6	obl	_	_
19	ما	زه	PRON	_	Case=Acc|Number=Sing|Person=1|PronType=Prs	22	nsubj	_	_
20	د	د	ADP	_	_	21	case	_	_
21	مار	مار	NOUN	_	_	22	obl	_	_
22	دننه	دننه	ADV	_	_	6	conj	_	_
23	لړمون	لړمون	NOUN	_	_	22	obj	_	_
24	په	په	ADP	_	_	25	case	_	_
25	تصوير	تصویر	NOUN	_	_	22	obl	_	_
26	کښې	کښې	ADP	_	_	25	case	_	_
27	جوړ	جوړ	ADJ	_	_	28	xcomp	_	_
28	کړو	کول	VERB	_	Tense=Past	22	compound:lvc	_	SpaceAfter=No
29	،	،	PUNCT	_	_	22	punct	_	_
30	چې	چې	SCONJ	_	_	34	mark	_	_
31	دوی	هغه	PRON	_	Number=Plur|PronType=Prs	34	nsubj	_	_
32	ښه	ښه	ADV	_	_	33	advmod	_	_
33	واضح	واضح	ADJ	_	_	34	advmod	_	_
34	اوګوري	اوګوري	VERB	_	Tense=Pres|VerbForm=Fin	6	advcl	_	SpaceAfter=No
35	.	.	PUNCT	_	_	6	punct	_	_

~~~


