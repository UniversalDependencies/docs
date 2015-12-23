

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Romanian)

This relation is universal.

92 nodes (1%) are attached to their parents as `neg`.

92 instances of `neg` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.75.

The following 4 pairs of parts of speech are connected with `neg`: [ro-pos/VERB]()-[ro-pos/PART]() (87; 95% instances), [ro-pos/ADJ]()-[ro-pos/PART]() (3; 3% instances), [ro-pos/AUX]()-[ro-pos/PART]() (1; 1% instances), [ro-pos/NOUN]()-[ro-pos/PART]() (1; 1% instances).


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 8 neg	color:blue
1	Un	un	DET	Timsr	Case=Nom|Gender=Masc|Number=Sing|PronType=Ind	2	det	_	_
2	om	vrea	NOUN	Ncmsrn	Case=Nom|Definite=Ind|Gender=Masc|Number=Sing	10	nsubj	_	_
3	ca	ca	ADV	Rc	_	4	case	_	_
4	el	el	PRON	Pp3msr--------s	Case=Nom|Gender=Masc|Number=Sing|Person=3|PronType=Prs|Strength=Strong	2	nmod	_	_
5	nici	nici	ADV	Rz	PronType=Neg	6	advmod	_	_
6	doi	doi	NUM	Mcmp-l	Gender=Masc|Number=Plur|NumForm=Word|NumType=Card	7	nummod	_	_
7	ani	an	NOUN	Ncmp-n	Definite=Ind|Gender=Masc|Number=Plur	10	nmod	_	_
8	n-	nu	PART	Qz	Negative=Neg	10	neg	_	_
9	a	avea	AUX	Vaip3s	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	10	aux	_	_
10	putut	putea	VERB	Vmp--sm	Gender=Masc|Number=Sing|VerbForm=Part	0	root	_	_
11	să	să	PART	Qs	Mood=Sub	12	mark	_	_
12	stea	sta	VERB	Vmsp3	Mood=Sub|Person=3|Tense=Pres|VerbForm=Fin	10	ccomp	_	_
13	în	în	ADP	Sp	AdpType=Prep	14	case	_	_
14	Butucani	Butucani	PROPN	Np	_	12	nmod	_	_
15	.	.	PUNCT	PERIOD	_	10	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 2 neg	color:blue
1	-	-	PUNCT	DASH	_	6	punct	_	_
2	Nu	nu	PART	Qz	Negative=Neg	6	neg	_	_
3	sunt	fi	VERB	Vmip1s	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	6	cop	_	_
4	de-	de	ADP	Spsay	AdpType=Prep|Case=Acc|Variant=Short	5	case	_	_
5	adevăratelea	adevăratelea	ADV	Rgp	Degree=Pos	6	advmod	_	_
6	bolnavă	bolnav	ADJ	Afpfsrn	Case=Nom|Definite=Ind|Degree=Pos|Gender=Fem|Number=Sing	0	root	_	_
7	,	,	PUNCT	COMMA	_	10	punct	_	_
8	m-	eu	PRON	Pp1-sa--y-----w	Case=Acc|Number=Sing|Person=1|PronType=Prs|Strength=Weak|Variant=Short	10	dobj	_	_
9	a	avea	AUX	Va--3s	Number=Sing|Person=3	10	aux	_	_
10	lămurit	lămuri	VERB	Vmp--sm	Gender=Masc|Number=Sing|VerbForm=Part	6	parataxis	_	_
11	.	.	PUNCT	PERIOD	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 19	bgColor:blue
# visual-style 19	fgColor:white
# visual-style 20	bgColor:blue
# visual-style 20	fgColor:white
# visual-style 20 19 neg	color:blue
1	În	în	ADP	Sp	AdpType=Prep	2	case	_	_
2	ziua	zi	NOUN	Ncfsry	Case=Nom|Definite=Def|Gender=Fem|Number=Sing	8	nmod	_	_
3	aceea	acela	DET	Dd3fsr---o	Case=Nom|Gender=Fem|Number=Sing|Person=3|Position=Postnom|PronType=Dem	2	det	_	_
4	,	,	PUNCT	COMMA	_	2	punct	_	_
5	bucătarii	bucătar	NOUN	Ncmpry	Case=Nom|Definite=Def|Gender=Masc|Number=Plur	8	nsubj	_	_
6	curții	curte	NOUN	Ncfsoy	Case=Gen|Definite=Def|Gender=Fem|Number=Sing	5	nmod	_	_
7	se	sine	PRON	Px3--a--------w	Case=Acc|Person=3|PronType=Prs|Reflex=Yes|Strength=Weak	8	expl:pv	_	_
8	îmbătaseră	îmbăta	VERB	Vmil3p	Mood=Ind|Number=Plur|Person=3|Tense=Pqp|VerbForm=Fin	0	root	_	_
9	,	,	PUNCT	COMMA	_	8	punct	_	_
10	sau	sau	CONJ	Ccssp	Negative=Pos	8	cc	_	_
11	nu	nu	PART	Qz	Negative=Neg	12	neg	_	_
12	știu	ști	VERB	Vmip1s	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	8	conj	_	_
13	ce	ce	PRON	Pw3--r	Case=Nom|Person=3|PronType=Int,Rel	14	dobj	_	_
14	făcuseră	face	VERB	Vmil3p	Mood=Ind|Number=Plur|Person=3|Tense=Pqp|VerbForm=Fin	12	ccomp	_	_
15	,	,	PUNCT	COMMA	_	21	punct	_	_
16	că	că	CONJ	Ccssp	Negative=Pos	21	mark	_	_
17	nici	nici	ADV	Rz	PronType=Neg	18	advmod	_	_
18	focul	foc	NOUN	Ncmsry	Case=Nom|Definite=Def|Gender=Masc|Number=Sing	21	nsubjpass	_	_
19	nu	nu	PART	Qz	Negative=Neg	20	neg	_	_
20	era	fi	AUX	Vaii3s	Mood=Ind|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin	21	auxpass	_	_
21	făcut	face	VERB	Vmp--sm	Gender=Masc|Number=Sing|VerbForm=Part	14	advcl	_	_
22	pe	pe	ADP	Sp	AdpType=Prep	23	case	_	_
23	vatră	vatră	NOUN	Ncfsrn	Case=Nom|Definite=Ind|Gender=Fem|Number=Sing	21	nmod	_	_
24	.	.	PUNCT	PERIOD	_	8	punct	_	_

~~~


