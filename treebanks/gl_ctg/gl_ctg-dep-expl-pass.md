---
layout: base
title:  'Statistics of expl:pass in UD_Galician-CTG'
udver: '2'
---

## Treebank Statistics: UD_Galician-CTG: Relations: `expl:pass`

This relation is a language-specific subtype of .

68 nodes (0%) are attached to their parents as `expl:pass`.

60 instances of `expl:pass` (88%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.20588235294118.

The following 3 pairs of parts of speech are connected with `expl:pass`: <tt><a href="gl_ctg-pos-VERB.html">VERB</a></tt>-<tt><a href="gl_ctg-pos-PRON.html">PRON</a></tt> (63; 93% instances), <tt><a href="gl_ctg-pos-ADJ.html">ADJ</a></tt>-<tt><a href="gl_ctg-pos-PRON.html">PRON</a></tt> (4; 6% instances), <tt><a href="gl_ctg-pos-NOUN.html">NOUN</a></tt>-<tt><a href="gl_ctg-pos-PRON.html">PRON</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 expl:pass	color:blue
1	Representa	representar	VERB	VMIP3S0	_	0	root	_	Treeler:sentence
2	se	se	PRON	PP3CN000	PronType=Prs|Reflex=Yes	1	expl:pass	_	Treeler:suj
3	deseguido	deseguido	ADV	RG	_	1	case	_	Treeler:cc
4	a	o	DET	DA0FS0	Definite=Def|PronType=Art	5	det	_	Treeler:spec
5	evolución	evolución	NOUN	NCFS000	_	1	obj	_	Treeler:cd
6	anual	anual	ADJ	AQ0CS0	_	5	amod	_	Treeler:s.a
7	de	de	ADP	SPS00	_	9	case	_	Treeler:sp
8	o	o	DET	DA0MS0	Definite=Def|PronType=Art	9	det	_	Treeler:spec
9	valor	valor	NOUN	NCMS000	_	5	nmod	_	Treeler:sn
10	límite	límite	NOUN	NCMS000	_	9	amod	_	Treeler:s.a
11	mais	mais	CCONJ	CC	_	13	cc	_	Treeler:coord
12	a	o	DET	DA0FS0	Definite=Def|PronType=Art	13	det	_	Treeler:spec
13	marxe	marxe	NOUN	NCFS000	_	5	conj	_	Treeler:sn
14	de	de	ADP	SPS00	_	15	case	_	Treeler:sp
15	tolerancia	tolerancia	NOUN	NCFS000	_	13	nmod	_	Treeler:sn
16	de	de	ADP	SPS00	_	18	case	_	Treeler:sp
17	o	o	DET	DA0MS0	Definite=Def|PronType=Art	18	det	_	Treeler:spec
18	chumbo	chumbo	NOUN	NCMS000	_	15	nmod	_	Treeler:sn
19	en	en	ADP	SPS00	_	21	case	_	Treeler:sp
20	o	o	DET	DA0MS0	Definite=Def|PronType=Art	21	det	_	Treeler:spec
21	caso	caso	NOUN	NCMS000	_	18	nmod	_	Treeler:sn
22	xeral	xeral	ADJ	AQ0CS0	_	21	amod	_	Treeler:s.a

~~~


~~~ conllu
# visual-style 16	bgColor:blue
# visual-style 16	fgColor:white
# visual-style 18	bgColor:blue
# visual-style 18	fgColor:white
# visual-style 18 16 expl:pass	color:blue
1	O	o	DET	DA0MS0	Definite=Def|PronType=Art	2	det	_	Treeler:spec
2	lugar	lugar	NOUN	NCMS000	_	12	nsubj	_	Treeler:suj
3	anatómico	anatómico	ADJ	AQ0MS0	_	2	amod	_	Treeler:s.a
4	de	de	ADP	SPS00	_	5	case	_	Treeler:sp
5	inxección	inxección	NOUN	NCFS000	_	2	nmod	_	Treeler:sn
6	é	ser	AUX	VSIP3S0	_	12	cop	_	SpaceAfter=No|Treeler:sentence
7	,	,	PUNCT	Fc	_	9	punct	_	Treeler:f
8	en	en	ADP	SPS00	_	9	case	_	Treeler:cc
9	xeral	xeral	ADJ	AQ0CS0	_	12	amod	_	SpaceAfter=No|Treeler:s.a
10	,	,	PUNCT	Fc	_	9	punct	_	Treeler:f
11	o	o	DET	DA0MS0	Definite=Def|PronType=Art	12	det	_	Treeler:spec
12	músculo	músculo	NOUN	NCMS000	_	0	root	_	Treeler:atr
13	deltoide	deltoide	ADJ	AQ0CS0	_	12	amod	_	Treeler:s.a
14	aínda	aínda	ADV	RG	_	18	case	_	Treeler:cc
15	que	que	SCONJ	CS	_	18	mark	_	Treeler:conj
16	se	se	PRON	PP3CN000	PronType=Prs|Reflex=Yes	18	expl:pass	_	Treeler:suj
17	é	ser	AUX	VSIP3S0	_	18	cop	_	Treeler:atr
18	preciso	preciso	ADJ	AQ0MS0	_	12	xcomp	_	Treeler:atr
19	pode	poder	AUX	VMIP3S0	_	20	aux	_	Treeler:v
20	utilizar	utilizar	VERB	VMN0000	_	18	ccomp	_	Treeler:S
21	se	se	PRON	PP3CN000	PronType=Prs|Reflex=Yes	20	dep	_	Treeler:morfema.pronominal
22	a	o	DET	DA0FS0	Definite=Def|PronType=Art	23	det	_	Treeler:spec
23	cara	cara	NOUN	NCFS000	_	20	obj	_	Treeler:cd
24	anterolateral	anterolateral	ADJ	AQ0CS0	_	23	amod	_	Treeler:s.a
25	de	de	ADP	SPS00	_	27	case	_	Treeler:sp
26	a	o	DET	DA0FS0	Definite=Def|PronType=Art	27	det	_	Treeler:spec
27	coxa	coxa	NOUN	NCFS000	_	23	nmod	_	SpaceAfter=No|Treeler:sn
28	.	.	PUNCT	Fp	_	12	punct	_	Treeler:f

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 1 expl:pass	color:blue
1	Se	se	PRON	PP3CN000	PronType=Prs|Reflex=Yes	5	expl:pass	_	Treeler:suj
2	importante	importante	ADJ	AQ0CS0	_	5	nsubj	_	Treeler:suj
3	é	ser	AUX	VSIP3S0	_	5	cop	_	Treeler:sentence
4	o	o	DET	DA0MS0	Definite=Def|PronType=Art	5	det	_	Treeler:spec
5	papel	papel	NOUN	NCMS000	_	0	root	_	Treeler:atr
6	de	de	ADP	SPS00	_	8	case	_	Treeler:sp
7	as	o	DET	DA0FP0	Definite=Def|PronType=Art	8	det	_	Treeler:spec
8	administracións	administración	NOUN	NCFP000	_	5	nmod	_	Treeler:sn
9	en	en	ADP	SPS00	_	11	case	_	Treeler:sp
10	a	o	DET	DA0FS0	Definite=Def|PronType=Art	11	det	_	Treeler:spec
11	provisión	provisión	NOUN	NCFS000	_	5	nmod	_	Treeler:sn
12	de	de	ADP	SPS00	_	15	case	_	Treeler:sp
13	unhas	un	DET	DI0FP0	Definite=Ind|PronType=Art	15	det	_	Treeler:spec
14	mellores	mellor	ADJ	AQ0CP0	_	15	amod	_	Treeler:s.a
15	estatísticas	estatística	NOUN	NCFP000	_	11	nmod	_	Treeler:sn
16	máis	máis	ADV	RG	_	17	advmod	_	Treeler:spec
17	relevante	relevante	ADJ	AQ0CS0	_	15	amod	_	Treeler:s.a
18	aínda	aínda	ADV	RG	_	22	case	_	Treeler:cc
19	é	ser	AUX	VSIP3S0	_	22	cop	_	Treeler:S
20	a	o	DET	DA0FS0	Definite=Def|PronType=Art	22	det	_	Treeler:spec
21	súa	seu	DET	DP3FS0	Poss=Yes|PronType=Prs	22	det	_	Treeler:spec
22	responsabilidade	responsabilidade	NOUN	NCFS000	_	5	ccomp	_	Treeler:atr
23	en	en	ADP	SPS00	_	25	case	_	Treeler:sp
24	o	o	DET	DA0MS0	Definite=Def|PronType=Art	25	det	_	Treeler:spec
25	Planeamento	planeamento	NOUN	NCMS000	_	22	nmod	_	Treeler:sn
26	turístico	turístico	ADJ	AQ0MS0	_	25	amod	_	SpaceAfter=No|Treeler:s.a
27	.	.	PUNCT	Fp	_	5	punct	_	Treeler:f

~~~


