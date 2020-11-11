---
layout: base
title:  'Statistics of obj:lvc in UD_Naija-NSC'
udver: '2'
---

## Treebank Statistics: UD_Naija-NSC: Relations: `obj:lvc`

This relation is a language-specific subtype of <tt><a href="pcm_nsc-dep-obj.html">obj</a></tt>.

113 nodes (0%) are attached to their parents as `obj:lvc`.

113 instances of `obj:lvc` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.56637168141593.

The following 5 pairs of parts of speech are connected with `obj:lvc`: <tt><a href="pcm_nsc-pos-VERB.html">VERB</a></tt>-<tt><a href="pcm_nsc-pos-NOUN.html">NOUN</a></tt> (83; 73% instances), <tt><a href="pcm_nsc-pos-VERB.html">VERB</a></tt>-<tt><a href="pcm_nsc-pos-ADJ.html">ADJ</a></tt> (26; 23% instances), <tt><a href="pcm_nsc-pos-VERB.html">VERB</a></tt>-<tt><a href="pcm_nsc-pos-VERB.html">VERB</a></tt> (2; 2% instances), <tt><a href="pcm_nsc-pos-VERB.html">VERB</a></tt>-<tt><a href="pcm_nsc-pos-PROPN.html">PROPN</a></tt> (1; 1% instances), <tt><a href="pcm_nsc-pos-X.html">X</a></tt>-<tt><a href="pcm_nsc-pos-ADJ.html">ADJ</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 8 obj:lvc	color:blue
1	#	#	X	_	_	3	dep	_	AlignBegin=64011|AlignEnd=64514|Gloss=PUNCT
2	dey	dey	AUX	_	Aspect=Imp	3	aux	_	AlignBegin=64514|AlignEnd=64584|Gloss=IPFV
3	use	use	VERB	_	_	0	root	_	AlignBegin=64584|AlignEnd=64774|Gloss=use
4	am	am	PRON	_	Case=Acc|Number=Sing|Person=3|PronType=Prs	3	obj	_	AlignBegin=64774|AlignEnd=64944|Gloss=ACC.SG.3
5	//=	//=	X	_	_	7	dep	_	AlignBegin=64944|AlignEnd=64974|Gloss=PUNCT
6	dey	dey	AUX	_	Aspect=Imp	7	aux	_	AlignBegin=64974|AlignEnd=65064|Gloss=IPFV
7	take	take	VERB	_	_	3	parataxis:conj	_	AlignBegin=65064|AlignEnd=65264|Gloss=take
8	care	care	NOUN	_	_	7	obj:lvc	_	AlignBegin=65264|AlignEnd=65464|Gloss=care
9	of	of	ADP	_	_	10	case	_	AlignBegin=65464|AlignEnd=65644|Gloss=of
10	ourself	oursef	PRON	_	Case=Acc|Number=Plur|Person=1|PronType=Prs|Reflex=Yes	7	obl:arg	_	AlignBegin=65644|AlignEnd=66002|Gloss=ACC.PL.1.REFL
11	//	//	X	_	_	3	dep	_	AlignBegin=66002|AlignEnd=66032|Gloss=PUNCT

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 4 obj:lvc	color:blue
1	#	#	X	_	_	2	dep	_	AlignBegin=338162|AlignEnd=338386|Gloss=PUNCT
2	make	make	VERB	_	_	0	root	_	AlignBegin=338386|AlignEnd=338625|Gloss=make
3	yoursef	yoursef	PRON	_	Case=Acc|Person=2|PronType=Prs|Reflex=Yes	2	obj	_	AlignBegin=338625|AlignEnd=338895|Gloss=ACC.2.REFL
4	comfortable	comfortable	ADJ	_	_	2	obj:lvc	_	AlignBegin=338895|AlignEnd=339435|Gloss=comfortable
5	o	o	PART	_	PartType=Disc	4	advmod:emph	_	AlignBegin=339435|AlignEnd=339635|Gloss=EMPH
6	//	//	X	_	_	2	dep	_	AlignBegin=339635|AlignEnd=339665|Gloss=PUNCT

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 10 obj:lvc	color:blue
1	to	to	ADP	_	_	2	case	_	AlignBegin=62052|AlignEnd=62403|Gloss=to
2	me	me	PRON	_	Case=Acc|Number=Sing|Person=1|PronType=Prs	7	obl:mod	_	AlignBegin=62403|AlignEnd=62754|Gloss=ACC.SG.1
3	ma	ma	PART	_	PartType=Disc	2	advmod:emph	_	AlignBegin=62754|AlignEnd=63106|Gloss=FOC
4	<	<	X	_	_	2	dep	_	AlignBegin=63106|AlignEnd=63106|Gloss=PUNCT
5	I	I	PRON	_	Case=Nom|Number=Sing|Person=1|PronType=Prs	7	nsubj	_	AlignBegin=63106|AlignEnd=63457|Gloss=NOM.SG.1
6	no	no	PART	_	Polarity=Neg	7	advmod	_	AlignBegin=63457|AlignEnd=63808|Gloss=NEG
7	ready	ready	ADJ	_	_	0	root	_	AlignBegin=63808|AlignEnd=64159|Gloss=ready
8	to	to	ADP	_	_	9	mark	_	AlignBegin=64159|AlignEnd=64510|Gloss=to
9	do	do	VERB	_	_	7	xcomp:obl	_	AlignBegin=64510|AlignEnd=64862|Gloss=do
10	falla	follow	VERB	_	_	9	obj:lvc	_	AlignBegin=64862|AlignEnd=65213|Gloss=follow
11	follow	follow	VERB	_	_	10	compound:svc	_	AlignBegin=65213|AlignEnd=65564|Gloss=follow
12	//	//	X	_	_	7	dep	_	AlignBegin=65564|AlignEnd=65564|Gloss=PUNCT

~~~


