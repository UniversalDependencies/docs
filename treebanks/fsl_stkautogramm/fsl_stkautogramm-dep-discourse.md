---
layout: base
title:  'Statistics of discourse in UD_French_Sign_Language-STKAutogramm'
udver: '2'
---

## Treebank Statistics: UD_French_Sign_Language-STKAutogramm: Relations: `discourse`

This relation is universal.
There are 1 language-specific subtypes of `discourse`: <tt><a href="fsl_stkautogramm-dep-discourse-participant.html">discourse:participant</a></tt>.

43 nodes (7%) are attached to their parents as `discourse`.

27 instances of `discourse` (63%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.95348837209302.

The following 13 pairs of parts of speech are connected with `discourse`: <tt><a href="fsl_stkautogramm-pos-VERB.html">VERB</a></tt>-<tt><a href="fsl_stkautogramm-pos-INTJ.html">INTJ</a></tt> (13; 30% instances), <tt><a href="fsl_stkautogramm-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fsl_stkautogramm-pos-ADV.html">ADV</a></tt> (6; 14% instances), <tt><a href="fsl_stkautogramm-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fsl_stkautogramm-pos-INTJ.html">INTJ</a></tt> (6; 14% instances), <tt><a href="fsl_stkautogramm-pos-VERB.html">VERB</a></tt>-<tt><a href="fsl_stkautogramm-pos-VERB.html">VERB</a></tt> (5; 12% instances), <tt><a href="fsl_stkautogramm-pos-ADV.html">ADV</a></tt>-<tt><a href="fsl_stkautogramm-pos-INTJ.html">INTJ</a></tt> (3; 7% instances), <tt><a href="fsl_stkautogramm-pos-VERB.html">VERB</a></tt>-<tt><a href="fsl_stkautogramm-pos-ADV.html">ADV</a></tt> (3; 7% instances), <tt><a href="fsl_stkautogramm-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fsl_stkautogramm-pos-ADV.html">ADV</a></tt> (1; 2% instances), <tt><a href="fsl_stkautogramm-pos-ADV.html">ADV</a></tt>-<tt><a href="fsl_stkautogramm-pos-NOUN.html">NOUN</a></tt> (1; 2% instances), <tt><a href="fsl_stkautogramm-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fsl_stkautogramm-pos-ADJ.html">ADJ</a></tt> (1; 2% instances), <tt><a href="fsl_stkautogramm-pos-NUM.html">NUM</a></tt>-<tt><a href="fsl_stkautogramm-pos-ADV.html">ADV</a></tt> (1; 2% instances), <tt><a href="fsl_stkautogramm-pos-PRON.html">PRON</a></tt>-<tt><a href="fsl_stkautogramm-pos-INTJ.html">INTJ</a></tt> (1; 2% instances), <tt><a href="fsl_stkautogramm-pos-PROPN.html">PROPN</a></tt>-<tt><a href="fsl_stkautogramm-pos-INTJ.html">INTJ</a></tt> (1; 2% instances), <tt><a href="fsl_stkautogramm-pos-VERB.html">VERB</a></tt>-<tt><a href="fsl_stkautogramm-pos-ADJ.html">ADJ</a></tt> (1; 2% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 6 discourse	color:blue
1	PNT[MOI]	PNT	PRON	_	Number=Sing|PronType=Prs	2	nsubj	_	AlignBegin=57174|AlignEnd=57413|Gloss=PNT[ME]|Tgt=Prs1
2	[BARCELONE]	[BARCELONE]	PROPN	_	_	5	advcl	_	AlignBegin=57413|AlignEnd=57959|Gloss=[BARCELONA]|ISMarker[CTop]=Spatial|ISRole=CTop|Loc=PSS3l
3	[FRANCE]	[FRANCE]	PROPN	_	_	5	obl:mod	_	AlignBegin=57965|AlignEnd=58413|Gloss=[FRANCE]|Loc=PSSLr
4	[QUI]	[QUI]	PRON	_	PronType=Int	5	obl	_	AlignBegin=58419|AlignEnd=58721|Gloss=[WHO]|Loc=PSSLr
5	[ÉLÉCTION]	[ÉLÉCTION]	VERB	_	_	0	root	_	AlignBegin=58727|AlignEnd=59424|Gloss=[ELECTED]
6	[OUI]	[OUI]	INTJ	_	_	5	discourse	_	AlignBegin=59430|AlignEnd=59919|Gloss=[YES]|NMM=forward-tilt
7	[DRÔLE]	[DRÔLE]	ADJ	_	_	5	discourse	_	AlignBegin=59930|AlignEnd=60715|Gloss=[FUNNY]|NMM=eye-blink

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 5 discourse	color:blue
1	[BEAU]	[BEAU]	ADJ	_	_	4	amod	_	AlignBegin=164986|AlignEnd=165579|Gloss=[BEAUTIFUL]|NMM=head-nod
2	[JUSTE]	[JUSTE]	ADJ	_	_	4	amod	_	AlignBegin=165593|AlignEnd=166572|Gloss=[ACCURATE]|NMM=rightward-tilt
3	[BEAU]	[BEAU]	ADJ	_	_	4	amod	_	AlignBegin=166572|AlignEnd=167034|Gloss=[BEAUTIFUL]|NMM=eyebrow-raise
4	[VACANCES]	[VACANCES]	NOUN	_	_	0	root	_	AlignBegin=167069|AlignEnd=167572|Gloss=[HOLIDAYS]
5	[OUI]	[OUI]	ADV	_	_	4	discourse	_	AlignBegin=167600|AlignEnd=168186|Gloss=[YES]|NMM=eye-blink|TwoH=Yes

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 discourse	color:blue
1	[TITRE]	[TITRE]	NOUN	_	_	3	dislocated	_	AlignBegin=1104459|AlignEnd=1105139|Gloss=[TITLE]
2	[euh]	[euh]	INTJ	_	_	3	discourse	_	AlignBegin=1105139|AlignEnd=1105899|Gloss=~|NMM=eye-blink
3	[CHAMPIGNON]	[CHAMPIGNON]	NOUN	_	_	0	root	_	AlignBegin=1105899|AlignEnd=1106859|Gloss=[MUSHROOM]|NMM=forward-tilt
4	[SAUCE]	[SAUCE]	NOUN	_	_	3	nmod	_	AlignBegin=1106859|AlignEnd=1107459|Gloss=[SAUCE]|NMM=eye-blink
5	[S]-[O]-[J]-[A]	FingerSpelling	NOUN	_	_	4	nmod	_	AlignBegin=1107459|AlignEnd=1108859|Gloss=[SOY]|NMM=head-nod

~~~


