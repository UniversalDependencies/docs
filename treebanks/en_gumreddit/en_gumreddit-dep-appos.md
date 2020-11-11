---
layout: base
title:  'Statistics of appos in UD_English-GUMReddit'
udver: '2'
---

## Treebank Statistics: UD_English-GUMReddit: Relations: `appos`

This relation is universal.

36 nodes (0%) are attached to their parents as `appos`.

36 instances of `appos` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 4.80555555555556.

The following 10 pairs of parts of speech are connected with `appos`: <tt><a href="en_gumreddit-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_gumreddit-pos-NOUN.html">NOUN</a></tt> (21; 58% instances), <tt><a href="en_gumreddit-pos-PRON.html">PRON</a></tt>-<tt><a href="en_gumreddit-pos-NOUN.html">NOUN</a></tt> (4; 11% instances), <tt><a href="en_gumreddit-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_gumreddit-pos-PROPN.html">PROPN</a></tt> (3; 8% instances), <tt><a href="en_gumreddit-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_gumreddit-pos-VERB.html">VERB</a></tt> (2; 6% instances), <tt><a href="en_gumreddit-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_gumreddit-pos-NUM.html">NUM</a></tt> (1; 3% instances), <tt><a href="en_gumreddit-pos-PRON.html">PRON</a></tt>-<tt><a href="en_gumreddit-pos-PROPN.html">PROPN</a></tt> (1; 3% instances), <tt><a href="en_gumreddit-pos-PROPN.html">PROPN</a></tt>-<tt><a href="en_gumreddit-pos-NOUN.html">NOUN</a></tt> (1; 3% instances), <tt><a href="en_gumreddit-pos-PROPN.html">PROPN</a></tt>-<tt><a href="en_gumreddit-pos-PROPN.html">PROPN</a></tt> (1; 3% instances), <tt><a href="en_gumreddit-pos-SYM.html">SYM</a></tt>-<tt><a href="en_gumreddit-pos-NOUN.html">NOUN</a></tt> (1; 3% instances), <tt><a href="en_gumreddit-pos-X.html">X</a></tt>-<tt><a href="en_gumreddit-pos-NUM.html">NUM</a></tt> (1; 3% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 7 appos	color:blue
1	_	_	VERB	VB	VerbForm=Inf	0	root	_	Discourse=background:98->122|Lem=*LOWER*|Len=5|SpaceAfter=No
2	_	_	PUNCT	,	_	4	punct	_	Lem=_|Len=1
3	_	_	NOUN	NN	Number=Sing	4	compound	_	Entity=(object-16|Lem=_|Len=4
4	_	_	NOUN	NN	Number=Sing	1	nsubj	_	Entity=object-16)|Lem=_|Len=8|SpaceAfter=No
5	_	_	PUNCT	,	_	7	punct	_	Lem=_|Len=1
6	_	_	DET	DT	Definite=Ind|PronType=Art	7	det	_	Entity=(object-16|Lem=_|Len=1
7	_	_	NOUN	NN	Number=Sing	4	appos	_	Lem=_|Len=5
8	_	_	ADP	IN	_	9	case	_	Lem=_|Len=2
9	_	_	NOUN	NN	Number=Sing	7	nmod	_	Lem=_|Len=5
10	_	_	PRON	WDT	PronType=Rel	11	nsubj	_	Discourse=elaboration:99->98|Lem=_|Len=4
11	_	_	VERB	VBZ	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	7	acl:relcl	_	Lem=mean|Len=5
12	_	_	NOUN	NN	Number=Sing|Polarity=Neg	11	obj	_	Entity=(abstract-91|Lem=_|Len=7
13	_	_	SCONJ	IN	_	17	mark	_	Discourse=antithesis:100->99|Lem=_|Len=6
14	_	_	PRON	WP	PronType=Int	19	obj	_	Lem=_|Len=4
15	_	_	DET	DT	Definite=Def|PronType=Art	16	det	_	Discourse=attribution:101->102|Entity=(organization-23|Lem=_|Len=3
16	_	_	NOUN	NN	Number=Sing	17	nsubj	_	Entity=organization-23)|Lem=_|Len=5
17	_	_	VERB	VBZ	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	12	acl	_	Lem=say|Len=4
18	_	_	PRON	PRP	Case=Nom|Gender=Neut|Number=Sing|Person=3|PronType=Prs	19	nsubj	_	Discourse=same-unit:102->100|Entity=(object-16)|Lem=_|Len=2
19	_	_	VERB	VBZ	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	17	ccomp	_	Entity=object-16)abstract-91)|Lem=mean|Len=5|SpaceAfter=No
20	_	_	PUNCT	.	_	1	punct	_	Lem=_|Len=1

~~~


~~~ conllu
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 14 appos	color:blue
1	_	_	PRON	DT	Number=Sing|PronType=Dem	5	nsubj	_	Discourse=concession:119->120|Entity=(event-123)|Lem=*LOWER*|Len=4
2	_	_	AUX	VBZ	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	5	cop	_	Lem=be|Len=2
3	_	_	PART	RB	Polarity=Neg	5	advmod	_	Lem=_|Len=3
4	_	_	ADV	RB	_	5	advmod	_	Lem=_|Len=6
5	_	_	ADJ	JJ	Degree=Pos	0	root	_	Lem=_|Len=8
6	_	_	ADV	IN	_	5	advmod	_	Lem=_|Len=6
7	_	_	ADV	RB	_	8	advmod	_	Discourse=joint:120->111|Lem=_|Len=2
8	_	_	NOUN	NNS	Number=Plur	5	advcl	_	Lem=hat|Len=4
9	_	_	ADP	RP	_	8	compound:prt	_	Lem=_|Len=3
10	_	_	ADP	IN	_	11	case	_	Lem=_|Len=2
11	_	_	PRON	PRP	Case=Nom|Person=2|PronType=Prs	8	obl	_	Entity=(person-135|Lem=_|Len=3
12	_	_	NOUN	NN	Number=Sing	14	compound	_	Entity=(abstract-136|Lem=_|Len=4
13	_	_	NOUN	NN	Number=Sing	12	compound	_	Entity=abstract-136)|Lem=_|Len=7
14	_	_	NOUN	NNS	Number=Plur	11	appos	_	Entity=person-135)|Lem=guy|Len=4|SpaceAfter=No
15	_	_	PUNCT	.	_	5	punct	_	Lem=_|Len=1

~~~


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 11 appos	color:blue
1	_	_	PRON	DT	Number=Sing|PronType=Dem	4	nsubj	_	Discourse=preparation:50->59|Entity=(abstract-59)|Lem=_|Len=4
2	_	_	AUX	VBZ	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	4	cop	_	Lem=be|Len=2
3	_	_	DET	DT	Definite=Def|PronType=Art	4	det	_	Entity=(abstract-59|Lem=_|Len=3
4	_	_	NOUN	NN	Number=Sing	0	root	_	Lem=_|Len=4
5	_	_	ADP	IN	_	7	case	_	Lem=_|Len=4
6	_	_	DET	DT	Definite=Def|PronType=Art	7	det	_	Entity=(abstract-60|Lem=_|Len=3
7	_	_	NOUN	NN	Number=Sing	4	nmod	_	Lem=_|Len=7
8	_	_	ADP	IN	_	10	case	_	Lem=_|Len=2
9	_	_	DET	DT	Definite=Def|PronType=Art	10	det	_	Entity=(abstract-61|Lem=_|Len=3
10	_	_	NOUN	NN	Number=Sing	7	nmod	_	Entity=abstract-61)|Lem=_|Len=5
11	_	_	PROPN	NNP	Number=Sing	10	appos	_	Entity=(abstract-61)abstract-59)abstract-60)|Lem=_|Len=9|SpaceAfter=No
12	_	_	PUNCT	.	_	4	punct	_	Lem=_|Len=1

~~~


