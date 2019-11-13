---
layout: base
title:  'Statistics of cc in UD_Bhojpuri-BHTB'
udver: '2'
---

## Treebank Statistics: UD_Bhojpuri-BHTB: Relations: `cc`

This relation is universal.

15 nodes (0%) are attached to their parents as `cc`.

8 instances of `cc` (53%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.06666666666667.

The following 5 pairs of parts of speech are connected with `cc`: <tt><a href="bho_bhtb-pos-VERB.html">VERB</a></tt>-<tt><a href="bho_bhtb-pos-SCONJ.html">SCONJ</a></tt> (5; 33% instances), <tt><a href="bho_bhtb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="bho_bhtb-pos-CCONJ.html">CCONJ</a></tt> (3; 20% instances), <tt><a href="bho_bhtb-pos-PROPN.html">PROPN</a></tt>-<tt><a href="bho_bhtb-pos-CCONJ.html">CCONJ</a></tt> (3; 20% instances), <tt><a href="bho_bhtb-pos-VERB.html">VERB</a></tt>-<tt><a href="bho_bhtb-pos-CCONJ.html">CCONJ</a></tt> (3; 20% instances), <tt><a href="bho_bhtb-pos-VERB.html">VERB</a></tt>-<tt><a href="bho_bhtb-pos-PART.html">PART</a></tt> (1; 7% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 6 cc	color:blue
1	हम	हम	PRON	PR_PRP	Case=Nom|Number=Plur|Person=1|PronType=Prs	5	nsubj	_	_
2	ओह	ओह	DET	DM_DMD	NumType=Card	3	det	_	_
3	चीफ	चीफ	NOUN	N_NN	Case=Nom	5	obj	_	_
4	के	का	ADP	PSP	AdpType=Post|Case=Nom|Gender=Masc|Number=Plur	3	case	_	_
5	डपटनी	डपट	VERB	V_VM	_	0	root	_	_
6	कि	कि	SCONJ	CC_CCS	_	10	cc	_	_
7	का	का	PRON	PR_PRQ	_	10	obl	_	_
8	बेहूदा	बेहूदा	ADJ	JJ	Case=Acc|Gender=Masc|Number=Sing	9	amod	_	_
9	आइडिया	आइडिया	NOUN	N_NN	Case=Nom|Gender=Masc|Number=Sing|Person=3	10	obj	_	SpacesAfter=\n
10	खोजे	खोज	VERB	V_VM	_	5	ccomp	_	_
11	में	में	ADP	PSP	AdpType=Post	10	mark	_	_
12	लागल	लागल	AUX	V_VAUX	_	10	aux	_	_
13	बाड़	बाड	AUX	V_VAUX	Number=Sing|Person=3|Polite=Form	10	aux	_	_
14	?	।	PUNCT	RD_PUNC	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 cc	color:blue
1	लोकरंजन	लोकरंजन	NOUN	N_NN	Case=Nom|Gender=Masc|Number=Sing|Person=3	4	nsubj	_	_
2	आ	आ	CCONJ	CC_CCD	_	1	cc	_	_
3	सांस्कृतिक	सांस्कृतिक	ADJ	JJ	Case=Nom	1	conj	_	_
4	गीत	गीत	NOUN	N_NN	Case=Nom|Gender=Masc|Number=Sing|Person=3	0	root	_	_
5	-	-	PUNCT	RD_SYM	_	4	punct	_	_

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


