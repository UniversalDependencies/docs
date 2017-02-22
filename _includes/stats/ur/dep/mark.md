

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Urdu)

This relation is universal.

4177 nodes (3%) are attached to their parents as `mark`.

2295 instances of `mark` (55%) are right-to-left (child precedes parent).
Average distance between parent and child is 7.32535312425186.

The following 42 pairs of parts of speech are connected with `mark`: [ur-pos/VERB]()-[ur-pos/SCONJ]() (2067; 49% instances), [ur-pos/VERB]()-[ur-pos/ADP]() (1626; 39% instances), [ur-pos/NOUN]()-[ur-pos/SCONJ]() (175; 4% instances), [ur-pos/ADJ]()-[ur-pos/SCONJ]() (91; 2% instances), [ur-pos/VERB]()-[ur-pos/ADV]() (89; 2% instances), [ur-pos/NOUN]()-[ur-pos/PRON]() (24; 1% instances), [ur-pos/PRON]()-[ur-pos/SCONJ]() (18; 0% instances), [ur-pos/PROPN]()-[ur-pos/PROPN]() (12; 0% instances), [ur-pos/NUM]()-[ur-pos/NUM]() (7; 0% instances), [ur-pos/NOUN]()-[ur-pos/NOUN]() (6; 0% instances), [ur-pos/PROPN]()-[ur-pos/SCONJ]() (6; 0% instances), [ur-pos/ADJ]()-[ur-pos/ADJ]() (4; 0% instances), [ur-pos/ADV]()-[ur-pos/ADV]() (4; 0% instances), [ur-pos/NOUN]()-[ur-pos/PROPN]() (4; 0% instances), [ur-pos/NUM]()-[ur-pos/SCONJ]() (4; 0% instances), [ur-pos/PRON]()-[ur-pos/PRON]() (4; 0% instances), [ur-pos/NOUN]()-[ur-pos/ADV]() (3; 0% instances), [ur-pos/VERB]()-[ur-pos/VERB]() (3; 0% instances), [ur-pos/NOUN]()-[ur-pos/PART]() (2; 0% instances), [ur-pos/PART]()-[ur-pos/SCONJ]() (2; 0% instances), [ur-pos/PROPN]()-[ur-pos/NOUN]() (2; 0% instances), [ur-pos/PROPN]()-[ur-pos/PART]() (2; 0% instances), [ur-pos/PROPN]()-[ur-pos/PRON]() (2; 0% instances), [ur-pos/VERB]()-[ur-pos/NOUN]() (2; 0% instances), [ur-pos/ADJ]()-[ur-pos/ADV]() (1; 0% instances), [ur-pos/ADJ]()-[ur-pos/DET]() (1; 0% instances), [ur-pos/ADJ]()-[ur-pos/NUM]() (1; 0% instances), [ur-pos/ADJ]()-[ur-pos/PRON]() (1; 0% instances), [ur-pos/ADV]()-[ur-pos/PART]() (1; 0% instances), [ur-pos/DET]()-[ur-pos/ADP]() (1; 0% instances), [ur-pos/DET]()-[ur-pos/SCONJ]() (1; 0% instances), [ur-pos/NOUN]()-[ur-pos/ADJ]() (1; 0% instances), [ur-pos/NOUN]()-[ur-pos/NUM]() (1; 0% instances), [ur-pos/NOUN]()-[ur-pos/PUNCT]() (1; 0% instances), [ur-pos/PART]()-[ur-pos/PART]() (1; 0% instances), [ur-pos/PRON]()-[ur-pos/VERB]() (1; 0% instances), [ur-pos/PUNCT]()-[ur-pos/SCONJ]() (1; 0% instances), [ur-pos/VERB]()-[ur-pos/AUX]() (1; 0% instances), [ur-pos/VERB]()-[ur-pos/DET]() (1; 0% instances), [ur-pos/VERB]()-[ur-pos/PART]() (1; 0% instances), [ur-pos/VERB]()-[ur-pos/PRON]() (1; 0% instances), [ur-pos/VERB]()-[ur-pos/PUNCT]() (1; 0% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 13 6 mark	color:blue
1	اب	اب	PRON	PRP	Case=Nom|PronType=Prs	3	advmod	_	ChunkId=NP|ChunkType=head
2	وقت	وقت	NOUN	NN	Case=Nom|Gender=Masc|Number=Sing|Person=3	3	obj	_	Vib=0|Tam=0|ChunkId=NP2|ChunkType=head
3	آ	آ	VERB	VM	Voice=Act	0	root	_	Vib=0|Tam=0|ChunkId=VGF|ChunkType=head|Stype=declarative
4	گیا	جا	AUX	VAUX	Aspect=Perf|Gender=Masc|Number=Sing|VerbForm=Part	3	aux	_	Vib=1یا|Tam=yA1|ChunkId=VGF|ChunkType=child
5	ہے	ہے	AUX	VAUX	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	4	aux	_	Vib=ہے|Tam=hE|ChunkId=VGF|ChunkType=child
6	کہ	کہ	SCONJ	CC	_	13	mark	_	AltTag=SCONJ-CCONJ|ChunkId=CCP|ChunkType=head
7	ایسے	ایسا	DET	DEM	Case=Acc|Gender=Masc|Number=Sing|PronType=Dem	8	det	_	ChunkId=NP3|ChunkType=child
8	افراد	فرد	NOUN	NN	Case=Acc|Gender=Masc|Number=Plur|Person=3	13	obj	_	Vib=0|Tam=0|ChunkId=NP3|ChunkType=head
9	کو	کو	ADP	PSP	AdpType=Post	8	case	_	ChunkId=NP3|ChunkType=child
10	سلاخوں	سلاخ	NOUN	NN	Case=Acc|Gender=Fem|Number=Plur|Person=3	13	advmod	_	Vib=0|Tam=0|ChunkId=NP4|ChunkType=head
11	کے	کے	ADP	PSP	AdpType=Post	10	case	_	ChunkId=NP4|ChunkType=child
12	پیچھے	پیچھے	ADP	NST	AdpType=Post|Case=Nom|Gender=Masc|Number=Sing|Person=3	10	case	_	AltTag=ADP-NOUN|ChunkId=NP4|ChunkType=child
13	ڈھکیلا	ڈھکیلا	VERB	VM	Aspect=Perf|Gender=Masc|Number=Sing|Person=3|VerbForm=Part|Voice=Act	2	acl	_	Vib=یا|Tam=yA|ChunkId=VGF2|ChunkType=head|Stype=declarative
14	جائے	جا	AUX	VAUX	Gender=Masc|Mood=Sub|Number=Sing|Person=3|VerbForm=Fin	13	aux	_	SpaceAfter=No|Vib=ئےں|Tam=eM|ChunkId=VGF2|ChunkType=child
15	۔	۔	PUNCT	SYM	_	13	punct	_	ChunkId=VGF2|ChunkType=child

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 6 mark	color:blue
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


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 1 mark	color:blue
1	کیونکہ	کیونکہ	SCONJ	CC	_	4	mark	_	AltTag=SCONJ-CCONJ|ChunkId=CCP|ChunkType=head
2	اسپیکر	اسپیکر	NOUN	NN	Case=Acc|Gender=Masc|Number=Sing|Person=3	4	nsubj	_	Vib=0|Tam=0|ChunkId=NP|ChunkType=head
3	بہرحال	بہرحال	ADV	RB	_	4	advmod	_	ChunkId=RBP|ChunkType=head
4	اسپیکر	اسپیکر	NOUN	NN	Case=Acc|Gender=Masc|Number=Sing|Person=3	0	root	_	Vib=0|Tam=0|ChunkId=NP2|ChunkType=head
5	ہیں	ہے	AUX	VM	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	4	cop	_	SpaceAfter=No|AltTag=AUX-VERB|Vib=ہے|Tam=hE|ChunkId=VGF|ChunkType=head|Stype=declarative
6	۔	۔	PUNCT	SYM	_	5	punct	_	ChunkId=VGF|ChunkType=child

~~~


