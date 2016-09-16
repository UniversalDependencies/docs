

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Romanian)

This relation is universal.

16 nodes (0%) are attached to their parents as `dep`.

13 instances of `dep` (81%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.25.

The following 8 pairs of parts of speech are connected with `dep`: [ro-pos/NOUN]()-[ro-pos/NOUN]() (4; 25% instances), [ro-pos/NOUN]()-[ro-pos/PRON]() (4; 25% instances), [ro-pos/VERB]()-[ro-pos/INTJ]() (2; 13% instances), [ro-pos/VERB]()-[ro-pos/NOUN]() (2; 13% instances), [ro-pos/NOUN]()-[ro-pos/ADJ]() (1; 6% instances), [ro-pos/NOUN]()-[ro-pos/INTJ]() (1; 6% instances), [ro-pos/PROPN]()-[ro-pos/DET]() (1; 6% instances), [ro-pos/VERB]()-[ro-pos/VERB]() (1; 6% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 4 dep	color:blue
1	4	4	NUM	Mc	NumType=Card	15	parataxis	_	_
2	Testul	test	NOUN	Ncmsry	Case=Acc,Nom|Definite=Def|Gender=Masc|Number=Sing	16	nsubjpass	_	_
3	(	(	PUNCT	LPAR	_	4	punct	_	_
4	ele	el	PRON	Pp3fpr--------s	Case=Acc,Nom|Gender=Fem|Number=Plur|Person=3|PronType=Prs|Strength=Strong	2	dep	_	_
5	)	)	PUNCT	RPAR	_	4	punct	_	_
6	efectuat	efectua	VERB	Vmp--sm	Gender=Masc|Number=Sing|VerbForm=Part	2	acl	_	_
7	(	(	PUNCT	LPAR	_	8	punct	_	_
8	e	fi	VERB	Vmip3s	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	6	dep	_	_
9	)	)	PUNCT	RPAR	_	8	punct	_	_
10	,	,	PUNCT	COMMA	_	2	punct	_	_
11	rezultatele	rezultat	NOUN	Ncfpry	Case=Acc,Nom|Definite=Def|Gender=Fem|Number=Plur	2	conj	_	_
12	acestora	acesta	PRON	Pd3-po	Case=Dat,Gen|Number=Plur|Person=3|PronType=Dem	11	nmod	_	_
13	și	și	CONJ	Crssp	Negative=Pos	2	cc	_	_
14	vaccinările	vaccinare	NOUN	Ncfpry	Case=Acc,Nom|Definite=Def|Gender=Fem|Number=Plur	2	conj	_	_
15	trebuie	trebui	VERB	Vmip3	Mood=Ind|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
16	înscrise	înscrie	VERB	Vmp--pf	Gender=Fem|Number=Plur|VerbForm=Part	15	csubj	_	_
17	în	în	ADP	Spsa	AdpType=Prep|Case=Acc	18	case	_	_
18	documentul	document	NOUN	Ncmsry	Case=Acc,Nom|Definite=Def|Gender=Masc|Number=Sing	16	nmod:pmod	_	_
19	de	de	ADP	Spsa	AdpType=Prep|Case=Acc	20	case	_	_
20	identificare	identificare	NOUN	Ncfsrn	Case=Acc,Nom|Definite=Ind|Gender=Fem|Number=Sing	18	nmod	_	_
21	(	(	PUNCT	LPAR	_	22	punct	_	_
22	pașaport	pașaport	NOUN	Ncms-n	Definite=Ind|Gender=Masc|Number=Sing	18	appos	_	_
23	)	)	PUNCT	RPAR	_	22	punct	_	_
24	.	.	PUNCT	PERIOD	_	15	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 4 dep	color:blue
1	Caracteristicile	caracteristică	NOUN	Ncfpry	Case=Acc,Nom|Definite=Def|Gender=Fem|Number=Plur	0	root	_	_
2	produsului	produs	NOUN	Ncmsoy	Case=Dat,Gen|Definite=Def|Gender=Masc|Number=Sing	1	nmod	_	_
3	(	(	PUNCT	LPAR	_	4	punct	_	_
4	produselor	produs	NOUN	Ncfpoy	Case=Dat,Gen|Definite=Def|Gender=Fem|Number=Plur	2	dep	_	_
5	)	)	PUNCT	RPAR	_	4	punct	_	_
6	care	care	PRON	Pw3--r	Case=Acc,Nom|Person=3|PronType=Int,Rel	7	nsubj	_	_
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
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 12 dep	color:blue
1	Caracteristicile	caracteristică	NOUN	Ncfpry	Case=Acc,Nom|Definite=Def|Gender=Fem|Number=Plur	0	root	_	_
2	produsului	produs	NOUN	Ncmsoy	Case=Dat,Gen|Definite=Def|Gender=Masc|Number=Sing	1	nmod	_	_
3	(	(	PUNCT	LPAR	_	4	punct	_	_
4	produselor	produs	NOUN	Ncfpoy	Case=Dat,Gen|Definite=Def|Gender=Fem|Number=Plur	2	dep	_	_
5	)	)	PUNCT	RPAR	_	4	punct	_	_
6	care	care	PRON	Pw3--r	Case=Acc,Nom|Person=3|PronType=Int,Rel	7	nsubj	_	_
7	urmează	urma	VERB	Vmip3	Mood=Ind|Person=3|Tense=Pres|VerbForm=Fin	2	acl	_	_
8	să	să	PART	Qs	Mood=Sub	10	mark	_	_
9	fie	fi	AUX	Vasp3	Mood=Sub|Person=3|Tense=Pres|VerbForm=Fin	10	auxpass	_	_
10	cântărit	cântări	VERB	Vmp--sm	Gender=Masc|Number=Sing|VerbForm=Part	7	ccomp	_	_
11	(	(	PUNCT	LPAR	_	12	punct	_	_
12	e	e	NOUN	Ncm--n	Definite=Ind|Gender=Masc	10	dep	_	_
13	)	)	PUNCT	RPAR	_	12	punct	_	_
14	.	.	PUNCT	PERIOD	_	1	punct	_	_

~~~


