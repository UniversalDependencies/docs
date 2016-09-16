

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Czech)

This relation is universal.

18437 nodes (1%) are attached to their parents as `xcomp`.

17023 instances of `xcomp` (92%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.51402071920594.

The following 47 pairs of parts of speech are connected with `xcomp`: [cs-pos/VERB]()-[cs-pos/VERB]() (13578; 74% instances), [cs-pos/VERB]()-[cs-pos/NOUN]() (727; 4% instances), [cs-pos/NOUN]()-[cs-pos/NOUN]() (705; 4% instances), [cs-pos/VERB]()-[cs-pos/ADJ]() (673; 4% instances), [cs-pos/ADJ]()-[cs-pos/VERB]() (555; 3% instances), [cs-pos/VERB]()-[cs-pos/PRON]() (323; 2% instances), [cs-pos/NOUN]()-[cs-pos/ADJ]() (276; 1% instances), [cs-pos/NOUN]()-[cs-pos/PRON]() (276; 1% instances), [cs-pos/PRON]()-[cs-pos/NOUN]() (236; 1% instances), [cs-pos/PROPN]()-[cs-pos/NOUN]() (183; 1% instances), [cs-pos/PRON]()-[cs-pos/PRON]() (148; 1% instances), [cs-pos/NOUN]()-[cs-pos/VERB]() (145; 1% instances), [cs-pos/PRON]()-[cs-pos/ADJ]() (137; 1% instances), [cs-pos/PROPN]()-[cs-pos/ADJ]() (87; 0% instances), [cs-pos/PROPN]()-[cs-pos/PRON]() (77; 0% instances), [cs-pos/ADJ]()-[cs-pos/NOUN]() (37; 0% instances), [cs-pos/VERB]()-[cs-pos/NUM]() (33; 0% instances), [cs-pos/PRON]()-[cs-pos/VERB]() (30; 0% instances), [cs-pos/NOUN]()-[cs-pos/NUM]() (29; 0% instances), [cs-pos/PROPN]()-[cs-pos/VERB]() (22; 0% instances), [cs-pos/PART]()-[cs-pos/VERB]() (21; 0% instances), [cs-pos/ADJ]()-[cs-pos/PRON]() (15; 0% instances), [cs-pos/NUM]()-[cs-pos/NOUN]() (15; 0% instances), [cs-pos/PROPN]()-[cs-pos/PROPN]() (15; 0% instances), [cs-pos/NUM]()-[cs-pos/VERB]() (12; 0% instances), [cs-pos/ADJ]()-[cs-pos/ADJ]() (11; 0% instances), [cs-pos/PRON]()-[cs-pos/NUM]() (10; 0% instances), [cs-pos/PROPN]()-[cs-pos/NUM]() (7; 0% instances), [cs-pos/NUM]()-[cs-pos/ADJ]() (6; 0% instances), [cs-pos/PRON]()-[cs-pos/PROPN]() (6; 0% instances), [cs-pos/VERB]()-[cs-pos/ADV]() (6; 0% instances), [cs-pos/VERB]()-[cs-pos/PROPN]() (6; 0% instances), [cs-pos/PRON]()-[cs-pos/ADV]() (5; 0% instances), [cs-pos/NOUN]()-[cs-pos/ADV]() (4; 0% instances), [cs-pos/NOUN]()-[cs-pos/PROPN]() (3; 0% instances), [cs-pos/ADJ]()-[cs-pos/NUM]() (2; 0% instances), [cs-pos/ADJ]()-[cs-pos/PROPN]() (2; 0% instances), [cs-pos/ADV]()-[cs-pos/ADJ]() (2; 0% instances), [cs-pos/ADV]()-[cs-pos/PRON]() (2; 0% instances), [cs-pos/DET]()-[cs-pos/NOUN]() (2; 0% instances), [cs-pos/DET]()-[cs-pos/VERB]() (2; 0% instances), [cs-pos/ADJ]()-[cs-pos/ADV]() (1; 0% instances), [cs-pos/ADV]()-[cs-pos/NOUN]() (1; 0% instances), [cs-pos/ADV]()-[cs-pos/VERB]() (1; 0% instances), [cs-pos/PART]()-[cs-pos/ADJ]() (1; 0% instances), [cs-pos/PROPN]()-[cs-pos/ADV]() (1; 0% instances), [cs-pos/VERB]()-[cs-pos/PART]() (1; 0% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 3 xcomp	color:blue
1	Potřebujete	potřebovat	VERB	VB-P---2P-AA---	Aspect=Imp|Mood=Ind|Negative=Pos|Number=Plur|Person=2|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
2	rychle	rychle	ADV	Dg-------1A----	Degree=Pos|Negative=Pos	3	advmod	_	LDeriv=rychlý
3	poradit	poradit	VERB	Vf--------A----	Negative=Pos|VerbForm=Inf	1	xcomp	_	SpaceAfter=No
4	?	?	PUNCT	Z:-------------	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 10 xcomp	color:blue
1	*	*	PUNCT	Z:-------------	_	8	punct	_	_
2	Ale	ale	CONJ	J^-------------	_	8	cc	_	_
3	vyučení	vyučení	NOUN	NNNS1-----A----	Case=Nom|Gender=Neut|Negative=Pos|Number=Sing	8	nsubj	_	SpaceAfter=No|LDeriv=vyučit
4	,	,	PUNCT	Z:-------------	_	3	punct	_	_
5	či	či	CONJ	J^-------------	_	3	cc	_	_
6	přeškolení	přeškolení	NOUN	NNNS1-----A----	Case=Nom|Gender=Neut|Negative=Pos|Number=Sing	3	conj	_	LDeriv=přeškolit
7	by	být	AUX	Vc-------------	Mood=Cnd|VerbForm=Fin	8	aux	_	_
8	mělo	mít	VERB	VpNS---XR-AA---	Gender=Neut|Negative=Pos|Number=Sing|Tense=Past|VerbForm=Part|Voice=Act	0	root	_	_
9	být	být	VERB	Vf--------A----	Negative=Pos|VerbForm=Inf	10	cop	_	_
10	zárukou	záruka	NOUN	NNFS7-----A----	Case=Ins|Gender=Fem|Negative=Pos|Number=Sing	8	xcomp	_	_
11	kvalifikace	kvalifikace	NOUN	NNFS2-----A----	Case=Gen|Gender=Fem|Negative=Pos|Number=Sing	10	nmod	_	SpaceAfter=No
12	.	.	PUNCT	Z:-------------	_	8	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 7 xcomp	color:blue
1	Proces	proces	NOUN	NNIS4-----A----	Animacy=Inan|Case=Acc|Gender=Masc|Negative=Pos|Number=Sing	2	dobj	_	_
2	nevidí	vidět	VERB	VB-S---3P-NA---	Mood=Ind|Negative=Neg|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
3	jako	jako	SCONJ	J,-------------	_	7	mark	_	_
4	krátkodobou	krátkodobý	ADJ	AAFS4----1A----	Case=Acc|Degree=Pos|Gender=Fem|Negative=Pos|Number=Sing	7	amod	_	_
5	či	či	CONJ	J^-------------	_	4	cc	_	_
6	střednědobou	střednědobý	ADJ	AAFS4----1A----	Case=Acc|Degree=Pos|Gender=Fem|Negative=Pos|Number=Sing	4	conj	_	_
7	záležitost	záležitost	NOUN	NNFS4-----A----	Case=Acc|Gender=Fem|Negative=Pos|Number=Sing	1	xcomp	_	SpaceAfter=No
8	.	.	PUNCT	Z:-------------	_	2	punct	_	_

~~~




--------------------------------------------------------------------------------

## Treebank Statistics (UD_Czech-CAC)

This relation is universal.

5475 nodes (1%) are attached to their parents as `xcomp`.

5089 instances of `xcomp` (93%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.64511415525114.

The following 42 pairs of parts of speech are connected with `xcomp`: [cs-pos/VERB]()-[cs-pos/VERB]() (3590; 66% instances), [cs-pos/NOUN]()-[cs-pos/NOUN]() (509; 9% instances), [cs-pos/VERB]()-[cs-pos/NOUN]() (226; 4% instances), [cs-pos/VERB]()-[cs-pos/ADJ]() (213; 4% instances), [cs-pos/ADJ]()-[cs-pos/VERB]() (171; 3% instances), [cs-pos/NOUN]()-[cs-pos/PRON]() (124; 2% instances), [cs-pos/VERB]()-[cs-pos/PRON]() (124; 2% instances), [cs-pos/NOUN]()-[cs-pos/ADJ]() (90; 2% instances), [cs-pos/PRON]()-[cs-pos/NOUN]() (88; 2% instances), [cs-pos/PRON]()-[cs-pos/PRON]() (77; 1% instances), [cs-pos/NOUN]()-[cs-pos/VERB]() (45; 1% instances), [cs-pos/PROPN]()-[cs-pos/NOUN]() (36; 1% instances), [cs-pos/PRON]()-[cs-pos/ADJ]() (26; 0% instances), [cs-pos/ADJ]()-[cs-pos/NOUN]() (20; 0% instances), [cs-pos/ADJ]()-[cs-pos/PRON]() (15; 0% instances), [cs-pos/PRON]()-[cs-pos/VERB]() (15; 0% instances), [cs-pos/NOUN]()-[cs-pos/NUM]() (13; 0% instances), [cs-pos/PART]()-[cs-pos/VERB]() (11; 0% instances), [cs-pos/PROPN]()-[cs-pos/PRON]() (9; 0% instances), [cs-pos/SYM]()-[cs-pos/VERB]() (9; 0% instances), [cs-pos/PROPN]()-[cs-pos/ADJ]() (8; 0% instances), [cs-pos/PROPN]()-[cs-pos/PROPN]() (7; 0% instances), [cs-pos/VERB]()-[cs-pos/NUM]() (7; 0% instances), [cs-pos/ADJ]()-[cs-pos/ADJ]() (4; 0% instances), [cs-pos/NOUN]()-[cs-pos/ADV]() (4; 0% instances), [cs-pos/NUM]()-[cs-pos/NOUN]() (4; 0% instances), [cs-pos/PRON]()-[cs-pos/ADV]() (4; 0% instances), [cs-pos/ADV]()-[cs-pos/VERB]() (3; 0% instances), [cs-pos/VERB]()-[cs-pos/ADV]() (3; 0% instances), [cs-pos/VERB]()-[cs-pos/SYM]() (3; 0% instances), [cs-pos/NOUN]()-[cs-pos/PROPN]() (2; 0% instances), [cs-pos/NUM]()-[cs-pos/VERB]() (2; 0% instances), [cs-pos/PRON]()-[cs-pos/NUM]() (2; 0% instances), [cs-pos/PROPN]()-[cs-pos/VERB]() (2; 0% instances), [cs-pos/VERB]()-[cs-pos/PROPN]() (2; 0% instances), [cs-pos/ADJ]()-[cs-pos/SCONJ]() (1; 0% instances), [cs-pos/ADV]()-[cs-pos/ADJ]() (1; 0% instances), [cs-pos/PRON]()-[cs-pos/PROPN]() (1; 0% instances), [cs-pos/PRON]()-[cs-pos/SYM]() (1; 0% instances), [cs-pos/PROPN]()-[cs-pos/NUM]() (1; 0% instances), [cs-pos/SYM]()-[cs-pos/ADJ]() (1; 0% instances), [cs-pos/SYM]()-[cs-pos/NOUN]() (1; 0% instances).


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 9 xcomp	color:blue
1	Protože	protože	SCONJ	J,-------------	_	8	mark	_	_
2	bez	bez	ADP	RR--2----------	AdpType=Prep|Case=Gen	3	case	_	LId=bez-1
3	železnice	železnice	NOUN	NNFS2-----A----	Case=Gen|Gender=Fem|Negative=Pos|Number=Sing	8	nmod	_	_
4	bychom	být	AUX	Vc-P---1-------	Mood=Cnd|Number=Plur|Person=1|VerbForm=Fin	8	aux	_	_
5	si	se	PRON	P7-X3----------	Case=Dat|PronType=Prs|Reflex=Yes|Variant=Short	9	expl	_	LGloss=(zvr._zájmeno/částice)
6	život	život	NOUN	NNIS4-----A----	Animacy=Inan|Case=Acc|Gender=Masc|Negative=Pos|Number=Sing	9	dobj	_	_
7	vůbec	vůbec	ADV	Db-------------	_	8	advmod	_	_
8	nedovedli	dovést	VERB	VpMP---XR-NA---	Animacy=Anim|Gender=Masc|Negative=Neg|Number=Plur|Tense=Past|VerbForm=Part|Voice=Act	0	root	_	_
9	představit	představit	VERB	Vf--------A----	Aspect=Perf|Negative=Pos|VerbForm=Inf	8	xcomp	_	SpaceAfter=No|LGloss=(si_něco;_něco/někoho_někomu)
10	.	.	PUNCT	Z:-------------	_	8	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 6 xcomp	color:blue
1	Bylo	být	AUX	VpNS---XR-AA---	Gender=Neut|Negative=Pos|Number=Sing|Tense=Past|VerbForm=Part|Voice=Act	2	auxpass	_	_
2	rozhodnuto	rozhodnout	VERB	VsNS---XX-AP---	Aspect=Perf|Gender=Neut|Negative=Pos|Number=Sing|VerbForm=Part|Voice=Pass	0	root	_	_
3	zahájit	zahájit	VERB	Vf--------A----	Aspect=Perf|Negative=Pos|VerbForm=Inf	2	csubjpass	_	_
4	jako	jako	SCONJ	J,-------------	_	6	aux	_	_
5	další	další	ADJ	AAFS4----1A----	Case=Acc|Degree=Pos|Gender=Fem|Negative=Pos|Number=Sing	6	amod	_	_
6	akci	akce	NOUN	NNFS4-----A----	Case=Acc|Gender=Fem|Negative=Pos|Number=Sing	7	xcomp	_	_
7	výstavbu	výstavba	NOUN	NNFS4-----A----	Case=Acc|Gender=Fem|Negative=Pos|Number=Sing	3	nmod	_	SpaceAfter=No
8	.	.	PUNCT	Z:-------------	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 4 xcomp	color:blue
1	Uplatnit	uplatnit	VERB	Vf--------A----	Negative=Pos|VerbForm=Inf	0	root	_	_
2	jako	jako	SCONJ	J,-------------	_	4	mark	_	_
3	skrytou	skrytý	ADJ	AAFS4----1A----	Case=Acc|Degree=Pos|Gender=Fem|Negative=Pos|Number=Sing	4	amod	_	LDeriv=skrýt
4	závadu	závada	NOUN	NNFS4-----A----	Case=Acc|Gender=Fem|Negative=Pos|Number=Sing	1	xcomp	_	SpaceAfter=No
5	.	.	PUNCT	Z:-------------	_	1	punct	_	_

~~~




--------------------------------------------------------------------------------

## Treebank Statistics (UD_Czech-CLTT)

This relation is universal.

281 nodes (1%) are attached to their parents as `xcomp`.

275 instances of `xcomp` (98%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.58718861209964.

The following 15 pairs of parts of speech are connected with `xcomp`: [cs-pos/VERB]()-[cs-pos/VERB]() (123; 44% instances), [cs-pos/ADJ]()-[cs-pos/VERB]() (76; 27% instances), [cs-pos/NOUN]()-[cs-pos/NOUN]() (31; 11% instances), [cs-pos/NOUN]()-[cs-pos/ADJ]() (13; 5% instances), [cs-pos/VERB]()-[cs-pos/NOUN]() (8; 3% instances), [cs-pos/PRON]()-[cs-pos/NOUN]() (7; 2% instances), [cs-pos/VERB]()-[cs-pos/ADJ]() (7; 2% instances), [cs-pos/NOUN]()-[cs-pos/VERB]() (4; 1% instances), [cs-pos/VERB]()-[cs-pos/PRON]() (3; 1% instances), [cs-pos/X]()-[cs-pos/VERB]() (3; 1% instances), [cs-pos/ADJ]()-[cs-pos/NOUN]() (2; 1% instances), [cs-pos/ADV]()-[cs-pos/PART]() (1; 0% instances), [cs-pos/NOUN]()-[cs-pos/PRON]() (1; 0% instances), [cs-pos/PART]()-[cs-pos/ADJ]() (1; 0% instances), [cs-pos/PRON]()-[cs-pos/VERB]() (1; 0% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 4 xcomp	color:blue
1	Stanovená	stanovený	ADJ	AAFS1----1A----	Case=Nom|Degree=Pos|Gender=Fem|Negative=Pos|Number=Sing	2	amod	_	_
2	doba	doba	NOUN	NNFS1-----A----	Case=Nom|Gender=Fem|Negative=Pos|Number=Sing	3	nsubj	_	_
3	nesmí	smět	VERB	VB-S---3P-NA---	Mood=Ind|Negative=Neg|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
4	přesáhnout	přesáhnout	VERB	Vf--------A----	Negative=Pos|VerbForm=Inf	3	xcomp	_	_
5	účetní	účetní	ADJ	AANS4----1A----	Case=Acc|Degree=Pos|Gender=Neut|Negative=Pos|Number=Sing	6	amod	_	LId=účetní-1
6	období	období	NOUN	NNNS4-----A----	Case=Acc|Gender=Neut|Negative=Pos|Number=Sing	4	dobj	_	SpaceAfter=No
7	.	.	PUNCT	Z:-------------	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 6 xcomp	color:blue
1	(13)	(13)	PUNCT	Z:-------------	_	5	punct	_	_
2	Účetní	účetní	ADJ	AAFP1----1A----	Case=Nom|Degree=Pos|Gender=Fem|Negative=Pos|Number=Plur	3	amod	_	LId=účetní-1
3	jednotky	jednotka	NOUN	NNFP1-----A----	Case=Nom|Gender=Fem|Negative=Pos|Number=Plur	5	nsubj	_	_
4	jsou	být	VERB	VB-P---3P-AA---	Mood=Ind|Negative=Pos|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	5	cop	_	_
5	povinny	povinný	ADJ	ACTP------A----	Animacy=Inan|Gender=Fem,Masc|Negative=Pos|Number=Plur|Variant=Short	0	root	_	_
6	vést	vést	VERB	Vf--------A----	Negative=Pos|VerbForm=Inf	5	xcomp	_	LId=vést-1
7	účetnictví	účetnictví	NOUN	NNNS4-----A----	Case=Acc|Gender=Neut|Negative=Pos|Number=Sing	6	dobj	_	_
8	v	v	ADP	RR--6----------	AdpType=Prep|Case=Loc	10	case	_	LId=v-1
9	českém	český	ADJ	AAIS6----1A----	Animacy=Inan|Case=Loc|Degree=Pos|Gender=Masc|Negative=Pos|Number=Sing	10	amod	_	_
10	jazyce	jazyk	NOUN	NNIS6-----A---1	Animacy=Inan|Case=Loc|Gender=Masc|Negative=Pos|Number=Sing	6	nmod	_	SpaceAfter=No
11	.	.	PUNCT	Z:-------------	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 13 xcomp	color:blue
1	(9)	(9)	PUNCT	Z:-------------	_	5	punct	_	_
2	Účetní	účetní	ADJ	AAFP1----1A----	Case=Nom|Degree=Pos|Gender=Fem|Negative=Pos|Number=Plur	3	amod	_	LId=účetní-1
3	jednotky	jednotka	NOUN	NNFP1-----A----	Case=Nom|Gender=Fem|Negative=Pos|Number=Plur	5	nsubj	_	_
4	jsou	být	VERB	VB-P---3P-AA---	Mood=Ind|Negative=Pos|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	5	cop	_	_
5	povinny	povinný	ADJ	ACTP------A----	Animacy=Inan|Gender=Fem,Masc|Negative=Pos|Number=Plur|Variant=Short	0	root	_	_
6	vést	vést	VERB	Vf--------A----	Negative=Pos|VerbForm=Inf	5	xcomp	_	LId=vést-1
7	jedno	jeden	NUM	ClNS4----------	Case=Acc|Gender=Neut|Number=Sing|NumForm=Word|NumType=Card|NumValue=1,2,3	8	nummod	_	_
8	účetnictví	účetnictví	NOUN	NNNS4-----A----	Case=Acc|Gender=Neut|Negative=Pos|Number=Sing	6	dobj	_	_
9	za	za	ADP	RR--4----------	AdpType=Prep|Case=Acc	11	case	_	LId=za-1
10	účetní	účetní	ADJ	AAFS4----1A----	Case=Acc|Degree=Pos|Gender=Fem|Negative=Pos|Number=Sing	11	amod	_	LId=účetní-1
11	jednotku	jednotka	NOUN	NNFS4-----A----	Case=Acc|Gender=Fem|Negative=Pos|Number=Sing	6	nmod	_	_
12	jako	jako	SCONJ	J,-------------	_	13	mark	_	_
13	celek	celek	NOUN	NNIS4-----A----	Animacy=Inan|Case=Acc|Gender=Masc|Negative=Pos|Number=Sing	11	xcomp	_	SpaceAfter=No
14	.	.	PUNCT	Z:-------------	_	5	punct	_	_

~~~


