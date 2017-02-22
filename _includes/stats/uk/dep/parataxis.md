

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Ukrainian)

This relation is universal.

144 nodes (1%) are attached to their parents as `parataxis`.

133 instances of `parataxis` (92%) are left-to-right (parent precedes child).
Average distance between parent and child is 7.68055555555556.

The following 22 pairs of parts of speech are connected with `parataxis`: [uk-pos/VERB]()-[uk-pos/VERB]() (75; 52% instances), [uk-pos/NOUN]()-[uk-pos/VERB]() (15; 10% instances), [uk-pos/VERB]()-[uk-pos/NOUN]() (9; 6% instances), [uk-pos/NOUN]()-[uk-pos/NOUN]() (6; 4% instances), [uk-pos/VERB]()-[uk-pos/ADV]() (6; 4% instances), [uk-pos/ADV]()-[uk-pos/VERB]() (4; 3% instances), [uk-pos/INTJ]()-[uk-pos/VERB]() (4; 3% instances), [uk-pos/ADJ]()-[uk-pos/ADV]() (3; 2% instances), [uk-pos/ADJ]()-[uk-pos/VERB]() (3; 2% instances), [uk-pos/NOUN]()-[uk-pos/PRON]() (2; 1% instances), [uk-pos/NUM]()-[uk-pos/NOUN]() (2; 1% instances), [uk-pos/PRON]()-[uk-pos/PRON]() (2; 1% instances), [uk-pos/PROPN]()-[uk-pos/VERB]() (2; 1% instances), [uk-pos/VERB]()-[uk-pos/ADJ]() (2; 1% instances), [uk-pos/VERB]()-[uk-pos/PRON]() (2; 1% instances), [uk-pos/ADJ]()-[uk-pos/ADJ]() (1; 1% instances), [uk-pos/DET]()-[uk-pos/VERB]() (1; 1% instances), [uk-pos/PRON]()-[uk-pos/VERB]() (1; 1% instances), [uk-pos/VERB]()-[uk-pos/INTJ]() (1; 1% instances), [uk-pos/VERB]()-[uk-pos/NUM]() (1; 1% instances), [uk-pos/VERB]()-[uk-pos/X]() (1; 1% instances), [uk-pos/X]()-[uk-pos/VERB]() (1; 1% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 5 parataxis	color:blue
1	Ритми	ритм	NOUN	Ncmpnn	Animacy=Inan|Case=Nom|Gender=Masc|Number=Plur	2	nsubj	_	_
2	колишуться	колисатися	VERB	Vmpip3p	Aspect=Imp|Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	SpaceAfter=No
3	,	,	PUNCT	U	_	5	punct	_	_
4	барабан	барабан	NOUN	Ncmsnn	Animacy=Inan|Case=Nom|Gender=Masc	5	nsubj	_	_
5	здригається	здригатися	VERB	Vmpip3s	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	2	parataxis	_	SpaceAfter=No
6	.	.	PUNCT	U	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 4 parataxis	color:blue
1	Словом	слово	NOUN	Ncnsin	Animacy=Inan|Case=Ins|Gender=Neut	0	root	_	SpaceAfter=No
2	,	,	PUNCT	U	_	4	punct	_	_
3	дупа	дупа	NOUN	Ncfsnn	Animacy=Inan|Case=Nom|Gender=Fem	4	nsubj	_	_
4	свербить	свербіти	VERB	Vmpip3s	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	1	parataxis	_	SpaceAfter=No
5	.	.	PUNCT	U	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 6 parataxis	color:blue
1	Він	він	PRON	Pp-3m-snn	Case=Nom|Gender=Masc|Person=3|PronType=Prs	2	nsubj	_	_
2	сказав	сказати	VERB	Vmeis-sm	Aspect=Perf|Gender=Masc|Mood=Ind|Tense=Past|VerbForm=Fin	0	root	_	_
3	—	—	PUNCT	U	_	6	punct	_	_
4	а	а	PART	Q	_	6	discourse	_	_
5	вдруг	вдруг	ADV	R	Foreign=Yes	6	advmod	_	_
6	крушеніє	крушеніє	NOUN	Ncnsnn	Animacy=Inan|Case=Nom|Foreign=Yes|Gender=Neut	2	parataxis	_	Promoted=Yes|SpaceAfter=No
7	.	.	PUNCT	U	_	2	punct	_	_

~~~


