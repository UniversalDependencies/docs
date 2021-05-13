---
layout: base
title:  'Statistics of aux:pass in UD_English-GUMReddit'
udver: '2'
---

## Treebank Statistics: UD_English-GUMReddit: Relations: `aux:pass`

This relation is a language-specific subtype of <tt><a href="en_gumreddit-dep-aux.html">aux</a></tt>.

99 nodes (1%) are attached to their parents as `aux:pass`.

99 instances of `aux:pass` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.39393939393939.

The following 2 pairs of parts of speech are connected with `aux:pass`: <tt><a href="en_gumreddit-pos-VERB.html">VERB</a></tt>-<tt><a href="en_gumreddit-pos-AUX.html">AUX</a></tt> (98; 99% instances), <tt><a href="en_gumreddit-pos-ADJ.html">ADJ</a></tt>-<tt><a href="en_gumreddit-pos-AUX.html">AUX</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 6 aux:pass	color:blue
1	_	_	PRON	EX	_	2	expl	2:expl	Discourse=background:22->25|Lem=*LOWER*|Len=5
2	_	_	VERB	VBD	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	0	root	0:root	Lem=be|Len=3
3	_	_	DET	DT	Definite=Ind|PronType=Art	4	det	4:det	Entity=(event-39|Lem=a|Len=2
4	_	_	NOUN	NN	Number=Sing	2	nsubj	2:nsubj|7:nsubj:pass	Lem=_|Len=10
5	_	_	PRON	WDT	PronType=Rel	7	nsubj:pass	4:ref	Discourse=antithesis:23->22|Lem=_|Len=4
6	_	_	AUX	VBD	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	7	aux:pass	7:aux:pass	Lem=be|Len=3
7	_	_	VERB	VBN	Tense=Past|VerbForm=Part|Voice=Pass	4	acl:relcl	4:acl:relcl	Lem=do|Len=4
8	_	_	ADP	IN	_	11	case	11:case	Lem=_|Len=4
9	_	_	DET	DT	Definite=Ind|PronType=Art	11	det	11:det	Entity=(abstract-40|Lem=_|Len=1
10	_	_	NOUN	NN	Number=Sing	11	compound	11:compound	Entity=(animal-41)|Lem=_|Len=3
11	_	_	NOUN	NN	Number=Sing	7	obl	7:obl:with|14:nsubj:pass	Lem=_|Len=10
12	_	_	PRON	WDT	PronType=Rel	14	nsubj:pass	11:ref	Discourse=elaboration:24->23|Lem=_|Len=5
13	_	_	AUX	VBD	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	14	aux:pass	14:aux:pass	Lem=be|Len=3
14	_	_	VERB	VBN	Tense=Past|VerbForm=Part|Voice=Pass	11	acl:relcl	11:acl:relcl	Lem=raise|Len=6
15	_	_	ADP	IN	_	17	case	17:case	Lem=_|Len=2
16	_	_	DET	DT	Definite=Ind|PronType=Art	17	det	17:det	Entity=(place-42|Lem=a|Len=2
17	_	_	NOUN	NN	Number=Sing	14	obl	14:obl:in	Lem=_|Len=11
18	_	_	ADP	IN	_	21	case	21:case	Lem=_|Len=2
19	_	_	ADJ	JJ	Degree=Pos	21	amod	21:amod	Entity=(abstract-43|Lem=_|Len=10
20	_	_	ADJ	JJ	Degree=Pos	21	amod	21:amod	Lem=_|Len=4
21	_	_	NOUN	NN	Number=Sing	17	nmod	17:nmod:of	Lem=_|Len=9
22	_	_	ADP	IN	_	23	case	23:case	Lem=_|Len=2
23	_	_	NOUN	NN	Number=Sing	21	nmod	21:nmod:of	Entity=(substance-44)|Lem=_|Len=4|SpaceAfter=No
24	_	_	PUNCT	,	_	25	punct	25:punct	Lem=_|Len=1
25	_	_	NOUN	NN	Number=Sing	23	conj	21:nmod:of|23:conj	Entity=(substance-45)|Lem=_|Len=5|SpaceAfter=No
26	_	_	PUNCT	,	_	27	punct	27:punct	Lem=_|Len=1
27	_	_	X	FW	Abbr=Yes	23	conj	21:nmod:of|23:conj	Entity=event-39)abstract-40)place-42)abstract-43)|Lem=_|Len=4

