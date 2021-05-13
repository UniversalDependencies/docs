---
layout: base
title:  'Statistics of csubj:pass in UD_Portuguese-GSD'
udver: '2'
---

## Treebank Statistics: UD_Portuguese-GSD: Relations: `csubj:pass`

This relation is a language-specific subtype of <tt><a href="pt_gsd-dep-csubj.html">csubj</a></tt>.

8 nodes (0%) are attached to their parents as `csubj:pass`.

6 instances of `csubj:pass` (75%) are left-to-right (parent precedes child).
Average distance between parent and child is 6.375.

The following 2 pairs of parts of speech are connected with `csubj:pass`: <tt><a href="pt_gsd-pos-VERB.html">VERB</a></tt>-<tt><a href="pt_gsd-pos-VERB.html">VERB</a></tt> (7; 88% instances), <tt><a href="pt_gsd-pos-VERB.html">VERB</a></tt>-<tt><a href="pt_gsd-pos-PROPN.html">PROPN</a></tt> (1; 13% instances).


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 8 csubj:pass	color:blue
1	Enfim	enfim	ADV	ADV	_	4	advmod	_	SpaceAfter=No
2	,	,	PUNCT	.	_	1	punct	_	_
3	é	ser	AUX	AUX	_	4	aux:pass	_	_
4	esperado	esperar	VERB	VERB	_	0	root	_	_
5	para	para	ADP	ADP	_	7	case	_	_
6	um	um	DET	DET	_	7	det	_	_
7	caminhão	caminhão	NOUN	NOUN	_	4	nmod	_	_
8	dirigir	dirigir	VERB	VERB	_	4	csubj:pass	_	_
9	cerca	cerca	ADV	ADV	_	12	advmod	_	_
10	de	de	ADP	ADP	_	9	case	_	_
11	1,2	_	NUM	NUM	NumType=Card	12	nummod	_	_
12	milhões	_	NUM	NUM	NumType=Card	14	nummod	_	_
13	de	de	ADP	ADP	_	14	case	_	_
14	km	km	NOUN	NOUN	_	8	nmod	_	SpaceAfter=No
15	.	.	PUNCT	.	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 2 csubj:pass	color:blue
1	"	"	PUNCT	.	_	2	punct	_	SpaceAfter=No
2	Kiss	_	PROPN	PNOUN	_	8	csubj:pass	_	_
3	the	_	PROPN	PNOUN	_	4	det	_	_
4	Stars	_	PROPN	PNOUN	_	2	obj	_	SpaceAfter=No
5	"	"	PUNCT	.	_	2	punct	_	_
6	foi	_	AUX	AUX	_	8	aux:pass	_	_
7	também	também	ADV	ADV	_	8	advmod	_	_
8	comentada	comentar	VERB	VERB	_	0	root	_	_
9	em	em	ADP	ADP	_	11	case	_	_
10	a	o	DET	DET	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	11	det	_	_
11	crítica	_	NOUN	NOUN	_	8	nmod	_	_
12	de	de	ADP	ADP	_	13	case	_	_
13	Fraser	_	PROPN	PNOUN	_	11	nmod	_	_
14	McAlpine	_	PROPN	PNOUN	_	13	flat	_	SpaceAfter=No
15	,	,	PUNCT	.	_	18	punct	_	_
16	de	de	ADP	ADP	_	18	case	_	_
17	a	o	DET	DET	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	18	det	_	_
18	rede	rede	NOUN	NOUN	_	13	nmod	_	_
19	BBC	_	PROPN	PNOUN	_	18	appos	_	SpaceAfter=No
20	,	,	PUNCT	.	_	18	punct	_	_
21	a	a	ADP	ADP	_	23	case	_	_
22	o	o	DET	DET	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	23	det	_	_
23	Young	_	PROPN	PNOUN	_	11	nmod	_	_
24	Foolish	_	PROPN	PNOUN	_	23	conj	_	_
25	Happy	_	PROPN	PNOUN	_	23	conj	_	SpaceAfter=No
26	,	,	PUNCT	.	_	32	punct	_	_
27	em	em	ADP	ADP	_	29	case	_	_
28	a	o	DET	DET	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	29	det	_	_
29	qual	_	PRON	PRON	_	32	nmod	_	_
30	o	o	DET	DET	_	31	det	_	_
31	redator	redator	NOUN	NOUN	_	32	nsubj	_	_
32	comparou	comparar	VERB	VERB	_	11	acl:relcl	_	_
33	-	-	PUNCT	.	_	32	punct	_	_
34	a	_	PRON	PRON	_	32	obj	_	_
35	com	com	ADP	ADP	_	37	case	_	_
36	"	"	PUNCT	.	_	37	punct	_	SpaceAfter=No
37	Firework	_	PROPN	PNOUN	_	32	nmod	_	SpaceAfter=No
38	"	"	PUNCT	.	_	37	punct	_	SpaceAfter=No
39	.	.	PUNCT	.	_	8	punct	_	_

~~~


