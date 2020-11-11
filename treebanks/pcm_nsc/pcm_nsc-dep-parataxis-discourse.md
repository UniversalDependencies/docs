---
layout: base
title:  'Statistics of parataxis:discourse in UD_Naija-NSC'
udver: '2'
---

## Treebank Statistics: UD_Naija-NSC: Relations: `parataxis:discourse`

This relation is a language-specific subtype of <tt><a href="pcm_nsc-dep-parataxis.html">parataxis</a></tt>.
There are also 4 other language-specific subtypes of `parataxis`: <tt><a href="pcm_nsc-dep-parataxis-conj.html">parataxis:conj</a></tt>, <tt><a href="pcm_nsc-dep-parataxis-dislocated.html">parataxis:dislocated</a></tt>, <tt><a href="pcm_nsc-dep-parataxis-insert.html">parataxis:insert</a></tt>, <tt><a href="pcm_nsc-dep-parataxis-parenth.html">parataxis:parenth</a></tt>.

152 nodes (0%) are attached to their parents as `parataxis:discourse`.

124 instances of `parataxis:discourse` (82%) are right-to-left (child precedes parent).
Average distance between parent and child is 8.57894736842105.

The following 18 pairs of parts of speech are connected with `parataxis:discourse`: <tt><a href="pcm_nsc-pos-VERB.html">VERB</a></tt>-<tt><a href="pcm_nsc-pos-VERB.html">VERB</a></tt> (103; 68% instances), <tt><a href="pcm_nsc-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pcm_nsc-pos-VERB.html">VERB</a></tt> (17; 11% instances), <tt><a href="pcm_nsc-pos-AUX.html">AUX</a></tt>-<tt><a href="pcm_nsc-pos-VERB.html">VERB</a></tt> (7; 5% instances), <tt><a href="pcm_nsc-pos-ADJ.html">ADJ</a></tt>-<tt><a href="pcm_nsc-pos-VERB.html">VERB</a></tt> (4; 3% instances), <tt><a href="pcm_nsc-pos-ADV.html">ADV</a></tt>-<tt><a href="pcm_nsc-pos-VERB.html">VERB</a></tt> (4; 3% instances), <tt><a href="pcm_nsc-pos-PROPN.html">PROPN</a></tt>-<tt><a href="pcm_nsc-pos-VERB.html">VERB</a></tt> (3; 2% instances), <tt><a href="pcm_nsc-pos-VERB.html">VERB</a></tt>-<tt><a href="pcm_nsc-pos-NOUN.html">NOUN</a></tt> (3; 2% instances), <tt><a href="pcm_nsc-pos-ADP.html">ADP</a></tt>-<tt><a href="pcm_nsc-pos-VERB.html">VERB</a></tt> (1; 1% instances), <tt><a href="pcm_nsc-pos-DET.html">DET</a></tt>-<tt><a href="pcm_nsc-pos-VERB.html">VERB</a></tt> (1; 1% instances), <tt><a href="pcm_nsc-pos-INTJ.html">INTJ</a></tt>-<tt><a href="pcm_nsc-pos-VERB.html">VERB</a></tt> (1; 1% instances), <tt><a href="pcm_nsc-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pcm_nsc-pos-ADV.html">ADV</a></tt> (1; 1% instances), <tt><a href="pcm_nsc-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pcm_nsc-pos-NOUN.html">NOUN</a></tt> (1; 1% instances), <tt><a href="pcm_nsc-pos-NUM.html">NUM</a></tt>-<tt><a href="pcm_nsc-pos-VERB.html">VERB</a></tt> (1; 1% instances), <tt><a href="pcm_nsc-pos-VERB.html">VERB</a></tt>-<tt><a href="pcm_nsc-pos-ADJ.html">ADJ</a></tt> (1; 1% instances), <tt><a href="pcm_nsc-pos-VERB.html">VERB</a></tt>-<tt><a href="pcm_nsc-pos-INTJ.html">INTJ</a></tt> (1; 1% instances), <tt><a href="pcm_nsc-pos-VERB.html">VERB</a></tt>-<tt><a href="pcm_nsc-pos-PRON.html">PRON</a></tt> (1; 1% instances), <tt><a href="pcm_nsc-pos-VERB.html">VERB</a></tt>-<tt><a href="pcm_nsc-pos-SCONJ.html">SCONJ</a></tt> (1; 1% instances), <tt><a href="pcm_nsc-pos-X.html">X</a></tt>-<tt><a href="pcm_nsc-pos-VERB.html">VERB</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 9 parataxis:discourse	color:blue
1	everybody	everybody	PRON	_	_	3	nsubj	_	AlignBegin=124480|AlignEnd=124910|Gloss=everybody
2	dey	dey	AUX	_	Aspect=Imp	3	aux	_	AlignBegin=124910|AlignEnd=125050|Gloss=IPFV
3	bubble	bubble	VERB	_	_	0	root	_	AlignBegin=125050|AlignEnd=125370|Gloss=bubble
4	|c	|c	X	_	_	6	dep	_	AlignBegin=125370|AlignEnd=125400|Gloss=PUNCT
5	dey	dey	AUX	_	Aspect=Imp	6	aux	_	AlignBegin=125400|AlignEnd=125549|Gloss=IPFV
6	shuffle	shuffle	VERB	_	_	3	conj	_	AlignBegin=125549|AlignEnd=126070|Gloss=shuffle
7	>	>	X	_	_	9	dep	_	AlignBegin=125549|AlignEnd=126070|Gloss=PUNCT
8	you	you	PRON	_	Case=Nom|Person=2|PronType=Prs	9	nsubj	_	AlignBegin=126100|AlignEnd=126160|Gloss=NOM.2
9	know	know	VERB	_	_	3	parataxis:discourse	_	AlignBegin=126160|AlignEnd=126390|Gloss=know
10	//	//	X	_	_	3	dep	_	AlignBegin=126390|AlignEnd=126420|Gloss=PUNCT

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 3 parataxis:discourse	color:blue
1	#	#	X	_	_	9	dep	_	AlignBegin=110015|AlignEnd=110320|Gloss=PUNCT
2	you	you	PRON	_	Case=Nom|Person=2|PronType=Prs	3	nsubj	_	AlignBegin=110320|AlignEnd=110390|Gloss=NOM.2
3	know	know	VERB	_	_	9	parataxis:discourse	_	AlignBegin=110390|AlignEnd=110460|Gloss=know
4	base	base	VERB	_	_	9	case	_	AlignBegin=110460|AlignEnd=110670|ExtPos=ADP|Gloss=base|PhraseType=Idiom
5	on	on	ADP	_	_	4	fixed	_	AlignBegin=110670|AlignEnd=110780|Gloss=on
6	my	my	PRON	_	Number=Sing|Person=1|Poss=Yes	9	nmod:poss	_	AlignBegin=110780|AlignEnd=111220|Gloss=SG.1.POSS
7	secondary	secondary	ADJ	_	_	8	amod	_	AlignBegin=111220|AlignEnd=111600|Gloss=secondary
8	school	school	NOUN	_	_	9	compound	_	AlignBegin=111600|AlignEnd=111760|Gloss=school
9	experience	experience	NOUN	_	_	0	root	_	AlignBegin=111760|AlignEnd=112200|Gloss=experience
10	//	//	X	_	_	9	dep	_	AlignBegin=112200|AlignEnd=112230|Gloss=PUNCT

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 3 parataxis:discourse	color:blue
1	#	#	X	_	_	8	dep	_	AlignBegin=72638|AlignEnd=73219|Gloss=PUNCT
2	you	you	PRON	_	Case=Nom|Person=2|PronType=Prs	3	nsubj	_	AlignBegin=73219|AlignEnd=73319|Gloss=NOM.2
3	know	know	VERB	_	_	8	parataxis:discourse	_	AlignBegin=73319|AlignEnd=73640|Gloss=know
4	so	so	ADV	_	_	8	discourse	_	AlignBegin=73670|AlignEnd=74080|Gloss=so
5	<	<	X	_	_	4	dep	_	AlignBegin=74080|AlignEnd=74110|Gloss=PUNCT
6	#	#	X	_	_	4	dep	_	AlignBegin=74110|AlignEnd=74670|Gloss=PUNCT
7	I	I	PRON	_	Case=Nom|Number=Sing|Person=1|PronType=Prs	8	nsubj	_	AlignBegin=74670|AlignEnd=74790|Gloss=NOM.SG.1
8	con	con	AUX	_	Aspect=Cons	0	root	_	AlignBegin=74790|AlignEnd=75270|Gloss=CONS
9	&//	&//	X	_	_	8	dep	_	AlignBegin=75270|AlignEnd=75300|Gloss=PUNCT

~~~


