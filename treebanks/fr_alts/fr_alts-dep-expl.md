---
layout: base
title:  'Statistics of expl in UD_French-ALTS'
udver: '2'
---

## Treebank Statistics: UD_French-ALTS: Relations: `expl`

This relation is universal.

282 nodes (1%) are attached to their parents as `expl`.

281 instances of `expl` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.76950354609929.

The following 3 pairs of parts of speech are connected with `expl`: <tt><a href="fr_alts-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_alts-pos-PRON.html">PRON</a></tt> (278; 99% instances), <tt><a href="fr_alts-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fr_alts-pos-PRON.html">PRON</a></tt> (3; 1% instances), <tt><a href="fr_alts-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_alts-pos-PRON.html">PRON</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 7 expl	color:blue
1	Et	et	CCONJ	_	_	2	cc	_	gold_pos=CCONJ|prpos=Cc|uppos=CONJO
2	dit	dire	VERB	_	VerbForm=Fin	0	root	_	gold_pos=VERB|prpos=Vvc|uppos=VJ
3	que	que	SCONJ	_	_	11	mark	_	gold_pos=SCONJ|prpos=Cs|uppos=CONJS
4	teille	tel	DET	_	Definite=Ind	5	det	_	gold_pos=DET|prpos=Di|uppos=D
5	choze	chose	NOUN	_	_	11	nsubj	_	gold_pos=NOUN|prpos=Nc|uppos=NCS
6	jamais	jamais	ADV	_	_	11	advmod	_	gold_pos=ADV|prpos=Rg|uppos=ADV
7	il	il	PRON	_	PronType=Prs	11	expl	_	gold_pos=PRON|prpos=Pp|uppos=PRO
8	ne	ne	ADV	_	Polarity=Neg	11	advmod	_	gold_pos=ADV|prpos=Rp|uppos=NEG
9	luy	il	PRON	_	PronType=Prs	11	iobj	_	gold_pos=PRON|prpos=Pp|uppos=PRO
10	estoet	être	AUX	_	VerbForm=Fin	11	aux	_	gold_pos=AUX|prpos=Vuc|uppos=EJ
11	advenu	advenir	VERB	_	VerbForm=Part	2	ccomp	_	gold_pos=VERB|prpos=Ge|SpaceAfter=No|uppos=VPP
12	.	.	PUNCT	_	_	2	punct	_	gold_pos=PUNCT|join=left|prpos=Fs|uppos=PONFP

~~~


