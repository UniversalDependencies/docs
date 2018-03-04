---
layout: base
title:  'Statistics of orphan in UD_English'
udver: '2'
---

## Treebank Statistics: UD_English: Relations: `orphan`

This relation is universal.

26 nodes (0%) are attached to their parents as `orphan`.

21 instances of `orphan` (81%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.76923076923077.

The following 17 pairs of parts of speech are connected with `orphan`: <tt><a href="en-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en-pos-NOUN.html">NOUN</a></tt> (4; 15% instances), <tt><a href="en-pos-VERB.html">VERB</a></tt>-<tt><a href="en-pos-VERB.html">VERB</a></tt> (3; 12% instances), <tt><a href="en-pos-DET.html">DET</a></tt>-<tt><a href="en-pos-NOUN.html">NOUN</a></tt> (2; 8% instances), <tt><a href="en-pos-PUNCT.html">PUNCT</a></tt>-<tt><a href="en-pos-NOUN.html">NOUN</a></tt> (2; 8% instances), <tt><a href="en-pos-VERB.html">VERB</a></tt>-<tt><a href="en-pos-ADV.html">ADV</a></tt> (2; 8% instances), <tt><a href="en-pos-VERB.html">VERB</a></tt>-<tt><a href="en-pos-NOUN.html">NOUN</a></tt> (2; 8% instances), <tt><a href="en-pos-ADJ.html">ADJ</a></tt>-<tt><a href="en-pos-ADJ.html">ADJ</a></tt> (1; 4% instances), <tt><a href="en-pos-ADV.html">ADV</a></tt>-<tt><a href="en-pos-NOUN.html">NOUN</a></tt> (1; 4% instances), <tt><a href="en-pos-CCONJ.html">CCONJ</a></tt>-<tt><a href="en-pos-NOUN.html">NOUN</a></tt> (1; 4% instances), <tt><a href="en-pos-DET.html">DET</a></tt>-<tt><a href="en-pos-ADJ.html">ADJ</a></tt> (1; 4% instances), <tt><a href="en-pos-DET.html">DET</a></tt>-<tt><a href="en-pos-ADV.html">ADV</a></tt> (1; 4% instances), <tt><a href="en-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en-pos-ADV.html">ADV</a></tt> (1; 4% instances), <tt><a href="en-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en-pos-CCONJ.html">CCONJ</a></tt> (1; 4% instances), <tt><a href="en-pos-NUM.html">NUM</a></tt>-<tt><a href="en-pos-ADJ.html">ADJ</a></tt> (1; 4% instances), <tt><a href="en-pos-NUM.html">NUM</a></tt>-<tt><a href="en-pos-NOUN.html">NOUN</a></tt> (1; 4% instances), <tt><a href="en-pos-NUM.html">NUM</a></tt>-<tt><a href="en-pos-VERB.html">VERB</a></tt> (1; 4% instances), <tt><a href="en-pos-PROPN.html">PROPN</a></tt>-<tt><a href="en-pos-NUM.html">NUM</a></tt> (1; 4% instances).


~~~ conllu
# visual-style 24	bgColor:blue
# visual-style 24	fgColor:white
# visual-style 22	bgColor:blue
# visual-style 22	fgColor:white
# visual-style 22 24 orphan	color:blue
1	Over	over	ADV	RB	_	3	advmod	3:advmod	_
2	nine	nine	NUM	CD	NumType=Card	3	compound	3:compound	_
3	dozen	dozen	NOUN	NN	Number=Sing	4	nummod	4:nummod	_
4	temples	temple	NOUN	NNS	Number=Plur	13	nsubj:pass	13:nsubj:pass	_
5	that	that	PRON	WDT	PronType=Rel	7	nsubj	7:nsubj	_
6	had	have	AUX	VBD	Mood=Ind|Tense=Past|VerbForm=Fin	7	aux	7:aux	_
7	served	serve	VERB	VBN	Tense=Past|VerbForm=Part	4	acl:relcl	4:acl:relcl	_
8	the	the	DET	DT	Definite=Def|PronType=Art	10	det	10:det	_
9	Hindu	hindu	ADJ	JJ	Degree=Pos	10	amod	10:amod	_
10	population	population	NOUN	NN	Number=Sing	7	obj	7:obj	_
11	have	have	AUX	VBP	Mood=Ind|Tense=Pres|VerbForm=Fin	13	aux	13:aux	_
12	been	be	AUX	VBN	Tense=Past|VerbForm=Part	13	aux:pass	13:aux:pass	_
13	destroyed	destroy	VERB	VBN	Tense=Past|VerbForm=Part	0	root	0:root	SpaceAfter=No
14	,	,	PUNCT	,	_	13	punct	13:punct	_
15	with	with	SCONJ	IN	_	17	mark	17:mark	_
16	some	some	DET	DT	_	17	nsubj	17:nsubj	_
17	used	use	VERB	VBN	Tense=Past|VerbForm=Part	13	advcl	13:advcl	_
18	as	as	ADP	IN	_	20	case	20:case	_
19	building	building	NOUN	NN	Number=Sing	20	compound	20:compound	_
20	material	material	NOUN	NN	Number=Sing	17	obl	17:obl	_
21	and	and	CCONJ	CC	_	22	cc	22.1:cc	_
22	others	other	NOUN	NNS	Number=Plur	17	conj	22.1:nsubj	_
22.1	used	use	VERB	VBN	Tense=Past|VerbForm=Part	_	_	17:conj	CopyOf=17
23	as	as	ADP	IN	_	24	case	24:case	_
24	urinals	urinal	NOUN	NNS	Number=Plur	22	orphan	22.1:obl	SpaceAfter=No
25	.	.	PUNCT	.	_	13	punct	13:punct	_

~~~


~~~ conllu
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 12 orphan	color:blue
1	Gracee	Gracee	PROPN	NNP	Number=Sing	4	nsubj	4:nsubj	_
2	is	be	AUX	VBZ	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	4	cop	4:cop	_
3	more	more	ADV	RBR	_	4	advmod	4:advmod	_
4	excited	excited	ADJ	JJ	Degree=Pos	0	root	0:root	_
5	to	to	PART	TO	_	6	mark	6:mark	_
6	see	see	VERB	VB	VerbForm=Inf	4	xcomp	4:xcomp	_
7	her	she	PRON	PRP	Case=Acc|Gender=Fem|Number=Sing|Person=3|PronType=Prs	6	obj	6:obj	_
8	than	than	SCONJ	IN	_	10	mark	10.1:mark	_
9	she	she	PRON	PRP	Case=Nom|Gender=Fem|Number=Sing|Person=3|PronType=Prs	10	nsubj	10.1:nsubj	_
10	is	be	VERB	VBZ	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	4	advcl	10.1:cop	_
10.1	excited	excited	ADJ	JJ	Degree=Pos	_	_	4:advcl	_
11	to	to	PART	TO	_	12	mark	12:mark	_
12	see	see	VERB	VB	VerbForm=Inf	10	orphan	10.1:xcomp	_
13	me	I	PRON	PRP	Case=Acc|Number=Sing|Person=1|PronType=Prs	12	obj	12:obj	SpaceAfter=No
14	!!!!	!!!!	PUNCT	.	_	4	punct	4:punct	_

~~~


~~~ conllu
# visual-style 23	bgColor:blue
# visual-style 23	fgColor:white
# visual-style 21	bgColor:blue
# visual-style 21	fgColor:white
# visual-style 21 23 orphan	color:blue
1	It	it	PRON	PRP	Case=Nom|Gender=Neut|Number=Sing|Person=3|PronType=Prs	4	nsubj	4:nsubj	SpaceAfter=No
2	's	be	AUX	VBZ	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	4	cop	4:cop	_
3	more	more	ADV	RBR	_	4	advmod	4:advmod	_
4	compact	compact	ADJ	JJ	Degree=Pos	0	root	0:root	SpaceAfter=No
5	,	,	PUNCT	,	_	8	punct	8:punct	_
6	ISO	iso	NOUN	NN	Number=Sing	8	compound	8:compound	_
7	6400	6400	NUM	CD	NumType=Card	6	nummod	6:nummod	_
8	capability	capability	NOUN	NN	Number=Sing	4	list	4:list	_
9	(	(	PUNCT	-LRB-	_	10	punct	10.1:punct	SpaceAfter=No
10	SX40	SX40	PROPN	NNP	Number=Sing	8	parataxis	10.1:nsubj	_
10.1	has	have	VERB	VBZ	_	_	_	8:parataxis	CopyOf=-1
11	only	only	ADV	RB	_	12	advmod	12:advmod	_
12	3200	3200	NUM	CD	NumType=Card	10	orphan	10.1:obj	SpaceAfter=No
13	)	)	PUNCT	-RRB-	_	10	punct	10.1:punct	SpaceAfter=No
14	,	,	PUNCT	,	_	8	punct	8:punct	_
15	faster	faster	ADJ	JJR	Degree=Cmp	16	amod	16:amod	_
16	lens	lens	NOUN	NN	Number=Sing	4	list	4:list	_
17	at	at	ADP	IN	_	18	case	18:case	_
18	f/2	f/2	NOUN	NN	Number=Sing	16	nmod	16:nmod	_
19	and	and	CCONJ	CC	_	21	cc	21.1:cc	_
20	the	the	DET	DT	Definite=Def|PronType=Art	21	det	21:det	_
21	SX40	SX40	PROPN	NNP	Number=Sing	16	conj	21.1:nsubj	_
21.1	has	have	VERB	VBZ	_	_	_	16:conj	CopyOf=-1
22	only	only	ADJ	JJ	Degree=Pos	23	amod	23:amod	_
23	f	f	NOUN	NN	Number=Sing	21	orphan	21.1:obj	SpaceAfter=No
24	/	/	PUNCT	,	_	23	punct	23:punct	SpaceAfter=No
25	2.7	2.7	NUM	CD	NumType=Card	23	nummod	23:nummod	SpaceAfter=No
26	.	.	PUNCT	.	_	4	punct	4:punct	_

~~~


