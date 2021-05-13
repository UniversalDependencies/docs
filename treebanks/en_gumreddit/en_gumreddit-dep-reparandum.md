---
layout: base
title:  'Statistics of reparandum in UD_English-GUMReddit'
udver: '2'
---

## Treebank Statistics: UD_English-GUMReddit: Relations: `reparandum`

This relation is universal.

3 nodes (0%) are attached to their parents as `reparandum`.

3 instances of `reparandum` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.66666666666667.

The following 3 pairs of parts of speech are connected with `reparandum`: <tt><a href="en_gumreddit-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_gumreddit-pos-NOUN.html">NOUN</a></tt> (1; 33% instances), <tt><a href="en_gumreddit-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_gumreddit-pos-PART.html">PART</a></tt> (1; 33% instances), <tt><a href="en_gumreddit-pos-VERB.html">VERB</a></tt>-<tt><a href="en_gumreddit-pos-VERB.html">VERB</a></tt> (1; 33% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 7 reparandum	color:blue
1	_	_	ADV	WRB	PronType=Int	2	advmod	2:advmod	Discourse=joint:36->35|Entity=(time-34|Lem=*LOWER*|Len=3
2	_	_	ADJ	JJ	Degree=Pos	3	advmod	3:advmod	Lem=_|Len=4
3	_	_	NOUN	NNS	Number=Plur	0	root	0:root	Lem=day|Len=4
4	_	_	DET	DT	Definite=Ind|PronType=Art	5	det	5:det	Entity=(time-35|Lem=_|Len=1
5	_	_	NOUN	NN	Number=Sing	3	nmod:tmod	3:nmod:tmod	Entity=time-34)time-35)|Lem=_|Len=4
6	_	_	CCONJ	CC	_	9	cc	9:cc	Lem=_|Len=3
7	_	_	NOUN	NN	Number=Sing|Typo=Yes	9	reparandum	9:reparandum	Entity=(time-36|Lem=_|Len=4
8	_	_	ADJ	JJ	Degree=Pos	9	amod	9:amod	Lem=_|Len=4
9	_	_	NOUN	NNS	Number=Plur	5	conj	3:nmod:tmod|5:conj:and	Entity=time-36)|Lem=hour|Len=5|SpaceAfter=No
10	_	_	PUNCT	.	_	3	punct	3:punct	Lem=_|Len=1

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 8 reparandum	color:blue
1	_	_	NOUN	NN	Number=Sing	16	nsubj	3:nsubj|16:nsubj	Discourse=joint:22->14|Entity=(person-39|Lem=*LOWER*|Len=6
2	_	_	PRON	WP	PronType=Rel	3	nsubj	1:ref	Discourse=antithesis:23->22|Lem=_|Len=3
3	_	_	VERB	VBZ	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	1	acl:relcl	1:acl:relcl	Lem=bother|Len=7
4	_	_	PART	TO	_	6	mark	6:mark	Lem=_|Len=2
5	_	_	ADV	RB	Degree=Pos	6	advmod	6:advmod	Lem=_|Len=8
6	_	_	VERB	VB	VerbForm=Inf	3	xcomp	3:xcomp	Lem=_|Len=4
7	_	_	ADP	IN	_	10	case	10:case	Lem=_|Len=4
8	_	_	PART	POS	Typo=Yes	10	reparandum	10:reparandum	Lem=_|Len=2
9	_	_	DET	DT	Definite=Def|PronType=Art	10	det	10:det	Lem=_|Len=3
10	_	_	NOUN	NNS	Number=Plur	6	obl	6:obl:into	Lem=detail|Len=7
11	_	_	ADP	IN	_	14	case	14:case	Lem=_|Len=2
12	_	_	PROPN	NNP	Number=Sing	14	nmod:poss	14:nmod:poss	Entity=(abstract-7(organization-8-NASA|Lem=NASA|Len=4
13	_	_	PART	POS	_	12	case	12:case	Entity=organization-8-NASA)|Lem=_|Len=2
14	_	_	NOUN	NNS	Number=Plur	10	nmod	10:nmod:of	Entity=person-39)abstract-7)|Lem=claim|Len=6
15	_	_	AUX	MD	VerbForm=Fin	16	aux	16:aux	Discourse=attribution:24->25|Lem=_|Len=4
16	_	_	VERB	VB	VerbForm=Inf	0	root	0:root	Lem=_|Len=7
17	_	_	PRON	PRP	Case=Nom|Number=Plur|Person=3|PronType=Prs	19	nsubj	19:nsubj	Discourse=same-unit:25->22|Entity=(organization-8-NASA)|Lem=_|Len=4
18	_	_	ADV	RB	Polarity=Neg	19	advmod	19:advmod	Lem=_|Len=5
19	_	_	VERB	VBD	Mood=Ind|Number=Plur|Person=3|Tense=Past|VerbForm=Fin	16	ccomp	16:ccomp	Lem=go|Len=4
20	_	_	ADP	IN	_	22	case	22:case	Lem=_|Len=2
21	_	_	DET	DT	Definite=Def|PronType=Art	22	det	22:det	Entity=(place-40|Lem=_|Len=3
22	_	_	NOUN	NN	Number=Sing	19	obl	19:obl:to	Entity=place-40)|Lem=_|Len=4|SpaceAfter=No
23	_	_	PUNCT	,	_	27	punct	27:punct	Lem=_|Len=1
24	_	_	VERB	VB	VerbForm=Inf	27	advmod	27:advmod	Lem=_|Len=3
25	_	_	ADV	RB	Degree=Pos	24	fixed	24:fixed	Lem=_|Len=5
26	_	_	NUM	CD	NumForm=Digit|NumType=Card	27	nummod	27:nummod	Entity=(event-41|Lem=_|Len=1
27	_	_	NOUN	NNS	Number=Plur	19	obl:npmod	19:obl:npmod	Entity=event-41)|Lem=time|Len=5|SpaceAfter=No
28	_	_	PUNCT	.	_	16	punct	16:punct	Lem=_|Len=1

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 reparandum	color:blue
1	_	_	ADJ	JJ	Degree=Pos	2	amod	2:amod	Discourse=circumstance:95->96|Entity=(person-109|Lem=*LOWER*|Len=5
2	_	_	NOUN	NNS	Number=Plur	5	nsubj	5:nsubj	Entity=person-109)|Lem=colleague|Len=10
3	_	_	ADV	RB	Degree=Pos	5	advmod	5:advmod	Lem=_|Len=5
4	_	_	VERB	VB	Typo=Yes|VerbForm=Inf	5	reparandum	5:reparandum	Lem=_|Len=7
5	_	_	VERB	VB	Typo=Yes|VerbForm=Inf	0	root	0:root	Lem=_|Len=5
6	_	_	PRON	PRP	Case=Acc|Number=Sing|Person=1|PronType=Prs	5	obj	5:obj	Entity=(person-81)|Lem=I|Len=2
7	_	_	PART	TO	_	8	mark	8:mark	Discourse=attribution:96->97|Lem=_|Len=2
8	_	_	VERB	VB	VerbForm=Inf	5	advcl	5:advcl:to	Lem=_|Len=3
9	_	_	SCONJ	IN	_	13	mark	13:mark	Discourse=question:97->98|Lem=_|Len=2
10	_	_	PRON	PRP	Case=Nom|Gender=Neut|Number=Sing|Person=3|PronType=Prs	13	expl	13:expl	Entity=(event-110)|Lem=_|Len=2
11	_	_	AUX	VBZ	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	13	cop	13:cop	Lem=be|Len=2
12	_	_	PART	RB	Polarity=Neg	13	advmod	13:advmod	Lem=_|Len=3
13	_	_	ADJ	JJ	Degree=Pos	8	ccomp	8:ccomp	Lem=_|Len=3
14	_	_	SCONJ	IN	_	17	mark	17:mark	Lem=_|Len=3
15	_	_	PRON	PRP	Case=Nom|Number=Sing|Person=1|PronType=Prs	17	nsubj	17:nsubj	Entity=(person-81)|Lem=I|Len=2
16	_	_	PART	TO	_	17	mark	17:mark	Entity=(event-110|Lem=_|Len=2
17	_	_	VERB	VB	VerbForm=Inf	13	csubj	13:csubj	Lem=_|Len=3
18	_	_	ADV	RB	Degree=Pos	17	advmod	17:advmod	Entity=event-110)|Lem=_|Len=5|SpaceAfter=No
19	_	_	PUNCT	.	_	5	punct	5:punct	Lem=_|Len=1

~~~


