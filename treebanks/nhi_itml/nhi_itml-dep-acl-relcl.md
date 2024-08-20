---
layout: base
title:  'Statistics of acl:relcl in UD_Western_Sierra_Puebla_Nahuatl-ITML'
udver: '2'
---

## Treebank Statistics: UD_Western_Sierra_Puebla_Nahuatl-ITML: Relations: `acl:relcl`

This relation is a language-specific subtype of <tt><a href="nhi_itml-dep-acl.html">acl</a></tt>.

16 nodes (0%) are attached to their parents as `acl:relcl`.

16 instances of `acl:relcl` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.

The following 3 pairs of parts of speech are connected with `acl:relcl`: <tt><a href="nhi_itml-pos-PRON.html">PRON</a></tt>-<tt><a href="nhi_itml-pos-VERB.html">VERB</a></tt> (13; 81% instances), <tt><a href="nhi_itml-pos-PRON.html">PRON</a></tt>-<tt><a href="nhi_itml-pos-NOUN.html">NOUN</a></tt> (2; 13% instances), <tt><a href="nhi_itml-pos-SCONJ.html">SCONJ</a></tt>-<tt><a href="nhi_itml-pos-VERB.html">VERB</a></tt> (1; 6% instances).


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 11 acl:relcl	color:blue
1	Ohkon	o	ADV	_	_	2	advcl	2:advcl	NormalizedForm=ohkon|NormalizedLemma=o
2	ahsis	ahsi	VERB	_	Mood=Ind|Number[subj]=Sing|Person[subj]=3|Subcat=Intr|Tense=Fut|VerbForm=Fin	0	root	0:root	NormalizedForm=ahsis|NormalizedLemma=ahsi
3	se	se	DET	_	_	4	det	4:det	NormalizedForm=se|NormalizedLemma=se
4	ocho	o	NUM	_	Foreign=Yes	2	nsubj	2:nsubj	NormalizedForm=ocho|NormalizedLemma=o
5	y	y	CCONJ	_	Foreign=Yes	6	cc	6:cc	NormalizedForm=y|NormalizedLemma=y
6	media	medio	NOUN	_	Foreign=Yes|Gender=Masc	4	conj	4:conj	SpaceAfter=No|NormalizedForm=media|NormalizedLemma=medio
7	,	,	PUNCT	_	_	8	punct	8:punct	NormalizedForm=,|NormalizedLemma=,
8	ehko	ehko	VERB	_	Mood=Ind|Number[subj]=Plur|Person[subj]=3|Subcat=Intr|Tense=Pres|VerbForm=Fin	2	parataxis	2:parataxis	NormalizedForm=ehko|NormalizedLemma=ehko
9	n	in	DET	_	_	10	det	10:det	NormalizedForm=n|NormalizedLemma=n
10	tlen	tlenoh	PRON	_	_	8	nsubj	8:nsubj	NormalizedForm=tlen|NormalizedLemma=tlenoh
11	kirepartiroa	repartiroa	VERB	_	Mood=Ind|Number[obj]=Sing|Number[subj]=Sing|Person[obj]=3|Person[subj]=3|Subcat=Tran|Tense=Pres|VerbForm=Fin	10	acl:relcl	10:acl:relcl	NormalizedForm=kirepartiroa|NormalizedLemma=repartiroa
12	tlaxkal	tlaxkal	NOUN	_	Number=Sing	11	obj	11:obj	SpaceAfter=No|NormalizedForm=tlaxkal|NormalizedLemma=tlaxkal
13	.	.	PUNCT	_	_	8	punct	8:punct	NormalizedForm=.|NormalizedLemma=.

~~~


