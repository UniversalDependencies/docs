---
layout: base
title:  'Statistics of acl:relcl in UD_Albanian-STAF'
udver: '2'
---

## Treebank Statistics: UD_Albanian-STAF: Relations: `acl:relcl`

This relation is a language-specific subtype of <tt><a href="sq_staf-dep-acl.html">acl</a></tt>.

26 nodes (1%) are attached to their parents as `acl:relcl`.

26 instances of `acl:relcl` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 4.46153846153846.

The following 5 pairs of parts of speech are connected with `acl:relcl`: <tt><a href="sq_staf-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sq_staf-pos-VERB.html">VERB</a></tt> (19; 73% instances), <tt><a href="sq_staf-pos-PRON.html">PRON</a></tt>-<tt><a href="sq_staf-pos-VERB.html">VERB</a></tt> (4; 15% instances), <tt><a href="sq_staf-pos-ADJ.html">ADJ</a></tt>-<tt><a href="sq_staf-pos-VERB.html">VERB</a></tt> (1; 4% instances), <tt><a href="sq_staf-pos-PROPN.html">PROPN</a></tt>-<tt><a href="sq_staf-pos-VERB.html">VERB</a></tt> (1; 4% instances), <tt><a href="sq_staf-pos-VERB.html">VERB</a></tt>-<tt><a href="sq_staf-pos-ADJ.html">ADJ</a></tt> (1; 4% instances).


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 9 acl:relcl	color:blue
1	–	–	PUNCT	_	_	2	punct	_	end_char=445|start_char=444
2	Diçka	diçka	NOUN	_	Case=Nom|Definite=Def|Gender=Fem|Number=Sing	0	root	_	end_char=451|start_char=446
3	simbolike	simbolik	ADJ	_	Case=Nom|Degree=Pos|Gender=Fem|Number=Sing	2	amod	_	SpaceAfter=No
4	,	,	PUNCT	_	_	5	punct	_	end_char=462|start_char=461
5	sigurisht	sigurisht	ADV	_	AdvType=Man	2	advmod	_	SpaceAfter=No
6	,	,	PUNCT	_	_	5	punct	_	end_char=473|start_char=472
7	por	por	CCONJ	_	_	12	mark	_	end_char=477|start_char=474
8	që	që	PRON	_	PronType=Rel	9	nsubj	_	end_char=480|start_char=478
9	shpresoj	shpresoj	VERB	_	Mood=Ind|Number=Sing|Person=1|Tense=Pres|Voice=Act	2	acl:relcl	_	end_char=489|start_char=481
10	të	të	PART	_	_	12	mark	_	end_char=492|start_char=490
11	të	të	PRON	_	Case=Acc|Number=Sing|Person=2|PronType=Prs	12	obj	_	end_char=495|start_char=493
12	ndihmojë	ndihmoj	VERB	_	Mood=Sub|Number=Sing|Person=3|Tense=Pres|Voice=Act	9	ccomp	_	end_char=504|start_char=496
13	sado	sado	ADV	_	AdvType=Deg	14	advmod	_	end_char=509|start_char=505
14	pak	pak	ADV	_	AdvType=Deg	12	advmod	_	end_char=513|start_char=510
15	në	në	ADP	_	_	17	case	_	end_char=516|start_char=514
16	këto	këto	PRON	_	Case=Acc|Gender=Fem|Number=Plur|PronType=Dem	17	det	_	end_char=521|start_char=517
17	ditë	ditë	NOUN	_	Case=Acc|Definite=Ind|Gender=Fem|Number=Plur	12	obl	_	end_char=526|start_char=522
18	të	të	DET	_	Case=Acc|Gender=Fem|Number=Plur|PronType=Art	19	det:adj	_	end_char=529|start_char=527
19	para	parë	ADJ	_	Case=Acc|Degree=Pos|Gender=Fem|Number=Plur	17	amod	_	SpaceAfter=No
20	.	.	PUNCT	_	_	2	punct	_	end_char=535|start_char=534

~~~


