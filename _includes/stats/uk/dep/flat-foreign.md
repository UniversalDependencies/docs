

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Ukrainian)

This relation is a language-specific subtype of [flat]().
There are also 1 other language-specific subtypes of `flat`: [flat:name]().

6 nodes (0%) are attached to their parents as `flat:foreign`.

6 instances of `flat:foreign` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.16666666666667.

The following 2 pairs of parts of speech are connected with `flat:foreign`: [uk-pos/NOUN]()-[uk-pos/X]() (4; 67% instances), [uk-pos/X]()-[uk-pos/X]() (2; 33% instances).


~~~ conllu
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 12 flat:foreign	color:blue
1	Копчук	Копчук	PROPN	Npmsny	Animacy=Anim|Case=Nom|Gender=Masc|NameType=Sur	3	nsubj	_	_
2	досі	досі	ADV	Pd------r	PronType=Dem	3	advmod	_	_
3	обходив	обходити	VERB	Vmpis-sm	Aspect=Imp|Gender=Masc|Mood=Ind|Tense=Past|VerbForm=Fin	0	root	_	_
4	учительку	учителька	NOUN	Ncfsay	Animacy=Anim|Case=Acc|Gender=Fem	3	obj	_	_
5	біології	біологія	NOUN	Ncfsgn	Animacy=Inan|Case=Gen|Gender=Fem	4	nmod	_	_
6	боком	бік	NOUN	Ncmsin	Animacy=Inan|Case=Ins|Gender=Masc	3	obl	_	SpaceAfter=No
7	,	,	PUNCT	U	_	9	punct	_	_
8	як	як	SCONJ	Css	_	9	mark	_	_
9	гюрзу	гюрза	NOUN	Ncfsay	Animacy=Anim|Case=Acc|Gender=Fem	3	advcl	_	_
10	(	(	PUNCT	U	_	11	punct	_	SpaceAfter=No
11	Macrovipera	Macrovipera	NOUN	Nc----	Foreign=Yes	9	appos	_	_
12	lebetina	lebetina	X	X	Foreign=Yes	11	flat:foreign	_	SpaceAfter=No
13	)	)	PUNCT	U	_	11	punct	_	_
14	на	на	ADP	Spsl	Case=Loc	15	case	_	_
15	дорозі	дорога	NOUN	Ncfsln	Animacy=Inan|Case=Loc|Gender=Fem	9	nmod	_	SpaceAfter=No
16	.	.	PUNCT	U	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 3 flat:foreign	color:blue
1	P	P	X	X	Foreign=Yes	0	root	_	SpaceAfter=No
2	.	.	PUNCT	U	_	1	punct	_	_
3	S	S	X	X	Foreign=Yes	1	flat:foreign	_	SpaceAfter=No
4	.	.	PUNCT	U	_	3	punct	_	_
5	Допіру	допіру	ADV	R	_	6	advmod	_	_
6	заходили	заходити	VERB	Vmpis-p	Aspect=Imp|Mood=Ind|Number=Plur|Tense=Past|VerbForm=Fin	1	parataxis	_	_
7	з	з	ADP	Spsg	Case=Gen	8	case	_	_
8	видавництва	видавництво	NOUN	Ncnsgn	Animacy=Inan|Case=Gen|Gender=Neut	6	obl	_	_
9	«	«	PUNCT	U	_	10	punct	_	SpaceAfter=No
10	Книгоспілка	книгоспілка	NOUN	Ncfsnn	Animacy=Inan|Case=Nom|Gender=Fem	8	appos	_	SpaceAfter=No
11	»	»	PUNCT	U	_	10	punct	_	SpaceAfter=No
12	.	.	PUNCT	U	_	1	punct	_	_

~~~


