---
layout: base
title:  'Statistics of mark in UD_English-GUMReddit'
udver: '2'
---

## Treebank Statistics: UD_English-GUMReddit: Relations: `mark`

This relation is universal.

867 nodes (5%) are attached to their parents as `mark`.

865 instances of `mark` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.63321799307958.

The following 15 pairs of parts of speech are connected with `mark`: <tt><a href="en_gumreddit-pos-VERB.html">VERB</a></tt>-<tt><a href="en_gumreddit-pos-SCONJ.html">SCONJ</a></tt> (418; 48% instances), <tt><a href="en_gumreddit-pos-VERB.html">VERB</a></tt>-<tt><a href="en_gumreddit-pos-PART.html">PART</a></tt> (297; 34% instances), <tt><a href="en_gumreddit-pos-ADJ.html">ADJ</a></tt>-<tt><a href="en_gumreddit-pos-SCONJ.html">SCONJ</a></tt> (53; 6% instances), <tt><a href="en_gumreddit-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_gumreddit-pos-SCONJ.html">SCONJ</a></tt> (48; 6% instances), <tt><a href="en_gumreddit-pos-ADJ.html">ADJ</a></tt>-<tt><a href="en_gumreddit-pos-PART.html">PART</a></tt> (16; 2% instances), <tt><a href="en_gumreddit-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_gumreddit-pos-PART.html">PART</a></tt> (13; 1% instances), <tt><a href="en_gumreddit-pos-ADV.html">ADV</a></tt>-<tt><a href="en_gumreddit-pos-SCONJ.html">SCONJ</a></tt> (9; 1% instances), <tt><a href="en_gumreddit-pos-PRON.html">PRON</a></tt>-<tt><a href="en_gumreddit-pos-SCONJ.html">SCONJ</a></tt> (5; 1% instances), <tt><a href="en_gumreddit-pos-PROPN.html">PROPN</a></tt>-<tt><a href="en_gumreddit-pos-SCONJ.html">SCONJ</a></tt> (2; 0% instances), <tt><a href="en_gumreddit-pos-ADJ.html">ADJ</a></tt>-<tt><a href="en_gumreddit-pos-ADV.html">ADV</a></tt> (1; 0% instances), <tt><a href="en_gumreddit-pos-AUX.html">AUX</a></tt>-<tt><a href="en_gumreddit-pos-SCONJ.html">SCONJ</a></tt> (1; 0% instances), <tt><a href="en_gumreddit-pos-NUM.html">NUM</a></tt>-<tt><a href="en_gumreddit-pos-SCONJ.html">SCONJ</a></tt> (1; 0% instances), <tt><a href="en_gumreddit-pos-PART.html">PART</a></tt>-<tt><a href="en_gumreddit-pos-SCONJ.html">SCONJ</a></tt> (1; 0% instances), <tt><a href="en_gumreddit-pos-PRON.html">PRON</a></tt>-<tt><a href="en_gumreddit-pos-PART.html">PART</a></tt> (1; 0% instances), <tt><a href="en_gumreddit-pos-SYM.html">SYM</a></tt>-<tt><a href="en_gumreddit-pos-SCONJ.html">SCONJ</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 1 mark	color:blue
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
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 8 mark	color:blue
1	_	_	PRON	DT	Number=Sing|PronType=Dem	3	nsubj:pass	_	Entity=(event-22)|Lem=*LOWER*|Len=4
2	_	_	AUX	VBZ	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	3	aux:pass	_	Lem=be|Len=2
3	_	_	VERB	VBN	Tense=Past|VerbForm=Part	0	root	_	Lem=relate|Len=7
4	_	_	SCONJ	IN	_	6	mark	_	Lem=_|Len=7
5	_	_	NOUN	NNS	Number=Plur	6	nsubj	_	Entity=(event-28(person-29)|Lem=_|Len=6
6	_	_	VERB	VBP	Mood=Ind|Tense=Pres|VerbForm=Fin	3	advcl	_	Lem=_|Len=3
7	_	_	NOUN	NN	Number=Sing	6	obj	_	Entity=(abstract-12)|Lem=_|Len=5
8	_	_	PART	TO	_	9	mark	_	Lem=_|Len=2
9	_	_	VERB	VB	VerbForm=Inf	6	xcomp	_	Lem=_|Len=3
10	_	_	PROPN	NNP	Number=Sing	11	compound	_	Entity=(abstract-30(place-31)|Lem=_|Len=2
11	_	_	NOUN	NN	Number=Sing	9	obj	_	Entity=abstract-30)|Lem=_|Len=4
12	_	_	PUNCT	:	_	15	punct	_	Lem=_|Len=2
13	_	_	PRON	PRP	Case=Nom|Number=Plur|Person=1|PronType=Prs	15	nsubj	_	Entity=(person-32)|Lem=_|Len=2
14	_	_	AUX	VBP	Mood=Ind|Tense=Pres|VerbForm=Fin	15	aux	_	Lem=be|Len=3
15	_	_	VERB	VBG	Tense=Pres|VerbForm=Part	6	parataxis	_	Lem=loan|Len=7
16	_	_	DET	DT	Definite=Def|PronType=Art	18	det	_	Entity=(organization-23|Lem=_|Len=3
17	_	_	PROPN	NNP	Number=Sing	18	compound	_	Entity=(place-31)|Lem=_|Len=2
18	_	_	NOUN	NN	Number=Sing	15	iobj	_	Entity=organization-23)|Lem=_|Len=4|Typo=Yes
19	_	_	DET	DT	Definite=Def|PronType=Art	21	det	_	Entity=(abstract-33|Lem=_|Len=3
20	_	_	ADJ	JJ	Degree=Pos	21	amod	_	Lem=_|Len=4
21	_	_	NOUN	NN	Number=Sing	15	obj	_	Entity=abstract-33)|Lem=_|Len=5
22	_	_	PRON	PRP	Case=Nom|Gender=Neut|Number=Sing|Person=3|PronType=Prs	23	nsubj	_	Entity=(organization-23)|Lem=_|Len=2
23	_	_	VERB	VBZ	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	21	acl:relcl	_	Entity=event-28)|Lem=print|Len=6|SpaceAfter=No
24	_	_	PUNCT	.	_	3	punct	_	Lem=_|Len=1

