---
layout: base
title:  'Statistics of acl in UD_Maghrebi_Arabic_French-Arabizi'
udver: '2'
---

## Treebank Statistics: UD_Maghrebi_Arabic_French-Arabizi: Relations: `acl`

This relation is universal.
There are 1 language-specific subtypes of `acl`: <tt><a href="qaf_arabizi-dep-acl-relcl.html">acl:relcl</a></tt>.

5 nodes (0%) are attached to their parents as `acl`.

5 instances of `acl` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.2.

The following 4 pairs of parts of speech are connected with `acl`: <tt><a href="qaf_arabizi-pos-PRON.html">PRON</a></tt>-<tt><a href="qaf_arabizi-pos-VERB.html">VERB</a></tt> (2; 40% instances), <tt><a href="qaf_arabizi-pos-NOUN.html">NOUN</a></tt>-<tt><a href="qaf_arabizi-pos-ADJ.html">ADJ</a></tt> (1; 20% instances), <tt><a href="qaf_arabizi-pos-NUM.html">NUM</a></tt>-<tt><a href="qaf_arabizi-pos-VERB.html">VERB</a></tt> (1; 20% instances), <tt><a href="qaf_arabizi-pos-PROPN.html">PROPN</a></tt>-<tt><a href="qaf_arabizi-pos-VERB.html">VERB</a></tt> (1; 20% instances).


~~~ conllu
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 14 acl	color:blue
1	krahna	nous_marre	VERB	V1mp	Gender=Masc|Number=Plur|Person=1	0	root	_	ComposedUDPOS=VERB|lango=ar_dz|ner=O
2	ou	et	CCONJ	CC	_	3	cc	_	ComposedUDPOS=CCONJ|lango=ar_dz|ner=O|SpaceAfter=No
3	rana	nous_sommes	VERB	V	_	1	conj	_	ComposedUDPOS=VERB|DeepDep=coord|lango=ar_dz|ner=O
4	m3awline	décidés	ADJ	ADJ	_	3	obj	_	ComposedUDPOS=ADJ|lango=ar_dz|ner=O
5	on	on	PRON	CLS-SUJ	_	7	nsubj	_	ComposedUDPOS=PRON|lango=fr|ner=O
6	vous	vous	PRON	CLO-OBJ	_	7	obj	_	ComposedUDPOS=PRON|lango=fr|ner=O
7	baisserai	baiserais	VERB	V1ms	Gender=Masc|Number=Sing|Person=1	1	parataxis	_	ComposedUDPOS=VERB|lango=fr|ner=O
8	jusk	jusqu'	ADP	P	_	10	case	_	ComposedUDPOS=ADP|lango=fr|ner=O
9	au	à	ADP	P	_	10	case	_	ComposedUDPOS=ADP|lango=fr|ner=O
10	s	ce	PRON	CLS-SUJ	_	7	obl	_	ComposedUDPOS=PRON|lango=fr|ner=O
11	ke	que	SCONJ	CS	_	14	mark	_	ComposedUDPOS=SCONJ|lango=fr|ner=O
12	vou	vous	PRON	CLS-SUJ	_	14	nsubj	_	ComposedUDPOS=PRON|lango=fr|ner=O
13	nou	nous	PRON	CLO-OBJ	_	14	obj	_	ComposedUDPOS=PRON|lango=fr|ner=O
14	aimé	aimiez	VERB	V	_	10	acl	_	ComposedUDPOS=VERB|lango=fr|ner=O|SpaceAfter=No
15	vive	vivre	VERB	V	Mood=Sub	1	parataxis	_	ComposedUDPOS=VERB|lango=fr|ner=O
16	el	les	DET	DET	_	17	det	_	ComposedUDPOS=DET|lango=ar_dz|ner=O
17	heda	menaces	NOUN	NC	_	15	nsubj	_	ComposedUDPOS=NOUN|lango=ar_dz|ner=O
18	khir	mieux	ADJ	ADJ	_	1	parataxis	_	ComposedUDPOS=ADJ|lango=ar_dz|ner=O
19	man	que	SCONJ	CS	_	20	mark	_	ComposedUDPOS=SCONJ|lango=ar_dz|ner=O
20	nweliw	nous_devenons	VERB	V	_	18	advcl	_	ComposedUDPOS=VERB|lango=ar_dz|ner=O
21	des	des	DET	DET	_	22	det	_	ComposedUDPOS=DET|lango=fr|ner=O
22	kamikaz	kamikaz	NOUN	NC	_	20	obj	_	ComposedUDPOS=NOUN|lango=fr|ner=O

