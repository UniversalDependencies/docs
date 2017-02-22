

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Galician)

This relation is universal.

5152 nodes (5%) are attached to their parents as `nsubj`.

4290 instances of `nsubj` (83%) are right-to-left (child precedes parent).
Average distance between parent and child is 4.04697204968944.

The following 15 pairs of parts of speech are connected with `nsubj`: [gl-pos/VERB]()-[gl-pos/NOUN]() (3009; 58% instances), [gl-pos/VERB]()-[gl-pos/PRON]() (1586; 31% instances), [gl-pos/VERB]()-[gl-pos/PROPN]() (199; 4% instances), [gl-pos/VERB]()-[gl-pos/VERB]() (190; 4% instances), [gl-pos/VERB]()-[gl-pos/NUM]() (70; 1% instances), [gl-pos/VERB]()-[gl-pos/ADJ]() (43; 1% instances), [gl-pos/VERB]()-[gl-pos/DET]() (29; 1% instances), [gl-pos/VERB]()-[gl-pos/ADP]() (15; 0% instances), [gl-pos/ADP]()-[gl-pos/PRON]() (3; 0% instances), [gl-pos/NUM]()-[gl-pos/SYM]() (2; 0% instances), [gl-pos/VERB]()-[gl-pos/INTJ]() (2; 0% instances), [gl-pos/ADJ]()-[gl-pos/PRON]() (1; 0% instances), [gl-pos/PRON]()-[gl-pos/PRON]() (1; 0% instances), [gl-pos/VERB]()-[gl-pos/PUNCT]() (1; 0% instances), [gl-pos/VERB]()-[gl-pos/SYM]() (1; 0% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 13 2 nsubj	color:blue
1	A	o	DET	DA0FS0	_	2	det	_	Treeler:spec
2	diferenza	diferenza	NOUN	NCFS000	_	13	nsubj	_	Treeler:suj
3	máis	máis	ADV	RG	_	4	det	_	Treeler:spec
4	inmediata	inmediato	ADJ	AQ0FS0	_	2	amod	_	Treeler:s.a
5	entre	entre	ADP	SPS00	_	2	case	_	Treeler:sp
6	a	o	DET	DA0FS0	_	7	det	_	Treeler:spec
7	varicela	varicela	NOUN	NCFS000	_	5	nmod	_	Treeler:sn
8	en	en	ADP	SPS00	_	7	case	_	Treeler:sp
9	vacinados	vacinar	VERB	VMP00PM	_	8	ccomp	_	Treeler:S
10	e	e	CONJ	CC	_	9	cc	_	Treeler:coord
11	non	non	PART	RN	_	12	advmod	_	Treeler:mod
12	vacinados	vacinar	VERB	VMP00PM	_	9	ccomp	_	Treeler:S
13	é	ser	VERB	VSIP3S0	_	0	root	_	Treeler:sentence
14	o	o	DET	DA0MS0	_	15	det	_	Treeler:spec
15	número	número	NOUN	NCMS000	_	13	cop	_	Treeler:atr
16	de	de	ADP	SPS00	_	15	case	_	Treeler:sp
17	lesións	lesión	NOUN	NCFP000	_	16	nmod	_	Treeler:sn
18	que	que	PRON	PR0CN000	_	19	dobj	_	Treeler:cd
19	provocan	provocar	VERB	VMIP3P0	_	17	ccomp	_	Treeler:S
20	.	.	PUNCT	Fp	_	13	punct	_	Treeler:f

~~~


~~~ conllu
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 15	bgColor:blue
# visual-style 15	fgColor:white
# visual-style 15 14 nsubj	color:blue
1	Entre	entre	ADP	SPS00	_	12	case	_	Treeler:cc
2	os	o	DET	DA0MP0	_	3	det	_	Treeler:spec
3	sistemas	sistema	NOUN	NCMP000	_	1	nmod	_	Treeler:sn
4	de	de	ADP	SPS00	_	3	case	_	Treeler:sp
5	desulfuración	desulfuración	NOUN	NCFS000	_	4	nmod	_	Treeler:sn
6	,	,	PUNCT	Fc	_	1	punct	_	Treeler:f
7	os	o	DET	DA0MP0	_	8	det	_	Treeler:spec
8	procesos	proceso	NOUN	NCMP000	_	12	nsubj	_	Treeler:suj
9	por	por	ADP	SPS00	_	8	case	_	Treeler:sp
10	vía	vía	NOUN	NCFS000	_	9	nmod	_	Treeler:sn
11	húmida	húmido	ADJ	AQ0FS0	_	10	amod	_	Treeler:s.a
12	son	ser	VERB	VSIP1S0	_	0	root	_	Treeler:sentence
13	os	o	DET	DA0MP0	_	15	det	_	Treeler:spec
14	que	que	PRON	PR0CN000	_	15	nsubj	_	Treeler:suj
15	acadaron	acadar	VERB	VMIS3P0	_	12	cop	_	Treeler:atr
16	maior	maior	ADJ	AQ0CS0	_	17	amod	_	Treeler:s.a
17	difusión	difusión	NOUN	NCFS000	_	15	dobj	_	Treeler:cd
18	(	(	PUNCT	Fpa	_	19	punct	_	Treeler:f
19	80	80	NUM	Z	_	15	foreign	_	Treeler:inc
20	%	%	SYM	Ft	_	19	nmod	_	Treeler:sn
21	)	)	PUNCT	Fpt	_	19	punct	_	Treeler:f
22	ata	ata	ADP	SPS00	_	15	case	_	Treeler:cc
23	o	o	DET	DA0MS0	_	24	det	_	Treeler:spec
24	momento	momento	NOUN	NCMS000	_	22	nmod	_	Treeler:sn
25	.	.	PUNCT	Fp	_	12	punct	_	Treeler:f

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 13 1 nsubj	color:blue
1	PP.	pp.	PROPN	NP00000	_	13	nsubj	_	Treeler:suj
2	,	,	PUNCT	Fc	_	3	punct	_	Treeler:f
3	sen	sen	ADP	SPS00	_	13	case	_	Treeler:cc
4	embargo	embargo	NOUN	NCMS000	_	3	nmod	_	Treeler:sn
5	os	o	DET	DA0MP0	_	6	det	_	Treeler:spec
6	resultados	resultado	NOUN	NCMP000	_	13	nsubj	_	Treeler:suj
7	que	que	PRON	PR0CN000	_	8	dobj	_	Treeler:cd
8	presentamos	presentar	VERB	VMIP1P0	_	6	ccomp	_	Treeler:S
9	en	en	ADP	SPS00	_	8	case	_	Treeler:cc
10	a	o	DET	DA0FS0	_	11	det	_	Treeler:spec
11	táboa	táboa	NOUN	NCFS000	_	9	nmod	_	Treeler:sn
12	7	7	PROPN	NP00000	_	11	nmod	_	Treeler:sn
13	contradín	contradicir	VERB	VMIP3P0	_	0	root	_	Treeler:sentence
14	esta	este	DET	DD0FS0	_	15	det	_	Treeler:spec
15	conclusión	conclusión	NOUN	NCFS000	_	13	dobj	_	Treeler:cd
16	.	.	PUNCT	Fp	_	13	punct	_	Treeler:f

~~~




--------------------------------------------------------------------------------

## Treebank Statistics (UD_Galician-TreeGal)

This relation is universal.
There are 1 language-specific subtypes of `nsubj`: [nsubj:pass]().

724 nodes (5%) are attached to their parents as `nsubj`.

585 instances of `nsubj` (81%) are right-to-left (child precedes parent).
Average distance between parent and child is 3.54419889502762.

The following 24 pairs of parts of speech are connected with `nsubj`: [gl-pos/VERB]()-[gl-pos/NOUN]() (245; 34% instances), [gl-pos/VERB]()-[gl-pos/PRON]() (215; 30% instances), [gl-pos/VERB]()-[gl-pos/PROPN]() (122; 17% instances), [gl-pos/ADJ]()-[gl-pos/NOUN]() (34; 5% instances), [gl-pos/NOUN]()-[gl-pos/NOUN]() (27; 4% instances), [gl-pos/NOUN]()-[gl-pos/PRON]() (19; 3% instances), [gl-pos/PRON]()-[gl-pos/PRON]() (13; 2% instances), [gl-pos/NOUN]()-[gl-pos/PROPN]() (10; 1% instances), [gl-pos/ADJ]()-[gl-pos/PRON]() (8; 1% instances), [gl-pos/PRON]()-[gl-pos/NOUN]() (8; 1% instances), [gl-pos/ADJ]()-[gl-pos/PROPN]() (3; 0% instances), [gl-pos/PROPN]()-[gl-pos/NOUN]() (3; 0% instances), [gl-pos/VERB]()-[gl-pos/ADJ]() (3; 0% instances), [gl-pos/VERB]()-[gl-pos/NUM]() (3; 0% instances), [gl-pos/ADP]()-[gl-pos/NOUN]() (2; 0% instances), [gl-pos/ADJ]()-[gl-pos/VERB]() (1; 0% instances), [gl-pos/ADV]()-[gl-pos/NOUN]() (1; 0% instances), [gl-pos/ADV]()-[gl-pos/PRON]() (1; 0% instances), [gl-pos/DET]()-[gl-pos/PROPN]() (1; 0% instances), [gl-pos/NOUN]()-[gl-pos/ADJ]() (1; 0% instances), [gl-pos/NOUN]()-[gl-pos/DET]() (1; 0% instances), [gl-pos/NOUN]()-[gl-pos/VERB]() (1; 0% instances), [gl-pos/PRON]()-[gl-pos/ADJ]() (1; 0% instances), [gl-pos/PRON]()-[gl-pos/PROPN]() (1; 0% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 nsubj	color:blue
1	Esa	ese	DET	Edfs	Gender=Fem|Number=Sing|PronType=Dem	2	det	_	_
2	compañía	compañía	NOUN	Scfs	Gender=Fem|Number=Sing	3	nsubj	_	_
3	di	dicir	VERB	Vpi30s	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
4	que	que	SCONJ	Cs	_	9	mark	_	_
5	a	o	DET	Ddfs	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	7	det	_	_
6	única	único	ADJ	A0fs	Gender=Fem|Number=Sing	7	amod	_	_
7	saída	saída	NOUN	Scfs	Gender=Fem|Number=Sing	9	nsubj	_	_
8	é	ser	AUX	Vpi30s	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	9	cop	_	_
9	continuar	continuar	VERB	V0f000	VerbForm=Inf	3	ccomp	_	_
10	onde	onde	ADV	Wr	PronType=Rel	9	advcl	_	_
11	está	estar	AUX	Vpi30s	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	10	cop	_	SpaceAfter=No
12	.	.	PUNCT	Q.	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 nsubj	color:blue
1	Algúns	algún	PRON	Inmp	Gender=Masc|Number=Plur|PronType=Ind	2	nsubj	_	_
2	fan	facer	VERB	Vpi30p	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
3	xornadas	xornada	NOUN	Scfp	Gender=Fem|Number=Plur	2	obj	_	_
4	de	de	ADP	P	AdpType=Prep	5	case	_	_
5	máis	máis	ADV	Wn	_	3	advmod	_	_
6	de	de	ADP	P	AdpType=Prep	8	case	_	_
7	12	12	NUM	Ncdfp	Gender=Fem|Number=Plur|NumType=Card	8	nummod	_	_
8	horas	hora	NOUN	Scfp	Gender=Fem|Number=Plur	5	obl	_	SpaceAfter=No
9	.	.	PUNCT	Q.	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 1 nsubj	color:blue
1	Miguel	miguel	PROPN	Spm0	Gender=Masc	3	nsubj	_	_
2	Barros	barros	PROPN	Spm0	Gender=Masc	1	flat:name	_	_
3	elixido	elixir	VERB	V0p0ms	Gender=Masc|Number=Sing|VerbForm=Part	0	root	_	_
4	secretario	secretario	NOUN	Scms	Gender=Masc|Number=Sing	3	obj	_	_
5	comarcal	comarcal	ADJ	A0ms	Gender=Masc|Number=Sing	4	amod	_	_

~~~


