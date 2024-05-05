---
layout: base
title:  'Statistics of cc:preconj in UD_English-GENTLE'
udver: '2'
---

## Treebank Statistics: UD_English-GENTLE: Relations: `cc:preconj`

This relation is a language-specific subtype of <tt><a href="en_gentle-dep-cc.html">cc</a></tt>.

8 nodes (0%) are attached to their parents as `cc:preconj`.

8 instances of `cc:preconj` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.25.

The following 5 pairs of parts of speech are connected with `cc:preconj`: <tt><a href="en_gentle-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_gentle-pos-CCONJ.html">CCONJ</a></tt> (3; 38% instances), <tt><a href="en_gentle-pos-ADJ.html">ADJ</a></tt>-<tt><a href="en_gentle-pos-CCONJ.html">CCONJ</a></tt> (2; 25% instances), <tt><a href="en_gentle-pos-PROPN.html">PROPN</a></tt>-<tt><a href="en_gentle-pos-CCONJ.html">CCONJ</a></tt> (1; 13% instances), <tt><a href="en_gentle-pos-SYM.html">SYM</a></tt>-<tt><a href="en_gentle-pos-CCONJ.html">CCONJ</a></tt> (1; 13% instances), <tt><a href="en_gentle-pos-VERB.html">VERB</a></tt>-<tt><a href="en_gentle-pos-CCONJ.html">CCONJ</a></tt> (1; 13% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 cc:preconj	color:blue
1	Neither	neither	CCONJ	CC	_	2	cc:preconj	2:cc:preconj	Discourse=joint-other_m:91->89:2:_
2	DM	DM	NOUN	NN	Number=Sing	6	nsubj	6:nsubj	Entity=(46-abstract-giv:inact-cf1-1-coref)
3	nor	nor	CCONJ	CC	_	4	cc	4:cc	_
4	MG	MG	NOUN	NN	Number=Sing	2	conj	2:conj:nor|6:nsubj	Entity=(25-abstract-giv:inact-cf2-1-coref)
5	is	be	AUX	VBZ	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	6	cop	6:cop	_
6	commensurable	commensurable	ADJ	JJ	Degree=Pos	0	root	0:root	MSeg=commensur-able|XML=<ref target:::"https://proofwiki.org/wiki/Definition:Commensurable_in_Length">
7	in	in	ADP	IN	_	8	case	8:case	_
8	length	length	NOUN	NN	Number=Sing	6	obl	6:obl:in	Entity=(47-abstract-giv:inact-cf3-1-coref)|MSeg=leng-th|XML=</ref>
9	with	with	ADP	IN	_	10	case	10:case	_
10	DE	DE	NOUN	NN	Number=Sing	6	obl	6:obl:with	Entity=(8-abstract-giv:inact-cf4-1-coref)|SpaceAfter=No
11	.	.	PUNCT	.	_	6	punct	6:punct	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 8 cc:preconj	color:blue
1	He	he	PRON	PRP	Case=Nom|Gender=Masc|Number=Sing|Person=3|PronType=Prs	3	nsubj	3:nsubj|6:nsubj:xsubj|7:nsubj:xsubj	Discourse=elaboration-additional:24->22:1:_|Entity=(11-person-giv:inact-cf2-1-ana)
2	also	also	ADV	RB	_	3	advmod	3:advmod	_
3	appeared	appear	VERB	VBD	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	0	root	0:root	MSeg=appear-ed
4	to	to	PART	TO	_	6	mark	6:mark	_
5	have	have	AUX	VB	VerbForm=Inf	6	aux	6:aux	_
6	become	become	VERB	VBN	Tense=Past|VerbForm=Part	3	xcomp	3:xcomp	MSeg=be-come
7	disoriented	disoriented	ADJ	JJ	Degree=Pos	6	xcomp	6:xcomp	MSeg=dis-orient-ed
8	either	either	CCONJ	CC	_	9	cc:preconj	9:cc:preconj	_
9	secondary	secondary	ADJ	JJ	Degree=Pos	7	advmod	7:advmod	MSeg=second-ary
10	to	to	ADP	IN	_	11	case	11:case	_
11	sepsis	sepsis	NOUN	NN	Number=Sing	9	obl	9:obl:to	Entity=(42-abstract-giv:act-cf1*-1-coref)
12	or	or	CCONJ	CC	_	14	cc	14:cc	_
13	steroid	steroid	NOUN	NN	Number=Sing	14	compound	14:compound	Entity=(45-abstract-new-cf3-2-sgl(46-substance-new-cf4-1-sgl)
14	therapy	therapy	NOUN	NN	Number=Sing	11	conj	9:obl:to|11:conj:or	Entity=45)|SpaceAfter=No
15	.	.	PUNCT	.	_	3	punct	3:punct	_

~~~


~~~ conllu
# visual-style 32	bgColor:blue
# visual-style 32	fgColor:white
# visual-style 34	bgColor:blue
# visual-style 34	fgColor:white
# visual-style 34 32 cc:preconj	color:blue
1	Submission	submission	NOUN	NN	Number=Sing	13	nsubj	13:nsubj	Discourse=organization-preparation:181->183:3:_|Entity=(270-abstract-new-cf3-1-sgl|MSeg=Submiss-ion
2	of	of	ADP	IN	_	4	case	4:case	_
3	any	any	DET	DT	PronType=Ind	4	det	4:det	Entity=(271-abstract-new-cf12-2-sgl
4	assignment	assignment	NOUN	NN	Number=Sing	1	nmod	1:nmod:of|8:nsubj	MSeg=assign-ment
5	that	that	PRON	WDT	PronType=Rel	8	nsubj	4:ref	Discourse=elaboration-attribute:182->181:0:_
6	is	be	AUX	VBZ	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	8	cop	8:cop	_
7	in	in	ADP	IN	_	8	case	8:case	_
8	violation	violation	NOUN	NN	Number=Sing	4	acl:relcl	4:acl:relcl	MSeg=violat-ion
9	of	of	ADP	IN	_	11	case	11:case	_
10	this	this	DET	DT	Number=Sing|PronType=Dem	11	det	11:det	Entity=(263-abstract-giv:act-cf1*-2-coref
11	policy	policy	NOUN	NN	Number=Sing	8	nmod	8:nmod:of	Entity=263)271)270)
12	will	will	AUX	MD	VerbForm=Fin	13	aux	13:aux	_
13	result	result	VERB	VB	VerbForm=Inf	0	root	0:root	_
14	in	in	ADP	IN	_	21	case	21:case	_
15	(1)	(1)	X	LS	_	21	discourse	21:discourse	Discourse=adversative-contrast_m:183->177:2:_
16	an	a	DET	DT	Definite=Ind|PronType=Art	21	det	21:det	Entity=(272-abstract-new-cf13-6-sgl
17	academic	academic	ADJ	JJ	Degree=Pos	21	amod	21:amod	MSeg=academ-ic
18	(	(	PUNCT	-LRB-	_	19	punct	19:punct	Discourse=elaboration-additional:184->183:0:_|SpaceAfter=No
19	grade	grade	NOUN	NN	Number=Sing	21	compound	21:compound	Entity=(273-abstract-new-cf14-1-sgl)|SpaceAfter=No
20	)	)	PUNCT	-RRB-	_	19	punct	19:punct	_
21	penalty	penalty	NOUN	NN	Number=Sing	13	obl	13:obl:in	Discourse=same-unit_m:185->183:1:_|Entity=272)
22	and	and	CCONJ	CC	_	24	cc	24:cc	Discourse=joint-list_m:186->183:2:_
23	(2)	(2)	X	LS	_	24	discourse	24:discourse	_
24	reporting	report	VERB	VBG	Tense=Pres|VerbForm=Part	21	conj	13:obl:in|21:conj:and	MSeg=report-ing
25	to	to	ADP	IN	_	27	case	27:case	_
26	the	the	DET	DT	Definite=Def|PronType=Art	27	det	27:det	Entity=(274-person-new-cf4-2,4,5-sgl
27	Dean	Dean	PROPN	NNP	Number=Sing	24	obl	24:obl:to	_
28	of	of	ADP	IN	_	30	case	30:case	_
29	Academic	Academic	ADJ	NNP	Degree=Pos	30	amod	30:amod	Entity=(275-abstract-new-cf10-1,2-sgl
30	Affairs	Affair	PROPN	NNPS	Number=Plur	27	nmod	27:nmod:of	Entity=275)274)|MSeg=Affair-s
31	and	and	CCONJ	CC	_	34	cc	34:cc	_
32	either	either	CCONJ	CC	_	34	cc:preconj	34:cc:preconj	_
33	the	the	DET	DT	Definite=Def|PronType=Art	34	det	34:det	Entity=(276-person-new-cf5-2,4,7,11,13,14-sgl(277-person-new-cf6-2,4-sgl
34	Dean	Dean	PROPN	NNP	Number=Sing	27	conj	24:obl:to|27:conj:and	_
35	of	of	ADP	IN	_	36	case	36:case	_
36	Students	Student	PROPN	NNPS	Number=Plur	34	nmod	34:nmod:of	Entity=(278-person-new-cf8-1-sgl)277)
37	(	(	PUNCT	-LRB-	_	39	punct	39:punct	Discourse=elaboration-additional:187->186:0:_|SpaceAfter=No
38	for	for	ADP	IN	_	39	case	39:case	_
39	Undergraduates	Undergraduate	PROPN	NNPS	Number=Plur	34	orphan	34:orphan	Entity=(279-person-new-cf9-1-sgl)|MSeg=Under-gradu-ate-s|SpaceAfter=No
40	)	)	PUNCT	-RRB-	_	39	punct	39:punct	_
41	or	or	CCONJ	CC	_	43	cc	43:cc	Discourse=same-unit_m:188->186:1:_
42	the	the	DET	DT	Definite=Def|PronType=Art	43	det	43:det	Entity=(280-person-new-cf7-2,4,5-sgl
43	Dean	Dean	PROPN	NNP	Number=Sing	34	conj	27:conj|34:conj:or	_
44	of	of	ADP	IN	_	46	case	46:case	_
45	Graduate	Graduate	PROPN	NNP	Number=Sing	46	compound	46:compound	Entity=(281-abstract-new-cf11-1,2-sgl
46	Education	Education	PROPN	NNP	Number=Sing	43	nmod	43:nmod:of	Entity=281)280)|MSeg=Educat-ion
47	(	(	PUNCT	-LRB-	_	50	punct	50:punct	Discourse=elaboration-additional:189->188:0:_|SpaceAfter=No
48	for	for	ADP	IN	_	50	case	50:case	_
49	Graduate	Graduate	ADJ	NNP	Degree=Pos	50	amod	50:amod	Entity=(256-person-giv:inact-cf2-2-coref
50	students	student	NOUN	NNS	Number=Plur	43	orphan	43:orphan	Entity=256)|MSeg=stud-ent-s|SpaceAfter=No
51	)	)	PUNCT	-RRB-	_	50	punct	50:punct	Entity=276)|SpaceAfter=No
52	.	.	PUNCT	.	_	13	punct	13:punct	_

~~~


