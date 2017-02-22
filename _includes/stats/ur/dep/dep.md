

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Urdu)

This relation is universal.

2075 nodes (2%) are attached to their parents as `dep`.

1536 instances of `dep` (74%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.99951807228916.

The following 41 pairs of parts of speech are connected with `dep`: [ur-pos/NOUN]()-[ur-pos/PART]() (764; 37% instances), [ur-pos/PROPN]()-[ur-pos/PART]() (517; 25% instances), [ur-pos/PRON]()-[ur-pos/PART]() (250; 12% instances), [ur-pos/NUM]()-[ur-pos/PART]() (112; 5% instances), [ur-pos/ADJ]()-[ur-pos/PART]() (83; 4% instances), [ur-pos/ADV]()-[ur-pos/PART]() (47; 2% instances), [ur-pos/VERB]()-[ur-pos/PART]() (43; 2% instances), [ur-pos/ADP]()-[ur-pos/PART]() (30; 1% instances), [ur-pos/DET]()-[ur-pos/PART]() (24; 1% instances), [ur-pos/PART]()-[ur-pos/PART]() (22; 1% instances), [ur-pos/NUM]()-[ur-pos/NUM]() (18; 1% instances), [ur-pos/NOUN]()-[ur-pos/PRON]() (16; 1% instances), [ur-pos/ADJ]()-[ur-pos/VERB]() (15; 1% instances), [ur-pos/VERB]()-[ur-pos/ADJ]() (15; 1% instances), [ur-pos/NOUN]()-[ur-pos/VERB]() (14; 1% instances), [ur-pos/PROPN]()-[ur-pos/VERB]() (14; 1% instances), [ur-pos/VERB]()-[ur-pos/NOUN]() (14; 1% instances), [ur-pos/PROPN]()-[ur-pos/PROPN]() (13; 1% instances), [ur-pos/SCONJ]()-[ur-pos/PART]() (10; 0% instances), [ur-pos/VERB]()-[ur-pos/NUM]() (9; 0% instances), [ur-pos/CCONJ]()-[ur-pos/PART]() (7; 0% instances), [ur-pos/NOUN]()-[ur-pos/PROPN]() (6; 0% instances), [ur-pos/ADJ]()-[ur-pos/ADJ]() (5; 0% instances), [ur-pos/AUX]()-[ur-pos/PART]() (5; 0% instances), [ur-pos/VERB]()-[ur-pos/VERB]() (3; 0% instances), [ur-pos/PRON]()-[ur-pos/PRON]() (2; 0% instances), [ur-pos/VERB]()-[ur-pos/PRON]() (2; 0% instances), [ur-pos/VERB]()-[ur-pos/PROPN]() (2; 0% instances), [ur-pos/ADJ]()-[ur-pos/NOUN]() (1; 0% instances), [ur-pos/ADJ]()-[ur-pos/NUM]() (1; 0% instances), [ur-pos/ADJ]()-[ur-pos/PRON]() (1; 0% instances), [ur-pos/ADV]()-[ur-pos/ADV]() (1; 0% instances), [ur-pos/DET]()-[ur-pos/VERB]() (1; 0% instances), [ur-pos/NOUN]()-[ur-pos/ADJ]() (1; 0% instances), [ur-pos/NOUN]()-[ur-pos/NOUN]() (1; 0% instances), [ur-pos/NOUN]()-[ur-pos/NUM]() (1; 0% instances), [ur-pos/PART]()-[ur-pos/DET]() (1; 0% instances), [ur-pos/PRON]()-[ur-pos/NOUN]() (1; 0% instances), [ur-pos/VERB]()-[ur-pos/ADV]() (1; 0% instances), [ur-pos/VERB]()-[ur-pos/AUX]() (1; 0% instances), [ur-pos/VERB]()-[ur-pos/PUNCT]() (1; 0% instances).


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 8 dep	color:blue
1	اس	یہ	DET	DEM	Case=Nom|Number=Sing|Person=3|PronType=Dem	2	det	_	ChunkId=NP|ChunkType=child
2	دوران	دوران	ADV	NST	AdpType=Post|Case=Nom|Gender=Masc|Number=Sing|Person=3	12	advmod	_	AltTag=ADV-NOUN|ChunkId=NP|ChunkType=head
3	پڑوسی	پڑوسی	NOUN	NN	Case=Nom|Gender=Masc|Number=Sing|Person=3	4	nmod	_	Vib=0|Tam=0|ChunkId=NP2|ChunkType=child
4	بھوٹان	بھوٹان	PROPN	NNP	Case=Acc|Gender=Masc|Number=Sing|Person=3	6	nmod	_	Vib=0|Tam=0|ChunkId=NP2|ChunkType=head
5	کی	کا	ADP	PSP	AdpType=Post|Case=Nom|Gender=Fem|Number=Sing	4	case	_	ChunkId=NP2|ChunkType=child
6	ٹیموں	ٹیم	NOUN	NN	Case=Acc|Gender=Masc|Number=Plur|Person=3	12	nsubj	_	Vib=0|Tam=0|ChunkId=NP3|ChunkType=head
7	نے	نے	ADP	PSP	AdpType=Post	6	case	_	ChunkId=NP3|ChunkType=child
8	بھی	بھی	PART	RP	_	6	dep	_	ChunkId=NP3|ChunkType=child
9	تلاشی	تلاشی	ADJ	JJ	Case=Nom	10	amod	_	ChunkId=NP4|ChunkType=child
10	مہم	مہم	NOUN	NN	Case=Nom|Gender=Masc|Number=Sing|Person=3	12	obj	_	Vib=0|Tam=0|ChunkId=NP4|ChunkType=head
11	شروع	شروع	NOUN	NN	Case=Nom|Gender=Masc|Number=Sing|Person=3	12	compound	_	Vib=0|Tam=0|ChunkId=NP5|ChunkType=head
12	کر	کر	VERB	VM	Voice=Act	0	root	_	Vib=0|Tam=0|ChunkId=VGF|ChunkType=head|Stype=declarative
13	دی	دے	AUX	VAUX	Aspect=Perf|Gender=Fem|Number=Sing|VerbForm=Part	12	aux	_	Vib=یا|Tam=yA|ChunkId=VGF|ChunkType=child
14	ہے	ہے	AUX	VAUX	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	13	aux	_	SpaceAfter=No|Vib=ہے|Tam=hE|ChunkId=VGF|ChunkType=child
15	۔	۔	PUNCT	SYM	_	12	punct	_	ChunkId=VGF|ChunkType=child

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 1 dep	color:blue
1	حضرت	حضرت	PART	RP	_	3	dep	_	ChunkId=NP|ChunkType=child
2	بایزید	بایزید	PROPN	NNPC	Case=Nom|Gender=Masc|Number=Sing|Person=3	3	compound	_	Vib=0|Tam=0|ChunkId=NP|ChunkType=child
3	بسطامی	بسطامی	PROPN	NNP	Case=Nom|Gender=Masc|Number=Sing|Person=3	6	nmod	_	Vib=0|Tam=0|ChunkId=NP|ChunkType=child
4	رحمۃ	رحمۃ	NOUN	NNC	_	6	compound	_	ChunkId=NP|ChunkType=child
5	اللہ	اللہ	NOUN	NNC	_	6	compound	_	ChunkId=NP|ChunkType=child
6	علیہ	علیہ	NOUN	NN	_	8	nmod	_	ChunkId=NP|ChunkType=head
7	کے	کا	ADP	PSP	AdpType=Post|Case=Nom|Gender=Masc|Number=Sing	6	case	_	ChunkId=NP|ChunkType=child
8	دور	دور	NOUN	NN	Case=Acc|Gender=Masc|Number=Sing|Person=3	13	advmod	_	Vib=0|Tam=0|ChunkId=NP2|ChunkType=head
9	مےں	مےں	ADP	PSP	AdpType=Post	8	case	_	ChunkId=NP2|ChunkType=child
10	اےک	اےک	NUM	QC	NumType=Card	11	nummod	_	ChunkId=NP3|ChunkType=child
11	شخص	شخص	NOUN	NN	Case=Nom|Gender=Masc|Number=Sing|Person=3	13	nsubj	_	Vib=0|Tam=0|ChunkId=NP3|ChunkType=head
12	فوت	فوت	NOUN	NN	Case=Nom|Gender=Masc|Number=Sing|Person=3	13	compound	_	Vib=0|Tam=0|ChunkId=NP4|ChunkType=head
13	ہو	ہو	VERB	VM	Voice=Act	0	root	_	Vib=0|Tam=0|ChunkId=VGF|ChunkType=head|Stype=declarative
14	گیا	جا	AUX	VAUX	Aspect=Perf|Gender=Masc|Number=Sing|VerbForm=Part	13	aux	_	SpaceAfter=No|Vib=یا1|Tam=yA1|ChunkId=VGF|ChunkType=child
15	۔	۔	PUNCT	SYM	_	13	punct	_	ChunkId=VGF|ChunkType=child

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 8 dep	color:blue
1	کارپوریٹ	کارپوریٹر	NOUN	NN	Case=Acc|Gender=Masc|Number=Sing|Person=3	2	nmod	_	Vib=0|Tam=0|ChunkId=NP|ChunkType=child
2	ہاسپٹلس	ہاسپٹلس	NOUN	NN	Case=Acc|Gender=Masc|Number=Sing|Person=3	4	nmod	_	Vib=0|Tam=0|ChunkId=NP|ChunkType=head
3	کا	کا	ADP	PSP	AdpType=Post|Case=Nom|Gender=Masc|Number=Sing	2	case	_	ChunkId=NP|ChunkType=child
4	حال	حال	NOUN	NN	Case=Acc|Gender=Masc|Number=Sing|Person=3	9	nsubj	_	Vib=0|Tam=0|ChunkId=NP2|ChunkType=head
5	تو	تو	PART	RP	_	4	dep	_	ChunkId=NP2|ChunkType=child
6	اس	یہ	PRON	PRP	Case=Acc|Number=Sing|Person=3|PronType=Prs	9	advmod	_	Vib=0|Tam=0|ChunkId=NP3|ChunkType=head
7	سے	سے	ADP	PSP	AdpType=Post	6	case	_	ChunkId=NP3|ChunkType=child
8	بھی	بھی	PART	RP	_	6	dep	_	ChunkId=NP3|ChunkType=child
9	برا	برا	ADJ	JJ	Case=Nom|Gender=Masc|Number=Sing	0	root	_	ChunkId=JJP|ChunkType=head
10	ہے	ہے	AUX	VM	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	9	cop	_	SpaceAfter=No|AltTag=AUX-VERB|Vib=ہے|Tam=hE|ChunkId=VGF|ChunkType=head|Stype=declarative
11	۔	۔	PUNCT	SYM	_	10	punct	_	ChunkId=VGF|ChunkType=child

~~~


