---
layout: base
title:  'Statistics of ccomp in UD_Hindi-HDTB'
udver: '2'
---

## Treebank Statistics: UD_Hindi-HDTB: Relations: `ccomp`

This relation is universal.

762 nodes (0%) are attached to their parents as `ccomp`.

762 instances of `ccomp` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 14.8293963254593.

The following 2 pairs of parts of speech are connected with `ccomp`: <tt><a href="hi_hdtb-pos-VERB.html">VERB</a></tt>-<tt><a href="hi_hdtb-pos-VERB.html">VERB</a></tt> (759; 100% instances), <tt><a href="hi_hdtb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="hi_hdtb-pos-VERB.html">VERB</a></tt> (3; 0% instances).


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 11 ccomp	color:blue
1	वह	वह	PRON	PRP	Case=Nom|Number=Sing|Person=3|PronType=Prs	2	nsubj	_	Vib=0|Tam=0|ChunkId=NP|ChunkType=head|Translit=vaha
2	बताते	बता	VERB	VM	Aspect=Imp|Gender=Masc|Number=Sing|Person=3|Polite=Form|VerbForm=Part|Voice=Act	0	root	_	ChunkId=VGF|ChunkType=head|Stype=declarative|Tam=wA|Translit=batāte|Vib=ता_है
3	हैं	है	AUX	VAUX	Mood=Ind|Number=Sing|Person=3|Polite=Form|Tense=Pres|VerbForm=Fin	2	aux	_	Vib=है|Tam=hE|ChunkId=VGF|ChunkType=child|Translit=haiṁ
4	कि	कि	SCONJ	CC	_	11	mark	_	AltTag=SCONJ-CONJ|ChunkId=CCP|ChunkType=head|Translit=ki
5	समिति	समिति	NOUN	NN	Case=Nom|Gender=Fem|Number=Sing|Person=3	11	nsubj	_	Vib=0|Tam=0|ChunkId=NP2|ChunkType=head|Translit=samiti
6	शंकराचार्य	शंकराचार्य	NOUN	NN	Case=Acc|Gender=Masc|Number=Sing|Person=3	11	obl	_	Vib=0_के_प्रति|Tam=0|ChunkId=NP3|ChunkType=head|Translit=śaṁkarācārya
7	जी	जी	PART	RP	_	6	dep	_	ChunkId=NP3|ChunkType=child|Translit=jī
8	के	के	ADP	PSP	AdpType=Post	6	case	_	ChunkId=NP3|ChunkType=child|Translit=ke
9	प्रति	प्रति	ADP	PSP	AdpType=Post	6	case	_	ChunkId=NP3|ChunkType=child|Translit=prati
10	उत्तरदायी	उत्तरदायी	ADJ	JJ	_	11	compound	_	ChunkId=JJP|ChunkType=head|Translit=uttaradāyī
11	होगी	हो	VERB	VM	Gender=Fem|Mood=Ind|Number=Sing|Person=3|Tense=Fut|VerbForm=Fin|Voice=Act	2	ccomp	_	ChunkId=VGF2|ChunkType=head|Stype=declarative|Tam=gA|Translit=hogī|Vib=गा
12	।	।	PUNCT	SYM	_	2	punct	_	ChunkId=BLK|ChunkType=head|Translit=.

~~~


~~~ conllu
# visual-style 17	bgColor:blue
# visual-style 17	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 17 ccomp	color:blue
1	हालांकि	हालांकि	SCONJ	CC	_	7	mark	_	AltTag=SCONJ-CONJ|ChunkId=CCP|ChunkType=head|Translit=hālāṁki
2	प्रधानमंत्री	प्रधानमंत्री	PROPN	NNP	Case=Nom|Gender=Masc|Number=Sing|Person=3	7	nsubj	_	Vib=0|Tam=0|ChunkId=NP|ChunkType=head|Translit=pradhānamaṁtrī
3	भी	भी	PART	RP	_	2	dep	_	ChunkId=NP|ChunkType=child|Translit=bhī
4	सदन	सदन	NOUN	NN	Case=Acc|Gender=Masc|Number=Sing|Person=3	7	obl	_	Vib=0_में|Tam=0|ChunkId=NP2|ChunkType=head|Translit=sadana
5	में	में	ADP	PSP	AdpType=Post	4	case	_	ChunkId=NP2|ChunkType=child|Translit=meṁ
6	उपस्थित	उपस्थित	ADJ	JJ	_	7	compound	_	ChunkId=JJP|ChunkType=head|Translit=upasthita
7	थे	था	VERB	VM	Gender=Masc|Mood=Ind|Number=Sing|Person=3|Polite=Form|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	ChunkId=VGF|ChunkType=head|Stype=declarative|Tam=WA|Translit=the|Vib=था
8	और	और	CCONJ	CC	_	11	cc	_	ChunkId=CCP2|ChunkType=head|Translit=aura
9	समय	समय	NOUN	NN	Case=Acc|Gender=Masc|Number=Sing|Person=3	11	nmod	_	Vib=0_का|Tam=0|ChunkId=NP3|ChunkType=head|Translit=samaya
10	का	का	ADP	PSP	AdpType=Post|Case=Nom|Gender=Masc|Number=Sing	9	case	_	ChunkId=NP3|ChunkType=child|Translit=kā
11	तकाजा	तकाजा	NOUN	NN	Case=Nom|Gender=Masc|Number=Sing|Person=3	7	conj	_	Vib=0|Tam=0|ChunkId=NP4|ChunkType=head|Translit=takājā
12	था	था	AUX	VM	Gender=Masc|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin|Voice=Act	11	cop	_	ChunkId=VGF2|ChunkType=head|Stype=declarative|Tam=WA|Translit=thā|Vib=था
13	कि	कि	SCONJ	CC	_	17	mark	_	AltTag=SCONJ-CONJ|ChunkId=CCP3|ChunkType=head|Translit=ki
14	वह	वह	PRON	PRP	Case=Nom|Number=Sing|Person=3|PronType=Prs	17	nsubj	_	Vib=0|Tam=0|ChunkId=NP5|ChunkType=head|Translit=vaha
15	भी	भी	PART	RP	_	14	dep	_	ChunkId=NP5|ChunkType=child|Translit=bhī
16	श्रद्घांजलि	श्रद्घांजलि	NOUN	NN	Case=Nom|Gender=Fem|Number=Sing|Person=3	17	obj	_	Vib=0|Tam=0|ChunkId=NP6|ChunkType=head|Translit=śradghāṁjali
17	देते	दे	VERB	VM	Gender=Masc|Mood=Sub|Number=Sing|Person=3|Polite=Form|VerbForm=Fin|Voice=Act	11	ccomp	_	ChunkId=VGF3|ChunkType=head|Stype=declarative|Tam=eM|Translit=dete|Vib=एं
18	।	।	PUNCT	SYM	_	7	punct	_	ChunkId=BLK|ChunkType=head|Translit=.

~~~


