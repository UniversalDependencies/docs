---
layout: base
title:  'Statistics of expl:pass in UD_Czech-FicTree'
udver: '2'
---

## Treebank Statistics: UD_Czech-FicTree: Relations: `expl:pass`

This relation is a language-specific subtype of .
There are also 1 other language-specific subtypes of `expl`: <tt><a href="cs_fictree-dep-expl-pv.html">expl:pv</a></tt>.

350 nodes (0%) are attached to their parents as `expl:pass`.

300 instances of `expl:pass` (86%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.84857142857143.

The following 2 pairs of parts of speech are connected with `expl:pass`: <tt><a href="cs_fictree-pos-VERB.html">VERB</a></tt>-<tt><a href="cs_fictree-pos-PRON.html">PRON</a></tt> (349; 100% instances), <tt><a href="cs_fictree-pos-ADJ.html">ADJ</a></tt>-<tt><a href="cs_fictree-pos-PRON.html">PRON</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 2 expl:pass	color:blue
1	Jednou	jednou	ADV	Db-------------	_	3	advmod	3:advmod	_
2	se	se	PRON	P7--4----------	Case=Acc|PronType=Prs|Reflex=Yes|Variant=Short	4	expl:pass	4:expl:pass	_
3	měla	mít	VERB	VpFS----R-AA---	Gender=Fem|Number=Sing|Polarity=Pos|Tense=Past|VerbForm=Part|Voice=Act	0	root	0:root	_
4	přistavovat	přistavovat	VERB	Vf--------A----	Polarity=Pos|VerbForm=Inf	3	xcomp	3:xcomp	_
5	část	část	NOUN	NNFS1-----A----	Case=Nom|Gender=Fem|Number=Sing|Polarity=Pos	3	nsubj	3:nsubj|4:nsubj	_
6	mlýna	mlýn	NOUN	NNIS2-----A----	Animacy=Inan|Case=Gen|Gender=Masc|Number=Sing|Polarity=Pos	5	nmod	5:nmod:gen	SpaceAfter=No
7	.	.	PUNCT	Z:-------------	_	3	punct	3:punct	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 4 expl:pass	color:blue
1	Sledovala	sledovat	VERB	VpFS----R-AA---	Gender=Fem|Number=Sing|Polarity=Pos|Tense=Past|VerbForm=Part|Voice=Act	0	root	0:root	_
2	jsem	být	AUX	VB-S---1P-AA---	Mood=Ind|Number=Sing|Person=1|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	1	aux	1:aux|9:aux	_
3	měnící	měnící	ADJ	AGFS4-----A----	Aspect=Imp|Case=Acc|Gender=Fem|Number=Sing|Polarity=Pos|Tense=Pres|VerbForm=Part|Voice=Act	5	amod	5:amod	_
4	se	se	PRON	P7--4----------	Case=Acc|PronType=Prs|Reflex=Yes|Variant=Short	3	expl:pass	3:expl:pass	_
5	krajinu	krajina	NOUN	NNFS4-----A----	Case=Acc|Gender=Fem|Number=Sing|Polarity=Pos	1	obj	1:obj	_
6	kolem	kolem	ADP	RR--2----------	AdpType=Prep|Case=Gen	7	case	7:case	_
7	sebe	se	PRON	P6--2----------	Case=Gen|PronType=Prs|Reflex=Yes	5	nmod	5:nmod:kolem:gen	_
8	a	a	CCONJ	J^-------------	_	9	cc	9:cc	_
9	snažila	snažit	VERB	VpFS----R-AA---	Gender=Fem|Number=Sing|Polarity=Pos|Tense=Past|VerbForm=Part|Voice=Act	1	conj	0:root|1:conj	_
10	se	se	PRON	P7--4----------	Case=Acc|PronType=Prs|Reflex=Yes|Variant=Short	9	expl:pv	9:expl:pv	_
11	smazat	smazat	VERB	Vf--------A----	Polarity=Pos|VerbForm=Inf	9	xcomp	9:xcomp	_
12	pocit	pocit	NOUN	NNIS4-----A----	Animacy=Inan|Case=Acc|Gender=Masc|Number=Sing|Polarity=Pos	11	obj	11:obj	_
13	trapnosti	trapnost	NOUN	NNFS2-----A----	Case=Gen|Gender=Fem|Number=Sing|Polarity=Pos	12	nmod	12:nmod:gen	SpaceAfter=No
14	.	.	PUNCT	Z:-------------	_	1	punct	1:punct	_

~~~


