---
layout: base
title:  'Statistics of nmod:poss in UD_English-GUMReddit'
udver: '2'
---

## Treebank Statistics: UD_English-GUMReddit: Relations: `nmod:poss`

This relation is a language-specific subtype of <tt><a href="en_gumreddit-dep-nmod.html">nmod</a></tt>.
There are also 2 other language-specific subtypes of `nmod`: <tt><a href="en_gumreddit-dep-nmod-npmod.html">nmod:npmod</a></tt>, <tt><a href="en_gumreddit-dep-nmod-tmod.html">nmod:tmod</a></tt>.

301 nodes (2%) are attached to their parents as `nmod:poss`.

301 instances of `nmod:poss` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.47508305647841.

The following 7 pairs of parts of speech are connected with `nmod:poss`: <tt><a href="en_gumreddit-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_gumreddit-pos-PRON.html">PRON</a></tt> (261; 87% instances), <tt><a href="en_gumreddit-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_gumreddit-pos-NOUN.html">NOUN</a></tt> (20; 7% instances), <tt><a href="en_gumreddit-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_gumreddit-pos-PROPN.html">PROPN</a></tt> (11; 4% instances), <tt><a href="en_gumreddit-pos-PROPN.html">PROPN</a></tt>-<tt><a href="en_gumreddit-pos-PRON.html">PRON</a></tt> (4; 1% instances), <tt><a href="en_gumreddit-pos-ADJ.html">ADJ</a></tt>-<tt><a href="en_gumreddit-pos-PRON.html">PRON</a></tt> (3; 1% instances), <tt><a href="en_gumreddit-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_gumreddit-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="en_gumreddit-pos-PROPN.html">PROPN</a></tt>-<tt><a href="en_gumreddit-pos-PROPN.html">PROPN</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 5 nmod:poss	color:blue
1	_	_	PRON	PRP	Case=Nom|Person=2|PronType=Prs	3	nsubj	_	Discourse=ROOT:6|Entity=(person-5)|Lem=*LOWER*|Len=3
2	_	_	AUX	MD	VerbForm=Fin	3	aux	_	Lem=_|Len=3
3	_	_	VERB	VB	VerbForm=Inf	0	root	_	Lem=_|Len=6
4	_	_	ADP	IN	_	7	case	_	Lem=_|Len=4
5	_	_	PRON	PRP$	Person=2|Poss=Yes|PronType=Prs	7	nmod:poss	_	Entity=(person-6(person-5)|Lem=_|Len=4
6	_	_	ADJ	JJ	Degree=Pos	7	amod	_	Lem=_|Len=3
7	_	_	NOUN	NNS	Number=Plur	3	obl	_	Entity=person-6)|Lem=_|Len=6|SpaceAfter=No
8	_	_	PUNCT	.	_	3	punct	_	Lem=_|Len=1

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 5 nmod:poss	color:blue
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
# visual-style 26	bgColor:blue
# visual-style 26	fgColor:white
# visual-style 28	bgColor:blue
# visual-style 28	fgColor:white
# visual-style 28 26 nmod:poss	color:blue
1	_	_	PRON	PRP	Case=Nom|Number=Sing|Person=1|PronType=Prs	2	nsubj	_	Discourse=cause:96->98|Entity=(person-73)|Lem=_|Len=1
2	_	_	VERB	VBP	Mood=Ind|Tense=Pres|VerbForm=Fin	0	root	_	Lem=_|Len=4
3	_	_	SCONJ	IN	_	6	mark	_	Lem=_|Len=4
4	_	_	PRON	PRP	Case=Nom|Number=Plur|Person=3|PronType=Prs	6	nsubj	_	Entity=(person-29)|Lem=_|Len=4
5	_	_	ADV	RB	_	6	advmod	_	Lem=_|Len=6
6	_	_	VERB	VBP	Mood=Ind|Tense=Pres|VerbForm=Fin	2	advcl	_	Lem=_|Len=2
7	_	_	ADV	RB	_	6	advmod	_	Lem=_|Len=9
8	_	_	ADP	IN	_	10	case	_	Lem=_|Len=4
9	_	_	PRON	PRP$	Number=Plur|Person=3|Poss=Yes|PronType=Prs	10	nmod:poss	_	Entity=(object-43(person-29)|Lem=_|Len=5
10	_	_	NOUN	NN	Number=Sing	6	obl	_	Entity=object-43)|Lem=_|Len=4
11	_	_	PART	TO	_	12	mark	_	Discourse=purpose:97->96|Lem=_|Len=2
12	_	_	VERB	VB	VerbForm=Inf	10	acl	_	Lem=_|Len=3
13	_	_	CCONJ	CC	_	14	cc	_	Lem=_|Len=3
14	_	_	VERB	VB	VerbForm=Inf	12	conj	_	Lem=_|Len=3
15	_	_	DET	DT	Definite=Def|PronType=Art	16	det	_	Entity=(person-55|Lem=_|Len=3
16	_	_	NOUN	NNS	Number=Plur	14	obj	_	Entity=person-55)|Lem=judge|Len=6
17	_	_	SCONJ	IN	_	19	mark	_	Discourse=attribution:98->99|Lem=_|Len=4
18	_	_	PRON	PRP	Case=Nom|Number=Plur|Person=3|PronType=Prs	19	nsubj	_	Entity=(person-29)|Lem=_|Len=4
19	_	_	VERB	VBP	Mood=Ind|Tense=Pres|VerbForm=Fin	12	advcl	_	Lem=_|Len=6
20	_	_	PRON	PRP	Case=Nom|Number=Plur|Person=3|PronType=Prs	23	nsubj	_	Discourse=elaboration:99->95|Entity=(person-29)|Lem=_|Len=4
21	_	_	ADV	RB	_	23	advmod	_	Lem=_|Len=6
22	_	_	ADV	RB	_	23	advmod	_	Lem=_|Len=4
23	_	_	VERB	VBP	Mood=Ind|Tense=Pres|VerbForm=Fin	19	ccomp	_	Lem=_|Len=4
24	_	_	PART	TO	_	25	mark	_	Lem=_|Len=2
25	_	_	VERB	VB	VerbForm=Inf	23	xcomp	_	Lem=_|Len=4
26	_	_	PROPN	NNP	Number=Sing	28	nmod:poss	_	Entity=(object-37(person-2|Lem=_|Len=5|SpaceAfter=No
27	_	_	PART	POS	_	26	case	_	Entity=person-2)|Lem='s|Len=2
28	_	_	NOUN	NN	Number=Sing	25	obj	_	Entity=object-37)|Lem=_|Len=4|SpaceAfter=No
29	_	_	PUNCT	.	_	2	punct	_	Lem=_|Len=1

~~~


