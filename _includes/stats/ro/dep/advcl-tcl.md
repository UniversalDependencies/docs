

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Romanian)

This relation is a language-specific subtype of [advcl]().

101 nodes (0%) are attached to their parents as `advcl:tcl`.

63 instances of `advcl:tcl` (62%) are left-to-right (parent precedes child).
Average distance between parent and child is 8.24752475247525.

The following 8 pairs of parts of speech are connected with `advcl:tcl`: [ro-pos/VERB]()-[ro-pos/VERB]() (88; 87% instances), [ro-pos/NOUN]()-[ro-pos/VERB]() (4; 4% instances), [ro-pos/VERB]()-[ro-pos/ADJ]() (3; 3% instances), [ro-pos/VERB]()-[ro-pos/NOUN]() (2; 2% instances), [ro-pos/ADJ]()-[ro-pos/VERB]() (1; 1% instances), [ro-pos/ADV]()-[ro-pos/VERB]() (1; 1% instances), [ro-pos/VERB]()-[ro-pos/ADV]() (1; 1% instances), [ro-pos/VERB]()-[ro-pos/PRON]() (1; 1% instances).


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 11 advcl:tcl	color:blue
1	N-	nu	PART	Qz-y	Negative=Neg|Variant=Short	3	neg	_	_
2	ați	avea	AUX	Va--2p	Number=Plur|Person=2	3	aux	_	_
3	auzit	auzi	VERB	Vmp--sm	Gender=Masc|Number=Sing|VerbForm=Part	0	root	_	_
4	ce	ce	PRON	Pw3--r	Case=Acc,Nom|Person=3|PronType=Int,Rel	6	dobj	_	_
5	-a	avea	AUX	Va--3s----y	Number=Sing|Person=3|Variant=Short	6	aux	_	_
6	zis	zice	VERB	Vmp--sm	Gender=Masc|Number=Sing|VerbForm=Part	3	ccomp	_	_
7	după	după	ADP	Spsa	AdpType=Prep|Case=Acc	11	mark	_	_
8	ce	ce	PRON	Pw3--r	Case=Acc,Nom|Person=3|PronType=Int,Rel	7	mwe	_	_
9	i-	el	PRON	Pp3mpa--y-----w	Case=Acc|Gender=Masc|Number=Plur|Person=3|PronType=Prs|Strength=Weak|Variant=Short	11	expl:poss	_	_
10	ați	avea	AUX	Va--2p	Number=Plur|Person=2	11	aux	_	_
11	bușit	buși	VERB	Vmp--sm	Gender=Masc|Number=Sing|VerbForm=Part	3	advcl:tcl	_	_
12	mutra	mutră	NOUN	Ncfsry	Case=Acc,Nom|Definite=Def|Gender=Fem|Number=Sing	11	dobj	_	_
13	.	.	PUNCT	PERIOD	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 22	bgColor:blue
# visual-style 22	fgColor:white
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 14 22 advcl:tcl	color:blue
1	În	în	ADP	Spsa	AdpType=Prep|Case=Acc	4	case	_	_
2	timpul	timp	NOUN	Ncmsry	Case=Acc,Nom|Definite=Def|Gender=Masc|Number=Sing	1	mwe	_	_
3	primului	prim	NUM	Momsoly	Case=Dat,Gen|Definite=Def|Gender=Masc|Number=Sing|NumForm=Word|NumType=Ord	4	nummod	_	_
4	război	război	NOUN	Ncms-n	Definite=Ind|Gender=Masc|Number=Sing	14	nmod	_	_
5	mondial	mondial	ADJ	Afpms-n	Definite=Ind|Degree=Pos|Gender=Masc|Number=Sing	4	amod	_	_
6	,	,	PUNCT	COMMA	_	4	punct	_	_
7	pentru	pentru	ADP	Spsa	AdpType=Prep|Case=Acc	9	case	_	_
8	doi	doi	NUM	Mcmp-l	Gender=Masc|Number=Plur|NumForm=Word|NumType=Card	9	nummod	_	_
9	ani	an	NOUN	Ncmp-n	Definite=Ind|Gender=Masc|Number=Plur	14	nmod	_	_
10	,	,	PUNCT	COMMA	_	9	punct	_	_
11	Iași	Iași	PROPN	Np	_	14	nsubj	_	_
12	a	avea	AUX	Va--3s	Number=Sing|Person=3	13	aux	_	_
13	fost	fi	VERB	Vmp--sm	Gender=Masc|Number=Sing|VerbForm=Part	14	cop	_	_
14	capitala	capitală	NOUN	Ncfsry	Case=Acc,Nom|Definite=Def|Gender=Fem|Number=Sing	0	root	_	_
15	României	România	PROPN	Npfsoy	Case=Dat,Gen|Definite=Def|Gender=Fem|Number=Sing	14	nmod	_	_
16	neocupate	neocupat	ADJ	Afpfson	Case=Dat,Gen|Definite=Ind|Degree=Pos|Gender=Fem|Number=Sing	15	amod	_	_
17	,	,	PUNCT	COMMA	_	22	punct	_	_
18	după	după	ADP	Spsa	AdpType=Prep|Case=Acc	22	mark	_	_
19	ce	ce	PRON	Pw3--r	Case=Acc,Nom|Person=3|PronType=Int,Rel	18	mwe	_	_
20	București	București	PROPN	Np	_	22	nsubj	_	_
21	a	avea	AUX	Va--3s	Number=Sing|Person=3	22	aux	_	_
22	căzut	cădea	VERB	Vmp--sm	Gender=Masc|Number=Sing|VerbForm=Part	14	advcl:tcl	_	_
23	în	în	ADP	Spsa	AdpType=Prep|Case=Acc	24	case	_	_
24	mâinile	mână	NOUN	Ncfpry	Case=Acc,Nom|Definite=Def|Gender=Fem|Number=Plur	22	nmod	_	_
25	Puterilor	putere	NOUN	Ncfpoy	Case=Dat,Gen|Definite=Def|Gender=Fem|Number=Plur	24	nmod	_	_
26	Centrale	central	ADJ	Afpfp-n	Definite=Ind|Degree=Pos|Gender=Fem|Number=Plur	25	amod	_	_
27	la	la	ADP	Spsa	AdpType=Prep|Case=Acc	29	case	_	_
28	6	6	NUM	Mc-p-d	Number=Plur|NumForm=Digit|NumType=Card	29	nummod	_	_
29	decembrie	decembrie	NOUN	Ncms-n	Definite=Ind|Gender=Masc|Number=Sing	22	nmod:tmod	_	_
30	1916	1916	NUM	Mc-p-d	Number=Plur|NumForm=Digit|NumType=Card	29	nmod	_	_
31	.	.	PUNCT	PERIOD	_	14	punct	_	_

