---
layout: base
title:  'Statistics of ccomp in UD_Urdu-UDTB'
udver: '2'
---

## Treebank Statistics: UD_Urdu-UDTB: Relations: `ccomp`

This relation is universal.

281 nodes (0%) are attached to their parents as `ccomp`.

281 instances of `ccomp` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 13.846975088968.

The following 4 pairs of parts of speech are connected with `ccomp`: <tt><a href="ur_udtb-pos-VERB.html">VERB</a></tt>-<tt><a href="ur_udtb-pos-VERB.html">VERB</a></tt> (270; 96% instances), <tt><a href="ur_udtb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ur_udtb-pos-VERB.html">VERB</a></tt> (8; 3% instances), <tt><a href="ur_udtb-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ur_udtb-pos-VERB.html">VERB</a></tt> (2; 1% instances), <tt><a href="ur_udtb-pos-VERB.html">VERB</a></tt>-<tt><a href="ur_udtb-pos-NOUN.html">NOUN</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 11 ccomp	color:blue
1	انھوں	وہ	PRON	PRP	Case=Nom|Number=Sing|Person=3|Polite=Form|PronType=Prs	3	nsubj	_	Vib=0|Tam=0|ChunkId=NP|ChunkType=head
2	نے	نے	ADP	PSP	AdpType=Post	1	case	_	ChunkId=NP|ChunkType=child
3	کہا	کہہ	VERB	VM	Aspect=Perf|Gender=Masc|Number=Sing|VerbForm=Part|Voice=Act	0	root	_	Vib=یا|Tam=yA|ChunkId=VGF|ChunkType=head|Stype=declarative
4	کہ	کہ	SCONJ	CC	_	11	mark	_	AltTag=SCONJ-CCONJ|ChunkId=CCP|ChunkType=head
5	ہم	ہم	PRON	PRP	Case=Acc|Number=Plur|Person=1|PronType=Prs	11	nsubj	_	Vib=0|Tam=0|ChunkId=NP2|ChunkType=head
6	عدالت	عدالت	NOUN	NN	Case=Acc|Gender=Fem|Number=Sing|Person=3	11	obl	_	Vib=0|Tam=0|ChunkId=NP3|ChunkType=head
7	مےں	مےں	ADP	PSP	_	6	case	_	ChunkId=NP3|ChunkType=child
8	یہ	یہ	PRON	PRP	Case=Nom|Number=Sing|Person=3|PronType=Prs	11	obj	_	Vib=0|Tam=0|ChunkId=NP4|ChunkType=head
9	ثابت	ثابت	ADJ	JJ	_	10	compound	_	ChunkId=JJP|ChunkType=head
10	کر	کر	VERB	VM	Voice=Act	11	xcomp	_	Vib=0|Tam=0|ChunkId=VGF2|ChunkType=head|Stype=declarative
11	دکھائیں_گے	دکھا	VERB	VAUX	Mood=Ind|Number=Plur|Tense=Fut|VerbForm=Fin	3	ccomp	_	SpaceAfter=No|Vib=گا|Tam=gA|ChunkId=VGF2|ChunkType=child
12	۔	۔	PUNCT	SYM	_	11	punct	_	ChunkId=VGF2|ChunkType=child

~~~