~~~ conllu
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 12 14 acl:relcl	color:blue
1	Asi	asi	PRON	_	Case=Nom|Gender=Masc|Number=Sing|Person=3|PronType=Prs	6	nsubj	_	end_char=780|start_char=777
2	që	që	PRON	_	PronType=Rel	3	nsubj	_	end_char=783|start_char=781
3	prijnë	prij	VERB	_	Mood=Ind|Number=Plur|Person=3|Tense=Pres|Voice=Act	1	acl:relcl	_	end_char=790|start_char=784
4	teposhtë	teposhtë	ADV	_	AdvType=Tim	3	advmod	_	end_char=799|start_char=791
5	ka	kam	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|Voice=Act	6	aux	_	end_char=802|start_char=800
6	shumë	shumë	PRON	_	PronType=Ind	0	root	_	end_char=808|SpaceAfter=No|start_char=803
7	;	;	PUNCT	_	_	8	punct	_	end_char=809|start_char=808
8	njerëzve	njeri	NOUN	_	Case=Dat|Definite=Def|Gender=Masc|Number=Plur	11	iobj	_	end_char=818|start_char=810
9	i	i	PRON	_	Case=Dat|Gender=Masc|Number=Plur|Person=3|PronType=Prs	11	iobj	_	end_char=820|start_char=819
10	u	u	AUX	_	_	11	aux	_	end_char=821|start_char=820
11	duhen	duhet	VERB	_	Mood=Ind|Number=Plur|Person=3|Tense=Pres|Voice=Mid	6	parataxis	_	end_char=827|start_char=822
12	asi	asi	PRON	_	Case=Nom|Gender=Masc|Number=Sing|PronType=Prs	11	nsubj	_	end_char=831|start_char=828
13	që	që	PRON	_	PronType=Rel	14	nsubj	_	end_char=834|start_char=832
14	prijnë	prij	VERB	_	Mood=Ind|Number=Plur|Person=3|Tense=Pres|Voice=Act	12	acl:relcl	_	end_char=841|start_char=835
15	tenaltë	tenaltë	NOUN	_	Case=Acc|Definite=Ind|Gender=Fem|Number=Sing	14	obj	_	end_char=849|SpaceAfter=No|start_char=842
16	!	!	PUNCT	_	_	11	punct	_	end_char=850|start_char=849

~~~


