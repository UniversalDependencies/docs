---
layout: base
title:  'Statistics of advcl:relcl in UD_English-EWT'
udver: '2'
---

## Treebank Statistics: UD_English-EWT: Relations: `advcl:relcl`

This relation is a language-specific subtype of <tt><a href="en_ewt-dep-advcl.html">advcl</a></tt>.

118 nodes (0%) are attached to their parents as `advcl:relcl`.

118 instances of `advcl:relcl` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 6.05932203389831.

The following 17 pairs of parts of speech are connected with `advcl:relcl`: <tt><a href="en_ewt-pos-ADV.html">ADV</a></tt>-<tt><a href="en_ewt-pos-VERB.html">VERB</a></tt> (35; 30% instances), <tt><a href="en_ewt-pos-VERB.html">VERB</a></tt>-<tt><a href="en_ewt-pos-VERB.html">VERB</a></tt> (25; 21% instances), <tt><a href="en_ewt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_ewt-pos-VERB.html">VERB</a></tt> (17; 14% instances), <tt><a href="en_ewt-pos-VERB.html">VERB</a></tt>-<tt><a href="en_ewt-pos-ADJ.html">ADJ</a></tt> (9; 8% instances), <tt><a href="en_ewt-pos-VERB.html">VERB</a></tt>-<tt><a href="en_ewt-pos-PRON.html">PRON</a></tt> (6; 5% instances), <tt><a href="en_ewt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="en_ewt-pos-VERB.html">VERB</a></tt> (5; 4% instances), <tt><a href="en_ewt-pos-VERB.html">VERB</a></tt>-<tt><a href="en_ewt-pos-NOUN.html">NOUN</a></tt> (5; 4% instances), <tt><a href="en_ewt-pos-ADV.html">ADV</a></tt>-<tt><a href="en_ewt-pos-ADJ.html">ADJ</a></tt> (4; 3% instances), <tt><a href="en_ewt-pos-PROPN.html">PROPN</a></tt>-<tt><a href="en_ewt-pos-VERB.html">VERB</a></tt> (3; 3% instances), <tt><a href="en_ewt-pos-ADV.html">ADV</a></tt>-<tt><a href="en_ewt-pos-NOUN.html">NOUN</a></tt> (2; 2% instances), <tt><a href="en_ewt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="en_ewt-pos-ADJ.html">ADJ</a></tt> (1; 1% instances), <tt><a href="en_ewt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="en_ewt-pos-NOUN.html">NOUN</a></tt> (1; 1% instances), <tt><a href="en_ewt-pos-ADV.html">ADV</a></tt>-<tt><a href="en_ewt-pos-ADV.html">ADV</a></tt> (1; 1% instances), <tt><a href="en_ewt-pos-ADV.html">ADV</a></tt>-<tt><a href="en_ewt-pos-AUX.html">AUX</a></tt> (1; 1% instances), <tt><a href="en_ewt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_ewt-pos-PRON.html">PRON</a></tt> (1; 1% instances), <tt><a href="en_ewt-pos-PROPN.html">PROPN</a></tt>-<tt><a href="en_ewt-pos-ADJ.html">ADJ</a></tt> (1; 1% instances), <tt><a href="en_ewt-pos-VERB.html">VERB</a></tt>-<tt><a href="en_ewt-pos-DET.html">DET</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 5 advcl:relcl	color:blue
1	Power	power	NOUN	NN	Number=Sing	3	nsubj	3:nsubj	_
2	be	be	AUX	VB	Mood=Sub|VerbForm=Fin	3	cop	3:cop	_
3	where	where	ADV	WRB	PronType=Rel	0	root	0:root	_
4	power	power	NOUN	NN	Number=Sing	5	nsubj	5:nsubj	_
5	lies	lie	VERB	VBZ	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	3	advcl:relcl	3:advcl:relcl	SpaceAfter=No
6	.	.	PUNCT	.	_	3	punct	3:punct	_

~~~