~~~


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 11 advcl:tcl	color:blue
1	Poți	putea	VERB	Vmm-2s	Mood=Imp|Number=Sing|Person=2|VerbForm=Fin	0	root	_	_
2	observa	observa	VERB	Vmnp	Tense=Pres|VerbForm=Inf	1	ccomp	_	_
3	că	că	SCONJ	Csssp	Negative=Pos	5	mark	_	_
4	mâncarea	mâncare	NOUN	Ncfsry	Case=Acc,Nom|Definite=Def|Gender=Fem|Number=Sing	5	nsubj	_	_
5	are	avea	VERB	Vmip3s	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	2	ccomp	_	_
6	un	un	DET	Timsr	Case=Acc,Nom|Gender=Masc|Number=Sing|PronType=Ind	7	det	_	_
7	gust	gust	NOUN	Ncms-n	Definite=Ind|Gender=Masc|Number=Sing	5	dobj	_	_
8	diferit	diferit	ADJ	Afpms-n	Definite=Ind|Degree=Pos|Gender=Masc|Number=Sing	7	amod	_	_
9	când	când	ADV	Rw	PronType=Int,Rel	11	advmod:tmod	_	_
10	ești	fi	VERB	Vmip2s	Mood=Ind|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin	11	aux	_	_
11	însărcinată	însărcinat	ADJ	Afpfsrn	Case=Acc,Nom|Definite=Ind|Degree=Pos|Gender=Fem|Number=Sing	5	advcl:tcl	_	_
12	.	.	PUNCT	PERIOD	_	1	punct	_	_

~~~


