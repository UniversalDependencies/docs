---
layout: base
title:  'Statistics of ccomp in UD_Urdu-UDTB'
udver: '2'
---

## Treebank Statistics: UD_Urdu-UDTB: Relations: `ccomp`

This relation is universal.

2 nodes (0%) are attached to their parents as `ccomp`.

2 instances of `ccomp` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 14.

The following 2 pairs of parts of speech are connected with `ccomp`: <tt><a href="ur_udtb-pos-VERB.html">VERB</a></tt>-<tt><a href="ur_udtb-pos-NOUN.html">NOUN</a></tt> (1; 50% instances), <tt><a href="ur_udtb-pos-VERB.html">VERB</a></tt>-<tt><a href="ur_udtb-pos-VERB.html">VERB</a></tt> (1; 50% instances).


~~~ conllu
# visual-style 44	bgColor:blue
# visual-style 44	fgColor:white
# visual-style 25	bgColor:blue
# visual-style 25	fgColor:white
# visual-style 25 44 ccomp	color:blue
1	جب	جب	PRON	PRP	Case=Nom|PronType=Prs	16	obl	_	ChunkId=NP|ChunkType=head
2	اُن	وہ	PRON	PRP	Case=Acc|Gender=Masc|Number=Sing|Person=3|Polite=Form	11	nmod	_	Vib=0|Tam=0|ChunkId=NP2|ChunkType=head
3	سے	سے	ADP	PSP	AdpType=Post	2	case	_	ChunkId=NP2|ChunkType=child
4	اندرون	اندرون	ADP	NST	AdpType=Post|Case=Nom|Gender=Masc|Number=Sing|Person=3	5	case	_	AltTag=ADP-NOUN|ChunkId=NP3|ChunkType=child
5	دس	دس	NUM	QC	NumType=Card	6	nummod	_	ChunkId=NP3|ChunkType=child
6	یوم	یوم	NOUN	NN	Case=Nom|Gender=Masc|Number=Sing|Person=3	11	nmod	_	Vib=0|Tam=0|ChunkId=NP3|ChunkType=head
7	تیسری	تیسرا	ADJ	QO	Case=Nom|Gender=Fem|Number=Sing|NumType=Ord	8	amod	_	ChunkId=NP4|ChunkType=child
8	مرتبہ	مرتبہ	NOUN	NN	Case=Nom|Gender=Masc|Number=Sing|Person=3	11	nmod	_	Vib=0|Tam=0|ChunkId=NP4|ChunkType=head
9	چدمبرم	چدمبرم	PROPN	NNP	Case=Acc|Gender=Masc|Number=Sing|Person=3	11	nmod	_	Vib=0|Tam=0|ChunkId=NP5|ChunkType=head
10	سے	سے	ADP	PSP	AdpType=Post	9	case	_	ChunkId=NP5|ChunkType=child
11	ملاقات	ملاقات	NOUN	NN	Case=Acc|Gender=Fem|Number=Sing|Person=3	16	obl	_	Vib=0|Tam=0|ChunkId=NP6|ChunkType=head
12	کے	کے	ADP	PSP	_	11	case	_	ChunkId=NP6|ChunkType=child
13	بارے	بارے	ADP	PSP	Case=Acc|Gender=Masc	11	case	_	ChunkId=NP6|ChunkType=child
14	مےں	مےں	ADP	PSP	_	11	case	_	ChunkId=NP6|ChunkType=child
15	سوال	سوال	NOUN	NN	Case=Nom|Gender=Masc|Number=Sing|Person=3	16	compound	_	Vib=0|Tam=0|ChunkId=NP7|ChunkType=head
16	کیا	کر	VERB	VM	Aspect=Perf|Gender=Masc|Number=Sing|VerbForm=Part|Voice=Act	0	root	_	Vib=یا|Tam=yA|ChunkId=VGF|ChunkType=head|Stype=declarative
17	گیا	جا	AUX	VAUX	Aspect=Perf|Gender=Masc|Number=Sing|VerbForm=Part	16	aux	_	Vib=1یا|Tam=yA1|ChunkId=VGF|ChunkType=child
18	تو	تو	SCONJ	CC	_	16	mark	_	AltTag=SCONJ-CCONJ|ChunkId=CCP|ChunkType=head
19	انھوں	وہ	PRON	PRP	Case=Nom|Number=Sing|Person=3|Polite=Form|PronType=Prs	25	nsubj	_	Vib=0|Tam=0|ChunkId=NP8|ChunkType=head
20	نے	نے	ADP	PSP	AdpType=Post	19	case	_	ChunkId=NP8|ChunkType=child
21	برہمی	برہمی	NOUN	NN	Case=Nom|Gender=Fem|Number=Sing|Person=3	23	obj	_	Vib=0|Tam=0|ChunkId=NP9|ChunkType=head
22	ظاہر	ظاہر	ADJ	JJ	_	23	compound	_	ChunkId=JJP|ChunkType=head
23	کرتے	کر	VERB	VM	Aspect=Imp|VerbForm=Part	25	advcl	_	Vib=تا|Tam=wA|ChunkId=VGNF|ChunkType=head
24	ہوئے	ہو	AUX	VAUX	Aspect=Perf|VerbForm=Part	23	aux	_	Vib=یا|Tam=yA|ChunkId=VGNF|ChunkType=child
25	کہا	کہہ	VERB	VM	Aspect=Perf|Gender=Masc|Number=Sing|VerbForm=Part|Voice=Act	16	advcl	_	Vib=یا|Tam=yA|ChunkId=VGF2|ChunkType=head|Stype=declarative
26	کہ	کہ	SCONJ	CC	_	44	mark	_	AltTag=SCONJ-CCONJ|ChunkId=CCP2|ChunkType=head
27	مےں	مےں	PRON	PRP	Case=Acc|Number=Sing|Person=1|PronType=Prs	35	nsubj	_	Vib=0|Tam=0|ChunkId=NP10|ChunkType=head
28	وزیر	وزیر	NOUN	NNZ	Case=Nom|Gender=Masc|Number=Sing|Person=3	35	obj	_	Vib=0|Tam=0|ChunkId=NP11|ChunkType=head
29	داخلہ	داخلہ	NOUN	NN	Case=Acc|Gender=Masc|Number=Sing|Person=3	28	nmod	_	Vib=0|Tam=0|ChunkId=NP11|ChunkType=child
30	سے	سے	ADP	PSP	AdpType=Post	28	case	_	ChunkId=NP11|ChunkType=child
31	چاہے	چاہ	ADV	RB	_	33	amod	_	ChunkId=RBP|ChunkType=head
32	جتنی	کتنی	DET	QF	PronType=Ind	33	det	_	ChunkId=NP12|ChunkType=child
33	بار	بار	NOUN	NN	Case=Nom|Gender=Masc|Number=Sing|Person=3	35	obl	_	Vib=0|Tam=0|ChunkId=NP12|ChunkType=head
34	ملاقات	ملاقات	NOUN	NN	Case=Nom|Gender=Fem|Number=Sing|Person=3	35	compound	_	Vib=0|Tam=0|ChunkId=NP13|ChunkType=head
35	کروں	کر	VERB	VM	Number=Sing|Person=1|Voice=Act	37	acl:relcl	_	Vib=اوں|Tam=Uz|ChunkId=VGF3|ChunkType=head|Stype=declarative
36	اس	یہ	DET	DEM	Case=Acc|Number=Sing|Person=3|PronType=Dem	37	det	_	ChunkId=NP14|ChunkType=child
37	بارے	بارہ	NOUN	NN	Case=Acc|Gender=Masc	42	obl	_	ChunkId=NP14|ChunkType=head
38	مےں	مےں	ADP	PSP	_	37	case	_	ChunkId=NP14|ChunkType=child
39	آپ	آپ	PRON	PRP	Case=Acc|Person=2|Polite=Form|PronType=Prs	44	obl	_	Vib=0|Tam=0|ChunkId=NP15|ChunkType=head
40	کو	کو	ADP	PSP	AdpType=Post	39	case	_	ChunkId=NP15|ChunkType=child
41	سوال	سوال	NOUN	NN	Case=Nom|Gender=Masc|Number=Sing|Person=3	42	compound	_	Vib=0|Tam=0|ChunkId=NP16|ChunkType=head
42	کرنے	کر	VERB	VM	Case=Acc|VerbForm=Inf	44	acl	_	Vib=نا|Tam=nA|ChunkId=VGNN|ChunkType=head
43	کا	کا	ADP	PSP	AdpType=Post|Case=Nom|Gender=Masc|Number=Sing	42	mark	_	ChunkId=VGNN|ChunkType=child
44	اختیار	اختیار	NOUN	NN	Case=Nom|Gender=Masc|Number=Sing|Person=3	25	ccomp	_	Vib=0|Tam=0|ChunkId=NP17|ChunkType=head
45	نہیں	نہیں	PART	NEG	Polarity=Neg|PronType=Neg	44	advmod	_	SpaceAfter=No|ChunkId=NEGP|ChunkType=head
46	۔	۔	PUNCT	SYM	_	16	punct	_	ChunkId=VGF4|ChunkType=head

