

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Bulgarian)

This relation is universal.

45 nodes (0%) are attached to their parents as `appos`.

41 instances of `appos` (91%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.53333333333333.

The following 5 pairs of parts of speech are connected with `appos`: [bg-pos/NOUN]()-[bg-pos/NOUN]() (27; 60% instances), [bg-pos/PROPN]()-[bg-pos/PROPN]() (11; 24% instances), [bg-pos/PRON]()-[bg-pos/NOUN]() (3; 7% instances), [bg-pos/ADV]()-[bg-pos/NOUN]() (2; 4% instances), [bg-pos/PROPN]()-[bg-pos/NOUN]() (2; 4% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 4 appos	color:blue
1	-	-	PUNCT	punct	_	7	punct	_	_
2	Да	да	INTJ	Ta	_	7	discourse	_	_
3	,	,	PUNCT	punct	_	7	punct	_	_
4	докторе	доктор	NOUN	Ncms-v	Gender=Masc|Number=Sing	7	appos	_	_
5	,	,	PUNCT	punct	_	7	punct	_	_
6	тази	този	DET	Pde-os-f	Gender=Fem|Number=Sing|PronType=Dem	7	det	_	_
7	нощ	нощ	NOUN	Ncfsi	Definite=Ind|Gender=Fem|Number=Sing	0	root	_	_
8	...	...	PUNCT	punct	_	7	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 6 appos	color:blue
1	Първи	първи	ADJ	Momsi	Definite=Ind|Gender=Masc|Number=Sing|NumType=Ord	2	dobj	_	_
2	стана	стана	VERB	Vppif-o3s	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	_
3	Олександър	олександър	PROPN	Npmsi	Definite=Ind|Gender=Masc|Number=Sing	2	nsubj	_	_
4	Береш	береш	PROPN	Hmsi	Definite=Ind|Gender=Masc|Number=Sing	3	name	_	_
5	(	(	PUNCT	punct	_	6	punct	_	_
6	Укр	укр	PROPN	Npfsi	Definite=Ind|Gender=Fem|Number=Sing	3	appos	_	_
7	)	)	PUNCT	punct	_	6	punct	_	_
8	.	.	PUNCT	punct	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 4 appos	color:blue
1	Тя	аз	PRON	Ppe-os3f	Case=Nom|Gender=Fem|Number=Sing|Person=3|PronType=Prs	8	nsubj	_	_
2	[	[	PUNCT	punct	_	4	punct	_	_
3	писателската	писателски	ADJ	Afsd	Definite=Def|Degree=Pos|Gender=Fem|Number=Sing	4	amod	_	_
4	слава	слава	NOUN	Ncfsi	Definite=Ind|Gender=Fem|Number=Sing	1	appos	_	_
5	]	]	PUNCT	punct	_	4	punct	_	_
6	му	аз	PRON	Ppetds3m	Case=Dat|Gender=Masc|Number=Sing|Person=3|PronType=Prs	8	iobj	_	_
7	се	се	PRON	Ppxta	Case=Acc|PronType=Prs|Reflex=Yes	8	expl	_	_
8	виждаше	виждам-(се)	VERB	Vpitf-m3s	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin|Voice=Act	0	root	_	_
9	сега	сега	ADV	Dt	_	8	advmod	_	_
10	най-достъпна	достъпен	ADJ	Afsi	Definite=Ind|Degree=Sup|Gender=Fem|Number=Sing	8	dobj	_	_
11	.	.	PUNCT	punct	_	8	punct	_	_

~~~


