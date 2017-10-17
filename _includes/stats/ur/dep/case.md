

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Urdu)

This relation is universal.

23415 nodes (19%) are attached to their parents as `case`.

22727 instances of `case` (97%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.26325005338458.

The following 48 pairs of parts of speech are connected with `case`: [ur-pos/NOUN]()-[ur-pos/ADP]() (14826; 63% instances), [ur-pos/PROPN]()-[ur-pos/ADP]() (5199; 22% instances), [ur-pos/PRON]()-[ur-pos/ADP]() (2400; 10% instances), [ur-pos/ADP]()-[ur-pos/ADP]() (231; 1% instances), [ur-pos/AUX]()-[ur-pos/ADP]() (182; 1% instances), [ur-pos/NOUN]()-[ur-pos/PRON]() (140; 1% instances), [ur-pos/NUM]()-[ur-pos/ADP]() (92; 0% instances), [ur-pos/NUM]()-[ur-pos/NUM]() (75; 0% instances), [ur-pos/ADV]()-[ur-pos/ADP]() (40; 0% instances), [ur-pos/ADJ]()-[ur-pos/ADJ]() (33; 0% instances), [ur-pos/NOUN]()-[ur-pos/NOUN]() (25; 0% instances), [ur-pos/PRON]()-[ur-pos/PRON]() (18; 0% instances), [ur-pos/ADV]()-[ur-pos/ADV]() (15; 0% instances), [ur-pos/NOUN]()-[ur-pos/PROPN]() (15; 0% instances), [ur-pos/PROPN]()-[ur-pos/PROPN]() (15; 0% instances), [ur-pos/NOUN]()-[ur-pos/ADV]() (14; 0% instances), [ur-pos/NOUN]()-[ur-pos/ADJ]() (12; 0% instances), [ur-pos/ADJ]()-[ur-pos/ADP]() (7; 0% instances), [ur-pos/ADJ]()-[ur-pos/PART]() (7; 0% instances), [ur-pos/NOUN]()-[ur-pos/NUM]() (7; 0% instances), [ur-pos/ADJ]()-[ur-pos/ADV]() (6; 0% instances), [ur-pos/DET]()-[ur-pos/ADP]() (6; 0% instances), [ur-pos/VERB]()-[ur-pos/ADJ]() (5; 0% instances), [ur-pos/VERB]()-[ur-pos/ADV]() (5; 0% instances), [ur-pos/NOUN]()-[ur-pos/DET]() (4; 0% instances), [ur-pos/PROPN]()-[ur-pos/PRON]() (4; 0% instances), [ur-pos/VERB]()-[ur-pos/NOUN]() (4; 0% instances), [ur-pos/VERB]()-[ur-pos/VERB]() (4; 0% instances), [ur-pos/PART]()-[ur-pos/DET]() (2; 0% instances), [ur-pos/PROPN]()-[ur-pos/ADJ]() (2; 0% instances), [ur-pos/PROPN]()-[ur-pos/NOUN]() (2; 0% instances), [ur-pos/VERB]()-[ur-pos/AUX]() (2; 0% instances), [ur-pos/ADJ]()-[ur-pos/DET]() (1; 0% instances), [ur-pos/ADJ]()-[ur-pos/PRON]() (1; 0% instances), [ur-pos/ADP]()-[ur-pos/VERB]() (1; 0% instances), [ur-pos/ADV]()-[ur-pos/DET]() (1; 0% instances), [ur-pos/ADV]()-[ur-pos/NOUN]() (1; 0% instances), [ur-pos/ADV]()-[ur-pos/PART]() (1; 0% instances), [ur-pos/DET]()-[ur-pos/DET]() (1; 0% instances), [ur-pos/NOUN]()-[ur-pos/PART]() (1; 0% instances), [ur-pos/NOUN]()-[ur-pos/X]() (1; 0% instances), [ur-pos/NUM]()-[ur-pos/ADJ]() (1; 0% instances), [ur-pos/PART]()-[ur-pos/ADJ]() (1; 0% instances), [ur-pos/PART]()-[ur-pos/ADP]() (1; 0% instances), [ur-pos/PART]()-[ur-pos/PART]() (1; 0% instances), [ur-pos/PART]()-[ur-pos/PUNCT]() (1; 0% instances), [ur-pos/VERB]()-[ur-pos/PROPN]() (1; 0% instances), [ur-pos/X]()-[ur-pos/ADP]() (1; 0% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 3 case	color:blue
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
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 8 case	color:blue
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
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 case	color:blue
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


