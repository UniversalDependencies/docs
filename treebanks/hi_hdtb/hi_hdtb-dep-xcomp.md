---
layout: base
title:  'Statistics of xcomp in UD_Hindi-HDTB'
udver: '2'
---

## Treebank Statistics: UD_Hindi-HDTB: Relations: `xcomp`

This relation is universal.

1108 nodes (0%) are attached to their parents as `xcomp`.

1100 instances of `xcomp` (99%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.4043321299639.

The following 8 pairs of parts of speech are connected with `xcomp`: <tt><a href="hi_hdtb-pos-VERB.html">VERB</a></tt>-<tt><a href="hi_hdtb-pos-VERB.html">VERB</a></tt> (390; 35% instances), <tt><a href="hi_hdtb-pos-VERB.html">VERB</a></tt>-<tt><a href="hi_hdtb-pos-ADJ.html">ADJ</a></tt> (320; 29% instances), <tt><a href="hi_hdtb-pos-VERB.html">VERB</a></tt>-<tt><a href="hi_hdtb-pos-NOUN.html">NOUN</a></tt> (268; 24% instances), <tt><a href="hi_hdtb-pos-VERB.html">VERB</a></tt>-<tt><a href="hi_hdtb-pos-DET.html">DET</a></tt> (38; 3% instances), <tt><a href="hi_hdtb-pos-VERB.html">VERB</a></tt>-<tt><a href="hi_hdtb-pos-PRON.html">PRON</a></tt> (31; 3% instances), <tt><a href="hi_hdtb-pos-VERB.html">VERB</a></tt>-<tt><a href="hi_hdtb-pos-NUM.html">NUM</a></tt> (27; 2% instances), <tt><a href="hi_hdtb-pos-VERB.html">VERB</a></tt>-<tt><a href="hi_hdtb-pos-PROPN.html">PROPN</a></tt> (26; 2% instances), <tt><a href="hi_hdtb-pos-VERB.html">VERB</a></tt>-<tt><a href="hi_hdtb-pos-ADV.html">ADV</a></tt> (8; 1% instances).


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 9 xcomp	color:blue
1	इस	यह	DET	DEM	Case=Acc|Number=Sing|Person=3|PronType=Dem	2	det	_	ChunkId=NP|ChunkType=child|LTranslit=yaha|Translit=isa
2	हेलीपैड	हेलीपैड	NOUN	NN	Case=Acc|Gender=Masc|Number=Sing|Person=3	10	obl	_	ChunkId=NP|ChunkType=head|LTranslit=helīpaiḍa|Tam=0|Translit=helīpaiḍa|Vib=0_पर
3	पर	पर	ADP	PSP	AdpType=Post	2	case	_	ChunkId=NP|ChunkType=child|LTranslit=para|Translit=para
4	प्रियंका	प्रियंका	PROPN	NNP	Case=Acc|Gender=Fem|Number=Sing|Person=3	6	nmod	_	ChunkId=NP2|ChunkType=head|LTranslit=priyaṁkā|Tam=0|Translit=priyaṁkā|Vib=0_का
5	के	का	ADP	PSP	AdpType=Post|Case=Nom|Gender=Masc|Number=Sing|Person=3|Polite=Form	4	case	_	ChunkId=NP2|ChunkType=child|LTranslit=kā|Translit=ke
6	पिता	पिता	NOUN	NN	Case=Nom|Gender=Masc|Number=Sing|Person=3	10	nsubj	_	ChunkId=NP3|ChunkType=head|LTranslit=pitā|Tam=0|Translit=pitā|Vib=0
7	उड़ान	उड़ान	NOUN	NN	Case=Nom|Gender=Fem|Number=Sing|Person=3	9	compound	_	ChunkId=NP4|ChunkType=head|LTranslit=uṛāna|Tam=0|Translit=uṛāna|Vib=0
8	भी	भी	PART	RP	_	7	dep	_	ChunkId=NP4|ChunkType=child|LTranslit=bhī|Translit=bhī
9	भर	भरना	VERB	VM	Gender=Masc|Number=Sing|Person=3|Polite=Form|Voice=Act	10	xcomp	_	ChunkId=VGF|ChunkType=head|LTranslit=bharanā|Stype=declarative|Tam=0|Translit=bhara|Vib=0_चुक+या_है
10	चुके	चुकना	VERB	VAUX	Aspect=Perf|Gender=Masc|Number=Sing|Person=3|Polite=Form|VerbForm=Part	0	root	_	ChunkId=VGF|ChunkType=child|LTranslit=cukanā|Tam=yA|Translit=cuke|Vib=या
11	हैं	है	AUX	VAUX	Mood=Ind|Number=Sing|Person=3|Polite=Form|Tense=Pres|VerbForm=Fin	10	aux:pass	_	ChunkId=VGF|ChunkType=child|LTranslit=hai|Tam=hE|Translit=haiṁ|Vib=है
12	।	।	PUNCT	SYM	_	10	punct	_	ChunkId=BLK|ChunkType=head|LTranslit=.|Translit=.

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 9 xcomp	color:blue
1	इस	यह	DET	DEM	Case=Acc|Number=Sing|Person=3|PronType=Dem	2	det	_	ChunkId=NP|ChunkType=child|LTranslit=yaha|Translit=isa
2	मूर्ति	मूर्ति	NOUN	NN	Case=Acc|Gender=Fem|Number=Sing|Person=3	10	nsubj	_	ChunkId=NP|ChunkType=head|LTranslit=mūrti|Tam=0|Translit=mūrti|Vib=0_का
3	के	का	ADP	PSP	AdpType=Post|Case=Nom|Gender=Masc|Number=Plur	2	case	_	ChunkId=NP|ChunkType=child|LTranslit=kā|Translit=ke
4	भी	भी	PART	RP	_	2	dep	_	ChunkId=NP|ChunkType=child|LTranslit=bhī|Translit=bhī
5	करीब	करीब	PART	RP	_	7	dep	_	ChunkId=NP2|ChunkType=child|LTranslit=karība|Translit=karība
6	पाँच	पाँच	NUM	QCC	NumType=Card	7	dep	_	ChunkId=NP2|ChunkType=child|LTranslit=pām̃ca|Translit=pām̃ca
7	सौ	सौ	NUM	QC	NumType=Card	8	nummod	_	ChunkId=NP2|ChunkType=child|LTranslit=sau|Translit=sau
8	वर्ष	वर्ष	NOUN	NN	Case=Nom|Gender=Masc|Number=Plur|Person=3	10	obl	_	ChunkId=NP2|ChunkType=head|LTranslit=varṣa|Tam=0|Translit=varṣa|Vib=0
9	पुराना	पुराना	ADJ	JJ	Gender=Masc|Number=Sing	10	xcomp	_	ChunkId=JJP|ChunkType=head|LTranslit=purānā|Translit=purānā
10	होने	होना	VERB	VM	Case=Acc|Number=Sing|VerbForm=Inf	12	nmod	_	ChunkId=VGNN|ChunkType=head|LTranslit=honā|Tam=nA|Translit=hone|Vib=ना_का
11	का	का	ADP	PSP	AdpType=Post|Case=Nom|Gender=Masc|Number=Sing	10	mark	_	ChunkId=VGNN|ChunkType=child|LTranslit=kā|Translit=kā
12	प्रमाण	प्रमाण	NOUN	NN	Case=Nom|Gender=Masc|Number=Sing|Person=3	13	nsubj	_	ChunkId=NP3|ChunkType=head|LTranslit=pramāṇa|Tam=0|Translit=pramāṇa|Vib=0
13	मिलता	मिलना	VERB	VM	Aspect=Imp|Gender=Masc|Number=Sing|Person=3|VerbForm=Part|Voice=Act	0	root	_	ChunkId=VGF|ChunkType=head|LTranslit=milanā|Stype=declarative|Tam=wA|Translit=milatā|Vib=ता_है
14	है	है	AUX	VAUX	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	13	aux	_	ChunkId=VGF|ChunkType=child|LTranslit=hai|Tam=hE|Translit=hai|Vib=है
15	।	।	PUNCT	SYM	_	13	punct	_	ChunkId=BLK|ChunkType=head|LTranslit=.|Translit=.

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 10 xcomp	color:blue
1	मंदिर	मंदिर	NOUN	NNC	Case=Nom|Gender=Masc|Number=Sing|Person=3	2	compound	_	ChunkId=NP|ChunkType=child|LTranslit=maṁdira|Tam=0|Translit=maṁdira|Vib=0
2	परिसर	परिसर	NOUN	NN	Case=Acc|Gender=Masc|Number=Sing|Person=3	4	obl	_	ChunkId=NP|ChunkType=head|LTranslit=parisara|Tam=0|Translit=parisara|Vib=0_में
3	में	में	ADP	PSP	AdpType=Post	2	case	_	ChunkId=NP|ChunkType=child|LTranslit=meṁ|Translit=meṁ
4	मौजूद	मौजूद	ADJ	JJ	Case=Nom	5	amod	_	ChunkId=JJP|ChunkType=head|LTranslit=maujūda|Translit=maujūda
5	चैत्‍य	चैत्य	NOUN	NN	Case=Nom|Gender=Masc|Number=Sing|Person=3	11	nsubj	_	ChunkId=NP2|ChunkType=head|LTranslit=caitya|Tam=0|Translit=caitya|Vib=0
6	सभी	सब	PRON	PRP	Case=Acc|PronType=Prs	8	nmod	_	ChunkId=NP3|ChunkType=head|LTranslit=saba|Translit=sabhī|Vib=0_का
7	के	का	ADP	PSP	AdpType=Post|Case=Acc|Gender=Masc|Number=Sing	6	case	_	ChunkId=NP3|ChunkType=child|LTranslit=kā|Translit=ke
8	आकर्षण	आकर्षण	NOUN	NN	Case=Acc|Gender=Masc|Number=Sing|Person=3	10	nmod	_	ChunkId=NP4|ChunkType=head|LTranslit=ākarṣaṇa|Tam=0|Translit=ākarṣaṇa|Vib=0_का
9	का	का	ADP	PSP	AdpType=Post|Case=Nom|Gender=Masc|Number=Sing	8	case	_	ChunkId=NP4|ChunkType=child|LTranslit=kā|Translit=kā
10	केंद्र	केंद्र	NOUN	NN	Case=Nom|Gender=Masc|Number=Sing|Person=3	11	xcomp	_	ChunkId=NP5|ChunkType=head|LTranslit=keṁdra|Tam=0|Translit=keṁdra|Vib=0
11	बन	बनना	VERB	VM	Gender=Masc|Number=Sing|Person=3|Voice=Act	0	root	_	ChunkId=VGF|ChunkType=head|LTranslit=bananā|Stype=declarative|Tam=0|Translit=bana|Vib=0_जा+ता_है
12	जाता	जाना	AUX	VAUX	Aspect=Imp|Gender=Masc|Number=Sing|VerbForm=Part	11	aux	_	ChunkId=VGF|ChunkType=child|LTranslit=jānā|Tam=wA|Translit=jātā|Vib=ता
13	है	है	AUX	VAUX	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	11	aux:pass	_	ChunkId=VGF|ChunkType=child|LTranslit=hai|Tam=hE|Translit=hai|Vib=है
14	।	।	PUNCT	SYM	_	11	punct	_	ChunkId=BLK|ChunkType=head|LTranslit=.|Translit=.

~~~


