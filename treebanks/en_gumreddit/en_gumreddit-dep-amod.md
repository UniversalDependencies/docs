---
layout: base
title:  'Statistics of amod in UD_English-GUMReddit'
udver: '2'
---

## Treebank Statistics: UD_English-GUMReddit: Relations: `amod`

This relation is universal.

644 nodes (4%) are attached to their parents as `amod`.

633 instances of `amod` (98%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.40527950310559.

The following 13 pairs of parts of speech are connected with `amod`: <tt><a href="en_gumreddit-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_gumreddit-pos-ADJ.html">ADJ</a></tt> (602; 93% instances), <tt><a href="en_gumreddit-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_gumreddit-pos-VERB.html">VERB</a></tt> (21; 3% instances), <tt><a href="en_gumreddit-pos-PROPN.html">PROPN</a></tt>-<tt><a href="en_gumreddit-pos-PROPN.html">PROPN</a></tt> (6; 1% instances), <tt><a href="en_gumreddit-pos-ADJ.html">ADJ</a></tt>-<tt><a href="en_gumreddit-pos-ADJ.html">ADJ</a></tt> (3; 0% instances), <tt><a href="en_gumreddit-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_gumreddit-pos-NOUN.html">NOUN</a></tt> (2; 0% instances), <tt><a href="en_gumreddit-pos-NUM.html">NUM</a></tt>-<tt><a href="en_gumreddit-pos-ADJ.html">ADJ</a></tt> (2; 0% instances), <tt><a href="en_gumreddit-pos-VERB.html">VERB</a></tt>-<tt><a href="en_gumreddit-pos-ADJ.html">ADJ</a></tt> (2; 0% instances), <tt><a href="en_gumreddit-pos-ADJ.html">ADJ</a></tt>-<tt><a href="en_gumreddit-pos-ADV.html">ADV</a></tt> (1; 0% instances), <tt><a href="en_gumreddit-pos-ADV.html">ADV</a></tt>-<tt><a href="en_gumreddit-pos-ADV.html">ADV</a></tt> (1; 0% instances), <tt><a href="en_gumreddit-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_gumreddit-pos-ADV.html">ADV</a></tt> (1; 0% instances), <tt><a href="en_gumreddit-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_gumreddit-pos-INTJ.html">INTJ</a></tt> (1; 0% instances), <tt><a href="en_gumreddit-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_gumreddit-pos-PRON.html">PRON</a></tt> (1; 0% instances), <tt><a href="en_gumreddit-pos-PROPN.html">PROPN</a></tt>-<tt><a href="en_gumreddit-pos-ADJ.html">ADJ</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 amod	color:blue
1	_	_	SCONJ	IN	_	7	mark	_	Discourse=background:2->5|Entity=(abstract-2|Lem=*LOWER*|Len=2
2	_	_	DET	DT	_	4	det	_	Entity=(place-3|Lem=_|Len=5
3	_	_	ADJ	JJ	Degree=Pos	4	amod	_	Lem=_|Len=5
4	_	_	NOUN	NN	Number=Sing	7	nsubj	_	Entity=place-3)|Lem=_|Len=7
5	_	_	AUX	VBZ	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	7	cop	_	Lem=be|Len=2
6	_	_	ADP	IN	_	7	case	_	Lem=_|Len=2
7	_	_	NOUN	NNS	Number=Plur	19	advcl	_	Entity=(abstract-4|Lem=billion|Len=8
8	_	_	PUNCT	-LRB-	_	11	punct	_	Discourse=antithesis:3->2|Lem=_|Len=1|SpaceAfter=No
9	_	_	SCONJ	IN	_	11	mark	_	Lem=_|Len=2
10	_	_	PART	RB	Polarity=Neg	11	advmod	_	Lem=_|Len=3
11	_	_	NOUN	NNS	Number=Plur	7	acl	_	Lem=trillion|Len=9|SpaceAfter=No
12	_	_	PUNCT	-RRB-	_	11	punct	_	Lem=_|Len=1
13	_	_	ADP	IN	_	14	case	_	Discourse=same-unit:4->2|Lem=_|Len=2
14	_	_	NOUN	NN	Number=Sing	7	nmod	_	Entity=abstract-4)|Lem=_|Len=4|SpaceAfter=No
15	_	_	PUNCT	,	_	7	punct	_	Lem=_|Len=1
16	_	_	SCONJ	WRB	PronType=Int	19	obl	_	Discourse=question:5->6|Lem=_|Len=5
17	_	_	AUX	VBP	Mood=Ind|Tense=Pres|VerbForm=Fin	19	aux	_	Lem=be|Len=3
18	_	_	PRON	PRP	Case=Nom|Number=Plur|Person=3|PronType=Prs	19	nsubj	_	Entity=(place-3)|Lem=_|Len=4
19	_	_	VERB	VBG	VerbForm=Ger	0	root	_	Lem=borrow|Len=9
20	_	_	ADP	IN	_	16	case	_	Lem=_|Len=4|SpaceAfter=No
21	_	_	PUNCT	.	_	19	punct	_	Entity=abstract-2)|Lem=_|Len=1

~~~


~~~ conllu
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 15	bgColor:blue
# visual-style 15	fgColor:white
# visual-style 15 14 amod	color:blue
1	_	_	VERB	VB	Mood=Imp|VerbForm=Fin	0	root	_	Discourse=justify:115->114|Lem=*LOWER*|Len=6
2	_	_	SCONJ	IN	_	10	mark	_	Lem=_|Len=4
3	_	_	PROPN	NNP	Number=Sing	10	nsubj	_	Entity=(abstract-98|Lem=_|Len=4
4	_	_	PROPN	NNP	Number=Sing	3	flat	_	Entity=abstract-98)|Lem=_|Len=4
5	_	_	ADV	RB	_	10	advmod	_	Lem=_|Len=4
6	_	_	AUX	VBD	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	10	cop	_	Lem=be|Len=3|SpaceAfter=No
7	_	_	PART	RB	Polarity=Neg	10	advmod	_	Lem=not|Len=3
8	_	_	DET	DT	Definite=Ind|PronType=Art	10	det	_	Entity=(abstract-99|Lem=_|Len=1
9	_	_	ADJ	JJ	Degree=Pos	10	amod	_	Lem=_|Len=5
10	_	_	NOUN	NN	Number=Sing	1	ccomp	_	Entity=abstract-99)|Lem=_|Len=8
11	_	_	ADP	IN	_	15	case	_	Lem=_|Len=2
12	_	_	PART	TO	_	11	fixed	_	Lem=_|Len=2
13	_	_	DET	DT	Definite=Def|PronType=Art	15	det	_	Entity=(substance-100|Lem=_|Len=3
14	_	_	VERB	VBN	Tense=Past|VerbForm=Part	15	amod	_	Lem=feature|Len=8
15	_	_	NOUN	NN	Number=Sing	10	nmod	_	Entity=substance-100)|Lem=_|Len=10|SpaceAfter=No
16	_	_	PUNCT	.	_	1	punct	_	Lem=_|Len=1

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 6 amod	color:blue
1	_	_	DET	DT	Definite=Ind|PronType=Art	3	det	_	Discourse=elaboration:74->72|Entity=(place-69|Lem=*LOWER*|Len=1
2	_	_	ADJ	JJ	Degree=Pos	3	amod	_	Lem=_|Len=12
3	_	_	NOUN	NN	Number=Sing	0	root	_	Entity=place-69)|Lem=_|Len=9
4	_	_	ADP	IN	_	7	case	_	Lem=_|Len=4
5	_	_	DET	DT	Definite=Def|PronType=Art	7	det	_	Entity=(place-70|Lem=_|Len=3
6	_	_	PROPN	NNP	Number=Sing	7	amod	_	Lem=_|Len=7
7	_	_	PROPN	NNP	Number=Sing	3	nmod	_	Entity=place-70)|Lem=_|Len=3|SpaceAfter=No
8	_	_	PUNCT	.	_	3	punct	_	Lem=_|Len=1

~~~