~~~ conllu
# visual-style 27	bgColor:blue
# visual-style 27	fgColor:white
# visual-style 31	bgColor:blue
# visual-style 31	fgColor:white
# visual-style 31 27 expl	color:blue
1	nous	nous	PRON	_	PronType=Prs	3	nsubj	_	gold_pos=PRON|prpos=Pp|uppos=PRO
2	vous	vous	PRON	_	PronType=Prs	3	iobj	_	gold_pos=PRON|prpos=Pp|uppos=PRO
3	envoyons	envoyer	VERB	_	VerbForm=Fin	0	root	_	gold_pos=VERB|prpos=Vvc|uppos=VJ
4	icy	ici	ADV	_	_	5	advmod	_	gold_pos=ADV|prpos=Rg|uppos=ADV
5	enclos	enclore	VERB	_	VerbForm=Part	10	acl	_	gold_pos=VERB|prpos=Ge|uppos=VPP
6	en	en	ADP	_	_	9	case	_	gold_pos=ADP|prpos=S|uppos=P
7	ce	ce	DET	_	_	9	det	_	gold_pos=DET|prpos=Dd|uppos=D
8	present	présent	ADJ	_	_	9	amod	_	gold_pos=ADJ|prpos=Ag|uppos=ADJ
9	paquet	paquet	NOUN	_	_	5	obl	_	gold_pos=NOUN|prpos=Nc|uppos=NCS
10	tant	tant	ADV	_	_	3	obj	_	gold_pos=ADV|prpos=Rg|uppos=ADV
11	de	de	ADP	_	_	13	case	_	gold_pos=ADP|prpos=S|uppos=P
12	leurs	leur	DET	_	_	13	det	_	gold_pos=DET|prpos=Ds|uppos=DZ
13	confessions	confession	NOUN	_	Number=Plur	10	obl	_	gold_pos=NOUN|prpos=Nc|uppos=NCPL
14	que	que	SCONJ	_	_	16	mark	_	gold_pos=SCONJ|prpos=Cs|uppos=CONJS
15	de	de	ADP	_	_	16	case	_	gold_pos=ADP|prpos=S|uppos=P
16	ce	ce	PRON	_	PronType=Dem	10	conj	_	gold_pos=PRON|prpos=Pd|uppos=PRO
17	que	que	PRON	_	PronType=Rel	20	obj	_	gold_pos=PRON|prpos=Pr|uppos=WPRO
18	nous	nous	PRON	_	PronType=Prs	20	nsubj	_	gold_pos=PRON|prpos=Pp|uppos=PRO
19	y	y	PRON	_	PronType=Prs	22	obl	_	gold_pos=PRON|prpos=Pp|uppos=PRO
20	pouvons	pouvoir	VERB	_	VerbForm=Fin	16	acl:relcl	_	gold_pos=AUX|prpos=Vvc|uppos=MDJ
21	avoir	avoir	AUX	_	VerbForm=Inf	22	aux	_	gold_pos=AUX|prpos=Vun|uppos=AX
22	trouvey	trouver	VERB	_	VerbForm=Part	20	xcomp	_	gold_pos=VERB|prpos=Ge|uppos=VPP
23	a	à	ADP	_	_	25	case	_	gold_pos=ADP|prpos=S|uppos=P|wordform=à
24	le	le	DET	_	Definite=Def	25	det	_	gold_pos=DET|prpos=Da|uppos=D
25	mieux	mieux	ADV	_	_	22	obl	_	gold_pos=ADV|prpos=Rg|uppos=ADV
26	que	que	SCONJ	_	_	31	mark	_	gold_pos=SCONJ|prpos=Cs|uppos=CONJS
27	il	il	PRON	_	PronType=Prs	31	expl	_	gold_pos=PRON|prpos=Pp|uppos=PRO
28	nous	nous	PRON	_	PronType=Prs	31	iobj	_	gold_pos=PRON|prpos=Pp|uppos=PRO
29	a	avoir	AUX	_	VerbForm=Fin	31	aux	_	gold_pos=AUX|prpos=Vuc|uppos=AJ
30	estey	être	AUX	_	VerbForm=Part	31	cop	_	gold_pos=AUX|prpos=Ge|uppos=EPP
31	possible	possible	ADJ	_	_	25	advcl	_	gold_pos=ADJ|prpos=Ag|SpaceAfter=No|uppos=ADJ
32	,	,	PUNCT	_	_	31	punct	_	gold_pos=PUNCT|join=left|prpos=Fw|uppos=PON
33	ainsi	ainsi	ADV	_	ExtPos=SCONJ	36	mark	_	gold_pos=ADV|prpos=Rg|uppos=ADV
34	que	que	SCONJ	_	_	33	fixed	_	gold_pos=SCONJ|prpos=Cs|uppos=CONJS
35	Dieu	Dieu	PROPN	_	Number=Plur	36	nsubj	_	gold_pos=PROPN|prpos=Np|uppos=NPRS
36	congnoest	connaître	VERB	_	VerbForm=Fin	31	advcl	_	gold_pos=VERB|prpos=Vvc|SpaceAfter=No|uppos=VJ
37	,	,	PUNCT	_	_	36	punct	_	gold_pos=PUNCT|join=left|prpos=Fw|uppos=PON
38	a	à	ADP	_	_	41	case	_	gold_pos=ADP|prpos=S|uppos=P|wordform=à
39	lequel	lequel	PRON	_	PronType=Rel	41	det	_	gold_pos=PRON|prpos=Pr|uppos=WPRO
40	nous	nous	PRON	_	PronType=Prs	41	nsubj	_	gold_pos=PRON|prpos=Pp|uppos=PRO
41	suplions	supplier	VERB	_	VerbForm=Fin	35	acl:relcl	_	gold_pos=VERB|prpos=Vvc|uppos=VJ
42	et	et	CCONJ	_	_	43	cc	_	gold_pos=CCONJ|prpos=Cc|uppos=CONJO
43	desirons	désirer	VERB	_	VerbForm=Fin	41	conj	_	gold_pos=VERB|prpos=Vvc|uppos=VJ
44	vous	vous	PRON	_	PronType=Prs	45	obj	_	gold_pos=PRON|prpos=Pp|uppos=PRO
45	entretenir	entretenir	VERB	_	VerbForm=Inf	43	xcomp	_	gold_pos=VERB|prpos=Vvn|uppos=VX
46	en	en	ADP	_	_	47	case	_	gold_pos=ADP|prpos=S|uppos=P
47	santé	santé	NOUN	_	_	45	obl	_	gold_pos=NOUN|prpos=Nc|uppos=NCS
48	et	et	CCONJ	_	_	50	cc	_	gold_pos=CCONJ|prpos=Cc|uppos=CONJO
49	vous	vous	PRON	_	PronType=Prs	50	obj	_	gold_pos=PRON|prpos=Pp|uppos=PRO
50	augmenter	augmenter	VERB	_	VerbForm=Inf	45	conj	_	gold_pos=VERB|prpos=Vvn|uppos=VX
51	en	en	ADP	_	_	54	case	_	gold_pos=ADP|prpos=S|uppos=P
52	vos	votre	DET	_	_	54	det	_	gold_pos=DET|prpos=Ds|uppos=DZ
53	nobles	noble	ADJ	_	_	54	amod	_	gold_pos=ADJ|prpos=Ag|uppos=ADJ
54	estatz	état	NOUN	_	_	50	obl	_	gold_pos=NOUN|prpos=Nc|uppos=NCS
55	a	à	ADP	_	_	57	case	_	gold_pos=ADP|prpos=S|uppos=P
56	sa	son	DET	_	_	57	det	_	gold_pos=DET|prpos=Ds|uppos=DZ
57	louange	louange	NOUN	_	_	50	obl	_	gold_pos=NOUN|prpos=Nc|uppos=NCS
58	et	et	CCONJ	_	_	59	cc	_	gold_pos=CCONJ|prpos=Cc|uppos=CONJO
59	gloire	gloire	NOUN	_	_	57	conj	_	gold_pos=NOUN|prpos=Nc|SpaceAfter=No|uppos=NCS
60	.	.	PUNCT	_	_	3	punct	_	gold_pos=PUNCT|join=left|prpos=Fw|uppos=PON

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 12 8 expl	color:blue
1	Sur	sur	ADP	_	_	3	case	_	gold_pos=ADP|prpos=S|uppos=P
2	laquelle	lequel	DET	_	_	3	det	_	gold_pos=DET|prpos=Dr|uppos=WD
3	choze	chose	NOUN	_	_	6	obl	_	gold_pos=NOUN|prpos=Nc|uppos=NCS
4	il	il	PRON	_	PronType=Prs	6	nsubj	_	gold_pos=PRON|prpos=Pp|uppos=PRO
5	luy	il	PRON	_	PronType=Prs	6	iobj	_	gold_pos=PRON|prpos=Pp|uppos=PRO
6	dyst	dire	VERB	_	VerbForm=Fin	0	root	_	gold_pos=VERB|prpos=Vvc|uppos=VJ
7	que	que	SCONJ	_	_	12	mark	_	gold_pos=SCONJ|prpos=Cs|uppos=CONJS
8	il	il	PRON	_	PronType=Prs	12	expl	_	gold_pos=PRON|prpos=Pp|uppos=PRO
9	n'	ne	ADV	_	Polarity=Neg	12	advmod	_	gold_pos=ADV|prpos=Rp|SpaceAfter=No|uppos=NEG
10	estoet	être	AUX	_	VerbForm=Fin	12	cop	_	gold_pos=AUX|join=left|prpos=Vuc|uppos=EJ
11	pas	pas	ADV	_	_	12	advmod	_	gold_pos=ADV|prpos=Rg|uppos=ADVNEG
12	heure	heure	NOUN	_	_	6	ccomp	_	gold_pos=NOUN|prpos=Nc|uppos=NCS
13	de	de	ADP	_	_	14	mark	_	gold_pos=ADP|prpos=S|uppos=P
14	demander	demander	VERB	_	VerbForm=Inf	12	acl	_	gold_pos=VERB|prpos=Vvn|uppos=VX
15	l'	le	DET	_	Definite=Def	16	det	_	gold_pos=DET|prpos=Da|SpaceAfter=No|uppos=D
16	osmone	aumône	NOUN	_	_	14	obj	_	gold_pos=NOUN|join=left|prpos=Nc|uppos=NCS
17	ainsy	ainsi	ADV	_	_	18	advmod	_	gold_pos=ADV|prpos=Rg|uppos=ADV
18	tart	tard	ADV	_	_	14	advmod	_	gold_pos=ADV|prpos=Rg|SpaceAfter=No|uppos=ADV
19	,	,	PUNCT	_	_	12	punct	_	gold_pos=PUNCT|join=left|prpos=Fw|uppos=PON
20	et	et	CCONJ	_	_	25	cc	_	gold_pos=CCONJ|prpos=Cc|uppos=CONJO
21	que	que	SCONJ	_	_	25	mark	_	gold_pos=SCONJ|prpos=Cs|uppos=CONJS
22	il	il	PRON	_	PronType=Prs	25	nsubj	_	gold_pos=PRON|prpos=Pp|uppos=PRO
23	s'	se	PRON	_	PronType=Prs	25	expl	_	gold_pos=PRON|prpos=Pp|SpaceAfter=No|uppos=PRO
24	en	en	PRON	_	PronType=Prs	25	obl	_	gold_pos=PRON|join=left|prpos=Pp|uppos=PRO
25	allast	aller	VERB	_	VerbForm=Fin	12	conj	_	gold_pos=VERB|prpos=Vvc|uppos=VJ
26	reconser	resconser	VERB	_	VerbForm=Inf	25	xcomp	_	gold_pos=VERB|prpos=Vvn|uppos=VX
27	en	en	ADP	_	_	29	case	_	gold_pos=ADP|prpos=S|uppos=P
28	sa	son	DET	_	_	29	det	_	gold_pos=DET|prpos=Ds|uppos=DZ
29	maison	maison	NOUN	_	_	26	obl	_	gold_pos=NOUN|prpos=Nc|SpaceAfter=No|uppos=NCS
30	.	.	PUNCT	_	_	6	punct	_	gold_pos=PUNCT|join=left|prpos=Fs|uppos=PONFP

~~~