~~~


~~~ conllu
# visual-style 22	bgColor:blue
# visual-style 22	fgColor:white
# visual-style 20	bgColor:blue
# visual-style 20	fgColor:white
# visual-style 20 22 acl	color:blue
1	tu	tu	PRON	CLS-SUJ	_	2	nsubj	_	ComposedUDPOS=PRON|LangO=fr|ner=O
2	é	es	VERB	V	_	0	root	_	ComposedUDPOS=VERB|LangO=fr|ner=O
3	vraiment	vraiment	ADV	ADV	_	4	advmod	_	ComposedUDPOS=ADV|LangO=fr|ner=O
4	con	con	ADJ	ADJ	_	2	obj	_	ComposedUDPOS=ADJ|LangO=fr|ner=O
5	mon	mon	DET	DET	_	6	det	_	ComposedUDPOS=DET|LangO=fr|ner=O
6	frére	frère	NOUN	NC	_	4	nmod	_	ComposedUDPOS=NOUN|LangO=fr|ner=O|SpaceAfter=No
7	essade	Es-Sad	PROPN	NPP	_	6	nmod	_	ComposedUDPOS=PROPN|LangO=fr|ner=B-ORG
8	el	le	DET	DET	_	9	det	_	ComposedUDPOS=DET|LangO=es|ner=O
9	quatari	quatari	ADJ	ADJ	_	7	nmod	_	ComposedUDPOS=ADJ|LangO=fr|ner=O
10	ana	moi	PRON	CLS-SUJ	_	11	nsubj	_	ComposedUDPOS=PRON|LangO=ar_dz|ner=O
11	kan	j'étais	VERB	V	_	2	parataxis	_	ComposedUDPOS=VERB|LangO=ar_dz|ner=O
12	y3aytouli	ils_appellent_moi	VERB	V3mp+CLO	Gender=Masc|Number=Plur|Person=3	11	xcomp	_	ComposedUDPOS=VERB+PRON|LangO=ar_dz|ner=O
13	manel3ebche	je_joue_pas	VERB	PART-NEG+V	Polarity=Neg	12	xcomp	_	ComposedUDPOS=PART+VERB|LangO=ar_dz|ner=O
14	fih	dans	ADP	P	AdpType=Prep	15	case	_	ComposedUDPOS=ADP|LangO=ar_dz|ner=O
15	blade	pays	NOUN	NC	_	13	obl	_	ComposedUDPOS=NOUN|LangO=ar_dz|ner=O
16	miki	Mickey	PROPN	NPP	_	15	nmod	_	ComposedUDPOS=PROPN|LangO=ar_dz|ner=O
17	blad	pays	NOUN	NC	_	2	parataxis	_	ComposedUDPOS=NOUN|LangO=ar_dz|ner=O
18	ta3	de	ADP	P	AdpType=Prep	19	case	_	ComposedUDPOS=ADP|LangO=ar_dz|ner=O
19	tiki	tickets	NOUN	NC	_	17	nmod	_	ComposedUDPOS=NOUN|LangO=ar_dz|ner=O
20	blad	pays	NOUN	NC	_	2	parataxis	_	ComposedUDPOS=NOUN|LangO=ar_dz|ner=O
21	kolech	tout	PRON	PRO	_	22	nsubj	_	ComposedUDPOS=PRON|LangO=ar_dz|ner=O
22	fau	FAUX	ADJ	ADJ	_	20	acl	_	ComposedUDPOS=ADJ|LangO=ar_dz|ner=O
23	kolech	tout	PRON	PRO	_	25	nsubj	_	ComposedUDPOS=PRON|LangO=ar_dz|ner=O
24	fiha	à_elle	PRON	P+PRO	_	25	obl	_	ComposedUDPOS=ADP+PRON|LangO=ar_dz|ner=O|Reverse=P_PRO_1
25	mfabriki	fabriquer	VERB	V	_	2	parataxis	_	ComposedUDPOS=VERB|LangO=ar_dz|ner=O|SpaceAfter=No
26	allah	Dieu	PROPN	NPP	_	27	nsubj	_	ComposedUDPOS=PROPN|LangO=ar_dz|ner=B-PERderivA
27	yehdina	nous_guide	VERB	V3ms+CLO	Gender=Masc|Number=Sing|Person=3	2	parataxis	_	ComposedUDPOS=VERB+PRON|LangO=ar_dz|ner=O
28	adjma3ine	tous	ADJ	ADJ	_	27	advmod	_	ComposedUDPOS=ADJ|LangO=ar_dz|ner=O

