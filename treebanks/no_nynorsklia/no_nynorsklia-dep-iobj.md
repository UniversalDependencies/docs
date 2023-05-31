---
layout: base
title:  'Statistics of iobj in UD_Norwegian-NynorskLIA'
udver: '2'
---

## Treebank Statistics: UD_Norwegian-NynorskLIA: Relations: `iobj`

This relation is universal.

74 nodes (0%) are attached to their parents as `iobj`.

38 instances of `iobj` (51%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.05405405405405.

The following 3 pairs of parts of speech are connected with `iobj`: <tt><a href="no_nynorsklia-pos-VERB.html">VERB</a></tt>-<tt><a href="no_nynorsklia-pos-PRON.html">PRON</a></tt> (72; 97% instances), <tt><a href="no_nynorsklia-pos-ADJ.html">ADJ</a></tt>-<tt><a href="no_nynorsklia-pos-PRON.html">PRON</a></tt> (1; 1% instances), <tt><a href="no_nynorsklia-pos-VERB.html">VERB</a></tt>-<tt><a href="no_nynorsklia-pos-PROPN.html">PROPN</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 8 iobj	color:blue
1	e	e	X	_	_	2	discourse:filler	_	_
2	ja	ja	INTJ	_	_	4	discourse	_	_
3	da	da	ADV	_	_	4	advmod	_	_
4	hadde	ha	VERB	_	Mood=Ind|Tense=Past|VerbForm=Fin	0	root	_	_
5	dei	dei	PRON	_	Animacy=Hum|Case=Nom|Number=Plur|Person=3|PronType=Prs	4	nsubj	_	_
6	håvar	håv	NOUN	_	Definite=Ind|Gender=Masc|Number=Plur	4	obj	_	_
7	#	#	PUNCT	_	_	8	punct	_	_
8	som	som	PRON	_	PronType=Rel	11	iobj	_	_
9	vi	vi	PRON	_	Animacy=Hum|Case=Nom|Number=Plur|Person=1|PronType=Prs	11	nsubj	_	_
10	#	#	PUNCT	_	_	9	punct	_	_
11	gjorde	gjere	VERB	_	Mood=Ind|Tense=Past|VerbForm=Fin	6	acl:relcl	_	_
12	først	først	ADV	_	_	11	advmod	_	_
13	eit	ein	DET	_	Gender=Neut|Number=Sing|PronType=Art	14	det	_	_
14	orkast	_	NOUN	_	_	11	obj	_	_
15	.	$.	PUNCT	_	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 18	bgColor:blue
# visual-style 18	fgColor:white
# visual-style 18 14 iobj	color:blue
1	det	det	PRON	_	Gender=Neut|Number=Sing|Person=3|PronType=Prs	5	expl	_	_
2	var	vere	AUX	_	Mood=Ind|Tense=Past|VerbForm=Fin	5	cop	_	_
3	akkurat	akkurat	ADV	_	_	5	advmod	_	_
4	det	det	DET	_	Gender=Neut|Number=Sing|PronType=Dem	5	det	_	_
5	same	same	DET	_	Definite=Def|PronType=Dem	0	root	_	_
6	som	som	PRON	_	PronType=Rel	18	obj	_	_
7	at	at	SCONJ	_	_	18	mark	_	_
8	du	du	PRON	_	Animacy=Hum|Case=Nom|Number=Sing|Person=2|PronType=Prs	10	reparandum	_	_
9	#	#	PUNCT	_	_	8	punct	_	_
10	du	du	PRON	_	Animacy=Hum|Case=Nom|Number=Sing|Person=2|PronType=Prs	18	nsubj	_	_
11	ville	vilje	AUX	_	Mood=Ind|Tense=Past|VerbForm=Fin	18	aux	_	_
12	#	#	PUNCT	_	_	11	punct	_	_
13	vere	vere	AUX	_	VerbForm=Inf	18	cop	_	_
14	som	som	PRON	_	PronType=Rel	18	iobj	_	_
15	litt	litt	ADJ	_	Definite=Ind|Degree=Pos|Gender=Neut|Number=Sing	18	advmod	_	_
16	e	e	X	_	_	18	discourse:filler	_	_
17	#	#	PUNCT	_	_	16	punct	_	_
18	spydig	spydig	ADJ	_	Definite=Ind|Degree=Pos|Gender=Neut|Number=Sing	5	advcl	_	_
19	ja	ja	INTJ	_	_	5	discourse	_	_
20	.	$.	PUNCT	_	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 36	bgColor:blue
# visual-style 36	fgColor:white
# visual-style 34	bgColor:blue
# visual-style 34	fgColor:white
# visual-style 34 36 iobj	color:blue
1	men	men	CCONJ	_	_	7	cc	_	_
2	e	e	X	_	_	7	discourse:filler	_	_
3	i	i	ADP	_	_	5	case	_	_
4	alle	all	DET	_	Number=Plur|PronType=Tot	5	det	_	_
5	fall	fall	NOUN	_	Definite=Ind|Gender=Neut|Number=Plur	6	nmod	_	_
6	så	så	ADV	_	_	7	advmod	_	_
7	veit	vite	VERB	_	Mood=Ind|Tense=Pres|VerbForm=Fin	0	root	_	_
8	eg	eg	PRON	_	Animacy=Hum|Case=Nom|Number=Sing|Person=1|PronType=Prs	7	nsubj	_	_
9	mange	mange	ADJ	_	Degree=Pos|Number=Plur	7	obj	_	_
10	som	som	PRON	_	PronType=Rel	12	nsubj	_	_
11	har	ha	AUX	_	Mood=Ind|Tense=Pres|VerbForm=Fin	12	aux	_	_
12	sett	sette	VERB	_	VerbForm=Part	9	acl:relcl	_	_
13	pris	pris	NOUN	_	Definite=Ind|Gender=Masc|Number=Sing	12	obj	_	_
14	på	på	ADP	_	_	15	case	_	_
15	køyringa	køyring	NOUN	_	Definite=Def|Gender=Fem|Number=Sing	13	nmod	_	_
16	hans	hans	PRON	_	Gender=Fem|Number=Sing|Poss=Yes|PronType=Prs	17	nmod	_	_
17	eidsberg_uio_0301	eidsberg_uio_0301	PROPN	_	_	12	obj	_	_
18	i	i	ADP	_	_	21	case	_	_
19	alle	all	DET	_	Number=Plur|PronType=Tot	21	det	_	_
20	desse	desse	DET	_	Number=Plur|PronType=Dem	21	det	_	_
21	åra	år	NOUN	_	Definite=Def|Gender=Neut|Number=Plur	12	obl	_	_
22	og	og	CCONJ	_	_	23	cc	_	_
23	ein	ein	PRON	_	Animacy=Hum|Case=Nom|Number=Sing|PronType=Art,Prs	12	conj	_	_
24	av	av	ADP	_	_	25	case	_	_
25	dei	dei	PRON	_	Animacy=Hum|Case=Nom|Number=Plur|Person=3|PronType=Prs	23	nmod	_	_
26	det	det	PRON	_	Gender=Neut|Number=Sing|Person=3|PronType=Prs	27	expl	_	_
27	er	vere	VERB	_	Mood=Ind|Tense=Pres|VerbForm=Fin	23	xcomp	_	_
28	#	#	PUNCT	_	_	29	punct	_	_
29	kongen	kong	NOUN	_	Definite=Def|Gender=Masc|Number=Sing	27	nsubj	_	_
30	sjølv	sjølv	ADV	_	_	29	advmod	_	_
31	for	for	CCONJ	_	_	34	cc	_	_
32	han	han	PRON	_	Case=Nom|Gender=Masc|Number=Sing|Person=3|PronType=Prs	34	nsubj	_	_
33	har	ha	AUX	_	Mood=Ind|Tense=Pres|VerbForm=Fin	34	aux	_	_
34	gitt	gi	VERB	_	VerbForm=Part	27	conj	_	_
35	han	han	PRON	_	Case=Acc|Gender=Masc|Number=Sing|Person=3|PronType=Prs	36	det	_	_
36	eidsberg_uio_0301	eidsberg_uio_0301	PROPN	_	_	34	iobj	_	_
37	fortenestemedaljen	fortenestemedalje	NOUN	_	Definite=Def|Gender=Masc|Number=Sing	34	obj	_	_
38	#	#	PUNCT	_	_	39	punct	_	_
39	eg	eg	PRON	_	Animacy=Hum|Case=Nom|Number=Sing|Person=1|PronType=Prs	40	nsubj	_	_
40	ser	sjå	VERB	_	Mood=Ind|Tense=Pres|VerbForm=Fin	7	conj	_	_
41	diplomet	diplom	NOUN	_	Definite=Def|Gender=Neut|Number=Sing	40	obj	_	_
42	på	på	ADP	_	_	43	case	_	_
43	veggen	vegg	NOUN	_	Definite=Def|Gender=Masc|Number=Sing	41	nmod	_	_
44	#	#	PUNCT	_	_	45	punct	_	_
45	og	og	CCONJ	_	_	47	cc	_	_
46	det	det	PRON	_	Gender=Neut|Number=Sing|Person=3|PronType=Prs	53	nsubj	_	_
47	trur	tru	VERB	_	Mood=Ind|Tense=Pres|VerbForm=Fin	40	conj	_	_
48	eg	eg	PRON	_	Animacy=Hum|Case=Nom|Number=Sing|Person=1|PronType=Prs	47	nsubj	_	_
49	nok	nok	ADV	_	_	47	advmod	_	_
50	heilt	heil	ADJ	_	Definite=Ind|Degree=Pos|Gender=Neut|Number=Sing	51	advmod	_	_
51	sikkert	sikker	ADJ	_	Definite=Ind|Degree=Pos|Gender=Neut|Number=Sing	47	advmod	_	_
52	var	vere	AUX	_	Mood=Ind|Tense=Past|VerbForm=Fin	53	cop	_	_
53	fortent	fortene	ADJ	_	Definite=Ind|Gender=Neut|Number=Sing	47	ccomp	_	_
54	#	#	PUNCT	_	_	57	punct	_	_
55	har	ha	AUX	_	Mood=Ind|Tense=Pres|VerbForm=Fin	57	aux	_	_
56	du	du	PRON	_	Animacy=Hum|Case=Nom|Number=Sing|Person=2|PronType=Prs	57	nsubj	_	_
57	vore	vere	VERB	_	VerbForm=Part	47	conj	_	_
58	inne	inne	ADP	_	_	57	compound:prt	_	_
59	hos	hos	ADP	_	_	60	case	_	_
60	kongen	kong	NOUN	_	Definite=Def|Gender=Masc|Number=Sing	57	obl	_	_
61	og	og	CCONJ	_	_	62	cc	_	_
62	takka	takke	VERB	_	VerbForm=Part	57	conj	_	_
63	for	for	ADP	_	_	64	case	_	_
64	den	den	PRON	_	Case=Acc|Number=Sing|Person=3|PronType=Prs	62	obl	_	_
65	?	$?	PUNCT	_	_	7	punct	_	_

~~~