~~~


~~~ conllu
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 13 12 aux:pass	color:blue
1	_	_	PRON	PRP	Case=Nom|Number=Sing|Person=2|PronType=Prs	4	nsubj	4:nsubj|9:nsubj|13:nsubj:xsubj	Discourse=concession:18->20|Entity=(event-16(person-5)|Lem=*LOWER*|Len=3
2	_	_	AUX	VBP	Mood=Ind|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin	4	aux	4:aux	Lem=_|Len=2
3	_	_	PART	RB	Polarity=Neg	4	advmod	4:advmod	Lem=not|Len=3
4	_	_	VERB	VB	VerbForm=Inf	0	root	0:root	Lem=_|Len=2
5	_	_	ADP	IN	_	7	case	7:case	Lem=_|Len=2
6	_	_	DET	DT	Definite=Def|PronType=Art	7	det	7:det	Entity=(place-17|Lem=_|Len=3
7	_	_	NOUN	NN	Number=Sing	4	obl	4:obl:to	Entity=place-17)|Lem=_|Len=3
8	_	_	CCONJ	CC	_	9	cc	9:cc	Discourse=joint:19->18|Lem=_|Len=3
9	_	_	VERB	VBP	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	4	conj	4:conj:and	Lem=_|Len=6
10	_	_	PART	RB	Polarity=Neg	13	advmod	13:advmod	Lem=_|Len=3
11	_	_	PART	TO	_	13	mark	13:mark	Lem=_|Len=2
12	_	_	AUX	VB	VerbForm=Inf	13	aux:pass	13:aux:pass	Lem=_|Len=2
13	_	_	ADJ	JJ	Degree=Pos	9	xcomp	9:xcomp	Lem=_|Len=5
14	_	_	ADV	RB	Degree=Pos	13	advmod	13:advmod	Entity=event-16)|Lem=_|Len=10|SpaceAfter=No
15	_	_	PUNCT	,	_	20	punct	20:punct	Lem=_|Len=1
16	_	_	CCONJ	CC	_	20	cc	20:cc	Discourse=joint:20->5|Lem=_|Len=3
17	_	_	PRON	DT	Number=Sing|PronType=Dem	20	nsubj	20:nsubj	Entity=(event-16)|Lem=_|Len=4
18	_	_	AUX	VBZ	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	20	aux	20:aux	Lem=do|Len=4
19	_	_	PART	RB	Polarity=Neg	20	advmod	20:advmod	Lem=not|Len=3
20	_	_	VERB	VB	VerbForm=Inf	4	conj	4:conj:but	Lem=_|Len=4
21	_	_	SCONJ	IN	_	25	mark	25:mark	Lem=_|Len=4
22	_	_	PRON	PRP	Case=Nom|Number=Sing|Person=2|PronType=Prs	25	nsubj	25:nsubj|26:nsubj:xsubj	Entity=(person-5)|Lem=_|Len=3
23	_	_	AUX	MD	VerbForm=Fin	25	aux	25:aux	Lem=can|Len=2
24	_	_	PART	RB	Polarity=Neg	25	advmod	25:advmod	Lem=not|Len=3
25	_	_	VERB	VB	VerbForm=Inf	20	ccomp	20:ccomp	Lem=_|Len=5
26	_	_	VERB	VBG	VerbForm=Ger	25	xcomp	25:xcomp	Lem=work|Len=7
27	_	_	ADP	RP	_	26	compound:prt	26:compound:prt	Lem=_|Len=3

~~~


