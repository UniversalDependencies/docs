---
layout: base
title:  'Statistics of cc:preconj in UD_English-GUMReddit'
udver: '2'
---

## Treebank Statistics: UD_English-GUMReddit: Relations: `cc:preconj`

This relation is a language-specific subtype of <tt><a href="en_gumreddit-dep-cc.html">cc</a></tt>.

5 nodes (0%) are attached to their parents as `cc:preconj`.

5 instances of `cc:preconj` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.2.

The following 4 pairs of parts of speech are connected with `cc:preconj`: <tt><a href="en_gumreddit-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_gumreddit-pos-CCONJ.html">CCONJ</a></tt> (2; 40% instances), <tt><a href="en_gumreddit-pos-ADJ.html">ADJ</a></tt>-<tt><a href="en_gumreddit-pos-CCONJ.html">CCONJ</a></tt> (1; 20% instances), <tt><a href="en_gumreddit-pos-ADV.html">ADV</a></tt>-<tt><a href="en_gumreddit-pos-CCONJ.html">CCONJ</a></tt> (1; 20% instances), <tt><a href="en_gumreddit-pos-VERB.html">VERB</a></tt>-<tt><a href="en_gumreddit-pos-CCONJ.html">CCONJ</a></tt> (1; 20% instances).


~~~ conllu
# visual-style 18	bgColor:blue
# visual-style 18	fgColor:white
# visual-style 21	bgColor:blue
# visual-style 21	fgColor:white
# visual-style 21 18 cc:preconj	color:blue
1	_	_	ADV	RB	Degree=Pos|NumType=Ord	7	advmod	7:advmod	Discourse=manner:93->92|Lem=*LOWER*|Len=5
2	_	_	ADP	IN	_	7	case	7:case	Lem=_|Len=2
3	_	_	DET	DT	Definite=Ind|PronType=Art	4	det	4:det	Entity=(abstract-90(abstract-91|Lem=_|Len=1
4	_	_	NOUN	NN	Number=Sing	7	compound	7:compound	Entity=abstract-91)|Lem=_|Len=3|SpaceAfter=No
5	_	_	SYM	SYM	_	6	cc	6:cc	Lem=_|Len=1|SpaceAfter=No
6	_	_	NOUN	NN	Number=Sing	4	conj	4:conj:slash|7:compound	Entity=(abstract-92|Lem=_|Len=2
7	_	_	NOUN	NN	Number=Sing	14	obl	14:obl:on	Entity=abstract-90)abstract-92)|Lem=_|Len=5
8	_	_	CCONJ	CC	_	13	cc	13:cc	Discourse=sequence:94->93|Lem=_|Len=3
9	_	_	ADV	RB	PronType=Dem	13	advmod	13:advmod	Lem=_|Len=4
10	_	_	ADP	IN	_	13	case	13:case	Lem=_|Len=2
11	_	_	DET	DT	Definite=Def|PronType=Art	13	det	13:det	Bridge=abstract-89<abstract-93|Entity=(abstract-93|Lem=_|Len=3
12	_	_	ADJ	JJ	Degree=Pos|NumType=Ord	13	amod	13:amod	Lem=_|Len=6
13	_	_	NOUN	NN	Number=Sing	2	conj	2:conj:and|7:case	Entity=abstract-93)|Lem=_|Len=5
14	_	_	VERB	VB	Mood=Imp|Person=2|VerbForm=Fin	0	root	0:root	Lem=_|Len=4
15	_	_	DET	DT	Definite=Def|PronType=Art	16	det	16:det	Bridge=abstract-89<abstract-94|Entity=(abstract-94|Lem=_|Len=3
16	_	_	NOUN	NN	Number=Sing	14	obj	14:obj	Entity=abstract-94)|Lem=_|Len=5
17	_	_	ADP	IN	_	21	case	21:case	Lem=_|Len=2
18	_	_	CCONJ	CC	_	21	cc:preconj	21:cc:preconj	Lem=_|Len=6
19	_	_	DET	DT	Definite=Ind|PronType=Art	21	det	21:det	Entity=(abstract-95(abstract-96|Lem=a|Len=2
20	_	_	PUNCT	``	_	21	punct	21:punct	Lem=_|Len=1|SpaceAfter=No
21	_	_	NOUN	NN	Number=Sing	14	obl	14:obl:in	Lem=_|Len=2|SpaceAfter=No
22	_	_	PUNCT	''	_	21	punct	21:punct	Entity=abstract-96)|Lem=_|Len=1
23	_	_	CCONJ	CC	_	26	cc	26:cc	Lem=_|Len=2
24	_	_	DET	DT	Definite=Ind|PronType=Art	26	det	26:det	Entity=(abstract-97|Lem=a|Len=2
25	_	_	PUNCT	``	_	26	punct	26:punct	Lem=_|Len=1|SpaceAfter=No
26	_	_	NOUN	NN	Number=Sing	21	conj	14:obl:in|21:conj:or	Lem=*LOWER*|Len=2|SpaceAfter=No
27	_	_	PUNCT	''	_	26	punct	26:punct	Entity=abstract-95)abstract-97)|Lem=_|Len=1|SpaceAfter=No
28	_	_	PUNCT	.	_	14	punct	14:punct	Lem=_|Len=1

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 cc:preconj	color:blue
1	_	_	PRON	PRP	Case=Nom|Gender=Neut|Number=Sing|Person=3|PronType=Prs	4	expl	4:expl	Discourse=motivation:16->45|Entity=(abstract-20)|Lem=*LOWER*|Len=2
2	_	_	AUX	VBZ	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	4	cop	4:cop	Lem=be|Len=2
3	_	_	CCONJ	CC	_	4	cc:preconj	4:cc:preconj	Lem=_|Len=7
4	_	_	ADJ	JJ	Degree=Pos	0	root	0:root	Lem=_|Len=9|SpaceAfter=No
5	_	_	PUNCT	,	_	6	punct	6:punct	Lem=_|Len=1
6	_	_	ADJ	JJ	Degree=Pos	4	conj	4:conj:nor	Lem=_|Len=8|SpaceAfter=No
7	_	_	PUNCT	,	_	9	punct	9:punct	Lem=_|Len=1
8	_	_	CCONJ	CC	_	9	cc	9:cc	Lem=_|Len=3
9	_	_	ADJ	JJ	Degree=Pos	4	conj	4:conj:nor	Lem=_|Len=9
10	_	_	PART	TO	_	11	mark	11:mark	Entity=(abstract-20|Lem=_|Len=2
11	_	_	VERB	VB	VerbForm=Inf	4	csubj	4:csubj|6:csubj|9:csubj	Lem=_|Len=5
12	_	_	DET	DT	_	14	det	14:det	Bridge=abstract-14<abstract-21|Entity=(abstract-21|Lem=_|Len=3
13	_	_	NOUN	NN	Number=Sing	14	compound	14:compound	Lem=_|Len=6
14	_	_	NOUN	NNS	Number=Plur	11	obj	11:obj	Entity=abstract-20)abstract-21)|Lem=norm|Len=5|SpaceAfter=No
15	_	_	PUNCT	,	_	20	punct	20:punct	Lem=_|Len=1
16	_	_	SCONJ	IN	_	20	mark	20:mark	Discourse=justify:17->16|Lem=_|Len=5
17	_	_	PRON	PRP	Case=Nom|Number=Plur|Person=3|PronType=Prs	20	nsubj:pass	20:nsubj:pass	Entity=(abstract-21)|Lem=_|Len=4
18	_	_	AUX	VBP	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	20	aux:pass	20:aux:pass	Lem=be|Len=3
19	_	_	ADV	RB	Degree=Pos	20	advmod	20:advmod	Lem=_|Len=9
20	_	_	VERB	VBN	Tense=Past|VerbForm=Part|Voice=Pass	4	advcl	4:advcl:since	Lem=follow|Len=8
21	_	_	ADP	IN	_	22	case	22:case	Lem=_|Len=2
22	_	_	ADJ	JJS	Degree=Sup	20	obl	20:obl:by	Entity=(person-8)|Lem=_|Len=4|SpaceAfter=No
23	_	_	PUNCT	.	_	4	punct	4:punct	Lem=_|Len=1

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 cc:preconj	color:blue
1	_	_	PRON	PRP	Case=Nom|Gender=Neut|Number=Sing|Person=3|PronType=Prs	4	expl	4:expl	Discourse=circumstance:57->58|Entity=(event-53)|Lem=*LOWER*|Len=2
2	_	_	AUX	VBD	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	4	cop	4:cop	Lem=be|Len=3
3	_	_	CCONJ	CC	_	4	cc:preconj	4:cc:preconj	Lem=_|Len=6
4	_	_	ADV	RB	Degree=Pos	0	root	0:root	Lem=_|Len=5
5	_	_	ADV	RB	Degree=Pos	4	advmod	4:advmod	Lem=_|Len=2
6	_	_	CCONJ	CC	_	9	cc	9:cc	Lem=_|Len=2
7	_	_	DET	DT	Definite=Def|PronType=Art	9	det	9:det	Bridge=time-51<time-54|Entity=(time-54|Lem=_|Len=3
8	_	_	ADJ	JJ	Degree=Pos	9	amod	9:amod	Lem=_|Len=4
9	_	_	NOUN	NN	Number=Sing	4	conj	4:conj:or	Entity=time-54)|Lem=_|Len=3
10	_	_	SCONJ	IN	_	13	mark	13:mark	Discourse=attribution:58->59|Entity=(event-53|Lem=_|Len=4
11	_	_	PRON	PRP	Case=Nom|Number=Sing|Person=1|PronType=Prs	13	nsubj	13:nsubj	Entity=(person-45)|Lem=_|Len=1
12	_	_	AUX	VBD	Mood=Ind|Number=Sing|Person=1|Tense=Past|VerbForm=Fin	13	aux	13:aux	Lem=be|Len=3
13	_	_	VERB	VBG	Tense=Pres|VerbForm=Part	4	csubj	4:csubj|9:csubj	Lem=tell|Len=7
14	_	_	PRON	PRP$	Number=Sing|Person=1|Poss=Yes|PronType=Prs	15	nmod:poss	15:nmod:poss	Entity=(person-55(person-45)|Lem=_|Len=2
15	_	_	NOUN	NN	Number=Sing	13	iobj	13:iobj	Entity=person-55)|Lem=_|Len=9
16	_	_	ADP	IN	_	18	case	18:case	Discourse=cause:59->62|Lem=_|Len=5
17	_	_	SCONJ	WRB	PronType=Int	18	mark	18:mark	Lem=_|Len=3
18	_	_	ADJ	JJ	Degree=Pos	13	advcl	13:advcl:about_how	Lem=_|Len=10
19	_	_	PRON	PRP	Case=Nom|Gender=Neut|Number=Sing|Person=3|PronType=Prs	18	expl	18:expl	Entity=(event-56)|Lem=_|Len=2
20	_	_	AUX	VBD	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	18	cop	18:cop	Lem=be|Len=3
21	_	_	SCONJ	IN	_	25	mark	25:mark	Entity=(event-56|Lem=_|Len=3
22	_	_	PRON	PRP	Case=Nom|Gender=Fem|Number=Sing|Person=3|PronType=Prs	25	nsubj	25:nsubj	Entity=(person-48)|Lem=she|Len=3
23	_	_	PART	TO	_	25	mark	25:mark	Lem=_|Len=2
24	_	_	AUX	VB	VerbForm=Inf	25	aux	25:aux	Lem=_|Len=2
25	_	_	VERB	VBG	Tense=Pres|VerbForm=Part	18	csubj	18:csubj	Lem=ask|Len=6
26	_	_	PRON	PRP	Case=Acc|Number=Sing|Person=1|PronType=Prs	25	obj	25:obj|30:nsubj:xsubj	Entity=(person-45)|Lem=I|Len=2
27	_	_	PART	TO	_	30	mark	30:mark	Lem=_|Len=2
28	_	_	AUX	VB	VerbForm=Inf	30	cop	30:cop	Lem=_|Len=2
29	_	_	DET	DT	Definite=Ind|PronType=Art	30	det	30:det	Entity=(person-49|Lem=_|Len=1
30	_	_	NOUN	NN	Number=Sing	25	xcomp	25:xcomp	Entity=event-53)event-56)person-49)|Lem=_|Len=9|SpaceAfter=No
31	_	_	PUNCT	.	_	4	punct	4:punct	Lem=_|Len=1

~~~


