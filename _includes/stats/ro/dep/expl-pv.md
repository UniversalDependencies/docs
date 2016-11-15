

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Romanian)

This relation is a language-specific subtype of [expl]().
There are also 3 other language-specific subtypes of `expl`: [expl:impers](), [expl:pass](), [expl:poss]().

2257 nodes (1%) are attached to their parents as `expl:pv`.

2150 instances of `expl:pv` (95%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.26761187416925.

The following 4 pairs of parts of speech are connected with `expl:pv`: [ro-pos/VERB]()-[ro-pos/PRON]() (2254; 100% instances), [ro-pos/PROPN]()-[ro-pos/PRON]() (1; 0% instances), [ro-pos/VERB]()-[ro-pos/NOUN]() (1; 0% instances), [ro-pos/VERB]()-[ro-pos/PART]() (1; 0% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 expl:pv	color:blue
1	Toate	tot	DET	Di3fpr	Case=Acc,Nom|Gender=Fem|Number=Plur|Person=3|PronType=Ind	2	det	_	_
2	speranțele	speranță	NOUN	Ncfpry	Case=Acc,Nom|Definite=Def|Gender=Fem|Number=Plur	5	nsubj	_	_
3	lui	lui	DET	Ds3---s	Number[psor]=Sing|Person=3|Poss=Yes|PronType=Prs	2	nmod	_	_
4	se	sine	PRON	Px3--a--------w	Case=Acc|Person=3|PronType=Prs|Reflex=Yes|Strength=Weak	5	expl:pv	_	_
5	prăbușiră	prăbuși	VERB	Vmis3p	Mood=Ind|Number=Plur|Person=3|Tense=Past|VerbForm=Fin	0	root	_	_
6	din	din	ADP	Spsa	AdpType=Prep|Case=Acc	5	advmod	_	_
7	nou	nou	ADJ	Afpms-n	Definite=Ind|Degree=Pos|Gender=Masc|Number=Sing	6	mwe	_	_
8	.	.	PUNCT	PERIOD	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 15	bgColor:blue
# visual-style 15	fgColor:white
# visual-style 16	bgColor:blue
# visual-style 16	fgColor:white
# visual-style 16 15 expl:pv	color:blue
1	Valea	vale	NOUN	Ncfsry	Case=Acc,Nom|Definite=Def|Gender=Fem|Number=Sing	16	nsubj	_	_
2	largă	larg	ADJ	Afpfsrn	Case=Acc,Nom|Definite=Ind|Degree=Pos|Gender=Fem|Number=Sing	1	amod	_	_
3	a	al	DET	Tsfs	Gender=Fem|Number=Sing|Poss=Yes|PronType=Prs	4	det	_	_
4	Moldovii	Moldovii	PROPN	Np	_	1	nmod	_	_
5	,	,	PUNCT	COMMA	_	7	punct	_	_
6	cu	cu	ADP	Spsa	AdpType=Prep|Case=Acc	7	case	_	_
7	apa	apă	NOUN	Ncfsry	Case=Acc,Nom|Definite=Def|Gender=Fem|Number=Sing	1	nmod	_	_
8	sclipitoare	sclipitor	ADJ	Afpf--n	Definite=Ind|Degree=Pos|Gender=Fem	7	amod	_	_
9	ca	ca	ADV	Rc	_	11	advmod	_	_
10	o	un	DET	Tifsr	Case=Acc,Nom|Gender=Fem|Number=Sing|PronType=Ind	11	det	_	_
11	cordică	cordică	NOUN	Ncfsrn	Case=Acc,Nom|Definite=Ind|Gender=Fem|Number=Sing	7	nmod	_	_
12	de	de	ADP	Spsa	AdpType=Prep|Case=Acc	13	case	_	_
13	argint	argint	NOUN	Ncms-n	Definite=Ind|Gender=Masc|Number=Sing	11	nmod	_	_
14	,	,	PUNCT	COMMA	_	7	punct	_	_
15	să	să	PART	Qs	Mood=Sub	16	expl:pv	_	_
16	întindea	întinde	VERB	Vmii3s	Mood=Ind|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin	0	root	_	_
17	dinaintea	dinaintea	ADP	Spsg	AdpType=Prep|Case=Gen	18	case	_	_
18	ochilor	ochi	NOUN	Ncmpoy	Case=Dat,Gen|Definite=Def|Gender=Masc|Number=Plur	16	nmod	_	_
19	noștri	meu	DET	Ds1mp-p	Gender=Masc|Number=Plur|Number[psor]=Plur|Person=1|Poss=Yes|PronType=Prs	18	det	_	_
20	.	.	PUNCT	PERIOD	_	16	punct	_	_

~~~


~~~ conllu
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 17	bgColor:blue
# visual-style 17	fgColor:white
# visual-style 17 14 expl:pv	color:blue
1	în	în	ADP	Spsa	AdpType=Prep|Case=Acc	4	case	_	_
2	ciuda	ciudă	NOUN	Ncfsry	Case=Acc,Nom|Definite=Def|Gender=Fem|Number=Sing	1	mwe	_	_
3	unei	un	DET	Tifso	Case=Dat,Gen|Gender=Fem|Number=Sing|PronType=Ind	4	det	_	_
4	atmosfere	atmosferă	NOUN	Ncfson	Case=Dat,Gen|Definite=Ind|Gender=Fem|Number=Sing	17	cc	_	_
5	inițiale	inițial	ADJ	Afpfson	Case=Dat,Gen|Definite=Ind|Degree=Pos|Gender=Fem|Number=Sing	4	amod	_	_
6	ostile	ostil	ADJ	Afpfson	Case=Dat,Gen|Definite=Ind|Degree=Pos|Gender=Fem|Number=Sing	4	amod	_	_
7	,	,	PUNCT	COMMA	_	9	punct	_	_
8	cu	cu	ADP	Spsa	AdpType=Prep|Case=Acc	9	case	_	_
9	demonstrații	demonstrație	NOUN	Ncfp-n	Definite=Ind|Gender=Fem|Number=Plur	4	nmod	_	_
10	organizate	organiza	VERB	Vmp--pf	Gender=Fem|Number=Plur|VerbForm=Part	9	acl	_	_
11	de	de	ADP	Spsa	AdpType=Prep|Case=Acc	12	case	_	_
12	regim	regim	NOUN	Ncms-n	Definite=Ind|Gender=Masc|Number=Sing	10	nmod:agent	_	_
13	,	,	PUNCT	COMMA	_	4	punct	_	_
14	discuțiile	discuție	NOUN	Ncfpry	Case=Acc,Nom|Definite=Def|Gender=Fem|Number=Plur	17	expl:pv	_	_
15	s-	sine	PRON	Px3--a--y-----w	Case=Acc|Person=3|PronType=Prs|Reflex=Yes|Strength=Weak|Variant=Short	17	expl:pv	_	_
16	au	avea	AUX	Va--3p	Number=Plur|Person=3	17	aux	_	_
17	încheiat	încheia	VERB	Vmp--sm	Gender=Masc|Number=Sing|VerbForm=Part	0	root	_	_
18	pe	pe	ADP	Spsa	AdpType=Prep|Case=Acc	20	case	_	_
19	13	13	NUM	Mc-p-d	Number=Plur|NumForm=Digit|NumType=Card	20	nummod	_	_
20	noiembrie	noiembrie	NOUN	Ncms-n	Definite=Ind|Gender=Masc|Number=Sing	17	nmod	_	_
21	cu	cu	ADP	Spsa	AdpType=Prep|Case=Acc	23	case	_	_
22	un	un	DET	Timsr	Case=Acc,Nom|Gender=Masc|Number=Sing|PronType=Ind	23	det	_	_
23	acord	acord	NOUN	Ncms-n	Definite=Ind|Gender=Masc|Number=Sing	17	nmod	_	_
24	ca	ca	ADV	Rc	_	30	mark	_	_
25	reprezentanții	reprezentant	NOUN	Ncmpry	Case=Acc,Nom|Definite=Def|Gender=Masc|Number=Plur	30	nsubj	_	_
26	Adunării	adunare	NOUN	Ncfsoy	Case=Dat,Gen|Definite=Def|Gender=Fem|Number=Sing	25	nmod	_	_
27	Naționale	național	ADJ	Afpfson	Case=Dat,Gen|Definite=Ind|Degree=Pos|Gender=Fem|Number=Sing	26	amod	_	_
28	să	să	PART	Qs	Mood=Sub	24	mwe	_	_
29	se	sine	PRON	Px3--a--------w	Case=Acc|Person=3|PronType=Prs|Reflex=Yes|Strength=Weak	30	expl:pv	_	_
30	întâlnească	întâlni	VERB	Vmsp3	Mood=Sub|Person=3|Tense=Pres|VerbForm=Fin	23	acl	_	_
31	pentru	pentru	ADP	Spsa	AdpType=Prep|Case=Acc	32	case	_	_
32	convorbiri	convorbire	NOUN	Ncfp-n	Definite=Ind|Gender=Fem|Number=Plur	30	advcl	_	_
33	directe	direct	ADJ	Afpfp-n	Definite=Ind|Degree=Pos|Gender=Fem|Number=Plur	32	amod	_	_
34	cu	cu	ADP	Spsa	AdpType=Prep|Case=Acc	35	case	_	_
35	Aristide	Aristide	PROPN	Np	_	30	nmod	_	_
36	.	.	PUNCT	PERIOD	_	17	punct	_	_

~~~


