---
layout: base
title:  'Statistics of conj:chaining in UD_French_Sign_Language-STKAutogramm'
udver: '2'
---

## Treebank Statistics: UD_French_Sign_Language-STKAutogramm: Relations: `conj:chaining`

This relation is a language-specific subtype of <tt><a href="fsl_stkautogramm-dep-conj.html">conj</a></tt>.
There are also 5 other language-specific subtypes of `conj`: <tt><a href="fsl_stkautogramm-dep-conj-contr.html">conj:contr</a></tt>, <tt><a href="fsl_stkautogramm-dep-conj-dbl.html">conj:dbl</a></tt>, <tt><a href="fsl_stkautogramm-dep-conj-illustrate.html">conj:illustrate</a></tt>, <tt><a href="fsl_stkautogramm-dep-conj-reform.html">conj:reform</a></tt>, <tt><a href="fsl_stkautogramm-dep-conj-zoom.html">conj:zoom</a></tt>.

21 nodes (3%) are attached to their parents as `conj:chaining`.

21 instances of `conj:chaining` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.19047619047619.

The following 4 pairs of parts of speech are connected with `conj:chaining`: <tt><a href="fsl_stkautogramm-pos-VERB.html">VERB</a></tt>-<tt><a href="fsl_stkautogramm-pos-VERB.html">VERB</a></tt> (15; 71% instances), <tt><a href="fsl_stkautogramm-pos-VERB.html">VERB</a></tt>-<tt><a href="fsl_stkautogramm-pos-NOUN.html">NOUN</a></tt> (3; 14% instances), <tt><a href="fsl_stkautogramm-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fsl_stkautogramm-pos-VERB.html">VERB</a></tt> (2; 10% instances), <tt><a href="fsl_stkautogramm-pos-VERB.html">VERB</a></tt>-<tt><a href="fsl_stkautogramm-pos-ADJ.html">ADJ</a></tt> (1; 5% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 conj:chaining	color:blue
1	[estimer]	[estimer]	VERB	_	_	0	root	_	AlignBegin=40755|AlignEnd=43595|Gloss=[evaluate]|PT=cheval|PTReal=posture-fière+deux-pattes|Subj=PT
2	[VOULOIR]	[VOULOIR]	VERB	_	_	1	conj:chaining	_	AlignBegin=43595|AlignEnd=43809|Gloss=[WANT]|NMM=eye-blink|PT=cheval|PTReal=posture-fière|Subj=PT
3	PNT[MOI]	PNT	PRON	_	PronType=Prs	2	nsubj	_	AlignBegin=43809|AlignEnd=44035|Gloss=PNT[ME]|PT=cheval|PTReal=posture-fière|Tgt=Prs1
4	[sauter]	[sauter]	VERB	_	_	2	ccomp	_	AlignBegin=44035|AlignEnd=45235|Gloss=[jump]|NMM=eye-blink|PT=cheval|PTReal=posture-fière|ST=cheval-qui-saute|STReal=PRF(DH)[cheval]|Subj=PT

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 conj:chaining	color:blue
1	[tomber]	[tomber]	VERB	_	_	0	root	_	AlignBegin=48675|AlignEnd=49795|Gloss=[fall]|PT=cheval|PTReal=exp-douleur+deux-pattes|Subj=PT
2	[DOULEUR]	[DOULEUR]	NOUN	_	_	1	conj:chaining	_	AlignBegin=49795|AlignEnd=50515|Exp[lex]=Douleur|Gloss=[PAIN]|PT=cheval|PTReal=exp-douleur+deux-pattes
3	[gésir-sol]	[gésir-sol]	VERB	_	_	2	conj:chaining	_	AlignBegin=50515|AlignEnd=51995|Gloss=[lay-on-ground]|PT=cheval|PTReal=exp-douleur+deux-pattes|Subj=PT

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 3 conj:chaining	color:blue
1	[tomber]	[tomber]	VERB	_	_	0	root	_	AlignBegin=48675|AlignEnd=49795|Gloss=[fall]|PT=cheval|PTReal=exp-douleur+deux-pattes|Subj=PT
2	[DOULEUR]	[DOULEUR]	NOUN	_	_	1	conj:chaining	_	AlignBegin=49795|AlignEnd=50515|Exp[lex]=Douleur|Gloss=[PAIN]|PT=cheval|PTReal=exp-douleur+deux-pattes
3	[gésir-sol]	[gésir-sol]	VERB	_	_	2	conj:chaining	_	AlignBegin=50515|AlignEnd=51995|Gloss=[lay-on-ground]|PT=cheval|PTReal=exp-douleur+deux-pattes|Subj=PT

~~~