~~~ conllu
# visual-style 17	bgColor:blue
# visual-style 17	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 17 ccomp	color:blue
1	یہی	یہی	DET	DEM	PronType=Dem	2	det	_	ChunkId=NP|ChunkType=child
2	وقت	وقت	NOUN	NN	Case=Nom|Gender=Masc|Number=Sing|Person=3	0	root	_	Vib=0|Tam=0|ChunkId=NP|ChunkType=head
3	ہے	ہے	AUX	VM	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	2	cop	_	AltTag=AUX-VERB|Vib=ہے|Tam=hE|ChunkId=VGF|ChunkType=head|Stype=declarative
4	کہ	کہ	SCONJ	CC	_	17	mark	_	AltTag=SCONJ-CCONJ|ChunkId=CCP|ChunkType=head
5	امتِ	امتِ	PROPN	NNPC	Case=Nom|Gender=Masc|Number=Sing|Person=3	6	compound	_	Vib=0|Tam=0|ChunkId=NP2|ChunkType=child
6	مسلمہ	مسلمہ	PROPN	NNP	Case=Nom|Gender=Masc|Number=Sing|Person=3	17	nsubj	_	Vib=0|Tam=0|ChunkId=NP2|ChunkType=head
7	اس	یہ	PRON	DEM	Case=Nom|Number=Sing|Person=3|PronType=Dem	10	det	_	AltTag=PRON-DET|Vib=0|Tam=0|ChunkId=FRAGP|ChunkType=head
8	بھٹکی	بھٹک	VERB	VM	Aspect=Perf|Gender=Fem|Number=Sing|VerbForm=Part	10	acl	_	Vib=یا|Tam=yA|ChunkId=VGNF|ChunkType=head
9	ہوئی	ہو	AUX	VAUX	Aspect=Perf|Gender=Fem|Number=Sing|VerbForm=Part	8	aux	_	Vib=یا|Tam=yA|ChunkId=VGNF|ChunkType=child
10	انسانیت	انسانیت	NOUN	NN	Case=Nom|Gender=Masc|Number=Sing|Person=3	13	nmod	_	Vib=0|Tam=0|ChunkId=NP3|ChunkType=head
11	کی	کا	ADP	PSP	AdpType=Post	10	case	_	ChunkId=NP3|ChunkType=child
12	صحیح	صحیح	ADJ	JJ	Case=Acc	13	amod	_	ChunkId=NP4|ChunkType=child
13	راہ	راہ	NOUN	NN	Case=Acc|Gender=Fem|Number=Sing|Person=3	15	nmod	_	Vib=0|Tam=0|ChunkId=NP4|ChunkType=head
14	کی	کا	ADP	PSP	AdpType=Post|Case=Nom|Gender=Fem|Number=Sing	13	case	_	ChunkId=NP4|ChunkType=child
15	سمت	سمت	NOUN	NN	Case=Nom|Gender=Masc|Number=Sing|Person=3	17	obj	_	ChunkId=NP5|ChunkType=head
16	متعین	متعین	ADJ	JJ	_	17	compound	_	ChunkId=JJP|ChunkType=head
17	کرے	کر	VERB	VM	Mood=Sub|Number=Sing|Person=3|VerbForm=Fin|Voice=Pass	2	ccomp	_	SpaceAfter=No|Vib=اےں|Tam=eM|ChunkId=VGF2|ChunkType=head|Stype=imperative
18	۔	۔	PUNCT	SYM	_	17	punct	_	ChunkId=VGF2|ChunkType=child

~~~


