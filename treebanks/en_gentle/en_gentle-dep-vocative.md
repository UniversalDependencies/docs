---
layout: base
title:  'Statistics of vocative in UD_English-GENTLE'
udver: '2'
---

## Treebank Statistics: UD_English-GENTLE: Relations: `vocative`

This relation is universal.

9 nodes (0%) are attached to their parents as `vocative`.

5 instances of `vocative` (56%) are right-to-left (child precedes parent).
Average distance between parent and child is 6.

The following 8 pairs of parts of speech are connected with `vocative`: <tt><a href="en_gentle-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_gentle-pos-NOUN.html">NOUN</a></tt> (2; 22% instances), <tt><a href="en_gentle-pos-ADJ.html">ADJ</a></tt>-<tt><a href="en_gentle-pos-NOUN.html">NOUN</a></tt> (1; 11% instances), <tt><a href="en_gentle-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_gentle-pos-PRON.html">PRON</a></tt> (1; 11% instances), <tt><a href="en_gentle-pos-PROPN.html">PROPN</a></tt>-<tt><a href="en_gentle-pos-PROPN.html">PROPN</a></tt> (1; 11% instances), <tt><a href="en_gentle-pos-VERB.html">VERB</a></tt>-<tt><a href="en_gentle-pos-ADJ.html">ADJ</a></tt> (1; 11% instances), <tt><a href="en_gentle-pos-VERB.html">VERB</a></tt>-<tt><a href="en_gentle-pos-NOUN.html">NOUN</a></tt> (1; 11% instances), <tt><a href="en_gentle-pos-VERB.html">VERB</a></tt>-<tt><a href="en_gentle-pos-PRON.html">PRON</a></tt> (1; 11% instances), <tt><a href="en_gentle-pos-VERB.html">VERB</a></tt>-<tt><a href="en_gentle-pos-PROPN.html">PROPN</a></tt> (1; 11% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 3 vocative	color:blue
1	1	1	NUM	CD	NumForm=Digit|NumType=Card	2	nummod	2:nummod	Discourse=restatement-partial:51->45:3:sem-synym-323,367+sem-rpt-325-326,365-366|Entity=(46-time-giv:inact-cf2-2-coref
2	week	week	NOUN	NN	Number=Sing	0	root	0:root	Entity=46)
3	asshole	asshole	NOUN	NN	Number=Sing	2	vocative	2:vocative	Entity=(1-person-giv:act-cf1*-1-coref)|MSeg=ass-hole|SpaceAfter=No
4	.	.	PUNCT	.	_	2	punct	2:punct	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 5 vocative	color:blue
1	More	more	ADJ	JJR	Degree=Cmp	0	root	0:root	Discourse=joint-other_m:28->4:2:_|PDTB=Implicit:Expansion.Conjunction:and:_:173-176:177-182
2	at	at	ADP	IN	_	3	case	3:case	_
3	true	true	ADJ	JJ	Degree=Pos	1	obl	1:obl:at	Entity=(47-abstract-new-cf2-1-sgl)|SpaceAfter=No|XML=<ref target:::"https://en.wiktionary.org/wiki/true"></ref>
4	,	,	PUNCT	,	_	5	punct	5:punct	_
5	tree	tree	NOUN	NN	Number=Sing	1	vocative	1:vocative	Entity=(48-abstract-new-cf1-1-sgl)|SpaceAfter=No|XML=<ref target:::"https://en.wiktionary.org/wiki/tree"></ref>
6	.	.	PUNCT	.	_	1	punct	1:punct	_

~~~


~~~ conllu
# visual-style 75	bgColor:blue
# visual-style 75	fgColor:white
# visual-style 76	bgColor:blue
# visual-style 76	fgColor:white
# visual-style 76 75 vocative	color:blue
1	My	my	PRON	PRP$	Case=Gen|Number=Sing|Person=1|Poss=Yes|PronType=Prs	4	nmod:poss	4:nmod:poss	Discourse=context-background:8->10:1:_|Entity=(12-abstract-new-cf6-4-coref(1-person-giv:act-cf1*-1-ana)|PDTB=Implicit:Expansion.Conjunction:in fact:_:1-60:61-196
2	criminal	criminal	ADJ	JJ	Degree=Pos	4	amod	4:amod	MSeg=crimin-al
3	rap	rap	NOUN	NN	Number=Sing	4	compound	4:compound	_
4	sheet	sheet	NOUN	NN	Number=Sing	7	nsubj	7:nsubj|68:nsubj|69:nsubj:xsubj	Entity=12)
5	is	be	AUX	VBZ	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	7	cop	7:cop	_
6	no	no	DET	DT	PronType=Neg	7	det	7:det	Entity=(12-abstract-giv:act-cf6-2-pred|Negation=Yes
7	joke	joke	NOUN	NN	Number=Sing	0	root	0:root	Entity=12)
8	I	I	PRON	PRP	Case=Nom|Number=Sing|Person=1|PronType=Prs	10	nsubj:pass	10:nsubj:pass	Discourse=joint-list_m:9->8:0:sem-lxchn-62,72|Entity=(1-person-giv:act-cf1*-1-ana)
9	'm	be	AUX	VBP	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	10	aux:pass	10:aux:pass	_
10	know	know	VERB	VBN	Tense=Past|Typo=Yes|VerbForm=Part|Voice=Pass	7	parataxis	7:parataxis	CorrectForm=known|XML=<sic ana:::"known"></sic>
11	in	in	ADP	IN	_	12	case	12:case	_
12	prison	prison	NOUN	NN	Number=Sing	10	obl	10:obl:in	Entity=(6-place-giv:act-cf7-1-coref-Prison)
13	for	for	ADP	IN	_	16	case	16:case	_
14	a	a	DET	DT	Definite=Ind|PronType=Art	16	det	16:det	Entity=(13-abstract-new-cf18-3-sgl
15	store	store	NOUN	NN	Number=Sing	16	compound	16:compound	Entity=(14-place-new-cf22-1-sgl)
16	holdup	holdup	NOUN	NN	Number=Sing	10	obl	10:obl:for	_
17	on	on	ADP	IN	_	18	case	18:case	_
18	blacks	black	NOUN	NNS	Number=Plur	16	nmod	16:nmod:on	Entity=(15-person-new-cf16-1-sgl)13)|MSeg=black-s
19	or	or	CCONJ	CC	_	21	cc	21:cc	_
20	a	a	DET	DT	Definite=Ind|PronType=Art	21	det	21:det	Entity=(16-person-new-cf17-2-sgl
21	black	black	NOUN	NN	Number=Sing	16	conj	10:obl:for|16:conj:or	Entity=16)
22	and	and	CCONJ	CC	_	68	cc	68:cc	Discourse=evaluation-comment:10->2:2:lex-indph-66-67;mode-manner:10->15:1:1:orp-likewise-133;causal-result:10->8:1:1:orp-and-82|PDTB=Explicit:Contingency.Cause.Result:and:82:61-81:83-129
23	if	if	SCONJ	IN	_	29	mark	29:mark	Discourse=contingency-condition:11->14:0:dm-if then-83,126|PDTB=Explicit:Contingency.Condition.Arg2-as-cond:if then:83,126:82,125,127-129:84-124
24	you	you	PRON	PRP	Case=Acc|Number=Sing|Person=2|PronType=Prs	28	discourse	28:discourse	Entity=(7-person-giv:act-cf4-5-coref
25	White	white	ADJ	JJ	Degree=Pos	28	amod	28:amod	_
26	American	American	ADJ	JJ	Degree=Pos	28	amod	28:amod	MSeg=America-n
27	Jewish	Jewish	ADJ	JJ	Degree=Pos	28	amod	28:amod	MSeg=Jew-ish
28	Judges	judge	NOUN	NNS	Number=Plur	29	nsubj	29:nsubj|31:nsubj:xsubj|33:nsubj:xsubj	Entity=7)|MSeg=Judge-s
29	wan	want	VERB	VBP	Mood=Ind|Number=Plur|Person=3|Style=Vrnc|Tense=Pres|VerbForm=Fin	68	advcl	68:advcl:if	CxnElt=68:Conditional-UnspecifiedEpistemic-NoInversion.Protasis|XML=<w>
30	na	to	PART	TO	_	31	mark	31:mark	XML=</w>
31	act	act	VERB	VB	VerbForm=Inf	29	xcomp	29:xcomp	Entity=(17-abstract-new-cf3-1-disc
32	racially	racially	ADV	RB	Degree=Pos	33	advmod	33:advmod	_
33	motivated	motivated	ADJ	JJ	Degree=Pos	31	xcomp	31:xcomp	MSeg=motiv-at-ed
34	with	with	ADP	IN	_	35	case	35:case	_
35	justice	justice	NOUN	NN	Number=Sing	31	obl	31:obl:with	Entity=(18-abstract-undefined-cf11-1-coref)|MSeg=just-ice
36	in	in	ADP	IN	_	40	case	40:case	_
37	a	a	DET	DT	Definite=Ind|PronType=Art	40	det	40:det	Entity=(19-abstract-new-cf19-4-sgl
38	double	double	ADJ	JJ	Degree=Pos	39	advmod	39:advmod	_
39	sided	sided	ADJ	JJ	Degree=Pos	40	amod	40:amod	MSeg=sid-ed
40	way	way	NOUN	NN	Number=Sing	31	obl	31:obl:in	Entity=19)
41	dropping	drop	VERB	VBG	Tense=Pres|VerbForm=Part	31	advcl	31:advcl	Discourse=mode-manner:12->11:0:syn-pres-101,119|MSeg=dropp-ing|PDTB=Implicit:Expansion.Manner.Arg2-as-manner:by:_:83-100:101-124
42	the	the	DET	DT	Definite=Def|PronType=Art	44	det	44:det	Entity=(20-abstract-new-cf13-3,7,11-sgl
43	"	''	PUNCT	``	_	44	punct	44:punct	SpaceAfter=No
44	I	I	NOUN	NN	Number=Sing	41	obj	41:obj	SpaceAfter=No
45	"	''	PUNCT	''	_	44	punct	44:punct	SpaceAfter=No
46	;	;	PUNCT	:	_	48	punct	48:punct	_
47	"	''	PUNCT	``	_	48	punct	48:punct	SpaceAfter=No
48	C	C	NOUN	NN	Number=Sing	44	conj	41:obj|44:conj:and	SpaceAfter=No
49	"	''	PUNCT	''	_	48	punct	48:punct	_
50	and	and	CCONJ	CC	_	52	cc	52:cc	_
51	"	''	PUNCT	``	_	52	punct	52:punct	SpaceAfter=No
52	E	E	NOUN	NN	Number=Sing	44	conj	41:obj|44:conj:and	SpaceAfter=No
53	"	''	PUNCT	''	_	52	punct	52:punct	_
54	of	of	ADP	IN	_	56	case	56:case	_
55	the	the	DET	DT	Definite=Def|PronType=Art	56	det	56:det	Entity=(21-abstract-new-cf8-2-coref-Justice
56	Word	word	NOUN	NN	Number=Sing	44	nmod	44:nmod:of	Entity=21)
57	Justice	justice	NOUN	NN	Number=Sing	56	appos	56:appos	Entity=(21-abstract-giv:act-cf8-1-appos-Justice)20)
58	apparently	apparently	ADV	RB	Degree=Pos	59	advmod	59:advmod	Discourse=joint-list_m:13->12:0:sem-lxchn-116,121|MSeg=apparent-ly
59	raising	raise	VERB	VBG	Tense=Pres|VerbForm=Part	41	advcl	41:advcl	MSeg=rais-ing
60	the	the	DET	DT	Definite=Def|PronType=Art	61	det	61:det	Entity=(22-abstract-new-cf10-2-coref
61	word	word	NOUN	NN	Number=Sing	59	obj	59:obj	Entity=22)
62	"	''	PUNCT	``	_	63	punct	63:punct	SpaceAfter=No
63	Just	just	ADJ	JJ	Degree=Pos	61	appos	61:appos	Entity=(22-abstract-giv:act-cf10-1-appos)|SpaceAfter=No
64	"	''	PUNCT	''	_	63	punct	63:punct	Entity=17)
65	well	well	INTJ	UH	_	68	discourse	68:discourse	Discourse=same-unit_m:14->10:0:_
66	then	then	ADV	RB	PronType=Dem	68	advmod	68:advmod	_
67	so	so	ADV	RB	_	68	advmod	68:advmod	_
68	become	become	VERB	VB	VerbForm=Inf	7	conj	7:conj:and	Cxn=Conditional-UnspecifiedEpistemic-NoInversion|CxnElt=68:Conditional-UnspecifiedEpistemic-NoInversion.Apodosis|MSeg=be-come
69	it	it	PRON	PRP	Case=Acc|Gender=Neut|Number=Sing|Person=3|PronType=Prs	68	xcomp	68:xcomp	Entity=(17-abstract-giv:act-cf3-1-coref)
70	Ii	I	PRON	PRP	Case=Nom|Number=Sing|Person=3|PronType=Prs|Typo=Yes	72	nsubj	72:nsubj	CorrectForm=I|Discourse=organization-preparation:15->20:2:ref-prs-130,167+sem-synym-135-136,176-181|Entity=(23-abstract-new-cf2-3-disc(1-person-giv:act-cf1*-1-ana)|XML=<sic ana:::"I"></sic>
71	'll	will	AUX	MD	VerbForm=Fin	72	aux	72:aux	_
72	play	play	VERB	VB	VerbForm=Inf	68	parataxis	68:parataxis	_
73	likewise	likewise	ADV	RB	_	72	advmod	72:advmod	PDTB=Explicit:Expansion.Conjunction:likewise:133:82-129:130-132,134-154
74	with	with	ADP	IN	_	76	case	76:case	_
75	you	you	PRON	PRP	Case=Acc|Number=Sing|Person=2|PronType=Prs	76	vocative	76:vocative	Entity=(7-person-giv:act-cf4-2-coref
76	judges	judge	NOUN	NNS	Number=Plur	72	obl	72:obl:with	Entity=7)23)|MSeg=judge-s
77	from	from	ADP	IN	_	82	case	82:case	_
78	a	a	DET	DT	Definite=Ind|PronType=Art	82	det	82:det	Entity=(24-abstract-new-cf20-4,5-sgl
79	Koranic	Koranic	ADJ	NNP	Degree=Pos	82	amod	82:amod	Entity=(25-abstract-new-cf14-1-sgl)
80	and	and	CCONJ	CC	_	81	cc	81:cc	_
81	Torooh	Torah	PROPN	NNP	Number=Sing|Typo=Yes	79	conj	79:conj:and|82:compound	CorrectForm=Torah|Entity=(26-abstract-new-cf15-1-sgl-Torah)|XML=<sic ana:::"Torah"></sic>
82	perspective	perspective	NOUN	NN	Number=Sing	86	obl	86:obl:from	Entity=24)|MSeg=perspect-ive
83	that	that	PRON	DT	Number=Sing|PronType=Dem	86	nsubj	86:nsubj|91:nsubj	Discourse=evaluation-comment:16->15:0:_|Entity=(23-abstract-giv:act-cf2-1-coref)|XML=<w>
84	s	be	AUX	VBZ	Mood=Ind|Number=Sing|Person=3|Tense=Pres|Typo=Yes|VerbForm=Fin	86	cop	86:cop	CorrectForm='s|XML=<sic ana:::"'s"></sic></w>
85	an	a	DET	DT	Definite=Ind|PronType=Art	86	det	86:det	Entity=(23-abstract-giv:act-cf2-2-coref
86	eye	eye	NOUN	NN	Number=Sing	68	parataxis	68:parataxis|96:nsubj	Entity=23)
87	for	for	ADP	IN	_	89	case	89:case	_
88	an	a	DET	DT	Definite=Ind|PronType=Art	89	det	89:det	Entity=(17-abstract-giv:act-cf3-2-coref
89	eye	eye	NOUN	NN	Number=Sing	86	nmod	86:nmod:for	Entity=17)
90	and	and	CCONJ	CC	_	91	cc	91:cc	_
91	life	life	NOUN	NN	Number=Sing	86	conj	86:conj:and	Entity=(23-abstract-giv:act-cf2-1-coref)
92	for	for	ADP	IN	_	94	case	94:case	_
93	a	a	DET	DT	Definite=Ind|PronType=Art	94	det	94:det	Entity=(17-abstract-giv:act-cf3-2-coref
94	life	life	NOUN	NN	Number=Sing	91	nmod	91:nmod:for	Entity=17)
95	which	which	PRON	WDT	PronType=Rel	96	nsubj	86:ref	Discourse=attribution-positive:17->20:1:sem-atsrc-145-146,155+lex-indwd-156+syn-rpr-157,166
96	means	mean	VERB	VBZ	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	86	acl:relcl	86:acl:relcl	MSeg=mean-s
97	if	if	SCONJ	IN	_	102	mark	102:mark	Discourse=contingency-condition:18->20:0:dm-if-157+dm-if-166|PDTB=Explicit:Contingency.Condition.Arg2-as-cond:if:157:176-196:158-175
98	just	just	ADJ	JJ	Degree=Pos	99	amod	99:amod	Entity=(27-event-new-cf12-2-coref
99	treatment	treatment	NOUN	NN	Number=Sing	102	nsubj:pass	102:nsubj:pass	Entity=27)|MSeg=treat-ment
100	is	be	AUX	VBZ	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	102	aux:pass	102:aux:pass	_
101	not	not	PART	RB	Polarity=Neg	102	advmod	102:advmod	Negation=Yes
102	actioned	action	VERB	VBN	Tense=Past|VerbForm=Part|Voice=Pass	123	advcl	123:advcl:if	CxnElt=123:Conditional-UnspecifiedEpistemic-NoInversion.Protasis|MSeg=act-ion-ed
103	in	in	ADP	IN	_	105	case	105:case	_
104	this	this	DET	DT	Number=Sing|PronType=Dem	105	det	105:det	Entity=(3-abstract-giv:act-cf5-2-coref
105	case	case	NOUN	NN	Number=Sing	102	obl	102:obl:in	Entity=3)
106	if	if	SCONJ	IN	_	109	mark	109:mark	Discourse=joint-list_m:19->18:0:_|PDTB=Explicit:Contingency.Condition.Arg2-as-cond:if:166:176-196:157-165,167-175
107	I	I	PRON	PRP	Case=Nom|Number=Sing|Person=1|PronType=Prs	109	nsubj	109:nsubj	Entity=(1-person-giv:act-cf1*-1-ana)
108	can	can	AUX	MD	VerbForm=Fin	109	aux	109:aux	_
109	arranged	arrange	VERB	VB	Typo=Yes|VerbForm=Inf	123	advcl	123:advcl:if	CorrectForm=arrange|CxnElt=123:Conditional-UnspecifiedEpistemic-NoInversion.Protasis|MSeg=arrang-ed|XML=<sic ana:::"arrange"></sic>
110	sooner	soon	ADV	RBR	Degree=Cmp	109	advmod	109:advmod	Entity=(28-time-new-cf21-1-sgl|MSeg=soon-er
111	than	than	ADP	IN	_	113	case	113:case	_
112	upon	upon	ADP	IN	_	113	reparandum	113:reparandum	MSeg=up-on
113	soon	soon	ADV	RB	Degree=Pos	110	obl	110:obl:than	Entity=28)
114	prison	prison	NOUN	NN	Number=Sing	115	compound	115:compound	Entity=(6-place-giv:act-cf7-1-coref-Prison)
115	discharge	discharge	NOUN	NN	Number=Sing	110	obj	110:obj	MSeg=dis-charge
116	two	two	NUM	CD	NumForm=Word|NumType=Card	121	nummod	121:nummod	Discourse=joint-other_m:20->2:3:_|Entity=(7-person-giv:act-cf4-6-coref
117	-	-	PUNCT	HYPH	_	116	punct	116:punct	_
118	American	American	ADJ	JJ	Degree=Pos	121	amod	121:amod	MSeg=America-n
119	Jewish	Jewish	ADJ	JJ	Degree=Pos	121	amod	121:amod	MSeg=Jew-ish
120	rich	rich	ADJ	JJ	Degree=Pos	121	amod	121:amod	_
121	person	person	NOUN	NN	Number=Sing	123	nsubj	123:nsubj|125:nsubj:xsubj	Entity=7)
122	will	will	AUX	MD	VerbForm=Fin	123	aux	123:aux	_
123	become	become	VERB	VB	VerbForm=Inf	96	ccomp	96:ccomp	Cxn=Conditional-UnspecifiedEpistemic-NoInversion|CxnElt=123:Conditional-UnspecifiedEpistemic-NoInversion.Apodosis|MSeg=be-come
124	armed	armed	ADJ	JJ	Degree=Pos	125	compound	125:compound	MSeg=arm-ed
125	robbed	rob	VERB	VBN	Tense=Past|VerbForm=Part|Voice=Pass	123	xcomp	123:xcomp	MSeg=robb-ed
126	of	of	ADP	IN	_	130	case	130:case	_
127	20	20	NUM	CD	NumForm=Digit|NumType=Card	128	compound	128:compound	Entity=(8-object-giv:act-cf9-4-coref
128	thousand	thousand	NUM	CD	NumForm=Word|NumType=Card	130	nummod	130:nummod	_
129	cash	cash	NOUN	NN	Number=Sing	130	compound	130:compound	_
130	dollars	dollar	NOUN	NNS	Number=Plur	125	obl	125:obl:of	Entity=8)|MSeg=dollar-s
131	in	in	ADP	IN	_	132	case	132:case	_
132	replace	replace	NOUN	NN	Number=Sing	125	obl	125:obl:in	_
133	for	for	ADP	IN	_	135	case	135:case	_
134	my	my	PRON	PRP$	Case=Gen|Number=Sing|Person=1|Poss=Yes|PronType=Prs	135	nmod:poss	135:nmod:poss	Entity=(3-abstract-giv:act-cf5-2-coref(1-person-giv:act-cf1*-1-ana)
135	case	case	NOUN	NN	Number=Sing	132	obl	132:obl:for	Entity=3)|SpaceAfter=No
136	.	.	PUNCT	.	_	7	punct	7:punct	_

~~~