~~~ conllu
# visual-style 23	bgColor:blue
# visual-style 23	fgColor:white
# visual-style 20	bgColor:blue
# visual-style 20	fgColor:white
# visual-style 20 23 acl:relcl	color:blue
1	O	o	AUX	_	_	2	aux	2:aux	Orig=Ō|Gloss=PST|Morf=o|NormalizedForm=o|NormalizedLemma=o
2	kichiwkeh	chiwa	VERB	_	Aspect=Perf|Mood=Ind|Number[obj]=Sing|Number[subj]=Plur|Person[obj]=3|Person[subj]=3|Subcat=Tran|Tense=Past|VerbForm=Fin	0	root	0:root	Orig=kichı̄wkeh|Gloss=3S-3SG.O-make-PRF.PL.S|NormalizedForm=kichiwkeh|NormalizedLemma=chiwa
3	nochi	nochi	PRON	_	_	5	det	5:det	Orig=nochi|Gloss=all|NormalizedForm=nochi|NormalizedLemma=nochi
4	n	in	DET	_	_	5	det	5:det	Orig=n|Gloss=DEF|NormalizedForm=n|NormalizedLemma=in
5	tlen	tlenoh	PRON	_	_	2	obj	2:obj	Orig=tlēn|Gloss=REL~SUB|NormalizedForm=tlen|NormalizedLemma=tlenoh
6	moniki	moniki	VERB	_	Mood=Ind|Number[subj]=Sing|Person[subj]=3|Reflex=Yes|Subcat=Tran|VerbForm=Fin	5	acl:relcl	5:acl:relcl	Gloss=3S-REFL-want|Orig=moniki,|SpaceAfter=No|NormalizedForm=moniki|NormalizedLemma=moniki
7	,	,	PUNCT	_	_	9	punct	9:punct	Orig=,|Gloss=,|Morf=,|NormalizedForm=,|NormalizedLemma=,
8	n	in	DET	_	_	9	det	9:det	Orig=n|Gloss=DEF|NormalizedForm=n|NormalizedLemma=in
9	tlen	tlenoh	PRON	_	_	5	appos	5:appos	Orig=tlēn|Gloss=REL~SUB|NormalizedForm=tlen|NormalizedLemma=tlenoh
10	ya	ya	ADV	_	_	12	advmod	12:advmod	Orig=yōkitlahtlaneh|Gloss=already=PST-3S-3SG.O-require.APPL.PRF|NormalizedForm=ya|NormalizedLemma=ya
11	o	o	AUX	_	_	12	aux	12:aux	NormalizedForm=o|NormalizedLemma=o
12	kitlahtlaneh	tlahtlania	VERB	_	Aspect=Perf|Mood=Ind|Number[obj]=Sing|Number[subj]=Sing|Person[obj]=3|Person[subj]=3|Subcat=Tran|Tense=Past|VerbForm=Fin	9	acl:relcl	9:acl:relcl	NormalizedForm=kitlahtlaneh|NormalizedLemma=tlahtlania
13	n	in	DET	_	_	14	det	14:det	Orig=n|Gloss=DEF|NormalizedForm=n|NormalizedLemma=in
14	ok	ok	ADV	_	_	12	nsubj	12:nsubj	Orig=ok|Gloss=still|NormalizedForm=ok|NormalizedLemma=ok
15	se	se	DET	_	_	14	fixed	14:fixed	Orig=sē|Gloss=one|NormalizedForm=se|NormalizedLemma=se
16	para	para	SCONJ	_	_	18	mark	18:mark	Orig=parah|Gloss=for|NormalizedForm=para|NormalizedLemma=para
17	amo	amo	ADV	_	Polarity=Neg	18	advmod	18:advmod	Orig=āmo|Gloss=not|NormalizedForm=amo|NormalizedLemma=amo
18	monextis	monextia	VERB	_	Mood=Ind|Number[subj]=Sing|Person[subj]=3|Reflex=Yes|Subcat=Tran|Tense=Fut|VerbForm=Fin	2	advcl	2:advcl	Orig=monēxtı̄s|Gloss=3S-REFL-see-CAUS-FUT|NormalizedForm=monextis|NormalizedLemma=monextia
19	n	in	DET	_	_	20	det	20:det	Orig=n|Gloss=DEF|NormalizedForm=n|NormalizedLemma=in
20	tlen	tlenoh	PRON	_	_	18	nsubj	18:nsubj	Orig=tlēn|Gloss=REL~SUB|NormalizedForm=tlen|NormalizedLemma=tlenoh
21	amo	amo	ADV	_	Polarity=Neg	23	advmod	23:advmod	Orig=āmo|Gloss=not|NormalizedForm=amo|NormalizedLemma=amo
22	kwale	kwali	ADJ	_	_	23	amod	23:amod	Orig=kwale|Gloss=good|NormalizedForm=kwale|NormalizedLemma=kwali
23	tlakatl	tlakatl	NOUN	_	Case=Abs|Number=Sing	20	acl:relcl	20:acl:relcl	Gloss=man|Orig=tlākatl|SpaceAfter=No|NormalizedForm=tlakatl|NormalizedLemma=tlakatl
24	.	.	PUNCT	_	_	2	punct	2:punct	Orig=.|Gloss=.|NormalizedForm=.|NormalizedLemma=.

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 4 acl:relcl	color:blue
1	Tlen	tlen	SCONJ	_	_	0	root	0:root	Orig=Tlen|NormalizedForm=tlen|NormalizedLemma=tlen
2	nej	nejuatl	PRON	_	Number=Sing|Person=1|PronType=Prs	4	nsubj	4:nsubj	Orig=nej|NormalizedForm=neh|NormalizedLemma=nehwatl
3	o	o	AUX	_	_	4	aux	4:aux	NormalizedForm=o|NormalizedLemma=o
4	ntlasojtlaskia	tlasojtla	VERB	_	Mood=Cnd|Number[obj]=Sing|Number[subj]=Sing|Person[obj]=3|Person[subj]=1|Subcat=Tran|VerbForm=Fin	1	acl:relcl	1:acl:relcl	NormalizedForm=ntlasohtlaskia|NormalizedLemma=tlasohtla
5	ma	ma	AUX	_	_	6	aux	6:aux	NormalizedForm=ma|NormalizedLemma=ma
6	i	katki	VERB	_	Mood=Opt|Number[subj]=Sing|Person[subj]=3|Subcat=Intr|VerbForm=Fin	4	ccomp	4:ccomp	NormalizedForm=i|NormalizedLemma=katki
7	itich	tich	NOUN	_	NounType=Relat|Number=Sing|Number[psor]=Sing|Number[subj]=Plur|Person[psor]=3|Person[subj]=1	6	obl	6:obl	Orig=itich|NormalizedForm=itich|NormalizedLemma=tich
8	nin	nin	DET	_	_	9	det	9:det	Orig=nin|NormalizedForm=nin|NormalizedLemma=nin
9	altipetl	altipetl	NOUN	_	Case=Abs|Number=Sing	7	nmod	7:nmod	Orig=altipetl,|SpaceAfter=No|NormalizedForm=altipetl|NormalizedLemma=altipetl
10	,	,	PUNCT	_	_	12	punct	12:punct	Orig=,|Gloss=,|Morf=,|NormalizedForm=,|NormalizedLemma=,
11	o	o	AUX	_	_	12	aux	12:aux	Orig=ontlasojtlaskia|NormalizedForm=o|NormalizedLemma=o
12	ntlasojtlaskia	tlasojtla	VERB	_	Mood=Cnd|Number[obj]=Sing|Number[subj]=Sing|Person[obj]=3|Person[subj]=1|Subcat=Tran|VerbForm=Fin	4	conj	4:conj	NormalizedForm=ntlasohtlaskia|NormalizedLemma=tlasohtla
13	de	de	ADP	_	Foreign=Yes	18	mark	18:mark	Orig=de|NormalizedForm=de|NormalizedLemma=de
14	ke	ke	SCONJ	_	_	18	mark	18:mark	Orig=ke|NormalizedForm=ke|NormalizedLemma=ke
15	n	in	DET	_	_	16	det	16:det	Orig=naltipetl|NormalizedForm=n|NormalizedLemma=n
16	altipetl	altipetl	NOUN	_	Case=Abs|Number=Sing	18	nsubj	18:nsubj	NormalizedForm=altipetl|NormalizedLemma=altipetl
17	ma	ma	AUX	_	_	18	aux	18:aux	Orig=mamokwipa|NormalizedForm=ma|NormalizedLemma=ma
18	mokwipa	mokwipa	VERB	_	Mood=Opt|Number[subj]=Sing|Person[subj]=3|Reflex=Yes|Subcat=Tran|VerbForm=Fin	12	ccomp	12:ccomp	NormalizedForm=mokwipa|NormalizedLemma=mokwipa
19	municipio	municipio	NOUN	_	Foreign=Yes|Gender=Masc	18	ccomp	18:ccomp	Orig=municipio,|SpaceAfter=No|NormalizedForm=municipio|NormalizedLemma=municipio
20	,	,	PUNCT	_	_	22	punct	22:punct	Orig=,|Gloss=,|Morf=,|NormalizedForm=,|NormalizedLemma=,
21	o	o	AUX	_	_	22	aux	22:aux	Orig=ontlasojtlaskia|NormalizedForm=o|NormalizedLemma=o
22	ntlasojtlaskia	tlasojtla	VERB	_	Mood=Cnd|Number[obj]=Sing|Number[subj]=Sing|Person[obj]=3|Person[subj]=1|Subcat=Tran|VerbForm=Fin	12	conj	12:conj	NormalizedForm=ntlasohtlaskia|NormalizedLemma=tlasohtla
23	de	de	ADP	_	Foreign=Yes	29	mark	29:mark	Orig=de|NormalizedForm=de|NormalizedLemma=de
24	ke	ke	SCONJ	_	_	29	mark	29:mark	Orig=ke|NormalizedForm=ke|NormalizedLemma=ke
25	n	in	DET	_	_	26	det	26:det	Orig=nojtli|NormalizedForm=n|NormalizedLemma=in
26	ojtli	ojtli	NOUN	_	Case=Abs|Number=Sing	29	nsubj	29:nsubj	NormalizedForm=ohtli|NormalizedLemma=ohtli
27	ma	ma	AUX	_	_	29	aux	29:aux	Orig=mai|NormalizedForm=ma|NormalizedLemma=ma
28	i	katki	AUX	_	_	29	cop	29:cop	NormalizedForm=i|NormalizedLemma=katki
29	pavimentado	pavimentado	ADJ	_	_	22	ccomp	22:ccomp	Orig=pavimentado|NormalizedForm=pavimentado|NormalizedLemma=pavimentado
30	wan	wan	CCONJ	_	_	33	cc	33:cc	Orig=wan|NormalizedForm=wan|NormalizedLemma=wan
31	tokniwan	ikni	NOUN	_	Number=Plur|Number[psor]=Plur|Person[psor]=1	33	nsubj	33:nsubj	Orig=tokniwan|NormalizedForm=tokniwan|NormalizedLemma=ikni
32	ma	ma	AUX	_	_	33	aux	33:aux	Orig=makpiyakan|NormalizedForm=ma|NormalizedLemma=ma
33	kpiyakan	piya	VERB	_	Mood=Opt|Number[obj]=Sing|Number[subj]=Plur|Person[obj]=3|Person[subj]=3|Subcat=Tran|VerbForm=Fin	29	conj	29:conj	NormalizedForm=kpiyakan|NormalizedLemma=piya
34	se	se	DET	_	_	36	det	36:det	Orig=se|NormalizedForm=se|NormalizedLemma=se
35	kwalli	kwalli	ADJ	_	Number=Sing	36	amod	36:amod	Orig=kwalli|NormalizedForm=kwali|NormalizedLemma=kwali
36	tikitl	tikitl	NOUN	_	Case=Abs|Number=Sing	33	obj	33:obj	Orig=tikitl|NormalizedForm=tikitl|NormalizedLemma=tikitl
37	itich	tich	NOUN	_	NounType=Relat|Number=Sing|Number[psor]=Sing|Number[subj]=Plur|Person[psor]=3|Person[subj]=1	33	obl	33:obl	Orig=itich|NormalizedForm=itich|NormalizedLemma=tich
38	nin	nin	DET	_	_	39	det	39:det	Orig=nin|NormalizedForm=nin|NormalizedLemma=nin
39	altipetl	altipetl	NOUN	_	Case=Abs|Number=Sing	37	nmod	37:nmod	Orig=altipetl,|SpaceAfter=No|NormalizedForm=altipetl|NormalizedLemma=altipetl
40	,	,	PUNCT	_	_	48	punct	48:punct	Orig=,|Gloss=,|Morf=,|NormalizedForm=,|NormalizedLemma=,
41	wan	wan	CCONJ	_	_	48	cc	48:cc	Orig=wan|NormalizedForm=wan|NormalizedLemma=wan
42	de	de	ADP	_	Foreign=Yes	48	mark	48:mark	Orig=de|NormalizedForm=de|NormalizedLemma=de
43	ke	ke	SCONJ	_	_	48	mark	48:mark	Orig=ke|NormalizedForm=ke|NormalizedLemma=ke
44	nochi	nochi	DET	_	_	46	det	46:det	Orig=nochin|NormalizedForm=nochi|NormalizedLemma=nochi
45	n	in	DET	_	_	46	det	46:det	NormalizedForm=n|NormalizedLemma=in
46	kokonej	konetl	NOUN	_	Number=Plur	48	nsubj	48:nsubj	Orig=kokonej|NormalizedForm=kokoneh|NormalizedLemma=konetl
47	ma	ma	AUX	_	_	48	aux	48:aux	Orig=maestudiarokan|NormalizedForm=ma|NormalizedLemma=ma
48	estudiarokan	estudiaroa	VERB	_	Mood=Opt|Number[subj]=Plur|Person[subj]=3|Subcat=Tran|VerbForm=Fin	29	conj	29:conj	NormalizedForm=estudiarokan|NormalizedLemma=estudiaroa
49	wan	wan	CCONJ	_	_	52	cc	52:cc	Orig=wan|NormalizedForm=wan|NormalizedLemma=wan
50	noyiwki	noyiwki	ADV	_	_	52	advmod	52:advmod	Orig=noyiwki|NormalizedForm=noyiwki|NormalizedLemma=noyiwki
51	o	o	AUX	_	_	52	aux	52:aux	Orig=ontlasojtlaskia|NormalizedForm=o|NormalizedLemma=o
52	ntlasojtlaskia	tlasojtla	VERB	_	Mood=Cnd|Number[obj]=Sing|Number[subj]=Sing|Person[obj]=3|Person[subj]=1|Subcat=Tran|VerbForm=Fin	12	conj	12:conj	NormalizedForm=ntlasohtlaskia|NormalizedLemma=tlasohtla
53	de	de	ADP	_	Foreign=Yes	57	mark	57:mark	Orig=de|NormalizedForm=de|NormalizedLemma=de
54	ke	ke	SCONJ	_	_	57	mark	57:mark	Orig=ke|NormalizedForm=ke|NormalizedLemma=ke
55	amo	amo	ADV	_	Polarity=Neg	57	advmod	57:advmod	Orig=amo|NormalizedForm=amo|NormalizedLemma=amo
56	ma	ma	AUX	_	_	57	aux	57:aux	Orig=mapinawakantlajtoskej|NormalizedForm=ma|NormalizedLemma=ma
57	pinawakan	pinawa	VERB	_	Mood=Opt|Number[subj]=Plur|Person[subj]=3|Subcat=Intr|VerbForm=Fin	52	ccomp	52:ccomp	NormalizedForm=pinawakan|NormalizedLemma=pinawa
58	tlajtoskej	ijtoa	VERB	_	Animacy[obj]=Nhum|Mood=Ind|Number[subj]=Plur|Person[obj]=3|Person[subj]=3|Subcat=Tran|Tense=Fut|VerbForm=Fin	57	advcl	57:advcl	NormalizedForm=tlahtoskeh|NormalizedLemma=tlahtoa
59	nawatl	nawatl	NOUN	_	Case=Abs|Number=Sing	58	obl	58:obl	Orig=nawatl|SpaceAfter=No|NormalizedForm=nawatl|NormalizedLemma=nawatl
60	.	.	PUNCT	_	_	58	punct	58:punct	Orig=.|NormalizedForm=.|NormalizedLemma=.

~~~


