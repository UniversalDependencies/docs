---
layout: base
title:  'Statistics of conj:dbl in UD_French_Sign_Language-STKAutogramm'
udver: '2'
---

## Treebank Statistics: UD_French_Sign_Language-STKAutogramm: Relations: `conj:dbl`

This relation is a language-specific subtype of <tt><a href="fsl_stkautogramm-dep-conj.html">conj</a></tt>.
There are also 5 other language-specific subtypes of `conj`: <tt><a href="fsl_stkautogramm-dep-conj-chaining.html">conj:chaining</a></tt>, <tt><a href="fsl_stkautogramm-dep-conj-contr.html">conj:contr</a></tt>, <tt><a href="fsl_stkautogramm-dep-conj-illustrate.html">conj:illustrate</a></tt>, <tt><a href="fsl_stkautogramm-dep-conj-reform.html">conj:reform</a></tt>, <tt><a href="fsl_stkautogramm-dep-conj-zoom.html">conj:zoom</a></tt>.

17 nodes (3%) are attached to their parents as `conj:dbl`.

17 instances of `conj:dbl` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.52941176470588.

The following 6 pairs of parts of speech are connected with `conj:dbl`: <tt><a href="fsl_stkautogramm-pos-VERB.html">VERB</a></tt>-<tt><a href="fsl_stkautogramm-pos-VERB.html">VERB</a></tt> (7; 41% instances), <tt><a href="fsl_stkautogramm-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fsl_stkautogramm-pos-NOUN.html">NOUN</a></tt> (4; 24% instances), <tt><a href="fsl_stkautogramm-pos-ADV.html">ADV</a></tt>-<tt><a href="fsl_stkautogramm-pos-ADV.html">ADV</a></tt> (2; 12% instances), <tt><a href="fsl_stkautogramm-pos-PRON.html">PRON</a></tt>-<tt><a href="fsl_stkautogramm-pos-PRON.html">PRON</a></tt> (2; 12% instances), <tt><a href="fsl_stkautogramm-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fsl_stkautogramm-pos-ADJ.html">ADJ</a></tt> (1; 6% instances), <tt><a href="fsl_stkautogramm-pos-VERB.html">VERB</a></tt>-<tt><a href="fsl_stkautogramm-pos-NOUN.html">NOUN</a></tt> (1; 6% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 5 conj:dbl	color:blue
1	[MOUILLER]	[MOUILLER]	VERB	_	_	0	root	_	AlignBegin=1142054|AlignEnd=1142374|Gloss=[WET]|NMM=leftward-tilt
2	[NON]	[NON]	ADV	_	_	1	advmod	_	AlignBegin=1142374|AlignEnd=1142859|Gloss=[NO]|ISMarker[CFoc]=Cxn-corel
3	[LAISSER]	[LAISSER]	VERB	_	_	1	conj	_	AlignBegin=1142859|AlignEnd=1143214|Gloss=[LET]|ISRole=Foc+CFoc
4	[SÉCHER]	[SÉCHER]	VERB	_	_	3	ccomp	_	AlignBegin=1143214|AlignEnd=1143659|Gloss=[DRY]|NMM=eyebrow-raise+head-nod
5	[LAISSER]	[LAISSER]	VERB	_	_	3	conj:dbl	_	AlignBegin=1143659|AlignEnd=1144339|Gloss=[LET]|ISMarker[Foc]=Cxn-dbl|NMM=head-nod+eye-blink
6	position-neutre	position-neutre	PUNCT	_	_	1	punct	_	AlignBegin=1144339|AlignEnd=1144859|Gloss=neutral-position

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 5 conj:dbl	color:blue
1	[ENVIRON]	[ENVIRON]	ADV	_	_	3	discourse	_	AlignBegin=48661|AlignEnd=49213|Gloss=[APPROXIMATELY]
2	[TRENTE]	[TRENTE]	NUM	_	_	3	nummod	_	AlignBegin=49213|AlignEnd=49535|Gloss=[THIRTY]
3	[MINUTE]	[MINUTE]	NOUN	_	_	0	root	_	AlignBegin=49551|AlignEnd=50157|Gloss=[MINUTE]
4	[QUARANTE]	[QUARANTE]	NUM	_	_	5	nummod	_	AlignBegin=50165|AlignEnd=50425|Gloss=[FOURTY]
5	[MINUTE]	[MINUTE]	NOUN	_	_	3	conj:dbl	_	AlignBegin=50441|AlignEnd=50913|Gloss=[MINUTE]
6	[ENVIRON]	[ENVIRON]	ADV	_	_	3	discourse	_	AlignBegin=50937|AlignEnd=51362|Gloss=[APPROXIMATELY]

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 8 conj:dbl	color:blue
1	PNT[TOI]	PNT	PRON	_	Number=Sing|PronType=Prs	2	nmod	_	AlignBegin=3863|AlignEnd=4401|Gloss=PNT[YOU]|Tgt=Prs2
2	[MAISON]	[MAISON]	NOUN	_	_	7	dislocated	_	AlignBegin=4410|AlignEnd=5014|Gloss=[HOUSE]
3	PNT[TOI]	PNT	PRON	_	PronType=Prs	2	nmod	_	AlignBegin=5014|AlignEnd=5297|Gloss=PNT[YOU]|Tgt=Prs2
4	POSS[TOI]	POSS	ADJ	_	_	3	conj:reform	_	AlignBegin=5307|AlignEnd=5726|Gloss=POSS[YOU]|Tgt=Prs2
5	[JUSQUE]	[JUSQUE]	ADP	_	_	6	case	_	AlignBegin=5745|AlignEnd=6245|Gloss=[UNTIL]
6	PNT[là]	PNT	ADV	_	_	7	obl:arg	_	AlignBegin=6255|AlignEnd=6481|Gloss=PNT[here]|Tgt=PSSN
7	[ARRIVER]	[ARRIVER]	VERB	_	_	0	root	_	AlignBegin=6491|AlignEnd=7217|Gloss=[ARRIVE]
8	PNT[là]	PNT	ADV	_	_	6	conj:dbl	_	AlignBegin=7226|AlignEnd=7698|Gloss=PNT[here]|Tgt=PSSN
9	[[LIEU]]	[[LIEU]]	PROPN	_	_	8	appos	_	AlignBegin=7717|AlignEnd=8090|Gloss=[[PLACE]]|toBlur=Yes
10	[COMMENT]	[COMMENT]	PRON	_	PronType=Int	11	obl:mod	_	AlignBegin=8241|AlignEnd=8750|Gloss=[HOW]
11	[FAIRE]	[FAIRE]	VERB	_	_	7	appos	_	AlignBegin=8764|AlignEnd=9075|Gloss=[DO]

~~~