~~~ conllu
# visual-style 37	bgColor:blue
# visual-style 37	fgColor:white
# visual-style 35	bgColor:blue
# visual-style 35	fgColor:white
# visual-style 35 37 acl:relcl	color:blue
1	Por	por	SCONJ	_	_	3	mark	_	_
2	kisha	jam	AUX	_	Mood=Ind|Number=Sing|Person=1|Tense=Past|Voice=Act	3	aux	_	_
3	kuptuar	kuptoj	VERB	_	VerbForm=Part	0	root	_	_
4	vetëm	vetëm	ADV	_	_	3	advmod	_	_
5	një	nje	DET	_	Definite=Ind	6	det	_	_
6	pjesë	pjesë	NOUN	_	Case=Acc|Definite=Ind|Gender=Fem|Number=Sing	3	obj	_	_
7	të	të	PART	_	_	9	case	_	_
8	së	së	DET	_	Case=Gen|Gender=Fem|Number=Sing|PronType=Art	9	det	_	_
9	vërtetës	vërtetës	NOUN	_	Case=Gen|Definite=Def|Gender=Fem|Number=Sing	6	nmod:poss	_	SpaceAfter=No
10	,	,	PUNCT	_	_	3	punct	_	_
11	kjo	kjo	PRON	_	Case=Nom|Gender=Fem|Number=Sing|PronType=Dem	14	nsubj	_	_
12	nuk	nuk	PART	_	_	14	advmod	_	_
13	ishte	jam	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Past|Voice=Act	14	cop	_	_
14	shtëpia	shtëpi	NOUN	_	Case=Nom|Definite=Def|Gender=Fem|Number=Sing	3	ccomp	_	_
15	e	e	PART	_	_	16	case	_	_
16	fëmijërisë	fëmijëri	NOUN	_	Case=Gen|Definite=Def|Gender=Fem|Number=Sing	14	nmod:poss	_	SpaceAfter=No
17	,	,	PUNCT	_	_	14	punct	_	_
18	ishte	jam	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Past|Voice=Act	20	cop	_	_
19	një	një	DET	_	Definite=Ind	20	det	_	_
20	vilë	vilë	NOUN	_	Case=Nom|Definite=Ind|Gender=Fem|Number=Sing	14	parataxis	_	_
21	me	me	ADP	_	_	23	case	_	_
22	tri	tri	NUM	_	_	23	nummod	_	_
23	dhoma	dhomë	NOUN	_	Case=Acc|Definite=Ind|Gender=Fem|Number=Plur	20	nmod	_	_
24	e	e	CCONJ	_	_	26	cc	_	_
25	një	një	DET	_	Definite=Ind	26	det	_	_
26	banjë	banjë	NOUN	_	Case=Acc|Definite=Ind|Gender=Fem|Number=Sing	23	conj	_	_
27	në	në	ADP	_	_	28	case	_	_
28	katin	kat	NOUN	_	Case=Acc|Definite=Def|Gender=Masc|Number=Sing	26	nmod	_	_
29	përdhes	përdhes	ADJ	_	Case=Acc|Degree=Pos|Gender=Masc|Number=Sing	28	amod	_	SpaceAfter=No
30	,	,	PUNCT	_	_	34	punct	_	_
31	po	po	CCONJ	_	_	34	cc	_	_
32	aq	aq	ADV	_	AdvType=Deg	31	fixed	_	_
33	në	në	ADP	_	_	34	case	_	_
34	katin	kat	NOUN	_	Case=Acc|Definite=Def|Gender=Masc|Number=Sing	28	conj	_	_
35	sipër	sipër	ADJ	_	_	34	amod	_	_
36	ku	ku	ADV	_	_	37	advmod	_	_
37	gjendesha	gjendesoj	VERB	_	Mood=Ind|Number=Sing|Person=1|Tense=Past|Voice=Mid	35	acl:relcl	_	_
38	unë	unë	PRON	_	Case=Nom|Number=Sing|Person=1|PronType=Prs	37	nsubj	_	SpaceAfter=No
39	,	,	PUNCT	_	_	41	punct	_	_
40	i	i	PART	_	_	41	mark	_	_
41	rrethuar	rrethuar	VERB	_	VerbForm=Part	37	advcl	_	_
42	nga	nga	ADP	_	_	43	case	_	_
43	konforti	konfort	NOUN	_	Case=Nom|Definite=Def|Gender=Masc|Number=Sing	41	obl	_	SpaceAfter=No
44	,	,	PUNCT	_	_	47	punct	_	_
45	nga	nga	ADP	_	_	47	case	_	_
46	një	një	DET	_	_	47	det	_	_
47	heshtje	heshtje	NOUN	_	Case=Nom|Definite=Ind|Gender=Fem|Number=Sing	43	conj	_	_
48	e	e	DET	_	Case=Nom|Gender=Fem|Number=Sing|PronType=Art	49	det:adj	_	_
49	thellë	thellë	ADJ	_	Case=Nom|Degree=Pos|Gender=Fem|Number=Sing	47	amod	_	_
50	e	e	DET	_	Case=Nom|Gender=Fem|Number=Sing|PronType=Art	51	det:adj	_	_
51	përhershme	përhershëm	ADJ	_	Case=Nom|Degree=Pos|Gender=Fem|Number=Sing	49	conj	_	_
52	dhe	dhe	CCONJ	_	_	58	cc	_	_
53	pothuajse	pothuajse	ADV	_	_	55	advmod	_	_
54	gjatë	gjatë	ADP	_	_	56	case	_	_
55	gjithë	gjithë	PRON	_	_	56	det	_	_
56	kohës	kohë	NOUN	_	Case=Abl|Definite=Def|Gender=Fem|Number=Sing	41	obl:tmod	_	_
57	nga	nga	ADP	_	_	58	case	_	_
58	përkujdesjet	përkujdesje	NOUN	_	Case=Nom|Definite=Def|Gender=Fem|Number=Plur	43	conj	_	_
59	e	e	DET	_	Case=Nom|Gender=Fem|Number=Sing|PronType=Art	60	det:adj	_	_
60	devotshme	devotshëm	ADJ	_	Case=Nom|Degree=Pos|Gender=Fem|Number=Plur	58	amod	_	_
61	të	të	PART	_	_	62	case	_	_
62	njerkës	njerkë	NOUN	_	Case=Gen|Definite=Def|Gender=Fem|Number=Sing	58	nmod:poss	_	SpaceAfter=No
63	.	.	PUNCT	_	_	3	punct	_	_

~~~


