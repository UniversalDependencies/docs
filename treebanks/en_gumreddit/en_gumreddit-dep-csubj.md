---
layout: base
title:  'Statistics of csubj in UD_English-GUMReddit'
udver: '2'
---

## Treebank Statistics: UD_English-GUMReddit: Relations: `csubj`

This relation is universal.
There are 1 language-specific subtypes of `csubj`: <tt><a href="en_gumreddit-dep-csubj-pass.html">csubj:pass</a></tt>.

20 nodes (0%) are attached to their parents as `csubj`.

17 instances of `csubj` (85%) are right-to-left (child precedes parent).
Average distance between parent and child is 8.3.

The following 8 pairs of parts of speech are connected with `csubj`: <tt><a href="en_gumreddit-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_gumreddit-pos-VERB.html">VERB</a></tt> (6; 30% instances), <tt><a href="en_gumreddit-pos-VERB.html">VERB</a></tt>-<tt><a href="en_gumreddit-pos-VERB.html">VERB</a></tt> (5; 25% instances), <tt><a href="en_gumreddit-pos-ADJ.html">ADJ</a></tt>-<tt><a href="en_gumreddit-pos-VERB.html">VERB</a></tt> (4; 20% instances), <tt><a href="en_gumreddit-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_gumreddit-pos-ADJ.html">ADJ</a></tt> (1; 5% instances), <tt><a href="en_gumreddit-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_gumreddit-pos-NOUN.html">NOUN</a></tt> (1; 5% instances), <tt><a href="en_gumreddit-pos-PRON.html">PRON</a></tt>-<tt><a href="en_gumreddit-pos-NOUN.html">NOUN</a></tt> (1; 5% instances), <tt><a href="en_gumreddit-pos-PRON.html">PRON</a></tt>-<tt><a href="en_gumreddit-pos-VERB.html">VERB</a></tt> (1; 5% instances), <tt><a href="en_gumreddit-pos-VERB.html">VERB</a></tt>-<tt><a href="en_gumreddit-pos-NOUN.html">NOUN</a></tt> (1; 5% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 14 5 csubj	color:blue
1	_	_	PRON	PRP	Case=Nom|Gender=Neut|Number=Sing|Person=3|PronType=Prs	14	nsubj	_	Entity=(abstract-16)|Lem=*LOWER*|Len=2|SpaceAfter=No
2	_	_	AUX	VBZ	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	14	cop	_	Lem=be|Len=2
3	_	_	ADV	RB	_	14	advmod	_	Lem=_|Len=4
4	_	_	SCONJ	IN	_	14	mark	_	Lem=_|Len=4
5	_	_	VERB	VBG	VerbForm=Ger	14	csubj	_	Entity=(abstract-16|Lem=get|Len=7
6	_	_	DET	DT	_	7	det	_	Entity=(animal-17|Lem=_|Len=3
7	_	_	NOUN	NN	Number=Sing	5	obj	_	Lem=_|Len=7
8	_	_	ADP	IN	_	9	case	_	Lem=_|Len=2
9	_	_	NOUN	NN	Number=Sing	7	nmod	_	Entity=(abstract-18)animal-17)|Lem=_|Len=9
10	_	_	PART	TO	_	11	mark	_	Lem=_|Len=2
11	_	_	VERB	VB	VerbForm=Inf	5	xcomp	_	Lem=_|Len=9
12	_	_	AUX	VBZ	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	14	cop	_	Lem=be|Len=2
13	_	_	DET	DT	Definite=Ind|PronType=Art	14	det	_	Entity=(abstract-19|Lem=_|Len=1
14	_	_	NOUN	NN	Number=Sing	0	root	_	Entity=abstract-16)abstract-19)|Lem=_|Len=9|SpaceAfter=No
15	_	_	PUNCT	,	_	28	punct	_	Lem=_|Len=1
16	_	_	ADV	RB	_	28	advmod	_	Lem=_|Len=2
17	_	_	PRON	DT	Number=Sing|PronType=Dem	28	nsubj	_	Entity=(abstract-16)|Lem=_|Len=4|SpaceAfter=No
18	_	_	AUX	VBZ	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	28	cop	_	Lem=be|Len=2
19	_	_	SCONJ	WRB	PronType=Int	28	mark	_	Lem=_|Len=3
20	_	_	VERB	VBG	VerbForm=Ger	28	csubj	_	Entity=(abstract-20|Lem=get|Len=7
21	_	_	NOUN	NNS	Number=Plur	20	obj	_	Entity=(animal-21|Lem=panda|Len=6
22	_	_	ADP	IN	_	23	case	_	Lem=_|Len=2
23	_	_	NOUN	NN	Number=Sing	21	nmod	_	Entity=(abstract-18)animal-21)|Lem=_|Len=9
24	_	_	PART	TO	_	25	mark	_	Lem=_|Len=2
25	_	_	VERB	VB	VerbForm=Inf	20	xcomp	_	Entity=abstract-20)|Lem=_|Len=9
26	_	_	AUX	VBZ	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	28	cop	_	Lem=be|Len=2
27	_	_	DET	DT	Definite=Ind|PronType=Art	28	det	_	Entity=(abstract-20|Lem=_|Len=1
28	_	_	NOUN	NN	Number=Sing	14	parataxis	_	Entity=abstract-20)|Lem=_|Len=9
29	_	_	ADV	RB	_	28	advmod	_	Lem=_|Len=3|SpaceAfter=No
30	_	_	PUNCT	.	_	14	punct	_	Lem=_|Len=1

~~~


~~~ conllu
# visual-style 20	bgColor:blue
# visual-style 20	fgColor:white
# visual-style 26	bgColor:blue
# visual-style 26	fgColor:white
# visual-style 26 20 csubj	color:blue
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
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 16	bgColor:blue
# visual-style 16	fgColor:white
# visual-style 16 9 csubj	color:blue
1	_	_	PRON	DT	Number=Sing|PronType=Dem	2	nsubj	_	Entity=(event-87)|Lem=*LOWER*|Len=4
2	_	_	VERB	VBZ	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	Lem=have|Len=3
3	_	_	PART	TO	_	4	mark	_	Lem=_|Len=2
4	_	_	VERB	VB	VerbForm=Inf	2	xcomp	_	Lem=_|Len=2
5	_	_	ADP	IN	_	7	case	_	Lem=_|Len=4
6	_	_	DET	DT	Definite=Def|PronType=Art	7	det	_	Entity=(abstract-90|Lem=_|Len=3
7	_	_	NOUN	NN	Number=Sing	4	obl	_	Lem=_|Len=4
8	_	_	SCONJ	IN	_	9	mark	_	Lem=_|Len=4
9	_	_	VERB	VBG	VerbForm=Ger	16	csubj	_	Lem=raise|Len=7
10	_	_	PRON	PRP$	Number=Plur|Person=1|Poss=Yes|PronType=Prs	11	nmod:poss	_	Entity=(person-91(person-2)|Lem=_|Len=3
11	_	_	NOUN	NN	Number=Sing	9	obj	_	Entity=person-91)|Lem=_|Len=9
12	_	_	AUX	VBZ	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	16	cop	_	Lem=be|Len=2
13	_	_	NOUN	NN	Number=Sing	16	compound	_	Entity=(abstract-92)|Lem=_|Len=5
14	_	_	CCONJ	CC	_	15	cc	_	Lem=_|Len=3
15	_	_	NOUN	NN	Number=Sing	13	conj	_	Entity=(abstract-93)|Lem=_|Len=8
16	_	_	ADJ	JJ	Degree=Pos	7	ccomp	_	Entity=abstract-90)|Lem=_|Len=9|SpaceAfter=No
17	_	_	PUNCT	.	_	2	punct	_	Lem=_|Len=1

~~~


