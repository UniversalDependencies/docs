

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Hebrew)

This relation is universal.

3925 nodes (2%) are attached to their parents as `dobj`.

3795 instances of `dobj` (97%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.64433121019108.

The following 24 pairs of parts of speech are connected with `dobj`: [he-pos/VERB]()-[he-pos/NOUN]() (3189; 81% instances), [he-pos/VERB]()-[he-pos/PRON]() (398; 10% instances), [he-pos/VERB]()-[he-pos/PROPN]() (175; 4% instances), [he-pos/VERB]()-[he-pos/ADV]() (34; 1% instances), [he-pos/VERB]()-[he-pos/VERB]() (31; 1% instances), [he-pos/VERB]()-[he-pos/NUM]() (29; 1% instances), [he-pos/AUX]()-[he-pos/NOUN]() (25; 1% instances), [he-pos/NOUN]()-[he-pos/NOUN]() (10; 0% instances), [he-pos/VERB]()-[he-pos/ADJ]() (10; 0% instances), [he-pos/VERB]()-[he-pos/DET]() (5; 0% instances), [he-pos/ADJ]()-[he-pos/NOUN]() (3; 0% instances), [he-pos/AUX]()-[he-pos/ADV]() (2; 0% instances), [he-pos/AUX]()-[he-pos/PRON]() (2; 0% instances), [he-pos/NOUN]()-[he-pos/PRON]() (2; 0% instances), [he-pos/ADJ]()-[he-pos/PRON]() (1; 0% instances), [he-pos/ADJ]()-[he-pos/VERB]() (1; 0% instances), [he-pos/ADV]()-[he-pos/NOUN]() (1; 0% instances), [he-pos/NOUN]()-[he-pos/ADV]() (1; 0% instances), [he-pos/NOUN]()-[he-pos/DET]() (1; 0% instances), [he-pos/NOUN]()-[he-pos/PROPN]() (1; 0% instances), [he-pos/PRON]()-[he-pos/ADV]() (1; 0% instances), [he-pos/PRON]()-[he-pos/PRON]() (1; 0% instances), [he-pos/VERB]()-[he-pos/ADP]() (1; 0% instances), [he-pos/VERB]()-[he-pos/PART]() (1; 0% instances).


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 9 dobj	color:blue
1	כתוב	_	VERB	VERB	Gender=Masc|HebBinyan=PAAL|Number=Sing|Person=1,2,3|VerbForm=Part	0	root	_	_
2	:	_	PUNCT	PUNCT	_	6	punct	_	_
3	"	_	PUNCT	PUNCT	_	6	punct	_	_
4	ב	_	ADP	ADP	_	5	case	_	_
5	חוכמה	_	NOUN	NOUN	Gender=Fem|Number=Sing	6	nmod	_	_
6	עשה	_	VERB	VERB	Gender=Masc|HebBinyan=PAAL|Mood=Imp|Number=Sing|Person=2	1	ccomp	_	_
7	לך	_	ADP	ADP	_	8	case	_	_
8	אתה_	_	PRON	PRON	Gender=Masc|Number=Sing|Person=2|PronType=Prs	6	nmod	_	_
9	מלחמה	_	NOUN	NOUN	Gender=Fem|Number=Sing	6	dobj	_	_
10	"	_	PUNCT	PUNCT	_	6	punct	_	_
11	.	_	PUNCT	PUNCT	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 dobj	color:blue
1	אבקשכם	_	VERB	VERB	_	0	root	_	_
2	אתם_	_	PRON	PRON	Case=Acc|Gender=Masc|Number=Plur|Person=2|PronType=Prs	1	dobj	_	_
3	לשלוח	_	VERB	VERB	HebBinyan=PAAL|VerbForm=Inf	1	xcomp	_	_
4	אלי	_	ADP	ADP	_	5	case	_	_
5	אני_	_	PRON	PRON	Gender=Fem,Masc|Number=Sing|Person=1|PronType=Prs	3	nmod	_	_
6	חומר	_	NOUN	NOUN	Gender=Masc|Number=Sing	3	dobj	_	_
7	זה	_	PRON	PRON	Gender=Masc|Number=Sing|Person=3|PronType=Dem	6	amod	_	_
8	.	_	PUNCT	PUNCT	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 4 dobj	color:blue
1	קחו	_	VERB	VERB	Gender=Fem,Masc|HebBinyan=PAAL|Mood=Imp|Number=Plur|Person=2	0	root	_	_
2	למשל	_	CONJ	CONJ	_	1	advmod	_	_
3	את	_	PART	PART	Case=Acc	4	case:acc	_	_
4	מריה	_	PROPN	PROPN	_	1	dobj	_	_
5	ואראלה	_	PROPN	PROPN	_	4	name	_	_
6	.	_	PUNCT	PUNCT	_	1	punct	_	_

~~~


