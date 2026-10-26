---
layout: base
title:  'Statistics of iobj in UD_Galician-CTG'
udver: '2'
---

## Treebank Statistics: UD_Galician-CTG: Relations: `iobj`

This relation is universal.

556 nodes (0%) are attached to their parents as `iobj`.

347 instances of `iobj` (62%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.43345323741007.

The following 15 pairs of parts of speech are connected with `iobj`: <tt><a href="gl_ctg-pos-VERB.html">VERB</a></tt>-<tt><a href="gl_ctg-pos-PRON.html">PRON</a></tt> (279; 50% instances), <tt><a href="gl_ctg-pos-VERB.html">VERB</a></tt>-<tt><a href="gl_ctg-pos-NOUN.html">NOUN</a></tt> (208; 37% instances), <tt><a href="gl_ctg-pos-PRON.html">PRON</a></tt>-<tt><a href="gl_ctg-pos-PRON.html">PRON</a></tt> (15; 3% instances), <tt><a href="gl_ctg-pos-PRON.html">PRON</a></tt>-<tt><a href="gl_ctg-pos-NOUN.html">NOUN</a></tt> (13; 2% instances), <tt><a href="gl_ctg-pos-VERB.html">VERB</a></tt>-<tt><a href="gl_ctg-pos-ADJ.html">ADJ</a></tt> (11; 2% instances), <tt><a href="gl_ctg-pos-VERB.html">VERB</a></tt>-<tt><a href="gl_ctg-pos-PROPN.html">PROPN</a></tt> (11; 2% instances), <tt><a href="gl_ctg-pos-VERB.html">VERB</a></tt>-<tt><a href="gl_ctg-pos-ADP.html">ADP</a></tt> (7; 1% instances), <tt><a href="gl_ctg-pos-ADJ.html">ADJ</a></tt>-<tt><a href="gl_ctg-pos-NOUN.html">NOUN</a></tt> (2; 0% instances), <tt><a href="gl_ctg-pos-NOUN.html">NOUN</a></tt>-<tt><a href="gl_ctg-pos-NOUN.html">NOUN</a></tt> (2; 0% instances), <tt><a href="gl_ctg-pos-VERB.html">VERB</a></tt>-<tt><a href="gl_ctg-pos-NUM.html">NUM</a></tt> (2; 0% instances), <tt><a href="gl_ctg-pos-VERB.html">VERB</a></tt>-<tt><a href="gl_ctg-pos-VERB.html">VERB</a></tt> (2; 0% instances), <tt><a href="gl_ctg-pos-ADJ.html">ADJ</a></tt>-<tt><a href="gl_ctg-pos-PRON.html">PRON</a></tt> (1; 0% instances), <tt><a href="gl_ctg-pos-NOUN.html">NOUN</a></tt>-<tt><a href="gl_ctg-pos-PRON.html">PRON</a></tt> (1; 0% instances), <tt><a href="gl_ctg-pos-NOUN.html">NOUN</a></tt>-<tt><a href="gl_ctg-pos-PROPN.html">PROPN</a></tt> (1; 0% instances), <tt><a href="gl_ctg-pos-PROPN.html">PROPN</a></tt>-<tt><a href="gl_ctg-pos-NOUN.html">NOUN</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 4 iobj	color:blue
1	E	e	CCONJ	CC	_	6	cc	_	Treeler:et
2	a	o	DET	DA0FS0	Definite=Def|PronType=Art	3	det	_	Treeler:spec
3	quen	quen	PRON	PR0CC000	PronType=Rel	6	obl	_	Treeler:cc
4	se	se	PRON	PP3CN000	PronType=Prs|Reflex=Yes	6	iobj	_	Treeler:ci
5	lle	lle	PRON	PP3CSD00	PronType=Prs	6	iobj	_	Treeler:ci
6	pide	pedir	VERB	VMIP3S0	_	0	root	_	Treeler:sentence
7	a	o	DET	DA0FS0	Definite=Def|PronType=Art	8	det	_	Treeler:spec
8	fe	fe	NOUN	NCFS000	_	6	obj	_	Treeler:cd
9	de	de	ADP	SPS00	_	10	case	_	Treeler:sp
10	bautismo	bautismo	NOUN	NCMS000	_	8	nmod	_	SpaceAfter=No|Treeler:sn
11	?	?	PUNCT	Fit	_	6	punct	_	Treeler:f

~~~


~~~ conllu
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 12 iobj	color:blue
1	Ademáis	ademáis	ADV	RG	_	5	advmod	_	SpaceAfter=No|Treeler:cc
2	,	,	PUNCT	Fc	_	1	punct	_	Treeler:f
3	pode	poder	AUX	VMIP3S0	_	5	aux	_	Treeler:v
4	se	se	PRON	PP3CN000	PronType=Prs|Reflex=Yes	5	dep	_	Treeler:morfema.pronominal
5	visitar	visitar	VERB	VMN0000	_	0	root	_	Treeler:sentence
6	a	o	DET	DA0FS0	Definite=Def|PronType=Art	7	det	_	Treeler:spec
7	capela	capela	NOUN	NCFS000	_	5	obj	_	Treeler:cd
8	adicada	adicar	VERB	VMP00SF	_	7	ccomp	_	Treeler:S
9	a	a	ADP	SPS00	_	12	case	_	Treeler:ci
10	a	o	DET	DA0FS0	Definite=Def|PronType=Art	12	det	_	Treeler:spec
11	Nosa	noso	DET	DP1FSP	Poss=Yes|PronType=Prs	12	det	_	Treeler:spec
12	Señora	señor	NOUN	NCFS000	_	8	iobj	_	Treeler:sn
13	de	de	ADP	SPS00	_	15	case	_	Treeler:sp
14	a	o	DET	DA0FS0	Definite=Def|PronType=Art	15	det	_	Treeler:spec
15	Ascensión	ascensión	NOUN	NCFS000	_	12	nmod	_	SpaceAfter=No|Treeler:sn
16	,	,	PUNCT	Fc	_	19	punct	_	Treeler:f
17	onde	onde	PRON	PR0CN000	PronType=Rel	19	nsubj	_	Treeler:suj
18	se	se	PRON	PP3CN000	PronType=Prs|Reflex=Yes	19	obj	_	Treeler:cd
19	celebra	celebrar	VERB	VMIP3S0	_	12	ccomp	_	Treeler:S
20	unha	un	DET	DI0FS0	Definite=Ind|PronType=Art	21	det	_	Treeler:spec
21	romaría	romaría	NOUN	NCFS000	_	19	obj	_	Treeler:cd
22	en	en	ADP	SPS00	_	24	case	_	Treeler:cc
23	o	o	DET	DA0MS0	Definite=Def|PronType=Art	24	det	_	Treeler:spec
24	mes	mes	NOUN	NCMS000	_	19	obl	_	Treeler:sn
25	de	de	ADP	SPS00	_	26	case	_	Treeler:sp
26	xullo	xullo	NOUN	NCMS000	_	24	nmod	_	SpaceAfter=No|Treeler:sn
27	.	.	PUNCT	Fp	_	5	punct	_	Treeler:f

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 10 iobj	color:blue
1	Estaba	estar	VERB	VMII3S0	_	23	obj	_	Treeler:cd
2	en	en	ADP	SPS00	_	4	case	_	Treeler:cc
3	unha	un	DET	DI0FS0	Definite=Ind|PronType=Art	4	det	_	Treeler:spec
4	cafetería	cafetería	NOUN	NCFS000	_	1	obl	_	Treeler:sn
5	en	en	ADP	SPS00	_	6	case	_	Treeler:sp
6	Colombia	colombia	PROPN	NP00000	_	4	nmod	_	Treeler:sn
7	e	e	CCONJ	CC	_	8	cc	_	Treeler:coord
8	achegou	achegar	VERB	VMIS3S0	_	1	conj	_	Treeler:S
9	se	se	PRON	PP3CN000	PronType=Prs|Reflex=Yes	8	dep	_	Treeler:morfema.pronominal
10	me	me	PRON	PP1CS000	PronType=Prs	9	iobj	_	Treeler:ci
11	un	un	DET	DI0MS0	Definite=Ind|PronType=Art	12	det	_	Treeler:spec
12	rapaz	rapaz	NOUN	NCMS000	_	8	obj	_	Treeler:cd
13	que	que	PRON	PR0CN000	PronType=Rel	15	nsubj	_	Treeler:suj
14	era	ser	AUX	VSII1S0	_	15	cop	_	Treeler:S
15	irmán	irmán	NOUN	NCMS000	_	12	ccomp	_	Treeler:atr
16	de	de	ADP	SPS00	_	18	case	_	Treeler:sp
17	a	o	DET	DA0FS0	Definite=Def|PronType=Art	18	det	_	Treeler:spec
18	señora	señor	NOUN	NCFS000	_	15	nmod	_	Treeler:sn
19	que	que	PRON	PR0CN000	PronType=Rel	21	nsubj	_	Treeler:suj
20	me	me	PRON	PP1CS000	PronType=Prs	21	obj	_	Treeler:cd
21	trouxo	traer	VERB	VMIS3S0	_	18	ccomp	_	SpaceAfter=No|Treeler:S
22	,	,	PUNCT	Fc	_	1	punct	_	Treeler:f
23	dixo	dicir	VERB	VMIS3S0	_	0	root	_	Treeler:sentence
24	me	me	PRON	PP1CS000	PronType=Prs	26	iobj	_	Treeler:ci
25	:	:	PUNCT	Fd	_	24	punct	_	Treeler:f
26	gustaría	gustar	VERB	VMIC1S0	_	23	ccomp	_	Treeler:S
27	che	che	PRON	PP2CSD00	PronType=Prs	28	iobj	_	Treeler:ci
28	viaxar	viaxar	VERB	VMN0000	_	26	ccomp	_	Treeler:S
29	a	o	DET	DA0FS0	Definite=Def|PronType=Art	30	det	_	Treeler:spec
30	España	españa	PROPN	NP00000	_	28	obj	_	SpaceAfter=No|Treeler:cd
31	?	?	PUNCT	Fit	_	23	punct	_	Treeler:f

~~~


