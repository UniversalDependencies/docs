

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Ukrainian)

This relation is universal.

5 nodes (0%) are attached to their parents as `dislocated`.

3 instances of `dislocated` (60%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.2.

The following 5 pairs of parts of speech are connected with `dislocated`: [uk-pos/ADV]()-[uk-pos/NOUN]() (1; 20% instances), [uk-pos/ADV]()-[uk-pos/VERB]() (1; 20% instances), [uk-pos/NOUN]()-[uk-pos/VERB]() (1; 20% instances), [uk-pos/VERB]()-[uk-pos/NOUN]() (1; 20% instances), [uk-pos/VERB]()-[uk-pos/PROPN]() (1; 20% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 1 dislocated	color:blue
1	Учасник	учасник	NOUN	Ncmsny	Animacy=Anim|Case=Nom|Gender=Masc	6	dislocated	_	_
2	жорстокого	жорстокий	ADJ	Afpmsgf	Case=Gen|Degree=Pos|Gender=Masc	3	amod	_	_
3	віку	вік	NOUN	Ncmsgn	Animacy=Inan|Case=Gen|Gender=Masc	1	nmod	_	SpaceAfter=No
4	,	,	PUNCT	U	_	1	punct	_	_
5	він	він	PRON	Pp-3m-snn	Case=Nom|Gender=Masc|Person=3|PronType=Prs	6	nsubj	_	_
6	носив	носити	VERB	Vmpis-sm	Aspect=Imp|Gender=Masc|Mood=Ind|Tense=Past|VerbForm=Fin	0	root	_	_
7	і	і	CCONJ	Ccs	_	8	cc	_	_
8	фузію	фузія	NOUN	Ncfsan	Animacy=Inan|Case=Acc|Gender=Fem	6	obj	_	SpaceAfter=No
9	,	,	PUNCT	U	_	11	punct	_	_
10	і	і	CCONJ	Ccs	_	11	cc	_	_
11	машингвера	машингвер	NOUN	Ncmsan	Animacy=Inan|Animacy[gram]=Anim|Case=Acc|Gender=Masc|Style=Odd	8	conj	_	SpaceAfter=No
12	,	,	PUNCT	U	_	14	punct	_	_
13	і	і	CCONJ	Ccs	_	14	cc	_	_
14	гвера	гвер	NOUN	Ncmsan	Animacy=Inan|Animacy[gram]=Anim|Case=Acc|Gender=Masc|Style=Odd	8	conj	_	SpaceAfter=No
15	.	.	PUNCT	U	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 5 dislocated	color:blue
1	Їх	вони	PRON	Pp-3--pgn	Case=Gen|Number=Plur|Person=3|PronType=Prs	2	obj	_	_
2	немало	немало	ADV	R	_	0	root	_	SpaceAfter=No
3	,	,	PUNCT	U	_	5	punct	_	_
4	таких	такий	DET	Pd----pga	Case=Gen|Number=Plur|PronType=Dem	5	det	_	_
5	стежечок	стежечка	NOUN	Ncfpgn	Animacy=Inan|Case=Gen|Gender=Fem|Number=Plur	2	dislocated	_	SpaceAfter=No
6	.	.	PUNCT	U	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 20	bgColor:blue
# visual-style 20	fgColor:white
# visual-style 26	bgColor:blue
# visual-style 26	fgColor:white
# visual-style 26 20 dislocated	color:blue
1	Після	після	ADP	Spsg	Case=Gen	3	case	_	_
2	першого	перший	ADJ	Mlomsg	Case=Gen|Degree=Pos|Gender=Masc|NumType=Ord	3	amod	_	_
3	репортажу	репортаж	NOUN	Ncmsgn	Animacy=Inan|Case=Gen|Gender=Masc	12	obl	_	SpaceAfter=No
4	,	,	PUNCT	U	_	5	punct	_	_
5	готуючись	готуючись	VERB	Vmpgp	Aspect=Imp|Tense=Pres|VerbForm=Conv	12	advcl	_	_
6	до	до	ADP	Spsg	Case=Gen	7	case	_	_
7	наступних	наступний	ADJ	Ao--pgf	Case=Gen|Number=Plur	5	obl	_	Promoted=Yes|SpaceAfter=No
8	,	,	PUNCT	U	_	5	punct	_	_
9	раптом	раптом	ADV	R	_	12	advmod	_	_
10	від	від	ADP	Spsg	Case=Gen	11	case	_	_
11	колег	колега	NOUN	Ncmpgy	Animacy=Anim|Case=Gen|Gender=Masc|Number=Plur	12	obl	_	_
12	дізнаюся	дізнаватися	VERB	Vmpip1s	Aspect=Imp|Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	0	root	_	SpaceAfter=No
13	,	,	PUNCT	U	_	26	punct	_	_
14	що	що	SCONJ	Css	_	26	mark	_	_
15	«	«	PUNCT	U	_	16	punct	_	SpaceAfter=No
16	зверху	зверху	ADV	R	_	26	advmod	_	SpaceAfter=No
17	»	»	PUNCT	U	_	16	punct	_	_
18	—	—	PUNCT	U	_	20	punct	_	_
19	з	з	ADP	Spsg	Case=Gen	20	case	_	_
20	НТКУ	НТКУ	PROPN	Y	Abbr=Yes|Animacy=Inan|Case=Gen|Gender=Fem	26	dislocated	_	SpaceAfter=No
21	,	,	PUNCT	U	_	23	punct	_	_
22	від	від	ADP	Spsg	Case=Gen	23	case	_	_
23	пана	пан	NOUN	Ncmsgy	Animacy=Anim|Case=Gen|Gender=Masc	20	appos	_	_
24	Аласанії	Аласанія	PROPN	Npmsgy	Animacy=Anim|Case=Gen|Gender=Masc|NameType=Sur	23	appos	_	SpaceAfter=No
25	,	,	PUNCT	U	_	23	punct	_	_
26	прислано	прислати	VERB	Vmeo	Aspect=Perf|Mood=Ind|Person=0|VerbForm=Fin	12	ccomp	_	_
27	«	«	PUNCT	U	_	28	punct	_	SpaceAfter=No
28	їхнього	їхній	DET	Ppp3mysaa	Animacy=Anim|Case=Acc|Gender=Masc|Person=3|Poss=Yes|PronType=Prs	30	det	_	SpaceAfter=No
29	»	»	PUNCT	U	_	28	punct	_	_
30	коментатора	коментатор	NOUN	Ncmsay	Animacy=Anim|Case=Acc|Gender=Masc	26	obj	_	SpaceAfter=No
31	,	,	PUNCT	U	_	35	punct	_	_
32	а	а	CCONJ	Ccs	_	35	cc	_	_
33	мій	мій	DET	Ppp1mnsaa	Animacy=Inan|Case=Acc|Gender=Masc|Person=1|Poss=Yes|PronType=Prs	34	det	_	_
34	договір	договір	NOUN	Ncmsan	Animacy=Inan|Case=Acc|Gender=Masc	35	obj	_	_
35	анулюють	анулювати	VERB	Vmeif3p	Aspect=Perf|Mood=Ind|Number=Plur|Person=3|Tense=Fut|VerbForm=Fin	26	conj	_	SpaceAfter=No
36	»	»	PUNCT	U	_	12	punct	_	SpaceAfter=No
37	,	,	PUNCT	U	_	39	punct	_	_
38	—	—	PUNCT	U	_	39	punct	_	_
39	написав	написати	VERB	Vmeis-sm	Aspect=Perf|Gender=Masc|Mood=Ind|Tense=Past|VerbForm=Fin	12	parataxis	_	_
40	Довгич	Довгич	PROPN	Npmsny	Animacy=Anim|Case=Nom|Gender=Masc|NameType=Sur	39	nsubj	_	SpaceAfter=No
41	.	.	PUNCT	U	_	12	punct	_	_

~~~


