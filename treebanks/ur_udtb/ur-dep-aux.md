---
layout: base
title:  'Statistics of aux in UD_Urdu'
udver: '2'
---

## Treebank Statistics: UD_Urdu: Relations: `aux`

This relation is universal.

8781 nodes (6%) are attached to their parents as `aux`.

8747 instances of `aux` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.00592187677941.

The following 20 pairs of parts of speech are connected with `aux`: <tt><a href="ur-pos-VERB.html">VERB</a></tt>-<tt><a href="ur-pos-AUX.html">AUX</a></tt> (6186; 70% instances), <tt><a href="ur-pos-AUX.html">AUX</a></tt>-<tt><a href="ur-pos-AUX.html">AUX</a></tt> (2559; 29% instances), <tt><a href="ur-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ur-pos-PRON.html">PRON</a></tt> (6; 0% instances), <tt><a href="ur-pos-SCONJ.html">SCONJ</a></tt>-<tt><a href="ur-pos-SCONJ.html">SCONJ</a></tt> (5; 0% instances), <tt><a href="ur-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ur-pos-ADJ.html">ADJ</a></tt> (3; 0% instances), <tt><a href="ur-pos-NUM.html">NUM</a></tt>-<tt><a href="ur-pos-NUM.html">NUM</a></tt> (3; 0% instances), <tt><a href="ur-pos-PRON.html">PRON</a></tt>-<tt><a href="ur-pos-PRON.html">PRON</a></tt> (3; 0% instances), <tt><a href="ur-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ur-pos-ADV.html">ADV</a></tt> (2; 0% instances), <tt><a href="ur-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ur-pos-NOUN.html">NOUN</a></tt> (2; 0% instances), <tt><a href="ur-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ur-pos-PROPN.html">PROPN</a></tt> (2; 0% instances), <tt><a href="ur-pos-ADV.html">ADV</a></tt>-<tt><a href="ur-pos-ADV.html">ADV</a></tt> (1; 0% instances), <tt><a href="ur-pos-DET.html">DET</a></tt>-<tt><a href="ur-pos-ADP.html">ADP</a></tt> (1; 0% instances), <tt><a href="ur-pos-DET.html">DET</a></tt>-<tt><a href="ur-pos-DET.html">DET</a></tt> (1; 0% instances), <tt><a href="ur-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ur-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="ur-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ur-pos-DET.html">DET</a></tt> (1; 0% instances), <tt><a href="ur-pos-NUM.html">NUM</a></tt>-<tt><a href="ur-pos-DET.html">DET</a></tt> (1; 0% instances), <tt><a href="ur-pos-PART.html">PART</a></tt>-<tt><a href="ur-pos-PUNCT.html">PUNCT</a></tt> (1; 0% instances), <tt><a href="ur-pos-PRON.html">PRON</a></tt>-<tt><a href="ur-pos-DET.html">DET</a></tt> (1; 0% instances), <tt><a href="ur-pos-VERB.html">VERB</a></tt>-<tt><a href="ur-pos-DET.html">DET</a></tt> (1; 0% instances), <tt><a href="ur-pos-X.html">X</a></tt>-<tt><a href="ur-pos-X.html">X</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 12 13 aux	color:blue
1	اس	یہ	DET	DEM	Case=Acc|Number=Sing|Person=3|PronType=Dem	2	det	_	ChunkId=NP|ChunkType=child
2	اقدام	اقدام	NOUN	NN	Case=Acc|Gender=Masc|Number=Sing|Person=3	12	obl	_	Vib=0|Tam=0|ChunkId=NP|ChunkType=head
3	سے	سے	ADP	PSP	AdpType=Post	2	case	_	ChunkId=NP|ChunkType=child
4	سرکاری	سرکاری	ADJ	JJ	Case=Acc	5	amod	_	ChunkId=NP2|ChunkType=child
5	خزانہ	خزانہ	NOUN	NN	Case=Acc|Gender=Masc|Number=Sing|Person=3	12	advmod	_	Vib=0|Tam=0|ChunkId=NP2|ChunkType=head
6	پر	پر	ADP	PSP	AdpType=Post	5	case	_	ChunkId=NP2|ChunkType=child
7	95	95	NUM	QCC	NumType=Card	8	case	_	ChunkId=NP3|ChunkType=child
8	کروڑ	کروڑ	NUM	QC	NumType=Card	9	nummod	_	ChunkId=NP3|ChunkType=child
9	روپیوں	روپیہ	NOUN	NN	Case=Acc|Gender=Masc|Number=Plur|Person=3	11	nmod	_	Vib=0|Tam=0|ChunkId=NP3|ChunkType=head
10	کا	کا	ADP	PSP	AdpType=Post|Case=Nom|Gender=Masc|Number=Sing	9	case	_	ChunkId=NP3|ChunkType=child
11	خسارہ	خسارہ	NOUN	NN	Case=Nom|Gender=Masc|Number=Sing|Person=3	12	compound	_	Vib=0|Tam=0|ChunkId=NP4|ChunkType=head
12	ہوا	ہو	VERB	VM	Aspect=Perf|Gender=Masc|Number=Sing|VerbForm=Part|Voice=Act	0	root	_	Vib=یا|Tam=yA|ChunkId=VGF|ChunkType=head|Stype=declarative
13	ہے	ہے	AUX	VAUX	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	12	aux	_	SpaceAfter=No|Vib=ہے|Tam=hE|ChunkId=VGF|ChunkType=child
14	۔	۔	PUNCT	SYM	_	12	punct	_	ChunkId=VGF|ChunkType=child

