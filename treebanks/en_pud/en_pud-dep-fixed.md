---
layout: base
title:  'Statistics of fixed in UD_English-PUD'
udver: '2'
---

## Treebank Statistics: UD_English-PUD: Relations: `fixed`

This relation is universal.

102 nodes (0%) are attached to their parents as `fixed`.

102 instances of `fixed` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.13725490196078.

The following 19 pairs of parts of speech are connected with `fixed`: <tt><a href="en_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="en_pud-pos-ADP.html">ADP</a></tt> (26; 25% instances), <tt><a href="en_pud-pos-ADV.html">ADV</a></tt>-<tt><a href="en_pud-pos-ADP.html">ADP</a></tt> (13; 13% instances), <tt><a href="en_pud-pos-ADP.html">ADP</a></tt>-<tt><a href="en_pud-pos-ADP.html">ADP</a></tt> (11; 11% instances), <tt><a href="en_pud-pos-ADV.html">ADV</a></tt>-<tt><a href="en_pud-pos-ADV.html">ADV</a></tt> (11; 11% instances), <tt><a href="en_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="en_pud-pos-ADP.html">ADP</a></tt> (9; 9% instances), <tt><a href="en_pud-pos-ADP.html">ADP</a></tt>-<tt><a href="en_pud-pos-NOUN.html">NOUN</a></tt> (7; 7% instances), <tt><a href="en_pud-pos-ADP.html">ADP</a></tt>-<tt><a href="en_pud-pos-ADV.html">ADV</a></tt> (5; 5% instances), <tt><a href="en_pud-pos-SCONJ.html">SCONJ</a></tt>-<tt><a href="en_pud-pos-SCONJ.html">SCONJ</a></tt> (5; 5% instances), <tt><a href="en_pud-pos-ADP.html">ADP</a></tt>-<tt><a href="en_pud-pos-ADJ.html">ADJ</a></tt> (2; 2% instances), <tt><a href="en_pud-pos-ADP.html">ADP</a></tt>-<tt><a href="en_pud-pos-PART.html">PART</a></tt> (2; 2% instances), <tt><a href="en_pud-pos-ADV.html">ADV</a></tt>-<tt><a href="en_pud-pos-ADJ.html">ADJ</a></tt> (2; 2% instances), <tt><a href="en_pud-pos-DET.html">DET</a></tt>-<tt><a href="en_pud-pos-ADJ.html">ADJ</a></tt> (2; 2% instances), <tt><a href="en_pud-pos-ADP.html">ADP</a></tt>-<tt><a href="en_pud-pos-DET.html">DET</a></tt> (1; 1% instances), <tt><a href="en_pud-pos-ADV.html">ADV</a></tt>-<tt><a href="en_pud-pos-CCONJ.html">CCONJ</a></tt> (1; 1% instances), <tt><a href="en_pud-pos-DET.html">DET</a></tt>-<tt><a href="en_pud-pos-DET.html">DET</a></tt> (1; 1% instances), <tt><a href="en_pud-pos-SCONJ.html">SCONJ</a></tt>-<tt><a href="en_pud-pos-ADP.html">ADP</a></tt> (1; 1% instances), <tt><a href="en_pud-pos-SCONJ.html">SCONJ</a></tt>-<tt><a href="en_pud-pos-NOUN.html">NOUN</a></tt> (1; 1% instances), <tt><a href="en_pud-pos-SCONJ.html">SCONJ</a></tt>-<tt><a href="en_pud-pos-PART.html">PART</a></tt> (1; 1% instances), <tt><a href="en_pud-pos-SCONJ.html">SCONJ</a></tt>-<tt><a href="en_pud-pos-VERB.html">VERB</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 fixed	color:blue
1	More	more	ADJ	JJR	Degree=Cmp	3	advmod	3:advmod	_
2	than	than	ADP	IN	_	1	fixed	1:fixed	_
3	330	330	NUM	CD	NumForm=Digit|NumType=Card	4	nummod	4:nummod	_
4	crew	crew	NOUN	NNS	Number=Plur	8	nsubj	8:nsubj	_
5	are	be	AUX	VBP	Mood=Ind|Tense=Pres|VerbForm=Fin	8	cop	8:cop	_
6	onboard	onboard	ADP	IN	_	8	case	8:case	_
7	the	the	DET	DT	Definite=Def|PronType=Art	8	det	8:det	_
8	ship	ship	NOUN	NN	Number=Sing	0	root	0:root	SpaceAfter=No
9	.	.	PUNCT	.	_	8	punct	8:punct	_

