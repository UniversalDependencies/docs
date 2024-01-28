---
layout: base
title:  'Statistics of advcl:relcl in UD_English-GUM'
udver: '2'
---

## Treebank Statistics: UD_English-GUM: Relations: `advcl:relcl`

This relation is a language-specific subtype of <tt><a href="en_gum-dep-advcl.html">advcl</a></tt>.

222 nodes (0%) are attached to their parents as `advcl:relcl`.

222 instances of `advcl:relcl` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 4.53603603603604.

The following 15 pairs of parts of speech are connected with `advcl:relcl`: <tt><a href="en_gum-pos-ADV.html">ADV</a></tt>-<tt><a href="en_gum-pos-VERB.html">VERB</a></tt> (140; 63% instances), <tt><a href="en_gum-pos-VERB.html">VERB</a></tt>-<tt><a href="en_gum-pos-VERB.html">VERB</a></tt> (24; 11% instances), <tt><a href="en_gum-pos-ADV.html">ADV</a></tt>-<tt><a href="en_gum-pos-AUX.html">AUX</a></tt> (13; 6% instances), <tt><a href="en_gum-pos-VERB.html">VERB</a></tt>-<tt><a href="en_gum-pos-ADJ.html">ADJ</a></tt> (9; 4% instances), <tt><a href="en_gum-pos-ADJ.html">ADJ</a></tt>-<tt><a href="en_gum-pos-AUX.html">AUX</a></tt> (8; 4% instances), <tt><a href="en_gum-pos-ADV.html">ADV</a></tt>-<tt><a href="en_gum-pos-ADJ.html">ADJ</a></tt> (7; 3% instances), <tt><a href="en_gum-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_gum-pos-VERB.html">VERB</a></tt> (5; 2% instances), <tt><a href="en_gum-pos-ADJ.html">ADJ</a></tt>-<tt><a href="en_gum-pos-VERB.html">VERB</a></tt> (4; 2% instances), <tt><a href="en_gum-pos-ADV.html">ADV</a></tt>-<tt><a href="en_gum-pos-ADP.html">ADP</a></tt> (3; 1% instances), <tt><a href="en_gum-pos-ADV.html">ADV</a></tt>-<tt><a href="en_gum-pos-NOUN.html">NOUN</a></tt> (2; 1% instances), <tt><a href="en_gum-pos-VERB.html">VERB</a></tt>-<tt><a href="en_gum-pos-AUX.html">AUX</a></tt> (2; 1% instances), <tt><a href="en_gum-pos-VERB.html">VERB</a></tt>-<tt><a href="en_gum-pos-NOUN.html">NOUN</a></tt> (2; 1% instances), <tt><a href="en_gum-pos-PROPN.html">PROPN</a></tt>-<tt><a href="en_gum-pos-VERB.html">VERB</a></tt> (1; 0% instances), <tt><a href="en_gum-pos-VERB.html">VERB</a></tt>-<tt><a href="en_gum-pos-NUM.html">NUM</a></tt> (1; 0% instances), <tt><a href="en_gum-pos-VERB.html">VERB</a></tt>-<tt><a href="en_gum-pos-PRON.html">PRON</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 5 advcl:relcl	color:blue
1	I	I	PRON	PRP	Case=Nom|Number=Sing|Person=1|PronType=Prs	2	nsubj	2:nsubj	Discourse=attribution-positive:65->66:0:sem-atsrc-344+lex-indwd-345|Entity=(10-person-giv:inact-cf1-1-ana)
2	know	know	VERB	VBP	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	0	root	0:root	_
3	how	how	ADV	WRB	PronType=Rel	2	obj	2:obj	Discourse=evaluation-comment:66->64:0:_
4	that	that	PRON	DT	Number=Sing|PronType=Dem	5	nsubj	5:nsubj	_
5	works	work	VERB	VBZ	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	3	advcl:relcl	3:advcl:relcl	MSeg=work-s|SpaceAfter=No
6	.	.	PUNCT	.	_	2	punct	2:punct	_

