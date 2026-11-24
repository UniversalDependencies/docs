---
layout: base
title:  'Statistics of obl:arg in UD_French_Sign_Language-STKAutogramm'
udver: '2'
---

## Treebank Statistics: UD_French_Sign_Language-STKAutogramm: Relations: `obl:arg`

This relation is a language-specific subtype of <tt><a href="fsl_stkautogramm-dep-obl.html">obl</a></tt>.
There are also 1 other language-specific subtypes of `obl`: <tt><a href="fsl_stkautogramm-dep-obl-mod.html">obl:mod</a></tt>.

12 nodes (2%) are attached to their parents as `obl:arg`.

11 instances of `obl:arg` (92%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.33333333333333.

The following 4 pairs of parts of speech are connected with `obl:arg`: <tt><a href="fsl_stkautogramm-pos-VERB.html">VERB</a></tt>-<tt><a href="fsl_stkautogramm-pos-NOUN.html">NOUN</a></tt> (6; 50% instances), <tt><a href="fsl_stkautogramm-pos-VERB.html">VERB</a></tt>-<tt><a href="fsl_stkautogramm-pos-PROPN.html">PROPN</a></tt> (4; 33% instances), <tt><a href="fsl_stkautogramm-pos-VERB.html">VERB</a></tt>-<tt><a href="fsl_stkautogramm-pos-ADJ.html">ADJ</a></tt> (1; 8% instances), <tt><a href="fsl_stkautogramm-pos-VERB.html">VERB</a></tt>-<tt><a href="fsl_stkautogramm-pos-ADV.html">ADV</a></tt> (1; 8% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 4 obl:arg	color:blue
1	[VENIR-DE]	[VENIR-DE]	VERB	_	_	0	root	_	AlignBegin=1108859|AlignEnd=1109259|Gloss=[COME-FROM]|NMM=rightward-tilt+eyebrow-raise|Tgt=PSS3l
2	[RECETTE]	[RECETTE]	NOUN	_	_	1	dislocated	_	AlignBegin=1109259|AlignEnd=1109579|Gloss=[RECIPE]|Loc=PSS3l
3	[VIÊT-NAM]~	[VIÊT-NAM]	PROPN	_	_	5	reparandum	_	AlignBegin=1109579|AlignEnd=1109659|Gloss=[VIÊT-NAM]~|Scrap=Yes
4	[MONTAGNE]	[MONTAGNE]	NOUN	_	_	1	obl:arg	_	AlignBegin=1109659|Gloss=[MOUNTAIN]
5	[VIÊT-NAM]	[VIÊT-NAM]	PROPN	_	_	4	nmod	_	AlignEnd=1110584|Gloss=[VIÊT-NAM]
6	POSS[LUI]	POSS	ADJ	_	_	5	amod	_	AlignBegin=1110584|AlignEnd=1112109|Gloss=POSS[IT]|NMM=rightward-tilt+head-nod+eye-blink|Tgt=PSS3l

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 3 obl:arg	color:blue
1	[JUSQUE]	[JUSQUE]	ADV	_	_	2	advmod	_	AlignBegin=43772|AlignEnd=44449|Gloss=[UNTIL]|NMM=head-shake
2	[DESCENDRE]	[DESCENDRE]	VERB	_	_	0	root	_	AlignBegin=44465|AlignEnd=44780|Gloss=[GET-OUT]
3	[[LIEU]]	[[LIEU]]	PROPN	_	_	2	obl:arg	_	AlignBegin=44787|AlignEnd=45591|Gloss=[[PLACE]]|toBlur=Yes
4	[voilà]	[voilà]	INTJ	_	_	2	discourse	_	AlignBegin=45630|AlignEnd=46213|Gloss=[well]

~~~


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 11 obl:arg	color:blue
1	[COMMENCER]	[COMMENCER]	VERB	_	_	0	root	_	AlignBegin=1136139|AlignEnd=1136579|Gloss=[START]
2	[COMMENT]	[COMMENT]	PRON	_	PronType=Int	3	obl:mod	_	AlignBegin=1136579|AlignEnd=1136739|Gloss=[HOW]|ISMarker[Foc]=Cxn-fq|NMM=eye-blink
3	[IL-FAUT]	[IL-FAUT]	VERB	_	_	1	ccomp	_	AlignBegin=1136739|AlignEnd=1136899|Gloss=[MUST]|ISRole=Foc|NMM=forward-tilt
4	[LAVER]	[LAVER]	VERB	_	_	3	ccomp	_	AlignBegin=1136899|AlignEnd=1137299|Gloss=[WASH]
5	[PREMIER]~	[PREMIER]	ADJ	_	_	3	advcl	_	AlignBegin=1137299|AlignEnd=1137424|Gloss=[FIRST]~|Scrap=Yes
6	[CHAMPIGNON]	[CHAMPIGNON]	NOUN	_	_	4	obj	_	AlignBegin=1137424|AlignEnd=1137939|Gloss=[MUSHROOM]|NMM=forward-tilt
7	[LAVER]	[LAVER]	VERB	_	_	4	conj:reform	_	AlignBegin=1137939|AlignEnd=1139019|Exp=Intensité|Gloss=[WASH]|NMM=eyebrow-frown+eye-blink
8	[COUPER-en-morceaux]	[COUPER]	VERB	_	_	4	conj	_	AlignBegin=1139019|AlignEnd=1139579|Gloss=[CUT-in-pieces]|Instr=PRF(DH)[lame]|Loc=PSS3l|Manner=en-morceaux|NMM=eyebrow-frown+eye-blink|PT=tu-générique
9	[DÉPLACER]	[DÉPLACER]	VERB	_	_	4	conj	_	AlignBegin=1139579|AlignEnd=1140219|Gloss=[MOVE]|NMM=eyebrow-raise|Obj=Src|Obl=Tgt|Src=PSS3l|Tgt=PSS3r
10	SST[forme-plate]~	SST	ADJ	_	_	11	reparandum	_	AlignBegin=1140219|AlignEnd=1140579|Gloss=SST[flat-shape]~|Loc=PSS3r|Scrap=Yes
11	SST[forme-ronde]	SST	ADJ	_	_	9	obl:arg	_	AlignBegin=1140579|AlignEnd=1141184|Gloss=SST[round-shape]|NMM=eye-contact
12	[s'égoutter]	[s'égoutter]	VERB	_	_	4	conj	_	AlignBegin=1141184|AlignEnd=1141754|Gloss=[DRAIN]
13	??[IL-FAUT]~	[IL-FAUT]	VERB	_	_	3	conj:reform	_	AlignBegin=1141754|AlignEnd=1142054|Gloss=[MUST]~

~~~