~~~ conllu
# visual-style 32	bgColor:blue
# visual-style 32	fgColor:white
# visual-style 17	bgColor:blue
# visual-style 17	fgColor:white
# visual-style 17 32 ccomp	color:blue
1	مظاہرین	مظاہرین	NOUN	NN	Case=Acc|Gender=Masc|Number=Sing|Person=3	4	obj	_	Vib=0|Tam=0|ChunkId=NP|ChunkType=head
2	کو	کو	ADP	PSP	_	1	case	_	ChunkId=NP|ChunkType=child
3	گرفتار	گرفتار	ADJ	JJ	_	4	compound	_	ChunkId=JJP|ChunkType=head
4	کر	کر	VERB	VM	Case=Acc	10	advcl	_	Vib=0|Tam=0|ChunkId=VGNF|ChunkType=head
5	کے	کر	AUX	VAUX	_	4	aux	_	Vib=0|Tam=0|ChunkId=VGNF|ChunkType=child
6	پنجہ_گٹہ	پنجہ_گٹہ	PROPN	NNP	Case=Nom|Gender=Masc|Number=Sing|Person=3	8	nmod	_	Vib=0|Tam=0|ChunkId=NP2|ChunkType=child
7	پولیس	پولیس	NOUN	NNC	Case=Nom|Gender=Fem|Number=Sing|Person=3	8	compound	_	Vib=0|Tam=0|ChunkId=NP2|ChunkType=child
8	اسٹیشن	اسٹیشن	NOUN	NN	Case=Nom|Gender=Masc|Number=Sing|Person=3	10	obl	_	Vib=0|Tam=0|ChunkId=NP2|ChunkType=head
9	پیش	پیش	ADV	NST	AdpType=Post	10	compound	_	AltTag=ADV-NOUN|ChunkId=NP3|ChunkType=head
10	کیا	کر	VERB	VM	Aspect=Perf|Gender=Masc|Number=Sing|VerbForm=Part|Voice=Act	0	root	_	Vib=یا|Tam=yA|ChunkId=VGF|ChunkType=head|Stype=declarative
11	گیا	جا	AUX	VAUX	Aspect=Perf|Gender=Masc|Number=Sing|VerbForm=Part	10	aux	_	Vib=یا1|Tam=yA1|ChunkId=VGF|ChunkType=child
12	یہاں	یہاں	PRON	PRP	Case=Nom|PronType=Prs	17	obl	_	ChunkId=NP4|ChunkType=head
13	اس	یہ	DET	DEM	Case=Nom|Number=Sing|Person=3|PronType=Dem	14	det	_	ChunkId=NP5|ChunkType=child
14	بات	بات	NOUN	NN	Case=Acc|Gender=Fem|Number=Sing|Person=3	16	nmod	_	Vib=0|Tam=0|ChunkId=NP5|ChunkType=head
15	کا	کا	ADP	PSP	AdpType=Post|Case=Acc|Gender=Masc|Number=Sing	14	case	_	ChunkId=NP5|ChunkType=child
16	ذکر	ذکر	NOUN	NN	Case=Nom|Gender=Masc|Number=Sing|Person=3	17	nsubj	_	Vib=0|Tam=0|ChunkId=NP6|ChunkType=head
17	ضروری	ضروری	ADJ	JJ	_	10	obl	_	ChunkId=JJP2|ChunkType=head
18	ہے	ہے	AUX	VM	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	17	cop	_	AltTag=AUX-VERB|Vib=ہے|Tam=hE|ChunkId=VGF2|ChunkType=head|Stype=declarative
19	کہ	کہ	SCONJ	CC	_	32	mark	_	AltTag=SCONJ-CCONJ|ChunkId=CCP|ChunkType=head
20	مین	مین	NOUN	NNC	Case=Nom|Gender=Masc|Number=Sing|Person=3	21	compound	_	Vib=0|Tam=0|ChunkId=NP7|ChunkType=child
21	گیٹ	گیٹ	NOUN	NN	Case=Acc|Gender=Masc|Number=Sing|Person=3	32	obl	_	Vib=0|Tam=0|ChunkId=NP7|ChunkType=head
22	سے	سے	ADP	PSP	AdpType=Post	21	case	_	ChunkId=NP7|ChunkType=child
23	اجلاس	اجلاس	NOUN	NN	Case=Acc|Gender=Masc|Number=Sing|Person=3	25	nmod	_	Vib=0|Tam=0|ChunkId=NP8|ChunkType=head
24	کا	کا	ADP	PSP	AdpType=Post|Case=Acc|Gender=Masc|Number=Sing	23	case	_	ChunkId=NP8|ChunkType=child
25	مقام	مقام	NOUN	NN	Case=Nom|Gender=Masc|Number=Sing|Person=3	32	nsubj	_	Vib=0|Tam=0|ChunkId=NP9|ChunkType=head
26	سو	سو	NUM	QC	NumType=Card	27	nummod	_	ChunkId=NP10|ChunkType=child
27	میٹر	میٹر	NOUN	NN	Case=Acc|Gender=Masc|Number=Sing|Person=3	29	nmod	_	Vib=0|Tam=0|ChunkId=NP10|ChunkType=head
28	کی	کا	ADP	PSP	AdpType=Post|Case=Acc|Gender=Fem|Number=Sing	27	case	_	ChunkId=NP10|ChunkType=child
29	دوری	دوری	NOUN	NN	Case=Acc|Gender=Fem|Number=Sing|Person=3	32	obl	_	Vib=0|Tam=0|ChunkId=NP11|ChunkType=head
30	پر	پر	ADP	PSP	AdpType=Post	29	case	_	ChunkId=NP11|ChunkType=child
31	واقع	واقع	ADJ	JJ	_	32	compound	_	ChunkId=JJP3|ChunkType=head
32	ہے	ہے	VERB	VM	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	17	ccomp	_	SpaceAfter=No|Vib=ہے|Tam=hE|ChunkId=VGF3|ChunkType=head|Stype=declarative
33	۔	۔	PUNCT	SYM	_	32	punct	_	ChunkId=VGF3|ChunkType=child

~~~


