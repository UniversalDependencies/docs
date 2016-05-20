

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Romanian)

This relation is a language-specific subtype of [advcl]().

64 nodes (0%) are attached to their parents as `advcl:tcl`.

41 instances of `advcl:tcl` (64%) are left-to-right (parent precedes child).
Average distance between parent and child is 8.109375.

The following 5 pairs of parts of speech are connected with `advcl:tcl`: [ro-pos/VERB]()-[ro-pos/VERB]() (60; 94% instances), [ro-pos/ADJ]()-[ro-pos/VERB]() (1; 2% instances), [ro-pos/ADV]()-[ro-pos/VERB]() (1; 2% instances), [ro-pos/NOUN]()-[ro-pos/VERB]() (1; 2% instances), [ro-pos/VERB]()-[ro-pos/NOUN]() (1; 2% instances).


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 8 advcl:tcl	color:blue
1	Trecuse	trece	VERB	Vmil3s	Mood=Ind|Number=Sing|Person=3|Tense=Pqp|VerbForm=Fin	0	root	_	_
2	o	un	DET	Tifsr	Case=Acc,Nom|Gender=Fem|Number=Sing|PronType=Ind	3	det	_	_
3	săptămână	săptămână	NOUN	Ncfsrn	Case=Acc,Nom|Definite=Ind|Gender=Fem|Number=Sing	1	nsubj	_	_
4	de	de	ADP	Spsa	AdpType=Prep|Case=Acc	5	case	_	_
5	când	când	ADV	Rw	PronType=Int,Rel	8	advmod:tmod	_	_
6	ea	el	PRON	Pp3fsr--------s	Case=Acc,Nom|Gender=Fem|Number=Sing|Person=3|PronType=Prs|Strength=Strong	8	nsubj	_	_
7	se	sine	PRON	Px3--a--------w	Case=Acc|Person=3|PronType=Prs|Reflex=Yes|Strength=Weak	8	expl:pv	_	_
8	apropiase	apropia	VERB	Vmil3s	Mood=Ind|Number=Sing|Person=3|Tense=Pqp|VerbForm=Fin	1	advcl:tcl	_	_
9	de	de	ADP	Spsa	AdpType=Prep|Case=Acc	10	case	_	_
10	el	el	PRON	Pp3msr--------s	Case=Acc,Nom|Gender=Masc|Number=Sing|Person=3|PronType=Prs|Strength=Strong	8	nmod	_	_
11	.	.	PUNCT	PERIOD	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 31	bgColor:blue
# visual-style 31	fgColor:white
# visual-style 27	bgColor:blue
# visual-style 27	fgColor:white
# visual-style 27 31 advcl:tcl	color:blue
1	Într-	întru	ADP	Spsay	AdpType=Prep|Case=Acc|Variant=Short	3	case	_	_
2	o	un	DET	Tifsr	Case=Acc,Nom|Gender=Fem|Number=Sing|PronType=Ind	3	det	_	_
3	parte	parte	NOUN	Ncfsrn	Case=Acc,Nom|Definite=Ind|Gender=Fem|Number=Sing	6	nmod	_	_
4	a	al	DET	Tsfs	Gender=Fem|Number=Sing|Poss=Yes|PronType=Prs	5	det	_	_
5	lui	el	PRON	Pp3mso--------s	Case=Dat,Gen|Gender=Masc|Number=Sing|Person=3|PronType=Prs|Strength=Strong	3	nmod	_	_
6	era	fi	VERB	Vmii3s	Mood=Ind|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin	0	root	_	_
7	o	un	DET	Tifsr	Case=Acc,Nom|Gender=Fem|Number=Sing|PronType=Ind	8	det	_	_
8	nișă	nișă	NOUN	Ncfsrn	Case=Acc,Nom|Definite=Ind|Gender=Fem|Number=Sing	6	nsubj	_	_
9	,	,	PUNCT	COMMA	_	12	punct	_	_
10	nu	nu	PART	Qz	Negative=Neg	11	advmod	_	_
11	prea	prea	ADV	Rp	_	12	advmod	_	_
12	adâncă	adânc	ADJ	Afpfsrn	Case=Acc,Nom|Definite=Ind|Degree=Pos|Gender=Fem|Number=Sing	8	amod	_	_
13	,	,	PUNCT	COMMA	_	12	punct	_	_
14	în	în	ADP	Spsa	AdpType=Prep|Case=Acc	15	case	_	_
15	perete	perete	NOUN	Ncms-n	Definite=Ind|Gender=Masc|Number=Sing	8	nmod	_	_
16	,	,	PUNCT	COMMA	_	18	punct	_	_
17	unde	unde	ADV	Rw	PronType=Int,Rel	18	advmod	_	_
18	stătea	sta	VERB	Vmii3s	Mood=Ind|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin	8	acl	_	_
19	Winston	Winston	PROPN	Np	_	18	nsubj	_	_
20	acum	acum	ADV	Rgp	Degree=Pos	18	advmod	_	_
21	și	și	CONJ	Crssp	Negative=Pos	18	cc	_	_
22	care	care	PRON	Pw3--r	Case=Acc,Nom|Person=3|PronType=Int,Rel	27	nsubj	_	_
23	fusese	fi	VERB	Vmil3s	Mood=Ind|Number=Sing|Person=3|Tense=Pqp|VerbForm=Fin	27	cop	_	_
24	,	,	PUNCT	COMMA	_	25	punct	_	_
25	probabil	probabil	ADV	Rgp	Degree=Pos	27	advmod	_	_
26	,	,	PUNCT	COMMA	_	25	punct	_	_
27	destinată	destinat	ADJ	Afpfsrn	Case=Acc,Nom|Definite=Ind|Degree=Pos|Gender=Fem|Number=Sing	18	conj	_	_
28	,	,	PUNCT	COMMA	_	31	punct	_	_
29	când	când	ADV	Rw	PronType=Int,Rel	31	advmod	_	_
30	se	sine	PRON	Px3--a--------w	Case=Acc|Person=3|PronType=Prs|Reflex=Yes|Strength=Weak	31	expl:pass	_	_
31	construise	construi	VERB	Vmil3s	Mood=Ind|Number=Sing|Person=3|Tense=Pqp|VerbForm=Fin	27	advcl:tcl	_	_
32	blocul	bloc	NOUN	Ncmsry	Case=Acc,Nom|Definite=Def|Gender=Masc|Number=Sing	31	nsubjpass	_	_
33	,	,	PUNCT	COMMA	_	31	punct	_	_
34	unor	un	DET	Ti-po	Case=Dat,Gen|Number=Plur|PronType=Ind	35	det	_	_
35	rafturi	raft	NOUN	Ncfp-n	Definite=Ind|Gender=Fem|Number=Plur	27	iobj	_	_
36	de	de	ADP	Spsa	AdpType=Prep|Case=Acc	37	case	_	_
37	cărți	carte	NOUN	Ncfp-n	Definite=Ind|Gender=Fem|Number=Plur	35	nmod	_	_
38	.	.	PUNCT	PERIOD	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 10 advcl:tcl	color:blue
1	Înmulțirea	înmulțire	NOUN	Ncfsry	Case=Acc,Nom|Definite=Def|Gender=Fem|Number=Sing	16	nsubj	_	_
2	actelor	act	NOUN	Ncfpoy	Case=Dat,Gen|Definite=Def|Gender=Fem|Number=Plur	1	nmod	_	_
3	de	de	ADP	Spsa	AdpType=Prep|Case=Acc	4	case	_	_
4	violență	violență	NOUN	Ncfsrn	Case=Acc,Nom|Definite=Ind|Gender=Fem|Number=Sing	2	nmod	_	_
5	,	,	PUNCT	COMMA	_	10	punct	_	_
6	pe	pe	ADP	Spsa	AdpType=Prep|Case=Acc	10	mark	_	_
7	măsură	măsură	NOUN	Ncfsrn	Case=Acc,Nom|Definite=Ind|Gender=Fem|Number=Sing	6	mwe	_	_
8	ce	ce	PRON	Pw3--r	Case=Acc,Nom|Person=3|PronType=Int,Rel	6	mwe	_	_
9	se	sine	PRON	Px3--a--------w	Case=Acc|Person=3|PronType=Prs|Reflex=Yes|Strength=Weak	10	expl:pv	_	_
10	apropie	apropia	VERB	Vmis3s	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	1	advcl:tcl	_	_
11	data	dată	NOUN	Ncfsry	Case=Acc,Nom|Definite=Def|Gender=Fem|Number=Sing	10	nsubj	_	_
12	alegerilor	alegere	NOUN	Ncfpoy	Case=Dat,Gen|Definite=Def|Gender=Fem|Number=Plur	11	nmod	_	_
13	,	,	PUNCT	COMMA	_	10	punct	_	_
14	nu	nu	PART	Qz	Negative=Neg	16	neg	_	_
15	a	avea	AUX	Va--3s	Number=Sing|Person=3	16	aux	_	_
16	determinat	determina	VERB	Vmp--sm	Gender=Masc|Number=Sing|VerbForm=Part	0	root	_	_
17	autoritățile	autoritate	NOUN	Ncfpry	Case=Acc,Nom|Definite=Def|Gender=Fem|Number=Plur	16	dobj	_	_
18	irakiene	irakian	ADJ	Afpfson	Case=Dat,Gen|Definite=Ind|Degree=Pos|Gender=Fem|Number=Sing	17	amod	_	_
19	să	să	PART	Qs	Mood=Sub	20	mark	_	_
20	decidă	decide	VERB	Vmsp3	Mood=Sub|Person=3|Tense=Pres|VerbForm=Fin	16	xcomp	_	_
21	amânarea	amânare	NOUN	Ncfsry	Case=Acc,Nom|Definite=Def|Gender=Fem|Number=Sing	20	dobj	_	_
22	acestora	acesta	PRON	Pd3-po	Case=Dat,Gen|Number=Plur|Person=3|PronType=Dem	21	nmod	_	_
23	,	,	PUNCT	COMMA	_	31	punct	_	_
24	deși	deși	SCONJ	Csssp	Negative=Pos	31	mark	_	_
25	numeroase	numeros	ADJ	Afpfp-n	Definite=Ind|Degree=Pos|Gender=Fem|Number=Plur	26	amod	_	_
26	grupări	grupare	NOUN	Ncfp-n	Definite=Ind|Gender=Fem|Number=Plur	31	nsubj	_	_
27	și	și	CONJ	Crssp	Negative=Pos	26	cc	_	_
28	partide	partid	NOUN	Ncfp-n	Definite=Ind|Gender=Fem|Number=Plur	26	conj	_	_
29	politice	politic	ADJ	Afpfp-n	Definite=Ind|Degree=Pos|Gender=Fem|Number=Plur	26	amod	_	_
30	au	avea	AUX	Va--3p	Number=Plur|Person=3	31	aux	_	_
31	cerut	cere	VERB	Vmp--sm	Gender=Masc|Number=Sing|VerbForm=Part	16	advcl	_	_
32	acest	acest	DET	Dd3msr---e	Case=Acc,Nom|Gender=Masc|Number=Sing|Person=3|Position=Prenom|PronType=Dem	33	det	_	_
33	lucru	lucru	NOUN	Ncms-n	Definite=Ind|Gender=Masc|Number=Sing	31	dobj	_	_
34	.	.	PUNCT	PERIOD	_	16	punct	_	_

~~~


