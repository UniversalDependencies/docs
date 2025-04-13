---
layout: base
title:  'Statistics of advcl in UD_Hindi-HDTB'
udver: '2'
---

## Treebank Statistics: UD_Hindi-HDTB: Relations: `advcl`

This relation is universal.

4534 nodes (1%) are attached to their parents as `advcl`.

4240 instances of `advcl` (94%) are right-to-left (child precedes parent).
Average distance between parent and child is 7.14314071460079.

The following 10 pairs of parts of speech are connected with `advcl`: <tt><a href="hi_hdtb-pos-VERB.html">VERB</a></tt>-<tt><a href="hi_hdtb-pos-VERB.html">VERB</a></tt> (4323; 95% instances), <tt><a href="hi_hdtb-pos-ADJ.html">ADJ</a></tt>-<tt><a href="hi_hdtb-pos-VERB.html">VERB</a></tt> (88; 2% instances), <tt><a href="hi_hdtb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="hi_hdtb-pos-VERB.html">VERB</a></tt> (79; 2% instances), <tt><a href="hi_hdtb-pos-NUM.html">NUM</a></tt>-<tt><a href="hi_hdtb-pos-NUM.html">NUM</a></tt> (18; 0% instances), <tt><a href="hi_hdtb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="hi_hdtb-pos-PRON.html">PRON</a></tt> (15; 0% instances), <tt><a href="hi_hdtb-pos-PRON.html">PRON</a></tt>-<tt><a href="hi_hdtb-pos-VERB.html">VERB</a></tt> (5; 0% instances), <tt><a href="hi_hdtb-pos-ADV.html">ADV</a></tt>-<tt><a href="hi_hdtb-pos-VERB.html">VERB</a></tt> (2; 0% instances), <tt><a href="hi_hdtb-pos-DET.html">DET</a></tt>-<tt><a href="hi_hdtb-pos-VERB.html">VERB</a></tt> (2; 0% instances), <tt><a href="hi_hdtb-pos-ADV.html">ADV</a></tt>-<tt><a href="hi_hdtb-pos-ADV.html">ADV</a></tt> (1; 0% instances), <tt><a href="hi_hdtb-pos-PRON.html">PRON</a></tt>-<tt><a href="hi_hdtb-pos-PRON.html">PRON</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 13 4 advcl	color:blue
1	जल	जल	PROPN	NNPC	Case=Nom|Gender=Masc|Number=Sing|Person=3	2	compound	_	ChunkId=NP|ChunkType=child|LTranslit=jala|Tam=0|Translit=jala|Vib=0
2	मंदिर	मंदिर	PROPN	NNP	Case=Acc|Gender=Masc|Number=Sing|Person=3	4	obl	_	ChunkId=NP|ChunkType=head|LTranslit=maṁdira|Tam=0|Translit=maṁdira|Vib=0_तक
3	तक	तक	ADP	PSP	AdpType=Post	2	case	_	ChunkId=NP|ChunkType=child|LTranslit=taka|Translit=taka
4	जाने	जाना	VERB	VM	Case=Acc|VerbForm=Inf	13	advcl	_	ChunkId=VGNN|ChunkType=head|LTranslit=jānā|Tam=nA|Translit=jāne|Vib=ना_के_लिए
5	के	के	ADP	PSP	AdpType=Post	4	mark	_	ChunkId=VGNN|ChunkType=child|LTranslit=ke|Translit=ke
6	लिए	लिए	ADP	PSP	AdpType=Post	4	mark	_	ChunkId=VGNN|ChunkType=child|LTranslit=lie|Translit=lie
7	तालाब	तालाब	NOUN	NN	Case=Acc|Gender=Masc|Number=Sing|Person=3	13	obl	_	ChunkId=NP2|ChunkType=head|LTranslit=tālāba|Tam=0|Translit=tālāba|Vib=0_के_ऊपर
8	के	के	ADP	PSP	AdpType=Post	7	case	_	ChunkId=NP2|ChunkType=child|LTranslit=ke|Translit=ke
9	ऊपर	ऊपर	ADP	NST	AdpType=Post|Case=Nom|Gender=Masc|Number=Sing|Person=3	7	case	_	AltTag=ADP-NOUN|ChunkId=NP2|ChunkType=child|LTranslit=ūpara|Translit=ūpara
10	पुल	पुल	NOUN	NN	Case=Acc|Gender=Masc|Number=Sing|Person=3	12	nmod	_	ChunkId=NP3|ChunkType=head|LTranslit=pula|Tam=0|Translit=pula|Vib=0_का
11	का	का	ADP	PSP	AdpType=Post|Case=Nom|Gender=Masc|Number=Sing	10	case	_	ChunkId=NP3|ChunkType=child|LTranslit=kā|Translit=kā
12	निर्माण	निर्माण	NOUN	NN	Case=Nom|Gender=Masc|Number=Sing|Person=3	13	compound	_	ChunkId=NP4|ChunkType=head|LTranslit=nirmāṇa|Tam=0|Translit=nirmāṇa|Vib=0
13	किया	करना	VERB	VM	Aspect=Perf|Gender=Masc|Number=Sing|Person=3|VerbForm=Part|Voice=Pass	0	root	_	ChunkId=VGF|ChunkType=head|LTranslit=karanā|Stype=declarative|Tam=yA|Translit=kiyā|Vib=या_जा+या1_है
14	गया	जाना	AUX	VAUX	Aspect=Perf|Gender=Masc|Number=Sing|VerbForm=Part	13	aux:pass	_	ChunkId=VGF|ChunkType=child|LTranslit=jānā|Tam=yA1|Translit=gayā|Vib=या1
15	है	है	AUX	VAUX	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	13	aux:pass	_	ChunkId=VGF|ChunkType=child|LTranslit=hai|Tam=hE|Translit=hai|Vib=है
16	।	।	PUNCT	SYM	_	13	punct	_	ChunkId=BLK|ChunkType=head|LTranslit=.|Translit=.

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 12 10 advcl	color:blue
1	लेकिन	लेकिन	CCONJ	CC	_	12	cc	_	ChunkId=CCP|ChunkType=head|LTranslit=lekina|SpaceAfter=No|Translit=lekina
2	,	,	PUNCT	SYM	_	12	punct	_	ChunkId=CCP|ChunkType=child|LTranslit=,|Translit=,
3	इस	यह	DET	DEM	Case=Acc|Number=Sing|Person=3|PronType=Dem	4	det	_	ChunkId=NP|ChunkType=child|LTranslit=yaha|Translit=isa
4	कहर	कहर	NOUN	NN	Case=Acc|Gender=Masc|Number=Sing|Person=3	12	nmod	_	ChunkId=NP|ChunkType=head|LTranslit=kahara|Tam=0|Translit=kahara|Vib=0_के_बाद_से
5	के	के	ADP	PSP	AdpType=Post	4	case	_	ChunkId=NP|ChunkType=child|LTranslit=ke|Translit=ke
6	बाद	बाद	ADP	NST	AdpType=Post|Case=Acc|Gender=Masc|Number=Sing|Person=3	4	case	_	AltTag=ADP-NOUN|ChunkId=NP|ChunkType=child|LTranslit=bāda|Translit=bāda
7	से	से	ADP	PSP	AdpType=Post	4	case	_	ChunkId=NP|ChunkType=child|LTranslit=se|Translit=se
8	प्रभाकरन	प्रभाकरन	PROPN	NNP	Case=Acc|Gender=Masc|Number=Sing|Person=3	10	obj	_	ChunkId=NP2|ChunkType=head|LTranslit=prabhākarana|Tam=0|Translit=prabhākarana|Vib=0_को
9	को	को	ADP	PSP	AdpType=Post	8	case	_	ChunkId=NP2|ChunkType=child|LTranslit=ko|Translit=ko
10	लेकर	लेना	VERB	VM	VerbForm=Conv	12	advcl	_	ChunkId=VGNF|ChunkType=head|LTranslit=lenā|Tam=kara|Translit=lekara|Vib=कर
11	रहस्य	रहस्य	NOUN	NN	Case=Nom|Gender=Masc|Number=Sing|Person=3	12	nsubj	_	ChunkId=NP3|ChunkType=head|LTranslit=rahasya|Tam=0|Translit=rahasya|Vib=0
12	बरकरार	बरकरार	ADJ	JJ	_	0	root	_	ChunkId=JJP|ChunkType=head|LTranslit=barakarāra|Translit=barakarāra
13	है	है	AUX	VM	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	12	cop	_	ChunkId=VGF|ChunkType=head|LTranslit=hai|Stype=declarative|Tam=hE|Translit=hai|Vib=है
14	।	।	PUNCT	SYM	_	12	punct	_	ChunkId=BLK|ChunkType=head|LTranslit=.|Translit=.

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 4 advcl	color:blue
1	दरअसल	दरअसल	ADV	RB	_	8	nmod	_	ChunkId=RBP|ChunkType=head|LTranslit=daraasala|Translit=daraasala
2	प्रभाकरन	प्रभाकरन	PROPN	NNP	Case=Acc|Gender=Masc|Number=Sing|Person=3	4	obj	_	ChunkId=NP|ChunkType=head|LTranslit=prabhākarana|Tam=0|Translit=prabhākarana|Vib=0_को
3	को	को	ADP	PSP	AdpType=Post	2	case	_	ChunkId=NP|ChunkType=child|LTranslit=ko|Translit=ko
4	लेकर	लेना	VERB	VM	VerbForm=Conv	8	advcl	_	ChunkId=VGNF|ChunkType=head|LTranslit=lenā|Tam=kara|Translit=lekara|Vib=कर
5	२८	२८	PROPN	NNPC	Case=Nom|Number=Sing|Person=3	6	compound	_	ChunkId=NP2|ChunkType=child|LTranslit=28|Tam=0|Translit=28|Vib=0
6	दिसंबर	दिसंबर	PROPN	NNP	Case=Acc|Gender=Masc|Number=Sing|Person=3	8	nmod	_	ChunkId=NP2|ChunkType=head|LTranslit=disaṁbara|Tam=0|Translit=disaṁbara|Vib=0_से
7	से	से	ADP	PSP	AdpType=Post	6	case	_	ChunkId=NP2|ChunkType=child|LTranslit=se|Translit=se
8	अटकलें	अटकल	NOUN	NN	Case=Nom|Gender=Fem|Number=Plur|Person=3	0	root	_	ChunkId=NP3|ChunkType=head|CxnElt=9:Existential-CopPred.Pivot|LTranslit=aṭakala|Tam=0|Translit=aṭakaleṁ|Vib=0
9	हैं	है	AUX	VM	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	8	cop	_	ChunkId=VGF|ChunkType=head|Cxn=Existential-CopPred|LTranslit=hai|Stype=declarative|Tam=hE|Translit=haiṁ|Vib=है
10	।	।	PUNCT	SYM	_	8	punct	_	ChunkId=BLK|ChunkType=head|LTranslit=.|Translit=.

~~~


