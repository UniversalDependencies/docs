---
layout: base
title:  'Statistics of root in UD_Hindi-HDTB'
udver: '2'
---

## Treebank Statistics: UD_Hindi-HDTB: Relations: `root`

This relation is universal.

16649 nodes (5%) are attached to their parents as `root`.

16649 instances of `root` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 12.4913808637155.

The following 11 pairs of parts of speech are connected with `root`: -<tt><a href="hi_hdtb-pos-VERB.html">VERB</a></tt> (14504; 87% instances), -<tt><a href="hi_hdtb-pos-NOUN.html">NOUN</a></tt> (1250; 8% instances), -<tt><a href="hi_hdtb-pos-ADJ.html">ADJ</a></tt> (677; 4% instances), -<tt><a href="hi_hdtb-pos-PROPN.html">PROPN</a></tt> (79; 0% instances), -<tt><a href="hi_hdtb-pos-PRON.html">PRON</a></tt> (76; 0% instances), -<tt><a href="hi_hdtb-pos-DET.html">DET</a></tt> (23; 0% instances), -<tt><a href="hi_hdtb-pos-NUM.html">NUM</a></tt> (23; 0% instances), -<tt><a href="hi_hdtb-pos-ADV.html">ADV</a></tt> (13; 0% instances), -<tt><a href="hi_hdtb-pos-AUX.html">AUX</a></tt> (2; 0% instances), -<tt><a href="hi_hdtb-pos-PART.html">PART</a></tt> (1; 0% instances), -<tt><a href="hi_hdtb-pos-SCONJ.html">SCONJ</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 0	bgColor:blue
# visual-style 0	fgColor:white
# visual-style 0 2 root	color:blue
1	आइए	आना	VERB	VM	Mood=Sub|Number=Sing|Person=2|Polite=Form|VerbForm=Fin|Voice=Act	2	vocative	_	ChunkId=VGF|ChunkType=head|LTranslit=ānā|Stype=imperative|Tam=eM|Translit=āie|Vib=एं
2	करें	करना	VERB	VM	Mood=Sub|Number=Plur|Person=3|VerbForm=Fin|Voice=Act	0	root	_	ChunkId=VGF2|ChunkType=head|LTranslit=karanā|Stype=declarative|Tam=eM|Translit=kareṁ|Vib=एं
3	सैर	सैर	NOUN	NN	Case=Nom|Gender=Fem|Number=Sing|Person=3	2	compound	_	ChunkId=NP|ChunkType=head|LTranslit=saira|Tam=0|Translit=saira|Vib=0
4	-	-	PUNCT	SYM	_	2	punct	_	ChunkId=BLK|ChunkType=head|LTranslit=-|Translit=-

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 0	bgColor:blue
# visual-style 0	fgColor:white
# visual-style 0 7 root	color:blue
1	कुशीनगर	कुशीनगर	PROPN	NNP	Case=Acc|Gender=Masc|Number=Sing|Person=3	5	nmod	_	ChunkId=NP|ChunkType=head|LTranslit=kuśīnagara|Tam=0|Translit=kuśīnagara|Vib=0_का
2	का	का	ADP	PSP	AdpType=Post|Case=Nom|Gender=Masc|Number=Sing	1	case	_	ChunkId=NP|ChunkType=child|LTranslit=kā|Translit=kā
3	सबसे	सबसे	ADV	INTF	AdvType=Deg	4	advmod	_	AltTag=avy-ADV|ChunkId=NP2|ChunkType=child|LTranslit=sabase|Translit=sabase
4	ज्‍यादा	ज्यादा	DET	QF	PronType=Ind	5	det	_	ChunkId=NP2|ChunkType=child|LTranslit=jyādā|Translit=jyādā
5	महत्‍व	महत्व	NOUN	NN	Case=Nom|Gender=Masc|Number=Sing|Person=3	7	nsubj	_	ChunkId=NP2|ChunkType=head|LTranslit=mahatva|Tam=0|Translit=mahatva|Vib=0
6	बौद्ध	बौद्ध	PROPN	NNP	Case=Nom|Gender=Masc|Number=Sing|Person=3	7	nmod	_	ChunkId=NP3|ChunkType=child|LTranslit=bauddha|Tam=0|Translit=bauddha|Vib=0
7	तीर्थ	तीर्थ	NOUN	NN	Case=Acc|Gender=Masc|Number=Sing|Person=3	0	root	_	ChunkId=NP3|ChunkType=head|CxnElt=11:Existential-CopPred.Pivot|LTranslit=tīrtha|Tam=0|Translit=tīrtha|Vib=0_के_रूप_में
8	के	के	ADP	PSP	AdpType=Post|Case=Acc|Gender=Masc	7	case	_	ChunkId=NP3|ChunkType=child|LTranslit=ke|Translit=ke
9	रूप	रूप	ADP	PSP	Case=Acc|Gender=Masc	7	case	_	ChunkId=NP3|ChunkType=child|LTranslit=rūpa|Translit=rūpa
10	में	में	ADP	PSP	AdpType=Post	7	case	_	ChunkId=NP3|ChunkType=child|LTranslit=meṁ|Translit=meṁ
11	है	है	AUX	VM	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	7	cop	_	ChunkId=VGF|ChunkType=head|Cxn=Existential-CopPred|LTranslit=hai|Stype=declarative|Tam=hE|Translit=hai|Vib=है
12	।	।	PUNCT	SYM	_	7	punct	_	ChunkId=BLK|ChunkType=head|LTranslit=.|Translit=.

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 0	bgColor:blue
# visual-style 0	fgColor:white
# visual-style 0 9 root	color:blue
1	इस	यह	DET	DEM	Case=Acc|Number=Sing|Person=3|PronType=Dem	2	det	_	ChunkId=NP|ChunkType=child|LTranslit=yaha|Translit=isa
2	मंदिर	मंदिर	NOUN	NN	Case=Acc|Gender=Masc|Number=Sing|Person=3	4	nmod	_	ChunkId=NP|ChunkType=head|LTranslit=maṁdira|Tam=0|Translit=maṁdira|Vib=0_का
3	का	का	ADP	PSP	AdpType=Post|Case=Nom|Gender=Masc|Number=Sing	2	case	_	ChunkId=NP|ChunkType=child|LTranslit=kā|Translit=kā
4	स्‍थापत्‍य	स्थापत्य	NOUN	NN	Case=Nom|Gender=Masc|Number=Sing|Person=3	9	nsubj	_	ChunkId=NP2|ChunkType=head|LTranslit=sthāpatya|Tam=0|Translit=sthāpatya|Vib=0
5	अजंता	अजंता	PROPN	NNP	Case=Acc|Gender=Masc|Number=Sing|Person=3	7	nmod	_	ChunkId=NP3|ChunkType=head|LTranslit=ajaṁtā|Tam=0|Translit=ajaṁtā|Vib=0_का
6	की	का	ADP	PSP	AdpType=Post|Case=Acc|Gender=Fem|Number=Plur	5	case	_	ChunkId=NP3|ChunkType=child|LTranslit=kā|Translit=kī
7	गुफाओं	गुफा	NOUN	NN	Case=Acc|Gender=Fem|Number=Plur|Person=3	9	nmod	_	ChunkId=NP4|ChunkType=head|LTranslit=guphā|Tam=0|Translit=guphāoṁ|Vib=0_से
8	से	से	ADP	PSP	AdpType=Post	7	case	_	ChunkId=NP4|ChunkType=child|LTranslit=se|Translit=se
9	प्रेरित	प्रेरित	ADJ	JJ	_	0	root	_	ChunkId=JJP|ChunkType=head|LTranslit=prerita|Translit=prerita
10	है	है	AUX	VM	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	9	cop	_	ChunkId=VGF|ChunkType=head|LTranslit=hai|Stype=declarative|Tam=hE|Translit=hai|Vib=है
11	।	।	PUNCT	SYM	_	9	punct	_	ChunkId=BLK|ChunkType=head|LTranslit=.|Translit=.

~~~


