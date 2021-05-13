---
layout: base
title:  'Statistics of acl:relcl in UD_English-PUD'
udver: '2'
---

## Treebank Statistics: UD_English-PUD: Relations: `acl:relcl`

This relation is a language-specific subtype of <tt><a href="en_pud-dep-acl.html">acl</a></tt>.

211 nodes (1%) are attached to their parents as `acl:relcl`.

211 instances of `acl:relcl` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 4.77725118483412.

The following 18 pairs of parts of speech are connected with `acl:relcl`: <tt><a href="en_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_pud-pos-VERB.html">VERB</a></tt> (146; 69% instances), <tt><a href="en_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="en_pud-pos-VERB.html">VERB</a></tt> (27; 13% instances), <tt><a href="en_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_pud-pos-ADJ.html">ADJ</a></tt> (9; 4% instances), <tt><a href="en_pud-pos-PRON.html">PRON</a></tt>-<tt><a href="en_pud-pos-VERB.html">VERB</a></tt> (8; 4% instances), <tt><a href="en_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_pud-pos-NOUN.html">NOUN</a></tt> (3; 1% instances), <tt><a href="en_pud-pos-ADV.html">ADV</a></tt>-<tt><a href="en_pud-pos-VERB.html">VERB</a></tt> (2; 1% instances), <tt><a href="en_pud-pos-PRON.html">PRON</a></tt>-<tt><a href="en_pud-pos-AUX.html">AUX</a></tt> (2; 1% instances), <tt><a href="en_pud-pos-PRON.html">PRON</a></tt>-<tt><a href="en_pud-pos-NOUN.html">NOUN</a></tt> (2; 1% instances), <tt><a href="en_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="en_pud-pos-NOUN.html">NOUN</a></tt> (2; 1% instances), <tt><a href="en_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="en_pud-pos-PROPN.html">PROPN</a></tt> (2; 1% instances), <tt><a href="en_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="en_pud-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="en_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="en_pud-pos-VERB.html">VERB</a></tt> (1; 0% instances), <tt><a href="en_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_pud-pos-AUX.html">AUX</a></tt> (1; 0% instances), <tt><a href="en_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_pud-pos-PRON.html">PRON</a></tt> (1; 0% instances), <tt><a href="en_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_pud-pos-PROPN.html">PROPN</a></tt> (1; 0% instances), <tt><a href="en_pud-pos-NUM.html">NUM</a></tt>-<tt><a href="en_pud-pos-VERB.html">VERB</a></tt> (1; 0% instances), <tt><a href="en_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="en_pud-pos-VERB.html">VERB</a></tt> (1; 0% instances), <tt><a href="en_pud-pos-X.html">X</a></tt>-<tt><a href="en_pud-pos-VERB.html">VERB</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 6 acl:relcl	color:blue
1	They	they	PRON	PRP	Case=Nom|Number=Plur|Person=3|PronType=Prs	4	nsubj	4:nsubj	SpaceAfter=No
2	’re	be	AUX	VBP	Mood=Ind|Tense=Pres|VerbForm=Fin	4	cop	4:cop	_
3	usually	usually	ADV	RB	_	4	advmod	4:advmod	_
4	artists	artist	NOUN	NNS	Number=Plur	0	root	0:root|6:nsubj|8:nsubj:xsubj	_
5	who	who	PRON	WP	PronType=Rel	6	nsubj	4:ref	_
6	want	want	VERB	VBP	Mood=Ind|Tense=Pres|VerbForm=Fin	4	acl:relcl	4:acl:relcl	_
7	to	to	PART	TO	_	8	mark	8:mark	_
8	do	do	VERB	VB	VerbForm=Inf	6	xcomp	6:xcomp	_
9	a	a	DET	DT	Definite=Ind|PronType=Art	10	det	10:det	_
10	bunch	bunch	NOUN	NN	Number=Sing	8	obj	8:obj	_
11	of	of	ADP	IN	_	12	case	12:case	_
12	stuff	stuff	NOUN	NN	Number=Sing	10	nmod	10:nmod:of	SpaceAfter=No
13	.	.	PUNCT	.	_	4	punct	4:punct	_

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 10 acl:relcl	color:blue
1	The	the	DET	DT	Definite=Def|PronType=Art	2	det	2:det	_
2	expedition	expedition	NOUN	NN	Number=Sing	4	nsubj:pass	4:nsubj:pass	_
3	was	be	AUX	VBD	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	4	aux:pass	4:aux:pass	_
4	led	lead	VERB	VBN	Tense=Past|VerbForm=Part	0	root	0:root	_
5	by	by	ADP	IN	_	7	case	7:case	_
6	General	General	PROPN	NNP	Number=Sing	7	compound	7:compound	_
7	Joseph	Joseph	PROPN	NNP	Number=Sing	4	obl	4:obl:by|10:nsubj|12:nsubj:xsubj	_
8	Burgoyne	Burgoyne	PROPN	NNP	Number=Sing	7	flat	7:flat	_
9	who	who	PRON	WP	PronType=Rel	10	nsubj	7:ref	_
10	intended	intend	VERB	VBD	Mood=Ind|Tense=Past|VerbForm=Fin	7	acl:relcl	7:acl:relcl	_
11	to	to	PART	TO	_	12	mark	12:mark	_
12	reach	reach	VERB	VB	VerbForm=Inf	10	xcomp	10:xcomp	_
13	Albany	Albany	PROPN	NNP	Number=Sing	12	obj	12:obj	SpaceAfter=No
14	.	.	PUNCT	.	_	4	punct	4:punct	_

~~~


~~~ conllu
# visual-style 15	bgColor:blue
# visual-style 15	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 15 acl:relcl	color:blue
1	The	the	DET	DT	Definite=Def|PronType=Art	3	det	3:det	_
2	high	high	ADJ	JJ	Degree=Pos	3	amod	3:amod	_
3	altitude	altitude	NOUN	NN	Number=Sing	4	nsubj	4:nsubj|6:nsubj:xsubj	_
4	serves	serve	VERB	VBZ	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	0:root	_
5	to	to	PART	TO	_	6	mark	6:mark	_
6	cool	cool	VERB	VB	VerbForm=Inf	4	xcomp	4:xcomp	_
7	the	the	DET	DT	Definite=Def|PronType=Art	8	det	8:det	_
8	climate	climate	NOUN	NN	Number=Sing	6	obj	6:obj|15:nsubj	SpaceAfter=No
9	,	,	PUNCT	,	_	8	punct	8:punct	_
10	which	which	PRON	WDT	PronType=Rel	15	nsubj	8:ref	_
11	would	would	AUX	MD	VerbForm=Fin	15	aux	15:aux	_
12	otherwise	otherwise	ADV	RB	_	15	advmod	15:advmod	_
13	be	be	AUX	VB	VerbForm=Inf	15	cop	15:cop	_
14	very	very	ADV	RB	_	15	advmod	15:advmod	_
15	hot	hot	ADJ	JJ	Degree=Pos	8	acl:relcl	8:acl:relcl	SpaceAfter=No
16	.	.	PUNCT	.	_	4	punct	4:punct	_

~~~


