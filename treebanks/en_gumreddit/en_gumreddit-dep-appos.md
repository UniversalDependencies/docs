---
layout: base
title:  'Statistics of appos in UD_English-GUMReddit'
udver: '2'
---

## Treebank Statistics: UD_English-GUMReddit: Relations: `appos`

This relation is universal.

38 nodes (0%) are attached to their parents as `appos`.

38 instances of `appos` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 4.5.

The following 11 pairs of parts of speech are connected with `appos`: <tt><a href="en_gumreddit-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_gumreddit-pos-NOUN.html">NOUN</a></tt> (20; 53% instances), <tt><a href="en_gumreddit-pos-PRON.html">PRON</a></tt>-<tt><a href="en_gumreddit-pos-NOUN.html">NOUN</a></tt> (6; 16% instances), <tt><a href="en_gumreddit-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_gumreddit-pos-PROPN.html">PROPN</a></tt> (3; 8% instances), <tt><a href="en_gumreddit-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_gumreddit-pos-VERB.html">VERB</a></tt> (2; 5% instances), <tt><a href="en_gumreddit-pos-ADJ.html">ADJ</a></tt>-<tt><a href="en_gumreddit-pos-PROPN.html">PROPN</a></tt> (1; 3% instances), <tt><a href="en_gumreddit-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_gumreddit-pos-NUM.html">NUM</a></tt> (1; 3% instances), <tt><a href="en_gumreddit-pos-PRON.html">PRON</a></tt>-<tt><a href="en_gumreddit-pos-PROPN.html">PROPN</a></tt> (1; 3% instances), <tt><a href="en_gumreddit-pos-PROPN.html">PROPN</a></tt>-<tt><a href="en_gumreddit-pos-NOUN.html">NOUN</a></tt> (1; 3% instances), <tt><a href="en_gumreddit-pos-PROPN.html">PROPN</a></tt>-<tt><a href="en_gumreddit-pos-PROPN.html">PROPN</a></tt> (1; 3% instances), <tt><a href="en_gumreddit-pos-SYM.html">SYM</a></tt>-<tt><a href="en_gumreddit-pos-NOUN.html">NOUN</a></tt> (1; 3% instances), <tt><a href="en_gumreddit-pos-X.html">X</a></tt>-<tt><a href="en_gumreddit-pos-NUM.html">NUM</a></tt> (1; 3% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 7 appos	color:blue
1	_	_	VERB	VB	VerbForm=Inf	0	root	_	Lem=*LOWER*|Len=5|SpaceAfter=No
2	_	_	PUNCT	,	_	4	punct	_	Lem=_|Len=1
3	_	_	NOUN	NN	Number=Sing	4	compound	_	Entity=(object-16|Lem=_|Len=4
4	_	_	NOUN	NN	Number=Sing	1	nsubj	_	Entity=object-16)|Lem=_|Len=8|SpaceAfter=No
5	_	_	PUNCT	,	_	7	punct	_	Lem=_|Len=1
6	_	_	DET	DT	Definite=Ind|PronType=Art	7	det	_	Entity=(object-16|Lem=_|Len=1
7	_	_	NOUN	NN	Number=Sing	4	appos	_	Lem=_|Len=5
8	_	_	ADP	IN	_	9	case	_	Lem=_|Len=2
9	_	_	NOUN	NN	Number=Sing	7	nmod	_	Entity=object-16)|Lem=_|Len=5
10	_	_	PRON	WDT	PronType=Rel	11	nsubj	_	Lem=_|Len=4
11	_	_	VERB	VBZ	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	7	acl:relcl	_	Lem=mean|Len=5
12	_	_	NOUN	NN	Number=Sing|Polarity=Neg	11	obj	_	Entity=(abstract-91|Lem=_|Len=7
13	_	_	SCONJ	IN	_	17	mark	_	Lem=_|Len=6
14	_	_	PRON	WP	PronType=Int	19	obj	_	Lem=_|Len=4
15	_	_	DET	DT	Definite=Def|PronType=Art	16	det	_	Entity=(organization-23|Lem=_|Len=3
16	_	_	NOUN	NN	Number=Sing	17	nsubj	_	Entity=organization-23)|Lem=_|Len=5|Typo=Yes
17	_	_	VERB	VBZ	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	12	acl	_	Lem=say|Len=4
18	_	_	PRON	PRP	Case=Nom|Gender=Neut|Number=Sing|Person=3|PronType=Prs	19	nsubj	_	Entity=(object-16)|Lem=_|Len=2
19	_	_	VERB	VBZ	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	17	ccomp	_	Entity=abstract-91)|Lem=mean|Len=5|SpaceAfter=No
20	_	_	PUNCT	.	_	1	punct	_	Lem=_|Len=1

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 8 appos	color:blue
1	_	_	PRON	PRP	Case=Nom|Number=Sing|Person=1|PronType=Prs	3	nsubj	_	Entity=(person-78)|Lem=_|Len=1
2	_	_	ADV	RB	_	3	advmod	_	Lem=_|Len=6
3	_	_	VERB	VBD	Mood=Ind|Tense=Past|VerbForm=Fin	0	root	_	Lem=appreciate|Len=11
4	_	_	PRON	PDT	_	6	det:predet	_	Entity=(abstract-87|Lem=_|Len=3
5	_	_	DET	DT	Definite=Def|PronType=Art	6	det	_	Lem=_|Len=3
6	_	_	NOUN	NN	Number=Sing	3	obj	_	Entity=abstract-87)|Lem=_|Len=7
7	_	_	PRON	PRP	Case=Nom|Person=2|PronType=Prs	9	nsubj	_	Entity=(person-88|Lem=_|Len=3
8	_	_	NOUN	NNS	Number=Plur	7	appos	_	Entity=person-88)|Lem=guy|Len=4
9	_	_	VERB	VBD	Mood=Ind|Tense=Past|VerbForm=Fin	6	acl:relcl	_	Lem=give|Len=4
10	_	_	PRON	PRP	Case=Acc|Number=Sing|Person=1|PronType=Prs	9	obj	_	Entity=(person-78)|Lem=I|Len=2|SpaceAfter=No
11	_	_	PUNCT	,	_	14	punct	_	Lem=_|Len=1
12	_	_	PRON	PRP	Case=Nom|Number=Sing|Person=1|PronType=Prs	14	nsubj	_	Entity=(person-78)|Lem=_|Len=1
13	_	_	AUX	VBD	Mood=Ind|Number=Sing|Person=1|Tense=Past|VerbForm=Fin	14	aux	_	Lem=be|Len=3
14	_	_	VERB	VBG	Tense=Pres|VerbForm=Part	3	parataxis	_	Lem=get|Len=7
15	_	_	ADJ	JJ	Degree=Pos	14	xcomp	_	Lem=bore|Len=5
16	_	_	ADP	IN	_	18	case	_	Lem=_|Len=4
17	_	_	PRON	PRP$	Number=Sing|Person=1|Poss=Yes|PronType=Prs	18	nmod:poss	_	Entity=(abstract-89(person-78)|Lem=_|Len=2
18	_	_	NOUN	NN	Number=Sing	15	obl	_	Entity=abstract-89)|Lem=_|Len=4
19	_	_	CCONJ	CC	_	26	cc	_	Lem=_|Len=3
20	_	_	VERB	VBG	VerbForm=Ger	26	csubj	_	Lem=share|Len=7
21	_	_	DET	DT	Definite=Def|PronType=Art	22	det	_	Entity=(abstract-90|Lem=_|Len=3
22	_	_	NOUN	NNS	Number=Plur	20	obj	_	Lem=highlight|Len=10
23	_	_	ADP	IN	_	25	case	_	Lem=_|Len=2
24	_	_	PRON	PRP	_	25	nmod:poss	_	Entity=(abstract-91(abstract-89)|Lem=it|Len=4|Typo=Yes
25	_	_	NOUN	NN	Number=Sing	22	nmod	_	Entity=abstract-90)abstract-91)|Lem=_|Len=7
26	_	_	VERB	VBD	Mood=Ind|Tense=Past|VerbForm=Fin	14	conj	_	Lem=make|Len=4
27	_	_	PRON	PRP	Case=Acc|Gender=Neut|Number=Sing|Person=3|PronType=Prs	26	obj	_	Entity=(abstract-89)|Lem=_|Len=2
28	_	_	ADJ	JJ	Degree=Pos	26	xcomp	_	Lem=_|Len=3
29	_	_	ADV	RB	_	28	advmod	_	Lem=_|Len=5
30	_	_	ADP	IN	_	32	case	_	Lem=_|Len=3
31	_	_	DET	DT	Definite=Ind|PronType=Art	32	det	_	Entity=(time-92|Lem=_|Len=1
32	_	_	NOUN	NN	Number=Sing	26	obl	_	Entity=time-92)|Lem=_|Len=4|SpaceAfter=No
33	_	_	PUNCT	.	_	3	punct	_	Lem=_|Len=1

~~~


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 11 appos	color:blue
1	_	_	PRON	DT	Number=Sing|PronType=Dem	4	nsubj	_	Entity=(abstract-56)|Lem=_|Len=4
2	_	_	AUX	VBZ	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	4	cop	_	Lem=be|Len=2
3	_	_	DET	DT	Definite=Def|PronType=Art	4	det	_	Entity=(abstract-56|Lem=_|Len=3
4	_	_	NOUN	NN	Number=Sing	0	root	_	Lem=_|Len=4
5	_	_	ADP	IN	_	7	case	_	Lem=_|Len=4
6	_	_	DET	DT	Definite=Def|PronType=Art	7	det	_	Entity=(abstract-57|Lem=_|Len=3
7	_	_	NOUN	NN	Number=Sing	4	nmod	_	Lem=_|Len=7
8	_	_	ADP	IN	_	10	case	_	Lem=_|Len=2
9	_	_	DET	DT	Definite=Def|PronType=Art	10	det	_	Entity=(abstract-58|Lem=_|Len=3
10	_	_	NOUN	NN	Number=Sing	7	nmod	_	Entity=abstract-58)|Lem=_|Len=5
11	_	_	PROPN	NNP	Number=Sing	10	appos	_	Entity=(abstract-58)abstract-56)abstract-57)|Lem=_|Len=9|SpaceAfter=No
12	_	_	PUNCT	.	_	4	punct	_	Lem=_|Len=1

~~~


