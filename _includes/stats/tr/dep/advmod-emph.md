

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Turkish)

This relation is a language-specific subtype of [advmod]().

805 nodes (2%) are attached to their parents as `advmod:emph`.

707 instances of `advmod:emph` (88%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.25590062111801.

The following 43 pairs of parts of speech are connected with `advmod:emph`: [tr-pos/NOUN]()-[tr-pos/CCONJ]() (222; 28% instances), [tr-pos/PRON]()-[tr-pos/CCONJ]() (105; 13% instances), [tr-pos/VERB]()-[tr-pos/CCONJ]() (96; 12% instances), [tr-pos/ADV]()-[tr-pos/CCONJ]() (85; 11% instances), [tr-pos/ADJ]()-[tr-pos/CCONJ]() (55; 7% instances), [tr-pos/NOUN]()-[tr-pos/ADV]() (35; 4% instances), [tr-pos/PROPN]()-[tr-pos/CCONJ]() (35; 4% instances), [tr-pos/NUM]()-[tr-pos/CCONJ]() (26; 3% instances), [tr-pos/CCONJ]()-[tr-pos/CCONJ]() (25; 3% instances), [tr-pos/ADJ]()-[tr-pos/ADV]() (24; 3% instances), [tr-pos/ADV]()-[tr-pos/ADV]() (13; 2% instances), [tr-pos/VERB]()-[tr-pos/ADV]() (12; 1% instances), [tr-pos/NOUN]()-[tr-pos/ADJ]() (9; 1% instances), [tr-pos/DET]()-[tr-pos/CCONJ]() (6; 1% instances), [tr-pos/NUM]()-[tr-pos/ADV]() (5; 1% instances), [tr-pos/PRON]()-[tr-pos/ADV]() (5; 1% instances), [tr-pos/ADP]()-[tr-pos/CCONJ]() (4; 0% instances), [tr-pos/NOUN]()-[tr-pos/AUX]() (4; 0% instances), [tr-pos/NOUN]()-[tr-pos/DET]() (4; 0% instances), [tr-pos/CCONJ]()-[tr-pos/ADV]() (3; 0% instances), [tr-pos/VERB]()-[tr-pos/PRON]() (3; 0% instances), [tr-pos/ADJ]()-[tr-pos/ADJ]() (2; 0% instances), [tr-pos/ADJ]()-[tr-pos/VERB]() (2; 0% instances), [tr-pos/DET]()-[tr-pos/ADV]() (2; 0% instances), [tr-pos/NOUN]()-[tr-pos/NUM]() (2; 0% instances), [tr-pos/PROPN]()-[tr-pos/ADV]() (2; 0% instances), [tr-pos/VERB]()-[tr-pos/ADJ]() (2; 0% instances), [tr-pos/VERB]()-[tr-pos/NOUN]() (2; 0% instances), [tr-pos/ADJ]()-[tr-pos/ADP]() (1; 0% instances), [tr-pos/ADJ]()-[tr-pos/AUX]() (1; 0% instances), [tr-pos/ADJ]()-[tr-pos/NUM]() (1; 0% instances), [tr-pos/ADJ]()-[tr-pos/PRON]() (1; 0% instances), [tr-pos/ADJ]()-[tr-pos/PROPN]() (1; 0% instances), [tr-pos/ADP]()-[tr-pos/ADV]() (1; 0% instances), [tr-pos/ADV]()-[tr-pos/AUX]() (1; 0% instances), [tr-pos/CCONJ]()-[tr-pos/NOUN]() (1; 0% instances), [tr-pos/CCONJ]()-[tr-pos/PUNCT]() (1; 0% instances), [tr-pos/INTJ]()-[tr-pos/CCONJ]() (1; 0% instances), [tr-pos/NOUN]()-[tr-pos/PRON]() (1; 0% instances), [tr-pos/PRON]()-[tr-pos/PRON]() (1; 0% instances), [tr-pos/PROPN]()-[tr-pos/DET]() (1; 0% instances), [tr-pos/PUNCT]()-[tr-pos/DET]() (1; 0% instances), [tr-pos/VERB]()-[tr-pos/VERB]() (1; 0% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 4 advmod:emph	color:blue
1	Başbakan	başbakan	NOUN	Noun	Case=Nom|Number=Sing|Person=3	2	nmod	_	_
2	Gül'ün	Gül	PROPN	Prop	Case=Gen|Number=Sing|Person=3	3	nmod:poss	_	_
3	uçağı	uçak	NOUN	Noun	Case=Nom|Number=Sing|Number[psor]=Sing|Person=3|Person[psor]=3	5	nsubj	_	_
4	da	da	CCONJ	Conj	_	3	advmod:emph	_	_
5	pas	pas	NOUN	Noun	Case=Nom|Number=Sing|Person=3	0	root	_	_
6	geçti	geç	VERB	Verb	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Past	5	compound	_	SpaceAfter=No
7	.	.	PUNCT	Punc	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 5 advmod:emph	color:blue
1	Sakın	sakın	INTJ	Interj	_	6	discourse	_	_
2	ha	ha	INTJ	Interj	_	6	discourse	_	SpaceAfter=No
3	,	,	PUNCT	Punc	_	6	punct	_	_
4	sana	sen	PRON	Pers	Case=Dat|Number=Sing|Person=2|PronType=Prs	6	obl	_	_
5	da	da	CCONJ	Conj	_	4	advmod:emph	_	_
6	musallat	musallat	ADJ	Adj	_	0	root	_	_
7	olur	ol	VERB	Verb	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Aor	6	compound:lvc	_	SpaceAfter=No
8	.	.	PUNCT	Punc	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 5 advmod:emph	color:blue
1	Hatta	hatta	CCONJ	Conj	_	2	advmod:emph	_	_
2	sözcüklerin	sözcük	NOUN	Noun	Case=Gen|Number=Plur|Person=3	3	nmod:poss	_	_
3	yerlerini	yer	NOUN	Noun	Case=Acc|Number=Plur|Number[psor]=Plur|Person=3|Person[psor]=3	6	obj	_	_
4	değiştirip	değiş	VERB	Verb	Aspect=Perf|Mood=Ind|Polarity=Pos|Tense=Pres|VerbForm=Conv|Voice=Cau	6	obj	_	_
5	de	de	CCONJ	Conj	_	4	advmod:emph	_	_
6	sorabiliriz	sor	VERB	Verb	Aspect=Imp|Mood=Pot|Number=Plur|Person=1|Polarity=Pos|Tense=Aor	0	root	_	SpaceAfter=No
7	.	.	PUNCT	Punc	_	6	punct	_	_

~~~


