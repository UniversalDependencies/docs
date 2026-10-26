---
layout: base
title:  'Statistics of acl in UD_Pashto-Prince'
udver: '2'
---

## Treebank Statistics: UD_Pashto-Prince: Relations: `acl`

This relation is universal.
There are 1 language-specific subtypes of `acl`: <tt><a href="ps_prince-dep-acl-relcl.html">acl:relcl</a></tt>.

10 nodes (1%) are attached to their parents as `acl`.

9 instances of `acl` (90%) are left-to-right (parent precedes child).
Average distance between parent and child is 6.3.

The following 3 pairs of parts of speech are connected with `acl`: <tt><a href="ps_prince-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ps_prince-pos-VERB.html">VERB</a></tt> (8; 80% instances), <tt><a href="ps_prince-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ps_prince-pos-AUX.html">AUX</a></tt> (1; 10% instances), <tt><a href="ps_prince-pos-PRON.html">PRON</a></tt>-<tt><a href="ps_prince-pos-AUX.html">AUX</a></tt> (1; 10% instances).


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 9 acl	color:blue
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
# visual-style 26	bgColor:blue
# visual-style 26	fgColor:white
# visual-style 19	bgColor:blue
# visual-style 19	fgColor:white
# visual-style 19 26 acl	color:blue
1	یو	یو	NUM	_	NumType=Card	2	nummod	_	_
2	ځل	ځل	NOUN	_	Number=Sing	20	obl	_	_
3	،	,	PUNCT	_	_	9	punct	_	_
4	چې	_	SCONJ	_	_	9	mark	_	_
5	زه	_	PRON	_	Case=Nom|Number=Sing|Person=1|PronType=Prs	9	nsubj	_	_
6	لا	_	ADV	_	_	9	advmod	_	_
7	د	_	ADP	_	_	9	case	_	_
8	شپږو	شپږ	NUM	_	NumType=Card	9	nummod	_	_
9	کالو	کال	NOUN	_	Number=Plur	20	advcl	_	_
10	وم	ول	AUX	_	Mood=Ind|Number=Sing|Person=1|Tense=Past|VerbForm=Fin	9	cop	_	_
11	،	,	PUNCT	_	_	9	punct	_	_
12	ما	زه	PRON	_	Case=Acc|Number=Sing|Person=1|PronType=Prs	20	nsubj	_	_
13	په	_	ADP	_	_	15	case	_	_
14	یو	_	NUM	_	NumType=Card	15	nummod	_	_
15	کتاب	_	NOUN	_	Number=Sing	20	obl	_	_
16	کښې	_	ADP	_	_	15	case	_	_
17	یو	_	NUM	_	NumType=Card	19	nummod	_	_
18	زبردست	_	ADJ	_	_	19	amod	_	_
19	تصویر	_	NOUN	_	Number=Sing	20	obj	_	_
20	ولیدو	لیدل	VERB	_	Mood=Ind|Number=Sing|Person=1|Tense=Past|VerbForm=Fin	0	root	_	_
21	،	,	PUNCT	_	_	20	punct	_	_
22	کوم	_	PRON	_	Number=Sing|PronType=Rel	26	nsubj	_	_
23	چې	_	SCONJ	_	_	26	mark	_	_
24	په	_	ADP	_	_	25	case	_	_
25	نوم	_	NOUN	_	Number=Sing	26	obl	_	_
26	وو	ول	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	19	acl	_	_
27	،	,	PUNCT	_	_	28	punct	_	_
28	دا	_	PRON	_	Deixis=Prox|Number=Sing|PronType=Dem	30	det	_	_
29	د	_	ADP	_	_	31	case	_	_
30	پخوانی	_	ADJ	_	_	31	amod	_	_
31	ځنګلونو	ځنګل	NOUN	_	Number=Plur	33	nmod	_	_
32	په	_	ADP	_	_	33	case	_	_
33	بارہ	_	NOUN	_	Number=Sing	36	nmod	_	_
34	کښي	_	ADP	_	_	33	case	_	_
35	يو	_	DET	_	PronType=Ind	36	det	_	_
36	کتاب	_	NOUN	_	Number=Sing	37	nsubj	_	_
37	وو	ول	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	20	parataxis	_	_

~~~


~~~ conllu
# visual-style 18	bgColor:blue
# visual-style 18	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 18 acl	color:blue
1	نو	نو	ADV	_	_	7	discourse	_	_
2	ما	زه	PRON	_	Case=Acc|Number=Sing|Person=1|PronType=Prs	7	nsubj	_	_
3	به	بۀ	AUX	_	Mood=Cnd	7	aux	_	_
4	خپله	خپل	DET	_	Number=Sing|Poss=Yes|PronType=Prs|Reflex=Yes	5	det:poss	_	_
5	ژونده	ژوند	NOUN	_	Number=Sing	7	obj	_	_
6	یواځې	یوازې	ADV	_	_	7	advmod	_	_
7	تېرولو	تېرول	VERB	_	Mood=Ind|Number=Sing|Person=1|Tense=Past|VerbForm=Fin	0	root	_	_
8	،	،	PUNCT	_	_	7	punct	_	_
9	داسې	داسې	DET	_	PronType=Dem	10	det	_	_
10	څوک	څوک	PRON	_	Number=Sing|PronType=Int	12	nsubj	_	_
11	نه	نه	PART	_	Polarity=Neg	12	advmod	_	_
12	وو	ول	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	7	conj	_	_
13	چې	چې	SCONJ	_	_	18	mark	_	_
14	زه	زه	PRON	_	Case=Nom|Number=Sing|Person=1|PronType=Prs	18	nsubj	_	_
15	ورسره	هغه	ADP	_	_	17	obl:arg	_	_
16	خبرې	خبره	NOUN	_	Number=Plur	17	obj	_	_
17	کولای	کول	VERB	_	VerbForm=Inf	18	xcomp	_	_
18	شم	کېدل	AUX	_	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	10	acl	_	_
19	تر	تر	SCONJ	_	_	33	mark	_	_
20	څو	څو	DET	_	PronType=Rel	19	fixed	_	_
21	چې	چې	SCONJ	_	_	19	fixed	_	_
22	شپږ	شپږ	NUM	_	NumType=Card	23	nummod	_	_
23	کاله	کال	NOUN	_	Number=Plur	33	obl	_	_
24	وړاندې	وړاندې	ADV	_	_	23	advmod	_	_
25	زما	زه	PRON	_	Number=Sing|Person=1|Poss=Yes|PronType=Prs	26	det:poss	_	_
26	الوتکه	الوتکه	NOUN	_	Number=Sing	33	nsubj	_	_
27	د	د	ADP	_	_	28	case	_	_
28	صحرا	صحرا	NOUN	_	Number=Sing	30	nmod	_	_
29	په	په	ADP	_	_	30	case	_	_
30	منځ	منځ	NOUN	_	Number=Sing	33	obl	_	_
31	کښې	کښې	ADP	_	_	30	case	_	_
32	خراب	خراب	ADJ	_	_	33	xcomp	_	_
33	شو	کېدل	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	7	advcl	_	_
34	.	.	PUNCT	_	_	7	punct	_	_

~~~


