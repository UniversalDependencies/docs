---
layout: base
title:  'Statistics of obj:lvc in UD_Naija-NSC'
udver: '2'
---

## Treebank Statistics: UD_Naija-NSC: Relations: `obj:lvc`

This relation is a language-specific subtype of <tt><a href="pcm_nsc-dep-obj.html">obj</a></tt>.
There are also 1 other language-specific subtypes of `obj`: <tt><a href="pcm_nsc-dep-obj-agent.html">obj:agent</a></tt>.

96 nodes (0%) are attached to their parents as `obj:lvc`.

96 instances of `obj:lvc` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.66666666666667.

The following 5 pairs of parts of speech are connected with `obj:lvc`: <tt><a href="pcm_nsc-pos-VERB.html">VERB</a></tt>-<tt><a href="pcm_nsc-pos-NOUN.html">NOUN</a></tt> (67; 70% instances), <tt><a href="pcm_nsc-pos-VERB.html">VERB</a></tt>-<tt><a href="pcm_nsc-pos-ADJ.html">ADJ</a></tt> (25; 26% instances), <tt><a href="pcm_nsc-pos-VERB.html">VERB</a></tt>-<tt><a href="pcm_nsc-pos-PROPN.html">PROPN</a></tt> (2; 2% instances), <tt><a href="pcm_nsc-pos-VERB.html">VERB</a></tt>-<tt><a href="pcm_nsc-pos-VERB.html">VERB</a></tt> (1; 1% instances), <tt><a href="pcm_nsc-pos-X.html">X</a></tt>-<tt><a href="pcm_nsc-pos-ADJ.html">ADJ</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 8 obj:lvc	color:blue
1	#	#	PUNCT	_	_	3	punct	_	AlignBegin=64011|AlignEnd=64514|Gloss=PUNCT
2	dey	dey	AUX	_	Aspect=Imp	3	aux	_	AlignBegin=64514|AlignEnd=64584|Gloss=IPFV
3	use	use	VERB	_	_	0	root	_	AlignBegin=64584|AlignEnd=64774|Gloss=use
4	am	am	PRON	_	Case=Acc|Number=Sing|Person=3|PronType=Prs	3	obj	_	AlignBegin=64774|AlignEnd=64944|Gloss=ACC.SG.3
5	//=	//=	PUNCT	_	_	7	punct	_	AlignBegin=64944|AlignEnd=64974|Gloss=PUNCT
6	dey	dey	AUX	_	Aspect=Imp	7	aux	_	AlignBegin=64974|AlignEnd=65064|Gloss=IPFV
7	take	take	VERB	_	_	3	parataxis:conj	_	AlignBegin=65064|AlignEnd=65264|Gloss=take
8	care	care	NOUN	_	_	7	obj:lvc	_	AlignBegin=65264|AlignEnd=65464|Gloss=care
9	of	of	ADP	_	_	10	case	_	AlignBegin=65464|AlignEnd=65644|Gloss=of
10	ourself	oursef	PRON	_	Case=Acc|Number=Plur|Person=1|PronType=Prs|Reflex=Yes	7	obl:arg	_	AlignBegin=65644|AlignEnd=66002|Gloss=ACC.PL.1.REFL
11	//	//	PUNCT	_	_	3	punct	_	AlignBegin=66002|AlignEnd=66032|Gloss=PUNCT

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 4 obj:lvc	color:blue
1	#	#	PUNCT	_	_	2	punct	_	AlignBegin=338162|AlignEnd=338386|Gloss=PUNCT
2	make	make	VERB	_	_	0	root	_	AlignBegin=338386|AlignEnd=338625|Gloss=make
3	yoursef	yoursef	PRON	_	Case=Acc|Person=2|PronType=Prs|Reflex=Yes	2	obj	_	AlignBegin=338625|AlignEnd=338895|Gloss=ACC.2.REFL
4	comfortable	comfortable	ADJ	_	_	2	obj:lvc	_	AlignBegin=338895|AlignEnd=339435|Gloss=comfortable
5	o	o	PART	_	PartType=Disc	4	advmod:emph	_	AlignBegin=339435|AlignEnd=339635|Gloss=EMPH
6	//	//	PUNCT	_	_	2	punct	_	AlignBegin=339635|AlignEnd=339665|Gloss=PUNCT

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 5 obj:lvc	color:blue
1	we	we	PRON	_	Case=Nom|Number=Plur|Person=1|PronType=Prs	3	nsubj	_	AlignBegin=235217|AlignEnd=235300|Gloss=NOM.PL.1
2	dey	dey	AUX	_	Aspect=Imp	3	aux	_	AlignBegin=235300|AlignEnd=235390|Gloss=IPFV
3	call	call	VERB	_	_	0	root	_	AlignBegin=235390|AlignEnd=235600|Gloss=call
4	am	am	PRON	_	Case=Acc|Number=Sing|Person=3|PronType=Prs	3	obj	_	AlignBegin=235600|AlignEnd=235660|Gloss=ACC.SG.3
5	Pus	Pus	PROPN	_	_	3	obj:lvc	_	AlignBegin=235690|AlignEnd=236060|Gloss=Pus
6	Cat	Cat	PROPN	_	_	5	flat	_	AlignBegin=236060|AlignEnd=236530|Gloss=Cat
7	//	//	PUNCT	_	_	3	punct	_	AlignBegin=236530|AlignEnd=236560|Gloss=PUNCT

~~~


