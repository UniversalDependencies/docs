

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Ukrainian)

This relation is a language-specific subtype of [det]().
There are also 1 other language-specific subtypes of `det`: [det:numgov]().

15 nodes (0%) are attached to their parents as `det:nummod`.

15 instances of `det:nummod` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.8.

The following 4 pairs of parts of speech are connected with `det:nummod`: [uk-pos/NOUN]()-[uk-pos/DET]() (11; 73% instances), [uk-pos/NOUN]()-[uk-pos/NUM]() (2; 13% instances), [uk-pos/NOUN]()-[uk-pos/ADV]() (1; 7% instances), [uk-pos/PRON]()-[uk-pos/DET]() (1; 7% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 3 det:nummod	color:blue
1	Сестра	сестра	NOUN	Ncfsny	Animacy=Anim|Case=Nom|Gender=Fem	7	nsubj	_	_
2	була	бути	AUX	Vapis-sf	Aspect=Imp|Gender=Fem|Mood=Ind|Tense=Past|VerbForm=Fin	7	cop	_	_
3	однією	один	DET	Pi--f-sia	Case=Ins|Gender=Fem|PronType=Ind	7	det:nummod	_	_
4	з	з	ADP	Spsg	Case=Gen	7	case	_	_
5	п’яти	п’ять	NUM	Mlc-pg	Case=Gen|Number=Plur|NumType=Card	7	nummod	_	_
6	перших	перший	ADJ	Mlo-pg	Case=Gen|Degree=Pos|Number=Plur|NumType=Ord	7	amod	_	_
7	учнів	учень	NOUN	Ncmpgy	Animacy=Anim|Case=Gen|Gender=Masc|Number=Plur	0	root	_	_
8	Олекси	Олекса	PROPN	Npmsgy	Animacy=Anim|Case=Gen|Gender=Masc|NameType=Giv	7	nmod	_	_
9	Новаківського	Новаківський	PROPN	Npmsgy	Animacy=Anim|Case=Gen|Gender=Masc|NameType=Sur	8	flat:name	_	SpaceAfter=No
10	.	.	PUNCT	U	_	7	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 7 det:nummod	color:blue
1	У	у	ADP	Spsl	Case=Loc	3	case	_	_
2	міських	міський	ADJ	Ao--plf	Case=Loc|Number=Plur	3	amod	_	_
3	школах	школа	NOUN	Ncfpln	Animacy=Inan|Case=Loc|Gender=Fem|Number=Plur	4	obl	_	_
4	діяло	діяти	VERB	Vmpis-sn	Aspect=Imp|Gender=Neut|Mood=Ind|Tense=Past|VerbForm=Fin	0	root	_	_
5	правило	правило	NOUN	Ncnsnn	Animacy=Inan|Case=Nom|Gender=Neut	4	nsubj	_	_
6	двадцяти	двадцять	NUM	Mlc-pg	Case=Gen|Number=Plur|NumType=Card	8	det:nummod	_	_
7	п’яти	п’ять	NUM	Mlc-pg	Case=Gen|Number=Plur|NumType=Card	8	det:nummod	_	_
8	градусів	градус	NOUN	Ncmpgn	Animacy=Inan|Case=Gen|Gender=Masc|Number=Plur	5	nmod	_	_
9	—	—	PUNCT	U	_	4	punct	_	_
10	при	при	ADP	Spsl	Case=Loc	12	case	_	_
11	такому	такий	DET	Pd--m-sla	Case=Loc|Gender=Masc|PronType=Dem	12	det	_	_
12	морозі	мороз	NOUN	Ncmsln	Animacy=Inan|Case=Loc|Gender=Masc	15	obl	_	_
13	можна	можна	ADV	R	_	15	advmod	_	_
14	було	бути	AUX	Vapis-sn	Aspect=Imp|Gender=Neut|Mood=Ind|Tense=Past|VerbForm=Fin	15	aux	_	_
15	залишатися	залишатися	VERB	Vmpn	Aspect=Imp|VerbForm=Inf	5	acl	_	_
16	вдома	вдома	ADV	R	_	15	advmod	_	SpaceAfter=No
17	.	.	PUNCT	U	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 2 det:nummod	color:blue
1	Для	для	ADP	Spsg	Case=Gen	2	case	_	_
2	однієї	один	DET	Pi--f-sga	Case=Gen|Gender=Fem|PronType=Ind	4	det:nummod	_	_
3	з	з	ADP	Spsg	Case=Gen	4	case	_	_
4	них	вони	PRON	Pp-3--pgn	Case=Gen|Number=Plur|Person=3|PrepCase=Pre|PronType=Prs	6	obl	_	_
5	був	бути	AUX	Vapis-sm	Aspect=Imp|Gender=Masc|Mood=Ind|Tense=Past|VerbForm=Fin	6	aux:pass	_	_
6	вибраний	вибраний	ADJ	Ap-msnf-ep	Aspect=Perf|Case=Nom|Gender=Masc|VerbForm=Part|Voice=Pass	0	root	_	_
7	готельний	готельний	ADJ	Ao-msnf	Case=Nom|Gender=Masc	8	amod	_	_
8	номер	номер	NOUN	Ncmsnn	Animacy=Inan|Case=Nom|Gender=Masc	6	nsubj:pass	_	SpaceAfter=No
9	,	,	PUNCT	U	_	12	punct	_	_
10	вікна	вікно	NOUN	Ncnpnn	Animacy=Inan|Case=Nom|Gender=Neut|Number=Plur	12	nsubj	_	_
11	якого	який	DET	Pr--m-sga	Case=Gen|Gender=Masc|PronType=Rel	12	obl	_	_
12	виходили	виходити	VERB	Vmpis-p	Aspect=Imp|Mood=Ind|Number=Plur|Tense=Past|VerbForm=Fin	8	acl	_	_
13	на	на	ADP	Spsa	Case=Acc	14	case	_	_
14	дах	дах	NOUN	Ncmsan	Animacy=Inan|Case=Acc|Gender=Masc	12	obl	_	_
15	Опери	опера	NOUN	Ncfsgn	Animacy=Inan|Case=Gen|Gender=Fem	14	nmod	_	SpaceAfter=No
16	.	.	PUNCT	U	_	6	punct	_	_

~~~


