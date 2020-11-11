---
layout: base
title:  'Statistics of parataxis in UD_English-GUMReddit'
udver: '2'
---

## Treebank Statistics: UD_English-GUMReddit: Relations: `parataxis`

This relation is universal.

115 nodes (1%) are attached to their parents as `parataxis`.

108 instances of `parataxis` (94%) are left-to-right (parent precedes child).
Average distance between parent and child is 10.2608695652174.

The following 18 pairs of parts of speech are connected with `parataxis`: <tt><a href="en_gumreddit-pos-VERB.html">VERB</a></tt>-<tt><a href="en_gumreddit-pos-VERB.html">VERB</a></tt> (56; 49% instances), <tt><a href="en_gumreddit-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_gumreddit-pos-VERB.html">VERB</a></tt> (9; 8% instances), <tt><a href="en_gumreddit-pos-VERB.html">VERB</a></tt>-<tt><a href="en_gumreddit-pos-ADJ.html">ADJ</a></tt> (9; 8% instances), <tt><a href="en_gumreddit-pos-VERB.html">VERB</a></tt>-<tt><a href="en_gumreddit-pos-NOUN.html">NOUN</a></tt> (9; 8% instances), <tt><a href="en_gumreddit-pos-ADJ.html">ADJ</a></tt>-<tt><a href="en_gumreddit-pos-VERB.html">VERB</a></tt> (7; 6% instances), <tt><a href="en_gumreddit-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_gumreddit-pos-NOUN.html">NOUN</a></tt> (5; 4% instances), <tt><a href="en_gumreddit-pos-ADJ.html">ADJ</a></tt>-<tt><a href="en_gumreddit-pos-NOUN.html">NOUN</a></tt> (3; 3% instances), <tt><a href="en_gumreddit-pos-NUM.html">NUM</a></tt>-<tt><a href="en_gumreddit-pos-VERB.html">VERB</a></tt> (3; 3% instances), <tt><a href="en_gumreddit-pos-VERB.html">VERB</a></tt>-<tt><a href="en_gumreddit-pos-PROPN.html">PROPN</a></tt> (3; 3% instances), <tt><a href="en_gumreddit-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_gumreddit-pos-ADJ.html">ADJ</a></tt> (2; 2% instances), <tt><a href="en_gumreddit-pos-VERB.html">VERB</a></tt>-<tt><a href="en_gumreddit-pos-ADV.html">ADV</a></tt> (2; 2% instances), <tt><a href="en_gumreddit-pos-ADJ.html">ADJ</a></tt>-<tt><a href="en_gumreddit-pos-ADJ.html">ADJ</a></tt> (1; 1% instances), <tt><a href="en_gumreddit-pos-ADJ.html">ADJ</a></tt>-<tt><a href="en_gumreddit-pos-PROPN.html">PROPN</a></tt> (1; 1% instances), <tt><a href="en_gumreddit-pos-ADV.html">ADV</a></tt>-<tt><a href="en_gumreddit-pos-VERB.html">VERB</a></tt> (1; 1% instances), <tt><a href="en_gumreddit-pos-INTJ.html">INTJ</a></tt>-<tt><a href="en_gumreddit-pos-NUM.html">NUM</a></tt> (1; 1% instances), <tt><a href="en_gumreddit-pos-PRON.html">PRON</a></tt>-<tt><a href="en_gumreddit-pos-ADJ.html">ADJ</a></tt> (1; 1% instances), <tt><a href="en_gumreddit-pos-PROPN.html">PROPN</a></tt>-<tt><a href="en_gumreddit-pos-NOUN.html">NOUN</a></tt> (1; 1% instances), <tt><a href="en_gumreddit-pos-VERB.html">VERB</a></tt>-<tt><a href="en_gumreddit-pos-PRON.html">PRON</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 15	bgColor:blue
# visual-style 15	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 15 parataxis	color:blue
1	_	_	PRON	DT	Number=Sing|PronType=Dem	3	nsubj:pass	_	Discourse=evaluation:24->16|Entity=(event-22)|Lem=*LOWER*|Len=4
2	_	_	AUX	VBZ	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	3	aux:pass	_	Lem=be|Len=2
3	_	_	VERB	VBN	Tense=Past|VerbForm=Part	0	root	_	Lem=relate|Len=7
4	_	_	SCONJ	IN	_	6	mark	_	Discourse=cause:25->24|Lem=_|Len=7
5	_	_	NOUN	NNS	Number=Plur	6	nsubj	_	Entity=(event-28(person-29)|Lem=_|Len=6
6	_	_	VERB	VBP	Mood=Ind|Tense=Pres|VerbForm=Fin	3	advcl	_	Lem=_|Len=3
7	_	_	NOUN	NN	Number=Sing	6	obj	_	Entity=(abstract-12)|Lem=_|Len=5
8	_	_	PART	TO	_	9	mark	_	Discourse=purpose:26->25|Lem=_|Len=2
9	_	_	VERB	VB	VerbForm=Inf	6	xcomp	_	Lem=_|Len=3
10	_	_	PROPN	NNP	Number=Sing	11	compound	_	Entity=(abstract-30(place-31)|Lem=_|Len=2
11	_	_	NOUN	NN	Number=Sing	9	obj	_	Entity=abstract-30)|Lem=_|Len=4
12	_	_	PUNCT	:	_	15	punct	_	Discourse=elaboration:27->25|Lem=_|Len=2
13	_	_	PRON	PRP	Case=Nom|Number=Plur|Person=1|PronType=Prs	15	nsubj	_	Entity=(person-32)|Lem=_|Len=2
14	_	_	AUX	VBP	Mood=Ind|Tense=Pres|VerbForm=Fin	15	aux	_	Lem=be|Len=3
15	_	_	VERB	VBG	Tense=Pres|VerbForm=Part	6	parataxis	_	Lem=loan|Len=7
16	_	_	DET	DT	Definite=Def|PronType=Art	18	det	_	Entity=(organization-23|Lem=_|Len=3
17	_	_	PROPN	NNP	Number=Sing	18	compound	_	Entity=(place-31)|Lem=_|Len=2
18	_	_	NOUN	NN	Number=Sing	15	iobj	_	Entity=organization-23)|Lem=_|Len=4
19	_	_	DET	DT	Definite=Def|PronType=Art	21	det	_	Entity=(abstract-33|Lem=_|Len=3
20	_	_	ADJ	JJ	Degree=Pos	21	amod	_	Lem=_|Len=4
21	_	_	NOUN	NN	Number=Sing	15	obj	_	Entity=abstract-33)|Lem=_|Len=5
22	_	_	PRON	PRP	Case=Nom|Gender=Neut|Number=Sing|Person=3|PronType=Prs	23	nsubj	_	Discourse=elaboration:28->27|Entity=(organization-23)|Lem=_|Len=2
23	_	_	VERB	VBZ	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	21	acl:relcl	_	Entity=event-28)|Lem=print|Len=6|SpaceAfter=No
24	_	_	PUNCT	.	_	3	punct	_	Lem=_|Len=1

