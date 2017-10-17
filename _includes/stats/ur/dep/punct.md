

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Urdu)

This relation is universal.

6275 nodes (5%) are attached to their parents as `punct`.

5530 instances of `punct` (88%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.94836653386454.

The following 37 pairs of parts of speech are connected with `punct`: [ur-pos/VERB]()-[ur-pos/PUNCT]() (4351; 69% instances), [ur-pos/AUX]()-[ur-pos/PUNCT]() (625; 10% instances), [ur-pos/PROPN]()-[ur-pos/PUNCT]() (584; 9% instances), [ur-pos/NOUN]()-[ur-pos/PUNCT]() (389; 6% instances), [ur-pos/PUNCT]()-[ur-pos/PUNCT]() (68; 1% instances), [ur-pos/NUM]()-[ur-pos/PUNCT]() (58; 1% instances), [ur-pos/ADJ]()-[ur-pos/PUNCT]() (39; 1% instances), [ur-pos/NOUN]()-[ur-pos/PRON]() (25; 0% instances), [ur-pos/PRON]()-[ur-pos/PUNCT]() (24; 0% instances), [ur-pos/PROPN]()-[ur-pos/PROPN]() (18; 0% instances), [ur-pos/ADV]()-[ur-pos/ADV]() (16; 0% instances), [ur-pos/NOUN]()-[ur-pos/PROPN]() (14; 0% instances), [ur-pos/PART]()-[ur-pos/PUNCT]() (10; 0% instances), [ur-pos/NOUN]()-[ur-pos/NOUN]() (8; 0% instances), [ur-pos/ADJ]()-[ur-pos/ADJ]() (7; 0% instances), [ur-pos/DET]()-[ur-pos/PUNCT]() (4; 0% instances), [ur-pos/NOUN]()-[ur-pos/ADV]() (3; 0% instances), [ur-pos/NOUN]()-[ur-pos/X]() (3; 0% instances), [ur-pos/NUM]()-[ur-pos/NUM]() (3; 0% instances), [ur-pos/PROPN]()-[ur-pos/NOUN]() (3; 0% instances), [ur-pos/SCONJ]()-[ur-pos/SCONJ]() (3; 0% instances), [ur-pos/ADV]()-[ur-pos/PUNCT]() (2; 0% instances), [ur-pos/NOUN]()-[ur-pos/DET]() (2; 0% instances), [ur-pos/PROPN]()-[ur-pos/PRON]() (2; 0% instances), [ur-pos/SCONJ]()-[ur-pos/PUNCT]() (2; 0% instances), [ur-pos/ADJ]()-[ur-pos/ADP]() (1; 0% instances), [ur-pos/ADJ]()-[ur-pos/NUM]() (1; 0% instances), [ur-pos/ADJ]()-[ur-pos/PART]() (1; 0% instances), [ur-pos/ADP]()-[ur-pos/PUNCT]() (1; 0% instances), [ur-pos/ADV]()-[ur-pos/ADP]() (1; 0% instances), [ur-pos/NOUN]()-[ur-pos/ADJ]() (1; 0% instances), [ur-pos/NOUN]()-[ur-pos/NUM]() (1; 0% instances), [ur-pos/NUM]()-[ur-pos/DET]() (1; 0% instances), [ur-pos/PART]()-[ur-pos/DET]() (1; 0% instances), [ur-pos/PRON]()-[ur-pos/PRON]() (1; 0% instances), [ur-pos/VERB]()-[ur-pos/ADJ]() (1; 0% instances), [ur-pos/X]()-[ur-pos/PUNCT]() (1; 0% instances).


~~~ conllu
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 12 14 punct	color:blue
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
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 12 13 punct	color:blue
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
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 5 punct	color:blue
1	مرنے	مر	VERB	VM	Case=Acc|VerbForm=Inf	4	nsubj	_	Vib=نا|Tam=nA|ChunkId=VGNN|ChunkType=head
2	والے	والا	ADP	PSP	AdpType=Post|Case=Acc|Gender=Masc|Number=Sing	1	mark	_	ChunkId=VGNN|ChunkType=child
3	نے	نے	ADP	PSP	AdpType=Post	1	mark	_	ChunkId=VGNN|ChunkType=child
4	کہا	کہہ	VERB	VM	Aspect=Perf|Gender=Masc|Number=Sing|VerbForm=Part|Voice=Act	0	root	_	SpaceAfter=No|Vib=یا|Tam=yA|ChunkId=VGF|ChunkType=head|Stype=declarative
5	''	''	PUNCT	SYM	_	6	punct	_	ChunkId=NP|ChunkType=child
6	اللہ	اللہ	PROPN	NNP	Case=Nom|Gender=Masc|Number=Sing|Person=3	10	nsubj	_	Vib=0|Tam=0|ChunkId=NP|ChunkType=head
7	تعالی	تعالی	NOUN	NNC	Case=Acc|Gender=Masc|Number=Sing|Person=3	4	dep	_	Vib=0|Tam=0|ChunkId=NP|ChunkType=child
8	نے	نے	ADP	PSP	AdpType=Post	6	case	_	ChunkId=NP|ChunkType=child
9	مجھے	مےں	PRON	PRP	Case=Acc,Dat|Number=Sing|Person=1|PronType=Prs	10	obj	_	Vib=کو|Tam=ko|ChunkId=NP2|ChunkType=head
10	بخش	بخش	VERB	VM	Case=Nom|Voice=Act	4	obj	_	Vib=0|Tam=0|ChunkId=VGF2|ChunkType=head|Stype=declarative
11	دیا	دیا	AUX	VAUX	Aspect=Perf|Case=Nom|Gender=Masc|Number=Sing|VerbForm=Part	10	aux	_	SpaceAfter=No|Vib=یا|Tam=yA|ChunkId=VGF2|ChunkType=child
12	''	''	PUNCT	SYM	_	10	punct	_	SpaceAfter=No|ChunkId=VGF2|ChunkType=child
13	۔	۔	PUNCT	SYM	_	12	punct	_	ChunkId=VGF2|ChunkType=child

~~~


