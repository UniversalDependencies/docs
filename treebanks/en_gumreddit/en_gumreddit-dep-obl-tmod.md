---
layout: base
title:  'Statistics of obl:tmod in UD_English-GUMReddit'
udver: '2'
---

## Treebank Statistics: UD_English-GUMReddit: Relations: `obl:tmod`

This relation is a language-specific subtype of <tt><a href="en_gumreddit-dep-obl.html">obl</a></tt>.
There are also 1 other language-specific subtypes of `obl`: <tt><a href="en_gumreddit-dep-obl-npmod.html">obl:npmod</a></tt>.

22 nodes (0%) are attached to their parents as `obl:tmod`.

15 instances of `obl:tmod` (68%) are left-to-right (parent precedes child).
Average distance between parent and child is 5.22727272727273.

The following 4 pairs of parts of speech are connected with `obl:tmod`: <tt><a href="en_gumreddit-pos-VERB.html">VERB</a></tt>-<tt><a href="en_gumreddit-pos-NOUN.html">NOUN</a></tt> (16; 73% instances), <tt><a href="en_gumreddit-pos-VERB.html">VERB</a></tt>-<tt><a href="en_gumreddit-pos-ADV.html">ADV</a></tt> (3; 14% instances), <tt><a href="en_gumreddit-pos-ADV.html">ADV</a></tt>-<tt><a href="en_gumreddit-pos-NOUN.html">NOUN</a></tt> (2; 9% instances), <tt><a href="en_gumreddit-pos-ADJ.html">ADJ</a></tt>-<tt><a href="en_gumreddit-pos-NOUN.html">NOUN</a></tt> (1; 5% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 13 2 obl:tmod	color:blue
1	_	_	ADJ	JJ	Degree=Pos	2	amod	_	Discourse=background:3->11|Entity=(time-5|Lem=*LOWER*|Len=4
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
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 11 obl:tmod	color:blue
1	_	_	ADV	RB	_	4	advmod	_	Discourse=background:9->13|Lem=*LOWER*|Len=9|SpaceAfter=No
2	_	_	PUNCT	,	_	1	punct	_	Lem=_|Len=1
3	_	_	PRON	PRP	Case=Nom|Number=Plur|Person=1|PronType=Prs	4	nsubj	_	Entity=(person-6)|Lem=_|Len=2
4	_	_	VERB	VBP	Mood=Ind|Tense=Pres|VerbForm=Fin	0	root	_	Lem=_|Len=3
5	_	_	DET	DT	Definite=Def|PronType=Art	7	det	_	Entity=(abstract-15(abstract-3|Lem=_|Len=3
6	_	_	ADJ	JJ	Degree=Pos	7	amod	_	Lem=_|Len=6
7	_	_	NOUN	NNS	Number=Plur	4	obj	_	Entity=abstract-3)|Lem=issue|Len=6
8	_	_	CCONJ	CC	_	9	cc	_	Lem=_|Len=3
9	_	_	NOUN	NNS	Number=Plur	7	conj	_	Entity=(abstract-16)abstract-15)|Lem=tension|Len=8
10	_	_	VERB	VBG	VerbForm=Ger	7	acl	_	Discourse=elaboration:10->9|Lem=occur|Len=9
11	_	_	ADV	RB	_	10	obl:tmod	_	Entity=(time-17)|Lem=_|Len=5
12	_	_	ADP	IN	_	16	case	_	Discourse=same-unit:11->9|Lem=_|Len=2
13	_	_	DET	DT	Definite=Ind|PronType=Art	16	det	_	Entity=(abstract-18|Lem=_|Len=1
14	_	_	ADV	RB	_	15	advmod	_	Lem=_|Len=4
15	_	_	ADJ	JJ	Degree=Pos	16	amod	_	Lem=_|Len=7
16	_	_	NOUN	NN	Number=Sing	10	obl	_	Entity=abstract-18)|Lem=_|Len=10|SpaceAfter=No
17	_	_	PUNCT	,	_	18	punct	_	Lem=_|Len=1
18	_	_	ADJ	JJ	Degree=Pos	16	conj	_	Lem=_|Len=8
19	_	_	ADP	IN	_	21	case	_	Lem=_|Len=2
20	_	_	DET	DT	_	21	det	_	Entity=(person-19|Lem=_|Len=4
21	_	_	NOUN	NN	Number=Sing	18	obl	_	Entity=person-19)|Lem=_|Len=10|SpaceAfter=No
22	_	_	PUNCT	,	_	25	punct	_	Lem=_|Len=1
23	_	_	CCONJ	CC	_	25	cc	_	Lem=_|Len=3
24	_	_	ADP	IN	_	25	case	_	Lem=_|Len=2
25	_	_	ADJ	JJ	Degree=Pos	16	conj	_	Lem=_|Len=7
26	_	_	ADP	IN	_	28	case	_	Lem=_|Len=2
27	_	_	DET	DT	Definite=Def|PronType=Art	28	det	_	Entity=(abstract-20|Lem=_|Len=3
28	_	_	NOUN	NN	Number=Sing	25	obl	_	Lem=_|Len=5
29	_	_	ADP	IN	_	30	case	_	Lem=_|Len=2
30	_	_	NOUN	NN	Number=Sing	28	nmod	_	Entity=(abstract-21)abstract-20)|Lem=_|Len=8|SpaceAfter=No
31	_	_	PUNCT	.	_	4	punct	_	Lem=_|Len=1

~~~


~~~ conllu
# visual-style 20	bgColor:blue
# visual-style 20	fgColor:white
# visual-style 21	bgColor:blue
# visual-style 21	fgColor:white
# visual-style 21 20 obl:tmod	color:blue
1	_	_	NOUN	NNS	Number=Plur	15	nsubj	_	Discourse=elaboration:34->33|Entity=(object-34|Lem=thing|Len=6
2	_	_	PRON	PRP	Case=Nom|Number=Sing|Person=1|PronType=Prs	3	nsubj	_	Discourse=elaboration:35->34|Entity=(person-32)|Lem=_|Len=1
3	_	_	VERB	VBD	Mood=Ind|Tense=Past|VerbForm=Fin	1	acl:relcl	_	Lem=talk|Len=6
4	_	_	ADP	IN	_	3	compound:prt	_	Lem=_|Len=5
5	_	_	ADP	IN	_	7	case	_	Lem=_|Len=4
6	_	_	PRON	PRP$	Number=Sing|Person=1|Poss=Yes|PronType=Prs	7	nmod:poss	_	Entity=(person-35(person-32)|Lem=_|Len=2
7	_	_	NOUN	NN	Number=Sing	3	obl	_	Entity=object-34)person-35)|Lem=_|Len=8|SpaceAfter=No
8	_	_	PUNCT	,	_	9	punct	_	Lem=_|Len=1
9	_	_	NUM	CD	NumType=Card	1	appos	_	Discourse=elaboration:36->34|Entity=(object-36)|Lem=_|Len=3
10	_	_	AUX	VBG	VerbForm=Ger	13	cop	_	Lem=be|Len=5
11	_	_	ADJ	JJ	Degree=Pos	13	amod	_	Entity=(object-36|Lem=_|Len=4
12	_	_	VERB	VBN	Tense=Past|VerbForm=Part	13	amod	_	Lem=boil|Len=6
13	_	_	NOUN	NNS	Number=Plur	9	acl	_	Entity=object-36)|Lem=egg|Len=4|SpaceAfter=No
14	_	_	PUNCT	,	_	1	punct	_	Lem=_|Len=1
15	_	_	VERB	VBD	Mood=Ind|Tense=Past|VerbForm=Fin	0	root	_	Discourse=same-unit:37->34|Entity=(event-37|Lem=show|Len=6
16	_	_	ADP	RP	_	15	compound:prt	_	Lem=_|Len=2
17	_	_	ADP	IN	_	19	case	_	Lem=_|Len=2
18	_	_	PRON	PRP$	Number=Sing|Person=1|Poss=Yes|PronType=Prs	19	nmod:poss	_	Entity=(abstract-28(person-32)|Lem=_|Len=2
19	_	_	NOUN	NN	Number=Sing	15	obl	_	Entity=event-37)abstract-28)|Lem=_|Len=4
20	_	_	NOUN	NNS	Number=Plur	21	obl:tmod	_	Entity=(time-38|Lem=hour|Len=5
21	_	_	ADV	RB	_	15	advmod	_	Entity=time-38)|Lem=_|Len=5|SpaceAfter=No
22	_	_	PUNCT	.	_	15	punct	_	Lem=_|Len=1

~~~


