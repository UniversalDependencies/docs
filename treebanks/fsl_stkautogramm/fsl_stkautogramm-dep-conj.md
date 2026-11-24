---
layout: base
title:  'Statistics of conj in UD_French_Sign_Language-STKAutogramm'
udver: '2'
---

## Treebank Statistics: UD_French_Sign_Language-STKAutogramm: Relations: `conj`

This relation is universal.
There are 6 language-specific subtypes of `conj`: <tt><a href="fsl_stkautogramm-dep-conj-chaining.html">conj:chaining</a></tt>, <tt><a href="fsl_stkautogramm-dep-conj-contr.html">conj:contr</a></tt>, <tt><a href="fsl_stkautogramm-dep-conj-dbl.html">conj:dbl</a></tt>, <tt><a href="fsl_stkautogramm-dep-conj-illustrate.html">conj:illustrate</a></tt>, <tt><a href="fsl_stkautogramm-dep-conj-reform.html">conj:reform</a></tt>, <tt><a href="fsl_stkautogramm-dep-conj-zoom.html">conj:zoom</a></tt>.

61 nodes (10%) are attached to their parents as `conj`.

61 instances of `conj` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.88524590163934.

The following 11 pairs of parts of speech are connected with `conj`: <tt><a href="fsl_stkautogramm-pos-VERB.html">VERB</a></tt>-<tt><a href="fsl_stkautogramm-pos-VERB.html">VERB</a></tt> (27; 44% instances), <tt><a href="fsl_stkautogramm-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fsl_stkautogramm-pos-NOUN.html">NOUN</a></tt> (17; 28% instances), <tt><a href="fsl_stkautogramm-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fsl_stkautogramm-pos-ADJ.html">ADJ</a></tt> (4; 7% instances), <tt><a href="fsl_stkautogramm-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fsl_stkautogramm-pos-ADJ.html">ADJ</a></tt> (3; 5% instances), <tt><a href="fsl_stkautogramm-pos-ADV.html">ADV</a></tt>-<tt><a href="fsl_stkautogramm-pos-ADV.html">ADV</a></tt> (2; 3% instances), <tt><a href="fsl_stkautogramm-pos-ADV.html">ADV</a></tt>-<tt><a href="fsl_stkautogramm-pos-NOUN.html">NOUN</a></tt> (2; 3% instances), <tt><a href="fsl_stkautogramm-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fsl_stkautogramm-pos-ADV.html">ADV</a></tt> (2; 3% instances), <tt><a href="fsl_stkautogramm-pos-ADV.html">ADV</a></tt>-<tt><a href="fsl_stkautogramm-pos-VERB.html">VERB</a></tt> (1; 2% instances), <tt><a href="fsl_stkautogramm-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fsl_stkautogramm-pos-INTJ.html">INTJ</a></tt> (1; 2% instances), <tt><a href="fsl_stkautogramm-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fsl_stkautogramm-pos-VERB.html">VERB</a></tt> (1; 2% instances), <tt><a href="fsl_stkautogramm-pos-VERB.html">VERB</a></tt>-<tt><a href="fsl_stkautogramm-pos-NOUN.html">NOUN</a></tt> (1; 2% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 3 conj	color:blue
1	[MOUILLER]	[MOUILLER]	VERB	_	_	0	root	_	AlignBegin=1142054|AlignEnd=1142374|Gloss=[WET]|NMM=leftward-tilt
2	[NON]	[NON]	ADV	_	_	1	advmod	_	AlignBegin=1142374|AlignEnd=1142859|Gloss=[NO]|ISMarker[CFoc]=Cxn-corel
3	[LAISSER]	[LAISSER]	VERB	_	_	1	conj	_	AlignBegin=1142859|AlignEnd=1143214|Gloss=[LET]|ISRole=Foc+CFoc
4	[SÉCHER]	[SÉCHER]	VERB	_	_	3	ccomp	_	AlignBegin=1143214|AlignEnd=1143659|Gloss=[DRY]|NMM=eyebrow-raise+head-nod
5	[LAISSER]	[LAISSER]	VERB	_	_	3	conj:dbl	_	AlignBegin=1143659|AlignEnd=1144339|Gloss=[LET]|ISMarker[Foc]=Cxn-dbl|NMM=head-nod+eye-blink
6	position-neutre	position-neutre	PUNCT	_	_	1	punct	_	AlignBegin=1144339|AlignEnd=1144859|Gloss=neutral-position

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 7 conj	color:blue
1	~	~	X	_	_	4	dep	_	AlignBegin=8407|AlignEnd=8802|Gloss=~|NMM=eye-blink|Scrap=Yes
2	[GROUPE]~	[GROUPE]	X	_	_	4	dep	_	AlignBegin=8808|AlignEnd=9355|Gloss=[GROUP]~|NMM=eye-blink|Scrap=Yes
3	~	~	X	_	_	4	dep	_	AlignBegin=9355|AlignEnd=9849|Gloss=~|Scrap=Yes
4	[ÉLÈVE]	[ÉLÈVE]	NOUN	_	_	5	nsubj	_	AlignBegin=9855|AlignEnd=10413|Gloss=[STUDENT]|NMM=eye-blink
5	[AMI]	[AMI]	NOUN	_	_	0	root	_	AlignBegin=10413|AlignEnd=10808|Gloss=[FRIEND]|NMM=eye-blink
6	~	~	X	_	_	7	dep	_	AlignBegin=10808|AlignEnd=11070|Gloss=~|Scrap=Yes
7	[LIEN]	[LIEN]	NOUN	_	_	5	conj	_	AlignBegin=11081|AlignEnd=11744|Gloss=[LINK]|NMM=eyebrow-frown+forward-tilt
8	[FORT]	[FORT]	ADV	_	_	7	advmod	_	AlignBegin=11744|AlignEnd=12221|Gloss=[STRONG]|NMM=eye-blink

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 conj	color:blue
1	[BON]	[BON]	ADJ	_	_	0	root	_	AlignBegin=1183809|AlignEnd=1184229|Gloss=[GOOD]|NMM=eyebrow-raise
2	[DÉLICIEUX]	[DÉLICIEUX]	ADJ	_	_	1	conj	_	AlignBegin=1184229|AlignEnd=1184619|Gloss=[DELICIOUS]

~~~


