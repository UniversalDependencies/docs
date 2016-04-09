

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Hindi)

This relation is universal.

11419 nodes (3%) are attached to their parents as `aux`.

11404 instances of `aux` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.00683072072861.

The following 5 pairs of parts of speech are connected with `aux`: [hi-pos/VERB]()-[hi-pos/AUX]() (11404; 100% instances), [hi-pos/ADJ]()-[hi-pos/ADJ]() (7; 0% instances), [hi-pos/NUM]()-[hi-pos/NUM]() (5; 0% instances), [hi-pos/PRON]()-[hi-pos/PRON]() (2; 0% instances), [hi-pos/SCONJ]()-[hi-pos/SCONJ]() (1; 0% instances).


~~~ conllu
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 13 14 aux	color:blue
1	इस	यह	DET	DEM	Case=Acc|Number=Sing|Person=3|PronType=Dem	2	det	_	ChunkId=NP|ChunkType=child|Translit=isa
2	मूर्ति	मूर्ति	NOUN	NN	Case=Acc|Gender=Fem|Number=Sing|Person=3	10	nsubj	_	Vib=0_का|Tam=0|ChunkId=NP|ChunkType=head|Translit=mūrti
3	के	का	ADP	PSP	AdpType=Post|Case=Nom|Gender=Masc|Number=Plur	2	case	_	ChunkId=NP|ChunkType=child|Translit=ke
4	भी	भी	PART	RP	_	2	dep	_	ChunkId=NP|ChunkType=child|Translit=bhī
5	करीब	करीब	PART	RP	_	7	dep	_	ChunkId=NP2|ChunkType=child|Translit=karība
6	पाँच	पाँच	NUM	QCC	NumType=Card	7	dep	_	ChunkId=NP2|ChunkType=child|Translit=pām̃ca
7	सौ	सौ	NUM	QC	NumType=Card	8	nummod	_	ChunkId=NP2|ChunkType=child|Translit=sau
8	वर्ष	वर्ष	NOUN	NN	Case=Nom|Gender=Masc|Number=Plur|Person=3	10	nmod	_	Vib=0|Tam=0|ChunkId=NP2|ChunkType=head|Translit=varṣa
9	पुराना	पुराना	ADJ	JJ	Gender=Masc|Number=Sing	10	xcomp	_	ChunkId=JJP|ChunkType=head|Translit=purānā
10	होने	हो	VERB	VM	Case=Acc|Number=Sing|VerbForm=Inf	12	nmod	_	Vib=ना_का|Tam=nA|ChunkId=VGNN|ChunkType=head|Translit=hone
11	का	का	ADP	PSP	AdpType=Post|Case=Nom|Gender=Masc|Number=Sing	10	mark	_	ChunkId=VGNN|ChunkType=child|Translit=kā
12	प्रमाण	प्रमाण	NOUN	NN	Case=Nom|Gender=Masc|Number=Sing|Person=3	13	nsubj	_	Vib=0|Tam=0|ChunkId=NP3|ChunkType=head|Translit=pramāṇa
13	मिलता	मिल	VERB	VM	Aspect=Imp|Gender=Masc|Number=Sing|Person=3|VerbForm=Part|Voice=Act	0	root	_	Vib=ता_है|Tam=wA|ChunkId=VGF|ChunkType=head|Stype=declarative|Translit=milatā
14	है	है	AUX	VAUX	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	13	aux	_	Vib=है|Tam=hE|ChunkId=VGF|ChunkType=child|Translit=hai
15	।	।	PUNCT	SYM	_	13	punct	_	ChunkId=BLK|ChunkType=head|Translit=.

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 10 aux	color:blue
1	सरकार	सरकार	NOUN	NN	Case=Acc|Gender=Fem|Number=Sing|Person=3	21	nsubj	_	Vib=0_ने|Tam=0|ChunkId=NP|ChunkType=head|Translit=sarakāra
2	ने	ने	ADP	PSP	AdpType=Post	1	case	_	ChunkId=NP|ChunkType=child|Translit=ne
3	गोधरा	गोधरा	PROPN	NNP	Case=Nom|Gender=Masc|Number=Sing|Person=3	5	nmod	_	Vib=0|Tam=0|ChunkId=NP2|ChunkType=child|Translit=godharā
4	ट्रेन	ट्रेन	NOUN	NNC	Case=Nom|Gender=Fem|Number=Sing|Person=3	5	compound	_	Vib=0|Tam=0|ChunkId=NP2|ChunkType=child|Translit=ṭrena
5	कांड	कांड	NOUN	NN	Case=Acc|Gender=Masc|Number=Sing|Person=3	7	nmod	_	Vib=0_का|Tam=0|ChunkId=NP2|ChunkType=head|Translit=kāṁḍa
6	की	का	ADP	PSP	AdpType=Post|Case=Nom|Gender=Fem|Number=Sing	5	case	_	ChunkId=NP2|ChunkType=child|Translit=kī
7	जांच	जांच	NOUN	NN	Case=Nom|Gender=Fem|Number=Sing|Person=3	8	compound	_	Vib=0|Tam=0|ChunkId=NP3|ChunkType=head|Translit=jāṁca
8	कर	कर	VERB	VM	Number=Sing	12	acl	_	Vib=0_रह+या|Tam=0|ChunkId=VGNF|ChunkType=head|Translit=kara
9	रही	रह	AUX	VAUX	Aspect=Perf|Gender=Fem|Number=Sing|VerbForm=Part	8	aux	_	Vib=या|Tam=yA|ChunkId=VGNF|ChunkType=child|Translit=rahī
10	उच्च	उच्च	ADJ	JJC	_	11	aux	_	ChunkId=NP4|ChunkType=child|Translit=ucca
11	स्तरीय	स्तरीय	ADJ	JJ	Case=Acc	12	amod	_	ChunkId=NP4|ChunkType=child|Translit=starīya
12	समिति	समिति	NOUN	NN	Case=Acc|Gender=Fem|Number=Sing|Person=3	14	nmod	_	Vib=0_का|Tam=0|ChunkId=NP4|ChunkType=head|Translit=samiti
13	के	का	ADP	PSP	AdpType=Post|Case=Acc|Gender=Masc|Number=Sing	12	case	_	ChunkId=NP4|ChunkType=child|Translit=ke
14	कार्यकाल	कार्यकाल	NOUN	NN	Case=Acc|Gender=Masc|Number=Sing|Person=3	18	dobj	_	Vib=0_को|Tam=0|ChunkId=NP5|ChunkType=head|Translit=kāryakāla
15	को	को	ADP	PSP	AdpType=Post	14	case	_	ChunkId=NP5|ChunkType=child|Translit=ko
16	तीन	तीन	NUM	QC	NumType=Card	17	nummod	_	ChunkId=NP6|ChunkType=child|Translit=tīna
17	माह	माह	NOUN	NN	Case=Nom|Gender=Masc|Number=Sing|Person=3	18	nmod	_	Vib=0|Tam=0|ChunkId=NP6|ChunkType=head|Translit=māha
18	बढ़ाने	बढ़ा	VERB	VM	Case=Acc|Number=Sing|VerbForm=Inf	20	nmod	_	Vib=ना_का|Tam=nA|ChunkId=VGNN|ChunkType=head|Translit=baṛhāne
19	का	का	ADP	PSP	AdpType=Post|Case=Nom|Gender=Masc|Number=Sing	18	mark	_	ChunkId=VGNN|ChunkType=child|Translit=kā
20	फैसला	फैसला	NOUN	NN	Case=Nom|Gender=Masc|Number=Sing|Person=3	21	compound	_	Vib=0|Tam=0|ChunkId=NP7|ChunkType=head|Translit=phaisalā
21	किया	कर	VERB	VM	Aspect=Perf|Gender=Masc|Number=Sing|Person=3|VerbForm=Part|Voice=Act	0	root	_	Vib=या_है|Tam=yA|ChunkId=VGF|ChunkType=head|Stype=declarative|Translit=kiyā
22	है	है	AUX	VAUX	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	21	aux	_	Vib=है|Tam=hE|ChunkId=VGF|ChunkType=child|Translit=hai
23	।	।	PUNCT	SYM	_	21	punct	_	ChunkId=BLK|ChunkType=head|Translit=.

