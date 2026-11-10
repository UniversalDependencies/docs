---
layout: base
title:  'Statistics of nmod:poss in UD_Negidal-GDUD'
udver: '2'
---

## Treebank Statistics: UD_Negidal-GDUD: Relations: `nmod:poss`

This relation is a language-specific subtype of <tt><a href="neg_gdud-dep-nmod.html">nmod</a></tt>.

14 nodes (5%) are attached to their parents as `nmod:poss`.

12 instances of `nmod:poss` (86%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.42857142857143.

The following 3 pairs of parts of speech are connected with `nmod:poss`: <tt><a href="neg_gdud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="neg_gdud-pos-NOUN.html">NOUN</a></tt> (9; 64% instances), <tt><a href="neg_gdud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="neg_gdud-pos-PRON.html">PRON</a></tt> (4; 29% instances), <tt><a href="neg_gdud-pos-VERB.html">VERB</a></tt>-<tt><a href="neg_gdud-pos-NOUN.html">NOUN</a></tt> (1; 7% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 nmod:poss	color:blue
1	naj	naj	NOUN	_	_	2	nmod:poss	_	Gloss=person
2	dili-ni	dili	NOUN	_	Number[psor]=Sing|Person[psor]=3	0	root	_	Gloss=head-PX.3SG

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 nmod:poss	color:blue
1	bi	bi	PRON	_	Number=Sing|Person=1|PronType=Prs	2	nmod:poss	_	Gloss=1SG
2	suːn-mə-β	suːn	NOUN	_	Case=Acc|Number=Sing|Person=1|Poss=Yes	3	obj	_	Gloss=coat-ACC-PX.1SG
3	təti-βka-kəl	təti	VERB	_	Mood=Imp|Voice=Cau	4	xcomp	_	Gloss=dress-CAUS-IMP
4	gun-ə-n	gun	VERB	_	Number=Sing|Person=3|Tense=Pres	0	root	_	Gloss=say-NFUT-3SG

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 3 nmod:poss	color:blue
1	ʧepu-βkan-na-ji-du-j	ʧepu	VERB	_	VerbForm=Part	2	advcl	_	_
2	itʧe-je-n	itʧe	VERB	_	Number=Sing|Person=3|Tense=Pres	0	root	_	_
3	beja-ŋi-n	beja	NOUN	_	Number=Sing	6	nmod:poss	_	PossOrig=3
4	bad-gida-li-n	bad	NOUN	_	Number=Sing	6	obl	_	Case=Prol
5	solaki	solaki	NOUN	_	_	6	nsubj	_	_
6	nonan-duki-n	nonan	VERB	_	Case=Abl|Number=Sing|Person=3	2	xcomp	_	_
7	seːŋa-ja-n	seːŋa	VERB	_	Number=Sing|Person=3|Tense=Pres	6	conj	_	_

~~~


