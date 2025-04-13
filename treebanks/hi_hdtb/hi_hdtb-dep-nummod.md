---
layout: base
title:  'Statistics of nummod in UD_Hindi-HDTB'
udver: '2'
---

## Treebank Statistics: UD_Hindi-HDTB: Relations: `nummod`

This relation is universal.

5572 nodes (2%) are attached to their parents as `nummod`.

5542 instances of `nummod` (99%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.31119885139986.

The following 6 pairs of parts of speech are connected with `nummod`: <tt><a href="hi_hdtb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="hi_hdtb-pos-NUM.html">NUM</a></tt> (5391; 97% instances), <tt><a href="hi_hdtb-pos-PROPN.html">PROPN</a></tt>-<tt><a href="hi_hdtb-pos-NUM.html">NUM</a></tt> (94; 2% instances), <tt><a href="hi_hdtb-pos-NUM.html">NUM</a></tt>-<tt><a href="hi_hdtb-pos-NUM.html">NUM</a></tt> (67; 1% instances), <tt><a href="hi_hdtb-pos-ADJ.html">ADJ</a></tt>-<tt><a href="hi_hdtb-pos-NUM.html">NUM</a></tt> (16; 0% instances), <tt><a href="hi_hdtb-pos-DET.html">DET</a></tt>-<tt><a href="hi_hdtb-pos-NUM.html">NUM</a></tt> (2; 0% instances), <tt><a href="hi_hdtb-pos-PRON.html">PRON</a></tt>-<tt><a href="hi_hdtb-pos-NUM.html">NUM</a></tt> (2; 0% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 6 nummod	color:blue
1	मंदिर	मंदिर	NOUN	NN	Case=Acc|Gender=Masc|Number=Sing|Person=3	4	nmod	_	ChunkId=NP|ChunkType=head|LTranslit=maṁdira|Tam=0|Translit=maṁdira|Vib=0_का
2	के	का	ADP	PSP	AdpType=Post|Case=Acc|Gender=Masc|Number=Sing	1	case	_	ChunkId=NP|ChunkType=child|LTranslit=kā|Translit=ke
3	पूर्व	पूर्व	ADJ	JJ	Case=Acc	4	amod	_	ChunkId=NP2|ChunkType=child|LTranslit=pūrva|Translit=pūrva
4	हिस्‍से	हिस्सा	NOUN	NN	Case=Acc|Gender=Masc|Number=Sing|Person=3	7	nmod	_	ChunkId=NP2|ChunkType=head|LTranslit=hissā|Tam=0|Translit=hisse|Vib=0_में
5	में	में	ADP	PSP	AdpType=Post	4	case	_	ChunkId=NP2|ChunkType=child|LTranslit=meṁ|Translit=meṁ
6	एक	एक	NUM	QC	NumType=Card	7	nummod	_	ChunkId=NP3|ChunkType=child|LTranslit=eka|Translit=eka
7	स्‍तूप	स्तूप	NOUN	NN	Case=Nom|Gender=Masc|Number=Sing|Person=3	0	root	_	ChunkId=NP3|ChunkType=head|CxnElt=8:Existential-CopPred.Pivot|LTranslit=stūpa|Tam=0|Translit=stūpa|Vib=0
8	है	है	AUX	VM	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	7	cop	_	ChunkId=VGF|ChunkType=head|Cxn=Existential-CopPred|LTranslit=hai|Stype=declarative|Tam=hE|Translit=hai|Vib=है
9	।	।	PUNCT	SYM	_	7	punct	_	ChunkId=BLK|ChunkType=head|LTranslit=.|Translit=.

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 nummod	color:blue
1	इस	यह	DET	DEM	Case=Acc|Number=Sing|Person=3|PronType=Dem	2	det	_	ChunkId=NP|ChunkType=child|LTranslit=yaha|Translit=isa
2	मुठभेड़	मुठभेड़	NOUN	NN	Case=Acc|Gender=Fem|Number=Sing|Person=3	13	obl	_	ChunkId=NP|ChunkType=head|LTranslit=muṭhabheṛa|Tam=0|Translit=muṭhabheṛa|Vib=0_में
3	में	में	ADP	PSP	AdpType=Post	2	case	_	ChunkId=NP|ChunkType=child|LTranslit=meṁ|Translit=meṁ
4	एक	एक	NUM	QC	NumType=Card	5	nummod	_	ChunkId=NP2|ChunkType=child|LTranslit=eka|Translit=eka
5	जेसीओ	जेसीओ	PROPN	NNP	Case=Acc|Gender=Masc|Number=Sing|Person=3	13	obl	_	ChunkId=NP2|ChunkType=head|LTranslit=jesīo|Tam=0|Translit=jesīo|Vib=0_सहित
6	सहित	सहित	ADP	PSP	AdpType=Post	5	case	_	ChunkId=NP2|ChunkType=child|LTranslit=sahita|Translit=sahita
7	सेना	सेना	NOUN	NN	Case=Acc|Gender=Fem|Number=Sing|Person=3	10	nmod	_	ChunkId=NP3|ChunkType=head|LTranslit=senā|Tam=0|Translit=senā|Vib=0_का
8	के	का	ADP	PSP	AdpType=Post|Case=Nom|Gender=Masc|Number=Plur	7	case	_	ChunkId=NP3|ChunkType=child|LTranslit=kā|Translit=ke
9	चार	चार	NUM	QC	NumType=Card	10	nummod	_	ChunkId=NP4|ChunkType=child|LTranslit=cāra|Translit=cāra
10	जवान	जवान	NOUN	NN	Case=Nom|Gender=Masc|Number=Plur|Person=3	13	nsubj	_	ChunkId=NP4|ChunkType=head|LTranslit=javāna|Tam=0|Translit=javāna|Vib=0
11	भी	भी	PART	RP	_	10	dep	_	ChunkId=NP4|ChunkType=child|LTranslit=bhī|Translit=bhī
12	शहीद	शहीद	ADJ	JJ	_	13	compound	_	ChunkId=JJP|ChunkType=head|LTranslit=śahīda|Translit=śahīda
13	हो	होना	VERB	VM	Number=Plur|Voice=Act	0	root	_	ChunkId=VGF|ChunkType=head|LTranslit=honā|Stype=declarative|Tam=0|Translit=ho|Vib=0_जा+या१
14	गए	जाना	AUX	VAUX	Aspect=Perf|Gender=Masc|Number=Plur|VerbForm=Part	13	aux	_	ChunkId=VGF|ChunkType=child|LTranslit=jānā|Tam=yA1|Translit=gae|Vib=या१
15	।	।	PUNCT	SYM	_	13	punct	_	ChunkId=BLK|ChunkType=head|LTranslit=.|Translit=.

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 6 nummod	color:blue
1	सीमा	सीमा	NOUN	NN	Case=Acc|Gender=Fem|Number=Sing|Person=3	4	obl	_	ChunkId=NP|ChunkType=head|LTranslit=sīmā|Tam=0|Translit=sīmā|Vib=0_में
2	में	में	ADP	PSP	AdpType=Post	1	case	_	ChunkId=NP|ChunkType=child|LTranslit=meṁ|Translit=meṁ
3	इनके	यह	PRON	PRP	Case=Acc,Gen|Gender=Masc|Number=Plur|Person=3|Poss=Yes|PronType=Prs	4	obj	_	ChunkId=NP2|ChunkType=head|LTranslit=yaha|Tam=kA|Translit=inake|Vib=का
4	घुसने	घुसना	VERB	VM	Case=Acc|Number=Sing|VerbForm=Inf	9	nmod	_	ChunkId=VGNN|ChunkType=head|LTranslit=ghusanā|Tam=nA|Translit=ghusane|Vib=ना_का
5	के	का	ADP	PSP	AdpType=Post|Case=Acc|Gender=Masc|Number=Sing	4	mark	_	ChunkId=VGNN|ChunkType=child|LTranslit=kā|Translit=ke
6	एक	एक	NUM	QC	NumType=Card	8	nummod	_	ChunkId=NP3|ChunkType=child|LTranslit=eka|Translit=eka
7	-	-	PUNCT	SYM	_	6	punct	_	ChunkId=NP3|ChunkType=child|LTranslit=-|Translit=-
8	दो	दो	NUM	QC	NumType=Card	9	nummod	_	ChunkId=NP3|ChunkType=child|LTranslit=do|Translit=do
9	दिन	दिन	NOUN	NN	Case=Acc|Gender=Masc|Number=Sing|Person=3	14	obl	_	ChunkId=NP3|ChunkType=head|LTranslit=dina|Tam=0|Translit=dina|Vib=0_के_भीतर
10	के	के	ADP	PSP	AdpType=Post	9	case	_	ChunkId=NP3|ChunkType=child|LTranslit=ke|Translit=ke
11	भीतर	भीतर	ADP	NST	AdpType=Post|Case=Nom|Gender=Masc|Number=Sing|Person=3	9	case	_	AltTag=ADP-NOUN|ChunkId=NP3|ChunkType=child|LTranslit=bhītara|Translit=bhītara
12	ही	ही	PART	RP	_	9	dep	_	ChunkId=NP3|ChunkType=child|LTranslit=hī|Translit=hī
13	पता	पता	NOUN	NN	Case=Nom|Gender=Masc|Number=Sing|Person=3	14	compound	_	ChunkId=NP4|ChunkType=head|LTranslit=patā|Tam=0|Translit=patā|Vib=0
14	चल	चलना	VERB	VM	Gender=Masc|Number=Sing|Person=3|Voice=Act	0	root	_	ChunkId=VGF|ChunkType=head|LTranslit=calanā|Stype=declarative|Tam=0|Translit=cala|Vib=0_जा+ता_है
15	जाता	जाना	AUX	VAUX	Aspect=Imp|Gender=Masc|Number=Sing|VerbForm=Part	14	aux	_	ChunkId=VGF|ChunkType=child|LTranslit=jānā|Tam=wA|Translit=jātā|Vib=ता
16	है	है	AUX	VAUX	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	14	aux:pass	_	ChunkId=VGF|ChunkType=child|LTranslit=hai|Tam=hE|Translit=hai|Vib=है
17	।	।	PUNCT	SYM	_	14	punct	_	ChunkId=BLK|ChunkType=head|LTranslit=.|Translit=.

~~~


