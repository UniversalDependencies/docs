---
layout: base
title:  'Statistics of advcl:relcl in UD_English-GENTLE'
udver: '2'
---

## Treebank Statistics: UD_English-GENTLE: Relations: `advcl:relcl`

This relation is a language-specific subtype of <tt><a href="en_gentle-dep-advcl.html">advcl</a></tt>.

10 nodes (0%) are attached to their parents as `advcl:relcl`.

10 instances of `advcl:relcl` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 7.3.

The following 4 pairs of parts of speech are connected with `advcl:relcl`: <tt><a href="en_gentle-pos-ADV.html">ADV</a></tt>-<tt><a href="en_gentle-pos-VERB.html">VERB</a></tt> (4; 40% instances), <tt><a href="en_gentle-pos-VERB.html">VERB</a></tt>-<tt><a href="en_gentle-pos-VERB.html">VERB</a></tt> (4; 40% instances), <tt><a href="en_gentle-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_gentle-pos-VERB.html">VERB</a></tt> (1; 10% instances), <tt><a href="en_gentle-pos-VERB.html">VERB</a></tt>-<tt><a href="en_gentle-pos-NOUN.html">NOUN</a></tt> (1; 10% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 5 advcl:relcl	color:blue
1	8.	8.	X	LS	_	2	reparandum	2:reparandum	Discourse=joint-list_m:96->88:0|XML=<ref target:::"/networking-computing/README.md">
2	How	how	ADV	WRB	PronType=Rel	0	root	0:root	_
3	the	the	DET	DT	Definite=Def|PronType=Art	4	det	4:det	Entity=(151-place-new-cf1-2-sgl-Internet
4	Internet	Internet	PROPN	NNP	Number=Sing	5	nsubj	5:nsubj	Entity=151)
5	Works	work	VERB	VBZ	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	2	advcl:relcl	2:advcl:relcl	_
6	(	(	PUNCT	-LRB-	_	9	punct	9:punct	Discourse=elaboration-additional:97->96:0|SpaceAfter=No
7	The	the	DET	DT	Definite=Def|PronType=Art	9	det	9:det	Entity=(152-abstract-new-cf2-3-sgl
8	Other	other	ADJ	JJ	Degree=Pos	9	amod	9:amod	_
9	Kind	kind	NOUN	NN	Number=Sing	5	parataxis	5:parataxis	_
10	of	of	ADP	IN	_	11	case	11:case	_
11	Networking	networking	NOUN	NN	Number=Sing	9	nmod	9:nmod:of	Entity=152)|SpaceAfter=No
12	)	)	PUNCT	-RRB-	_	9	punct	9:punct	XML=</ref>

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 5 advcl:relcl	color:blue
1	They	they	PRON	PRP	Case=Nom|Number=Plur|Person=3|PronType=Prs	2	nsubj	2:nsubj	Discourse=attribution-positive:17->18:1|Entity=(28-person-giv:act-cf1*-1-ana)
2	know	know	VERB	VBP	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	0	root	0:root	_
3	where	where	ADV	WRB	PronType=Rel	5	obj	5:obj	Discourse=elaboration-additional:18->15:1
4	you	you	PRON	PRP	Case=Nom|Number=Sing|Person=2|PronType=Prs	5	nsubj	5:nsubj	Entity=(1-person-giv:act-cf2-1-ana)
5	shop	shop	VERB	VBP	Mood=Ind|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin	2	advcl:relcl	2:advcl:relcl	SpaceAfter=No
6	,	,	PUNCT	,	_	7	punct	7:punct	_
7	who	who	PRON	WP	PronType=Rel	5	conj	2:advcl:relcl|5:conj	Discourse=joint-list_m:19->18:0
8	your	your	PRON	PRP$	Case=Gen|Number=Sing|Person=2|Poss=Yes|PronType=Prs	9	nmod:poss	9:nmod:poss	Entity=(33-person-new-cf3-2-sgl(1-person-giv:act-cf2-1-ana)
9	friends	friend	NOUN	NNS	Number=Plur	10	nsubj	10:nsubj	Entity=33)
10	are	be	VERB	VBP	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	7	acl:relcl	7:acl:relcl	SpaceAfter=No
11	,	,	PUNCT	,	_	12	punct	12:punct	_
12	what	what	PRON	WP	PronType=Rel	5	conj	2:advcl:relcl|5:conj	Discourse=joint-list_m:20->18:0
13	you	you	PRON	PRP	Case=Nom|Number=Sing|Person=2|PronType=Prs	14	nsubj	14:nsubj	Entity=(1-person-giv:act-cf2-1-ana)
14	drive	drive	VERB	VBP	Mood=Ind|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin	12	acl:relcl	12:acl:relcl	SpaceAfter=No
15	,	,	PUNCT	,	_	16	punct	16:punct	_
16	where	where	ADV	WRB	PronType=Rel	5	conj	2:advcl:relcl|5:conj	Discourse=joint-list_m:21->18:0
17	you	you	PRON	PRP	Case=Nom|Number=Sing|Person=2|PronType=Prs	18	nsubj	18:nsubj	Entity=(1-person-giv:act-cf2-1-ana)
18	live	live	VERB	VBP	Mood=Ind|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin	16	advcl:relcl	16:advcl:relcl	SpaceAfter=No
19	.	.	PUNCT	.	_	2	punct	2:punct	_

~~~


~~~ conllu
# visual-style 105	bgColor:blue
# visual-style 105	fgColor:white
# visual-style 102	bgColor:blue
# visual-style 102	fgColor:white
# visual-style 102 105 advcl:relcl	color:blue
1	Now	now	ADV	RB	_	48	advmod	48:advmod	Discourse=context-background:1->17:5
2	after	after	ADP	IN	_	7	case	7:case	_
3	last	last	ADJ	JJ	Degree=Pos	4	amod	4:amod	Entity=(1-event-new-cf17-5,17,39-sgl(2-abstract-new-cf18-2-sgl
4	episodes	episode	NOUN	NNS	Number=Plur	7	nmod:poss	7:nmod:poss	_
5	's	's	PART	POS	_	4	case	4:case	Entity=2)
6	amazing	amazing	ADJ	JJ	Degree=Pos	7	amod	7:amod	_
7	conclusion	conclusion	NOUN	NN	Number=Sing	48	obl	48:obl:after	_
8	where	where	ADV	WRB	PronType=Rel	11	advmod	11:advmod	Discourse=elaboration-attribute:2->1:0
9	Napoli	Napoli	PROPN	NNP	Number=Sing	11	dislocated	11:dislocated	Entity=(3-organization-new-cf3-1-coref-S.S.C._Napoli)
10	they	they	PRON	PRP	Case=Nom|Number=Plur|Person=3|PronType=Prs	11	nsubj	11:nsubj|36:nsubj	Entity=(3-organization-giv:act-cf3-1-ana-S.S.C._Napoli)
11	beat	beat	VERB	VBD	Mood=Ind|Number=Plur|Person=3|Tense=Past|VerbForm=Fin	7	acl:relcl	7:acl:relcl	_
12	us	we	PRON	PRP	Case=Acc|Number=Plur|Person=1|PronType=Prs	11	obj	11:obj	Entity=(4-person-acc:com-cf1-1-ana)
13	in	in	ADP	IN	_	16	case	16:case	_
14	the	the	DET	DT	Definite=Def|PronType=Art	16	det	16:det	Entity=(5-time-new-cf10-3,6-sgl
15	first	first	ADJ	JJ	Degree=Pos|NumType=Ord	16	amod	16:amod	_
16	leg	leg	NOUN	NN	Number=Sing	11	obl	11:obl:in	_
17	of	of	ADP	IN	_	21	case	21:case	_
18	the	the	DET	DT	Definite=Def|PronType=Art	21	det	21:det	Entity=(6-event-new-cf11-2,4-sgl
19	Champions	Champion	PROPN	NNPS	Number=Plur	20	compound	20:compound	Entity=(7-event-new-cf24-1,2-coref-UEFA_Champions_League
20	League	League	PROPN	NNP	Number=Sing	21	compound	21:compound	Entity=7)
21	quarter-finals	quarter-final	NOUN	NNS	Number=Plur	16	nmod	16:nmod:of	Entity=6)5)
22	and	and	CCONJ	CC	_	25	cc	25:cc	Discourse=joint-sequence_m:3->2:0
23	then	then	ADV	RB	PronType=Dem	25	advmod	25:advmod	_
24	we	we	PRON	PRP	Case=Nom|Number=Plur|Person=1|PronType=Prs	25	nsubj	25:nsubj	Entity=(4-person-giv:act-cf1-1-ana)
25	brought	bring	VERB	VBD	Mood=Ind|Number=Plur|Person=1|Tense=Past|VerbForm=Fin	11	conj	7:acl:relcl|11:conj:and	_
26	it	it	PRON	PRP	Case=Acc|Gender=Neut|Number=Sing|Person=3|PronType=Prs	25	obj	25:obj	_
27	to	to	ADP	IN	_	28	case	28:case	_
28	them	they	PRON	PRP	Case=Acc|Number=Plur|Person=3|PronType=Prs	25	obl	25:obl:to	Entity=(3-organization-giv:act-cf3-1-ana-S.S.C._Napoli)
29	in	in	ADP	IN	_	32	case	32:case	_
30	the	the	DET	DT	Definite=Def|PronType=Art	32	det	32:det	Entity=(8-time-new-cf12-3-sgl
31	second	second	ADJ	JJ	Degree=Pos|NumType=Ord	32	amod	32:amod	_
32	leg	leg	NOUN	NN	Number=Sing	25	obl	25:obl:in	Entity=8)|SpaceAfter=No
33	,	,	PUNCT	,	_	36	punct	36:punct	_
34	and	and	CCONJ	CC	_	36	cc	36:cc	Discourse=joint-sequence_m:4->2:0
35	now	now	ADV	RB	_	36	advmod	36:advmod	_
36	advancing	advance	VERB	VBG	VerbForm=Ger	11	conj	7:acl:relcl|11:conj:and	_
37	into	into	ADP	IN	_	39	case	39:case	_
38	the	the	DET	DT	Definite=Def|PronType=Art	39	det	39:det	Entity=(9-event-new-cf13-2,4-coref
39	semi-finals	semi-final	NOUN	NNS	Number=Plur	36	obl	36:obl:into	_
40	against	against	ADP	IN	_	42	case	42:case	_
41	Manchester	Manchester	PROPN	NNP	Number=Sing	42	compound	42:compound	Entity=(10-organization-new-cf4-1,2-coref-Manchester_City_F.C.(11-place-new-cf5-1-coref-Manchester)
42	City	City	PROPN	NNP	Number=Sing	39	nmod	39:nmod:against	Entity=10)9)1)|SpaceAfter=No
43	,	,	PUNCT	,	_	7	punct	7:punct	_
44	today	today	NOUN	NN	Number=Sing	46	nmod:poss	46:nmod:poss	Discourse=same-unit_m:5->1:1|Entity=(12-event-new-cf7-3-coref(13-time-new-cf19-1-coref|XML=<date when:::"2020-02-01">
45	's	's	PART	POS	_	44	case	44:case	Entity=13)|XML=</date>
46	episode	episode	NOUN	NN	Number=Sing	48	nsubj	48:nsubj|50:nsubj:xsubj	Entity=12)
47	is	be	AUX	VBZ	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	48	aux	48:aux	_
48	gon	go	VERB	VBG	Tense=Pres|VerbForm=Part	0	root	0:root	XML=<w>
49	na	to	PART	TO	_	50	mark	50:mark	XML=</w>
50	start	start	VERB	VB	VerbForm=Inf	48	xcomp	48:xcomp	_
51	off	off	ADP	RP	_	50	compound:prt	50:compound:prt	_
52	with	with	ADP	IN	_	54	case	54:case	_
53	three	three	NUM	CD	NumForm=Word|NumType=Card	54	nummod	54:nummod	Entity=(14-event-new-cf20-2-coref
54	games	game	NOUN	NNS	Number=Plur	50	obl	50:obl:with|61:nsubj	_
55	that	that	PRON	WDT	PronType=Rel	61	nsubj	54:ref	Discourse=evaluation-comment:6->5:0
56	you	you	PRON	PRP	Case=Nom|Number=Sing|Person=2|PronType=Prs	57	nsubj	57:nsubj	Discourse=organization-phatic:7->8:1|Entity=(15-person-acc:com-cf6-1-ana)
57	know	know	VERB	VBP	Mood=Ind|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin	61	parataxis	61:parataxis	_
58	are	be	AUX	VBP	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	61	cop	61:cop	Discourse=same-unit_m:8->6:0
59	n't	not	PART	RB	Polarity=Neg	61	advmod	61:advmod	_
60	as	as	ADV	RB	_	61	advmod	61:advmod	_
61	hard	hard	ADJ	JJ	Degree=Pos	54	acl:relcl	54:acl:relcl	_
62	as	as	ADP	IN	_	65	case	65:case	_
63	the	the	DET	DT	Definite=Def|PronType=Art	65	det	65:det	Entity=(16-event-new-cf14-3-sgl
64	last	last	ADJ	JJ	Degree=Pos	65	amod	65:amod	_
65	couple	couple	NOUN	NN	Number=Sing	61	obl	61:obl:as	_
66	of	of	ADP	IN	_	67	case	67:case	_
67	matches	match	NOUN	NNS	Number=Plur	65	nmod	65:nmod:of	_
68	we	we	PRON	PRP	Case=Nom|Number=Plur|Person=1|PronType=Prs	70	nsubj	70:nsubj	Discourse=elaboration-attribute:9->8:0|Entity=(4-person-giv:act-cf1-1-ana)
69	've	have	AUX	VBP	Mood=Ind|Number=Plur|Person=1|Tense=Pres|VerbForm=Fin	70	aux	70:aux	_
70	had	have	VERB	VBN	Tense=Past|VerbForm=Part	65	acl:relcl	65:acl:relcl	Entity=16)14)|SpaceAfter=No
71	,	,	PUNCT	,	_	72	punct	72:punct	_
72	and	and	CCONJ	CC	_	81	cc	81:cc	Discourse=joint-sequence_m:10->1:2
73	then	then	ADV	RB	PronType=Dem	81	advmod	81:advmod	_
74	on	on	ADP	IN	_	76	case	76:case	_
75	uh	uh	INTJ	UH	_	76	discourse	76:discourse	_
76	27th	27th	ADJ	JJ	Degree=Pos|NumType=Ord	81	obl	81:obl:on	Entity=(17-time-new-cf21-1-sgl
77	of	of	ADP	IN	_	78	case	78:case	_
78	April	April	PROPN	NNP	Number=Sing	76	obl	76:obl:of	Entity=(18-time-new-cf16-1-sgl-April)17)|SpaceAfter=No
79	,	,	PUNCT	,	_	76	punct	76:punct	_
80	we	we	PRON	PRP	Case=Nom|Number=Plur|Person=1|PronType=Prs	81	nsubj	81:nsubj	Entity=(4-person-giv:act-cf1-1-ana)
81	have	have	VERB	VBP	Mood=Ind|Number=Plur|Person=1|Tense=Pres|VerbForm=Fin	48	conj	48:conj:and|94:csubj	_
82	Manchester	Manchester	PROPN	NNP	Number=Sing	83	compound	83:compound	Entity=(10-organization-giv:act-cf4-1,2-coref-Manchester_City_F.C.(11-place-giv:act-cf5-1-coref-Manchester)
83	City	City	PROPN	NNP	Number=Sing	81	obj	81:obj	Entity=10)
84	in	in	ADP	IN	_	87	case	87:case	_
85	the	the	DET	DT	Definite=Def|PronType=Art	87	det	87:det	Entity=(19-time-new-cf22-10,33-sgl
86	first	first	ADJ	JJ	Degree=Pos|NumType=Ord	87	amod	87:amod	_
87	leg	leg	NOUN	NN	Number=Sing	81	obl	81:obl:in	_
88	of	of	ADP	IN	_	90	case	90:case	_
89	the	the	DET	DT	Definite=Def|PronType=Art	90	det	90:det	Entity=(20-event-new-cf15-2-sgl
90	semi-finals	semi-final	NOUN	NNS	Number=Plur	87	nmod	87:nmod:of	Entity=20)|SpaceAfter=No
91	,	,	PUNCT	,	_	94	punct	94:punct	_
92	which	which	PRON	WDT	PronType=Rel	94	nsubj	81:ref|94:nsubj|98:nsubj:xsubj	Discourse=evaluation-comment:11->10:0
93	is	be	AUX	VBZ	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	94	aux	94:aux	_
94	going	go	VERB	VBG	Tense=Pres|VerbForm=Part	81	advcl:relcl	81:advcl:relcl	_
95	to	to	PART	TO	_	98	mark	98:mark	_
96	be	be	AUX	VB	VerbForm=Inf	98	cop	98:cop	_
97	possibly	possibly	ADV	RB	Degree=Pos	98	advmod	98:advmod	_
98	one	one	NUM	CD	NumForm=Word|NumType=Card	94	xcomp	94:xcomp	Entity=(21-time-new-cf23-1-sgl
99	of	of	ADP	IN	_	102	case	102:case	_
100	the	the	DET	DT	Definite=Def|PronType=Art	102	det	102:det	_
101	hardest	hard	ADJ	JJS	Degree=Sup	102	amod	102:amod	_
102	games	game	NOUN	NNS	Number=Plur	98	nmod	98:nmod:of	_
103	I	I	PRON	PRP	Case=Nom|Number=Sing|Person=1|PronType=Prs	105	nsubj	105:nsubj|108:nsubj:xsubj	Discourse=elaboration-attribute:12->11:0|Entity=(22-person-acc:com-cf2-1-ana)
104	'm	be	AUX	VBP	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	105	aux	105:aux	_
105	gon	go	VERB	VBG	Tense=Pres|VerbForm=Part	102	advcl:relcl	102:advcl:relcl	XML=<w>
106	na	to	PART	TO	_	108	mark	108:mark	XML=</w>
107	be	be	AUX	VB	VerbForm=Inf	108	aux	108:aux	_
108	playing	play	VERB	VBG	Tense=Pres|VerbForm=Part	105	xcomp	105:xcomp	Entity=21)
109	because	because	SCONJ	IN	_	112	mark	112:mark	Discourse=context-background:13->14:2
110	Napoli	Napoli	PROPN	NNP	Number=Sing	112	nsubj	112:nsubj	Entity=(3-organization-giv:act-cf3-1-coref-S.S.C._Napoli)
111	has	have	AUX	VBZ	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	112	aux	112:aux	_
112	given	give	VERB	VBN	Tense=Past|VerbForm=Part	94	advcl	94:advcl:because	_
113	me	I	PRON	PRP	Case=Acc|Number=Sing|Person=1|PronType=Prs	112	iobj	112:iobj	Entity=(22-person-giv:act-cf2-1-ana)
114	our	our	PRON	PRP$	Case=Gen|Number=Plur|Person=1|Poss=Yes|PronType=Prs	115	nmod:poss	115:nmod:poss	Entity=(23-event-new-cf9-2-sgl(4-person-giv:act-cf1-1-ana)
115	game	game	NOUN	NN	Number=Sing	112	obj	112:obj	Entity=23)
116	and	and	CCONJ	CC	_	120	cc	120:cc	Discourse=explanation-justify:14->11:1
117	Manchester	Manchester	PROPN	NNP	Number=Sing	118	compound	118:compound	Entity=(10-organization-giv:act-cf4-1,2-coref-Manchester_City_F.C.(11-place-giv:act-cf5-1-coref-Manchester)
118	City	City	PROPN	NNP	Number=Sing	120	dislocated	120:dislocated	Entity=10)
119	I	I	PRON	PRP	Case=Nom|Number=Sing|Person=1|PronType=Prs	120	nsubj	120:nsubj	Entity=(22-person-giv:act-cf2-1-ana)
120	know	know	VERB	VBP	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	112	conj	94:advcl:because|112:conj:and	_
121	the	the	DET	DT	Definite=Def|PronType=Art	122	det	122:det	Entity=(24-abstract-new-cf8-2-sgl
122	way	way	NOUN	NN	Number=Sing	120	obj	120:obj	_
123	they	they	PRON	PRP	Case=Nom|Number=Plur|Person=3|PronType=Prs	124	nsubj	124:nsubj	Discourse=elaboration-attribute:15->14:0|Entity=(10-organization-giv:act-cf4-1-ana-Manchester_City_F.C.)
124	play	play	VERB	VBP	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	122	acl:relcl	122:acl:relcl	Entity=24)|SpaceAfter=No
125	,	,	PUNCT	,	_	130	punct	130:punct	_
126	they	they	PRON	PRP	Case=Nom|Number=Plur|Person=3|PronType=Prs	130	nsubj	130:nsubj	Discourse=elaboration-additional:16->14:1|Entity=(10-organization-giv:act-cf4-1-ana-Manchester_City_F.C.)|SpaceAfter=No
127	're	be	AUX	VBP	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	130	cop	130:cop	_
128	exactly	exactly	ADV	RB	Degree=Pos	130	advmod	130:advmod	_
129	like	like	ADP	IN	_	130	case	130:case	_
130	Napoli	Napoli	PROPN	NNP	Number=Sing	120	parataxis	120:parataxis	Entity=(3-organization-giv:act-cf3-1-coref-S.S.C._Napoli)19)|SpaceAfter=No
131	.	.	PUNCT	.	_	48	punct	48:punct	_

~~~


