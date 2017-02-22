

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Ukrainian)

This relation is universal.

208 nodes (2%) are attached to their parents as `acl`.

195 instances of `acl` (94%) are left-to-right (parent precedes child).
Average distance between parent and child is 4.59615384615385.

The following 13 pairs of parts of speech are connected with `acl`: [uk-pos/NOUN]()-[uk-pos/VERB]() (112; 54% instances), [uk-pos/NOUN]()-[uk-pos/ADJ]() (45; 22% instances), [uk-pos/PRON]()-[uk-pos/VERB]() (22; 11% instances), [uk-pos/DET]()-[uk-pos/VERB]() (8; 4% instances), [uk-pos/NOUN]()-[uk-pos/NOUN]() (7; 3% instances), [uk-pos/PROPN]()-[uk-pos/VERB]() (5; 2% instances), [uk-pos/ADJ]()-[uk-pos/VERB]() (2; 1% instances), [uk-pos/PRON]()-[uk-pos/NOUN]() (2; 1% instances), [uk-pos/ADJ]()-[uk-pos/ADJ]() (1; 0% instances), [uk-pos/ADJ]()-[uk-pos/NOUN]() (1; 0% instances), [uk-pos/DET]()-[uk-pos/PRON]() (1; 0% instances), [uk-pos/DET]()-[uk-pos/PROPN]() (1; 0% instances), [uk-pos/NOUN]()-[uk-pos/ADV]() (1; 0% instances).


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 11 acl	color:blue
1	А	а	CCONJ	Ccs	_	6	cc	_	_
2	з	з	ADP	Spsi	Case=Ins	3	case	_	_
3	братом	брат	NOUN	Ncmsiy	Animacy=Anim|Case=Ins|Gender=Masc	5	nmod	_	_
4	Юрком	Юрко	PROPN	Npmsiy	Animacy=Anim|Case=Ins|Gender=Masc|NameType=Giv	3	appos	_	_
5	ми	ми	PRON	Pp-1-ypnn	Animacy=Anim|Case=Nom|Number=Plur|Person=1|PronType=Prs	6	nsubj	_	_
6	придумали	придумати	VERB	Vmeis-p	Aspect=Perf|Mood=Ind|Number=Plur|Tense=Past|VerbForm=Fin	0	root	_	_
7	нову	новий	ADJ	Afpfsas	Case=Acc|Degree=Pos|Gender=Fem	8	amod	_	_
8	розвагу	розвага	NOUN	Ncfsan	Animacy=Inan|Case=Acc|Gender=Fem	6	obj	_	_
9	—	—	PUNCT	U	_	10	punct	_	_
10	бокс	бокс	NOUN	Ncmsan	Animacy=Inan|Case=Acc|Gender=Masc	8	appos	_	_
11	лежачи	лежачи	VERB	Vmpgp	Aspect=Imp|Tense=Pres|VerbForm=Conv	10	acl	_	SpaceAfter=No
12	.	.	PUNCT	U	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 8 acl	color:blue
1	Ми	ми	PRON	Pp-1-ypnn	Animacy=Anim|Case=Nom|Number=Plur|Person=1|PronType=Prs	2	nsubj	_	_
2	знайшли	знайти	VERB	Vmeis-p	Aspect=Perf|Mood=Ind|Number=Plur|Tense=Past|VerbForm=Fin	0	root	_	_
3	справжнього	справжній	ADJ	Ao-msafy	Animacy=Anim|Case=Acc|Gender=Masc	4	amod	_	_
4	дуба	дуб	NOUN	Ncmsan	Animacy=Inan|Animacy[gram]=Anim|Case=Acc|Gender=Masc	2	obj	_	_
5	—	—	PUNCT	U	_	6	punct	_	_
6	човна	човен	NOUN	Ncmsan	Animacy=Inan|Animacy[gram]=Anim|Case=Acc|Gender=Masc	4	appos	_	SpaceAfter=No
7	,	,	PUNCT	U	_	8	punct	_	_
8	витесаного	витесаний	ADJ	Ap-msafyep	Animacy=Anim|Aspect=Perf|Case=Acc|Gender=Masc|VerbForm=Part|Voice=Pass	6	acl	_	_
9	з	з	ADP	Spsg	Case=Gen	11	case	_	_
10	одної	один	NUM	Mlcfsg	Case=Gen|Gender=Fem|NumType=Card	11	nummod	_	_
11	верби	верба	NOUN	Ncfsgn	Animacy=Inan|Case=Gen|Gender=Fem	8	obl	_	SpaceAfter=No
12	.	.	PUNCT	U	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 6 acl	color:blue
1	Скінчилося	скінчитися	VERB	Vmeis-sn	Aspect=Perf|Gender=Neut|Mood=Ind|Tense=Past|VerbForm=Fin	0	root	_	_
2	тим	те	PRON	Pd--nnsin	Animacy=Inan|Case=Ins|Gender=Neut|PronType=Dem	1	obl	_	SpaceAfter=No
3	,	,	PUNCT	U	_	6	punct	_	_
4	що	що	SCONJ	Css	_	6	mark	_	_
5	вони	вони	PRON	Pp-3--pnn	Case=Nom|Number=Plur|Person=3|PronType=Prs	6	nsubj	_	_
6	побили	побити	VERB	Vmeis-p	Aspect=Perf|Mood=Ind|Number=Plur|Tense=Past|VerbForm=Fin	2	acl	_	_
7	нашого	наш	DET	Ppp1mysaa	Animacy=Anim|Case=Acc|Gender=Masc|Person=1|Poss=Yes|PronType=Prs	8	det	_	_
8	товариша	товариш	NOUN	Ncmsay	Animacy=Anim|Case=Acc|Gender=Masc	6	obj	_	SpaceAfter=No
9	.	.	PUNCT	U	_	1	punct	_	_

~~~


