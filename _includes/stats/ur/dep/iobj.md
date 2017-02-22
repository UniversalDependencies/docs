

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Urdu)

This relation is universal.

824 nodes (1%) are attached to their parents as `iobj`.

816 instances of `iobj` (99%) are right-to-left (child precedes parent).
Average distance between parent and child is 6.38228155339806.

The following 21 pairs of parts of speech are connected with `iobj`: [ur-pos/VERB]()-[ur-pos/NOUN]() (439; 53% instances), [ur-pos/VERB]()-[ur-pos/PROPN]() (215; 26% instances), [ur-pos/VERB]()-[ur-pos/PRON]() (127; 15% instances), [ur-pos/NOUN]()-[ur-pos/NOUN]() (8; 1% instances), [ur-pos/VERB]()-[ur-pos/VERB]() (8; 1% instances), [ur-pos/NOUN]()-[ur-pos/PROPN]() (4; 0% instances), [ur-pos/ADJ]()-[ur-pos/NOUN]() (3; 0% instances), [ur-pos/ADJ]()-[ur-pos/PRON]() (3; 0% instances), [ur-pos/NOUN]()-[ur-pos/PRON]() (3; 0% instances), [ur-pos/NOUN]()-[ur-pos/ADJ]() (2; 0% instances), [ur-pos/VERB]()-[ur-pos/ADJ]() (2; 0% instances), [ur-pos/ADJ]()-[ur-pos/PROPN]() (1; 0% instances), [ur-pos/NOUN]()-[ur-pos/ADP]() (1; 0% instances), [ur-pos/NOUN]()-[ur-pos/VERB]() (1; 0% instances), [ur-pos/NUM]()-[ur-pos/ADP]() (1; 0% instances), [ur-pos/PRON]()-[ur-pos/DET]() (1; 0% instances), [ur-pos/PROPN]()-[ur-pos/ADP]() (1; 0% instances), [ur-pos/PROPN]()-[ur-pos/PART]() (1; 0% instances), [ur-pos/PROPN]()-[ur-pos/PRON]() (1; 0% instances), [ur-pos/PUNCT]()-[ur-pos/NOUN]() (1; 0% instances), [ur-pos/VERB]()-[ur-pos/NUM]() (1; 0% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 5 iobj	color:blue
1	اس	یہ	DET	DEM	Case=Nom|Number=Sing|Person=3|PronType=Dem	2	det	_	ChunkId=NP|ChunkType=child
2	سلسلے	سلسلہ	NOUN	NN	Case=Acc|Gender=Masc|Number=Sing|Person=3	9	advmod	_	Vib=0|Tam=0|ChunkId=NP|ChunkType=head
3	مےں	مےں	ADP	PSP	AdpType=Post	2	case	_	ChunkId=NP|ChunkType=child
4	دو	دو	NUM	QC	NumType=Card	5	nummod	_	ChunkId=NP2|ChunkType=child
5	افراد	فرد	NOUN	NN	Case=Acc|Gender=Masc|Number=Plur|Person=3	9	iobj	_	Vib=0|Tam=0|ChunkId=NP2|ChunkType=head
6	کو	کو	ADP	PSP	AdpType=Post	5	case	_	ChunkId=NP2|ChunkType=child
7	حراست	حراست	NOUN	NN	Case=Acc|Gender=Masc|Number=Sing|Person=3	9	advmod	_	Vib=0|Tam=0|ChunkId=NP3|ChunkType=head
8	مےں	مےں	ADP	PSP	AdpType=Post	7	case	_	ChunkId=NP3|ChunkType=child
9	لیا	لے	VERB	VM	Aspect=Perf|Gender=Masc|Number=Sing|VerbForm=Part|Voice=Pass	0	root	_	Vib=یا|Tam=yA|ChunkId=VGF|ChunkType=head|Stype=declarative
10	گیا	جا	AUX	VAUX	Aspect=Perf|Gender=Masc|Number=Sing|VerbForm=Part	9	aux	_	Vib=1یا|Tam=yA1|ChunkId=VGF|ChunkType=child
11	ہے	ہے	AUX	VAUX	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	10	aux	_	SpaceAfter=No|Vib=ہے|Tam=hE|ChunkId=VGF|ChunkType=child
12	۔	۔	PUNCT	SYM	_	9	punct	_	ChunkId=VGF|ChunkType=child

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 13 7 iobj	color:blue
1	انہوں	وہ	PRON	PRP	Case=Acc|Number=Sing|Person=3|Polite=Form|PronType=Prs	13	nsubj	_	Vib=0|Tam=0|ChunkId=NP|ChunkType=head
2	نے	نے	ADP	PSP	AdpType=Post	1	case	_	ChunkId=NP|ChunkType=child
3	پہلے	پہلے	ADV	NST	AdpType=Post|Case=Nom|Gender=Masc|Number=Sing|Person=3	13	advmod	_	AltTag=ADV-NOUN|ChunkId=NP2|ChunkType=head
4	ہی	ہی	PART	RP	_	3	dep	_	ChunkId=NP2|ChunkType=child
5	ایس	ایس	PROPN	NNPC	Case=Nom|Gender=Masc|Number=Sing|Person=3	7	compound	_	Vib=0|Tam=0|ChunkId=NP3|ChunkType=child
6	آئی	آئی	PROPN	NNPC	Case=Nom|Gender=Masc|Number=Sing|Person=3	7	compound	_	Vib=0|Tam=0|ChunkId=NP3|ChunkType=child
7	ٹی	ٹی	PROPN	NNP	Case=Acc|Gender=Masc|Number=Sing|Person=3	13	iobj	_	Vib=0|Tam=0|ChunkId=NP3|ChunkType=head
8	کو	کو	ADP	PSP	AdpType=Post	7	case	_	ChunkId=NP3|ChunkType=child
9	تفصیلی	تفصیلی	ADJ	JJ	Case=Acc	10	amod	_	ChunkId=NP4|ChunkType=child
10	حقائق	حقائق	NOUN	NN	Case=Acc|Gender=Masc|Number=Plur|Person=3	13	obj	_	Vib=0|Tam=0|ChunkId=NP4|ChunkType=head
11	سے	سے	ADP	PSP	AdpType=Post	10	case	_	ChunkId=NP4|ChunkType=child
12	واقف	واقف	ADJ	JJ	_	13	compound	_	ChunkId=JJP|ChunkType=head
13	کروا	کروا	VERB	VM	Voice=Act	0	root	_	Vib=0|Tam=0|ChunkId=VGF|ChunkType=head|Stype=declarative
14	دیا	دے	AUX	VAUX	Aspect=Perf|Gender=Masc|Number=Sing|VerbForm=Part	13	aux	_	Vib=یا|Tam=yA|ChunkId=VGF|ChunkType=child
15	تھا	تھا	AUX	VAUX	Gender=Masc|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	14	aux	_	SpaceAfter=No|Vib=تھا|Tam=WA|ChunkId=VGF|ChunkType=child
16	۔	۔	PUNCT	SYM	_	13	punct	_	ChunkId=VGF|ChunkType=child

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 3 iobj	color:blue
1	ڈاکٹروں	ڈاکٹر	NOUN	NN	Case=Acc|Gender=Masc|Number=Plur|Person=3	8	nsubj	_	Vib=0|Tam=0|ChunkId=NP|ChunkType=head
2	نے	نے	ADP	PSP	AdpType=Post	1	case	_	ChunkId=NP|ChunkType=child
3	انہیں	وہ	PRON	PRP	Case=Nom|Gender=Masc|Number=Plur|Person=3|PronType=Prs	5	iobj	_	Vib=0|Tam=0|ChunkId=NP2|ChunkType=head
4	حیدرآباد	حیدرآباد	PROPN	NNP	Case=Acc|Gender=Masc|Number=Sing|Person=3	5	advmod	_	Vib=0|Tam=0|ChunkId=NP3|ChunkType=head
5	جانے	جا	VERB	VM	Aspect=Perf|Case=Acc|VerbForm=Part	7	nmod	_	Vib=یا|Tam=yA|ChunkId=VGNN|ChunkType=head
6	کا	کا	ADP	PSP	AdpType=Post|Case=Nom|Gender=Masc|Number=Sing	5	mark	_	ChunkId=VGNN|ChunkType=child
7	مشورہ	مشورہ	NOUN	NN	Case=Nom|Gender=Masc|Number=Sing|Person=3	8	compound	_	Vib=0|Tam=0|ChunkId=NP4|ChunkType=head
8	دیا	دے	VERB	VM	Aspect=Perf|Gender=Masc|Number=Sing|VerbForm=Part|Voice=Act	0	root	_	SpaceAfter=No|Vib=یا|Tam=yA|ChunkId=VGF|ChunkType=head|Stype=declarative
9	۔	۔	PUNCT	SYM	_	8	punct	_	ChunkId=VGF|ChunkType=child

~~~


