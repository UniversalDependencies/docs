

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Urdu)

This relation is universal.

1073 nodes (1%) are attached to their parents as `cop`.

1073 instances of `cop` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.44547996272134.

The following 8 pairs of parts of speech are connected with `cop`: [ur-pos/NOUN]()-[ur-pos/AUX]() (580; 54% instances), [ur-pos/ADJ]()-[ur-pos/AUX]() (348; 32% instances), [ur-pos/PRON]()-[ur-pos/AUX]() (64; 6% instances), [ur-pos/PROPN]()-[ur-pos/AUX]() (47; 4% instances), [ur-pos/NUM]()-[ur-pos/AUX]() (20; 2% instances), [ur-pos/ADV]()-[ur-pos/AUX]() (7; 1% instances), [ur-pos/VERB]()-[ur-pos/AUX]() (5; 0% instances), [ur-pos/DET]()-[ur-pos/AUX]() (2; 0% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 6 cop	color:blue
1	ریاستی	ریاستی	ADJ	JJ	Case=Acc	2	amod	_	ChunkId=NP|ChunkType=child
2	وزیر	وزیر	NOUN	NN	Case=Acc|Gender=Masc|Number=Sing|Person=3	5	nmod	_	Vib=0|Tam=0|ChunkId=NP|ChunkType=head
3	کے	کا	ADP	PSP	AdpType=Post|Case=Acc|Gender=Masc|Number=Sing	2	case	_	ChunkId=NP|ChunkType=child
4	بااعتماد	بااعتماد	ADJ	JJ	Case=Nom	5	amod	_	ChunkId=NP2|ChunkType=child
5	قائد	قائد	NOUN	NN	Case=Nom|Gender=Masc|Number=Sing|Person=3	0	root	_	Vib=0|Tam=0|ChunkId=NP2|ChunkType=head
6	ہےں	ہے	AUX	VM	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	5	cop	_	SpaceAfter=No|AltTag=AUX-VERB|Vib=ہے|Tam=hE|ChunkId=VGF|ChunkType=head|Stype=declarative
7	۔	۔	PUNCT	SYM	_	6	punct	_	ChunkId=VGF|ChunkType=child

~~~


~~~ conllu
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 12 cop	color:blue
1	جیہ	جیہ	PROPN	NNPC	Case=Nom|Gender=Fem|Number=Sing|Person=3	2	compound	_	Vib=0|Tam=0|ChunkId=NP|ChunkType=child
2	للیتا	للیتا	PROPN	NNP	Case=Acc|Gender=Fem|Number=Sing|Person=3	11	nmod	_	Vib=0|Tam=0|ChunkId=NP|ChunkType=head
3	کے	کے	ADP	PSP	AdpType=Post	2	case	_	ChunkId=NP|ChunkType=child
4	خلاف	خلاف	ADP	PSP	_	2	case	_	ChunkId=NP|ChunkType=child
5	یہ	یہ	DET	DEM	Case=Nom|Number=Sing|Person=3|PronType=Dem	6	det	_	ChunkId=NP2|ChunkType=child
6	مقدمہ	مقدمہ	NOUN	NN	Case=Nom|Gender=Masc|Number=Sing|Person=3	11	nsubj	_	Vib=0|Tam=0|ChunkId=NP2|ChunkType=head
7	بنگلور	بنگلور	PROPN	NNP	Case=Acc|Gender=Masc|Number=Sing|Person=3	9	nmod	_	Vib=0|Tam=0|ChunkId=NP3|ChunkType=head
8	کی	کا	ADP	PSP	AdpType=Post|Case=Nom|Gender=Fem|Number=Sing	7	case	_	ChunkId=NP3|ChunkType=child
9	عدالت	عدالت	NOUN	NN	Case=Acc|Gender=Fem|Number=Sing|Person=3	11	advmod	_	Vib=0|Tam=0|ChunkId=NP4|ChunkType=head
10	مےں	مےں	ADP	PSP	_	9	case	_	ChunkId=NP4|ChunkType=child
11	جاری	جاری	ADJ	JJ	_	0	root	_	ChunkId=JJP|ChunkType=head
12	ہے	ہے	AUX	VM	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	11	cop	_	SpaceAfter=No|AltTag=AUX-VERB|Vib=ہے|Tam=hE|ChunkId=VGF|ChunkType=head|Stype=declarative
13	۔	۔	PUNCT	SYM	_	12	punct	_	ChunkId=VGF|ChunkType=child

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 3 cop	color:blue
1	پھر	پھر	ADV	RB	_	2	advmod	_	ChunkId=RBP|ChunkType=head
2	کیا	کیا	PRON	WQ	PronType=Int	0	root	_	ChunkId=NP|ChunkType=head
3	تھا	تھا	AUX	VM	Gender=Masc|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	2	cop	_	SpaceAfter=No|AltTag=AUX-VERB|Vib=تھا|Tam=WA|ChunkId=VGF|ChunkType=head|Stype=declarative
4	۔	۔	PUNCT	SYM	_	3	punct	_	ChunkId=VGF|ChunkType=child

~~~


