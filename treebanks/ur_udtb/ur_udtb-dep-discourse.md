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
1	بس	بس	INTJ	INJ	_	14	discourse	_	AltTag=X-INTJ|ChunkId=BLK|ChunkType=head|Translit=bs|LTranslit=bs
2	اس	یہ	DET	DEM	Case=Acc|Number=Sing|Person=3|PronType=Dem	3	det	_	ChunkId=NP|ChunkType=child|Translit=ās|LTranslit=īh
3	تنہائی	تنہائی	NOUN	NN	Case=Acc|Gender=Masc|Number=Sing|Person=3	5	nmod	_	Vib=0|Tam=0|ChunkId=NP|ChunkType=head|Translit=tnhājī|LTranslit=tnhājī
4	کے	کا	ADP	PSP	AdpType=Post|Case=Acc|Gender=Masc|Number=Sing	3	case	_	ChunkId=NP|ChunkType=child|Translit=ke|LTranslit=kā
5	عالم	عالم	NOUN	NN	Case=Acc|Gender=Masc|Number=Sing|Person=3	14	obl	_	Vib=0|Tam=0|ChunkId=NP2|ChunkType=head|Translit=ʿālm|LTranslit=ʿālm
6	مےں	مےں	ADP	PSP	AdpType=Post	5	case	_	ChunkId=NP2|ChunkType=child|Translit=meñ|LTranslit=meñ
7	اےک	اےک	NUM	QC	NumType=Card	8	nummod	_	ChunkId=NP3|ChunkType=child|Translit=āek|LTranslit=āek
8	یاد	یاد	NOUN	NN	Case=Nom|Gender=Masc|Number=Sing|Person=3	10	nsubj	_	Vib=0|Tam=0|ChunkId=NP3|ChunkType=head|Translit=īād|LTranslit=īād
9	آواز	آواز	NOUN	NN	Case=Nom|Gender=Fem|Number=Sing|Person=3	10	xcomp	_	Vib=0|Tam=0|ChunkId=NP4|ChunkType=head|Translit=Āūāz|LTranslit=Āūāz
10	بن	بننا	VERB	VM	_	14	advcl	_	ChunkId=VGNF|ChunkType=head|LTranslit=bnnā|Tam=0|Translit=bn|Vib=0
11	کر	کرنا	AUX	VAUX	_	10	aux	_	ChunkId=VGNF|ChunkType=child|LTranslit=krnā|Tam=0|Translit=kr|Vib=0
12	سماعت	سماعت	NOUN	NN	Case=Acc|Gender=Masc|Number=Sing|Person=3	14	obj	_	Vib=0|Tam=0|ChunkId=NP5|ChunkType=head|Translit=smāʿt|LTranslit=smāʿt
13	سے	سے	ADP	PSP	AdpType=Post	12	case	_	ChunkId=NP5|ChunkType=child|Translit=se|LTranslit=se
14	ٹکرائی	ٹکرانا	VERB	VM	Aspect=Perf|Gender=Fem|Number=Sing|VerbForm=Part|Voice=Act	0	root	_	ChunkId=VGF|ChunkType=head|LTranslit=ṭkrānā|SpaceAfter=No|Stype=declarative|Tam=yA|Translit=ṭkrājī|Vib=یا
15	۔	۔	PUNCT	SYM	_	14	punct	_	ChunkId=VGF|ChunkType=child|Translit=.|LTranslit=.

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 13 7 discourse	color:blue
1	بچپن	بچپن	NOUN	NN	Case=Acc|Gender=Masc|Number=Sing|Person=3	5	obl	_	Vib=0|Tam=0|ChunkId=NP|ChunkType=head|Translit=bčpn|LTranslit=bčpn
2	مےں	مےں	ADP	PSP	AdpType=Post	1	case	_	ChunkId=NP|ChunkType=child|Translit=meñ|LTranslit=meñ
3	میں	مَیں	NOUN	NN	Case=Nom|Gender=Masc|Number=Sing|Person=3	5	nsubj	_	Vib=0|Tam=0|ChunkId=NP2|ChunkType=head|Translit=mīñ|LTranslit=maīñ
4	اکثر	اکثر	ADV	RB	_	5	advmod	_	ChunkId=RBP|ChunkType=head|Translit=ākþr|LTranslit=ākþr
5	سوچا	سوچنا	VERB	VM	Aspect=Perf|Gender=Masc|Number=Sing|VerbForm=Part|Voice=Act	0	root	_	ChunkId=VGF|ChunkType=head|LTranslit=sūčnā|Stype=declarative|Tam=yA|Translit=sūčā|Vib=یا
6	کرتی	کرنا	AUX	VAUX	Aspect=Imp|Gender=Fem|Number=Sing|VerbForm=Part	5	aux	_	ChunkId=VGF|ChunkType=child|LTranslit=krnā|Tam=wA|Translit=krtī|Vib=تا
7	آخر	آخر	INTJ	INJ	_	13	discourse	_	ChunkId=BLK|ChunkType=head|Translit=Āxr|LTranslit=Āxr
8	انہیں	وہ	PRON	PRP	Case=Acc,Dat|Number=Sing|Person=3|Polite=Form|PronType=Prs	13	nsubj	_	Vib=کو|Tam=ko|ChunkId=NP3|ChunkType=head|Translit=ānhīñ|LTranslit=ūh
9	لوگوں	لوگ	NOUN	NN	Case=Acc|Gender=Masc|Number=Plur|Person=3	12	nmod	_	Vib=0|Tam=0|ChunkId=NP4|ChunkType=head|Translit=lūgūñ|LTranslit=lūg
10	کی	کا	ADP	PSP	AdpType=Post|Case=Nom|Gender=Fem|Number=Sing	9	case	_	ChunkId=NP4|ChunkType=child|Translit=kī|LTranslit=kā
11	اتنی	اتنا	ADJ	JJ	Case=Nom|Number=Sing	12	amod	_	ChunkId=NP5|ChunkType=child|Translit=ātnī|LTranslit=ātnā
12	پرواہ	پرواہ	NOUN	NN	Case=Nom|Gender=Masc|Number=Sing|Person=3	13	obj	_	Vib=0|Tam=0|ChunkId=NP5|ChunkType=head|Translit=prūāh|LTranslit=prūāh
13	کیوں	کیوں	PRON	WQ	PronType=Int	5	obj	_	ChunkId=NP6|ChunkType=head|Translit=kīūñ|LTranslit=kīūñ
14	ہے	ہے	AUX	VM	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	13	cop	_	SpaceAfter=No|AltTag=AUX-VERB|Vib=ہے|Tam=hE|ChunkId=VGF2|ChunkType=head|Stype=declarative|Translit=he|LTranslit=he
15	,	,	PUNCT	SYM	_	20	punct	_	ChunkId=VGF2|ChunkType=child|Translit=,|LTranslit=,
16	لیکن	لیکن	CCONJ	CC	_	20	cc	_	ChunkId=CCP|ChunkType=head|Translit=līkn|LTranslit=līkn
17	اب	اب	PRON	PRP	Case=Nom|PronType=Prs	20	obl	_	ChunkId=NP7|ChunkType=head|Translit=āb|LTranslit=āb
18	سمجھ	سمجھ	NOUN	NN	Case=Acc|Gender=Masc|Number=Sing|Person=3	20	obl	_	Vib=0|Tam=0|ChunkId=NP8|ChunkType=head|Translit=smjh|LTranslit=smjh
19	مےں	مےں	ADP	PSP	AdpType=Post	18	case	_	ChunkId=NP8|ChunkType=child|Translit=meñ|LTranslit=meñ
20	آتا	آنا	VERB	VM	Aspect=Imp|Gender=Masc|Number=Sing|VerbForm=Part|Voice=Act	5	conj	_	ChunkId=VGF3|ChunkType=head|LTranslit=Ānā|Stype=declarative|Tam=wA|Translit=Ātā|Vib=تا
21	ہے	ہے	AUX	VAUX	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	20	aux	_	SpaceAfter=No|Vib=ہے|Tam=hE|ChunkId=VGF3|ChunkType=child|Translit=he|LTranslit=he
22	۔	۔	PUNCT	SYM	_	20	punct	_	ChunkId=VGF3|ChunkType=child|Translit=.|LTranslit=.

~~~


