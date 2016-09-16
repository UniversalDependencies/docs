

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Turkish)

This relation is a language-specific subtype of [nmod]().

3976 nodes (7%) are attached to their parents as `nmod:poss`.

3962 instances of `nmod:poss` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.61116700201207.

The following 32 pairs of parts of speech are connected with `nmod:poss`: [tr-pos/NOUN]()-[tr-pos/NOUN]() (2001; 50% instances), [tr-pos/VERB]()-[tr-pos/NOUN]() (374; 9% instances), [tr-pos/NOUN]()-[tr-pos/PROPN]() (365; 9% instances), [tr-pos/ADJ]()-[tr-pos/NOUN]() (349; 9% instances), [tr-pos/NOUN]()-[tr-pos/VERB]() (228; 6% instances), [tr-pos/NOUN]()-[tr-pos/ADJ]() (209; 5% instances), [tr-pos/NOUN]()-[tr-pos/PRON]() (99; 2% instances), [tr-pos/VERB]()-[tr-pos/PROPN]() (45; 1% instances), [tr-pos/VERB]()-[tr-pos/PRON]() (43; 1% instances), [tr-pos/ADJ]()-[tr-pos/PRON]() (35; 1% instances), [tr-pos/VERB]()-[tr-pos/VERB]() (33; 1% instances), [tr-pos/VERB]()-[tr-pos/ADJ]() (31; 1% instances), [tr-pos/PRON]()-[tr-pos/NOUN]() (26; 1% instances), [tr-pos/ADJ]()-[tr-pos/PROPN]() (25; 1% instances), [tr-pos/ADJ]()-[tr-pos/ADJ]() (21; 1% instances), [tr-pos/NOUN]()-[tr-pos/NUM]() (21; 1% instances), [tr-pos/ADJ]()-[tr-pos/VERB]() (20; 1% instances), [tr-pos/NUM]()-[tr-pos/NOUN]() (19; 0% instances), [tr-pos/ADJ]()-[tr-pos/NUM]() (6; 0% instances), [tr-pos/PRON]()-[tr-pos/PRON]() (5; 0% instances), [tr-pos/PRON]()-[tr-pos/ADJ]() (3; 0% instances), [tr-pos/PROPN]()-[tr-pos/NOUN]() (3; 0% instances), [tr-pos/ADP]()-[tr-pos/ADJ]() (2; 0% instances), [tr-pos/ADP]()-[tr-pos/NOUN]() (2; 0% instances), [tr-pos/ADP]()-[tr-pos/VERB]() (2; 0% instances), [tr-pos/NUM]()-[tr-pos/VERB]() (2; 0% instances), [tr-pos/VERB]()-[tr-pos/NUM]() (2; 0% instances), [tr-pos/ADJ]()-[tr-pos/PUNCT]() (1; 0% instances), [tr-pos/ADP]()-[tr-pos/PROPN]() (1; 0% instances), [tr-pos/NUM]()-[tr-pos/PRON]() (1; 0% instances), [tr-pos/PRON]()-[tr-pos/PROPN]() (1; 0% instances), [tr-pos/VERB]()-[tr-pos/ADP]() (1; 0% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 nmod:poss	color:blue
1	En	en	ADV	Adverb	_	2	advmod	_	_
2	sonunda	sonunda	ADV	Adverb	_	9	advmod	_	_
3	içeriden	içeri	NOUN	Noun	Case=Abl|Number=Sing|Person=3	9	nmod	_	_
4	gök	gök	NOUN	Noun	Case=Nom|Number=Sing|Person=3	5	nmod:poss	_	_
5	gürültüsü	gürültü	NOUN	Noun	Case=Nom|Number=Sing|Number[psor]=Sing|Person=3|Person[psor]=3	8	nmod	_	_
6	gibi	gibi	ADP	PCNom	_	5	case	_	_
7	bir	bir	NUM	ANum	NumType=Card	8	det	_	_
8	ses	ses	NOUN	Noun	Case=Nom|Number=Sing|Person=3	9	nsubj	_	_
9	gelmiş	gel	VERB	Verb	Aspect=Perf|Evidentiality=Nfh|Mood=Ind|Negative=Pos|Number=Sing|Person=3|Tense=Past	0	root	_	_
10	.	.	PUNCT	Punc	_	9	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 nmod:poss	color:blue
1	Dedemin	dede	NOUN	Noun	Case=Gen|Number=Sing|Number[psor]=Sing|Person=3|Person[psor]=1	2	nmod:poss	_	_
2	anlattıkları	anlat	VERB	Verb	Aspect=Perf|Case=Nom|Mood=Ind|Negative=Pos|Number[psor]=Sing|Person[psor]=3|Tense=Past|VerbForm=Part	7	nsubj	_	_
3	bana	ben	PRON	Pers	Case=Dat|Number=Sing|Person=1|PronType=Prs	7	nmod	_	_
4	tarih	tarih	NOUN	Noun	Case=Nom|Number=Sing|Person=3	5	nmod:poss	_	_
5	bilgisi	bilgi	NOUN	Noun	Case=Nom|Number=Sing|Number[psor]=Sing|Person=3|Person[psor]=3	7	nmod	_	_
6	gibi	gibi	ADP	PCNom	_	5	case	_	_
7	geliyor	gel	VERB	Verb	Aspect=Prog|Mood=Ind|Negative=Pos|Number=Sing|Person=3|Register=Inf|Tense=Pres	0	root	_	_
8	.	.	PUNCT	Punc	_	7	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 nmod:poss	color:blue
1	Rokfor'un	Rokfor	PROPN	Prop	Case=Gen|Number=Sing|Person=3	2	nmod:poss	_	_
2	efsanesi	efsane	NOUN	Noun	Case=Nom|Number=Sing|Number[psor]=Sing|Person=3|Person[psor]=3	9	conj	_	_
3	:	:	PUNCT	Punc	_	2	punct	_	_
4	Vaktiyle	vakit	NOUN	Noun	Case=Ins|Number=Sing|Number[psor]=Sing|Person=3|Person[psor]=3	9	nmod	_	_
5	,	,	PUNCT	Punc	_	9	punct	_	_
6	genç	genç	ADJ	Adj	_	8	amod	_	_
7	bir	bir	NUM	ANum	NumType=Card	8	det	_	_
8	çoban	çoban	NOUN	Noun	Case=Nom|Number=Sing|Person=3	9	nsubj	_	_
9	var	var	ADJ	NAdj	Case=Nom|Number=Sing|Person=3	0	root	_	_
10	mış	i	AUX	Zero	Aspect=Perf|Evidentiality=Nfh|Mood=Ind|Number=Sing|Person=3|Tense=Past	9	cop	_	_
11	.	.	PUNCT	Punc	_	9	punct	_	_

~~~


