

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Urdu)

This relation is universal.

6193 nodes (5%) are attached to their parents as `amod`.

6148 instances of `amod` (99%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.47101566284515.

The following 34 pairs of parts of speech are connected with `amod`: [ur-pos/NOUN]()-[ur-pos/ADJ]() (5339; 86% instances), [ur-pos/NOUN]()-[ur-pos/VERB]() (292; 5% instances), [ur-pos/PROPN]()-[ur-pos/ADJ]() (266; 4% instances), [ur-pos/PROPN]()-[ur-pos/NOUN]() (60; 1% instances), [ur-pos/NOUN]()-[ur-pos/ADV]() (49; 1% instances), [ur-pos/PROPN]()-[ur-pos/VERB]() (43; 1% instances), [ur-pos/ADV]()-[ur-pos/ADJ]() (29; 0% instances), [ur-pos/NOUN]()-[ur-pos/NOUN]() (20; 0% instances), [ur-pos/PROPN]()-[ur-pos/ADV]() (18; 0% instances), [ur-pos/NOUN]()-[ur-pos/PRON]() (12; 0% instances), [ur-pos/PRON]()-[ur-pos/VERB]() (11; 0% instances), [ur-pos/NOUN]()-[ur-pos/DET]() (10; 0% instances), [ur-pos/NUM]()-[ur-pos/NUM]() (8; 0% instances), [ur-pos/NUM]()-[ur-pos/ADV]() (6; 0% instances), [ur-pos/PRON]()-[ur-pos/ADJ]() (6; 0% instances), [ur-pos/ADP]()-[ur-pos/ADJ]() (3; 0% instances), [ur-pos/NUM]()-[ur-pos/ADJ]() (3; 0% instances), [ur-pos/NOUN]()-[ur-pos/X]() (2; 0% instances), [ur-pos/ADJ]()-[ur-pos/ADJ]() (1; 0% instances), [ur-pos/ADJ]()-[ur-pos/ADV]() (1; 0% instances), [ur-pos/ADJ]()-[ur-pos/VERB]() (1; 0% instances), [ur-pos/ADP]()-[ur-pos/VERB]() (1; 0% instances), [ur-pos/NOUN]()-[ur-pos/ADP]() (1; 0% instances), [ur-pos/NOUN]()-[ur-pos/PART]() (1; 0% instances), [ur-pos/NOUN]()-[ur-pos/PUNCT]() (1; 0% instances), [ur-pos/NUM]()-[ur-pos/DET]() (1; 0% instances), [ur-pos/PART]()-[ur-pos/ADJ]() (1; 0% instances), [ur-pos/PRON]()-[ur-pos/PRON]() (1; 0% instances), [ur-pos/PROPN]()-[ur-pos/ADP]() (1; 0% instances), [ur-pos/PROPN]()-[ur-pos/PART]() (1; 0% instances), [ur-pos/PROPN]()-[ur-pos/PRON]() (1; 0% instances), [ur-pos/VERB]()-[ur-pos/ADJ]() (1; 0% instances), [ur-pos/VERB]()-[ur-pos/ADV]() (1; 0% instances), [ur-pos/VERB]()-[ur-pos/VERB]() (1; 0% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 amod	color:blue
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
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 4 amod	color:blue
1	کرنسی	کرنسی	NOUN	NN	Case=Nom|Gender=Fem|Number=Sing|Person=3	2	nmod	_	Vib=0|Tam=0|ChunkId=NP|ChunkType=child
2	نوٹوں	نوٹ	NOUN	NN	Case=Acc|Gender=Masc|Number=Plur|Person=3	4	obj	_	Vib=0|Tam=0|ChunkId=NP|ChunkType=head
3	کو	کو	ADP	PSP	AdpType=Post	2	case	_	ChunkId=NP|ChunkType=child
4	ہونے	ہو	VERB	VM	Case=Acc|VerbForm=Inf	6	amod	_	Vib=نا|Tam=nA|ChunkId=VGNN|ChunkType=head
5	والے	والا	ADP	PSP	AdpType=Post|Case=Acc|Gender=Masc|Number=Sing	4	mark	_	ChunkId=VGNN|ChunkType=child
6	نقصان	نقصان	NOUN	NN	Case=Acc|Gender=Masc|Number=Sing|Person=3	8	nmod	_	Vib=0|Tam=0|ChunkId=NP2|ChunkType=head
7	کی	کا	ADP	PSP	AdpType=Post|Case=Nom|Gender=Fem|Number=Sing	6	case	_	ChunkId=NP2|ChunkType=child
8	اطلاع	اطلاع	NOUN	NN	Case=Nom|Gender=Fem|Number=Sing|Person=3	13	compound	_	Vib=0|Tam=0|ChunkId=NP3|ChunkType=head
9	آر	آر	PROPN	NNPC	Case=Nom|Gender=Masc|Number=Sing|Person=3	11	compound	_	Vib=0|Tam=0|ChunkId=NP4|ChunkType=child
10	بی	بی	PROPN	NNPC	Case=Nom|Gender=Masc|Number=Sing|Person=3	11	compound	_	Vib=0|Tam=0|ChunkId=NP4|ChunkType=child
11	آئی	آئی	PROPN	NNP	Case=Acc|Gender=Masc|Number=Sing|Person=3	13	iobj	_	Vib=0|Tam=0|ChunkId=NP4|ChunkType=head
12	کو	کو	ADP	PSP	AdpType=Post	11	case	_	ChunkId=NP4|ChunkType=child
13	دی	دے	VERB	VM	Aspect=Perf|Gender=Fem|Number=Sing|VerbForm=Part|Voice=Pass	0	root	_	Vib=یا|Tam=yA|ChunkId=VGF|ChunkType=head|Stype=declarative
14	گئی	جا	AUX	VAUX	Aspect=Perf|Gender=Fem|Number=Sing|VerbForm=Part	13	aux	_	Vib=1یا|Tam=yA1|ChunkId=VGF|ChunkType=child
15	ہے	ہے	AUX	VAUX	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	14	aux	_	SpaceAfter=No|Vib=ہے|Tam=hE|ChunkId=VGF|ChunkType=child
16	۔	۔	PUNCT	SYM	_	13	punct	_	ChunkId=VGF|ChunkType=child

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 5 amod	color:blue
1	اس	یہ	DET	DEM	Case=Acc|Number=Sing|Person=3|PronType=Dem	2	det	_	ChunkId=NP|ChunkType=child
2	قانون	قانون	NOUN	NN	Case=Acc|Gender=Masc|Number=Sing|Person=3	4	nmod	_	Vib=0|Tam=0|ChunkId=NP|ChunkType=head
3	کا	کا	ADP	PSP	AdpType=Post|Case=Nom|Gender=Masc|Number=Sing	2	case	_	ChunkId=NP|ChunkType=child
4	نفاذ	نفاذ	NOUN	NN	Case=Nom|Gender=Masc|Number=Sing|Person=3	12	nsubj	_	Vib=0|Tam=0|ChunkId=NP2|ChunkType=head
5	یکم	یکم	ADJ	QO	NumType=Ord	6	amod	_	ChunkId=NP3|ChunkType=child
6	اپریل	اپریل	PROPN	NNP	Case=Acc|Gender=Masc|Number=Sing|Person=3	7	nmod	_	Vib=0|Tam=0|ChunkId=NP3|ChunkType=child
7	2010	2010	PROPN	NNP	Case=Acc|Gender=Masc|Number=Sing|Person=3	8	nmod	_	Vib=0|Tam=0|ChunkId=NP3|ChunkType=child
8	ء	ء	NOUN	NN	Case=Acc|Gender=Masc|Number=Sing|Person=3	12	advmod	_	Vib=0|Tam=0|ChunkId=NP3|ChunkType=head
9	سے	سے	ADP	PSP	AdpType=Post	8	case	_	ChunkId=NP3|ChunkType=child
10	عمل	عمل	NOUN	NN	Case=Acc|Gender=Masc|Number=Sing|Person=3	12	advmod	_	Vib=0|Tam=0|ChunkId=NP4|ChunkType=head
11	مےں	مےں	ADP	PSP	AdpType=Post	10	case	_	ChunkId=NP4|ChunkType=child
12	آ	آ	VERB	VM	Voice=Act	0	root	_	Vib=0|Tam=0|ChunkId=VGF|ChunkType=head|Stype=declarative
13	چکا	چک	AUX	VAUX	Aspect=Perf|Gender=Masc|Number=Sing|VerbForm=Part	12	aux	_	Vib=یا|Tam=yA|ChunkId=VGF|ChunkType=child
14	ہے	ہے	AUX	VAUX	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	13	aux	_	SpaceAfter=No|Vib=ہے|Tam=hE|ChunkId=VGF|ChunkType=child
15	۔	۔	PUNCT	SYM	_	12	punct	_	ChunkId=VGF|ChunkType=child

~~~


