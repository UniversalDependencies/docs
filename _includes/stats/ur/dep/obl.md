

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Urdu)

This relation is universal.

1842 nodes (1%) are attached to their parents as `obl`.

1795 instances of `obl` (97%) are right-to-left (child precedes parent).
Average distance between parent and child is 9.2785016286645.

The following 11 pairs of parts of speech are connected with `obl`: [ur-pos/VERB]()-[ur-pos/NOUN]() (1158; 63% instances), [ur-pos/VERB]()-[ur-pos/PRON]() (288; 16% instances), [ur-pos/VERB]()-[ur-pos/PROPN]() (240; 13% instances), [ur-pos/VERB]()-[ur-pos/ADV]() (61; 3% instances), [ur-pos/VERB]()-[ur-pos/PART]() (42; 2% instances), [ur-pos/VERB]()-[ur-pos/ADJ]() (28; 2% instances), [ur-pos/VERB]()-[ur-pos/VERB]() (13; 1% instances), [ur-pos/VERB]()-[ur-pos/NUM]() (7; 0% instances), [ur-pos/VERB]()-[ur-pos/ADP]() (2; 0% instances), [ur-pos/VERB]()-[ur-pos/X]() (2; 0% instances), [ur-pos/VERB]()-[ur-pos/DET]() (1; 0% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 12 2 obl	color:blue
1	اس	یہ	DET	DEM	Case=Acc|Number=Sing|Person=3|PronType=Dem	2	det	_	ChunkId=NP|ChunkType=child
2	اقدام	اقدام	NOUN	NN	Case=Acc|Gender=Masc|Number=Sing|Person=3	12	obl	_	Vib=0|Tam=0|ChunkId=NP|ChunkType=head
3	سے	سے	ADP	PSP	AdpType=Post	2	case	_	ChunkId=NP|ChunkType=child
4	سرکاری	سرکاری	ADJ	JJ	Case=Acc	5	amod	_	ChunkId=NP2|ChunkType=child
5	خزانہ	خزانہ	NOUN	NN	Case=Acc|Gender=Masc|Number=Sing|Person=3	12	advmod	_	Vib=0|Tam=0|ChunkId=NP2|ChunkType=head
6	پر	پر	ADP	PSP	AdpType=Post	5	case	_	ChunkId=NP2|ChunkType=child
7	95	95	NUM	QCC	NumType=Card	8	case	_	ChunkId=NP3|ChunkType=child
8	کروڑ	کروڑ	NUM	QC	NumType=Card	9	nummod	_	ChunkId=NP3|ChunkType=child
9	روپیوں	روپیہ	NOUN	NN	Case=Acc|Gender=Masc|Number=Plur|Person=3	11	nmod	_	Vib=0|Tam=0|ChunkId=NP3|ChunkType=head
10	کا	کا	ADP	PSP	AdpType=Post|Case=Nom|Gender=Masc|Number=Sing	9	case	_	ChunkId=NP3|ChunkType=child
11	خسارہ	خسارہ	NOUN	NN	Case=Nom|Gender=Masc|Number=Sing|Person=3	12	compound	_	Vib=0|Tam=0|ChunkId=NP4|ChunkType=head
12	ہوا	ہو	VERB	VM	Aspect=Perf|Gender=Masc|Number=Sing|VerbForm=Part|Voice=Act	0	root	_	Vib=یا|Tam=yA|ChunkId=VGF|ChunkType=head|Stype=declarative
13	ہے	ہے	AUX	VAUX	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	12	aux	_	SpaceAfter=No|Vib=ہے|Tam=hE|ChunkId=VGF|ChunkType=child
14	۔	۔	PUNCT	SYM	_	12	punct	_	ChunkId=VGF|ChunkType=child

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 1 obl	color:blue
1	اس	یہ	PRON	PRP	Case=Acc|Number=Sing|Person=3|PronType=Prs	10	obl	_	Vib=0|Tam=0|ChunkId=NP|ChunkType=head
2	کے	کے	ADP	PSP	AdpType=Post	1	case	_	ChunkId=NP|ChunkType=child
3	علاوہ	علاوہ	ADP	PSP	AdpType=Post	1	case	_	ChunkId=NP|ChunkType=child
4	انتخابات	انتخاب	NOUN	NN	Case=Acc|Gender=Masc|Number=Plur|Person=3	6	nmod	_	Vib=0|Tam=0|ChunkId=NP2|ChunkType=head
5	کی	کا	ADP	PSP	AdpType=Post|Case=Nom|Gender=Fem|Number=Sing	4	case	_	ChunkId=NP2|ChunkType=child
6	تاریخ	تاریخ	NOUN	NN	Case=Acc|Gender=Fem|Number=Sing|Person=3	9	nmod	_	Vib=0|Tam=0|ChunkId=NP3|ChunkType=head
7	کا	کا	ADP	PSP	AdpType=Post|Case=Nom|Gender=Masc|Number=Sing	6	case	_	ChunkId=NP3|ChunkType=child
8	بھی	بھی	PART	RP	_	6	dep	_	ChunkId=NP3|ChunkType=child
9	تعین	تعین	NOUN	NN	Case=Nom|Gender=Masc|Number=Sing|Person=3	10	compound	_	Vib=0|Tam=0|ChunkId=NP4|ChunkType=head
10	کیا	کر	VERB	VM	Aspect=Perf|Gender=Masc|Number=Sing|VerbForm=Part|Voice=Pass	0	root	_	Vib=یا|Tam=yA|ChunkId=VGF|ChunkType=head|Stype=declarative
11	جا	جا	AUX	VAUX	_	10	aux	_	Vib=0|Tam=0|ChunkId=VGF|ChunkType=child
12	چکا	چک	AUX	VAUX	Aspect=Perf|Gender=Masc|Number=Sing|VerbForm=Part	11	aux	_	Vib=یا|Tam=yA|ChunkId=VGF|ChunkType=child
13	ہے	ہے	AUX	VAUX	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	12	aux	_	SpaceAfter=No|Vib=ہے|Tam=hE|ChunkId=VGF|ChunkType=child
14	۔	۔	PUNCT	SYM	_	10	punct	_	ChunkId=VGF|ChunkType=child

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 13 4 obl	color:blue
1	نیز	نیز	CCONJ	CC	_	13	cc	_	ChunkId=CCP|ChunkType=head
2	آئی	آئی	PROPN	NNPC	Case=Nom|Gender=Masc|Number=Sing|Person=3	4	compound	_	Vib=0|Tam=0|ChunkId=NP|ChunkType=child
3	پی	پی	PROPN	NNPC	Case=Nom|Gender=Masc|Number=Sing|Person=3	4	compound	_	Vib=0|Tam=0|ChunkId=NP|ChunkType=child
4	ایل	ایل	PROPN	NNP	Case=Acc|Gender=Masc|Number=Sing|Person=3	13	obl	_	Vib=0|Tam=0|ChunkId=NP|ChunkType=head
5	کے	کے	ADP	PSP	AdpType=Post	4	case	_	ChunkId=NP|ChunkType=child
6	بعد	بعد	ADP	NST	AdpType=Post|Case=Nom|Gender=Masc|Number=Sing|Person=3	4	case	_	AltTag=ADP-NOUN|ChunkId=NP|ChunkType=child
7	سیریز	سیریز	NOUN	NN	Case=Acc|Gender=Masc|Number=Sing|Person=3	13	advmod	_	Vib=0|Tam=0|ChunkId=NP2|ChunkType=head
8	کے	کے	ADP	PSP	AdpType=Post	7	case	_	ChunkId=NP2|ChunkType=child
9	متعلق	متعلق	ADP	PSP	_	7	case	_	ChunkId=NP2|ChunkType=child
10	مزید	مزید	ADJ	JJ	_	12	amod	_	ChunkId=JJP|ChunkType=head
11	تبادلہ	تبادلہ	NOUN	NN	Case=Nom|Gender=Masc|Number=Sing|Person=3	12	nmod	_	Vib=0|Tam=0|ChunkId=NP3|ChunkType=child
12	خیال	خیال	NOUN	NN	Case=Nom|Gender=Masc|Number=Sing|Person=3	13	nsubj	_	Vib=0|Tam=0|ChunkId=NP3|ChunkType=head
13	ہوگا	ہو	VERB	VM	Gender=Masc|Number=Sing|Person=3|Voice=Act	0	root	_	SpaceAfter=No|Vib=گا|Tam=ga|ChunkId=VGF|ChunkType=head|Stype=declarative
14	۔	۔	PUNCT	SYM	_	13	punct	_	ChunkId=VGF|ChunkType=child

~~~


