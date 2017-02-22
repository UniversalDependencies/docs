

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Urdu)

This relation is universal.

5801 nodes (5%) are attached to their parents as `obj`.

4292 instances of `obj` (74%) are right-to-left (child precedes parent).
Average distance between parent and child is 6.30856748836408.

The following 44 pairs of parts of speech are connected with `obj`: [ur-pos/VERB]()-[ur-pos/NOUN]() (3535; 61% instances), [ur-pos/VERB]()-[ur-pos/VERB]() (1286; 22% instances), [ur-pos/VERB]()-[ur-pos/PRON]() (340; 6% instances), [ur-pos/VERB]()-[ur-pos/PROPN]() (325; 6% instances), [ur-pos/VERB]()-[ur-pos/ADJ]() (112; 2% instances), [ur-pos/NOUN]()-[ur-pos/VERB]() (32; 1% instances), [ur-pos/ADJ]()-[ur-pos/NOUN]() (29; 0% instances), [ur-pos/NOUN]()-[ur-pos/NOUN]() (21; 0% instances), [ur-pos/VERB]()-[ur-pos/AUX]() (13; 0% instances), [ur-pos/VERB]()-[ur-pos/NUM]() (12; 0% instances), [ur-pos/VERB]()-[ur-pos/PUNCT]() (12; 0% instances), [ur-pos/ADJ]()-[ur-pos/VERB]() (11; 0% instances), [ur-pos/NOUN]()-[ur-pos/PRON]() (7; 0% instances), [ur-pos/PRON]()-[ur-pos/VERB]() (7; 0% instances), [ur-pos/PRON]()-[ur-pos/NOUN]() (5; 0% instances), [ur-pos/ADJ]()-[ur-pos/ADJ]() (4; 0% instances), [ur-pos/ADV]()-[ur-pos/NOUN]() (4; 0% instances), [ur-pos/NOUN]()-[ur-pos/PROPN]() (4; 0% instances), [ur-pos/PROPN]()-[ur-pos/PROPN]() (4; 0% instances), [ur-pos/ADJ]()-[ur-pos/ADP]() (3; 0% instances), [ur-pos/NUM]()-[ur-pos/NUM]() (3; 0% instances), [ur-pos/VERB]()-[ur-pos/ADV]() (3; 0% instances), [ur-pos/VERB]()-[ur-pos/DET]() (3; 0% instances), [ur-pos/VERB]()-[ur-pos/PART]() (3; 0% instances), [ur-pos/PART]()-[ur-pos/NOUN]() (2; 0% instances), [ur-pos/PRON]()-[ur-pos/PRON]() (2; 0% instances), [ur-pos/PROPN]()-[ur-pos/NOUN]() (2; 0% instances), [ur-pos/ADJ]()-[ur-pos/ADV]() (1; 0% instances), [ur-pos/ADJ]()-[ur-pos/PRON]() (1; 0% instances), [ur-pos/ADJ]()-[ur-pos/PROPN]() (1; 0% instances), [ur-pos/ADP]()-[ur-pos/NOUN]() (1; 0% instances), [ur-pos/ADV]()-[ur-pos/ADV]() (1; 0% instances), [ur-pos/ADV]()-[ur-pos/PART]() (1; 0% instances), [ur-pos/ADV]()-[ur-pos/PRON]() (1; 0% instances), [ur-pos/ADV]()-[ur-pos/PROPN]() (1; 0% instances), [ur-pos/AUX]()-[ur-pos/VERB]() (1; 0% instances), [ur-pos/NOUN]()-[ur-pos/ADJ]() (1; 0% instances), [ur-pos/NOUN]()-[ur-pos/ADP]() (1; 0% instances), [ur-pos/NOUN]()-[ur-pos/ADV]() (1; 0% instances), [ur-pos/NOUN]()-[ur-pos/NUM]() (1; 0% instances), [ur-pos/NUM]()-[ur-pos/ADP]() (1; 0% instances), [ur-pos/PRON]()-[ur-pos/DET]() (1; 0% instances), [ur-pos/PROPN]()-[ur-pos/ADJ]() (1; 0% instances), [ur-pos/PROPN]()-[ur-pos/ADP]() (1; 0% instances).


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 13 10 obj	color:blue
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
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 10 obj	color:blue
1	انھوں	وہ	PRON	PRP	Case=Nom|Number=Sing|Person=3|Polite=Form|PronType=Prs	3	nsubj	_	Vib=0|Tam=0|ChunkId=NP|ChunkType=head
2	نے	نے	ADP	PSP	AdpType=Post	1	case	_	ChunkId=NP|ChunkType=child
3	کہا	کہہ	VERB	VM	Aspect=Perf|Gender=Masc|Number=Sing|VerbForm=Part|Voice=Act	0	root	_	Vib=یا|Tam=yA|ChunkId=VGF|ChunkType=head|Stype=declarative
4	کہ	کہ	SCONJ	CC	_	10	mark	_	AltTag=SCONJ-CCONJ|ChunkId=CCP|ChunkType=head
5	ہم	ہم	PRON	PRP	Case=Acc|Number=Plur|Person=1|PronType=Prs	10	nsubj	_	Vib=0|Tam=0|ChunkId=NP2|ChunkType=head
6	عدالت	عدالت	NOUN	NN	Case=Acc|Gender=Fem|Number=Sing|Person=3	10	advmod	_	Vib=0|Tam=0|ChunkId=NP3|ChunkType=head
7	مےں	مےں	ADP	PSP	_	6	case	_	ChunkId=NP3|ChunkType=child
8	یہ	یہ	PRON	PRP	Case=Nom|Number=Sing|Person=3|PronType=Prs	10	obj	_	Vib=0|Tam=0|ChunkId=NP4|ChunkType=head
9	ثابت	ثابت	ADJ	JJ	_	10	compound	_	ChunkId=JJP|ChunkType=head
10	کر	کر	VERB	VM	Voice=Act	3	obj	_	Vib=0|Tam=0|ChunkId=VGF2|ChunkType=head|Stype=declarative
11	دکھائیں_گے	دکھا	AUX	VAUX	Mood=Ind|Number=Plur|Tense=Fut|VerbForm=Fin	10	aux	_	SpaceAfter=No|Vib=گا|Tam=gA|ChunkId=VGF2|ChunkType=child
12	۔	۔	PUNCT	SYM	_	10	punct	_	ChunkId=VGF2|ChunkType=child

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 8 obj	color:blue
1	انھوں	وہ	PRON	PRP	Case=Nom|Number=Sing|Person=3|Polite=Form|PronType=Prs	3	nsubj	_	Vib=0|Tam=0|ChunkId=NP|ChunkType=head
2	نے	نے	ADP	PSP	AdpType=Post	1	case	_	ChunkId=NP|ChunkType=child
3	کہا	کہہ	VERB	VM	Aspect=Perf|Gender=Masc|Number=Sing|VerbForm=Part|Voice=Act	0	root	_	Vib=یا|Tam=yA|ChunkId=VGF|ChunkType=head|Stype=declarative
4	کہ	کہ	SCONJ	CC	_	10	mark	_	AltTag=SCONJ-CCONJ|ChunkId=CCP|ChunkType=head
5	ہم	ہم	PRON	PRP	Case=Acc|Number=Plur|Person=1|PronType=Prs	10	nsubj	_	Vib=0|Tam=0|ChunkId=NP2|ChunkType=head
6	عدالت	عدالت	NOUN	NN	Case=Acc|Gender=Fem|Number=Sing|Person=3	10	advmod	_	Vib=0|Tam=0|ChunkId=NP3|ChunkType=head
7	مےں	مےں	ADP	PSP	_	6	case	_	ChunkId=NP3|ChunkType=child
8	یہ	یہ	PRON	PRP	Case=Nom|Number=Sing|Person=3|PronType=Prs	10	obj	_	Vib=0|Tam=0|ChunkId=NP4|ChunkType=head
9	ثابت	ثابت	ADJ	JJ	_	10	compound	_	ChunkId=JJP|ChunkType=head
10	کر	کر	VERB	VM	Voice=Act	3	obj	_	Vib=0|Tam=0|ChunkId=VGF2|ChunkType=head|Stype=declarative
11	دکھائیں_گے	دکھا	AUX	VAUX	Mood=Ind|Number=Plur|Tense=Fut|VerbForm=Fin	10	aux	_	SpaceAfter=No|Vib=گا|Tam=gA|ChunkId=VGF2|ChunkType=child
12	۔	۔	PUNCT	SYM	_	10	punct	_	ChunkId=VGF2|ChunkType=child

~~~


