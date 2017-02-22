

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Ukrainian)

This relation is universal.
There are 1 language-specific subtypes of `nummod`: [nummod:gov]().

62 nodes (0%) are attached to their parents as `nummod`.

54 instances of `nummod` (87%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.29032258064516.

The following 3 pairs of parts of speech are connected with `nummod`: [uk-pos/NOUN]()-[uk-pos/NUM]() (59; 95% instances), [uk-pos/PROPN]()-[uk-pos/NUM]() (2; 3% instances), [uk-pos/PRON]()-[uk-pos/NUM]() (1; 2% instances).


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 10 nummod	color:blue
1	У	у	ADP	Spsl	Case=Loc	2	case	_	_
2	Франківську	Франківськ	PROPN	Npmsln	Animacy=Inan|Case=Loc|Gender=Masc	4	obl	_	_
3	вона	вона	PRON	Pp-3f-snn	Case=Nom|Gender=Fem|Person=3|PronType=Prs	4	nsubj	_	_
4	коштувала	коштувати	VERB	Vmpis-sf	Aspect=Imp|Gender=Fem|Mood=Ind|Tense=Past|VerbForm=Fin	0	root	_	_
5	щодня	щодня	ADV	R	_	6	advmod	_	_
6	інакше	інакше	ADV	Pi------r	PronType=Ind	4	advmod	_	SpaceAfter=No
7	,	,	PUNCT	U	_	9	punct	_	_
8	у	у	ADP	Spsl	Case=Loc	9	case	_	_
9	межах	межа	NOUN	Ncfpln	Animacy=Inan|Case=Loc|Gender=Fem|Number=Plur	4	obl	_	_
10	двох	два	NUM	Mlcfsg	Case=Gen|Gender=Fem|NumType=Card	11	nummod	_	_
11	копійок	копійка	NOUN	Ncfpgn	Animacy=Inan|Case=Gen|Gender=Fem|Number=Plur	9	nmod	_	SpaceAfter=No
12	.	.	PUNCT	U	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 16	bgColor:blue
# visual-style 16	fgColor:white
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 14 16 nummod	color:blue
1	Вуйко	вуйко	NOUN	Ncmsny	Animacy=Anim|Case=Nom|Gender=Masc	3	nsubj	_	_
2	Влодко	Влодко	PROPN	Npmsny	Animacy=Anim|Case=Nom|Gender=Masc|NameType=Giv	1	appos	_	_
3	відбував	відбувати	VERB	Vmpis-sm	Aspect=Imp|Gender=Masc|Mood=Ind|Tense=Past|VerbForm=Fin	0	root	_	_
4	термін	термін	NOUN	Ncmsan	Animacy=Inan|Case=Acc|Gender=Masc	3	obj	_	_
5	у	у	ADP	Spsl	Case=Loc	6	case	_	_
6	Хабаровську	Хабаровськ	PROPN	Npmsln	Animacy=Inan|Case=Loc|Gender=Masc	3	obl	_	SpaceAfter=No
7	,	,	PUNCT	U	_	9	punct	_	_
8	ще	ще	PART	Q	_	9	discourse	_	_
9	далі	далі	ADV	R	_	3	advmod	_	SpaceAfter=No
10	,	,	PUNCT	U	_	12	punct	_	_
11	ніж	ніж	SCONJ	Css	_	12	mark	_	_
12	Чита	Чита	PROPN	Npfsnn	Animacy=Inan|Case=Nom|Gender=Fem	9	advcl	_	Promoted=Yes
13	і	і	CCONJ	Ccs	_	14	cc	_	_
14	Чита	Чита	PROPN	Npfsnn	Animacy=Inan|Case=Nom|Gender=Fem	12	conj	_	_
15	-	-	PUNCT	U	_	16	punct	_	_
16	три	три	NUM	Mlc-pn	Case=Nom|Number=Plur|NumType=Card	14	nummod	_	SpaceAfter=No
17	.	.	PUNCT	U	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 nummod	color:blue
1	Ми	ми	PRON	Pp-1-ypnn	Animacy=Anim|Case=Nom|Number=Plur|Person=1|PronType=Prs	4	nsubj	_	_
2	обоє	обоє	NUM	Mlc-pn	Case=Nom|Number=Plur|NumType=Card	1	nummod	_	_
3	були	бути	AUX	Vapis-p	Aspect=Imp|Mood=Ind|Number=Plur|Tense=Past|VerbForm=Fin	4	cop	_	_
4	Тарасами	Тараси	PROPN	Np-pin	Animacy=Inan|Case=Ins|Number=Ptan	0	root	_	SpaceAfter=No
5	,	,	PUNCT	U	_	8	punct	_	_
6	і	і	CCONJ	Ccs	_	8	cc	_	_
7	Князь	Князь	PROPN	Npmsny	Animacy=Anim|Case=Nom|Gender=Masc|NameType=Sur	8	nsubj	_	_
8	вважав	вважати	VERB	Vmpis-sm	Aspect=Imp|Gender=Masc|Mood=Ind|Tense=Past|VerbForm=Fin	4	conj	_	_
9	таке	такий	DET	Pd--n-saa	Case=Acc|Gender=Neut|PronType=Dem	10	det	_	_
10	звертання	звертання	NOUN	Ncnsan	Animacy=Inan|Case=Acc|Gender=Neut	8	obj	_	_
11	чимось	щось	PRON	Pi--nnsin	Animacy=Inan|Case=Ins|Gender=Neut|PronType=Ind	8	obl	_	_
12	таким	такий	DET	Pd--n-sia	Case=Ins|Gender=Neut|PronType=Dem	11	det	_	SpaceAfter=No
13	,	,	PUNCT	U	_	15	punct	_	_
14	як	як	SCONJ	Css	_	15	mark	_	_
15	брат	брат	NOUN	Ncmsny	Animacy=Anim|Case=Nom|Gender=Masc	11	acl	_	SpaceAfter=No
16	.	.	PUNCT	U	_	4	punct	_	_

~~~


