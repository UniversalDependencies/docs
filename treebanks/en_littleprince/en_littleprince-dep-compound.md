---
layout: base
title:  'Statistics of compound in UD_English-LittlePrince'
udver: '2'
---

## Treebank Statistics: UD_English-LittlePrince: Relations: `compound`

This relation is universal.
There are 1 language-specific subtypes of `compound`: <tt><a href="en_littleprince-dep-compound-prt.html">compound:prt</a></tt>.

49 nodes (1%) are attached to their parents as `compound`.

48 instances of `compound` (98%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.97959183673469.

The following 7 pairs of parts of speech are connected with `compound`: <tt><a href="en_littleprince-pos-NUM.html">NUM</a></tt>-<tt><a href="en_littleprince-pos-NUM.html">NUM</a></tt> (26; 53% instances), <tt><a href="en_littleprince-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_littleprince-pos-NOUN.html">NOUN</a></tt> (13; 27% instances), <tt><a href="en_littleprince-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_littleprince-pos-VERB.html">VERB</a></tt> (5; 10% instances), <tt><a href="en_littleprince-pos-VERB.html">VERB</a></tt>-<tt><a href="en_littleprince-pos-ADJ.html">ADJ</a></tt> (2; 4% instances), <tt><a href="en_littleprince-pos-ADJ.html">ADJ</a></tt>-<tt><a href="en_littleprince-pos-NOUN.html">NOUN</a></tt> (1; 2% instances), <tt><a href="en_littleprince-pos-NUM.html">NUM</a></tt>-<tt><a href="en_littleprince-pos-SYM.html">SYM</a></tt> (1; 2% instances), <tt><a href="en_littleprince-pos-PROPN.html">PROPN</a></tt>-<tt><a href="en_littleprince-pos-NOUN.html">NOUN</a></tt> (1; 2% instances).


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 12 10 compound	color:blue
1	I	I	PRON	PRP	Case=Nom|Number=Sing|Person=1|PronType=Prs	2	nsubj	_	_
2	asked	ask	VERB	VBD	Mood=Ind|Tense=Past|VerbForm=Fin	0	root	_	_
3	,	,	PUNCT	,	_	7	punct	_	_
4	"	"	PUNCT	``	_	7	punct	_	_
5	on	on	ADP	IN	_	7	case	_	_
6	the	the	DET	DT	Definite=Def|PronType=Art	7	det	_	_
7	day	day	NOUN	NN	Number=Sing	2	ccomp	_	_
8	of	of	ADP	IN	_	13	case	_	_
9	the	the	DET	DT	Definite=Def|PronType=Art	13	det	_	_
10	forty	forty	NUM	CD	NumType=Card	12	compound	_	_
11	-	-	PUNCT	HYPH	_	12	punct	_	_
12	four	four	NUM	CD	NumType=Card	13	nummod	_	_
13	sunsets	sunset	NOUN	NNS	Number=Plur	7	nmod	_	_
14	?	?	PUNCT	.	_	7	punct	_	_
15	"	"	PUNCT	''	_	7	punct	_	_

~~~


~~~ conllu
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 13 12 compound	color:blue
1	"	"	PUNCT	``	_	5	punct	_	_
2	At	at	ADP	IN	_	3	case	_	_
3	night	night	NOUN	NN	Number=Sing	5	obl	_	_
4	I	I	PRON	PRP	Case=Nom|Number=Sing|Person=1|PronType=Prs	5	nsubj	_	_
5	want	want	VERB	VBP	Mood=Ind|Tense=Pres|VerbForm=Fin	0	root	_	_
6	you	you	PRON	PRP	Case=Acc|Person=2|PronType=Prs	5	obj	_	_
7	to	to	PART	TO	_	8	mark	_	_
8	put	put	VERB	VB	VerbForm=Inf	5	xcomp	_	_
9	me	I	PRON	PRP	Case=Acc|Number=Sing|Person=1|PronType=Prs	8	obj	_	_
10	under	under	ADP	IN	_	13	case	_	_
11	a	a	DET	DT	Definite=Ind|PronType=Art	13	det	_	_
12	glass	glass	NOUN	NN	Number=Sing	13	compound	_	_
13	globe	globe	NOUN	NN	Number=Sing	8	obl	_	_
14	.	.	PUNCT	.	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 8 compound	color:blue
1	Perhaps	perhaps	ADV	RB	_	10	advmod	_	_
2	I	I	PRON	PRP	Case=Nom|Number=Sing|Person=1|PronType=Prs	10	nsubj	_	_
3	am	be	AUX	VBP	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	10	cop	_	_
4	a	a	DET	DT	Definite=Ind|ExtPos=ADV|PronType=Art	6	advmod	_	_
5	little	little	ADV	JJ	Degree=Pos	4	fixed	_	_
6	like	like	ADP	IN	_	10	amod	_	_
7	the	the	DET	DT	Definite=Def|PronType=Art	10	det	_	_
8	grown	grow	VERB	VBN	Tense=Past|VerbForm=Part	10	compound	_	_
9	-	-	PUNCT	HYPH	_	10	punct	_	_
10	ups	up	NOUN	NNS	Number=Plur	0	root	_	_
11	.	.	PUNCT	.	_	10	punct	_	_

~~~


