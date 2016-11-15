

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Ukrainian)

This relation is universal.
There are 1 language-specific subtypes of `nummod`: [nummod:gov]().

10 nodes (1%) are attached to their parents as `nummod`.

8 instances of `nummod` (80%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.1.

The following 4 pairs of parts of speech are connected with `nummod`: [uk-pos/NOUN]()-[uk-pos/NUM]() (7; 70% instances), [uk-pos/ADJ]()-[uk-pos/NUM]() (1; 10% instances), [uk-pos/DET]()-[uk-pos/NUM]() (1; 10% instances), [uk-pos/PRON]()-[uk-pos/NUM]() (1; 10% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 nummod	color:blue
1	Павло	Павло	PROPN	noun:anim:m:v_naz:prop:fname	Animacy=Anim|Case=Nom|Gender=Masc	2	nsubj	_	_
2	дав	дати	VERB	verb:perf:past:m	Aspect=Perf|Gender=Masc|Mood=Ind|Tense=Past|VerbForm=Fin	0	root	_	_
3	Петрові	Петро	PROPN	noun:anim:m:v_dav:prop:fname	Animacy=Anim|Case=Dat|Gender=Masc	2	iobj	_	_
4	дві	два	NUM	numr:f:v_zna	Case=Acc|Gender=Fem|NumType=Card	5	nummod	_	_
5	груші	груша	NOUN	noun:inanim:p:f:v_zna	Animacy=Inan|Case=Acc|Gender=Fem|Number=Plur	2	dobj	_	SpaceAfter=No
6	.	.	PUNCT	punct	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 nummod	color:blue
1	Сьогодні	сьогодні	ADV	adv	_	3	advmod	_	_
2	14	14	NUM	numr	NumType=Card	3	nummod	_	_
3	лютого	лютий	ADJ	adj:m:v_rod:compb	Case=Gen|Degree=Pos|Gender=Masc	0	root	_	_
4	—	—	PUNCT	punct	_	3	punct	_	_
5	день	день	NOUN	noun:inanim:m:v_naz	Animacy=Inan|Case=Nom|Gender=Masc	3	appos	_	_
6	святого	святий	ADJ	adj:m:v_rod:compb	Case=Gen|Degree=Pos|Gender=Masc	7	amod	_	_
7	Валентина	Валентин	PROPN	noun:anim:m:v_rod:prop:fname	Animacy=Anim|Case=Gen|Gender=Masc	5	nmod	_	SpaceAfter=No
8	.	.	PUNCT	punct	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 1 nummod	color:blue
1	Сімом	сім	NUM	numr:p:v_dav	Case=Dat|Number=Plur|NumType=Card	3	nummod	_	_
2	з	з	ADP	prep:rv_rod	Case=Gen	3	case	_	_
3	них	вони	PRON	noun:p:v_rod:&pron:pers:3	Case=Gen|Number=Plur|Person=3|PronType=Prs	4	nsubj	_	_
4	довелося	довестися	VERB	verb:rev:perf:past:n	Aspect=Perf|Gender=Neut|Mood=Ind|Tense=Past|VerbForm=Fin	0	root	_	_
5	піти	піти	VERB	verb:perf:inf	Aspect=Perf|VerbForm=Inf	4	xcomp	_	SpaceAfter=No
6	.	.	PUNCT	punct	_	4	punct	_	_

~~~


