

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Urdu)

This relation is universal.

411 nodes (0%) are attached to their parents as `xcomp`.

406 instances of `xcomp` (99%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.01459854014599.

The following 10 pairs of parts of speech are connected with `xcomp`: [ur-pos/VERB]()-[ur-pos/ADJ]() (181; 44% instances), [ur-pos/VERB]()-[ur-pos/NOUN]() (165; 40% instances), [ur-pos/VERB]()-[ur-pos/PRON]() (26; 6% instances), [ur-pos/VERB]()-[ur-pos/PROPN]() (20; 5% instances), [ur-pos/VERB]()-[ur-pos/NUM]() (7; 2% instances), [ur-pos/VERB]()-[ur-pos/VERB]() (4; 1% instances), [ur-pos/NOUN]()-[ur-pos/ADP]() (3; 1% instances), [ur-pos/VERB]()-[ur-pos/DET]() (3; 1% instances), [ur-pos/NOUN]()-[ur-pos/ADJ]() (1; 0% instances), [ur-pos/NOUN]()-[ur-pos/PRON]() (1; 0% instances).


~~~ conllu
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 14 13 xcomp	color:blue
1	آج	آج	NOUN	NN	Case=Acc|Gender=Masc|Number=Sing|Person=3	3	nmod	_	Vib=0|Tam=0|ChunkId=NP|ChunkType=head
2	کے	کا	ADP	PSP	AdpType=Post|Case=Acc|Gender=Masc|Number=Sing	1	case	_	ChunkId=NP|ChunkType=child
3	رشوت_ستانی	رشوت_ستانی	NOUN	NN	Case=Nom|Gender=Fem|Number=Sing|Person=3	5	nmod	_	Vib=0|Tam=0|ChunkId=NP2|ChunkType=head
4	کے	کا	ADP	PSP	AdpType=Post|Case=Acc|Gender=Masc|Number=Sing	3	case	_	ChunkId=NP2|ChunkType=child
5	دور	دور	NOUN	NN	Case=Acc|Gender=Masc|Number=Sing|Person=3	14	advmod	_	Vib=0|Tam=0|ChunkId=NP3|ChunkType=head
6	مےں	مےں	ADP	PSP	AdpType=Post	5	case	_	ChunkId=NP3|ChunkType=child
7	اس	یہ	DET	DEM	Case=Acc|Number=Sing|Person=3|PronType=Dem	8	det	_	ChunkId=NP4|ChunkType=child
8	طرح	طرح	NOUN	NN	Case=Acc|Gender=Masc|Number=Sing|Person=3	10	nmod	_	Vib=0|Tam=0|ChunkId=NP4|ChunkType=head
9	کے	کا	ADP	PSP	AdpType=Post|Case=Acc|Gender=Masc|Number=Sing	8	case	_	ChunkId=NP4|ChunkType=child
10	آفیسرس	آفیسر	NOUN	NN	Case=Nom|Gender=Masc|Number=Plur|Person=3	14	nsubj	_	Vib=0|Tam=0|ChunkId=NP5|ChunkType=head
11	بہت	بہت	ADV	INTF	AdvType=Deg	13	advmod	_	ChunkId=JJP|ChunkType=child
12	ہی	ہی	PART	RP	_	11	dep	_	ChunkId=JJP|ChunkType=child
13	کم	کم	ADJ	JJ	_	14	xcomp	_	ChunkId=JJP|ChunkType=head
14	ملیں_گے	مل	VERB	VM	Gender=Fem|Mood=Ind|Number=Plur|Tense=Fut|VerbForm=Fin|Voice=Act	0	root	_	SpaceAfter=No|Vib=گا|Tam=gA|ChunkId=VGF|ChunkType=head|Stype=declarative
15	۔	۔	PUNCT	SYM	_	14	punct	_	ChunkId=VGF|ChunkType=child

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 4 xcomp	color:blue
1	یہ	یہ	DET	DEM	Case=Nom|Number=Sing|Person=3|PronType=Dem	2	det	_	ChunkId=NP|ChunkType=child
2	کورس	کورس	NOUN	NN	Case=Nom|Gender=Masc|Number=Sing|Person=3	6	nsubj	_	Vib=0|Tam=0|ChunkId=NP|ChunkType=head
3	چالیس	چالیس	NUM	QC	NumType=Card	4	nummod	_	ChunkId=NP2|ChunkType=child
4	دن	دن	NOUN	NN	Case=Acc|Gender=Masc|Number=Sing|Person=3	6	xcomp	_	Vib=0|Tam=0|ChunkId=NP2|ChunkType=head
5	کا	کا	ADP	PSP	AdpType=Post|Case=Nom|Gender=Masc|Number=Sing	4	case	_	ChunkId=NP2|ChunkType=child
6	رہےگا	رہ	VERB	VM	Gender=Masc|Mood=Ind|Number=Sing|Tense=Fut|VerbForm=Fin|Voice=Act	0	root	_	SpaceAfter=No|Vib=گا|Tam=gA|ChunkId=VGF|ChunkType=head|Stype=declarative
7	۔	۔	PUNCT	SYM	_	6	punct	_	ChunkId=VGF|ChunkType=child

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 9 xcomp	color:blue
1	تاہم	تاہم	CCONJ	CC	_	4	cc	_	ChunkId=CCP|ChunkType=head
2	عدالت	عدالت	NOUN	NN	Case=Acc|Gender=Fem|Number=Sing|Person=3	4	nsubj	_	Vib=0|Tam=0|ChunkId=NP|ChunkType=head
3	نے	نے	ADP	PSP	AdpType=Post	2	case	_	ChunkId=NP|ChunkType=child
4	کہا	کہہ	VERB	VM	Aspect=Perf|Gender=Masc|Number=Sing|VerbForm=Part|Voice=Act	0	root	_	Vib=یا|Tam=yA|ChunkId=VGF|ChunkType=head|Stype=declarative
5	کہ	کہ	SCONJ	CC	_	10	mark	_	AltTag=SCONJ-CCONJ|ChunkId=CCP2|ChunkType=head
6	وہ	وہ	PRON	PRP	Case=Nom|Number=Sing|Person=3|PronType=Prs	10	nsubj	_	Vib=0|Tam=0|ChunkId=NP2|ChunkType=head
7	ماوسٹوں	ماوسٹ	NOUN	NN	Case=Acc|Gender=Masc|Number=Plur|Person=3	9	nmod	_	Vib=0|Tam=0|ChunkId=NP3|ChunkType=head
8	کے	کا	ADP	PSP	AdpType=Post|Case=Acc|Gender=Masc|Number=Sing	7	case	_	ChunkId=NP3|ChunkType=child
9	ہمدرد	ہمدرد	PRON	PRP	_	10	xcomp	_	ChunkId=NP4|ChunkType=head
10	ہو	ہو	VERB	VM	Voice=Act	4	obj	_	Vib=0|Tam=0|ChunkId=VGF2|ChunkType=head|Stype=declarative
11	سکتے	سک	AUX	VAUX	Aspect=Imp|Number=Plur|VerbForm=Part	10	aux	_	Vib=تا|Tam=wA|ChunkId=VGF2|ChunkType=child
12	ہیں	ہے	AUX	VAUX	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	11	aux	_	SpaceAfter=No|Vib=ہے|Tam=hE|ChunkId=VGF2|ChunkType=child
13	۔	۔	PUNCT	SYM	_	10	punct	_	ChunkId=VGF2|ChunkType=child

~~~