~~~


~~~ conllu
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 12 advcl:relcl	color:blue
1	Some	some	DET	DT	PronType=Ind	2	det	2:det	Discourse=joint-other_m:83->82:0:_|Entity=(195-place-new-cf2-2-sgl
2	countries	country	NOUN	NNS	Number=Plur	5	nsubj	5:nsubj	Entity=195)|MSeg=countrie-s
3	have	have	AUX	VBP	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	5	aux	5:aux	_
4	recently	recently	ADV	RB	Degree=Pos	5	advmod	5:advmod	MSeg=recent-ly
5	adopted	adopt	VERB	VBN	Tense=Past|VerbForm=Part	0	root	0:root|12:ccomp	MSeg=ad-opt-ed
6	a	a	DET	DT	Definite=Ind|PronType=Art	8	det	8:det	Entity=(196-abstract-new-cf3-3-sgl
7	similar	similar	ADJ	JJ	Degree=Pos	8	amod	8:amod	_
8	course	course	NOUN	NN	Number=Sing	5	obj	5:obj	Entity=196)|SpaceAfter=No
9	,	,	PUNCT	,	_	12	punct	12:punct	_
10	which	which	PRON	WDT	PronType=Rel	12	obj	5:ref|12:obj	Discourse=evaluation-comment:84->83:0:lex-indwd-914
11	we	we	PRON	PRP	Case=Nom|Number=Plur|Person=1|PronType=Prs	12	nsubj	12:nsubj	Entity=(27-person-giv:inact-cf1-1-ana)
12	welcome	welcome	VERB	VBP	Mood=Ind|Number=Plur|Person=1|Tense=Pres|VerbForm=Fin	5	advcl:relcl	5:advcl:relcl	SpaceAfter=No
13	.	.	PUNCT	.	_	5	punct	5:punct	_

~~~


~~~ conllu
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 12 14 advcl:relcl	color:blue
1	No	no	INTJ	UH	Polarity=Neg	5	discourse	5:discourse	Discourse=restatement-repetition_m:150->148:0:sem-synym-828,843-854+sem-lxchn-839,845|SpaceAfter=No
2	,	,	PUNCT	,	_	1	punct	1:punct	_
3	a	a	DET	DT	Definite=Ind|PronType=Art	5	det	5:det	Entity=(80-person-giv:act-cf1*-3-coref
4	random	random	ADJ	JJ	Degree=Pos	5	amod	5:amod	_
5	guy	guy	NOUN	NN	Number=Sing	0	root	0:root|10:obl	SpaceAfter=No
6	,	,	PUNCT	,	_	10	punct	10:punct	_
7	who	who	PRON	WP	PronType=Rel	10	nsubj	5:ref	Discourse=elaboration-attribute:151->150:0:syn-mdf-845+syn-relcl-847,850,852,854
8	was	be	AUX	VBD	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	10	aux	10:aux	_
9	like	like	INTJ	UH	_	10	discourse	10:discourse	_
10	sitting	sit	VERB	VBG	Tense=Pres|VerbForm=Part	5	acl:relcl	5:acl:relcl	MSeg=sitt-ing
11	about	about	ADV	RB	_	12	advmod	12:advmod	Discourse=context-circumstance:152->151:0:_
12	where	where	ADV	WRB	PronType=Rel	10	advmod	5:ref|10:advmod	Entity=(81-place-acc:com-cf3-1-coref
13	you	you	PRON	PRP	Case=Nom|Number=Plur|Person=2|PronType=Prs	14	nsubj	14:nsubj	Entity=(33-person-giv:inact-cf2-1-ana)
14	are	be	AUX	VBP	Mood=Ind|Number=Plur|Person=2|Tense=Pres|VerbForm=Fin	12	advcl:relcl	12:advcl:relcl	Entity=81)80)|SpaceAfter=No
15	.	.	PUNCT	.	_	5	punct	5:punct	_

~~~


