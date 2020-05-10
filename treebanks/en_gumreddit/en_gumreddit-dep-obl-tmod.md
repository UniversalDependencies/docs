---
layout: base
title:  'Statistics of obl:tmod in UD_English-GUMReddit'
udver: '2'
---

## Treebank Statistics: UD_English-GUMReddit: Relations: `obl:tmod`

This relation is a language-specific subtype of <tt><a href="en_gumreddit-dep-obl.html">obl</a></tt>.
There are also 1 other language-specific subtypes of `obl`: <tt><a href="en_gumreddit-dep-obl-npmod.html">obl:npmod</a></tt>.

24 nodes (0%) are attached to their parents as `obl:tmod`.

16 instances of `obl:tmod` (67%) are left-to-right (parent precedes child).
Average distance between parent and child is 5.04166666666667.

The following 4 pairs of parts of speech are connected with `obl:tmod`: <tt><a href="en_gumreddit-pos-VERB.html">VERB</a></tt>-<tt><a href="en_gumreddit-pos-NOUN.html">NOUN</a></tt> (17; 71% instances), <tt><a href="en_gumreddit-pos-VERB.html">VERB</a></tt>-<tt><a href="en_gumreddit-pos-ADV.html">ADV</a></tt> (4; 17% instances), <tt><a href="en_gumreddit-pos-ADV.html">ADV</a></tt>-<tt><a href="en_gumreddit-pos-NOUN.html">NOUN</a></tt> (2; 8% instances), <tt><a href="en_gumreddit-pos-ADJ.html">ADJ</a></tt>-<tt><a href="en_gumreddit-pos-NOUN.html">NOUN</a></tt> (1; 4% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 13 2 obl:tmod	color:blue
1	_	_	ADJ	JJ	Degree=Pos	2	amod	_	Entity=(time-5|Lem=*LOWER*|Len=4
2	_	_	NOUN	NN	Number=Sing	13	obl:tmod	_	Entity=time-5)|Lem=_|Len=5|SpaceAfter=No
3	_	_	PUNCT	,	_	2	punct	_	Lem=_|Len=1
4	_	_	PRON	PRP$	Number=Sing|Person=1|Poss=Yes|PronType=Prs	5	nmod:poss	_	Entity=(person-6(person-7(person-3)|Lem=_|Len=2
5	_	_	NOUN	NN	Number=Sing	7	nmod:poss	_	Lem=_|Len=4|SpaceAfter=No
6	_	_	PART	POS	_	5	case	_	Entity=person-7)|Lem=_|Len=2
7	_	_	NOUN	NN	Number=Sing	13	nsubj	_	Lem=_|Len=4
8	_	_	ADP	IN	_	12	case	_	Lem=_|Len=4
9	_	_	PRON	PRP$	Gender=Fem|Number=Sing|Person=3|Poss=Yes|PronType=Prs	12	nmod:poss	_	Entity=(abstract-8(person-7)|Lem=_|Len=3
10	_	_	NOUN	NN	Number=Sing	11	obl:npmod	_	Lem=_|Len=5
11	_	_	ADJ	JJ	Degree=Pos	12	amod	_	Lem=_|Len=3
12	_	_	NOUN	NN	Number=Sing	7	nmod	_	Entity=person-6)abstract-8)|Lem=_|Len=3
13	_	_	VERB	VBD	Mood=Ind|Tense=Past|VerbForm=Fin	0	root	_	Lem=invite|Len=7
14	_	_	PRON	PRP	Case=Acc|Number=Plur|Person=1|PronType=Prs	13	obj	_	Entity=(person-9)|Lem=we|Len=2
15	_	_	ADP	RP	_	13	compound:prt	_	Lem=_|Len=4
16	_	_	ADP	IN	_	17	case	_	Lem=_|Len=3
17	_	_	NOUN	NN	Number=Sing	13	obl	_	Entity=(event-10)|Lem=_|Len=6|SpaceAfter=No
18	_	_	PUNCT	.	_	13	punct	_	Lem=_|Len=1

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 4 obl:tmod	color:blue
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


~~~ conllu
# visual-style 20	bgColor:blue
# visual-style 20	fgColor:white
# visual-style 21	bgColor:blue
# visual-style 21	fgColor:white
# visual-style 21 20 obl:tmod	color:blue
1	_	_	NOUN	NNS	Number=Plur	15	nsubj	_	Entity=(object-34)|Lem=thing|Len=6
2	_	_	PRON	PRP	Case=Nom|Number=Sing|Person=1|PronType=Prs	3	nsubj	_	Entity=(person-32)|Lem=_|Len=1
3	_	_	VERB	VBD	Mood=Ind|Tense=Past|VerbForm=Fin	1	acl:relcl	_	Lem=talk|Len=6
4	_	_	ADP	IN	_	3	compound:prt	_	Lem=_|Len=5
5	_	_	ADP	IN	_	7	case	_	Lem=_|Len=4
6	_	_	PRON	PRP$	Number=Sing|Person=1|Poss=Yes|PronType=Prs	7	nmod:poss	_	Entity=(person-35(person-32)|Lem=_|Len=2
7	_	_	NOUN	NN	Number=Sing	3	obl	_	Entity=person-35)|Lem=_|Len=8|SpaceAfter=No
8	_	_	PUNCT	,	_	9	punct	_	Lem=_|Len=1
9	_	_	NUM	CD	NumType=Card	1	appos	_	Entity=(object-36)|Lem=_|Len=3
10	_	_	AUX	VBG	VerbForm=Ger	13	cop	_	Lem=be|Len=5
11	_	_	ADJ	JJ	Degree=Pos	13	amod	_	Entity=(object-36|Lem=_|Len=4
12	_	_	VERB	VBN	Tense=Past|VerbForm=Part	13	amod	_	Lem=boil|Len=6
13	_	_	NOUN	NNS	Number=Plur	9	acl	_	Entity=object-36)|Lem=egg|Len=4|SpaceAfter=No
14	_	_	PUNCT	,	_	1	punct	_	Lem=_|Len=1
15	_	_	VERB	VBD	Mood=Ind|Tense=Past|VerbForm=Fin	0	root	_	Entity=(event-37|Lem=show|Len=6
16	_	_	ADP	RP	_	15	compound:prt	_	Lem=_|Len=2
17	_	_	ADP	IN	_	19	case	_	Lem=_|Len=2
18	_	_	PRON	PRP$	Number=Sing|Person=1|Poss=Yes|PronType=Prs	19	nmod:poss	_	Entity=(abstract-28(person-32)|Lem=_|Len=2
19	_	_	NOUN	NN	Number=Sing	15	obl	_	Entity=event-37)abstract-28)|Lem=_|Len=4
20	_	_	NOUN	NNS	Number=Plur	21	obl:tmod	_	Entity=(time-38|Lem=hour|Len=5
21	_	_	ADV	RB	_	15	advmod	_	Entity=time-38)|Lem=_|Len=5|SpaceAfter=No
22	_	_	PUNCT	.	_	15	punct	_	Lem=_|Len=1

~~~


