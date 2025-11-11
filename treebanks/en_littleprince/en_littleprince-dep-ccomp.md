---
layout: base
title:  'Statistics of ccomp in UD_English-LittlePrince'
udver: '2'
---

## Treebank Statistics: UD_English-LittlePrince: Relations: `ccomp`

This relation is universal.

115 nodes (2%) are attached to their parents as `ccomp`.

59 instances of `ccomp` (51%) are right-to-left (child precedes parent).
Average distance between parent and child is 6.78260869565217.

The following 11 pairs of parts of speech are connected with `ccomp`: <tt><a href="en_littleprince-pos-VERB.html">VERB</a></tt>-<tt><a href="en_littleprince-pos-VERB.html">VERB</a></tt> (59; 51% instances), <tt><a href="en_littleprince-pos-VERB.html">VERB</a></tt>-<tt><a href="en_littleprince-pos-ADJ.html">ADJ</a></tt> (17; 15% instances), <tt><a href="en_littleprince-pos-VERB.html">VERB</a></tt>-<tt><a href="en_littleprince-pos-NOUN.html">NOUN</a></tt> (16; 14% instances), <tt><a href="en_littleprince-pos-VERB.html">VERB</a></tt>-<tt><a href="en_littleprince-pos-PRON.html">PRON</a></tt> (7; 6% instances), <tt><a href="en_littleprince-pos-VERB.html">VERB</a></tt>-<tt><a href="en_littleprince-pos-INTJ.html">INTJ</a></tt> (6; 5% instances), <tt><a href="en_littleprince-pos-VERB.html">VERB</a></tt>-<tt><a href="en_littleprince-pos-AUX.html">AUX</a></tt> (3; 3% instances), <tt><a href="en_littleprince-pos-VERB.html">VERB</a></tt>-<tt><a href="en_littleprince-pos-ADV.html">ADV</a></tt> (2; 2% instances), <tt><a href="en_littleprince-pos-VERB.html">VERB</a></tt>-<tt><a href="en_littleprince-pos-PROPN.html">PROPN</a></tt> (2; 2% instances), <tt><a href="en_littleprince-pos-ADJ.html">ADJ</a></tt>-<tt><a href="en_littleprince-pos-ADJ.html">ADJ</a></tt> (1; 1% instances), <tt><a href="en_littleprince-pos-VERB.html">VERB</a></tt>-<tt><a href="en_littleprince-pos-NUM.html">NUM</a></tt> (1; 1% instances), <tt><a href="en_littleprince-pos-VERB.html">VERB</a></tt>-<tt><a href="en_littleprince-pos-SCONJ.html">SCONJ</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 17	bgColor:blue
# visual-style 17	fgColor:white
# visual-style 17 4 ccomp	color:blue
1	"	"	PUNCT	``	_	4	punct	_	_
2	We	we	PRON	PRP	Case=Nom|Number=Plur|Person=1|PronType=Prs	4	nsubj	_	_
3	would	would	AUX	MD	VerbForm=Fin	4	aux	_	_
4	have	have	VERB	VB	VerbForm=Inf	17	ccomp	_	_
5	to	to	PART	TO	_	6	mark	_	_
6	put	put	VERB	VB	VerbForm=Inf	4	xcomp	_	_
7	them	they	PRON	PRP	Case=Acc|Number=Plur|Person=3|PronType=Prs	6	obj	_	_
8	one	one	NUM	CD	NumType=Card	6	advcl	_	NumForm=Word
9	on	on	ADP	IN	_	10	case	_	_
10	top	top	NOUN	NN	Number=Sing	8	nmod	_	_
11	of	of	ADP	IN	_	13	case	_	_
12	the	the	DET	DT	Definite=Def|PronType=Art	13	det	_	_
13	other	other	ADJ	JJ	Degree=Pos	10	nmod	_	_
14	,	,	PUNCT	,	_	4	punct	_	_
15	"	"	PUNCT	''	_	4	punct	_	_
16	he	he	PRON	PRP	Case=Nom|Gender=Masc|Number=Sing|Person=3|PronType=Prs	17	nsubj	_	_
17	said	say	VERB	VBD	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	0	root	_	_
18	.	.	PUNCT	.	_	17	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 6 ccomp	color:blue
1	You	you	PRON	PRP	Case=Nom|Number=Sing|Person=2|PronType=Prs	2	nsubj	_	_
2	think	think	VERB	VBP	Mood=Ind|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin	0	root	_	_
3	that	that	PRON	DT	Number=Sing|PronType=Dem	6	nsubj	_	_
4	is	be	AUX	VBZ	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	6	cop	_	_
5	not	not	PART	RB	Polarity=Neg	6	advmod	_	_
6	important	important	ADJ	JJ	Degree=Pos	2	ccomp	_	_
7	!	!	PUNCT	.	_	2	punct	_	_
8	"	"	PUNCT	''	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 15	bgColor:blue
# visual-style 15	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 15 ccomp	color:blue
1	You	you	PRON	PRP	Case=Nom|Number=Sing|Person=2|PronType=Prs	2	nsubj	_	_
2	said	say	VERB	VBD	Mood=Ind|Tense=Past|VerbForm=Fin	0	root	_	_
3	to	to	ADP	IN	_	4	case	_	_
4	me	I	PRON	PRP	Case=Acc|Number=Sing|Person=1|PronType=Prs	2	obl	_	_
5	:	:	PUNCT	:	_	2	punct	_	_
6	"	"	PUNCT	``	_	10	punct	_	_
7	I	I	PRON	PRP	Case=Nom|Number=Sing|Person=1|PronType=Prs	10	nsubj	_	_
8	am	be	AUX	VBP	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	10	aux	_	_
9	always	always	ADV	RB	_	10	advmod	_	_
10	thinking	think	VERB	VBG	Tense=Pres|VerbForm=Part	2	ccomp	_	_
11	that	that	SCONJ	IN	_	15	mark	_	_
12	I	I	PRON	PRP	Case=Nom|Number=Sing|Person=1|PronType=Prs	15	nsubj	_	_
13	am	be	AUX	VBP	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	15	cop	_	_
14	at	at	ADP	IN	_	15	case	_	_
15	home	home	NOUN	NN	Number=Sing	10	ccomp	_	_
16	!	!	PUNCT	.	_	10	punct	_	_
17	"	"	PUNCT	''	_	10	punct	_	_

~~~


