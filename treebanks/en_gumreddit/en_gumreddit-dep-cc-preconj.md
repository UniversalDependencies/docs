---
layout: base
title:  'Statistics of cc:preconj in UD_English-GUMReddit'
udver: '2'
---

## Treebank Statistics: UD_English-GUMReddit: Relations: `cc:preconj`

This relation is a language-specific subtype of <tt><a href="en_gumreddit-dep-cc.html">cc</a></tt>.

5 nodes (0%) are attached to their parents as `cc:preconj`.

5 instances of `cc:preconj` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.2.

The following 4 pairs of parts of speech are connected with `cc:preconj`: <tt><a href="en_gumreddit-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_gumreddit-pos-CCONJ.html">CCONJ</a></tt> (2; 40% instances), <tt><a href="en_gumreddit-pos-ADJ.html">ADJ</a></tt>-<tt><a href="en_gumreddit-pos-CCONJ.html">CCONJ</a></tt> (1; 20% instances), <tt><a href="en_gumreddit-pos-ADV.html">ADV</a></tt>-<tt><a href="en_gumreddit-pos-CCONJ.html">CCONJ</a></tt> (1; 20% instances), <tt><a href="en_gumreddit-pos-VERB.html">VERB</a></tt>-<tt><a href="en_gumreddit-pos-CCONJ.html">CCONJ</a></tt> (1; 20% instances).


