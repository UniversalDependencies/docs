

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Romanian)

This relation is a language-specific subtype of [expl]().
There are also 3 other language-specific subtypes of `expl`: [expl:impers](), [expl:pass](), [expl:pv]().

589 nodes (0%) are attached to their parents as `expl:poss`.

549 instances of `expl:poss` (93%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.45840407470289.

The following 6 pairs of parts of speech are connected with `expl:poss`: [ro-pos/VERB]()-[ro-pos/PRON]() (581; 99% instances), [ro-pos/NOUN]()-[ro-pos/PRON]() (4; 1% instances), [ro-pos/ADJ]()-[ro-pos/PRON]() (1; 0% instances), [ro-pos/NOUN]()-[ro-pos/VERB]() (1; 0% instances), [ro-pos/VERB]()-[ro-pos/CONJ]() (1; 0% instances), [ro-pos/VERB]()-[ro-pos/DET]() (1; 0% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 5 expl:poss	color:blue
1	Fălcile	falcă	NOUN	Ncfpry	Case=Acc,Nom|Definite=Def|Gender=Fem|Number=Plur	6	nsubj	_	_
2	enorme	enorm	ADJ	Afpfp-n	Definite=Ind|Degree=Pos|Gender=Fem|Number=Plur	1	amod	_	_
3	și	și	CONJ	Crssp	Negative=Pos	2	cc	_	_
4	fleșcăite	fleșcăit	ADJ	Afpfp-n	Definite=Ind|Degree=Pos|Gender=Fem|Number=Plur	2	conj	_	_
5	îi	el	PRON	Pp3-sd--------w	Case=Dat|Number=Sing|Person=3|PronType=Prs|Strength=Weak	6	expl:poss	_	_
6	tremurau	tremura	VERB	Vmii3p	Mood=Ind|Number=Plur|Person=3|Tense=Imp|VerbForm=Fin	0	root	_	_
7	necontrolat	necontrolat	ADV	Rgp	Degree=Pos	6	advmod	_	_
8	.	.	PUNCT	PERIOD	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 9 expl:poss	color:blue
1	După	după	ADP	Spsa	AdpType=Prep|Case=Acc	2	case	_	_
2	ani	an	NOUN	Ncmp-n	Definite=Ind|Gender=Masc|Number=Plur	8	nmod	_	_
3	de	de	ADP	Spsa	AdpType=Prep|Case=Acc	4	case	_	_
4	străduință	străduință	NOUN	Ncfsrn	Case=Acc,Nom|Definite=Ind|Gender=Fem|Number=Sing	2	nmod	_	_
5	,	,	PUNCT	COMMA	_	2	punct	_	_
6	doar	doar	ADV	Rgp	Degree=Pos	8	advmod	_	_
7	o	un	DET	Tifsr	Case=Acc,Nom|Gender=Fem|Number=Sing|PronType=Ind	8	det	_	_
8	vacă	vacă	NOUN	Ncfsrn	Case=Acc,Nom|Definite=Ind|Gender=Fem|Number=Sing	0	root	_	_
9	mi-	eu	PRON	Pp1-sd--y-----w	Case=Dat|Number=Sing|Person=1|PronType=Prs|Strength=Weak|Variant=Short	8	expl:poss	_	_
10	e	fi	VERB	Vmip3s	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	8	cop	_	_
11	averea	avere	NOUN	Ncfsry	Case=Acc,Nom|Definite=Def|Gender=Fem|Number=Sing	8	nsubj	_	_
12	.	.	PUNCT	PERIOD	_	8	punct	_	_

~~~


~~~ conllu
# visual-style 18	bgColor:blue
# visual-style 18	fgColor:white
# visual-style 21	bgColor:blue
# visual-style 21	fgColor:white
# visual-style 21 18 expl:poss	color:blue
1	De	de	ADP	Spsa	AdpType=Prep|Case=Acc	2	case	_	_
2	când	când	ADV	Rw	PronType=Int,Rel	4	advmod	_	_
3	am	avea	AUX	Va--1	Person=1	4	aux	_	_
4	luat	lua	VERB	Vmp--sm	Gender=Masc|Number=Sing|VerbForm=Part	21	advcl	_	_
5	obiceiul	obicei	NOUN	Ncmsry	Case=Acc,Nom|Definite=Def|Gender=Masc|Number=Sing	4	dobj	_	_
6	să	să	PART	Qs	Mood=Sub	7	mark	_	_
7	vorbesc	vorbi	VERB	Vmip3p	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	5	acl	_	_
8	cu	cu	ADP	Spsa	AdpType=Prep|Case=Acc	9	case	_	_
9	ea	el	PRON	Pp3fsr--------s	Case=Acc,Nom|Gender=Fem|Number=Sing|Person=3|PronType=Prs|Strength=Strong	7	nmod	_	_
10	în	în	ADP	Spsa	AdpType=Prep|Case=Acc	12	case	_	_
11	fiecare	fiecare	DET	Di3-sr---e	Case=Acc,Nom|Number=Sing|Person=3|Position=Prenom|PronType=Ind	12	det	_	_
12	seară	seară	NOUN	Ncfsrn	Case=Acc,Nom|Definite=Ind|Gender=Fem|Number=Sing	7	nmod	_	_
13	,	,	PUNCT	COMMA	_	15	punct	_	_
14	după	după	ADP	Spsa	AdpType=Prep|Case=Acc	15	case	_	_
15	cină	cină	NOUN	Ncfsrn	Case=Acc,Nom|Definite=Ind|Gender=Fem|Number=Sing	7	nmod	_	_
16	,	,	PUNCT	COMMA	_	15	punct	_	_
17	gesturile	gest	NOUN	Ncfpry	Case=Acc,Nom|Definite=Def|Gender=Fem|Number=Plur	21	nsubj	_	_
18	îi	el	PRON	Pp3-sd--------w	Case=Dat|Number=Sing|Person=3|PronType=Prs|Strength=Weak	21	expl:poss	_	_
19	sunt	fi	VERB	Vmip3p	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	21	cop	_	_
20	mai	mai	ADV	Rp	_	21	advmod	_	_
21	cumpănite	cumpănit	ADJ	Afpfp-n	Definite=Ind|Degree=Pos|Gender=Fem|Number=Plur	0	root	_	_
22	și	și	CONJ	Crssp	Negative=Pos	21	cc	_	_
23	cu	cu	ADP	Spsa	AdpType=Prep|Case=Acc	25	case	_	_
24	evidente	evident	ADJ	Afpfp-n	Definite=Ind|Degree=Pos|Gender=Fem|Number=Plur	25	amod	_	_
25	eforturi	efort	NOUN	Ncfp-n	Definite=Ind|Gender=Fem|Number=Plur	21	conj	_	_
26	de	de	ADP	Spsa	AdpType=Prep|Case=Acc	28	mark	_	_
27	a	a	PART	Qn	PartType=Inf	28	mark	_	_
28	părea	părea	VERB	Vmnp	Tense=Pres|VerbForm=Inf	25	acl	_	_
29	mature	matur	ADJ	Afpfp-n	Definite=Ind|Degree=Pos|Gender=Fem|Number=Plur	28	xcomp	_	_
30	.	.	PUNCT	PERIOD	_	21	punct	_	_

~~~


