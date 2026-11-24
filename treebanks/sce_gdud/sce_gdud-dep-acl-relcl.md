---
layout: base
title:  'Statistics of acl:relcl in UD_Dongxiang-GDUD'
udver: '2'
---

## Treebank Statistics: UD_Dongxiang-GDUD: Relations: `acl:relcl`

This relation is a language-specific subtype of <tt><a href="sce_gdud-dep-acl.html">acl</a></tt>.

5 nodes (1%) are attached to their parents as `acl:relcl`.

5 instances of `acl:relcl` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.8.

The following 4 pairs of parts of speech are connected with `acl:relcl`: <tt><a href="sce_gdud-pos-VERB.html">VERB</a></tt>-<tt><a href="sce_gdud-pos-VERB.html">VERB</a></tt> (2; 40% instances), <tt><a href="sce_gdud-pos-AUX.html">AUX</a></tt>-<tt><a href="sce_gdud-pos-VERB.html">VERB</a></tt> (1; 20% instances), <tt><a href="sce_gdud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sce_gdud-pos-VERB.html">VERB</a></tt> (1; 20% instances), <tt><a href="sce_gdud-pos-PRON.html">PRON</a></tt>-<tt><a href="sce_gdud-pos-VERB.html">VERB</a></tt> (1; 20% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 5 acl:relcl	color:blue
1	ene	ene	DET	_	PronType=Dem	2	det	_	_
2	fugierei	fugierei	NOUN	_	Number=Sing	6	nsubj	_	_
3	dolon	dolon	NUM	_	NumType=Card	5	nummod	_	_
4	ula	ula	NOUN	_	_	5	obl	_	SpaceAfter=No
5	fugierei	_	VERB	_	Aspect=Prog|Mood=Ind|VerbForm=Fin	6	acl:relcl	_	Verbalizer=Yes
6	holu-zhiwo	holu-zhiwo	VERB	_	Aspect=Prog|Mood=Ind|VerbForm=Fin	0	root	_	_
7	dolon	dolon	NUM	_	NumType=Card	8	nummod	_	_
8	ghon	ghon	NOUN	_	_	6	obl	_	SpaceAfter=No
9	gie-ne	gie-ne	VERB	_	Mood=Imp|VerbForm=Fin	6	parataxis	_	SpaceAfter=No
10	.	.	PUNCT	_	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 14 10 acl:relcl	color:blue
1	olu-dʑi	olu-dʑi	ADJ	_	_	2	advmod	_	_
2	wo	wo	AUX	_	Mood=Ind|VerbForm=Fin	0	root	_	SpaceAfter=No
3	,	,	PUNCT	_	_	2	punct	_	_
4	ma-də	ma-də	PRON	_	Case=Dat|Number=Sing|Person=1|PronType=Prs	6	nsubj	_	_
5	tʂaja	tʂaja	NOUN	_	_	6	obj	_	_
6	wai-nə	wai	AUX	_	Mood=Ind|VerbForm=Fin	2	conj	_	_
7	ma	ma	PART	_	_	14	discourse	_	_
8	aliʑan	aliʑan	ADV	_	_	10	advmod	_	_
9	toro	toro	ADP	_	_	10	obl	_	_
10	tai-dʑi	tai-dʑi	VERB	_	Mood=Ind|Tense=Pres|VerbForm=Fin	14	acl:relcl	_	_
11	pa-sə	pa	AUX	_	_	10	aux	_	_
12	bi	bi	PRON	_	Number=Sing|Person=1|PronType=Prs	14	nsubj	_	_
13	ulia	ulia	VERB	_	Polarity=Neg	14	xcomp	_	_
14	madʑiə-na	madʑiə	AUX	_	Mood=Ind|VerbForm=Fin	2	parataxis	_	SpaceAfter=No

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 3 acl:relcl	color:blue
1	Ene	ene	PRON	_	Number=Sing|Person=3|PronType=Prs	5	nsubj	_	_
2	qioron	qioron	NOUN	_	Number=Sing	5	obj	_	_
3	jier-ne	jier-ne	VERB	_	Aspect=Perf|Mood=Ind|VerbForm=Fin	5	acl:relcl	_	_
4	chighan	chighan	ADJ	_	_	5	amod	_	_
5	xiyangbaibu-ni	xiyangbaibu	NOUN	_	Number=Sing	7	nmod	_	SpaceAfter=No|Case=Succ
6	horo-dene	horo-dene	VERB	_	_	5	advcl	_	VerbForm=Succ
7	yiqiao	yiqiao	PRON	_	PronType=Prs	9	nsubj	_	_
8	long	long	NOUN	_	_	9	obj	_	_
9	guilugva-zhi	guilugva-zhi	VERB	_	Aspect=Perf|Mood=Ind|VerbForm=Fin	0	root	_	SpaceAfter=No
10	wo	wo	PRON	_	PronType=Prs	9	iobj	_	SpaceAfter=No
11	.	.	PUNCT	_	_	9	punct	_	_

~~~


