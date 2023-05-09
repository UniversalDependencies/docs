---
layout: base
title:  'Statistics of dislocated in UD_English-GENTLE'
udver: '2'
---

## Treebank Statistics: UD_English-GENTLE: Relations: `dislocated`

This relation is universal.

15 nodes (0%) are attached to their parents as `dislocated`.

15 instances of `dislocated` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 6.2.

The following 9 pairs of parts of speech are connected with `dislocated`: <tt><a href="en_gentle-pos-VERB.html">VERB</a></tt>-<tt><a href="en_gentle-pos-PROPN.html">PROPN</a></tt> (4; 27% instances), <tt><a href="en_gentle-pos-SYM.html">SYM</a></tt>-<tt><a href="en_gentle-pos-NOUN.html">NOUN</a></tt> (3; 20% instances), <tt><a href="en_gentle-pos-VERB.html">VERB</a></tt>-<tt><a href="en_gentle-pos-NOUN.html">NOUN</a></tt> (2; 13% instances), <tt><a href="en_gentle-pos-ADJ.html">ADJ</a></tt>-<tt><a href="en_gentle-pos-NOUN.html">NOUN</a></tt> (1; 7% instances), <tt><a href="en_gentle-pos-ADV.html">ADV</a></tt>-<tt><a href="en_gentle-pos-NOUN.html">NOUN</a></tt> (1; 7% instances), <tt><a href="en_gentle-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_gentle-pos-PRON.html">PRON</a></tt> (1; 7% instances), <tt><a href="en_gentle-pos-PRON.html">PRON</a></tt>-<tt><a href="en_gentle-pos-VERB.html">VERB</a></tt> (1; 7% instances), <tt><a href="en_gentle-pos-PROPN.html">PROPN</a></tt>-<tt><a href="en_gentle-pos-PROPN.html">PROPN</a></tt> (1; 7% instances), <tt><a href="en_gentle-pos-VERB.html">VERB</a></tt>-<tt><a href="en_gentle-pos-PRON.html">PRON</a></tt> (1; 7% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 1 dislocated	color:blue
1	Celce	Celce	PROPN	NNP	Number=Sing	3	dislocated	3:dislocated	Discourse=ROOT:55:0|Entity=(58-person-giv:act-cf1*-1-coref)
2	he	he	PRON	PRP	Case=Nom|Gender=Masc|Number=Sing|Person=3|PronType=Prs	3	nsubj	3:nsubj|5:nsubj:xsubj	Entity=(58-person-giv:act-cf1*-1-ana)
3	continues	continue	VERB	VBZ	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	0:root	_
4	to	to	PART	TO	_	5	mark	5:mark	_
5	bounce	bounce	VERB	VB	VerbForm=Inf	3	xcomp	3:xcomp	_
6	around	around	ADV	RB	Degree=Pos	5	advmod	5:advmod	_
7	for	for	ADP	IN	_	9	case	9:case	_
8	a	a	DET	DT	Definite=Ind|PronType=Art	9	det	9:det	Entity=(72-time-new-cf4-2-sgl
9	moment	moment	NOUN	NN	Number=Sing	3	obl	3:obl:for	Entity=72)|SpaceAfter=No
10	,	,	PUNCT	,	_	13	punct	13:punct	_
11	any	any	DET	DT	PronType=Ind	13	det	13:det	Discourse=evaluation-comment:56->55:0|Entity=(73-abstract-new-cf3-3-sgl
12	AR	AR	NOUN	NN	Number=Sing	13	compound	13:compound	Entity=(74-object-new-cf5-1-sgl)
13	shots	shot	NOUN	NNS	Number=Plur	18	nsubj:pass	18:nsubj:pass	Entity=73)
14	left	leave	VERB	VBN	Tense=Past|VerbForm=Part	13	acl	13:acl	Discourse=elaboration-attribute:57->56:0|SpaceAfter=No
15	,	,	PUNCT	,	_	13	punct	13:punct	_
16	will	will	AUX	MD	VerbForm=Fin	18	aux	18:aux	Discourse=same-unit_m:58->56:1
17	get	get	AUX	VB	VerbForm=Inf	18	aux:pass	18:aux:pass	_
18	solved	solve	VERB	VBN	Tense=Past|VerbForm=Part|Voice=Pass	3	parataxis	3:parataxis	_
19	at	at	ADP	IN	_	21	case	21:case	_
20	the	the	DET	DT	Definite=Def|PronType=Art	21	det	21:det	Entity=(75-time-acc:com-cf2-2-sgl
21	end	end	NOUN	NN	Number=Sing	18	obl	18:obl:at	Entity=75)|SpaceAfter=No
22	,	,	PUNCT	,	_	23	punct	23:punct	_
23	right	right	ADJ	JJ	Degree=Pos	18	discourse	18:discourse	SpaceAfter=No
24	?	?	PUNCT	.	_	3	punct	3:punct	_

~~~


~~~ conllu
# visual-style 36	bgColor:blue
# visual-style 36	fgColor:white
# visual-style 43	bgColor:blue
# visual-style 43	fgColor:white
# visual-style 43 36 dislocated	color:blue
1	Define	define	VERB	VB	Mood=Imp|Person=2|VerbForm=Fin	0	root	0:root	Discourse=organization-preparation:9->11:3
2	the	the	DET	DT	Definite=Def|PronType=Art	4	det	4:det	Entity=(9-abstract-new-cf8-3-coref
3	following	follow	VERB	VBG	VerbForm=Ger	4	amod	4:amod	_
4	relation	relation	NOUN	NN	Number=Sing	1	obj	1:obj	Entity=9)
5	⪯	⪯	SYM	SYM	_	4	appos	4:appos	Entity=(9-abstract-giv:act-cf8-1-appos)
6	on	on	ADP	IN	_	7	case	7:case	_
7	U	U	NOUN	NN	Number=Sing	1	obl	1:obl:on	Entity=(8-abstract-giv:act-cf3*-1-coref)|SpaceAfter=No
8	:	:	PUNCT	:	_	10	punct	10:punct	_
9	∀	∀	DET	SYM	PronType=Art	10	det	10:det	Discourse=context-circumstance:10->11:0|Entity=(10-abstract-new-cf9-2,4-coref
10	x	x	NOUN	NN	Number=Sing	17	dislocated	17:dislocated	SpaceAfter=No
11	,	,	PUNCT	,	_	12	punct	12:punct	_
12	y	y	NOUN	NN	Number=Sing	10	conj	10:conj|17:dislocated	Entity=10)
13	∈	∈	SYM	SYM	_	10	appos	10:appos	Entity=(10-abstract-giv:act-cf9-1-appos
14	U	U	NOUN	NN	Number=Sing	13	nmod:npmod	13:nmod:npmod	Entity=(8-abstract-giv:act-cf3*-1-coref)10)|SpaceAfter=No
15	:	:	PUNCT	:	_	10	punct	10:punct	_
16	x	x	NOUN	NN	Number=Sing	17	nsubj	17:nsubj	Discourse=context-background:11->19:1|Entity=(11-abstract-new-cf14-1-coref)|SpaceAfter=No|XML=<w>
17	⪯	⪯	SYM	SYM	_	1	parataxis	1:parataxis	SpaceAfter=No
18	y	y	NOUN	NN	Number=Sing	17	obl:npmod	17:obl:npmod	Entity=(12-abstract-new-cf15-1-coref)|XML=</w>
19	if	if	ADP	IN	_	31	case	31:case	Discourse=contingency-condition:12->11:1|XML=<ref target:::"https://proofwiki.org/wiki/Definition:Iff">
20	and	and	CCONJ	CC	_	22	cc	22:cc	_
21	only	only	ADV	RB	_	22	advmod	22:advmod	_
22	if	if	ADP	IN	_	19	conj	19:conj:and|31:case	SpaceAfter=No|XML=</ref>
23	:	:	PUNCT	:	_	19	punct	19:punct	_
24	x	x	NOUN	NN	Number=Sing	31	dislocated	31:dislocated	Discourse=context-circumstance:13->14:0|Entity=(13-abstract-new-cf10-1,3-coref(14-abstract-new-cf1-1-coref)|SpaceAfter=No
25	,	,	PUNCT	,	_	26	punct	26:punct	_
26	y	y	NOUN	NN	Number=Sing	24	conj	24:conj|31:dislocated	Entity=(15-abstract-new-cf5-1-coref)13)
27	∈	∈	SYM	SYM	_	24	appos	24:appos	Entity=(13-abstract-giv:act-cf10-1-appos
28	S	S	NOUN	NN	Number=Sing	27	nmod:npmod	27:nmod:npmod	Entity=(3-abstract-giv:act-cf4-1-coref)13)|SpaceAfter=No
29	:	:	PUNCT	:	_	24	punct	24:punct	_
30	x	x	NOUN	NN	Number=Sing	31	nsubj	31:nsubj	Discourse=same-unit_m:14->12:0|Entity=(14-abstract-giv:act-cf1-1-coref)
31	⪯	⪯	SYM	SYM	_	17	advcl	17:advcl	_
32	S	S	NOUN	NN	Number=Sing	31	dep	31:dep	Entity=(3-abstract-giv:act-cf4-1-coref)
33	y	y	NOUN	NN	Number=Sing	31	obl:npmod	31:obl:npmod	Entity=(15-abstract-giv:act-cf5-1-coref)
34	or	or	CCONJ	CC	_	43	cc	43:cc	Discourse=context-circumstance:15->16:0|SpaceAfter=No
35	:	:	PUNCT	:	_	34	punct	34:punct	_
36	x	x	NOUN	NN	Number=Sing	43	dislocated	43:dislocated	Entity=(16-abstract-new-cf11-1,3-coref(17-abstract-new-cf2-1-coref)|SpaceAfter=No
37	,	,	PUNCT	,	_	38	punct	38:punct	_
38	y	y	NOUN	NN	Number=Sing	36	conj	36:conj|43:dislocated	Entity=(18-abstract-new-cf7-1-coref)16)
39	∈	∈	SYM	SYM	_	36	appos	36:appos	Entity=(16-abstract-giv:act-cf11-1-appos
40	T	T	NOUN	NN	Number=Sing	39	nmod:npmod	39:nmod:npmod	Entity=(4-abstract-giv:act-cf6-1-coref)16)|SpaceAfter=No
41	:	:	PUNCT	:	_	36	punct	36:punct	_
42	x	x	ADV	RB	Degree=Pos	43	nsubj	43:nsubj	Discourse=joint-disjunction_m:16->11:2|Entity=(17-abstract-giv:act-cf2-1-coref)|SpaceAfter=No|XML=<w>
43	⪯	⪯	SYM	SYM	_	31	conj	17:advcl|31:conj:or	SpaceAfter=No
44	T	T	NOUN	NN	Number=Sing	43	dep	43:dep	Entity=(4-abstract-giv:act-cf6-1-coref)|XML=</w>
45	y	y	NOUN	NN	Number=Sing	43	obl:npmod	43:obl:npmod	Entity=(18-abstract-giv:act-cf7-1-coref)
46	or	or	CCONJ	CC	_	49	cc	49:cc	Discourse=joint-disjunction_m:17->11:2|SpaceAfter=No
47	:	:	PUNCT	:	_	46	punct	46:punct	_
48	x	x	NOUN	NN	Number=Sing	49	nsubj	49:nsubj	Entity=(19-abstract-new-cf12-1-coref)
49	∈	∈	SYM	SYM	_	31	conj	17:advcl|31:conj:or	Entity=(19-abstract-giv:act-cf12-1-coref
50	S	S	NOUN	NN	Number=Sing	49	nmod:npmod	49:nmod:npmod	Entity=(3-abstract-giv:act-cf4-1-coref)19)|SpaceAfter=No
51	,	,	PUNCT	,	_	53	punct	53:punct	_
52	y	y	NOUN	NN	Number=Sing	53	nsubj	53:nsubj	Entity=(20-abstract-new-cf13-1-coref)
53	∈	∈	SYM	SYM	_	49	conj	31:conj|49:conj	Entity=(20-abstract-giv:act-cf13-1-coref
54	T	T	NOUN	NN	Number=Sing	53	nmod:npmod	53:nmod:npmod	Entity=(4-abstract-giv:act-cf6-1-coref)20)

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 3 dislocated	color:blue
1	And	and	CCONJ	CC	_	5	cc	5:cc	Discourse=elaboration-additional:4->2:1
2	this	this	DET	DT	Number=Sing|PronType=Dem	3	det	3:det	Entity=(1-person-giv:act-cf1*-2-coref
3	maiden	maiden	NOUN	NN	Number=Sing	5	dislocated	5:dislocated	Entity=1)
4	she	she	PRON	PRP	Case=Nom|Gender=Fem|Number=Sing|Person=3|PronType=Prs	5	nsubj	5:nsubj	Entity=(1-person-giv:act-cf1*-1-ana)
5	lived	live	VERB	VBD	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	0	root	0:root	_
6	with	with	ADP	IN	_	9	case	9:case	_
7	no	no	DET	DT	Polarity=Neg|PronType=Art	9	det	9:det	Entity=(9-abstract-new-cf3-3-sgl
8	other	other	ADJ	JJ	Degree=Pos	9	amod	9:amod	_
9	thought	thought	NOUN	NN	Number=Sing	5	obl	5:obl:with	Entity=9)
10	Than	than	SCONJ	IN	_	12	mark	12:mark	Discourse=elaboration-attribute:5->4:0
11	to	to	PART	TO	_	12	mark	12:mark	_
12	love	love	VERB	VB	VerbForm=Inf	9	acl	9:acl:than_to	_
13	and	and	CCONJ	CC	_	15	cc	15:cc	Discourse=joint-list_m:6->5:0
14	be	be	AUX	VB	VerbForm=Inf	15	aux:pass	15:aux:pass	_
15	loved	love	VERB	VBN	Tense=Past|VerbForm=Part|Voice=Pass	12	conj	9:acl:than_to|12:conj:and	_
16	by	by	ADP	IN	_	17	case	17:case	_
17	me	I	PRON	PRP	Case=Acc|Number=Sing|Person=1|PronType=Prs	15	obl:agent	15:obl:agent	Entity=(10-person-acc:com-cf2-1-ana)|SpaceAfter=No
18	.	.	PUNCT	.	_	5	punct	5:punct	_

~~~


