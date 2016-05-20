

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Romanian)

This relation is a language-specific subtype of [expl]().
There are also 3 other language-specific subtypes of `expl`: [expl:impers](), [expl:pass](), [expl:pv]().

384 nodes (0%) are attached to their parents as `expl:poss`.

360 instances of `expl:poss` (94%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.33333333333333.

The following 4 pairs of parts of speech are connected with `expl:poss`: [ro-pos/VERB]()-[ro-pos/PRON]() (360; 94% instances), [ro-pos/VERB]()-[ro-pos/CONJ]() (20; 5% instances), [ro-pos/ADJ]()-[ro-pos/PRON]() (3; 1% instances), [ro-pos/NOUN]()-[ro-pos/VERB]() (1; 0% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 expl:poss	color:blue
1	Avu	avea	VERB	Vmis3p	Mood=Ind|Number=Plur|Person=3|Tense=Past|VerbForm=Fin	0	root	_	_
2	timp	timp	NOUN	Ncms-n	Definite=Ind|Gender=Masc|Number=Sing	1	dobj	_	_
3	să	să	PART	Qs	Mood=Sub	5	mark	_	_
4	-i	el	PRON	Pp3-sd--y-----w	Case=Dat|Number=Sing|Person=3|PronType=Prs|Strength=Weak|Variant=Short	5	expl:poss	_	_
5	învețe	învăța	VERB	Vmsp3	Mood=Sub|Person=3|Tense=Pres|VerbForm=Fin	1	advcl	_	_
6	fiecare	fiecare	DET	Di3-sr---e	Case=Acc,Nom|Number=Sing|Person=3|Position=Prenom|PronType=Ind	7	det	_	_
7	detaliu	detaliu	NOUN	Ncms-n	Definite=Ind|Gender=Masc|Number=Sing	5	dobj	_	_
8	al	al	DET	Tsms	Gender=Masc|Number=Sing|Poss=Yes|PronType=Prs	9	det	_	_
9	mâinii	mână	NOUN	Ncfsoy	Case=Dat,Gen|Definite=Def|Gender=Fem|Number=Sing	7	nmod	_	_
10	.	.	PUNCT	PERIOD	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 6 expl:poss	color:blue
1	le	el	PRON	Pp3-pd--------w	Case=Dat|Number=Plur|Person=3|PronType=Prs|Strength=Weak	2	iobj	_	_
2	răpi	răpi	VERB	Vmm-2s	Mood=Imp|Number=Sing|Person=2|VerbForm=Fin	0	root	_	_
3	șansa	șansă	NOUN	Ncfsry	Case=Acc,Nom|Definite=Def|Gender=Fem|Number=Sing	2	dobj	_	_
4	de	de	ADP	Spsa	AdpType=Prep|Case=Acc	7	case	_	_
5	a-	avea	AUX	Va--3s	Number=Sing|Person=3	7	mark	_	_
6	și	și	CONJ	Crssp	Negative=Pos	7	expl:poss	_	_
7	da	da	VERB	Vmnp	Tense=Pres|VerbForm=Inf	3	acl	_	_
8	duhul	duh	NOUN	Ncmsry	Case=Acc,Nom|Definite=Def|Gender=Masc|Number=Sing	7	dobj	_	_
9	,	,	PUNCT	COMMA	_	12	punct	_	_
10	în	în	ADP	Spsa	AdpType=Prep|Case=Acc	12	case	_	_
11	bună	bun	ADJ	Afpfsrn	Case=Acc,Nom|Definite=Ind|Degree=Pos|Gender=Fem|Number=Sing	12	amod	_	_
12	înțelegere	înțelegere	NOUN	Ncfsrn	Case=Acc,Nom|Definite=Ind|Gender=Fem|Number=Sing	7	nmod	_	_
13	,	,	PUNCT	COMMA	_	12	punct	_	_
14	prin	prin	ADP	Spsa	AdpType=Prep|Case=Acc	15	case	_	_
15	Artă	artă	NOUN	Ncfsrn	Case=Acc,Nom|Definite=Ind|Gender=Fem|Number=Sing	7	nmod	_	_
16	.	.	PUNCT	PERIOD	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 20	bgColor:blue
# visual-style 20	fgColor:white
# visual-style 22	bgColor:blue
# visual-style 22	fgColor:white
# visual-style 22 20 expl:poss	color:blue
1	Numele	nume	NOUN	Ncmsry	Case=Acc,Nom|Definite=Def|Gender=Masc|Number=Sing	4	nsubjpass	_	_
2	îți	tu	PRON	Pp2-sd--------w	Case=Dat|Number=Sing|Person=2|PronType=Prs|Strength=Weak	4	expl:poss	_	_
3	era	fi	VERB	Vmii3s	Mood=Ind|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin	4	auxpass	_	_
4	scos	scos	ADJ	Afpms-n	Definite=Ind|Degree=Pos|Gender=Masc|Number=Sing	0	root	_	_
5	din	din	ADP	Spsa	AdpType=Prep|Case=Acc	6	case	_	_
6	arhive	arhivă	NOUN	Ncfp-n	Definite=Ind|Gender=Fem|Number=Plur	4	nmod	_	_
7	,	,	PUNCT	COMMA	_	4	punct	_	_
8	orice	orice	DET	Di3--r---e	Case=Acc,Nom|Person=3|Position=Prenom|PronType=Ind	9	det	_	_
9	urmă	urmă	NOUN	Ncfsrn	Case=Acc,Nom|Definite=Ind|Gender=Fem|Number=Sing	16	nsubjpass	_	_
10	a	al	DET	Tsfs	Gender=Fem|Number=Sing|Poss=Yes|PronType=Prs	11	det	_	_
11	tot	tot	PRON	Pi3msr	Case=Acc,Nom|Gender=Masc|Number=Sing|Person=3|PronType=Ind	9	nmod	_	_
12	ce	ce	PRON	Pw3--r	Case=Acc,Nom|Person=3|PronType=Int,Rel	13	dobj	_	_
13	făcuseși	face	VERB	Vmil2s	Mood=Ind|Number=Sing|Person=2|Tense=Pqp|VerbForm=Fin	11	acl	_	_
14	vreodată	vreodată	ADV	Rgp	Degree=Pos	13	advmod	_	_
15	era	fi	VERB	Vmii3s	Mood=Ind|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin	16	auxpass	_	_
16	ștearsă	șters	ADJ	Afpfsrn	Case=Acc,Nom|Definite=Ind|Degree=Pos|Gender=Fem|Number=Sing	4	conj	_	_
17	,	,	PUNCT	COMMA	_	4	punct	_	_
18	existența	existență	NOUN	Ncfsry	Case=Acc,Nom|Definite=Def|Gender=Fem|Number=Sing	22	nsubjpass	_	_
19	însăși	însumi	DET	Dh3fsr	Case=Acc,Nom|Gender=Fem|Number=Sing|Person=3|PronType=Emp	18	det	_	_
20	îți	tu	PRON	Pp2-sd--------w	Case=Dat|Number=Sing|Person=2|PronType=Prs|Strength=Weak	22	expl:poss	_	_
21	era	fi	VERB	Vmii3s	Mood=Ind|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin	22	auxpass	_	_
22	negată	negat	ADJ	Afpfsrn	Case=Acc,Nom|Definite=Ind|Degree=Pos|Gender=Fem|Number=Sing	4	conj	_	_
23	și	și	CONJ	Crssp	Negative=Pos	22	cc	_	_
24	pe	pe	ADP	Spsa	AdpType=Prep|Case=Acc	26	advmod	_	_
25	urmă	urmă	NOUN	Ncfsrn	Case=Acc,Nom|Definite=Ind|Gender=Fem|Number=Sing	24	mwe	_	_
26	uitată	uitat	ADJ	Afpfsrn	Case=Acc,Nom|Definite=Ind|Degree=Pos|Gender=Fem|Number=Sing	22	conj	_	_
27	.	.	PUNCT	PERIOD	_	4	punct	_	_

~~~


