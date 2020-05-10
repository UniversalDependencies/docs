---
layout: base
title:  'Statistics of case in UD_English-GUMReddit'
udver: '2'
---

## Treebank Statistics: UD_English-GUMReddit: Relations: `case`

This relation is universal.

1192 nodes (7%) are attached to their parents as `case`.

1144 instances of `case` (96%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.94127516778523.

The following 16 pairs of parts of speech are connected with `case`: <tt><a href="en_gumreddit-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_gumreddit-pos-ADP.html">ADP</a></tt> (865; 73% instances), <tt><a href="en_gumreddit-pos-PRON.html">PRON</a></tt>-<tt><a href="en_gumreddit-pos-ADP.html">ADP</a></tt> (167; 14% instances), <tt><a href="en_gumreddit-pos-PROPN.html">PROPN</a></tt>-<tt><a href="en_gumreddit-pos-ADP.html">ADP</a></tt> (60; 5% instances), <tt><a href="en_gumreddit-pos-ADJ.html">ADJ</a></tt>-<tt><a href="en_gumreddit-pos-ADP.html">ADP</a></tt> (23; 2% instances), <tt><a href="en_gumreddit-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_gumreddit-pos-PART.html">PART</a></tt> (22; 2% instances), <tt><a href="en_gumreddit-pos-NUM.html">NUM</a></tt>-<tt><a href="en_gumreddit-pos-ADP.html">ADP</a></tt> (13; 1% instances), <tt><a href="en_gumreddit-pos-PROPN.html">PROPN</a></tt>-<tt><a href="en_gumreddit-pos-PART.html">PART</a></tt> (12; 1% instances), <tt><a href="en_gumreddit-pos-VERB.html">VERB</a></tt>-<tt><a href="en_gumreddit-pos-ADP.html">ADP</a></tt> (11; 1% instances), <tt><a href="en_gumreddit-pos-ADV.html">ADV</a></tt>-<tt><a href="en_gumreddit-pos-ADP.html">ADP</a></tt> (4; 0% instances), <tt><a href="en_gumreddit-pos-SYM.html">SYM</a></tt>-<tt><a href="en_gumreddit-pos-ADP.html">ADP</a></tt> (4; 0% instances), <tt><a href="en_gumreddit-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_gumreddit-pos-ADV.html">ADV</a></tt> (3; 0% instances), <tt><a href="en_gumreddit-pos-SCONJ.html">SCONJ</a></tt>-<tt><a href="en_gumreddit-pos-ADP.html">ADP</a></tt> (3; 0% instances), <tt><a href="en_gumreddit-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_gumreddit-pos-ADJ.html">ADJ</a></tt> (2; 0% instances), <tt><a href="en_gumreddit-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_gumreddit-pos-SYM.html">SYM</a></tt> (1; 0% instances), <tt><a href="en_gumreddit-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_gumreddit-pos-VERB.html">VERB</a></tt> (1; 0% instances), <tt><a href="en_gumreddit-pos-X.html">X</a></tt>-<tt><a href="en_gumreddit-pos-X.html">X</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 6 case	color:blue
1	_	_	SCONJ	IN	_	7	mark	_	Entity=(abstract-2|Lem=*LOWER*|Len=2
2	_	_	DET	DT	_	4	det	_	Entity=(place-3|Lem=_|Len=5
3	_	_	ADJ	JJ	Degree=Pos	4	amod	_	Lem=_|Len=5
4	_	_	NOUN	NN	Number=Sing	7	nsubj	_	Entity=place-3)|Lem=_|Len=7
5	_	_	AUX	VBZ	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	7	cop	_	Lem=be|Len=2
6	_	_	ADP	IN	_	7	case	_	Lem=_|Len=2
7	_	_	NOUN	NNS	Number=Plur	19	advcl	_	Entity=(abstract-4|Lem=billion|Len=8
8	_	_	PUNCT	-LRB-	_	11	punct	_	Lem=_|Len=1|SpaceAfter=No
9	_	_	SCONJ	IN	_	11	mark	_	Lem=_|Len=2
10	_	_	PART	RB	Polarity=Neg	11	advmod	_	Lem=_|Len=3
11	_	_	NOUN	NNS	Number=Plur	7	acl	_	Lem=trillion|Len=9|SpaceAfter=No
12	_	_	PUNCT	-RRB-	_	11	punct	_	Lem=_|Len=1
13	_	_	ADP	IN	_	14	case	_	Lem=_|Len=2
14	_	_	NOUN	NN	Number=Sing	7	nmod	_	Entity=abstract-4)|Lem=_|Len=4|SpaceAfter=No
15	_	_	PUNCT	,	_	7	punct	_	Lem=_|Len=1
16	_	_	SCONJ	WRB	PronType=Int	19	obl	_	Lem=_|Len=5
17	_	_	AUX	VBP	Mood=Ind|Tense=Pres|VerbForm=Fin	19	aux	_	Lem=be|Len=3
18	_	_	PRON	PRP	Case=Nom|Number=Plur|Person=3|PronType=Prs	19	nsubj	_	Entity=(place-3)|Lem=_|Len=4
19	_	_	VERB	VBG	VerbForm=Ger	0	root	_	Lem=borrow|Len=9
20	_	_	ADP	IN	_	16	case	_	Lem=_|Len=4|SpaceAfter=No
21	_	_	PUNCT	.	_	19	punct	_	Entity=abstract-2)|Lem=_|Len=1

~~~


~~~ conllu
# visual-style 15	bgColor:blue
# visual-style 15	fgColor:white
# visual-style 16	bgColor:blue
# visual-style 16	fgColor:white
# visual-style 16 15 case	color:blue
1	_	_	PRON	PRP$	Person=2|Poss=Yes|PronType=Prs	4	nmod:poss	_	Entity=(object-41(person-5)|Lem=*LOWER*|Len=4
2	_	_	PROPN	NNP	Number=Sing	4	compound	_	Entity=(person-42|Lem=_|Len=5
3	_	_	PROPN	NNP	Number=Sing	2	flat	_	Entity=person-42)|Lem=_|Len=4
4	_	_	NOUN	NN	Number=Sing	7	nsubj	_	Entity=object-41)|Lem=_|Len=4
5	_	_	AUX	VBZ	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	7	cop	_	Lem=be|Len=2|SpaceAfter=No
6	_	_	PART	RB	Polarity=Neg	7	advmod	_	Lem=not|Len=3
7	_	_	ADJ	JJ	Degree=Pos	0	root	_	Lem=_|Len=5
8	_	_	NOUN	NN	Number=Sing	7	xcomp	_	Lem=_|Len=8
9	_	_	ADV	RB	_	7	advmod	_	Lem=_|Len=7
10	_	_	SCONJ	IN	_	12	mark	_	Lem=_|Len=7
11	_	_	PRON	EX	_	12	expl	_	Lem=_|Len=5
12	_	_	VERB	VBP	Mood=Ind|Tense=Pres|VerbForm=Fin	7	advcl	_	Lem=be|Len=3
13	_	_	ADV	RB	_	14	advmod	_	Entity=(object-47|Lem=_|Len=2
14	_	_	ADJ	JJ	Degree=Pos	12	nsubj	_	Lem=_|Len=4
15	_	_	ADP	IN	_	16	case	_	Lem=_|Len=2
16	_	_	PRON	PRP	Case=Acc|Number=Plur|Person=3|PronType=Prs	14	obl	_	Entity=object-47)|Lem=they|Len=4
17	_	_	CCONJ	CC	_	19	cc	_	Lem=_|Len=3
18	_	_	NOUN	NN	Number=Sing	19	nsubj	_	Entity=(person-48)|Lem=_|Len=8
19	_	_	VERB	VBZ	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	12	conj	_	Lem=have|Len=3
20	_	_	PRON	PRP	Case=Acc|Gender=Neut|Number=Sing|Person=3|PronType=Prs	19	obj	_	Entity=(object-47)|Lem=_|Len=2
21	_	_	ADV	RB	_	19	advmod	_	Lem=_|Len=3|SpaceAfter=No
22	_	_	PUNCT	.	_	7	punct	_	Lem=_|Len=1

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 7 case	color:blue
1	_	_	SCONJ	IN	_	3	mark	_	Lem=*LOWER*|Len=2
2	_	_	PRON	PRP	Case=Nom|Person=2|PronType=Prs	3	nsubj	_	Entity=(person-5)|Lem=_|Len=3
3	_	_	VERB	VBP	Mood=Ind|Tense=Pres|VerbForm=Fin	12	advcl	_	Lem=_|Len=3
4	_	_	DET	DT	Definite=Ind|PronType=Art	6	det	_	Entity=(object-41|Lem=_|Len=1
5	_	_	NOUN	NN	Number=Sing	6	compound	_	Lem=_|Len=8
6	_	_	NOUN	NN	Number=Sing	3	obj	_	Lem=_|Len=4
7	_	_	ADP	IN	_	8	case	_	Lem=_|Len=2
8	_	_	PROPN	NNP	Number=Sing	6	nmod	_	Entity=(person-42|Lem=_|Len=5
9	_	_	PROPN	NNP	Number=Sing	8	flat	_	Entity=object-41)person-42)|Lem=_|Len=4|SpaceAfter=No
10	_	_	PUNCT	,	_	3	punct	_	Lem=_|Len=1
11	_	_	PRON	EX	_	12	expl	_	Lem=_|Len=5
12	_	_	VERB	VBZ	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	Lem=be|Len=2
13	_	_	DET	DT	Definite=Ind|PronType=Art	14	det	_	Lem=_|Len=1
14	_	_	NOUN	NN	Number=Sing	12	nsubj	_	Lem=_|Len=6
15	_	_	PRON	PRP	Case=Nom|Gender=Neut|Number=Sing|Person=3|PronType=Prs	18	nsubj	_	Entity=(object-41)|Lem=_|Len=2
16	_	_	AUX	MD	VerbForm=Fin	18	aux	_	Lem=_|Len=5
17	_	_	AUX	VB	VerbForm=Inf	18	cop	_	Lem=_|Len=2
18	_	_	ADJ	JJ	Degree=Pos	14	acl:relcl	_	Lem=_|Len=5
19	_	_	DET	DT	Definite=Ind|PronType=Art	20	det	_	Entity=(abstract-43|Lem=_|Len=1
20	_	_	NOUN	NN	Number=Sing	18	xcomp	_	Lem=_|Len=3
21	_	_	ADP	IN	_	22	case	_	Lem=_|Len=2
22	_	_	NOUN	NN	Number=Sing	20	nmod	_	Entity=abstract-43)|Lem=_|Len=5|SpaceAfter=No
23	_	_	PUNCT	.	_	12	punct	_	Lem=_|Len=1

~~~


