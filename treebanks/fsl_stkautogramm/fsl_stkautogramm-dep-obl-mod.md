---
layout: base
title:  'Statistics of obl:mod in UD_French_Sign_Language-STKAutogramm'
udver: '2'
---

## Treebank Statistics: UD_French_Sign_Language-STKAutogramm: Relations: `obl:mod`

This relation is a language-specific subtype of <tt><a href="fsl_stkautogramm-dep-obl.html">obl</a></tt>.
There are also 1 other language-specific subtypes of `obl`: <tt><a href="fsl_stkautogramm-dep-obl-arg.html">obl:arg</a></tt>.

21 nodes (3%) are attached to their parents as `obl:mod`.

13 instances of `obl:mod` (62%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.19047619047619.

The following 7 pairs of parts of speech are connected with `obl:mod`: <tt><a href="fsl_stkautogramm-pos-VERB.html">VERB</a></tt>-<tt><a href="fsl_stkautogramm-pos-NOUN.html">NOUN</a></tt> (7; 33% instances), <tt><a href="fsl_stkautogramm-pos-ADV.html">ADV</a></tt>-<tt><a href="fsl_stkautogramm-pos-NOUN.html">NOUN</a></tt> (6; 29% instances), <tt><a href="fsl_stkautogramm-pos-ADV.html">ADV</a></tt>-<tt><a href="fsl_stkautogramm-pos-PRON.html">PRON</a></tt> (2; 10% instances), <tt><a href="fsl_stkautogramm-pos-VERB.html">VERB</a></tt>-<tt><a href="fsl_stkautogramm-pos-PRON.html">PRON</a></tt> (2; 10% instances), <tt><a href="fsl_stkautogramm-pos-VERB.html">VERB</a></tt>-<tt><a href="fsl_stkautogramm-pos-PROPN.html">PROPN</a></tt> (2; 10% instances), <tt><a href="fsl_stkautogramm-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fsl_stkautogramm-pos-NOUN.html">NOUN</a></tt> (1; 5% instances), <tt><a href="fsl_stkautogramm-pos-ADV.html">ADV</a></tt>-<tt><a href="fsl_stkautogramm-pos-PROPN.html">PROPN</a></tt> (1; 5% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 3 obl:mod	color:blue
1	[voyager-en-AVION]	[AVION]	VERB	_	_	0	root	_	AlignBegin=33517|AlignEnd=34523|Gloss=[PLANE]|ISMarker[Foc]=Cxn-dbl+NMM|ISRole=Foc|NMM=eyebrow-raise
2	[PREMIER]	[PREMIER]	ADJ	_	_	3	amod	_	AlignBegin=34529|AlignEnd=34698|Gloss=[FIRST]
3	[FOIS]	[FOIS]	NOUN	_	_	1	obl:mod	_	AlignBegin=34698|AlignEnd=34953|Gloss=[TIME]
4	[GROUPE]	[GROUPE]	NOUN	_	_	1	nsubj	_	AlignBegin=34959|AlignEnd=35337|Gloss=[GROUP]
5	[AMI]	[AMI]	NOUN	_	_	4	compound	_	AlignBegin=35337|AlignEnd=35843|Gloss=[FRIEND]
6	[AVION]	[AVION]	NOUN	_	_	1	conj:dbl	_	AlignBegin=35855|AlignEnd=36744|Gloss=[PLANE]|NMM=eye-blink+head-nod

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 3 obl:mod	color:blue
1	[AUSSI]	[AUSSI]	ADV	_	_	5	cc	_	AlignBegin=134500|AlignEnd=134960|Gloss=[ALSO]|NMM=eye-blink
2	PNT[là-bas-en-bas]	PNT	ADV	_	_	3	advmod	_	AlignBegin=134960|AlignEnd=135278|Gloss=PNT[down-there]|Tgt=PSSN
3	[EAU]	[EAU]	NOUN	_	_	5	obl:mod	_	AlignBegin=135278|AlignEnd=136174|Gloss=[WATER]|NMM=forward-tilt+eyebrow-raise+eye-blink
4	[SABLE]	[SABLE]	NOUN	_	_	5	nsubj	_	AlignBegin=136187|AlignEnd=136816|Gloss=[SAND]
5	[non]	[non]	ADV	_	_	0	root	_	AlignBegin=136187|AlignEnd=136816|DHHeld=[SABLE]|Exp[lex]=Neg|Gloss=[no]|ISMarker[CFoc]=Cxn-corel+NMM|NDHHeld=[SABLE]|NMM=eyebrow-raise
6	[ROCHER]	[ROCHER]	NOUN	_	_	5	conj:contr	_	AlignBegin=137317|AlignEnd=138026|Gloss=[ROCK]|ISRole=CFoc|NMM=forward-tilt+eyebrow-rf
7	[rocher]	[rocher]	NOUN	_	_	6	conj:illustrate	_	AlignBegin=138035|AlignEnd=139774|Exp=Intensité|Gloss=[rock]|NMM=eye-blink

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 2 obl:mod	color:blue
1	[itinéraire]	[itinéraire]	NOUN	_	_	2	nmod	_	AlignBegin=24745|AlignEnd=25896|Exp=Intensité|Gloss=[itinerary]|NDH=[itinéraire-départ]
2	PNT[fin]	PNT	PRON	_	PronType=Prs	5	obl:mod	_	AlignBegin=25896|AlignEnd=26315|Gloss=PNT[end]|ISMarker[Top]=Dlxn+NMM|ISRole=Top|NDHHeld=[itinéraire-début]|NMM=eyebrow-raise|Tgt=itinéraire-fin
3	[UN]	[UN]	NUM	_	_	4	nummod	_	AlignBegin=26356|AlignEnd=26792|Gloss=[ONE]
4	[VILLE]	[VILLE]	NOUN	_	_	5	nsubj	_	AlignBegin=26810|AlignEnd=27264|Gloss=[CITY]
5	[NON]	[NON]	ADV	_	_	0	root	_	AlignBegin=27329|AlignEnd=27755|Exp[lex]=Neg|Gloss=[NO]
6	[TROIS]	[TROIS]	NUM	_	_	7	nummod	_	AlignBegin=27769|AlignEnd=28125|Gloss=[THREE]
7	[étape]	[étape]	NOUN	_	_	5	conj:contr	_	AlignBegin=28157|AlignEnd=28730|Gloss=[stop]|ISMarker[CFoc]=Cxn-corel|ISRole=CFoc|Loc=PSS3l
8	[étape]	[étape]	NOUN	_	_	5	conj	_	AlignBegin=28730|AlignEnd=29183|Gloss=[stop]|Loc=PSSN|NDHHeld=[étape]-PSS3l|Subj=PRF(DH)[ANIMÉ]
9	[étape]	[étape]	NOUN	_	_	5	conj	_	AlignBegin=29183|AlignEnd=29718|Gloss=[stop]|Loc=PSS3r|NDHHeld=[étape]-PSS3l|NMM=eye-blink+head-nod|Subj=PRF(DH)[ANIMÉ]
10	[voilà]	[voilà]	INTJ	_	_	5	discourse	_	AlignBegin=29843|AlignEnd=30477|Gloss=[that's-it]

~~~


