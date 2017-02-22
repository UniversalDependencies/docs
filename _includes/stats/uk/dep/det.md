

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Ukrainian)

This relation is universal.
There are 2 language-specific subtypes of `det`: [det:numgov](), [det:nummod]().

375 nodes (3%) are attached to their parents as `det`.

361 instances of `det` (96%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.38666666666667.

The following 7 pairs of parts of speech are connected with `det`: [uk-pos/NOUN]()-[uk-pos/DET]() (352; 94% instances), [uk-pos/PRON]()-[uk-pos/DET]() (14; 4% instances), [uk-pos/VERB]()-[uk-pos/DET]() (3; 1% instances), [uk-pos/DET]()-[uk-pos/DET]() (2; 1% instances), [uk-pos/PROPN]()-[uk-pos/DET]() (2; 1% instances), [uk-pos/ADJ]()-[uk-pos/DET]() (1; 0% instances), [uk-pos/ADV]()-[uk-pos/DET]() (1; 0% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 5 det	color:blue
1	Омонівці	омонівець	NOUN	Ncmpny	Animacy=Anim|Case=Nom|Gender=Masc|Number=Plur	4	nsubj	_	_
2	з	з	ADP	Spsg	Case=Gen	3	case	_	_
3	Одеси	Одеса	PROPN	Npfsgn	Animacy=Inan|Case=Gen|Gender=Fem	1	nmod	_	_
4	патрулювали	патрулювати	VERB	Vmpis-p	Aspect=Imp|Mood=Ind|Number=Plur|Tense=Past|VerbForm=Fin	0	root	_	_
5	всі	весь	DET	Pg---npaa	Animacy=Inan|Case=Acc|Number=Plur|PronType=Tot	7	det	_	_
6	центральні	центральний	ADJ	Ao--pasn	Animacy=Inan|Case=Acc|Number=Plur	7	amod	_	_
7	вулиці	вулиця	NOUN	Ncfpan	Animacy=Inan|Case=Acc|Gender=Fem|Number=Plur	4	obj	_	SpaceAfter=No
8	.	.	PUNCT	U	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 1 det	color:blue
1	Один	один	DET	Pi--m-sna	Case=Nom|Gender=Masc|PronType=Ind	3	det	_	_
2	з	з	ADP	Spsg	Case=Gen	3	case	_	_
3	нас	ми	PRON	Pp-1-ypgn	Animacy=Anim|Case=Gen|Number=Plur|Person=1|PronType=Prs	5	nsubj	_	_
4	навіть	навіть	PART	Q	_	5	discourse	_	_
5	вліпив	вліпити	VERB	Vmeis-sm	Aspect=Perf|Gender=Masc|Mood=Ind|Tense=Past|VerbForm=Fin	0	root	_	_
6	знимку	знимка	NOUN	Ncfsan	Animacy=Inan|Case=Acc|Gender=Fem|Style=Odd	5	obj	_	_
7	Марлі	Марлі	PROPN	Npmsgy	Animacy=Anim|Case=Gen|Gender=Masc|NameType=Sur	6	nmod	_	_
8	у	у	ADP	Spsa	Case=Acc	10	case	_	_
9	свій	свій	DET	Ppp-mnsaa	Animacy=Inan|Case=Acc|Gender=Masc|Poss=Yes|PronType=Prs|Reflex=Yes	10	det	_	_
10	паспорт	паспорт	NOUN	Ncmsan	Animacy=Inan|Case=Acc|Gender=Masc	5	obl	_	SpaceAfter=No
11	.	.	PUNCT	U	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 5 det	color:blue
1	Сніги	сніг	NOUN	Ncmpnn	Animacy=Inan|Case=Nom|Gender=Masc|Number=Plur	2	nsubj	_	_
2	були	бути	VERB	Vapis-p	Aspect=Imp|Mood=Ind|Number=Plur|Tense=Past|VerbForm=Fin	0	root	_	_
3	тими	той	DET	Pd----pia	Case=Ins|Number=Plur|PronType=Dem	4	det	_	_
4	роками	рік	NOUN	Ncmpin	Animacy=Inan|Case=Ins|Gender=Masc|Number=Plur	2	obl	_	_
5	такі	такий	DET	Pd----pna	Case=Nom|Number=Plur|PronType=Dem	2	det	_	SpaceAfter=No
6	,	,	PUNCT	U	_	8	punct	_	_
7	що	що	SCONJ	Css	_	8	mark	_	_
8	доводилося	доводитися	VERB	Vmpis-sn	Aspect=Imp|Gender=Neut|Mood=Ind|Tense=Past|VerbForm=Fin	5	acl	_	_
9	лопату	лопата	NOUN	Ncfsan	Animacy=Inan|Case=Acc|Gender=Fem	12	obj	_	_
10	до	до	ADP	Spsg	Case=Gen	11	case	_	_
11	снігу	сніг	NOUN	Ncmsgn	Animacy=Inan|Case=Gen|Gender=Masc	9	nmod	_	_
12	брати	брати	VERB	Vmpn	Aspect=Imp|VerbForm=Inf	8	xcomp	_	_
13	на	на	ADP	Spsa	Case=Acc	14	case	_	_
14	ніч	ніч	NOUN	Ncfsan	Animacy=Inan|Case=Acc|Gender=Fem	12	obl	_	_
15	до	до	ADP	Spsg	Case=Gen	16	case	_	_
16	хати	хата	NOUN	Ncfsgn	Animacy=Inan|Case=Gen|Gender=Fem	12	obl	_	SpaceAfter=No
17	.	.	PUNCT	U	_	2	punct	_	_

~~~