~~~


~~~ conllu
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 12 ccomp	color:blue
1	اوورلینڈ	اوورلینڈ	PROPN	NNP	Case=Acc|Gender=Masc|Number=Sing|Person=3	3	nsubj	_	Vib=0|Tam=0|ChunkId=NP|ChunkType=head
2	نے	نے	ADP	PSP	AdpType=Post	1	case	_	ChunkId=NP|ChunkType=child
3	کہا	کہہ	VERB	VM	Aspect=Perf|Gender=Masc|Number=Sing|VerbForm=Part|Voice=Act	0	root	_	Vib=یا|Tam=yA|ChunkId=VGF|ChunkType=head|Stype=declarative
4	کہ	کہ	SCONJ	CC	_	10	mark	_	AltTag=SCONJ-CCONJ|ChunkId=CCP|ChunkType=head
5	جاریہ	جاریہ	ADJ	JJ	Case=Nom	6	amod	_	ChunkId=NP2|ChunkType=child
6	ہفتہ	ہفتہ	NOUN	NN	Case=Nom|Gender=Masc|Number=Sing|Person=3	10	obl	_	Vib=0|Tam=0|ChunkId=NP2|ChunkType=head
7	کئی	کئی	DET	QF	PronType=Ind	8	det	_	ChunkId=NP3|ChunkType=child
8	افراد	فرد	NOUN	NN	Case=Nom|Gender=Masc|Number=Plur|Person=3	10	obj	_	Vib=0|Tam=0|ChunkId=NP3|ChunkType=head
9	گرفتار	گرفتار	ADJ	JJ	_	10	compound	_	ChunkId=JJP|ChunkType=head
10	کیے	کر	VERB	VM	Aspect=Perf|Gender=Masc|Number=Plur|VerbForm=Part|Voice=Pass	12	xcomp	_	Vib=یا|Tam=yA|ChunkId=VGF2|ChunkType=head|Stype=declarative
11	جا	جا	AUX	VAUX	_	10	aux	_	Vib=0|Tam=0|ChunkId=VGF2|ChunkType=child
12	چکے	چک	VERB	VAUX	Aspect=Perf|Gender=Masc|Number=Plur|VerbForm=Part	3	ccomp	_	Vib=یا|Tam=yA|ChunkId=VGF2|ChunkType=child
13	ہیں	ہے	AUX	VM	Mood=Ind|Number=Plur|Tense=Pres|VerbForm=Fin	12	aux	_	Vib=ہے|Tam=hE|ChunkId=VGF2|ChunkType=child
14	اور	اور	CCONJ	CC	_	19	cc	_	ChunkId=CCP2|ChunkType=head
15	زیادہ	زیادہ	ADV	INTF	AdvType=Deg	16	advmod	_	ChunkId=NP4|ChunkType=child
16	سخت	سخت	ADJ	JJ	Case=Nom	17	amod	_	ChunkId=NP4|ChunkType=child
17	کوشش	کوشش	NOUN	NN	Case=Nom|Gender=Fem|Number=Sing|Person=3	19	obj	_	Vib=0|Tam=0|ChunkId=NP4|ChunkType=head
18	جاری	جاری	ADJ	JJ	_	19	compound	_	ChunkId=JJP2|ChunkType=head
19	رکھی	رکھ	VERB	VM	Aspect=Perf|Gender=Fem|Number=Sing|VerbForm=Part|Voice=Pass	12	conj	_	Vib=یا|Tam=yA|ChunkId=VGF3|ChunkType=head|Stype=declarative
20	جائےگی	جا	AUX	VAUX	Gender=Fem|Mood=Ind|Number=Sing|Person=3|Tense=Fut|VerbForm=Fin	19	aux	_	SpaceAfter=No|Vib=گا|Tam=gA|ChunkId=VGF3|ChunkType=child
21	۔	۔	PUNCT	SYM	_	3	punct	_	ChunkId=VGF3|ChunkType=child

~~~