~~~


~~~ conllu
# visual-style 15	bgColor:blue
# visual-style 15	fgColor:white
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 14 15 aux	color:blue
1	انہوں	وہ	PRON	PRP	Case=Acc|Number=Sing|Person=3|Polite=Form|PronType=Prs	13	nsubj	_	Vib=0|Tam=0|ChunkId=NP|ChunkType=head
2	نے	نے	ADP	PSP	AdpType=Post	1	case	_	ChunkId=NP|ChunkType=child
3	پہلے	پہلے	ADV	NST	AdpType=Post|Case=Nom|Gender=Masc|Number=Sing|Person=3	13	advmod	_	AltTag=ADV-NOUN|ChunkId=NP2|ChunkType=head
4	ہی	ہی	PART	RP	_	3	dep	_	ChunkId=NP2|ChunkType=child
5	ایس	ایس	PROPN	NNPC	Case=Nom|Gender=Masc|Number=Sing|Person=3	7	compound	_	Vib=0|Tam=0|ChunkId=NP3|ChunkType=child
6	آئی	آئی	PROPN	NNPC	Case=Nom|Gender=Masc|Number=Sing|Person=3	7	compound	_	Vib=0|Tam=0|ChunkId=NP3|ChunkType=child
7	ٹی	ٹی	PROPN	NNP	Case=Acc|Gender=Masc|Number=Sing|Person=3	13	iobj	_	Vib=0|Tam=0|ChunkId=NP3|ChunkType=head
8	کو	کو	ADP	PSP	AdpType=Post	7	case	_	ChunkId=NP3|ChunkType=child
9	تفصیلی	تفصیلی	ADJ	JJ	Case=Acc	10	amod	_	ChunkId=NP4|ChunkType=child
10	حقائق	حقائق	NOUN	NN	Case=Acc|Gender=Masc|Number=Plur|Person=3	13	obj	_	Vib=0|Tam=0|ChunkId=NP4|ChunkType=head
11	سے	سے	ADP	PSP	AdpType=Post	10	case	_	ChunkId=NP4|ChunkType=child
12	واقف	واقف	ADJ	JJ	_	13	compound	_	ChunkId=JJP|ChunkType=head
13	کروا	کروا	VERB	VM	Voice=Act	0	root	_	Vib=0|Tam=0|ChunkId=VGF|ChunkType=head|Stype=declarative
14	دیا	دے	AUX	VAUX	Aspect=Perf|Gender=Masc|Number=Sing|VerbForm=Part	13	aux	_	Vib=یا|Tam=yA|ChunkId=VGF|ChunkType=child
15	تھا	تھا	AUX	VAUX	Gender=Masc|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	14	aux	_	SpaceAfter=No|Vib=تھا|Tam=WA|ChunkId=VGF|ChunkType=child
16	۔	۔	PUNCT	SYM	_	13	punct	_	ChunkId=VGF|ChunkType=child

~~~


