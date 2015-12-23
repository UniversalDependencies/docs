

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Romanian)

This relation is universal.

7 nodes (0%) are attached to their parents as `dep`.

6 instances of `dep` (86%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.28571428571429.

The following 5 pairs of parts of speech are connected with `dep`: [ro-pos/NOUN]()-[ro-pos/NOUN]() (3; 43% instances), [ro-pos/NOUN]()-[ro-pos/PRON]() (1; 14% instances), [ro-pos/VERB]()-[ro-pos/ADV]() (1; 14% instances), [ro-pos/VERB]()-[ro-pos/NOUN]() (1; 14% instances), [ro-pos/VERB]()-[ro-pos/VERB]() (1; 14% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 4 dep	color:blue
1	Caracteristicile	caracteristică	NOUN	Ncfpry	Case=Nom|Definite=Def|Gender=Fem|Number=Plur	0	root	_	_
2	produsului	produs	NOUN	Ncmsoy	Case=Gen|Definite=Def|Gender=Masc|Number=Sing	1	nmod	_	_
3	(	(	PUNCT	LPAR	_	4	punct	_	_
4	produselor	produs	NOUN	Ncfpoy	Case=Gen|Definite=Def|Gender=Fem|Number=Plur	2	dep	_	_
5	)	)	PUNCT	RPAR	_	4	punct	_	_
6	care	care	PRON	Pw3--r	Case=Nom|Person=3|PronType=Int,Rel	7	nsubj	_	_
7	urmează	urma	VERB	Vmip3	Mood=Ind|Person=3|Tense=Pres|VerbForm=Fin	2	acl	_	_
8	să	să	PART	Qs	Mood=Sub	10	mark	_	_
9	fie	fi	AUX	Vasp3	Mood=Sub|Person=3|Tense=Pres|VerbForm=Fin	10	auxpass	_	_
10	cântărit	cântări	VERB	Vmp--sm	Gender=Masc|Number=Sing|VerbForm=Part	7	ccomp	_	_
11	(	(	PUNCT	LPAR	_	12	punct	_	_
12	e	e	NOUN	Ncm--n	Definite=Ind|Gender=Masc	10	dep	_	_
13	)	)	PUNCT	RPAR	_	12	punct	_	_
14	.	.	PUNCT	PERIOD	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 13 2 dep	color:blue
1	)	)	PUNCT	RPAR	_	2	punct	_	_
2	etc.	etc.	ADV	Yr	Abbr=Yes	13	dep	_	_
3	În	În	ADP	Spsa	AdpType=Prep|Case=Acc	5	case	_	_
4	ultimele	ultimele	NUM	Mofprly	Case=Nom|Definite=Def|Gender=Fem|Number=Plur|NumForm=Word|NumType=Card	5	amod	_	AltTag=NUM-ADJ
5	decenii	decenii	NOUN	Ncfp-n	Definite=Ind|Gender=Fem|Number=Plur	13	nmod:tmod	_	_
6	,	,	PUNCT	COMMA	_	5	punct	_	_
7	în	în	ADP	Spsa	AdpType=Prep|Case=Acc	10	case	_	_
8	mai	mai	ADV	Rp	_	9	advmod	_	_
9	multe	multe	DET	Di3fp	Gender=Fem|Number=Plur|Person=3|PronType=Ind	10	amod	_	_
10	limbi	limbi	NOUN	Ncfp-n	Definite=Ind|Gender=Fem|Number=Plur	13	nmod	_	_
11	s-	s-	PRON	Px3--a--y-----w	Case=Acc|Person=3|PronType=Prs|Reflex=Yes|Strength=Weak|Variant=Short	13	expl:pv	_	_
12	a	a	AUX	Va--3s	Number=Sing|Person=3	13	aux	_	_
13	trecut	trecut	VERB	Vmp--sm	Gender=Masc|Number=Sing|VerbForm=Part	0	root	_	_
14	la	la	ADP	Spsa	AdpType=Prep|Case=Acc	15	case	_	_
15	înlocuirea	înlocuirea	NOUN	Ncfsry	Case=Nom|Definite=Def|Gender=Fem|Number=Sing	13	iobj	_	_
16	formei	formei	NOUN	Ncfsoy	Case=Gen|Definite=Def|Gender=Fem|Number=Sing	15	nmod	_	_
17	care	care	PRON	Pw3--r	Case=Nom|Person=3|PronType=Int,Rel	18	nsubj	_	_
18	derivă	derivă	VERB	Vmis3s	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	16	acl	_	_
19	din	din	ADP	Spsa	AdpType=Prep|Case=Acc	21	case	_	_
20	„	„	PUNCT	DBLQ	_	21	punct	_	_
21	rumân	rumân	NOUN	Ncms-n	Definite=Ind|Gender=Masc|Number=Sing	18	iobj	_	_
22	”	”	PUNCT	DBLQ	_	21	punct	_	_
23	în	în	ADP	Spsa	AdpType=Prep|Case=Acc	24	case	_	_
24	cea	cea	PRON	Pd3fsr	Case=Nom|Gender=Fem|Number=Sing|Person=3|PronType=Dem	18	iobj	_	_
25	care	care	PRON	Pw3--r	Case=Nom|Person=3|PronType=Int,Rel	26	nsubj	_	_
26	derivă	derivă	VERB	Vmis3s	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	24	acl	_	_
27	din	din	ADP	Spsa	AdpType=Prep|Case=Acc	29	case	_	_
28	„	„	PUNCT	DBLQ	_	29	punct	_	_
29	român	român	NOUN	Ncms-n	Definite=Ind|Gender=Masc|Number=Sing	26	iobj	_	_
30	”	”	PUNCT	DBLQ	_	29	punct	_	_
31	.	.	PUNCT	PERIOD	_	13	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 4 dep	color:blue
1	4	4	NUM	Mc	NumType=Card	15	parataxis	_	_
2	Testul	test	NOUN	Ncmsry	Case=Nom|Definite=Def|Gender=Masc|Number=Sing	16	nsubjpass	_	_
3	(	(	PUNCT	LPAR	_	4	punct	_	_
4	ele	el	PRON	Pp3fpr--------s	Case=Nom|Gender=Fem|Number=Plur|Person=3|PronType=Prs|Strength=Strong	2	dep	_	_
5	)	)	PUNCT	RPAR	_	4	punct	_	_
6	efectuat	efectua	VERB	Vmp--sm	Gender=Masc|Number=Sing|VerbForm=Part	2	acl	_	_
7	(	(	PUNCT	LPAR	_	8	punct	_	_
8	e	fi	VERB	Vmip3s	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	6	dep	_	_
9	)	)	PUNCT	RPAR	_	8	punct	_	_
10	,	,	PUNCT	COMMA	_	2	punct	_	_
11	rezultatele	rezultat	NOUN	Ncfpry	Case=Nom|Definite=Def|Gender=Fem|Number=Plur	2	conj	_	_
12	acestora	acesta	PRON	Pd3-po	Case=Gen|Number=Plur|Person=3|PronType=Dem	11	nmod	_	_
13	și	și	CONJ	Crssp	Negative=Pos	2	cc	_	_
14	vaccinările	vaccinare	NOUN	Ncfpry	Case=Nom|Definite=Def|Gender=Fem|Number=Plur	2	conj	_	_
15	trebuie	trebui	VERB	Vmip3	Mood=Ind|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
16	înscrise	înscrie	VERB	Vmp--pf	Gender=Fem|Number=Plur|VerbForm=Part	15	csubj	_	_
17	în	în	ADP	Spsa	AdpType=Prep|Case=Acc	18	case	_	_
18	documentul	document	NOUN	Ncmsry	Case=Nom|Definite=Def|Gender=Masc|Number=Sing	16	nmod:pmod	_	_
19	de	de	ADP	Spsa	AdpType=Prep|Case=Acc	20	case	_	_
20	identificare	identificare	NOUN	Ncfsrn	Case=Nom|Definite=Ind|Gender=Fem|Number=Sing	18	nmod	_	_
21	(	(	PUNCT	LPAR	_	22	punct	_	_
22	pașaport	pașaport	NOUN	Ncms-n	Definite=Ind|Gender=Masc|Number=Sing	18	appos	_	_
23	)	)	PUNCT	RPAR	_	22	punct	_	_
24	.	.	PUNCT	PERIOD	_	15	punct	_	_

~~~


