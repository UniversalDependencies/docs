---
layout: base
title:  'Statistics of discourse in UD_Urdu-UDTB'
udver: '2'
---

## Treebank Statistics: UD_Urdu-UDTB: Relations: `discourse`

This relation is universal.

9 nodes (0%) are attached to their parents as `discourse`.

9 instances of `discourse` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 6.55555555555556.

The following 2 pairs of parts of speech are connected with `discourse`: <tt><a href="ur_udtb-pos-VERB.html">VERB</a></tt>-<tt><a href="ur_udtb-pos-INTJ.html">INTJ</a></tt> (8; 89% instances), <tt><a href="ur_udtb-pos-PRON.html">PRON</a></tt>-<tt><a href="ur_udtb-pos-INTJ.html">INTJ</a></tt> (1; 11% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 14 1 discourse	color:blue
1	بس	بس	INTJ	INJ	_	14	discourse	_	AltTag=X-INTJ|ChunkId=BLK|ChunkType=head
2	اس	یہ	DET	DEM	Case=Acc|Number=Sing|Person=3|PronType=Dem	3	det	_	ChunkId=NP|ChunkType=child
3	تنہائی	تنہائی	NOUN	NN	Case=Acc|Gender=Masc|Number=Sing|Person=3	5	nmod	_	Vib=0|Tam=0|ChunkId=NP|ChunkType=head
4	کے	کا	ADP	PSP	AdpType=Post|Case=Acc|Gender=Masc|Number=Sing	3	case	_	ChunkId=NP|ChunkType=child
5	عالم	عالم	NOUN	NN	Case=Acc|Gender=Masc|Number=Sing|Person=3	14	obl	_	Vib=0|Tam=0|ChunkId=NP2|ChunkType=head
6	مےں	مےں	ADP	PSP	AdpType=Post	5	case	_	ChunkId=NP2|ChunkType=child
7	اےک	اےک	NUM	QC	NumType=Card	8	nummod	_	ChunkId=NP3|ChunkType=child
8	یاد	یاد	NOUN	NN	Case=Nom|Gender=Masc|Number=Sing|Person=3	10	nsubj	_	Vib=0|Tam=0|ChunkId=NP3|ChunkType=head
9	آواز	آواز	NOUN	NN	Case=Nom|Gender=Fem|Number=Sing|Person=3	10	xcomp	_	Vib=0|Tam=0|ChunkId=NP4|ChunkType=head
10	بن	بن	VERB	VM	_	14	advcl	_	Vib=0|Tam=0|ChunkId=VGNF|ChunkType=head
11	کر	کر	AUX	VAUX	_	10	aux	_	Vib=0|Tam=0|ChunkId=VGNF|ChunkType=child
12	سماعت	سماعت	NOUN	NN	Case=Acc|Gender=Masc|Number=Sing|Person=3	14	obj	_	Vib=0|Tam=0|ChunkId=NP5|ChunkType=head
13	سے	سے	ADP	PSP	AdpType=Post	12	case	_	ChunkId=NP5|ChunkType=child
14	ٹکرائی	ٹکرا	VERB	VM	Aspect=Perf|Gender=Fem|Number=Sing|VerbForm=Part|Voice=Act	0	root	_	SpaceAfter=No|Vib=یا|Tam=yA|ChunkId=VGF|ChunkType=head|Stype=declarative
15	۔	۔	PUNCT	SYM	_	14	punct	_	ChunkId=VGF|ChunkType=child

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 13 7 discourse	color:blue
1	بچپن	بچپن	NOUN	NN	Case=Acc|Gender=Masc|Number=Sing|Person=3	5	obl	_	Vib=0|Tam=0|ChunkId=NP|ChunkType=head
2	مےں	مےں	ADP	PSP	AdpType=Post	1	case	_	ChunkId=NP|ChunkType=child
3	میں	مَیں	NOUN	NN	Case=Nom|Gender=Masc|Number=Sing|Person=3	5	nsubj	_	Vib=0|Tam=0|ChunkId=NP2|ChunkType=head
4	اکثر	اکثر	ADV	RB	_	5	advmod	_	ChunkId=RBP|ChunkType=head
5	سوچا	سوچ	VERB	VM	Aspect=Perf|Gender=Masc|Number=Sing|VerbForm=Part|Voice=Act	0	root	_	Vib=یا|Tam=yA|ChunkId=VGF|ChunkType=head|Stype=declarative
6	کرتی	کر	AUX	VAUX	Aspect=Imp|Gender=Fem|Number=Sing|VerbForm=Part	5	aux	_	Vib=تا|Tam=wA|ChunkId=VGF|ChunkType=child
7	آخر	آخر	INTJ	INJ	_	13	discourse	_	ChunkId=BLK|ChunkType=head
8	انہیں	وہ	PRON	PRP	Case=Acc,Dat|Number=Sing|Person=3|Polite=Form|PronType=Prs	13	nsubj	_	Vib=کو|Tam=ko|ChunkId=NP3|ChunkType=head
9	لوگوں	لوگ	NOUN	NN	Case=Acc|Gender=Masc|Number=Plur|Person=3	12	nmod	_	Vib=0|Tam=0|ChunkId=NP4|ChunkType=head
10	کی	کا	ADP	PSP	AdpType=Post|Case=Nom|Gender=Fem|Number=Sing	9	case	_	ChunkId=NP4|ChunkType=child
11	اتنی	اتنا	ADJ	JJ	Case=Nom|Number=Sing	12	amod	_	ChunkId=NP5|ChunkType=child
12	پرواہ	پرواہ	NOUN	NN	Case=Nom|Gender=Masc|Number=Sing|Person=3	13	obj	_	Vib=0|Tam=0|ChunkId=NP5|ChunkType=head
13	کیوں	کیوں	PRON	WQ	PronType=Int	5	obj	_	ChunkId=NP6|ChunkType=head
14	ہے	ہے	AUX	VM	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	13	cop	_	SpaceAfter=No|AltTag=AUX-VERB|Vib=ہے|Tam=hE|ChunkId=VGF2|ChunkType=head|Stype=declarative
15	,	,	PUNCT	SYM	_	20	punct	_	ChunkId=VGF2|ChunkType=child
16	لیکن	لیکن	CCONJ	CC	_	20	cc	_	ChunkId=CCP|ChunkType=head
17	اب	اب	PRON	PRP	Case=Nom|PronType=Prs	20	obl	_	ChunkId=NP7|ChunkType=head
18	سمجھ	سمجھ	NOUN	NN	Case=Acc|Gender=Masc|Number=Sing|Person=3	20	obl	_	Vib=0|Tam=0|ChunkId=NP8|ChunkType=head
19	مےں	مےں	ADP	PSP	AdpType=Post	18	case	_	ChunkId=NP8|ChunkType=child
20	آتا	آ	VERB	VM	Aspect=Imp|Gender=Masc|Number=Sing|VerbForm=Part|Voice=Act	5	conj	_	Vib=تا|Tam=wA|ChunkId=VGF3|ChunkType=head|Stype=declarative
21	ہے	ہے	AUX	VAUX	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	20	aux	_	SpaceAfter=No|Vib=ہے|Tam=hE|ChunkId=VGF3|ChunkType=child
22	۔	۔	PUNCT	SYM	_	20	punct	_	ChunkId=VGF3|ChunkType=child

~~~


