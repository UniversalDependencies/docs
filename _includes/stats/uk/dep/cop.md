

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Ukrainian)

This relation is universal.

142 nodes (1%) are attached to their parents as `cop`.

116 instances of `cop` (82%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.58450704225352.

The following 6 pairs of parts of speech are connected with `cop`: [uk-pos/NOUN]()-[uk-pos/AUX]() (64; 45% instances), [uk-pos/ADJ]()-[uk-pos/AUX]() (44; 31% instances), [uk-pos/ADV]()-[uk-pos/AUX]() (31; 22% instances), [uk-pos/NUM]()-[uk-pos/AUX]() (1; 1% instances), [uk-pos/PRON]()-[uk-pos/AUX]() (1; 1% instances), [uk-pos/PROPN]()-[uk-pos/AUX]() (1; 1% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 3 cop	color:blue
1	Сестра	сестра	NOUN	Ncfsny	Animacy=Anim|Case=Nom|Gender=Fem	6	nsubj	_	_
2	Віталія	Віталія	PROPN	Npfsny	Animacy=Anim|Case=Nom|Gender=Fem|NameType=Giv	1	appos	_	_
3	була	бути	AUX	Vapis-sf	Aspect=Imp|Gender=Fem|Mood=Ind|Tense=Past|VerbForm=Fin	6	cop	_	_
4	нашою	наш	DET	Ppp1f-sia	Case=Ins|Gender=Fem|Person=1|Poss=Yes|PronType=Prs	6	det	_	_
5	далекою	далекий	ADJ	Afpfsif	Case=Ins|Degree=Pos|Gender=Fem	6	amod	_	_
6	родичкою	родичка	NOUN	Ncfsiy	Animacy=Anim|Case=Ins|Gender=Fem	0	root	_	_
7	по	по	ADP	Spsl	Case=Loc	8	case	_	_
8	лінії	лінія	NOUN	Ncfsln	Animacy=Inan|Case=Loc|Gender=Fem	6	nmod	_	_
9	Ігнатія	Ігнатій	PROPN	Npmsgy	Animacy=Anim|Case=Gen|Gender=Masc|NameType=Giv	8	nmod	_	SpaceAfter=No
10	.	.	PUNCT	U	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 cop	color:blue
1	Тоді	тоді	ADV	Pd------r	PronType=Dem	4	advmod	_	_
2	Франківськ	Франківськ	PROPN	Npmsnn	Animacy=Inan|Case=Nom|Gender=Masc	4	nsubj	_	_
3	був	бути	AUX	Vapis-sm	Aspect=Imp|Gender=Masc|Mood=Ind|Tense=Past|VerbForm=Fin	4	cop	_	_
4	подібний	подібний	ADJ	Afpmsnf	Case=Nom|Degree=Pos|Gender=Masc	0	root	_	_
5	на	на	ADP	Spsa	Case=Acc	7	case	_	_
6	окуповане	окупований	ADJ	Ap-nsas-ep	Aspect=Perf|Case=Acc|Gender=Neut|VerbForm=Part|Voice=Pass	7	amod	_	_
7	місто	місто	NOUN	Ncnsan	Animacy=Inan|Case=Acc|Gender=Neut	4	obl	_	SpaceAfter=No
8	.	.	PUNCT	U	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 5 cop	color:blue
1	Хоч	хоч	SCONJ	Css	_	6	mark	_	_
2	наше	наш	DET	Ppp1n-saa	Case=Acc|Gender=Neut|Person=1|Poss=Yes|PronType=Prs	3	det	_	_
3	вікно	вікно	NOUN	Ncnsan	Animacy=Inan|Case=Acc|Gender=Neut	6	obj	_	_
4	важко	важко	ADV	Rp	Degree=Pos	6	advmod	_	_
5	було	бути	AUX	Vapis-sn	Aspect=Imp|Gender=Neut|Mood=Ind|Tense=Past|VerbForm=Fin	4	cop	_	_
6	зробити	зробити	VERB	Vmen	Aspect=Perf|VerbForm=Inf	0	root	_	_
7	темним	темний	ADJ	Afpnsif	Case=Ins|Degree=Pos|Gender=Neut	6	xcomp	_	SpaceAfter=No
8	.	.	PUNCT	U	_	6	punct	_	_

~~~


