---
layout: base
title:  'Statistics of compound:lvc in UD_Pashto-Prince'
udver: '2'
---

## Treebank Statistics: UD_Pashto-Prince: Relations: `compound:lvc`

This relation is a language-specific subtype of <tt><a href="ps_prince-dep-compound.html">compound</a></tt>.
There are also 1 other language-specific subtypes of `compound`: <tt><a href="ps_prince-dep-compound-prt.html">compound:prt</a></tt>.

4 nodes (0%) are attached to their parents as `compound:lvc`.

2 instances of `compound:lvc` (50%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.5.

The following 3 pairs of parts of speech are connected with `compound:lvc`: <tt><a href="ps_prince-pos-VERB.html">VERB</a></tt>-<tt><a href="ps_prince-pos-NOUN.html">NOUN</a></tt> (2; 50% instances), <tt><a href="ps_prince-pos-ADV.html">ADV</a></tt>-<tt><a href="ps_prince-pos-VERB.html">VERB</a></tt> (1; 25% instances), <tt><a href="ps_prince-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ps_prince-pos-VERB.html">VERB</a></tt> (1; 25% instances).


~~~ conllu
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 13 12 compound:lvc	color:blue
1	.	.	PUNCT	_	_	13	punct	_	_
2	او	او	CCONJ	_	_	8	discourse	_	_
3	بیا	بیا	ADV	_	_	8	advmod	_	_
4	دا	دا	PRON	_	Deixis=Prox|Number=Sing|PronType=Dem	5	det	_	_
5	مار	مار	NOUN	_	Number=Sing	13	nsubj	_	_
6	دومره	دومره	ADV	_	_	7	advmod	_	_
7	لټ	لټ	ADJ	_	_	8	xcomp	_	_
8	شي	کېدل	VERB	_	Mood=Sub|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	13	advcl	_	_
9	چې	چې	SCONJ	_	_	13	mark	_	_
10	شپږ	شپږ	NUM	_	NumType=Card	11	nummod	_	_
11	میاشتې	میاشت	NOUN	_	Number=Plur	13	obl	_	_
12	خوب	خوب	NOUN	_	Number=Sing	13	compound:lvc	_	_
13	کوي	کول	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
14	،	،	PUNCT	_	_	13	punct	_	_
15	تر	تر	SCONJ	_	_	21	mark	_	_
16	څو	څو	DET	_	PronType=Rel	15	fixed	_	_
17	چي	چي	SCONJ	_	_	15	fixed	_	_
18	دا	دا	PRON	_	Deixis=Prox|Number=Sing|PronType=Dem	19	det	_	_
19	خوراک	خوراک	NOUN	_	Number=Sing	21	nsubj	_	_
20	يي	هغه	PRON	_	Number=Sing|Person=3|Poss=Yes|PronType=Prs	19	det:poss	_	_
21	هضم	هضم	VERB	_	VerbForm=Inf	13	xcomp	_	_
22	شي	کېدل	AUX	_	Mood=Sub|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	21	aux	_	_

~~~


~~~ conllu
# visual-style 28	bgColor:blue
# visual-style 28	fgColor:white
# visual-style 22	bgColor:blue
# visual-style 22	fgColor:white
# visual-style 22 28 compound:lvc	color:blue
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


~~~ conllu
# visual-style 15	bgColor:blue
# visual-style 15	fgColor:white
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 13 15 compound:lvc	color:blue
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


