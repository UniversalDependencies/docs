

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Hebrew)

This relation is universal.

3640 nodes (2%) are attached to their parents as `obj`.

3518 instances of `obj` (97%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.68763736263736.

The following 24 pairs of parts of speech are connected with `obj`: [he-pos/VERB]()-[he-pos/NOUN]() (2944; 81% instances), [he-pos/VERB]()-[he-pos/PRON]() (374; 10% instances), [he-pos/VERB]()-[he-pos/PROPN]() (164; 5% instances), [he-pos/VERB]()-[he-pos/ADV]() (33; 1% instances), [he-pos/VERB]()-[he-pos/VERB]() (31; 1% instances), [he-pos/VERB]()-[he-pos/NUM]() (28; 1% instances), [he-pos/AUX]()-[he-pos/NOUN]() (24; 1% instances), [he-pos/VERB]()-[he-pos/ADJ]() (10; 0% instances), [he-pos/NOUN]()-[he-pos/NOUN]() (9; 0% instances), [he-pos/VERB]()-[he-pos/DET]() (5; 0% instances), [he-pos/ADJ]()-[he-pos/NOUN]() (2; 0% instances), [he-pos/AUX]()-[he-pos/ADV]() (2; 0% instances), [he-pos/AUX]()-[he-pos/PRON]() (2; 0% instances), [he-pos/NOUN]()-[he-pos/PRON]() (2; 0% instances), [he-pos/ADJ]()-[he-pos/PRON]() (1; 0% instances), [he-pos/ADJ]()-[he-pos/VERB]() (1; 0% instances), [he-pos/ADV]()-[he-pos/NOUN]() (1; 0% instances), [he-pos/NOUN]()-[he-pos/ADV]() (1; 0% instances), [he-pos/NOUN]()-[he-pos/DET]() (1; 0% instances), [he-pos/NOUN]()-[he-pos/PROPN]() (1; 0% instances), [he-pos/PRON]()-[he-pos/ADV]() (1; 0% instances), [he-pos/PRON]()-[he-pos/PRON]() (1; 0% instances), [he-pos/VERB]()-[he-pos/ADP]() (1; 0% instances), [he-pos/VERB]()-[he-pos/PART]() (1; 0% instances).


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 9 obj	color:blue
1	כתוב	כתב	VERB	VERB	Gender=Masc|HebBinyan=PAAL|Number=Sing|Person=1,2,3|VerbForm=Part|Voice=Act	0	root	_	_
2	:	_	PUNCT	PUNCT	_	6	punct	_	_
3	"	_	PUNCT	PUNCT	_	6	punct	_	_
4	ב	ב	ADP	ADP	_	5	case	_	_
5	חוכמה	חוכמה	NOUN	NOUN	Gender=Fem|Number=Sing	6	obl	_	_
6	עשה	עשה	VERB	VERB	Gender=Masc|HebBinyan=PAAL|Mood=Imp|Number=Sing|Person=2|Voice=Act	1	ccomp	_	_
7	לך	ל	ADP	ADP	_	8	case	_	_
8	_אתה	הוא	PRON	PRON	Gender=Masc|Number=Sing|Person=2|PronType=Prs	6	obl	_	_
9	מלחמה	מלחמה	NOUN	NOUN	Gender=Fem|Number=Sing	6	obj	_	_
10	"	_	PUNCT	PUNCT	_	6	punct	_	_
11	.	_	PUNCT	PUNCT	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 obj	color:blue
1	אבקשכם	_	VERB	VERB	_	0	root	_	_
2	_אתם	הוא	PRON	PRON	Case=Acc|Gender=Masc|Number=Plur|Person=2|PronType=Prs	1	obj	_	_
3	לשלוח	שלח	VERB	VERB	HebBinyan=PAAL|VerbForm=Inf|Voice=Act	1	xcomp	_	_
4	אלי	אל	ADP	ADP	_	5	case	_	_
5	_אני	הוא	PRON	PRON	Gender=Fem,Masc|Number=Sing|Person=1|PronType=Prs	3	obl	_	_
6	חומר	חומר	NOUN	NOUN	Gender=Masc|Number=Sing	3	obj	_	_
7	זה	זה	PRON	PRON	Gender=Masc|Number=Sing|Person=3|PronType=Dem	6	amod	_	_
8	.	_	PUNCT	PUNCT	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 4 obj	color:blue
1	קחו	לקח	VERB	VERB	Gender=Fem,Masc|HebBinyan=PAAL|Mood=Imp|Number=Plur|Person=2|Voice=Act	0	root	_	_
2	למשל	למשל	CCONJ	CCONJ	_	1	advmod	_	_
3	את	את	PART	PART	Case=Acc	4	case:acc	_	_
4	מריה	מריה	PROPN	PROPN	_	1	obj	_	_
5	ואראלה	ואראלה	PROPN	PROPN	_	4	flat:name	_	_
6	.	_	PUNCT	PUNCT	_	1	punct	_	_

~~~