~~~


~~~ conllu
# visual-style 15	bgColor:blue
# visual-style 15	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 15 acl	color:blue
1	vive	vivre	VERB	V	Mood=Imp|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	ComposedUDPOS=VERB|LangO=fr|ner=O
2	l'	l'	DET	DET	_	3	det	_	ComposedUDPOS=DET|LangO=fr|ner=O
3	Algerie	Algérie	PROPN	NPP	_	1	nsubj	_	ComposedUDPOS=PROPN|LangO=fr|ner=B-LOC
4	ou	et	CCONJ	CC	_	5	cc	_	ComposedUDPOS=CCONJ|LangO=ar_dz|ner=O
5	m3ak	avec_toi	PRON	P+PRO	_	1	parataxis	_	ComposedUDPOS=ADP+PRON|LangO=ar_dz|ner=O|Reverse=P_PRO_1
6	ya	oh	INTJ	VOC	_	8	discourse	_	ComposedUDPOS=INTJ|LangO=ar_dz|ner=O
7	el	la	DET	DET	_	8	det	_	ComposedUDPOS=DET|LangO=ar_dz|ner=O
8	khadra	verte	PROPN	NPP	_	5	vocative	_	ComposedUDPOS=PROPN|LangO=ar_dz|ner=B-ORG
9	nchallah	inchaAllah	INTJ	I	_	10	discourse	_	ComposedUDPOS=INTJ|LangO=ar_dz|ner=O
10	4	4	NUM	NUM	_	1	parataxis	_	ComposedUDPOS=NUM|LangO=ar_dz|ner=O|SpaceAfter=No
11	-	-	PUNCT	PONCT	_	10	punct	_	ComposedUDPOS=PUNCT|LangO=ar_dz|ner=O|SpaceAfter=No
12	0	0	NUM	NUM	_	10	nummod	_	ComposedUDPOS=NUM|LangO=ar_dz|ner=O
13	ki	comme	SCONJ	CS	Typo=Yes	15	mark	_	ComposedUDPOS=SCONJ|LangO=ar_dz|ner=O
14	ma	_	X	_	_	13	goeswith	_	ComposedUDPOS=X|LangO=ar_dz|ner=O
15	gal	dit	VERB	V3ms	Gender=Masc|Number=Sing|Person=3	10	acl	_	ComposedUDPOS=VERB|LangO=ar_dz|ner=O
16	khuoya	mon_frère	NOUN	NC+POSS	_	15	nsubj	_	ComposedUDPOS=NOUN+PRON|LangO=ar_dz|ner=O|Possessive=Yes|Reverse=NC_POSS_lemma_before

~~~


