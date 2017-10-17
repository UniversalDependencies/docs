

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Urdu)

This relation is a language-specific subtype of [acl]().

797 nodes (1%) are attached to their parents as `acl:relcl`.

495 instances of `acl:relcl` (62%) are left-to-right (parent precedes child).
Average distance between parent and child is 10.0928481806775.

The following 28 pairs of parts of speech are connected with `acl:relcl`: [ur-pos/NOUN]()-[ur-pos/VERB]() (342; 43% instances), [ur-pos/PRON]()-[ur-pos/VERB]() (234; 29% instances), [ur-pos/PROPN]()-[ur-pos/VERB]() (56; 7% instances), [ur-pos/PRON]()-[ur-pos/NOUN]() (37; 5% instances), [ur-pos/NOUN]()-[ur-pos/NOUN]() (32; 4% instances), [ur-pos/NOUN]()-[ur-pos/ADJ]() (23; 3% instances), [ur-pos/PROPN]()-[ur-pos/NOUN]() (15; 2% instances), [ur-pos/NOUN]()-[ur-pos/PROPN]() (8; 1% instances), [ur-pos/ADV]()-[ur-pos/VERB]() (6; 1% instances), [ur-pos/PRON]()-[ur-pos/ADJ]() (6; 1% instances), [ur-pos/PROPN]()-[ur-pos/ADJ]() (6; 1% instances), [ur-pos/PROPN]()-[ur-pos/PROPN]() (5; 1% instances), [ur-pos/VERB]()-[ur-pos/VERB]() (4; 1% instances), [ur-pos/ADV]()-[ur-pos/NOUN]() (3; 0% instances), [ur-pos/PROPN]()-[ur-pos/NUM]() (3; 0% instances), [ur-pos/DET]()-[ur-pos/VERB]() (2; 0% instances), [ur-pos/NOUN]()-[ur-pos/NUM]() (2; 0% instances), [ur-pos/NUM]()-[ur-pos/VERB]() (2; 0% instances), [ur-pos/VERB]()-[ur-pos/PUNCT]() (2; 0% instances), [ur-pos/ADJ]()-[ur-pos/ADJ]() (1; 0% instances), [ur-pos/NOUN]()-[ur-pos/ADV]() (1; 0% instances), [ur-pos/NOUN]()-[ur-pos/PART]() (1; 0% instances), [ur-pos/NOUN]()-[ur-pos/PRON]() (1; 0% instances), [ur-pos/NUM]()-[ur-pos/ADP]() (1; 0% instances), [ur-pos/PRON]()-[ur-pos/ADV]() (1; 0% instances), [ur-pos/PRON]()-[ur-pos/PRON]() (1; 0% instances), [ur-pos/PRON]()-[ur-pos/PROPN]() (1; 0% instances), [ur-pos/VERB]()-[ur-pos/AUX]() (1; 0% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 5 acl:relcl	color:blue
1	یہ	یہ	DET	DEM	Case=Nom|Number=Sing|Person=3|PronType=Dem	2	det	_	ChunkId=NP|ChunkType=child
2	گھرانہ	گھرانہ	NOUN	NN	Case=Nom|Gender=Masc|Number=Sing|Person=3	8	nsubj	_	Vib=0|Tam=0|ChunkId=NP|ChunkType=head
3	جو	جو	PRON	PRP	Case=Nom|Number=Sing|Person=3|PronType=Prs	5	nsubj	_	Vib=0|Tam=0|ChunkId=NP2|ChunkType=head
4	آب_الملکی	آب_الملکی	PROPN	NNP	Case=Nom|Gender=Masc|Number=Sing|Person=3	5	acl	_	Vib=0|Tam=0|ChunkId=NP3|ChunkType=head
5	کہلاتا	کہلا	VERB	VM	Aspect=Imp|Gender=Masc|Number=Sing|VerbForm=Part|Voice=Act	2	acl:relcl	_	Vib=تا|Tam=wA|ChunkId=VGF|ChunkType=head|Stype=declarative
6	تھا	تھا	AUX	VAUX	Gender=Masc|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin	5	aux	_	SpaceAfter=No|Vib=تھا|Tam=WA|ChunkId=VGF|ChunkType=child
7	,	,	PUNCT	SYM	_	5	punct	_	ChunkId=VGF|ChunkType=child
8	آتش_پرست	آتش_پرست	ADJ	JJ	_	0	root	_	ChunkId=JJP|ChunkType=head
9	تھا	تھا	AUX	VM	Gender=Masc|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin|Voice=Act	8	cop	_	SpaceAfter=No|AltTag=AUX-VERB|Vib=تھا|Tam=WA|ChunkId=VGF2|ChunkType=head|Stype=declarative
10	۔	۔	PUNCT	SYM	_	9	punct	_	ChunkId=VGF2|ChunkType=child

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 7 acl:relcl	color:blue
1	جب	جب	PRON	PRP	Case=Nom|PronType=Prs	7	advmod	_	ChunkId=NP|ChunkType=head
2	اس	وہ	DET	DEM	Case=Acc|Number=Sing|Person=3|PronType=Dem	3	det	_	ChunkId=NP2|ChunkType=child
3	اسقف	اسقف	NOUN	NN	Case=Acc|Gender=Masc|Number=Sing|Person=3	6	nmod	_	Vib=0|Tam=0|ChunkId=NP2|ChunkType=head
4	کا	کا	ADP	PSP	AdpType=Post|Case=Acc|Gender=Masc|Number=Sing	3	case	_	ChunkId=NP2|ChunkType=child
5	آخری	آخری	ADJ	JJ	Case=Nom	6	amod	_	ChunkId=NP3|ChunkType=child
6	وقت	وقت	NOUN	NN	Case=Nom|Gender=Masc|Number=Sing|Person=3	7	nsubj	_	Vib=0|Tam=0|ChunkId=NP3|ChunkType=head
7	آیا	آ	VERB	VM	Aspect=Perf|Gender=Masc|Number=Sing|VerbForm=Part|Voice=Act	8	acl:relcl	_	Vib=یا|Tam=yA|ChunkId=VGF|ChunkType=head|Stype=declarative
8	تو	تو	PRON	PRP	_	10	advmod	_	ChunkId=NP4|ChunkType=head
9	دریافت	دریافت	NOUN	NN	Case=Nom|Gender=Masc|Number=Sing|Person=3	10	compound	_	Vib=0|Tam=0|ChunkId=NP5|ChunkType=head
10	کیا	کر	VERB	VM	Aspect=Perf|Gender=Masc|Number=Sing|VerbForm=Part|Voice=Act	0	root	_	SpaceAfter=No|Vib=یا|Tam=yA|ChunkId=VGF2|ChunkType=head|Stype=declarative
11	''	''	PUNCT	SYM	_	12	punct	_	ChunkId=NP6|ChunkType=child
12	اب	اب	PRON	PRP	Case=Nom|Gender=Masc|Number=Sing|Person=3	14	advmod	_	ChunkId=NP6|ChunkType=head
13	کیا	کیا	PRON	WQ	_	14	obj	_	ChunkId=NP7|ChunkType=head
14	کروں	کر	VERB	VM	Number=Sing|Person=1|Voice=Act	10	obj	_	SpaceAfter=No|Vib=ۓں|Tam=eN|ChunkId=VGF3|ChunkType=head|Stype=interrogative
15	؟	؟	PUNCT	SYM	_	14	punct	_	SpaceAfter=No|ChunkId=VGF3|ChunkType=child
16	''	''	PUNCT	SYM	_	15	punct	_	SpaceAfter=No|ChunkId=VGF3|ChunkType=child
17	۔	۔	PUNCT	SYM	_	16	punct	_	ChunkId=VGF3|ChunkType=child

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 10 acl:relcl	color:blue
1	ہندوستان	ہندوستان	PROPN	NNP	Case=Nom|Gender=Masc|Number=Sing|Person=3	4	nsubj	_	Vib=0|Tam=0|ChunkId=NP|ChunkType=head
2	اےک	اےک	NUM	QC	NumType=Card	4	nummod	_	ChunkId=NP2|ChunkType=child
3	ایسی	ایسا	DET	DEM	Case=Nom|Gender=Fem|Number=Sing|PronType=Dem	4	det	_	ChunkId=NP2|ChunkType=child
4	قوم	قوم	NOUN	NN	Case=Nom|Gender=Fem|Number=Sing|Person=3	0	root	_	Vib=0|Tam=0|ChunkId=NP2|ChunkType=head
5	ہے	ہے	AUX	VM	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	4	cop	_	AltTag=AUX-VERB|Vib=ہے|Tam=hE|ChunkId=VGF|ChunkType=head|Stype=declarative
6	جو	جو	PRON	PRP	_	10	nsubj	_	ChunkId=NP3|ChunkType=head
7	کثرت	کثرت	NOUN	NN	Case=Acc|Gender=Masc|Number=Sing|Person=3	10	advmod	_	Vib=0|Tam=0|ChunkId=NP4|ChunkType=head
8	مےں	مےں	ADP	PSP	AdpType=Post	7	case	_	ChunkId=NP4|ChunkType=child
9	یقین	یقین	NOUN	NN	Case=Nom|Gender=Masc|Number=Sing|Person=3	10	compound	_	Vib=0|Tam=0|ChunkId=NP5|ChunkType=head
10	رکھتی	رکھ	VERB	VM	Aspect=Imp|Gender=Fem|Number=Sing|VerbForm=Part|Voice=Act	1	acl:relcl	_	Vib=تا|Tam=wA|ChunkId=VGF2|ChunkType=head|Stype=declarative
11	ہے	ہے	AUX	VAUX	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	10	aux	_	SpaceAfter=No|Vib=ہے|Tam=hE|ChunkId=VGF2|ChunkType=child
12	۔	۔	PUNCT	SYM	_	10	punct	_	ChunkId=VGF2|ChunkType=child

~~~


