---
layout: base
title:  'Statistics of aux:pass in UD_Hindi-HDTB'
udver: '2'
---

## Treebank Statistics: UD_Hindi-HDTB: Relations: `aux:pass`

This relation is a language-specific subtype of <tt><a href="hi_hdtb-dep-aux.html">aux</a></tt>.

10609 nodes (3%) are attached to their parents as `aux:pass`.

10563 instances of `aux:pass` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.67942313130361.

The following 2 pairs of parts of speech are connected with `aux:pass`: <tt><a href="hi_hdtb-pos-VERB.html">VERB</a></tt>-<tt><a href="hi_hdtb-pos-AUX.html">AUX</a></tt> (10608; 100% instances), <tt><a href="hi_hdtb-pos-PRON.html">PRON</a></tt>-<tt><a href="hi_hdtb-pos-AUX.html">AUX</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 9 aux:pass	color:blue
1	यहाँ	यहाँ	PRON	PRP	Case=Acc|PronType=Prs	8	obl	_	Vib=0_पर|ChunkId=NP|ChunkType=head|Translit=yahām̃
2	पर	पर	ADP	PSP	AdpType=Post	1	case	_	ChunkId=NP|ChunkType=child|Translit=para
3	भगवान	भगवान	NOUN	NNC	Case=Nom|Gender=Masc|Number=Sing|Person=3	4	compound	_	Vib=0|Tam=0|ChunkId=NP2|ChunkType=child|Translit=bhagavāna
4	बुद्ध	बुद्ध	PROPN	NNP	Case=Acc|Gender=Masc|Number=Sing|Person=3	7	nmod	_	Vib=0_का|Tam=0|ChunkId=NP2|ChunkType=head|Translit=buddha
5	का	का	ADP	PSP	AdpType=Post|Case=Nom|Gender=Masc|Number=Sing	4	case	_	ChunkId=NP2|ChunkType=child|Translit=kā
6	अंतिम	अंतिम	ADJ	JJ	Case=Nom	7	amod	_	ChunkId=NP3|ChunkType=child|Translit=aṁtima
7	संस्‍कार	संस्कार	NOUN	NN	Case=Nom|Gender=Masc|Number=Sing|Person=3	8	compound	_	Vib=0|Tam=0|ChunkId=NP3|ChunkType=head|Translit=saṁskāra
8	किया	कर	VERB	VM	Aspect=Perf|Gender=Masc|Number=Sing|VerbForm=Part|Voice=Pass	0	root	_	ChunkId=VGF|ChunkType=head|Stype=declarative|Tam=yA|Translit=kiyā|Vib=या_जा+या1_था
9	गया	जा	AUX	VAUX	Aspect=Perf|Gender=Masc|Number=Sing|VerbForm=Part	8	aux:pass	_	Vib=या1|Tam=yA1|ChunkId=VGF|ChunkType=child|Translit=gayā
10	था	था	AUX	VAUX	Gender=Masc|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin	8	aux:pass	_	Vib=था|Tam=WA|ChunkId=VGF|ChunkType=child|Translit=thā
11	।	।	PUNCT	SYM	_	8	punct	_	ChunkId=BLK|ChunkType=head|Translit=.

~~~


~~~ conllu
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 14 aux:pass	color:blue
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