~~~


~~~ conllu
# visual-style 16	bgColor:blue
# visual-style 16	fgColor:white
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 13 16 parataxis	color:blue
1	_	_	VERB	VB	VerbForm=Inf	0	root	_	Discourse=elaboration:66->65|Entity=(object-74|Lem=_|Len=4
2	_	_	ADP	RP	_	6	case	_	Lem=_|Len=2
3	_	_	DET	DT	Definite=Def|PronType=Art	6	det	_	Entity=(object-75|Lem=_|Len=3
4	_	_	ADJ	JJ	Degree=Pos	6	amod	_	Lem=_|Len=5
5	_	_	NOUN	NN	Number=Sing	6	compound	_	Lem=_|Len=6
6	_	_	NOUN	NN	Number=Sing	1	obl	_	Entity=object-74)object-75)|Lem=_|Len=3|SpaceAfter=No
7	_	_	PUNCT	,	_	9	punct	_	Lem=_|Len=1
8	_	_	NOUN	NN	Number=Sing	9	compound	_	Entity=(object-76|Lem=_|Len=8
9	_	_	NOUN	NNS	Number=Plur	1	parataxis	_	Entity=object-76)|Lem=sign|Len=5|SpaceAfter=No
10	_	_	PUNCT	,	_	13	punct	_	Lem=_|Len=1
11	_	_	ADJ	JJ	Degree=Pos	13	amod	_	Entity=(abstract-77|Lem=_|Len=5
12	_	_	NOUN	NN	Number=Sing	13	compound	_	Lem=_|Len=7
13	_	_	NOUN	NN	Number=Sing	9	parataxis	_	Entity=abstract-77)|Lem=_|Len=4|SpaceAfter=No
14	_	_	PUNCT	,	_	16	punct	_	Lem=_|Len=1
15	_	_	NOUN	NNS	Number=Plur	16	nsubj	_	Discourse=evaluation:67->65|Entity=(person-78)|Lem=_|Len=6
16	_	_	VERB	VBP	Mood=Ind|Tense=Pres|VerbForm=Fin	13	parataxis	_	Lem=_|Len=4
17	_	_	PRON	PRP	Case=Acc|Gender=Neut|Number=Sing|Person=3|PronType=Prs	16	obj	_	Entity=(abstract-79)|Lem=_|Len=2|SpaceAfter=No
18	_	_	PUNCT	.	_	1	punct	_	Lem=_|Len=1

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 10 parataxis	color:blue
1	_	_	PRON	DT	Number=Sing|PronType=Dem	2	nsubj	_	Discourse=evaluation:91->82|Entity=(abstract-81)|Lem=*LOWER*|Len=4
2	_	_	VERB	VBZ	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	Lem=make|Len=5
3	_	_	ADJ	JJR	Degree=Cmp	4	amod	_	Lem=_|Len=4
4	_	_	NOUN	NN	Number=Sing	2	obj	_	Lem=_|Len=5|SpaceAfter=No
5	_	_	PUNCT	,	_	10	punct	_	Lem=_|Len=1
6	_	_	ADV	WRB	PronType=Int	10	advmod	_	Discourse=antithesis:92->93|Lem=_|Len=3
7	_	_	AUX	MD	VerbForm=Fin	10	aux	_	Lem=_|Len=5
8	_	_	NOUN	NNS	Number=Plur	10	nsubj	_	Entity=(person-61)|Lem=monster|Len=8
9	_	_	AUX	VB	VerbForm=Inf	10	cop	_	Lem=_|Len=2
10	_	_	ADJ	JJ	Degree=Pos	2	parataxis	_	Lem=_|Len=6
11	_	_	ADP	IN	_	12	case	_	Lem=_|Len=2
12	_	_	NOUN	NNS	Number=Plur	10	obl	_	Entity=(person-61)|Lem=monster|Len=8|SpaceAfter=No
13	_	_	PUNCT	.	_	2	punct	_	Lem=_|Len=1

~~~


