

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Hindi)

This relation is universal.

14209 nodes (4%) are attached to their parents as `amod`.

13829 instances of `amod` (97%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.38299669223731.

The following 29 pairs of parts of speech are connected with `amod`: [hi-pos/NOUN]()-[hi-pos/ADJ]() (11913; 84% instances), [hi-pos/PROPN]()-[hi-pos/ADJ]() (904; 6% instances), [hi-pos/NOUN]()-[hi-pos/VERB]() (591; 4% instances), [hi-pos/ADJ]()-[hi-pos/ADJ]() (380; 3% instances), [hi-pos/PROPN]()-[hi-pos/VERB]() (128; 1% instances), [hi-pos/NOUN]()-[hi-pos/DET]() (114; 1% instances), [hi-pos/ADV]()-[hi-pos/ADJ]() (72; 1% instances), [hi-pos/NOUN]()-[hi-pos/ADV]() (21; 0% instances), [hi-pos/NUM]()-[hi-pos/NUM]() (17; 0% instances), [hi-pos/PRON]()-[hi-pos/VERB]() (16; 0% instances), [hi-pos/NOUN]()-[hi-pos/PRON]() (15; 0% instances), [hi-pos/NOUN]()-[hi-pos/PART]() (6; 0% instances), [hi-pos/PRON]()-[hi-pos/ADJ]() (6; 0% instances), [hi-pos/NUM]()-[hi-pos/ADJ]() (5; 0% instances), [hi-pos/PROPN]()-[hi-pos/ADV]() (3; 0% instances), [hi-pos/NOUN]()-[hi-pos/X]() (2; 0% instances), [hi-pos/PRON]()-[hi-pos/INTJ]() (2; 0% instances), [hi-pos/PROPN]()-[hi-pos/PRON]() (2; 0% instances), [hi-pos/VERB]()-[hi-pos/ADJ]() (2; 0% instances), [hi-pos/ADJ]()-[hi-pos/VERB]() (1; 0% instances), [hi-pos/ADV]()-[hi-pos/ADV]() (1; 0% instances), [hi-pos/ADV]()-[hi-pos/DET]() (1; 0% instances), [hi-pos/ADV]()-[hi-pos/VERB]() (1; 0% instances), [hi-pos/NUM]()-[hi-pos/VERB]() (1; 0% instances), [hi-pos/PART]()-[hi-pos/ADJ]() (1; 0% instances), [hi-pos/PRON]()-[hi-pos/DET]() (1; 0% instances), [hi-pos/VERB]()-[hi-pos/DET]() (1; 0% instances), [hi-pos/VERB]()-[hi-pos/VERB]() (1; 0% instances), [hi-pos/X]()-[hi-pos/DET]() (1; 0% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 amod	color:blue
1	मंदिर	मंदिर	NOUN	NN	Case=Acc|Gender=Masc|Number=Sing|Person=3	4	nmod	_	Vib=0_का|Tam=0|ChunkId=NP|ChunkType=head|Translit=maṁdira
2	के	का	ADP	PSP	AdpType=Post|Case=Acc|Gender=Masc|Number=Sing	1	case	_	ChunkId=NP|ChunkType=child|Translit=ke
3	पूर्व	पूर्व	ADJ	JJ	Case=Acc	4	amod	_	ChunkId=NP2|ChunkType=child|Translit=pūrva
4	हिस्‍से	हिस्सा	NOUN	NN	Case=Acc|Gender=Masc|Number=Sing|Person=3	7	nmod	_	Vib=0_में|Tam=0|ChunkId=NP2|ChunkType=head|Translit=hisse
5	में	में	ADP	PSP	AdpType=Post	4	case	_	ChunkId=NP2|ChunkType=child|Translit=meṁ
6	एक	एक	NUM	QC	NumType=Card	7	nummod	_	ChunkId=NP3|ChunkType=child|Translit=eka
7	स्‍तूप	स्तूप	NOUN	NN	Case=Nom|Gender=Masc|Number=Sing|Person=3	0	root	_	Vib=0|Tam=0|ChunkId=NP3|ChunkType=head|Translit=stūpa
8	है	है	VERB	VM	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	7	cop	_	Vib=है|Tam=hE|ChunkId=VGF|ChunkType=head|Stype=declarative|Translit=hai
9	।	।	PUNCT	SYM	_	7	punct	_	ChunkId=BLK|ChunkType=head|Translit=.

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 amod	color:blue
1	कुशीनगर	कुशीनगर	PROPN	NNP	Case=Acc|Gender=Masc|Number=Sing|Person=3	3	advmod	_	Vib=0_में|Tam=0|ChunkId=NP|ChunkType=head|Translit=kuśīnagara
2	में	में	ADP	PSP	AdpType=Post	1	case	_	ChunkId=NP|ChunkType=child|Translit=meṁ
3	मौजूद	मौजूद	ADJ	JJ	Case=Acc	4	amod	_	ChunkId=JJP|ChunkType=head|Translit=maujūda
4	रामाभार	रामाभार	PROPN	NNP	Case=Acc|Gender=Masc|Number=Sing|Person=3	6	nmod	_	Vib=0_का|Tam=0|ChunkId=NP2|ChunkType=head|Translit=rāmābhāra
5	का	का	ADP	PSP	AdpType=Post|Case=Nom|Gender=Masc|Number=Sing	4	case	_	ChunkId=NP2|ChunkType=child|Translit=kā
6	स्‍तूप	स्तूप	NOUN	NN	Case=Nom|Gender=Masc|Number=Sing|Person=3	10	nsubj	_	Vib=0|Tam=0|ChunkId=NP3|ChunkType=head|Translit=stūpa
7	इन्‍हीं	यह	PRON	PRP	Case=Acc|Number=Plur|Person=3|PronType=Prs	10	nmod	_	Vib=0_में_से|Tam=0|ChunkId=NP4|ChunkType=head|Translit=inhīṁ
8	में	में	ADP	PSP	AdpType=Post	7	case	_	ChunkId=NP4|ChunkType=child|Translit=meṁ
9	से	से	ADP	PSP	AdpType=Post	7	case	_	ChunkId=NP4|ChunkType=child|Translit=se
10	एक	एक	NUM	QC	NumType=Card	0	root	_	ChunkId=NP5|ChunkType=head|Translit=eka
11	है	है	VERB	VM	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	10	cop	_	Vib=है|Tam=hE|ChunkId=VGF|ChunkType=head|Stype=declarative|Translit=hai
12	।	।	PUNCT	SYM	_	10	punct	_	ChunkId=BLK|ChunkType=head|Translit=.

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 5 amod	color:blue
1	कल्याणी	कल्याणी	PROPN	NNP	Case=Acc|Gender=Fem|Number=Sing|Person=3	3	nmod	_	Vib=0_का|Tam=0|ChunkId=NP|ChunkType=head|Translit=kalyāṇī
2	के	का	ADP	PSP	AdpType=Post|Case=Acc|Gender=Masc|Number=Sing	1	case	_	ChunkId=NP|ChunkType=child|Translit=ke
3	नाम	नाम	NOUN	NN	Case=Acc|Gender=Masc|Number=Sing|Person=3	5	nmod	_	Vib=0_से|Tam=0|ChunkId=NP2|ChunkType=head|Translit=nāma
4	से	से	ADP	PSP	AdpType=Post	3	case	_	ChunkId=NP2|ChunkType=child|Translit=se
5	जाना	जा	VERB	VM	Number=Sing|VerbForm=Inf	9	amod	_	Vib=ना_जा+ना_वाला|Tam=nA|ChunkId=VGNN|ChunkType=head|Translit=jānā
6	जाने	जा	AUX	VAUX	Case=Acc|VerbForm=Inf	5	aux	_	Vib=ना|Tam=nA|ChunkId=VGNN|ChunkType=child|Translit=jāne
7	वाला	वाला	ADP	PSP	AdpType=Post|Case=Nom|Gender=Masc|Number=Sing	5	mark	_	ChunkId=VGNN|ChunkType=child|Translit=vālā
8	यह	यह	DET	DEM	Case=Nom|Number=Sing|Person=3|PronType=Dem	9	det	_	ChunkId=NP3|ChunkType=child|Translit=yaha
9	हेलीपैड	हेलीपैड	NOUN	NN	Case=Nom|Gender=Masc|Number=Sing|Person=3	10	nsubj	_	Vib=0|Tam=0|ChunkId=NP3|ChunkType=head|Translit=helīpaiḍa
10	दर्शनीय	दर्शनीय	ADJ	JJ	_	0	root	_	ChunkId=JJP|ChunkType=head|Translit=darśanīya
11	है	है	VERB	VM	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	10	cop	_	Vib=है|Tam=hE|ChunkId=VGF|ChunkType=head|Stype=declarative|Translit=hai
12	।	।	PUNCT	SYM	_	10	punct	_	ChunkId=BLK|ChunkType=head|Translit=.

~~~


