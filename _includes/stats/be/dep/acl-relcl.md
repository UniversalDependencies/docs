

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Belarusian)

This relation is a language-specific subtype of [acl]().

44 nodes (1%) are attached to their parents as `acl:relcl`.

44 instances of `acl:relcl` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 4.81818181818182.

The following 4 pairs of parts of speech are connected with `acl:relcl`: [be-pos/NOUN]()-[be-pos/VERB]() (40; 91% instances), [be-pos/PROPN]()-[be-pos/VERB]() (2; 5% instances), [be-pos/NOUN]()-[be-pos/PRON]() (1; 2% instances), [be-pos/PRON]()-[be-pos/ADJ]() (1; 2% instances).


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 9 acl:relcl	color:blue
1	Здзейснена	здзейсніць	VERB	VBNH	Aspect=Perf|Gender=Neut|Number=Sing|Tense=Past|Variant=Short|VerbForm=Part|Voice=Pass	0	root	_	_
2	9	9	NUM	CD	Case=Nom	3	nummod:gov	_	_
3	ДТЗ	дтз	NOUN	NN	Animacy=Inan|Case=Gen|Gender=Neut|Number=Plur	1	nsubj	_	SpaceAfter=No
4	,	,	PUNCT	PUNCT	_	9	punct	_	_
5	у	у	ADP	IN	_	6	case	_	_
6	якіх	які	PRON	WPA	Case=Loc|Number=Plur	9	obl	_	_
7	адзін	адзін	NUM	CD	Case=Nom|Gender=Masc|Number=Sing	8	nummod	_	_
8	чалавек	чалавек	NOUN	NN	Animacy=Anim|Case=Nom|Gender=Masc|Number=Sing	9	nsubj	_	_
9	загінуў	загінуць	VERB	VBC	Aspect=Perf|Gender=Masc|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin|Voice=Act	3	acl:relcl	_	_
10	і	і	CCONJ	CC	_	12	cc	_	_
11	восем	восем	NUM	CD	Case=Nom	12	nsubj	_	_
12	атрымалі	атрымаць	VERB	VBC	Aspect=Perf|Mood=Ind|Number=Plur|Tense=Past|VerbForm=Fin|Voice=Act	9	conj	_	_
13	раненні	раненне	NOUN	NN	Animacy=Inan|Case=Acc|Gender=Neut|Number=Plur	12	obj	_	SpaceAfter=No
14	.	.	PUNCT	PUNCT	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 10 acl:relcl	color:blue
1	Новая	новы	ADJ	JJL	Case=Nom|Degree=Pos|Gender=Fem|Number=Sing	2	amod	_	_
2	купюра	купюра	NOUN	NN	Animacy=Inan|Case=Nom|Gender=Fem|Number=Sing	3	nsubj	_	_
3	стала	стаць	VERB	VBC	Aspect=Perf|Gender=Fem|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	_
4	першай	першы	ADJ	ORD	Case=Ins|Degree=Pos|Gender=Fem|Number=Sing	3	obj	_	_
5	у	у	ADP	IN	_	6	case	_	_
6	Беларусі	беларусь	PROPN	NNP	Animacy=Inan|Case=Loc|Gender=Fem|Number=Sing	4	obl	_	SpaceAfter=No
7	,	,	PUNCT	PUNCT	_	10	punct	_	_
8	на	на	ADP	IN	_	9	case	_	_
9	якой	які	PRON	WPA	Case=Loc|Gender=Fem|Number=Sing	10	obl	_	_
10	стаіць	стаяць	VERB	VBC	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	6	acl:relcl	_	_
11	подпіс	подпіс	NOUN	NN	Animacy=Inan|Case=Nom|Gender=Masc|Number=Sing	10	nsubj	_	_
12	цяперашняй	цяперашні	ADJ	JJL	Case=Gen|Degree=Pos|Gender=Fem|Number=Sing	13	amod	_	_
13	кіраўніка	кіраўнік	NOUN	NN	Animacy=Anim|Case=Gen|Gender=Masc|Number=Sing	11	nmod	_	_
14	Нацыянальнага	нацыянальны	ADJ	JJL	Case=Gen|Degree=Pos|Gender=Masc|Number=Sing	15	amod	_	_
15	банка	банк	NOUN	NN	Animacy=Inan|Case=Gen|Gender=Masc|Number=Sing	13	nmod	_	_
16	Надзеі	надзея	PROPN	NNP	Animacy=Anim|Case=Gen|Gender=Fem|Number=Sing	13	flat	_	_
17	Ермаковай	ермакова	PROPN	NNP	Animacy=Anim|Case=Gen|Gender=Fem|Number=Sing	16	flat	_	SpaceAfter=No
18	.	.	PUNCT	PUNCT	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 18	bgColor:blue
# visual-style 18	fgColor:white
# visual-style 17	bgColor:blue
# visual-style 17	fgColor:white
# visual-style 17 18 acl:relcl	color:blue
1	Ужо	ужо	ADV	RB	Degree=Pos	2	advmod	_	_
2	месяц	месяц	NOUN	NN	Animacy=Inan|Case=Nom|Gender=Masc|Number=Sing	0	root	_	SpaceAfter=No
3	,	,	PUNCT	PUNCT	_	7	punct	_	_
4	як	як	SCONJ	IN	_	7	mark	_	_
5	на	на	ADP	IN	_	6	case	_	_
6	Тэлеграфе	тэлеграф	PROPN	NNP	Animacy=Inan|Case=Loc|Gender=Masc|Number=Sing	7	obl	_	_
7	існуе	існаваць	VERB	VBC	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	2	advcl	_	_
8	рубрыка	рубрыка	NOUN	NN	Animacy=Inan|Case=Nom|Gender=Fem|Number=Sing	7	nsubj	_	SpaceAfter=No
9	,	,	PUNCT	PUNCT	_	10	punct	_	_
10	прымеркаваная	прымеркаваць	VERB	VBNL	Aspect=Perf|Case=Nom|Gender=Fem|Number=Sing|Tense=Past|VerbForm=Part|Voice=Pass	8	acl	_	_
11	да	да	ADP	IN	_	13	case	_	_
12	Міжнароднага	міжнародны	ADJ	JJL	Case=Gen|Degree=Pos|Gender=Masc|Number=Sing	13	amod	_	_
13	дня	дзень	NOUN	NN	Animacy=Inan|Case=Gen|Gender=Masc|Number=Sing	10	obl	_	_
14	роднай	родны	ADJ	JJL	Case=Gen|Degree=Pos|Gender=Fem|Number=Sing	15	amod	_	_
15	мовы	мова	NOUN	NN	Animacy=Inan|Case=Gen|Gender=Fem|Number=Sing	13	nmod	_	SpaceAfter=No
16	,	,	PUNCT	PUNCT	_	10	punct	_	_
17	удзельнікамі	удзельнік	NOUN	NN	Animacy=Anim|Case=Ins|Gender=Masc|Number=Plur	19	obj	_	_
18	якога	які	PRON	WPA	Case=Gen|Gender=Masc|Number=Sing	17	acl:relcl	_	_
19	з'яўляюцца	з'яўляцца	VERB	VBC	Aspect=Imp|Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin|Voice=Mid	8	acl:relcl	_	_
20	грамадзяне	грамадзянiн	NOUN	NN	Animacy=Anim|Case=Nom|Gender=Masc|Number=Plur	19	nsubj	_	_
21	іншых	іншы	ADJ	JJL	Case=Gen|Degree=Pos|Number=Plur	22	amod	_	_
22	краін	краіна	NOUN	NN	Animacy=Inan|Case=Gen|Gender=Fem|Number=Plur	20	nmod	_	SpaceAfter=No
23	,	,	PUNCT	PUNCT	_	28	punct	_	_
24	якія	які	PRON	WPA	Case=Nom|Number=Plur	28	nsubj	_	_
25	адмыслова	адмыслова	ADV	RB	Degree=Pos	28	advmod	_	_
26	і	і	CCONJ	CC	_	27	cc	_	_
27	самастойна	самастойна	ADV	RB	Degree=Pos	25	conj	_	_
28	вывучылі	вывучыць	VERB	VBC	Aspect=Perf|Mood=Ind|Number=Plur|Tense=Past|VerbForm=Fin|Voice=Act	20	acl:relcl	_	_
29	беларускую	беларускі	ADJ	JJL	Case=Acc|Degree=Pos|Gender=Fem|Number=Sing	30	amod	_	_
30	мову	мова	NOUN	NN	Animacy=Inan|Case=Acc|Gender=Fem|Number=Sing	28	obj	_	SpaceAfter=No
31	.	.	PUNCT	PUNCT	_	2	punct	_	_

~~~


