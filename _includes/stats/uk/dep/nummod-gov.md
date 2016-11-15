

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Ukrainian)

This relation is a language-specific subtype of [nummod]().

16 nodes (1%) are attached to their parents as `nummod:gov`.

15 instances of `nummod:gov` (94%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.375.

The following 3 pairs of parts of speech are connected with `nummod:gov`: [uk-pos/NOUN]()-[uk-pos/NUM]() (14; 88% instances), [uk-pos/ADJ]()-[uk-pos/NUM]() (1; 6% instances), [uk-pos/PRON]()-[uk-pos/NUM]() (1; 6% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 nummod:gov	color:blue
1	Петрусь	Петрусь	PROPN	noun:anim:m:v_naz:prop:lname	Animacy=Anim|Case=Nom|Gender=Masc	2	nsubj	_	_
2	заробив	заробити	VERB	verb:perf:past:m	Aspect=Perf|Gender=Masc|Mood=Ind|Tense=Past|VerbForm=Fin	0	root	_	_
3	200	200	NUM	numr	NumType=Card	4	nummod:gov	_	_
4	гривень	гривня	NOUN	noun:inanim:p:f:v_rod	Animacy=Inan|Case=Gen|Gender=Fem|Number=Plur	2	dobj	_	SpaceAfter=No
5	.	.	PUNCT	punct	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 nummod:gov	color:blue
1	Нас	ми	PRON	noun:anim:p:v_rod:&pron:pers:1	Animacy=Anim|Case=Gen|Number=Plur|Person=1|PronType=Prs	5	nsubj	_	_
2	четверо	четверо	NUM	numr:p:v_naz	Case=Nom|Number=Plur|NumType=Card	1	nummod:gov	_	_
3	—	—	PUNCT	punct	_	5	punct	_	_
4	чудова	чудовий	ADJ	adj:f:v_naz:compb	Case=Nom|Degree=Pos|Gender=Fem	5	amod	_	_
5	команда	команда	NOUN	noun:inanim:f:v_naz	Animacy=Inan|Case=Nom|Gender=Fem	0	root	_	SpaceAfter=No
6	.	.	PUNCT	punct	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 nummod:gov	color:blue
1	Бензин	бензин	NOUN	noun:inanim:m:v_naz	Animacy=Inan|Case=Nom|Gender=Masc	2	nsubj	_	_
2	подешевшав	подешевшати	VERB	verb:perf:past:m	Aspect=Perf|Gender=Masc|Mood=Ind|Tense=Past|VerbForm=Fin	0	root	_	_
3	на	на	ADP	prep:rv_zna	Case=Acc	5	case	_	_
4	півтора	півтора	NUM	numr:m:v_zna:nv	Case=Acc|Gender=Masc|NumType=Card	5	nummod:gov	_	_
5	злотих	злотий	ADJ	adj:p:v_rod	Case=Gen|Number=Plur	2	nmod	_	SpaceAfter=No
6	.	.	PUNCT	punct	_	2	punct	_	_

~~~


