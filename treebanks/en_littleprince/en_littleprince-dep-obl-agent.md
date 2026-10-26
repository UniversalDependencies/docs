---
layout: base
title:  'Statistics of obl:agent in UD_English-LittlePrince'
udver: '2'
---

## Treebank Statistics: UD_English-LittlePrince: Relations: `obl:agent`

This relation is a language-specific subtype of <tt><a href="en_littleprince-dep-obl.html">obl</a></tt>.
There are also 3 other language-specific subtypes of `obl`: <tt><a href="en_littleprince-dep-obl-npmod.html">obl:npmod</a></tt>, <tt><a href="en_littleprince-dep-obl-tmod.html">obl:tmod</a></tt>, <tt><a href="en_littleprince-dep-obl-unmarked.html">obl:unmarked</a></tt>.

6 nodes (0%) are attached to their parents as `obl:agent`.

6 instances of `obl:agent` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.66666666666667.

The following 2 pairs of parts of speech are connected with `obl:agent`: <tt><a href="en_littleprince-pos-VERB.html">VERB</a></tt>-<tt><a href="en_littleprince-pos-NOUN.html">NOUN</a></tt> (5; 83% instances), <tt><a href="en_littleprince-pos-VERB.html">VERB</a></tt>-<tt><a href="en_littleprince-pos-PRON.html">PRON</a></tt> (1; 17% instances).


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 11 obl:agent	color:blue
1	I	I	PRON	PRP	Case=Nom|Number=Sing|Person=1|PronType=Prs	2	nsubj	_	_
2	knew	know	VERB	VBD	Mood=Ind|Number=Sing|Person=1|Tense=Past|VerbForm=Fin	0	root	_	_
3	a	a	DET	DT	Definite=Ind|PronType=Art	4	det	_	_
4	planet	planet	NOUN	NN	Number=Sing	2	obj	_	_
5	that	that	PRON	WDT	PronType=Rel	7	nsubj:pass	_	_
6	was	be	AUX	VBD	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	7	aux:pass	_	_
7	inhabited	inhabit	VERB	VBN	Tense=Past|VerbForm=Part|Voice=Pass	4	acl:relcl	_	_
8	by	by	ADP	IN	_	11	case	_	_
9	a	a	DET	DT	Definite=Ind|PronType=Art	11	det	_	_
10	lazy	lazy	ADJ	JJ	Degree=Pos	11	amod	_	_
11	man	man	NOUN	NN	Number=Sing	7	obl:agent	_	_
12	.	.	PUNCT	.	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 20	bgColor:blue
# visual-style 20	fgColor:white
# visual-style 18	bgColor:blue
# visual-style 18	fgColor:white
# visual-style 18 20 obl:agent	color:blue
1	But	but	CCONJ	CC	_	10	cc	_	_
2	the	the	DET	DT	Definite=Def|PronType=Art	3	det	_	_
3	danger	danger	NOUN	NN	Number=Sing	10	nsubj:pass	_	_
4	of	of	ADP	IN	_	6	case	_	_
5	the	the	DET	DT	Definite=Def|PronType=Art	6	det	_	_
6	baobabs	baobab	NOUN	NNS	Number=Plur	3	nmod	_	_
7	is	be	AUX	VBZ	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	10	aux:pass	_	_
8	so	so	ADV	RB	_	9	advmod	_	_
9	little	little	ADV	RB	Degree=Pos	10	advmod	_	_
10	understood	understand	VERB	VBN	Tense=Past|VerbForm=Part|Voice=Pass	0	root	_	_
11	,	,	PUNCT	,	_	18	punct	_	_
12	and	and	CCONJ	CC	_	18	cc	_	_
13	such	such	ADJ	JJ	Degree=Pos	15	amod	_	_
14	considerable	considerable	ADJ	JJ	Degree=Pos	15	amod	_	_
15	risks	risk	NOUN	NNS	Number=Plur	18	nsubj:pass	_	_
16	would	would	AUX	MD	VerbForm=Fin	18	aux	_	_
17	be	be	AUX	VB	VerbForm=Inf	18	aux:pass	_	_
18	run	run	VERB	VBN	Tense=Past|VerbForm=Part|Voice=Pass	10	conj	_	_
19	by	by	ADP	IN	_	20	case	_	_
20	anyone	anyone	PRON	NN	Number=Sing|PronType=Ind	18	obl:agent	_	_
21	who	who	PRON	WP	PronType=Rel	24	nsubj:pass	_	_
22	might	might	AUX	MD	VerbForm=Fin	24	aux	_	_
23	get	get	AUX	VB	VerbForm=Inf	24	aux:pass	_	_
24	lost	lose	VERB	VBN	Tense=Past|VerbForm=Part|Voice=Pass	20	acl:relcl	_	_
25	on	on	ADP	IN	_	27	case	_	_
26	an	a	DET	DT	Definite=Ind|PronType=Art	27	det	_	_
27	asteroid	asteroid	NOUN	NN	Number=Sing	24	obl	_	_
28	,	,	PUNCT	,	_	18	punct	_	_
29	that	that	SCONJ	DT	_	34	mark	_	_
30	for	for	ADP	IN	_	31	case	_	_
31	once	once	SCONJ	IN	_	34	obl	_	_
32	I	I	PRON	PRP	Case=Nom|Number=Sing|Person=1|PronType=Prs	34	nsubj	_	_
33	am	be	AUX	VBP	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	34	aux	_	_
34	breaking	break	VERB	VBG	Tense=Pres|VerbForm=Part	10	advcl	_	_
35	through	through	ADP	IN	_	37	case	_	_
36	my	my	PRON	PRP$	Case=Gen|Number=Sing|Person=1|Poss=Yes|PronType=Prs	37	nmod:poss	_	_
37	reserve	reserve	NOUN	NN	Number=Sing	34	obl	_	_
38	.	.	PUNCT	.	_	10	punct	_	_

~~~


