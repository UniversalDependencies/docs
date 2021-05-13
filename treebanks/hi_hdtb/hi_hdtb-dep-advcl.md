---
layout: base
title:  'Statistics of advcl in UD_Hindi-HDTB'
udver: '2'
---

## Treebank Statistics: UD_Hindi-HDTB: Relations: `advcl`

This relation is universal.

4456 nodes (1%) are attached to their parents as `advcl`.

4162 instances of `advcl` (93%) are right-to-left (child precedes parent).
Average distance between parent and child is 7.2105026929982.

The following 9 pairs of parts of speech are connected with `advcl`: <tt><a href="hi_hdtb-pos-VERB.html">VERB</a></tt>-<tt><a href="hi_hdtb-pos-VERB.html">VERB</a></tt> (4290; 96% instances), <tt><a href="hi_hdtb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="hi_hdtb-pos-VERB.html">VERB</a></tt> (79; 2% instances), <tt><a href="hi_hdtb-pos-ADJ.html">ADJ</a></tt>-<tt><a href="hi_hdtb-pos-VERB.html">VERB</a></tt> (45; 1% instances), <tt><a href="hi_hdtb-pos-NUM.html">NUM</a></tt>-<tt><a href="hi_hdtb-pos-NUM.html">NUM</a></tt> (18; 0% instances), <tt><a href="hi_hdtb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="hi_hdtb-pos-PRON.html">PRON</a></tt> (15; 0% instances), <tt><a href="hi_hdtb-pos-PRON.html">PRON</a></tt>-<tt><a href="hi_hdtb-pos-VERB.html">VERB</a></tt> (5; 0% instances), <tt><a href="hi_hdtb-pos-DET.html">DET</a></tt>-<tt><a href="hi_hdtb-pos-VERB.html">VERB</a></tt> (2; 0% instances), <tt><a href="hi_hdtb-pos-ADV.html">ADV</a></tt>-<tt><a href="hi_hdtb-pos-ADV.html">ADV</a></tt> (1; 0% instances), <tt><a href="hi_hdtb-pos-PRON.html">PRON</a></tt>-<tt><a href="hi_hdtb-pos-PRON.html">PRON</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 13 4 advcl	color:blue
1	जल	जल	PROPN	NNPC	Case=Nom|Gender=Masc|Number=Sing|Person=3	2	compound	_	Vib=0|Tam=0|ChunkId=NP|ChunkType=child|Translit=jala
2	मंदिर	मंदिर	PROPN	NNP	Case=Acc|Gender=Masc|Number=Sing|Person=3	4	obl	_	Vib=0_तक|Tam=0|ChunkId=NP|ChunkType=head|Translit=maṁdira
3	तक	तक	ADP	PSP	AdpType=Post	2	case	_	ChunkId=NP|ChunkType=child|Translit=taka
4	जाने	जा	VERB	VM	Case=Acc|VerbForm=Inf	13	advcl	_	Vib=ना_के_लिए|Tam=nA|ChunkId=VGNN|ChunkType=head|Translit=jāne
5	के	के	ADP	PSP	AdpType=Post	4	mark	_	ChunkId=VGNN|ChunkType=child|Translit=ke
6	लिए	लिए	ADP	PSP	AdpType=Post	4	mark	_	ChunkId=VGNN|ChunkType=child|Translit=lie
7	तालाब	तालाब	NOUN	NN	Case=Acc|Gender=Masc|Number=Sing|Person=3	13	obl	_	Vib=0_के_ऊपर|Tam=0|ChunkId=NP2|ChunkType=head|Translit=tālāba
8	के	के	ADP	PSP	AdpType=Post	7	case	_	ChunkId=NP2|ChunkType=child|Translit=ke
9	ऊपर	ऊपर	ADP	NST	AdpType=Post|Case=Nom|Gender=Masc|Number=Sing|Person=3	7	case	_	AltTag=ADP-NOUN|ChunkId=NP2|ChunkType=child|Translit=ūpara
10	पुल	पुल	NOUN	NN	Case=Acc|Gender=Masc|Number=Sing|Person=3	12	nmod	_	Vib=0_का|Tam=0|ChunkId=NP3|ChunkType=head|Translit=pula
11	का	का	ADP	PSP	AdpType=Post|Case=Nom|Gender=Masc|Number=Sing	10	case	_	ChunkId=NP3|ChunkType=child|Translit=kā
12	निर्माण	निर्माण	NOUN	NN	Case=Nom|Gender=Masc|Number=Sing|Person=3	13	compound	_	Vib=0|Tam=0|ChunkId=NP4|ChunkType=head|Translit=nirmāṇa
13	किया	कर	VERB	VM	Aspect=Perf|Gender=Masc|Number=Sing|Person=3|VerbForm=Part|Voice=Pass	0	root	_	Vib=या_जा+या1_है|Tam=yA|ChunkId=VGF|ChunkType=head|Stype=declarative|Translit=kiyā
14	गया	जा	AUX	VAUX	Aspect=Perf|Gender=Masc|Number=Sing|VerbForm=Part	13	aux:pass	_	Vib=या1|Tam=yA1|ChunkId=VGF|ChunkType=child|Translit=gayā
15	है	है	AUX	VAUX	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	13	aux:pass	_	Vib=है|Tam=hE|ChunkId=VGF|ChunkType=child|Translit=hai
16	।	।	PUNCT	SYM	_	13	punct	_	ChunkId=BLK|ChunkType=head|Translit=.

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 4 advcl	color:blue
1	दरअसल	दरअसल	ADV	RB	_	8	nmod	_	ChunkId=RBP|ChunkType=head|Translit=daraasala
2	प्रभाकरन	प्रभाकरन	PROPN	NNP	Case=Acc|Gender=Masc|Number=Sing|Person=3	4	obj	_	Vib=0_को|Tam=0|ChunkId=NP|ChunkType=head|Translit=prabhākarana
3	को	को	ADP	PSP	AdpType=Post	2	case	_	ChunkId=NP|ChunkType=child|Translit=ko
4	लेकर	ले	VERB	VM	VerbForm=Conv	8	advcl	_	Vib=कर|Tam=kara|ChunkId=VGNF|ChunkType=head|Translit=lekara
5	२८	२८	PROPN	NNPC	Case=Nom|Number=Sing|Person=3	6	compound	_	Vib=0|Tam=0|ChunkId=NP2|ChunkType=child|Translit=28
6	दिसंबर	दिसंबर	PROPN	NNP	Case=Acc|Gender=Masc|Number=Sing|Person=3	8	nmod	_	Vib=0_से|Tam=0|ChunkId=NP2|ChunkType=head|Translit=disaṁbara
7	से	से	ADP	PSP	AdpType=Post	6	case	_	ChunkId=NP2|ChunkType=child|Translit=se
8	अटकलें	अटकल	NOUN	NN	Case=Nom|Gender=Fem|Number=Plur|Person=3	0	root	_	Vib=0|Tam=0|ChunkId=NP3|ChunkType=head|Translit=aṭakaleṁ
9	हैं	है	AUX	VM	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	8	cop	_	Vib=है|Tam=hE|ChunkId=VGF|ChunkType=head|Stype=declarative|Translit=haiṁ
10	।	।	PUNCT	SYM	_	8	punct	_	ChunkId=BLK|ChunkType=head|Translit=.

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 12 10 advcl	color:blue
1	लेकिन	लेकिन	CCONJ	CC	_	12	cc	_	SpaceAfter=No|ChunkId=CCP|ChunkType=head|Translit=lekina
2	,	,	PUNCT	SYM	_	12	punct	_	ChunkId=CCP|ChunkType=child|Translit=,
3	इस	यह	DET	DEM	Case=Acc|Number=Sing|Person=3|PronType=Dem	4	det	_	ChunkId=NP|ChunkType=child|Translit=isa
4	कहर	कहर	NOUN	NN	Case=Acc|Gender=Masc|Number=Sing|Person=3	12	nmod	_	Vib=0_के_बाद_से|Tam=0|ChunkId=NP|ChunkType=head|Translit=kahara
5	के	के	ADP	PSP	AdpType=Post	4	case	_	ChunkId=NP|ChunkType=child|Translit=ke
6	बाद	बाद	ADP	NST	AdpType=Post|Case=Acc|Gender=Masc|Number=Sing|Person=3	4	case	_	AltTag=ADP-NOUN|ChunkId=NP|ChunkType=child|Translit=bāda
7	से	से	ADP	PSP	AdpType=Post	4	case	_	ChunkId=NP|ChunkType=child|Translit=se
8	प्रभाकरन	प्रभाकरन	PROPN	NNP	Case=Acc|Gender=Masc|Number=Sing|Person=3	10	obj	_	Vib=0_को|Tam=0|ChunkId=NP2|ChunkType=head|Translit=prabhākarana
9	को	को	ADP	PSP	AdpType=Post	8	case	_	ChunkId=NP2|ChunkType=child|Translit=ko
10	लेकर	ले	VERB	VM	VerbForm=Conv	12	advcl	_	Vib=कर|Tam=kara|ChunkId=VGNF|ChunkType=head|Translit=lekara
11	रहस्य	रहस्य	NOUN	NN	Case=Nom|Gender=Masc|Number=Sing|Person=3	12	nsubj	_	Vib=0|Tam=0|ChunkId=NP3|ChunkType=head|Translit=rahasya
12	बरकरार	बरकरार	ADJ	JJ	_	0	root	_	ChunkId=JJP|ChunkType=head|Translit=barakarāra
13	है	है	AUX	VM	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	12	cop	_	Vib=है|Tam=hE|ChunkId=VGF|ChunkType=head|Stype=declarative|Translit=hai
14	।	।	PUNCT	SYM	_	12	punct	_	ChunkId=BLK|ChunkType=head|Translit=.

~~~


