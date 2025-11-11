---
layout: base
title:  'Statistics of cc in UD_English-LittlePrince'
udver: '2'
---

## Treebank Statistics: UD_English-LittlePrince: Relations: `cc`

This relation is universal.
There are 1 language-specific subtypes of `cc`: <tt><a href="en_littleprince-dep-cc-preconj.html">cc:preconj</a></tt>.

160 nodes (2%) are attached to their parents as `cc`.

160 instances of `cc` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 4.1625.

The following 7 pairs of parts of speech are connected with `cc`: <tt><a href="en_littleprince-pos-VERB.html">VERB</a></tt>-<tt><a href="en_littleprince-pos-CCONJ.html">CCONJ</a></tt> (99; 62% instances), <tt><a href="en_littleprince-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_littleprince-pos-CCONJ.html">CCONJ</a></tt> (25; 16% instances), <tt><a href="en_littleprince-pos-NUM.html">NUM</a></tt>-<tt><a href="en_littleprince-pos-CCONJ.html">CCONJ</a></tt> (17; 11% instances), <tt><a href="en_littleprince-pos-ADJ.html">ADJ</a></tt>-<tt><a href="en_littleprince-pos-CCONJ.html">CCONJ</a></tt> (12; 8% instances), <tt><a href="en_littleprince-pos-PRON.html">PRON</a></tt>-<tt><a href="en_littleprince-pos-CCONJ.html">CCONJ</a></tt> (4; 3% instances), <tt><a href="en_littleprince-pos-ADV.html">ADV</a></tt>-<tt><a href="en_littleprince-pos-CCONJ.html">CCONJ</a></tt> (2; 1% instances), <tt><a href="en_littleprince-pos-PART.html">PART</a></tt>-<tt><a href="en_littleprince-pos-CCONJ.html">CCONJ</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 2 cc	color:blue
1	"	"	PUNCT	``	_	6	punct	_	_
2	But	but	CCONJ	CC	_	6	cc	_	_
3	why	why	ADV	WRB	PronType=Int	6	advmod	_	_
4	do	do	AUX	VBP	Mood=Ind|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin	6	aux	_	_
5	you	you	PRON	PRP	Case=Nom|Person=2|PronType=Prs	6	nsubj	_	_
6	want	want	VERB	VB	VerbForm=Inf	0	root	_	_
7	the	the	DET	DT	Definite=Def|PronType=Art	8	det	_	_
8	sheep	sheep	NOUN	NNS	Number=Plur	6	obj	_	_
9	to	to	PART	TO	_	10	mark	_	_
10	eat	eat	VERB	VB	VerbForm=Inf	6	xcomp	_	_
11	the	the	DET	DT	Definite=Def|PronType=Art	13	det	_	_
12	little	little	ADJ	JJ	Degree=Pos	13	amod	_	_
13	baobabs	baobab	NOUN	NNS	Number=Plur	10	obj	_	_
14	?	?	PUNCT	.	_	6	punct	_	_
15	"	"	PUNCT	''	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 1 cc	color:blue
1	But	but	CCONJ	CC	_	6	cc	_	_
2	he	he	PRON	PRP	Case=Nom|Gender=Masc|Number=Sing|Person=3|PronType=Prs	6	nsubj	_	_
3	is	be	AUX	VBZ	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	6	cop	_	_
4	not	not	PART	RB	_	6	advmod	_	_
5	a	a	DET	DT	Definite=Ind|PronType=Art	6	det	_	_
6	man	man	NOUN	NN	Number=Sing	0	root	_	_
7	-	-	PUNCT	,	_	12	punct	_	_
8	-	-	PUNCT	,	_	12	punct	_	_
9	he	he	PRON	PRP	Case=Nom|Gender=Masc|Number=Sing|Person=3|PronType=Prs	12	nsubj	_	_
10	is	be	AUX	VBZ	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	12	cop	_	_
11	a	a	DET	DT	Definite=Ind|PronType=Art	12	det	_	_
12	mushroom	mushroom	NOUN	NN	Number=Sing	6	parataxis	_	_
13	!	!	PUNCT	.	_	6	punct	_	_
14	"	"	PUNCT	''	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 cc	color:blue
1	"	"	PUNCT	``	_	5	punct	_	_
2	Three	three	NUM	CD	NumType=Card	5	nsubj	_	_
3	and	and	CCONJ	CC	_	4	cc	_	_
4	two	two	NUM	CD	NumType=Card	2	conj	_	_
5	make	make	VERB	VBP	Mood=Ind|Tense=Pres|VerbForm=Fin	0	root	_	_
6	five	five	NUM	CD	NumType=Card	5	obj	_	_
7	.	.	PUNCT	.	_	5	punct	_	_

~~~


