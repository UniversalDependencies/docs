---
layout: base
title:  'Statistics of dep in UD_English-GUMReddit'
udver: '2'
---

## Treebank Statistics: UD_English-GUMReddit: Relations: `dep`

This relation is universal.

31 nodes (0%) are attached to their parents as `dep`.

25 instances of `dep` (81%) are right-to-left (child precedes parent).
Average distance between parent and child is 3.48387096774194.

The following 15 pairs of parts of speech are connected with `dep`: <tt><a href="en_gumreddit-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_gumreddit-pos-SYM.html">SYM</a></tt> (5; 16% instances), <tt><a href="en_gumreddit-pos-VERB.html">VERB</a></tt>-<tt><a href="en_gumreddit-pos-X.html">X</a></tt> (5; 16% instances), <tt><a href="en_gumreddit-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_gumreddit-pos-NOUN.html">NOUN</a></tt> (3; 10% instances), <tt><a href="en_gumreddit-pos-VERB.html">VERB</a></tt>-<tt><a href="en_gumreddit-pos-NUM.html">NUM</a></tt> (3; 10% instances), <tt><a href="en_gumreddit-pos-VERB.html">VERB</a></tt>-<tt><a href="en_gumreddit-pos-SYM.html">SYM</a></tt> (3; 10% instances), <tt><a href="en_gumreddit-pos-ADJ.html">ADJ</a></tt>-<tt><a href="en_gumreddit-pos-NUM.html">NUM</a></tt> (2; 6% instances), <tt><a href="en_gumreddit-pos-PRON.html">PRON</a></tt>-<tt><a href="en_gumreddit-pos-PRON.html">PRON</a></tt> (2; 6% instances), <tt><a href="en_gumreddit-pos-ADJ.html">ADJ</a></tt>-<tt><a href="en_gumreddit-pos-ADV.html">ADV</a></tt> (1; 3% instances), <tt><a href="en_gumreddit-pos-ADJ.html">ADJ</a></tt>-<tt><a href="en_gumreddit-pos-SYM.html">SYM</a></tt> (1; 3% instances), <tt><a href="en_gumreddit-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_gumreddit-pos-CCONJ.html">CCONJ</a></tt> (1; 3% instances), <tt><a href="en_gumreddit-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_gumreddit-pos-NUM.html">NUM</a></tt> (1; 3% instances), <tt><a href="en_gumreddit-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_gumreddit-pos-PRON.html">PRON</a></tt> (1; 3% instances), <tt><a href="en_gumreddit-pos-PART.html">PART</a></tt>-<tt><a href="en_gumreddit-pos-VERB.html">VERB</a></tt> (1; 3% instances), <tt><a href="en_gumreddit-pos-VERB.html">VERB</a></tt>-<tt><a href="en_gumreddit-pos-ADV.html">ADV</a></tt> (1; 3% instances), <tt><a href="en_gumreddit-pos-VERB.html">VERB</a></tt>-<tt><a href="en_gumreddit-pos-NOUN.html">NOUN</a></tt> (1; 3% instances).


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 13 10 dep	color:blue
1	_	_	PRON	PRP	Case=Nom|Number=Sing|Person=1|PronType=Prs	2	nsubj	_	Entity=(person-47)|Lem=_|Len=1
2	_	_	VERB	VBP	Mood=Ind|Tense=Pres|VerbForm=Fin	0	root	_	Lem=_|Len=5
3	_	_	DET	DT	Definite=Def|PronType=Art	5	det	_	Entity=(abstract-48|Lem=_|Len=3
4	_	_	ADJ	JJ	Degree=Pos	5	amod	_	Lem=_|Len=3
5	_	_	NOUN	NN	Number=Sing	8	nsubj	_	Entity=abstract-48)|Lem=_|Len=5
6	_	_	AUX	VBZ	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	8	aux	_	Lem=be|Len=2
7	_	_	NOUN	NNS	Number=Plur	8	nsubj	_	Entity=(person-49)|Lem=_|Len=6
8	_	_	VERB	VBP	Mood=Ind|Tense=Pres|VerbForm=Fin	2	ccomp	_	Lem=_|Len=6
9	_	_	NOUN	NN	Number=Sing	13	nsubj	_	Entity=(abstract-50(person-51)|Lem=_|Len=9
10	_	_	SYM	SYM	_	13	dep	_	Lem=_|Len=1
11	_	_	ADJ	JJ	Degree=Pos	13	amod	_	Entity=(abstract-52|Lem=_|Len=4
12	_	_	NOUN	NNS	Number=Plur	13	compound	_	Entity=(person-53)|Lem=_|Len=6
13	_	_	NOUN	NNS	Number=Plur	8	ccomp	_	Entity=abstract-50)abstract-52)|Lem=skill|Len=6|SpaceAfter=No
14	_	_	PUNCT	.	_	2	punct	_	Lem=_|Len=1

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 1 dep	color:blue
1	_	_	X	LS	_	3	dep	_	Lem=_|Len=2
2	_	_	PRON	PRP	Case=Nom|Gender=Masc|Number=Sing|Person=3|PronType=Prs	3	nsubj	_	Entity=(person-43)|Lem=*LOWER*|Len=2
3	_	_	VERB	VBZ	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	Lem=refer|Len=6
4	_	_	PART	TO	_	5	mark	_	Lem=_|Len=2
5	_	_	VERB	VBG	VerbForm=Ger	3	advcl	_	Lem=dig|Len=7
6	_	_	DET	DT	Definite=Ind|PronType=Art	7	det	_	Entity=(object-45|Lem=_|Len=1
7	_	_	NOUN	NN	Number=Sing	5	obj	_	Entity=object-45)|Lem=_|Len=6
8	_	_	ADP	IN	_	10	case	_	Lem=_|Len=5
9	_	_	DET	DT	Definite=Def|PronType=Art	10	det	_	Entity=(place-3|Lem=_|Len=3
10	_	_	NOUN	NN	Number=Sing	5	obl	_	Entity=place-3)|Lem=_|Len=4

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 1 dep	color:blue
1	_	_	NOUN	NN	Number=Sing	4	dep	_	Entity=(abstract-100)|Lem=_|Len=2
2	_	_	PUNCT	:	_	1	punct	_	Lem=_|Len=1
3	_	_	ADJ	JJ	Degree=Pos	4	amod	_	Entity=(abstract-101|Lem=*LOWER*|Len=4
4	_	_	NOUN	NN	Number=Sing	0	root	_	Lem=_|Len=8
5	_	_	ADP	IN	_	6	case	_	Lem=_|Len=4
6	_	_	NOUN	NN	Number=Sing	4	nmod	_	Entity=(person-8)abstract-101)|Lem=_|Len=2|SpaceAfter=No
7	_	_	PUNCT	.	_	4	punct	_	Lem=_|Len=1

~~~


