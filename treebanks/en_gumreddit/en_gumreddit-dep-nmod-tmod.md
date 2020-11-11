---
layout: base
title:  'Statistics of nmod:tmod in UD_English-GUMReddit'
udver: '2'
---

## Treebank Statistics: UD_English-GUMReddit: Relations: `nmod:tmod`

This relation is a language-specific subtype of <tt><a href="en_gumreddit-dep-nmod.html">nmod</a></tt>.
There are also 2 other language-specific subtypes of `nmod`: <tt><a href="en_gumreddit-dep-nmod-npmod.html">nmod:npmod</a></tt>, <tt><a href="en_gumreddit-dep-nmod-poss.html">nmod:poss</a></tt>.

10 nodes (0%) are attached to their parents as `nmod:tmod`.

8 instances of `nmod:tmod` (80%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.7.

The following 6 pairs of parts of speech are connected with `nmod:tmod`: <tt><a href="en_gumreddit-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_gumreddit-pos-NOUN.html">NOUN</a></tt> (4; 40% instances), <tt><a href="en_gumreddit-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_gumreddit-pos-ADV.html">ADV</a></tt> (2; 20% instances), <tt><a href="en_gumreddit-pos-ADJ.html">ADJ</a></tt>-<tt><a href="en_gumreddit-pos-NOUN.html">NOUN</a></tt> (1; 10% instances), <tt><a href="en_gumreddit-pos-NUM.html">NUM</a></tt>-<tt><a href="en_gumreddit-pos-NOUN.html">NOUN</a></tt> (1; 10% instances), <tt><a href="en_gumreddit-pos-NUM.html">NUM</a></tt>-<tt><a href="en_gumreddit-pos-NUM.html">NUM</a></tt> (1; 10% instances), <tt><a href="en_gumreddit-pos-PRON.html">PRON</a></tt>-<tt><a href="en_gumreddit-pos-NOUN.html">NOUN</a></tt> (1; 10% instances).


~~~ conllu
# visual-style 19	bgColor:blue
# visual-style 19	fgColor:white
# visual-style 21	bgColor:blue
# visual-style 21	fgColor:white
# visual-style 21 19 nmod:tmod	color:blue
1	_	_	VERB	VB	VerbForm=Inf	0	root	_	Discourse=preparation:127->128|Lem=*LOWER*|Len=4
2	_	_	ADP	IN	_	3	case	_	Lem=_|Len=2
3	_	_	PRON	PRP	Case=Nom|Gender=Neut|Number=Sing|Person=3|PronType=Prs	1	obl	_	Entity=(event-115)|Lem=_|Len=2
4	_	_	DET	DT	Number=Sing|PronType=Dem	5	det	_	Entity=(abstract-128|Lem=_|Len=4
5	_	_	NOUN	NN	Number=Sing	1	obl:npmod	_	Entity=abstract-128)|Lem=_|Len=3|SpaceAfter=No
6	_	_	PUNCT	,	_	10	punct	_	Lem=_|Len=1
7	_	_	PRON	PRP	Case=Nom|Gender=Neut|Number=Sing|Person=3|PronType=Prs	10	nsubj	_	Discourse=justify:128->124|Entity=(abstract-128(time-129)|Lem=_|Len=2|SpaceAfter=No
8	_	_	AUX	VBZ	Mood=Ind|Number=Sing|Person=3|Tense=Pres|Typo=Yes|VerbForm=Fin	10	cop	_	Lem=be|Len=1|SpaceAfter=No
9	_	_	NUM	CD	NumType=Card	10	nummod	_	Entity=(time-129|Lem=_|Len=1
10	_	_	NOUN	NNS	Number=Plur	1	parataxis	_	Lem=second|Len=7
11	_	_	ADP	IN	_	13	case	_	Lem=_|Len=2
12	_	_	PRON	PRP$	Person=2|Poss=Yes|PronType=Prs	13	nmod:poss	_	Entity=(person-35)|Lem=_|Len=4
13	_	_	NOUN	NN	Number=Sing|Typo=Yes	10	nmod	_	Entity=time-129)|Lem=_|Len=4|SpaceAfter=No
14	_	_	PUNCT	,	_	22	punct	_	Lem=_|Len=1
15	_	_	CCONJ	CC	Typo=Yes	22	cc	_	Discourse=contrast:129->128|Lem=_|Len=3|SpaceAfter=No
16	_	_	ADV	RB	_	22	advmod	_	Lem=_|Len=8
17	_	_	DET	DT	Definite=Ind|PronType=Art|Typo=Yes	22	det	_	Entity=(abstract-130|Lem=_|Len=1
18	_	_	ADJ	JJ	Degree=Pos|Typo=Yes	19	amod	_	Lem=_|Len=8
19	_	_	NOUN	NNS	Number=Plur|Typo=Yes	21	nmod:tmod	_	Lem=time|Len=5
20	_	_	DET	DT	Definite=Ind|PronType=Art|Typo=Yes	21	det	_	Entity=(time-131|Lem=_|Len=1
21	_	_	NOUN	NN	Number=Sing	22	compound	_	Entity=time-131)|Lem=_|Len=3
22	_	_	NOUN	NN	Number=Sing	10	conj	_	Entity=abstract-130)|Lem=_|Len=5
23	_	_	DET	DT	Number=Sing|PronType=Dem|Typo=Yes	25	det	_	Entity=(person-132|Lem=_|Len=4
24	_	_	ADJ	JJ	Degree=Pos|Typo=Yes	25	amod	_	Lem=_|Len=24
25	_	_	NOUN	NN	Number=Sing	22	dep	_	Lem=_|Len=5
26	_	_	ADP	IN	_	27	case	_	Lem=_|Len=2
27	_	_	PROPN	NNP	Number=Sing	25	nmod	_	Entity=(place-116)abstract-128)person-132)|Lem=_|Len=9|SpaceAfter=No
28	_	_	PUNCT	.	_	1	punct	_	Lem=_|Len=1

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 8 nmod:tmod	color:blue
1	_	_	PART	TO	_	4	mark	_	Discourse=justify:54->53|Entity=(abstract-84|Lem=*LOWER*|Len=2
2	_	_	AUX	VB	VerbForm=Inf	4	cop	_	Lem=_|Len=2
3	_	_	DET	DT	Definite=Ind|PronType=Art	4	det	_	Entity=(person-85|Lem=_|Len=1
4	_	_	NOUN	NN	Number=Sing	14	csubj	_	Entity=person-85)|Lem=_|Len=8
5	_	_	ADP	IN	_	7	case	_	Lem=_|Len=2
6	_	_	DET	DT	Definite=Def|PronType=Art	7	det	_	Entity=(place-4|Lem=_|Len=3
7	_	_	PROPN	NNP	Number=Sing	4	nmod	_	Entity=abstract-84)place-4)|Lem=_|Len=3
8	_	_	ADV	RB	_	4	nmod:tmod	_	Entity=(time-17)|Lem=_|Len=5
9	_	_	AUX	VBZ	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	14	cop	_	Lem=be|Len=2
10	_	_	DET	DT	Definite=Ind|PronType=Art	14	det	_	Entity=(abstract-86|Lem=_|Len=1
11	_	_	NOUN	NN	Number=Sing	14	compound	_	Lem=_|Len=5
12	_	_	CCONJ	CC	_	13	cc	_	Lem=_|Len=3
13	_	_	NOUN	NN	Number=Sing	11	conj	_	Lem=_|Len=3
14	_	_	NOUN	NN	Number=Sing	0	root	_	Entity=abstract-86)|Lem=_|Len=10
15	_	_	ADP	IN	_	16	case	_	Lem=_|Len=2
16	_	_	PRON	WP	PronType=Int	14	acl	_	Lem=_|Len=4
17	_	_	PRON	PRP	Case=Nom|Gender=Neut|Number=Sing|Person=3|PronType=Prs	16	nsubj	_	Entity=(abstract-84)|Lem=_|Len=2
18	_	_	AUX	VBD	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	16	cop	_	Lem=be|Len=3
19	_	_	ADP	IN	_	23	case	_	Lem=_|Len=6
20	_	_	PRON	PRP$	Number=Sing|Person=1|Poss=Yes|PronType=Prs	21	nmod:poss	_	Entity=(time-87(person-88(person-5)|Lem=_|Len=2
21	_	_	NOUN	NNS	Number=Plur	23	nmod:poss	_	Lem=grandparent|Len=12|SpaceAfter=No
22	_	_	PART	POS	_	21	case	_	Entity=person-88)|Lem='s|Len=1
23	_	_	NOUN	NN	Number=Sing	16	nmod	_	Entity=time-87)|Lem=_|Len=4|SpaceAfter=No
24	_	_	PUNCT	.	_	14	punct	_	Lem=_|Len=1

~~~


~~~ conllu
# visual-style 16	bgColor:blue
# visual-style 16	fgColor:white
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 14 16 nmod:tmod	color:blue
1	_	_	PRON	PRP	Case=Nom|Number=Sing|Person=1|PronType=Prs	2	nsubj	_	Discourse=justify:31->32|Entity=(person-29)|Lem=_|Len=1|SpaceAfter=No
2	_	_	VERB	VBP	Mood=Ind|Tense=Pres|VerbForm=Fin	0	root	_	Lem=_|Len=6
3	_	_	PRON	PRP$	Number=Sing|Person=1|Poss=Yes|PronType=Prs	4	nmod:poss	_	Entity=(person-35(person-29)|Lem=_|Len=2
4	_	_	NOUN	NN	Number=Sing	2	obj	_	Entity=person-35)|Lem=_|Len=6
5	_	_	SCONJ	IN	_	8	mark	_	Discourse=justify:32->23|Lem=_|Len=4
6	_	_	PRON	PRP	Case=Nom|Gender=Neut|Number=Sing|Person=3|PronType=Prs	8	expl	_	Entity=(event-36)|Lem=_|Len=2
7	_	_	AUX	VBZ	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	8	cop	_	Lem=be|Len=2
8	_	_	ADJ	JJ	Degree=Pos	2	ccomp	_	Lem=_|Len=10
9	_	_	PART	TO	_	10	mark	_	Entity=(event-36|Lem=_|Len=2
10	_	_	VERB	VB	VerbForm=Inf	8	csubj	_	Lem=_|Len=6
11	_	_	ADP	IN	_	12	case	_	Lem=_|Len=2
12	_	_	ADJ	JJS	Degree=Sup	14	advmod	_	Lem=_|Len=5
13	_	_	DET	DT	Definite=Ind|PronType=Art	14	det	_	Lem=_|Len=1
14	_	_	ADJ	JJ	Degree=Pos	10	obj	_	Lem=_|Len=3
15	_	_	DET	DT	Definite=Ind|PronType=Art	16	det	_	Entity=(time-37|Lem=_|Len=1
16	_	_	NOUN	NN	Number=Sing	14	nmod:tmod	_	Entity=event-36)time-37)|Lem=_|Len=4
17	_	_	ADP	IN	_	19	case	_	Lem=_|Len=3
18	_	_	DET	DT	Number=Plur|PronType=Dem|Typo=Yes	19	det	_	Entity=(abstract-38|Lem=this|Len=5
19	_	_	NOUN	NN	Number=Sing	10	obl	_	Entity=abstract-38)|Lem=_|Len=7
20	_	_	ADP	IN	_	21	case	_	Discourse=elaboration:33->32|Lem=_|Len=2
21	_	_	VERB	VBG	VerbForm=Ger	19	acl	_	Lem=network|Len=10
22	_	_	CCONJ	CC	_	23	cc	_	Discourse=attribution:34->35|Lem=_|Len=3
23	_	_	VERB	VBG	VerbForm=Ger	21	conj	_	Lem=remind|Len=9
24	_	_	NOUN	NNS	Number=Plur	23	obj	_	Entity=(person-39)|Lem=_|Len=6
25	_	_	PRON	PRP	Case=Nom|Number=Sing|Person=1|PronType=Prs	26	nsubj	_	Discourse=joint:35->33|Entity=(person-29)|Lem=_|Len=1
26	_	_	VERB	VBP	Mood=Ind|Tense=Pres|VerbForm=Fin	23	ccomp	_	Lem=_|Len=5|SpaceAfter=No
27	_	_	PUNCT	.	_	2	punct	_	Lem=_|Len=1

~~~


