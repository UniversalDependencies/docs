---
layout: base
title:  'Statistics of xcomp:obj in UD_Naija-NSC'
udver: '2'
---

## Treebank Statistics: UD_Naija-NSC: Relations: `xcomp:obj`

This relation is a language-specific subtype of .
There are also 2 other language-specific subtypes of `xcomp`: <tt><a href="pcm_nsc-dep-xcomp-obl.html">xcomp:obl</a></tt>, <tt><a href="pcm_nsc-dep-xcomp-pred.html">xcomp:pred</a></tt>.

1050 nodes (1%) are attached to their parents as `xcomp:obj`.

1050 instances of `xcomp:obj` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.4752380952381.

The following 11 pairs of parts of speech are connected with `xcomp:obj`: <tt><a href="pcm_nsc-pos-VERB.html">VERB</a></tt>-<tt><a href="pcm_nsc-pos-VERB.html">VERB</a></tt> (1013; 96% instances), <tt><a href="pcm_nsc-pos-VERB.html">VERB</a></tt>-<tt><a href="pcm_nsc-pos-NOUN.html">NOUN</a></tt> (16; 2% instances), <tt><a href="pcm_nsc-pos-VERB.html">VERB</a></tt>-<tt><a href="pcm_nsc-pos-ADJ.html">ADJ</a></tt> (10; 1% instances), <tt><a href="pcm_nsc-pos-VERB.html">VERB</a></tt>-<tt><a href="pcm_nsc-pos-ADP.html">ADP</a></tt> (3; 0% instances), <tt><a href="pcm_nsc-pos-VERB.html">VERB</a></tt>-<tt><a href="pcm_nsc-pos-PRON.html">PRON</a></tt> (2; 0% instances), <tt><a href="pcm_nsc-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pcm_nsc-pos-VERB.html">VERB</a></tt> (1; 0% instances), <tt><a href="pcm_nsc-pos-VERB.html">VERB</a></tt>-<tt><a href="pcm_nsc-pos-ADV.html">ADV</a></tt> (1; 0% instances), <tt><a href="pcm_nsc-pos-VERB.html">VERB</a></tt>-<tt><a href="pcm_nsc-pos-AUX.html">AUX</a></tt> (1; 0% instances), <tt><a href="pcm_nsc-pos-VERB.html">VERB</a></tt>-<tt><a href="pcm_nsc-pos-NUM.html">NUM</a></tt> (1; 0% instances), <tt><a href="pcm_nsc-pos-VERB.html">VERB</a></tt>-<tt><a href="pcm_nsc-pos-PROPN.html">PROPN</a></tt> (1; 0% instances), <tt><a href="pcm_nsc-pos-VERB.html">VERB</a></tt>-<tt><a href="pcm_nsc-pos-X.html">X</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 5 xcomp:obj	color:blue
1	#	#	X	_	_	4	dep	_	AlignBegin=10145|AlignEnd=10516|Gloss=PUNCT
2	sey	sey	SCONJ	_	_	4	discourse	_	AlignBegin=10516|AlignEnd=10640|Gloss=COMP
3	e	im	PRON	_	Case=Nom|Number=Sing|Person=3|PronType=Prs	4	nsubj	_	AlignBegin=10640|AlignEnd=10679|Gloss=NOM.SG.3
4	wan	want	VERB	_	_	0	root	_	AlignBegin=10679|AlignEnd=10850|Gloss=want
5	carry	carry	VERB	_	_	4	xcomp:obj	_	AlignBegin=10850|AlignEnd=11170|Gloss=carry
6	me	me	PRON	_	Case=Acc|Number=Sing|Person=1|PronType=Prs	5	obj	_	AlignBegin=11170|AlignEnd=11370|Gloss=ACC.SG.1
7	go	go	VERB	_	_	5	compound:svc	_	AlignBegin=11370|AlignEnd=11503|Gloss=go
8	meh	make	AUX	_	Mood=Opt	10	aux	_	AlignBegin=11533|AlignEnd=11710|Gloss=SBJV
9	e	im	PRON	_	Case=Nom|Number=Sing|Person=3|PronType=Prs	10	nsubj	_	AlignBegin=11710|AlignEnd=11770|Gloss=NOM.SG.3
10	go	go	VERB	_	_	5	advcl	_	AlignBegin=11770|AlignEnd=12120|Gloss=go
11	train	train	VERB	_	_	10	xcomp:obj	_	AlignBegin=12120|AlignEnd=12430|Gloss=train
12	me	me	PRON	_	Case=Acc|Number=Sing|Person=1|PronType=Prs	11	obj	_	AlignBegin=12430|AlignEnd=12550|Gloss=ACC.SG.1
13	//	//	X	_	_	5	dep	_	AlignBegin=12550|AlignEnd=12580|Gloss=PUNCT

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 4 xcomp:obj	color:blue
1	#	#	X	_	_	3	dep	_	AlignBegin=471762|AlignEnd=472385|Gloss=PUNCT
2	con	con	AUX	_	Aspect=Cons	3	aux	_	AlignBegin=472385|AlignEnd=472564|Gloss=CONS
3	go	go	VERB	_	_	0	root	_	AlignBegin=472564|AlignEnd=472714|Gloss=go
4	register	register	NOUN	_	_	3	xcomp:obj	_	AlignBegin=472714|AlignEnd=473201|Gloss=register
5	//	//	X	_	_	3	dep	_	AlignBegin=473201|AlignEnd=473230|Gloss=PUNCT

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 9 xcomp:obj	color:blue
1	#	#	X	_	_	7	dep	_	AlignBegin=22680|AlignEnd=23040|Gloss=PUNCT
2	and	and	CCONJ	_	_	7	discourse	_	AlignBegin=23040|AlignEnd=23160|Gloss=and
3	me	me	PRON	_	Case=Nom|Number=Sing|Person=1|PronType=Prs	7	dislocated	_	AlignBegin=23160|AlignEnd=23220|Gloss=NOM.SG.1
4	I	I	PRON	_	Case=Nom|Number=Sing|Person=1|PronType=Prs	7	nsubj	_	AlignBegin=23220|AlignEnd=23350|Gloss=NOM.SG.1
5	no	no	PART	_	Polarity=Neg	7	advmod	_	AlignBegin=23350|AlignEnd=23520|Gloss=NEG
6	fit	fit	AUX	_	Mood=Pot	7	aux	_	AlignBegin=23520|AlignEnd=23673|Gloss=ABIL
7	siddon	siddon	VERB	_	_	0	root	_	AlignBegin=23673|AlignEnd=24093|Gloss=sit_down
8	#	#	X	_	_	9	dep	_	AlignBegin=24093|AlignEnd=24412|Gloss=PUNCT
9	idle	idle	ADJ	_	_	7	xcomp:obj	_	AlignBegin=24412|AlignEnd=24830|Gloss=idle
10	//	//	X	_	_	7	dep	_	AlignBegin=24830|AlignEnd=24860|Gloss=PUNCT

~~~


