---
layout: base
title:  'Statistics of xcomp in UD_Maghrebi_Arabic_French-Arabizi'
udver: '2'
---

## Treebank Statistics: UD_Maghrebi_Arabic_French-Arabizi: Relations: `xcomp`

This relation is universal.

522 nodes (3%) are attached to their parents as `xcomp`.

517 instances of `xcomp` (99%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.4904214559387.

The following 6 pairs of parts of speech are connected with `xcomp`: <tt><a href="qaf_arabizi-pos-VERB.html">VERB</a></tt>-<tt><a href="qaf_arabizi-pos-VERB.html">VERB</a></tt> (513; 98% instances), <tt><a href="qaf_arabizi-pos-ADJ.html">ADJ</a></tt>-<tt><a href="qaf_arabizi-pos-VERB.html">VERB</a></tt> (4; 1% instances), <tt><a href="qaf_arabizi-pos-VERB.html">VERB</a></tt>-<tt><a href="qaf_arabizi-pos-ADJ.html">ADJ</a></tt> (2; 0% instances), <tt><a href="qaf_arabizi-pos-ADP.html">ADP</a></tt>-<tt><a href="qaf_arabizi-pos-VERB.html">VERB</a></tt> (1; 0% instances), <tt><a href="qaf_arabizi-pos-VERB.html">VERB</a></tt>-<tt><a href="qaf_arabizi-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="qaf_arabizi-pos-VERB.html">VERB</a></tt>-<tt><a href="qaf_arabizi-pos-X.html">X</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 3 xcomp	color:blue
1	on	on	PRON	PRO	_	2	nsubj	_	ComposedUDPOS=PRON|LangO=fr|ner=O
2	va	va	VERB	V	_	0	root	_	ComposedUDPOS=VERB|LangO=fr|ner=O
3	gagné	gagner	VERB	VINF	VerbForm=Inf	2	xcomp	_	ComposedUDPOS=VERB|LangO=fr|ner=O
4	inchaalah	inchaAllah	INTJ	I	_	6	discourse	_	ComposedUDPOS=INTJ|LangO=ar_dz|ner=O
5	ya	oh	INTJ	VOC	_	6	discourse	_	ComposedUDPOS=INTJ|LangO=ar_dz|ner=O|SpaceAfter=No
6	rabi	Dieu_mien	PROPN	NPP+POSS	_	7	vocative	_	ComposedUDPOS=PROPN+PRON|LangO=ar_dz|ner=B-PERderivA|Possessive=Yes|Reverse=NC_POSS
7	kon	soit	VERB	VIMP	Mood=Imp	2	parataxis	_	ComposedUDPOS=VERB|LangO=ar_dz|ner=O
8	m3ana	avec_nous	PRON	P+PRO	_	7	iobj	_	ComposedUDPOS=ADP+PRON|LangO=ar_dz|ner=O|Reverse=P_PRO_1

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 6 xcomp	color:blue
1	kan	il_être	VERB	V3ms	Gender=Masc|Number=Sing|Person=3	0	root	_	ComposedUDPOS=VERB|LangO=ar_dz|ner=O
2	motaw9a3	attendue	ADJ	ADJ	_	1	obj	_	ComposedUDPOS=ADJ|LangO=ar_dz|ner=O
3	ana	que	SCONJ	CS	_	5	mark	_	ComposedUDPOS=SCONJ|LangO=ar_dz|ner=O
4	maroc	Maroc	PROPN	NPP	_	5	nsubj	_	ComposedUDPOS=PROPN|LangO=fr|ner=B-LOC
5	radi	là-bas	ADJ	ADJ	_	1	parataxis	_	ComposedUDPOS=ADJ|LangO=ar_dz|ner=O
6	tnadam	elle_organiser	VERB	V3fs	Gender=Fem|Number=Plur|Person=3	5	xcomp	_	ComposedUDPOS=VERB|LangO=ar_dz|ner=O
7	lahkach	parce_que	CCONJ	CC	_	9	mark	_	ComposedUDPOS=CCONJ|LangO=ar_dz|ner=O
8	3anda	chez_elle	PRON	P+PRO	_	9	nmod	_	ComposedUDPOS=ADP+PRON|LangO=ar_dz|ner=O|Reverse=P_PRO_1
9	biya	structure	NOUN	NC	_	6	advcl	_	ComposedUDPOS=NOUN|LangO=ar_dz|ner=O
10	tahtiya	infra_sous	ADJ	ADJ	_	9	amod	_	ComposedUDPOS=ADJ|LangO=ar_dz|ner=O

~~~


~~~ conllu
# visual-style 31	bgColor:blue
# visual-style 31	fgColor:white
# visual-style 24	bgColor:blue
# visual-style 24	fgColor:white
# visual-style 24 31 xcomp	color:blue
1	salam	paix	INTJ	I	_	8	discourse	_	ComposedUDPOS=INTJ|LangO=ar_dz|ner=O
2	3alayka	sur_vous	PRON	P+PRO	_	1	obl	_	ComposedUDPOS=ADP+PRON|LangO=ar_dz|ner=O|Reverse=P_PRO_1
3	ya	oh	INTJ	VOC	_	4	discourse	_	ComposedUDPOS=INTJ|LangO=ar_dz|ner=O
4	akhi	frère_mien	NOUN	NC+POSS	_	1	vocative	_	ComposedUDPOS=NOUN+PRON|LangO=ar_dz|ner=O|Possessive=Yes|Reverse=NC_POSS
5	mohamed	Mohamed	PROPN	NPP	_	4	appos	_	ComposedUDPOS=PROPN|LangO=ar_dz|ner=B-PER
6	l	l'	DET	DET	_	7	det	_	ComposedUDPOS=DET|LangO=fr|ner=O|wordform=lagerie
7	agerie	Algérie	PROPN	NPP	_	8	nsubj	_	ComposedUDPOS=PROPN|LangO=fr|ner=B-LOC|wordform=lagerie
8	ci	c'est	VERB	CLS-SUJ+V	_	0	root	_	ComposedUDPOS=PRON+VERB|LangO=fr|ner=O
9	pas	pas	ADV	ADV-MOD	Polarity=Neg	8	advmod	_	ComposedUDPOS=ADV|LangO=fr|ner=O
10	pour	pour	ADP	P	AdpType=Prep	11	case	_	ComposedUDPOS=ADP|LangO=fr|ner=O
11	nous	nous	PRON	PRO	_	8	obl	_	ComposedUDPOS=PRON|LangO=fr|ner=O
12	dommage	dommage	INTJ	I	_	8	discourse	_	ComposedUDPOS=INTJ|LangO=fr|ner=O
13	allah	Dieu	PROPN	NPP	_	14	nsubj	_	ComposedUDPOS=PROPN|LangO=ar_dz|ner=B-PERderivA
14	yahdi	guide	VERB	V	_	8	parataxis	_	ComposedUDPOS=VERB|LangO=ar_dz|ner=O
15	l	les	DET	DET	_	16	det	_	ComposedUDPOS=DET|LangO=ar_dz|ner=O|wordform=lkoub
16	koub	coeurs	NOUN	NC	_	14	obj	_	ComposedUDPOS=NOUN|LangO=ar_dz|ner=O|wordform=lkoub
17	mas3ouline	responsables	ADJ	ADJ	_	16	amod	_	ComposedUDPOS=ADJ|LangO=ar_dz|ner=O
18	ou	et	CCONJ	CC	_	19	cc	_	ComposedUDPOS=CCONJ|LangO=ar_dz|ner=O
19	yarham	avoir_pitié	VERB	V3ms	Gender=Masc|Number=Sing|Person=3	14	conj	_	ComposedUDPOS=VERB|LangO=ar_dz|ner=O
20	chouhada	martyres	NOUN	NC	_	19	obj	_	ComposedUDPOS=NOUN|LangO=ar_dz|ner=O
21	li	qui	PRON	PROREL	PronType=Rel	22	nsubj	_	ComposedUDPOS=PRON|LangO=ar_dz|ner=O
22	dahaw	sacrifier	VERB	V	_	20	acl:relcl	_	ComposedUDPOS=VERB|LangO=ar_dz|ner=O
23	bache	pour	ADP	P	AdpType=Prep	24	mark	_	ComposedUDPOS=ADP|LangO=ar_dz|ner=O
24	i3ichou	ils_vivent	VERB	V3mp	Gender=Masc|Number=Plur|Person=3	22	ccomp	_	ComposedUDPOS=VERB|LangO=ar_dz|ner=O
25	ana	moi	PRON	CLS-SUJ	_	24	nsubj	_	ComposedUDPOS=PRON|LangO=ar_dz|ner=O
26	wa	et	CCONJ	CC	_	27	cc	_	ComposedUDPOS=CCONJ|LangO=ar_dz|ner=O|wordform=wata
27	ta	toi	PRON	CLS-SUJ	_	25	conj	_	ComposedUDPOS=PRON|LangO=ar_dz|ner=O|wordform=wata
28	ou	et	CCONJ	CC	_	30	cc	_	ComposedUDPOS=CCONJ|LangO=ar_dz|ner=O
29	koule	tous	DET	DET	_	30	det	_	ComposedUDPOS=DET|LangO=ar_msa|ner=O
30	jazairiyine	algériens	NOUN	NC	_	27	conj	_	ComposedUDPOS=NOUN|LangO=ar_dz|ner=B-PERderiv
31	hourine	libres	ADJ	ADJ	_	24	xcomp	_	ComposedUDPOS=ADJ|LangO=ar_dz|ner=O
32	b	en	ADP	P	AdpType=Prep	33	case	_	ComposedUDPOS=ADP|LangO=ar_dz|ner=O|wordform=bhakhoum
33	bhakhoum	droits_leur	NOUN	NC+POSS	_	31	nmod	_	ComposedUDPOS=NOUN+PRON|LangO=ar_dz|ner=O|Possessive=Yes|Reverse=NC_POSS|WordForm_2=hakhoum
34	ta3	de	ADP	P	AdpType=Prep	35	case	_	ComposedUDPOS=ADP|LangO=ar_dz|ner=O
35	pitrole	pétrole	NOUN	NC	_	33	nmod	_	ComposedUDPOS=NOUN|LangO=ar_dz|ner=O
36	wa	et	CCONJ	CC	_	38	cc	_	ComposedUDPOS=CCONJ|LangO=ar_dz|ner=O
37	l	le	DET	DET	_	38	det	_	ComposedUDPOS=DET|LangO=ar_dz|ner=O
38	gaz	gaz	NOUN	NC	_	35	conj	_	ComposedUDPOS=NOUN|LangO=ar_dz|ner=O
39	kima	comme	ADP	P	AdpType=Prep	40	case	_	ComposedUDPOS=ADP|LangO=ar_dz|ner=O
40	s3oudiyine	saoudiens	NOUN	NC	_	31	nmod	_	ComposedUDPOS=NOUN|LangO=ar_dz|ner=B-PERderiv
41	hazbouna	suffit_nous	VERB	V+CLO	_	8	parataxis	_	ComposedUDPOS=VERB+PRON|LangO=ar_dz|ner=O|Reverse=VERB_CLO_1
42	allah	Dieu	PROPN	NPP	_	41	nsubj	_	ComposedUDPOS=PROPN|LangO=ar_dz|ner=B-PERderivA
43	wa	et	CCONJ	CC	_	45	cc	_	ComposedUDPOS=CCONJ|LangO=ar_dz|ner=O|SpaceAfter=No
44	ni3mal	meilleur_le	NOUN	NC+DET	_	45	nmod	_	ComposedUDPOS=NOUN+DET|LangO=ar_dz|ner=O
45	wakil	mandataire	ADJ	ADJ	_	41	conj	_	ComposedUDPOS=ADJ|DeepDep=coord|LangO=ar_msa|ner=O

~~~


