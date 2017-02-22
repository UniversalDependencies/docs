

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Romanian)

This relation is a language-specific subtype of [csubj]().

53 nodes (0%) are attached to their parents as `csubj:pass`.

52 instances of `csubj:pass` (98%) are left-to-right (parent precedes child).
Average distance between parent and child is 6.

The following 7 pairs of parts of speech are connected with `csubj:pass`: [ro-pos/VERB]()-[ro-pos/VERB]() (45; 85% instances), [ro-pos/VERB]()-[ro-pos/NOUN]() (3; 6% instances), [ro-pos/ADJ]()-[ro-pos/NOUN]() (1; 2% instances), [ro-pos/ADJ]()-[ro-pos/VERB]() (1; 2% instances), [ro-pos/ADV]()-[ro-pos/VERB]() (1; 2% instances), [ro-pos/VERB]()-[ro-pos/ADJ]() (1; 2% instances), [ro-pos/VERB]()-[ro-pos/ADV]() (1; 2% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 7 csubj:pass	color:blue
1	Se	sine	PRON	Px3--a--------w	Case=Acc|Person=3|PronType=Prs|Reflex=Yes|Strength=Weak	2	expl:pass	_	_
2	recomandă	recomanda	VERB	Vmis3s	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	0	root	_	_
3	ca	ca	ADV	Rc	_	7	mark	_	_
4	sistemul	sistem	NOUN	Ncmsry	Case=Acc,Nom|Definite=Def|Gender=Masc|Number=Sing	7	nsubj:pass	_	_
5	să	să	PART	Qs	Mood=Sub	7	mark	_	_
6	fie	fi	AUX	Vasp3	Mood=Sub|Person=3|Tense=Pres|VerbForm=Fin	7	aux:pass	_	_
7	armat	arma	VERB	Vmp--sm	Gender=Masc|Number=Sing|VerbForm=Part	2	csubj:pass	_	_
8	înainte	înainte	ADV	Rgp	Degree=Pos	10	case	_	_
9	de	de	ADP	Spsa	AdpType=Prep|Case=Acc	8	fixed	_	_
10	începerea	începere	NOUN	Ncfsry	Case=Acc,Nom|Definite=Def|Gender=Fem|Number=Sing	7	obl	_	_
11	perfuziei	perfuzie	NOUN	Ncfsoy	Case=Dat,Gen|Definite=Def|Gender=Fem|Number=Sing	10	nmod	_	SpaceAfter=No
12	.	.	PUNCT	PERIOD	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 7 csubj:pass	color:blue
1	Se	sine	PRON	Px3--a--------w	Case=Acc|Person=3|PronType=Prs|Reflex=Yes|Strength=Weak	2	expl:pass	_	_
2	consideră	considera	VERB	Vmis3s	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	0	root	_	_
3	că	că	SCONJ	Csssp	Polarity=Pos	7	mark	_	_
4	aceste	acest	DET	Dd3fpr---e	Case=Acc,Nom|Gender=Fem|Number=Plur|Person=3|Position=Prenom|PronType=Dem	5	det	_	_
5	modificări	modificare	NOUN	Ncfp-n	Definite=Ind|Gender=Fem|Number=Plur	7	nsubj	_	_
6	sunt	fi	AUX	Vmip3p	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	7	cop	_	_
7	consecința	consecință	NOUN	Ncfsry	Case=Acc,Nom|Definite=Def|Gender=Fem|Number=Sing	2	csubj:pass	_	_
8	unei	un	DET	Tifso	Case=Dat,Gen|Gender=Fem|Number=Sing|PronType=Ind	9	det	_	_
9	reduceri	reducere	NOUN	Ncfson	Case=Dat,Gen|Definite=Ind|Gender=Fem|Number=Sing	7	nmod	_	ToDo=nmod
10	a	al	DET	Tsfs	Gender=Fem|Number=Sing|Poss=Yes|PronType=Prs	11	det	_	_
11	creșterii	creștere	NOUN	Ncfsoy	Case=Dat,Gen|Definite=Def|Gender=Fem|Number=Sing	9	nmod	_	_
12	ponderale	ponderal	ADJ	Afpfson	Case=Dat,Gen|Definite=Ind|Degree=Pos|Gender=Fem|Number=Sing	11	amod	_	_
13	materne	matern	ADJ	Afpfson	Case=Dat,Gen|Definite=Ind|Degree=Pos|Gender=Fem|Number=Sing	11	amod	_	SpaceAfter=No
14	.	.	PUNCT	PERIOD	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 25	bgColor:blue
# visual-style 25	fgColor:white
# visual-style 17	bgColor:blue
# visual-style 17	fgColor:white
# visual-style 17 25 csubj:pass	color:blue
1	(	(	PUNCT	LPAR	_	2	punct	_	SpaceAfter=No
2	23	23	NUM	Mc-p-d	Number=Plur|NumForm=Digit|NumType=Card	17	parataxis	_	SpaceAfter=No
3	)	)	PUNCT	RPAR	_	2	punct	_	_
4	În	în	ADP	Spsa	AdpType=Prep|Case=Acc	5	case	_	_
5	vederea	vedere	NOUN	Ncfsry	Case=Acc,Nom|Definite=Def|Gender=Fem|Number=Sing	17	obl	_	_
6	armonizării	armonizare	NOUN	Ncfsoy	Case=Dat,Gen|Definite=Def|Gender=Fem|Number=Sing	5	nmod	_	_
7	și	și	CCONJ	Crssp	Polarity=Pos	8	cc	_	_
8	facilitării	facilitare	NOUN	Ncfsoy	Case=Dat,Gen|Definite=Def|Gender=Fem|Number=Sing	6	conj	_	_
9	procedurilor	procedură	NOUN	Ncfpoy	Case=Dat,Gen|Definite=Def|Gender=Fem|Number=Plur	6	nmod	_	_
10	de	de	ADP	Spsa	AdpType=Prep|Case=Acc	11	case	_	_
11	import	import	NOUN	Ncms-n	Definite=Ind|Gender=Masc|Number=Sing	9	nmod	_	_
12	la	la	ADP	Spsa	AdpType=Prep|Case=Acc	13	case	_	_
13	frontierele	frontieră	NOUN	Ncfpry	Case=Acc,Nom|Definite=Def|Gender=Fem|Number=Plur	11	nmod	_	_
14	Comunității	comunitate	NOUN	Ncfsoy	Case=Dat,Gen|Definite=Def|Gender=Fem|Number=Sing	13	nmod	_	SpaceAfter=No
15	,	,	PUNCT	COMMA	_	5	punct	_	_
16	este	fi	AUX	Vmip3s	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	17	cop	_	_
17	necesar	necesar	ADV	Rgp	Degree=Pos	0	root	_	_
18	ca	ca	ADV	Rc	_	25	mark	_	_
19	fiecare	fiecare	DET	Di3-sr---e	Case=Acc,Nom|Number=Sing|Person=3|Position=Prenom|PronType=Ind	20	det	_	_
20	lot	lot	NOUN	Ncms-n	Definite=Ind|Gender=Masc|Number=Sing	25	nsubj:pass	_	_
21	destinat	destina	VERB	Vmp--sm	Gender=Masc|Number=Sing|VerbForm=Part	20	acl	_	_
22	importului	import	NOUN	Ncmsoy	Case=Dat,Gen|Definite=Def|Gender=Masc|Number=Sing	21	iobj	_	_
23	să	să	PART	Qs	Mood=Sub	25	mark	_	_
24	fie	fi	AUX	Vasp3	Mood=Sub|Person=3|Tense=Pres|VerbForm=Fin	25	aux:pass	_	_
25	însoțit	însoți	VERB	Vmp--sm	Gender=Masc|Number=Sing|VerbForm=Part	17	csubj:pass	_	_
26	de	de	ADP	Spsa	AdpType=Prep|Case=Acc	27	case	_	_
27	certificatul	certificat	NOUN	Ncmsry	Case=Acc,Nom|Definite=Def|Gender=Masc|Number=Sing	25	nmod:agent	_	_
28	sanitar-veterinar	sanitar-veterinar	ADJ	Afpms-n	Definite=Ind|Degree=Pos|Gender=Masc|Number=Sing	27	amod	_	_
29	corespunzător	corespunzător	ADJ	Afpms-n	Definite=Ind|Degree=Pos|Gender=Masc|Number=Sing	27	amod	_	SpaceAfter=No
30	.	.	PUNCT	PERIOD	_	17	punct	_	_

~~~


