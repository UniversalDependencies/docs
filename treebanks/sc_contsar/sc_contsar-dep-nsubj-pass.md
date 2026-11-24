---
layout: base
title:  'Statistics of nsubj:pass in UD_Sardinian-ContSar'
udver: '2'
---

## Treebank Statistics: UD_Sardinian-ContSar: Relations: `nsubj:pass`

This relation is a language-specific subtype of <tt><a href="sc_contsar-dep-nsubj.html">nsubj</a></tt>.

26 nodes (0%) are attached to their parents as `nsubj:pass`.

24 instances of `nsubj:pass` (92%) are right-to-left (child precedes parent).
Average distance between parent and child is 4.19230769230769.

The following 3 pairs of parts of speech are connected with `nsubj:pass`: <tt><a href="sc_contsar-pos-VERB.html">VERB</a></tt>-<tt><a href="sc_contsar-pos-NOUN.html">NOUN</a></tt> (13; 50% instances), <tt><a href="sc_contsar-pos-VERB.html">VERB</a></tt>-<tt><a href="sc_contsar-pos-PRON.html">PRON</a></tt> (12; 46% instances), <tt><a href="sc_contsar-pos-VERB.html">VERB</a></tt>-<tt><a href="sc_contsar-pos-PROPN.html">PROPN</a></tt> (1; 4% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 2 nsubj:pass	color:blue
1	s'	su	DET	_	Definite=Def|Number=Sing|PronType=Art	2	det	_	end_char=3522|SpaceAfter=No|start_char=3520
2	iscravitùdine	iscravitùdine	NOUN	_	Gender=Fem|Number=Sing	10	nsubj:pass	_	end_char=3535|start_char=3522
3	e	e	CCONJ	_	_	5	cc	_	end_char=3537|start_char=3536
4	sa	su	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	5	det	_	end_char=3540|start_char=3538
5	trata	trata	NOUN	_	Gender=Fem|Number=Sing	2	conj	_	end_char=3546|start_char=3541
6	de	de	ADP	_	_	8	case	_	end_char=3549|start_char=3547
7	sos	su	DET	_	Definite=Def|Gender=Masc|Number=Plur|PronType=Art	8	det	_	end_char=3553|start_char=3550
8	iscraos	iscrau	NOUN	_	Gender=Masc|Number=Plur	5	nmod	_	end_char=3561|start_char=3554
9	sunt	èssere	AUX	_	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	10	aux:pass	_	end_char=3566|start_char=3562
10	preubidas	proibire	VERB	_	Gender=Fem|Number=Plur|Tense=Past|VerbForm=Part	0	root	_	end_char=3576|start_char=3567
11	in	in	ADP	_	_	14	case	_	end_char=3579|start_char=3577
12	totu	totu	DET	T	PronType=Tot	14	det	_	end_char=3584|start_char=3580
13	sas	su	DET	_	Definite=Def|Gender=Fem|Number=Plur|PronType=Art	14	det	_	end_char=3588|start_char=3585
14	formas	forma	NOUN	_	Gender=Fem|Number=Plur	10	obl	_	end_char=3595|SpaceAfter=No|start_char=3589
15	.	.	PUNCT	_	_	10	punct	_	end_char=3596|SpacesAfter=\s\s\n\n|start_char=3595

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 1 nsubj:pass	color:blue
1	Nemos	nemos	PRON	_	PronType=Ind	4	nsubj:pass	_	end_char=6779|start_char=6774
2	podet	pòdere	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	4	aux	_	end_char=6785|start_char=6780
3	esser	èssere	AUX	_	VerbForm=Inf	4	aux:pass	_	end_char=6791|start_char=6786
4	privadu	privare	VERB	_	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	0	root	_	end_char=6799|start_char=6792
5	arbitrariamente	arbitrariamente	ADV	_	_	4	advmod	_	end_char=6815|start_char=6800
6	de	de	ADP	_	_	8	case	_	end_char=6818|start_char=6816
7	sa	su	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	8	det	_	end_char=6821|start_char=6819
8	propiedade	propiedade	NOUN	_	Gender=Fem|Number=Sing	4	obl	_	end_char=6832|start_char=6822
9	sua	suo	ADJ	_	Gender=Fem|Number=Sing|Poss=Yes	8	amod	_	end_char=6836|SpaceAfter=No|start_char=6833
10	.	.	PUNCT	_	_	4	punct	_	end_char=6837|SpacesAfter=\s\s\n\n|start_char=6836

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 2 nsubj:pass	color:blue
1	s'	su	DET	_	Definite=Def|Number=Sing|PronType=Art	2	det	_	end_char=6117|SpaceAfter=No|start_char=6115
2	Angioy	Angioy	PROPN	_	_	4	nsubj:pass	_	end_char=6123|start_char=6117
3	fit	èssere	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin	4	aux:pass	_	end_char=6127|start_char=6124
4	custrìntu	custrìnghere	VERB	_	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	0	root	_	end_char=6137|start_char=6128
5	a	a	SCONJ	_	_	8	mark	_	end_char=6139|start_char=6138
6	si	si	PRON	_	Number=Sing|Person=3|PronType=Prs	8	expl	_	Clitic=Yes|end_char=6142|start_char=6140
7	nche	nche	PRON	_	Clitic=Yes|PronType=Prs	8	expl	_	Clitic=Yes|end_char=6147|start_char=6143
8	firmare	firmare	VERB	_	VerbForm=Inf	4	xcomp	_	end_char=6155|start_char=6148
9	in	in	ADP	_	_	10	case	_	end_char=6158|start_char=6156
10	Aristanis	Aristanis	PROPN	_	_	8	obl	_	end_char=6168|start_char=6159
11	in	in	ADP	_	_	13	case	_	end_char=6171|start_char=6169
12	s'	su	DET	_	Definite=Def|Number=Sing|PronType=Art	13	det	_	end_char=6174|SpaceAfter=No|start_char=6172
13	òto	oto	NUM	_	NumType=Card	8	obl	_	end_char=6177|start_char=6174
14	de	de	ADP	_	_	15	case	_	end_char=6180|start_char=6178
15	làmpadas	làmpadas	NOUN	_	Gender=Masc	13	nmod	_	end_char=6189|SpaceAfter=No|start_char=6181
16	,	,	PUNCT	_	_	8	punct	_	end_char=6190|start_char=6189
17	cando	cando	SCONJ	_	_	24	mark	_	end_char=6196|start_char=6191
18	medas	meda	PRON	_	Number=Plur|PronType=Ind	24	nsubj	_	end_char=6202|start_char=6197
19	chi	chi	PRON	_	PronType=Rel	21	nsubj	_	end_char=6206|start_char=6203
20	lu	lu	PRON	_	Case=Acc|Number=Sing|Person=3|PronType=Prs	21	obj	_	Clitic=Yes|end_char=6209|start_char=6207
21	appozabant	apogiare	VERB	_	Mood=Ind|Number=Plur|Person=3|Tense=Imp|VerbForm=Fin	18	acl:relcl	_	end_char=6220|start_char=6210
22	lu	lu	PRON	_	Case=Acc|Number=Sing|Person=3|PronType=Prs	24	obj	_	Clitic=Yes|end_char=6223|start_char=6221
23	aiant	àere	AUX	_	Mood=Ind|Number=Plur|Person=3|Tense=Imp|VerbForm=Fin	24	aux	_	end_char=6229|start_char=6224
24	lassau	lassare	VERB	_	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	8	advcl	_	end_char=6236|SpaceAfter=No|start_char=6230
25	,	,	PUNCT	_	_	24	punct	_	end_char=6237|start_char=6236
26	ca	ca	SCONJ	_	_	30	mark	_	end_char=6240|start_char=6238
27	su	su	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	28	det	_	end_char=6243|start_char=6241
28	re	rei	NOUN	_	Gender=Masc|Number=Sing	30	nsubj	_	Clitic=Yes|end_char=6246|start_char=6244
29	aiat	àere	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin	30	aux	_	end_char=6251|start_char=6247
30	retzìu	retzire	VERB	_	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	24	advcl	_	end_char=6258|start_char=6252
31	sas	su	DET	_	Definite=Def|Gender=Fem|Number=Plur|PronType=Art	33	det	_	end_char=6262|start_char=6259
32	chimbe	chimbe	NUM	_	NumType=Card	33	nummod	_	end_char=6269|start_char=6263
33	precuntas	pregunta	NOUN	_	Gender=Fem|Number=Plur	30	obj	_	end_char=6279|start_char=6270
34	de	de	ADP	_	_	36	case	_	end_char=6282|start_char=6280
35	sos	su	DET	_	Definite=Def|Gender=Masc|Number=Plur|PronType=Art	36	det	_	end_char=6286|start_char=6283
36	Istamentos	istamentu	NOUN	_	Gender=Masc|Number=Plur	33	nmod	_	end_char=6297|SpaceAfter=No|start_char=6287
37	.	.	PUNCT	_	_	4	punct	_	end_char=6298|SpacesAfter=\s\n|start_char=6297

~~~


