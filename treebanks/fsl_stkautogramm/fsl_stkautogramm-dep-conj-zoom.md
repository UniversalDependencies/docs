---
layout: base
title:  'Statistics of conj:zoom in UD_French_Sign_Language-STKAutogramm'
udver: '2'
---

## Treebank Statistics: UD_French_Sign_Language-STKAutogramm: Relations: `conj:zoom`

This relation is a language-specific subtype of <tt><a href="fsl_stkautogramm-dep-conj.html">conj</a></tt>.
There are also 5 other language-specific subtypes of `conj`: <tt><a href="fsl_stkautogramm-dep-conj-chaining.html">conj:chaining</a></tt>, <tt><a href="fsl_stkautogramm-dep-conj-contr.html">conj:contr</a></tt>, <tt><a href="fsl_stkautogramm-dep-conj-dbl.html">conj:dbl</a></tt>, <tt><a href="fsl_stkautogramm-dep-conj-illustrate.html">conj:illustrate</a></tt>, <tt><a href="fsl_stkautogramm-dep-conj-reform.html">conj:reform</a></tt>.

6 nodes (1%) are attached to their parents as `conj:zoom`.

6 instances of `conj:zoom` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.5.

The following 4 pairs of parts of speech are connected with `conj:zoom`: <tt><a href="fsl_stkautogramm-pos-ADV.html">ADV</a></tt>-<tt><a href="fsl_stkautogramm-pos-NOUN.html">NOUN</a></tt> (3; 50% instances), <tt><a href="fsl_stkautogramm-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fsl_stkautogramm-pos-NOUN.html">NOUN</a></tt> (1; 17% instances), <tt><a href="fsl_stkautogramm-pos-NUM.html">NUM</a></tt>-<tt><a href="fsl_stkautogramm-pos-PROPN.html">PROPN</a></tt> (1; 17% instances), <tt><a href="fsl_stkautogramm-pos-PROPN.html">PROPN</a></tt>-<tt><a href="fsl_stkautogramm-pos-PROPN.html">PROPN</a></tt> (1; 17% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 3 conj:zoom	color:blue
1	[APRÈS]	[APRÈS]	ADV	_	_	2	reparandum	_	AlignBegin=79942|AlignEnd=80372|Gloss=[AFTER]
2	[APRÈS]	[APRÈS]	ADV	_	_	5	advmod	_	AlignBegin=81233|AlignEnd=81680|Gloss=[AFTER]
3	[[CHIFFRE]]	[[CHIFFRE]]	NOUN	_	_	2	conj:zoom	_	AlignBegin=81715|AlignEnd=82349|Gloss=[[NUMBER]]|toBlur=Yes
4	[MOINS]	[MOINS]	ADV	_	_	5	advmod	_	AlignBegin=82355|AlignEnd=82936|Gloss=[LESS]
5	[SOUVENIR]	[SOUVENIR]	NOUN	_	_	0	root	_	AlignBegin=82965|AlignEnd=83256|Gloss=[MEMORY]
6	[[CHIFFRE]]	[[CHIFFRE]]	NOUN	_	_	7	nsubj	_	AlignBegin=83256|AlignEnd=83674|Gloss=[[NUMBER]]|NMM=eye-blink+backward-tilt|toBlur=Yes
7	[PARFAIT]	[PARFAIT]	ADJ	_	_	5	conj	_	AlignBegin=83703|AlignEnd=84384|Gloss=[PERFECT]

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 6 conj:zoom	color:blue
1	[ENSUITE]	[ENSUITE]	ADV	_	_	10	discourse	_	AlignBegin=21988|AlignEnd=22686|Gloss=[THEN]
2	[PI_TEMPORALITE]	[PI_TEMPORALITE]	ADP	_	_	3	case	_	AlignBegin=22703|AlignEnd=23547|Gloss=[PI_TEMPORALITY]
3	[ÉTÉ]	[ÉTÉ]	NOUN	_	_	10	obl:mod	_	AlignBegin=23558|AlignEnd=24192|Gloss=[SUMMER]|NMM=eye-contact
4	[euh]	[euh]	INTJ	_	_	5	discourse	_	AlignBegin=24215|AlignEnd=24744|Gloss=[hesitation]
5	[ENVIRON]	[ENVIRON]	ADV	_	_	6	advmod	_	AlignBegin=24762|AlignEnd=25849|Gloss=[APPROXIMATELY]
6	[MAI]	[MAI]	NOUN	_	_	3	conj:zoom	_	AlignBegin=25855|AlignEnd=26407|Gloss=[MAY]|NMM=leftward-tilt
7	[AVRIL]	[AVRIL]	NOUN	_	_	3	conj	_	AlignBegin=26407|AlignEnd=27087|Gloss=[APRIL]
8	[JUIN]	[JUIN]	NOUN	_	_	3	conj	_	AlignBegin=27099|AlignEnd=27442|Gloss=[JUNE]
9	[PÉRIODE]	[PÉRIODE]	NOUN	_	_	3	conj	_	AlignBegin=27453|AlignEnd=28087|Gloss=[PERIOD]|NMM=eye-contact+head-shake
10	[PARTIR]	[PARTIR]	VERB	_	_	0	root	_	AlignBegin=28105|AlignEnd=28948|Gloss=[LEAVE]|ISMarker[Foc]=Cxn-dbl+NMM|ISRole=Foc|NMM=eyebrow-raise+eye-contact
11	[GROUPE]~	[GROUPE]	NOUN	_	_	13	reparandum	_	AlignBegin=28959|AlignEnd=29285|Gloss=[GROUP]~|Scrap=Yes
12	[INTERNAT]	[INTERNAT]	NOUN	_	_	13	nmod	_	AlignBegin=29285|AlignEnd=29581|Gloss=[BOARDING-SCHOOL]
13	[GROUPE]	[GROUPE]	NOUN	_	_	10	nsubj	_	AlignBegin=29587|AlignEnd=30401|Gloss=[GROUP]|NMM=forward-tilt
14	[[CHIFFRE]]	[[CHIFFRE]]	NUM	_	_	15	nummod	_	AlignBegin=30651|AlignEnd=30872|Gloss=[[NUMBER]]|toBlur=Yes
15	[ÉTAGE]	[ÉTAGE]	NOUN	_	_	16	nmod	_	AlignBegin=30884|AlignEnd=31343|Gloss=[FLOOR]|NMM=eye-blink+head-nod
16	[GROUPE]	[GROUPE]	NOUN	_	_	13	conj:reform	_	AlignBegin=31355|AlignEnd=31791|Gloss=[GROUP]|NMM=head-nod
17	[PARTIR]	[PARTIR]	VERB	_	_	10	conj:reform	_	AlignBegin=31802|AlignEnd=32145|Gloss=[LEAVE]
18	[ESPAGNE]	[ESPAGNE]	PROPN	_	_	17	obl:arg	_	AlignBegin=32145|AlignEnd=32744|Gloss=[SPAIN]
19	[BARCELONE]	[BARCELONE]	PROPN	_	_	18	conj:zoom	_	AlignBegin=32756|AlignEnd=33512|Gloss=[BARCELONA]|NMM=head-nod

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 3 conj:zoom	color:blue
1	[[NUMÉRO-DÉPARTEMENT]]	[[NUMÉRO-DÉPARTEMENT]]	NUM	_	_	0	root	_	AlignBegin=14311|AlignEnd=14807|Gloss=[[DEPARTEMENT-NUMBER]]|toBlur=Yes
2	[[NUMÉRO-DÉPARTEMENT]]	[[NUMÉRO-DÉPARTEMENT]]	NUM	_	_	1	flat	_	AlignBegin=14816|AlignEnd=15250|Gloss=[[DEPARTEMENT-NUMBER]]|toBlur=Yes
3	[[LIEU]]	FingerSpelling	PROPN	_	_	1	conj:zoom	_	AlignBegin=15259|AlignEnd=15774|Gloss=[[PLACE]]|Scrap=Yes|toBlur=Yes
4	[[NUMÉRO-DÉPARTEMENT]]	[[NUMÉRO-DÉPARTEMENT]]	NUM	_	_	1	conj:reform	_	AlignBegin=15783|AlignEnd=16160|Gloss=[[DEPARTEMENT-NUMBER]]|toBlur=Yes
5	[[NUMÉRO-DÉPARTEMENT]]	[[NUMÉRO-DÉPARTEMENT]]	NUM	_	_	4	flat	_	AlignBegin=16160|AlignEnd=16481|Gloss=[[DEPARTEMENT-NUMBER]]|NMM=head-nod+eye-blink|toBlur=Yes

~~~


