---
layout: base
title:  'Statistics of advcl:relcl in UD_English-LittlePrince'
udver: '2'
---

## Treebank Statistics: UD_English-LittlePrince: Relations: `advcl:relcl`

This relation is a language-specific subtype of <tt><a href="en_littleprince-dep-advcl.html">advcl</a></tt>.

6 nodes (0%) are attached to their parents as `advcl:relcl`.

6 instances of `advcl:relcl` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.16666666666667.

The following 6 pairs of parts of speech are connected with `advcl:relcl`: <tt><a href="en_littleprince-pos-ADV.html">ADV</a></tt>-<tt><a href="en_littleprince-pos-ADJ.html">ADJ</a></tt> (1; 17% instances), <tt><a href="en_littleprince-pos-ADV.html">ADV</a></tt>-<tt><a href="en_littleprince-pos-AUX.html">AUX</a></tt> (1; 17% instances), <tt><a href="en_littleprince-pos-ADV.html">ADV</a></tt>-<tt><a href="en_littleprince-pos-VERB.html">VERB</a></tt> (1; 17% instances), <tt><a href="en_littleprince-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_littleprince-pos-VERB.html">VERB</a></tt> (1; 17% instances), <tt><a href="en_littleprince-pos-PRON.html">PRON</a></tt>-<tt><a href="en_littleprince-pos-VERB.html">VERB</a></tt> (1; 17% instances), <tt><a href="en_littleprince-pos-SCONJ.html">SCONJ</a></tt>-<tt><a href="en_littleprince-pos-VERB.html">VERB</a></tt> (1; 17% instances).


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 9 advcl:relcl	color:blue
1	I	I	PRON	PRP	Case=Nom|Number=Sing|Person=1|PronType=Prs	4	nsubj	_	_
2	did	do	AUX	VBD	Mood=Ind|Number=Sing|Person=1|Tense=Past|VerbForm=Fin	4	aux	_	_
3	not	not	PART	RB	_	4	advmod	_	_
4	understand	understand	VERB	VB	VerbForm=Inf	0	root	_	_
5	why	why	ADV	WRB	PronType=Int	4	obj	_	_
6	it	it	PRON	PRP	Case=Nom|Gender=Neut|Number=Sing|Person=3|PronType=Prs	9	expl	_	_
7	was	be	AUX	VBD	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	9	cop	_	_
8	so	so	ADV	RB	_	9	advmod	_	_
9	important	important	ADJ	JJ	Degree=Pos	5	advcl:relcl	_	_
10	that	that	SCONJ	IN	_	13	mark	_	_
11	sheep	sheep	NOUN	NNS	Number=Plur	13	nsubj	_	_
12	should	should	AUX	MD	VerbForm=Fin	13	aux	_	_
13	eat	eat	VERB	VB	VerbForm=Inf	9	csubj	_	_
14	little	little	ADJ	JJ	Degree=Pos	15	amod	_	_
15	bushes	bush	NOUN	NNS	Number=Plur	13	obj	_	_
16	.	.	PUNCT	.	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 31	bgColor:blue
# visual-style 31	fgColor:white
# visual-style 28	bgColor:blue
# visual-style 28	fgColor:white
# visual-style 28 31 advcl:relcl	color:blue
1	And	and	CCONJ	CC	_	5	cc	_	_
2	one	one	NUM	CD	NumType=Card	3	nummod	_	NumForm=Word
3	day	day	NOUN	NN	Number=Sing	5	obl:unmarked	_	_
4	he	he	PRON	PRP	Case=Nom|Gender=Masc|Number=Sing|Person=3|PronType=Prs	5	nsubj	_	_
5	said	say	VERB	VBD	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	0	root	_	_
6	to	to	ADP	IN	_	7	case	_	_
7	me	I	PRON	PRP	Case=Acc|Number=Sing|Person=1|PronType=Prs	5	obl	_	_
8	:	:	PUNCT	:	_	5	punct	_	_
9	"	"	PUNCT	``	_	13	punct	_	_
10	You	you	PRON	PRP	Case=Nom|Person=2|PronType=Prs	13	nsubj	_	_
11	ought	ought	AUX	MD	VerbForm=Fin	13	aux	_	_
12	to	to	PART	TO	_	13	mark	_	_
13	make	make	VERB	VB	VerbForm=Inf	5	ccomp	_	_
14	a	a	DET	DT	Definite=Ind|PronType=Art	16	det	_	_
15	beautiful	beautiful	ADJ	JJ	Degree=Pos	16	amod	_	_
16	drawing	draw	NOUN	NN	Number=Sing	13	obj	_	_
17	,	,	PUNCT	,	_	26	punct	_	_
18	so	so	SCONJ	IN	ExtPos=SCONJ	26	mark	_	_
19	that	that	SCONJ	IN	_	18	fixed	_	_
20	the	the	DET	DT	Definite=Def|PronType=Art	21	det	_	_
21	children	child	NOUN	NNS	Number=Plur	26	nsubj	_	_
22	where	where	ADV	WRB	PronType=Rel	21	advmod	_	_
23	you	you	PRON	PRP	Case=Nom|Person=2|PronType=Prs	24	nsubj	_	_
24	live	live	VERB	VBP	Mood=Ind|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin	22	advcl:relcl	_	_
25	can	can	AUX	MD	VerbForm=Fin	26	aux	_	_
26	see	see	VERB	VB	VerbForm=Inf	13	advcl	_	_
27	exactly	exactly	ADV	RB	_	28	advmod	_	_
28	how	how	ADV	WRB	PronType=Int	26	advmod	_	_
29	all	all	DET	PDT	_	30	det	_	_
30	this	this	PRON	DT	Number=Sing|PronType=Dem	31	nsubj	_	_
31	is	be	AUX	VBZ	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	28	advcl:relcl	_	_
32	.	.	PUNCT	.	_	13	punct	_	_