~~~


~~~ conllu
# visual-style 17	bgColor:blue
# visual-style 17	fgColor:white
# visual-style 16	bgColor:blue
# visual-style 16	fgColor:white
# visual-style 16 17 fixed	color:blue
1	You	you	PRON	PRP	Case=Nom|Person=2|PronType=Prs	2	nsubj	2:nsubj|4:nsubj:xsubj	_
2	have	have	VERB	VBP	Mood=Ind|Tense=Pres|VerbForm=Fin	0	root	0:root	_
3	to	to	PART	TO	_	4	mark	4:mark	_
4	stand	stand	VERB	VB	VerbForm=Inf	2	xcomp	2:xcomp	_
5	up	up	ADP	RP	_	4	compound:prt	4:compound:prt	_
6	to	to	ADP	IN	_	7	case	7:case	_
7	that	that	PRON	DT	Number=Sing|PronType=Dem	4	obl	4:obl:to	_
8	and	and	CCONJ	CC	_	11	cc	11:cc	_
9	I	I	PRON	PRP	Case=Nom|Number=Sing|Person=1|PronType=Prs	11	nsubj	11:nsubj	_
10	would	would	AUX	MD	VerbForm=Fin	11	aux	11:aux	_
11	rather	rather	VERB	VB	VerbForm=Inf	2	conj	2:conj:and	_
12	someone	someone	NOUN	NN	Number=Sing	13	nsubj	13:nsubj|19:nsubj	_
13	ran	run	VERB	VBD	Mood=Ind|Tense=Past|VerbForm=Fin	11	ccomp	11:ccomp	_
14	at	at	ADP	IN	_	15	case	15:case	_
15	me	I	PRON	PRP	Case=Acc|Number=Sing|Person=1|PronType=Prs	13	obl	13:obl:at	_
16	rather	rather	ADV	RB	_	19	cc	19:cc	_
17	than	than	ADP	IN	_	16	fixed	16:fixed	_
18	round	round	ADP	IN	_	19	case	19:case	_
19	me	I	PRON	PRP	Case=Acc|Number=Sing|Person=1|PronType=Prs	13	conj	11:ccomp|13:conj:rather_than	SpaceAfter=No
20	.	.	PUNCT	.	_	2	punct	2:punct	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 7 fixed	color:blue
1	These	these	PRON	DT	Number=Plur|PronType=Dem	5	nsubj	5:nsubj	_
2	are	be	AUX	VBP	Mood=Ind|Tense=Pres|VerbForm=Fin	5	cop	5:cop	_
3	not	not	PART	RB	Polarity=Neg	5	advmod	5:advmod	_
4	very	very	ADV	RB	_	5	advmod	5:advmod	_
5	popular	popular	ADJ	JJ	Degree=Pos	0	root	0:root	_
6	due	due	ADP	IN	_	13	case	13:case	_
7	to	to	ADP	IN	_	6	fixed	6:fixed	_
8	the	the	DET	DT	Definite=Def|PronType=Art	13	det	13:det	_
9	often	often	ADV	RB	_	10	advmod	10:advmod	_
10	remote	remote	ADJ	JJ	Degree=Pos	13	amod	13:amod	_
11	and	and	CCONJ	CC	_	12	cc	12:cc	_
12	roadless	roadless	ADJ	JJ	Degree=Pos	10	conj	10:conj:and|13:amod	_
13	locations	location	NOUN	NNS	Number=Plur	5	obl	5:obl:due_to	SpaceAfter=No
14	.	.	PUNCT	.	_	5	punct	5:punct	_

~~~