~~~ conllu
# visual-style 18	bgColor:blue
# visual-style 18	fgColor:white
# visual-style 21	bgColor:blue
# visual-style 21	fgColor:white
# visual-style 21 18 cc:preconj	color:blue
1	_	_	ADV	RB	_	7	advmod	_	Lem=*LOWER*|Len=5
2	_	_	ADP	IN	_	7	case	_	Lem=_|Len=2
3	_	_	DET	DT	Definite=Ind|PronType=Art	4	det	_	Entity=(abstract-91(abstract-92|Lem=_|Len=1
4	_	_	NOUN	NN	Number=Sing	7	compound	_	Entity=abstract-92)|Lem=_|Len=3
5	_	_	SYM	SYM	_	6	cc	_	Lem=_|Len=1
6	_	_	NOUN	NN	Number=Sing	4	conj	_	Entity=(abstract-93|Lem=_|Len=2|SpaceAfter=No
7	_	_	NOUN	NN	Number=Sing	14	obl	_	Entity=abstract-91)abstract-93)|Lem=_|Len=5
8	_	_	CCONJ	CC	_	13	cc	_	Lem=_|Len=3
9	_	_	ADV	RB	PronType=Dem	13	advmod	_	Lem=_|Len=4
10	_	_	ADP	IN	_	13	case	_	Lem=_|Len=2
11	_	_	DET	DT	Definite=Def|PronType=Art	13	det	_	Entity=(abstract-94|Lem=_|Len=3
12	_	_	ADJ	JJ	Degree=Pos|NumType=Ord	13	amod	_	Lem=_|Len=6
13	_	_	NOUN	NN	Number=Sing	2	conj	_	Entity=abstract-94)|Lem=_|Len=5
14	_	_	VERB	VB	Mood=Imp|VerbForm=Fin	0	root	_	Lem=_|Len=4
15	_	_	DET	DT	Definite=Def|PronType=Art	16	det	_	Entity=(abstract-95|Lem=_|Len=3
16	_	_	NOUN	NN	Number=Sing	14	obj	_	Entity=abstract-95)|Lem=_|Len=5
17	_	_	ADP	IN	_	21	case	_	Lem=_|Len=2
18	_	_	CCONJ	CC	_	21	cc:preconj	_	Lem=_|Len=6
19	_	_	DET	DT	Definite=Ind|PronType=Art	21	det	_	Entity=(abstract-96(abstract-97|Lem=a|Len=2
20	_	_	PUNCT	``	_	21	punct	_	Lem=_|Len=1|SpaceAfter=No
21	_	_	NOUN	NN	Number=Sing	14	obl	_	Lem=_|Len=2|SpaceAfter=No
22	_	_	PUNCT	''	_	21	punct	_	Entity=abstract-97)|Lem=_|Len=1
23	_	_	CCONJ	CC	_	26	cc	_	Lem=_|Len=2
24	_	_	DET	DT	Definite=Ind|PronType=Art	26	det	_	Entity=(abstract-98|Lem=a|Len=2
25	_	_	PUNCT	``	_	26	punct	_	Lem=_|Len=1|SpaceAfter=No
26	_	_	NOUN	NN	Number=Sing	21	conj	_	Lem=*LOWER*|Len=2|SpaceAfter=No
27	_	_	PUNCT	''	_	26	punct	_	Entity=abstract-96)abstract-98)|Lem=_|Len=1|SpaceAfter=No
28	_	_	PUNCT	.	_	14	punct	_	Lem=_|Len=1

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 cc:preconj	color:blue
1	_	_	PRON	PRP	Case=Nom|Gender=Neut|Number=Sing|Person=3|PronType=Prs	4	nsubj	_	Entity=(abstract-20)|Lem=*LOWER*|Len=2|SpaceAfter=No
2	_	_	AUX	VBZ	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	4	cop	_	Lem=be|Len=2
3	_	_	CCONJ	CC	_	4	cc:preconj	_	Lem=_|Len=7
4	_	_	ADJ	JJ	Degree=Pos	0	root	_	Lem=_|Len=9|SpaceAfter=No
5	_	_	PUNCT	,	_	6	punct	_	Lem=_|Len=1
6	_	_	ADJ	JJ	Degree=Pos	4	conj	_	Lem=_|Len=8|SpaceAfter=No
7	_	_	PUNCT	,	_	9	punct	_	Lem=_|Len=1
8	_	_	CCONJ	CC	_	9	cc	_	Lem=_|Len=3
9	_	_	ADJ	JJ	Degree=Pos	4	conj	_	Lem=_|Len=9
10	_	_	PART	TO	_	11	mark	_	Entity=(abstract-20|Lem=_|Len=2
11	_	_	VERB	VB	VerbForm=Inf	4	xcomp	_	Lem=_|Len=5
12	_	_	DET	DT	_	14	det	_	Entity=(abstract-21|Lem=_|Len=3
13	_	_	NOUN	NN	Number=Sing	14	compound	_	Lem=_|Len=6
14	_	_	NOUN	NNS	Number=Plur	11	obj	_	Entity=abstract-20)abstract-21)|Lem=norm|Len=5|SpaceAfter=No
15	_	_	PUNCT	,	_	20	punct	_	Lem=_|Len=1
16	_	_	SCONJ	IN	_	20	mark	_	Lem=_|Len=5
17	_	_	PRON	PRP	Case=Nom|Number=Plur|Person=3|PronType=Prs	20	nsubj:pass	_	Entity=(abstract-21)|Lem=_|Len=4
18	_	_	AUX	VBP	Mood=Ind|Tense=Pres|VerbForm=Fin	20	aux:pass	_	Lem=be|Len=3
19	_	_	ADV	RB	_	20	advmod	_	Lem=_|Len=9
20	_	_	VERB	VBN	Tense=Past|VerbForm=Part	4	advcl	_	Lem=follow|Len=8
21	_	_	ADP	IN	_	22	case	_	Lem=_|Len=2
22	_	_	ADJ	JJS	Degree=Sup	20	obl	_	Entity=(person-8)|Lem=_|Len=4|SpaceAfter=No
23	_	_	PUNCT	.	_	4	punct	_	Lem=_|Len=1

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 cc:preconj	color:blue
1	_	_	PRON	PRP	Case=Nom|Gender=Neut|Number=Sing|Person=3|PronType=Prs	2	nsubj	_	Entity=(event-53)|Lem=*LOWER*|Len=2
2	_	_	VERB	VBD	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	0	root	_	Lem=be|Len=3
3	_	_	CCONJ	CC	_	4	cc:preconj	_	Lem=_|Len=6
4	_	_	ADV	RB	_	2	obl:tmod	_	Lem=_|Len=5
5	_	_	ADP	IN	_	4	compound:prt	_	Lem=_|Len=2
6	_	_	CCONJ	CC	_	9	cc	_	Lem=_|Len=2
7	_	_	DET	DT	Definite=Def|PronType=Art	9	det	_	Entity=(time-54|Lem=_|Len=3
8	_	_	ADJ	JJ	Degree=Pos	9	amod	_	Lem=_|Len=4
9	_	_	NOUN	NN	Number=Sing	4	conj	_	Entity=time-54)|Lem=_|Len=3
10	_	_	SCONJ	IN	_	13	mark	_	Entity=(event-53|Lem=_|Len=4
11	_	_	PRON	PRP	Case=Nom|Number=Sing|Person=1|PronType=Prs	13	nsubj	_	Entity=(person-45)|Lem=_|Len=1
12	_	_	AUX	VBD	Mood=Ind|Number=Sing|Person=1|Tense=Past|VerbForm=Fin	13	aux	_	Lem=be|Len=3
13	_	_	VERB	VBG	Tense=Pres|VerbForm=Part	2	ccomp	_	Lem=tell|Len=7
14	_	_	PRON	PRP$	Number=Sing|Person=1|Poss=Yes|PronType=Prs	15	nmod:poss	_	Entity=(person-55(person-45)|Lem=_|Len=2
15	_	_	NOUN	NN	Number=Sing	13	obj	_	Entity=person-55)|Lem=_|Len=9
16	_	_	ADP	IN	_	18	case	_	Lem=_|Len=5
17	_	_	SCONJ	WRB	PronType=Int	18	mark	_	Lem=_|Len=3
18	_	_	ADJ	JJ	Degree=Pos	13	obl	_	Lem=_|Len=10
19	_	_	PRON	PRP	Case=Nom|Gender=Neut|Number=Sing|Person=3|PronType=Prs	18	nsubj	_	Entity=(event-56)|Lem=_|Len=2
20	_	_	AUX	VBD	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	18	cop	_	Lem=be|Len=3
21	_	_	SCONJ	IN	_	25	mark	_	Entity=(event-56|Lem=_|Len=3
22	_	_	PRON	PRP	Case=Acc|Gender=Fem|Number=Sing|Person=3|PronType=Prs	25	nsubj	_	Entity=(person-48)|Lem=she|Len=3
23	_	_	PART	TO	_	25	mark	_	Lem=_|Len=2
24	_	_	AUX	VB	VerbForm=Inf	25	aux	_	Lem=_|Len=2
25	_	_	VERB	VBG	Tense=Pres|VerbForm=Part	18	advcl	_	Lem=ask|Len=6
26	_	_	PRON	PRP	Case=Acc|Number=Sing|Person=1|PronType=Prs	25	obj	_	Entity=(person-45)|Lem=I|Len=2
27	_	_	PART	TO	_	30	mark	_	Lem=_|Len=2
28	_	_	AUX	VB	VerbForm=Inf	30	cop	_	Lem=_|Len=2
29	_	_	DET	DT	Definite=Ind|PronType=Art	30	det	_	Entity=(person-49|Lem=_|Len=1
30	_	_	NOUN	NN	Number=Sing	25	xcomp	_	Entity=event-53)event-56)person-49)|Lem=_|Len=9|SpaceAfter=No
31	_	_	PUNCT	.	_	2	punct	_	Lem=_|Len=1

~~~


