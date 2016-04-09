

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Romanian)

This relation is a language-specific subtype of [expl]().
There are also 3 other language-specific subtypes of `expl`: [expl:impers](), [expl:pass](), [expl:pv]().

39 nodes (0%) are attached to their parents as `expl:poss`.

36 instances of `expl:poss` (92%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.46153846153846.

The following 3 pairs of parts of speech are connected with `expl:poss`: [ro-pos/VERB]()-[ro-pos/PRON]() (35; 90% instances), [ro-pos/NOUN]()-[ro-pos/PRON]() (3; 8% instances), [ro-pos/NOUN]()-[ro-pos/VERB]() (1; 3% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 1 expl:poss	color:blue
1	Ți	tu	PRON	Pp2-sd--------w	Case=Dat|Number=Sing|Person=2|PronType=Prs|Strength=Weak	3	expl:poss	_	_
2	-am	avea	AUX	Vaip1p	Mood=Ind|Number=Plur|Person=1|Tense=Pres|VerbForm=Fin	3	aux	_	_
3	auzit	auzi	VERB	Vmp--sm	Gender=Masc|Number=Sing|VerbForm=Part	0	root	_	_
4	de	de	ADP	Sp	AdpType=Prep	5	case	_	_
5	nume	nume	NOUN	Nc---n	Definite=Ind	3	iobj	_	_
6	și	și	CONJ	Crssp	Negative=Pos	3	cc	_	_
7	nu	nu	PART	Qz	Negative=Neg	9	neg	_	_
8	am	avea	AUX	Vaip1p	Mood=Ind|Number=Plur|Person=1|Tense=Pres|VerbForm=Fin	9	aux	_	_
9	putut	putea	VERB	Vmp--sm	Gender=Masc|Number=Sing|VerbForm=Part	10	aux	_	_
10	răbda	răbda	VERB	Vmnp	Tense=Pres|VerbForm=Inf	3	conj	_	_
11	să	să	PART	Qs	Mood=Sub	14	mark	_	_
12	nu	nu	PART	Qz	Negative=Neg	14	neg	_	_
13	ne	eu	PRON	Pp1-pa--------w	Case=Acc|Number=Plur|Person=1|PronType=Prs|Strength=Weak	14	dobj	_	_
14	cunoaștem	cunoaște	VERB	Vmsp1p	Mood=Sub|Number=Plur|Person=1|Tense=Pres|VerbForm=Fin	10	ccomp	_	_
15	.	.	PUNCT	PERIOD	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 15	bgColor:blue
# visual-style 15	fgColor:white
# visual-style 15 9 expl:poss	color:blue
1	Prin	Prin	ADP	Spsa	AdpType=Prep|Case=Acc	2	case	_	_
2	încheierea	încheierea	NOUN	Ncfsry	Case=Nom|Definite=Def|Gender=Fem|Number=Sing	11	nmod	_	_
3	pactului	pactului	NOUN	Ncmsoy	Case=Gen|Definite=Def|Gender=Masc|Number=Sing	2	nmod	_	_
4	dualist	dualist	ADJ	Afpms-n	Definite=Ind|Degree=Pos|Gender=Masc|Number=Sing	3	amod	_	_
5	în	în	ADP	Spsa	AdpType=Prep|Case=Acc	6	case	_	_
6	1867	1867	NUM	M	NumType=Card	2	nummod	_	_
7	,	,	PUNCT	COMMA	_	2	punct	_	_
8	Transilvania	Transilvania	PROPN	Np	_	11	nsubj	_	_
9	și-	și-	PRON	Px3--d--y-----w	Case=Dat|Person=3|PronType=Prs|Reflex=Yes|Strength=Weak|Variant=Short	15	expl:poss	_	_
10	a	a	AUX	Va--3s	Number=Sing|Person=3	11	aux	_	_
11	pierdut	pierdut	VERB	Vmp--sm	Gender=Masc|Number=Sing|VerbForm=Part	0	root	_	_
12	la	la	ADP	Spsa	AdpType=Prep|Case=Acc	14	case	_	_
13	scurtă	scurtă	ADJ	Afpfsrn	Case=Nom|Definite=Ind|Degree=Pos|Gender=Fem|Number=Sing	14	amod	_	_
14	vreme	vreme	NOUN	Ncfsrn	Case=Nom|Definite=Ind|Gender=Fem|Number=Sing	11	nmod:tmod	_	_
15	resturile	resturile	NOUN	Ncfpry	Case=Nom|Definite=Def|Gender=Fem|Number=Plur	11	dobj	_	_
16	autonomiei	autonomiei	NOUN	Ncfsoy	Case=Gen|Definite=Def|Gender=Fem|Number=Sing	15	nmod	_	_
17	sale	sale	DET	Ds3fsos	Case=Gen|Gender=Fem|Number=Sing|Number[psor]=Sing|Person=3|Poss=Yes|PronType=Prs	16	amod	_	_
18	politice	politice	ADJ	Afpfson	Case=Gen|Definite=Ind|Degree=Pos|Gender=Fem|Number=Sing	16	amod	_	_
19	,	,	PUNCT	COMMA	_	21	punct	_	_
20	fiind	fiind	VERB	Vmg	VerbForm=Ger	21	auxpass	_	_
21	înglobată	înglobată	VERB	Vmp--sf	Gender=Fem|Number=Sing|VerbForm=Part	11	advcl	_	_
22	din	din	ADP	Spsa	AdpType=Prep|Case=Acc	23	case	_	_
23	punct	punct	NOUN	Ncms-n	Definite=Ind|Gender=Masc|Number=Sing	21	nmod	_	_
24	de	de	ADP	Spsa	AdpType=Prep|Case=Acc	25	case	_	_
25	vedere	vedere	NOUN	Ncfsrn	Case=Nom|Definite=Ind|Gender=Fem|Number=Sing	23	nmod	_	_
26	politic	politic	ADJ	Afpms-n	Definite=Ind|Degree=Pos|Gender=Masc|Number=Sing	23	amod	_	_
27	și	și	CONJ	Crssp	Negative=Pos	23	cc	_	_
28	administrativ	administrativ	ADJ	Afpms-n	Definite=Ind|Degree=Pos|Gender=Masc|Number=Sing	23	conj	_	_
29	Ungariei	Ungariei	PROPN	Npfsoy	Case=Gen|Definite=Def|Gender=Fem|Number=Sing	21	iobj	_	_
30	.	.	PUNCT	PERIOD	_	11	punct	_	_

~~~


~~~ conllu
# visual-style 15	bgColor:blue
# visual-style 15	fgColor:white
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 14 15 expl:poss	color:blue
1	Când	când	ADV	Rw	PronType=Int,Rel	3	advmod	_	_
2	îi	el	PRON	Pp3mpa--------w	Case=Acc|Gender=Masc|Number=Plur|Person=3|PronType=Prs|Strength=Weak	3	dobj	_	_
3	privești	privi	VERB	Vmip2s	Mood=Ind|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin	8	advcl	_	_
4	împiedicați	împiedica	VERB	Vmp--pm	Gender=Masc|Number=Plur|VerbForm=Part	3	xcomp	_	_
5	în	în	ADP	Spsa	AdpType=Prep|Case=Acc	6	case	_	_
6	fier	fier	NOUN	Ncms-n	Definite=Ind|Gender=Masc|Number=Sing	4	nmod	_	_
7	,	,	PUNCT	COMMA	_	3	punct	_	_
8	Par	părea	VERB	Vmip3p	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
9	,	,	PUNCT	COMMA	_	8	punct	_	_
10	el	el	PRON	Pp3-pd--------w	Case=Dat|Number=Plur|Person=3|PronType=Prs|Strength=Weak	8	nsubj	_	_
11	de	de	ADP	Spsa	AdpType=Prep|Case=Acc	12	case	_	_
12	bronz	bronz	NOUN	Ncms-n	Definite=Ind|Gender=Masc|Number=Sing	8	xcomp	_	_
13	și	și	CONJ	Crssp	Negative=Pos	8	cc	_	_
14	vitele	vită	NOUN	Ncfpry	Case=Nom|Definite=Def|Gender=Fem|Number=Plur	10	remnant	_	_
15	-i	fi	VERB	Vmip3s----y	Mood=Ind|Number=Sing|Person=3|Tense=Pres|Variant=Short|VerbForm=Fin	14	expl:poss	_	_
16	de	de	ADP	Spsa	AdpType=Prep|Case=Acc	17	case	_	_
17	piatră	piatră	NOUN	Ncfsrn	Case=Nom|Definite=Ind|Gender=Fem|Number=Sing	12	remnant	_	_
18	.	.	PUNCT	PERIOD	_	8	punct	_	_

~~~


