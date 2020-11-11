---
layout: base
title:  'Statistics of csubj in UD_English-GUMReddit'
udver: '2'
---

## Treebank Statistics: UD_English-GUMReddit: Relations: `csubj`

This relation is universal.
There are 1 language-specific subtypes of `csubj`: <tt><a href="en_gumreddit-dep-csubj-pass.html">csubj:pass</a></tt>.

54 nodes (0%) are attached to their parents as `csubj`.

36 instances of `csubj` (67%) are left-to-right (parent precedes child).
Average distance between parent and child is 5.68518518518519.

The following 12 pairs of parts of speech are connected with `csubj`: <tt><a href="en_gumreddit-pos-ADJ.html">ADJ</a></tt>-<tt><a href="en_gumreddit-pos-VERB.html">VERB</a></tt> (24; 44% instances), <tt><a href="en_gumreddit-pos-VERB.html">VERB</a></tt>-<tt><a href="en_gumreddit-pos-VERB.html">VERB</a></tt> (11; 20% instances), <tt><a href="en_gumreddit-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_gumreddit-pos-VERB.html">VERB</a></tt> (9; 17% instances), <tt><a href="en_gumreddit-pos-ADJ.html">ADJ</a></tt>-<tt><a href="en_gumreddit-pos-NOUN.html">NOUN</a></tt> (2; 4% instances), <tt><a href="en_gumreddit-pos-ADV.html">ADV</a></tt>-<tt><a href="en_gumreddit-pos-VERB.html">VERB</a></tt> (1; 2% instances), <tt><a href="en_gumreddit-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_gumreddit-pos-ADJ.html">ADJ</a></tt> (1; 2% instances), <tt><a href="en_gumreddit-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_gumreddit-pos-ADV.html">ADV</a></tt> (1; 2% instances), <tt><a href="en_gumreddit-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_gumreddit-pos-NOUN.html">NOUN</a></tt> (1; 2% instances), <tt><a href="en_gumreddit-pos-PRON.html">PRON</a></tt>-<tt><a href="en_gumreddit-pos-NOUN.html">NOUN</a></tt> (1; 2% instances), <tt><a href="en_gumreddit-pos-PRON.html">PRON</a></tt>-<tt><a href="en_gumreddit-pos-VERB.html">VERB</a></tt> (1; 2% instances), <tt><a href="en_gumreddit-pos-VERB.html">VERB</a></tt>-<tt><a href="en_gumreddit-pos-ADJ.html">ADJ</a></tt> (1; 2% instances), <tt><a href="en_gumreddit-pos-VERB.html">VERB</a></tt>-<tt><a href="en_gumreddit-pos-NOUN.html">NOUN</a></tt> (1; 2% instances).


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 16	bgColor:blue
# visual-style 16	fgColor:white
# visual-style 16 9 csubj	color:blue
1	_	_	PRON	DT	Number=Sing|PronType=Dem	2	nsubj	_	Discourse=cause:86->1|Entity=(event-87)|Lem=*LOWER*|Len=4
2	_	_	VERB	VBZ	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	Lem=have|Len=3
3	_	_	PART	TO	_	4	mark	_	Lem=_|Len=2
4	_	_	VERB	VB	VerbForm=Inf	2	xcomp	_	Lem=_|Len=2
5	_	_	ADP	IN	_	7	case	_	Lem=_|Len=4
6	_	_	DET	DT	Definite=Def|PronType=Art	7	det	_	Entity=(abstract-90|Lem=_|Len=3
7	_	_	NOUN	NN	Number=Sing	4	obl	_	Lem=_|Len=4
8	_	_	SCONJ	IN	_	9	mark	_	Discourse=elaboration:87->86|Lem=_|Len=4
9	_	_	VERB	VBG	VerbForm=Ger	16	csubj	_	Lem=raise|Len=7
10	_	_	PRON	PRP$	Number=Plur|Person=1|Poss=Yes|PronType=Prs	11	nmod:poss	_	Entity=(person-91(person-2)|Lem=_|Len=3
11	_	_	NOUN	NN	Number=Sing	9	obj	_	Entity=person-91)|Lem=_|Len=9
12	_	_	AUX	VBZ	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	16	cop	_	Lem=be|Len=2
13	_	_	NOUN	NN	Number=Sing	16	compound	_	Entity=(abstract-92)|Lem=_|Len=5
14	_	_	CCONJ	CC	_	15	cc	_	Lem=_|Len=3
15	_	_	NOUN	NN	Number=Sing	13	conj	_	Entity=(abstract-93)|Lem=_|Len=8
16	_	_	ADJ	JJ	Degree=Pos	7	acl	_	Entity=abstract-90)|Lem=_|Len=9|SpaceAfter=No
17	_	_	PUNCT	.	_	2	punct	_	Lem=_|Len=1

~~~


~~~ conllu
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 13 csubj	color:blue
1	_	_	PRON	PRP	Case=Nom|Gender=Neut|Number=Sing|Person=3|PronType=Prs	2	nsubj	_	Discourse=evaluation:39->36|Entity=(abstract-43)|Lem=*LOWER*|Len=2
2	_	_	VERB	VBZ	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	Lem=amaze|Len=6
3	_	_	PRON	PRP	Case=Acc|Number=Sing|Person=1|PronType=Prs	2	obj	_	Entity=(person-44)|Lem=I|Len=2
4	_	_	DET	DT	Definite=Def|PronType=Art	5	det	_	Entity=(abstract-43(object-45|Lem=_|Len=3
5	_	_	NOUN	NNS	Number=Plur	2	dislocated	_	Lem=chunk|Len=6
6	_	_	ADP	IN	_	7	case	_	Lem=_|Len=2
7	_	_	NOUN	NN	Number=Sing	5	nmod	_	Entity=(time-46)object-45)|Lem=_|Len=4
8	_	_	PRON	PRP	Case=Nom|Gender=Neut|Number=Sing|Person=3|PronType=Prs	9	expl	_	Discourse=elaboration:40->39|Entity=(abstract-47)|Lem=_|Len=2
9	_	_	VERB	VBZ	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	7	acl:relcl	_	Lem=take|Len=5
10	_	_	ADP	IN	_	13	case	_	Entity=(abstract-47|Lem=_|Len=3
11	_	_	SCONJ	NNS	Number=Plur	13	mark	_	Entity=(person-48)|Lem=_|Len=6
12	_	_	PART	TO	_	13	mark	_	Lem=_|Len=2
13	_	_	VERB	VB	VerbForm=Inf	9	csubj	_	Lem=_|Len=7
14	_	_	ADP	IN	_	16	case	_	Lem=_|Len=2
15	_	_	DET	DT	Number=Plur|PronType=Dem	16	det	_	Entity=(abstract-49|Lem=this|Len=5
16	_	_	NOUN	NNS	Number=Plur	13	obl	_	Entity=abstract-43)abstract-47)abstract-49)|Lem=thing|Len=6
17	_	_	SYM	SYM	_	2	discourse	_	Lem=_|Len=3|SpaceAfter=No

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 14 5 csubj	color:blue
1	_	_	PRON	PRP	Case=Nom|Gender=Neut|Number=Sing|Person=3|PronType=Prs	14	nsubj	_	Discourse=justify:10->9|Entity=(abstract-16)|Lem=*LOWER*|Len=2|SpaceAfter=No
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
16	_	_	ADV	RB	_	28	advmod	_	Discourse=result:11->10|Lem=_|Len=2
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