~~~


~~~ conllu
# visual-style 16	bgColor:blue
# visual-style 16	fgColor:white
# visual-style 17	bgColor:blue
# visual-style 17	fgColor:white
# visual-style 17 16 aux	color:blue
1	सरकार	सरकार	NOUN	NN	Case=Acc|Gender=Fem|Number=Sing|Person=3	19	nsubj	_	Vib=0_ने|Tam=0|ChunkId=NP|ChunkType=head|Translit=sarakāra
2	ने	ने	ADP	PSP	AdpType=Post	1	case	_	ChunkId=NP|ChunkType=child|Translit=ne
3	पिछले	पिछला	ADJ	JJ	Case=Acc|Gender=Masc|Number=Sing	4	amod	_	ChunkId=NP2|ChunkType=child|Translit=pichale
4	साल	साल	NOUN	NN	Case=Acc|Gender=Masc|Number=Sing|Person=3	8	nmod	_	Vib=0_का|Tam=0|ChunkId=NP2|ChunkType=head|Translit=sāla
5	के	का	ADP	PSP	AdpType=Post|Case=Acc|Gender=Masc|Number=Sing	4	case	_	ChunkId=NP2|ChunkType=child|Translit=ke
6	१६,९०६	१६९०६	NUM	QCC	NumType=Card	7	case	_	ChunkId=NP3|ChunkType=child|Translit=16,906
7	करोड़	करोड	NUM	QC	NumType=Card	8	nummod	_	ChunkId=NP3|ChunkType=child|Translit=karoṛa
8	रुपये	रुपया	NOUN	NN	Case=Acc|Gender=Masc|Number=Sing|Person=3	11	nmod	_	Vib=0_का|Tam=0|ChunkId=NP3|ChunkType=head|Translit=rupaye
9	के	का	ADP	PSP	AdpType=Post|Case=Acc|Gender=Masc|Number=Sing	8	case	_	ChunkId=NP3|ChunkType=child|Translit=ke
10	पूँजी	पूँजी	NOUN	NNC	Case=Nom|Gender=Fem|Number=Sing|Person=3	11	compound	_	Vib=0|Tam=0|ChunkId=NP4|ChunkType=child|Translit=pūm̃jī
11	प्रावधान	प्रावधान	NOUN	NN	Case=Acc|Gender=Masc|Number=Sing|Person=3	14	dobj	_	Vib=0_को|Tam=0|ChunkId=NP4|ChunkType=head|Translit=prāvadhāna
12	को	को	ADP	PSP	AdpType=Post	11	case	_	ChunkId=NP4|ChunkType=child|Translit=ko
13	दोगुना	दोगुना	ADJ	QF	Gender=Masc|Number=Sing	14	compound	_	ChunkId=JJP|ChunkType=head|Translit=dogunā
14	करते	कर	VERB	VM	Aspect=Imp|Gender=Masc|Number=Sing|VerbForm=Part	19	advcl	_	Vib=ता_हो+या|Tam=wA|ChunkId=VGNF|ChunkType=head|Translit=karate
15	हुए	हो	AUX	VAUX	Aspect=Perf|Gender=Masc|Number=Sing|VerbForm=Part	14	aux	_	Vib=या|Tam=yA|ChunkId=VGNF|ChunkType=child|Translit=hue
16	३३,४८२	३३४८२	NUM	QCC	NumType=Card	17	aux	_	ChunkId=NP5|ChunkType=child|Translit=33,482
17	करोड़	करोड	NUM	QC	NumType=Card	18	nummod	_	ChunkId=NP5|ChunkType=child|Translit=karoṛa
18	रुपये	रुपया	NOUN	NN	Case=Nom|Gender=Masc|Number=Plur|Person=3	19	dobj	_	Vib=0|Tam=0|ChunkId=NP5|ChunkType=head|Translit=rupaye
19	किया	कर	VERB	VM	Aspect=Perf|Gender=Masc|Number=Sing|Person=3|VerbForm=Part|Voice=Act	0	root	_	Vib=या_है|Tam=yA|ChunkId=VGF|ChunkType=head|Stype=declarative|Translit=kiyā
20	है	है	AUX	VAUX	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	19	aux	_	Vib=है|Tam=hE|ChunkId=VGF|ChunkType=child|Translit=hai
21	।	।	PUNCT	SYM	_	19	punct	_	ChunkId=BLK|ChunkType=head|Translit=.

~~~


