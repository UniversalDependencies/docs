

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Ukrainian)

This relation is a language-specific subtype of [nummod]().

37 nodes (0%) are attached to their parents as `nummod:gov`.

34 instances of `nummod:gov` (92%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.21621621621622.

The following 3 pairs of parts of speech are connected with `nummod:gov`: [uk-pos/NOUN]()-[uk-pos/NUM]() (34; 92% instances), [uk-pos/NOUN]()-[uk-pos/DET]() (2; 5% instances), [uk-pos/PROPN]()-[uk-pos/NUM]() (1; 3% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 nummod:gov	color:blue
1	Нам	ми	PRON	Pp-1-ypdn	Animacy=Anim|Case=Dat|Number=Plur|Person=1|PronType=Prs	2	obj	_	_
2	було	бути	VERB	Vapis-sn	Aspect=Imp|Gender=Neut|Mood=Ind|Tense=Past|VerbForm=Fin	0	root	_	_
3	по	по	ADP	Spsa	Case=Acc	5	case	_	_
4	шістнадцять	шістнадцять	NUM	Mlc-pa	Case=Acc|Number=Plur|NumType=Card	5	nummod:gov	_	_
5	років	рік	NOUN	Ncmpgn	Animacy=Inan|Case=Gen|Gender=Masc|Number=Plur	2	obl	_	SpaceAfter=No
6	.	.	PUNCT	U	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 8 nummod:gov	color:blue
1	Виявляється	виявлятися	VERB	Vmpip3s	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	SpaceAfter=No
2	,	,	PUNCT	U	_	3	punct	_	_
3	можна	можна	ADV	R	_	1	advmod	_	SpaceAfter=No
4	:	:	PUNCT	U	_	6	punct	_	_
5	люди	людина	NOUN	Nc-pny	Animacy=Anim|Case=Nom|Number=Plur	6	nsubj	_	_
6	купують	купувати	VERB	Vmpip3p	Aspect=Imp|Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	1	parataxis	_	_
7	по	по	ADP	Spsa	Case=Acc	9	case	_	_
8	декілька	декілька	DET	Mlc-pa	Case=Acc|Number=Plur|NumType=Card|PronType=Ind	9	nummod:gov	_	_
9	примірників	примірник	NOUN	Ncmpgn	Animacy=Inan|Case=Gen|Gender=Masc|Number=Plur	6	obl	_	_
10	книжок	книжка	NOUN	Ncfpgn	Animacy=Inan|Case=Gen|Gender=Fem|Number=Plur	9	nmod	_	_
11	і	і	CCONJ	Ccs	_	12	cc	_	_
12	дарують	дарувати	VERB	Vmpip3p	Aspect=Imp|Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	6	conj	_	_
13	на	на	ADP	Spsa	Case=Acc	14	case	_	_
14	свято	свято	NOUN	Ncnsan	Animacy=Inan|Case=Acc|Gender=Neut	12	obl	_	SpaceAfter=No
15	.	.	PUNCT	U	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 18	bgColor:blue
# visual-style 18	fgColor:white
# visual-style 21	bgColor:blue
# visual-style 21	fgColor:white
# visual-style 21 18 nummod:gov	color:blue
1	Жінка	жінка	NOUN	Ncfsny	Animacy=Anim|Case=Nom|Gender=Fem	2	nsubj	_	_
2	стояла	стояти	VERB	Vmpis-sf	Aspect=Imp|Gender=Fem|Mood=Ind|Tense=Past|VerbForm=Fin	0	root	_	_
3	непохитною	непохитний	ADJ	Ao-fsif	Case=Ins|Gender=Fem	2	xcomp	_	_
4	перед	перед	ADP	Spsi	Case=Ins	6	case	_	_
5	усіма	увесь	DET	Pg----pia	Case=Ins|Number=Plur|PronType=Tot	6	det	_	_
6	ударами	удар	NOUN	Ncmpin	Animacy=Inan|Case=Ins|Gender=Masc|Number=Plur	2	obl	_	_
7	долі	доля	NOUN	Ncfsgn	Animacy=Inan|Case=Gen|Gender=Fem	6	nmod	_	SpaceAfter=No
8	,	,	PUNCT	U	_	12	punct	_	_
9	а	а	CCONJ	Ccs	_	12	cc	_	_
10	ще	ще	PART	Q	_	12	discourse	_	_
11	вона	вона	PRON	Pp-3f-snn	Case=Nom|Gender=Fem|Person=3|PronType=Prs	12	nsubj	_	_
12	важила	важити	VERB	Vmpis-sf	Aspect=Imp|Gender=Fem|Mood=Ind|Tense=Past|VerbForm=Fin	2	conj	_	_
13	(	(	PUNCT	U	_	14	punct	_	SpaceAfter=No
14	нетто	нетто	ADV	R	_	12	advmod	_	SpaceAfter=No
15	)	)	PUNCT	U	_	14	punct	_	SpaceAfter=No
16	,	,	PUNCT	U	_	21	punct	_	_
17	як	як	SCONJ	Css	_	21	mark	_	_
18	три	три	NUM	Mlc-pn	Case=Nom|Number=Plur|NumType=Card	21	nummod:gov	_	_
19	з	з	ADP	Spsi	Case=Ins	20	case	_	_
20	половиною	половина	NOUN	Ncfsin	Animacy=Inan|Case=Ins|Gender=Fem	18	nmod	_	_
21	Славіки	Славік	PROPN	Npmpny	Animacy=Anim|Case=Nom|Gender=Masc|NameType=Giv|Number=Plur	12	advcl	_	_
22	(	(	PUNCT	U	_	23	punct	_	SpaceAfter=No
23	брутто	брутто	ADV	R	_	21	advmod	_	SpaceAfter=No
24	)	)	PUNCT	U	_	23	punct	_	SpaceAfter=No
25	.	.	PUNCT	U	_	2	punct	_	_

~~~