~~~ conllu
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 13 advcl:relcl	color:blue
1	So	so	ADV	RB	_	3	advmod	3:advmod	_
2	I	I	PRON	PRP	Case=Nom|Number=Sing|Person=1|PronType=Prs	3	nsubj	3:nsubj	_
3	pointed	point	VERB	VBD	Mood=Ind|Number=Sing|Person=1|Tense=Past|VerbForm=Fin	0	root	0:root	_
4	this	this	PRON	DT	Number=Sing|PronType=Dem	3	obj	3:obj	_
5	out	out	ADP	RP	_	3	compound:prt	3:compound:prt	_
6	to	to	ADP	IN	_	7	case	7:case	_
7	him	he	PRON	PRP	Case=Acc|Gender=Masc|Number=Sing|Person=3|PronType=Prs	3	obl	3:obl:to	SpaceAfter=No
8	,	,	PUNCT	,	_	3	punct	3:punct	_
9	at	at	ADP	IN	_	11	case	11:case	_
10	which	which	DET	WDT	PronType=Rel	11	det	11:det	_
11	point	point	NOUN	NN	Number=Sing	13	obl	13:obl:at	_
12	he	he	PRON	PRP	Case=Nom|Gender=Masc|Number=Sing|Person=3|PronType=Prs	13	nsubj	13:nsubj	_
13	said	say	VERB	VBD	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	3	advcl:relcl	3:advcl:relcl	_
14	they	they	PRON	PRP	Case=Nom|Number=Plur|Person=3|PronType=Prs	16	nsubj	16:nsubj	_
15	only	only	ADV	RB	_	16	advmod	16:advmod	_
16	had	have	VERB	VBD	Mood=Ind|Number=Plur|Person=3|Tense=Past|VerbForm=Fin	13	ccomp	13:ccomp	_
17	one	one	NUM	CD	NumForm=Word|NumType=Card	16	obj	16:obj	_
18	of	of	ADP	IN	_	21	case	21:case	_
19	the	the	DET	DT	Definite=Def|PronType=Art	21	det	21:det	_
20	correct	correct	ADJ	JJ	Degree=Pos	21	amod	21:amod	_
21	tires	tire	NOUN	NNS	Number=Plur	17	nmod	17:nmod:of	_
22	in	in	ADP	IN	_	23	case	23:case	_
23	stock	stock	NOUN	NN	Number=Sing	16	obl	16:obl:in	SpaceAfter=No
24	.	.	PUNCT	.	_	3	punct	3:punct	_

~~~


~~~ conllu
# visual-style 18	bgColor:blue
# visual-style 18	fgColor:white
# visual-style 15	bgColor:blue
# visual-style 15	fgColor:white
# visual-style 15 18 advcl:relcl	color:blue
1	Please	please	INTJ	UH	_	4	discourse	4:discourse	_
2	do	do	AUX	VB	Mood=Imp|VerbForm=Fin	4	aux	4:aux	_
3	not	not	PART	RB	_	4	advmod	4:advmod	_
4	go	go	VERB	VB	Mood=Imp|VerbForm=Fin	0	root	0:root	_
5	there	there	ADV	RB	PronType=Dem	4	advmod	4:advmod	_
6	if	if	SCONJ	IN	_	15	mark	15:mark	_
7	it	it	PRON	PRP	Case=Nom|Gender=Neut|Number=Sing|Person=3|PronType=Prs	15	expl	15:expl	_
8	's	be	AUX	VBZ	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	15	cop	15:cop	_
9	professional	professional	ADJ	JJ	Degree=Pos	15	amod	15:amod	SpaceAfter=No
10	,	,	PUNCT	,	_	15	punct	15:punct	_
11	friendly	friendly	ADJ	JJ	Degree=Pos	15	amod	15:amod	SpaceAfter=No
12	,	,	PUNCT	,	_	15	punct	15:punct	_
13	diligent	diligent	ADJ	JJ	Degree=Pos	15	amod	15:amod	_
14	medical	medical	ADJ	JJ	Degree=Pos	15	amod	15:amod	_
15	services	service	NOUN	NNS	Number=Plur	4	advcl	4:advcl:if|18:obl:for	_
16	you	you	PRON	PRP	Case=Nom|Person=2|PronType=Prs	18	nsubj	18:nsubj	_
17	're	be	AUX	VBP	Mood=Ind|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin	18	aux	18:aux	_
18	looking	look	VERB	VBG	Tense=Pres|VerbForm=Part	15	advcl:relcl	15:advcl:relcl	_
19	for	for	ADP	IN	_	18	obl	15:case	SpaceAfter=No
20	.	.	PUNCT	.	_	4	punct	4:punct	_

~~~