~~~ conllu
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 15	bgColor:blue
# visual-style 15	fgColor:white
# visual-style 15 14 aux	color:blue
1	مالک	مالک	NOUN	NN	Case=Acc|Gender=Masc|Number=Sing|Person=3	6	nsubj	_	Vib=0|Tam=0|ChunkId=NP|ChunkType=head
2	نے	نے	ADP	PSP	AdpType=Post	1	case	_	ChunkId=NP|ChunkType=child
3	اےک	اےک	NUM	QC	NumType=Card	4	nummod	_	ChunkId=NP2|ChunkType=child
4	تھپڑ	تھپڑ	NOUN	NN	Case=Nom|Gender=Masc|Number=Sing|Person=3	6	obj	_	Vib=0|Tam=0|ChunkId=NP2|ChunkType=head
5	رسید	رسید	NOUN	NN	Case=Nom|Gender=Masc|Number=Sing|Person=3	6	compound	_	Vib=0|Tam=0|ChunkId=NP3|ChunkType=head
6	کیا	کر	VERB	VM	Aspect=Perf|Gender=Masc|Number=Sing|VerbForm=Part|Voice=Act	0	root	_	Vib=یا|Tam=yA|ChunkId=VGF|ChunkType=head|Stype=declarative
7	اور	اور	CCONJ	CC	_	8	cc	_	ChunkId=CCP|ChunkType=head
8	کہا	کہہ	VERB	VM	Aspect=Perf|Gender=Masc|Number=Sing|VerbForm=Part|Voice=Act	6	conj	_	Vib=یا|Tam=yA|ChunkId=VGF2|ChunkType=head|Stype=declarative
9	کہ	کہ	SCONJ	CC	_	25	mark	_	AltTag=SCONJ-CCONJ|ChunkId=CCP2|ChunkType=head
10	تم	تو	PRON	PRP	Case=Nom|Gender=Masc|Number=Sing|Person=2	12	nsubj	_	Vib=0|Tam=0|ChunkId=NP4|ChunkType=head
11	غلام	غلام	NOUN	NN	Case=Nom|Gender=Masc|Number=Sing|Person=3	12	xcomp	_	Vib=0|Tam=0|ChunkId=NP5|ChunkType=head
12	ہو	ہو	VERB	VM	_	19	advcl	_	Vib=0|Tam=0|ChunkId=VGNF|ChunkType=head
13	کر	کر	AUX	VAUX	_	12	aux	_	Vib=0|Tam=0|ChunkId=VGNF|ChunkType=child
14	ہم	ہم	PRON	PRP	Case=Nom|Number=Plur|Person=1|PronType=Prs	15	aux	_	Vib=0|Tam=0|ChunkId=NP6|ChunkType=child
15	آقاؤں	آقا	NOUN	NN	Case=Acc|Gender=Masc|Number=Plur|Person=3	19	advmod	_	Vib=0|Tam=0|ChunkId=NP6|ChunkType=head
16	کے	کے	ADP	PSP	AdpType=Post|Case=Acc|Gender=Masc|Number=Sing	15	case	_	ChunkId=NP6|ChunkType=child
17	درمیان	درمیان	ADP	PSP	AdpType=Post|Case=Nom|Gender=Masc|Number=Sing	15	case	_	ChunkId=NP6|ChunkType=child
18	گفتگو	گفتگو	NOUN	NN	Case=Nom|Gender=Fem|Number=Sing|Person=3	19	compound	_	Vib=0|Tam=0|ChunkId=NP7|ChunkType=head
19	کرتے	کر	VERB	VM	Aspect=Imp|Gender=Masc|Number=Sing|VerbForm=Part|Voice=Act	22	compound	_	Vib=تا|Tam=wA|ChunkId=VGF3|ChunkType=head|Stype=declarative
20	ہو	ہو	AUX	VAUX	_	19	aux	_	SpaceAfter=No|Vib=0|Tam=0|ChunkId=VGF3|ChunkType=child
21	,	,	PUNCT	SYM	_	19	punct	_	ChunkId=VGF3|ChunkType=child
22	یعنی	یعنی	ADV	RB	_	25	obl	_	ChunkId=RBP|ChunkType=head
23	ہماری	ہم	PRON	PRP	Case=Nom|Gender=Fem|Number=Sing|Person=1|PronType=Prs	24	nmod	_	Vib=کا|Tam=ka|ChunkId=NP8|ChunkType=head
24	بات	بات	NOUN	NN	Case=Nom|Gender=Fem|Number=Sing|Person=3	25	obj	_	Vib=0|Tam=0|ChunkId=NP9|ChunkType=head
25	سنتے	سن	VERB	VM	Aspect=Imp|Gender=Masc|Number=Sing|VerbForm=Part|Voice=Act	8	obj	_	Vib=تا|Tam=wA|ChunkId=VGF4|ChunkType=head|Stype=declarative
26	ہو	ہو	AUX	VAUX	_	25	obj	_	SpaceAfter=No|Vib=0|Tam=0|ChunkId=VGF4|ChunkType=child
27	''	''	PUNCT	SYM	_	25	obj	_	SpaceAfter=No|ChunkId=VGF4|ChunkType=child
28	۔	۔	PUNCT	SYM	_	25	obj	_	ChunkId=VGF4|ChunkType=child

~~~


