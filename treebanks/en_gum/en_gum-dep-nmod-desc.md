---
layout: base
title:  'Statistics of nmod:desc in UD_English-GUM'
udver: '2'
---

## Treebank Statistics: UD_English-GUM: Relations: `nmod:desc`

This relation is a language-specific subtype of <tt><a href="en_gum-dep-nmod.html">nmod</a></tt>.
There are also 2 other language-specific subtypes of `nmod`: <tt><a href="en_gum-dep-nmod-poss.html">nmod:poss</a></tt>, <tt><a href="en_gum-dep-nmod-unmarked.html">nmod:unmarked</a></tt>.

394 nodes (0%) are attached to their parents as `nmod:desc`.

384 instances of `nmod:desc` (97%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.11167512690355.

The following 3 pairs of parts of speech are connected with `nmod:desc`: <tt><a href="en_gum-pos-PROPN.html">PROPN</a></tt>-<tt><a href="en_gum-pos-PROPN.html">PROPN</a></tt> (313; 79% instances), <tt><a href="en_gum-pos-PROPN.html">PROPN</a></tt>-<tt><a href="en_gum-pos-NOUN.html">NOUN</a></tt> (80; 20% instances), <tt><a href="en_gum-pos-PROPN.html">PROPN</a></tt>-<tt><a href="en_gum-pos-ADJ.html">ADJ</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 nmod:desc	color:blue
1	Emperor	Emperor	PROPN	NNP	Number=Sing	2	nmod:desc	2:nmod:desc	Discourse=organization-heading:1->2:6:grf-ly-_-_+sem-synym-1-19-_|Entity=(1-person-new-sssss-cf1-2-coref-Emperor_Norton|MSeg=Emper-or
2	Norton	Norton	PROPN	NNP	Number=Sing	0	root	0:root	Entity=1)

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 nmod:desc	color:blue
1	File	file	NOUN	NN	Number=Sing	2	compound	2:compound	Discourse=context-background:2->9:3:grf-ly-_-_|Entity=(4-abstract-new-nnnnn-cf2-2-coref
2	photo	photo	NOUN	NN	Number=Sing	0	root	0:root	_
3	of	of	ADP	IN	_	5	case	5:case	_
4	interviewee	interviewee	NOUN	NN	Number=Sing	5	nmod:desc	5:nmod:desc	Entity=(5-person-new-nnnnn-cf1-2,3-coref-David_Titley|MSeg=interview-ee
5	David	David	PROPN	NNP	Number=Sing	2	nmod	2:nmod:of	MSeg=Dav-id
6	Titley	Titley	PROPN	NNP	Number=Sing	5	flat	5:flat	Entity=5)4)|SpaceAfter=No
7	.	.	PUNCT	.	_	2	punct	2:punct	_

~~~


~~~ conllu
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 13 12 nmod:desc	color:blue
1	Paul	Paul	PROPN	NNP	Number=Sing	4	nmod:poss	4:nmod:poss	Discourse=joint-sequence_m:58->55:0:_|Entity=(164-abstract-new-nnnnn-cf3-2,4,6-sgl-The_Path_to_Prosperity(165-person-new-nnnnn-cf4-1,2-sgl-Paul_Ryan|PDTB=Implicit:Expansion.Conjunction:and:_:660-676:677-715
2	Ryan	Ryan	PROPN	NNP	Number=Sing	1	flat	1:flat	_
3	's	's	PART	POS	_	1	case	1:case	Entity=165)
4	Path	Path	PROPN	NNP	Number=Sing	8	nsubj:pass	8:nsubj:pass	_
5	to	to	ADP	IN	_	6	case	6:case	_
6	Prosperity	Prosperity	PROPN	NNP	Number=Sing	4	nmod	4:nmod:to	Entity=(166-abstract-new-nnnnn-cf6-1-sgl)164)|MSeg=Prosper-ity
7	was	be	AUX	VBD	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	8	aux:pass	8:aux:pass	_
8	based	base	VERB	VBN	Tense=Past|VerbForm=Part|Voice=Pass	0	root	0:root	MSeg=bas-ed
9	in	in	ADP	IN	_	10	case	10:case	_
10	part	part	NOUN	NN	Number=Sing	8	obl	8:obl:in	_
11	on	on	ADP	IN	_	22	case	22:case	_
12	Republican	Republican	ADJ	JJ	Degree=Pos	13	nmod:desc	13:nmod:desc	Entity=(167-abstract-new-nnnnn-cf7-3,6,8,9,10,11-sgl(168-person-new-nnnnn-cf5-2,3-sgl-Jason_Chaffetz|MSeg=Republic-an
13	Jason	Jason	PROPN	NNP	Number=Sing	22	nmod:poss	22:nmod:poss	_
14	Chaffetz	Chaffetz	PROPN	NNP	Number=Sing	13	flat	13:flat	_
15	'	's	PART	POS	_	13	case	13:case	Entity=168)
16	"	"	PUNCT	``	_	22	punct	22:punct	SpaceAfter=No|XML=<q><ref target:::"https://thomas.loc.gov/home/gpoxmlc112/h1126_ih.xml">
17	Disposal	Disposal	PROPN	NNP	Number=Sing	22	compound	22:compound	Entity=(169-event-new-nnnnn-cf12-1,3,4,5-sgl|MSeg=Dispos-al
18	of	of	ADP	IN	_	21	case	21:case	_
19	Excess	Excess	ADJ	NNP	Degree=Pos	21	amod	21:amod	Entity=(170-object-new-nnnnn-cf8-1,2,3-sgl
20	Federal	Federal	ADJ	NNP	Degree=Pos	21	amod	21:amod	MSeg=Feder-al
21	Lands	Land	PROPN	NNPS	Number=Plur	17	nmod	17:nmod:of	Entity=170)169)|MSeg=Land-s
22	Act	Act	PROPN	NNP	Number=Sing	8	obl	8:obl:on|29:nsubj	_
23	of	of	ADP	IN	_	24	case	24:case	_
24	2011	2011	NUM	CD	NumForm=Digit|NumType=Card	22	nmod	22:nmod:of	Entity=(133-time-giv:inact-nnnnn-cf2-1-coref)|SpaceAfter=No|XML=<date when:::"2011"></date>
25	,	,	PUNCT	,	_	22	punct	22:punct	SpaceAfter=No
26	"	"	PUNCT	''	_	22	punct	22:punct	XML=</ref></q>
27	which	which	PRON	WDT	PronType=Rel	29	nsubj	22:ref	Discourse=elaboration-attribute:59->58:0:_
28	would	would	AUX	MD	VerbForm=Fin	29	aux	29:aux	_
29	unload	unload	VERB	VB	VerbForm=Inf	22	acl:relcl	22:acl:relcl	_
30	millions	million	NOUN	NNS	Number=Plur	29	obj	29:obj	Entity=(171-place-new-nnnnn-cf9-9-sgl|MSeg=million-s
31	of	of	ADP	IN	_	32	case	32:case	_
32	acres	acre	NOUN	NNS	Number=Plur	30	nmod	30:nmod:of	MSeg=acre-s
33	of	of	ADP	IN	_	34	case	34:case	_
34	land	land	NOUN	NN	Number=Sing	32	nmod	32:nmod:of	Entity=(172-place-new-nnnns-cf10-1-sgl)
35	in	in	ADP	IN	_	38	case	38:case	_
36	America	America	PROPN	NNP	Number=Sing	38	nmod:poss	38:nmod:poss	Entity=(173-place-new-nnnnn-cf11-3-sgl(33-place-giv:inact-nnnnn-cf1-1-coref-United_States
37	's	's	PART	POS	_	36	case	36:case	Entity=33)
38	west	west	NOUN	NN	Number=Sing	29	obl	29:obl:in	Entity=173)171)167)|SpaceAfter=No
39	.	.	PUNCT	.	_	8	punct	8:punct	_

~~~


