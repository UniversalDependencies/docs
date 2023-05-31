---
layout: base
title:  'Statistics of aux in UD_Hindi-HDTB'
udver: '2'
---

## Treebank Statistics: UD_Hindi-HDTB: Relations: `aux`

This relation is universal.
There are 1 language-specific subtypes of `aux`: <tt><a href="hi_hdtb-dep-aux-pass.html">aux:pass</a></tt>.

9624 nodes (3%) are attached to their parents as `aux`.

9624 instances of `aux` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.00945552784705.

The following 2 pairs of parts of speech are connected with `aux`: <tt><a href="hi_hdtb-pos-VERB.html">VERB</a></tt>-<tt><a href="hi_hdtb-pos-AUX.html">AUX</a></tt> (9623; 100% instances), <tt><a href="hi_hdtb-pos-PRON.html">PRON</a></tt>-<tt><a href="hi_hdtb-pos-AUX.html">AUX</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 13 14 aux	color:blue
1	इस	यह	DET	DEM	Case=Acc|Number=Sing|Person=3|PronType=Dem	2	det	_	ChunkId=NP|ChunkType=child|Translit=isa
2	मूर्ति	मूर्ति	NOUN	NN	Case=Acc|Gender=Fem|Number=Sing|Person=3	10	nsubj	_	Vib=0_का|Tam=0|ChunkId=NP|ChunkType=head|Translit=mūrti
3	के	का	ADP	PSP	AdpType=Post|Case=Nom|Gender=Masc|Number=Plur	2	case	_	ChunkId=NP|ChunkType=child|Translit=ke
4	भी	भी	PART	RP	_	2	dep	_	ChunkId=NP|ChunkType=child|Translit=bhī
5	करीब	करीब	PART	RP	_	7	dep	_	ChunkId=NP2|ChunkType=child|Translit=karība
6	पाँच	पाँच	NUM	QCC	NumType=Card	7	dep	_	ChunkId=NP2|ChunkType=child|Translit=pām̃ca
7	सौ	सौ	NUM	QC	NumType=Card	8	nummod	_	ChunkId=NP2|ChunkType=child|Translit=sau
8	वर्ष	वर्ष	NOUN	NN	Case=Nom|Gender=Masc|Number=Plur|Person=3	10	obl	_	Vib=0|Tam=0|ChunkId=NP2|ChunkType=head|Translit=varṣa
9	पुराना	पुराना	ADJ	JJ	Gender=Masc|Number=Sing	10	xcomp	_	ChunkId=JJP|ChunkType=head|Translit=purānā
10	होने	हो	VERB	VM	Case=Acc|Number=Sing|VerbForm=Inf	12	nmod	_	Vib=ना_का|Tam=nA|ChunkId=VGNN|ChunkType=head|Translit=hone
11	का	का	ADP	PSP	AdpType=Post|Case=Nom|Gender=Masc|Number=Sing	10	mark	_	ChunkId=VGNN|ChunkType=child|Translit=kā
12	प्रमाण	प्रमाण	NOUN	NN	Case=Nom|Gender=Masc|Number=Sing|Person=3	13	nsubj	_	Vib=0|Tam=0|ChunkId=NP3|ChunkType=head|Translit=pramāṇa
13	मिलता	मिल	VERB	VM	Aspect=Imp|Gender=Masc|Number=Sing|Person=3|VerbForm=Part|Voice=Act	0	root	_	ChunkId=VGF|ChunkType=head|Stype=declarative|Tam=wA|Translit=milatā|Vib=ता_है
14	है	है	AUX	VAUX	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	13	aux	_	Vib=है|Tam=hE|ChunkId=VGF|ChunkType=child|Translit=hai
15	।	।	PUNCT	SYM	_	13	punct	_	ChunkId=BLK|ChunkType=head|Translit=.

~~~


~~~ conllu
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 13 aux	color:blue
1	इसलिए	इसलिये	PRON	PRP	PronType=Prs	0	root	_	ChunkId=NP|ChunkType=head|Translit=isalie
2	अगर	अगर	SCONJ	CC	_	8	mark	_	AltTag=SCONJ-CONJ|ChunkId=CCP|ChunkType=head|Translit=agara
3	दोनों	दो	NUM	QC	Number=Plur|NumType=Card	4	nummod	_	ChunkId=NP2|ChunkType=child|Translit=donoṁ
4	देश	देश	NOUN	NN	Case=Nom|Gender=Masc|Number=Plur|Person=3	1	nsubj	_	Vib=0|Tam=0|ChunkId=NP2|ChunkType=head|Translit=deśa
5	मिल	मिल	VERB	VM	_	8	advcl	_	Vib=0_कर|Tam=0|ChunkId=VGNF|ChunkType=head|Translit=mila
6	कर	कर	AUX	VAUX	_	5	aux	_	Vib=0|Tam=0|ChunkId=VGNF|ChunkType=child|Translit=kara
7	काम	काम	NOUN	NN	Case=Nom|Gender=Masc|Number=Sing|Person=3	8	obj	_	Vib=0|Tam=0|ChunkId=NP3|ChunkType=head|Translit=kāma
8	करें	कर	VERB	VM	Mood=Sub|Number=Plur|Person=3|VerbForm=Fin|Voice=Act	1	advcl	_	ChunkId=VGF|ChunkType=head|Stype=declarative|Tam=eM|Translit=kareṁ|Vib=एं
9	तो	तो	SCONJ	CC	_	1	mark	_	AltTag=SCONJ-CONJ|ChunkId=CCP2|ChunkType=head|Translit=to
10	बहुत	बहुत	DET	QF	PronType=Ind	11	det	_	ChunkId=NP4|ChunkType=child|Translit=bahuta
11	आगे	आगे	ADV	NST	AdpType=Post|Case=Nom|Gender=Masc|Number=Sing|Person=3	12	obl	_	AltTag=ADV-NOUN|ChunkId=NP4|ChunkType=head|Translit=āge
12	जा	जा	VERB	VM	Gender=Masc|Number=Plur|Person=3|Voice=Act	1	mark	_	ChunkId=VGF2|ChunkType=head|Stype=declarative|Tam=0|Translit=jā|Vib=0_सक+ता_है
13	सकते	सक	AUX	VAUX	Aspect=Imp|Gender=Masc|Number=Plur|VerbForm=Part	1	aux	_	Vib=ता|Tam=wA|ChunkId=VGF2|ChunkType=child|Translit=sakate
14	हैं	है	AUX	VAUX	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	1	aux:pass	_	Vib=है|Tam=hE|ChunkId=VGF2|ChunkType=child|Translit=haiṁ
15	।	।	PUNCT	SYM	_	1	punct	_	ChunkId=BLK|ChunkType=head|Translit=.

~~~