~~~


~~~ conllu
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 18	bgColor:blue
# visual-style 18	fgColor:white
# visual-style 18 14 mark	color:blue
1	_	_	PRON	PRP	Case=Nom|Person=2|PronType=Prs	3	nsubj	_	Entity=(person-74)|Lem=*LOWER*|Len=3
2	_	_	AUX	MD	VerbForm=Fin	3	aux	_	Lem=_|Len=3
3	_	_	VERB	VB	VerbForm=Inf	0	root	_	Lem=_|Len=3
4	_	_	ADJ	JJ	Degree=Pos	5	amod	_	Entity=(abstract-83|Lem=_|Len=13|Typo=Yes
5	_	_	NOUN	NNS	Number=Plur	3	obj	_	Lem=fee|Len=4
6	_	_	CCONJ	CC	_	7	cc	_	Lem=_|Len=3
7	_	_	NOUN	NNS	Number=Plur	5	conj	_	Entity=abstract-83)|Lem=bill|Len=5
8	_	_	ADP	IN	_	10	case	_	Lem=_|Len=4
9	_	_	DET	DT	Definite=Def|PronType=Art	10	det	_	Entity=(abstract-84|Lem=_|Len=3
10	_	_	NOUN	NN	Number=Sing	3	obl	_	Entity=abstract-84)|Lem=_|Len=5
11	_	_	PRON	PRP	Case=Nom|Number=Plur|Person=3|PronType=Prs	12	nsubj	_	Entity=(organization-23)|Lem=_|Len=4
12	_	_	VERB	VBP	Mood=Ind|Tense=Pres|VerbForm=Fin	10	acl:relcl	_	Lem=_|Len=5
13	_	_	CCONJ	CC	_	21	cc	_	Lem=_|Len=3
14	_	_	SCONJ	IN	_	18	mark	_	Lem=_|Len=7
15	_	_	DET	DT	Definite=Def|PronType=Art	16	det	_	Entity=(organization-23|Lem=_|Len=3
16	_	_	NOUN	NN	Number=Sing	18	nsubj	_	Entity=organization-23)|Lem=_|Len=5|Typo=Yes
17	_	_	AUX	VBZ	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	18	cop	_	Lem=be|Len=2
18	_	_	ADJ	JJ	Degree=Pos	21	advcl	_	Lem=_|Len=12|SpaceAfter=No
19	_	_	PUNCT	,	_	18	punct	_	Lem=_|Len=1
20	_	_	NOUN	NNS	Number=Plur	21	nsubj	_	Entity=(person-72)|Lem=_|Len=6
21	_	_	VERB	VBP	Mood=Ind|Tense=Pres|VerbForm=Fin	3	conj	_	Lem=_|Len=6
22	_	_	PRON	PRP	Case=Acc|Gender=Neut|Number=Sing|Person=3|PronType=Prs	21	obj	_	Entity=(abstract-84)|Lem=_|Len=2|SpaceAfter=No
23	_	_	PUNCT	.	_	3	punct	_	Lem=_|Len=1

~~~


