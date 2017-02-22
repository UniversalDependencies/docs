

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Ukrainian)

This relation is universal.

458 nodes (4%) are attached to their parents as `cc`.

458 instances of `cc` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.27947598253275.

The following 8 pairs of parts of speech are connected with `cc`: [uk-pos/VERB]()-[uk-pos/CCONJ]() (251; 55% instances), [uk-pos/NOUN]()-[uk-pos/CCONJ]() (141; 31% instances), [uk-pos/ADJ]()-[uk-pos/CCONJ]() (32; 7% instances), [uk-pos/ADV]()-[uk-pos/CCONJ]() (15; 3% instances), [uk-pos/PROPN]()-[uk-pos/CCONJ]() (12; 3% instances), [uk-pos/DET]()-[uk-pos/CCONJ]() (5; 1% instances), [uk-pos/NUM]()-[uk-pos/CCONJ]() (1; 0% instances), [uk-pos/PART]()-[uk-pos/CCONJ]() (1; 0% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 1 cc	color:blue
1	Зате	зате	CCONJ	Ccs	_	3	cc	_	_
2	негр	негр	NOUN	Ncmsny	Animacy=Anim|Case=Nom|Gender=Masc	3	nsubj	_	_
3	розпливається	розпливатися	VERB	Vmpip3s	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
4	в	в	ADP	Spsl	Case=Loc	5	case	_	_
5	ритмі	ритм	NOUN	Ncmsln	Animacy=Inan|Case=Loc|Gender=Masc	3	obl	_	SpaceAfter=No
6	.	.	PUNCT	U	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 4 cc	color:blue
1	Він	він	PRON	Pp-3m-snn	Case=Nom|Gender=Masc|Person=3|PronType=Prs	2	nsubj	_	_
2	акомпанує	акомпанувати	VERB	Vmpip3s	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
3	вечір	вечір	NOUN	Ncmsan	Animacy=Inan|Case=Acc|Gender=Masc	2	obl	_	_
4	і	і	CCONJ	Ccs	_	6	cc	_	_
5	цілу	цілий	ADJ	Ao-fsas	Case=Acc|Gender=Fem	6	amod	_	_
6	ніч	ніч	NOUN	Ncfsan	Animacy=Inan|Case=Acc|Gender=Fem	3	conj	_	_
7	і	і	CCONJ	Ccs	_	10	cc	_	_
8	зовсім	зовсім	ADV	R	_	10	advmod	_	_
9	не	не	PART	Q	Polarity=Neg	10	advmod	_	_
10	механічно	механічно	ADV	R	_	2	advmod	_	SpaceAfter=No
11	.	.	PUNCT	U	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 cc	color:blue
1	Безсніжна	безсніжний	ADJ	Ao-fsns	Case=Nom|Gender=Fem	0	root	_	Promoted=Yes
2	і	і	CCONJ	Ccs	_	3	cc	_	_
3	злосна	злосний	ADJ	Ao-fsns	Case=Nom|Gender=Fem|Style=Odd	1	conj	_	SpaceAfter=No
4	.	.	PUNCT	U	_	1	punct	_	_

~~~


