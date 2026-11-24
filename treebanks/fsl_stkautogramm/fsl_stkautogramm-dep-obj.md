---
layout: base
title:  'Statistics of obj in UD_French_Sign_Language-STKAutogramm'
udver: '2'
---

## Treebank Statistics: UD_French_Sign_Language-STKAutogramm: Relations: `obj`

This relation is universal.

33 nodes (5%) are attached to their parents as `obj`.

17 instances of `obj` (52%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.72727272727273.

The following 8 pairs of parts of speech are connected with `obj`: <tt><a href="fsl_stkautogramm-pos-VERB.html">VERB</a></tt>-<tt><a href="fsl_stkautogramm-pos-NOUN.html">NOUN</a></tt> (20; 61% instances), <tt><a href="fsl_stkautogramm-pos-VERB.html">VERB</a></tt>-<tt><a href="fsl_stkautogramm-pos-ADV.html">ADV</a></tt> (4; 12% instances), <tt><a href="fsl_stkautogramm-pos-VERB.html">VERB</a></tt>-<tt><a href="fsl_stkautogramm-pos-PRON.html">PRON</a></tt> (4; 12% instances), <tt><a href="fsl_stkautogramm-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fsl_stkautogramm-pos-NOUN.html">NOUN</a></tt> (1; 3% instances), <tt><a href="fsl_stkautogramm-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fsl_stkautogramm-pos-PROPN.html">PROPN</a></tt> (1; 3% instances), <tt><a href="fsl_stkautogramm-pos-ADV.html">ADV</a></tt>-<tt><a href="fsl_stkautogramm-pos-NOUN.html">NOUN</a></tt> (1; 3% instances), <tt><a href="fsl_stkautogramm-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fsl_stkautogramm-pos-NUM.html">NUM</a></tt> (1; 3% instances), <tt><a href="fsl_stkautogramm-pos-VERB.html">VERB</a></tt>-<tt><a href="fsl_stkautogramm-pos-ADJ.html">ADJ</a></tt> (1; 3% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 obj	color:blue
1	[PRÉPARER]	[PRÉPARER]	VERB	_	_	0	root	_	AlignBegin=1158139|AlignEnd=1158619|Gloss=[PREPARE]|ISRole=Foc
2	[SAUCE]	[SAUCE]	NOUN	_	_	1	obj	_	AlignBegin=1158619|AlignEnd=1159379|Gloss=[SAUCE]
3	[PRÉPARER]	[PRÉPARER]	VERB	_	_	1	conj:dbl	_	AlignBegin=1159379|AlignEnd=1160014|Gloss=[PREPARE]|ISMarker[Foc]=Cxn-dbl|NMM=head-nod+eye-blink

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 4 obj	color:blue
1	[hep]	[hep]	INTJ	_	_	8	discourse	_	AlignBegin=119352|AlignEnd=119626|Gloss=[hep]|NMM=eyebrow-raise|Trs=Left
2	PNT[MOI]	PNT	PRON	_	Number=Sing|PronType=Prs	8	discourse:participant	_	AlignBegin=119630|AlignEnd=120600|Gloss=PNT[ME]|NMM=rightward-tilt+eyebrow-raise|Tgt=Prs1
3	[hep]	[hep]	INTJ	_	_	8	discourse	_	AlignBegin=120604|AlignEnd=121200|Exp=Neg|Gloss=[hep]|NMM=eyebrow-rf
4	PNT[lieu2]-[non]	PNT	ADV	_	_	8	obj	_	AlignBegin=121200|AlignEnd=122265|Exp=Neg|Gloss=PNT[place2]-[no]|NMM=eye-blink|Src=PSS3l|Tgt=PSSN
5	PNT[lieu3]	PNT	ADV	_	_	4	conj:contr	_	AlignBegin=122274|AlignEnd=122826|Gloss=PNT[place3]|NDHHeld=PNT-PSS3l|NMM=eyebrow-raise|Src=PSSN|Tgt=PSS3r
6	[TROISIÈME]	[TROISIÈME]	ADJ	_	_	5	advcl	_	AlignBegin=122826|AlignEnd=123287|Gloss=[THIRD]
7	PNT[lieu3]	PNT	ADV	_	_	5	conj:reform	_	AlignBegin=123296|AlignEnd=123904|Gloss=PNT[place3]|NMM=head-nod+eye-blink|Tgt=PSS3r
8	[ADORER2]	[ADORER2]	VERB	_	_	0	root	_	AlignBegin=123913|AlignEnd=124939|Gloss=[ADORE2]|Reported=Yes

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 5 obj	color:blue
1	[NON]	[NON]	ADV	_	_	0	root	_	AlignBegin=62267|AlignEnd=62779|Gloss=[NO]|NMM=eyebrown-frown|Reported=Yes
2	SignedName[Macron]	SignedName	PROPN	_	_	1	obl:mod	_	AlignBegin=62791|AlignEnd=63140|Gloss=SignedName[Macron]|NMM=eyebrown-frown
3	PNT[MOI]	PNT	PRON	_	Number=Sing|PronType=Prs	4	nsubj	_	AlignBegin=63157|AlignEnd=63651|Gloss=PNT[ME]|Tgt=Prs1
4	[PRÉFÉRER]	[PRÉFÉRER]	VERB	_	_	1	conj	_	AlignBegin=63157|AlignEnd=63651|Gloss=[PREFER]
5	PNT[LUI]	PNT	PRON	_	Number=Sing|PronType=Prs	4	obj	_	AlignBegin=63663|AlignEnd=63884|Gloss=PNT[HIM]|Tgt=PSS3r

~~~


