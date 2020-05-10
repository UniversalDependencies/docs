---
layout: base
title:  'Statistics of cop in UD_English-GUM'
udver: '2'
---

## Treebank Statistics: UD_English-GUM: Relations: `cop`

This relation is universal.

1844 nodes (2%) are attached to their parents as `cop`.

1804 instances of `cop` (98%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.29501084598698.

The following 13 pairs of parts of speech are connected with `cop`: <tt><a href="en_gum-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_gum-pos-AUX.html">AUX</a></tt> (775; 42% instances), <tt><a href="en_gum-pos-ADJ.html">ADJ</a></tt>-<tt><a href="en_gum-pos-AUX.html">AUX</a></tt> (751; 41% instances), <tt><a href="en_gum-pos-VERB.html">VERB</a></tt>-<tt><a href="en_gum-pos-AUX.html">AUX</a></tt> (108; 6% instances), <tt><a href="en_gum-pos-PROPN.html">PROPN</a></tt>-<tt><a href="en_gum-pos-AUX.html">AUX</a></tt> (68; 4% instances), <tt><a href="en_gum-pos-PRON.html">PRON</a></tt>-<tt><a href="en_gum-pos-AUX.html">AUX</a></tt> (48; 3% instances), <tt><a href="en_gum-pos-NUM.html">NUM</a></tt>-<tt><a href="en_gum-pos-AUX.html">AUX</a></tt> (45; 2% instances), <tt><a href="en_gum-pos-ADV.html">ADV</a></tt>-<tt><a href="en_gum-pos-AUX.html">AUX</a></tt> (33; 2% instances), <tt><a href="en_gum-pos-X.html">X</a></tt>-<tt><a href="en_gum-pos-AUX.html">AUX</a></tt> (6; 0% instances), <tt><a href="en_gum-pos-ADP.html">ADP</a></tt>-<tt><a href="en_gum-pos-AUX.html">AUX</a></tt> (4; 0% instances), <tt><a href="en_gum-pos-PART.html">PART</a></tt>-<tt><a href="en_gum-pos-AUX.html">AUX</a></tt> (3; 0% instances), <tt><a href="en_gum-pos-INTJ.html">INTJ</a></tt>-<tt><a href="en_gum-pos-AUX.html">AUX</a></tt> (1; 0% instances), <tt><a href="en_gum-pos-SCONJ.html">SCONJ</a></tt>-<tt><a href="en_gum-pos-AUX.html">AUX</a></tt> (1; 0% instances), <tt><a href="en_gum-pos-SYM.html">SYM</a></tt>-<tt><a href="en_gum-pos-AUX.html">AUX</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 4 cop	color:blue
1	On	on	ADP	IN	_	3	case	_	_
2	the	the	DET	DT	Definite=Def|PronType=Art	3	det	_	Entity=(place-104
3	floor	floor	NOUN	NN	Number=Sing	6	nmod	_	Entity=place-104)
4	was	be	AUX	VBD	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	6	cop	_	_
5	a	a	DET	DT	Definite=Ind|PronType=Art	6	det	_	Entity=(object-105
6	wrapper	wrapper	NOUN	NN	Number=Sing	0	root	_	_
7	from	from	ADP	IN	_	10	case	_	_
8	a	a	DET	DT	Definite=Ind|PronType=Art	10	det	_	Entity=(object-106
9	French	French	PROPN	NNP	Number=Sing	10	compound	_	_
10	Chew	Chew	PROPN	NNP	Number=Sing	6	nmod	_	Entity=object-105)object-106)|SpaceAfter=No
11	.	.	PUNCT	.	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 cop	color:blue
1	It	it	PRON	PRP	Case=Nom|Gender=Neut|Number=Sing|Person=3|PronType=Prs	3	nsubj	_	_
2	was	be	AUX	VBD	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	3	cop	_	_
3	dark	dark	ADJ	JJ	Degree=Pos	0	root	_	_
4	under	under	ADP	IN	_	6	case	_	_
5	the	the	DET	DT	Definite=Def|PronType=Art	6	det	_	Entity=(object-78
6	bleachers	bleacher	NOUN	NNS	Number=Plur	3	obl	_	Entity=object-78)|SpaceAfter=No
7	.	.	PUNCT	.	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 2 cop	color:blue
1	That	that	PRON	DT	Number=Sing|PronType=Dem	10	nsubj	_	_
2	is	be	AUX	VBZ	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	10	cop	_	SpaceAfter=No
3	,	,	PUNCT	,	_	2	punct	_	_
4	of	of	ADP	IN	_	5	case	_	_
5	course	course	NOUN	NN	Number=Sing	10	obl	_	SpaceAfter=No
6	,	,	PUNCT	,	_	5	punct	_	_
7	if	if	SCONJ	IN	_	10	mark	_	_
8	you	you	PRON	PRP	Case=Nom|Person=2|PronType=Prs	10	nsubj	_	Entity=(person-11)
9	can	can	AUX	MD	VerbForm=Fin	10	aux	_	_
10	get	get	VERB	VB	VerbForm=Inf	0	root	_	_
11	a	a	DET	DT	Definite=Ind|PronType=Art	12	det	_	Entity=(abstract-18
12	laugh	laugh	NOUN	NN	Number=Sing	10	obj	_	Entity=abstract-18)|SpaceAfter=No
13	.	.	PUNCT	.	_	10	punct	_	_

~~~


