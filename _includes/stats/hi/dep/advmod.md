

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Hindi)

This relation is universal.

3750 nodes (1%) are attached to their parents as `advmod`.

3720 instances of `advmod` (99%) are right-to-left (child precedes parent).
Average distance between parent and child is 3.25866666666667.

The following 40 pairs of parts of speech are connected with `advmod`: [hi-pos/VERB]()-[hi-pos/ADV]() (1050; 28% instances), [hi-pos/VERB]()-[hi-pos/NOUN]() (686; 18% instances), [hi-pos/ADJ]()-[hi-pos/NOUN]() (516; 14% instances), [hi-pos/ADJ]()-[hi-pos/PROPN]() (353; 9% instances), [hi-pos/ADJ]()-[hi-pos/ADV]() (303; 8% instances), [hi-pos/VERB]()-[hi-pos/PRON]() (181; 5% instances), [hi-pos/DET]()-[hi-pos/ADV]() (101; 3% instances), [hi-pos/DET]()-[hi-pos/NOUN]() (92; 2% instances), [hi-pos/VERB]()-[hi-pos/ADJ]() (55; 1% instances), [hi-pos/ADJ]()-[hi-pos/PRON]() (53; 1% instances), [hi-pos/NOUN]()-[hi-pos/ADV]() (49; 1% instances), [hi-pos/DET]()-[hi-pos/NUM]() (45; 1% instances), [hi-pos/ADJ]()-[hi-pos/VERB]() (43; 1% instances), [hi-pos/ADV]()-[hi-pos/NOUN]() (36; 1% instances), [hi-pos/VERB]()-[hi-pos/VERB]() (33; 1% instances), [hi-pos/NOUN]()-[hi-pos/PRON]() (27; 1% instances), [hi-pos/VERB]()-[hi-pos/DET]() (22; 1% instances), [hi-pos/NOUN]()-[hi-pos/NOUN]() (19; 1% instances), [hi-pos/ADJ]()-[hi-pos/ADJ]() (12; 0% instances), [hi-pos/NOUN]()-[hi-pos/ADJ]() (11; 0% instances), [hi-pos/ADJ]()-[hi-pos/DET]() (8; 0% instances), [hi-pos/ADV]()-[hi-pos/ADV]() (6; 0% instances), [hi-pos/PRON]()-[hi-pos/ADV]() (6; 0% instances), [hi-pos/ADJ]()-[hi-pos/NUM]() (5; 0% instances), [hi-pos/ADJ]()-[hi-pos/X]() (5; 0% instances), [hi-pos/NUM]()-[hi-pos/NUM]() (5; 0% instances), [hi-pos/DET]()-[hi-pos/PRON]() (4; 0% instances), [hi-pos/DET]()-[hi-pos/PROPN]() (3; 0% instances), [hi-pos/DET]()-[hi-pos/X]() (3; 0% instances), [hi-pos/NOUN]()-[hi-pos/PROPN]() (3; 0% instances), [hi-pos/ADV]()-[hi-pos/VERB]() (2; 0% instances), [hi-pos/PRON]()-[hi-pos/PRON]() (2; 0% instances), [hi-pos/PROPN]()-[hi-pos/ADJ]() (2; 0% instances), [hi-pos/PROPN]()-[hi-pos/ADV]() (2; 0% instances), [hi-pos/PROPN]()-[hi-pos/NOUN]() (2; 0% instances), [hi-pos/ADV]()-[hi-pos/ADJ]() (1; 0% instances), [hi-pos/ADV]()-[hi-pos/PRON]() (1; 0% instances), [hi-pos/NOUN]()-[hi-pos/DET]() (1; 0% instances), [hi-pos/NUM]()-[hi-pos/ADV]() (1; 0% instances), [hi-pos/VERB]()-[hi-pos/PROPN]() (1; 0% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 13 2 advmod	color:blue
1	लोग	लोग	NOUN	NN	Case=Nom|Gender=Masc|Number=Plur|Person=3	13	nsubj	_	Vib=0|Tam=0|ChunkId=NP|ChunkType=head|Translit=loga
2	बरबस	बरबस	ADV	RB	_	13	advmod	_	ChunkId=RBP|ChunkType=head|Translit=barabasa
3	इस	यह	DET	DEM	Case=Acc|Number=Sing|Person=3|PronType=Dem	4	det	_	ChunkId=NP2|ChunkType=child|Translit=isa
4	सोने	सोना	NOUN	NN	Case=Acc|Gender=Masc|Number=Sing|Person=3	6	nmod	_	Vib=0_का|Tam=0|ChunkId=NP2|ChunkType=head|Translit=sone
5	की	का	ADP	PSP	AdpType=Post|Case=Nom|Gender=Fem|Number=Sing	4	case	_	ChunkId=NP2|ChunkType=child|Translit=kī
6	परत	परत	NOUN	NN	Case=Nom|Gender=Fem|Number=Sing|Person=3	7	dobj	_	Vib=0|Tam=0|ChunkId=NP3|ChunkType=head|Translit=parata
7	चढ़े	चढ़	VERB	VM	Aspect=Perf|Gender=Masc|Number=Sing|VerbForm=Part	8	acl	_	Vib=या|Tam=yA|ChunkId=VGNF|ChunkType=head|Translit=caṛhe
8	चैत्‍य	चैत्य	NOUN	NN	Case=Acc|Gender=Masc|Number=Sing|Person=3	13	nmod	_	Vib=0_के_साथ|Tam=0|ChunkId=NP4|ChunkType=head|Translit=caitya
9	के	के	ADP	PSP	AdpType=Post	8	case	_	ChunkId=NP4|ChunkType=child|Translit=ke
10	साथ	साथ	ADP	NST	AdpType=Post|Case=Nom|Gender=Masc|Number=Sing|Person=3	8	case	_	AltTag=ADP-NOUN|ChunkId=NP4|ChunkType=child|Translit=sātha
11	फोटो	फोटो	NOUN	NN	Case=Nom|Gender=Fem|Number=Sing|Person=3	12	dobj	_	Vib=0|Tam=0|ChunkId=NP5|ChunkType=head|Translit=phoṭo
12	खींचना	खींच	VERB	VM	Case=Nom|VerbForm=Inf	13	dobj	_	Vib=ना|Tam=nA|ChunkId=VGNN|ChunkType=head|Translit=khīṁcanā
13	चाहते	चाह	VERB	VM	Aspect=Imp|Gender=Masc|Number=Plur|Person=3|VerbForm=Part|Voice=Act	0	root	_	Vib=ता_है|Tam=wA|ChunkId=VGF|ChunkType=head|Stype=declarative|Translit=cāhate
14	हैं	है	AUX	VAUX	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	13	aux	_	Vib=है|Tam=hE|ChunkId=VGF|ChunkType=child|Translit=haiṁ
15	।	।	PUNCT	SYM	_	13	punct	_	ChunkId=BLK|ChunkType=head|Translit=.

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 2 advmod	color:blue
1	इस	यह	DET	DEM	Case=Acc|Number=Sing|Person=3|PronType=Dem	2	det	_	ChunkId=NP|ChunkType=child|Translit=isa
2	तरह	तरह	NOUN	NN	Case=Nom|Gender=Fem|Number=Sing|Person=3	9	advmod	_	Vib=0|Tam=0|ChunkId=NP|ChunkType=head|Translit=taraha
3	साक्षरता	साक्षरता	NOUN	NN	Case=Acc|Gender=Fem|Number=Sing|Person=3	9	nmod	_	Vib=0_में|Tam=0|ChunkId=NP2|ChunkType=head|Translit=sākṣaratā
4	में	में	ADP	PSP	AdpType=Post	3	case	_	ChunkId=NP2|ChunkType=child|Translit=meṁ
5	लिंग	लिंग	NOUN	NNC	Case=Nom|Gender=Masc|Number=Sing|Person=3	6	compound	_	Vib=0|Tam=0|ChunkId=NP3|ChunkType=child|Translit=liṁga
6	भेद	भेद	NOUN	NN	Case=Acc|Gender=Masc|Number=Sing|Person=3	8	nmod	_	Vib=0_का|Tam=0|ChunkId=NP3|ChunkType=head|Translit=bheda
7	का	का	ADP	PSP	AdpType=Post|Case=Nom|Gender=Masc|Number=Sing	6	case	_	ChunkId=NP3|ChunkType=child|Translit=kā
8	अनुपात	अनुपात	NOUN	NN	Case=Nom|Gender=Masc|Number=Sing|Person=3	9	nsubj	_	Vib=0|Tam=0|ChunkId=NP4|ChunkType=head|Translit=anupāta
9	घटा	घटा	VERB	VM	Number=Sing|Person=3|Voice=Act	0	root	_	Vib=0_है|Tam=0|ChunkId=VGF|ChunkType=head|Stype=declarative|Translit=ghaṭā
10	है	है	AUX	VAUX	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	9	aux	_	Vib=है|Tam=hE|ChunkId=VGF|ChunkType=child|Translit=hai
11	।	।	PUNCT	SYM	_	9	punct	_	ChunkId=BLK|ChunkType=head|Translit=.

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 advmod	color:blue
1	करीब	करीब	PART	RP	_	2	dep	_	ChunkId=NP|ChunkType=child|Translit=karība
2	50	50	NUM	QC	NumType=Card	3	nummod	_	ChunkId=NP|ChunkType=child|Translit=50
3	फुट	फुट	NOUN	NN	Case=Nom|Gender=Masc|Number=Sing|Person=3	4	advmod	_	Vib=0|Tam=0|ChunkId=NP|ChunkType=head|Translit=phuṭa
4	ऊँचे	ऊँचा	ADJ	JJ	Case=Acc|Gender=Masc|Number=Sing	6	amod	_	ChunkId=JJP|ChunkType=head|Translit=ūm̃ce
5	इस	यह	DET	DEM	Case=Acc|Number=Sing|Person=3|PronType=Dem	6	det	_	ChunkId=NP2|ChunkType=child|Translit=isa
6	स्‍तूप	स्तूप	NOUN	NN	Case=Acc|Gender=Masc|Number=Sing|Person=3	11	dobj	_	Vib=0_को|Tam=0|ChunkId=NP2|ChunkType=head|Translit=stūpa
7	को	को	ADP	PSP	AdpType=Post	6	case	_	ChunkId=NP2|ChunkType=child|Translit=ko
8	मुकुट	मुकुट	PROPN	NNPC	Case=Nom|Gender=Masc|Number=Sing|Person=3	10	compound	_	Vib=0|Tam=0|ChunkId=NP3|ChunkType=child|Translit=mukuṭa
9	बंधन	बंधन	PROPN	NNPC	Case=Nom|Gender=Masc|Number=Sing|Person=3	10	compound	_	Vib=0|Tam=0|ChunkId=NP3|ChunkType=child|Translit=baṁdhana
10	विहार	विहार	PROPN	NNP	Case=Nom|Gender=Masc|Number=Sing|Person=3	11	acl	_	Vib=0|Tam=0|ChunkId=NP3|ChunkType=head|Translit=vihāra
11	कहा	कह	VERB	VM	Aspect=Perf|Gender=Masc|Number=Sing|Person=3|VerbForm=Part|Voice=Pass	0	root	_	Vib=या_जा+ता_है|Tam=yA|ChunkId=VGF|ChunkType=head|Stype=declarative|Translit=kahā
12	जाता	जा	AUX	VAUX	Aspect=Imp|Gender=Masc|Number=Sing|VerbForm=Part	11	auxpass	_	Vib=ता|Tam=wA|ChunkId=VGF|ChunkType=child|Translit=jātā
13	है	है	AUX	VAUX	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	12	auxpass	_	Vib=है|Tam=hE|ChunkId=VGF|ChunkType=child|Translit=hai
14	।	।	PUNCT	SYM	_	11	punct	_	ChunkId=BLK|ChunkType=head|Translit=.

~~~


