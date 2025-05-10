---
layout: base
title:  'Statistics of nummod in UD_French-ALTS'
udver: '2'
---

## Treebank Statistics: UD_French-ALTS: Relations: `nummod`

This relation is universal.

459 nodes (1%) are attached to their parents as `nummod`.

408 instances of `nummod` (89%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.25054466230937.

The following 3 pairs of parts of speech are connected with `nummod`: <tt><a href="fr_alts-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_alts-pos-NUM.html">NUM</a></tt> (453; 99% instances), <tt><a href="fr_alts-pos-PROPN.html">PROPN</a></tt>-<tt><a href="fr_alts-pos-NUM.html">NUM</a></tt> (4; 1% instances), <tt><a href="fr_alts-pos-PRON.html">PRON</a></tt>-<tt><a href="fr_alts-pos-NUM.html">NUM</a></tt> (2; 0% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 nummod	color:blue
1	Il	il	PRON	_	PronType=Prs	3	expl	_	gold_pos=PRON|prpos=Pp|uppos=PRO
2	y	y	PRON	_	PronType=Prs	3	obl	_	gold_pos=PRON|prpos=Pp|uppos=PRO
3	a	avoir	VERB	_	VerbForm=Fin	0	root	_	gold_pos=VERB|prpos=Vuc|uppos=AJ
4	deulx	deux	NUM	_	NumType=Card	5	nummod	_	gold_pos=NUM|prpos=Mc|uppos=ADJNUM
5	ans	an	NOUN	_	Number=Plur	3	obj	_	gold_pos=NOUN|prpos=Nc|uppos=NCPL
6	que	que	SCONJ	_	_	12	mark	_	gold_pos=SCONJ|prpos=Cs|uppos=CONJS
7	je	je	PRON	_	PronType=Prs	12	nsubj	_	gold_pos=PRON|prpos=Pp|uppos=PRO
8	n'	ne	ADV	_	Polarity=Neg	12	advmod	_	gold_pos=ADV|prpos=Rp|SpaceAfter=No|uppos=NEG
9	en	en	PRON	_	PronType=Prs	12	obl	_	gold_pos=PRON|join=left|prpos=Pp|uppos=PRO
10	n*avoes	avoir	AUX	_	VerbForm=Fin	12	aux	_	gold_pos=AUX|prpos=Vuc|uppos=AJ
11	auttant	autant	ADV	_	_	12	advmod	_	gold_pos=ADV|prpos=Rg|uppos=Q
12	achapté	acheter	VERB	_	VerbForm=Part	3	advcl	_	gold_pos=VERB|prpos=Ge|SpaceAfter=No|uppos=VPP
13	.	.	PUNCT	_	_	3	punct	_	gold_pos=PUNCT|join=left|prpos=Fs|uppos=PONFP
14	»	»	PUNCT	_	_	3	punct	_	gold_pos=PUNCT|prpos=Fs|uppos=PONFP

~~~


~~~ conllu
# visual-style 52	bgColor:blue
# visual-style 52	fgColor:white
# visual-style 53	bgColor:blue
# visual-style 53	fgColor:white
# visual-style 53 52 nummod	color:blue
1	Et	et	CCONJ	_	_	5	cc	_	gold_pos=CCONJ|prpos=Cc|uppos=CONJO
2	premier	premier	ADV	_	_	5	advmod	_	gold_pos=ADV|prpos=Rg|SpaceAfter=No|uppos=ADV
3	,	,	PUNCT	_	_	5	punct	_	gold_pos=PUNCT|join=left|prpos=Fw|uppos=PON
4	ilz	il	PRON	_	PronType=Prs	5	nsubj	_	gold_pos=PRON|prpos=Pp|uppos=PRO
5	dient	dire	VERB	_	VerbForm=Fin	0	root	_	gold_pos=VERB|prpos=Vvc|uppos=VJ
6	et	et	CCONJ	_	_	7	cc	_	gold_pos=CCONJ|prpos=Cc|uppos=CONJO
7	confessent	confesser	VERB	_	VerbForm=Fin	5	conj	_	gold_pos=VERB|prpos=Vvc|uppos=VJ
8	que	que	SCONJ	_	_	33	mark	_	gold_pos=SCONJ|prpos=Cs|uppos=CONJS
9	vyron	viron	ADP	_	_	11	case	_	gold_pos=ADP|prpos=S|uppos=P
10	la	le	DET	_	Definite=Def	11	det	_	gold_pos=DET|prpos=Da|uppos=D
11	Penthecouste	Pentecôte	NOUN	_	_	33	obl	_	gold_pos=NOUN|prpos=Nc|uppos=NCS
12	desrainne	derrain	ADV	_	_	13	advmod	_	gold_pos=ADV|prpos=Rg|uppos=ADV
13	passee	passer	VERB	_	VerbForm=Part	11	acl	_	gold_pos=VERB|prpos=Ge|SpaceAfter=No|uppos=VPP
14	,	,	PUNCT	_	_	11	punct	_	gold_pos=PUNCT|join=left|prpos=Fw|uppos=PON
15	estantz	être	VERB	_	_	33	advcl	_	gold_pos=VERB|prpos=Ga|uppos=EG
16	de	de	ADP	_	_	18	case	_	gold_pos=ADP|prpos=S|uppos=P
17	ung	un	DET	_	Definite=Ind	18	det	_	gold_pos=DET|prpos=Dn|uppos=D
18	navyre	navire	NOUN	_	_	15	obl	_	gold_pos=NOUN|prpos=Nc|uppos=NCS
19	nommey	nommer	VERB	_	VerbForm=Part	18	acl	_	gold_pos=VERB|prpos=Ge|uppos=VPP
20	le	le	DET	_	Definite=Def	21	det	_	gold_pos=DET|prpos=Da|uppos=D
21	Johan	Jehan	PROPN	_	Number=Plur	19	xcomp	_	gold_pos=PROPN|prpos=Np|uppos=NPRS
22	de	de	PROPN	_	Number=Plur	21	flat	_	gold_pos=PROPN|prpos=Np|uppos=NPRS
23	Fanowyche	Fanowyche	PROPN	_	Number=Plur	21	flat	_	gold_pos=PROPN|prpos=Np|SpaceAfter=No|uppos=NPRS
24	,	,	PUNCT	_	_	19	punct	_	gold_pos=PUNCT|join=left|prpos=Fw|uppos=PON
25	a	à	ADP	_	_	28	case	_	gold_pos=ADP|prpos=S|uppos=P|wordform=à
26	lequel	lequel	PRON	_	PronType=Rel	28	det	_	gold_pos=PRON|prpos=Pr|uppos=WPRO
27	estoet	être	AUX	_	VerbForm=Fin	28	cop	_	gold_pos=AUX|prpos=Vuc|uppos=EJ
28	cappitaine	capitaine	NOUN	_	_	18	acl:relcl	_	gold_pos=NOUN|prpos=Nc|uppos=NCS
29	Jammes	Jammes	PROPN	_	Number=Plur	28	nsubj	_	gold_pos=PROPN|prpos=Np|uppos=NPRS
30	Hedon	Hedon	PROPN	_	Number=Plur	29	flat	_	gold_pos=PROPN|prpos=Np|SpaceAfter=No|uppos=NPRS
31	,	,	PUNCT	_	_	28	punct	_	gold_pos=PUNCT|join=left|prpos=Fw|uppos=PON
32	ilz	il	PRON	_	PronType=Prs	33	nsubj	_	gold_pos=PRON|prpos=Pp|uppos=PRO
33	partyrent	partir	VERB	_	VerbForm=Fin	5	ccomp	_	gold_pos=VERB|prpos=Vvc|uppos=VJ
34	de	de	ADP	_	_	35	case	_	gold_pos=ADP|prpos=S|uppos=P
35	Fauvey	Fowey	PROPN	_	Number=Plur	33	obl	_	gold_pos=PROPN|prpos=Np|uppos=NPRS
36	et	et	CCONJ	_	_	37	cc	_	gold_pos=CCONJ|prpos=Cc|uppos=CONJO
37	vyndrent	venir	VERB	_	VerbForm=Fin	33	conj	_	gold_pos=VERB|prpos=Vvc|uppos=VJ
38	le	le	DET	_	Definite=Def	39	det	_	gold_pos=DET|prpos=Da|uppos=D
39	travers	travers	NOUN	_	_	37	obl	_	gold_pos=NOUN|prpos=Nc|uppos=NCS
40	de	de	ADP	_	_	41	case	_	gold_pos=ADP|prpos=S|uppos=P
41	Fallemue	Falmouth	PROPN	_	Number=Plur	39	nmod	_	gold_pos=PROPN|prpos=Np|SpaceAfter=No|uppos=NPRS
42	,	,	PUNCT	_	_	39	punct	_	gold_pos=PUNCT|join=left|prpos=Fw|uppos=PON
43	accompaignés	accompagner	VERB	_	VerbForm=Part	37	advcl	_	gold_pos=VERB|prpos=Ge|uppos=VPP
44	de	de	ADP	_	_	46	case	_	gold_pos=ADP|prpos=S|uppos=P
45	.xx.	vingt	NUM	_	NumType=Card	46	nummod	_	gold_pos=NUM|prpos=Mc|uppos=ADJNUM
46	Angloys	Anglais	PROPN	_	Number=Plur	43	obl	_	gold_pos=PROPN|prpos=Np|SpaceAfter=No|uppos=NPRPL
47	,	,	PUNCT	_	_	46	punct	_	gold_pos=PUNCT|join=left|prpos=Fw|uppos=PON
48	eulx	il	PRON	_	PronType=Prs	49	nsubj	_	gold_pos=PRON|prpos=Pp|uppos=PRO
49	compryntz	comprendre	VERB	_	VerbForm=Part	46	acl	_	gold_pos=VERB|prpos=Ge|SpaceAfter=No|uppos=VPP
50	,	,	PUNCT	_	_	46	punct	_	gold_pos=PUNCT|join=left|prpos=Fw|uppos=PON
51	et	et	CCONJ	_	_	53	cc	_	gold_pos=CCONJ|prpos=Cc|uppos=CONJO
52	.xx.	vingt	NUM	_	NumType=Card	53	nummod	_	gold_pos=NUM|prpos=Mc|uppos=ADJNUM
53	Escossoes	Écossais	PROPN	_	Number=Plur	46	conj	_	gold_pos=PROPN|prpos=Np|uppos=NPRPL
54	et	et	CCONJ	_	_	58	cc	_	gold_pos=CCONJ|prpos=Cc|uppos=CONJO
55	.iiii.	quatre	NUM	_	NumType=Card	58	nummod	_	gold_pos=NUM|prpos=Mc|uppos=ADJNUM
56	ou	ou	CCONJ	_	_	57	cc	_	gold_pos=CCONJ|prpos=Cc|uppos=CONJO
57	.v.	cinq	NUM	_	NumType=Card	55	conj	_	gold_pos=NUM|prpos=Mc|uppos=ADJNUM
58	pages	page	NOUN	_	Number=Plur	46	conj	_	gold_pos=NOUN|prpos=Nc|SpaceAfter=No|uppos=NCPL
59	,	,	PUNCT	_	_	43	punct	_	gold_pos=PUNCT|join=left|prpos=Fw|uppos=PON
60	la	là	ADV	_	_	37	advmod	_	gold_pos=ADV|prpos=Rg|uppos=ADV
61	ou	où	PRON	_	PronType=Rel	64	obl	_	gold_pos=PRON|prpos=Pr|uppos=WPRO
62	ledit	ledit	DET	_	Definite=Ind	63	det	_	gold_pos=DET|prpos=Di|uppos=D
63	Hedon	Hedon	PROPN	_	Number=Plur	64	nsubj	_	gold_pos=PROPN|prpos=Np|uppos=NPRS
64	allyt	aller	VERB	_	VerbForm=Fin	60	acl:relcl	_	gold_pos=VERB|prpos=Vvc|uppos=VJ
65	a	à	ADP	_	_	66	case	_	gold_pos=ADP|prpos=S|uppos=P
66	terre	terre	NOUN	_	_	64	obl	_	gold_pos=NOUN|prpos=Nc|uppos=NCS
67	avuecque	avec	ADP	_	_	69	case	_	gold_pos=ADP|prpos=S|uppos=P
68	son	son	DET	_	_	69	det	_	gold_pos=DET|prpos=Ds|uppos=DZ
69	homme	homme	NOUN	_	_	64	obl	_	gold_pos=NOUN|prpos=Nc|SpaceAfter=No|uppos=NCS
70	.	.	PUNCT	_	_	5	punct	_	gold_pos=PUNCT|join=left|prpos=Fw|uppos=PON

~~~


~~~ conllu
# visual-style 25	bgColor:blue
# visual-style 25	fgColor:white
# visual-style 26	bgColor:blue
# visual-style 26	fgColor:white
# visual-style 26 25 nummod	color:blue
1	Aprés	après	ADP	_	_	3	case	_	gold_pos=ADP|prpos=S|uppos=P
2	lesquelles	lequel	DET	_	_	3	det	_	gold_pos=DET|prpos=Dr|uppos=WD
3	choses	chose	NOUN	_	Number=Plur	5	obl	_	gold_pos=NOUN|prpos=Nc|uppos=NCPL
4	furent	être	AUX	_	VerbForm=Fin	5	aux:pass	_	gold_pos=AUX|prpos=Vuc|uppos=EJ
5	advertys	avertir	VERB	_	VerbForm=Part	0	root	_	gold_pos=VERB|prpos=Ge|uppos=VPP
6	de	de	ADP	_	_	7	mark	_	gold_pos=ADP|prpos=S|uppos=P
7	regarder	regarder	VERB	_	VerbForm=Inf	5	xcomp	_	gold_pos=VERB|prpos=Vvn|uppos=VX
8	dedens	dedans	ADP	_	_	10	case	_	gold_pos=ADP|prpos=S|uppos=P
9	son	son	DET	_	_	10	det	_	gold_pos=DET|prpos=Ds|uppos=DZ
10	luyct	lit	NOUN	_	_	7	obl	_	gold_pos=NOUN|prpos=Nc|SpaceAfter=No|uppos=NCS
11	,	,	PUNCT	_	_	7	punct	_	gold_pos=PUNCT|join=left|prpos=Fw|uppos=PON
12	ce	ce	PRON	_	PronType=Dem	5	parataxis	_	gold_pos=PRON|prpos=Pd|uppos=PRO
13	qu'	que	PRON	_	PronType=Rel	15	obj	_	gold_pos=PRON|prpos=Pr|SpaceAfter=No|uppos=WPRO
14	ylz	il	PRON	_	PronType=Prs	15	nsubj	_	gold_pos=PRON|join=left|prpos=Pp|uppos=PRO
15	fyrent	faire	VERB	_	VerbForm=Fin	12	acl:relcl	_	gold_pos=VERB|prpos=Vvc|SpaceAfter=No|uppos=VJ
16	,	,	PUNCT	_	_	12	punct	_	gold_pos=PUNCT|join=left|prpos=Fw|uppos=PON
17	et	et	CCONJ	_	_	18	cc	_	gold_pos=CCONJ|prpos=Cc|uppos=CONJO
18	trouverent	trouver	VERB	_	VerbForm=Fin	5	conj	_	gold_pos=VERB|in_version=trouvere[n]t|prpos=Vvc|uppos=VJ
19	chinq	cinq	NUM	_	NumType=Card	20	nummod	_	gold_pos=NUM|prpos=Mc|uppos=ADJNUM
20	vougz	voug	NOUN	_	Number=Plur	18	obj	_	gold_pos=NOUN|prpos=Nc|uppos=NCPL
21	a	à	ADP	_	_	23	case	_	gold_pos=ADP|prpos=S|uppos=P|wordform=à
22	ledit	ledit	DET	_	Definite=Def	23	det	_	gold_pos=DET|prpos=Da|uppos=D
23	luyct	lit	NOUN	_	_	18	obl	_	gold_pos=NOUN|prpos=Nc|uppos=NCS
24	et	et	CCONJ	_	_	26	cc	_	gold_pos=CCONJ|prpos=Cc|uppos=CONJO
25	deulx	deux	NUM	_	NumType=Card	26	nummod	_	gold_pos=NUM|prpos=Mc|uppos=ADJNUM
26	aultres	autre	PRON	_	PronType=Ind	18	conj	_	gold_pos=PRON|prpos=Pi|uppos=PRO
27	dedens	dedans	ADP	_	_	29	case	_	gold_pos=ADP|prpos=S|uppos=P
28	ung	un	DET	_	Definite=Ind	29	det	_	gold_pos=DET|prpos=Di|uppos=D
29	orillier	oreiller	NOUN	_	_	26	orphan	_	gold_pos=NOUN|prpos=Nc|SpaceAfter=No|uppos=NCS
30	.	.	PUNCT	_	_	5	punct	_	gold_pos=PUNCT|join=left|prpos=Fs|uppos=PONFP

~~~


