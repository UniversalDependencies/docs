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
1	_	_	ADV	RB	Degree=Pos|NumType=Ord	7	advmod	7:advmod	Discourse=mode-manner:93->89:2|Lem=*LOWER*|Len=5
2	_	_	ADP	IN	_	7	case	7:case	Lem=_|Len=2
3	_	_	DET	DT	Definite=Ind|PronType=Art	4	det	4:det	Entity=(91-abstract-new-cf3-5-coref(92-abstract-new-cf8-2-coref|Lem=_|Len=1
4	_	_	NOUN	NN	Number=Sing	7	compound	7:compound	Entity=92)|Lem=_|Len=3|SpaceAfter=No|XML=<w>
5	_	_	SYM	SYM	_	6	cc	6:cc	Lem=_|Len=1|SpaceAfter=No
6	_	_	NOUN	NN	Number=Sing	4	conj	4:conj:slash|7:compound	Entity=(93-abstract-new-cf4-2-coref|Lem=_|Len=2|XML=</w>
7	_	_	NOUN	NN	Number=Sing	14	obl	14:obl:on	Entity=93)91)|Lem=_|Len=5
8	_	_	CCONJ	CC	_	13	cc	13:cc	Discourse=joint-sequence_m:94->93:0|Lem=_|Len=3
9	_	_	ADV	RB	PronType=Dem	13	advmod	13:advmod	Lem=_|Len=4
10	_	_	ADP	IN	_	13	case	13:case	Lem=_|Len=2
11	_	_	DET	DT	Definite=Def|PronType=Art	13	det	13:det	Bridge=90<94|Entity=(94-abstract-acc:inf-cf2-3-sgl|Lem=_|Len=3
12	_	_	ADJ	JJ	Degree=Pos|NumType=Ord	13	amod	13:amod	Lem=_|Len=6
13	_	_	NOUN	NN	Number=Sing	7	conj	7:conj:and|14:obl:on	Entity=94)|Lem=_|Len=5
14	_	_	VERB	VB	Mood=Imp|Person=2|VerbForm=Fin	0	root	0:root	Lem=_|Len=4
15	_	_	DET	DT	Definite=Def|PronType=Art	16	det	16:det	Bridge=90<95|Entity=(95-abstract-acc:inf-cf1-2-sgl|Lem=_|Len=3
16	_	_	NOUN	NN	Number=Sing	14	obj	14:obj	Entity=95)|Lem=_|Len=5
17	_	_	ADP	IN	_	21	case	21:case	Lem=_|Len=2
18	_	_	CCONJ	CC	_	21	cc:preconj	21:cc:preconj	Lem=_|Len=6
19	_	_	DET	DT	Definite=Ind|PronType=Art	21	det	21:det	Entity=(96-abstract-new-cf5-3,8-coref(97-abstract-new-cf6-3-sgl|Lem=a|Len=2
20	_	_	PUNCT	``	_	21	punct	21:punct	Lem=_|Len=1|SpaceAfter=No
21	_	_	NOUN	NN	Number=Sing	14	obl	14:obl:in	Lem=_|Len=2|SpaceAfter=No
22	_	_	PUNCT	''	_	21	punct	21:punct	Entity=97)|Lem=_|Len=1
23	_	_	CCONJ	CC	_	26	cc	26:cc	Lem=_|Len=2
24	_	_	DET	DT	Definite=Ind|PronType=Art	26	det	26:det	Entity=(98-abstract-new-cf7-3-sgl|Lem=a|Len=2
25	_	_	PUNCT	``	_	26	punct	26:punct	Lem=_|Len=1|SpaceAfter=No
26	_	_	NOUN	NN	Number=Sing	21	conj	14:obl:in|21:conj:or	Lem=*LOWER*|Len=2|SpaceAfter=No
27	_	_	PUNCT	''	_	26	punct	26:punct	Entity=98)96)|Lem=_|Len=1|SpaceAfter=No
28	_	_	PUNCT	.	_	14	punct	14:punct	Lem=_|Len=1

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 cc:preconj	color:blue
1	_	_	PRON	PRP	Case=Nom|Gender=Neut|Number=Sing|Person=3|PronType=Prs	4	expl	4:expl	Discourse=explanation-motivation:16->47:5|Entity=(20-abstract-new-cf3-1-cata)|Lem=*LOWER*|Len=2
2	_	_	AUX	VBZ	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	4	cop	4:cop	Lem=be|Len=2
3	_	_	CCONJ	CC	_	4	cc:preconj	4:cc:preconj	Lem=_|Len=7
4	_	_	ADJ	JJ	Degree=Pos	0	root	0:root	Lem=_|Len=9|SpaceAfter=No
5	_	_	PUNCT	,	_	6	punct	6:punct	Lem=_|Len=1
6	_	_	ADJ	JJ	Degree=Pos	4	conj	4:conj:nor	Lem=_|Len=8|SpaceAfter=No
7	_	_	PUNCT	,	_	9	punct	9:punct	Lem=_|Len=1
8	_	_	CCONJ	CC	_	9	cc	9:cc	Lem=_|Len=3
9	_	_	ADJ	JJ	Degree=Pos	4	conj	4:conj:nor	Lem=_|Len=9
10	_	_	PART	TO	_	11	mark	11:mark	Entity=(20-abstract-acc:com-cf3-2-coref|Lem=_|Len=2
11	_	_	VERB	VB	VerbForm=Inf	4	csubj	4:csubj|6:csubj|9:csubj	Lem=_|Len=5
12	_	_	DET	DT	PronType=Tot	14	det	14:det	Bridge=14<21|Entity=(21-abstract-acc:inf-cf1-3-coref|Lem=_|Len=3
13	_	_	NOUN	NN	Number=Sing	14	compound	14:compound	Lem=_|Len=6
14	_	_	NOUN	NNS	Number=Plur	11	obj	11:obj	Entity=21)20)|Lem=norm|Len=5|SpaceAfter=No
15	_	_	PUNCT	,	_	20	punct	20:punct	Lem=_|Len=1
16	_	_	SCONJ	IN	_	20	mark	20:mark	Discourse=explanation-justify:17->16:0|Lem=_|Len=5
17	_	_	PRON	PRP	Case=Nom|Number=Plur|Person=3|PronType=Prs	20	nsubj:pass	20:nsubj:pass	Entity=(21-abstract-giv:act-cf1-1-ana)|Lem=_|Len=4
18	_	_	AUX	VBP	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	20	aux:pass	20:aux:pass	Lem=be|Len=3
19	_	_	ADV	RB	Degree=Pos	20	advmod	20:advmod	Lem=_|Len=9
20	_	_	VERB	VBN	Tense=Past|VerbForm=Part|Voice=Pass	4	advcl	4:advcl:since	Lem=follow|Len=8
21	_	_	ADP	IN	_	22	case	22:case	Lem=_|Len=2
22	_	_	ADJ	JJS	Degree=Sup	20	obl:agent	20:obl:agent	Entity=(8-person-giv:inact-cf2-1-coref)|Lem=_|Len=4|SpaceAfter=No
23	_	_	PUNCT	.	_	4	punct	4:punct	Lem=_|Len=1

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 cc:preconj	color:blue
1	_	_	PRON	PRP	Case=Nom|Gender=Neut|Number=Sing|Person=3|PronType=Prs	4	expl	4:expl	Discourse=context-circumstance:57->58:0|Entity=(53-event-new-cf4-1-cata)|Lem=*LOWER*|Len=2
2	_	_	AUX	VBD	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	4	cop	4:cop	Lem=be|Len=3
3	_	_	CCONJ	CC	_	4	cc:preconj	4:cc:preconj	Lem=_|Len=6
4	_	_	ADV	RBR	Degree=Cmp	0	root	0:root	Lem=late|Len=5
5	_	_	ADV	RB	Degree=Pos	4	advmod	4:advmod	Lem=_|Len=2
6	_	_	CCONJ	CC	_	9	cc	9:cc	Lem=_|Len=2
7	_	_	DET	DT	Definite=Def|PronType=Art	9	det	9:det	Bridge=51<54|Entity=(54-time-acc:inf-cf6-3-sgl|Lem=_|Len=3
8	_	_	ADJ	JJ	Degree=Pos	9	amod	9:amod	Lem=_|Len=4
9	_	_	NOUN	NN	Number=Sing	4	conj	4:conj:or	Entity=54)|Lem=_|Len=3
10	_	_	SCONJ	IN	_	13	mark	13:mark	Discourse=attribution-positive:58->59:0|Entity=(53-event-acc:com-cf4-4-coref|Lem=_|Len=4
11	_	_	PRON	PRP	Case=Nom|Number=Sing|Person=1|PronType=Prs	13	nsubj	13:nsubj	Entity=(45-person-giv:act-cf1*-1-ana)|Lem=_|Len=1
12	_	_	AUX	VBD	Mood=Ind|Number=Sing|Person=1|Tense=Past|VerbForm=Fin	13	aux	13:aux	Lem=be|Len=3
13	_	_	VERB	VBG	Tense=Pres|VerbForm=Part	4	csubj	4:csubj|9:csubj	Lem=tell|Len=7
14	_	_	PRON	PRP$	Number=Sing|Person=1|Poss=Yes|PronType=Prs	15	nmod:poss	15:nmod:poss	Entity=(55-person-new-cf7-2-sgl(45-person-giv:act-cf1*-1-ana)|Lem=_|Len=2
15	_	_	NOUN	NN	Number=Sing	13	iobj	13:iobj	Entity=55)|Lem=_|Len=9
16	_	_	ADP	IN	_	18	case	18:case	Discourse=causal-cause:59->62:3|Lem=_|Len=5
17	_	_	SCONJ	WRB	PronType=Int	18	obl	18:obl	Lem=_|Len=3
18	_	_	ADJ	JJ	Degree=Pos	13	obl	13:obl:about	Lem=_|Len=10
19	_	_	PRON	PRP	Case=Nom|Gender=Neut|Number=Sing|Person=3|PronType=Prs	20	expl	20:expl	Entity=(56-event-new-cf5-1-cata)|Lem=_|Len=2
20	_	_	VERB	VBD	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	18	acl	18:acl	Lem=be|Len=3
21	_	_	SCONJ	IN	_	25	mark	25:mark	Entity=(56-event-acc:com-cf5-5-coref|Lem=_|Len=3
22	_	_	PRON	PRP	Case=Nom|Gender=Fem|Number=Sing|Person=3|PronType=Prs	25	nsubj	25:nsubj	Entity=(48-person-giv:act-cf2-1-ana)|Lem=she|Len=3
23	_	_	PART	TO	_	25	mark	25:mark	Lem=_|Len=2
24	_	_	AUX	VB	VerbForm=Inf	25	aux	25:aux	Lem=_|Len=2
25	_	_	VERB	VBG	Tense=Pres|VerbForm=Part	20	csubj	20:csubj	Lem=ask|Len=6
26	_	_	PRON	PRP	Case=Acc|Number=Sing|Person=1|PronType=Prs	25	obj	25:obj|30:nsubj:xsubj	Entity=(45-person-giv:act-cf1*-1-ana)|Lem=I|Len=2
27	_	_	PART	TO	_	30	mark	30:mark	Lem=_|Len=2
28	_	_	AUX	VB	VerbForm=Inf	30	cop	30:cop	Lem=_|Len=2
29	_	_	DET	DT	Definite=Ind|PronType=Art	30	det	30:det	Entity=(49-person-giv:act-cf3-2-coref|Lem=_|Len=1
30	_	_	NOUN	NN	Number=Sing	25	xcomp	25:xcomp	Entity=49)56)53)|Lem=_|Len=9|SpaceAfter=No
31	_	_	PUNCT	.	_	4	punct	4:punct	Lem=_|Len=1

~~~


