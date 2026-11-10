---
layout: base
title:  'Statistics of amod in UD_French_Sign_Language-STKAutogramm'
udver: '2'
---

## Treebank Statistics: UD_French_Sign_Language-STKAutogramm: Relations: `amod`

This relation is universal.

25 nodes (4%) are attached to their parents as `amod`.

14 instances of `amod` (56%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.36.

The following 4 pairs of parts of speech are connected with `amod`: <tt><a href="fsl_stkautogramm-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fsl_stkautogramm-pos-ADJ.html">ADJ</a></tt> (22; 88% instances), <tt><a href="fsl_stkautogramm-pos-ADV.html">ADV</a></tt>-<tt><a href="fsl_stkautogramm-pos-ADJ.html">ADJ</a></tt> (1; 4% instances), <tt><a href="fsl_stkautogramm-pos-PRON.html">PRON</a></tt>-<tt><a href="fsl_stkautogramm-pos-ADJ.html">ADJ</a></tt> (1; 4% instances), <tt><a href="fsl_stkautogramm-pos-PROPN.html">PROPN</a></tt>-<tt><a href="fsl_stkautogramm-pos-ADJ.html">ADJ</a></tt> (1; 4% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 amod	color:blue
1	[EAU]	[EAU]	NOUN	_	_	0	root	_	AlignBegin=111722|AlignEnd=111857|Gloss=[WATER]
2	[FROID]	[FROID]	ADJ	_	_	1	amod	_	AlignBegin=111857|AlignEnd=113357|Gloss=[COLD]|NMM=forward-tilt

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 9 amod	color:blue
1	[hep]	[hep]	VERB	_	_	6	discourse	_	AlignBegin=49639|AlignEnd=49958|Gloss=[hep]|NMM=eyebrow-raise+backward-tilt
2	PNT[MOI]	PNT	PRON	_	Number=Sing|PronType=Prs	6	discourse:participant	_	AlignBegin=49968|AlignEnd=50194|Gloss=PNT[ME]|NMM=rightward-tilt+eyebrow-raise|Tgt=Prs1
3	[SOEUR]	[SOEUR]	NOUN	_	_	2	appos	_	AlignBegin=50213|AlignEnd=51120|Gloss=[SISTER]|NMM=eyebrow-raise
4	[hep]	[hep]	VERB	_	_	6	discourse	_	AlignBegin=51153|AlignEnd=51532|Gloss=[hep]|NMM=eye-blink
5	PNT[MOI]	PNT	PRON	_	Number=Sing|PronType=Prs	6	nsubj	_	AlignBegin=51542|AlignEnd=51931|Gloss=PNT[ME]|Tgt=Prs1
6	[ADMIRER]	[ADMIRER]	VERB	_	_	0	root	_	AlignBegin=51954|AlignEnd=52741|Gloss=[ADMIRE]|Reported=Yes
7	[ADORER]	[ADORER]	VERB	_	_	6	compound:svc	_	AlignBegin=52759|AlignEnd=53685|Gloss=[ADORE]
8	PNT[lieu1]	PNT	ADV	_	_	7	obj	_	AlignBegin=53694|AlignEnd=54269|Gloss=PNT[place1]|NMM=backward-tilt|Tgt=PSS3l|TwoH=Yes
9	[PREMIER]	[PREMIER]	ADJ	_	_	8	amod	_	AlignBegin=54296|AlignEnd=54597|Gloss=[FIRST]|NDHHeld=PNT-PSS3l
10	PNT[lieu1]	PNT	ADV	_	_	8	conj:dbl	_	AlignBegin=54616|AlignEnd=55431|Gloss=PNT[place1]|NDHHeld=PNT-PSS3l|NMM=head-nod+eye-blink|Tgt=PSS3l|TwoH=Yes
11	[POURQUOI]	[POURQUOI]	PRON	_	PronType=Int	12	obl:mod	_	AlignBegin=55769|AlignEnd=56648|Gloss=[WHY]|ISMarker[Foc]=Cxn-fq|NDHHeld=PNT-PSS3l
12	PNT[lieu1]	PNT	ADV	_	_	7	advmod	_	AlignBegin=56694|AlignEnd=57898|Gloss=PNT[place1]|ISRole=Foc|NDHHeld=PNT-PSS3l|NMM=eyebrow-raise+eye-blink|Tgt=PSS3l|TwoH=Yes
13	[LÀ]	[LÀ]	ADV	_	_	12	advmod	_	AlignBegin=57931|AlignEnd=58190|Gloss=[THERE]|NDHHeld=PNT-PSS3l|NMM=eyebrow-raise
14	[QUOI]	[QUOI]	PRON	_	PronType=Int	15	nmod	_	AlignBegin=58213|AlignEnd=58852|Focus=Yes|Gloss=[WHAT]|ISMarker[Foc]=Cxn-fq|NMM=eye-blink
15	[MER]	[MER]	NOUN	_	_	12	obl:mod	_	AlignBegin=58870|AlignEnd=59935|Gloss=[SEA]|ISRole=Foc|NMM=backward-tilt
16	[PLAGE]	[PLAGE]	NOUN	_	_	15	conj	_	AlignBegin=59977|AlignEnd=60991|Gloss=[BEACH]
17	[SABLE]	[SABLE]	NOUN	_	_	15	conj	_	AlignBegin=61023|AlignEnd=61912|Gloss=[SAND]
18	[FIN]	[FIN]	ADJ	_	_	17	amod	_	AlignBegin=61949|AlignEnd=62815|Gloss=[FINE]
19	[PLAGE]	[PLAGE]	NOUN	_	_	15	conj	_	AlignBegin=62835|AlignEnd=63304|Gloss=[BEACH]|NMM=head-nod+eye-blink
20	[PERSONNE]	[PERSONNE]	NOUN	_	Number=Plur	15	conj	_	AlignBegin=63316|AlignEnd=63899|Gloss=[PERSON]
21	[FOULE]	[FOULE]	NOUN	_	_	15	conj	_	AlignBegin=63987|AlignEnd=66937|Exp[lex]=Intensité|Gloss=[CROWD]
22	[FOULE-qui-grouille]	[FOULE]	VERB	_	_	21	conj:illustrate	_	AlignBegin=63987|AlignEnd=66937|Exp[lex]=Intensité|Gloss=[teem]|NMM=head-nod+eye-blink|ST=foule-qui-grouille

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 amod	color:blue
1	[voilà]	[voilà]	INTJ	_	_	3	discourse	_	AlignBegin=46087|AlignEnd=46543|Gloss=[that's-it]
2	[TOTAL]	[TOTAL]	ADJ	_	_	3	amod	_	AlignBegin=46575|AlignEnd=47472|Gloss=[TOTAL]
3	??[COMBIEN]	[COMBIEN]	PRON	_	PronType=Int	0	root	_	AlignBegin=47480|AlignEnd=47724|Gloss=??[HOW-MUCH]
4	??[TEMPS]	[TEMPS]	NOUN	_	_	3	nmod	_	AlignBegin=47732|AlignEnd=48071|Gloss=??[TIME]
5	PNT[TOI]	PNT	PRON	_	Number=Sing|PronType=Prs	3	nsubj	_	AlignBegin=48079|AlignEnd=48646|Gloss=PNT[YOU]|Tgt=Prs2

~~~


