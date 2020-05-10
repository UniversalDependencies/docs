---
layout: base
title:  'Statistics of cc in UD_Bhojpuri-BHTB'
udver: '2'
---

## Treebank Statistics: UD_Bhojpuri-BHTB: Relations: `cc`

This relation is universal.

26 nodes (0%) are attached to their parents as `cc`.

19 instances of `cc` (73%) are right-to-left (child precedes parent).
Average distance between parent and child is 4.07692307692308.

The following 6 pairs of parts of speech are connected with `cc`: <tt><a href="bho_bhtb-pos-VERB.html">VERB</a></tt>-<tt><a href="bho_bhtb-pos-CCONJ.html">CCONJ</a></tt> (8; 31% instances), <tt><a href="bho_bhtb-pos-PROPN.html">PROPN</a></tt>-<tt><a href="bho_bhtb-pos-CCONJ.html">CCONJ</a></tt> (6; 23% instances), <tt><a href="bho_bhtb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="bho_bhtb-pos-CCONJ.html">CCONJ</a></tt> (5; 19% instances), <tt><a href="bho_bhtb-pos-VERB.html">VERB</a></tt>-<tt><a href="bho_bhtb-pos-SCONJ.html">SCONJ</a></tt> (5; 19% instances), <tt><a href="bho_bhtb-pos-ADJ.html">ADJ</a></tt>-<tt><a href="bho_bhtb-pos-CCONJ.html">CCONJ</a></tt> (1; 4% instances), <tt><a href="bho_bhtb-pos-VERB.html">VERB</a></tt>-<tt><a href="bho_bhtb-pos-PART.html">PART</a></tt> (1; 4% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 2 cc	color:blue
1	आईं	आ	VERB	V_VM	Aspect=Perf|Gender=Fem|Number=Sing|Person=3|Polite=Form|VerbForm=Part|Voice=Act	0	root	_	_
2	आ	आ	CCONJ	CC_CCD	_	4	cc	_	_
3	सपरिवार	सपरिवार	NOUN	N_NN	Case=Nom|Gender=Masc|Number=Sing|Person=3	4	nsubj	_	_
4	आईं	आ	VERB	V_VM	Aspect=Perf|Gender=Fem|Number=Sing|Person=3|Polite=Form|VerbForm=Part|Voice=Act	1	conj	_	_
5	।	।	PUNCT	RD_PUNC	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 8 cc	color:blue
1	कहे	कह	VERB	V_VM	Case=Acc|Gender=Masc|Number=Sing|Person=3	5	csubj	_	_
2	वाला	वाला	ADP	PSP	AdpType=Post|Case=Nom|Gender=Masc|Number=Sing	1	mark	_	_
3	त	त	PART	RP_RPD	Case=Nom|Gender=Masc|Number=Sing|Person=3	5	obl	_	_
4	इहो	इहो	DET	DM_DMD	_	5	det	_	_
5	कहेलें	कहेल	VERB	V_VM	Mood=Sub|Number=Sing|Person=2|Polite=Form|VerbForm=Fin	0	root	_	_
6	कि	कि	SCONJ	CC_CCS	_	14	mark	_	_
7	राहुल	राहुल	PROPN	N_NNP	Case=Nom|Gender=Masc|Number=Sing|Person=3	13	nsubj	_	_
8	आ	आ	CCONJ	CC_CCD	Number=Plur|Voice=Act	9	cc	_	_
9	प्रियंको	प्रियंको	PROPN	N_NNP	Case=Acc,Dat|Number=Sing|Person=3|PronType=Prs	7	conj	_	_
10	इटलिए	इटले	PROPN	N_NNP	PronType=Prs	12	nmod	_	_
11	के	का	ADP	PSP	AdpType=Post|Case=Nom|Gender=Masc|Number=Plur	10	case	_	_
12	नागरिक	नागरिक	NOUN	N_NN	Case=Nom|Gender=Masc|Number=Plur|Person=3	13	obj	_	_
13	ह	ह	VERB	V_VM	NumType=Card	5	ccomp	_	_
14	लोग	लोग	NUM	QT_QTO	Case=Nom|Gender=Masc|Number=Plur|Person=3	13	discourse	_	_
15	।	।	PUNCT	RD_PUNC	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 18	bgColor:blue
# visual-style 18	fgColor:white
# visual-style 18 13 cc	color:blue
1	गारी	गारी	NOUN	N_NNC	Case=Nom|Gender=Fem|Number=Sing|Person=3	3	compound	_	_
2	-	-	PUNCT	RD_PUNC	_	3	punct	_	_
3	गलौज	गलौज	NOUN	N_NN	Case=Nom|Gender=Fem|Number=Sing|Person=3	9	nmod	_	_
4	आ	आ	CCONJ	CC_CCD	_	9	cc	_	_
5	शृंगारिक	शृंगारिक	ADJ	JJ	Case=Nom	6	amod	_	_
6	हँसी	हँसी	NOUN	N_NN	Case=Nom|Gender=Masc|Number=Sing|Person=3	8	compound	_	_
7	-	-	PUNCT	RD_PUNC	_	8	punct	_	_
8	मजाक	मजाक	NOUN	N_NN	Case=Nom|Gender=Masc|Number=Sing|Person=3	9	obl	_	_
9	भोजपुरी	भोजपुरी	PROPN	N_NNP	Case=Acc|Gender=Fem|Number=Sing|Person=3	11	nmod	_	_
10	के	का	ADP	PSP	AdpType=Post	9	case	_	_
11	सुभाव	सुभाव	NOUN	N_NN	Case=Nom|Gender=Masc|Number=Sing|Person=3	0	root	_	_
12	हटे	हऽ	AUX	V_VM	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	11	cop	_	_
13	आ	आ	CCONJ	CC_CCD	_	18	cc	_	_
14	ई	ई	DET	DM_DMD	Case=Nom|Number=Sing|Person=3|PronType=Prs	15	det	_	_
15	सभ	सभ	NUM	QT_QTF	Case=Nom|Number=Plur|Person=3|PronType=Prs	16	nsubj	_	_
16	भोजपुरिया	भोजपुरी	ADJ	JJ	Case=Acc|Gender=Fem|Number=Sing|Person=3	18	amod	_	_
17	के	का	ADP	PSP	AdpType=Post|Case=Nom|Gender=Fem|Number=Sing	16	case	_	_
18	ताकत	ताकत	NOUN	N_NN	Case=Nom|Gender=Fem|Number=Sing|Person=3	11	conj	_	_
19	हऽ	हऽ	AUX	V_VM	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	18	cop	_	_
20	।	।	PUNCT	RD_PUNC	_	11	punct	_	_

~~~


