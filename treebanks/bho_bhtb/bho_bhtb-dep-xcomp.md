---
layout: base
title:  'Statistics of xcomp in UD_Bhojpuri-BHTB'
udver: '2'
---

## Treebank Statistics: UD_Bhojpuri-BHTB: Relations: `xcomp`

This relation is universal.

55 nodes (1%) are attached to their parents as `xcomp`.

39 instances of `xcomp` (71%) are right-to-left (child precedes parent).
Average distance between parent and child is 12.8.

The following 9 pairs of parts of speech are connected with `xcomp`: <tt><a href="bho_bhtb-pos-VERB.html">VERB</a></tt>-<tt><a href="bho_bhtb-pos-VERB.html">VERB</a></tt> (45; 82% instances), <tt><a href="bho_bhtb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="bho_bhtb-pos-VERB.html">VERB</a></tt> (2; 4% instances), <tt><a href="bho_bhtb-pos-VERB.html">VERB</a></tt>-<tt><a href="bho_bhtb-pos-NOUN.html">NOUN</a></tt> (2; 4% instances), <tt><a href="bho_bhtb-pos-ADJ.html">ADJ</a></tt>-<tt><a href="bho_bhtb-pos-VERB.html">VERB</a></tt> (1; 2% instances), <tt><a href="bho_bhtb-pos-AUX.html">AUX</a></tt>-<tt><a href="bho_bhtb-pos-VERB.html">VERB</a></tt> (1; 2% instances), <tt><a href="bho_bhtb-pos-CCONJ.html">CCONJ</a></tt>-<tt><a href="bho_bhtb-pos-VERB.html">VERB</a></tt> (1; 2% instances), <tt><a href="bho_bhtb-pos-DET.html">DET</a></tt>-<tt><a href="bho_bhtb-pos-VERB.html">VERB</a></tt> (1; 2% instances), <tt><a href="bho_bhtb-pos-PRON.html">PRON</a></tt>-<tt><a href="bho_bhtb-pos-VERB.html">VERB</a></tt> (1; 2% instances), <tt><a href="bho_bhtb-pos-VERB.html">VERB</a></tt>-<tt><a href="bho_bhtb-pos-AUX.html">AUX</a></tt> (1; 2% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 5 xcomp	color:blue
1	काहे	काह	PRON	PR_PRQ	_	11	discourse	_	_
2	एह	एह	DET	DM_DMD	NumType=Card	3	det	_	_
3	फेरा	फेरा	NOUN	N_NN	Case=Acc|Gender=Fem|Number=Sing|Person=3	5	nmod	_	_
4	में	में	ADP	PSP	AdpType=Post	3	case	_	_
5	पड़ल	पड़ल	VERB	V_VM	Case=Nom	11	xcomp	_	_
6	बाड़	बाड	AUX	V_VAUX	Case=Nom|Gender=Masc|Number=Sing|Person=3	5	aux	_	_
7	कि	कि	SCONJ	CC_CCS	_	6	conj	_	_
8	12	12	NUM	QT_QTC	NumType=Card	11	nummod	_	_
9	बरीस	बरीस	NOUN	N_NN	NumType=Card	8	fixed	_	_
10	छोट	छोट	ADJ	JJ	Case=Nom|Gender=Masc|Number=Plur|Person=3	13	amod	_	_
11	ह	ह	VERB	V_VM	NumType=Card	0	root	_	_
12	कि	कि	SCONJ	CC_CCS	_	10	conj	_	_
13	बड़	बड	ADJ	JJ	Case=Nom|Gender=Masc|Number=Sing|Person=3	11	amod	_	_
14	।	।	PUNCT	RD_PUNC	_	11	punct	_	_

~~~


