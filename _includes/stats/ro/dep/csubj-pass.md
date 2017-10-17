

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
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 8 csubj:pass	color:blue
1	"	"	PUNCT	DBLQ	_	4	punct	_	SpaceAfter=No
2	S-	sine	PRON	Px3--a--y-----w	Case=Acc|Person=3|PronType=Prs|Reflex=Yes|Strength=Weak|Variant=Short	4	expl:pass	_	SpaceAfter=No
3	a	avea	AUX	Va--3s	Number=Sing|Person=3	4	aux	_	_
4	stabilit	stabili	VERB	Vmp--sm	Gender=Masc|Number=Sing|VerbForm=Part	0	root	_	_
5	că	că	SCONJ	Csssp	Polarity=Pos	8	mark	_	_
6	cel	cel	DET	Tdmsr	Case=Acc,Nom|Gender=Masc|Number=Sing|PronType=Dem	8	det	_	_
7	mai	mai	ADV	Rp	_	8	advmod	_	_
8	bine	bine	ADV	Rgp	Degree=Pos	4	csubj:pass	_	_
9	este	fi	AUX	Vmip3s	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	8	cop	_	_
10	să	să	PART	Qs	Mood=Sub	11	mark	_	_
11	jucăm	juca	VERB	Vmip1p	Mood=Ind|Number=Plur|Person=1|Tense=Pres|VerbForm=Fin	8	csubj	_	_
12	în	în	ADP	Spsa	AdpType=Prep|Case=Acc	13	case	_	_
13	Sala	sală	NOUN	Ncfsry	Case=Acc,Nom|Definite=Def|Gender=Fem|Number=Sing	11	obl	_	_
14	B.N.R.	B.N.R.	NOUN	Yn	Abbr=Yes	13	nmod	_	SpaceAfter=No
15	"	"	PUNCT	DBLQ	_	4	punct	_	SpaceAfter=No
16	,	,	PUNCT	COMMA	_	18	punct	_	_
17	a	avea	AUX	Va--3s	Number=Sing|Person=3	18	aux	_	_
18	declarat	declara	VERB	Vmp--sm	Gender=Masc|Number=Sing|VerbForm=Part	4	parataxis	_	_
19	căpitanul	căpitan	NOUN	Ncmsry	Case=Acc,Nom|Definite=Def|Gender=Masc|Number=Sing	18	nsubj	_	_
20	echipei	echipă	NOUN	Ncfsoy	Case=Dat,Gen|Definite=Def|Gender=Fem|Number=Sing	19	nmod	_	SpaceAfter=No
21	,	,	PUNCT	COMMA	_	22	punct	_	_
22	Otilia	Otilia	PROPN	Np	_	19	appos	_	_
23	Bădescu	Bădescu	PROPN	Np	_	22	flat	_	SpaceAfter=No
24	.	.	PUNCT	PERIOD	_	4	punct	_	_

~~~


