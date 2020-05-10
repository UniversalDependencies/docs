---
layout: base
title:  'Statistics of obj in UD_English-GUMReddit'
udver: '2'
---

## Treebank Statistics: UD_English-GUMReddit: Relations: `obj`

This relation is universal.

845 nodes (5%) are attached to their parents as `obj`.

806 instances of `obj` (95%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.95147928994083.

The following 12 pairs of parts of speech are connected with `obj`: <tt><a href="en_gumreddit-pos-VERB.html">VERB</a></tt>-<tt><a href="en_gumreddit-pos-NOUN.html">NOUN</a></tt> (598; 71% instances), <tt><a href="en_gumreddit-pos-VERB.html">VERB</a></tt>-<tt><a href="en_gumreddit-pos-PRON.html">PRON</a></tt> (199; 24% instances), <tt><a href="en_gumreddit-pos-VERB.html">VERB</a></tt>-<tt><a href="en_gumreddit-pos-PROPN.html">PROPN</a></tt> (13; 2% instances), <tt><a href="en_gumreddit-pos-VERB.html">VERB</a></tt>-<tt><a href="en_gumreddit-pos-ADJ.html">ADJ</a></tt> (9; 1% instances), <tt><a href="en_gumreddit-pos-VERB.html">VERB</a></tt>-<tt><a href="en_gumreddit-pos-NUM.html">NUM</a></tt> (7; 1% instances), <tt><a href="en_gumreddit-pos-VERB.html">VERB</a></tt>-<tt><a href="en_gumreddit-pos-SYM.html">SYM</a></tt> (5; 1% instances), <tt><a href="en_gumreddit-pos-VERB.html">VERB</a></tt>-<tt><a href="en_gumreddit-pos-ADP.html">ADP</a></tt> (3; 0% instances), <tt><a href="en_gumreddit-pos-VERB.html">VERB</a></tt>-<tt><a href="en_gumreddit-pos-INTJ.html">INTJ</a></tt> (3; 0% instances), <tt><a href="en_gumreddit-pos-ADJ.html">ADJ</a></tt>-<tt><a href="en_gumreddit-pos-NOUN.html">NOUN</a></tt> (2; 0% instances), <tt><a href="en_gumreddit-pos-ADJ.html">ADJ</a></tt>-<tt><a href="en_gumreddit-pos-PRON.html">PRON</a></tt> (2; 0% instances), <tt><a href="en_gumreddit-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_gumreddit-pos-NOUN.html">NOUN</a></tt> (2; 0% instances), <tt><a href="en_gumreddit-pos-VERB.html">VERB</a></tt>-<tt><a href="en_gumreddit-pos-ADV.html">ADV</a></tt> (2; 0% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 5 obj	color:blue
1	_	_	SCONJ	WRB	PronType=Int	3	mark	_	Entity=(event-17|Lem=*LOWER*|Len=4
2	_	_	PRON	PRP	Case=Nom|Person=2|PronType=Prs	3	nsubj	_	Entity=(person-5)|Lem=_|Len=3
3	_	_	VERB	VBP	Mood=Ind|Tense=Pres|VerbForm=Fin	9	advcl	_	Lem=_|Len=5
4	_	_	ADJ	JJR	Degree=Cmp	5	amod	_	Entity=(object-18|Lem=_|Len=4
5	_	_	NOUN	NN	Number=Sing	3	obj	_	Entity=object-18)|Lem=_|Len=5|SpaceAfter=No
6	_	_	PUNCT	,	_	3	punct	_	Lem=_|Len=1
7	_	_	PRON	PRP	Case=Nom|Person=2|PronType=Prs	9	nsubj	_	Entity=(person-5)|Lem=_|Len=3
8	_	_	AUX	VBP	Mood=Ind|Tense=Pres|VerbForm=Fin	9	aux	_	Lem=be|Len=3
9	_	_	VERB	VBG	Tense=Pres|VerbForm=Part	0	root	_	Lem=devalue|Len=9
10	_	_	DET	DT	Definite=Def|PronType=Art	11	det	_	Entity=(abstract-19|Lem=_|Len=3
11	_	_	NOUN	NN	Number=Sing	9	obj	_	Lem=_|Len=4
12	_	_	ADP	IN	_	14	case	_	Lem=_|Len=2
13	_	_	DET	DT	Definite=Def|PronType=Art	14	det	_	Entity=(abstract-20|Lem=_|Len=3
14	_	_	NOUN	NN	Number=Sing	11	nmod	_	Entity=abstract-19)abstract-20)|Lem=_|Len=8
15	_	_	PRON	WDT	PronType=Rel	17	nsubj	_	Lem=_|Len=4
16	_	_	AUX	VBZ	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	17	cop	_	Lem=be|Len=2
17	_	_	ADV	RB	_	14	acl:relcl	_	Lem=_|Len=7
18	_	_	ADP	IN	_	19	case	_	Lem=_|Len=2
19	_	_	NOUN	NN	Number=Sing	17	nmod	_	Entity=(abstract-21)|Lem=_|Len=11|SpaceAfter=No
20	_	_	PUNCT	.	_	9	punct	_	Entity=event-17)|Lem=_|Len=1

~~~


~~~ conllu
# visual-style 20	bgColor:blue
# visual-style 20	fgColor:white
# visual-style 19	bgColor:blue
# visual-style 19	fgColor:white
# visual-style 19 20 obj	color:blue
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
# visual-style 18	bgColor:blue
# visual-style 18	fgColor:white
# visual-style 17	bgColor:blue
# visual-style 17	fgColor:white
# visual-style 17 18 obj	color:blue
1	_	_	DET	DT	Definite=Def|PronType=Art	3	det	_	Entity=(abstract-34|Lem=*LOWER*|Len=3
2	_	_	ADJ	JJ	Degree=Pos	3	amod	_	Lem=_|Len=4
3	_	_	NOUN	NN	Number=Sing	10	nsubj	_	Entity=abstract-34)|Lem=_|Len=6
4	_	_	SCONJ	IN	_	6	mark	_	Lem=_|Len=4
5	_	_	PRON	DT	Number=Sing|PronType=Dem	6	nsubj	_	Entity=(event-28)|Lem=_|Len=4
6	_	_	VERB	VBZ	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	3	acl:relcl	_	Lem=result|Len=7
7	_	_	ADP	IN	_	8	case	_	Lem=_|Len=2
8	_	_	NOUN	NN	Number=Sing	6	obl	_	Entity=(abstract-35|Lem=_|Len=8
9	_	_	ADJ	JJ	Degree=Pos	8	amod	_	Entity=abstract-35)|Lem=_|Len=9
10	_	_	VERB	VBZ	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	Lem=be|Len=2
11	_	_	SCONJ	IN	_	17	mark	_	Lem=_|Len=7
12	_	_	NOUN	NNS	Number=Plur	17	nsubj	_	Entity=(person-36|Lem=_|Len=6
13	_	_	ADV	RB	_	16	advmod	_	Lem=_|Len=3
14	_	_	ADP	IN	_	16	case	_	Lem=_|Len=4
15	_	_	DET	DT	Definite=Def|PronType=Art	16	det	_	Entity=(place-37|Lem=_|Len=3
16	_	_	NOUN	NN	Number=Sing	12	nmod	_	Entity=person-36)place-37)|Lem=_|Len=5
17	_	_	VERB	VBP	Mood=Ind|Tense=Pres|VerbForm=Fin	10	ccomp	_	Lem=_|Len=5
18	_	_	PROPN	NNP	Number=Sing	17	obj	_	Entity=(abstract-27)|Lem=_|Len=3
19	_	_	CCONJ	CC	_	23	cc	_	Lem=_|Len=3
20	_	_	DET	DT	Number=Sing|PronType=Dem	22	det	_	Entity=(object-38|Lem=_|Len=4
21	_	_	NOUN	NN	Number=Sing	22	compound	_	Lem=_|Len=5
22	_	_	NOUN	NN	Number=Sing	23	nsubj	_	Entity=object-38)|Lem=_|Len=8
23	_	_	VERB	VBZ	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	17	conj	_	Lem=represent|Len=10
24	_	_	ADJ	JJ	Degree=Pos	25	amod	_	Entity=(abstract-39|Lem=_|Len=9
25	_	_	NOUN	NN	Number=Sing	23	obj	_	Entity=abstract-39)|Lem=_|Len=5|SpaceAfter=No
26	_	_	PUNCT	,	_	28	punct	_	Lem=_|Len=1
27	_	_	ADJ	JJ	Degree=Pos	28	amod	_	Entity=(abstract-40|Lem=_|Len=3
28	_	_	NOUN	NNS	Number=Plur	25	conj	_	Entity=abstract-40)|Lem=asset|Len=6|SpaceAfter=No
29	_	_	PUNCT	,	_	30	punct	_	Lem=_|Len=1
30	_	_	X	FW	_	25	conj	_	Lem=_|Len=4

~~~


