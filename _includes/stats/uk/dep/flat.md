

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Ukrainian)

This relation is universal.
There are 2 language-specific subtypes of `flat`: [flat:foreign](), [flat:name]().

8 nodes (0%) are attached to their parents as `flat`.

8 instances of `flat` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.25.

The following 7 pairs of parts of speech are connected with `flat`: [uk-pos/NUM]()-[uk-pos/NOUN]() (2; 25% instances), [uk-pos/ADV]()-[uk-pos/ADV]() (1; 13% instances), [uk-pos/NOUN]()-[uk-pos/NOUN]() (1; 13% instances), [uk-pos/NOUN]()-[uk-pos/NUM]() (1; 13% instances), [uk-pos/NUM]()-[uk-pos/ADJ]() (1; 13% instances), [uk-pos/PROPN]()-[uk-pos/NUM]() (1; 13% instances), [uk-pos/VERB]()-[uk-pos/PRON]() (1; 13% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 5 flat	color:blue
1	Якраз	якраз	PART	Q	_	3	discourse	_	_
2	у	у	ADP	Spsl	Case=Loc	3	case	_	_
3	листопаді	листопад	NOUN	Ncmsln	Animacy=Inan|Case=Loc|Gender=Masc	6	obl	_	_
4	п’ятдесят	п’ятдесят	NUM	Mlc-pn	Case=Nom|Number=Plur|NumType=Card	3	nmod	_	Promoted=Yes
5	шостого	шостий	NOUN	Mlomsg	Animacy=Inan|Case=Gen|Gender=Masc|NumType=Ord	4	flat	_	_
6	загинув	загинути	VERB	Vmeis-sm	Aspect=Perf|Gender=Masc|Mood=Ind|Tense=Past|VerbForm=Fin	0	root	_	_
7	дідо	дідо	NOUN	Ncmsny	Animacy=Anim|Case=Nom|Gender=Masc|Style=Odd	6	nsubj	_	_
8	Мар’яни	Мар’яна	PROPN	Npfsgy	Animacy=Anim|Case=Gen|Gender=Fem|NameType=Giv	7	nmod	_	SpaceAfter=No
9	.	.	PUNCT	U	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 18	bgColor:blue
# visual-style 18	fgColor:white
# visual-style 16	bgColor:blue
# visual-style 16	fgColor:white
# visual-style 16 18 flat	color:blue
1	Дізнавшись	дізнавшись	VERB	Vmegs	Aspect=Perf|Tense=Past|VerbForm=Conv	11	advcl	_	SpaceAfter=No
2	,	,	PUNCT	U	_	5	punct	_	_
3	що	що	SCONJ	Css	_	5	mark	_	_
4	я	я	PRON	Pp-1-ysnn	Animacy=Anim|Case=Nom|Number=Sing|Person=1|PronType=Prs	5	nsubj	_	_
5	живу	жити	VERB	Vmpip1s	Aspect=Imp|Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	1	ccomp	_	_
6	в	в	ADP	Spsl	Case=Loc	7	case	_	_
7	горах	гора	NOUN	Ncfpln	Animacy=Inan|Case=Loc|Gender=Fem|Number=Plur	5	obl	_	SpaceAfter=No
8	,	,	PUNCT	U	_	5	punct	_	_
9	моряки	моряк	NOUN	Ncmpny	Animacy=Anim|Case=Nom|Gender=Masc|Number=Plur	11	nsubj	_	_
10	заздрісно	заздрісно	ADV	R	_	11	advmod	_	_
11	визнали	визнати	VERB	Vmeis-p	Aspect=Perf|Mood=Ind|Number=Plur|Tense=Past|VerbForm=Fin	0	root	_	SpaceAfter=No
12	,	,	PUNCT	U	_	19	punct	_	_
13	що	що	SCONJ	Css	_	19	mark	_	_
14	це	це	PRON	Pd--nnsnn	Animacy=Inan|Case=Nom|Gender=Neut|PronType=Dem	19	nsubj	_	_
15	теж	теж	ADV	R	_	19	advmod	_	_
16	дуже	дуже	ADV	Rp	Degree=Pos	19	advmod	_	_
17	-	-	PUNCT	U	_	18	punct	_	_
18	дуже	дуже	ADV	Rp	Degree=Pos	16	flat	_	_
19	добре	добре	ADV	Rp	Degree=Pos	11	ccomp	_	SpaceAfter=No
20	.	.	PUNCT	U	_	11	punct	_	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 9 flat	color:blue
1	Начальниця	начальниця	NOUN	Ncfsny	Animacy=Anim|Case=Nom|Gender=Fem	6	nsubj	_	_
2	дитячої	дитячий	ADJ	Ao-fsgf	Case=Gen|Gender=Fem	3	amod	_	_
3	кімнати	кімната	NOUN	Ncfsgn	Animacy=Inan|Case=Gen|Gender=Fem	1	nmod	_	_
4	Смірнова	Смірнова	PROPN	Npfsny	Animacy=Anim|Case=Nom|Gender=Fem|NameType=Sur	1	appos	_	_
5	не	не	PART	Q	Polarity=Neg	6	advmod	_	_
6	пропускала	пропускати	VERB	Vmpis-sf	Aspect=Imp|Gender=Fem|Mood=Ind|Tense=Past|VerbForm=Fin	0	root	_	_
7	нагоди	нагода	NOUN	Ncfsgn	Animacy=Inan|Case=Gen|Gender=Fem	6	obj	_	_
8	вдарити	вдарити	VERB	Vmen	Aspect=Perf|VerbForm=Inf	7	acl	_	_
9	когось	хтось	PRON	Pi---y-an	Animacy=Anim|Case=Acc|PronType=Ind	8	flat	_	_
10	із	із	ADP	Spsg	Case=Gen	11	case	_	_
11	затриманих	затриманий	ADJ	Ap--pgf-ep	Aspect=Perf|Case=Gen|Number=Plur|VerbForm=Part|Voice=Pass	9	nmod	_	Promoted=Yes
12	гумовим	гумовий	ADJ	Ao-msif	Case=Ins|Gender=Masc	13	amod	_	_
13	шланґом	шланґ	NOUN	Ncmsin	Animacy=Inan|Case=Ins|Gender=Masc	8	obl	_	_
14	з	з	ADP	Spsi	Case=Ins	15	case	_	_
15	піском	пісок	NOUN	Ncmsin	Animacy=Inan|Case=Ins|Gender=Masc	13	nmod	_	SpaceAfter=No
16	.	.	PUNCT	U	_	6	punct	_	_

~~~


