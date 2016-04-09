

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Hindi)

This relation is universal.

348 nodes (0%) are attached to their parents as `dislocated`.

314 instances of `dislocated` (90%) are left-to-right (parent precedes child).
Average distance between parent and child is 4.55172413793103.

The following 19 pairs of parts of speech are connected with `dislocated`: [hi-pos/PROPN]()-[hi-pos/ADP]() (222; 64% instances), [hi-pos/NOUN]()-[hi-pos/ADP]() (56; 16% instances), [hi-pos/ADP]()-[hi-pos/ADP]() (14; 4% instances), [hi-pos/NOUN]()-[hi-pos/PRON]() (11; 3% instances), [hi-pos/PROPN]()-[hi-pos/ADV]() (7; 2% instances), [hi-pos/NOUN]()-[hi-pos/PROPN]() (6; 2% instances), [hi-pos/PROPN]()-[hi-pos/PART]() (5; 1% instances), [hi-pos/NOUN]()-[hi-pos/NOUN]() (4; 1% instances), [hi-pos/NOUN]()-[hi-pos/PART]() (4; 1% instances), [hi-pos/PROPN]()-[hi-pos/PROPN]() (4; 1% instances), [hi-pos/NOUN]()-[hi-pos/ADV]() (3; 1% instances), [hi-pos/NOUN]()-[hi-pos/ADJ]() (2; 1% instances), [hi-pos/PRON]()-[hi-pos/ADP]() (2; 1% instances), [hi-pos/VERB]()-[hi-pos/ADP]() (2; 1% instances), [hi-pos/VERB]()-[hi-pos/PART]() (2; 1% instances), [hi-pos/ADJ]()-[hi-pos/ADJ]() (1; 0% instances), [hi-pos/NUM]()-[hi-pos/ADP]() (1; 0% instances), [hi-pos/NUM]()-[hi-pos/NUM]() (1; 0% instances), [hi-pos/VERB]()-[hi-pos/AUX]() (1; 0% instances).


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 9 dislocated	color:blue
1	गोरखपुर	गोरखपुर	PROPN	NNP	Case=Acc|Gender=Masc|Number=Sing|Person=3	12	nmod	_	Vib=0_से|Tam=0|ChunkId=NP|ChunkType=head|Translit=gorakhapura
2	से	से	ADP	PSP	AdpType=Post	1	case	_	ChunkId=NP|ChunkType=child|Translit=se
3	हर	हर	DET	QF	PronType=Ind	4	det	_	ChunkId=NP2|ChunkType=child|Translit=hara
4	घंटे	घंटा	NOUN	NN	Case=Nom|Gender=Masc|Number=Sing|Person=3	12	nmod	_	Vib=0|Tam=0|ChunkId=NP2|ChunkType=head|Translit=ghaṁṭe
5	कुशीनगर	कुशीनगर	PROPN	NNP	Case=Acc|Gender=Masc|Number=Sing|Person=3	12	nmod	_	Vib=0|Tam=0|ChunkId=NP3|ChunkType=head|Translit=kuśīnagara
6	(	(	PUNCT	SYM	_	7	punct	_	ChunkId=NP4|ChunkType=child|Translit=(
7	कसया	कसया	PROPN	NNP	Case=Acc|Gender=Masc|Number=Sing|Person=3	5	nmod	_	Vib=0|Tam=0|ChunkId=NP4|ChunkType=head|Translit=kasayā
8	)	)	PUNCT	SYM	_	7	punct	_	ChunkId=NP4|ChunkType=child|Translit=)
9	के	के	ADP	PSP	AdpType=Post	5	dislocated	_	ChunkId=FRAGP|ChunkType=head|Translit=ke
10	लिए	लिए	ADP	PSP	AdpType=Post	9	dislocated	_	ChunkId=FRAGP|ChunkType=child|Translit=lie
11	बसें	बस	NOUN	NN	Case=Nom|Gender=Fem|Number=Plur|Person=3	12	nsubj	_	Vib=0|Tam=0|ChunkId=NP5|ChunkType=head|Translit=baseṁ
12	मिलती	मिल	VERB	VM	Aspect=Imp|Gender=Fem|Number=Plur|Person=3|VerbForm=Part|Voice=Act	0	root	_	Vib=ता_रह+ता_है|Tam=wA|ChunkId=VGF|ChunkType=head|Stype=declarative|Translit=milatī
13	रहती	रह	AUX	VAUX	Aspect=Imp|Gender=Fem|Number=Plur|VerbForm=Part	12	aux	_	Vib=ता|Tam=wA|ChunkId=VGF|ChunkType=child|Translit=rahatī
14	हैं	है	AUX	VAUX	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	13	auxpass	_	Vib=है|Tam=hE|ChunkId=VGF|ChunkType=child|Translit=haiṁ
15	।	।	PUNCT	SYM	_	12	punct	_	ChunkId=BLK|ChunkType=head|Translit=.

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 7 dislocated	color:blue
1	स्कॉटलैंड	स्कॉटलैंड	PROPN	NNP	Case=Nom|Gender=Masc|Number=Sing|Person=3	8	nsubj	_	Vib=0|Tam=0|ChunkId=NP|ChunkType=head|Translit=skôṭalaiṁḍa
2	खूबसूरत	खूबसूरत	ADJ	JJ	Case=Acc	3	amod	_	ChunkId=NP2|ChunkType=child|Translit=khūbasūrata
3	कासल्स	कासल	NOUN	NN	Case=Acc|Gender=Masc|Number=Plur|Person=3	8	nmod	_	Vib=0|Tam=0|ChunkId=NP2|ChunkType=head|Translit=kāsalsa
4	(	(	PUNCT	SYM	_	5	punct	_	ChunkId=NP3|ChunkType=child|Translit=(
5	किलों	किला	NOUN	NN	Case=Acc|Gender=Masc|Number=Plur|Person=3	3	nmod	_	Vib=0|Tam=0|ChunkId=NP3|ChunkType=head|Translit=kiloṁ
6	)	)	PUNCT	SYM	_	5	punct	_	ChunkId=NP3|ChunkType=child|Translit=)
7	का	का	ADP	PSP	AdpType=Post|Case=Nom|Gender=Masc|Number=Sing	3	dislocated	_	ChunkId=FRAGP|ChunkType=head|Translit=kā
8	देश	देश	NOUN	NN	Case=Nom|Gender=Masc|Number=Sing|Person=3	0	root	_	Vib=0|Tam=0|ChunkId=NP4|ChunkType=head|Translit=deśa
9	है	है	VERB	VM	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	8	cop	_	Vib=है|Tam=hE|ChunkId=VGF|ChunkType=head|Stype=declarative|Translit=hai
10	।	।	PUNCT	SYM	_	8	punct	_	ChunkId=BLK|ChunkType=head|Translit=.

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 10 dislocated	color:blue
1	गोरखपुर	गोरखपुर	PROPN	NNP	Case=Acc|Gender=Masc|Number=Sing|Person=3	12	nmod	_	Vib=0_से|Tam=0|ChunkId=NP|ChunkType=head|Translit=gorakhapura
2	से	से	ADP	PSP	AdpType=Post	1	case	_	ChunkId=NP|ChunkType=child|Translit=se
3	हर	हर	DET	QF	PronType=Ind	4	det	_	ChunkId=NP2|ChunkType=child|Translit=hara
4	घंटे	घंटा	NOUN	NN	Case=Nom|Gender=Masc|Number=Sing|Person=3	12	nmod	_	Vib=0|Tam=0|ChunkId=NP2|ChunkType=head|Translit=ghaṁṭe
5	कुशीनगर	कुशीनगर	PROPN	NNP	Case=Acc|Gender=Masc|Number=Sing|Person=3	12	nmod	_	Vib=0|Tam=0|ChunkId=NP3|ChunkType=head|Translit=kuśīnagara
6	(	(	PUNCT	SYM	_	7	punct	_	ChunkId=NP4|ChunkType=child|Translit=(
7	कसया	कसया	PROPN	NNP	Case=Acc|Gender=Masc|Number=Sing|Person=3	5	nmod	_	Vib=0|Tam=0|ChunkId=NP4|ChunkType=head|Translit=kasayā
8	)	)	PUNCT	SYM	_	7	punct	_	ChunkId=NP4|ChunkType=child|Translit=)
9	के	के	ADP	PSP	AdpType=Post	5	dislocated	_	ChunkId=FRAGP|ChunkType=head|Translit=ke
10	लिए	लिए	ADP	PSP	AdpType=Post	9	dislocated	_	ChunkId=FRAGP|ChunkType=child|Translit=lie
11	बसें	बस	NOUN	NN	Case=Nom|Gender=Fem|Number=Plur|Person=3	12	nsubj	_	Vib=0|Tam=0|ChunkId=NP5|ChunkType=head|Translit=baseṁ
12	मिलती	मिल	VERB	VM	Aspect=Imp|Gender=Fem|Number=Plur|Person=3|VerbForm=Part|Voice=Act	0	root	_	Vib=ता_रह+ता_है|Tam=wA|ChunkId=VGF|ChunkType=head|Stype=declarative|Translit=milatī
13	रहती	रह	AUX	VAUX	Aspect=Imp|Gender=Fem|Number=Plur|VerbForm=Part	12	aux	_	Vib=ता|Tam=wA|ChunkId=VGF|ChunkType=child|Translit=rahatī
14	हैं	है	AUX	VAUX	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	13	auxpass	_	Vib=है|Tam=hE|ChunkId=VGF|ChunkType=child|Translit=haiṁ
15	।	।	PUNCT	SYM	_	12	punct	_	ChunkId=BLK|ChunkType=head|Translit=.

~~~