~~~ conllu
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 16	bgColor:blue
# visual-style 16	fgColor:white
# visual-style 16 14 xcomp	color:blue
1	ई	ई	DET	DM_DMD	Case=Nom|Gender=Fem|Number=Sing|Person=3	2	compound	_	_
2	राज	राज	PROPN	N_NNP	Case=Nom|Gender=Masc|Number=Sing|Person=3	4	nmod	_	_
3	घरे	घरा	DET	QT_QTF	Case=Nom|Gender=Masc|Number=Sing|Person=3	4	compound	_	_
4	तब	तब	NOUN	N_NST	Case=Nom|PronType=Prs	8	nmod	_	_
5	खुलल	खुलल	ADJ	JJ	Case=Nom|Gender=Masc|Number=Sing|Person=3	8	compound	_	_
6	जब	जब	NOUN	N_NST	Case=Nom|PronType=Prs	8	nmod	_	_
7	उनुका	उनुक	PRON	PR_PRP	Case=Nom|Gender=Fem|Number=Sing|Person=3	8	compound	_	_
8	सङ	सङ	NOUN	N_NN	Case=Nom|Gender=Masc|Number=Sing|Person=3	13	compound	_	_
9	के	को	ADP	PSP	AdpType=Post|Case=Nom|Gender=Masc|Number=Plur	8	case	_	_
10	पढ़ल	पढ़ल	ADJ	JJ	Case=Nom|Gender=Masc|Number=Sing|Person=3	13	compound	_	_
11	एगो	एगो	NUM	QT_QTC	Case=Nom|Gender=Masc|Number=Sing|Person=3	13	compound	_	_
12	डॉक्टर	डॉक्टर	NOUN	N_NN	Case=Nom|Gender=Masc|Number=Sing|Person=3	13	compound	_	_
13	घरे	घरा	NOUN	N_NST	Case=Nom|Gender=Masc|Number=Sing|Person=3	14	compound	_	_
14	आइल	आइल	VERB	V_VM	Case=Nom|Gender=Masc|Number=Sing|Person=3	16	xcomp	_	_
15	आ	आ	AUX	V_VM	_	14	aux	_	_
16	बचपनवाला	बचपन	NOUN	N_NN	_	23	obl	_	_
17	स्टाइल	स्टाइल	AUX	V_VAUX	Foreign=Yes	16	aux	_	_
18	में	में	ADP	PSP	AdpType=Post	16	case	_	_
19	मुक्का	मुक्क	PRON	PR_PRP	Aspect=Perf|Gender=Masc|Number=Sing|Person=3|VerbForm=Part|Voice=Act	23	compound	_	_
20	-	-	PUNCT	RD_PUNC	_	23	punct	_	_
21	मुक्की	मुक्की	ADJ	JJ	_	23	compound	_	_
22	शुरू	शुरू	NOUN	N_NN	Case=Nom|Gender=Masc|Number=Sing|Person=3	23	compound	_	_
23	कइलस	कइलस	VERB	V_VM	Gender=Masc|Number=Plur|Voice=Act	0	root	_	SpacesAfter=\s\s
24	।	।	PUNCT	RD_PUNC	_	23	punct	_	SpacesAfter=\n

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 4 xcomp	color:blue
1	उनुकर	उनुकर	PRON	PR_PRP	Number=Sing	2	acl	_	_
2	बिआह	बिआह	NOUN	N_NN	NumType=Card	4	nmod	_	_
3	एही	एही	DET	DM_DMD	Case=Acc|Gender=Masc|Number=Sing|Person=3	4	det	_	_
4	चलते	चलते	NOUN	N_NN	AdpType=Post	10	xcomp	_	_
5	आजु	आजु	NOUN	N_NST	Case=Acc|Gender=Masc|Number=Sing|Person=3	10	nmod	_	_
6	के	के	ADP	PSP	AdpType=Post	5	case	_	SpacesAfter=\n
7	सबले	सबला	PART	RP_INTF	AdpType=Post	8	case	_	_
8	बड़का	बड़का	ADJ	JJ	Case=Nom|Gender=Masc|Number=Sing|Person=3	10	compound	_	_
9	इवेन्ट	इवेन्ट	NOUN	N_NN	Case=Nom|Gender=Masc|Number=Sing|Person=3	10	compound	_	_
10	बावे	बावे	VERB	V_VM	Case=Nom|Gender=Masc|Number=Sing|Person=3	0	root	_	_
11	।	।	PUNCT	RD_PUNC	_	10	punct	_	_

~~~


