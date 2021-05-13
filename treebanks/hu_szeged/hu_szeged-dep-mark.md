---
layout: base
title:  'Statistics of mark in UD_Hungarian-Szeged'
udver: '2'
---

## Treebank Statistics: UD_Hungarian-Szeged: Relations: `mark`

This relation is universal.

745 nodes (2%) are attached to their parents as `mark`.

732 instances of `mark` (98%) are right-to-left (child precedes parent).
Average distance between parent and child is 5.67785234899329.

The following 12 pairs of parts of speech are connected with `mark`: <tt><a href="hu_szeged-pos-VERB.html">VERB</a></tt>-<tt><a href="hu_szeged-pos-SCONJ.html">SCONJ</a></tt> (584; 78% instances), <tt><a href="hu_szeged-pos-NOUN.html">NOUN</a></tt>-<tt><a href="hu_szeged-pos-SCONJ.html">SCONJ</a></tt> (61; 8% instances), <tt><a href="hu_szeged-pos-ADJ.html">ADJ</a></tt>-<tt><a href="hu_szeged-pos-SCONJ.html">SCONJ</a></tt> (47; 6% instances), <tt><a href="hu_szeged-pos-NUM.html">NUM</a></tt>-<tt><a href="hu_szeged-pos-SCONJ.html">SCONJ</a></tt> (20; 3% instances), <tt><a href="hu_szeged-pos-PRON.html">PRON</a></tt>-<tt><a href="hu_szeged-pos-SCONJ.html">SCONJ</a></tt> (11; 1% instances), <tt><a href="hu_szeged-pos-ADV.html">ADV</a></tt>-<tt><a href="hu_szeged-pos-SCONJ.html">SCONJ</a></tt> (9; 1% instances), <tt><a href="hu_szeged-pos-PROPN.html">PROPN</a></tt>-<tt><a href="hu_szeged-pos-SCONJ.html">SCONJ</a></tt> (5; 1% instances), <tt><a href="hu_szeged-pos-AUX.html">AUX</a></tt>-<tt><a href="hu_szeged-pos-SCONJ.html">SCONJ</a></tt> (4; 1% instances), <tt><a href="hu_szeged-pos-ADJ.html">ADJ</a></tt>-<tt><a href="hu_szeged-pos-ADV.html">ADV</a></tt> (1; 0% instances), <tt><a href="hu_szeged-pos-DET.html">DET</a></tt>-<tt><a href="hu_szeged-pos-SCONJ.html">SCONJ</a></tt> (1; 0% instances), <tt><a href="hu_szeged-pos-NOUN.html">NOUN</a></tt>-<tt><a href="hu_szeged-pos-ADV.html">ADV</a></tt> (1; 0% instances), <tt><a href="hu_szeged-pos-VERB.html">VERB</a></tt>-<tt><a href="hu_szeged-pos-ADV.html">ADV</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 1 mark	color:blue
1	Bár	bár	SCONJ	_	_	3	mark	_	_
2	name	ne	ADV	_	PronType=Neg	3	advmod	_	_
3	tettem	tesz	VERB	_	Definite=Def|Mood=Ind|Number=Sing|Person=1|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	_
4	volna	volna	AUX	_	Definite=Ind|Mood=Cnd|Number=Sing|Person=3|Tense=Pres|Voice=Act	3	aux	_	SpaceAfter=No
5	!	!	PUNCT	_	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 5 mark	color:blue
1	Olyan	olyan	ADJ	_	Case=Nom|Degree=Pos|Number=Sing	0	root	_	_
2	az	az	DET	_	Definite=Def|PronType=Art	3	det	_	_
3	emlékezet	emlékezet	NOUN	_	Case=Nom|Number=Sing	1	nsubj	_	SpaceAfter=No
4	,	,	PUNCT	_	_	10	punct	_	_
5	mint	mint	SCONJ	_	_	10	mark	_	_
6	a	a	DET	_	Definite=Def|PronType=Art	8	det	_	_
7	zsidó	zsidó	ADJ	_	Case=Nom|Degree=Pos|Number=Sing	8	amod:att	_	_
8	sírokon	sír	NOUN	_	Case=Sup|Number=Plur	10	nmod:obl	_	_
9	a	a	DET	_	Definite=Def|PronType=Art	10	det	_	_
10	kődarab	kődarab	NOUN	_	Case=Nom|Number=Sing	1	advcl	_	SpaceAfter=No
11	.	.	PUNCT	_	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 mark	color:blue
1	—	—	PUNCT	_	_	2	punct	_	_
2	Igen	igen	INTJ	_	_	0	root	_	SpaceAfter=No
3	,	,	PUNCT	_	_	5	punct	_	_
4	bár	bár	SCONJ	_	_	5	mark	_	_
5	nehéz	nehéz	ADJ	_	Case=Nom|Degree=Pos|Number=Sing	2	advcl	_	_
6	egészséges	egészséges	ADJ	_	Case=Nom|Degree=Pos|Number=Sing	7	amod:att	_	_
7	arányt	arány	NOUN	_	Case=Acc|Number=Sing	8	obj	_	_
8	találni	talál	VERB	_	VerbForm=Inf|Voice=Act	5	xcomp	_	_
9	a	a	DET	_	Definite=Def|PronType=Art	11	det	_	_
10	két	két	NUM	_	Case=Nom|Number=Sing|NumType=Card	11	nummod	_	_
11	műfaj	műfaj	NOUN	_	Case=Nom|Number=Sing	8	obl	_	_
12	között	között	ADP	_	_	11	case	_	SpaceAfter=No
13	.	.	PUNCT	_	_	2	punct	_	_

~~~


