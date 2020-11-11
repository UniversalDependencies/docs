---
layout: base
title:  'Statistics of acl in UD_English-GUMReddit'
udver: '2'
---

## Treebank Statistics: UD_English-GUMReddit: Relations: `acl`

This relation is universal.
There are 1 language-specific subtypes of `acl`: <tt><a href="en_gumreddit-dep-acl-relcl.html">acl:relcl</a></tt>.

128 nodes (1%) are attached to their parents as `acl`.

116 instances of `acl` (91%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.09375.

The following 10 pairs of parts of speech are connected with `acl`: <tt><a href="en_gumreddit-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_gumreddit-pos-VERB.html">VERB</a></tt> (106; 83% instances), <tt><a href="en_gumreddit-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_gumreddit-pos-NOUN.html">NOUN</a></tt> (6; 5% instances), <tt><a href="en_gumreddit-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_gumreddit-pos-ADJ.html">ADJ</a></tt> (4; 3% instances), <tt><a href="en_gumreddit-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_gumreddit-pos-PRON.html">PRON</a></tt> (3; 2% instances), <tt><a href="en_gumreddit-pos-PRON.html">PRON</a></tt>-<tt><a href="en_gumreddit-pos-VERB.html">VERB</a></tt> (3; 2% instances), <tt><a href="en_gumreddit-pos-ADJ.html">ADJ</a></tt>-<tt><a href="en_gumreddit-pos-VERB.html">VERB</a></tt> (2; 2% instances), <tt><a href="en_gumreddit-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_gumreddit-pos-ADV.html">ADV</a></tt> (1; 1% instances), <tt><a href="en_gumreddit-pos-NUM.html">NUM</a></tt>-<tt><a href="en_gumreddit-pos-NOUN.html">NOUN</a></tt> (1; 1% instances), <tt><a href="en_gumreddit-pos-NUM.html">NUM</a></tt>-<tt><a href="en_gumreddit-pos-VERB.html">VERB</a></tt> (1; 1% instances), <tt><a href="en_gumreddit-pos-VERB.html">VERB</a></tt>-<tt><a href="en_gumreddit-pos-NOUN.html">NOUN</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 15	bgColor:blue
# visual-style 15	fgColor:white
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 13 15 acl	color:blue
1	_	_	CCONJ	CC	_	22	cc	_	Discourse=antithesis:93->98|Lem=*LOWER*|Len=3
2	_	_	SCONJ	IN	_	4	mark	_	Discourse=circumstance:94->95|Lem=_|Len=2
3	_	_	PRON	PRP	Case=Nom|Number=Plur|Person=1|PronType=Prs	4	nsubj	_	Entity=(person-74)|Lem=_|Len=2
4	_	_	VERB	VBD	Mood=Ind|Tense=Past|VerbForm=Fin	10	advcl	_	Lem=grow|Len=4
5	_	_	ADP	IN	_	7	case	_	Lem=_|Len=2
6	_	_	DET	DT	Definite=Ind|PronType=Art	7	det	_	Entity=(place-89|Lem=_|Len=1
7	_	_	NOUN	NN	Number=Sing	4	obl	_	Entity=place-89)|Lem=_|Len=6|SpaceAfter=No
8	_	_	PUNCT	,	_	4	punct	_	Lem=_|Len=1
9	_	_	PRON	PRP	Case=Nom|Number=Plur|Person=1|PronType=Prs	10	nsubj	_	Discourse=same-unit:95->93|Entity=(event-90(person-74)|Lem=_|Len=2
10	_	_	VERB	VBD	Mood=Ind|Tense=Past|VerbForm=Fin	0	root	_	Lem=run|Len=3
11	_	_	ADP	RP	_	10	compound:prt	_	Lem=_|Len=3
12	_	_	ADP	IN	_	13	case	_	Lem=_|Len=2
13	_	_	NOUN	NN	Number=Sing	10	obl	_	Entity=(substance-88)|Lem=_|Len=4
14	_	_	PART	TO	_	15	mark	_	Discourse=purpose:96->95|Lem=_|Len=2
15	_	_	VERB	VB	VerbForm=Inf	13	acl	_	Lem=_|Len=4
16	_	_	DET	DT	_	17	det	_	Entity=(object-86|Lem=_|Len=5
17	_	_	NOUN	NN	Number=Sing	15	obj	_	Entity=object-86)|Lem=_|Len=6
18	_	_	ADP	IN	_	15	obl	_	Entity=event-90)|Lem=_|Len=4
19	_	_	CCONJ	CC	_	22	cc	_	Discourse=evaluation:97->93|Lem=_|Len=3
20	_	_	PRON	PRP	Case=Nom|Gender=Neut|Number=Sing|Person=3|PronType=Prs	22	nsubj	_	Entity=(event-90)|Lem=_|Len=2
21	_	_	ADV	RB	_	22	advmod	_	Lem=_|Len=4
22	_	_	VERB	VBD	Mood=Ind|Tense=Past|VerbForm=Fin	10	conj	_	Lem=become|Len=6
23	_	_	DET	DT	Definite=Ind|PronType=Art	24	det	_	Entity=(event-90|Lem=_|Len=1
24	_	_	NOUN	NN	Number=Sing	22	xcomp	_	Entity=event-90)|Lem=_|Len=9
25	_	_	PART	TO	_	26	mark	_	Lem=_|Len=2
26	_	_	VERB	VB	VerbForm=Inf	24	acl	_	Lem=_|Len=6|SpaceAfter=No
27	_	_	PUNCT	.	_	10	punct	_	Lem=_|Len=1

~~~


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 11 acl	color:blue
1	_	_	SCONJ	IN	_	7	mark	_	Discourse=background:2->5|Entity=(abstract-2|Lem=*LOWER*|Len=2
2	_	_	DET	DT	_	4	det	_	Entity=(place-3|Lem=_|Len=5
3	_	_	ADJ	JJ	Degree=Pos	4	amod	_	Lem=_|Len=5
4	_	_	NOUN	NN	Number=Sing	7	nsubj	_	Entity=place-3)|Lem=_|Len=7
5	_	_	AUX	VBZ	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	7	cop	_	Lem=be|Len=2
6	_	_	ADP	IN	_	7	case	_	Lem=_|Len=2
7	_	_	NOUN	NNS	Number=Plur	19	advcl	_	Entity=(abstract-4|Lem=billion|Len=8
8	_	_	PUNCT	-LRB-	_	11	punct	_	Discourse=antithesis:3->2|Lem=_|Len=1|SpaceAfter=No
9	_	_	SCONJ	IN	_	11	mark	_	Lem=_|Len=2
10	_	_	PART	RB	Polarity=Neg	11	advmod	_	Lem=_|Len=3
11	_	_	NOUN	NNS	Number=Plur	7	acl	_	Lem=trillion|Len=9|SpaceAfter=No
12	_	_	PUNCT	-RRB-	_	11	punct	_	Lem=_|Len=1
13	_	_	ADP	IN	_	14	case	_	Discourse=same-unit:4->2|Lem=_|Len=2
14	_	_	NOUN	NN	Number=Sing	7	nmod	_	Entity=abstract-4)|Lem=_|Len=4|SpaceAfter=No
15	_	_	PUNCT	,	_	7	punct	_	Lem=_|Len=1
16	_	_	SCONJ	WRB	PronType=Int	19	obl	_	Discourse=question:5->6|Lem=_|Len=5
17	_	_	AUX	VBP	Mood=Ind|Tense=Pres|VerbForm=Fin	19	aux	_	Lem=be|Len=3
18	_	_	PRON	PRP	Case=Nom|Number=Plur|Person=3|PronType=Prs	19	nsubj	_	Entity=(place-3)|Lem=_|Len=4
19	_	_	VERB	VBG	VerbForm=Ger	0	root	_	Lem=borrow|Len=9
20	_	_	ADP	IN	_	16	case	_	Lem=_|Len=4|SpaceAfter=No
21	_	_	PUNCT	.	_	19	punct	_	Entity=abstract-2)|Lem=_|Len=1

~~~


~~~ conllu
# visual-style 16	bgColor:blue
# visual-style 16	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 16 acl	color:blue
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


