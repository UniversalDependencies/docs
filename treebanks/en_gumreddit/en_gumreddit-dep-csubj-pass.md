---
layout: base
title:  'Statistics of csubj:pass in UD_English-GUMReddit'
udver: '2'
---

## Treebank Statistics: UD_English-GUMReddit: Relations: `csubj:pass`

This relation is a language-specific subtype of <tt><a href="en_gumreddit-dep-csubj.html">csubj</a></tt>.

1 nodes (0%) are attached to their parents as `csubj:pass`.

1 instances of `csubj:pass` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 9.

The following 1 pairs of parts of speech are connected with `csubj:pass`: <tt><a href="en_gumreddit-pos-VERB.html">VERB</a></tt>-<tt><a href="en_gumreddit-pos-VERB.html">VERB</a></tt> (1; 100% instances).


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 19	bgColor:blue
# visual-style 19	fgColor:white
# visual-style 19 10 csubj:pass	color:blue
1	_	_	ADV	RB	_	5	advmod	5:advmod	Discourse=joint-list_m:14->4:4:grf-seq-+dm-also-128|Lem=*LOWER*|Len=4|SpaceAfter=No
2	_	_	PUNCT	,	_	1	punct	1:punct	Lem=_|Len=1
3	_	_	PRON	PRP	Case=Nom|Gender=Neut|Number=Sing|Person=3|PronType=Prs	5	expl	5:expl	Entity=(16-abstract-new-cf5-1-cata)|Lem=_|Len=2
4	_	_	AUX	VBZ	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	5	cop	5:cop	Lem=be|Len=2
5	_	_	ADJ	JJ	Degree=Pos	0	root	0:root	Lem=_|Len=11|MSeg=interest-ing
6	_	_	PART	TO	_	7	mark	7:mark	Entity=(16-abstract-acc:com-cf5-2,11-coref|Lem=_|Len=2
7	_	_	VERB	VB	VerbForm=Inf	5	csubj	5:csubj	Lem=_|Len=4
8	_	_	SCONJ	IN	_	19	mark	19:mark	Lem=_|Len=4
9	_	_	PROPN	NNP	Number=Sing	10	obl:npmod	10:obl:npmod	Entity=(17-event-new-cf1-2,8-disc(18-person-new-cf10-1-coref)|Lem=_|Len=3
10	_	_	VERB	VBG	VerbForm=Ger	19	csubj:pass	19:csubj:pass|25:csubj:xsubj	Lem=go|Len=5|MSeg=go-ing
11	_	_	ADP	IN	_	13	case	13:case	Lem=_|Len=7
12	_	_	DET	DT	Definite=Def|PronType=Art	13	det	13:det	Entity=(19-object-new-cf8-2-sgl|Lem=_|Len=3
13	_	_	NOUN	NN	Number=Sing	10	obl	10:obl:through	Entity=19)|Lem=_|Len=4
14	_	_	ADP	IN	_	17	case	17:case	Lem=_|Len=4|MSeg=in-to
15	_	_	DET	DT	Definite=Def|PronType=Art	17	det	17:det	Entity=(4-place-giv:inact-cf3-2,3-coref|Lem=_|Len=3
16	_	_	PROPN	NNP	Number=Sing	17	compound	17:compound	Lem=_|Len=7
17	_	_	PROPN	NNP	Number=Sing	10	obl	10:obl:into	Entity=4)17)|Lem=_|Len=5
18	_	_	AUX	VBD	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	19	aux:pass	19:aux:pass	Lem=be|Len=3
19	_	_	VERB	VBN	Tense=Past|VerbForm=Part|Voice=Pass	7	ccomp	7:ccomp	Lem=say|Len=4|MSeg=sai-d
20	_	_	PART	TO	_	25	mark	25:mark	Lem=_|Len=2
21	_	_	AUX	VB	VerbForm=Inf	25	cop	25:cop	Lem=_|Len=2
22	_	_	PUNCT	``	_	25	punct	25:punct	Lem=''|Len=1|SpaceAfter=No|XML=<quote>
23	_	_	DET	DT	Definite=Def|PronType=Art	25	det	25:det	Entity=(20-time-new-cf9-3-sgl|Lem=_|Len=3
24	_	_	ADJ	JJ	Degree=Pos|NumForm=Word|NumType=Ord	25	amod	25:amod	Lem=_|Len=5
25	_	_	NOUN	NN	Number=Sing	19	xcomp	19:xcomp	Lem=_|Len=4
26	_	_	ADP	IN	_	28	case	28:case	Lem=_|Len=2
27	_	_	NOUN	NN	Number=Sing	28	compound	28:compound	Entity=(21-abstract-new-cf11-2-sgl(22-person-new-cf12-1-sgl)|Lem=*LOWER*|Len=7
28	_	_	NOUN	NN	Number=Sing	25	nmod	25:nmod:in	Entity=21)20)|Lem=*LOWER*|Len=7|SpaceAfter=No
29	_	_	PUNCT	''	_	25	punct	25:punct	Entity=16)|Lem=''|Len=1|SpaceAfter=No|XML=</quote>
30	_	_	PUNCT	,	_	31	punct	31:punct	Lem=_|Len=1
31	_	_	CCONJ	CC	_	43	cc	43:cc	Discourse=adversative-antithesis:15->14:0:_;joint-list:15->14:2:0:orp-and-158|Lem=_|Len=3
32	_	_	SCONJ	IN	_	34	mark	34:mark	Discourse=contingency-condition:16->19:1:dm-if-159+mrf-md-169|Lem=_|Len=2
33	_	_	PRON	EX	PronType=Dem	34	expl	34:expl	Lem=_|Len=5
34	_	_	VERB	VBD	Mood=Ind|Number=Plur|Person=3|Tense=Past|VerbForm=Fin	43	advcl	43:advcl:if	Cxn=Existential-CopPred-ThereExpl|Lem=be|Len=4
35	_	_	ADJ	JJ	Degree=Pos	36	amod	36:amod	Entity=(10-organization-giv:inact-cf2-2-coref|Lem=_|Len=5
36	_	_	NOUN	NNS	Number=Plur	34	nsubj	34:nsubj	Entity=10)|Lem=company|Len=9|MSeg=companie-s
37	_	_	VERB	VBG	VerbForm=Ger	36	acl	36:acl	Discourse=elaboration-attribute:17->16:0:syn-mdf-163+syn-nmn-164|Lem=use|Len=5|MSeg=us-ing
38	_	_	PROPN	NNP	Number=Sing	37	obj	37:obj	Entity=(23-object-new-cf7-1,2-coref|Lem=_|Len=4
39	_	_	PROPN	NNP	Number=Sing	38	flat	38:flat	Entity=23)|Lem=_|Len=4|SpaceAfter=No
40	_	_	PUNCT	,	_	34	punct	34:punct	Lem=_|Len=1
41	_	_	PRON	PRP	Case=Nom|Number=Sing|Person=2|PronType=Prs	43	nsubj	43:nsubj	Discourse=attribution-positive:18->19:0:sem-atsrc-168+lex-indwd-170|Entity=(24-person-acc:com-cf4-1-ana)|Lem=_|Len=3
42	_	_	AUX	MD	VerbForm=Fin	43	aux	43:aux	Lem=_|Len=5
43	_	_	VERB	VB	VerbForm=Inf	19	conj	7:ccomp|19:conj:and	Cxn=Conditional-UnspecifiedEpistemic-NoInversion|Lem=_|Len=5
44	_	_	PRON	DT	Number=Sing|PronType=Dem	47	nsubj	47:nsubj	Discourse=same-unit_m:19->15:0:_|Entity=(17-event-giv:act-cf1-1-coref)|Lem=_|Len=4
45	_	_	AUX	MD	VerbForm=Fin	47	aux	47:aux	Lem=_|Len=5
46	_	_	AUX	VB	VerbForm=Inf	47	aux	47:aux	Lem=_|Len=4
47	_	_	VERB	VBN	Tense=Past|VerbForm=Part	43	ccomp	43:ccomp	Lem=happen|Len=8|MSeg=happen-ed
48	_	_	ADP	IN	_	47	obl	47:obl	Lem=_|Len=6
49	_	_	CCONJ	CC	_	52	cc	52:cc	Discourse=causal-result:20->15:1:dm-and-176|Lem=_|Len=3
50	_	_	PRON	EX	PronType=Dem	52	expl	52:expl	Lem=_|Len=5
51	_	_	AUX	MD	VerbForm=Fin	52	aux	52:aux	Lem=_|Len=5
52	_	_	VERB	VB	VerbForm=Inf	47	conj	43:ccomp|47:conj:and	Cxn=Existential-CopPred-ThereExpl|Lem=_|Len=2
53	_	_	NOUN	NNS	Number=Plur	52	nsubj	52:nsubj	Entity=(25-abstract-new-cf6-1-sgl|Lem=protocol|Len=9|MSeg=protocol-s
54	_	_	ADP	IN	_	55	case	55:case	Lem=_|Len=3
55	_	_	PRON	PRP	Case=Acc|Gender=Neut|Number=Sing|Person=3|PronType=Prs	53	nmod	53:nmod:for	Entity=(17-event-giv:act-cf1-1-ana)25)|Lem=_|Len=2|SpaceAfter=No
56	_	_	PUNCT	.	_	5	punct	5:punct	Lem=_|Len=1

~~~


