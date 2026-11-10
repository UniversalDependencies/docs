---
layout: base
title:  'Statistics of nsubj in UD_French_Sign_Language-STKAutogramm'
udver: '2'
---

## Treebank Statistics: UD_French_Sign_Language-STKAutogramm: Relations: `nsubj`

This relation is universal.

32 nodes (5%) are attached to their parents as `nsubj`.

27 instances of `nsubj` (84%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.375.

The following 10 pairs of parts of speech are connected with `nsubj`: <tt><a href="fsl_stkautogramm-pos-VERB.html">VERB</a></tt>-<tt><a href="fsl_stkautogramm-pos-NOUN.html">NOUN</a></tt> (9; 28% instances), <tt><a href="fsl_stkautogramm-pos-VERB.html">VERB</a></tt>-<tt><a href="fsl_stkautogramm-pos-PRON.html">PRON</a></tt> (8; 25% instances), <tt><a href="fsl_stkautogramm-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fsl_stkautogramm-pos-NOUN.html">NOUN</a></tt> (4; 13% instances), <tt><a href="fsl_stkautogramm-pos-ADV.html">ADV</a></tt>-<tt><a href="fsl_stkautogramm-pos-NOUN.html">NOUN</a></tt> (3; 9% instances), <tt><a href="fsl_stkautogramm-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fsl_stkautogramm-pos-PRON.html">PRON</a></tt> (2; 6% instances), <tt><a href="fsl_stkautogramm-pos-PRON.html">PRON</a></tt>-<tt><a href="fsl_stkautogramm-pos-PRON.html">PRON</a></tt> (2; 6% instances), <tt><a href="fsl_stkautogramm-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fsl_stkautogramm-pos-ADV.html">ADV</a></tt> (1; 3% instances), <tt><a href="fsl_stkautogramm-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fsl_stkautogramm-pos-ADV.html">ADV</a></tt> (1; 3% instances), <tt><a href="fsl_stkautogramm-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fsl_stkautogramm-pos-NOUN.html">NOUN</a></tt> (1; 3% instances), <tt><a href="fsl_stkautogramm-pos-PROPN.html">PROPN</a></tt>-<tt><a href="fsl_stkautogramm-pos-PRON.html">PRON</a></tt> (1; 3% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 nsubj	color:blue
1	[PERSONNE]	[PERSONNE]	NOUN	_	Number=Plur	2	nsubj	_	AlignBegin=82304|AlignEnd=82861|Gloss=[PERSON]|NMM=backward-tilt+eyebrow-frown
2	[PROMENER]	[PROMENER]	VERB	_	_	0	root	_	AlignBegin=82886|AlignEnd=83278|Gloss=[STROLL]|NMM=eyebrow-frown
3	[FOULE]	[FOULE]	NOUN	_	_	2	conj:illustrate	_	AlignBegin=83329|AlignEnd=85937|Exp[lex]=Intensité|Gloss=[CROWD]|NMM=eye-blink

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 nsubj	color:blue
1	PNT[NOUS]	PNT	PRON	_	Number=Plur|PronType=Prs	2	nsubj	_	AlignBegin=48019|AlignEnd=48565|Gloss=PNT[US]|Tgt=Prs1
2	[réfléchir]	[réfléchir]	VERB	_	_	0	root	_	AlignBegin=48606|AlignEnd=49625|Gloss=[think]|Subj=PT

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 nsubj	color:blue
1	PNT[là]	PNT	ADV	_	_	2	advmod	_	AlignBegin=108687|AlignEnd=109322|Gloss=PNT[here]|ISMarker[Top]=NMM|ISRole=Top|NMM=eyebrow-raise+eye-blink|Tgt=PSSN
2	[NAGER]	[NAGER]	NOUN	_	_	3	nsubj	_	AlignBegin=109352|AlignEnd=111017|Exp=Positif|Gloss=[SWIM]
3	[AGRÉABLE]	[AGRÉABLE]	ADJ	_	_	0	root	_	AlignBegin=111017|AlignEnd=111722|Exp[lex]=Positif|Gloss=[PLEASANT]|NMM=eye-blink

~~~