~~~


~~~ conllu
# visual-style 24	bgColor:blue
# visual-style 24	fgColor:white
# visual-style 22	bgColor:blue
# visual-style 22	fgColor:white
# visual-style 22 24 advcl:relcl	color:blue
1	And	and	CCONJ	CC	_	5	cc	_	_
2	one	one	NUM	CD	NumType=Card	3	nummod	_	NumForm=Word
3	day	day	NOUN	NN	Number=Sing	5	obl:unmarked	_	_
4	he	he	PRON	PRP	Case=Nom|Gender=Masc|Number=Sing|Person=3|PronType=Prs	5	nsubj	_	_
5	said	say	VERB	VBD	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	0	root	_	_
6	to	to	ADP	IN	_	7	case	_	_
7	me	I	PRON	PRP	Case=Acc|Number=Sing|Person=1|PronType=Prs	5	obl	_	_
8	:	:	PUNCT	:	_	5	punct	_	_
9	"	"	PUNCT	``	_	13	punct	_	_
10	You	you	PRON	PRP	Case=Nom|Person=2|PronType=Prs	13	nsubj	_	_
11	ought	ought	AUX	MD	VerbForm=Fin	13	aux	_	_
12	to	to	PART	TO	_	13	mark	_	_
13	make	make	VERB	VB	VerbForm=Inf	5	ccomp	_	_
14	a	a	DET	DT	Definite=Ind|PronType=Art	16	det	_	_
15	beautiful	beautiful	ADJ	JJ	Degree=Pos	16	amod	_	_
16	drawing	draw	NOUN	NN	Number=Sing	13	obj	_	_
17	,	,	PUNCT	,	_	26	punct	_	_
18	so	so	SCONJ	IN	ExtPos=SCONJ	26	mark	_	_
19	that	that	SCONJ	IN	_	18	fixed	_	_
20	the	the	DET	DT	Definite=Def|PronType=Art	21	det	_	_
21	children	child	NOUN	NNS	Number=Plur	26	nsubj	_	_
22	where	where	ADV	WRB	PronType=Rel	21	advmod	_	_
23	you	you	PRON	PRP	Case=Nom|Person=2|PronType=Prs	24	nsubj	_	_
24	live	live	VERB	VBP	Mood=Ind|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin	22	advcl:relcl	_	_
25	can	can	AUX	MD	VerbForm=Fin	26	aux	_	_
26	see	see	VERB	VB	VerbForm=Inf	13	advcl	_	_
27	exactly	exactly	ADV	RB	_	28	advmod	_	_
28	how	how	ADV	WRB	PronType=Int	26	advmod	_	_
29	all	all	DET	PDT	_	30	det	_	_
30	this	this	PRON	DT	Number=Sing|PronType=Dem	31	nsubj	_	_
31	is	be	AUX	VBZ	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	28	advcl:relcl	_	_
32	.	.	PUNCT	.	_	13	punct	_	_

~~~


