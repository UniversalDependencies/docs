---
layout: base
title:  'Statistics of dislocated in UD_English-GENTLE'
udver: '2'
---

## Treebank Statistics: UD_English-GENTLE: Relations: `dislocated`

This relation is universal.

14 nodes (0%) are attached to their parents as `dislocated`.

14 instances of `dislocated` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 6.42857142857143.

The following 9 pairs of parts of speech are connected with `dislocated`: <tt><a href="en_gentle-pos-VERB.html">VERB</a></tt>-<tt><a href="en_gentle-pos-PROPN.html">PROPN</a></tt> (4; 29% instances), <tt><a href="en_gentle-pos-SYM.html">SYM</a></tt>-<tt><a href="en_gentle-pos-NOUN.html">NOUN</a></tt> (3; 21% instances), <tt><a href="en_gentle-pos-ADJ.html">ADJ</a></tt>-<tt><a href="en_gentle-pos-NOUN.html">NOUN</a></tt> (1; 7% instances), <tt><a href="en_gentle-pos-ADV.html">ADV</a></tt>-<tt><a href="en_gentle-pos-NOUN.html">NOUN</a></tt> (1; 7% instances), <tt><a href="en_gentle-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_gentle-pos-PRON.html">PRON</a></tt> (1; 7% instances), <tt><a href="en_gentle-pos-PRON.html">PRON</a></tt>-<tt><a href="en_gentle-pos-VERB.html">VERB</a></tt> (1; 7% instances), <tt><a href="en_gentle-pos-PROPN.html">PROPN</a></tt>-<tt><a href="en_gentle-pos-PROPN.html">PROPN</a></tt> (1; 7% instances), <tt><a href="en_gentle-pos-VERB.html">VERB</a></tt>-<tt><a href="en_gentle-pos-NOUN.html">NOUN</a></tt> (1; 7% instances), <tt><a href="en_gentle-pos-VERB.html">VERB</a></tt>-<tt><a href="en_gentle-pos-PRON.html">PRON</a></tt> (1; 7% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 1 dislocated	color:blue
1	Celce	Celce	PROPN	NNP	Number=Sing	3	dislocated	3:dislocated	Discourse=ROOT:55:0|Entity=(58-person-giv:act-cf1*-1-coref)|PDTB=EntRel:EntRel:_:_:384-408:409-432
2	he	he	PRON	PRP	Case=Nom|Gender=Masc|Number=Sing|Person=3|PronType=Prs	3	nsubj	3:nsubj|5:nsubj:xsubj	Entity=(58-person-giv:act-cf1*-1-ana)
3	continues	continue	VERB	VBZ	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	0:root	MSeg=continue-s
4	to	to	PART	TO	_	5	mark	5:mark	_
5	bounce	bounce	VERB	VB	VerbForm=Inf	3	xcomp	3:xcomp	_
6	around	around	ADV	RB	Degree=Pos	5	advmod	5:advmod	MSeg=a-round
7	for	for	ADP	IN	_	9	case	9:case	_
8	a	a	DET	DT	Definite=Ind|PronType=Art	9	det	9:det	Entity=(73-time-new-cf4-2-sgl
9	moment	moment	NOUN	NN	Number=Sing	3	obl	3:obl:for	Entity=73)|SpaceAfter=No
10	,	,	PUNCT	,	_	13	punct	13:punct	_
11	any	any	DET	DT	PronType=Ind	13	det	13:det	Discourse=evaluation-comment:56->55:0:lex-indwd-431|Entity=(74-abstract-new-cf3-3-sgl
12	AR	AR	NOUN	NN	Number=Sing	13	compound	13:compound	Entity=(75-object-new-cf5-1-sgl)
13	shots	shot	NOUN	NNS	Number=Plur	18	nsubj:pass	18:nsubj:pass	Entity=74)|MSeg=shot-s
14	left	leave	VERB	VBN	Tense=Past|VerbForm=Part|Voice=Pass	13	acl	13:acl	Discourse=elaboration-attribute:57->56:0:syn-mdf-421+syn-nmn-422|SpaceAfter=No
15	,	,	PUNCT	,	_	13	punct	13:punct	_
16	will	will	AUX	MD	VerbForm=Fin	18	aux	18:aux	Discourse=same-unit_m:58->56:1:_
17	get	get	AUX	VB	VerbForm=Inf	18	aux:pass	18:aux:pass	_
18	solved	solve	VERB	VBN	Tense=Past|VerbForm=Part|Voice=Pass	3	parataxis	3:parataxis	MSeg=solv-ed
19	at	at	ADP	IN	_	21	case	21:case	_
20	the	the	DET	DT	Definite=Def|PronType=Art	21	det	21:det	Entity=(76-time-acc:com-cf2-2-sgl
21	end	end	NOUN	NN	Number=Sing	18	obl	18:obl:at	Entity=76)|SpaceAfter=No
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
1	Define	define	VERB	VB	Mood=Imp|Person=2|VerbForm=Fin	0	root	0:root	Discourse=organization-preparation:9->11:3:lex-indph-50-51+sem-rpt-55,62+grf-col-56|PDTB=Implicit:Expansion.Conjunction:and:_:33-48:49-102
2	the	the	DET	DT	Definite=Def|PronType=Art	4	det	4:det	Entity=(9-abstract-new-cf8-3-coref
3	following	follow	VERB	VBG	VerbForm=Ger	4	amod	4:amod	MSeg=follow-ing
4	relation	relation	NOUN	NN	Number=Sing	1	obj	1:obj	Entity=9)|MSeg=relat-ion
5	⪯	⪯	SYM	SYM	_	4	appos	4:appos	Entity=(9-abstract-giv:act-cf8-1-appos)
6	on	on	ADP	IN	_	7	case	7:case	_
7	U	U	NOUN	NN	Number=Sing	1	obl	1:obl:on	Entity=(8-abstract-giv:act-cf3*-1-coref)|SpaceAfter=No
8	:	:	PUNCT	:	_	10	punct	10:punct	_
9	∀	∀	DET	SYM	PronType=Ind	10	det	10:det	Discourse=context-circumstance:10->11:0:_|Entity=(10-abstract-new-cf9-2,4-coref
10	x	x	NOUN	NN	Number=Sing	17	dislocated	17:dislocated	SpaceAfter=No
11	,	,	PUNCT	,	_	12	punct	12:punct	_
12	y	y	NOUN	NN	Number=Sing	10	conj	10:conj|17:dislocated	Entity=10)
13	∈	∈	SYM	SYM	_	10	appos	10:appos	Entity=(10-abstract-giv:act-cf9-1-appos
14	U	U	NOUN	NN	Number=Sing	13	nmod:unmarked	13:nmod:unmarked	Entity=(8-abstract-giv:act-cf3*-1-coref)10)|SpaceAfter=No
15	:	:	PUNCT	:	_	10	punct	10:punct	_
16	x	x	NOUN	NN	Number=Sing	17	nsubj	17:nsubj	Discourse=context-background:11->19:1:sem-synym-50-52,106|Entity=(11-abstract-new-cf14-1-coref)|SpaceAfter=No|XML=<w>
17	⪯	⪯	SYM	SYM	_	1	parataxis	1:parataxis	SpaceAfter=No
18	y	y	NOUN	NN	Number=Sing	17	obl:unmarked	17:obl:unmarked	Entity=(12-abstract-new-cf15-1-coref)|XML=</w>
19	if	if	ADP	IN	_	31	case	31:case	Discourse=contingency-condition:12->11:1:dm-if and only if-67-70|PDTB=Explicit:Expansion.Disjunction:if and only if:67-70:57-66:71-81|XML=<ref target:::"https://proofwiki.org/wiki/Definition:Iff">
20	and	and	CCONJ	CC	_	22	cc	22:cc	_
21	only	only	ADV	RB	_	22	advmod	22:advmod	_
22	if	if	ADP	IN	_	19	conj	19:conj:and|31:case	SpaceAfter=No|XML=</ref>
23	:	:	PUNCT	:	_	19	punct	19:punct	_
24	x	x	NOUN	NN	Number=Sing	31	dislocated	31:dislocated	Discourse=context-circumstance:13->14:0:_|Entity=(13-abstract-new-cf10-1,3-coref(14-abstract-new-cf1-1-coref)|SpaceAfter=No
25	,	,	PUNCT	,	_	26	punct	26:punct	_
26	y	y	NOUN	NN	Number=Sing	24	conj	24:conj|31:dislocated	Entity=(15-abstract-new-cf5-1-coref)13)
27	∈	∈	SYM	SYM	_	24	appos	24:appos	Entity=(13-abstract-giv:act-cf10-1-appos
28	S	S	NOUN	NN	Number=Sing	27	nmod:unmarked	27:nmod:unmarked	Entity=(3-abstract-giv:act-cf4-1-coref)13)|SpaceAfter=No
29	:	:	PUNCT	:	_	24	punct	24:punct	_
30	x	x	NOUN	NN	Number=Sing	31	nsubj	31:nsubj	Discourse=same-unit_m:14->12:0:_|Entity=(14-abstract-giv:act-cf1-1-coref)
31	⪯	⪯	SYM	SYM	_	17	advcl	17:advcl	_
32	S	S	NOUN	NN	Number=Sing	31	dep	31:dep	Entity=(3-abstract-giv:act-cf4-1-coref)
33	y	y	NOUN	NN	Number=Sing	31	obl:unmarked	31:obl:unmarked	Entity=(15-abstract-giv:act-cf5-1-coref)
34	or	or	CCONJ	CC	_	43	cc	43:cc	Discourse=context-circumstance:15->16:0:_|PDTB=Explicit:Expansion.Disjunction:or:82:57-81:83-93|SpaceAfter=No
35	:	:	PUNCT	:	_	34	punct	34:punct	_
36	x	x	NOUN	NN	Number=Sing	43	dislocated	43:dislocated	Entity=(16-abstract-new-cf11-1,3-coref(17-abstract-new-cf2-1-coref)|SpaceAfter=No
37	,	,	PUNCT	,	_	38	punct	38:punct	_
38	y	y	NOUN	NN	Number=Sing	36	conj	36:conj|43:dislocated	Entity=(18-abstract-new-cf7-1-coref)16)
39	∈	∈	SYM	SYM	_	36	appos	36:appos	Entity=(16-abstract-giv:act-cf11-1-appos
40	T	T	NOUN	NN	Number=Sing	39	nmod:unmarked	39:nmod:unmarked	Entity=(4-abstract-giv:act-cf6-1-coref)16)|SpaceAfter=No
41	:	:	PUNCT	:	_	36	punct	36:punct	_
42	x	x	ADV	RB	Degree=Pos	43	nsubj	43:nsubj	Discourse=joint-disjunction_m:16->11:2:dm-or-82|Entity=(17-abstract-giv:act-cf2-1-coref)|SpaceAfter=No|XML=<w>
43	⪯	⪯	SYM	SYM	_	31	conj	17:advcl|31:conj:or	SpaceAfter=No
44	T	T	NOUN	NN	Number=Sing	43	dep	43:dep	Entity=(4-abstract-giv:act-cf6-1-coref)|XML=</w>
45	y	y	NOUN	NN	Number=Sing	43	obl:unmarked	43:obl:unmarked	Entity=(18-abstract-giv:act-cf7-1-coref)
46	or	or	CCONJ	CC	_	49	cc	49:cc	Discourse=joint-disjunction_m:17->11:2:dm-or-94|PDTB=Explicit:Expansion.Disjunction:or:94:82-93:95-102|SpaceAfter=No
47	:	:	PUNCT	:	_	46	punct	46:punct	_
48	x	x	NOUN	NN	Number=Sing	49	nsubj	49:nsubj	Entity=(19-abstract-new-cf12-1-coref)
49	∈	∈	SYM	SYM	_	31	conj	17:advcl|31:conj:or	Entity=(19-abstract-giv:act-cf12-1-coref
50	S	S	NOUN	NN	Number=Sing	49	nmod:unmarked	49:nmod:unmarked	Entity=(3-abstract-giv:act-cf4-1-coref)19)|SpaceAfter=No
51	,	,	PUNCT	,	_	53	punct	53:punct	_
52	y	y	NOUN	NN	Number=Sing	53	nsubj	53:nsubj	Entity=(20-abstract-new-cf13-1-coref)
53	∈	∈	SYM	SYM	_	49	conj	31:conj|49:conj	Entity=(20-abstract-giv:act-cf13-1-coref
54	T	T	NOUN	NN	Number=Sing	53	nmod:unmarked	53:nmod:unmarked	Entity=(4-abstract-giv:act-cf6-1-coref)20)

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 3 dislocated	color:blue
1	But	but	CCONJ	CC	_	6	cc	6:cc	Discourse=adversative-contrast_m:26->20:2:dm-but-215|PDTB=Explicit:Comparison.Contrast:but:215:161-176:216-233
2	our	our	PRON	PRP$	Case=Gen|Number=Plur|Person=1|Poss=Yes|PronType=Prs	3	nmod:poss	3:nmod:poss	Entity=(11-abstract-giv:inact-cf1-2-coref(12-person-giv:inact-cf2-1-ana)
3	love	love	NOUN	NN	Number=Sing	6	dislocated	6:dislocated	Entity=11)
4	it	it	PRON	PRP	Case=Nom|Gender=Neut|Number=Sing|Person=3|PronType=Prs	6	nsubj	6:nsubj	Entity=(11-abstract-giv:act-cf1-1-ana)
5	was	be	AUX	VBD	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	6	cop	6:cop	_
6	stronger	strong	ADJ	JJR	Degree=Cmp	0	root	0:root	MSeg=strong-er
7	by	by	ADP	IN	_	8	case	8:case	_
8	far	far	ADV	RB	Degree=Pos	6	obl	6:obl:by	_
9	than	than	ADP	IN	_	11	case	11:case	_
10	the	the	DET	DT	Definite=Def|PronType=Art	11	det	11:det	Entity=(23-abstract-new-cf3-2-sgl
11	love	love	NOUN	NN	Number=Sing	6	obl	6:obl:than	Entity=23)
12	Of	of	ADP	IN	_	13	case	13:case	_
13	those	this	PRON	DT	Number=Plur|PronType=Dem	11	nmod	11:nmod:of|16:nsubj	Entity=(24-person-new-cf4-1-sgl
14	who	who	PRON	WP	PronType=Rel	16	nsubj	13:ref	Discourse=elaboration-attribute:27->26:0:syn-mdf-227+syn-relcl-228,230
15	were	be	AUX	VBD	Mood=Ind|Number=Plur|Person=3|Tense=Past|VerbForm=Fin	16	cop	16:cop	_
16	older	old	ADJ	JJR	Degree=Cmp	13	acl:relcl	13:acl:relcl	MSeg=old-er
17	than	than	ADP	IN	_	18	case	18:case	_
18	we	we	PRON	PRP	Case=Nom|Number=Plur|Person=1|PronType=Prs	16	obl	16:obl:than	Entity=(12-person-giv:act-cf2-1-ana)24)
19	—	—	PUNCT	:	_	6	punct	6:punct	_

~~~


