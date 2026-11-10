---
layout: base
title:  'Statistics of conj:reform in UD_French_Sign_Language-STKAutogramm'
udver: '2'
---

## Treebank Statistics: UD_French_Sign_Language-STKAutogramm: Relations: `conj:reform`

This relation is a language-specific subtype of <tt><a href="fsl_stkautogramm-dep-conj.html">conj</a></tt>.
There are also 5 other language-specific subtypes of `conj`: <tt><a href="fsl_stkautogramm-dep-conj-chaining.html">conj:chaining</a></tt>, <tt><a href="fsl_stkautogramm-dep-conj-contr.html">conj:contr</a></tt>, <tt><a href="fsl_stkautogramm-dep-conj-dbl.html">conj:dbl</a></tt>, <tt><a href="fsl_stkautogramm-dep-conj-illustrate.html">conj:illustrate</a></tt>, <tt><a href="fsl_stkautogramm-dep-conj-zoom.html">conj:zoom</a></tt>.

13 nodes (2%) are attached to their parents as `conj:reform`.

13 instances of `conj:reform` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.30769230769231.

The following 5 pairs of parts of speech are connected with `conj:reform`: <tt><a href="fsl_stkautogramm-pos-VERB.html">VERB</a></tt>-<tt><a href="fsl_stkautogramm-pos-VERB.html">VERB</a></tt> (7; 54% instances), <tt><a href="fsl_stkautogramm-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fsl_stkautogramm-pos-NOUN.html">NOUN</a></tt> (3; 23% instances), <tt><a href="fsl_stkautogramm-pos-ADV.html">ADV</a></tt>-<tt><a href="fsl_stkautogramm-pos-ADV.html">ADV</a></tt> (1; 8% instances), <tt><a href="fsl_stkautogramm-pos-NUM.html">NUM</a></tt>-<tt><a href="fsl_stkautogramm-pos-NUM.html">NUM</a></tt> (1; 8% instances), <tt><a href="fsl_stkautogramm-pos-PRON.html">PRON</a></tt>-<tt><a href="fsl_stkautogramm-pos-ADJ.html">ADJ</a></tt> (1; 8% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 3 conj:reform	color:blue
1	[OISEAU]	[OISEAU]	NOUN	_	_	2	nsubj	_	AlignBegin=51995|AlignEnd=52755|Gloss=[BIRD]
2	[s'envoler]	[s'envoler]	VERB	_	_	0	root	_	AlignBegin=52755|AlignEnd=53555|Gloss=[fly-away]|PT=oiseau|PTReal=deux-ailes|Subj=PT
3	[VOLER]	[VOLER]	VERB	_	_	2	conj:reform	_	AlignBegin=53555|AlignEnd=54155|Gloss=[FLY]|Subj=PRF[oiseau]|Tgt=PSSXr

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 3 conj:reform	color:blue
1	[LIGNE]	[LIGNE]	NOUN	_	_	5	obj	_	AlignBegin=19910|AlignEnd=20365|Gloss=[LINE]
2	[[CHIFFRE]]	[[CHIFFRE]]	NUM	_	_	1	nmod	_	AlignBegin=20377|AlignEnd=20615|Gloss=[[NUMBER]]|toBlur=Yes
3	[LIGNE]	[LIGNE]	NOUN	_	_	1	conj:reform	_	AlignBegin=20631|AlignEnd=21107|Gloss=[LINE]
4	[TRAM]	[TRAM]	NOUN	_	_	3	nmod	_	AlignBegin=21123|AlignEnd=21660|Gloss=[TRAM]
5	[MONTER-dans-véhicule]	[MONTER]	VERB	_	_	0	root	_	AlignBegin=21672|AlignEnd=22283|Gloss=[SIT-in-vehicule]|NMM=backward-tilt+eye-blink|Obj=ST|ST=tram|STReal=PRF(DH)[ANIMÉ]+PRF(NDH)[tram]|Subj=PRF(DH)[ANIMÉ]

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 7 conj:reform	color:blue
1	[hep]	[hep]	INTJ	_	_	8	discourse	_	AlignBegin=119352|AlignEnd=119626|Gloss=[hep]|NMM=eyebrow-raise|Trs=Left
2	PNT[MOI]	PNT	PRON	_	Number=Sing|PronType=Prs	8	discourse:participant	_	AlignBegin=119630|AlignEnd=120600|Gloss=PNT[ME]|NMM=rightward-tilt+eyebrow-raise|Tgt=Prs1
3	[hep]	[hep]	INTJ	_	_	8	discourse	_	AlignBegin=120604|AlignEnd=121200|Exp=Neg|Gloss=[hep]|NMM=eyebrow-rf
4	PNT[lieu2]-[non]	PNT	ADV	_	_	8	obj	_	AlignBegin=121200|AlignEnd=122265|Exp=Neg|Gloss=PNT[place2]-[no]|NMM=eye-blink|Src=PSS3l|Tgt=PSSN
5	PNT[lieu3]	PNT	ADV	_	_	4	conj:contr	_	AlignBegin=122274|AlignEnd=122826|Gloss=PNT[place3]|NDHHeld=PNT-PSS3l|NMM=eyebrow-raise|Src=PSSN|Tgt=PSS3r
6	[TROISIÈME]	[TROISIÈME]	ADJ	_	_	5	advcl	_	AlignBegin=122826|AlignEnd=123287|Gloss=[THIRD]
7	PNT[lieu3]	PNT	ADV	_	_	5	conj:reform	_	AlignBegin=123296|AlignEnd=123904|Gloss=PNT[place3]|NMM=head-nod+eye-blink|Tgt=PSS3r
8	[ADORER2]	[ADORER2]	VERB	_	_	0	root	_	AlignBegin=123913|AlignEnd=124939|Gloss=[ADORE2]|Reported=Yes

~~~


